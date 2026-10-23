import type { DibodevContactPromptContent } from '~/core/types/DibodevContactPrompt'
import { E_INVOICING_CONTACT_TOPIC } from '~/core/constants/eInvoicingCheck/pageShared'
import { PHP_VULNERABILITY_CONTACT_TOPIC } from '~/core/constants/phpVulnerabilityCheck/pageShared'
import { NBSP } from '~/core/constants/typography'

const PHP_VULNERABILITY_CONTACT_PROMPT: DibodevContactPromptContent = {
  icon: 'MessageCircle',
  contactQuery: { topic: PHP_VULNERABILITY_CONTACT_TOPIC },
  wording: {
    fr: {
      emphasizedIntro: `Pas le temps de tout lire${NBSP}?`,
      text: `Envoyez-moi le lien de votre site, je vous dis sous 24${NBSP}h s’il est concerné et quoi faire. Gratuit, sans engagement.`,
      linkLabel: 'Envoyer le lien de mon site',
      barText: `Un doute sur votre site${NBSP}?`,
      barButtonLabel: 'Envoyer le lien de mon site',
    },
    en: {
      emphasizedIntro: 'No time to read it all?',
      text: 'Send me the link to your site and I’ll tell you within 24 hours whether it is affected and what to do. Free, no commitment.',
      linkLabel: 'Send my website link',
      barText: 'Worried about your site?',
      barButtonLabel: 'Send my website link',
    },
    es: {
      emphasizedIntro: '¿Sin tiempo para leerlo todo?',
      text: 'Envíame el enlace de tu web y te digo en 24 h si está afectada y qué hacer. Gratis, sin compromiso.',
      linkLabel: 'Enviar el enlace de mi web',
      barText: '¿Dudas sobre tu web?',
      barButtonLabel: 'Enviar el enlace de mi web',
    },
  },
}

const E_INVOICING_CONTACT_PROMPT: DibodevContactPromptContent = {
  icon: 'MessageCircle',
  contactQuery: { topic: E_INVOICING_CONTACT_TOPIC },
  wording: {
    fr: {
      emphasizedIntro: `Vous ne savez pas si votre logiciel est prêt${NBSP}?`,
      text: `Dites-moi son nom et votre activité, je vous dis sous 24${NBSP}h ce qu’il reste à faire pour recevoir et émettre vos factures électroniques. Gratuit, sans engagement.`,
      linkLabel: 'Décrire mon cas',
      barText: `Votre logiciel est-il prêt pour 2027${NBSP}?`,
      barButtonLabel: 'Décrire mon cas',
    },
    en: {
      emphasizedIntro: 'Not sure your software is ready?',
      text: 'Tell me its name and your business, and within 24 hours I’ll tell you what is left to do to receive and issue your electronic invoices. Free, no commitment.',
      linkLabel: 'Describe my case',
      barText: 'Is your software ready for 2027?',
      barButtonLabel: 'Describe my case',
    },
    es: {
      emphasizedIntro: '¿No sabes si tu software está listo?',
      text: 'Dime su nombre y tu actividad, y en 24 h te digo qué queda por hacer para recibir y emitir tus facturas electrónicas. Gratis, sin compromiso.',
      linkLabel: 'Describir mi caso',
      barText: '¿Tu software está listo para 2027?',
      barButtonLabel: 'Describir mi caso',
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
  'facture-electronique-artisan-ce-qui-change': E_INVOICING_CONTACT_PROMPT,
}
