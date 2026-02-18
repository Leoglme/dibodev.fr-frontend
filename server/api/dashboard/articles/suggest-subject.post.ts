import type { H3Event } from 'h3'
import { createError } from 'h3'
import type { SuggestSubjectBody, SuggestSubjectResponse } from '~~/server/types/dashboard/articles'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { mistralGenerate } from '~~/server/utils/mistral'

const MIN_TOPIC_LENGTH = 55
const MAX_TOPIC_LENGTH = 90
const MIN_WORDS = 8
const MAX_WORDS = 14
const MAX_RETRIES = 1
const JACCARD_REJECT_THRESHOLD = 0.7

const SYSTEM = `Tu es un rédacteur SEO pour un développeur freelance (Dibodev) qui cible artisans, PME, restaurants, commerces, professions locales.
Objectif: proposer UN titre d'article lisible, naturel, proche d'une intention de recherche Google — pas une suite de mots-clés, pas un titre marketing.

Contraintes de sortie:
- Réponds UNIQUEMENT avec un objet JSON valide: {"suggestedTopic":"..."} (aucun autre texte)
- "suggestedTopic": 8 à 14 mots, 55 à 80 caractères (max 90).
- 1 phrase lisible en français, avec MAJUSCULE au début (jamais tout en minuscules).
- Pas de ponctuation marketing, pas d'emojis, pas de points d'exclamation.

BONS EXEMPLES (titre lisible, SEO intent):
✅ "Coach sportif : éviter les annulations de dernière minute avec une appli"
✅ "Coach sportif : réduire les annulations avec un outil de réservation"
✅ "Coiffeur : gérer les doublons de rendez-vous avec un logiciel en ligne"

MAUVAIS EXEMPLES (à éviter):
❌ "annulations dernière minute coach sportif comment éviter" (suite de mots-clés, pas de majuscule)
❌ "Boostez votre coaching avec un logiciel" (marketing)
❌ "Application pour coach" (trop court, pas de problème)

Règle "Comment": n'utilise "Comment …" que si la consigne de l'utilisateur commence elle-même par "Comment". Sinon, préfère des structures comme:
- "Métier : [problème] avec [solution]"
- "[Métier] : [verbe] [problème] grâce à [outil/app/logiciel]"

INTERDIT: "Boostez…", "Transformez…", "Découvrez…", "sur mesure", "révolutionner", "comment un logiciel…", "comment une app…"

Qualité SEO: le titre doit contenir (1) métier/niche, (2) douleur/problème concret, (3) type de solution (app, logiciel, outil, réservation, paiement, etc.).

Règle PRIORITAIRE: si "optionalSentence" est fourni, respecte STRICTEMENT le métier et le problème. Reformule en titre lisible, sans changer le fond.

Interdiction d'année (2025, 2026…) sauf si l'utilisateur le demande explicitement.

Anti-duplication: ne propose jamais un sujet déjà dans la liste ni trop proche (moins de 70% de mots en commun).`

const MARKETING_VERBS = [
  'boostez',
  'transformez',
  'découvrez',
  'révolutionnez',
  'optimisez',
  'modernisez',
  'améliorez',
  'augmentez',
  'maximisez',
  'propulsez',
  'accélérez',
  'réinventez',
  'innovez',
]
const MARKETING_PHRASES = [
  'sur mesure',
  'révolutionner',
  'comment un logiciel',
  'comment une app',
  'comment une application',
  'découvrez comment',
  'boostez votre',
  'transformez votre',
]

const COMMON_VERBS = new Set([
  'éviter',
  'réduire',
  'gérer',
  'automatiser',
  'suivre',
  'planifier',
  'facturer',
  'encaisser',
  'organiser',
  'simplifier',
  'limiter',
  'éliminer',
  'résoudre',
  'centraliser',
  'synchroniser',
  'programmer',
  'prendre',
])

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
  'dont',
  'pour',
  'avec',
  'sans',
  'sous',
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
  'leurs',
  'ne',
  'pas',
  'plus',
  'moins',
  'très',
  'tout',
  'tous',
  'toute',
  'toutes',
  'autre',
  'autres',
  'même',
  'mêmes',
  'être',
  'avoir',
  'faire',
  'peut',
  'doit',
  'est',
  'sont',
  'fait',
  'font',
])

