<template>
  <div class="relative flex w-full flex-col">
    <DibodevLandingSection
      :breadcrumbs="breadcrumbs"
      :title="sectorPageTitle"
      :description="sectorPageDescription"
      :ctaText="$t('projects.landing.cta')"
      ctaTarget="#projects"
      :compactTitle="true"
      :align="projectsBySector.length >= MOSAIC_MINIMUM_PROJECTS ? 'left' : 'center'"
    >
      <template v-if="projectsBySector.length >= MOSAIC_MINIMUM_PROJECTS" #aside>
        <DibodevProjectLogoMosaic :projects="projectsBySector" trackingSource="sector_hero" />
      </template>
    </DibodevLandingSection>

    <DibodevSectorIntroSection
      v-if="sectorIntroHtml"
      :title="$t('projects.sectorPage.introTitle')"
      :html="sectorIntroHtml"
      :facts="listingFacts"
      :technologies="listingTechnologies"
      :technologiesTitle="$t('projects.listingFacts.technologiesTitle')"
    >
      <template #aside>
        <DibodevContactAsideCard
          :title="$t('projects.sectorPage.asideCtaTitle')"
          :description="$t('projects.asideCta.description')"
          :buttonLabel="$t('projects.asideCta.button')"
          trackingLocation="sector_intro"
        />
      </template>
    </DibodevSectorIntroSection>

    <DibodevProjectsSection :initial-projects="projectsBySector">
      <template v-if="shouldShowBusinessSoftwareTeaser" #footer>
        <DibodevToolTeaser :teaser="BUSINESS_SOFTWARE_PAGE_TEASER" trackingLocation="sector" tone="white" />
      </template>
    </DibodevProjectsSection>

    <DibodevProjectTaxonomySection
      :eyebrow="$t('projects.hub.typesEyebrow')"
      :title="$t('projects.sectorPage.otherTypesTitle')"
      :links="categoryLinks"
      variant="cards"
    />

    <DibodevContactCtaSection
      :title="$t('projects.cta.text')"
      :description="$t('projects.cta.description')"
      :ctaText="$t('projects.cta.button')"
    />
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

import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import DibodevSectorIntroSection from '~/components/sections/DibodevSectorIntroSection.vue'
import DibodevProjectsSection from '~/components/sections/DibodevProjectsSection.vue'
import DibodevProjectTaxonomySection from '~/components/sections/DibodevProjectTaxonomySection.vue'
import DibodevContactAsideCard from '~/components/cards/DibodevContactAsideCard.vue'
import DibodevProjectLogoMosaic from '~/components/data-displays/DibodevProjectLogoMosaic.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { useProjectTaxonomyLinks } from '~/composables/useProjectTaxonomyLinks'
import { useProjectListingFacts } from '~/composables/useProjectListingFacts'
import type { DibodevProject } from '~/core/types/DibodevProject'
import type { SectorKey } from '~/core/constants/projectEnums'
import type { SupportedLocale } from '~/core/constants/sectorSlugs'
import { parseSectorFromSlug, sectorLabelByLocale } from '~/core/constants/sectorSlugs'
import { buildSectorSeo } from '~/composables/useSectorSeo'
import { useProjectsWithTranslations } from '~/composables/useProjectsWithTranslations'
import type { StoryblokSectorContent } from '~/services/types/storyblokSector'
import { SECTEURS_STORYBLOK_FOLDER, normalizeSectorContent } from '~/services/types/storyblokSector'
import { StoryblokService } from '~/services/storyblokService'
import DibodevToolTeaser from '~/components/data-displays/DibodevToolTeaser.vue'
import {
  BUSINESS_SOFTWARE_PAGE_TEASER,
  BUSINESS_SOFTWARE_RELATED_SECTOR_KEYS,
} from '~/core/constants/businessSoftwarePageTeaser'
import { StoryblokRichtextUtils } from '~/core/utils/StoryblokRichtextUtils'
import type { RouteLocationNormalizedLoadedGeneric } from '#vue-router'

