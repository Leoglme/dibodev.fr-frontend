<template>
  <div :id="props.anchorId" class="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
    <form
      class="grid min-w-0 content-start gap-6 rounded-2xl border border-gray-300 bg-white p-6 sm:p-8"
      novalidate
      @submit.prevent="checkSite"
    >
      <div class="grid gap-2">
        <DibodevInput
          id="ai-readability-site"
          type="url"
          autocomplete="url"
          :label="props.wording.siteLabel"
          :placeholder="props.wording.sitePlaceholder"
          :value="siteAddress"
          @update:value="onSiteAddressInput"
        />
        <p class="text-muted text-sm leading-6">{{ props.wording.siteHint }}</p>
      </div>
      <button
        type="submit"
        :disabled="!canCheck"
        :aria-busy="isChecking"
        class="bg-primary hover:bg-primary-dark focus-visible:ring-primary inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-3 text-[15px] leading-6 font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <DibodevIcon name="Search" mode="stroke" :width="18" :height="18" aria-hidden="true" />
        {{ isChecking ? props.wording.checking : props.wording.submit }}
      </button>
    </form>

    <div
      ref="resultCard"
      class="bg-primary-dark relative grid min-w-0 content-start gap-6 overflow-hidden rounded-2xl p-6 text-white sm:p-8"
    >
      <div
        class="pointer-events-none absolute -top-16 -right-12 h-56 w-56 rounded-full bg-white/10 blur-2xl"
        aria-hidden="true"
      />
      <div class="relative grid min-w-0 gap-5" aria-live="polite" :aria-busy="isChecking">
        <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.resultLabel }}</p>
        <div class="grid gap-2">
          <h2 class="text-2xl leading-tight font-medium tracking-[-0.01em] break-words sm:text-[28px]">
            {{ cardTitle }}
          </h2>
          <p class="text-[15px] leading-6 text-white/85">{{ cardText }}</p>
        </div>

        <div v-for="group in rowGroups" :key="group.key" class="grid gap-3 border-t border-white/20 pt-5">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ group.title }}</p>
          <ol class="grid gap-2.5">
            <li
              v-for="row in group.rows"
              :key="row.key"
              class="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-x-2.5 gap-y-1 rounded-xl bg-white/10 p-4"
            >
              <DibodevIcon
                :name="WEBSITE_HEALTH_VERDICT_STYLES[row.level].icon"
                mode="stroke"
                :width="20"
                :height="20"
                class="mt-0.5"
                aria-hidden="true"
              />
              <p class="flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px] leading-6">
                <span class="font-medium break-words">{{ row.label }}</span>
                <span
                  class="rounded-full px-2 py-0.5 text-xs font-medium"
                  :class="WEBSITE_HEALTH_VERDICT_STYLES[row.level].badgeClass"
                >
                  {{ row.badgeLabel }}
                </span>
              </p>
              <p class="col-start-2 text-[15px] leading-6 break-words text-white/85">{{ row.seenText }}</p>
              <p v-if="row.meaningText" class="col-start-2 text-[15px] leading-6 text-white/85">
                <span class="font-medium text-white">{{ props.wording.meaningLabel }}</span> {{ row.meaningText }}
              </p>
              <p v-if="row.adviceText" class="col-start-2 text-[15px] leading-6">
                <span class="font-medium">{{ props.wording.adviceLabel }}</span> {{ row.adviceText }}
              </p>
            </li>
          </ol>
        </div>

        <p v-if="result" class="text-sm leading-6 text-white/70">{{ props.wording.disclaimer }}</p>
      </div>

      <div class="relative grid gap-3">
        <p class="text-[15px] leading-6 text-white/85">
          {{ result ? props.wording.ctaIntro : props.wording.idleCtaIntro }}
        </p>
        <NuxtLink
          :to="contactRoute"
          class="text-primary-dark flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-center text-[15px] leading-6 font-medium transition-colors hover:bg-gray-800"
          @click="trackContactClick"
        >
          {{ result ? props.wording.ctaLabels[result.verdict] : props.wording.idleCtaLabel }}
          <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" aria-hidden="true" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type {
  DibodevAiContentFinding,
  DibodevAiCrawlerAccess,
  DibodevAiCrawlerReference,
  DibodevAiDirectiveSource,
  DibodevAiDirectivesFinding,
  DibodevAiReadabilityCheckResult,
  DibodevAiRobotsTxtFinding,
  DibodevAiStructuredDataType,
  DibodevAiUnderstandingFinding,
} from '~/core/types/DibodevAiReadabilityCheck'
import type {
  DibodevAiReadabilityCheckerWording,
  DibodevAiReadabilityPointWording,
  DibodevAiDirectivesStatus,
  DibodevAiStructuredDataStatus,
  DibodevAiTitleStatus,
} from '~/core/types/DibodevAiReadabilityCheckPage'
import type {
  DibodevAiReadabilityCheckerProps,
  DibodevAiReadabilityRow,
  DibodevAiReadabilityRowGroup,
} from '~/core/types/DibodevAiReadabilityChecker'
import type { DibodevSiteCheckErrorKind } from '~/core/types/DibodevSiteCheck'
import type { DibodevWebsiteHealthVerdict } from '~/core/types/DibodevWebsiteHealthCheck'
import { computed, nextTick, ref } from 'vue'
import DibodevInput from '~/components/core/DibodevInput.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import {
  AI_APP_CONTAINER_LABELS,
  AI_CRAWLER_REFERENCES,
  AI_READABILITY_CHECK_API_PATH,
  AI_READABILITY_CHECK_CONTACT_TOPIC,
  AI_STRUCTURED_DATA_TYPE_LABELS,
} from '~/core/constants/aiReadabilityCheck/pageShared'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { WEBSITE_HEALTH_VERDICT_STYLES } from '~/core/constants/websiteHealthCheck/pageShared'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'
import { ResultRevealUtils } from '~/core/utils/ResultRevealUtils'
import { SiteCheckContactUtils } from '~/core/utils/SiteCheckContactUtils'
import { SiteCheckErrorUtils } from '~/core/utils/SiteCheckErrorUtils'

