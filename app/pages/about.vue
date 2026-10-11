<template>
  <DibodevLandingSection
    :breadcrumbs="breadcrumbs"
    :titlePart1="t('aboutPage.hero.titlePart1')"
    :titleHighlight1="t('aboutPage.hero.titleHighlight')"
    :titlePart2="t('aboutPage.hero.titlePart2')"
    :description="t('aboutPage.hero.description')"
    :ctaText="t('aboutPage.hero.cta')"
    :ctaPrimaryTo="localePath('/contact')"
    ctaTarget="#about-story"
    :secondaryCta="{ text: t('aboutPage.hero.ctaSecondary'), target: '#about-story' }"
    :stats="heroStats"
    :compactTitle="true"
  >
    <template #aside>
      <DibodevFramedPortrait
        :src="FOUNDER_PORTRAIT_SRC"
        :srcset="FOUNDER_PORTRAIT_SRCSET"
        :sizes="FOUNDER_PORTRAIT_SIZES"
        :alt="t('aboutPage.hero.portraitAlt')"
        :width="FOUNDER_PORTRAIT_SIZE"
        :height="FOUNDER_PORTRAIT_SIZE"
        :name="PERSON_NAME"
        :caption="t('aboutPage.hero.portraitCaption')"
      />
    </template>
  </DibodevLandingSection>
  <DibodevAboutStorySection />
  <DibodevTestimonialSection
    :eyebrow="t('testimonial.eyebrow')"
    :title="t('testimonial.title')"
    :quote="t('testimonial.quote')"
    :authorName="t('testimonial.authorName')"
    :authorRole="t('testimonial.authorRole')"
    :sourceNote="t('testimonial.sourceNote')"
    :sourceLinkLabel="t('testimonial.sourceLink')"
    :sourceHref="MALT_PROFILE_URL"
    :rating="5"
    :ratingLabel="t('testimonial.ratingLabel')"
    :verifiedLabel="t('testimonial.verifiedLabel')"
  />
  <DibodevAboutPathSection />
  <DibodevAboutSkillsSection />
  <DibodevProjectScreenshotsSection
    :eyebrow="t('aboutPage.projects.eyebrow')"
    :title="t('aboutPage.projects.title')"
    :description="t('aboutPage.projects.description')"
    :seeAllLabel="t('aboutPage.projects.seeAll')"
    :projectSlugs="SHOWCASED_PROJECT_SLUGS"
    trackingSource="about_screenshots"
  />
  <DibodevContactCtaSection
    :title="t('aboutPage.cta.title')"
    :description="t('aboutPage.cta.description')"
    :ctaText="t('aboutPage.cta.button')"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef } from 'vue'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevStatItemProps } from '~/core/types/DibodevStat'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import DibodevFramedPortrait from '~/components/data-displays/DibodevFramedPortrait.vue'
import DibodevAboutStorySection from '~/components/sections/DibodevAboutStorySection.vue'
import DibodevTestimonialSection from '~/components/sections/DibodevTestimonialSection.vue'
import DibodevAboutPathSection from '~/components/sections/DibodevAboutPathSection.vue'
import DibodevAboutSkillsSection from '~/components/sections/DibodevAboutSkillsSection.vue'
import DibodevProjectScreenshotsSection from '~/components/sections/DibodevProjectScreenshotsSection.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import { MALT_PROFILE_URL } from '~/config/contact'
import { buildProfilePageSchemaJson } from '~/config/profilePageSchema'
import { PERSON_FAMILY_NAME, PERSON_GIVEN_NAME, PERSON_NAME } from '~/config/schema'
import { usePageShareImage } from '~/composables/usePageShareImage'
import {
  FOUNDER_PORTRAIT_SIZE,
  FOUNDER_PORTRAIT_SIZES,
  FOUNDER_PORTRAIT_SRC,
  FOUNDER_PORTRAIT_SRCSET,
} from '~/core/constants/founderPortrait'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { useHeroStats } from '~/composables/useHeroStats'

definePageMeta({
  i18n: {
    paths: {
      fr: '/a-propos',
      en: '/about',
      es: '/sobre-mi',
    },
  },
})

const { t, locale } = useI18n()
const localePath = useLocalePath()
usePageShareImage('about')
const heroStats: ComputedRef<DibodevStatItemProps[]> = await useHeroStats()
const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.about'), to: null },
])

const SITE_URL: string = 'https://dibodev.fr'
const SHOWCASED_PROJECT_SLUGS: string[] = [
  'izidoor',
  'goupixdex',
  'nightforge',
  'gestion-temps',
  'ai-pneumonia-detector',
  'a2m-orizon-solution',
]

useHead(() => ({
  title: t('meta.aboutPage.title'),
  meta: [
    { name: 'description', content: t('meta.aboutPage.description') },
    { property: 'og:title', content: t('meta.aboutPage.title') },
    { property: 'og:description', content: t('meta.aboutPage.description') },
    { property: 'og:type', content: 'profile' },
    { property: 'profile:first_name', content: PERSON_GIVEN_NAME },
    { property: 'profile:last_name', content: PERSON_FAMILY_NAME },
  ],
  script: [
    {
      type: 'application/ld+json',
      key: 'schema-profile-page',
      innerHTML: buildProfilePageSchemaJson(`${SITE_URL}${localePath('about')}`, locale.value),
    },
  ],
}))
</script>
