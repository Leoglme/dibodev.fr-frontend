<template>
  <DibodevLandingSection
    :breadcrumbs="breadcrumbs"
    :titlePart1="$t('projects.landing.titlePart1')"
    :titleHighlight1="$t('projects.landing.titleHighlight1')"
    :titlePart2="$t('projects.landing.titlePart2')"
    :description="$t('projects.landing.description')"
    :ctaText="$t('projects.landing.cta')"
    ctaTarget="#projects"
    :stats="heroStats"
    :compactTitle="true"
  >
    <template v-if="showcaseProjects.length >= DECK_MINIMUM_PROJECTS" #aside>
      <DibodevProjectCardDeck
        :projects="showcaseProjects"
        :accessibleName="$t('projects.deck.label')"
        trackingSource="projects_hero"
        @navigate="onDeckNavigation"
      />
    </template>
  </DibodevLandingSection>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevPhotoSlideshowNavigation } from '~/core/types/DibodevPhotoSlideshow'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import DibodevProjectCardDeck from '~/components/data-displays/DibodevProjectCardDeck.vue'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { useHeroStats } from '~/composables/useHeroStats'
import { useProjectsWithTranslations } from '~/composables/useProjectsWithTranslations'
import { useTracking } from '~/composables/useTracking'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { ProjectOrderUtils } from '~/core/utils/ProjectOrderUtils'

/** The fan needs a front card and one card tilted on each side to look intentional. */
const DECK_MINIMUM_PROJECTS: number = 3

const { t } = useI18n()
const { track } = useTracking()

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.projects'), to: null },
])
const heroStats: ComputedRef<DibodevStatItemProps[]> = await useHeroStats()
const { data: storyblokProjectsData } = await useProjectsWithTranslations()

/** Projects chosen for the home page first, then the most recent ones (the list is already sorted by date). */
const showcaseProjects: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] =>
  ProjectOrderUtils.homePageSelectionFirst(storyblokProjectsData.value ?? []),
)

/**
 * Tracks a card change made by the visitor in the header deck (auto-play is not reported).
 * @param {DibodevPhotoSlideshowNavigation} navigation - The project now in front and how the visitor brought it.
 * @returns {void}
 */
function onDeckNavigation(navigation: DibodevPhotoSlideshowNavigation): void {
  track(TRACKING_EVENTS.photoSlideshowNavigated, {
    slide: navigation.slideId,
    method: navigation.method,
    location: 'projects_hero',
  })
}
</script>
