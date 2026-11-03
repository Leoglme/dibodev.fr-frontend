<template>
  <section :id="props.anchorId" class="px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.intro" />

      <ul class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <li
          v-for="(template, index) in props.templates"
          :key="template.key"
          class="free-template-card flex h-full flex-col gap-5 rounded-xl border border-gray-300 p-6 sm:p-7"
          :class="cardClass"
        >
          <div class="flex items-start gap-4">
            <span
              class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
              :style="{ backgroundColor: getAccentPalette(index).background, color: getAccentPalette(index).color }"
              aria-hidden="true"
            >
              <DibodevIcon :name="template.icon" mode="stroke" :width="24" :height="24" />
            </span>
            <div class="grid gap-1">
              <p class="text-muted text-xs font-medium tracking-[0.08em] uppercase">{{ template.tradeLabel }}</p>
              <h3 class="text-lg leading-snug font-medium text-gray-100">
                <NuxtLink
                  :to="localePath({ name: template.templateRouteName })"
                  class="hover:text-primary transition-colors"
                  @click="onTemplateClick(template)"
                >
                  {{ template.title }}
                </NuxtLink>
              </h3>
            </div>
          </div>

          <p class="text-[15px] leading-6 text-gray-200">{{ template.description }}</p>

          <div class="mt-auto grid gap-3 border-t border-gray-300 pt-4">
            <p class="text-muted text-sm">{{ template.formats }}</p>
            <NuxtLink
              :to="localePath({ name: template.templateRouteName })"
              class="text-primary hover:text-primary-dark inline-flex w-fit items-center gap-1.5 text-[15px] font-medium transition-colors"
              @click="onTemplateClick(template)"
            >
              {{ template.templateLinkLabel }}
              <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" aria-hidden="true" />
            </NuxtLink>
            <NuxtLink
              :to="localePath({ name: template.toolRouteName })"
              class="tap-area inline-block w-fit text-sm text-gray-200 underline decoration-gray-400 underline-offset-2 transition-colors hover:text-gray-100 hover:decoration-gray-100"
              @click="
                track(TRACKING_EVENTS.toolTeaserClicked, { tool: template.toolId, location: props.trackingLocation })
              "
            >
              {{ template.testLinkLabel }}
            </NuxtLink>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type {
  DibodevFreeTemplateCatalogCard,
  DibodevFreeTemplateCatalogSectionProps,
} from '~/core/types/DibodevFreeTemplateCatalogSection'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import { computed } from 'vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useTracking } from '~/composables/useTracking'
import { getAccentPalette } from '~/core/constants/accentPalettes'
import { SECTION_TONE_CARD_CLASSES, SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/**
 * Grid of the free templates of the hub: one card per template, with its trade, its formats,
 * a link to the template page and a link to the trade test.
 */
const props: DibodevFreeTemplateCatalogSectionProps = defineProps({
  anchorId: {
    type: String as PropType<string>,
    default: 'templates',
  },
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
  templates: {
    type: Array as PropType<DibodevFreeTemplateCatalogCard[]>,
    required: true,
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'tint',
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const localePath = useLocalePath()
const { track } = useTracking()

const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])
const cardClass: ComputedRef<string> = computed((): string => SECTION_TONE_CARD_CLASSES[props.tone])

/**
 * Sends the click towards a template page, identified by its route name.
 * @param {DibodevFreeTemplateCatalogCard} template - The card clicked.
 * @returns {void}
 */
function onTemplateClick(template: DibodevFreeTemplateCatalogCard): void {
  track(TRACKING_EVENTS.toolTeaserClicked, { tool: template.templateRouteName, location: props.trackingLocation })
}
</script>

<style scoped>
.free-template-card {
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.free-template-card:hover,
.free-template-card:focus-within {
  border-color: rgba(111, 95, 224, 0.45);
  box-shadow: 0 14px 36px rgba(111, 95, 224, 0.1);
}
</style>
