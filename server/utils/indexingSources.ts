import type { IndexingStatusRow, IndexingUrlType } from '~~/server/types/indexing'

const SITE_URL = 'https://dibodev.fr'
const STORYBLOK_CDN_BASE = 'https://api.storyblok.com/v2/cdn'
const BLOG_FOLDER = 'blog/'

/** Pages statiques du site (sans préfixe de locale pour l’URL canonique). */
const STATIC_PAGES: { path: string; title: string }[] = [
  { path: '/', title: 'Accueil' },
  { path: '/contact', title: 'Contact' },
  { path: '/projects', title: 'Projets' },
  { path: '/blog', title: 'Blog' },
]

type StoryItem = {
  content?: { title?: string; slug?: string; date?: string; name?: string }
  full_slug?: string
}

type StoriesResponse = { stories?: StoryItem[] }

/**
 * Retourne les URLs à vérifier : pages statiques + articles blog + pages project (Storyblok).
 */
export async function getIndexingSources(deliveryToken: string): Promise<IndexingStatusRow[]> {
  const rows: IndexingStatusRow[] = []

  for (const { path, title } of STATIC_PAGES) {
    rows.push({
      url: `${SITE_URL}${path}`,
      title,
      type: 'page',
    })
  }

  const spaceRes = await fetch(`${STORYBLOK_CDN_BASE}/spaces/me?token=${deliveryToken}`)
  if (!spaceRes.ok) return rows
  const spaceData = (await spaceRes.json()) as { space?: { version?: number } }
  const cv = spaceData.space?.version ?? 0

  const blogUrl = `${STORYBLOK_CDN_BASE}/stories?token=${deliveryToken}&starts_with=${encodeURIComponent(BLOG_FOLDER)}&per_page=100&sort_by=content.date:desc&cv=${cv}`
  const blogRes = await fetch(blogUrl)
  if (blogRes.ok) {
    const data = (await blogRes.json()) as StoriesResponse
    const stories = data.stories ?? []
    for (const s of stories) {
      const slug = (s.content?.slug ?? s.full_slug ?? '').replace(/^blog\/?/, '').trim() || 'article'
      const fullSlug = s.full_slug ?? `blog/${slug}`
      const canonicalPath = fullSlug.startsWith('blog/') ? fullSlug : `blog/${fullSlug}`
      rows.push({
        url: `${SITE_URL}/${canonicalPath}`,
        title: s.content?.title ?? slug,
        type: 'blog',
      })
    }
  }

  const projectUrl = `${STORYBLOK_CDN_BASE}/stories?token=${deliveryToken}&starts_with=project%2F&per_page=100&cv=${cv}`
  const projectRes = await fetch(projectUrl)
  if (projectRes.ok) {
    const data = (await projectRes.json()) as StoriesResponse
    const stories = data.stories ?? []
    for (const s of stories) {
      const fullSlug = (s.full_slug ?? '').trim()
      if (!fullSlug) continue
      const route = fullSlug.includes('/project/') ? fullSlug.slice(fullSlug.indexOf('/project/')) : `/${fullSlug}`
      rows.push({
        url: `${SITE_URL}${route}`,
        title: (s.content?.name ?? s.content?.title ?? route).toString(),
        type: 'project',
      })
    }
  }

  return rows
}
