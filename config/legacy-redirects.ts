/** Old URLs Google may still know: each one gets a prerendered redirect to its current page. */
export const LEGACY_REDIRECTS: Readonly<Record<string, string>> = {
  // Former projects lists, now localized as /projets and /es/proyectos.
  '/projects': '/projets',
  '/es/projects': '/es/proyectos',
  // Renamed projects.
  '/project/puissance-4': '/project/puissance4',
  '/en/project/puissance-4': '/en/project/puissance4',
  '/es/project/puissance-4': '/es/project/puissance4',
  '/project/stockpme-kodeva': '/project/stockpme',
  '/en/project/stockpme-kodeva': '/en/project/stockpme',
  '/es/project/stockpme-kodeva': '/es/project/stockpme',
  '/project/logiciel-de-gestion-de-temps-kodeva': '/project/gestion-temps',
  '/en/project/logiciel-de-gestion-de-temps-kodeva': '/en/project/gestion-temps',
  '/es/project/logiciel-de-gestion-de-temps-kodeva': '/es/project/gestion-temps',
  // Deleted projects.
  '/project/spotify': '/projets',
  '/en/project/spotify': '/en/projects',
  '/es/project/spotify': '/es/proyectos',
  '/project/spotify-clone': '/projets',
  '/en/project/spotify-clone': '/en/projects',
  '/es/project/spotify-clone': '/es/proyectos',
  '/project/freeads': '/projets',
  '/en/project/freeads': '/en/projects',
  '/es/project/freeads': '/es/proyectos',
  // Former "entertainment" sector, now "gaming".
  '/projets/secteur/divertissement': '/projets/secteur/gaming',
  '/en/projects/sector/entertainment': '/en/projects/sector/gaming',
  '/es/proyectos/sector/entretenimiento': '/es/proyectos/sector/gaming',
}

/** Redirect declared by @nuxtjs/sitemap (to /sitemap_index.xml). */
const SITEMAP_REDIRECT_PATH: string = '/sitemap.xml'
const LOCALE_PREFIXES: string[] = ['/en', '/es']

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

/**
 * Lists the locale-prefixed copies of the redirects (/en/es/projects, /en/sitemap.xml…) that the prerender renders as empty pages with the home title.
 *
 * @returns {string[]} Paths to leave out of the prerender, so they stay 404.
 */
export function getLegacyRedirectPrerenderIgnoreUrls(): string[] {
  const redirectedPaths: string[] = [...Object.keys(LEGACY_REDIRECTS), SITEMAP_REDIRECT_PATH]
  const redirectTargets: Set<string> = new Set(Object.values(LEGACY_REDIRECTS))
  return LOCALE_PREFIXES.flatMap((localePrefix: string): string[] =>
    redirectedPaths.map((path: string): string => `${localePrefix}${path}`),
  ).filter((path: string): boolean => !(path in LEGACY_REDIRECTS) && !redirectTargets.has(path))
}
