import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevIconCardTone } from '~/core/types/DibodevIconCardsSection'
import type { DibodevProjectSpecificationProjectType } from '~/core/types/DibodevProjectSpecification'
import type { DibodevProjectSpecificationTemplateFiles } from '~/core/types/DibodevProjectSpecificationPage'
import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import { NBSP } from '~/core/constants/typography'

export const PROJECT_SPECIFICATION_ROUTE_NAME: string = 'tools-project-specification'

/** The four project types, in the order of the generator and of the template cards. */
export const PROJECT_SPECIFICATION_PROJECT_TYPES: DibodevProjectSpecificationProjectType[] = [
  'showcaseWebsite',
  'onlineStore',
  'businessSoftware',
  'mobileApp',
]

export const PROJECT_SPECIFICATION_CARD_TONES: Record<DibodevProjectSpecificationProjectType, DibodevIconCardTone> = {
  showcaseWebsite: 'violet',
  onlineStore: 'green',
  businessSoftware: 'cyan',
  mobileApp: 'amber',
}

export const PROJECT_SPECIFICATION_TEMPLATE_ROUTE_NAMES: Record<DibodevProjectSpecificationProjectType, string> = {
  showcaseWebsite: 'tools-project-specification-showcase-website',
  onlineStore: 'tools-project-specification-online-store',
  businessSoftware: 'tools-project-specification-business-software',
  mobileApp: 'tools-project-specification-mobile-app',
}

/** Move it when the files, the examples or the facts change: the PDF examples and the JSON-LD carry this date. */
export const PROJECT_SPECIFICATION_PAGE_UPDATED_AT: string = '2026-11-02'

export const PROJECT_SPECIFICATION_GENERATOR_ANCHOR_ID: string = 'generateur'

export const PROJECT_SPECIFICATION_TRACKING_LOCATION: string = 'project_specification'
export const PROJECT_SPECIFICATION_TEMPLATE_TRACKING_LOCATION: string = 'project_specification_template'

export const PROJECT_SPECIFICATION_LANGUAGE_TAGS: Record<SupportedLocale, string> = {
  fr: 'fr-FR',
  en: 'en-GB',
  es: 'es-ES',
}

/** Built from the document engine: build them again after any change of wording or of an example. */
export const PROJECT_SPECIFICATION_TEMPLATE_FILES: Record<
  SupportedLocale,
  Record<DibodevProjectSpecificationProjectType, DibodevProjectSpecificationTemplateFiles>
> = {
  fr: {
    showcaseWebsite: {
      docxPath: '/modeles/cahier-des-charges-site-vitrine.docx',
      pdfPath: '/modeles/cahier-des-charges-site-vitrine-exemple.pdf',
    },
    onlineStore: {
      docxPath: '/modeles/cahier-des-charges-e-commerce.docx',
      pdfPath: '/modeles/cahier-des-charges-e-commerce-exemple.pdf',
    },
    businessSoftware: {
      docxPath: '/modeles/cahier-des-charges-application-metier.docx',
      pdfPath: '/modeles/cahier-des-charges-application-metier-exemple.pdf',
    },
    mobileApp: {
      docxPath: '/modeles/cahier-des-charges-application-mobile.docx',
      pdfPath: '/modeles/cahier-des-charges-application-mobile-exemple.pdf',
    },
  },
  en: {
    showcaseWebsite: {
      docxPath: '/modeles/project-brief-showcase-website.docx',
      pdfPath: '/modeles/project-brief-showcase-website-example.pdf',
    },
    onlineStore: {
      docxPath: '/modeles/project-brief-online-store.docx',
      pdfPath: '/modeles/project-brief-online-store-example.pdf',
    },
    businessSoftware: {
      docxPath: '/modeles/project-brief-business-software.docx',
      pdfPath: '/modeles/project-brief-business-software-example.pdf',
    },
    mobileApp: {
      docxPath: '/modeles/project-brief-mobile-app.docx',
      pdfPath: '/modeles/project-brief-mobile-app-example.pdf',
    },
  },
  es: {
    showcaseWebsite: {
      docxPath: '/modeles/pliego-de-condiciones-web-corporativa.docx',
      pdfPath: '/modeles/pliego-de-condiciones-web-corporativa-ejemplo.pdf',
    },
    onlineStore: {
      docxPath: '/modeles/pliego-de-condiciones-tienda-online.docx',
      pdfPath: '/modeles/pliego-de-condiciones-tienda-online-ejemplo.pdf',
    },
    businessSoftware: {
      docxPath: '/modeles/pliego-de-condiciones-software-de-gestion.docx',
      pdfPath: '/modeles/pliego-de-condiciones-software-de-gestion-ejemplo.pdf',
    },
    mobileApp: {
      docxPath: '/modeles/pliego-de-condiciones-app-movil.docx',
      pdfPath: '/modeles/pliego-de-condiciones-app-movil-ejemplo.pdf',
    },
  },
}

export const PROJECT_SPECIFICATION_TEASER: DibodevToolTeaserContent = {
  toolId: 'project-specification',
  routeName: PROJECT_SPECIFICATION_ROUTE_NAME,
  icon: 'ClipboardCheck',
  wording: {
    fr: {
      emphasizedIntro: `Vous préparez un site ou une application${NBSP}?`,
      text: `Répondez à cinq questions${NBSP}: votre cahier des charges se rédige en direct, prêt à envoyer aux prestataires, en Word ou en PDF.`,
      linkLabel: 'Rédiger mon cahier des charges en 5 minutes',
      listLabel: 'Mon cahier des charges en 5 minutes',
      hubDescription: `Site vitrine, e-commerce, application métier ou mobile${NBSP}: le document à envoyer aux prestataires, rédigé à partir de vos réponses.`,
      hubMeta: '5 questions, Word et PDF',
    },
    en: {
      emphasizedIntro: 'Planning a website or an app?',
      text: 'Answer five questions: your project brief writes itself as you go, ready to send to providers, in Word or PDF.',
      linkLabel: 'Write my project brief in 5 minutes',
      listLabel: 'My project brief in 5 minutes',
      hubDescription:
        'Showcase website, online store, business software or mobile app: the document to send to providers, written from your answers.',
      hubMeta: '5 questions, Word and PDF',
    },
    es: {
      emphasizedIntro: '¿Preparas una web o una aplicación?',
      text: 'Responde a cinco preguntas: tu pliego de condiciones se redacta en directo, listo para enviar a los proveedores, en Word o en PDF.',
      linkLabel: 'Redactar mi pliego de condiciones en 5 minutos',
      listLabel: 'Mi pliego de condiciones en 5 minutos',
      hubDescription:
        'Web corporativa, tienda online, software de gestión o app móvil: el documento para enviar a los proveedores, redactado a partir de tus respuestas.',
      hubMeta: '5 preguntas, Word y PDF',
    },
  },
}
