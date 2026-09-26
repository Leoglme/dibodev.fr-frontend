/** Old URLs Google may still know: each one gets a prerendered redirect to its current page. */
export const LEGACY_REDIRECTS: Readonly<Record<string, string>> = {
  // Former projects lists, now localized as /projets and /es/proyectos.
  '/projects': '/projets',
  '/es/projects': '/es/proyectos',
  // Renamed projects.
  '/project/puissance-4': '/project/puissance4',
  '/project/stockpme-kodeva': '/project/stockpme',
  '/project/logiciel-de-gestion-de-temps-kodeva': '/project/gestion-temps',
  // Deleted projects.
  '/project/spotify': '/projets',
  '/en/project/spotify': '/en/projects',
  '/es/project/spotify': '/es/proyectos',
  '/project/spotify-clone': '/projets',
  '/project/freeads': '/projets',
  // Former "entertainment" sector, now "gaming".
  '/projets/secteur/divertissement': '/projets/secteur/gaming',
  '/en/projects/sector/entertainment': '/en/projects/sector/gaming',
  '/es/proyectos/sector/entretenimiento': '/es/proyectos/sector/gaming',
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
