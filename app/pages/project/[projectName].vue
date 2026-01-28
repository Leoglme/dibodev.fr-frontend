<template>
  <DibodevProjectLandingSection
    v-if="currentProjectComputed"
    :title="currentProjectComputed.name"
    :primaryColor="currentProjectComputed.primaryColor"
    :secondaryColor="currentProjectComputed.secondaryColor"
    :logoUrl="currentProjectComputed.logoUrl"
    :description="currentProjectComputed.shortDescription"
    :categories="currentProjectComputed.categories"
    :date="currentProjectComputed.date"
    :siteUrl="currentProjectComputed.siteUrl"
  />
  <DibodevAboutProjectSection v-if="currentProjectComputed" :project="currentProjectComputed" />
  <DibodevRecommendedProjectSection v-if="currentProjectComputed" :currentProject="currentProjectComputed" />
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import type { RouteLocationNormalizedLoadedGeneric, Router } from 'vue-router'
import { computed, ref } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import projectsJson from '~/assets/data/projects.json'
import { StringUtils } from '~/core/utils/StringUtils'
import type { DibodevProject } from '~/core/types/DibodevProject'
import DibodevProjectLandingSection from '~/components/sections/DibodevProjectLandingSection.vue'
import DibodevAboutProjectSection from '~/components/sections/DibodevAboutProjectSection.vue'
import DibodevRecommendedProjectSection from '~/components/sections/DibodevRecommendedProjectSection.vue'
import type { StoryblokProjectContent } from '~/services/types/storyblokProject'
import type { StoryblokStoryResponse } from '~/services/types/storyblok'
import { StoryblokService } from '~/services/storyblokService'
import { mapStoryblokProjectToDibodevProject } from '~/services/storyblokProjectMapper'

/**
 * Resolve the canonical project route slug from the route parameter.
 */
const route: RouteLocationNormalizedLoadedGeneric = useRoute()
const router: Router = useRouter()

const projectName: string = String(route.params.projectName || '')
const isStoryblokEditor: boolean = typeof route.query._storyblok !== 'undefined'

const projects: DibodevProject[] = projectsJson as DibodevProject[]

/**
 * Current project loaded either from local JSON (legacy) or from Storyblok.
 */
const currentProject: Ref<DibodevProject | null> = ref<DibodevProject | null>(null)

/**
 * Try to find the project in the local JSON first to keep backward compatibility.
 */
const localProject: DibodevProject | undefined = projects.find(
  (project: DibodevProject): boolean => StringUtils.formatForRoute(project.name) === projectName,
)

if (localProject) {
  currentProject.value = localProject
} else if (projectName.trim().length > 0) {
  /**
   * If the project is not found locally, try to load it from Storyblok.
   * Expected Storyblok full slug: "project/<projectName>"
   */
  const storyblokSlug: string = `project/${projectName}`

  try {
    const storyResponse: StoryblokStoryResponse<StoryblokProjectContent> =
      await StoryblokService.getStoryBySlug<StoryblokProjectContent>(
        storyblokSlug,
        isStoryblokEditor ? 'draft' : 'published',
      )

    currentProject.value = mapStoryblokProjectToDibodevProject(storyResponse.story)
  } catch {
    // If the project does not exist in Storyblok either, redirect to home.
    router.push({ path: '/' })
  }
} else {
  router.push({ path: '/' })
}

/**
 * Expose a readonly computed project for the template.
 */
const currentProjectComputed: ComputedRef<DibodevProject | null> = computed(() => currentProject.value)
</script>
