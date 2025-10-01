<template>
  <DibodevProjectLandingSection
    v-if="currentProject"
    :title="currentProject.name"
    :primaryColor="currentProject.primaryColor"
    :secondaryColor="currentProject.secondaryColor"
    :logoUrl="currentProject.logoUrl"
    :description="currentProject.shortDescription"
    :categories="currentProject.categories"
    :date="currentProject.date"
    :siteUrl="currentProject.siteUrl"
  />
  <DibodevAboutProjectSection v-if="currentProject" :project="currentProject" />
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import type { RouteLocationNormalizedLoadedGeneric, Router } from 'vue-router'
import projectsJson from '~/assets/data/projects.json'
import { StringUtils } from '~/core/utils/StringUtils'
import type { DibodevProject } from '~/core/types/DibodevProject'
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import DibodevProjectLandingSection from '~/components/sections/DibodevProjectLandingSection.vue'
import DibodevAboutProjectSection from '~/components/sections/DibodevAboutProjectSection.vue'

/* HOOKS */
const route: RouteLocationNormalizedLoadedGeneric = useRoute()
const router: Router = useRouter()

/* DATAS */
const projectName: string | null = route.params.projectName as string | null
const projects: DibodevProject[] = projectsJson as DibodevProject[]

/* COMPUTED */
const currentProject: ComputedRef<DibodevProject | undefined> = computed(() => {
  return projects.find((project: DibodevProject) => StringUtils.formatForRoute(project.name) === projectName)
})

// Redirect to home if a project not found
if (!currentProject.value) {
  router.push({ path: '/' })
}
</script>
