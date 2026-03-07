import type { DibodevProject } from '~/core/types/DibodevProject'
import { normalizeSectorFromStoryblok, normalizeCategoryFromStoryblok } from '~/core/constants/projectEnums'
import type { SectorKey, CategoryKey } from '~/core/constants/projectEnums'
import type { StoryblokProjectContent } from '~/services/types/storyblokProject'
import type { StoryblokLink, StoryblokStory } from '~/services/types/storyblok'

/**
 * Resolve a Storyblok asset field to a URL string.
 */
function resolveAssetUrl(value: StoryblokProjectContent['logoUrl']): string {
  if (!value) {
    return ''
  }

  if (typeof value === 'string') {
    return value
  }

  return value.filename || ''
}

/**
 * Normalize Storyblok list input to a string array.
 */
function normalizeStringList(value: StoryblokProjectContent['tags']): string[] {
  if (Array.isArray(value)) {
    return value.map((v: string): string => String(v).trim()).filter((v: string): boolean => v.length > 0)
  }

  return String(value)
    .split(/[\n,]+/g)
    .map((v: string): string => v.trim())
    .filter((v: string): boolean => v.length > 0)
}

/** Extrait le dernier segment (slug secteur) d’un path ou slug (ex. "sectors/gaming" → "gaming"). */
function lastSegment(path: string): string | null {
  const trimmed = path.replace(/^\/+|\/+$/g, '').trim()
  if (!trimmed) return null
  const parts = trimmed.split('/')
  const last = parts[parts.length - 1]?.trim()
  return last || null
}

/**
 * Slug secteur depuis un lien Storyblok.
 * Utilise cached_url, story.full_slug, url (injecté par resolve_links=url), ou resolvedLinks[uuid].
 */
function sectorSlugFromLink(entry: unknown, resolvedLinks?: Record<string, StoryblokLink>): string | null {
  if (entry == null) return null
  if (typeof entry === 'string') return entry.trim() || null
  if (typeof entry !== 'object') return null
  const o = entry as Record<string, unknown>
  const cached = o.cached_url
  if (typeof cached === 'string' && cached.trim() !== '') return lastSegment(cached)
  const story = o.story as Record<string, unknown> | undefined
  const fullSlug = story?.full_slug
  if (typeof fullSlug === 'string' && fullSlug.trim() !== '') return lastSegment(fullSlug)
  const url = o.url ?? o.slug
  if (typeof url === 'string' && url.trim() !== '') return lastSegment(url)
  const uuid = o.uuid
  if (typeof uuid === 'string' && resolvedLinks?.[uuid]) {
    const link = resolvedLinks[uuid]
    const path = link.real_path ?? link.slug ?? ''
    return path ? lastSegment(path) : null
  }
  return null
}

/** Map uuid → full_slug depuis le tableau rels (resolve_relations). Exportée pour le composable. */
export function buildRelsSlugMap(
  rels: Array<{ uuid?: string; full_slug?: string }> | undefined,
): Record<string, string> {
  const map: Record<string, string> = {}
  if (!Array.isArray(rels)) return map
  for (const s of rels) {
    if (s?.uuid && typeof s.full_slug === 'string') map[s.uuid] = s.full_slug
  }
  return map
}

/** Récupère un slug secteur depuis une entrée (string uuid, ou lien Storyblok). */
function entryToSectorSlug(
  entry: unknown,
  resolvedLinks?: Record<string, StoryblokLink>,
  relsSlugMap?: Record<string, string>,
): string | null {
  if (entry == null) return null
  if (typeof entry === 'string') {
    const uuid = entry.trim()
    if (!uuid) return null
    const fullSlug = relsSlugMap?.[uuid]
    if (fullSlug) return lastSegment(fullSlug)
    return null
  }
  return sectorSlugFromLink(entry, resolvedLinks)
}

/**
 * Récupère le contenu « plat » : si les champs sont dans un bloc body[0], on les utilise.
 * Storyblok peut renvoyer content.body[0].sectors au lieu de content.sectors.
 */
function getEffectiveContent(content: StoryblokProjectContent): Record<string, unknown> {
  const top = content as Record<string, unknown>
  const body = top.body
  if (Array.isArray(body) && body.length > 0 && body[0] != null && typeof body[0] === 'object') {
    const block = body[0] as Record<string, unknown>
    if (block.sectors != null || block.sector != null || block.categories != null || block.name != null) {
      return { ...top, ...block }
    }
  }
  return top
}

/**
 * Normalise content.sectors / content.sector / content.secteur en liste de SectorKey.
 * - resolvedLinks : pour resolve_links (champ Link).
 * - relsSlugMap : pour resolve_relations (champ References, content.sectors = [uuid, ...]).
 */
function normalizeSectorsFromStoryblok(
  content: StoryblokProjectContent,
  resolvedLinks?: Record<string, StoryblokLink>,
  relsSlugMap?: Record<string, string>,
): SectorKey[] {
  const effective = getEffectiveContent(content)
  const raw = effective.sectors ?? content.sectors
  let slugs: string[] = []

  if (raw != null) {
    if (Array.isArray(raw)) {
      for (const entry of raw) {
        const slug = entryToSectorSlug(entry, resolvedLinks, relsSlugMap)
        if (slug) slugs.push(slug)
      }
    } else {
      slugs = normalizeStringList(raw as StoryblokProjectContent['tags'])
    }
  }

  if (slugs.length === 0) {
    const single =
      effective.sector ?? content.sector ?? effective.secteur ?? (content as Record<string, unknown>).secteur
    if (single != null) {
      const slug = entryToSectorSlug(single, resolvedLinks, relsSlugMap)
      if (slug) slugs = [slug]
    }
  }

  return slugs.map((v) => normalizeSectorFromStoryblok(v)).filter((k): k is SectorKey => k != null)
}

