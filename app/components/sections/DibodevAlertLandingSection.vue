<template>
  <section class="px-6 pt-[120px] pb-20 sm:px-8 lg:pt-[160px] lg:pb-28" data-aos="fade-up">
    <div class="mx-auto grid w-full max-w-2xl justify-items-center gap-6 text-center">
      <span
        class="bg-surface-tint text-primary flex h-16 w-16 items-center justify-center rounded-full"
        aria-hidden="true"
      >
        <DibodevIcon :name="props.icon" mode="stroke" :width="28" :height="28" />
      </span>
      <h1 class="text-[32px] leading-[1.15] font-medium tracking-[-0.01em] text-gray-100 sm:text-[40px]">
        {{ props.title }}
      </h1>
      <p class="max-w-[600px] text-[17px] leading-7 text-gray-200">{{ props.text }}</p>
      <p v-if="props.detail" class="max-w-[600px] text-[15px] leading-6 text-gray-200">{{ props.detail }}</p>
      <NuxtLink
        :to="props.linkTo"
        class="bg-primary hover:bg-primary-dark inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-[15px] leading-6 font-medium text-white transition-colors"
      >
        {{ props.linkLabel }}
        <DibodevIcon name="ArrowRight" mode="stroke" :width="18" :height="18" aria-hidden="true" />
      </NuxtLink>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DibodevAlertLandingSectionProps } from '~/core/types/DibodevAlertLandingSection'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'

/** The single message of the pages the alert e-mail links land on (confirmed, unsubscribed, invalid link). */
const props: DibodevAlertLandingSectionProps = defineProps({
  icon: {
    type: String as PropType<string>,
    required: true,
  },
  title: {
    type: String as PropType<string>,
    required: true,
  },
  text: {
    type: String as PropType<string>,
    required: true,
  },
  detail: {
    type: String as PropType<string>,
    default: '',
  },
  linkLabel: {
    type: String as PropType<string>,
    required: true,
  },
  linkTo: {
    type: String as PropType<string>,
    required: true,
  },
})
</script>
