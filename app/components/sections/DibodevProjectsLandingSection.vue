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
    <template v-if="showcaseProjects.length > 0" #aside>
      <DibodevProjectCardDeck
        :projects="showcaseProjects"
        :accessibleName="$t('projects.deck.label')"
        trackingSource="projects_hero"
      />
    </template>
  </DibodevLandingSection>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import DibodevProjectCardDeck from '~/components/data-displays/DibodevProjectCardDeck.vue'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { useHeroStats } from '~/composables/useHeroStats'
import { useProjectsWithTranslations } from '~/composables/useProjectsWithTranslations'
import { ProjectOrderUtils } from '~/core/utils/ProjectOrderUtils'

const { t } = useI18n()

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.projects'), to: null },
])
const heroStats: ComputedRef<DibodevStatItemProps[]> = await useHeroStats()
const { data: storyblokProjectsData } = await useProjectsWithTranslations()

/** Projects chosen for the home page first, then the most recent ones (the list is already sorted by date). */
const showcaseProjects: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] =>
  ProjectOrderUtils.homePageSelectionFirst(storyblokProjectsData.value ?? []),
)
</script>
