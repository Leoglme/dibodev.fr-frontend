import type { H3Event } from 'h3'
import { createError } from 'h3'
import type {
  GenerateArticleBody,
  GeneratedArticleContent,
  GenerateArticleResponse,
} from '~~/server/types/dashboard/articles'
import { mistralGenerate } from '~~/server/utils/mistral'
import { markdownToRichtext } from '~~/server/utils/markdownToRichtext'

const SYSTEM = `Tu es un rédacteur SEO pour un développeur freelance (Dibodev) basé à Rennes, qui cible artisans, PME, restaurants, commerces, etc.
Tu rédiges des articles de blog en français pour attirer des clients de niche et les convertir (CTA vers site/app sur mesure).
Règles: article en français, ton professionnel mais accessible, 800–1200 mots. Structure: intro, 2 à 4 sous-titres (##), paragraphes courts, CTA final invitant à contacter le développeur pour un projet.
IMPORTANT: Rédige à la première personne du singulier ("je", "mon", "ma") pour Dibodev, pas à la première personne du pluriel ("nous", "notre").
Réponds UNIQUEMENT avec un objet JSON valide, sans texte avant ni après.`

function buildUserMessage(body: GenerateArticleBody): string {
  const list =
    body.existingSubjects.length > 0
      ? `Sujets déjà sur le blog (pour cohérence): ${body.existingSubjects.join(', ')}.`
      : 'Aucun article existant.'
  return `Sujet à rédiger: ${body.suggestedTopic}
${list}

Génère l'article complet. Réponds avec un seul objet JSON contenant exactement les clés suivantes (pas d'autres):
- suggestedTopic: le sujet tel que reçu
- title: titre de l'article (accrocheur, SEO)
- slug: slug URL en minuscules, tirets (ex: site-web-pour-plombiers-rennes)
- excerpt: résumé court 1–2 phrases pour la carte et la meta
- metaTitle: titre SEO (≈60 car.)
- metaDescription: description SEO (≈155 car.)
- tags: tableau de chaînes (ex: ["plombier", "site vitrine", "Rennes"])
- content: corps de l'article en Markdown (sous-titres avec ##, paragraphes séparés par des lignes vides, gras avec **texte**, retours à la ligne conservés). Pas de titre H1 dans content.`
}

/**
 * POST /api/dashboard/articles/generate
 * Generates full article (title, slug, excerpt, meta, tags, content in Markdown) for the given suggested topic.
 * Also returns contentRichtext for preview in the dashboard.
 */
export default defineEventHandler(async (event: H3Event): Promise<GenerateArticleResponse> => {
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

  const userMessage: string = buildUserMessage(body)
  const raw: string = await mistralGenerate({
    apiKey,
    systemInstruction: SYSTEM,
    userMessage,
  })

  let parsed: Record<string, unknown>
  try {
    parsed = JSON.parse(raw) as Record<string, unknown>
  } catch {
    throw createError({
      statusCode: 502,
      statusMessage: 'Invalid JSON from Mistral.',
    })
  }

  const title: string = typeof parsed.title === 'string' ? parsed.title.trim() : ''
  const slug: string = typeof parsed.slug === 'string' ? parsed.slug.trim().replace(/\s+/g, '-').toLowerCase() : ''
  const excerpt: string = typeof parsed.excerpt === 'string' ? parsed.excerpt.trim() : ''
  const metaTitle: string = typeof parsed.metaTitle === 'string' ? parsed.metaTitle.trim() : title
  const metaDescription: string = typeof parsed.metaDescription === 'string' ? parsed.metaDescription.trim() : excerpt
  const content: string = typeof parsed.content === 'string' ? parsed.content.trim() : ''
  const suggestedTopic: string =
    typeof parsed.suggestedTopic === 'string' ? parsed.suggestedTopic.trim() : body.suggestedTopic
  const tags: string[] = Array.isArray(parsed.tags)
    ? (parsed.tags as unknown[])
        .map((t: unknown): string => String(t).trim())
        .filter((t: string): boolean => t.length > 0)
    : []

  if (!title || !slug || !excerpt || !content) {
    throw createError({
      statusCode: 502,
      statusMessage: 'Mistral did not return required fields (title, slug, excerpt, content).',
    })
  }

  const contentRichtext = markdownToRichtext(content)

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
  }
})
