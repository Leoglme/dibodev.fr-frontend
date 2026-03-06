/**
 * Génère la liste des URLs catégorie à ignorer au prerender (slug d'une langue sur le path d'une autre → 404).
 * À garder en sync avec app/core/constants/categorySlugs.ts (même structure de slugs).
 * Utilisé par nuxt.config car l'import depuis app utilise ~ et n'est pas résolu au chargement du config.
 */

type SupportedLocale = 'fr' | 'en' | 'es'

type CategoryKey = 'site-web' | 'application-mobile' | 'saas' | 'application-metier' | 'logiciel' | 'ia'

const CATEGORY_SLUGS: Record<SupportedLocale, Record<CategoryKey, string>> = {
  fr: {
    'site-web': 'site-web',
    'application-mobile': 'application-mobile',
    saas: 'saas',
    'application-metier': 'application-metier',
    logiciel: 'logiciel',
    ia: 'ia',
  },
  en: {
    'site-web': 'website',
    'application-mobile': 'mobile-app',
    saas: 'saas',
    'application-metier': 'business-app',
    logiciel: 'software',
    ia: 'ai',
  },
  es: {
    'site-web': 'sitio-web',
    'application-mobile': 'aplicacion-movil',
    saas: 'saas',
    'application-metier': 'aplicacion-de-negocio',
    logiciel: 'software',
    ia: 'ia',
  },
}

const pathByLocale: Record<SupportedLocale, (slug: string) => string> = {
  fr: (slug) => `/projets/categorie/${slug}`,
  en: (slug) => `/en/projects/category/${slug}`,
  es: (slug) => `/es/proyectos/categoria/${slug}`,
}

export function getPrerenderCategoryIgnoreUrls(): string[] {
  const urls: string[] = []
  const locales: SupportedLocale[] = ['fr', 'en', 'es']
  for (const pathLocale of locales) {
    const correctSlugs = new Set(Object.values(CATEGORY_SLUGS[pathLocale]))
    for (const otherLocale of locales) {
      if (otherLocale === pathLocale) continue
      for (const slug of Object.values(CATEGORY_SLUGS[otherLocale])) {
        if (!correctSlugs.has(slug)) urls.push(pathByLocale[pathLocale](slug))
      }
    }
  }
  return [...new Set(urls)]
}
