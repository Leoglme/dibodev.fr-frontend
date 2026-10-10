/** Number of articles listed under a project page. */
export const PROJECT_RELATED_ARTICLES_COUNT: number = 3

/** Articles loaded to pick the related ones from (Storyblok serves 100 per page at most). */
export const PROJECT_RELATED_ARTICLES_POOL_SIZE: number = 100

/** Articles listed under each project page (keyed by project slug, in display order), chosen from the Google queries the page already appears on; an article not published yet is skipped until it is online. */
export const RELATED_ARTICLE_SLUGS_BY_PROJECT_SLUG: Record<string, string[]> = {
  'driving-school': [
    'logiciel-rdv-auto-ecole-reservation-en-ligne',
    'logiciel-gestion-auto-ecole-planning-eleves-heures',
    'logiciel-reservation-en-ligne-sur-mesure-loisirs',
  ],
  izidoor: [
    'logiciel-reservation-en-ligne-sur-mesure-loisirs',
    'coach-sportif-limiter-les-annulations-avec-un-outil-de-reservation-en-ligne',
    'logiciel-metier-saas-etagere-ou-sur-mesure',
  ],
  'gestion-temps': [
    'logiciel-gestion-des-temps-feuilles-heures-excel',
    'logiciel-metier-b2b-quitter-excel-signes',
    'developpement-logiciel-b2b-sur-mesure-prix',
  ],
  stockpme: [
    'logiciel-gestion-de-stock-sur-mesure-pme-inventaire',
    'logiciel-metier-b2b-quitter-excel-signes',
    'application-metier-sur-mesure-guide-tpe-pme',
  ],
  'a2m-orizon-solution': [
    'developpeur-nuxt-freelance-rennes',
    'site-vitrine-ou-outil-metier-sur-mesure-que-choisir',
    'site-web-artisans-attirer-clients-locaux',
  ],
  devleadhunter: [
    'ia-pour-pme-sur-mesure-agents-rag',
    'site-web-artisans-attirer-clients-locaux',
    'artisan-tpe-rennes-site-web-outil-metier-sur-mesure',
  ],
  goupixdex: [
    'ia-pour-pme-sur-mesure-agents-rag',
    'logiciel-gestion-de-stock-sur-mesure-pme-inventaire',
    'application-metier-sur-mesure-guide-tpe-pme',
  ],
  signdex: [
    'logiciel-metier-saas-etagere-ou-sur-mesure',
    'application-metier-sur-mesure-guide-tpe-pme',
    'developpement-logiciel-b2b-sur-mesure-prix',
  ],
  nightforge: [
    'ia-pour-pme-sur-mesure-agents-rag',
    'reprendre-application-vibe-coding',
    'developpeur-nuxt-freelance-rennes',
  ],
  'ai-pneumonia-detector': [
    'ia-pour-pme-sur-mesure-agents-rag',
    'application-metier-no-code-ia-limites',
    'application-metier-sur-mesure-guide-tpe-pme',
  ],
  aparteasy: [
    'creer-application-mobile-rennes-etapes-prix',
    'developpeur-nuxt-freelance-rennes',
    'site-vitrine-ou-outil-metier-sur-mesure-que-choisir',
  ],
  epitrip: [
    'ia-pour-pme-sur-mesure-agents-rag',
    'creer-application-mobile-rennes-etapes-prix',
    'developpeur-nuxt-freelance-rennes',
  ],
}

/** Articles listed under the projects without a list of their own (training and side projects): what Léo does for businesses. */
export const DEFAULT_PROJECT_RELATED_ARTICLE_SLUGS: string[] = [
  'developpeur-nuxt-freelance-rennes',
  'site-vitrine-ou-outil-metier-sur-mesure-que-choisir',
  'application-metier-sur-mesure-guide-tpe-pme',
]
