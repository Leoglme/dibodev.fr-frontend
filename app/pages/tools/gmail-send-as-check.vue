<template>
  <DibodevToolLandingSection
    :breadcrumbs="breadcrumbs"
    :titleBefore="page.hero.titleBefore"
    :titleHighlight="page.hero.titleHighlight"
    :titleAfter="page.hero.titleAfter"
    :description="page.hero.description"
    :reassurances="page.hero.reassurances"
    :authorIntro="page.hero.authorIntro"
    :authorBio="page.hero.authorBio"
    :updatedAt="GMAIL_SEND_AS_CHECK_PAGE_UPDATED_AT"
  >
    <template #tool>
      <DibodevGmailSendAsChecker
        :anchorId="GMAIL_SEND_AS_CHECKER_ANCHOR_ID"
        :wording="page.checker"
        :hostGuides="hostGuides"
        :consumerMailboxGuide="consumerMailboxGuide"
        :trackingLocation="TRACKING_LOCATION"
      />
      <DibodevContactPrompt
        icon="Mail"
        :emphasizedIntro="page.offer.emphasizedIntro"
        :text="page.offer.text"
        :linkLabel="page.offer.linkLabel"
        :to="prefilledContactRoute"
        :trackingLocation="`${TRACKING_LOCATION}_offer`"
        tone="white"
        class="mt-6"
      />
    </template>
  </DibodevToolLandingSection>

  <section class="bg-white px-6 py-14 sm:px-8 lg:py-20" aria-labelledby="en-bref">
    <div class="mx-auto grid w-full max-w-3xl gap-3">
      <h2 id="en-bref" class="text-primary text-xs font-medium tracking-[0.08em] uppercase">
        {{ page.summary.eyebrow }}
      </h2>
      <p class="text-lg leading-8 text-gray-100 sm:text-xl">{{ page.summary.text }}</p>
      <p class="text-muted text-sm leading-6">
        <time :datetime="GMAIL_SEND_AS_CHECK_PAGE_UPDATED_AT">{{ page.summary.dateLabel }}</time>
      </p>
    </div>
  </section>

  <DibodevSourcedFactsSection
    :anchorId="page.facts.anchorId"
    :eyebrow="page.facts.eyebrow"
    :title="page.facts.title"
    :intro="page.facts.intro"
    :facts="page.facts.facts"
    tone="offWhite"
  >
    <template #footer>
      <DibodevCallout
        icon="Info"
        :emphasizedIntro="page.facts.calloutEmphasizedIntro"
        :text="page.facts.calloutText"
        tone="white"
      />
    </template>
  </DibodevSourcedFactsSection>

  <DibodevGuaranteesSection
    :anchorId="page.unchanged.anchorId"
    :eyebrow="page.unchanged.eyebrow"
    :title="page.unchanged.title"
    :intro="page.unchanged.intro"
    :guarantees="page.unchanged.items"
    :columns="3"
    tone="white"
  />

  <DibodevMethodSection
    :eyebrow="page.gmailSteps.eyebrow"
    :title="page.gmailSteps.title"
    :intro="page.gmailSteps.intro"
    :steps="page.gmailSteps.steps"
    tone="offWhite"
  />

  <DibodevPriceListSection
    :anchorId="page.solutions.anchorId"
    :eyebrow="page.solutions.eyebrow"
    :title="page.solutions.title"
    :intro="page.solutions.intro"
    :productColumnLabel="page.solutions.solutionColumnLabel"
    :coverageColumnLabel="page.solutions.coverageColumnLabel"
    :priceColumnLabel="page.solutions.costColumnLabel"
    :products="page.solutions.rows"
    tone="white"
  >
    <template #footer>
      <DibodevCallout
        icon="MessageCircle"
        :emphasizedIntro="page.solutions.calloutEmphasizedIntro"
        :text="page.solutions.calloutText"
        tone="tint"
      />
    </template>
  </DibodevPriceListSection>

  <DibodevReferenceTableSection
    :anchorId="page.hosts.anchorId"
    :eyebrow="page.hosts.eyebrow"
    :title="page.hosts.title"
    :intro="page.hosts.intro"
    :nameColumnLabel="page.hosts.hostColumnLabel"
    :detailColumnLabel="page.hosts.detailColumnLabel"
    :linkColumnLabel="page.hosts.guideColumnLabel"
    :rows="page.hosts.rows"
    tone="tint"
  >
    <template #footer>
      <DibodevCallout
        icon="Info"
        :emphasizedIntro="page.hosts.calloutEmphasizedIntro"
        :text="page.hosts.calloutText"
        tone="white"
      />
    </template>
  </DibodevReferenceTableSection>

  <DibodevNumberedGuideSection
    :anchorId="page.pitfalls.anchorId"
    :eyebrow="page.pitfalls.eyebrow"
    :title="page.pitfalls.title"
    :intro="page.pitfalls.intro"
    :pitfallLabel="page.pitfalls.pitfallLabel"
    :items="page.pitfalls.items"
    tone="offWhite"
  />

  <section class="bg-white px-6 py-16 sm:px-8 lg:py-20">
    <div class="mx-auto grid w-full max-w-3xl gap-6">
      <DibodevSectionHeading :eyebrow="page.experience.eyebrow" :title="page.experience.title" />
      <DibodevCallout
        icon="MessageCircle"
        :emphasizedIntro="page.experience.emphasizedIntro"
        :text="page.experience.text"
        tone="tint"
      />
    </div>
  </section>

  <DibodevFaqSection :eyebrow="page.faq.eyebrow" :title="page.faq.title" :questions="page.faq.questions" tone="tint" />

  <BlogRelatedArticles
    :title="page.relatedArticles.title"
    :intro="page.relatedArticles.intro"
    :articles="relatedArticles"
    source="gmail_send_as_check_related"
  />

  <section class="bg-gray-800 px-6 py-16 sm:px-8 lg:py-20">
    <div class="mx-auto grid w-full max-w-3xl gap-6">
      <DibodevSectionHeading :eyebrow="page.nextTools.eyebrow" :title="page.nextTools.title" />
      <DibodevToolTeaser
        v-for="teaser in NEXT_TOOL_TEASERS"
        :key="teaser.toolId"
        :teaser="teaser"
        :trackingLocation="`${TRACKING_LOCATION}_next_tools`"
        tone="white"
      />
    </div>
  </section>

  <DibodevContactCtaSection
    :title="page.contactCta.title"
    :description="page.contactCta.description"
    :ctaText="page.contactCta.button"
    :ctaTo="prefilledContactRoute"
    :trackingLocation="`${TRACKING_LOCATION}_contact_cta`"
  />

  <DibodevMobileContactBar
    :text="page.mobileContactBar.text"
    :buttonLabel="page.mobileContactBar.buttonLabel"
    :to="prefilledContactRoute"
    :hiddenWhileVisibleId="GMAIL_SEND_AS_CHECKER_ANCHOR_ID"
    :trackingLocation="`${TRACKING_LOCATION}_mobile_bar`"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef, WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevArticle } from '~/core/types/DibodevArticle'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevEmailProviderKey } from '~/core/types/DibodevEmailDeliverabilityCheck'
