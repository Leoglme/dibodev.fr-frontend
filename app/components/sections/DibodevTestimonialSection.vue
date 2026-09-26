<template>
  <section
    id="testimonial"
    data-aos="fade-up"
    data-aos-duration="600"
    class="relative z-2 flex w-screen max-w-screen items-center justify-center px-6 py-24 sm:px-8 sm:py-32"
  >
    <div class="grid w-full max-w-4xl gap-8">
      <h2 class="text-left text-2xl font-semibold sm:text-[32px]">{{ props.title }}</h2>

      <figure
        class="border-primary/50 from-primary/20 relative grid gap-8 overflow-hidden rounded-3xl border bg-linear-to-br via-gray-800 to-gray-800 px-6 py-10 sm:px-12 sm:py-12"
      >
        <span
          class="text-primary/40 pointer-events-none absolute top-0 right-6 text-9xl leading-none font-semibold select-none sm:right-10 sm:text-[200px]"
          aria-hidden="true"
        >
          “
        </span>

        <div v-if="props.rating > 0" class="flex gap-1 text-amber-300" role="img" :aria-label="props.ratingLabel">
          <DibodevIcon
            v-for="starNumber in props.rating"
            :key="starNumber"
            name="Star"
            :width="20"
            :height="20"
            aria-hidden="true"
          />
        </div>

        <blockquote class="relative text-lg leading-8 font-medium text-gray-100 sm:text-2xl sm:leading-10">
          <p>{{ props.quote }}</p>
        </blockquote>

        <figcaption class="flex flex-wrap items-center justify-between gap-6">
          <div class="flex items-center gap-4">
            <span
              class="bg-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-semibold text-gray-100"
              aria-hidden="true"
            >
              {{ authorInitial }}
            </span>
            <div class="grid gap-0.5">
              <span class="text-base font-medium text-gray-100">{{ props.authorName }}</span>
              <span class="text-sm text-gray-200">{{ props.authorRole }}</span>
            </div>
          </div>

          <div class="grid gap-1 sm:justify-items-end">
            <span class="text-xs text-gray-200">{{ props.sourceNote }}</span>
            <DibodevLink :link="props.sourceHref" externalLink>
              <span>{{ props.sourceLinkLabel }}</span>
              <DibodevIcon name="ExternalLink" mode="stroke" :width="16" :height="16" aria-hidden="true" />
            </DibodevLink>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevTestimonialSectionProps } from '~/core/types/DibodevTestimonialSection'
import { computed } from 'vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'

const props: DibodevTestimonialSectionProps = defineProps({
  title: {
    type: String as PropType<string>,
    required: true,
  },
  quote: {
    type: String as PropType<string>,
    required: true,
  },
  authorName: {
    type: String as PropType<string>,
    required: true,
  },
  authorRole: {
    type: String as PropType<string>,
    required: true,
  },
  sourceNote: {
    type: String as PropType<string>,
    required: true,
  },
  sourceLinkLabel: {
    type: String as PropType<string>,
    required: true,
  },
  sourceHref: {
    type: String as PropType<string>,
    required: true,
  },
  rating: {
    type: Number as PropType<number>,
    default: 0,
  },
  ratingLabel: {
    type: String as PropType<string>,
    default: '',
  },
})

const authorInitial: ComputedRef<string> = computed((): string => props.authorName.charAt(0))
</script>