/** The header mosaic needs a full first row of three tiles to look intentional. */
const MOSAIC_MINIMUM_PROJECTS: number = 3

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
const shouldShowBusinessSoftwareTeaser: boolean = BUSINESS_SOFTWARE_RELATED_SECTOR_KEYS.includes(sectorKey)

const sectorDataKey: string = `sector-page-${currentLocale}-${sectorKey}`

type SectorTranslation = {
  title: string
  description: string
  intro?: { type: string; content?: unknown[] }
  metaTitle: string
  metaDescription: string
}

const { data: sectorTranslationsMap } = useLazyAsyncData<Record<string, SectorTranslation>>(
  () => `sector-translations-${locale.value}-${sectorKey}`,
  async (): Promise<Record<string, SectorTranslation>> => {
    const loc = locale.value as string
    if (loc !== 'en' && loc !== 'es') return {}
    return $fetch<Record<string, SectorTranslation>>(`/api/translations/sectors/${loc}`).catch(() => ({}))
  },
)

const sectorTranslation = computed((): SectorTranslation | undefined => sectorTranslationsMap.value?.[sectorStorySlug])

type SectorPageData = {
  normalized: StoryblokSectorContent | null
  rawContent: Record<string, unknown> | null
}

const { data: sectorStoryData } = useAsyncData<SectorPageData | null>(
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
const { listingFacts, listingTechnologies } = useProjectListingFacts(projectsBySector, 'categories')

const sectorLabel: string = sectorLabelByLocale(currentLocale, sectorKey)
const { categoryLinks } = useProjectTaxonomyLinks(allProjects)
const localePath = useLocalePath()
const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.projects'), to: localePath('projects') },
  { label: sectorLabel, to: null },
])
const sectorPageContent: ComputedRef<StoryblokSectorContent | null> = computed(
  () => sectorStoryData.value?.normalized ?? null,
)
const sectorRawContent: ComputedRef<Record<string, unknown> | null> = computed(
  (): Record<string, unknown> | null => sectorStoryData.value?.rawContent ?? null,
)

/** H1 : traduction EN/ES si présente, sinon CMS, sinon i18n */
const sectorPageTitle: ComputedRef<string> = computed((): string => {
  const fromTranslation = sectorTranslation.value?.title?.trim()
  if (fromTranslation) return fromTranslation
  const fromCms = sectorPageContent.value?.title?.trim()
  return fromCms ?? t('projects.sectorPage.title', { sector: sectorLabel })
})

/** Description : traduction EN/ES si présente, sinon CMS, sinon i18n */
const sectorPageDescription: ComputedRef<string> = computed((): string => {
  const fromTranslation = sectorTranslation.value?.description?.trim()
  if (fromTranslation) return fromTranslation
  const fromCms = sectorPageContent.value?.description?.trim()
  return fromCms ?? t('projects.sectorPage.description', { sector: sectorLabel })
})

/** Intro HTML: EN/ES translation first, then the Storyblok content. */
const sectorIntroHtml: ComputedRef<string> = computed((): string => {
  const introFromTranslation: string = StoryblokRichtextUtils.toHtml(sectorTranslation.value?.intro)
  if (introFromTranslation) return introFromTranslation
  const introFromCms: string = sectorPageContent.value?.intro?.trim() ?? ''
  if (introFromCms) return introFromCms
  return StoryblokRichtextUtils.toHtml(sectorRawContent.value?.intro)
})

/** Meta title pour useHead : traduction, CMS si présent, sinon titre de page */
const sectorMetaTitle: ComputedRef<string> = computed((): string => {
  const fromTranslation = sectorTranslation.value?.metaTitle?.trim()
  if (fromTranslation) return fromTranslation
  const fromCms = sectorPageContent.value?.metaTitle?.trim()
  return fromCms ?? sectorPageTitle.value
})

/** Meta description pour useHead : traduction, CMS si présent, sinon description de page */
const sectorMetaDescription: ComputedRef<string> = computed((): string => {
  const fromTranslation = sectorTranslation.value?.metaDescription?.trim()
  if (fromTranslation) return fromTranslation
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
