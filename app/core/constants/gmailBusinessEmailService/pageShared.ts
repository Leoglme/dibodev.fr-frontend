import type { LocationQueryRaw } from 'vue-router'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import {
  GMAIL_SEND_AS_CONTACT_TOPIC,
  GMAIL_SEND_AS_RELATED_ARTICLE_SLUGS,
} from '~/core/constants/gmailSendAsCheck/pageShared'
import { NBSP } from '~/core/constants/typography'

/** Route name of the service page (`app/pages/gmail-business-email-service.vue`). */
export const GMAIL_BUSINESS_EMAIL_SERVICE_ROUTE_NAME: string = 'gmail-business-email-service'

/** French path of the page, the `@id` of its Service JSON-LD. */
export const GMAIL_BUSINESS_EMAIL_SERVICE_PAGE_PATH: string = '/adresse-mail-professionnelle-gmail'

/** Query of the contact page opened by the buttons of the service page: the topic writes the message, `type` and `budget` select a small job. */
export const GMAIL_BUSINESS_EMAIL_CONTACT_QUERY: LocationQueryRaw = {
  topic: GMAIL_SEND_AS_CONTACT_TOPIC,
  type: 'other',
  budget: 'under_2k',
}

/** Kinds of service declared in the JSON-LD, in English as schema.org readers expect. */
export const GMAIL_BUSINESS_EMAIL_SERVICE_TYPES: string[] = [
  'Business email setup',
  'Google Workspace migration',
  'Email forwarding setup',
  'SPF, DKIM and DMARC configuration',
]

/** Starting prices of the JSON-LD offers in euros, in the order of the cards of the page (0 = free diagnosis). */
export const GMAIL_BUSINESS_EMAIL_SERVICE_OFFER_PRICES_EUR: number[] = [0, 90, 190]

/** Articles listed at the bottom of the page: the whole Gmail series; the unpublished ones are left out automatically. */
export const GMAIL_BUSINESS_EMAIL_SERVICE_RELATED_ARTICLE_SLUGS: string[] = GMAIL_SEND_AS_RELATED_ARTICLE_SLUGS

/** Teaser of the service, shown under the Gmail checker and at the end of the articles of the series. */
export const GMAIL_BUSINESS_EMAIL_SERVICE_TEASER: DibodevToolTeaserContent = {
  toolId: 'gmail-business-email-service',
  routeName: GMAIL_BUSINESS_EMAIL_SERVICE_ROUTE_NAME,
  icon: 'Wrench',
  wording: {
    fr: {
      emphasizedIntro: `Vous préférez que je m’en occupe${NBSP}?`,
      text: `Je règle votre adresse professionnelle à distance${NBSP}: transfert vers Gmail à partir de 90${NBSP}€, ou passage de votre Gmail en Google Workspace à partir de 190${NBSP}€. Diagnostic gratuit, réponse sous 24${NBSP}h.`,
      linkLabel: 'Voir l’offre et les prix',
      listLabel: `Adresse mail professionnelle dans Gmail${NBSP}: offre et prix`,
    },
    en: {
      emphasizedIntro: 'Rather have me handle it?',
      text: 'I set up your business address remotely: forwarding to Gmail from €90, or your Gmail upgraded to Google Workspace from €190. Free diagnosis, reply within 24 hours.',
      linkLabel: 'See the offer and prices',
      listLabel: 'Business email address in Gmail: offer and prices',
    },
    es: {
      emphasizedIntro: '¿Prefieres que me ocupe yo?',
      text: `Configuro tu dirección profesional a distancia: reenvío a Gmail desde 90${NBSP}€, o paso de tu Gmail a Google Workspace desde 190${NBSP}€. Diagnóstico gratuito, respuesta en 24${NBSP}h.`,
      linkLabel: 'Ver la oferta y los precios',
      listLabel: 'Dirección de correo profesional en Gmail: oferta y precios',
    },
  },
}
