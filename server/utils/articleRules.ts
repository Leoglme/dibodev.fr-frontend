/**
 * Règles centralisées pour la génération d'articles.
 * Limites de longueur (caractères) par section et pour l'article total.
 */

/** Phrases de remplissage / marketing interdites (configurable). "gagner du temps" retiré par défaut. */
export const DEFAULT_BANNED_FILLER_PHRASES: string[] = [
  'en résumé',
  'en conclusion',
  'pour résumer',
  'pour conclure',
  'productivité',
  'optimal',
  'optimale',
  'opportunités de croissance',
  'fidéliser sa clientèle',
  'moins de stress',
  'plus de temps',
  'améliorer votre organisation',
  'solution dédiée',
  'sans surprise',
  'outil qui vous ressemble',
  'solution intégrée',
  'transformer votre organisation',
  'gagner en sérénité',
  'gagner en efficacité',
]

export const ARTICLE_RULES = {
  maxCharsIntro: 700,
  maxCharsCost: 800,
  maxCharsExample: 550,
  maxCharsCTA: 375,
  maxCharsPerSectionDefault: 800,
  maxCharsTotal: 10_500,
  maxTotalCharsArticle: 10_500,
  maxSectionSimilarity: 0.45,
  maxRetriesPerSection: 2,
  maxRetriesFullArticle: 2,
  maxParagraphBreaksExample: 0,
  bannedFillerPhrases: [...DEFAULT_BANNED_FILLER_PHRASES],
} as const

export type ArticleRules = typeof ARTICLE_RULES
