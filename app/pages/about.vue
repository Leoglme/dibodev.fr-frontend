<template>
  <DibodevLandingSection
    :titlePart1="t('aboutPage.hero.titlePart1')"
    :titleHighlight1="t('aboutPage.hero.titleHighlight')"
    :titlePart2="t('aboutPage.hero.titlePart2')"
    :description="t('aboutPage.hero.description')"
    :ctaText="t('aboutPage.hero.cta')"
    :ctaPrimaryTo="localePath('/contact')"
    ctaTarget="#about-story"
    :secondaryCta="{ text: t('aboutPage.hero.ctaSecondary'), target: '#about-story' }"
  >
    <template #aside>
      <DibodevFramedPortrait
        :src="PORTRAIT_SRC"
        :srcset="PORTRAIT_SRCSET"
        :sizes="PORTRAIT_SIZES"
        :alt="t('aboutPage.hero.portraitAlt')"
        :width="PORTRAIT_SIZE"
        :height="PORTRAIT_SIZE"
        :name="PERSON_NAME"
        :caption="t('aboutPage.hero.portraitCaption')"
      />
    </template>
  </DibodevLandingSection>
  <DibodevAboutStorySection />
  <DibodevTestimonialSection
    :title="t('aboutPage.testimonial.title')"
    :quote="t('aboutPage.testimonial.quote')"
    :authorName="t('aboutPage.testimonial.authorName')"
    :authorRole="t('aboutPage.testimonial.authorRole')"
    :sourceNote="t('aboutPage.testimonial.sourceNote')"
    :sourceLinkLabel="t('aboutPage.testimonial.sourceLink')"
    :sourceHref="MALT_PROFILE_URL"
    :rating="5"
    :ratingLabel="t('aboutPage.testimonial.ratingLabel')"
  />
  <DibodevAboutPathSection />
  <DibodevAboutSkillsSection />
  <DibodevProjectScreenshotsSection
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
import { PERSON_NAME } from '~/config/schema'

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

const SITE_URL: string = 'https://dibodev.fr'
const PORTRAIT_SIZE: number = 800
const PORTRAIT_SRC: string = '/images/about/leo-guillaume-portrait-800.webp'
const PORTRAIT_SRCSET: string =
  '/images/about/leo-guillaume-portrait-400.webp 400w, /images/about/leo-guillaume-portrait-800.webp 800w'
const PORTRAIT_SIZES: string = '(min-width: 1280px) 448px, (min-width: 1024px) 320px, 144px'
const SHARE_IMAGE_URL: string = `${SITE_URL}/images/about/leo-guillaume-og.jpg`
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
    { property: 'og:image', content: SHARE_IMAGE_URL },
    { name: 'twitter:image', content: SHARE_IMAGE_URL },
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