import type { DibodevGmailSendAsHostGuide } from '~/core/types/DibodevGmailSendAsCheck'
import type { DibodevGmailSendAsCheckPageContent } from '~/core/types/DibodevGmailSendAsCheckPage'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import { computed } from 'vue'
import BlogRelatedArticles from '~/components/blog/BlogRelatedArticles.vue'
import DibodevCallout from '~/components/data-displays/DibodevCallout.vue'
import DibodevContactPrompt from '~/components/data-displays/DibodevContactPrompt.vue'
import DibodevMobileContactBar from '~/components/data-displays/DibodevMobileContactBar.vue'
import DibodevToolTeaser from '~/components/data-displays/DibodevToolTeaser.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevGmailSendAsChecker from '~/components/sections/DibodevGmailSendAsChecker.vue'
import DibodevGuaranteesSection from '~/components/sections/DibodevGuaranteesSection.vue'
import DibodevMethodSection from '~/components/sections/DibodevMethodSection.vue'
import DibodevNumberedGuideSection from '~/components/sections/DibodevNumberedGuideSection.vue'
import DibodevPriceListSection from '~/components/sections/DibodevPriceListSection.vue'
import DibodevReferenceTableSection from '~/components/sections/DibodevReferenceTableSection.vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevSourcedFactsSection from '~/components/sections/DibodevSourcedFactsSection.vue'
import DibodevToolLandingSection from '~/components/sections/DibodevToolLandingSection.vue'
import { useArticlesWithTranslations } from '~/composables/useArticlesWithTranslations'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { ORGANIZATION_ID, PERSON_ID } from '~/config/schema'
import {
  GMAIL_SEND_AS_CHECK_PAGE_UPDATED_AT,
  GMAIL_SEND_AS_CHECKER_ANCHOR_ID,
  GMAIL_SEND_AS_CONSUMER_MAILBOX_GUIDE_SLUG,
  GMAIL_SEND_AS_CONTACT_TOPIC,
  GMAIL_SEND_AS_HOST_GUIDE_ARTICLES,
  GMAIL_SEND_AS_RELATED_ARTICLE_SLUGS,
} from '~/core/constants/gmailSendAsCheck/pageShared'
import { GMAIL_SEND_AS_CHECK_PAGES } from '~/core/constants/gmailSendAsCheckPage'
import { EMAIL_DELIVERABILITY_CHECK_TEASER } from '~/core/constants/tools/toolTeasers'
import { WEBSITE_HEALTH_CHECK_TEASER } from '~/core/constants/websiteHealthCheck/pageShared'
import { ArticleSelectionUtils } from '~/core/utils/ArticleSelectionUtils'
import { SiteCheckContactUtils } from '~/core/utils/SiteCheckContactUtils'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/gmail-envoyer-en-tant-que-mon-adresse-est-elle-concernee',
      en: '/tools/gmail-send-mail-as-is-my-address-affected',
      es: '/herramientas/gmail-enviar-como-mi-direccion-esta-afectada',
    },
  },
})

