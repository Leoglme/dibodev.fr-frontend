import type {
  DibodevAiAppContainerKey,
  DibodevAiCrawlerReference,
  DibodevAiReadabilityVerdict,
  DibodevAiStructuredDataType,
} from '~/core/types/DibodevAiReadabilityCheck'
import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import { NBSP } from '~/core/constants/typography'
import {
  AI_CRAWLERS,
  ANTHROPIC_CRAWLERS_DOCUMENTATION_URL,
  GOOGLE_CRAWLERS_DOCUMENTATION_URL,
  OPENAI_CRAWLERS_DOCUMENTATION_URL,
  PERPLEXITY_CRAWLERS_DOCUMENTATION_URL,
} from '~~/server/constants/aiCrawlers'

/** Day the robots and their sources were last re-read: move it at each re-read. */
export const AI_READABILITY_CHECK_PAGE_UPDATED_AT: string = '2026-11-16'

export const AI_READABILITY_CHECK_API_PATH: string = '/api/tools/ai-readability-check'

export const AI_READABILITY_CHECKER_ANCHOR_ID: string = 'verification'

export const AI_READABILITY_CHECK_ROUTE_NAME: string = 'tools-ai-readability-check'

export const AI_READABILITY_CHECK_CONTACT_TOPIC: string = 'ai-readability'

export const AI_READABILITY_CHECK_VERDICTS: DibodevAiReadabilityVerdict[] = [
  'readable',
  'partlyBlocked',
  'blocked',
  'emptyWithoutJavascript',
  'unknown',
]

/** The robots of the list, read from the server constant so the page and the checker never drift apart. */
export const AI_CRAWLER_REFERENCES: DibodevAiCrawlerReference[] = AI_CRAWLERS

/** Three articles of the blog that go further: being found, and a site built with a JavaScript framework. */
export const AI_READABILITY_CHECK_RELATED_ARTICLE_SLUGS: string[] = [
  'developpeur-nuxt-freelance-rennes',
  'site-web-artisans-attirer-clients-locaux',
  'site-vitrine-ou-outil-metier-sur-mesure-que-choisir',
]

/** OpenAI: GPTBot, OAI-SearchBot and ChatGPT-User, each setting independent (read on 16 November 2026). */
export const AI_OPENAI_SOURCE: DibodevSourceReference = { name: 'OpenAI', url: OPENAI_CRAWLERS_DOCUMENTATION_URL }

/** Anthropic: ClaudeBot, Claude-User and Claude-SearchBot, and what blocking each one does (read on 16 November 2026). */
export const AI_ANTHROPIC_SOURCE: DibodevSourceReference = {
  name: 'Anthropic',
  url: ANTHROPIC_CRAWLERS_DOCUMENTATION_URL,
}

/** Perplexity: PerplexityBot for the results, Perplexity-User for the visits a person asks for (read on 16 November 2026). */
export const AI_PERPLEXITY_SOURCE: DibodevSourceReference = {
  name: 'Perplexity',
  url: PERPLEXITY_CRAWLERS_DOCUMENTATION_URL,
}

/** Google: Googlebot for Search, Google-Extended for Gemini, with no effect on Search (read on 16 November 2026). */
export const AI_GOOGLE_SOURCE: DibodevSourceReference = { name: 'Google', url: GOOGLE_CRAWLERS_DOCUMENTATION_URL }

/** Microsoft: Copilot sends generated queries to the Bing search service to ground its answers (page of 29 October 2026). */
export const AI_MICROSOFT_COPILOT_SOURCE: DibodevSourceReference = {
  name: 'Microsoft',
  url: 'https://learn.microsoft.com/en-us/copilot/plan/manage-public-web-access',
}

/** Cloudflare's press release of 1 July 2025: AI crawlers blocked by default, every new domain asked whether to allow them. */
export const AI_CLOUDFLARE_SOURCE: DibodevSourceReference = {
  name: 'Cloudflare',
  url: 'https://www.cloudflare.com/press-releases/2025/cloudflare-just-changed-how-ai-crawlers-scrape-the-internet-at-large/',
}