/** Normalise une chaîne: lowercase, suppression accents, ponctuation. */
function normalize(s: string): string {
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
function tokenize(s: string): string[] {
  const n = normalize(s)
  return n.split(/\s+/).filter((w) => w.length > 1 && !STOPWORDS_FR.has(w))
}

/** Tokens significatifs de plus de 3 caractères (mots-clés forts). */
function strongTokens(s: string): string[] {
  const n = normalize(s)
  return n.split(/\s+/).filter((w) => w.length > 3 && !STOPWORDS_FR.has(w))
}

function wordCount(s: string): number {
  return s.trim().split(/\s+/).filter(Boolean).length
}

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

/** Vérifie si le topic a une qualité linguistique insuffisante. */
function isLowQualityTopic(topic: string): { lowQuality: boolean; reasons: string[] } {
  const reasons: string[] = []

  if (topic.length < MIN_TOPIC_LENGTH) {
    reasons.push(`trop court (< ${MIN_TOPIC_LENGTH} caractères)`)
  }
  if (topic.length > MAX_TOPIC_LENGTH) {
    reasons.push(`trop long (> ${MAX_TOPIC_LENGTH} caractères)`)
  }

  const words = topic.trim().split(/\s+/).filter(Boolean)
  const wc = words.length
  if (wc < MIN_WORDS || wc > MAX_WORDS) {
    reasons.push(`nombre de mots hors plage ${MIN_WORDS}-${MAX_WORDS} (${wc})`)
  }

  if (topic[0] !== topic[0].toUpperCase()) {
    reasons.push('pas de majuscule au début')
  }

  const lower = topic.toLowerCase()
  const wordsLower = lower.split(/\s+/)
  const stopwordCount = wordsLower.filter((w) => STOPWORDS_FR.has(w)).length
  if (wordsLower.length > 0 && stopwordCount / wordsLower.length > 0.4) {
    reasons.push('trop de mots vides, ressemble à une liste de mots-clés')
  }

  const tokens = tokenize(topic)
  const hasVerb = tokens.some((t) => COMMON_VERBS.has(t))
  if (tokens.length >= 3 && !hasVerb) {
    reasons.push('aucun verbe métier détecté (éviter, réduire, gérer, etc.)')
  }

  if (lower.includes('comment éviter') && wordsLower.length <= 6) {
    reasons.push('"comment éviter" sans phrase complète')
  }

  return { lowQuality: reasons.length > 0, reasons }
}

/** Vérifie si le topic est invalide (année, verbes marketing). */
function isInvalidTopic(suggestedTopic: string, body: SuggestSubjectBody): { invalid: boolean; reasons: string[] } {
  const reasons: string[] = []
  const lower = suggestedTopic.toLowerCase()

  const hasYear = /\b(19|20)\d{2}\b/.test(suggestedTopic)
  const userWantsYear = body.optionalSentence?.includes('20') ?? false
  if (hasYear && !userWantsYear) {
    reasons.push('année non autorisée')
  }

  for (const verb of MARKETING_VERBS) {
    if (lower.includes(verb)) {
      reasons.push(`verbe marketing interdit: "${verb}"`)
      break
    }
  }

  for (const phrase of MARKETING_PHRASES) {
    if (lower.includes(phrase)) {
      reasons.push(`formulation marketing: "${phrase}"`)
      break
    }
  }

  return { invalid: reasons.length > 0, reasons }
}

/** Vérifie si le topic ne respecte pas la consigne optionalSentence. */
function doesNotRespectOptionalSentence(
  topic: string,
  optionalSentence: string,
): { invalid: boolean; reasons: string[] } {
  const reasons: string[] = []
  const topicStrong = new Set(strongTokens(topic))
  const consigneStrong = strongTokens(optionalSentence)
  if (consigneStrong.length === 0) return { invalid: false, reasons: [] }

  const matchCount = consigneStrong.filter((t) => topicStrong.has(t)).length
  const minRequired = consigneStrong.length >= 2 ? 2 : 1
  if (matchCount < minRequired) {
    reasons.push(`manque de mots-clés de la consigne (au moins ${minRequired} attendu(s), ${matchCount} trouvé(s))`)
  }

  return { invalid: reasons.length > 0, reasons }
}

/** Vérifie si le topic est trop proche d'un sujet existant (Jaccard >= seuil). */
function isTooCloseToExisting(
  suggestedTopic: string,
  existingSubjects: string[],
): { tooClose: boolean; reason?: string } {
  const suggestedNorm = normalize(suggestedTopic)
  const existingNormalized = existingSubjects.map(normalize)
  if (existingNormalized.includes(suggestedNorm)) {
    return { tooClose: true, reason: 'doublon exact' }
  }

  const suggestedTokens = tokenize(suggestedTopic)
  for (const existing of existingSubjects) {
    const existingTokens = tokenize(existing)
    const sim = jaccardSimilarity(suggestedTokens, existingTokens)
    if (sim >= JACCARD_REJECT_THRESHOLD) {
      return {
        tooClose: true,
        reason: `trop proche d'un sujet existant (similarité ${(sim * 100).toFixed(0)}%)`,
      }
    }
  }
  return { tooClose: false }
}

function buildUserMessage(body: SuggestSubjectBody, previousRejection?: { topic: string; reasons: string[] }): string {
  const optional = body.optionalSentence?.trim()
  const list =
    body.existingSubjects.length > 0
      ? `Sujets déjà traités (ne pas répéter):\n${body.existingSubjects.map((s) => `- ${s}`).join('\n')}`
      : 'Aucun article existant pour le moment.'

  const keywordHint = previousRejection?.reasons.some(
    (r) => r.includes('mots-clés') || r.includes('majuscule') || r.includes('verbe'),
  )
    ? ' Ton titre ressemble à une liste de mots-clés : reformule en phrase lisible.'
    : ''

  const rejectionHint = previousRejection
    ? `\n\nTon précédent sujet est invalide car: ${previousRejection.reasons.join('; ')}.${keywordHint}\nSujet rejeté: "${previousRejection.topic}"\nPropose un nouveau titre différent.`
    : ''

  if (optional) {
    const examples = `Exemples de reformulation (consigne → titre lisible):
- "Comment éviter les annulations de dernière minute quand on est coach sportif" → "Coach sportif : comment éviter les annulations de dernière minute avec une appli"
- "logiciel coiffeur rdv doublons" → "Coiffeur : gérer les doublons de rendez-vous avec un logiciel en ligne"`
    return `CONSIGNE PRIORITAIRE: Reformule la consigne suivante en un titre d'article lisible (1 phrase, majuscule au début), sans changer le métier ni le problème. Même angle si indiqué.

${optional}

${examples}

---
${list}${rejectionHint}

Réponds UNIQUEMENT avec un objet JSON: {"suggestedTopic": "Ton titre ici"}.`
  }

  return `${list}${rejectionHint}

Propose un nouveau titre adapté à la cible (artisans, PME, métiers). Titre lisible (1 phrase, majuscule, 8-14 mots, 55-80 car). Varie: site, app, logiciel, SaaS, RDV, paiement.

Réponds UNIQUEMENT avec un objet JSON: {"suggestedTopic": "Ton titre ici"}.`
}

/**
 * POST /api/dashboard/articles/suggest-subject
 * Suggests one article topic (optionally guided by optionalSentence), avoiding existing subjects.
 */
export default defineEventHandler(async (event: H3Event): Promise<SuggestSubjectResponse> => {
  requireDashboardAuth(event)
  if (event.method !== 'POST') {
    throw createError({ statusCode: 405, statusMessage: 'Method Not Allowed' })
  }

  const config = useRuntimeConfig()
  const apiKey: string = config.mistralApiKey as string
  if (!apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Mistral API key not configured (MISTRAL_API_KEY).',
    })
  }

  const body: SuggestSubjectBody = (await readBody(event)) as SuggestSubjectBody
  if (!Array.isArray(body.existingSubjects)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'existingSubjects must be an array of strings.',
    })
  }

  let lastRejection: { topic: string; reasons: string[] } | undefined

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    const userMessage = buildUserMessage(body, lastRejection)
    const { content: raw } = await mistralGenerate({
      apiKey,
      systemInstruction: SYSTEM,
      userMessage,
      maxTokens: 256,
    })

    let parsed: { suggestedTopic?: string }
    try {
      parsed = JSON.parse(raw) as { suggestedTopic?: string }
    } catch {
      throw createError({
        statusCode: 502,
        statusMessage: 'Invalid JSON from Mistral.',
      })
    }

    const suggestedTopic = typeof parsed.suggestedTopic === 'string' ? parsed.suggestedTopic.trim() : ''
    if (!suggestedTopic) {
      throw createError({
        statusCode: 502,
        statusMessage: 'Mistral did not return a suggestedTopic.',
      })
    }

    const { lowQuality, reasons: qualityReasons } = isLowQualityTopic(suggestedTopic)
    if (lowQuality) {
      lastRejection = { topic: suggestedTopic, reasons: qualityReasons }
      continue
    }

    const { invalid, reasons } = isInvalidTopic(suggestedTopic, body)
    if (invalid) {
      lastRejection = { topic: suggestedTopic, reasons }
      continue
    }

    const optional = body.optionalSentence?.trim()
    if (optional) {
      const { invalid: badConsigne, reasons: consigneReasons } = doesNotRespectOptionalSentence(
        suggestedTopic,
        optional,
      )
      if (badConsigne) {
        lastRejection = { topic: suggestedTopic, reasons: consigneReasons }
        continue
      }
    }

    const { tooClose, reason } = isTooCloseToExisting(suggestedTopic, body.existingSubjects)
    if (tooClose) {
      lastRejection = { topic: suggestedTopic, reasons: [reason ?? 'trop proche'] }
      continue
    }

    return { suggestedTopic }
  }

  throw createError({
    statusCode: 502,
    statusMessage:
      lastRejection != null
        ? `Sujet invalide après ${MAX_RETRIES + 1} tentative(s): ${lastRejection.reasons.join('; ')}.`
        : 'Could not generate a valid non-duplicate topic after retries.',
  })
})
