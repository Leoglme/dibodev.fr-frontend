/**
 * Mistral chat completion API client for article generation.
 */

const MISTRAL_API_URL: string = 'https://api.mistral.ai/v1/chat/completions'
const MISTRAL_MODEL: string = 'mistral-small-latest'

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
 * Call Mistral chat completion and return the assistant text content + metadata.
 * The caller is responsible for interpreting the returned string (e.g. JSON.parse).
 * Aucun stop_sequence pour éviter de couper les réponses longues.
 */
export async function mistralGenerate(params: MistralGenerateParams): Promise<MistralGenerateResult> {
  const {
    apiKey,
    systemInstruction,
    userMessage,
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
    model: MISTRAL_MODEL,
    messages,
    temperature,
    top_p,
    max_tokens: Math.min(Math.max(maxTokens, 1024), 32768),
    response_format: {
      type: 'json_object',
    },
  }

  const response: Response = await fetch(MISTRAL_API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    const errText: string = await response.text()
    throw new Error(`Mistral API error ${response.status}: ${errText}`)
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

  const data: { choices?: Choice[] } = (await response.json()) as { choices?: Choice[] }

  const choice: Choice | undefined = data.choices?.[0]
  const message: ChatMessage | undefined = choice?.message
  const finishReason: string | undefined = choice?.finish_reason

  if (!message || typeof message !== 'object') {
    return { content: '', finishReason }
  }

  let content = ''

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