/** The llms.txt proposal (Jeremy Howard, 3 September 2024, page modified on 10 August 2026). */
export const AI_LLMS_TXT_SOURCE: DibodevSourceReference = { name: 'llmstxt.org', url: 'https://llmstxt.org/' }

/** Names of the JavaScript frameworks whose container is recognised, the same in every language. */
export const AI_APP_CONTAINER_LABELS: Record<DibodevAiAppContainerKey, string> = {
  app: '#app',
  root: '#root',
  next: 'Next.js',
  nuxt: 'Nuxt',
  gatsby: 'Gatsby',
  angular: 'Angular',
  svelte: 'Svelte',
}

/** Schema.org type names, shown as they are written in the code. */
export const AI_STRUCTURED_DATA_TYPE_LABELS: Record<DibodevAiStructuredDataType, string> = {
  Organization: 'Organization',
  LocalBusiness: 'LocalBusiness',
  ProfessionalService: 'ProfessionalService',
  Store: 'Store',
  Restaurant: 'Restaurant',
  HomeAndConstructionBusiness: 'HomeAndConstructionBusiness',
  Person: 'Person',
  WebSite: 'WebSite',
  WebPage: 'WebPage',
  FAQPage: 'FAQPage',
  Product: 'Product',
  Service: 'Service',
  Article: 'Article',
  BlogPosting: 'BlogPosting',
  BreadcrumbList: 'BreadcrumbList',
  Event: 'Event',
}

/** The AI readability check, teased from the tools hub. */
export const AI_READABILITY_CHECK_TEASER: DibodevToolTeaserContent = {
  toolId: 'ai-readability-check',
  routeName: AI_READABILITY_CHECK_ROUTE_NAME,
  icon: 'MessageCircle',
  wording: {
    fr: {
      emphasizedIntro: `ChatGPT peut-il lire votre site${NBSP}?`,
      text: 'L’outil lit votre robots.txt et votre page d’accueil comme le ferait un robot d’IA, sans JavaScript, et dit ce qui l’empêche de vous lire.',
      linkLabel: `Tester mon site${NBSP}: lisible par ChatGPT${NBSP}?`,
      listLabel: `Mon site est-il lisible par ChatGPT${NBSP}?`,
      hubDescription: `GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended${NBSP}: les robots autorisés ou bloqués, ce qu’un robot d’IA reçoit vraiment, le texte lisible sans JavaScript et les interdictions dans la page, avec quoi faire.`,
      hubMeta: '1 lien · 15 secondes',
    },
    en: {
      emphasizedIntro: 'Can ChatGPT read your website?',
      text: 'The tool reads your robots.txt and your home page the way an AI robot does, without JavaScript, and tells you what stops it from reading you.',
      linkLabel: 'Test my website: readable by ChatGPT?',
      listLabel: 'Can ChatGPT read my website?',
      hubDescription:
        'GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended: the robots allowed or blocked, what an AI robot really receives, the text readable without JavaScript and the bans in the page, with what to do.',
      hubMeta: '1 link · 15 seconds',
    },
    es: {
      emphasizedIntro: '¿Puede ChatGPT leer tu web?',
      text: 'La herramienta lee tu robots.txt y tu página de inicio como lo haría un robot de IA, sin JavaScript, y te dice qué le impide leerte.',
      linkLabel: 'Probar mi web: ¿la lee ChatGPT?',
      listLabel: '¿Puede ChatGPT leer mi web?',
      hubDescription:
        'GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended: los robots permitidos o bloqueados, lo que un robot de IA recibe de verdad, el texto legible sin JavaScript y las prohibiciones en la página, con qué hacer.',
      hubMeta: '1 enlace · 15 segundos',
    },
  },
}
