/**
 * Copies every asset referenced by the design-source export into public/media,
 * using deterministic, URL-safe names, and writes content/assets.json.
 *
 * Run with: npm run import-assets
 */
import { promises as fs } from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = process.cwd();
const sourceDir = path.join(root, "design-source");
const publicMedia = path.join(root, "public", "media");
const manifestPath = path.join(root, "content", "assets.json");
const assetExt = /\.(?:jpe?g|png|webp|avif|gif|svg|mp4|webm|mov)$/i;

function slugify(name) {
  return name
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .toLowerCase();
}

function extensionOf(file) {
  const ext = path.extname(file).toLowerCase();
  return ext === ".jpeg" ? ".jpg" : ext;
}

async function main() {
  const pages = (await fs.readdir(sourceDir)).filter((f) => f.endsWith(".dc.html"));
  const localRefs = new Set();
  const remoteRefs = new Set();

  for (const page of pages) {
    const html = await fs.readFile(path.join(sourceDir, page), "utf8");
    for (const match of html.matchAll(/(?:src|href)="([^"{}<>]+)"/g)) {
      const raw = match[1];
      if (/^https?:\/\//i.test(raw)) {
        if (assetExt.test(new URL(raw).pathname)) remoteRefs.add(raw);
        continue;
      }
      if (!assetExt.test(raw)) continue;
      localRefs.add(decodeURIComponent(raw));
    }
  }

  const manifest = {};
  const used = new Map();

  for (const rel of [...localRefs].sort()) {
    const from = path.join(sourceDir, rel);
    try {
      await fs.access(from);
    } catch {
      console.warn(`missing asset: ${rel}`);
      continue;
    }
    const dir = path.dirname(rel);
    const ext = extensionOf(rel);
    const base = slugify(path.basename(rel, path.extname(rel)));
    let fileName = `${base}${ext}`;
    const key = path.join(dir, fileName);
    if (used.has(key)) {
      const suffix = crypto.createHash("sha1").update(rel).digest("hex").slice(0, 6);
      fileName = `${base}-${suffix}${ext}`;
    }
    used.set(path.join(dir, fileName), rel);

    const mediaRel = path.join(dir, fileName).split(path.sep).join("/");
    const to = path.join(publicMedia, mediaRel);
    await fs.mkdir(path.dirname(to), { recursive: true });
    await fs.copyFile(from, to);
    manifest[rel] = `/media/${mediaRel}`;
  }

  // Pull the handful of remote article images in once so the site is self-contained.
  await fs.mkdir(path.join(publicMedia, "insights"), { recursive: true });
  for (const url of [...remoteRefs].sort()) {
    const urlPath = new URL(url).pathname;
    const ext = path.extname(urlPath).toLowerCase() === ".jpeg" ? ".jpg" : path.extname(urlPath).toLowerCase();
    const base = slugify(path.basename(urlPath, path.extname(urlPath))) || crypto
      .createHash("sha1")
      .update(url)
      .digest("hex")
      .slice(0, 10);
    const fileName = `${base}${ext}`;
    const to = path.join(publicMedia, "insights", fileName);
    try {
      await fs.access(to);
    } catch {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`failed to download ${url}: ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      await fs.writeFile(to, buf);
    }
    manifest[url] = `/media/insights/${fileName}`;
  }

  // Images uploaded to the media API stay pointed at their public URLs.
  const uploadStatePath = path.join(root, "content", "uploaded-assets.json");
  try {
    const uploads = JSON.parse(await fs.readFile(uploadStatePath, "utf8"));
    for (const [key, entry] of Object.entries(uploads.assets ?? {})) {
      if (manifest[key] && entry.remote) manifest[key] = entry.remote;
    }
  } catch {
    // No upload state yet: keep local paths.
  }

  await fs.mkdir(path.dirname(manifestPath), { recursive: true });
  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
  await fs.writeFile(manifestPath, `${JSON.stringify(sorted, null, 2)}\n`);

  console.log(`copied ${Object.keys(sorted).length} assets to public/media`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
