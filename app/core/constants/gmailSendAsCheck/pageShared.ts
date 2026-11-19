import type {
  DibodevGmailSendAsHostGuideArticle,
  DibodevGmailSendAsVerdict,
} from '~/core/types/DibodevGmailSendAsCheck'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import { NBSP } from '~/core/constants/typography'

/** Day the Google help pages and the Google Workspace prices were last re-read: move it at each re-read. */
export const GMAIL_SEND_AS_CHECK_PAGE_UPDATED_AT: string = '2026-11-19'

export const GMAIL_SEND_AS_CHECK_API_PATH: string = '/api/tools/gmail-send-as-check'

export const GMAIL_SEND_AS_CHECKER_ANCHOR_ID: string = 'verification'

export const GMAIL_SEND_AS_CHECK_ROUTE_NAME: string = 'tools-gmail-send-as-check'

/** `topic` query value that makes the contact form open with the Gmail message. */
export const GMAIL_SEND_AS_CONTACT_TOPIC: string = 'gmail-send-as'

export const GMAIL_SEND_AS_VERDICTS: DibodevGmailSendAsVerdict[] = [
  'bothAffected',
  'sendingAffected',
  'receivingAffected',
  'notAffected',
  'toCheck',
  'notInGmail',
  'googleHosted',
  'gmailAddress',
  'noMailSetup',
  'invalidDomain',
]

/** Verdicts that leave something to do before January 2027: the card then lists the ways out and the guide of the host. */
export const GMAIL_SEND_AS_VERDICTS_WITH_SOLUTIONS: DibodevGmailSendAsVerdict[] = [
  'bothAffected',
  'sendingAffected',
  'receivingAffected',
  'toCheck',
]

export const GMAIL_SEND_AS_VERDICT_ICONS: Record<DibodevGmailSendAsVerdict, string> = {
  bothAffected: 'XCircle',
  sendingAffected: 'AlertCircle',
  receivingAffected: 'AlertCircle',
  notAffected: 'CheckCircle',
  toCheck: 'Info',
  notInGmail: 'CheckCircle',
  googleHosted: 'CheckCircle',
  gmailAddress: 'CheckCircle',
  noMailSetup: 'Info',
  invalidDomain: 'XCircle',
}

/** Blog guide of each mail host; a guide not published yet is left out by the page. */
export const GMAIL_SEND_AS_HOST_GUIDE_ARTICLES: DibodevGmailSendAsHostGuideArticle[] = [
  { mailHost: 'ovh', slug: 'mail-ovh-sur-gmail-janvier-2027-que-faire' },
  { mailHost: 'o2switch', slug: 'mail-o2switch-sur-gmail-janvier-2027-que-faire' },
  { mailHost: 'ionos', slug: 'mail-ionos-sur-gmail-janvier-2027-que-faire' },
]

/** Blog guide shown for an address of an internet provider (Orange, Free, SFR, La Poste). */
export const GMAIL_SEND_AS_CONSUMER_MAILBOX_GUIDE_SLUG: string = 'mail-orange-free-sfr-sur-gmail-janvier-2027-que-faire'

/** Articles listed at the bottom of the page; the untranslated or unpublished ones are left out automatically. */
export const GMAIL_SEND_AS_RELATED_ARTICLE_SLUGS: string[] = [
  'gmail-n-envoie-plus-avec-mon-adresse-professionnelle-que-faire',
  'passer-gmail-gratuit-google-workspace-adresse-professionnelle',
  ...GMAIL_SEND_AS_HOST_GUIDE_ARTICLES.map((guide: DibodevGmailSendAsHostGuideArticle): string => guide.slug),
  GMAIL_SEND_AS_CONSUMER_MAILBOX_GUIDE_SLUG,
]

/** Google help pages read on 19 November 2026; each language adds its own `?hl=`. */
export const GMAIL_HELP_PAGE_URLS: Record<
  'thirdPartyChanges' | 'gmailifyAndPop' | 'sendMailAs' | 'addAccount' | 'forwarding',
  string
> = {
  thirdPartyChanges: 'https://support.google.com/mail/answer/17101213',
  gmailifyAndPop: 'https://support.google.com/mail/answer/16604719',
  sendMailAs: 'https://support.google.com/mail/answer/22370',
  addAccount: 'https://support.google.com/mail/answer/21289',
  forwarding: 'https://support.google.com/mail/answer/175365',
}

/** Google Workspace price page for France, read on 19 November 2026. */
export const GOOGLE_WORKSPACE_PRICING_URL: string = 'https://workspace.google.com/intl/fr/pricing'

/** The Gmail check, teased from the tools hub, the mail deliverability tool and the articles of the series. */
export const GMAIL_SEND_AS_CHECK_TEASER: DibodevToolTeaserContent = {
  toolId: 'gmail-send-as-check',
  routeName: GMAIL_SEND_AS_CHECK_ROUTE_NAME,
  icon: 'Mail',
  wording: {
    fr: {
      emphasizedIntro: `Votre adresse professionnelle est-elle concernée${NBSP}?`,
      text: `À partir de janvier 2027, un Gmail gratuit n’envoie plus avec une adresse hébergée ailleurs et ne la relève plus. Entrez votre adresse${NBSP}: l’outil dit où elle est hébergée et ce qui s’arrête pour vous.`,
      linkLabel: 'Tester mon adresse',
      listLabel: `Gmail, janvier 2027${NBSP}: mon adresse est-elle concernée${NBSP}?`,
      hubDescription: `Fin de «${NBSP}Envoyer en tant que${NBSP}» et de «${NBSP}Consulter d’autres comptes de messagerie${NBSP}» dans Gmail gratuit${NBSP}: l’outil lit où votre adresse est hébergée, pose trois questions et dit ce qui s’arrête, avec les solutions et leur coût.`,
      hubMeta: '1 adresse · 3 questions',
    },
    en: {
      emphasizedIntro: 'Is your business address affected?',
      text: 'From January 2027, a free Gmail no longer sends with an address hosted elsewhere and no longer fetches it. Enter your address: the tool tells you where it is hosted and what stops for you.',
      linkLabel: 'Test my address',
      listLabel: 'Gmail, January 2027: is my address affected?',
      hubDescription:
        'End of “Send mail as” and “Check mail from other accounts” in free Gmail: the tool reads where your address is hosted, asks three questions and tells you what stops, with the ways out and their cost.',
      hubMeta: '1 address · 3 questions',
    },
    es: {
      emphasizedIntro: '¿Tu dirección profesional está afectada?',
      text: 'A partir de enero de 2027, un Gmail gratuito ya no envía con una dirección alojada en otro proveedor ni la recoge. Escribe tu dirección: la herramienta te dice dónde está alojada y qué deja de funcionar.',
      linkLabel: 'Probar mi dirección',
      listLabel: 'Gmail, enero de 2027: ¿mi dirección está afectada?',
      hubDescription:
        'Fin de «Enviar como» y de «Consultar el correo de otras cuentas» en Gmail gratuito: la herramienta lee dónde está alojada tu dirección, hace tres preguntas y te dice qué deja de funcionar, con las soluciones y su coste.',
      hubMeta: '1 dirección · 3 preguntas',
    },
  },
}
