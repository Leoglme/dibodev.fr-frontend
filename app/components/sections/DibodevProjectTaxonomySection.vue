<template>
  <section v-if="visibleLinks.length > 0" class="px-6 py-20 sm:px-8 lg:py-28" :class="toneClass" data-aos="fade-up">
    <div class="max-w-site mx-auto grid w-full gap-12 lg:gap-14">
      <DibodevSectionHeading :eyebrow="props.eyebrow" :title="props.title" :intro="props.intro" />

      <ul v-if="props.variant === 'cards'" class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <li v-for="(link, index) in visibleLinks" :key="link.key">
          <NuxtLink
            :to="link.to"
            class="taxonomy-card group flex h-full flex-col gap-5 rounded-xl border border-gray-300 bg-white p-6 sm:p-7"
          >
            <div class="flex items-start justify-between gap-4">
              <span
                class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl p-3"
                :style="{ backgroundColor: getAccentPalette(index).background, color: getAccentPalette(index).color }"
                aria-hidden="true"
              >
                <DibodevServiceIcon :serviceIconName="getCategoryIcon(link.key)" />
              </span>
              <span
                class="rounded-full px-3 py-1 text-sm font-medium"
                :style="{ backgroundColor: getAccentPalette(index).background, color: getAccentPalette(index).color }"
              >
                {{ $t('projects.hub.projectCount', link.count) }}
              </span>
            </div>

            <div class="grid gap-2">
              <span class="group-hover:text-primary text-lg leading-snug font-medium text-gray-100 transition-colors">
                {{ link.label }}
              </span>
              <span v-if="link.description" class="text-[15px] leading-6 text-gray-200">{{ link.description }}</span>
            </div>

            <div class="mt-auto flex items-center justify-between gap-4 border-t border-gray-300 pt-4">
              <ul v-if="link.logos.length > 0" class="flex items-center -space-x-2" :aria-label="link.label">
                <li
                  v-for="logo in link.logos"
                  :key="logo.url"
                  class="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-white ring-1 ring-gray-300"
                  :style="{ backgroundColor: logo.backgroundColor }"
                  :title="logo.name"
                >
                  <img
                    :src="logo.url"
                    :alt="logo.name"
                    class="h-5 w-5 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </li>
              </ul>
              <span class="text-primary inline-flex items-center gap-1.5 text-sm font-medium whitespace-nowrap">
                {{ $t('projects.hub.seeListing') }}
                <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" aria-hidden="true" />
              </span>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <DibodevProjectTaxonomyChips v-else :links="visibleLinks" :hideEmpty="false" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef, PropType } from 'vue'
import type {
  DibodevProjectTaxonomyLink,
  DibodevProjectTaxonomySectionProps,
} from '~/core/types/DibodevProjectTaxonomySection'
import type { DibodevSectionTone } from '~/core/types/DibodevSectionTone'
import type { DibodevServiceIconName } from '~/core/types/DibodevServiceIcon'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevServiceIcon from '~/components/ui/DibodevServiceIcon.vue'
import DibodevProjectTaxonomyChips from '~/components/navigations/DibodevProjectTaxonomyChips.vue'
import { getAccentPalette } from '~/core/constants/accentPalettes'
import { SECTION_TONE_CLASSES } from '~/core/constants/sectionTone'

/** Icon of each project category (falls back to the generic apps icon). */
const CATEGORY_ICONS: Record<string, DibodevServiceIconName> = {
  'site-web': 'website-content',
  'application-mobile': 'mobile',
  saas: 'cloud-computing',
  'application-metier': 'apps',
  logiciel: 'cloud-storage',
  ia: 'ai',
}
const DEFAULT_CATEGORY_ICON: DibodevServiceIconName = 'apps'

/**
 * Internal-linking hub: the category or sector listing pages with their project counts,
 * as illustrated cards (icon, description, project logos) or compact chips.
 */
const props: DibodevProjectTaxonomySectionProps = defineProps({
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
  links: {
    type: Array as PropType<DibodevProjectTaxonomyLink[]>,
    required: true,
  },
  variant: {
    type: String as PropType<'cards' | 'chips'>,
    default: 'cards',
  },
  hideEmpty: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
  tone: {
    type: String as PropType<DibodevSectionTone>,
    default: 'white',
  },
})

const toneClass: ComputedRef<string> = computed((): string => SECTION_TONE_CLASSES[props.tone])

const visibleLinks: ComputedRef<DibodevProjectTaxonomyLink[]> = computed((): DibodevProjectTaxonomyLink[] =>
  props.hideEmpty ? props.links.filter((link: DibodevProjectTaxonomyLink): boolean => link.count > 0) : props.links,
)

/**
 * Icon of a listing card from its category key.
 * @param {string} key - Category key.
 * @returns {DibodevServiceIconName} The icon name.
 */
function getCategoryIcon(key: string): DibodevServiceIconName {
  return CATEGORY_ICONS[key] ?? DEFAULT_CATEGORY_ICON
}
</script>

<style scoped>
.taxonomy-card {
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;
}

.taxonomy-card:hover {
  border-color: rgba(111, 95, 224, 0.45);
  box-shadow: 0 14px 36px rgba(111, 95, 224, 0.1);
  transform: translateY(-2px);
}

@media (prefers-reduced-motion: reduce) {
  .taxonomy-card {
    transition: none;
  }

  .taxonomy-card:hover {
    transform: none;
  }
}
</style>
