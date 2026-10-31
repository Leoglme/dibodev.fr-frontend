import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type {
  DibodevSecurityAlertPageContent,
  DibodevSecurityAlertPagesContent,
} from '~/core/types/DibodevSecurityAlert'
import { SECURITY_ALERT_PAGES } from '~/core/constants/securityAlerts/wording'

/** What an alert landing page needs: its texts, the topic line and the link back to the tools. */
export type UseSecurityAlertLandingPageReturn = {
  content: DibodevSecurityAlertPageContent
  detail: string
  toolsPath: string
}

/**
 * Reads one alert landing page in the page language, hides it from search engines and resolves its `?topic=` line.
 * @param {keyof DibodevSecurityAlertPagesContent} page - Which landing page.
 * @returns {UseSecurityAlertLandingPageReturn} The content and the links.
 */
export function useSecurityAlertLandingPage(
  page: keyof DibodevSecurityAlertPagesContent,
): UseSecurityAlertLandingPageReturn {
  const { locale }: { locale: WritableComputedRef<string> } = useI18n()
  const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
  const route: ReturnType<typeof useRoute> = useRoute()
  const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
  const content: DibodevSecurityAlertPageContent = (SECURITY_ALERT_PAGES[pageLocale] ?? SECURITY_ALERT_PAGES.fr)[page]
  const detail: string = readTopicText(String(route.query.topic ?? ''), content)

  useHead({
    title: content.meta.title,
    meta: [
      { name: 'description', content: content.meta.description },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
  })

  return { content, detail, toolsPath: localePath('tools') }
}

/**
 * Picks the line of a landing page that matches the alert topic, or an empty string for an unknown topic.
 * @param {string} topic - The `?topic=` value the API appends after a confirmation: `security` or `hosting:<provider>`.
 * @param {DibodevSecurityAlertPageContent} content - The texts of the landing page.
 * @returns {string} The line of the topic.
 */
function readTopicText(topic: string, content: DibodevSecurityAlertPageContent): string {
  if (topic === 'security') {
    return content.topicTexts.security
  }
  if (topic.startsWith('hosting:')) {
    return content.topicTexts.hosting
  }
  return ''
}
