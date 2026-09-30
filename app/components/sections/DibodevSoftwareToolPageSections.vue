<template>
  <DibodevToolLandingSection
    :breadcrumbs="breadcrumbs"
    :titleBefore="props.page.hero.titleBefore"
    :titleHighlight="props.page.hero.titleHighlight"
    :titleAfter="props.page.hero.titleAfter"
    :description="props.page.hero.description"
    :reassurances="props.page.hero.reassurances"
    :authorIntro="props.page.hero.authorIntro"
    :authorBio="props.page.hero.authorBio"
    :updatedAt="props.page.hero.updatedAt"
  >
    <template #tool>
      <DibodevQuizTunnel id="test" :quiz="props.quiz" />
    </template>
  </DibodevToolLandingSection>

  <DibodevPriceListSection
    :anchorId="props.page.marketSoftware.anchorId"
    :eyebrow="props.page.marketSoftware.eyebrow"
    :title="props.page.marketSoftware.title"
    :intro="props.page.marketSoftware.intro"
    :productColumnLabel="props.page.marketSoftware.productColumnLabel"
    :coverageColumnLabel="props.page.marketSoftware.coverageColumnLabel"
    :priceColumnLabel="props.page.marketSoftware.priceColumnLabel"
    :products="props.page.marketSoftware.products"
    tone="offWhite"
  >
    <template #footer>
      <DibodevCallout
        icon="Info"
        :emphasizedIntro="props.page.marketSoftware.calloutEmphasizedIntro"
        :text="props.page.marketSoftware.calloutText"
        :footnote="props.page.marketSoftware.calloutFootnote"
        tone="white"
      />
    </template>
  </DibodevPriceListSection>

  <DibodevSourcedFactsSection
    :anchorId="props.page.rules.anchorId"
    :eyebrow="props.page.rules.eyebrow"
    :title="props.page.rules.title"
    :intro="props.page.rules.intro"
    :facts="props.page.rules.facts"
    tone="white"
  >
    <template #footer>
      <DibodevCallout
        icon="ShieldCheck"
        :emphasizedIntro="props.page.rules.calloutEmphasizedIntro"
        :text="props.page.rules.calloutText"
        tone="tint"
      />
    </template>
  </DibodevSourcedFactsSection>

  <DibodevComparisonTableSection
    :eyebrow="props.page.comparison.eyebrow"
    :title="props.page.comparison.title"
    :intro="props.page.comparison.intro"
    :columns="props.page.comparison.columns"
    :rows="props.page.comparison.rows"
    :criterionLabel="props.page.comparison.criterionLabel"
    :collapsedRowCount="props.page.comparison.rowsShownOnSmallScreens"
    tone="offWhite"
    :trackingLocation="props.trackingLocation"
  />

  <DibodevProjectSpotlightSection
    :eyebrow="props.page.project.eyebrow"
    :title="props.page.project.title"
    :description="props.page.project.description"
    :highlights="props.page.project.highlights"
    :linkLabel="props.page.project.linkLabel"
    :linkTo="projectRoute"
    :imageUrl="projectScreenshotUrl"
    :imageSrcset="projectScreenshotSrcset"
    :imageAlt="props.page.project.imageAlt"
    :browserBarCaption="props.page.project.browserBarCaption"
    :showBrowserFrame="props.page.project.showBrowserFrame"
    tone="tint"
  />

  <DibodevFaqSection
    :eyebrow="props.page.faq.eyebrow"
    :title="props.page.faq.title"
    :questions="props.page.faq.questions"
  />

  <BlogRelatedArticles :title="props.page.relatedArticles.title" :articles="relatedArticles" />

  <DibodevContactCtaSection
    :title="props.page.contactCta.title"
    :description="props.page.contactCta.description"
    :ctaText="props.page.contactCta.button"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevQuizDefinition } from '~/core/types/DibodevQuiz'
