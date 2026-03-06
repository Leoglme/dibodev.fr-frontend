/**
 * Type definitions for Storyblok "secteur" content (page secteur).
 *
 * Les stories secteur vivent dans le dossier Storyblok `sectors/` (ex. sectors/sante).
 * Chaque story = une page SEO avec H1, description, intro, metas.
 * Les projets sont dans `project/` et ont un champ `secteur` qui pointe vers ce secteur (relation).
 */

export type StoryblokSectorContent = {
  /** H1 de la page secteur */
  title: string
  /** Description / sous-titre */
  description: string
  /** Intro riche (richtext Storyblok → string HTML) */
  intro?: string | null
  /** Meta title SEO */
  metaTitle?: string | null
  /** Meta description SEO */
  metaDescription?: string | null
}

/** Préfixe du dossier Storyblok pour les pages secteur (sectors/sante, sectors/immobilier, …). */
export const SECTEURS_STORYBLOK_FOLDER = 'sectors'

/** Contenu brut possible depuis l’API (snake_case ou dans un bloc). */
type StoryblokSectorContentRaw = Record<string, unknown> & {
  title?: string | null
  description?: string | null
  intro?: string | null
  metaTitle?: string | null
  metaDescription?: string | null
  meta_title?: string | null
  meta_description?: string | null
  body?: Array<{ title?: string; description?: string; intro?: string; meta_title?: string; meta_description?: string }>
}

import { richTextResolver } from '@storyblok/richtext'

/** Nœud ProseMirror/Storyblok richtext pour richTextResolver().render() */
type StoryblokRichTextNode = Parameters<ReturnType<typeof richTextResolver>['render']>[0]

/** Convertit un champ richtext Storyblok (objet ProseMirror) en HTML. */
function introToHtml(value: unknown): string | null {
  if (value == null) return null
  if (typeof value === 'string' && value.trim() !== '') return value.trim()
  if (typeof value === 'object' && value !== null && 'type' in value) {
    try {
      const html = richTextResolver().render(value as StoryblokRichTextNode)
      return typeof html === 'string' && html.trim() !== '' ? html : null
    } catch {
      return null
    }
  }
  return null
}

/**
 * Normalise le contenu secteur renvoyé par Storyblok (camelCase, snake_case ou premier bloc body).
 * L'intro peut être une string ou un doc ProseMirror (richtext) → converti en HTML.
 */
export function normalizeSectorContent(raw: unknown): StoryblokSectorContent | null {
  if (raw == null || typeof raw !== 'object') return null
  const o = raw as StoryblokSectorContentRaw
  const str = (v: unknown): string => (v != null && String(v).trim() !== '' ? String(v).trim() : '')
  let title = str(o.title)
  let description = str(o.description)
  let metaTitle = str(o.metaTitle ?? o.meta_title)
  let metaDescription = str(o.metaDescription ?? o.meta_description)
  if (!title && !description && Array.isArray(o.body) && o.body[0]) {
    const block = o.body[0] as Record<string, unknown>
    title = str(block.title ?? o.title)
    description = str(block.description ?? o.description)
    metaTitle = str(block.meta_title ?? block.metaTitle ?? metaTitle)
    metaDescription = str(block.meta_description ?? block.metaDescription ?? metaDescription)
  }
  if (!title && !description) return null
  const introRaw = (Array.isArray(o.body) && o.body[0] && (o.body[0] as Record<string, unknown>).intro) ?? o.intro
  const intro = introToHtml(introRaw)
  return {
    title: title || 'Secteur',
    description: description || '',
    intro: intro ?? null,
    metaTitle: metaTitle || null,
    metaDescription: metaDescription || null,
  }
}
