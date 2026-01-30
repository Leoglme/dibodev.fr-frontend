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
  <DibodevProjectGallerySection
    v-if="currentProjectComputed"
    :projectName="currentProjectComputed.name"
    :media1="currentProjectComputed.media1"
    :media2="currentProjectComputed.media2"
    :primaryColor="currentProjectComputed.primaryColor"
  />
  <DibodevAboutProjectSection v-if="currentProjectComputed" :project="currentProjectComputed" />
  <DibodevRecommendedProjectSection v-if="currentProjectComputed" :currentProject="currentProjectComputed" />
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import type { RouteLocationNormalizedLoadedGeneric, Router } from 'vue-router'
import { computed, ref } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import type { DibodevProject } from '~/core/types/DibodevProject'
import DibodevProjectLandingSection from '~/components/sections/DibodevProjectLandingSection.vue'
import DibodevProjectGallerySection from '~/components/sections/DibodevProjectGallerySection.vue'
import DibodevAboutProjectSection from '~/components/sections/DibodevAboutProjectSection.vue'
import DibodevRecommendedProjectSection from '~/components/sections/DibodevRecommendedProjectSection.vue'
import type { StoryblokProjectContent } from '~/services/types/storyblokProject'
import type { StoryblokStoryResponse } from '~/services/types/storyblok'
import { StoryblokService } from '~/services/storyblokService'
import { mapStoryblokProjectToDibodevProject } from '~/services/storyblokProjectMapper'

const route: RouteLocationNormalizedLoadedGeneric = useRoute()
const router: Router = useRouter()

const projectName: string = String(route.params.projectName || '').trim()
const isStoryblokEditor: boolean = typeof route.query._storyblok !== 'undefined'

/**
 * Current project loaded from Storyblok (single source of truth).
 */
const currentProject: Ref<DibodevProject | null> = ref<DibodevProject | null>(null)

if (projectName.length === 0) {
  router.push({ path: '/' })
} else {
  const storyblokSlug: string = `project/${projectName}`

  try {
    const storyResponse: StoryblokStoryResponse<StoryblokProjectContent> =
      await StoryblokService.getStoryBySlug<StoryblokProjectContent>(
        storyblokSlug,
        isStoryblokEditor ? 'draft' : 'published',
      )

    currentProject.value = mapStoryblokProjectToDibodevProject(storyResponse.story)
  } catch {
    router.push({ path: '/' })
  }
}

const currentProjectComputed: ComputedRef<DibodevProject | null> = computed(() => currentProject.value)
</script>
