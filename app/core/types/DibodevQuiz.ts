export type DibodevQuizSelection = 'single' | 'multiple'

export type DibodevQuizDisplay = 'tiles' | 'cards' | 'list'

/** An answer: `unit` is written under the number of a tile, `icon` (DibodevIcon name) is drawn on a card. */
export type DibodevQuizOption = {
  id: string
  label: string
  unit: string
  icon: string | null
}

/** A step of the test: `maxSelected` is null when a multiple choice has no limit. */
export type DibodevQuizQuestion = {
  id: string
  title: string
  helpText: string
  leadMessageLabel: string
  display: DibodevQuizDisplay
  selection: DibodevQuizSelection
  maxSelected: number | null
  options: DibodevQuizOption[]
}

/** Selected option ids per question id, one id for a single choice. */
export type DibodevQuizAnswers = Record<string, string[]>

export type DibodevQuizPriceDetail = {
  label: string
  value: string
}

export type DibodevQuizPriceLink = {
  label: string
  href: string
}

export type DibodevQuizPriceCard = {
  eyebrow: string
  price: string
  priceSuffix: string
  details: DibodevQuizPriceDetail[]
  footnote: string
  footnoteLink: DibodevQuizPriceLink | null
}

/** A recommendation: `verdict` is sent to PostHog, `leadBudget` is the price in words sent with a lead. */
export type DibodevQuizResult = {
  verdict: string
  title: string
  explanation: string
  answersSummary: string
  priceCard: DibodevQuizPriceCard
  adviceTitle: string
  advicePoints: string[]
  disclaimer: string
  ctaLabel: string
  leadFormTitle: string
  leadFormIntro: string
  leadBudget: string
}

/** A test: `id` is sent to PostHog as `tunnel`, `contactProjectType` is a `contact.form.projectType.*` key. */
export type DibodevQuizDefinition = {
  id: string
  name: string
  contactProjectType: string
  progressTravellerIcon: string
  questions: DibodevQuizQuestion[]
  computeResult: (answers: DibodevQuizAnswers) => DibodevQuizResult
}

export type DibodevQuizConversionView = 'cta' | 'form' | 'sent'
