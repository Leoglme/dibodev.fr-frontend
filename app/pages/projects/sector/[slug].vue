<template>
  <div class="relative z-2 flex min-h-screen w-screen max-w-screen flex-col">
    <!-- Même landing que la page projets, avec contenu secteur (titre + description Storyblok) -->
    <DibodevLandingSection
      v-if="sectorTitleFromCms"
      :title="sectorPageTitle"
      :description="sectorPageDescription"
      :ctaText="$t('projects.landing.cta')"
      ctaTarget="#projects"
    />
    <DibodevLandingSection
      v-else
      :titlePart1="$t('projects.sectorPage.titlePart1', { sector: sectorLabel })"
      :titleHighlight1="$t('projects.sectorPage.titleHighlight1')"
      :titlePart2="$t('projects.sectorPage.titlePart2')"
      :titleHighlight2="$t('projects.sectorPage.titleHighlight2')"
      :titlePart3="$t('projects.sectorPage.titlePart3')"
      :description="sectorPageDescription"
      :ctaText="$t('projects.landing.cta')"
      ctaTarget="#projects"
    />

    <!-- Section intro secteur (richtext CMS), style aligné project-about -->
    <DibodevSectorIntroSection
      v-if="sectorIntroHtml"
      :title="$t('projects.sectorPage.introTitle')"
      :html="sectorIntroHtml"
    />

    <!-- Même UI que la page projets : filtres + grille + CTA (liste = projets du secteur) -->
    <DibodevProjectsSection :initial-projects="projectsBySector" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  i18n: {
    paths: {
      fr: '/projets/secteur/[slug]',
      en: '/projects/sector/[slug]',
      es: '/proyectos/sector/[slug]',
    },
  },
})

import { computed, ref, watch } from 'vue'
import type { ComputedRef, Ref } from 'vue'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import DibodevSectorIntroSection from '~/components/sections/DibodevSectorIntroSection.vue'
import DibodevProjectsSection from '~/components/sections/DibodevProjectsSection.vue'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { SectorKey } from '~/core/constants/projectEnums'
import type { SupportedLocale } from '~/core/constants/sectorSlugs'
import { parseSectorFromSlug, sectorLabelByLocale } from '~/core/constants/sectorSlugs'
import { buildSectorSeo } from '~/composables/useSectorSeo'
import { useProjectsWithTranslations } from '~/composables/useProjectsWithTranslations'
import type { StoryblokSectorContent } from '~/services/types/storyblokSector'
import { SECTEURS_STORYBLOK_FOLDER, normalizeSectorContent } from '~/services/types/storyblokSector'
import { StoryblokService } from '~/services/storyblokService'
import type { RouteLocationNormalizedLoadedGeneric } from '#vue-router'

const route: RouteLocationNormalizedLoadedGeneric = useRoute()
const { locale, t } = useI18n()
const storyblokLanguage: ComputedRef<string | undefined> = useStoryblokProjectLanguage()

const slug: string = String(route.params.slug ?? '').trim()
const currentLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'

const sectorKey: SectorKey | null = parseSectorFromSlug(currentLocale, slug)

if (sectorKey === null) {
  throw createError({ statusCode: 404, statusMessage: 'Sector not found' })
}

/** Contenu de la page secteur depuis Storyblok. On garde le contenu brut pour convertir l’intro en HTML côté client. */
const sectorStorySlug: string = `${SECTEURS_STORYBLOK_FOLDER}/${sectorKey}`

const sectorDataKey: string = `sector-page-${currentLocale}-${sectorKey}`

type SectorPageData = {
  normalized: StoryblokSectorContent | null
  rawContent: Record<string, unknown> | null
}

