/**
 * Uploads staff portraits to the TracTrac media API and records the URLs in
 * content/team-photos.json. Resumable; re-running skips completed files.
 *
 * Usage: node scripts/upload-staff.mjs [source-dir] [--force] [--verify-only]
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = process.cwd();
const sourceDir =
  process.argv.slice(2).find((arg) => !arg.startsWith("--")) ??
  "/Users/saleem/Downloads/staff images";
const statePath = path.join(root, "content", "team-photos.json");
const endpoint = "https://api.tractrac.co/api/v1/uploads/images";
const settings = {
  folder: "images",
  optimize: "true",
  quality: "high",
  generate_thumbnail: "false",
  preserve_format: "true",
};
const imageExt = /\.(?:jpe?g|png|webp)$/i;
const mime = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp" };
const force = process.argv.includes("--force");
const verifyOnly = process.argv.includes("--verify-only");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

async function upload(filePath, fileName) {
  const ext = path.extname(fileName).toLowerCase();
  const bytes = await fs.readFile(filePath);
  const body = new FormData();
  body.append("file", new Blob([bytes], { type: mime[ext] ?? "application/octet-stream" }), fileName);
  for (const [key, value] of Object.entries(settings)) body.append(key, value);

  const response = await fetch(endpoint, {
    method: "POST",
    body,
    signal: AbortSignal.timeout(180_000),
  });
  const text = await response.text();
  let json = null;
  try {
    json = JSON.parse(text);
  } catch {
    /* handled below */
  }
  if (!response.ok || !json?.url) throw new Error(`HTTP ${response.status}: ${text.slice(0, 250)}`);
  return { json, bytes };
}

async function verify(url) {
  try {
    let response = await fetch(url, { method: "HEAD", signal: AbortSignal.timeout(30_000) });
    if (response.status === 405 || response.status === 501) {
      response = await fetch(url, {
        headers: { Range: "bytes=0-0" },
        signal: AbortSignal.timeout(30_000),
      });
    }
    return response.ok || response.status === 206;
  } catch {
    return false;
  }
}

async function main() {
  const state = await readJson(statePath, { endpoint, settings, photos: {} });
  state.endpoint ??= endpoint;
  state.settings ??= settings;
  state.photos ??= {};

  const files = (await fs.readdir(sourceDir))
    .filter((file) => imageExt.test(file))
    .sort((a, b) => a.localeCompare(b));

  const pending = verifyOnly
    ? []
    : files.filter((file) => force || !state.photos[file]?.remote);

  console.log(`${files.length} staff images · ${pending.length} to upload · ${files.length - pending.length} already done`);

  let uploaded = 0;
  let failed = 0;

  for (const [index, file] of pending.entries()) {
    const label = `[${index + 1}/${pending.length}]`;
    const filePath = path.join(sourceDir, file);
    let result = null;
    let error = null;

    for (let attempt = 1; attempt <= 3; attempt += 1) {
      try {
        result = await upload(filePath, file);
        break;
      } catch (err) {
        error = err;
        if (attempt < 3) await sleep(attempt * 2500);
      }
    }

    if (!result) {
      failed += 1;
      console.log(`${label} FAILED ${file} :: ${error?.message ?? error}`);
      continue;
    }

    const ok = await verify(result.json.url);
    state.photos[file] = {
      remote: result.json.url,
      filename: result.json.filename ?? file,
      bytes: result.bytes.length,
      sha256: crypto.createHash("sha256").update(result.bytes).digest("hex"),
      uploadedAt: new Date().toISOString(),
      verified: ok,
    };
    await saveState(state);
    uploaded += 1;
    console.log(`${label} ok ${ok ? "" : "(unverified) "}${file} -> ${result.json.url}`);
    await sleep(150);
  }

  if (verifyOnly) {
    for (const file of files) {
      const photo = state.photos[file];
      if (!photo?.remote) continue;
      photo.verified = await verify(photo.remote);
      if (!photo.verified) console.log(`UNVERIFIED ${file}`);
    }
    await saveState(state);
  }

  const mapped = Object.values(state.photos).filter((photo) => photo.remote).length;
  console.log(`done · uploaded ${uploaded} · failed ${failed} · mapped ${mapped}/${files.length}`);
  if (failed) process.exitCode = 2;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
