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
    :updatedAt="PROJECT_SPECIFICATION_PAGE_UPDATED_AT"
  >
    <template #tool>
      <div
        :id="DOWNLOADS_ANCHOR_ID"
        class="mx-auto grid w-full max-w-2xl gap-5 rounded-2xl border border-gray-300 bg-white p-6 shadow-[0_18px_48px_rgba(20,20,20,0.06)] sm:p-8"
      >
        <div class="grid gap-2">
          <p class="text-primary text-xs font-medium tracking-[0.08em] uppercase">{{ props.page.downloads.eyebrow }}</p>
          <p class="text-[15px] leading-6 text-gray-200">{{ props.page.downloads.lead }}</p>
        </div>
        <div class="grid gap-3 sm:grid-cols-2">
          <a
            :href="props.files.docxPath"
            download
            class="bg-primary hover:bg-primary-dark focus-visible:ring-primary flex items-center gap-4 rounded-lg border border-transparent px-5 py-3.5 text-white transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            @click="trackDownload(props.files.docxPath)"
          >
            <DibodevIcon name="Download" mode="stroke" :width="20" :height="20" class="shrink-0" aria-hidden="true" />
            <span class="grid gap-0.5">
              <span class="text-[15px] leading-6 font-medium">{{ props.page.downloads.templateLabel }}</span>
              <span class="text-xs leading-5 opacity-80">{{ props.page.downloads.templateMeta }}</span>
            </span>
          </a>
          <a
            :href="props.files.pdfPath"
            download
            class="border-primary text-primary hover:bg-surface-tint focus-visible:ring-primary flex items-center gap-4 rounded-lg border bg-white px-5 py-3.5 transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            @click="trackDownload(props.files.pdfPath)"
          >
            <DibodevIcon name="Download" mode="stroke" :width="20" :height="20" class="shrink-0" aria-hidden="true" />
            <span class="grid gap-0.5">
              <span class="text-[15px] leading-6 font-medium">{{ props.page.downloads.exampleLabel }}</span>
              <span class="text-primary-dark text-xs leading-5 opacity-85">{{ props.page.downloads.exampleMeta }}</span>
            </span>
          </a>
        </div>
        <div class="grid gap-3 border-t border-gray-300 pt-5">
          <p class="text-[15px] leading-6 text-gray-200">{{ props.page.downloads.generatorText }}</p>
          <NuxtLink
            :to="generatorTo"
            class="text-primary hover:text-primary-dark inline-flex w-fit items-center gap-1.5 text-[15px] font-medium decoration-2 underline-offset-4 transition-colors hover:underline"
            @click="trackGeneratorClick"
          >
            {{ props.page.downloads.generatorLinkLabel }}
            <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" aria-hidden="true" />
          </NuxtLink>
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

  <DibodevProjectSpecificationExampleSection
    :eyebrow="props.page.example.eyebrow"
    :title="props.page.example.title"
    :intro="props.page.example.intro"
    :specification="exampleSpecification"
    :expandLabel="props.page.example.expandLabel"
    :collapseLabel="props.page.example.collapseLabel"
    :generatorLinkLabel="props.page.example.generatorLinkLabel"
    :generatorTo="generatorTo"
    tone="white"
  />

  <DibodevSitemapTreeSection
    anchorId="plan"
    :eyebrow="props.page.sitemap.eyebrow"
    :title="props.page.sitemap.title"
    :intro="props.page.sitemap.intro"
    :ariaLabel="props.page.sitemap.ariaLabel"
    :rootLabel="props.page.sitemap.rootLabel"
    :branches="props.page.sitemap.branches"
    :footerNote="props.page.sitemap.footerNote"
    :notes="props.page.sitemap.notes"
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
  />

  <DibodevFaqSection
    :eyebrow="props.page.faq.eyebrow"
    :title="props.page.faq.title"
    :questions="props.page.faq.questions"
  />

  <DibodevIconCardsSection
    anchorId="autres-modeles"
    :eyebrow="props.page.otherTemplates.eyebrow"
    :title="props.page.otherTemplates.title"
    :cards="otherTemplateCards"
    :columns="4"
    :highlightedKey="GENERATOR_CARD_KEY"
    :trackingLocation="PROJECT_SPECIFICATION_TEMPLATE_TRACKING_LOCATION"
    tone="offWhite"
  />

  <DibodevContactCtaSection
    :title="props.page.contactCta.title"
    :description="props.page.contactCta.description"
    :ctaText="props.page.contactCta.button"
    :trackingLocation="PROJECT_SPECIFICATION_TEMPLATE_TRACKING_LOCATION"
  />

  <DibodevMobileContactBar
    :text="props.page.mobileBar.text"
    :buttonLabel="props.page.mobileBar.button"
    :to="{ hash: `#${DOWNLOADS_ANCHOR_ID}` }"
    :trackingLocation="PROJECT_SPECIFICATION_TEMPLATE_TRACKING_LOCATION"
    :hiddenWhileVisibleId="DOWNLOADS_ANCHOR_ID"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef, PropType } from 'vue'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevIconCard } from '~/core/types/DibodevIconCardsSection'