import type {
  DibodevSoftwareToolPageContent,
  DibodevSoftwareToolPageSectionsProps,
} from '~/core/types/DibodevSoftwareToolPage'
import { computed } from 'vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevCallout from '~/components/data-displays/DibodevCallout.vue'
import DibodevQuizTunnel from '~/components/quiz/DibodevQuizTunnel.vue'
import DibodevComparisonTableSection from '~/components/sections/DibodevComparisonTableSection.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevPriceListSection from '~/components/sections/DibodevPriceListSection.vue'
import DibodevProjectSpotlightSection from '~/components/sections/DibodevProjectSpotlightSection.vue'
import DibodevSourcedFactsSection from '~/components/sections/DibodevSourcedFactsSection.vue'
import DibodevToolLandingSection from '~/components/sections/DibodevToolLandingSection.vue'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { PERSON_ID, ORGANIZATION_ID } from '~/config/schema'
import { StoryblokImageUtils } from '~/core/utils/StoryblokImageUtils'

const SITE_URL: string = 'https://dibodev.fr'
const STORYBLOK_ASSET_HOST: string = 'a.storyblok.com'
const ARTICLES_POOL_SIZE: number = 100
const SCREENSHOT_WIDTHS: number[] = [600, 900, 1200]
const SCREENSHOT_FALLBACK_WIDTH: number = 1200

/**
 * Every section of a free trade tool page (test, market prices, rules, comparison, project, FAQ, articles, contact),
 * with its head: meta tags, share image and WebPage JSON-LD.
 */
const props: DibodevSoftwareToolPageSectionsProps = defineProps({
  page: {
    type: Object as PropType<DibodevSoftwareToolPageContent>,
    required: true,
  },
  quiz: {
    type: Object as PropType<DibodevQuizDefinition>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
})

const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
defineOgImageComponent(
  'DibodevToolShareImage',
  {
    titleLines: props.page.shareImage.titleLines,
    highlight: props.page.shareImage.highlight,
    subtitle: props.page.shareImage.subtitle,
    badge: props.page.shareImage.badge,
    icon: props.page.shareImage.icon,
  },
  { alt: props.page.shareImage.alt },
)
const { data: articlesPool } = await useArticlesWithTranslations({ perPage: ARTICLES_POOL_SIZE })

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.tools'), to: localePath('tools') },
  { label: props.page.breadcrumbLabel, to: null },
])

const projectRoute: ComputedRef<string> = computed((): string => localePath(`/project/${props.page.project.slug}`))
/** Storyblok screenshots are resized on the fly; images of the site itself are served as they are. */
const isStoryblokScreenshot: ComputedRef<boolean> = computed((): boolean =>
  props.page.project.screenshotUrl.includes(STORYBLOK_ASSET_HOST),
)
const projectScreenshotUrl: ComputedRef<string> = computed((): string =>
  isStoryblokScreenshot.value
    ? StoryblokImageUtils.getResizedUrl(props.page.project.screenshotUrl, SCREENSHOT_FALLBACK_WIDTH)
    : props.page.project.screenshotUrl,
)
const projectScreenshotSrcset: ComputedRef<string> = computed((): string =>
  isStoryblokScreenshot.value ? StoryblokImageUtils.getSrcset(props.page.project.screenshotUrl, SCREENSHOT_WIDTHS) : '',
)

const relatedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  props.page.relatedArticles.slugs
    .map((slug: string): DibodevArticle | undefined =>
      (articlesPool.value ?? []).find((article: DibodevArticle): boolean => article.slug === slug),
    )
    .filter((article: DibodevArticle | undefined): article is DibodevArticle => article !== undefined),
)

/** Author and update date tell search engines and AI assistants how fresh the prices are. */
const webPageSchemaJson: ComputedRef<string> = computed((): string =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${route.path}#webpage`,
    url: `${SITE_URL}${route.path}`,
    name: props.page.meta.title,
    description: props.page.meta.description,
    inLanguage: props.page.meta.inLanguage,
    dateModified: props.page.hero.updatedAt,
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORGANIZATION_ID },
    about: { '@type': 'Thing', name: props.page.meta.schemaAbout },
  }),
)

useHead(() => ({
  title: props.page.meta.title,
  meta: [
    { name: 'description', content: props.page.meta.description },
    { property: 'og:title', content: props.page.meta.title },
    { property: 'og:description', content: props.page.meta.description },
  ],
  script: [{ type: 'application/ld+json', key: 'schema-webpage', innerHTML: webPageSchemaJson.value }],
}))
</script>
