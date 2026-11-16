import type { DibodevGoogleUpdateImpactVerdict } from '~/core/types/DibodevGoogleUpdateImpact'
import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import { NBSP } from '~/core/constants/typography'

/** Day the dates and the sources of the page were last re-read: move it at each re-read. */
export const GOOGLE_UPDATE_IMPACT_PAGE_UPDATED_AT: string = '2026-11-16'

export const GOOGLE_UPDATE_IMPACT_ROUTE_NAME: string = 'tools-google-update-impact-check'

export const GOOGLE_UPDATE_IMPACT_CHECKER_ANCHOR_ID: string = 'outil'

/** Id of the test without Search Console, sent to PostHog as `tunnel` and as `tool` by the teasers. */
export const GOOGLE_UPDATE_IMPACT_QUIZ_ID: string = 'google-update-impact'

/** The `topic` that opens the contact form on the message of the tool. */
export const GOOGLE_UPDATE_CONTACT_TOPIC: string = 'google-update'

/** Every verdict of the export, accepted in the `verdict` query of the contact page. */
export const GOOGLE_UPDATE_IMPACT_VERDICTS: DibodevGoogleUpdateImpactVerdict[] = [
  'affected',
  'stable',
  'winner',
  'startedBefore',
  'tooEarly',
  'unreadable',
]

/** Articles listed under the page, by Storyblok slug; a slug without a published article is skipped. */
export const GOOGLE_UPDATE_IMPACT_RELATED_ARTICLE_SLUGS: string[] = [
  'mise-a-jour-google-novembre-2026-site-touche-que-faire',
  'site-wordpress-pirate-verifications-a-faire-aujourd-hui',
  'site-web-artisans-attirer-clients-locaux',
]

/** Google's page on core updates: not aimed at a site, wait a full week after the end, compare with a week before, no quick fixes. */
export const GOOGLE_CORE_UPDATES_SOURCE: DibodevSourceReference = {
  name: 'Google Search Central',
  url: 'https://developers.google.com/search/docs/appearance/core-updates?hl=fr',
}

/** Google's guide to traffic drops: technical issues, security, spam, site moves, seasonality, updates. */
export const GOOGLE_TRAFFIC_DROPS_SOURCE: DibodevSourceReference = {
  name: 'Google Search Central',
  url: 'https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops?hl=fr',
}

/** The tool, teased from the tools hub, the footer and the related pages. */
export const GOOGLE_UPDATE_IMPACT_CHECK_TEASER: DibodevToolTeaserContent = {
  toolId: GOOGLE_UPDATE_IMPACT_QUIZ_ID,
  routeName: GOOGLE_UPDATE_IMPACT_ROUTE_NAME,
  icon: 'Search',
  wording: {
    fr: {
      emphasizedIntro: `Vos visites venant de Google ont bougé depuis le 10 novembre${NBSP}?`,
      text: `Google déploie une mise à jour générale de son classement depuis le 10 novembre 2026. Déposez l’export de votre Search Console, ou répondez à 5 questions${NBSP}: l’outil vous dit si votre site est touché, et quoi faire.`,
      linkLabel: `Vérifier${NBSP}: mon site est-il touché par la mise à jour Google${NBSP}?`,
      listLabel: `Mise à jour Google${NBSP}: mon site est-il touché${NBSP}?`,
      hubDescription: `Export de la Search Console lu dans votre navigateur, ou test en 5 questions${NBSP}: touché, stable, gagnant ou trop tôt pour le dire, et ce qu’il faut faire, ou ne pas faire.`,
      hubMeta: '1 fichier ou 5 questions · 2 minutes',
    },
    en: {
      emphasizedIntro: 'Has your Google traffic moved since 10 November?',
      text: 'Google has been rolling out a broad update of its ranking since 10 November 2026. Drop your Search Console export, or answer 5 questions: the tool tells you whether your site is affected, and what to do.',
      linkLabel: 'Check: is my site affected by the Google update?',
      listLabel: 'Google update: is my site affected?',
      hubDescription:
        'Search Console export read in your browser, or a 5-question test: affected, stable, winner or too early to tell, and what to do, or not to do.',
      hubMeta: '1 file or 5 questions · 2 minutes',
    },
    es: {
      emphasizedIntro: '¿Tus visitas desde Google han cambiado desde el 10 de noviembre?',
      text: 'Google despliega una actualización general de su clasificación desde el 10 de noviembre de 2026. Deja la exportación de tu Search Console, o responde a 5 preguntas: la herramienta te dice si tu web está afectada, y qué hacer.',
      linkLabel: 'Comprobar: ¿mi web está afectada por la actualización de Google?',
      listLabel: 'Actualización de Google: ¿mi web está afectada?',
      hubDescription:
        'Exportación de Search Console leída en tu navegador, o test de 5 preguntas: afectada, estable, ganadora o demasiado pronto para saberlo, y qué hacer, o no hacer.',
      hubMeta: '1 archivo o 5 preguntas · 2 minutos',
    },
  },
}
