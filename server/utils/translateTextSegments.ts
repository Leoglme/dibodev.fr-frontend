import { createError } from 'h3'
import { mistralGenerate } from '~~/server/utils/mistral'

/** Maximum number of segments sent to Mistral in one request, so its answer never gets cut short. */
const SEGMENTS_PER_BATCH: number = 20
/** Maximum number of characters sent to Mistral in one request (about 1 500 tokens of French). */
const CHARACTERS_PER_BATCH: number = 5000
/** Number of attempts for one batch before it is split in two. */
const ATTEMPTS_PER_BATCH: number = 2
const LEADING_SPACES_REGEX: RegExp = /^\s+/
const TRAILING_SPACES_REGEX: RegExp = /\s+$/

export type TranslationTargetLanguage = 'English' | 'Spanish'

export type TranslateTextSegmentsParams = {
  apiKey: string
  model: string
  targetLanguage: TranslationTargetLanguage
  texts: string[]
  errorLabel: string
}

/**
 * Builds the system instruction asking Mistral to translate keyed segments without merging or skipping any.
 *
 * @param {TranslationTargetLanguage} targetLanguage - The language to translate into.
 * @returns {string} The system instruction.
 */
function buildSystemInstruction(targetLanguage: TranslationTargetLanguage): string {
  return `You are a professional translator. You will receive a JSON object {"segments": {"<id>": "<French text>"}} holding the text segments of a blog article, in order.
Translate every segment to ${targetLanguage}. Return ONLY a valid JSON object {"segments": {"<id>": "<${targetLanguage} translation>"}} with exactly the same ids.
Never merge, split or skip a segment: a segment can be a fragment of a sentence (bold or link text), translate it as a fragment. Preserve tone.`
}

/**
 * Splits the segments into ordered batches that respect the segment and character limits.
 *
 * @param {string[]} texts - The segments to translate, in document order.
 * @returns {string[][]} The batches, in document order.
 */
function splitIntoBatches(texts: string[]): string[][] {
  const batches: string[][] = []
  let currentBatch: string[] = []
  let currentLength: number = 0
  for (const text of texts) {
    const isBatchFull: boolean =
      currentBatch.length >= SEGMENTS_PER_BATCH || currentLength + text.length > CHARACTERS_PER_BATCH
    if (currentBatch.length > 0 && isBatchFull) {
      batches.push(currentBatch)
      currentBatch = []
      currentLength = 0
    }
    currentBatch.push(text)
    currentLength += text.length
  }
  if (currentBatch.length > 0) batches.push(currentBatch)
  return batches
}

/**
 * Gives the translation the leading and trailing spaces of its source, which Mistral tends to drop around fragments.
 *
 * @param {string} source - The French segment.
 * @param {string} translation - Its translation.
 * @returns {string} The translation with the source's surrounding spaces.
 */
function keepSurroundingSpaces(source: string, translation: string): string {
  const leadingSpaces: string = LEADING_SPACES_REGEX.exec(source)?.[0] ?? ''
  const trailingSpaces: string = TRAILING_SPACES_REGEX.exec(source)?.[0] ?? ''
  return `${leadingSpaces}${translation.trim()}${trailingSpaces}`
}

/**
 * Translates one batch and returns its translations only when Mistral answers every id of the batch.
 *
 * @param {TranslateTextSegmentsParams} params - API key, model and target language.
 * @param {string[]} batch - The segments of this batch.
 * @returns {Promise<string[] | null>} The translations in batch order, or null when the answer is unusable.
 */
async function translateBatch(params: TranslateTextSegmentsParams, batch: string[]): Promise<string[] | null> {
  const segments: Record<string, string> = Object.fromEntries(
    batch.map((text: string, index: number): [string, string] => [`s${index}`, text]),
  )
  const { content: rawAnswer }: { content: string } = await mistralGenerate({
    apiKey: params.apiKey,
    model: params.model,
    systemInstruction: buildSystemInstruction(params.targetLanguage),
    userMessage: JSON.stringify({ segments }),
    temperature: 0.3,
    maxTokens: 4000,
  })
  try {
    const parsed: { segments?: Record<string, unknown> } = JSON.parse(rawAnswer) as {
      segments?: Record<string, unknown>
    }
    const answer: Record<string, unknown> = parsed.segments ?? {}
    const translations: string[] = []
    for (const [index, source] of batch.entries()) {
      const translation: unknown = answer[`s${index}`]
      if (typeof translation !== 'string' || translation.trim() === '') return null
      translations.push(keepSurroundingSpaces(source, translation))
    }
    return translations
  } catch {
    return null
  }
}

/**
 * Translates a batch, splitting it in two until each part gets a complete answer.
 *
 * @param {TranslateTextSegmentsParams} params - API key, model, target language and error label.
 * @param {string[]} batch - The segments of this batch.
 * @returns {Promise<string[]>} One translation per segment, in batch order.
 * @throws {H3Error} 502 when a single segment still has no valid answer.
 */
async function translateBatchOrSplit(params: TranslateTextSegmentsParams, batch: string[]): Promise<string[]> {
  for (let attempt: number = 1; attempt <= ATTEMPTS_PER_BATCH; attempt++) {
    const translations: string[] | null = await translateBatch(params, batch)
    if (translations) return translations
  }
  if (batch.length === 1) {
    throw createError({
      statusCode: 502,
      statusMessage: `Mistral did not translate every segment of ${params.errorLabel}.`,
    })
  }
  const middle: number = Math.ceil(batch.length / 2)
  const firstHalf: string[] = await translateBatchOrSplit(params, batch.slice(0, middle))
  const secondHalf: string[] = await translateBatchOrSplit(params, batch.slice(middle))
  return [...firstHalf, ...secondHalf]
}

/**
 * Translates text segments batch by batch and never returns a partial result.
 *
 * @param {TranslateTextSegmentsParams} params - API key, model, target language, segments and error label.
 * @returns {Promise<string[]>} One translation per segment, in the same order.
 * @throws {H3Error} 502 when a segment still has no valid answer after the retries and splits.
 */
export async function translateTextSegments(params: TranslateTextSegmentsParams): Promise<string[]> {
  const translations: string[] = []
  for (const batch of splitIntoBatches(params.texts)) {
    translations.push(...(await translateBatchOrSplit(params, batch)))
  }
  return translations
}
