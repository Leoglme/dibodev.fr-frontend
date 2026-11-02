export type DibodevProjectSpecificationProjectType =
  | 'showcaseWebsite'
  | 'onlineStore'
  | 'businessSoftware'
  | 'mobileApp'

export type DibodevProjectSpecificationKind = 'creation' | 'redesign'

export type DibodevProjectSpecificationCompanySize = 'solo' | 'small' | 'medium' | 'large'

export type DibodevProjectSpecificationBudget =
  | 'under1500'
  | 'from1500to5000'
  | 'from5000to15000'
  | 'over15000'
  | 'unknown'

export type DibodevProjectSpecificationLaunchDate = 'asap' | 'threeMonths' | 'sixMonths' | 'noDate'

/** Who prepares the texts and pictures (or, for business software, where the data comes from). */
export type DibodevProjectSpecificationContentSource = 'client' | 'provider' | 'together'

export type DibodevProjectSpecificationPartId =
  | 'company'
  | 'project'
  | 'goals'
  | 'pages'
  | 'features'
  | 'content'
  | 'constraints'
  | 'budget'
  | 'answers'

/** Generator step that fills a part: 1 for the parts written from the project type alone. */
export type DibodevProjectSpecificationStep = 1 | 2 | 3 | 4 | 5

/** Answers given in the generator: `goals`, `audience` and `features` hold option ids of the chosen project type. */
export type DibodevProjectSpecificationAnswers = {
  projectType: DibodevProjectSpecificationProjectType
  kind: DibodevProjectSpecificationKind
  companyName: string
  activity: string
  city: string
  companySize: DibodevProjectSpecificationCompanySize | null
  goals: string[]
  audience: string | null
  features: string[]
  contentSource: DibodevProjectSpecificationContentSource | null
  budget: DibodevProjectSpecificationBudget | null
  launchDate: DibodevProjectSpecificationLaunchDate | null
}

export type DibodevProjectSpecificationGoalLine = {
  text: string
  measure: string
}

export type DibodevProjectSpecificationFeaturePriority = 'essential' | 'wanted'

export type DibodevProjectSpecificationFeatureLine = {
  label: string
  priority: DibodevProjectSpecificationFeaturePriority
  priorityLabel: string
}

export type DibodevProjectSpecificationFact = {
  label: string
  value: string
}

/** `instruction` and `checklist` only appear in the blank template; `emphasis` is the bold start of a paragraph. */
export type DibodevProjectSpecificationBlock =
  | { type: 'paragraph'; emphasis: string; text: string }
  | { type: 'bulletList'; items: string[] }
  | { type: 'goalList'; measureLabel: string; items: DibodevProjectSpecificationGoalLine[] }
  | { type: 'pageList'; items: string[]; note: string }
  | { type: 'featureList'; items: DibodevProjectSpecificationFeatureLine[] }
  | { type: 'factList'; items: DibodevProjectSpecificationFact[] }
  | { type: 'blankField'; label: string; placeholder: string }
  | { type: 'instruction'; text: string }
  | { type: 'checklist'; items: string[] }

/** `blocks` stays empty while the part waits for its step, which `pendingLabel` names. */
export type DibodevProjectSpecificationPart = {
  id: DibodevProjectSpecificationPartId
  number: number
  title: string
  isFilled: boolean
  pendingLabel: string
  blocks: DibodevProjectSpecificationBlock[]
}

export type DibodevProjectSpecificationMetaRow = {
  label: string
  value: string
  isBlank: boolean
}

/** `labelSeparator` joins a label to its value (" : " in French, ": " in English and Spanish). */
export type DibodevProjectSpecificationDocument = {
  labelSeparator: string
  eyebrow: string
  title: string
  isTitlePlaceholder: boolean
  metaRows: DibodevProjectSpecificationMetaRow[]
  tocTitle: string
  parts: DibodevProjectSpecificationPart[]
  footer: string
  filledPartCount: number
  fileBaseName: string
}

/** Values of `{name}`, `{city}` and `{zone}` in the wording, and whether French « de » elides before them. */
export type DibodevProjectSpecificationPlaceholders = {
  name: string
  city: string
  zone: string
  elidesBeforeVowel: boolean
}

export type DibodevProjectSpecificationOption<TId extends string> = {
  id: TId
  label: string
}

/** A choice with the sentence written in the document when it is picked. */
export type DibodevProjectSpecificationDocumentOption<TId extends string> = {
  id: TId
  label: string
  documentText: string
}

/** A size or a launch date drawn as a tile: `value` large, `unit` under it. */
export type DibodevProjectSpecificationTileOption<TId extends string> = {
  id: TId
  value: string
  unit: string
  documentText: string
}

