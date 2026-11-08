/** Who publishes the website: the legal notice changes with each status. */
export type DibodevLegalNoticeStatus = 'micro' | 'company' | 'association' | 'liberal' | 'individual'

export type DibodevLegalNoticeCompanyForm = 'sarl' | 'eurl' | 'sas' | 'sasu' | 'sa'

/** Register of the business: trade and companies register, national register of businesses, or none. */
export type DibodevLegalNoticeRegistry = 'rcs' | 'rne' | 'none'

/** VAT number, VAT exemption for small businesses (article 293 B of the French tax code), or not concerned. */
export type DibodevLegalNoticeVatRegime = 'number' | 'franchise' | 'none'

export type DibodevLegalNoticeHostingProviderKey =
  | 'ovhcloud'
  | 'o2switch'
  | 'ionos'
  | 'hostinger'
  | 'infomaniak'
  | 'planethoster'
  | 'lws'
  | 'gandi'
  | 'scaleway'
  | 'wix'
  | 'shopify'
  | 'wordpressCom'
  | 'other'

export type DibodevLegalNoticeDataFeature =
  | 'contactForm'
  | 'booking'
  | 'newsletter'
  | 'customerAccount'
  | 'onlinePayment'

export type DibodevLegalNoticePaymentProvider = 'stripe' | 'paypal' | 'other'

/** No audience measurement, a tool set up for the consent exemption, or a tool that needs consent. */
export type DibodevLegalNoticeAnalytics = 'none' | 'exempted' | 'withConsent'

export type DibodevLegalNoticeThirdPartyContent = 'youtube' | 'googleMaps' | 'recaptcha' | 'socialNetworks'

/** The four question steps; the fifth is the result screen. */
export type DibodevLegalNoticeQuestionStep = 1 | 2 | 3 | 4

/** Free text answers, each one a field of the form. */
export type DibodevLegalNoticeTextFieldKey =
  | 'name'
  | 'publicationDirector'
  | 'address'
  | 'email'
  | 'phone'
  | 'websiteUrl'
  | 'siret'
  | 'registryCity'
  | 'vatNumber'
  | 'shareCapital'
  | 'rnaNumber'
  | 'professionTitle'
  | 'titleCountry'
  | 'professionalBody'
  | 'professionalRules'
  | 'hostingName'
  | 'hostingAddress'
  | 'hostingPhone'
  | 'paymentProviderName'
  | 'newsletterToolName'
  | 'analyticsToolName'
  | 'consentToolName'
  | 'dpoContact'
  | 'mediatorName'
  | 'mediatorWebsite'

/**
 * A piece of information the documents need and the visitor left empty: `consentTool` means a consent tool is
 * missing, `analyticsRetention` that the retention set in the audience tool must be written by hand.
 */
export type DibodevLegalNoticeFieldId = DibodevLegalNoticeTextFieldKey | 'consentTool' | 'analyticsRetention'

/** Everything the visitor answered: nothing leaves the browser. */
export type DibodevLegalNoticeAnswers = Record<DibodevLegalNoticeTextFieldKey, string> & {
  status: DibodevLegalNoticeStatus
  companyForm: DibodevLegalNoticeCompanyForm
  hideAddress: boolean
  registry: DibodevLegalNoticeRegistry
  vatRegime: DibodevLegalNoticeVatRegime
  hostingProvider: DibodevLegalNoticeHostingProviderKey
  dataFeatures: DibodevLegalNoticeDataFeature[]
  paymentProvider: DibodevLegalNoticePaymentProvider
  analytics: DibodevLegalNoticeAnalytics
  thirdPartyContents: DibodevLegalNoticeThirdPartyContent[]
  hasConsentTool: boolean
  hasDpo: boolean
  sellsToConsumers: boolean
}

/**
 * Legal details of a hosting provider, read on its own legal pages.
 * @type {DibodevLegalNoticeHostingProvider}
 * @property {DibodevLegalNoticeHostingProviderKey} key - Id of the provider.
 * @property {string} label - Brand shown in the list.
 * @property {string} legalName - Name or company name to print, empty when not verified.
 * @property {string} address - Registered address, empty when not verified.
 * @property {string} phone - Phone number published by the provider, empty when it publishes none.
 * @property {string} sourceUrl - Page where the details were read.
 */
export type DibodevLegalNoticeHostingProvider = {
  key: Exclude<DibodevLegalNoticeHostingProviderKey, 'other'>
  label: string
  legalName: string
  address: string
  phone: string
  sourceUrl: string
}

/** A piece of document text; `isMissing` marks the `[À COMPLÉTER …]` placeholders. */
export type DibodevLegalNoticeSegment = {
  text: string
  isMissing: boolean
}

export type DibodevLegalNoticeBlock =
  | { type: 'paragraph'; segments: DibodevLegalNoticeSegment[] }
  | { type: 'fact'; label: string; segments: DibodevLegalNoticeSegment[] }
  | { type: 'list'; items: DibodevLegalNoticeSegment[][] }

export type DibodevLegalNoticeSection = {
  id: string
  title: string
  blocks: DibodevLegalNoticeBlock[]
}

export type DibodevLegalNoticeDocumentKind = 'legalNotice' | 'privacyPolicy'

/** One generated document, always written in French. */
export type DibodevLegalNoticeDocument = {
  kind: DibodevLegalNoticeDocumentKind
  title: string
  updatedLabel: string
  sections: DibodevLegalNoticeSection[]
  footer: string
}

/** The two documents and the fields to fill before publishing them. */
export type DibodevLegalNoticeDocuments = {
  legalNotice: DibodevLegalNoticeDocument
  privacyPolicy: DibodevLegalNoticeDocument
  missingFieldIds: DibodevLegalNoticeFieldId[]
}
