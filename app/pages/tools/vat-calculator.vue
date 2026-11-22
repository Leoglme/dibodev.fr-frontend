<template>
  <DibodevToolLandingSection
    :breadcrumbs="breadcrumbs"
    :titleBefore="page.hero.titleBefore"
    :titleHighlight="page.hero.titleHighlight"
    :titleAfter="page.hero.titleAfter"
    :aboutTitle="page.hero.aboutTitle"
    :description="page.hero.description"
    :reassurances="page.hero.reassurances"
    :authorIntro="page.hero.authorIntro"
    :authorBio="page.hero.authorBio"
    :updatedAt="VAT_CALCULATOR_PAGE_UPDATED_AT"
    contentWidth="wide"
  >
    <template #tool>
      <DibodevVatCalculator
        :anchorId="VAT_CALCULATOR_ANCHOR_ID"
        :wording="page.calculator"
        :numberLocale="page.numberLocale"
        :trackingLocation="TRACKING_LOCATION"
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
        <time :datetime="VAT_CALCULATOR_PAGE_UPDATED_AT">{{ page.summary.dateLabel }}</time>
      </p>
    </div>
  </section>

  <DibodevMethodSection
    :eyebrow="page.method.eyebrow"
    :title="page.method.title"
    :intro="page.method.intro"
    :steps="page.method.steps"
    tone="offWhite"
  />

  <DibodevSourcedFactsSection
    :anchorId="page.rules.anchorId"
    :eyebrow="page.rules.eyebrow"
    :title="page.rules.title"
    :intro="page.rules.intro"
    :facts="page.rules.facts"
    tone="white"
  >
    <template #footer>
      <DibodevCallout
        icon="Info"
        :emphasizedIntro="page.rules.calloutEmphasizedIntro"
        :text="page.rules.calloutText"
        tone="tint"
      />
    </template>
  </DibodevSourcedFactsSection>

  <DibodevFaqSection :eyebrow="page.faq.eyebrow" :title="page.faq.title" :questions="page.faq.questions" tone="tint" />

  <section class="bg-white px-6 py-16 sm:px-8 lg:py-20">
    <div class="mx-auto grid w-full max-w-3xl gap-6">
      <DibodevSectionHeading
        :eyebrow="page.templates.eyebrow"
        :title="page.templates.title"
        :intro="page.templates.intro"
      />
      <ul class="grid gap-4 sm:grid-cols-2">
        <li v-for="templateLink in page.templates.links" :key="templateLink.routeName">
          <NuxtLink
            :to="localePath({ name: templateLink.routeName })"
            class="hover:border-primary focus-visible:border-primary grid h-full content-start gap-2 rounded-2xl border border-gray-300 bg-white p-6 transition-colors focus-visible:outline-none"
          >
            <span class="flex items-center gap-2 text-lg font-medium text-gray-100">
              <DibodevIcon
                name="FileSpreadsheet"
                mode="stroke"
                :width="20"
                :height="20"
                class="text-muted shrink-0"
                aria-hidden="true"
              />
              {{ templateLink.title }}
            </span>
            <span class="text-[15px] leading-6 text-gray-200">{{ templateLink.description }}</span>
            <span class="text-primary mt-1 inline-flex items-center gap-1.5 text-[15px] font-medium">
              {{ templateLink.linkLabel }}
              <DibodevIcon name="ArrowRight" mode="stroke" :width="16" :height="16" aria-hidden="true" />
            </span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>

  <DibodevContactCtaSection
    :title="page.contactCta.title"
    :description="page.contactCta.description"
    :ctaText="page.contactCta.button"
    :trackingLocation="`${TRACKING_LOCATION}_contact_cta`"
  />
</template>

<script lang="ts" setup>
import type { ComputedRef, WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevBreadcrumbItem } from '~/core/types/DibodevBreadcrumb'
import type { DibodevVatCalculatorPageContent } from '~/core/types/DibodevVatCalculatorPage'
import DibodevCallout from '~/components/data-displays/DibodevCallout.vue'
import DibodevContactCtaSection from '~/components/sections/DibodevContactCtaSection.vue'
import DibodevFaqSection from '~/components/sections/DibodevFaqSection.vue'
import DibodevMethodSection from '~/components/sections/DibodevMethodSection.vue'
import DibodevSectionHeading from '~/components/sections/DibodevSectionHeading.vue'
import DibodevSourcedFactsSection from '~/components/sections/DibodevSourcedFactsSection.vue'
import DibodevToolLandingSection from '~/components/sections/DibodevToolLandingSection.vue'
import DibodevVatCalculator from '~/components/sections/DibodevVatCalculator.vue'
import DibodevIcon from '~/components/ui/DibodevIcon.vue'
import { useBreadcrumbTrail } from '~/composables/useBreadcrumbTrail'
import { ORGANIZATION_ID, PERSON_ID } from '~/config/schema'
import { VAT_CALCULATOR_ANCHOR_ID, VAT_CALCULATOR_PAGE_UPDATED_AT } from '~/core/constants/vatCalculator/pageShared'
import { VAT_CALCULATOR_PAGES } from '~/core/constants/vatCalculatorPage'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/calcul-tva-ht-ttc',
      en: '/tools/vat-calculator',
      es: '/herramientas/calculadora-iva-francia',
    },
  },
})

const SITE_URL: string = 'https://dibodev.fr'
const TRACKING_LOCATION: string = 'vat_calculator'

const { t, locale }: { t: (key: string) => string; locale: WritableComputedRef<string> } = useI18n()
const localePath: ReturnType<typeof useLocalePath> = useLocalePath()
const route: ReturnType<typeof useRoute> = useRoute()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevVatCalculatorPageContent = VAT_CALCULATOR_PAGES[pageLocale] ?? VAT_CALCULATOR_PAGES.fr

defineOgImageComponent(
  'DibodevToolShareImage',
  {
    titleLines: page.shareImage.titleLines,
    highlight: page.shareImage.highlight,
    subtitle: page.shareImage.subtitle,
    badge: page.shareImage.badge,
    icon: 'receipt',
  },
  { alt: page.shareImage.alt },
)

const breadcrumbs: ComputedRef<DibodevBreadcrumbItem[]> = useBreadcrumbTrail((): DibodevBreadcrumbItem[] => [
  { label: t('nav.tools'), to: localePath('tools') },
  { label: page.breadcrumbLabel, to: null },
])

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
      datePublished: VAT_CALCULATOR_PAGE_UPDATED_AT,
      dateModified: VAT_CALCULATOR_PAGE_UPDATED_AT,
      author: { '@id': PERSON_ID },
      publisher: { '@id': ORGANIZATION_ID },
      about: { '@type': 'Thing', name: page.meta.schemaAbout },
      abstract: page.summary.text,
      mainEntity: { '@id': `${SITE_URL}${route.path}#calculator` },
    },
    {
      '@type': 'WebApplication',
      '@id': `${SITE_URL}${route.path}#calculator`,
      name: page.breadcrumbLabel,
      description: page.meta.description,
      url: `${SITE_URL}${route.path}`,
      applicationCategory: 'BusinessApplication',
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
  script: [{ type: 'application/ld+json', key: 'schema-vat-calculator', innerHTML: schemaJson }],
})
</script>
