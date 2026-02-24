/**
 * Middleware Nitro : redirection 301 pour supprimer le trailing slash des URLs.
 * Résout les problèmes GSC "page en double" (ex. /contact/ vs /contact).
 * - Ne redirige pas "/" (racine).
 * - Ne redirige pas les assets : /_nuxt/, /__sitemap__/, fichiers avec extension (.*).
 * - Préserve la querystring (?a=b).
 */

import { getRequestURL } from 'h3'
import { sendRedirect } from 'h3'

/** Préfixes de chemins considérés comme assets / techniques (pas de redirection). */
const ASSET_PATH_PREFIXES = ['/_nuxt/', '/__sitemap__/']

/** Exclusions : noms de fichiers connus à la racine (robots, favicon, sitemaps). */
const ROOT_STATIC_PATTERN = /^\/(robots\.txt|favicon\.ico|sitemap[^/]*\.xml)$/i

/**
 * Vérifie si le path doit être exclu de la redirection (asset ou fichier avec extension).
 */
function shouldSkipRedirect(pathname: string): boolean {
  // Racine : ne jamais rediriger
  if (pathname === '/' || pathname === '') return true

  // Pas de trailing slash : rien à faire
  if (!pathname.endsWith('/')) return true

  // Assets Nuxt / sitemap
  if (ASSET_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix))) return true

  // Fichiers statiques à la racine
  if (ROOT_STATIC_PATTERN.test(pathname)) return true

  // Dernier segment contient un point => ressemble à un fichier (.js, .css, .xml, .png, etc.)
  const pathWithoutTrailing = pathname.replace(/\/+$/, '')
  const lastSegment = pathWithoutTrailing.split('/').pop() ?? ''
  if (lastSegment.includes('.')) return true

  return false
}

/**
 * Retourne le path sans slash final (sauf si c'est "/").
 */
function stripTrailingSlash(pathname: string): string {
  const trimmed = pathname.replace(/\/+$/, '')
  return trimmed || '/'
}

export default defineEventHandler((event) => {
  const url = getRequestURL(event)
  const pathname = url.pathname
  const search = url.search ?? ''

  if (shouldSkipRedirect(pathname)) return

  const newPath = stripTrailingSlash(pathname)
  const target = `${newPath}${search}`

  return sendRedirect(event, target, 301)
})