import type {
  DibodevProjectSpecificationDocument,
  DibodevProjectSpecificationWording,
} from '~/core/types/DibodevProjectSpecification'
import type {
  DibodevProjectSpecificationGeneratorPageContent,
  DibodevProjectSpecificationTemplateCard,
  DibodevProjectSpecificationTemplateFiles,
  DibodevProjectSpecificationTemplatePageContent,
} from '~/core/types/DibodevProjectSpecificationPage'
import type { DibodevProjectSpecificationTemplatePageSectionsProps } from '~/core/types/DibodevProjectSpecificationTemplatePageSections'
import { computed } from 'vue'
import DibodevProjectSpecificationExampleSection from '~/components/project-specification/DibodevProjectSpecificationExampleSection.vue'
import DibodevMobileContactBar from '~/components/data-displays/DibodevMobileContactBar.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevFreeTemplateDocumentsSection from '~/components/sections/DibodevFreeTemplateDocumentsSection.vue'
import DibodevIconCardsSection from '~/components/sections/DibodevIconCardsSection.vue'
import DibodevMethodSection from '~/components/sections/DibodevMethodSection.vue'
import DibodevSitemapTreeSection from '~/components/sections/DibodevSitemapTreeSection.vue'
import DibodevSourcedFactsSection from '~/components/sections/DibodevSourcedFactsSection.vue'
import DibodevToolLandingSection from '~/components/sections/DibodevToolLandingSection.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { useTracking } from '~/composables/useTracking'
import { ORGANIZATION_ID, PERSON_ID } from '~/config/schema'
import {
  PROJECT_SPECIFICATION_CARD_TONES,
  PROJECT_SPECIFICATION_PAGE_UPDATED_AT,
  PROJECT_SPECIFICATION_ROUTE_NAME,
  PROJECT_SPECIFICATION_TEMPLATE_ROUTE_NAMES,
  PROJECT_SPECIFICATION_TEMPLATE_TRACKING_LOCATION,
} from '~/core/constants/projectSpecification/pageShared'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { ProjectSpecificationDocumentUtils } from '~/core/utils/ProjectSpecificationDocumentUtils'
import { DOCX_MIME_TYPE } from '~/core/utils/ProjectSpecificationDocxUtils'

const SITE_URL: string = 'https://dibodev.fr'
const DOWNLOADS_ANCHOR_ID: string = 'telechargement'
const GENERATOR_CARD_KEY: string = 'project-specification'

const props: DibodevProjectSpecificationTemplatePageSectionsProps = defineProps({
  page: {
    type: Object as PropType<DibodevProjectSpecificationTemplatePageContent>,
    required: true,
  },
  generatorPage: {
    type: Object as PropType<DibodevProjectSpecificationGeneratorPageContent>,
    required: true,
  },
  wording: {
    type: Object as PropType<DibodevProjectSpecificationWording>,
    required: true,
  },
  files: {
    type: Object as PropType<DibodevProjectSpecificationTemplateFiles>,
    required: true,
  },
  languageTag: {
    type: String as PropType<string>,
    required: true,
  },
})

const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const { track } = useTracking()

defineOgImageComponent(
  'DibodevToolShareImage',
  {
    titleLines: props.page.shareImage.titleLines,
    highlight: props.page.shareImage.highlight,
    subtitle: props.page.shareImage.subtitle,
    badge: props.page.shareImage.badge,
    icon: 'fileText',
  },
  { alt: props.page.shareImage.alt },
)

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.tools'), to: localePath('tools') },
  { label: props.generatorPage.breadcrumbLabel, to: localePath(PROJECT_SPECIFICATION_ROUTE_NAME) },
  { label: props.page.breadcrumbLabel, to: null },
])

