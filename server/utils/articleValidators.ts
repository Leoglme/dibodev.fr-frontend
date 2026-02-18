/**
 * Validateurs pour le contenu des articles générés.
 * Fonctions pures, testables isolément.
 */

import { ARTICLE_RULES } from './articleRules'

/** Stopwords FR pour tokenize (similarité inter-sections). */
const STOPWORDS_FR = new Set([
  'de',
  'du',
  'des',
  'le',
  'la',
  'les',
  'un',
  'une',
  'et',
  'ou',
  'mais',
  'que',
  'qui',
  'quoi',
  'pour',
  'avec',
  'sans',
  'sur',
  'dans',
  'en',
  'au',
  'aux',
  'a',
  'par',
  'ce',
  'cette',
  'cet',
  'ces',
  'son',
  'sa',
  'ses',
  'mon',
  'ma',
  'mes',
  'ton',
  'ta',
  'tes',
  'notre',
  'votre',
  'leur',
  'nos',
  'vos',
  'être',
  'avoir',
  'faire',
  'est',
  'sont',
  'fait',
  'font',
])

/** Normalise une chaîne pour comparaison (lowercase, accents, ponctuation). */
function normalizeForSimilarity(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Tokens significatifs (sans stopwords, min 2 car). */
function tokenizeForSimilarity(s: string): string[] {
  const n = normalizeForSimilarity(s)
  return n.split(/\s+/).filter((w) => w.length > 1 && !STOPWORDS_FR.has(w))
}

/** Similarité Jaccard entre deux textes. */
function jaccardSimilarity(a: string[], b: string[]): number {
  if (a.length === 0 && b.length === 0) return 0
  const setA = new Set(a)
  const setB = new Set(b)
  let intersection = 0
  for (const w of setA) {
    if (setB.has(w)) intersection++
  }
  const union = setA.size + setB.size - intersection
  return union === 0 ? 0 : intersection / union
}

/** Nombres écrits en lettres (quantités, durées). Exclut "un/une" (articles). */
const NUMBER_WORDS =
  /\b(deux|trois|quatre|cinq|six|sept|huit|neuf|dix|onze|douze|treize|quatorze|quinze|vingt|trente|quarante|cinquante|soixante|cent|cents|mille)\b/i

/** Fourchettes avec tiret (ex: 7–14, 3-5). */
const RANGE_DASH = /\d+[–\-]\d+/

/** Villes (interdites dans exemple concret). */
const CITY_PATTERNS = [
  /\bà\s+(rennes|paris|lyon|marseille|toulouse|nantes|bordeaux|strasbourg|lille|montpellier)\b/i,
  /\b(rennes|paris|lyon|marseille|toulouse|nantes|bordeaux|strasbourg|lille|montpellier)\s+(et|,|\.)/i,
] as const

/** Termes techniques / stack / jargon dev interdits dans le contenu. */
export const BANNED_TECH_TERMS = [
  'react',
  'vue',
  'angular',
  'node',
  'node.js',
  'nodejs',
  'next.js',
  'nextjs',
  'nuxt',
  'stripe',
  'figma',
  'tailwind',
  'typescript',
  'javascript',
  'php',
  'python',
  'laravel',
  'django',
  'express',
  'postgresql',
  'mysql',
  'mongodb',
  'redis',
  'docker',
  'kubernetes',
  'aws',
  'vercel',
  'netlify',
  'graphql',
  'rest api',
  'api rest',
  'webpack',
  'vite',
] as const

/**
 * Retire le titre ## de la première ligne (ignorer pour validation).
 */
function stripH2Title(text: string): string {
  const lines = text.split(/\r?\n/)
  if (lines.length > 0 && /^\s*##\s+/.test(lines[0]!)) {
    return lines.slice(1).join('\n')
  }
  return text
}

/**
 * Prépare le texte pour la vérification (retire le titre ##).
 */
function prepareTextForCheck(text: string): string {
  return stripH2Title(text).replace(/\s+/g, ' ')
}

/**
 * Vérifie si le contenu contient des chiffres ou nombres invalides.
 * - Chiffres (0-9)
 * - Fourchettes avec tiret (7–14, 3-5)
 * - Nombres en lettres (deux, dix, cinquante, cent, mille...)
 */
export function hasInvalidNumbers(sectionContent: string, _options?: { allowMinutesRange?: boolean }): boolean {
  const text = prepareTextForCheck(sectionContent)
  if (/\d/.test(text)) return true
  if (RANGE_DASH.test(sectionContent)) return true
  if (NUMBER_WORDS.test(text)) return true
  return false
}

/**
 * Vérifie si le contenu contient une ville (pour section Exemple concret).
 */
export function hasCityInContent(text: string): boolean {
  return CITY_PATTERNS.some((re) => re.test(text))
}

/** Liste de fallback si bannedFillerPhrases absent (évite crash). */
const FALLBACK_FILLER_PHRASES: string[] = []

/**
 * Vérifie si le contenu contient des phrases de remplissage interdites (liste dans ARTICLE_RULES).
 */
export function hasFillerPhrases(text: string): boolean {
  const lower = text.toLowerCase()
  const list = ARTICLE_RULES.bannedFillerPhrases ?? FALLBACK_FILLER_PHRASES
  return list.some((phrase) => lower.includes(phrase))
}

/**
 * Vérifie si le contenu contient des termes techniques bannis.
 */
export function hasBannedTechTerms(text: string): boolean {
  const lower = text.toLowerCase()
  return BANNED_TECH_TERMS.some((term) => {
    const regex = new RegExp(`\\b${escapeRegex(term)}\\b`, 'i')
    return regex.test(lower)
  })
}

function escapeRegex(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/** Mots génériques à limiter (max 3 par article). */
const GENERIC_WORDS = ['outil', 'solution', 'centraliser', 'optimiser', 'simplifier'] as const

/**
 * Vérifie si un mot générique apparaît plus de maxOccurrences fois.
 */
export function hasGenericWordOveruse(content: string, maxOccurrences = 3): boolean {
  const lower = content.toLowerCase()
  for (const word of GENERIC_WORDS) {
    const re = new RegExp(`\\b${escapeRegex(word)}\\b`, 'gi')
    const matches = lower.match(re)
    if (matches && matches.length > maxOccurrences) return true
  }
  return false
}

/**
 * Vérifie si le titre est trop générique (ex: "Application pour [métier]").
 */
export function hasGenericTitle(title: string): boolean {
  const lower = title.toLowerCase().trim()
  return /^(application|logiciel|logiciels|outil|outils|software)\s+(pour|de)\s+/i.test(lower)
}

/**
 * Vérifie si la section finale "On en parle ?" manque d'éléments de conversion.
 */
export function hasWeakFinalSection(content: string): boolean {
  const lower = content.toLowerCase()
  const hasAudit = /\b(audit|diagnostic|appel|échange)\b/i.test(lower)
  const hasAction = /\b(discutons|parlons|échanger|appeler|contactez|réserver)\b/i.test(lower)
  return !hasAudit && !hasAction
}

/** Mots d'action CTA (proposition). */
const CTA_ACTION_WORDS = ['audit', 'diagnostic', 'appel', 'échange', 'discutons', 'parlons']

/** Livrables / next-step sans chiffres. */
const CTA_DELIVERABLES = [
  "plan d'action",
  "plan d'action",
  'recommandations',
  'recommandation',
  'prochaines étapes',
  'pistes concrètes',
  'pistes adaptées',
  'court échange',
  'échange court',
  'points à clarifier',
  'reprise de la situation',
  'checklist personnalisée',
  'priorités',
  'priorité',
]

/** CTA trop vagues (sans proposition ni livrable). */
const CTA_VAGUE_PHRASES = ['on en parle', 'contactez-moi', "n'hésitez pas", 'à bientôt']

/**
 * CTA strict : doit contenir (1) proposition (audit/diagnostic/appel) + (2) livrable/next-step.
 * Rejette les formulations trop vagues ("on en parle", "contactez-moi" seul).
 */
export function hasWeakCTA(content: string): boolean {
  return !hasStrongCTA(content)
}

/**
 * CTA fort : (1) mot d'action + (2) livrable concret. Sans promesse marketing.
 */
export function hasStrongCTA(content: string): boolean {
  const cta = extractCTASection(content) ?? content
  const lower = cta.toLowerCase()

  const hasAction = CTA_ACTION_WORDS.some((w) => lower.includes(w))
  const hasDeliverable =
    CTA_DELIVERABLES.some((w) => lower.includes(w)) ||
    /\b(recommandations?|plan|étapes|pistes|clarifier|reprise|priorités?)\b/i.test(cta)
  const isVague = CTA_VAGUE_PHRASES.some((w) => lower.includes(w)) && !hasDeliverable

  return hasAction && hasDeliverable && !isVague
}

/** Extrait le contenu de la section "On en parle ?" (dernière section). */
function extractCTASection(fullContent: string): string | null {
  const sections = fullContent.split(/^##\s+/m).filter(Boolean)
  for (let i = sections.length - 1; i >= 0; i--) {
    const s = sections[i]!.trim()
    if (/^on en parle\s*\?/i.test(s)) {
      return stripH2Title('## ' + s)
    }
  }
  return null
}

/** Paires de sections à comparer pour détecter la répétition (index A, index B). */
const REPETITION_PAIRS: [number, number][] = [
  [0, 1],
  [0, 4],
  [1, 4],
  [3, 7],
]

/** Regex pour extraire les titres H2 (match exact: accents, ponctuation). */
const H2_TITLE_REGEX = /^##\s+(.+)$/gm

/**
 * Extrait les titres H2 du markdown dans l'ordre (regex stricte).
 * Vérifier ensuite: length === 8 et liste === REQUIRED_SECTIONS (match exact).
 */
export function getSectionTitles(content: string): string[] {
  const matches = [...content.matchAll(H2_TITLE_REGEX)]
  return matches.map((m) => (m[1] ?? '').trim())
}

/**
 * Parse les sections de l'article (## Titre\n\ncontenu).
 * Retourne un tableau de contenus (sans le titre ##).
 */
export function parseSections(content: string): string[] {
  const parts = content.split(/^##\s+/m).filter(Boolean)
  return parts.map((p) => stripH2Title('## ' + p.trim()))
}

/**
 * Vérifie si une section dépasse la limite de caractères.
 * sectionContent: corps de la section (avec ou sans ## titre).
 * sectionIndex: 0=Intro, 1=Cost, 4=Exemple, 7=CTA
 */
export function getSectionLengthViolation(
  sectionContent: string,
  sectionIndex: number,
): { exceeded: boolean; max: number; actual: number } {
  const body = /^\s*##\s+/.test(sectionContent) ? stripH2Title(sectionContent) : sectionContent
  const actual = body.trim().length
  let max: number
  if (sectionIndex === 0) max = ARTICLE_RULES.maxCharsIntro
  else if (sectionIndex === 1) max = ARTICLE_RULES.maxCharsCost
  else if (sectionIndex === 4) max = ARTICLE_RULES.maxCharsExample
  else if (sectionIndex === 7) max = ARTICLE_RULES.maxCharsCTA
  else max = ARTICLE_RULES.maxCharsPerSectionDefault
  return { exceeded: actual > max, max, actual }
}

/**
 * Exemple concret: 1 paragraphe max. Compte les sauts de ligne doubles.
 */
export function getExampleParagraphViolation(sectionContent: string): { violated: boolean; paragraphCount: number } {
  const body = /^\s*##\s+/.test(sectionContent) ? stripH2Title(sectionContent) : sectionContent
  const doubleBreaks = (body.match(/\n\s*\n/g) ?? []).length
  const paragraphCount = doubleBreaks + 1
  const violated = paragraphCount > 1
  return { violated, paragraphCount }
}

/**
 * Détecte une répétition excessive entre sections (Jaccard > seuil).
 */
export function getExcessiveRepetition(sections: string[]): {
  excessive: boolean
  pairs: { a: number; b: number; sim: number }[]
} {
  const tokens = sections.map(tokenizeForSimilarity)
  const pairs: { a: number; b: number; sim: number }[] = []
  for (const [a, b] of REPETITION_PAIRS) {
    if (a < sections.length && b < sections.length && tokens[a]!.length > 0 && tokens[b]!.length > 0) {
      const sim = jaccardSimilarity(tokens[a]!, tokens[b]!)
      if (sim > ARTICLE_RULES.maxSectionSimilarity) {
        pairs.push({ a, b, sim })
      }
    }
  }
  return { excessive: pairs.length > 0, pairs }
}

/** Patterns de tournures génériques répétitives. */
const REPETITION_BLACKLIST = [
  'ce que je vois souvent',
  'la même situation',
  'au quotidien',
  'c est le cas',
  "c'est le cas",
]

/** Vérifie si le contenu contient des patterns de répétition générique. */
export function hasRepetitionBlacklist(content: string): boolean {
  const lower = content
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
  return REPETITION_BLACKLIST.some((p) => {
    const normalized = p.normalize('NFD').replace(/\p{Diacritic}/gu, '')
    return lower.includes(normalized)
  })
}

export type ObjectionReponseValidation = { valid: boolean; reason?: string }

const MAX_BULLETS_AFTER_REPONSE = 4

/**
 * Valide la structure de la section "Pourquoi les solutions classiques ne suffisent pas":
 * - une ligne "**Objection :** ..." (pas de puce juste après)
 * - une ligne vide
 * - une ligne "**Réponse :**" suivie d'un paragraphe (pas seulement une liste)
 * - optionnel: liste "- " max 4 puces après la réponse
 */
export function validateObjectionReponseFormat(sectionText: string): ObjectionReponseValidation {
  const body = /^\s*##\s+/.test(sectionText) ? stripH2Title(sectionText) : sectionText
  const lines = body.split(/\r?\n/)

  const objectionIdx = lines.findIndex((l) => /^\s*\*\*Objection\s*:\*\*/.test(l))
  if (objectionIdx === -1) {
    return { valid: false, reason: 'Section doit contenir une ligne "**Objection :** ...".' }
  }
  const objectionLine = lines[objectionIdx]!.trim()
  if (/^\*\*Objection\s*:\*\*$/.test(objectionLine)) {
    return { valid: false, reason: 'Objection doit être suivie du texte sur la même ligne.' }
  }

  const afterObjection = lines.slice(objectionIdx + 1)
  const responseIdx = afterObjection.findIndex((l) => /\*\*R[eé]ponse\s*:\*\*/.test(l))
  if (responseIdx === -1) {
    return { valid: false, reason: 'Section doit contenir "**Réponse :**" après une ligne vide.' }
  }
  const between = afterObjection.slice(0, responseIdx)
  const hasBlank = between.some((l) => l.trim() === '')
  if (!hasBlank) {
    return { valid: false, reason: 'Une ligne vide doit séparer Objection et Réponse.' }
  }

  const responseLine = afterObjection[responseIdx]!
  const afterResponseLines = afterObjection.slice(responseIdx + 1)
  const restOfResponseLine = responseLine.replace(/^.*\*\*R[eé]ponse\s*:\*\*\s*/i, '').trim()
  const paragraphLines: string[] = restOfResponseLine ? [restOfResponseLine] : []
  for (const l of afterResponseLines) {
    if (/^\s*-\s+/.test(l)) break
    if (l.trim()) paragraphLines.push(l.trim())
  }
  if (paragraphLines.length === 0) {
    return {
      valid: false,
      reason: "**Réponse :** doit être suivie d'un paragraphe (pas seulement une liste à puces).",
    }
  }

  const listLines = afterResponseLines.filter((l) => /^\s*-\s+/.test(l))
  if (listLines.length > MAX_BULLETS_AFTER_REPONSE) {
    return { valid: false, reason: `Maximum ${MAX_BULLETS_AFTER_REPONSE} puces après la Réponse.` }
  }
  return { valid: true }
}

export type QualityBreakdown = {
  concision: number
  repetition: number
  metierEnrichment: number
  ctaConversion: number
  cleanliness: number
}

export type ArticleQualityResult = {
  score: number
  breakdown: QualityBreakdown
}

/**
 * Calcule un score de qualité 0-100 pour un article.
 * Pondération: concision 25, répétition 20, enrichissement 20, CTA 20, propreté 15.
 * Pénalités progressives: >80% du max => -pts, >max => malus fort.
 */
export function computeArticleQualityScore(content: string): ArticleQualityResult {
  const sections = parseSections(content)
  const breakdown: QualityBreakdown = {
    concision: 0,
    repetition: 0,
    metierEnrichment: 0,
    ctaConversion: 0,
    cleanliness: 0,
  }

  // Concision (25 pts): pénalité progressive par section
  const totalChars = content.length
  let concisionPenalty = 0
  for (let i = 0; i < sections.length; i++) {
    const v = getSectionLengthViolation(sections[i]!, i)
    const pctOfMax = v.actual / v.max
    if (pctOfMax > 1) {
      concisionPenalty += Math.min(6, 3 + Math.ceil((v.actual - v.max) / 150))
    } else if (pctOfMax > 0.8) {
      concisionPenalty += 1
    }
  }
  if (totalChars > ARTICLE_RULES.maxCharsTotal) {
    concisionPenalty += Math.min(10, Math.ceil((totalChars - ARTICLE_RULES.maxCharsTotal) / 400))
  }
  breakdown.concision = Math.max(0, 25 - concisionPenalty)

  // Répétition (20 pts): pénalité selon similarité max
  const { pairs } = getExcessiveRepetition(sections)
  const maxSim = pairs.length > 0 ? Math.max(...pairs.map((p) => p.sim)) : 0
  if (maxSim <= 0.3) breakdown.repetition = 20
  else if (maxSim <= 0.45) breakdown.repetition = Math.max(10, 20 - Math.round((maxSim - 0.3) * 80))
  else breakdown.repetition = Math.max(0, 10 - pairs.length * 3)

  // Enrichissement métier (20 pts)
  const lower = content.toLowerCase()
  const hasTool = COMMON_TOOLS.some((t) => lower.includes(t)) ? 1 : 0
  const hasGrowth = GROWTH_PATTERN.test(lower) ? 1 : 0
  const hasClientPerception = CLIENT_PERCEPTION_PATTERN.test(lower) ? 1 : 0
  breakdown.metierEnrichment = Math.round(((hasTool + hasGrowth + hasClientPerception) / 3) * 20)

  // CTA (20 pts)
  breakdown.ctaConversion = hasStrongCTA(content) ? 20 : 0

  // Propreté (15 pts)
  let cleanliness = 15
  if (hasBannedTechTerms(content)) cleanliness -= 10
  if (hasFillerPhrases(content)) cleanliness -= 5
  breakdown.cleanliness = Math.max(0, cleanliness)

  const score = Math.round(
    breakdown.concision +
      breakdown.repetition +
      breakdown.metierEnrichment +
      breakdown.ctaConversion +
      breakdown.cleanliness,
  )

  return {
    score: Math.min(100, Math.max(0, score)),
    breakdown,
  }
}

/** Outils métier couramment utilisés (au moins 1 mention requise par article). */
const COMMON_TOOLS = [
  'agenda papier',
  'excel',
  'whatsapp',
  'google calendar',
  'tableau',
  'carnet',
  'messagerie',
  'tableur',
  'agenda',
] as const

/** Variantes croissance / scaling / délégation (développ, scal, délégu, embauch, recrut, croiss...). */
const GROWTH_PATTERN = /\b(développ|scal|délég|embauch|recrut|croiss)\w*\b/i
/** Perception client: image pro, professionnelle, réactivité, crédibilité, etc. */
const CLIENT_PERCEPTION_PATTERN =
  /\b(image pro|image professionnelle|professionnelle|perception|crédibilité|réputation|réactivité|fiabilité perçue)\b/i

/**
 * Vérifie si l'article manque d'enrichissement métier (outil courant, croissance, perception client).
 */
export function hasMissingMetierEnrichment(content: string): boolean {
  const lower = content.toLowerCase()
  const hasTool = COMMON_TOOLS.some((t) => lower.includes(t))
  const hasGrowth = GROWTH_PATTERN.test(lower)
  const hasClientPerception = CLIENT_PERCEPTION_PATTERN.test(lower)
  return !hasTool || !hasGrowth || !hasClientPerception
}

/**
 * Valide une section : pas de chiffres/nombres, pas de termes tech, pas de remplissage.
 * Option forbidCity : rejeter si une ville est mentionnée (pour Exemple concret).
 */
export function isSectionValid(
  sectionContent: string,
  options?: { allowMinutesRange?: boolean; forbidCity?: boolean },
): boolean {
  return getSectionInvalidReasons(sectionContent, options).length === 0
}

/**
 * Retourne les motifs précis de rejet d'une section (pour messages de retry clairs).
 */
export function getSectionInvalidReasons(
  sectionContent: string,
  options?: { allowMinutesRange?: boolean; forbidCity?: boolean },
): string[] {
  const reasons: string[] = []
  if (hasInvalidNumbers(sectionContent, options)) {
    const text = prepareTextForCheck(sectionContent)
    if (/\d/.test(text)) reasons.push('contient un chiffre')
    else if (RANGE_DASH.test(sectionContent)) reasons.push('contient une fourchette avec tiret (ex: 7–14)')
    else reasons.push('contient un nombre en lettres (deux, dix, vingt, etc.)')
  }
  if (hasBannedTechTerms(sectionContent)) {
    const lower = sectionContent.toLowerCase()
    const found = BANNED_TECH_TERMS.find((term) => {
      const re = new RegExp(`\\b${escapeRegex(term)}\\b`, 'i')
      return re.test(lower)
    })
    reasons.push(found ? `terme tech interdit: "${found}"` : 'terme tech interdit')
  }
  if (hasFillerPhrases(sectionContent)) {
    const lower = sectionContent.toLowerCase()
    const list = ARTICLE_RULES.bannedFillerPhrases ?? FALLBACK_FILLER_PHRASES
    const found = list.find((phrase) => lower.includes(phrase))
    reasons.push(found ? `phrase interdite: "${found}"` : 'phrase de remplissage interdite')
  }
  if (options?.forbidCity && hasCityInContent(sectionContent)) {
    reasons.push('ville interdite dans cette section')
  }
  return reasons
}
