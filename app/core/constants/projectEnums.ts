/**
 * Enums et helpers typés pour Secteur et Catégorie des projets.
 * Évite les strings magiques et centralise les valeurs attendues (Storyblok + filtres).
 *
 * Secteurs (FR labels): Sport & Loisirs, Immobilier, Santé, Voyage & Transport, Productivité,
 * Logistique, B2B, Réseaux sociaux, Gaming, Divertissement
 * Catégorie (FR labels): Site web, Application mobile, SaaS, Logiciel, IA
 */

/** Clés secteur (usage interne, slugs). */
export const SECTOR_KEYS = [
  'sport-loisirs',
  'immobilier',
  'sante',
  'voyage-transport',
  'productivite',
  'logistique',
  'b2b',
  'reseaux-sociaux',
  'gaming',
  'divertissement',
] as const

export type SectorKey = (typeof SECTOR_KEYS)[number]

/** Labels FR pour secteur (alignés Storyblok). */
export const SECTOR_LABELS_FR: Record<SectorKey, string> = {
  'sport-loisirs': 'Sport & Loisirs',
  immobilier: 'Immobilier',
  sante: 'Santé',
  'voyage-transport': 'Voyage & Transport',
  productivite: 'Productivité',
  logistique: 'Logistique',
  b2b: 'B2B',
  'reseaux-sociaux': 'Réseaux sociaux',
  gaming: 'Gaming',
  divertissement: 'Divertissement',
}

/** Clés catégorie (usage interne). */
export const CATEGORY_KEYS = ['site-web', 'application-mobile', 'saas', 'application-metier', 'logiciel', 'ia'] as const

export type CategoryKey = (typeof CATEGORY_KEYS)[number]

/** Labels FR pour catégorie (alignés Storyblok). */
export const CATEGORY_LABELS_FR: Record<CategoryKey, string> = {
  'site-web': 'Site web',
  'application-mobile': 'Application mobile',
  saas: 'SaaS',
  'application-metier': 'Application métier',
  logiciel: 'Logiciel',
  ia: 'IA',
}

/** Vérifie si une string est un SectorKey. */
export function isSectorKey(value: string): value is SectorKey {
  return (SECTOR_KEYS as readonly string[]).includes(value)
}

/** Vérifie si une string est un CategoryKey. */
export function isCategoryKey(value: string): value is CategoryKey {
  return (CATEGORY_KEYS as readonly string[]).includes(value)
}

/**
 * Normalise une valeur Storyblok (label FR ou slug) en SectorKey.
 * Retourne null si non reconnu.
 */
export function normalizeSectorFromStoryblok(value: string): SectorKey | null {
  const trimmed = value.trim()
  if (!trimmed) return null
  if (isSectorKey(trimmed)) return trimmed
  const byLabel = (Object.entries(SECTOR_LABELS_FR) as [SectorKey, string][]).find(
    ([, label]) => label.toLowerCase() === trimmed.toLowerCase(),
  )
  return byLabel ? byLabel[0] : null
}

/**
 * Normalise une valeur Storyblok (label FR) en CategoryKey.
 * Retourne null si non reconnu.
 */
export function normalizeCategoryFromStoryblok(value: string): CategoryKey | null {
  const trimmed = value.trim()
  if (!trimmed) return null
  if (isCategoryKey(trimmed)) return trimmed
  const byLabel = (Object.entries(CATEGORY_LABELS_FR) as [CategoryKey, string][]).find(
    ([, label]) => label.toLowerCase() === trimmed.toLowerCase(),
  )
  return byLabel ? byLabel[0] : null
}

/** Label FR pour un SectorKey (pour affichage / Storyblok). */
export function sectorLabelFr(key: SectorKey): string {
  return SECTOR_LABELS_FR[key]
}

/** Label FR pour un CategoryKey. */
export function categoryLabelFr(key: CategoryKey): string {
  return CATEGORY_LABELS_FR[key]
}
