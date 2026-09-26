/** Old URLs still served as stale HTML: prerendering their redirect overwrites that file on the next deploy. */
export const LEGACY_REDIRECTS: Readonly<Record<string, string>> = {
  // Former French projects list, now localized as /projets.
  '/projects': '/projets',
  // Deleted project.
  '/project/spotify': '/projets',
  '/en/project/spotify': '/en/projects',
  '/es/project/spotify': '/es/proyectos',
}

type RedirectRouteRule = {
  redirect: { to: string; statusCode: 301 }
}

/**
 * Builds the Nitro route rules of the legacy redirects (permanent redirects).
 *
 * @returns {Record<string, RedirectRouteRule>} Route rules keyed by the old path.
 */
export function getLegacyRedirectRouteRules(): Record<string, RedirectRouteRule> {
  return Object.fromEntries(
    Object.entries(LEGACY_REDIRECTS).map(([from, to]: [string, string]): [string, RedirectRouteRule] => [
      from,
      { redirect: { to, statusCode: 301 } },
    ]),
  )
}
