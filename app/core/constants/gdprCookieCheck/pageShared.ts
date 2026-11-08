import type { DibodevGdprConsentToolKey, DibodevGdprCookieCheckVerdict } from '~/core/types/DibodevGdprCookieCheck'
import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import { NBSP } from '~/core/constants/typography'

/** Day the rules and their sources were last re-read: move it at each re-read. */
export const GDPR_COOKIE_CHECK_PAGE_UPDATED_AT: string = '2026-11-08'

export const GDPR_COOKIE_CHECK_API_PATH: string = '/api/tools/gdpr-cookie-check'

export const GDPR_COOKIE_CHECKER_ANCHOR_ID: string = 'verification'

export const GDPR_COOKIE_CHECK_ROUTE_NAME: string = 'tools-gdpr-cookie-check'

export const GDPR_COOKIE_CHECK_CONTACT_TOPIC: string = 'gdpr-check'

export const GDPR_COOKIE_CHECK_VERDICTS: DibodevGdprCookieCheckVerdict[] = [
  'compliantLikely',
  'needsCheck',
  'atRisk',
  'unknown',
]

/** Article 82 of the French data protection act: consent before reading or writing on the visitor's device, except what is strictly necessary (in force since 1 June 2019). */
export const GDPR_ARTICLE_82_SOURCE: DibodevSourceReference = {
  name: 'Légifrance',
  url: 'https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000037813978',
}

/** CNIL guidelines of 17 September 2020: browsing on is not consent, refusing as simple as accepting, the publisher answers for third-party trackers. */
export const GDPR_CNIL_GUIDELINES_SOURCE: DibodevSourceReference = {
  name: 'CNIL (Légifrance)',
  url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000042388179',
}

/** CNIL recommendation of 17 September 2020: "accept all" and "refuse all" on the same level, choice kept six months, a "manage my cookies" link or icon on every page. */
export const GDPR_CNIL_RECOMMENDATION_SOURCE: DibodevSourceReference = {
  name: 'CNIL (Légifrance)',
  url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000042388197',
}

/** CNIL page on the audience measurement exempted from consent (4 July 2025): exclusive account of the publisher, anonymous statistics, 13 and 25 months. */
export const GDPR_CNIL_AUDIENCE_SOURCE: DibodevSourceReference = {
  name: 'CNIL',
  url: 'https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies-solutions-pour-les-outils-de-mesure-daudience',
}

/** Configuration guide of Matomo Analytics for the exemption, hosted by the CNIL within its evaluation programme. */
export const GDPR_CNIL_MATOMO_GUIDE_SOURCE: DibodevSourceReference = {
  name: 'CNIL',
  url: 'https://www.cnil.fr/sites/default/files/atoms/files/matomo_analytics_-_exemption_-_guide_de_configuration.pdf',
}

/** CNIL questions and answers on cookies (29 April 2026): embedded videos and share buttons, CAPTCHA and reCAPTCHA, "refuse all" button. */
export const GDPR_CNIL_FAQ_SOURCE: DibodevSourceReference = {
  name: 'CNIL',
  url: 'https://www.cnil.fr/fr/cookies-et-autres-traceurs/regles/cookies/FAQ',
}

/** CNIL recommendation on session replay tools (8 October 2026, Official Journal of 5 November 2026): prior consent, masking, no passwords nor card data. */
export const GDPR_CNIL_SESSION_REPLAY_SOURCE: DibodevSourceReference = {
  name: 'CNIL (Légifrance)',
  url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000055058587',
}

/** Sanctions published by the CNIL (page of 14 April 2026), cookie decisions of small companies under the simplified procedure included. */
export const GDPR_CNIL_SANCTIONS_SOURCE: DibodevSourceReference = {
  name: 'CNIL',
  url: 'https://www.cnil.fr/fr/les-sanctions-prononcees-par-la-cnil',
}

/** Mandatory mentions of a business website and privacy policy link on every page (checked on 13 October 2026). */
export const GDPR_LEGAL_NOTICE_SOURCE: DibodevSourceReference = {
  name: 'Service-public.fr',
  url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F37351',
}

/** Google's consent mode: what "denied" does, and the basic and advanced implementations. */
export const GDPR_GOOGLE_CONSENT_MODE_SOURCE: DibodevSourceReference = {
  name: 'Google',
  url: 'https://developers.google.com/tag-platform/security/concepts/consent-mode',
}

