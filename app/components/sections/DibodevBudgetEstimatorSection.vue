<template>
  <section id="estimator" class="scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div class="mx-auto grid w-full max-w-7xl gap-12 lg:gap-14">
      <DibodevSectionHeading :eyebrow="headingEyebrow" :title="headingTitle" :intro="headingIntro" align="center" />

      <div class="grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <div class="grid content-start gap-8 rounded-2xl border border-gray-300 bg-white p-6 sm:p-8">
          <fieldset class="estimator-group">
            <legend class="estimator-group__legend">{{ $t('estimator.kindLabel') }}</legend>
            <DibodevTogglePillGroup :value="selectedKind" :options="kindOptions" @update:value="onKindChange" />
          </fieldset>

          <fieldset class="estimator-group">
            <legend class="estimator-group__legend">{{ $t('estimator.sizeLabel') }}</legend>
            <DibodevTogglePillGroup :value="selectedSize" :options="sizeOptions" @update:value="onSizeChange" />
            <p class="text-muted mt-3 text-sm leading-6">{{ $t(`estimator.sizes.${selectedSize}.hint`) }}</p>
          </fieldset>

          <fieldset class="estimator-group">
            <legend class="estimator-group__legend">{{ $t('estimator.optionsLabel') }}</legend>
            <DibodevTogglePillGroup
              :value="selectedOptions"
              :options="optionOptions"
              :multiple="true"
              @update:value="onOptionsChange"
            />
          </fieldset>

          <p class="text-muted border-t border-gray-300 pt-5 text-sm leading-6">{{ $t('estimator.note') }}</p>
        </div>

        <div
          class="bg-primary-dark relative grid content-between gap-8 overflow-hidden rounded-2xl p-6 text-white sm:p-8"
        >
          <div
            class="pointer-events-none absolute -top-16 -right-12 h-56 w-56 rounded-full bg-white/10 blur-2xl"
            aria-hidden="true"
          />
          <div class="relative grid gap-6">
            <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">
              {{ $t('estimator.resultLabel') }}
            </p>
            <p class="text-4xl leading-tight font-medium tracking-[-0.01em] sm:text-5xl" aria-live="polite">
              {{ priceRangeLabel }}
            </p>
            <dl class="grid grid-cols-2 gap-3">
              <div class="rounded-xl bg-white/10 p-4">
                <dt class="text-xs font-medium text-white/85">{{ $t('estimator.durationLabel') }}</dt>
                <dd class="mt-1 text-lg font-medium sm:text-xl">{{ durationLabel }}</dd>
              </div>
              <div class="rounded-xl bg-white/10 p-4">
                <dt class="text-xs font-medium text-white/85">{{ $t('estimator.maintenanceLabel') }}</dt>
                <dd class="mt-1 text-lg font-medium sm:text-xl">{{ $t('estimator.maintenanceValue') }}</dd>
              </div>
            </dl>
            <p class="text-sm leading-6 text-white/85">{{ $t('estimator.disclaimer') }}</p>
            <div class="grid gap-3 border-t border-white/20 pt-6">
              <p class="text-xs font-medium tracking-[0.08em] text-white/85 uppercase">
                {{ $t('estimator.includedTitle') }}
              </p>
              <ul class="grid gap-2.5">
                <li v-for="includedKey in INCLUDED_KEYS" :key="includedKey" class="flex items-start gap-2.5">
                  <DibodevIcon
                    name="Check"
                    mode="stroke"
                    :width="18"
                    :height="18"
                    class="mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span class="text-[15px] leading-6">{{ $t(`estimator.included.${includedKey}`) }}</span>
                </li>
              </ul>
            </div>
          </div>
          <NuxtLink
            :to="contactRoute"
            class="text-primary-dark relative flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-[15px] leading-6 font-medium transition-colors hover:bg-gray-800"
            @click="onRequestQuote"
          >
            {{ $t('estimator.cta') }}
            <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" aria-hidden="true" />
          </NuxtLink>
        </div>
      </div>

      <slot name="footer" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ComputedRef, PropType, Ref } from 'vue'
import type { Option, PillValue } from '~/components/ui/DibodevTogglePillGroup.vue'
import type {
  DibodevBudgetEstimatorSectionProps,
  DibodevEstimatorOption,
  DibodevEstimatorProjectKind,
  DibodevEstimatorProjectSize,
  DibodevEstimatorResult,
} from '~/core/types/DibodevBudgetEstimator'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevTogglePillGroup from '~/components/ui/DibodevTogglePillGroup.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import {
  ESTIMATOR_KIND_TO_CONTACT_TYPE,
  ESTIMATOR_OPTIONS,
  ESTIMATOR_PROJECT_KINDS,
  ESTIMATOR_PROJECT_SIZES,
  estimateBudget,
  toContactBudgetRange,
} from '~/core/constants/budgetEstimator'
import { SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/** What every project includes, listed under the estimate (i18n `estimator.included.*`). */
const INCLUDED_KEYS: string[] = ['ownership', 'steps', 'training']

/**
 * Indicative budget estimator: the kind of project, its size and a few options give a price
 * and duration range, then a link opens the contact form prefilled with the matching project type and budget.
 */
const props: DibodevBudgetEstimatorSectionProps = defineProps({
  eyebrow: {
    type: String as PropType<string>,
    default: '',
  },
  title: {
    type: String as PropType<string>,
    default: '',
  },
  intro: {
    type: String as PropType<string>,
    default: '',
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'white',
  },
  trackingLocation: {
    type: String as PropType<string>,
    default: 'business_software',
  },
})

const { t, locale } = useI18n()
const localePath = useLocalePath()
const { track } = useTracking()

/* REFS */
const selectedKind: Ref<DibodevEstimatorProjectKind> = ref<DibodevEstimatorProjectKind>('software')
const selectedSize: Ref<DibodevEstimatorProjectSize> = ref<DibodevEstimatorProjectSize>('medium')
const selectedOptions: Ref<DibodevEstimatorOption[]> = ref<DibodevEstimatorOption[]>([])
const hasTrackedStart: Ref<boolean> = ref<boolean>(false)

/* COMPUTED */
/** Heading texts: a page can replace the default ones (a pricing question on the business software page). */
const headingEyebrow: ComputedRef<string> = computed((): string => props.eyebrow || t('estimator.eyebrow'))
const headingTitle: ComputedRef<string> = computed((): string => props.title || t('estimator.title'))
const headingIntro: ComputedRef<string> = computed((): string => props.intro || t('estimator.intro'))
const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])

