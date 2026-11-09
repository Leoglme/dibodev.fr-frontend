import type { MailLocale } from '~~/server/types/mail/contact'
import type { SiteCheckToolKey } from '~~/server/types/tools/siteCheckReport'

export const SITE_CHECK_TOOL_KEYS: SiteCheckToolKey[] = [
  'phpVulnerability',
  'wordpressHack',
  'joomlaVersion',
  'emailDeliverability',
  'websiteHealth',
  'gdprCookie',
]

/** The page of each checker in each language; mirrors the `i18n.paths` of `app/pages/tools/*.vue`. */
export const SITE_CHECK_TOOL_PAGE_PATHS: Record<SiteCheckToolKey, Record<MailLocale, string>> = {
  phpVulnerability: {
    fr: '/outils/faille-php-verifier-mon-site',
    en: '/en/tools/php-vulnerability-check',
    es: '/es/herramientas/vulnerabilidad-php-comprobar-mi-web',
  },
  wordpressHack: {
    fr: '/outils/site-wordpress-pirate-verifier',
    en: '/en/tools/wordpress-hacked-check',
    es: '/es/herramientas/wordpress-hackeado-comprobar',
  },
  joomlaVersion: {
    fr: '/outils/version-joomla-verifier-mon-site',
    en: '/en/tools/joomla-version-check',
    es: '/es/herramientas/version-joomla-comprobar-mi-web',
  },
  emailDeliverability: {
    fr: '/outils/mes-mails-arrivent-en-spam',
    en: '/en/tools/email-spam-check-spf-dkim-dmarc',
    es: '/es/herramientas/correos-llegan-a-spam',
  },
  websiteHealth: {
    fr: '/outils/tester-mon-site',
    en: '/en/tools/test-my-website',
    es: '/es/herramientas/probar-mi-web',
  },
  gdprCookie: {
    fr: '/outils/site-conforme-rgpd-cookies',
    en: '/en/tools/gdpr-cookie-check',
    es: '/es/herramientas/web-cumple-rgpd-cookies',
  },
}

/** The anchor of the checker form on every tool page. */
export const SITE_CHECK_TOOL_CHECKER_ANCHOR_ID: string = 'verification'
