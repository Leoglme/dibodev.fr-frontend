<template>
  <DibodevProjectSpecificationTemplatePageSections
    :page="page"
    :generatorPage="generatorPage"
    :wording="wording"
    :files="PROJECT_SPECIFICATION_TEMPLATE_FILES[pageLocale].businessSoftware"
    :languageTag="PROJECT_SPECIFICATION_LANGUAGE_TAGS[pageLocale]"
  />
</template>

<script lang="ts" setup>
import type { WritableComputedRef } from 'vue'
import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevProjectSpecificationWording } from '~/core/types/DibodevProjectSpecification'
import type {
  DibodevProjectSpecificationGeneratorPageContent,
  DibodevProjectSpecificationTemplatePageContent,
} from '~/core/types/DibodevProjectSpecificationPage'
import DibodevProjectSpecificationTemplatePageSections from '~/components/project-specification/DibodevProjectSpecificationTemplatePageSections.vue'
import {
  PROJECT_SPECIFICATION_LANGUAGE_TAGS,
  PROJECT_SPECIFICATION_TEMPLATE_FILES,
} from '~/core/constants/projectSpecification/pageShared'
import {
  PROJECT_SPECIFICATION_GENERATOR_PAGES,
  PROJECT_SPECIFICATION_TEMPLATE_PAGES,
  PROJECT_SPECIFICATION_WORDINGS,
} from '~/core/constants/projectSpecification/projectSpecificationPages'

definePageMeta({
  i18n: {
    paths: {
      fr: '/outils/cahier-des-charges/application-metier',
      en: '/tools/project-brief/business-software',
      es: '/herramientas/pliego-de-condiciones/software-de-gestion',
    },
  },
})

/** Template page of the application métier specification: Word template, filled example, plan, rules and FAQ. */
const { locale }: { locale: WritableComputedRef<string> } = useI18n()
const pageLocale: SupportedLocale = (locale.value as SupportedLocale) || 'fr'
const page: DibodevProjectSpecificationTemplatePageContent =
  PROJECT_SPECIFICATION_TEMPLATE_PAGES.businessSoftware[pageLocale] ??
  PROJECT_SPECIFICATION_TEMPLATE_PAGES.businessSoftware.fr
const generatorPage: DibodevProjectSpecificationGeneratorPageContent =
  PROJECT_SPECIFICATION_GENERATOR_PAGES[pageLocale] ?? PROJECT_SPECIFICATION_GENERATOR_PAGES.fr
const wording: DibodevProjectSpecificationWording =
  PROJECT_SPECIFICATION_WORDINGS[pageLocale] ?? PROJECT_SPECIFICATION_WORDINGS.fr
</script>
