import type { H3Event } from 'h3'
import { createError } from 'h3'
import type { GenerateArticleBody, GenerateArticleResponse } from '~~/server/types/dashboard/articles'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { mistralGenerate } from '~~/server/utils/mistral'
import { markdownToRichtext } from '~~/server/utils/markdownToRichtext'
import {
  hasGenericTitle,
  hasGenericWordOveruse,
  hasWeakCTA,
  hasMissingMetierEnrichment,
  getSectionLengthViolation,
  getExampleParagraphViolation,
  getExcessiveRepetition,
  getSectionTitles,
  getSectionInvalidReasons,
  validateObjectionReponseFormat,
  parseSections,
  computeArticleQualityScore,
} from '~~/server/utils/articleValidators'
import { ARTICLE_RULES } from '~~/server/utils/articleRules'

const MIN_SLUG_LENGTH = 25
const MAX_SLUG_LENGTH = 80
const MIN_TAGS = 5
const MAX_TAGS = 8
const MAX_RETRIES_FICHE = 2

/** maxTokens pour l'article complet (dérivé de maxCharsTotal). */
const ARTICLE_MAX_TOKENS = Math.min(5000, Math.max(1200, Math.ceil(ARTICLE_RULES.maxCharsTotal / 3.6) + 150))

const REQUIRED_SECTIONS = [
  'Introduction',
  'Ce que ça vous coûte',
  'Pourquoi les solutions classiques ne suffisent pas',
  'La solution adaptée à votre métier',
  'Exemple concret (cas réaliste détaillé)',
  'Ce que je mets en place',
  'FAQ',
  'On en parle ?',
] as const

/** Années à exclure des métadonnées. */
const BANNED_YEARS = ['2024', '2025', '2026', '2027']

const SYSTEM_FICHE = `Tu es un rédacteur SEO pour Dibodev, développeur freelance à Rennes.
Tu prépares un brief métier riche et les métadonnées. Réponds UNIQUEMENT en JSON valide.

Contexte : Dibodev propose sites web, applications mobiles, logiciels, solutions sur mesure. Audience : artisans, PME, commerces (non-tech).
Règles : Pas d'année (2024, 2025, 2026...) dans title/slug/tags/meta. "Rennes" max 1 tag. Pas de chiffres.

TITRE SEO STRATÉGIQUE (OBLIGATOIRE) :
- INTERDIT : "Application pour [métier]" ou "Logiciel pour [métier]".
- Forcer UN de ces angles : angle problème ("Pourquoi ..."), angle perte ("Ce que ..."), angle prise de conscience ("Comment ..."), angle transformation ("De ... à ..."), angle friction métier spécifique.
- Si générique → régénération automatique.`

const MIN_ARTICLE_WORDS = 1200
const MAX_ARTICLE_WORDS = 1800

