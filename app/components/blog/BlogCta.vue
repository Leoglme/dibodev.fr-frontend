<template>
  <section
    data-aos="fade-up"
    data-aos-duration="600"
    class="relative z-2 flex w-full max-w-screen items-center justify-center px-6 py-16 sm:px-8 sm:py-24"
  >
    <div
      class="border-primary-light grid w-full max-w-2xl gap-6 rounded-2xl border-2 bg-gray-400 px-6 py-6 sm:gap-8 sm:px-8 sm:py-6"
    >
      <div class="grid gap-3 sm:gap-4">
        <h2 class="text-2xl font-medium text-gray-100 sm:text-3xl">
          {{ displayTitle }}
        </h2>
        <p class="text-sm leading-7 font-normal text-gray-200">
          {{ displayDescription }}
        </p>
      </div>
      <DibodevButton icon="Mail" iconPosition="right" :to="localePath('/contact')" size="lg" class="w-full">
        {{ displayCtaText }}
      </DibodevButton>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import DibodevButton from '~/components/core/DibodevButton.vue'

const props = withDefaults(
  defineProps<{
    title?: string
    description?: string
    ctaText?: string
  }>(),
  {
    title: '',
    description: '',
    ctaText: '',
  },
)

const { t } = useI18n()
const localePath = useLocalePath()

const displayTitle: ComputedRef<string> = computed((): string =>
  props.title?.trim() ? props.title : t('blog.cta.title'),
)
const displayDescription: ComputedRef<string> = computed((): string =>
  props.description?.trim() ? props.description : t('blog.cta.description'),
)
const displayCtaText: ComputedRef<string> = computed((): string =>
  props.ctaText?.trim() ? props.ctaText : t('blog.cta.ctaText'),
)
</script>
