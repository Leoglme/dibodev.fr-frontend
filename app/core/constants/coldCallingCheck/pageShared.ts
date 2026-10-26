/** Day the rules and their sources were last re-read: move it at each re-read. */
export const COLD_CALLING_CHECK_PAGE_UPDATED_AT: string = '2026-10-26'

export const COLD_CALLING_CHECK_ROUTE_NAME: string = 'tools-cold-calling-check'

export const COLD_CALLING_CHECK_QUIZ_ANCHOR_ID: string = 'test'

/** A `contact.form.projectType.*` key, preselected on the contact form. */
export const COLD_CALLING_CHECK_CONTACT_PROJECT_TYPE: string = 'website'

/** Articles listed under the page, by Storyblok slug. */
export const COLD_CALLING_CHECK_RELATED_ARTICLE_SLUGS: string[] = [
  'site-web-artisans-attirer-clients-locaux',
  'site-web-commerce-proximite-2026',
  'artisan-tpe-rennes-site-web-outil-metier-sur-mesure',
]

export const COLD_CALLING_CHECK_SOURCES = {
  consumerCodeConsentArticle: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042155931',
  consentDecree: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054483939',
  dgccrfBusinessRules:
    'https://www.economie.gouv.fr/dgccrf/les-fiches-pratiques/les-regles-du-demarchage-telephonique-simposant-aux-entreprises',
  servicePublicNews: 'https://entreprendre.service-public.gouv.fr/actualites/A19003',
  consumerCodePenaltyArticle: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042155954',
  cnilPhoneProspecting:
    'https://www.cnil.fr/fr/prospection-commerciale-par-telephone-hors-automate-dappel-quelles-sont-les-regles',
  cnilEmailProspecting:
    'https://www.cnil.fr/fr/la-prospection-commerciale-par-courrier-electronique-sms-mms-et-automate-dappel',
  cciGoogleListing:
    'https://www.savoie.cci.fr/article-la-fiche-etablissement-google-ou-comment-attirer-plus-de-clients',
} as const
