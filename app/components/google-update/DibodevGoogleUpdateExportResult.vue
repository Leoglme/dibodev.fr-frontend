<template>
  <div
    class="bg-primary-dark relative grid content-start gap-6 overflow-hidden rounded-2xl p-6 text-white sm:p-8 lg:sticky lg:top-28"
  >
    <div
      class="pointer-events-none absolute -top-16 -right-12 h-56 w-56 rounded-full bg-white/10 blur-2xl"
      aria-hidden="true"
    />
    <div class="relative grid gap-5" aria-live="polite">
      <div class="flex flex-wrap items-center gap-2">
        <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.resultLabel }}</p>
        <span
          v-if="props.result && props.isExample"
          class="rounded-full bg-amber-300 px-2.5 py-0.5 text-xs font-medium text-gray-100"
          >{{ props.wording.exampleBadge }}</span
        >
      </div>
      <div class="grid gap-2">
        <h2 class="text-2xl leading-tight font-medium tracking-[-0.01em] sm:text-[28px]">{{ cardTitle }}</h2>
        <p class="text-[15px] leading-6 text-white/85">{{ cardText }}</p>
        <p v-for="note in notes" :key="note" class="text-[15px] leading-6 font-medium">{{ note }}</p>
      </div>

      <div v-if="hasFigures" class="grid gap-2.5 border-t border-white/20 pt-5">
        <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.figuresTitle }}</p>
        <dl class="grid gap-2">
          <div v-for="figure in figures" :key="figure.label" class="flex items-baseline justify-between gap-4">
            <dt class="text-sm leading-6 text-white/85 first-letter:uppercase">{{ figure.label }}</dt>
            <dd class="text-base font-medium whitespace-nowrap tabular-nums">{{ figure.value }}</dd>
          </div>
        </dl>
      </div>

      <div v-if="props.result" class="grid gap-4 border-t border-white/20 pt-5">
        <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">{{ props.wording.pagesTitle }}</p>
        <template v-if="props.pageMovements">
          <DibodevGoogleUpdatePageMovementList
            :title="props.wording.droppedToZeroTitle"
            :movements="props.pageMovements.droppedToZero"
            :impressionsLabel="props.wording.pageImpressionsLabel"
            :emptyText="props.wording.pagesEmptyList"
          />
          <DibodevGoogleUpdatePageMovementList
            :title="props.wording.biggestDropsTitle"
            :movements="props.pageMovements.biggestDrops"
            :impressionsLabel="props.wording.pageImpressionsLabel"
            :emptyText="props.wording.pagesEmptyList"
          />
          <DibodevGoogleUpdatePageMovementList
            :title="props.wording.biggestGainsTitle"
            :movements="props.pageMovements.biggestGains"
            :impressionsLabel="props.wording.pageImpressionsLabel"
            :emptyText="props.wording.pagesEmptyList"
          />
          <p class="text-sm leading-6 text-white/70">{{ props.wording.pageImpressionsLabel }}</p>
        </template>
        <p v-else class="text-sm leading-6 text-white/85">
          {{ props.hasPageRows ? props.wording.pagesNeedComparison : props.wording.pagesMissing }}
        </p>
      </div>

      <p v-if="props.result" class="text-sm leading-6 text-white/70">{{ props.wording.disclaimer }}</p>
    </div>

    <div class="relative grid gap-3">
      <p class="text-[15px] leading-6 text-white/85">
        {{ props.result ? props.wording.ctaIntro : props.wording.idleCtaIntro }}
      </p>
      <NuxtLink
        :to="props.contactRoute"
        class="text-primary-dark flex min-h-12 items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-center text-[15px] leading-6 font-medium transition-colors hover:bg-gray-800"
        @click="emit('contact-click')"
      >
        {{ props.result ? props.wording.ctaLabels[props.result.verdict] : props.wording.idleCtaLabel }}
        <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" class="shrink-0" aria-hidden="true" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type {
  DibodevGoogleSearchUpdate,
  DibodevGoogleUpdateImpactResult,
  DibodevGoogleUpdatePageMovements,
} from '~/core/types/DibodevGoogleUpdateImpact'
import type {
  DibodevGoogleUpdateExportResultProps,
  DibodevGoogleUpdateImpactCheckerWording,
} from '~/core/types/DibodevGoogleUpdateImpactChecker'
import type { DibodevQuizPriceDetail } from '~/core/types/DibodevQuiz'
import { computed } from 'vue'
import DibodevGoogleUpdatePageMovementList from '~/components/google-update/DibodevGoogleUpdatePageMovementList.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { GOOGLE_UPDATE_DAYS_TO_WAIT_AFTER_END, GoogleUpdateImpactUtils } from '~/core/utils/GoogleUpdateImpactUtils'
import { QuizTextUtils } from '~/core/utils/QuizTextUtils'

