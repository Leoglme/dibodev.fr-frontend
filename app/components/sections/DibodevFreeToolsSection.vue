<template>
  <section id="free-tools" class="bg-surface-tint scroll-mt-24 px-6 py-20 sm:px-8 lg:py-28" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.intro" />

      <ul class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <li v-for="(tool, index) in props.tools" :key="tool.key">
          <NuxtLink
            :to="tool.to"
            class="free-tool-card group flex h-full flex-col gap-5 rounded-xl border border-gray-300 bg-white p-6 sm:p-7"
            @click="onToolClick(tool)"
          >
            <span
              class="flex h-14 w-14 items-center justify-center rounded-2xl"
              :style="{ backgroundColor: getAccentPalette(index).background, color: getAccentPalette(index).color }"
              aria-hidden="true"
            >
              <DibodevIcon :name="tool.icon" mode="stroke" :width="26" :height="26" />
            </span>

            <span class="grid gap-2.5">
              <h3 class="group-hover:text-primary text-lg leading-snug font-medium text-gray-100 transition-colors">
                {{ tool.title }}
              </h3>
              <span class="text-[15px] leading-6 text-gray-200">{{ tool.description }}</span>
            </span>

            <span class="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-gray-300 pt-4">
              <span class="text-muted text-sm">{{ tool.meta }}</span>
              <span class="text-primary inline-flex items-center gap-1.5 text-[15px] font-medium">
                {{ tool.linkLabel }}
                <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" aria-hidden="true" />
              </span>
            </span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { DibodevFreeToolCard, DibodevFreeToolsSectionProps } from '~/core/types/DibodevFreeToolsSection'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { getAccentPalette } from '~/core/constants/accentPalettes'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/**
 * Grid of the free tools, each card being one link: trade tests, budget estimator and a contact card.
 */
const props: DibodevFreeToolsSectionProps = defineProps({
  eyebrow: {
    type: String as PropType<string>,
    default: '',
  },
  title: {
    type: String as PropType<string>,
    required: true,
  },
  intro: {
    type: String as PropType<string>,
    default: '',
  },
  tools: {
    type: Array as PropType<DibodevFreeToolCard[]>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const { track } = useTracking()

/**
 * Tracks the click on a card: a tool opening, or the contact CTA for the card without a tool.
 * @param {DibodevFreeToolCard} tool - The clicked card.
 * @returns {void}
 */
function onToolClick(tool: DibodevFreeToolCard): void {
  if (tool.toolId) {
    track(TRACKING_EVENTS.toolTeaserClicked, { tool: tool.toolId, location: props.trackingLocation })
  } else {
    track(TRACKING_EVENTS.ctaProjectDiscussion, { location: props.trackingLocation })
  }
}
</script>

<style scoped>
.free-tool-card {
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.free-tool-card:hover,
.free-tool-card:focus-visible {
  border-color: rgba(111, 95, 224, 0.45);
  box-shadow: 0 14px 36px rgba(111, 95, 224, 0.1);
  transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  .free-tool-card {
    transition: none;
  }

  .free-tool-card:hover,
  .free-tool-card:focus-visible {
    transform: none;
  }
}
</style>
