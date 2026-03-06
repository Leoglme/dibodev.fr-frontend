import type { IndexingStatusRow, IndexingUrlType } from '~~/server/types/indexing'

const SITEMAP_INDEX_PATH: string = '/sitemap_index.xml'

/**
 * Récupère le type d'indexation à partir de l'URL.
 * Ordre important : patterns spécifiques avant génériques.
 */
function inferTypeFromUrl(url: string): IndexingUrlType {
  const pathname: string = new URL(url).pathname

  if (/\/blog\/[^/]+$/.test(pathname)) return 'blog'
  if (/\/project\/[^/]+$/.test(pathname)) return 'project'
  if (/\/(?:categorie|category|categoria)\/[^/]+$/.test(pathname)) return 'category'
  if (/\/(?:secteur|sector)\/[^/]+$/.test(pathname)) return 'sector'

  return 'page'
}

/**
 * Génère un titre lisible à partir du slug (dernier segment du path).
 */
function slugToTitle(slug: string): string {
  const formatted: string = slug.replace(/-/g, ' ').replace(/\b\w/g, (c: string): string => c.toUpperCase())
  return formatted.trim() || slug
}

/**
 * Extrait le titre affichable pour une URL donnée.
 */
function urlToTitle(url: string): string {
  const pathname: string = new URL(url).pathname
  const segments: string[] = pathname.split('/').filter((s: string): boolean => s.length > 0)
  const lastSegment: string | undefined = segments[segments.length - 1]
  if (!lastSegment) return pathname || 'Accueil'
  return slugToTitle(lastSegment)
}

/**
 * Parse un sitemap XML et extrait les URLs <loc>.
 */
function parseSitemapUrls(xmlText: string): string[] {
  const urls: string[] = []
  const locRegex: RegExp = /<loc[^>]*>([^<]+)<\/loc>/gi
  let match: RegExpExecArray | null = locRegex.exec(xmlText)
  while (match !== null) {
    const loc: string = match[1]?.trim() ?? ''
    if (loc.length > 0) urls.push(loc)
    match = locRegex.exec(xmlText)
  }
  return urls
}

/**
 * Parse un sitemap index XML et extrait les URLs des sitemaps enfants.
 */
function parseSitemapIndex(xmlText: string): string[] {
  return parseSitemapUrls(xmlText)
}

/**
 * Récupère le contenu d'une URL en texte.
 */
async function fetchText(url: string): Promise<string> {
  const res: Response = await fetch(url, {
    headers: { Accept: 'application/xml, text/xml, */*' },
  })
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${url}`)
  }
  return res.text()
}

/**
 * Récupère toutes les URLs depuis le sitemap du site.
 * Retourne les URLs à vérifier avec type et title déduits.
 */
export async function getIndexingSources(siteBaseUrl: string): Promise<IndexingStatusRow[]> {
  const rows: IndexingStatusRow[] = []
  const indexUrl: string = `${siteBaseUrl.replace(/\/$/, '')}${SITEMAP_INDEX_PATH}`

  try {
    const indexText: string = await fetchText(indexUrl)
    const sitemapUrls: string[] = parseSitemapIndex(indexText)

    for (const sitemapUrl of sitemapUrls) {
      try {
        const sitemapText: string = await fetchText(sitemapUrl)
        const pageUrls: string[] = parseSitemapUrls(sitemapText)

        for (const url of pageUrls) {
          const type: IndexingUrlType = inferTypeFromUrl(url)
          const title: string = urlToTitle(url)
          rows.push({ url, title, type })
        }
      } catch {
        // Ignorer les sitemaps partiels en erreur, continuer avec les autres
      }
    }
  } catch {
    return []
  }

  return rows
}
