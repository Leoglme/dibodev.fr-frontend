import type { LocationQueryRaw } from 'vue-router'

/** Route name of the service page (`app/pages/joomla-update-service.vue`). */
export const JOOMLA_UPDATE_SERVICE_ROUTE_NAME: string = 'joomla-update-service'

/** French path of the page, the `@id` of its Service JSON-LD. */
export const JOOMLA_UPDATE_SERVICE_PAGE_PATH: string = '/mise-a-jour-site-joomla'

/** `topic` query value that makes the contact form open with the "update my Joomla site" message. */
export const JOOMLA_UPDATE_CONTACT_TOPIC: string = 'joomla-update'

/** Query of the contact page opened by the buttons of the service page: the topic writes the message, `type` and `budget` select a website under 2 000 €. */
export const JOOMLA_UPDATE_CONTACT_QUERY: LocationQueryRaw = {
  topic: JOOMLA_UPDATE_CONTACT_TOPIC,
  type: 'website',
  budget: 'under_2k',
}

/** Kinds of service declared in the JSON-LD, in English as schema.org readers expect. */
export const JOOMLA_UPDATE_SERVICE_TYPES: string[] = [
  'Joomla upgrade',
  'Joomla 6 migration',
  'PHP version upgrade',
  'Website maintenance',
]

/** Prices of the JSON-LD offers in euros, in the order of the cards of the page (0 = free diagnosis). */
export const JOOMLA_UPDATE_SERVICE_OFFER_PRICES_EUR: number[] = [0, 190, 390]

/** Articles listed at the bottom of the page; the untranslated or unpublished ones are left out automatically. */
export const JOOMLA_UPDATE_SERVICE_RELATED_ARTICLE_SLUGS: string[] = [
  'mettre-a-jour-site-joomla-vers-joomla-6',
  'hebergeur-arrete-anciennes-versions-php-que-faire',
  'php-82-fin-de-vie-31-decembre-2026-que-faire',
]