const generatorTo: ComputedRef<string> = computed((): string =>
  localePath({ name: PROJECT_SPECIFICATION_ROUTE_NAME, query: { type: props.page.projectType } }),
)

/** The example is written by the generator itself, dated from the last review of the page. */
const exampleSpecification: ComputedRef<DibodevProjectSpecificationDocument> = computed(
  (): DibodevProjectSpecificationDocument =>
    ProjectSpecificationDocumentUtils.build(
      props.page.example.answers,
      props.wording,
      new Intl.DateTimeFormat(props.languageTag, { day: 'numeric', month: 'long', year: 'numeric' }).format(
        new Date(`${PROJECT_SPECIFICATION_PAGE_UPDATED_AT}T12:00:00Z`),
      ),
    ),
)

const otherTemplateCards: ComputedRef<DibodevIconCard[]> = computed((): DibodevIconCard[] => [
  ...props.generatorPage.templates.cards
    .filter((card: DibodevProjectSpecificationTemplateCard): boolean => card.projectType !== props.page.projectType)
    .map(
      (card: DibodevProjectSpecificationTemplateCard): DibodevIconCard => ({
        key: `template-${card.projectType}`,
        icon: props.wording.types[card.projectType].icon,
        iconTone: PROJECT_SPECIFICATION_CARD_TONES[card.projectType],
        eyebrow: card.eyebrow,
        title: card.title,
        text: card.text,
        note: card.note,
        link: {
          label: props.generatorPage.templates.linkLabel,
          to: localePath(PROJECT_SPECIFICATION_TEMPLATE_ROUTE_NAMES[card.projectType]),
        },
      }),
    ),
  {
    key: GENERATOR_CARD_KEY,
    icon: 'ClipboardCheck',
    iconTone: 'violet',
    eyebrow: props.page.otherTemplates.generatorCard.eyebrow,
    title: props.page.otherTemplates.generatorCard.title,
    text: props.page.otherTemplates.generatorCard.text,
    note: props.page.otherTemplates.generatorCard.note,
    link: { label: props.page.otherTemplates.generatorLinkLabel, to: generatorTo.value },
  },
])

const webPageSchemaJson: ComputedRef<string> = computed((): string =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}${route.path}#webpage`,
    url: `${SITE_URL}${route.path}`,
    name: props.page.meta.title,
    description: props.page.meta.description,
    inLanguage: props.page.meta.inLanguage,
    dateModified: PROJECT_SPECIFICATION_PAGE_UPDATED_AT,
    author: { '@id': PERSON_ID },
    publisher: { '@id': ORGANIZATION_ID },
    about: { '@type': 'Thing', name: props.page.meta.schemaAbout },
    hasPart: [
      {
        '@type': 'DigitalDocument',
        name: props.page.downloads.templateLabel,
        url: `${SITE_URL}${props.files.docxPath}`,
        encodingFormat: DOCX_MIME_TYPE,
        isAccessibleForFree: true,
      },
      {
        '@type': 'DigitalDocument',
        name: props.page.downloads.exampleLabel,
        url: `${SITE_URL}${props.files.pdfPath}`,
        encodingFormat: 'application/pdf',
        isAccessibleForFree: true,
      },
    ],
  }),
)

/**
 * Sends the download of a template file to PostHog.
 * @param {string} filePath - The file downloaded.
 * @returns {void}
 */
function trackDownload(filePath: string): void {
  track(TRACKING_EVENTS.fileDownloadClicked, {
    file: filePath.split('/').pop() ?? filePath,
    location: PROJECT_SPECIFICATION_TEMPLATE_TRACKING_LOCATION,
  })
}

/**
 * Sends the click towards the generator to PostHog, as the teasers of the other tools do.
 * @returns {void}
 */
function trackGeneratorClick(): void {
  track(TRACKING_EVENTS.toolTeaserClicked, {
    tool: GENERATOR_CARD_KEY,
    location: PROJECT_SPECIFICATION_TEMPLATE_TRACKING_LOCATION,
  })
}

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
