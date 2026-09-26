<template>
  <DibodevLandingSection
    :title="t('aboutPage.hero.title')"
    :description="t('aboutPage.hero.description')"
    :ctaText="t('aboutPage.hero.cta')"
    :ctaPrimaryTo="localePath('/contact')"
    ctaTarget="#about-story"
  />
  <DibodevAboutStorySection />
  <DibodevAboutPathSection />
  <DibodevContactCtaSection
    :title="t('aboutPage.cta.title')"
    :description="t('aboutPage.cta.description')"
    :ctaText="t('aboutPage.cta.button')"
  />
</template>

<script setup lang="ts">
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import DibodevAboutStorySection from '~/components/sections/DibodevAboutStorySection.vue'
import DibodevAboutPathSection from '~/components/sections/DibodevAboutPathSection.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import { buildProfilePageSchemaJson } from '~/config/profilePageSchema'

definePageMeta({
  i18n: {
    paths: {
      fr: '/a-propos',
      en: '/about',
      es: '/sobre-mi',
    },
  },
})

const SITE_URL: string = 'https://dibodev.fr'

const { t, locale } = useI18n()
const localePath = useLocalePath()

useHead(() => ({
  title: t('meta.aboutPage.title'),
  meta: [
    { name: 'description', content: t('meta.aboutPage.description') },
    { property: 'og:title', content: t('meta.aboutPage.title') },
    { property: 'og:description', content: t('meta.aboutPage.description') },
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