const kindOptions: ComputedRef<Option[]> = computed((): Option[] =>
  ESTIMATOR_PROJECT_KINDS.map(
    (kind: DibodevEstimatorProjectKind): Option => ({ label: t(`estimator.kinds.${kind}`), value: kind }),
  ),
)
const sizeOptions: ComputedRef<Option[]> = computed((): Option[] =>
  ESTIMATOR_PROJECT_SIZES.map(
    (size: DibodevEstimatorProjectSize): Option => ({ label: t(`estimator.sizes.${size}.label`), value: size }),
  ),
)
const optionOptions: ComputedRef<Option[]> = computed((): Option[] =>
  ESTIMATOR_OPTIONS.map(
    (option: DibodevEstimatorOption): Option => ({ label: t(`estimator.options.${option}`), value: option }),
  ),
)

const result: ComputedRef<DibodevEstimatorResult> = computed(
  (): DibodevEstimatorResult => estimateBudget(selectedKind.value, selectedSize.value, selectedOptions.value),
)

const priceRangeLabel: ComputedRef<string> = computed((): string =>
  t('estimator.priceRange', { min: formatPrice(result.value.minPrice), max: formatPrice(result.value.maxPrice) }),
)
const durationLabel: ComputedRef<string> = computed((): string =>
  t('estimator.durationRange', { min: result.value.minWeeks, max: result.value.maxWeeks }),
)

/** Contact page prefilled with the matching project type and budget bucket. */
const contactRoute: ComputedRef<string> = computed((): string => {
  const query: URLSearchParams = new URLSearchParams({
    type: ESTIMATOR_KIND_TO_CONTACT_TYPE[selectedKind.value],
    budget: toContactBudgetRange(result.value),
  })
  return `${localePath('/contact')}?${query.toString()}`
})

/* METHODS */
/**
 * Formats a price in euros for the current locale, without decimals ("8 500 €", "€8,500").
 * @param {number} price - Price in euros.
 * @returns {string} The formatted price.
 */
function formatPrice(price: number): string {
  return new Intl.NumberFormat(locale.value as string, {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(price)
}

/**
 * Tracks the first interaction with the estimator, once per page view,
 * to compare how many visitors try it with how many then ask for a quote.
 * @returns {void}
 */
function trackEstimatorStart(): void {
  if (hasTrackedStart.value) return
  hasTrackedStart.value = true
  track(TRACKING_EVENTS.budgetEstimatorStarted, { location: props.trackingLocation })
}

/**
 * Keeps the selected kind when the pill group emits a known kind.
 * @param {PillValue | PillValue[] | null | undefined} value - Emitted value.
 * @returns {void}
 */
function onKindChange(value: PillValue | PillValue[] | null | undefined): void {
  trackEstimatorStart()
  const kind: DibodevEstimatorProjectKind | undefined = ESTIMATOR_PROJECT_KINDS.find(
    (candidate: DibodevEstimatorProjectKind): boolean => candidate === value,
  )
  if (kind) selectedKind.value = kind
}

/**
 * Keeps the selected size when the pill group emits a known size.
 * @param {PillValue | PillValue[] | null | undefined} value - Emitted value.
 * @returns {void}
 */
function onSizeChange(value: PillValue | PillValue[] | null | undefined): void {
  trackEstimatorStart()
  const size: DibodevEstimatorProjectSize | undefined = ESTIMATOR_PROJECT_SIZES.find(
    (candidate: DibodevEstimatorProjectSize): boolean => candidate === value,
  )
  if (size) selectedSize.value = size
}

/**
 * Keeps the known options of the emitted selection.
 * @param {PillValue | PillValue[] | null | undefined} value - Emitted value (an array in multiple mode).
 * @returns {void}
 */
function onOptionsChange(value: PillValue | PillValue[] | null | undefined): void {
  trackEstimatorStart()
  const values: PillValue[] = Array.isArray(value) ? value : []
  selectedOptions.value = ESTIMATOR_OPTIONS.filter((option: DibodevEstimatorOption): boolean => values.includes(option))
}

/**
 * Tracks the estimate before the link opens the prefilled contact form.
 * @returns {void}
 */
function onRequestQuote(): void {
  track(TRACKING_EVENTS.budgetEstimated, {
    kind: selectedKind.value,
    size: selectedSize.value,
    options: [...selectedOptions.value],
    minPrice: result.value.minPrice,
    maxPrice: result.value.maxPrice,
    location: props.trackingLocation,
  })
}
</script>

<style scoped>
.estimator-group {
  border: 0;
  margin: 0;
  padding: 0;
  min-width: 0;
}

.estimator-group__legend {
  margin-bottom: 0.875rem;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-gray-100);
}
</style>
