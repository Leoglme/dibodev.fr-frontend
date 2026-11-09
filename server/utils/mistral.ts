/**
 * Mistral chat completion API client for article generation.
 */
import { createError } from 'h3'

const MISTRAL_API_URL: string = 'https://api.mistral.ai/v1/chat/completions'
const MISTRAL_MODEL: string = 'mistral-small-latest'
/** Maximum number of retries when Mistral returns 429. */
const MISTRAL_MAX_RETRIES: number = 4
const MISTRAL_MIN_CALL_INTERVAL_MS: number = 1100
/** The free tier allows 2 requests per minute (November 2026): a shorter wait after a spent quota fails again. */
const MISTRAL_RATE_WINDOW_MS: number = 61000

/** Timestamp (ms) of the last Mistral request, used to space successive calls. */
let lastMistralCallAt: number = 0
let nextMistralCallAllowedAt: number = 0

export type MistralGenerateParams = {
  apiKey: string
  systemInstruction?: string
  userMessage: string
  model?: string
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
 * Waits until the minimum spacing since the last Mistral call has passed, and the end of any spent rate-limit window.
 * @returns {Promise<void>} Resolves once it is safe to send the next request.
 */
async function throttleMistralCall(): Promise<void> {
  const waitMs: number =
    Math.max(lastMistralCallAt + MISTRAL_MIN_CALL_INTERVAL_MS, nextMistralCallAllowedAt) - Date.now()
  if (waitMs > 0) {
    await delay(waitMs)
  }
  lastMistralCallAt = Date.now()
}

/**
 * Postpones the next Mistral call when a response spent the minute's request quota or was a 429.
 * @param {Response} response - The Mistral response.
 * @returns {void}
 */
function postponeNextMistralCallWhenRateLimited(response: Response): void {
  if (response.headers.get('x-ratelimit-remaining-req-minute') === '0') {
    nextMistralCallAllowedAt = Date.now() + MISTRAL_RATE_WINDOW_MS
  }
  if (response.status === 429) {
    const retryAfterSeconds: number = Number(response.headers.get('retry-after'))
    nextMistralCallAllowedAt = Date.now() + (retryAfterSeconds > 0 ? retryAfterSeconds * 1000 : MISTRAL_RATE_WINDOW_MS)
  }
}

/**
 * Calls Mistral chat completion and returns the assistant text, spacing calls and retrying on 429 (free-tier rate limit).
 * @param {MistralGenerateParams} params - API key, prompts and generation options.
 * @returns {Promise<MistralGenerateResult>} The generated text content and the finish reason when provided.
 * @throws {Error} When Mistral keeps failing after the retries (rate limit or upstream error).
 */
export async function mistralGenerate(params: MistralGenerateParams): Promise<MistralGenerateResult> {
  const {
    apiKey,
    systemInstruction,
    userMessage,
    model = MISTRAL_MODEL,
    maxTokens = 9000,
    temperature = 0.7,
    top_p = 0.9,
  } = params

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
    model,
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
    postponeNextMistralCallWhenRateLimited(response)

    if (!response.ok) {
      lastErrorText = await response.text()
      if (response.status === 429 && attempt < MISTRAL_MAX_RETRIES) {
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
