<template>
  <DibodevProjectLandingSection
    v-if="currentProjectComputed"
    :title="currentProjectComputed.name"
    :primaryColor="currentProjectComputed.primaryColor"
    :secondaryColor="currentProjectComputed.secondaryColor"
    :logoUrl="currentProjectComputed.logoUrl"
    :description="currentProjectComputed.shortDescription"
    :categories="currentProjectComputed.categories"
    :sectors="currentProjectComputed.sectors"
    :date="projectDisplayDate"
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
  <DibodevContactCtaSection
    :title="$t('projects.cta.text')"
    :description="$t('projects.cta.description')"
    :ctaText="$t('projects.cta.button')"
    class="pb-0!"
  />
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
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevRecommendedProjectSection from '~/components/sections/DibodevRecommendedProjectSection.vue'
import type { StoryblokProjectContent } from '~/services/types/storyblokProject'
import type { StoryblokStoryResponse } from '~/services/types/storyblok'
import { StoryblokService } from '~/services/storyblokService'
import { buildRelsSlugMap, mapStoryblokProjectToDibodevProject } from '~/services/storyblokProjectMapper'
import { buildProjectSchemaJson } from '~/config/projectSchema'
import { formatProjectDate } from '~/core/utils/formatProjectDate'

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
function hasUuid(arr: string[] | undefined): boolean {
  return Array.isArray(arr) && arr.some((s) => typeof s === 'string' && UUID_REGEX.test(s.trim()))
}

const route: RouteLocationNormalizedLoadedGeneric = useRoute()
const router: Router = useRouter()
const { locale } = useI18n()
const storyblokLanguage: ComputedRef<string | undefined> = useStoryblokProjectLanguage()

const projectName: string = String(route.params.projectName || '').trim()
const isStoryblokEditor: boolean = typeof route.query._storyblok !== 'undefined'

/**
 * Project: Storyblok always FR. EN/ES from i18n JSON (dashboard translations) overlaid.
 */
const currentProject: Ref<DibodevProject | null> = ref<DibodevProject | null>(null)

if (projectName.length === 0) {
  router.push({ path: '/' })
} else {
  const storyblokSlug: string = `project/${projectName}`
  const fullSlug: string = storyblokSlug

  try {
    const storyResponse: StoryblokStoryResponse<StoryblokProjectContent> =
      await StoryblokService.getStoryBySlug<StoryblokProjectContent>(
        storyblokSlug,
        isStoryblokEditor ? 'draft' : 'published',
        storyblokLanguage.value,
        { resolve_relations: 'project.sectors,project.categories' },
      )

    const relsSlugMap: Record<string, string> = buildRelsSlugMap(storyResponse.rels)
    let project: DibodevProject = mapStoryblokProjectToDibodevProject(storyResponse.story, undefined, relsSlugMap)

    const currentLocale: string = locale.value as string
    if (currentLocale === 'en' || currentLocale === 'es') {
      const translations: Record<
        string,
        {
          name: string
          shortDescription: string
          longDescription: string
          metaTitle: string
          metaDescription: string
          categories: string[]
          sectors?: string[]
          stack: string[]
          tags: string[]
        }
      > = await $fetch<
        Record<
          string,
          {
            name: string
            shortDescription: string
            longDescription: string
            metaTitle: string
            metaDescription: string
            categories: string[]
            sectors?: string[]
            stack: string[]
            tags: string[]
          }
        >
      >(`/api/translations/projects/${currentLocale}`).catch(() => ({}))
      const t = translations[fullSlug]
      if (t) {
        const useTranslationCategories = !hasUuid(t.categories)
        const useTranslationSectors = t.sectors != null && !hasUuid(t.sectors)
        project = {
          ...project,
          name: t.name,
          shortDescription: t.shortDescription,
          longDescription: t.longDescription,
          metaTitle: t.metaTitle,
          metaDescription: t.metaDescription,
          categories: useTranslationCategories ? (t.categories as DibodevProject['categories']) : project.categories,
          sectors: useTranslationSectors ? (t.sectors as DibodevProject['sectors']) : project.sectors,
          stack: t.stack,
          tags: t.tags,
        }
      }
    }

    currentProject.value = project
  } catch {
    router.push({ path: '/' })
  }
}

const currentProjectComputed: ComputedRef<DibodevProject | null> = computed(() => currentProject.value)

const projectDisplayDate: ComputedRef<string> = computed((): string => {
  const p: DibodevProject | null = currentProject.value
  const loc: string = locale.value as string
  if (!p) return ''
  return formatProjectDate(p.date, loc)
})

useHead((): Record<string, unknown> => {
  const p: DibodevProject | null = currentProject.value
  if (!p) return {}
  const title: string = p.metaTitle || p.name
  const description: string = p.metaDescription || p.shortDescription
  const schemaJson: string = buildProjectSchemaJson(p, locale.value as string)
  return {
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
    ],
    script: [{ type: 'application/ld+json', innerHTML: schemaJson }],
  }
})
</script>
