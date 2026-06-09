/** Resolve a public-folder asset path against the Vite base URL (e.g. /portfolio/). */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL
  const normalized = path.replace(/^\//, '').replace(/^portfolio\//, '')
  return `${base}${normalized}`
}
