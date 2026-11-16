import type { AiCrawler } from '~~/server/types/tools/aiReadabilityCheck'

/** OpenAI's page on its robots (GPTBot, OAI-SearchBot, ChatGPT-User), read on 16 November 2026. */
export const OPENAI_CRAWLERS_DOCUMENTATION_URL: string = 'https://developers.openai.com/api/docs/bots'

/** Anthropic's help page « Does Anthropic crawl data from the web, and how can site owners block the crawler? », read on 16 November 2026. */
export const ANTHROPIC_CRAWLERS_DOCUMENTATION_URL: string =
  'https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler'

/** Perplexity's page on PerplexityBot and Perplexity-User, read on 16 November 2026. */
export const PERPLEXITY_CRAWLERS_DOCUMENTATION_URL: string = 'https://docs.perplexity.ai/guides/bots'

/** Google's page on its common crawlers (Googlebot, Google-Extended), read on 16 November 2026. */
export const GOOGLE_CRAWLERS_DOCUMENTATION_URL: string =
  'https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers?hl=fr'

/** The signature of OAI-SearchBot as OpenAI publishes it (its version may change): the checker sends it once, to see what a firewall answers to an AI search robot. A refusal is a signal, not a proof: the real robot also comes from OpenAI's addresses. */
export const AI_SEARCH_BOT_USER_AGENT: string =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36; compatible; OAI-SearchBot/1.4; +https://openai.com/searchbot'

/** The robots whose publisher's documentation was read; a robot without a read documentation stays out of the list. */
export const AI_CRAWLERS: AiCrawler[] = [
  {
    key: 'oaiSearchBot',
    token: 'OAI-SearchBot',
    operator: 'OpenAI',
    role: 'search',
    documentationUrl: OPENAI_CRAWLERS_DOCUMENTATION_URL,
    mayIgnoreRobotsTxt: false,
  },
  {
    key: 'chatGptUser',
    token: 'ChatGPT-User',
    operator: 'OpenAI',
    role: 'user',
    documentationUrl: OPENAI_CRAWLERS_DOCUMENTATION_URL,
    mayIgnoreRobotsTxt: true,
  },
  {
    key: 'gptBot',
    token: 'GPTBot',
    operator: 'OpenAI',
    role: 'training',
    documentationUrl: OPENAI_CRAWLERS_DOCUMENTATION_URL,
    mayIgnoreRobotsTxt: false,
  },
  {
    key: 'claudeSearchBot',
    token: 'Claude-SearchBot',
    operator: 'Anthropic',
    role: 'search',
    documentationUrl: ANTHROPIC_CRAWLERS_DOCUMENTATION_URL,
    mayIgnoreRobotsTxt: false,
  },
  {
    key: 'claudeUser',
    token: 'Claude-User',
    operator: 'Anthropic',
    role: 'user',
    documentationUrl: ANTHROPIC_CRAWLERS_DOCUMENTATION_URL,
    mayIgnoreRobotsTxt: false,
  },
  {
    key: 'claudeBot',
    token: 'ClaudeBot',
    operator: 'Anthropic',
    role: 'training',
    documentationUrl: ANTHROPIC_CRAWLERS_DOCUMENTATION_URL,
    mayIgnoreRobotsTxt: false,
  },
  {
    key: 'perplexityBot',
    token: 'PerplexityBot',
    operator: 'Perplexity',
    role: 'search',
    documentationUrl: PERPLEXITY_CRAWLERS_DOCUMENTATION_URL,
    mayIgnoreRobotsTxt: false,
  },
  {
    key: 'perplexityUser',
    token: 'Perplexity-User',
    operator: 'Perplexity',
    role: 'user',
    documentationUrl: PERPLEXITY_CRAWLERS_DOCUMENTATION_URL,
    mayIgnoreRobotsTxt: true,
  },
  {
    key: 'googlebot',
    token: 'Googlebot',
    operator: 'Google',
    role: 'search',
    documentationUrl: GOOGLE_CRAWLERS_DOCUMENTATION_URL,
    mayIgnoreRobotsTxt: false,
  },
  {
    key: 'googleExtended',
    token: 'Google-Extended',
    operator: 'Google',
    role: 'training',
    documentationUrl: GOOGLE_CRAWLERS_DOCUMENTATION_URL,
    mayIgnoreRobotsTxt: false,
  },
]
