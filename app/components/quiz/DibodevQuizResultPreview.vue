<template>
  <figure class="mx-auto grid w-full max-w-md gap-4 sm:max-w-lg lg:max-w-[34rem]">
    <div
      class="bg-accent-tint relative rounded-3xl rounded-tl-[5.25rem] px-4 pt-7 pb-6 sm:px-6 sm:pt-9 sm:pb-7 xl:rounded-4xl xl:rounded-tl-[7.5rem] xl:px-7 xl:pt-12 xl:pb-9"
    >
      <div
        class="relative ml-auto w-[82%] rotate-3 rounded-[14px] border border-gray-300 bg-white p-4 shadow-[0_18px_36px_-18px_rgba(20,20,20,0.3)] sm:w-[66%] lg:w-[76%] xl:w-[66%]"
        aria-hidden="true"
      >
        <p class="text-muted mb-2 text-right text-[11px] leading-4 tabular-nums">
          {{ t('quizTunnel.questionCount', { current: 1, total: props.example.questionCount }) }}
        </p>
        <DibodevRoadProgress
          :completedSteps="0"
          :totalSteps="props.example.questionCount"
          :travellerIcon="props.example.progressTravellerIcon"
          :label="t('quizTunnel.progressLabel')"
        />
        <p class="mt-3 mb-2.5 text-sm leading-[19px] font-medium text-gray-100 xl:text-[15px] xl:leading-5">
          {{ props.example.firstQuestion.title }}
        </p>
        <div class="grid grid-cols-2 gap-2">
          <span
            v-for="option in props.example.firstQuestion.options"
            :key="option.id"
            class="grid justify-items-center rounded-[10px] border px-1.5 py-2 text-center"
            :class="
              option.id === props.example.firstAnswerId
                ? 'border-primary bg-surface-tint shadow-[inset_0_0_0_1px_var(--color-primary)]'
                : 'border-gray-400 bg-white'
            "
          >
            <span class="text-sm leading-5 font-medium text-gray-100 tabular-nums">{{ option.label }}</span>
            <span class="text-muted text-[11px] leading-[14px]">{{ option.unit }}</span>
          </span>
        </div>
      </div>

      <div
        class="relative -mt-14 w-[94%] rounded-[18px] border border-gray-300 bg-white p-4 shadow-[0_32px_64px_-24px_rgba(20,20,20,0.38)] sm:-mt-16 sm:w-[84%] sm:p-5 lg:w-[96%] xl:-mt-[72px] xl:w-[84%]"
      >
        <p class="text-primary text-[11px] leading-4 font-medium tracking-[0.08em] uppercase">
          {{ t('quizTunnel.resultEyebrow') }}
        </p>
        <p class="mt-1 mb-3.5 text-[19px] leading-[25px] font-medium text-gray-100 xl:text-[21px] xl:leading-7">
          <DibodevHyphenSafeText :text="props.example.result.title" />
        </p>
        <DibodevQuizPriceCard :priceCard="previewPriceCard" size="compact" />
      </div>
    </div>
    <figcaption class="text-muted text-[15px] leading-[22px]">{{ props.caption }}</figcaption>
  </figure>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevQuizResult } from '~/core/types/DibodevQuiz'
import type { DibodevQuizResultExample } from '~/core/types/DibodevQuizResultExample'
import type { DibodevQuizResultPreviewProps } from '~/core/types/DibodevQuizResultPreview'
import { computed } from 'vue'
import DibodevRoadProgress from '~/components/data-displays/DibodevRoadProgress.vue'
import DibodevQuizPriceCard from '~/components/quiz/DibodevQuizPriceCard.vue'
import DibodevHyphenSafeText from '~/components/ui/DibodevHyphenSafeText.vue'

/** Price details kept in the preview, so the card stays shorter than the real result. */
const PREVIEW_PRICE_DETAIL_COUNT: number = 3

/** A trade test at a glance: its first question answered, tilted behind the real result it leads to, on a lavender panel. */
const props: DibodevQuizResultPreviewProps = defineProps({
  example: {
    type: Object as PropType<DibodevQuizResultExample>,
    required: true,
  },
  caption: {
    type: String as PropType<string>,
    default: '',
  },
})

const { t } = useI18n()

const previewPriceCard: ComputedRef<DibodevQuizResult['priceCard']> = computed((): DibodevQuizResult['priceCard'] => ({
  ...props.example.result.priceCard,
  details: props.example.result.priceCard.details.slice(0, PREVIEW_PRICE_DETAIL_COUNT),
}))
</script>
