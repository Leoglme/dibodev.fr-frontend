/**
 * Mistral chat completion API client for article generation.
 */

const MISTRAL_API_URL: string = 'https://api.mistral.ai/v1/chat/completions'
const MISTRAL_MODEL: string = 'mistral-small-latest'

export type MistralGenerateParams = {
  apiKey: string
  systemInstruction?: string
  userMessage: string
}

/**
 * Call Mistral chat completion and return the assistant text content.
 * The caller is responsible for interpreting the returned string (e.g. JSON.parse).
 */
export async function mistralGenerate(params: MistralGenerateParams): Promise<string> {
  const { apiKey, systemInstruction, userMessage } = params

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
    temperature: 0.7,
    max_tokens: 8192,
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

  const data: {
    choices?: Array<{
      message?: ChatMessage
    }>
  } = (await response.json()) as {
    choices?: Array<{
      message?: ChatMessage
    }>
  }

  const message: ChatMessage | undefined = data.choices?.[0]?.message

  if (!message || typeof message !== 'object') {
    return ''
  }

  if (typeof (message as { content?: string }).content === 'string') {
    const content: string | undefined = (message as { content?: string }).content
    return content?.trim() ?? ''
  }

  const parts: ChatMessageContentPart[] | undefined = (message as { content?: ChatMessageContentPart[] }).content
  if (Array.isArray(parts)) {
    const textParts: string[] = parts
      .map((part: ChatMessageContentPart): string => part.text?.trim() ?? '')
      .filter((value: string): boolean => value.length > 0)

    return textParts.join('\n').trim()
  }

  return ''
}
