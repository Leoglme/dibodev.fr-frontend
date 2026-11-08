import type {
  DibodevLegalNoticeAnalytics,
  DibodevLegalNoticeAnswers,
  DibodevLegalNoticeCompanyForm,
  DibodevLegalNoticeDataFeature,
  DibodevLegalNoticeDocument,
  DibodevLegalNoticeDocumentKind,
  DibodevLegalNoticeFieldId,
  DibodevLegalNoticePaymentProvider,
  DibodevLegalNoticeQuestionStep,
  DibodevLegalNoticeRegistry,
  DibodevLegalNoticeStatus,
  DibodevLegalNoticeTextFieldKey,
  DibodevLegalNoticeThirdPartyContent,
  DibodevLegalNoticeVatRegime,
} from '~/core/types/DibodevLegalNotice'

export type DibodevLegalNoticeChoiceWording = {
  label: string
  description: string
}

/** Label, example and optional help line of a text field. */
export type DibodevLegalNoticeFieldWording = {
  label: string
  placeholder: string
  help: string
}

/** Texts of the result screen. */
export type DibodevLegalNoticeResultWording = {
  eyebrow: string
  title: string
  text: string
  copyLegalNotice: string
  copyPrivacyPolicy: string
  copied: string
  copyFailed: string
  downloadWord: string
  printPdf: string
  pdfHelp: string
  editAnswers: string
  reviewTitle: string
  reviewIntro: string
  reviewEmpty: string
  ctaTitle: string
  ctaText: string
  ctaButton: string
  gdprCheckLabel: string
}

/** Texts around the live preview; `missingCount` uses `{count}`. */
export type DibodevLegalNoticePreviewWording = {
  liveLabel: string
  label: string
  documentLinks: Record<DibodevLegalNoticeDocumentKind, string>
  frenchOnlyNote: string
  missingCount: string
  noneMissing: string
}

/** Bar fixed at the bottom of small screens; `previewText` uses `{count}`. */
export type DibodevLegalNoticeMobileBarWording = {
  previewText: string
  previewButton: string
  readingText: string
  readingButton: string
  readyText: string
  readyButton: string
}

/** Interface texts of the generator in one language: the documents themselves stay in French. */
export type DibodevLegalNoticeGeneratorWording = {
  back: string
  next: string
  seeResult: string
  stepCounter: string
  finishedCounter: string
  progressLabel: string
  hint: string
  yes: string
  no: string
  steps: Record<DibodevLegalNoticeQuestionStep, { title: string; help: string }>
  statusQuestion: string
  statuses: Record<DibodevLegalNoticeStatus, DibodevLegalNoticeChoiceWording>
  companyFormLabel: string
  companyForms: Record<DibodevLegalNoticeCompanyForm, string>
  nameLabels: Record<DibodevLegalNoticeStatus, string>
  addressLabels: Record<DibodevLegalNoticeStatus, string>
  fields: Record<DibodevLegalNoticeTextFieldKey, DibodevLegalNoticeFieldWording>
  hideAddressLabel: string
  hideAddressHelp: string
  professionalAddressNote: string
  phoneNote: string
  registryQuestion: string
  registries: Record<DibodevLegalNoticeRegistry, string>
  vatQuestion: string
  vatRegimes: Record<DibodevLegalNoticeVatRegime, string>
  noRegistrationText: string
  hostingQuestion: string
  hostingOtherLabel: string
  hostingPrefilledNote: string
  hostingIncompleteNote: string
  hostingPlatformNote: string
  dataFeaturesQuestion: string
  dataFeatures: Record<DibodevLegalNoticeDataFeature, string>
  paymentQuestion: string
  paymentProviders: Record<DibodevLegalNoticePaymentProvider, string>
  analyticsQuestion: string
  analyticsOptions: Record<DibodevLegalNoticeAnalytics, DibodevLegalNoticeChoiceWording>
  thirdPartyQuestion: string
  thirdPartyContents: Record<DibodevLegalNoticeThirdPartyContent, string>
  consentToolQuestion: string
  dpoQuestion: string
  dpoHelp: string
  consumerSalesQuestion: string
  consumerSalesHelp: string
  missingFieldLabels: Record<DibodevLegalNoticeFieldId, string>
  result: DibodevLegalNoticeResultWording
  preview: DibodevLegalNoticePreviewWording
  mobileBar: DibodevLegalNoticeMobileBarWording
}

/** What the visitor looks at on a small screen, which sets the text and the target of the bar at the bottom. */
export type DibodevLegalNoticeMobileBarMode = 'preview' | 'questions' | 'ready'

/**
 * Props of the legal notice generator.
 * @type {DibodevLegalNoticeGeneratorProps}
 * @property {DibodevLegalNoticeGeneratorWording} wording - Interface texts of the page language.
 * @property {string} anchorId - Id of the generator, targeted by the links that lead to it.
 * @property {string} trackingLocation - `location` sent with the PostHog events of the generator.
 */
export type DibodevLegalNoticeGeneratorProps = {
  wording: DibodevLegalNoticeGeneratorWording
  anchorId: string
  trackingLocation: string
}

/**
 * Props of the questions of one step.
 * @type {DibodevLegalNoticeQuestionsProps}
 * @property {DibodevLegalNoticeQuestionStep} step - The step shown.
 * @property {DibodevLegalNoticeAnswers} answers - The answers given so far.
 * @property {DibodevLegalNoticeGeneratorWording} wording - Interface texts of the page language.
 */
export type DibodevLegalNoticeQuestionsProps = {
  step: DibodevLegalNoticeQuestionStep
  answers: DibodevLegalNoticeAnswers
  wording: DibodevLegalNoticeGeneratorWording
}

export type DibodevLegalNoticeQuestionsExposed = {
  focusHeading: () => void
}

export type DibodevLegalNoticeTextFieldInputType = 'text' | 'email' | 'tel' | 'url'

/**
 * Props of a text field of the generator.
 * @type {DibodevLegalNoticeTextFieldProps}
 * @property {string} inputId - Id of the input, tied to its label and help line.
 * @property {string} label - Visible label.
 * @property {string} value - Current value.
 * @property {string} placeholder - Example shown while empty.
 * @property {string} help - Help line under the input, empty for none.
 * @property {DibodevLegalNoticeTextFieldInputType} inputType - Type of the input, for the mobile keyboard.
 * @property {string} autocomplete - Browser autocomplete hint.
 * @property {number} maxLength - Most characters accepted.
 */
export type DibodevLegalNoticeTextFieldProps = {
  inputId: string
  label: string
  value: string
  placeholder: string
  help: string
  inputType: DibodevLegalNoticeTextFieldInputType
  autocomplete: string
  maxLength: number
}

/**
 * Props of one rendered document.
 * @type {DibodevLegalNoticeSheetProps}
 * @property {DibodevLegalNoticeDocument} document - The document to show.
 * @property {string} anchorId - Id of the sheet, for the links above the preview.
 */
export type DibodevLegalNoticeSheetProps = {
  document: DibodevLegalNoticeDocument
  anchorId: string
}
