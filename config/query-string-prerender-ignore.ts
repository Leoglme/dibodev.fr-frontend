/**
 * Tells the prerender crawler to skip a link carrying a query string: such a route is never written to disk, and rendering it can fail the build on the _payload.json of its page.
 *
 * @param {string} path - Route found by the prerender crawler, e.g. "/contact?topic=website".
 * @returns {boolean} True when the route carries a query string.
 */
export function isQueryStringRoute(path: string): boolean {
  return path.includes('?')
}