const SYSTEM_ARTICLE = `Tu es un rédacteur SEO pour Dibodev, développeur freelance à Rennes.
Tu rédiges un article de blog COMPLET en un seul bloc. Ton terrain, concret, crédible — pas plaquette marketing.

STRUCTURE OBLIGATOIRE : produis un markdown avec EXACTEMENT les sections H2 suivantes, DANS CET ORDRE, chacune commençant par "## <Titre>" (copier-coller les titres ci-dessous) :

## Introduction
## Ce que ça vous coûte
## Pourquoi les solutions classiques ne suffisent pas
## La solution adaptée à votre métier
## Exemple concret (cas réaliste détaillé)
## Ce que je mets en place
## FAQ
## On en parle ?

LIMITES DE TAILLE (caractères, à respecter strictement) :
- Introduction : max ${ARTICLE_RULES.maxCharsIntro} car. 1 paragraphe + 1 phrase de transition.
- Ce que ça vous coûte : max ${ARTICLE_RULES.maxCharsCost} car.
- Exemple concret : max ${ARTICLE_RULES.maxCharsExample} car. UN SEUL paragraphe (zéro double saut de ligne).
- On en parle ? : max ${ARTICLE_RULES.maxCharsCTA} car.
- Autres sections : max ${ARTICLE_RULES.maxCharsPerSectionDefault} car chacune.
- Total article : max ${ARTICLE_RULES.maxCharsTotal} car.

CHIFFRES : interdit d'écrire des chiffres (0-9) ou des quantités en lettres (deux, trois, dix, vingt, cent, etc.). Tu peux utiliser "un" et "une" (articles). Sinon : "plusieurs", "quelques", "une poignée", "une série de", etc.

INTERDIT : villes dans l'exemple concret. Jargon tech et termes bannis. "solution intégrée", "transformer votre organisation".

Exemple concret : 1 paragraphe uniquement (pas de \\n\\n au milieu). Récit au présent. Scénario différent de l'introduction.

Section "Pourquoi les solutions classiques ne suffisent pas" : une ligne "**Objection :** ..." (texte sur la même ligne), une ligne vide, puis "**Réponse :**" suivi d'un paragraphe (obligatoire). Optionnel : max 4 puces "- " après la réponse.

FAQ : 4 questions max. Réponses très courtes (1-2 phrases).

CTA "On en parle ?" : doit contenir (1) une action (audit / diagnostic / appel / échange) ET (2) un livrable concret (plan d'action, recommandations, checklist personnalisée). Pas de phrase vague seule ("contactez-moi", "on en parle" sans livrable).

ANTI-RÉPÉTITION : chaque section doit apporter un angle différent (admin, trésorerie, image client, expérience client). Aucune reformulation d'une idée déjà développée ailleurs.

ENRICHISSEMENT : mentionner au moins un outil courant (agenda, Excel, WhatsApp, Google Calendar), une problématique croissance (scaler, déléguer), et la perception client (image pro, réactivité).

POINT DE VUE : "je" = développeur qui observe. "vous" = lecteur. Ligne vide entre **Objection :** et **Réponse :**. Listes "- " uniquement.

Réponds UNIQUEMENT avec un objet JSON : { "content": "## Introduction\\n\\n..." } où "content" est le markdown complet de l'article.`

export type BriefMetier = {
  persona?: string
  workflowActuel?: string[]
  douleurs?: string[]
  objections?: string[]
  offres?: string[]
  lexiqueMetier?: string[]
  scenariosTerrain?: string[]
}

/**
 * Force Objection et Réponse sur des paragraphes distincts.
 * Supprime les guillemets inutiles autour de l'objection.
 */
function normalizeObjectionReponse(content: string): string {
  return content
    .replace(/\*\*Objection\s*:\*\*\s*["«](.+?)["»]\s*\*\*R[eé]ponse\s*:\*\*/gis, '**Objection :** $1\n\n**Réponse :**')
    .replace(/\*\*Objection\s*:\*\*\s*(.+?)\s*\*\*R[eé]ponse\s*:\*\*/gis, '**Objection :** $1\n\n**Réponse :**')
}

/**
 * Normalise le Markdown : supprime doubles espaces, assure retours à la ligne cohérents.
 */
