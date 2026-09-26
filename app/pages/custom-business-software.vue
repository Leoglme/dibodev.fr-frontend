<template>
  <DibodevLandingSection
    :title="t('businessSoftwarePage.hero.title')"
    :description="t('businessSoftwarePage.hero.description')"
    :ctaText="t('businessSoftwarePage.hero.cta')"
    :ctaPrimaryTo="localePath('/contact')"
    ctaTarget="#business-software-tools"
  />
  <DibodevBusinessSoftwareToolsSection />
  <DibodevBusinessSoftwareStepsSection />
  <DibodevBusinessSoftwarePricingSection />
  <DibodevBusinessSoftwareProjectsSection />
  <DibodevFaqSection :title="t('businessSoftwarePage.faq.title')" :questions="faqQuestions" />
  <BlogRelatedArticles :title="t('businessSoftwarePage.articles.title')" :articles="relatedArticles" />
  <DibodevContactCtaSection
    :title="t('businessSoftwarePage.cta.title')"
    :description="t('businessSoftwarePage.cta.description')"
    :ctaText="t('businessSoftwarePage.cta.button')"
  />
</template>

<script setup lang="ts">
import type { ComputedRef } from 'vue'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import { computed } from 'vue'
import DibodevLandingSection from '~/components/sections/DibodevLandingSection.vue'
import DibodevBusinessSoftwareToolsSection from '~/components/sections/DibodevBusinessSoftwareToolsSection.vue'
import DibodevBusinessSoftwareStepsSection from '~/components/sections/DibodevBusinessSoftwareStepsSection.vue'
import DibodevBusinessSoftwarePricingSection from '~/components/sections/DibodevBusinessSoftwarePricingSection.vue'
import DibodevBusinessSoftwareProjectsSection from '~/components/sections/DibodevBusinessSoftwareProjectsSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'

definePageMeta({
  i18n: {
    paths: {
      fr: '/application-metier-sur-mesure-rennes',
      en: '/custom-business-software-rennes',
      es: '/software-de-gestion-a-medida-rennes',
    },
  },
})

const ARTICLES_POOL_SIZE: number = 100
const RELATED_ARTICLE_SLUGS: string[] = [
  'developpeur-application-metier-rennes-freelance-local',
  'freelance-ou-agence-rennes-outil-metier-sur-mesure',
  'developpement-logiciel-b2b-sur-mesure-prix',
]
const FAQ_QUESTION_KEYS: string[] = ['price', 'delay', 'freelance', 'area', 'excel', 'existing']

const { t } = useI18n()
const localePath = useLocalePath()
const { data: articlesPool } = await useArticlesWithTranslations({ perPage: ARTICLES_POOL_SIZE })

const relatedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  RELATED_ARTICLE_SLUGS.map((slug: string): DibodevArticle | undefined =>
    (articlesPool.value ?? []).find((article: DibodevArticle): boolean => article.slug === slug),
  ).filter((article: DibodevArticle | undefined): article is DibodevArticle => article !== undefined),
)

const faqQuestions: ComputedRef<DibodevFaqQuestion[]> = computed((): DibodevFaqQuestion[] =>
  FAQ_QUESTION_KEYS.map(
    (key: string): DibodevFaqQuestion => ({
      question: t(`businessSoftwarePage.faq.${key}.question`),
      answer: t(`businessSoftwarePage.faq.${key}.answer`),
    }),
  ),
)

useHead(() => ({
  title: t('meta.businessSoftwarePage.title'),
  meta: [
    { name: 'description', content: t('meta.businessSoftwarePage.description') },
    { property: 'og:title', content: t('meta.businessSoftwarePage.title') },
    { property: 'og:description', content: t('meta.businessSoftwarePage.description') },
  ],
}))
</script>
