import type { DibodevProjectSpecificationWording } from '~/core/types/DibodevProjectSpecification'
import type {
  DibodevProjectSpecificationGeneratorPageContent,
  DibodevProjectSpecificationTemplateFiles,
  DibodevProjectSpecificationTemplatePageContent,
} from '~/core/types/DibodevProjectSpecificationPage'

/**
 * Props of every section of a specification template page.
 * @type {DibodevProjectSpecificationTemplatePageSectionsProps}
 * @property {DibodevProjectSpecificationTemplatePageContent} page - The content of this template page.
 * @property {DibodevProjectSpecificationGeneratorPageContent} generatorPage - The generator page content of the same language (breadcrumb, template cards).
 * @property {DibodevProjectSpecificationWording} wording - The generator texts, to write the filled example.
 * @property {DibodevProjectSpecificationTemplateFiles} files - The Word template and the PDF example of this page.
 * @property {string} languageTag - BCP 47 tag of the page language, for the date of the example.
 */
export type DibodevProjectSpecificationTemplatePageSectionsProps = {
  page: DibodevProjectSpecificationTemplatePageContent
  generatorPage: DibodevProjectSpecificationGeneratorPageContent
  wording: DibodevProjectSpecificationWording
  files: DibodevProjectSpecificationTemplateFiles
  languageTag: string
}