const SITE_URL: string = 'https://dibodev.fr'
const ARTICLES_POOL_SIZE: number = 100
const TRACKING_LOCATION: string = 'gmail_send_as_check'
/** The two checks teased under the articles: whether the mails of the domain land in spam, and the whole site health. */
const NEXT_TOOL_TEASERS: DibodevToolTeaserContent[] = [EMAIL_DELIVERABILITY_CHECK_TEASER, WEBSITE_HEALTH_CHECK_TEASER]

const { t, locale }: { t: (key: string) => string; locale: WritableComputedRef<string> } = useI18n()
const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const route: ReturnType<typeof useRoute> = useRoute()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevGmailSendAsCheckPageContent = GMAIL_SEND_AS_CHECK_PAGES[pageLocale] ?? GMAIL_SEND_AS_CHECK_PAGES.fr
const prefilledContactRoute: string = localePath({
  path: '/contact',
  query: SiteCheckContactUtils.buildContactQuery(GMAIL_SEND_AS_CONTACT_TOPIC, null, null),
})

defineOgImageComponent(
  'DibodevToolShareImage',
  {
    titleLines: page.shareImage.titleLines,
    highlight: page.shareImage.highlight,
    subtitle: page.shareImage.subtitle,
    badge: page.shareImage.badge,
    icon: 'mail',
  },
  { alt: page.shareImage.alt },
)
const { data: articlesPool }: Awaited<ReturnType<typeof useArticlesWithTranslations>> =
  await useArticlesWithTranslations({
    perPage: ARTICLES_POOL_SIZE,
  })

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.tools'), to: localePath('tools') },
  { label: page.breadcrumbLabel, to: null },
])

const relatedArticles: ComputedRef<DibodevArticle[]> = computed((): DibodevArticle[] =>
  ArticleSelectionUtils.selectBySlugs(articlesPool.value ?? [], GMAIL_SEND_AS_RELATED_ARTICLE_SLUGS),
)

/** The published guide of each mail host: a guide not online yet (or not translated) gives no link in the result card. */
const hostGuides: ComputedRef<Partial<Record<DibodevEmailProviderKey, DibodevGmailSendAsHostGuide>>> = computed(
  (): Partial<Record<DibodevEmailProviderKey, DibodevGmailSendAsHostGuide>> => {
    const guides: Partial<Record<DibodevEmailProviderKey, DibodevGmailSendAsHostGuide>> = {}

    for (const guideArticle of GMAIL_SEND_AS_HOST_GUIDE_ARTICLES) {
      const guide: DibodevGmailSendAsHostGuide | null = findGuide(guideArticle.slug)

      if (guide) {
        guides[guideArticle.mailHost] = guide
      }
    }
    return guides
  },
)

const consumerMailboxGuide: ComputedRef<DibodevGmailSendAsHostGuide | null> = computed(
  (): DibodevGmailSendAsHostGuide | null => findGuide(GMAIL_SEND_AS_CONSUMER_MAILBOX_GUIDE_SLUG),
)

/**
 * Finds a published article of the blog and keeps what the result card needs to link it.
 * @param {string} slug - Storyblok slug of the article.
 * @returns {DibodevGmailSendAsHostGuide | null} Its title and route, or null when it is not online in this language.
 */
function findGuide(slug: string): DibodevGmailSendAsHostGuide | null {
  const article: DibodevArticle | undefined = ArticleSelectionUtils.selectBySlugs(articlesPool.value ?? [], [slug])[0]

  return article ? { title: article.title, to: article.route } : null
}

const schemaJson: string = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${route.path}#webpage`,
      url: `${SITE_URL}${route.path}`,
      name: page.meta.title,
      description: page.meta.description,
      inLanguage: page.meta.inLanguage,
      datePublished: GMAIL_SEND_AS_CHECK_PAGE_UPDATED_AT,
      dateModified: GMAIL_SEND_AS_CHECK_PAGE_UPDATED_AT,
      author: { '@id': PERSON_ID },
      publisher: { '@id': ORGANIZATION_ID },
      about: { '@type': 'Thing', name: page.meta.schemaAbout },
      abstract: page.summary.text,
      mainEntity: { '@id': `${SITE_URL}${route.path}#checker` },
    },
    {
      '@type': 'WebApplication',
      '@id': `${SITE_URL}${route.path}#checker`,
      name: page.breadcrumbLabel,
      description: page.meta.description,
      url: `${SITE_URL}${route.path}`,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web',
      inLanguage: page.meta.inLanguage,
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      author: { '@id': PERSON_ID },
      publisher: { '@id': ORGANIZATION_ID },
    },
  ],
})

useHead({
  title: page.meta.title,
  meta: [
    { name: 'description', content: page.meta.description },
    { property: 'og:title', content: page.meta.title },
    { property: 'og:description', content: page.meta.description },
  ],
  script: [{ type: 'application/ld+json', key: 'schema-gmail-send-as-check', innerHTML: schemaJson }],
})
</script>
