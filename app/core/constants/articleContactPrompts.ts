import type { DibodevContactPromptContent } from '~/core/types/DibodevContactPrompt'
import { PHP_VULNERABILITY_CONTACT_TOPIC } from '~/core/constants/phpVulnerabilityCheck/pageShared'
import { NBSP } from '~/core/constants/typography'

const PHP_VULNERABILITY_CONTACT_PROMPT: DibodevContactPromptContent = {
  icon: 'MessageCircle',
  contactQuery: { topic: PHP_VULNERABILITY_CONTACT_TOPIC },
  wording: {
    fr: {
      emphasizedIntro: `Pas le temps de tout lire${NBSP}?`,
      text: `Envoyez-moi l’adresse de votre site, je vous dis sous 24${NBSP}h s’il est concerné et quoi faire. Gratuit, sans engagement.`,
      linkLabel: 'Envoyer mon adresse',
      barText: `Un doute sur votre site${NBSP}?`,
      barButtonLabel: 'Envoyer mon adresse',
    },
    en: {
      emphasizedIntro: 'No time to read it all?',
      text: 'Send me your site’s address and I’ll tell you within 24 hours whether it is affected and what to do. Free, no commitment.',
      linkLabel: 'Send my address',
      barText: 'Worried about your site?',
      barButtonLabel: 'Send my address',
    },
    es: {
      emphasizedIntro: '¿Sin tiempo para leerlo todo?',
      text: 'Envíame la dirección de tu web y te digo en 24 h si está afectada y qué hacer. Gratis, sin compromiso.',
      linkLabel: 'Enviar mi dirección',
      barText: '¿Dudas sobre tu web?',
      barButtonLabel: 'Enviar mi dirección',
    },
  },
}

/** Articles that carry a contact prompt after their introduction and a contact bar on small screens. */
export const CONTACT_PROMPTS_BY_ARTICLE_SLUG: Record<string, DibodevContactPromptContent> = {
  'faille-php-octobre-2026-site-boutique-logiciel-que-faire': PHP_VULNERABILITY_CONTACT_PROMPT,
  'changer-version-php-ovh-faille-octobre-2026': PHP_VULNERABILITY_CONTACT_PROMPT,
  'changer-version-php-o2switch-faille-octobre-2026': PHP_VULNERABILITY_CONTACT_PROMPT,
  'changer-version-php-ionos-faille-octobre-2026': PHP_VULNERABILITY_CONTACT_PROMPT,
  'changer-version-php-hostinger-faille-octobre-2026': PHP_VULNERABILITY_CONTACT_PROMPT,
  'changer-version-php-infomaniak-faille-octobre-2026': PHP_VULNERABILITY_CONTACT_PROMPT,
  'changer-version-php-planethoster-faille-octobre-2026': PHP_VULNERABILITY_CONTACT_PROMPT,
}
