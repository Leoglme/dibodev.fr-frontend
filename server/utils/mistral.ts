/**
 * Mistral chat completion API client for article generation.
 */
import { createError } from 'h3'

const MISTRAL_API_URL: string = 'https://api.mistral.ai/v1/chat/completions'
const MISTRAL_MODEL: string = 'mistral-small-latest'
/** Maximum number of retries when Mistral returns 429 (free tier caps 1 request/second and 20k tokens/minute). */
const MISTRAL_MAX_RETRIES: number = 4
/** Base backoff in milliseconds before retrying a 429, doubled on each attempt (2s, 4s, 8s, 16s). */
const MISTRAL_RETRY_BASE_DELAY_MS: number = 2000
/** Minimum spacing between two Mistral calls, to stay under the free-tier 1 request/second limit. */
const MISTRAL_MIN_CALL_INTERVAL_MS: number = 1100

/** Timestamp (ms) of the last Mistral request, used to space successive calls. */
let lastMistralCallAt: number = 0

export type MistralGenerateParams = {
  apiKey: string
  systemInstruction?: string
  userMessage: string
  maxTokens?: number
  /** Température (défaut 0.7). 0.5 pour article (plus conforme aux contraintes). */
  temperature?: number
  top_p?: number
}

export type MistralGenerateResult = {
  content: string
  /** Raison de fin du stream (ex. "stop", "length") si fournie par l'API. */
  finishReason?: string
}

/**
 * Waits for the given number of milliseconds.
 * @param {number} ms - The number of milliseconds to wait.
 * @returns {Promise<void>} Resolves once the delay has elapsed.
 */
function delay(ms: number): Promise<void> {
  return new Promise((resolve: () => void): void => {
    setTimeout(resolve, ms)
  })
}

/**
 * Waits if needed so the next Mistral call stays at least MISTRAL_MIN_CALL_INTERVAL_MS after the previous one.
 * @returns {Promise<void>} Resolves once it is safe to send the next request.
 */
async function throttleMistralCall(): Promise<void> {
  const sinceLastCall: number = Date.now() - lastMistralCallAt
  if (sinceLastCall < MISTRAL_MIN_CALL_INTERVAL_MS) {
    await delay(MISTRAL_MIN_CALL_INTERVAL_MS - sinceLastCall)
  }
  lastMistralCallAt = Date.now()
}

/**
 * Calls Mistral chat completion and returns the assistant text, spacing calls and retrying on 429 (free-tier rate limit).
 * @param {MistralGenerateParams} params - API key, prompts and generation options.
 * @returns {Promise<MistralGenerateResult>} The generated text content and the finish reason when provided.
 * @throws {Error} When Mistral keeps failing after the retries (rate limit or upstream error).
 */
export async function mistralGenerate(params: MistralGenerateParams): Promise<MistralGenerateResult> {
  const { apiKey, systemInstruction, userMessage, maxTokens = 9000, temperature = 0.7, top_p = 0.9 } = params

  const headers: HeadersInit = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  }

  const messages: Array<{ role: 'system' | 'user'; content: string }> = []

  if (systemInstruction) {
    messages.push({ role: 'system', content: systemInstruction })
  }

  messages.push({ role: 'user', content: userMessage })

  const body: unknown = {
    model: MISTRAL_MODEL,
    messages,
    temperature,
    top_p,
    max_tokens: Math.min(Math.max(maxTokens, 1024), 32768),
    response_format: {
      type: 'json_object',
    },
  }

  type ChatMessageContentPart = {
    type?: string
    text?: string
  }

  type ChatMessage =
    | {
        content?: string
      }
    | {
        content?: ChatMessageContentPart[]
      }

  type Choice = {
    message?: ChatMessage
    finish_reason?: string
  }

  let lastErrorText: string = ''

  for (let attempt: number = 0; attempt <= MISTRAL_MAX_RETRIES; attempt++) {
    await throttleMistralCall()

    const response: Response = await fetch(MISTRAL_API_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      lastErrorText = await response.text()
      if (response.status === 429 && attempt < MISTRAL_MAX_RETRIES) {
        await delay(MISTRAL_RETRY_BASE_DELAY_MS * 2 ** attempt)
        continue
      }
      throw createError({
        statusCode: response.status === 429 ? 429 : 502,
        statusMessage: `Mistral API error ${response.status}: ${lastErrorText}`,
      })
    }

    const data: { choices?: Choice[] } = (await response.json()) as { choices?: Choice[] }

    const choice: Choice | undefined = data.choices?.[0]
    const message: ChatMessage | undefined = choice?.message
    const finishReason: string | undefined = choice?.finish_reason

    if (!message || typeof message !== 'object') {
      return { content: '', finishReason }
    }

    let content: string = ''

    if (typeof (message as { content?: string }).content === 'string') {
      const c: string | undefined = (message as { content?: string }).content
      content = c?.trim() ?? ''
    } else {
      const parts: ChatMessageContentPart[] | undefined = (message as { content?: ChatMessageContentPart[] }).content
      if (Array.isArray(parts)) {
        const textParts: string[] = parts
          .map((part: ChatMessageContentPart): string => part.text?.trim() ?? '')
          .filter((value: string): boolean => value.length > 0)
        content = textParts.join('\n').trim()
      }
    }

    return { content, finishReason }
  }

  throw createError({
    statusCode: 429,
    statusMessage: `Mistral API rate limit exceeded after ${MISTRAL_MAX_RETRIES} retries: ${lastErrorText}`,
  })
}