/** YouTube's privacy-enhanced mode (youtube-nocookie.com), as Google describes it. */
export const GDPR_YOUTUBE_PRIVACY_MODE_SOURCE: DibodevSourceReference = {
  name: 'Google',
  url: 'https://support.google.com/youtube/answer/171780',
}

/** Brand names of the consent tools, the same in every language. */
export const GDPR_CONSENT_TOOL_LABELS: Record<DibodevGdprConsentToolKey, string> = {
  axeptio: 'Axeptio',
  didomi: 'Didomi',
  tarteaucitron: 'tarteaucitron',
  cookiebot: 'Cookiebot',
  cookieyes: 'CookieYes',
  complianz: 'Complianz',
  oneTrust: 'OneTrust',
  iubenda: 'Iubenda',
  usercentrics: 'Usercentrics',
  sirdata: 'Sirdata',
  appConsent: 'AppConsent',
  klaro: 'Klaro',
  cookieFirst: 'CookieFirst',
  termly: 'Termly',
  borlabs: 'Borlabs Cookie',
  realCookieBanner: 'Real Cookie Banner',
  commandersAct: 'Commanders Act',
  consentManager: 'consentmanager',
  quantcast: 'Quantcast Choice',
  cookieScript: 'Cookie Script',
  gdprCookieCompliance: 'GDPR Cookie Compliance',
  cookieNotice: 'Cookie Notice',
  googleConsentMessages: 'Google Privacy & messaging',
  cookieConsentLibrary: 'CookieConsent',
}

/** The GDPR cookie check, teased from the tools hub and the result card of the website health check. */
export const GDPR_COOKIE_CHECK_TEASER: DibodevToolTeaserContent = {
  toolId: 'gdpr-cookie-check',
  routeName: GDPR_COOKIE_CHECK_ROUTE_NAME,
  icon: 'Eye',
  wording: {
    fr: {
      emphasizedIntro: `Votre site est-il conforme au RGPD${NBSP}?`,
      text: 'L’outil lit votre page d’accueil, repère les traceurs chargés avant le choix du visiteur (Google Analytics, Meta, Hotjar, YouTube…), l’outil de consentement et les liens obligatoires.',
      linkLabel: `Tester les cookies de mon site${NBSP}: test RGPD gratuit`,
      listLabel: `Site conforme RGPD${NBSP}? Tester les cookies`,
      hubDescription: `Google Analytics, pixel Meta, Hotjar, YouTube, Google Maps, reCAPTCHA${NBSP}: les traceurs qui partent avant le choix du visiteur, l’outil de consentement et les trois liens obligatoires, avec quoi faire.`,
      hubMeta: '1 adresse · 10 secondes',
    },
    en: {
      emphasizedIntro: 'Is your website GDPR compliant?',
      text: 'The tool reads your home page, spots the trackers loaded before the visitor’s choice (Google Analytics, Meta, Hotjar, YouTube…), the consent tool and the mandatory links.',
      linkLabel: 'Check my website’s cookies: free GDPR test',
      listLabel: 'GDPR compliant website? Check the cookies',
      hubDescription:
        'Google Analytics, Meta pixel, Hotjar, YouTube, Google Maps, reCAPTCHA: the trackers loaded before the visitor’s choice, the consent tool and the three mandatory links under French rules, with what to do.',
      hubMeta: '1 address · 10 seconds',
    },
    es: {
      emphasizedIntro: '¿Tu web cumple el RGPD?',
      text: 'La herramienta lee tu página de inicio, detecta los rastreadores cargados antes de la elección del visitante (Google Analytics, Meta, Hotjar, YouTube…), la herramienta de consentimiento y los enlaces obligatorios.',
      linkLabel: 'Comprobar las cookies de mi web: test RGPD gratuito',
      listLabel: '¿Web conforme al RGPD? Comprobar las cookies',
      hubDescription:
        'Google Analytics, píxel de Meta, Hotjar, YouTube, Google Maps, reCAPTCHA: los rastreadores que se cargan antes de la elección del visitante, la herramienta de consentimiento y los tres enlaces obligatorios en Francia, con qué hacer.',
      hubMeta: '1 dirección · 10 segundos',
    },
  },
}
