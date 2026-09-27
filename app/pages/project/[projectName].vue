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
import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { DibodevProject } from '~/core/types/DibodevProject'
import DibodevProjectLandingSection from '~/components/sections/DibodevProjectLandingSection.vue'
import DibodevProjectGallerySection from '~/components/sections/DibodevProjectGallerySection.vue'
import DibodevAboutProjectSection from '~/components/sections/DibodevAboutProjectSection.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevRecommendedProjectSection from '~/components/sections/DibodevRecommendedProjectSection.vue'
import type { StoryblokVersion } from '~/services/types/storyblok'
import { StoryblokProjectService } from '~/services/storyblokProjectService'
import { buildProjectSchemaJson } from '~/config/projectSchema'
import { buildShareImageMeta, getDefaultShareImageUrl } from '~/config/shareImage'
import { StoryblokImageUtils } from '~/core/utils/StoryblokImageUtils'
import { formatProjectDate } from '~/core/utils/formatProjectDate'

const route: RouteLocationNormalizedLoadedGeneric = useRoute()
const router: Router = useRouter()
const { locale } = useI18n()
const storyblokLanguage: ComputedRef<string | undefined> = useStoryblokProjectLanguage()

const projectName: string = String(route.params.projectName || '').trim()
const isStoryblokEditor: boolean = typeof route.query._storyblok !== 'undefined'
const storyblokVersion: StoryblokVersion = isStoryblokEditor ? 'draft' : 'published'

// Keep this in useAsyncData: a browser-side Storyblok refetch can fail and redirect the visitor to the home page.
const { data: currentProject } = await useAsyncData<DibodevProject | null>(
  `project-page-${locale.value}-${storyblokVersion}-${projectName}`,
  (): Promise<DibodevProject | null> =>
    projectName.length === 0
      ? Promise.resolve(null)
      : StoryblokProjectService.getLocalizedProject(
          projectName,
          storyblokVersion,
          locale.value as string,
          storyblokLanguage.value,
        ),
)

if (!currentProject.value) {
  router.push({ path: '/' })
}

const currentProjectComputed: ComputedRef<DibodevProject | null> = computed(
  (): DibodevProject | null => currentProject.value ?? null,
)

const projectDisplayDate: ComputedRef<string> = computed((): string => {
  const p: DibodevProject | null = currentProjectComputed.value
  const loc: string = locale.value as string
  if (!p) return ''
  return formatProjectDate(p.date, loc)
})

useHead((): Record<string, unknown> => {
  const p: DibodevProject | null = currentProjectComputed.value
  if (!p) return {}
  const title: string = p.metaTitle || p.name
  const description: string = p.metaDescription || p.shortDescription
  const schemaJson: string = buildProjectSchemaJson(p, locale.value as string)

  const shareImageUrl: string =
    StoryblokImageUtils.getShareImageUrl(p.media1) ||
    StoryblokImageUtils.getShareImageUrl(p.media2) ||
    getDefaultShareImageUrl(locale.value as string)

  return {
    title,
    meta: [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      ...buildShareImageMeta(shareImageUrl, title),
    ],
    script: [{ type: 'application/ld+json', innerHTML: schemaJson }],
  }
})
</script>
