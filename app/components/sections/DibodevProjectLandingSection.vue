<template>
  <section id="project-landing" class="relative w-full px-6 pt-[120px] pb-16 sm:px-8 lg:pt-[160px] lg:pb-24">
    <div class="max-w-site mx-auto grid w-full gap-8">
      <div class="mx-auto grid max-w-3xl justify-items-center gap-6 text-center" data-aos="fade-up">
        <DibodevBreadcrumb v-if="props.breadcrumbs.length > 0" :items="props.breadcrumbs" />
        <div class="flex flex-col items-center gap-5">
          <div
            class="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-gray-300 p-4"
            :style="{ backgroundColor: props.secondaryColor }"
          >
            <img
              :src="props.logoUrl"
              :alt="props.title + ' logo'"
              class="h-16 w-16 object-contain"
              width="64"
              height="64"
            />
          </div>

          <h1
            class="text-[28px] leading-[1.2] font-medium tracking-[-0.01em] text-gray-100 sm:text-[34px] lg:text-[38px]"
          >
            {{ props.title }}
          </h1>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
          <p class="text-muted text-sm">
            {{ props.date }}
          </p>

          <div class="flex flex-wrap items-center justify-center gap-2">
            <NuxtLink
              v-for="category in props.categories"
              :key="'cat-' + category"
              :to="getCategoryHref(category)"
              class="inline-flex no-underline"
            >
              <DibodevCategoryBadge :category="category" />
            </NuxtLink>

            <NuxtLink
              v-for="sector in props.sectors"
              :key="'sec-' + sector"
              :to="getSectorHref(sector)"
              class="inline-flex no-underline"
            >
              <DibodevBadge backgroundColor="#f0f0ee" textColor="#141414" size="md">
                {{ $t('projects.sectors.' + sector) }}
              </DibodevBadge>
            </NuxtLink>
          </div>
        </div>

        <p class="mx-auto max-w-[640px] text-[17px] leading-7 text-gray-200">
          {{ props.description }}
        </p>

        <div class="flex flex-wrap items-center justify-center gap-3">
          <DibodevButton
            v-if="props.siteUrl"
            :to="props.siteUrl"
            class="w-full sm:w-auto"
            @click="
              track(TRACKING_EVENTS.projectSiteVisited, {
                project: props.title,
                siteUrl: props.siteUrl,
                location: 'project_hero',
              })
            "
          >
            {{ $t('project.landing.viewSite') }}
            <DibodevIcon name="ExternalLink" mode="stroke" :width="18" :height="18" class="ml-2" aria-hidden="true" />
          </DibodevButton>
          <DibodevButton :outlined="true" class="w-full sm:w-auto" @click="scrollToTargetSection">
            {{ $t('project.landing.discover') }}
          </DibodevButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevProjectLandingSectionProps } from '~/core/types/DibodevProjectLandingSection'
import DibodevBreadcrumb from '~/components/navigations/DibodevBreadcrumb.vue'
import DibodevButton from '~/components/core/DibodevButton.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import DibodevBadge from '~/components/ui/DibodevBadge.vue'
import DibodevCategoryBadge from '~/components/ui/DibodevCategoryBadge.vue'
import type { CategoryKey, SectorKey } from '~/core/constants/projectEnums'
import { categoryToSlug } from '~/core/constants/categorySlugs'
import { sectorToSlug } from '~/core/constants/sectorSlugs'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/** Section scrolled to by the "discover" button, and the room kept above it for the fixed navbar. */
const DISCOVER_TARGET_SELECTOR: string = '#project-gallery'
const SCROLL_TARGET_OFFSET: number = 96

/* PROPS */
/**
 * Project page header: breadcrumb, logo tile, title, date, categories and sectors, description and buttons.
 */
const props: DibodevProjectLandingSectionProps = defineProps({
  breadcrumbs: {
    type: Array as PropType<DibodevBreadcrumbItem[]>,
    default: (): DibodevBreadcrumbItem[] => [],
  },
  title: {
    type: String as PropType<string>,
    required: true,
  },
  primaryColor: {
    type: String as PropType<string>,
    required: true,
  },
  secondaryColor: {
    type: String as PropType<string>,
    default: '#f6f6f3',
  },
  logoUrl: {
    type: String as PropType<string>,
    required: true,
  },
  description: {
    type: String as PropType<string>,
    required: true,
  },
  categories: {
    type: Array as PropType<CategoryKey[]>,
    required: true,
  },
  sectors: {
    type: Array as PropType<SectorKey[]>,
    default: (): SectorKey[] => [],
  },
  date: {
    type: String as PropType<string>,
    required: true,
  },
  siteUrl: {
    type: String as PropType<string | null>,
    default: null,
  },
})

const { locale } = useI18n()
const localePath = useLocalePath()
const { track } = useTracking()

/**
 * Current locale narrowed to the supported codes (French by default).
 * @returns {'fr' | 'en' | 'es'} The locale code.
 */
function getCurrentLocaleCode(): 'fr' | 'en' | 'es' {
  if (locale.value === 'en' || locale.value === 'es' || locale.value === 'fr') return locale.value
  return 'fr'
}

/**
 * Localized route of a sector listing page.
 * @param {SectorKey} sector - The sector key.
 * @returns {string} The route.
 */
function getSectorHref(sector: SectorKey): string {
  const loc: 'fr' | 'en' | 'es' = getCurrentLocaleCode()
  return localePath({ name: 'projects-sector-slug', params: { slug: sectorToSlug(loc, sector) } })
}

/**
 * Localized route of a category listing page.
 * @param {CategoryKey} category - The category key.
 * @returns {string} The route.
 */
function getCategoryHref(category: CategoryKey): string {
  const loc: 'fr' | 'en' | 'es' = getCurrentLocaleCode()
  return localePath({ name: 'projects-category-slug', params: { slug: categoryToSlug(loc, category) } })
}

/**
 * Smoothly scroll to the project gallery.
 * @returns {void}
 */
function scrollToTargetSection(): void {
  const targetSection: HTMLElement | null = document.querySelector(DISCOVER_TARGET_SELECTOR)
  if (targetSection) {
    const top: number = targetSection.getBoundingClientRect().top + window.scrollY - SCROLL_TARGET_OFFSET
    window.scrollTo({ top, behavior: 'smooth' })
  } else {
    console.warn(`Target section ${DISCOVER_TARGET_SELECTOR} not found.`)
  }
}
</script>