const { data: sectorStoryData } = useLazyAsyncData<SectorPageData | null>(
  sectorDataKey,
  async (): Promise<SectorPageData | null> => {
    const lang = storyblokLanguage.value
    try {
      const response = await StoryblokService.getStoryBySlug<unknown>(sectorStorySlug, 'published', lang)
      const raw = response.story?.content
      const normalized = normalizeSectorContent(raw) ?? null
      const rawContent = raw && typeof raw === 'object' ? (raw as Record<string, unknown>) : null
      return { normalized, rawContent }
    } catch {
      if (lang) {
        try {
          const response = await StoryblokService.getStoryBySlug<unknown>(sectorStorySlug, 'published', undefined)
          const raw = response.story?.content
          const normalized = normalizeSectorContent(raw) ?? null
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

const projectsBySector: ComputedRef<DibodevProject[]> = computed((): DibodevProject[] => {
  return allProjects.value.filter((p: DibodevProject) => Array.isArray(p.sectors) && p.sectors.includes(sectorKey))
})

const sectorLabel: string = sectorLabelByLocale(currentLocale, sectorKey)
const sectorPageContent: ComputedRef<StoryblokSectorContent | null> = computed(
  () => sectorStoryData.value?.normalized ?? null,
)
const sectorRawContent: ComputedRef<Record<string, unknown> | null> = computed(
  (): Record<string, unknown> | null => sectorStoryData.value?.rawContent ?? null,
)

/** Intro rendue depuis le richtext brut (ProseMirror), remplie de façon asynchrone */
const sectorIntroFromRichText: Ref<string> = ref<string>('')
watch(
  sectorRawContent,
  async (raw: Record<string, unknown> | null): Promise<void> => {
    sectorIntroFromRichText.value = ''
    const intro: unknown = raw?.intro
    if (intro == null || typeof intro !== 'object' || !('type' in intro)) return
    try {
      const { richTextResolver } = await import('@storyblok/richtext')
      const html = richTextResolver().render(intro as Parameters<ReturnType<typeof richTextResolver>['render']>[0])
      sectorIntroFromRichText.value = typeof html === 'string' && html.trim() !== '' ? html.trim() : ''
    } catch {
      sectorIntroFromRichText.value = ''
    }
  },
  { immediate: true },
)

/** H1 : CMS si présent, sinon i18n */
const sectorPageTitle: ComputedRef<string> = computed((): string => {
  const fromCms = sectorPageContent.value?.title?.trim()
  return fromCms ?? t('projects.sectorPage.title', { sector: sectorLabel })
})

/** Titre fourni par le CMS (sinon on utilise le titre structuré i18n avec highlights) */
const sectorTitleFromCms: ComputedRef<boolean> = computed(
  (): boolean => (sectorPageContent.value?.title?.trim()?.length ?? 0) > 0,
)

/** Description : CMS si présent, sinon i18n */
const sectorPageDescription: ComputedRef<string> = computed((): string => {
  const fromCms = sectorPageContent.value?.description?.trim()
  return fromCms ?? t('projects.sectorPage.description', { sector: sectorLabel })
})

/** Intro riche (HTML) : contenu normalisé (string), ou string brut, ou HTML issu du watch sur le richtext */
const sectorIntroHtml: ComputedRef<string> = computed((): string => {
  const fromNormalized = sectorPageContent.value?.intro
  if (fromNormalized != null && String(fromNormalized).trim() !== '') return String(fromNormalized).trim()
  const rawIntro = sectorRawContent.value?.intro
  if (typeof rawIntro === 'string' && rawIntro.trim() !== '') return rawIntro.trim()
  return sectorIntroFromRichText.value
})

/** Meta title pour useHead : CMS si présent, sinon titre de page */
const sectorMetaTitle: ComputedRef<string> = computed((): string => {
  const fromCms = sectorPageContent.value?.metaTitle?.trim()
  return fromCms ?? sectorPageTitle.value
})

/** Meta description pour useHead : CMS si présent, sinon description de page */
const sectorMetaDescription: ComputedRef<string> = computed((): string => {
  const fromCms = sectorPageContent.value?.metaDescription?.trim()
  return fromCms ?? sectorPageDescription.value
})

useHead(() => {
  const title = sectorMetaTitle.value
  const description = sectorMetaDescription.value
  const { canonical, link, meta } = buildSectorSeo(currentLocale, sectorKey, title, description)
  return {
    title,
    meta: [{ name: 'description', content: description }, ...meta.filter((m) => m.property?.startsWith('og:'))],
    link: [{ rel: 'canonical', href: canonical }, ...link],
    htmlAttrs: { lang: locale.value },
  }
})
</script>
