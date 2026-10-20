/**
 * Uploads every image referenced by content/assets.json to the TracTrac media API
 * and records the public URL of each upload in content/uploaded-assets.json.
 *
 * Resumable: entries already in the state file are skipped, so re-running after an
 * interruption continues where it stopped. Use --force to upload everything again.
 *
 * Run with: node scripts/upload-images.mjs [--force] [--verify-only]
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = process.cwd();
const manifestPath = path.join(root, "content", "assets.json");
const statePath = path.join(root, "content", "uploaded-assets.json");
const endpoint = "https://api.tractrac.co/api/v1/uploads/images";
const folder = "images";
// Same settings as the documented curl example: store originals untouched.
const settings = {
  folder,
  optimize: "false",
  quality: "high",
  generate_thumbnail: "false",
  preserve_format: "true",
};
const imageExt = /\.(?:jpe?g|png|webp|avif|gif|svg|bmp)$/i;
const mime = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".bmp": "image/bmp",
  ".avif": "image/avif",
};
const force = process.argv.includes("--force");
const verifyOnly = process.argv.includes("--verify-only");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function readJson(file, fallback) {
  try {
    return JSON.parse(await fs.readFile(file, "utf8"));
  } catch {
    return fallback;
  }
}

async function saveState(state) {
  const tmp = `${statePath}.tmp`;
  await fs.writeFile(tmp, `${JSON.stringify(state, null, 2)}\n`);
  await fs.rename(tmp, statePath);
}

async function upload(localFile, fileName) {
  const ext = path.extname(fileName).toLowerCase();
  const body = new FormData();
  const bytes = await fs.readFile(localFile);
  body.append("file", new Blob([bytes], { type: mime[ext] ?? "application/octet-stream" }), fileName);
  for (const [key, value] of Object.entries(settings)) body.append(key, value);

  const res = await fetch(endpoint, {
    method: "POST",
    body,
    signal: AbortSignal.timeout(180_000),
  });
  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    json = null;
  }
  if (!res.ok || !json?.url) {
    throw new Error(`HTTP ${res.status}: ${text.slice(0, 300)}`);
  }
  return json;
}

async function verify(url) {
  try {
    let res = await fetch(url, { method: "HEAD", signal: AbortSignal.timeout(30_000) });
    if (res.status === 405 || res.status === 501) {
      res = await fetch(url, {
        headers: { Range: "bytes=0-0" },
        signal: AbortSignal.timeout(30_000),
      });
    }
    return res.ok || res.status === 206;
  } catch {
    return false;
  }
}

async function main() {
  const manifest = await readJson(manifestPath, null);
  if (!manifest) throw new Error(`cannot read ${manifestPath}`);

  const state = await readJson(statePath, {
    endpoint,
    settings,
    assets: {},
  });
  state.endpoint ??= endpoint;
  state.settings ??= settings;
  state.assets ??= {};

  const entries = [];
  for (const [key, publicUrl] of Object.entries(manifest)) {
    if (!imageExt.test(publicUrl)) continue;
    const localFile = path.join(root, "public", publicUrl);
    try {
      await fs.access(localFile);
    } catch {
      console.warn(`missing file, skipped: ${publicUrl}`);
      continue;
    }
    entries.push({ key, publicUrl, localFile });
  }

  const pending = entries.filter(({ key }) => {
    const prev = state.assets[key];
    return force || !prev?.remote;
  });

  console.log(
    `${entries.length} images · ${pending.length} to upload · ${entries.length - pending.length} already done`,
  );

  let uploaded = 0;
  let failed = 0;

  for (const [index, entry] of pending.entries()) {
    const label = `[${index + 1}/${pending.length}]`;
    if (verifyOnly) continue;
    const bytes = await fs.readFile(entry.localFile);
    const fileName = path.basename(entry.localFile);
    let result = null;
    let error = null;

    for (let attempt = 1; attempt <= 4; attempt += 1) {
      try {
        result = await upload(entry.localFile, fileName);
        break;
      } catch (err) {
        error = err;
        if (attempt < 4) await sleep(attempt * 2000);
      }
    }

    if (!result) {
      failed += 1;
      console.log(`${label} FAILED ${entry.publicUrl} :: ${error?.message ?? error}`);
      continue;
    }

    const ok = await verify(result.url);
    state.assets[entry.key] = {
      local: entry.publicUrl,
      remote: result.url,
      filename: result.filename ?? fileName,
      bytes: bytes.length,
      sha256: crypto.createHash("sha256").update(bytes).digest("hex"),
      uploadedAt: new Date().toISOString(),
      verified: ok,
    };
    await saveState(state);
    uploaded += 1;
    console.log(
      `${label} ok ${ok ? "" : "(unverified) "}${entry.publicUrl} -> ${result.url}`,
    );
    await sleep(150);
  }

  if (verifyOnly) {
    const done = entries.filter(({ key }) => state.assets[key]?.remote);
    console.log(`verifying ${done.length} existing URLs`);
    for (const { key } of done) {
      const entry = state.assets[key];
      entry.verified = await verify(entry.remote);
      if (!entry.verified) console.log(`UNVERIFIED ${entry.remote}`);
    }
    await saveState(state);
  }

  const total = Object.values(state.assets).filter((a) => a.remote).length;
  console.log(`done · uploaded ${uploaded} · failed ${failed} · total mapped ${total}/${entries.length}`);
  if (failed) process.exitCode = 2;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