export type DibodevProjectSpecificationGoalOption = {
  id: string
  label: string
  documentText: string
  measure: string
}

/** `isDefault` ticks the feature when the project type is chosen, `isEssential` writes it as essential in the document. */
export type DibodevProjectSpecificationFeatureOption = {
  id: string
  label: string
  isDefault: boolean
  isEssential: boolean
}

/** A page or a screen of the plan, listed only when `featureId` is null or that feature is chosen. */
export type DibodevProjectSpecificationPageOption = {
  label: string
  featureId: string | null
}

/** `{name}`, `{city}` and `{zone}` become the company name, its city and the area it serves; `{count}` a number. */
export type DibodevProjectSpecificationTypeWording = {
  label: string
  description: string
  icon: string
  titles: Record<DibodevProjectSpecificationKind, string>
  projectTexts: Record<DibodevProjectSpecificationKind, string>
  goalsQuestion: string
  goals: DibodevProjectSpecificationGoalOption[]
  audienceQuestion: string
  audienceDocumentLabel: string
  audiences: DibodevProjectSpecificationDocumentOption<string>[]
  featuresHelp: string
  features: DibodevProjectSpecificationFeatureOption[]
  pagesPartTitle: string
  pagesNote: string
  pages: DibodevProjectSpecificationPageOption[]
  contentQuestion: string
  contentPartTitle: string
  contentSources: DibodevProjectSpecificationDocumentOption<DibodevProjectSpecificationContentSource>[]
  contentExtra: string
  constraints: string[]
  ownership: string
}

export type DibodevProjectSpecificationStepWording = {
  title: string
  help: string
}

export type DibodevProjectSpecificationWording = {
  steps: Record<DibodevProjectSpecificationStep, DibodevProjectSpecificationStepWording>
  kindQuestion: string
  kinds: DibodevProjectSpecificationOption<DibodevProjectSpecificationKind>[]
  companyNameLabel: string
  companyNamePlaceholder: string
  activityLabel: string
  activityPlaceholder: string
  cityLabel: string
  cityPlaceholder: string
  sizeQuestion: string
  sizes: DibodevProjectSpecificationTileOption<DibodevProjectSpecificationCompanySize>[]
  goalsCount: string
  budgetQuestion: string
  budgetHelpLinkLabel: string
  budgets: DibodevProjectSpecificationDocumentOption<DibodevProjectSpecificationBudget>[]
  launchDateQuestion: string
  launchDates: DibodevProjectSpecificationTileOption<DibodevProjectSpecificationLaunchDate>[]
  types: Record<DibodevProjectSpecificationProjectType, DibodevProjectSpecificationTypeWording>
  document: {
    eyebrow: string
    titlePlaceholder: string
    companyLabel: string
    versionLabel: string
    versionValue: string
    blank: string
    tocTitle: string
    partTitles: Record<Exclude<DibodevProjectSpecificationPartId, 'pages' | 'content'>, string>
    pendingLabel: string
    elidesBeforeVowel: boolean
    labelSeparator: string
    companyCityText: string
    zoneWithCity: string
    teamLabel: string
    projectTypeLabel: string
    measureLabel: string
    priorityLabels: Record<DibodevProjectSpecificationFeaturePriority, string>
    noFeature: string
    budgetLabel: string
    launchDateLabel: string
    maintenanceLabel: string
    maintenanceText: string
    toBeSpecified: string
    answerItems: string[]
    replyByLabel: string
    footer: string
    fileBaseName: string
    defaultCompanyName: string
    defaultCity: string
    defaultZone: string
    templateInstructions: Record<DibodevProjectSpecificationPartId, string>
    templateCompanyPlaceholder: string
  }
  ui: DibodevProjectSpecificationInterfaceWording
}

/** `{phone}` is Léo's number, `{current}`, `{total}` and `{count}` the counters. */
export type DibodevProjectSpecificationInterfaceWording = {
  stepCounter: string
  finishedCounter: string
  progressLabel: string
  back: string
  next: string
  seeDocument: string
  hint: string
  liveLabel: string
  filledParts: string
  previewLabel: string
  previewNote: string
  readyEyebrow: string
  readyTitle: string
  readyText: string
  downloadWord: string
  downloadPdf: string
  pdfHelp: string
  editAnswers: string
  quoteTitle: string
  quoteIntro: string
  quoteNameLabel: string
  quoteEmailLabel: string
  quotePhoneLabel: string
  quoteSubmit: string
  quoteSubmitting: string
  quotePrivacyNote: string
  quoteSentTitle: string
  quoteSentText: string
  quoteError: string
  quoteProjectType: string
  mobilePreviewText: string
  mobilePreviewButton: string
  mobileReadingText: string
  mobileReadingButton: string
  mobileReadyText: string
  mobileReadyButton: string
}