/** Result card of the export: the verdict, the figures behind it, the pages that moved and the contact button. Figures stay on the page. */
const props: DibodevGoogleUpdateExportResultProps = defineProps({
  wording: {
    type: Object as PropType<DibodevGoogleUpdateImpactCheckerWording>,
    required: true,
  },
  update: {
    type: Object as PropType<DibodevGoogleSearchUpdate>,
    required: true,
  },
  result: {
    type: Object as PropType<DibodevGoogleUpdateImpactResult | null>,
    default: null,
  },
  pageMovements: {
    type: Object as PropType<DibodevGoogleUpdatePageMovements | null>,
    default: null,
  },
  hasPageRows: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  isExample: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  contactRoute: {
    type: String as PropType<string>,
    required: true,
  },
})

const emit: (event: 'contact-click') => void = defineEmits<{
  (event: 'contact-click'): void
}>()

const { locale } = useI18n()

const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'

/* COMPUTED */
/** Values of the `{placeholders}` of the result texts. */
const templateValues: ComputedRef<Record<string, string>> = computed((): Record<string, string> => {
  const endDate: string | null = props.update.endDate
  const result: DibodevGoogleUpdateImpactResult | null = props.result

  return {
    name: props.update.name,
    startDate: GoogleUpdateImpactUtils.formatDate(props.update.startDate, pageLocale),
    endDate: endDate ? GoogleUpdateImpactUtils.formatDate(endDate, pageLocale) : '',
    waitUntil: endDate
      ? GoogleUpdateImpactUtils.formatDate(
          GoogleUpdateImpactUtils.addDays(endDate, GOOGLE_UPDATE_DAYS_TO_WAIT_AFTER_END),
          pageLocale,
        )
      : '',
    days: String(result?.daysSinceStart ?? 0),
    metric: props.wording.metricLabels[result?.metric ?? 'impressions'],
    trend: result?.provisionalTrend ? props.wording.trendLabels[result.provisionalTrend] : '',
  }
})

const cardTitle: ComputedRef<string> = computed((): string =>
  props.result ? props.wording.verdictTitles[props.result.verdict] : props.wording.idleTitle,
)

const cardText: ComputedRef<string> = computed((): string =>
  props.result ? fill(props.wording.verdictTexts[props.result.verdict]) : props.wording.idleText,
)

/** Lines under the text: why it is unreadable, or why it is too early and the trend seen so far. */
const notes: ComputedRef<string[]> = computed((): string[] => {
  const result: DibodevGoogleUpdateImpactResult | null = props.result

  if (!result) {
    return []
  }
  if (result.verdict === 'unreadable' && result.unreadableReason) {
    return [fill(props.wording.unreadableTexts[result.unreadableReason])]
  }
  if (result.verdict !== 'tooEarly') {
    return []
  }
  const lines: string[] = [
    fill(result.isRolloutFinished ? props.wording.rolloutWaitNote : props.wording.rolloutOngoingNote),
  ]

  if (result.provisionalTrend) {
    lines.push(fill(props.wording.provisionalTemplate))
  }
  return lines
})

const hasFigures: ComputedRef<boolean> = computed(
  (): boolean => props.result !== null && props.result.verdict !== 'unreadable' && props.result.changeRatio !== null,
)

/** The totals compared and the changes, in the page language. */
const figures: ComputedRef<DibodevQuizPriceDetail[]> = computed((): DibodevQuizPriceDetail[] => {
  const result: DibodevGoogleUpdateImpactResult | null = props.result

  if (!result || result.changeRatio === null) {
    return []
  }
  return [
    {
      label: fill(props.wording.currentFigureTemplate),
      value: GoogleUpdateImpactUtils.formatCount(result.currentTotal, pageLocale),
    },
    {
      label: props.wording.baselineFigureLabel,
      value: GoogleUpdateImpactUtils.formatCount(result.baselineTotal, pageLocale),
    },
    {
      label: props.wording.changeFigureLabel,
      value: GoogleUpdateImpactUtils.formatChange(result.changeRatio, pageLocale),
    },
    {
      label: props.wording.changeBeforeFigureLabel,
      value:
        result.changeBeforeRatio === null
          ? props.wording.changeBeforeUnknown
          : GoogleUpdateImpactUtils.formatChange(result.changeBeforeRatio, pageLocale),
    },
  ]
})

/* METHODS */
/**
 * Fills a result text with the dates of the update and the figures of the check.
 * @param {string} template - A text with `{placeholders}`.
 * @returns {string} The text with the values.
 */
function fill(template: string): string {
  return QuizTextUtils.fillTemplate(template, templateValues.value)
}
</script>
