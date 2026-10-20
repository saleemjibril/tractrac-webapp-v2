import manifest from "@/content/assets.json";

export type AssetKey = keyof typeof manifest;

/** Resolve an original design-source asset path to its optimised public URL. */
export function asset(path: AssetKey | string): string {
  const resolved = (manifest as Record<string, string>)[path];
  if (!resolved) throw new Error(`Unknown asset: ${path}`);
  return resolved;
}
