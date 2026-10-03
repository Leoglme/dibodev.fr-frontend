<template>
  <div
    class="bg-primary-dark relative grid overflow-hidden text-white"
    :class="isCompact ? 'gap-3 rounded-[14px] p-4' : 'gap-5 rounded-2xl p-5 sm:p-6'"
  >
    <div
      class="pointer-events-none absolute -top-16 -right-12 h-56 w-56 rounded-full bg-white/10 blur-2xl"
      aria-hidden="true"
    />
    <div class="relative grid gap-1">
      <p
        class="font-medium tracking-[0.08em] text-white/85 uppercase"
        :class="isCompact ? 'text-[11px] leading-4' : 'text-xs'"
      >
        {{ props.priceCard.eyebrow }}
      </p>
      <p
        class="leading-tight font-medium tracking-[-0.01em] tabular-nums"
        :class="isCompact ? 'text-[26px] sm:text-[28px] xl:text-[30px]' : 'text-[32px] sm:text-[40px]'"
      >
        {{ props.priceCard.price }}
      </p>
      <p v-if="props.priceCard.priceSuffix" class="text-white/85" :class="isCompact ? 'text-[13px]' : 'text-[15px]'">
        {{ props.priceCard.priceSuffix }}
      </p>
    </div>
    <dl class="relative grid rounded-xl bg-white/10" :class="isCompact ? 'px-3' : 'px-4'">
      <div
        v-for="priceDetail in props.priceCard.details"
        :key="priceDetail.label"
        class="flex items-baseline justify-between border-b border-white/15 last:border-b-0"
        :class="isCompact ? 'gap-3 py-2' : 'gap-4 py-3'"
      >
        <dt class="font-medium" :class="isCompact ? 'text-[13px]' : 'text-[15px]'">{{ priceDetail.label }}</dt>
        <dd
          class="text-right text-white/90 tabular-nums"
          :class="isCompact ? 'min-w-0 text-[13px]' : 'text-[15px] whitespace-nowrap'"
        >
          {{ priceDetail.value }}
        </dd>
      </div>
    </dl>
    <p v-if="!isCompact" class="relative text-sm leading-6 text-white/85">
      {{ props.priceCard.footnote }}
      <a
        v-if="props.priceCard.footnoteLink"
        :href="props.priceCard.footnoteLink.href"
        class="font-medium whitespace-nowrap text-white underline underline-offset-2 hover:no-underline"
      >
        {{ props.priceCard.footnoteLink.label }}
      </a>
    </p>
  </div>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevQuizPriceCard } from '~/core/types/DibodevQuiz'
import type { DibodevQuizPriceCardProps, DibodevQuizPriceCardSize } from '~/core/types/DibodevQuizPriceCard'
import { computed } from 'vue'

/** Violet price card of a test result: price, its details and the footnote with its link. */
const props: DibodevQuizPriceCardProps = defineProps({
  priceCard: {
    type: Object as PropType<DibodevQuizPriceCard>,
    required: true,
  },
  size: {
    type: String as PropType<DibodevQuizPriceCardSize>,
    default: 'regular',
  },
})

const isCompact: ComputedRef<boolean> = computed((): boolean => props.size === 'compact')
</script>
