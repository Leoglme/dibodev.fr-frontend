/**
 * Génère la liste des URLs secteur à ignorer au prerender (slug d'une langue sur le path d'une autre → 404).
 * À garder en sync avec app/core/constants/sectorSlugs.ts (même structure de slugs).
 * Utilisé par nuxt.config car l'import depuis app utilise ~ et n'est pas résolu au chargement du config.
 */

type SupportedLocale = 'fr' | 'en' | 'es'

type SectorKey =
  | 'sport-loisirs'
  | 'immobilier'
  | 'sante'
  | 'voyage-transport'
  | 'productivite'
  | 'logistique'
  | 'b2b'
  | 'reseaux-sociaux'
  | 'gaming'
  | 'divertissement'

const SECTOR_SLUGS: Record<SupportedLocale, Record<SectorKey, string>> = {
  fr: {
    'sport-loisirs': 'sport-loisirs',
    immobilier: 'immobilier',
    sante: 'sante',
    'voyage-transport': 'voyage-transport',
    productivite: 'productivite',
    logistique: 'logistique',
    b2b: 'b2b',
    'reseaux-sociaux': 'reseaux-sociaux',
    gaming: 'gaming',
    divertissement: 'divertissement',
  },
  en: {
    'sport-loisirs': 'sports-leisure',
    immobilier: 'real-estate',
    sante: 'health',
    'voyage-transport': 'travel-transport',
    productivite: 'productivity',
    logistique: 'logistics',
    b2b: 'b2b',
    'reseaux-sociaux': 'social-networks',
    gaming: 'gaming',
    divertissement: 'entertainment',
  },
  es: {
    'sport-loisirs': 'deporte-ocio',
    immobilier: 'inmobiliaria',
    sante: 'salud',
    'voyage-transport': 'viaje-transporte',
    productivite: 'productividad',
    logistique: 'logistica',
    b2b: 'b2b',
    'reseaux-sociaux': 'redes-sociales',
    gaming: 'gaming',
    divertissement: 'entretenimiento',
  },
}

const pathByLocale: Record<SupportedLocale, (slug: string) => string> = {
  fr: (slug) => `/projets/secteur/${slug}`,
  en: (slug) => `/en/projects/sector/${slug}`,
  es: (slug) => `/es/proyectos/sector/${slug}`,
}

export function getPrerenderSectorIgnoreUrls(): string[] {
  const urls: string[] = []
  const locales: SupportedLocale[] = ['fr', 'en', 'es']
  for (const pathLocale of locales) {
    const correctSlugs = new Set(Object.values(SECTOR_SLUGS[pathLocale]))
    for (const otherLocale of locales) {
      if (otherLocale === pathLocale) continue
      for (const slug of Object.values(SECTOR_SLUGS[otherLocale])) {
        if (!correctSlugs.has(slug)) urls.push(pathByLocale[pathLocale](slug))
      }
    }
  }
  return [...new Set(urls)]
}
