<template>
  <div class="relative z-2 flex min-h-screen w-screen max-w-screen flex-col">
    <DibodevLandingSection
      v-if="categoryTitleFromCms"
      :title="categoryPageTitle"
      :description="categoryPageDescription"
      :ctaText="$t('projects.landing.cta')"
      ctaTarget="#projects"
    />
    <DibodevLandingSection
      v-else
      :titlePart1="$t('projects.categoryPage.titlePart1', { category: categoryLabel })"
      :titleHighlight1="$t('projects.categoryPage.titleHighlight1')"
      :titlePart2="$t('projects.categoryPage.titlePart2')"
      :titleHighlight2="$t('projects.categoryPage.titleHighlight2')"
      :titlePart3="$t('projects.categoryPage.titlePart3')"
      :description="categoryPageDescription"
      :ctaText="$t('projects.landing.cta')"
      ctaTarget="#projects"
    />

    <DibodevSectorIntroSection
      v-if="categoryIntroHtml"
      :title="$t('projects.categoryPage.introTitle')"
      :html="categoryIntroHtml"
    />

    <DibodevProjectsSection :initial-projects="projectsByCategory" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  i18n: {
    paths: {
      fr: '/projets/categorie/[slug]',
      en: '/projects/category/[slug]',
      es: '/proyectos/categoria/[slug]',
    },
  },
})

import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import DibodevSectorIntroSection from '~/components/sections/DibodevSectorIntroSection.vue'
import DibodevProjectsSection from '~/components/sections/DibodevProjectsSection.vue'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { CategoryKey } from '~/core/constants/projectEnums'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import { parseCategoryFromSlug, categoryLabelByLocale } from '~/core/constants/categorySlugs'
import { buildCategorySeo } from '~/composables/useCategorySeo'
import { useProjectsWithTranslations } from '~/composables/useProjectsWithTranslations'
import type { StoryblokCategoryContent } from '~/services/types/storyblokCategory'
import { CATEGORIES_STORYBLOK_FOLDER, normalizeCategoryContent } from '~/services/types/storyblokCategory'
import { StoryblokService } from '~/services/storyblokService'
import { StoryblokRichtextUtils } from '~/core/utils/StoryblokRichtextUtils'
import type { RouteLocationNormalizedLoadedGeneric } from '#vue-router'

const route: RouteLocationNormalizedLoadedGeneric = useRoute()
const { locale, t } = useI18n()
const storyblokLanguage: ComputedRef<string | undefined> = useStoryblokProjectLanguage()

const slug: string = String(route.params.slug ?? '').trim()
const currentLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'

const categoryKey: CategoryKey | null = parseCategoryFromSlug(currentLocale, slug)

if (categoryKey === null) {
  throw createError({ statusCode: 404, statusMessage: 'Category not found' })
}

const categoryStorySlug: string = `${CATEGORIES_STORYBLOK_FOLDER}/${categoryKey}`

const categoryDataKey: string = `category-page-${currentLocale}-${categoryKey}`

type CategoryTranslation = {
  title: string
  description: string
  intro?: { type: string; content?: unknown[] }
  metaTitle: string
  metaDescription: string
}

const { data: categoryTranslationsMap } = useLazyAsyncData<Record<string, CategoryTranslation>>(
  () => `category-translations-${locale.value}-${categoryKey}`,
  async (): Promise<Record<string, CategoryTranslation>> => {
    const loc = locale.value as string
    if (loc !== 'en' && loc !== 'es') return {}
    return $fetch<Record<string, CategoryTranslation>>(`/api/translations/categories/${loc}`).catch(() => ({}))
  },
)

const categoryTranslation = computed(
  (): CategoryTranslation | undefined => categoryTranslationsMap.value?.[categoryStorySlug],
)

type CategoryPageData = {
  normalized: StoryblokCategoryContent | null
  rawContent: Record<string, unknown> | null
}

