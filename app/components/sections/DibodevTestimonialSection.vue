<template>
  <section id="testimonial" class="px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div class="mx-auto grid w-full max-w-7xl gap-12 lg:gap-14">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" />

      <figure
        class="grid gap-8 rounded-lg border border-gray-300 bg-white p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16"
      >
        <div class="grid content-start gap-6">
          <div class="flex flex-wrap items-center gap-4">
            <div v-if="props.rating > 0" class="flex gap-0.5 text-amber-500" role="img" :aria-label="props.ratingLabel">
              <DibodevIcon
                v-for="starNumber in props.rating"
                :key="starNumber"
                name="Star"
                :width="20"
                :height="20"
                aria-hidden="true"
              />
            </div>
            <span
              v-if="props.verifiedLabel"
              class="bg-accent-tint text-primary rounded-md px-2.5 py-1 text-xs font-medium"
            >
              {{ props.verifiedLabel }}
            </span>
          </div>

          <blockquote class="text-xl leading-8 text-gray-100 sm:text-2xl sm:leading-9">
            <p>« {{ props.quote }} »</p>
          </blockquote>
        </div>

        <figcaption
          class="grid content-start gap-5 border-t border-gray-300 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10"
        >
          <div class="flex items-center gap-4">
            <span
              class="bg-accent-tint text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-medium"
              aria-hidden="true"
            >
              {{ authorInitial }}
            </span>
            <div class="grid gap-0.5">
              <span class="text-base font-medium text-gray-100">{{ props.authorName }}</span>
              <span class="text-sm text-gray-200">{{ props.authorRole }}</span>
            </div>
          </div>

          <p class="text-muted text-sm leading-5">{{ props.sourceNote }}</p>
          <DibodevLink :link="props.sourceHref" externalLink class="text-sm">
            <span>{{ props.sourceLinkLabel }}</span>
            <DibodevIcon name="ExternalLink" mode="stroke" :width="16" :height="16" aria-hidden="true" />
          </DibodevLink>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import type { DibodevTestimonialSectionProps } from '~/core/types/DibodevTestimonialSection'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevLink from '~/components/core/DibodevLink.vue'
import { SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'

/**
 * Client review card: stars, verified badge, quote, author and link to the public review.
 */
const props: DibodevTestimonialSectionProps = defineProps({
  eyebrow: {
    type: String as PropType<string>,
    default: '',
  },
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
  verifiedLabel: {
    type: String as PropType<string>,
    default: '',
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'tint',
  },
})

const authorInitial: ComputedRef<string> = computed((): string => props.authorName.charAt(0))
const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
</script>
