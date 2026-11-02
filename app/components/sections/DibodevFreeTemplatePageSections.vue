<template>
  <DibodevToolLandingSection
    :breadcrumbs="breadcrumbs"
    :titleBefore="props.page.hero.titleBefore"
    :titleHighlight="props.page.hero.titleHighlight"
    :titleAfter="props.page.hero.titleAfter"
    :aboutTitle="props.page.hero.aboutTitle"
    :description="props.page.hero.description"
    :reassurances="props.page.hero.reassurances"
    :authorIntro="props.page.hero.authorIntro"
    :authorBio="props.page.hero.authorBio"
    :updatedAt="props.page.hero.updatedAt"
  >
    <template #tool>
      <div
        id="telechargement"
        class="mx-auto grid w-full max-w-2xl gap-5 rounded-2xl border border-gray-300 bg-white p-6 shadow-[0_18px_48px_rgba(20,20,20,0.06)] sm:p-8"
      >
        <div class="grid gap-2">
          <p class="text-primary text-xs font-medium tracking-[0.08em] uppercase">{{ props.page.downloads.eyebrow }}</p>
          <p class="text-[15px] leading-6 text-gray-200">{{ props.page.downloads.lead }}</p>
        </div>
        <div class="grid gap-3 sm:grid-cols-2">
          <DibodevFreeTemplateDownloadLinks
            :downloads="props.page.downloads.files"
            :trackingLocation="props.trackingLocation"
          />
        </div>
        <p class="text-muted text-sm leading-6">{{ props.page.downloads.footnote }}</p>
      </div>
    </template>
  </DibodevToolLandingSection>

  <DibodevFreeTemplateDocumentsSection
    :anchorId="props.page.contents.anchorId"
    :eyebrow="props.page.contents.eyebrow"
    :title="props.page.contents.title"
    :intro="props.page.contents.intro"
    :documents="props.page.contents.documents"
    tone="offWhite"
  />

  <DibodevMethodSection
    :eyebrow="props.page.howToFill.eyebrow"
    :title="props.page.howToFill.title"
    :intro="props.page.howToFill.intro"
    :steps="props.page.howToFill.steps"
    tone="white"
  />

  <DibodevSourcedFactsSection
    :anchorId="props.page.rules.anchorId"
    :eyebrow="props.page.rules.eyebrow"
    :title="props.page.rules.title"
    :intro="props.page.rules.intro"
    :facts="props.page.rules.facts"
    tone="tint"
  >
    <template #footer>
      <div class="grid gap-4">
        <DibodevToolTeaser :teaser="props.teaser" :trackingLocation="props.trackingLocation" tone="white" />
        <DibodevToolTeaser
          v-if="props.tradeWebsiteTeaser"
          :teaser="props.tradeWebsiteTeaser"
          :trackingLocation="props.trackingLocation"
          tone="white"
        />
      </div>
    </template>
  </DibodevSourcedFactsSection>

  <DibodevFaqSection
    :eyebrow="props.page.faq.eyebrow"
    :title="props.page.faq.title"
    :questions="props.page.faq.questions"
  />

  <DibodevContactCtaSection
    :title="props.page.excelLimits.title"
    :description="props.page.excelLimits.description"
    :ctaText="props.page.excelLimits.button"
    :secondaryLink="toolPageLink"
    :trackingLocation="props.trackingLocation"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType, WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevContactCtaSecondaryLink } from '~/core/types/DibodevContactCtaSection'
import type { DibodevFreeTemplateHubPageContent } from '~/core/types/DibodevFreeTemplateHubPage'
import type {
  DibodevFreeTemplatePageContent,
  DibodevFreeTemplatePageSectionsProps,
} from '~/core/types/DibodevFreeTemplatePage'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import { computed } from 'vue'
import DibodevFreeTemplateDownloadLinks from '~/components/data-displays/DibodevFreeTemplateDownloadLinks.vue'
import DibodevToolTeaser from '~/components/data-displays/DibodevToolTeaser.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevFreeTemplateDocumentsSection from '~/components/sections/DibodevFreeTemplateDocumentsSection.vue'
import DibodevMethodSection from '~/components/sections/DibodevMethodSection.vue'
import DibodevSourcedFactsSection from '~/components/sections/DibodevSourcedFactsSection.vue'
import DibodevToolLandingSection from '~/components/sections/DibodevToolLandingSection.vue'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { PERSON_ID, ORGANIZATION_ID } from '~/config/schema'
import { FREE_TEMPLATES_HUB_ROUTE_NAME } from '~/core/constants/freeTemplates/freeTemplateCatalog'
import { FREE_TEMPLATES_HUB_PAGES } from '~/core/constants/freeTemplates/freeTemplatesHubPage'

const SITE_URL: string = 'https://dibodev.fr'

/**
 * Every section of a free template page (download buttons, contents, how to fill it in, trade rules, FAQ,
 * trade test, contact), with its head: meta tags, share image and WebPage JSON-LD.
 */
const props: DibodevFreeTemplatePageSectionsProps = defineProps({
  page: {
    type: Object as PropType<DibodevFreeTemplatePageContent>,
    required: true,
  },
  teaser: {
    type: Object as PropType<DibodevToolTeaserContent>,
    required: true,
  },
  trackingLocation: {
    type: String as PropType<string>,
    required: true,
  },
  tradeWebsiteTeaser: {
    type: Object as PropType<DibodevToolTeaserContent | null>,
    default: null,
  },
})

const { t, locale }: { t: (key: string) => string; locale: WritableComputedRef<string> } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const hubPage: DibodevFreeTemplateHubPageContent =
  FREE_TEMPLATES_HUB_PAGES[locale.value as SupportedLocale] ?? FREE_TEMPLATES_HUB_PAGES.fr
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

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.tools'), to: localePath('tools') },
  { label: hubPage.breadcrumbLabel, to: localePath({ name: FREE_TEMPLATES_HUB_ROUTE_NAME }) },
  { label: props.page.breadcrumbLabel, to: null },
])

/** The closing block also sends the visitor to the trade tool page (test, prices and comparison). */
const toolPageLink: ComputedRef<DibodevContactCtaSecondaryLink> = computed(
  (): DibodevContactCtaSecondaryLink => ({
    label: props.page.excelLimits.toolPageLinkLabel,
    to: localePath({ name: props.teaser.routeName }),
    toolId: props.teaser.toolId,
  }),
)

/** Author and update date tell search engines and AI assistants how fresh the template is. */
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