/** The site link never leaves the page: the PostHog events carry the verdict and counts, not the host. */
const props: DibodevAiReadabilityCheckerProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    required: true,
  },
  wording: {
    type: Object as PropType<DibodevAiReadabilityCheckerWording>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const localePath = useLocalePath()
const { track } = useTracking()

let hasTrackedStart: boolean = false

const siteAddress: Ref<string> = ref('')
const isChecking: Ref<boolean> = ref(false)
const result: Ref<DibodevAiReadabilityCheckResult | null> = ref(null)
const errorKind: Ref<DibodevSiteCheckErrorKind | null> = ref(null)
const resultCard: Ref<HTMLElement | null> = ref(null)
const checkedHost: Ref<string> = ref('')

const canCheck: ComputedRef<boolean> = computed((): boolean => !isChecking.value && siteAddress.value.trim() !== '')

const cardTitle: ComputedRef<string> = computed((): string => {
  if (isChecking.value) {
    return props.wording.loadingTitle
  }
  if (errorKind.value) {
    return props.wording.errorTitles[errorKind.value]
  }
  if (result.value) {
    return fillHostTemplate(props.wording.verdictTitles[result.value.verdict])
  }
  return props.wording.idleTitle
})

const cardText: ComputedRef<string> = computed((): string => {
  if (isChecking.value) {
    return props.wording.loadingText
  }
  if (errorKind.value) {
    return fillHostTemplate(props.wording.errorTexts[errorKind.value])
  }
  if (result.value) {
    return props.wording.verdictTexts[result.value.verdict]
  }
  return props.wording.idleText
})

const rowGroups: ComputedRef<DibodevAiReadabilityRowGroup[]> = computed((): DibodevAiReadabilityRowGroup[] => {
  if (!result.value) {
    return []
  }
  const checkResult: DibodevAiReadabilityCheckResult = result.value

  return [
    { key: 'robots', title: props.wording.robotsTitle, rows: robotsRowsOf(checkResult) },
    { key: 'botFetch', title: props.wording.botFetchTitle, rows: [botFetchRowOf(checkResult)] },
    { key: 'content', title: props.wording.contentTitle, rows: [contentRowOf(checkResult)] },
    { key: 'directives', title: props.wording.directivesTitle, rows: [directivesRowOf(checkResult)] },
    {
      key: 'understanding',
      title: props.wording.understandingTitle,
      rows: understandingRowsOf(checkResult.understanding, checkResult.robotsTxt.status !== 'notChecked'),
    },
  ]
})

const contactRoute: ComputedRef<string> = computed((): string =>
  localePath({
    path: '/contact',
    query: SiteCheckContactUtils.buildContactQuery(
      AI_READABILITY_CHECK_CONTACT_TOPIC,
      result.value?.host ?? null,
      result.value?.verdict ?? null,
    ),
  }),
)

/**
 * Fills a card text with the host checked.
 * @param {string} template - A text with `{host}`.
 * @returns {string} The text with the host.
 */
function fillHostTemplate(template: string): string {
  return QuizTextUtils.fillTemplate(template, { host: checkedHost.value })
}

/**
 * Builds a line of the card from the texts of a point and its status.
 * @param {string} key - The key of the line.
 * @param {DibodevAiReadabilityPointWording<TStatus>} point - The texts of the point.
 * @param {TStatus} status - The status found.
 * @param {DibodevWebsiteHealthVerdict} level - The level of the line.
 * @param {Record<string, string>} values - The values of the placeholders of the sentence seen.
 * @returns {DibodevAiReadabilityRow} The line.
 */
function pointRowOf<TStatus extends string>(
  key: string,
  point: DibodevAiReadabilityPointWording<TStatus>,
  status: TStatus,
  level: DibodevWebsiteHealthVerdict,
  values: Record<string, string>,
): DibodevAiReadabilityRow {
  return {
    key,
    level,
    label: point.label,
    badgeLabel: point.statusLabels[status],
    seenText: QuizTextUtils.fillTemplate(point.seenTexts[status], values),
    meaningText: point.meaningTexts[status],
    adviceText: point.adviceTexts[status] ?? '',
  }
}

/**
 * The robot reference of a key, for its name and publisher.
 * @param {DibodevAiCrawlerAccess} access - The robot line of the result.
 * @returns {DibodevAiCrawlerReference | undefined} The reference.
 */
function referenceOf(access: DibodevAiCrawlerAccess): DibodevAiCrawlerReference | undefined {
  return AI_CRAWLER_REFERENCES.find((reference: DibodevAiCrawlerReference): boolean => reference.key === access.key)
}

/**
 * The robots.txt lines: the file, one line for the allowed robots, then one line per blocked robot.
 * @param {DibodevAiReadabilityCheckResult} checkResult - The result.
 * @returns {DibodevAiReadabilityRow[]} The lines.
 */
function robotsRowsOf(checkResult: DibodevAiReadabilityCheckResult): DibodevAiReadabilityRow[] {
  const robotsTxt: DibodevAiRobotsTxtFinding = checkResult.robotsTxt
  const rows: DibodevAiReadabilityRow[] = [
    pointRowOf('robotsFile', props.wording.robotsFile, robotsTxt.status, robotsTxt.level, {}),
  ]
  const allowed: DibodevAiCrawlerAccess[] = robotsTxt.crawlers.filter(
    (access: DibodevAiCrawlerAccess): boolean => access.isAllowed,
  )

  if (allowed.length > 0) {
    rows.push({
      key: 'crawlersAllowed',
      level: 'ok',
      label: props.wording.crawlersAllowedLabel,
      badgeLabel: QuizTextUtils.fillTemplate(props.wording.crawlersAllowedBadge, {
        count: String(allowed.length),
        total: String(robotsTxt.crawlers.length),
      }),
      seenText: QuizTextUtils.fillTemplate(props.wording.crawlersAllowedSeenText, {
        robots: allowed
          .map((access: DibodevAiCrawlerAccess): string => referenceOf(access)?.token ?? access.key)
          .join(props.wording.listSeparator),
      }),
      meaningText: props.wording.crawlersAllowedMeaningText,
      adviceText: '',
    })
  }
  for (const access of robotsTxt.crawlers.filter(
    (candidate: DibodevAiCrawlerAccess): boolean => !candidate.isAllowed,
  )) {
    rows.push(blockedCrawlerRowOf(access))
  }
  return rows
}

/**
 * One blocked robot: which rule blocks it, what it changes for its role, and what to do.
 * @param {DibodevAiCrawlerAccess} access - The robot line of the result.
 * @returns {DibodevAiReadabilityRow} The line.
 */
function blockedCrawlerRowOf(access: DibodevAiCrawlerAccess): DibodevAiReadabilityRow {
  const reference: DibodevAiCrawlerReference | undefined = referenceOf(access)
  const role: string = props.wording.crawlerRoleLabels[access.role]
  const seenTemplate: string =
    access.ruleSource === 'specific'
      ? props.wording.crawlerBlockedSpecificSeenText
      : props.wording.crawlerBlockedWildcardSeenText
  const meaningText: string = props.wording.crawlerBlockedMeaningTexts[access.role]

  return {
    key: access.key,
    level: access.level,
    label: QuizTextUtils.fillTemplate(props.wording.crawlerLabel, {
      robot: reference?.token ?? access.key,
      operator: reference?.operator ?? '',
    }),
    badgeLabel: props.wording.crawlerBlockedLabel,
    seenText: QuizTextUtils.fillTemplate(seenTemplate, { role }),
    meaningText: reference?.mayIgnoreRobotsTxt
      ? `${meaningText} ${props.wording.crawlerMayIgnoreRobotsTxtText}`
      : meaningText,
    adviceText: props.wording.crawlerBlockedAdviceTexts[access.role],
  }
}

/**
 * The line comparing the normal reading with the reading signed like an AI search robot.
 * @param {DibodevAiReadabilityCheckResult} checkResult - The result.
 * @returns {DibodevAiReadabilityRow} The line.
 */
function botFetchRowOf(checkResult: DibodevAiReadabilityCheckResult): DibodevAiReadabilityRow {
  return pointRowOf('botFetch', props.wording.botFetch, checkResult.botFetch.status, checkResult.botFetch.level, {
    status: String(checkResult.botFetch.httpStatus ?? ''),
  })
}

/**
 * The line of the text readable without JavaScript, with the framework container when one was recognised.
 * @param {DibodevAiReadabilityCheckResult} checkResult - The result.
 * @returns {DibodevAiReadabilityRow} The line.
 */
function contentRowOf(checkResult: DibodevAiReadabilityCheckResult): DibodevAiReadabilityRow {
  const content: DibodevAiContentFinding = checkResult.content
  const row: DibodevAiReadabilityRow = pointRowOf('content', props.wording.content, content.status, content.level, {
    words: String(content.wordCount),
  })

  if (content.status !== 'emptyAppShell' || !content.appContainer) {
    return row
  }
  const frameworkText: string = QuizTextUtils.fillTemplate(props.wording.contentFrameworkText, {
    framework: AI_APP_CONTAINER_LABELS[content.appContainer],
  })

  return { ...row, seenText: `${row.seenText} ${frameworkText}` }
}

/**
 * The line of the interdictions written in the page or its headers.
 * @param {DibodevAiReadabilityCheckResult} checkResult - The result.
 * @returns {DibodevAiReadabilityRow} The line.
 */
function directivesRowOf(checkResult: DibodevAiReadabilityCheckResult): DibodevAiReadabilityRow {
  const directives: DibodevAiDirectivesFinding = checkResult.directives
  let status: DibodevAiDirectivesStatus = 'none'

  if (directives.directives.includes('noindex')) {
    status = 'noindex'
  } else if (directives.directives.length > 0) {
    status = 'restrictive'
  }
  return pointRowOf('directives', props.wording.directives, status, directives.level, {
    directives: directives.directives.join(props.wording.listSeparator),
    sources: directives.sources
      .map((source: DibodevAiDirectiveSource): string => props.wording.directiveSourceLabels[source])
      .join(props.wording.listSeparator),
  })
}

/**
 * The lines of what helps an AI understand the site: title and description, structured data, sitemap, llms.txt.
 * @param {DibodevAiUnderstandingFinding} understanding - The finding.
 * @param {boolean} wasRobotsTxtRead - False when robots.txt did not answer, so the sitemap line is left out.
 * @returns {DibodevAiReadabilityRow[]} The lines.
 */
function understandingRowsOf(
  understanding: DibodevAiUnderstandingFinding,
  wasRobotsTxtRead: boolean,
): DibodevAiReadabilityRow[] {
  const rows: DibodevAiReadabilityRow[] = [
    pointRowOf(
      'titleAndDescription',
      props.wording.titleAndDescription,
      titleStatusOf(understanding),
      understanding.titleLevel,
      {},
    ),
    pointRowOf(
      'structuredData',
      props.wording.structuredData,
      structuredDataStatusOf(understanding),
      understanding.structuredDataLevel,
      {
        types: understanding.structuredDataTypes
          .map((type: DibodevAiStructuredDataType): string => AI_STRUCTURED_DATA_TYPE_LABELS[type])
          .join(props.wording.listSeparator),
      },
    ),
  ]

  if (wasRobotsTxtRead || understanding.hasDeclaredSitemap) {
    rows.push(
      pointRowOf(
        'sitemap',
        props.wording.sitemap,
        understanding.hasDeclaredSitemap ? 'declared' : 'notDeclared',
        understanding.sitemapLevel,
        {},
      ),
    )
  }
  rows.push(pointRowOf('llmsTxt', props.wording.llmsTxt, understanding.llmsTxtStatus, understanding.llmsTxtLevel, {}))
  return rows
}

/**
 * The status of the title and description line.
 * @param {DibodevAiUnderstandingFinding} understanding - The finding.
 * @returns {DibodevAiTitleStatus} The status.
 */
function titleStatusOf(understanding: DibodevAiUnderstandingFinding): DibodevAiTitleStatus {
  if (understanding.titleLevel === 'unknown') {
    return 'notReadable'
  }
  if (understanding.hasTitle && understanding.hasDescription) {
    return 'complete'
  }
  if (understanding.hasTitle) {
    return 'titleOnly'
  }
  return understanding.hasDescription ? 'descriptionOnly' : 'missing'
}

/**
 * The status of the structured data line.
 * @param {DibodevAiUnderstandingFinding} understanding - The finding.
 * @returns {DibodevAiStructuredDataStatus} The status.
 */
function structuredDataStatusOf(understanding: DibodevAiUnderstandingFinding): DibodevAiStructuredDataStatus {
  if (understanding.structuredDataLevel === 'unknown') {
    return 'notReadable'
  }
  if (understanding.structuredDataTypes.length > 0) {
    return 'knownTypes'
  }
  return understanding.hasOtherStructuredData ? 'otherTypes' : 'missing'
}

/**
 * Keeps what the visitor types and tracks the first interaction, once per page view.
 * @param {string | number} value - The field value.
 * @returns {void}
 */
function onSiteAddressInput(value: string | number): void {
  siteAddress.value = String(value)
  if (hasTrackedStart) {
    return
  }
  hasTrackedStart = true
  track(TRACKING_EVENTS.aiReadabilityCheckStarted, { location: props.trackingLocation })
}

/**
 * Brings the result into view when it sits under the fold, as it does on a phone where it follows the form.
 * @returns {Promise<void>} Resolves once the result is in view.
 */
async function revealResultBelowTheFold(): Promise<void> {
  await nextTick()
  ResultRevealUtils.revealBelowTheFold(resultCard.value)
}

/**
 * Asks the API to read the site as an AI robot does and shows the findings, or why the site could not be read.
 * @returns {Promise<void>} Resolves once the result or the error is shown.
 */
async function checkSite(): Promise<void> {
  if (!canCheck.value) {
    return
  }
  isChecking.value = true
  errorKind.value = null
  result.value = null
  checkedHost.value = siteAddress.value.trim()

  try {
    const checkResult: DibodevAiReadabilityCheckResult = await $fetch<DibodevAiReadabilityCheckResult>(
      AI_READABILITY_CHECK_API_PATH,
      { query: { site: checkedHost.value } },
    )
    const blockedCrawlers: DibodevAiCrawlerAccess[] = checkResult.robotsTxt.crawlers.filter(
      (access: DibodevAiCrawlerAccess): boolean => !access.isAllowed,
    )

    result.value = checkResult
    checkedHost.value = checkResult.host
    track(TRACKING_EVENTS.aiReadabilityChecked, {
      location: props.trackingLocation,
      outcome: 'result',
      verdict: checkResult.verdict,
      blockedCrawlerCount: blockedCrawlers.length,
      blockedSearchCrawlerCount: blockedCrawlers.filter(
        (access: DibodevAiCrawlerAccess): boolean => access.role === 'search',
      ).length,
      botFetchStatus: checkResult.botFetch.status,
      contentStatus: checkResult.content.status,
      errorKind: null,
    })
  } catch (error: unknown) {
    errorKind.value = SiteCheckErrorUtils.kindOf(error)
    track(TRACKING_EVENTS.aiReadabilityChecked, {
      location: props.trackingLocation,
      outcome: 'error',
      verdict: null,
      blockedCrawlerCount: null,
      blockedSearchCrawlerCount: null,
      botFetchStatus: null,
      contentStatus: null,
      errorKind: errorKind.value,
    })
  } finally {
    isChecking.value = false
    await revealResultBelowTheFold()
  }
}

/**
 * Tracks the contact button of the card.
 * @returns {void}
 */
function trackContactClick(): void {
  track(TRACKING_EVENTS.ctaProjectDiscussion, { location: props.trackingLocation })
}
</script>
