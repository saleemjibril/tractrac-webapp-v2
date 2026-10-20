/**
 * Uploads every video referenced by content/assets.json to the TracTrac media API
 * and records the public URL of each upload in content/uploaded-videos.json.
 *
 * Resumable: entries already in the state file are skipped. Use --force to re-upload.
 *
 * Run with: node scripts/upload-videos.mjs [--force] [--verify-only]
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = process.cwd();
const manifestPath = path.join(root, "content", "assets.json");
const statePath = path.join(root, "content", "uploaded-videos.json");
const endpoint = "https://api.tractrac.co/api/v1/uploads/videos";
const folder = "videos";
const videoExt = /\.(?:mp4|webm|mov|m4v|avi|mkv|wmv|flv)$/i;
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
  const body = new FormData();
  const bytes = await fs.readFile(localFile);
  body.append("file", new Blob([bytes], { type: "video/mp4" }), fileName);
  body.append("folder", folder);

  const res = await fetch(endpoint, {
    method: "POST",
    body,
    signal: AbortSignal.timeout(600_000),
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
    const res = await fetch(url, {
      headers: { Range: "bytes=0-0" },
      signal: AbortSignal.timeout(30_000),
    });
    return (res.ok || res.status === 206) && res.headers.get("content-type")?.startsWith("video/");
  } catch {
    return false;
  }
}

async function main() {
  const manifest = await readJson(manifestPath, null);
  if (!manifest) throw new Error(`cannot read ${manifestPath}`);

  const state = await readJson(statePath, {
    endpoint,
    settings: { folder },
    assets: {},
  });
  state.endpoint ??= endpoint;
  state.settings ??= { folder };
  state.assets ??= {};

  const entries = [];
  for (const [key, publicUrl] of Object.entries(manifest)) {
    if (!videoExt.test(publicUrl)) continue;
    const localFile = path.join(root, "public", new URL(publicUrl, "http://local").pathname);
    try {
      await fs.access(localFile);
    } catch {
      console.warn(`missing file, skipped: ${publicUrl}`);
      continue;
    }
    entries.push({ key, publicUrl, localFile });
  }

  const pending = verifyOnly
    ? []
    : entries.filter(({ key }) => force || !state.assets[key]?.remote);

  console.log(
    `${entries.length} videos · ${pending.length} to upload · ${entries.length - pending.length} already done`,
  );

  let uploaded = 0;
  let failed = 0;

  for (const [index, entry] of pending.entries()) {
    const label = `[${index + 1}/${pending.length}]`;
    const bytes = await fs.readFile(entry.localFile);
    const fileName = path.basename(entry.localFile);
    let result = null;
    let error = null;

    for (let attempt = 1; attempt <= 3; attempt += 1) {
      try {
        result = await upload(entry.localFile, fileName);
        break;
      } catch (err) {
        error = err;
        if (attempt < 3) await sleep(attempt * 3000);
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
    console.log(`${label} ok ${ok ? "" : "(unverified) "}${entry.publicUrl} -> ${result.url}`);
    await sleep(200);
  }

  if (verifyOnly) {
    for (const { key } of entries) {
      const entry = state.assets[key];
      if (!entry?.remote) continue;
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
