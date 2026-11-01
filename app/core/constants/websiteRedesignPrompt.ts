import type { LocationQueryRaw } from 'vue-router'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevWebsiteRedesignPromptWording } from '~/core/types/DibodevWebsiteRedesignPrompt'
import { NBSP } from '~/core/constants/typography'

/** `topic` query value that makes the contact form open with the "redesign my website" message. */
export const WEBSITE_REDESIGN_CONTACT_TOPIC: string = 'website-redesign'

/** Query of the contact page opened by the redesign prompt: the topic writes the message, `type` selects a website project. */
export const WEBSITE_REDESIGN_CONTACT_QUERY: LocationQueryRaw = {
  topic: WEBSITE_REDESIGN_CONTACT_TOPIC,
  type: 'website',
}

export const WEBSITE_REDESIGN_PROMPT_WORDING: Record<SupportedLocale, DibodevWebsiteRedesignPromptWording> = {
  fr: {
    emphasizedIntro: `Votre site a vieilli${NBSP}? Refonte de site vitrine dès 1${NBSP}500${NBSP}€.`,
    text: `Un site clair et rapide, bien référencé sur Google, construit sur des outils à jour et que vous modifiez vous-même. Devis gratuit au forfait, réponse sous 24${NBSP}h.`,
    linkLabel: 'Parler de la refonte de mon site',
  },
  en: {
    emphasizedIntro: 'Website looking dated? Showcase website redesign from €1,500.',
    text: 'A clear, fast website, well ranked on Google, built on up-to-date tools and easy to edit yourself. Free fixed-price quote, reply within 24 hours.',
    linkLabel: 'Talk about my website redesign',
  },
  es: {
    emphasizedIntro: `¿Tu web se ha quedado anticuada? Rediseño de sitio escaparate desde 1.500${NBSP}€.`,
    text: `Un sitio claro y rápido, bien posicionado en Google, hecho con herramientas actualizadas y que editas tú mismo. Presupuesto gratuito a precio cerrado, respuesta en 24${NBSP}h.`,
    linkLabel: 'Hablar del rediseño de mi web',
  },
}
