import type { LocationQueryRaw } from 'vue-router'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import { NBSP } from '~/core/constants/typography'

/** Route name of the service page (`app/pages/joomla-update-service.vue`). */
export const JOOMLA_UPDATE_SERVICE_ROUTE_NAME: string = 'joomla-update-service'

/** French path of the page, the `@id` of its Service JSON-LD. */
export const JOOMLA_UPDATE_SERVICE_PAGE_PATH: string = '/mise-a-jour-site-joomla'

/** `topic` query value that makes the contact form open with the "update my Joomla site" message. */
export const JOOMLA_UPDATE_CONTACT_TOPIC: string = 'joomla-update'

/** Choices of the contact form that match the Joomla offer: a website under 2 000 €. */
export const JOOMLA_UPDATE_CONTACT_PRESELECTION: LocationQueryRaw = {
  type: 'website',
  budget: 'under_2k',
}

/** Query of the contact page opened by the buttons of the service page: the topic writes the message, `type` and `budget` select a website under 2 000 €. */
export const JOOMLA_UPDATE_CONTACT_QUERY: LocationQueryRaw = {
  topic: JOOMLA_UPDATE_CONTACT_TOPIC,
  ...JOOMLA_UPDATE_CONTACT_PRESELECTION,
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

/** Teaser of the service, shown under the Joomla version checker. */
export const JOOMLA_UPDATE_SERVICE_TEASER: DibodevToolTeaserContent = {
  toolId: 'joomla-update-service',
  routeName: JOOMLA_UPDATE_SERVICE_ROUTE_NAME,
  icon: 'Wrench',
  wording: {
    fr: {
      emphasizedIntro: `Vous préférez que je m’en occupe${NBSP}?`,
      text: `Passage à Joomla 6 et à PHP 8.3 à distance, après sauvegarde et test sur une copie, sans changer l’apparence du site. Diagnostic gratuit, montée de version dès 190${NBSP}€, réponse sous 24${NBSP}h.`,
      linkLabel: 'Voir l’offre et les prix',
      listLabel: `Mise à jour Joomla${NBSP}: offre et prix`,
    },
    en: {
      emphasizedIntro: 'Rather have me handle it?',
      text: 'Move to Joomla 6 and PHP 8.3, done remotely after a backup and a test on a copy, without changing how the site looks. Free diagnosis, upgrade from €190, reply within 24 hours.',
      linkLabel: 'See the offer and prices',
      listLabel: 'Joomla update: offer and prices',
    },
    es: {
      emphasizedIntro: '¿Prefieres que me ocupe yo?',
      text: 'Paso a Joomla 6 y PHP 8.3 a distancia, tras una copia de seguridad y una prueba en una copia, sin cambiar el aspecto de tu web. Diagnóstico gratuito, actualización desde 190 €, respuesta en 24 h.',
      linkLabel: 'Ver la oferta y los precios',
      listLabel: 'Actualización de Joomla: oferta y precios',
    },
  },
}
