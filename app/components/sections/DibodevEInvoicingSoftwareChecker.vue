<template>
  <div :id="props.anchorId" class="grid scroll-mt-24 items-start gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
    <form
      class="grid content-start gap-6 rounded-2xl border border-gray-300 bg-white p-6 sm:p-8"
      novalidate
      @submit.prevent="checkTypedName"
    >
      <div class="grid gap-2">
        <DibodevInput
          id="e-invoicing-software"
          type="text"
          autocomplete="off"
          :label="props.wording.softwareLabel"
          :placeholder="props.wording.softwarePlaceholder"
          :value="query"
          @update:value="onQueryInput"
        />
        <p class="text-muted text-sm leading-6">{{ props.wording.softwareHint }}</p>
      </div>
      <div v-if="suggestions.length > 0" class="grid gap-2">
        <p class="text-muted text-xs font-medium tracking-[0.08em] uppercase">{{ props.wording.suggestionsLabel }}</p>
        <ul class="flex flex-wrap gap-2">
          <li v-for="suggestion in suggestions" :key="suggestion.key">
            <button
              type="button"
              class="hover:border-primary hover:text-primary focus-visible:ring-primary inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-[15px] leading-6 text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              @click="pickSuggestion(suggestion)"
            >
              <span>{{ suggestion.label }}</span>
              <span v-if="suggestionDetail(suggestion)" class="text-muted text-xs">{{
                suggestionDetail(suggestion)
              }}</span>
            </button>
          </li>
        </ul>
      </div>
      <button
        type="submit"
        :disabled="!canCheck"
        class="bg-primary hover:bg-primary-dark focus-visible:ring-primary inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-3 text-[15px] leading-6 font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <DibodevIcon name="Search" mode="stroke" :width="18" :height="18" aria-hidden="true" />
        {{ props.wording.submit }}
      </button>
    </form>

    <div
      class="bg-primary-dark relative grid content-start gap-6 overflow-hidden rounded-2xl p-6 text-white sm:p-8 lg:sticky lg:top-28"
    >
      <div
        class="pointer-events-none absolute -top-16 -right-12 h-56 w-56 rounded-full bg-white/10 blur-2xl"
        aria-hidden="true"
      />
      <div class="relative grid gap-5" aria-live="polite">
        <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.resultLabel }}</p>
        <div class="grid gap-2">
          <h2 class="text-2xl leading-tight font-medium tracking-[-0.01em] sm:text-[28px]">{{ cardTitle }}</h2>
          <p class="text-[15px] leading-6 text-white/85">{{ cardText }}</p>
        </div>

        <div v-if="result && detailTexts.length > 0" class="grid gap-2.5">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.detailsTitle }}</p>
          <ul class="grid gap-2.5">
            <li v-for="detail in detailTexts" :key="detail" class="flex items-start gap-2.5">
              <DibodevIcon
                name="Info"
                mode="stroke"
                :width="18"
                :height="18"
                class="mt-0.5 shrink-0"
                aria-hidden="true"
              />
              <span class="text-[15px] leading-6">{{ detail }}</span>
            </li>
          </ul>
        </div>

        <div v-if="result && stepTexts.length > 0" class="grid gap-2.5 border-t border-white/20 pt-5">
          <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.stepsTitle }}</p>
          <ol class="grid gap-2">
            <li
              v-for="(step, stepIndex) in stepTexts"
              :key="step"
              class="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-2 text-[15px] leading-6"
            >
              <span class="font-medium text-white/70">{{ stepIndex + 1 }}.</span>
              <span>{{ step }}</span>
            </li>
          </ol>
        </div>

        <ul v-if="sourceLinks.length > 0" class="grid gap-2 border-t border-white/20 pt-5">
          <li v-for="source in sourceLinks" :key="source.href">
            <a
              :href="source.href"
              target="_blank"
              rel="noopener"
              class="flex items-start gap-2.5 text-sm leading-6 text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              <DibodevIcon
                name="ExternalLink"
                mode="stroke"
                :width="16"
                :height="16"
                class="mt-1 shrink-0"
                aria-hidden="true"
              />
              <span>{{ source.label }}</span>
            </a>
          </li>
        </ul>

        <p v-if="result" class="text-sm leading-6 text-white/70">{{ props.wording.disclaimer }}</p>
      </div>

      <div class="relative grid gap-3">
        <p class="text-[15px] leading-6 text-white/85">
          {{ result ? props.wording.ctaIntro : props.wording.idleCtaIntro }}
        </p>
        <NuxtLink
          :to="contactRoute"
          class="text-primary-dark flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-[15px] leading-6 font-medium transition-colors hover:bg-gray-800"
          @click="trackContactClick"
        >
          {{ result ? props.wording.ctaLabels[result.verdict] : props.wording.idleCtaLabel }}
          <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" aria-hidden="true" />
        </NuxtLink>
        <NuxtLink
          :to="serviceRoute"
          class="text-center text-sm leading-6 text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline"
          @click="trackServiceClick"
        >
          {{ props.wording.serviceLinkLabel }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, Ref } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevEInvoicingCheckResult, DibodevEInvoicingSuggestion } from '~/core/types/DibodevEInvoicingCheck'
