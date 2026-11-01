import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type {
  DibodevHostingProviderKey,
  DibodevHostingStatusSourceKind,
  DibodevHostingStatusState,
} from '~/core/types/DibodevHostingStatus'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevSectionHeadingContent } from '~/core/types/DibodevSectionHeading'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'

/** Texts of the live status card of one provider; templates use `{provider}`, `{time}`, `{since}` and `{count}`. */
export type DibodevHostingStatusCardWording = {
  resultLabel: string
  stateLabels: Record<DibodevHostingStatusState, string>
  stateTitles: Record<DibodevHostingStatusState, string>
  stateTexts: Record<DibodevHostingStatusState, string>
  loadingTitle: string
  loadingText: string
  errorTitle: string
  errorText: string
  checkedAtText: string
  activeIncidentsTitle: string
  recentIncidentsTitle: string
  noRecentIncidentsText: string
  ongoingLabel: string
  resolvedLabel: string
  maintenanceLabel: string
  incidentLinkLabel: string
  sourceTexts: Record<DibodevHostingStatusSourceKind, string>
  staleText: string
  statusPageLinkLabel: string
  noStatusPageResultLabel: string
  noStatusPageTitle: string
  noStatusPageText: string
  noStatusPageLinkLabel: string
  refreshLabel: string
  refreshingLabel: string
  ctaIntros: Record<DibodevHostingStatusState, string>
  ctaLabel: string
}

/** Texts of the hub board listing every provider. */
export type DibodevHostingStatusBoardWording = {
  stateLabels: Record<DibodevHostingStatusState, string>
  checkedAtText: string
  loadingText: string
  errorText: string
  lastIncidentText: string
  noIncidentText: string
  noStatusPageLabel: string
  noStatusPageText: string
  cardLinkLabel: string
}

/** Sections shared by the hub and the provider pages. */
export type DibodevHostingStatusPageSections = {
  meta: {
    title: string
    description: string
    inLanguage: string
    schemaAbout: string
  }
  breadcrumbLabel: string
  shareImage: {
    titleLines: string[]
    highlight: string
    subtitle: string
    badge: string
    alt: string
  }
  hero: {
    titleBefore: string
    titleHighlight: string
    titleAfter: string
    description: string
    reassurances: string[]
    authorIntro: string
    authorBio: string
  }
  mobileContactBar: {
    text: string
    buttonLabel: string
  }
  facts: DibodevSectionHeadingContent & {
    anchorId: string
    facts: DibodevSourcedFact[]
    calloutEmphasizedIntro: string
    calloutText: string
  }
  checks: DibodevSectionHeadingContent & {
    anchorId: string
    items: DibodevGuarantee[]
  }
  method: DibodevSectionHeadingContent & {
    steps: DibodevMethodStep[]
  }
  faq: {
    eyebrow: string
    title: string
    questions: DibodevFaqQuestion[]
  }
  relatedArticles: {
    title: string
    intro: string
  }
  contactCta: {
    title: string
    description: string
    button: string
  }
}

/** The page of one provider; `name` is the display name used in the templates of the card. */
export type DibodevHostingProviderPageContent = DibodevHostingStatusPageSections & {
  key: DibodevHostingProviderKey
  name: string
  supportUrl: string
  supportLabel: string
}

/** What differs from one provider page to another; the checks, the method and the CTA are shared. */
export type DibodevHostingProviderPageSpecifics = {
  name: string
  supportUrl: string
  supportLabel: string
  metaTitle: string
  metaDescription: string
  heroDescription: string
  shareSubtitle: string
  facts: DibodevSourcedFact[]
  factsCalloutText: string
  faq: DibodevFaqQuestion[]
}

/** Everything the two pages show in one language. */
export type DibodevHostingStatusPageContent = {
  cardWording: DibodevHostingStatusCardWording
  boardWording: DibodevHostingStatusBoardWording
  hub: DibodevHostingStatusPageSections
  providers: Record<DibodevHostingProviderKey, DibodevHostingProviderPageContent>
}