function normalizeMarkdown(content: string): string {
  return content
    .replace(/  +/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

/**
 * Sanitize content : H3/H4 → gras.
 */
function sanitizeContent(content: string): string {
  const lines = content.split(/\r?\n/)
  const out: string[] = []
  for (const line of lines) {
    const trimmed = line.trimStart()
    const rest = line.slice(0, line.length - trimmed.length)
    if (trimmed.startsWith('#### ')) {
      out.push(rest + '**' + trimmed.slice(5).trim().replace(/\s+/g, ' ') + '**')
    } else if (trimmed.startsWith('### ')) {
      out.push(rest + '**' + trimmed.slice(4).trim().replace(/\s+/g, ' ') + '**')
    } else if (trimmed.startsWith('## ')) {
      out.push(rest + '## ' + trimmed.slice(2).trim().replace(/\s+/g, ' '))
    } else {
      out.push(line)
    }
  }
  return out.join('\n')
}

function slugFromTopic(suggestedTopic: string): string {
  const cleaned = suggestedTopic
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
  return cleaned.slice(0, MAX_SLUG_LENGTH)
}

function removeBannedYears(text: string): string {
  let out = text
  for (const year of BANNED_YEARS) {
    out = out.replace(new RegExp(year, 'gi'), '')
  }
  return out.trim()
}

function briefMetierToString(brief: BriefMetier): string {
  const parts: string[] = []
  if (brief.persona) parts.push(`Persona: ${brief.persona}`)
  if (Array.isArray(brief.workflowActuel) && brief.workflowActuel.length > 0) {
    parts.push(`Workflow actuel: ${brief.workflowActuel.join(', ')}`)
  }
  if (Array.isArray(brief.douleurs) && brief.douleurs.length > 0) {
    parts.push(`Douleurs: ${brief.douleurs.join(' ; ')}`)
  }
  if (Array.isArray(brief.objections) && brief.objections.length > 0) {
    parts.push(`Objections: ${brief.objections.join(' ; ')}`)
  }
  if (Array.isArray(brief.offres) && brief.offres.length > 0) {
    parts.push(`Offres: ${brief.offres.join(', ')}`)
  }
  if (Array.isArray(brief.lexiqueMetier) && brief.lexiqueMetier.length > 0) {
    parts.push(`Lexique métier: ${brief.lexiqueMetier.join(', ')}`)
  }
  if (Array.isArray(brief.scenariosTerrain) && brief.scenariosTerrain.length > 0) {
    parts.push(`Scénarios terrain: ${brief.scenariosTerrain.join(' | ')}`)
  }
  return parts.length > 0 ? parts.join('\n') : ''
}

function buildFicheMessage(body: GenerateArticleBody): string {
  const list =
    body.existingSubjects.length > 0
      ? `Sujets déjà sur le blog : ${body.existingSubjects.join(', ')}.`
      : 'Aucun article existant.'

  return `Sujet : ${body.suggestedTopic}
${list}

Génère un objet JSON avec les clés suivantes :

BRIEF MÉTIER (contexte interne) :
- persona : description courte (ex: coach en salle / à domicile / en ligne)
- workflowActuel : tableau d'outils couramment utilisés (OBLIGATOIRE : inclure au moins un parmi agenda papier, Excel, WhatsApp, Google Calendar, tableau, carnet — outils métier, pas stack dev)
- douleurs : tableau couvrant au moins 4 catégories parmi : désorganisation opérationnelle, perte financière, charge mentale, image professionnelle, scaler, déléguer, automatiser, opportunités commerciales
- objections : tableau d'objections
- offres : tableau (packs, abonnements, etc.)
- lexiqueMetier : tableau de mots spécifiques au métier
- scenariosTerrain : tableau de scènes réalistes

MÉTADONNÉES :
- title : titre SEO STRATÉGIQUE. Pas de "Application pour [métier]". Forcer UN angle : problème ("Pourquoi ..."), perte ("Ce que ..."), prise de conscience ("Comment ..."), transformation ("De ... à ...") ou friction métier spécifique. SANS année.
- slug : slug longue traîne, minuscules, tirets, 25-80 caractères, SANS année
- excerpt : résumé court
- metaTitle : 55-65 caractères, SANS année
- metaDescription : 140-160 caractères, SANS année
- tags : tableau de 5 à 8 tags SEO (ce que les gens tapent dans Google). Ex: "réservation en ligne", "gestion annulations", "liste d'attente", "no-show", "acompte". INTERDIT : stopwords (les, une, avec, de, du, pour...), mots seuls génériques (coach, sportif, application). Préférer des expressions ou mots-clés métier. ("Rennes" max 1 fois), SANS année
- suggestedTopic : le sujet tel que reçu`
}

function buildArticleMessage(body: GenerateArticleBody, briefText: string, fullArticleRejection?: string): string {
  const list =
    body.existingSubjects.length > 0
      ? `Sujets déjà traités : ${body.existingSubjects.join(', ')}.`
      : 'Aucun article existant.'
  const rejectionBlock =
    fullArticleRejection != null
      ? `\n\nREJET (règles violées) : ${fullArticleRejection}. Corriger UNIQUEMENT ces points, sans recopier le texte.`
      : ''
  const contextBlock = briefText ? `\n\nBrief métier :\n${briefText}` : ''
  return `Sujet : ${body.suggestedTopic}
${list}${contextBlock}${rejectionBlock}

Génère l'article complet au format JSON : { "content": "## Introduction\\n\\n...\\n\\n## Ce que ça vous coûte\\n\\n..." } avec les 8 sections H2 exactes dans l'ordre indiqué dans les consignes système. Respecte les limites de caractères par section et le total. Zéro chiffre, zéro nombre en lettres. Exemple concret : un seul paragraphe. CTA : action + livrable.`
}

function parseJson<T = Record<string, unknown>>(raw: string): T | null {
  try {
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

function parseBriefMetier(obj: unknown): BriefMetier {
  if (!obj || typeof obj !== 'object') return {}
  const o = obj as Record<string, unknown>
  const arr = (v: unknown): string[] => (Array.isArray(v) ? v.map((x) => String(x).trim()).filter(Boolean) : [])
  return {
    persona: typeof o.persona === 'string' ? o.persona.trim() : undefined,
    workflowActuel: arr(o.workflowActuel),
    douleurs: arr(o.douleurs),
    objections: arr(o.objections),
    offres: arr(o.offres),
    lexiqueMetier: arr(o.lexiqueMetier),
    scenariosTerrain: arr(o.scenariosTerrain),
  }
}

/** Stopwords FR à exclure des tags (inutiles pour SEO). */
const TAG_STOPWORDS_FR = new Set([
  'les',
  'une',
  'avec',
  'de',
  'du',
  'des',
  'le',
  'la',
  'et',
  'pour',
  'sur',
  'dans',
  'en',
  'au',
  'aux',
  'par',
  'que',
  'qui',
  'quoi',
  'son',
  'sa',
  'ses',
  'mon',
  'ma',
  'mes',
  'nos',
  'vos',
  'leur',
  'notre',
  'votre',
  'un',
  'ce',
  'cette',
  'cet',
  'ces',
  'est',
  'sont',
  'fait',
  'font',
  'ou',
  'mais',
  'donc',
  'quand',
  'comme',
  'sans',
  'plus',
  'moins',
  'bien',
  'très',
  'tout',
  'tous',
  'toute',
  'toutes',
  'aussi',
  'être',
  'avoir',
  'faire',
  'peut',
  'vers',
  'chez',
  'sous',
  'entre',
])
const TAG_MIN_LENGTH = 4
/** Tags 100 % génériques interdits seuls (exact match). */
const GENERIC_TAGS_FORBIDDEN = new Set([
  'coach',
  'sportif',
  'application',
  'logiciel',
  'outil',
  'solution',
  'logiciels',
  'applications',
])

/** Tags SEO pertinents (ce que les gens cherchent). */
const FALLBACK_TAGS = [
  'réservation en ligne',
  'gestion annulations',
  "liste d'attente",
  'rappels',
  'no-show',
  'acompte',
  'automatisation',
  'sur mesure',
]

function filterTags(tags: string[]): string[] {
  return tags.filter((t) => {
    const lower = t.trim().toLowerCase()
    if (lower.length < TAG_MIN_LENGTH) return false
    if (TAG_STOPWORDS_FR.has(lower)) return false
    if (GENERIC_TAGS_FORBIDDEN.has(lower)) return false
    return true
  })
}

function ensureTagsCount(tags: string[], suggestedTopic: string): string[] {
  if (tags.length >= MIN_TAGS && tags.length <= MAX_TAGS) return tags
  if (tags.length > MAX_TAGS) return tags.slice(0, MAX_TAGS)
  const slugWords = slugFromTopic(suggestedTopic).split('-').filter(Boolean)
  const fromSlugFiltered = filterTags(slugWords)
  const combined = [...new Set([...tags, ...fromSlugFiltered, ...FALLBACK_TAGS])]
  return combined.slice(0, Math.min(Math.max(combined.length, MIN_TAGS), MAX_TAGS))
}

/**
 * POST /api/dashboard/articles/generate
 * Génère l'article complet en un seul appel. Zéro chiffres inventés, zéro jargon tech. Retry sur validation.
 */
export default defineEventHandler(async (event: H3Event): Promise<GenerateArticleResponse> => {
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

  const body: GenerateArticleBody = (await readBody(event)) as GenerateArticleBody
  if (typeof body.suggestedTopic !== 'string' || !body.suggestedTopic.trim()) {
    throw createError({
      statusCode: 400,
      statusMessage: 'suggestedTopic is required.',
    })
  }
  if (!Array.isArray(body.existingSubjects)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'existingSubjects must be an array.',
    })
  }

  let ficheParsed: {
    persona?: string
    workflowActuel?: unknown[]
    douleurs?: unknown[]
    objections?: unknown[]
    offres?: unknown[]
    lexiqueMetier?: unknown[]
    scenariosTerrain?: unknown[]
    title?: string
    slug?: string
    excerpt?: string
    metaTitle?: string
    metaDescription?: string
    tags?: unknown[]
    suggestedTopic?: string
  } | null = null

  for (let ficheAttempt = 1; ficheAttempt <= MAX_RETRIES_FICHE + 1; ficheAttempt++) {
    const ficheResult = await mistralGenerate({
      apiKey,
      systemInstruction: SYSTEM_FICHE,
      userMessage: buildFicheMessage(body),
      maxTokens: 4096,
    })

    ficheParsed = parseJson<{
      persona?: string
      workflowActuel?: unknown[]
      douleurs?: unknown[]
      objections?: unknown[]
      offres?: unknown[]
      lexiqueMetier?: unknown[]
      scenariosTerrain?: unknown[]
      title?: string
      slug?: string
      excerpt?: string
      metaTitle?: string
      metaDescription?: string
      tags?: unknown[]
      suggestedTopic?: string
    }>(ficheResult.content)

    if (!ficheParsed) continue
    const rawTitle = (typeof ficheParsed.title === 'string' ? ficheParsed.title.trim() : '') || ''
    if (!hasGenericTitle(rawTitle) || ficheAttempt > MAX_RETRIES_FICHE) break
  }

  if (!ficheParsed) {
    throw createError({
      statusCode: 502,
      statusMessage: 'Mistral did not return valid fiche JSON.',
    })
  }

  const brief = parseBriefMetier(ficheParsed)
  const briefText = briefMetierToString(brief)

  let title = (typeof ficheParsed?.title === 'string' ? ficheParsed.title.trim() : '') || body.suggestedTopic
  title = removeBannedYears(title)

  let slug = typeof ficheParsed?.slug === 'string' ? ficheParsed.slug.trim().replace(/\s+/g, '-').toLowerCase() : ''
  slug = slug
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, MAX_SLUG_LENGTH)
    .replace(/-+$/g, '')
  slug = removeBannedYears(slug)
  if (slug.length < MIN_SLUG_LENGTH) {
    slug = slugFromTopic(body.suggestedTopic)
  }

  let excerpt = (typeof ficheParsed?.excerpt === 'string' ? ficheParsed.excerpt.trim() : '') || title
  excerpt = removeBannedYears(excerpt)

  let metaTitle = (typeof ficheParsed?.metaTitle === 'string' ? ficheParsed.metaTitle.trim() : '') || title
  metaTitle = removeBannedYears(metaTitle)

  let metaDescription =
    (typeof ficheParsed?.metaDescription === 'string' ? ficheParsed.metaDescription.trim() : '') || excerpt
  metaDescription = removeBannedYears(metaDescription)

  const suggestedTopic =
    (typeof ficheParsed?.suggestedTopic === 'string' ? ficheParsed.suggestedTopic.trim() : '') || body.suggestedTopic

  const rawTags: string[] = Array.isArray(ficheParsed?.tags)
    ? (ficheParsed.tags as unknown[])
        .map((t: unknown): string => String(t).trim())
        .filter((t: string): boolean => t.length > 0)
    : []
  const cleanedTags = filterTags(rawTags.map((t) => removeBannedYears(t)).filter(Boolean))
  const tags = ensureTagsCount(cleanedTags, suggestedTopic)

  const maxFullRetries = ARTICLE_RULES.maxRetriesFullArticle
  let fullAttempt = 0
  let fullArticleRejection: string | undefined
  let content = ''

  while (fullAttempt <= maxFullRetries) {
    const articleResult = await mistralGenerate({
      apiKey,
      systemInstruction: SYSTEM_ARTICLE,
      userMessage: buildArticleMessage(body, briefText, fullArticleRejection),
      maxTokens: ARTICLE_MAX_TOKENS,
      temperature: 0.3,
      top_p: 0.8,
    })

    const articleParsed = parseJson<{ content?: string }>(articleResult.content)
    const rawContent = typeof articleParsed?.content === 'string' ? articleParsed.content.trim() : ''
    content = sanitizeContent(rawContent)
    content = normalizeObjectionReponse(content)
    content = normalizeMarkdown(content)

    const sections = parseSections(content)
    const reasons: string[] = []

    if (articleResult.finishReason === 'length') {
      reasons.push(
        'Sortie tronquée: raccourcis en priorité Intro / Cost / Exemple / CTA pour respecter les max chars. Ne change pas la structure ni les titres.',
      )
    }
    const sectionTitles = getSectionTitles(content)
    if (sectionTitles.length !== 8) {
      reasons.push(
        `Il doit y avoir exactement 8 titres H2 (obtenu ${sectionTitles.length}). Titres: [${sectionTitles.map((t) => t.trim()).join(' | ')}].`,
      )
    } else if (sectionTitles.some((t, i) => t.trim() !== REQUIRED_SECTIONS[i])) {
      reasons.push(
        `Titres H2 incorrects (match exact attendu): attendu [${REQUIRED_SECTIONS.join(' | ')}], obtenu [${sectionTitles.map((t) => t.trim()).join(' | ')}].`,
      )
    }

    for (let i = 0; i < sections.length; i++) {
      const v = getSectionLengthViolation(sections[i]!, i)
      if (v.exceeded) {
        const label = REQUIRED_SECTIONS[i] ?? `Section ${i}`
        reasons.push(`${label} trop longue: ${v.actual} > max ${v.max} car.`)
      }
      if (i === 2) {
        const objectionResult = validateObjectionReponseFormat(sections[i]!)
        if (!objectionResult.valid && objectionResult.reason) {
          reasons.push(`Pourquoi les solutions classiques: ${objectionResult.reason}`)
        }
      }
      if (i === 4) {
        const ex = getExampleParagraphViolation(sections[i]!)
        if (ex.violated) reasons.push('Exemple concret: 1 paragraphe max (pas de double saut de ligne).')
      }
      const invalidReasons = getSectionInvalidReasons(sections[i]!, { forbidCity: i === 4 })
      if (invalidReasons.length > 0) {
        const label = REQUIRED_SECTIONS[i] ?? `Section ${i}`
        for (const r of invalidReasons) reasons.push(`${label}: ${r}.`)
      }
    }

    const { excessive: repExcessive } = getExcessiveRepetition(sections)
    if (repExcessive) {
      reasons.push('Répétition entre sections: chaque section doit apporter un angle nouveau.')
    }
    if (hasWeakCTA(content)) {
      reasons.push('CTA: ajouter 1 action (audit/diagnostic/appel) + 1 livrable (plan, recommandations, checklist).')
    }
    if (hasMissingMetierEnrichment(content)) {
      reasons.push('Enrichissement métier manquant: outil courant, croissance, perception client.')
    }
    if (content.length > ARTICLE_RULES.maxCharsTotal) {
      reasons.push(`Total trop long: ${content.length} > max ${ARTICLE_RULES.maxCharsTotal} car.`)
    }
    if (hasGenericWordOveruse(content, 3)) {
      reasons.push("Trop d'occurrences de mots génériques (outil, solution, centraliser, optimiser, simplifier).")
    }

    fullArticleRejection = reasons.length > 0 ? reasons.join(' ') : undefined
    if (reasons.length === 0 || fullAttempt >= maxFullRetries) break
    fullAttempt++
  }

  if (!content) {
    throw createError({
      statusCode: 502,
      statusMessage: 'Mistral did not return valid article content.',
    })
  }
  const contentRichtext = markdownToRichtext(content)

  const { score: qualityScore, breakdown } = computeArticleQualityScore(content)
  const debug = getQuery(event).debug === '1' || getQuery(event).debug === 'true'

  return {
    suggestedTopic,
    title,
    slug,
    excerpt,
    metaTitle,
    metaDescription,
    tags,
    content,
    contentRichtext,
    qualityScore,
    ...(debug && { meta: { qualityBreakdown: breakdown } }),
  }
})
