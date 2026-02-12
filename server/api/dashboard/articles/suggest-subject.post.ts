import type { H3Event } from 'h3'
import { createError } from 'h3'
import type { SuggestSubjectBody, SuggestSubjectResponse } from '~~/server/types/dashboard/articles'
import { requireDashboardAuth } from '~~/server/utils/dashboardAuth'
import { mistralGenerate } from '~~/server/utils/mistral'

const SYSTEM = `Tu es un rédacteur SEO pour un développeur freelance (Dibodev) qui cible artisans, PME, restaurants, commerces, etc.
Tu dois proposer UN seul sujet d'article de blog pour attirer des clients de niche.
RÈGLE IMPORTANTE: Si l'utilisateur fournit une "consigne" ou "idée" (métier, titre, angle), le sujet proposé DOIT impérativement en découler : même métier (ex: plombier → plombier, pas électricien), même angle et même question si un titre est indiqué. Ignorer cette consigne est une erreur.
Autres règles: ne propose jamais un sujet déjà dans la liste fournie ni un angle trop proche. Réponds UNIQUEMENT avec un objet JSON valide, sans texte avant ni après.`

function buildUserMessage(body: SuggestSubjectBody): string {
  const optional = body.optionalSentence?.trim()
  const list =
    body.existingSubjects.length > 0
      ? `Sujets déjà traités (ne pas répéter):\n${body.existingSubjects.map((s) => `- ${s}`).join('\n')}`
      : 'Aucun article existant pour le moment.'

  if (optional) {
    return `CONSIGNE PRIORITAIRE (le sujet proposé doit en découler directement — même métier, même angle, même question si indiquée):\n\n${optional}\n\n---\n\n${list}\n\nRéponds uniquement avec un objet JSON: {"suggestedTopic": "Ton sujet proposé ici"} en respectant strictement la consigne ci-dessus.`
  }

  return `${list}\n\nPas d'idée imposée: propose un nouveau sujet adapté à la cible (artisans, PME, métiers).\n\nRéponds uniquement avec un objet JSON: {"suggestedTopic": "Ton sujet proposé ici"}.`
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

  const userMessage: string = buildUserMessage(body)
  const raw: string = await mistralGenerate({
    apiKey,
    systemInstruction: SYSTEM,
    userMessage,
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

  const suggestedTopic: string = typeof parsed.suggestedTopic === 'string' ? parsed.suggestedTopic.trim() : ''
  if (!suggestedTopic) {
    throw createError({
      statusCode: 502,
      statusMessage: 'Mistral did not return a suggestedTopic.',
    })
  }

  return { suggestedTopic }
})
