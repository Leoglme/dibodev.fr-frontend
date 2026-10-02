<template>
  <article
    class="grid gap-5 rounded-lg border bg-white p-5 sm:p-7"
    :class="props.step.isCurrent ? 'border-primary' : 'border-gray-300'"
  >
    <header class="flex items-start gap-4">
      <span
        v-if="props.step.logoSrc"
        class="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl"
        :class="props.step.hasFullTileLogo ? '' : 'border border-gray-300 bg-white p-2'"
        aria-hidden="true"
      >
        <img :src="props.step.logoSrc" alt="" class="h-full w-full object-contain" loading="lazy" decoding="async" />
      </span>
      <span
        v-else
        class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-sm font-semibold"
        :class="props.step.isCurrent ? 'bg-primary text-white' : 'bg-accent-tint text-primary'"
        aria-hidden="true"
      >
        {{ props.step.monogram }}
      </span>
      <div class="grid gap-1">
        <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
          <span class="text-muted text-sm font-medium">{{ props.step.period }}</span>
          <span
            v-if="props.step.isCurrent && props.currentStepLabel"
            class="bg-accent-tint text-primary rounded-full px-2.5 py-0.5 text-xs font-medium"
          >
            {{ props.currentStepLabel }}
          </span>
        </div>
        <h4 class="text-lg font-medium text-gray-100">{{ props.step.title }}</h4>
        <p class="text-sm leading-6 text-gray-200">{{ props.step.organization }} · {{ props.step.context }}</p>
      </div>
    </header>

    <p class="text-[15px] leading-6 text-gray-200 sm:text-base sm:leading-7">{{ props.step.description }}</p>

    <ul v-if="props.step.highlights.length > 0" class="grid gap-3">
      <li
        v-for="highlight in props.step.highlights"
        :key="highlight"
        class="flex gap-3 text-[15px] leading-6 text-gray-100"
      >
        <DibodevIcon
          name="Check"
          mode="stroke"
          :width="18"
          :height="18"
          class="text-primary mt-0.5 shrink-0"
          aria-hidden="true"
        />
        <span>{{ highlight }}</span>
      </li>
    </ul>

    <ul v-if="props.step.technologies.length > 0" class="flex flex-wrap gap-2">
      <li v-for="technology in props.step.technologies" :key="technology">
        <DibodevBadge backgroundColor="#f0f0ee" textColor="#141414" size="sm">{{ technology }}</DibodevBadge>
      </li>
    </ul>
  </article>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DibodevCareerStep, DibodevCareerStepCardProps } from '~/core/types/DibodevCareerStepCard'
import DibodevBadge from '~/components/ui/DibodevBadge.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'

/**
 * Career or education step of the about page timeline.
 */
const props: DibodevCareerStepCardProps = defineProps({
  step: {
    type: Object as PropType<DibodevCareerStep>,
    required: true,
  },
  currentStepLabel: {
    type: String as PropType<string>,
    default: '',
  },
})
</script>
