import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import type {
  DibodevWebsiteHealthCheckKey,
  DibodevWebsiteHealthDetailedToolKey,
  DibodevWebsiteHealthVerdict,
} from '~/core/types/DibodevWebsiteHealthCheck'
import type { DibodevWebsiteHealthVerdictStyles } from '~/core/types/DibodevWebsiteHealthChecker'
import { EMAIL_DELIVERABILITY_CHECK_ROUTE_NAME } from '~/core/constants/emailDeliverabilityCheck/pageShared'
import { NBSP } from '~/core/constants/typography'
import { WORDPRESS_HACK_CHECK_ROUTE_NAME } from '~/core/constants/wordpressHackCheck/pageShared'

/** Day the checks and their texts were last re-read: move it at each re-read. */
export const WEBSITE_HEALTH_CHECK_PAGE_UPDATED_AT: string = '2026-11-02'

export const WEBSITE_HEALTH_CHECK_API_PATH: string = '/api/tools/website-health-check'

export const WEBSITE_HEALTH_CHECKER_ANCHOR_ID: string = 'verification'

export const WEBSITE_HEALTH_CHECK_ROUTE_NAME: string = 'tools-website-health-check'

/** Articles linked at the bottom of the page; the untranslated or unpublished ones are left out automatically. */
export const WEBSITE_HEALTH_CHECK_RELATED_ARTICLE_SLUGS: string[] = [
  'php-82-fin-de-vie-31-decembre-2026-que-faire',
  'site-wordpress-pirate-verifications-a-faire-aujourd-hui',
  'changer-version-php-ovh-faille-octobre-2026',
  'changer-version-php-o2switch-faille-octobre-2026',
  'site-web-artisans-attirer-clients-locaux',
]

/** The detailed checker of each point that has one, by route name. */
export const WEBSITE_HEALTH_DETAILED_TOOL_ROUTE_NAMES: Record<DibodevWebsiteHealthDetailedToolKey, string> = {
  php: 'tools-php-vulnerability-check',
  wordpress: WORDPRESS_HACK_CHECK_ROUTE_NAME,
  email: EMAIL_DELIVERABILITY_CHECK_ROUTE_NAME,
}

/** The checks that have a detailed checker to open when their verdict is not fine. */
export const WEBSITE_HEALTH_DETAILED_TOOL_BY_CHECK: Partial<
  Record<DibodevWebsiteHealthCheckKey, DibodevWebsiteHealthDetailedToolKey>
> = {
  php: 'php',
  wordpress: 'wordpress',
  email: 'email',
}

/** Verdicts under which the detailed checker is linked and the advice is shown: the ones where something is left to do. */
export const WEBSITE_HEALTH_VERDICTS_WITH_ADVICE: DibodevWebsiteHealthVerdict[] = ['warning', 'critical', 'unknown']

/** Icon and badge of each level, drawn on the dark result card. */
export const WEBSITE_HEALTH_VERDICT_STYLES: DibodevWebsiteHealthVerdictStyles = {
  ok: { icon: 'CheckCircle', badgeClass: 'bg-emerald-400/25 text-emerald-100' },
  warning: { icon: 'AlertCircle', badgeClass: 'bg-amber-400/25 text-amber-100' },
  critical: { icon: 'XCircle', badgeClass: 'bg-red-400/25 text-red-100' },
  unknown: { icon: 'Info', badgeClass: 'bg-white/15 text-white/85' },
}

/** The health check, teased from the tools hub, the footer and the PHP and WordPress result cards. */
export const WEBSITE_HEALTH_CHECK_TEASER: DibodevToolTeaserContent = {
  toolId: 'website-health-check',
  routeName: WEBSITE_HEALTH_CHECK_ROUTE_NAME,
  icon: 'Activity',
  wording: {
    fr: {
      emphasizedIntro: `Votre site est-il à jour, sécurisé et aux normes${NBSP}?`,
      text: 'En dix secondes, l’outil lit votre page d’accueil et vérifie huit points : HTTPS, PHP, WordPress, e-mails, affichage sur téléphone, titre et description, mentions légales, signes de site qui a vieilli.',
      linkLabel: `Tester mon site${NBSP}: 8 vérifications gratuites`,
      listLabel: `Tester mon site${NBSP}: 8 vérifications gratuites`,
      hubDescription: `HTTPS, PHP, WordPress, e-mails, téléphone, titre et description, mentions légales, signes d’âge${NBSP}: une adresse, huit verdicts, et quoi faire pour chacun.`,
      hubMeta: '1 adresse · 10 secondes',
    },
    en: {
      emphasizedIntro: 'Is your website up to date, secure and compliant?',
      text: 'In ten seconds, the tool reads your home page and checks eight points: HTTPS, PHP, WordPress, e-mails, phone display, title and description, legal notice, signs of an ageing site.',
      linkLabel: 'Test my website: 8 free checks',
      listLabel: 'Test my website: 8 free checks',
      hubDescription:
        'HTTPS, PHP, WordPress, e-mails, phone, title and description, legal notice, signs of age: one address, eight verdicts, and what to do for each.',
      hubMeta: '1 address · 10 seconds',
    },
    es: {
      emphasizedIntro: '¿Tu web está al día, segura y en regla?',
      text: 'En diez segundos, la herramienta lee tu página de inicio y comprueba ocho puntos: HTTPS, PHP, WordPress, correos, pantalla del móvil, título y descripción, aviso legal, señales de web envejecida.',
      linkLabel: 'Probar mi web: 8 comprobaciones gratuitas',
      listLabel: 'Probar mi web: 8 comprobaciones gratuitas',
      hubDescription:
        'HTTPS, PHP, WordPress, correos, móvil, título y descripción, aviso legal, señales de edad: una dirección, ocho veredictos, y qué hacer con cada uno.',
      hubMeta: '1 dirección · 10 segundos',
    },
  },
}