/** Slug catégorie depuis un lien Storyblok (cached_url "categories/site-web" → "site-web"). */
function categorySlugFromLink(entry: unknown, resolvedLinks?: Record<string, StoryblokLink>): string | null {
  if (entry == null) return null
  if (typeof entry === 'string') return entry.trim() || null
  if (typeof entry !== 'object') return null
  const o = entry as Record<string, unknown>
  const cached = o.cached_url
  if (typeof cached === 'string' && cached.trim() !== '') return lastSegment(cached)
  const story = o.story as Record<string, unknown> | undefined
  const fullSlug = story?.full_slug
  if (typeof fullSlug === 'string' && fullSlug.trim() !== '') return lastSegment(fullSlug)
  const url = o.url ?? o.slug
  if (typeof url === 'string' && url.trim() !== '') return lastSegment(url)
  const uuid = o.uuid
  if (typeof uuid === 'string' && resolvedLinks?.[uuid]) {
    const link = resolvedLinks[uuid]
    const path = link.real_path ?? link.slug ?? ''
    return path ? lastSegment(path) : null
  }
  return null
}

/** Récupère un slug catégorie depuis une entrée (string uuid, ou lien Storyblok). */
function entryToCategorySlug(
  entry: unknown,
  resolvedLinks?: Record<string, StoryblokLink>,
  relsSlugMap?: Record<string, string>,
): string | null {
  if (entry == null) return null
  if (typeof entry === 'string') {
    const uuid = entry.trim()
    if (!uuid) return null
    const fullSlug = relsSlugMap?.[uuid]
    if (fullSlug) return lastSegment(fullSlug)
    return null
  }
  return categorySlugFromLink(entry, resolvedLinks)
}

/**
 * Normalise content.categories en liste de CategoryKey.
 * Accepte tableau de UUID (relations), liens Storyblok, ou strings (multi-option self).
 */
function normalizeCategoriesFromStoryblok(
  content: StoryblokProjectContent,
  resolvedLinks?: Record<string, StoryblokLink>,
  relsSlugMap?: Record<string, string>,
): CategoryKey[] {
  const effective = getEffectiveContent(content)
  const raw = effective.categories ?? content.categories
  let slugs: string[] = []

  if (raw != null) {
    if (Array.isArray(raw)) {
      for (const entry of raw) {
        const slug = entryToCategorySlug(entry, resolvedLinks, relsSlugMap)
        if (slug) slugs.push(slug)
        else if (typeof entry === 'string' && entry.trim()) slugs.push(entry.trim())
      }
    } else {
      slugs = normalizeStringList(raw as StoryblokProjectContent['tags'])
    }
  }

  return slugs.map((v) => normalizeCategoryFromStoryblok(v)).filter((k): k is CategoryKey => k != null)
}

/**
 * Map a strongly-typed Storyblok project story to a DibodevProject.
 *
 * @param story - Storyblok story representing a project.
 * @param resolvedLinks - Map uuid → link (slug, real_path) quand resolve_links est utilisé.
 * @param relsSlugMap - Map uuid → full_slug quand resolve_relations est utilisé (sectors = [uuid]).
 */
export function mapStoryblokProjectToDibodevProject(
  story: StoryblokStory<StoryblokProjectContent>,
  resolvedLinks?: Record<string, StoryblokLink>,
  relsSlugMap?: Record<string, string>,
): DibodevProject {
  const content: StoryblokProjectContent = story.content
  const effective = getEffectiveContent(content) as StoryblokProjectContent

  const fullSlug: string = story.full_slug.startsWith('/') ? story.full_slug : `/${story.full_slug}`
  const projectIndex: number = fullSlug.indexOf('/project/')
  const route: string = projectIndex >= 0 ? fullSlug.slice(projectIndex) : fullSlug

  const sectors: SectorKey[] = normalizeSectorsFromStoryblok(effective, resolvedLinks, relsSlugMap)
  const categories: CategoryKey[] = normalizeCategoriesFromStoryblok(effective, resolvedLinks, relsSlugMap)

  const rawLongDescription: StoryblokProjectContent['longDescription'] =
    effective.longDescription ?? content.longDescription
  const longDescription: DibodevProject['longDescription'] =
    typeof rawLongDescription === 'string' ? rawLongDescription : rawLongDescription

  return {
    name: effective.name ?? content.name,
    primaryColor: effective.primaryColor ?? content.primaryColor,
    secondaryColor: effective.secondaryColor ?? content.secondaryColor,
    logoUrl: resolveAssetUrl((effective.logoUrl ?? content.logoUrl) as StoryblokProjectContent['logoUrl']),
    categories,
    sectors,
    date: effective.date ?? content.date,
    shortDescription: effective.shortDescription ?? content.shortDescription,
    longDescription,
    siteUrl: effective.siteUrl ?? content.siteUrl,
    stack: normalizeStringList((effective.stack ?? content.stack) as StoryblokProjectContent['tags']),
    repoUrl: effective.repoUrl ?? content.repoUrl,
    media1: resolveAssetUrl((effective.media1 ?? content.media1) as StoryblokProjectContent['logoUrl']),
    media2: resolveAssetUrl((effective.media2 ?? content.media2) as StoryblokProjectContent['logoUrl']),
    route,
    tags: normalizeStringList((effective.tags ?? content.tags) as StoryblokProjectContent['tags']),
    metaTitle: effective.metaTitle ?? content.metaTitle,
    metaDescription: effective.metaDescription ?? content.metaDescription,
    isFavorite: effective.isFavorite ?? content.isFavorite,
  }
}