import type { DibodevEInvoicingCheckerProps, DibodevEInvoicingSourceLink } from '~/core/types/DibodevEInvoicingChecker'
import { computed, ref } from 'vue'
import DibodevInput from '~/components/core/DibodevInput.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { E_INVOICING_DATASET } from '~/core/constants/eInvoicingCheck/pageShared'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { EInvoicingContactUtils } from '~/core/utils/EInvoicingContactUtils'
import { EInvoicingSoftwareUtils } from '~/core/utils/EInvoicingSoftwareUtils'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

/** What the visitor types never leaves the page: the PostHog events carry the verdict and the tool matched, not the text. */
const props: DibodevEInvoicingCheckerProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    required: true,
  },
  wording: {
    type: Object as PropType<DibodevEInvoicingCheckerProps['wording']>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const { locale } = useI18n()
const localePath = useLocalePath()
const { track } = useTracking()

const MAX_SUGGESTIONS: number = 6
const SERVICE_ROUTE_NAME: string = 'custom-business-software'
const SERVICE_TOOL_ID: string = 'custom-business-software'
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
/** The custom business software page, linked under the contact button whatever the verdict. */
const serviceRoute: string = localePath({ name: SERVICE_ROUTE_NAME })
let hasTrackedStart: boolean = false

/* REFS */
const query: Ref<string> = ref('')
const result: Ref<DibodevEInvoicingCheckResult | null> = ref(null)

/* COMPUTED */
const canCheck: ComputedRef<boolean> = computed((): boolean => query.value.trim() !== '')

/** Names matching what is typed, hidden once a result is shown for that exact text. */
const suggestions: ComputedRef<DibodevEInvoicingSuggestion[]> = computed((): DibodevEInvoicingSuggestion[] => {
  if (result.value && result.value.query === query.value.trim()) {
    return []
  }
  return EInvoicingSoftwareUtils.suggest(E_INVOICING_DATASET, query.value, MAX_SUGGESTIONS)
})

const listDateLabel: ComputedRef<string> = computed((): string =>
  EInvoicingSoftwareUtils.formatDate(E_INVOICING_DATASET.officialList.updatedAt, pageLocale),
)

const readAtLabel: ComputedRef<string> = computed((): string =>
  EInvoicingSoftwareUtils.formatDate(E_INVOICING_DATASET.publishersReadAt, pageLocale),
)

const templateValues: ComputedRef<Record<string, string>> = computed((): Record<string, string> => {
  const current: DibodevEInvoicingCheckResult | null = result.value
  const software = current?.software ?? null
  const platform = current?.platform ?? null
  const ownPlatformDate: string | null = software?.status === 'accredited' ? (platform?.registrationDate ?? null) : null

  return {
    name: software?.name ?? platform?.name ?? current?.query ?? '',
    query: current?.query ?? '',
    editor: software?.editor ?? '',
    date: formatOptionalDate(software ? ownPlatformDate : (platform?.registrationDate ?? null)),
    platform: platform?.name ?? '',
    platformDate: formatOptionalDate(platform?.registrationDate ?? null),
    listDate: listDateLabel.value,
    registeredCount: String(E_INVOICING_DATASET.officialList.registeredCount),
    pendingCount: String(E_INVOICING_DATASET.officialList.pendingCount),
    softwareCount: String(E_INVOICING_DATASET.software.length),
    sourceDate: formatOptionalDate(software?.sourceDate ?? null),
    readAt: readAtLabel.value,
  }
})

const cardTitle: ComputedRef<string> = computed((): string =>
  result.value ? fillResultTemplate(props.wording.verdictTitles[result.value.verdict]) : props.wording.idleTitle,
)

const cardText: ComputedRef<string> = computed((): string =>
  result.value ? fillResultTemplate(props.wording.verdictTexts[result.value.verdict]) : props.wording.idleText,
)

const detailTexts: ComputedRef<string[]> = computed((): string[] => {
  const current: DibodevEInvoicingCheckResult | null = result.value

  if (!current) {
    return []
  }
  const lines: string[] = []
  const software = current.software
  const platform = current.platform

  if (current.verdict === 'accredited' && platform) {
    lines.push(
      platform.registrationDate
        ? fillResultTemplate(props.wording.registrationDateLine)
        : props.wording.registrationDateUnknownLine,
    )
  }
  if (current.verdict === 'pending') {
    lines.push(props.wording.pendingLine)
  }
  if (current.verdict === 'connected' && platform) {
    lines.push(
      fillResultTemplate(
        platform.registrationDate ? props.wording.partnerPlatformLine : props.wording.partnerPlatformDateUnknownLine,
      ),
    )
  }
  if (software?.includedInPrice === true) {
    lines.push(props.wording.includedLine)
  }
  if (software?.includedInPrice === false) {
    lines.push(props.wording.notIncludedLine)
  }
  const note: string | undefined = software?.note?.[pageLocale] ?? software?.note?.fr

  if (note) {
    lines.push(note)
  }
  return lines
})

const stepTexts: ComputedRef<string[]> = computed((): string[] =>
  result.value ? props.wording.steps[result.value.verdict].map(fillResultTemplate) : [],
)

/** The pages the verdict rests on: the publisher's page when one was read, the official list otherwise or in addition. */
const sourceLinks: ComputedRef<DibodevEInvoicingSourceLink[]> = computed((): DibodevEInvoicingSourceLink[] => {
  const current: DibodevEInvoicingCheckResult | null = result.value

  if (!current) {
    return []
  }
  const links: DibodevEInvoicingSourceLink[] = []

  if (current.software?.sourceUrl) {
    links.push({
      href: current.software.sourceUrl,
      label: fillResultTemplate(
        current.software.sourceDate ? props.wording.publisherSourceDatedLabel : props.wording.publisherSourceLabel,
      ),
    })
  }
  if (current.platform || current.verdict === 'unknown' || current.verdict === 'announced') {
    links.push({
      href: E_INVOICING_DATASET.officialList.url,
      label: fillResultTemplate(props.wording.officialSourceLabel),
    })
  }
  return links
})

/** The contact page, with the check carried over so the message arrives already written. */
const contactRoute: ComputedRef<string> = computed((): string =>
  localePath({
    path: '/contact',
    query: EInvoicingContactUtils.buildContactQuery(
      result.value?.software?.name ?? result.value?.platform?.name ?? null,
      result.value?.verdict ?? null,
    ),
  }),
)

/* METHODS */
/**
 * Writes a date in words for the page language, or an empty string when there is none.
 * @param {string | null} isoDate - The date (YYYY-MM-DD), or null.
 * @returns {string} The date in words, or an empty string.
 */
function formatOptionalDate(isoDate: string | null): string {
  return isoDate ? EInvoicingSoftwareUtils.formatDate(isoDate, pageLocale) : ''
}

/**
 * Fills a result text with the values of the current check (names, dates, counts).
 * @param {string} template - A text with `{placeholders}`.
 * @returns {string} The text with the values.
 */
function fillResultTemplate(template: string): string {
  return QuizTextUtils.fillTemplate(template, templateValues.value)
}

/**
 * Small label next to a suggestion: the publisher of a tool when it differs from its name, or the status of an official platform.
 * @param {DibodevEInvoicingSuggestion} suggestion - The suggestion.
 * @returns {string} The label, or an empty string.
 */
function suggestionDetail(suggestion: DibodevEInvoicingSuggestion): string {
  if (suggestion.software) {
    const editor: string = suggestion.software.editor ?? ''

    return EInvoicingSoftwareUtils.normalize(editor).startsWith(EInvoicingSoftwareUtils.normalize(suggestion.label))
      ? ''
      : editor
  }
  if (suggestion.platform) {
    return suggestion.platform.status === 'registered'
      ? props.wording.suggestionPlatformDetail
      : props.wording.suggestionPendingDetail
  }
  return ''
}

/**
 * Keeps what the visitor types, clears a stale result and tracks the first interaction, once per page view.
 * @param {string | number} value - The field value.
 * @returns {void}
 */
function onQueryInput(value: string | number): void {
  query.value = String(value)
  if (result.value && result.value.query !== query.value.trim()) {
    result.value = null
  }
  if (hasTrackedStart) {
    return
  }
  hasTrackedStart = true
  track(TRACKING_EVENTS.eInvoicingSoftwareCheckStarted, { location: props.trackingLocation })
}

/**
 * Shows the verdict of a suggestion the visitor clicked.
 * @param {DibodevEInvoicingSuggestion} suggestion - The suggestion picked.
 * @returns {void}
 */
function pickSuggestion(suggestion: DibodevEInvoicingSuggestion): void {
  query.value = suggestion.label
  if (suggestion.software) {
    result.value = EInvoicingSoftwareUtils.resultForSoftware(E_INVOICING_DATASET, suggestion.software, suggestion.label)
  } else if (suggestion.platform) {
    result.value = EInvoicingSoftwareUtils.resultForPlatform(suggestion.platform, suggestion.label)
  }
  trackCheck('suggestion')
}

/**
 * Shows the verdict of the name typed, matched to the best known tool or platform.
 * @returns {void}
 */
function checkTypedName(): void {
  if (!canCheck.value) {
    return
  }
  result.value = EInvoicingSoftwareUtils.resolve(E_INVOICING_DATASET, query.value)
  trackCheck('submit')
}

/**
 * Tracks a check with its verdict and the tool or platform matched, never the text typed.
 * @param {'suggestion' | 'submit'} method - How the visitor asked for the verdict.
 * @returns {void}
 */
function trackCheck(method: 'suggestion' | 'submit'): void {
  if (!result.value) {
    return
  }
  track(TRACKING_EVENTS.eInvoicingSoftwareChecked, {
    location: props.trackingLocation,
    verdict: result.value.verdict,
    software: result.value.software?.id ?? null,
    platform: result.value.platform?.name ?? null,
    method,
  })
}

/**
 * Tracks the click on the contact button of the card, before or after a result.
 * @returns {void}
 */
function trackContactClick(): void {
  track(TRACKING_EVENTS.ctaProjectDiscussion, {
    location: result.value ? props.trackingLocation : `${props.trackingLocation}_idle`,
  })
}

/**
 * Tracks the click on the link to the custom business software page, before or after a result.
 * @returns {void}
 */
function trackServiceClick(): void {
  track(TRACKING_EVENTS.toolTeaserClicked, {
    tool: SERVICE_TOOL_ID,
    location: result.value ? props.trackingLocation : `${props.trackingLocation}_idle`,
  })
}
</script>