const { data: categoryStoryData } = useAsyncData<CategoryPageData | null>(
  categoryDataKey,
  async (): Promise<CategoryPageData | null> => {
    const lang = storyblokLanguage.value
    try {
      const response = await StoryblokService.getStoryBySlug<unknown>(categoryStorySlug, 'published', lang)
      const raw = response.story?.content
      const normalized = normalizeCategoryContent(raw) ?? null
      const rawContent = raw && typeof raw === 'object' ? (raw as Record<string, unknown>) : null
      return { normalized, rawContent }
    } catch {
      if (lang) {
        try {
          const response = await StoryblokService.getStoryBySlug<unknown>(categoryStorySlug, 'published', undefined)
          const raw = response.story?.content
          const normalized = normalizeCategoryContent(raw) ?? null
          const rawContent = raw && typeof raw === 'object' ? (raw as Record<string, unknown>) : null
          return { normalized, rawContent }
        } catch {
          return null
        }
      }
      return null
    }
  },
)

const { data: storyblokProjectsData } = useProjectsWithTranslations()

const allProjects: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] => {
  return storyblokProjectsData.value ?? []
})

const projectsByCategory: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] => {
  return allProjects.value.filter(
    (p: DibodevProject) => Array.isArray(p.categories) && p.categories.includes(categoryKey),
  )
})

const categoryLabel: string = categoryLabelByLocale(currentLocale, categoryKey)
const categoryPageContent: ComputedRef<StoryblokCategoryContent | null> = computed(
  () => categoryStoryData.value?.normalized ?? null,
)
const categoryRawContent: ComputedRef<Record<string, unknown> | null> = computed(
  (): Record<string, unknown> | null => categoryStoryData.value?.rawContent ?? null,
)

/** H1 : traduction EN/ES si présente, sinon CMS, sinon i18n */
const categoryPageTitle: ComputedRef<string> = computed((): string => {
  const fromTranslation = categoryTranslation.value?.title?.trim()
  if (fromTranslation) return fromTranslation
  const fromCms = categoryPageContent.value?.title?.trim()
  return fromCms ?? t('projects.categoryPage.title', { category: categoryLabel })
})

const categoryTitleFromCms: ComputedRef<boolean> = computed(
  (): boolean =>
    (categoryPageContent.value?.title?.trim()?.length ?? 0) > 0 ||
    (categoryTranslation.value?.title?.trim()?.length ?? 0) > 0,
)

/** Description : traduction EN/ES si présente, sinon CMS, sinon i18n */
const categoryPageDescription: ComputedRef<string> = computed((): string => {
  const fromTranslation = categoryTranslation.value?.description?.trim()
  if (fromTranslation) return fromTranslation
  const fromCms = categoryPageContent.value?.description?.trim()
  return fromCms ?? t('projects.categoryPage.description', { category: categoryLabel })
})

/** Intro HTML: EN/ES translation first, then the Storyblok content. */
const categoryIntroHtml: ComputedRef<string> = computed((): string => {
  const introFromTranslation: string = StoryblokRichtextUtils.toHtml(categoryTranslation.value?.intro)
  if (introFromTranslation) return introFromTranslation
  const introFromCms: string = categoryPageContent.value?.intro?.trim() ?? ''
  if (introFromCms) return introFromCms
  return StoryblokRichtextUtils.toHtml(categoryRawContent.value?.intro)
})

/** Meta title : traduction, CMS si présent, sinon titre de page */
const categoryMetaTitle: ComputedRef<string> = computed((): string => {
  const fromTranslation = categoryTranslation.value?.metaTitle?.trim()
  if (fromTranslation) return fromTranslation
  const fromCms = categoryPageContent.value?.metaTitle?.trim()
  return fromCms ?? categoryPageTitle.value
})

/** Meta description : traduction, CMS si présent, sinon description de page */
const categoryMetaDescription: ComputedRef<string> = computed((): string => {
  const fromTranslation = categoryTranslation.value?.metaDescription?.trim()
  if (fromTranslation) return fromTranslation
  const fromCms = categoryPageContent.value?.metaDescription?.trim()
  return fromCms ?? categoryPageDescription.value
})

useHead(() => {
  const title = categoryMetaTitle.value
  const description = categoryMetaDescription.value
  const { canonical, link, meta } = buildCategorySeo(currentLocale, categoryKey, title, description)
  return {
    title,
    meta: [{ name: 'description', content: description }, ...meta.filter((m) => m.property?.startsWith('og:'))],
    link: [{ rel: 'canonical', href: canonical }, ...link],
    htmlAttrs: { lang: locale.value },
  }
})
</script>
