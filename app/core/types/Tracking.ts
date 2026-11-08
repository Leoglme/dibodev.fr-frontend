import type {
  DibodevEstimatorOption,
  DibodevEstimatorProjectKind,
  DibodevEstimatorProjectSize,
} from '~/core/types/DibodevBudgetEstimator'
import type { DibodevEInvoicingVerdict } from '~/core/types/DibodevEInvoicingCheck'
import type {
  DibodevGdprConsentToolKey,
  DibodevGdprCookieCheckVerdict,
  DibodevGdprLinkKey,
  DibodevGdprTrackerKey,
} from '~/core/types/DibodevGdprCookieCheck'
import type {
  DibodevEmailDeliverabilityFindingKey,
  DibodevEmailDeliverabilityVerdict,
  DibodevEmailProviderKey,
} from '~/core/types/DibodevEmailDeliverabilityCheck'
import type { DibodevHostingProviderKey, DibodevHostingStatusState } from '~/core/types/DibodevHostingStatus'
import type { DibodevSecurityAlertSubscribeOutcome, DibodevSecurityAlertTopic } from '~/core/types/DibodevSecurityAlert'
import type { DibodevPhotoSlideshowNavigationMethod } from '~/core/types/DibodevPhotoSlideshow'
import type {
  DibodevPhpVulnerabilityCheckErrorKind,
  DibodevPhpVulnerabilityHostGuideKey,
  DibodevPhpVulnerabilityHostingKey,
  DibodevPhpVulnerabilityPlatformKey,
  DibodevPhpVulnerabilityVerdict,
} from '~/core/types/DibodevPhpVulnerabilityCheck'
import type {
  DibodevProjectSpecificationBudget,
  DibodevProjectSpecificationKind,
  DibodevProjectSpecificationLaunchDate,
  DibodevProjectSpecificationProjectType,
} from '~/core/types/DibodevProjectSpecification'
import type { DibodevPublicAidProjectType, DibodevPublicAidStatus } from '~/core/types/DibodevPublicAid'
import type { DibodevSiteAtelierDevice } from '~/core/types/DibodevSiteAtelier'
import type { DibodevSiteCheckErrorKind } from '~/core/types/DibodevSiteCheck'
import type { DibodevTradeWebsiteKey } from '~/core/types/DibodevTradeWebsite'
import type {
  DibodevWebsiteHealthCheckKey,
  DibodevWebsiteHealthOverallVerdict,
} from '~/core/types/DibodevWebsiteHealthCheck'
import type {
  DibodevWordPressHackGuideKey,
  DibodevWordPressHackSignalKey,
  DibodevWordPressHackVerdict,
} from '~/core/types/DibodevWordPressHackCheck'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'

/** Status of a contact form submission. */
export type ContactFormSubmissionStatus = 'success' | 'error'

/** Typed payloads per event name (keys = `TRACKING_EVENTS` values). */
export type TrackingEventPayloads = {
  [TRACKING_EVENTS.ctaProjectDiscussion]: { location: string }
  [TRACKING_EVENTS.contactPhone]: { location: string }
  [TRACKING_EVENTS.contactEmail]: { location: string }
  [TRACKING_EVENTS.contactFormSubmitted]: {
    status: ContactFormSubmissionStatus
    projectType?: string | null
    pagesRange?: string | null
    budget?: string
    hasPhone?: boolean
    hasMessage?: boolean
    errorStatus?: number | null
    location?: string
  }
  [TRACKING_EVENTS.contactIntentSubmitted]: { hasEmail: boolean; hasPhone: boolean }
  [TRACKING_EVENTS.contactFormStarted]: { field: string }
  [TRACKING_EVENTS.contactFormInvalid]: { fields: string[] }
  [TRACKING_EVENTS.bookingLinkClicked]: { location: string }
  [TRACKING_EVENTS.projectCardClicked]: { project: string; route: string | null; source?: string }
  [TRACKING_EVENTS.projectSiteVisited]: { project: string; siteUrl: string; location: string }
  [TRACKING_EVENTS.projectRepoVisited]: { repoUrl: string }
  [TRACKING_EVENTS.externalProfileClicked]: { platform: string; location: string }
  [TRACKING_EVENTS.pressArticleClicked]: { media: string; location: string }
  [TRACKING_EVENTS.articleCardClicked]: { article: string; source: string }
  [TRACKING_EVENTS.articleCtaClicked]: { label: string; href: string; variant: 'button' | 'link' }
  [TRACKING_EVENTS.fileDownloadClicked]: { file: string; location: string }
  [TRACKING_EVENTS.localeSwitched]: { from: string; to: string }
  [TRACKING_EVENTS.budgetEstimated]: {
    kind: DibodevEstimatorProjectKind
    size: DibodevEstimatorProjectSize
    options: DibodevEstimatorOption[]
    minPrice: number
    maxPrice: number
    location: string
  }
  [TRACKING_EVENTS.budgetEstimatorStarted]: { location: string }
  [TRACKING_EVENTS.comparisonDetailsOpened]: { location: string }
  [TRACKING_EVENTS.tunnelStarted]: { tunnel: string }
  [TRACKING_EVENTS.tunnelStepAnswered]: { tunnel: string; step: number; question: string; answers: string[] }
  [TRACKING_EVENTS.tunnelCompleted]: { tunnel: string; verdict: string; answers: Record<string, string[]> }
  [TRACKING_EVENTS.tunnelLeadFormOpened]: { tunnel: string; verdict: string }
  [TRACKING_EVENTS.tunnelLeadSubmitted]: {
    tunnel: string
    verdict: string
    status: ContactFormSubmissionStatus
    hasPhone: boolean
    errorStatus?: number | null
  }
  [TRACKING_EVENTS.toolTeaserClicked]: { tool: string; location: string }
  [TRACKING_EVENTS.photoSlideshowNavigated]: {
    slide: string
    method: DibodevPhotoSlideshowNavigationMethod
    location: string
  }
  [TRACKING_EVENTS.publicAidSimulatorStarted]: { location: string }
  [TRACKING_EVENTS.publicAidSimulated]: {
    location: string
    department: string
    territory: string
    projectType: DibodevPublicAidProjectType
    status: DibodevPublicAidStatus
    amountHt: number
    aidAmount: number
  }
  [TRACKING_EVENTS.phpVulnerabilityCheckStarted]: { location: string }
  [TRACKING_EVENTS.phpVulnerabilityChecked]: {
    location: string
    outcome: 'result' | 'error'
    verdict: DibodevPhpVulnerabilityVerdict | null
    platform: DibodevPhpVulnerabilityPlatformKey | null
    hostingProvider: DibodevPhpVulnerabilityHostingKey | null
    phpBranch: string | null
    errorKind: DibodevPhpVulnerabilityCheckErrorKind | null
  }
  [TRACKING_EVENTS.phpVulnerabilityGuideClicked]: {
    location: string
    guide: DibodevPhpVulnerabilityHostGuideKey
    verdict: DibodevPhpVulnerabilityVerdict
    hostingProvider: DibodevPhpVulnerabilityHostingKey | null
  }
  [TRACKING_EVENTS.wordpressHackCheckStarted]: { location: string }
  [TRACKING_EVENTS.wordpressHackChecked]: {
    location: string
    outcome: 'result' | 'error'
    verdict: DibodevWordPressHackVerdict | null
    platform: DibodevPhpVulnerabilityPlatformKey | null
    vulnerablePlugin: string | null
    closedPlugin: string | null
    coreVersion: string | null
    signals: DibodevWordPressHackSignalKey[]
    errorKind: DibodevSiteCheckErrorKind | null
  }
  [TRACKING_EVENTS.wordpressHackGuideClicked]: {
    location: string
    guide: DibodevWordPressHackGuideKey
    verdict: DibodevWordPressHackVerdict
  }
  [TRACKING_EVENTS.hostingStatusLoaded]: {
    location: string
    provider: DibodevHostingProviderKey
    state: DibodevHostingStatusState
  }
  [TRACKING_EVENTS.hostingStatusProviderClicked]: {
    location: string
    provider: DibodevHostingProviderKey
    state: DibodevHostingStatusState | null
  }
  [TRACKING_EVENTS.hostingStatusRefreshed]: { location: string; provider: DibodevHostingProviderKey | null }
  [TRACKING_EVENTS.securityAlertSubscribed]: {
    location: string
    topic: DibodevSecurityAlertTopic
    outcome: DibodevSecurityAlertSubscribeOutcome | 'error'
    hasSite: boolean
  }
  [TRACKING_EVENTS.eInvoicingSoftwareCheckStarted]: { location: string }
  [TRACKING_EVENTS.eInvoicingSoftwareChecked]: {
    location: string
    verdict: DibodevEInvoicingVerdict
    software: string | null
    platform: string | null
    method: 'suggestion' | 'submit'
  }
  [TRACKING_EVENTS.emailDeliverabilityCheckStarted]: { location: string }
  [TRACKING_EVENTS.emailDeliverabilityChecked]: {
    location: string
    outcome: 'result' | 'error'
    verdict: DibodevEmailDeliverabilityVerdict | null
    provider: DibodevEmailProviderKey | null
    findings: DibodevEmailDeliverabilityFindingKey[]
    errorKind: DibodevSiteCheckErrorKind | null
  }
  [TRACKING_EVENTS.websiteHealthCheckStarted]: { location: string }
  [TRACKING_EVENTS.websiteHealthChecked]: {
    location: string
    outcome: 'result' | 'error'
    overall: DibodevWebsiteHealthOverallVerdict | null
    criticalChecks: DibodevWebsiteHealthCheckKey[]
    warningChecks: DibodevWebsiteHealthCheckKey[]
    isWordPress: boolean | null
    errorKind: DibodevSiteCheckErrorKind | null
  }
  [TRACKING_EVENTS.gdprCookieCheckStarted]: { location: string }
  [TRACKING_EVENTS.gdprCookieChecked]: {
    location: string
    outcome: 'result' | 'error'
    verdict: DibodevGdprCookieCheckVerdict | null
    trackerCount: number | null
    loadedWithoutConsentCount: number | null
    loadedWithoutConsent: DibodevGdprTrackerKey[]
    hasConsentTool: boolean | null
    consentTool: DibodevGdprConsentToolKey | null
    missingLinks: DibodevGdprLinkKey[]
    errorKind: DibodevSiteCheckErrorKind | null
  }
  [TRACKING_EVENTS.siteDemoRequested]: {
    tunnel: string
    trade: DibodevTradeWebsiteKey
    template: string
    status: ContactFormSubmissionStatus
    hasLogo: boolean
    photoCount: number
    usedGooglePlace: boolean
    hasPhone: boolean
    serviceCount: number
    errorStatus?: number | null
  }
  [TRACKING_EVENTS.siteDemoOpened]: {
    tunnel: string
    trade: DibodevTradeWebsiteKey
    template: string
    device: DibodevSiteAtelierDevice
  }
  [TRACKING_EVENTS.siteExampleOpened]: { example: string; location: string }
  [TRACKING_EVENTS.projectSpecificationStarted]: {
    projectType: DibodevProjectSpecificationProjectType
    location: string
  }
  [TRACKING_EVENTS.projectSpecificationStepCompleted]: {
    step: number
    projectType: DibodevProjectSpecificationProjectType
    location: string
  }
  [TRACKING_EVENTS.projectSpecificationCompleted]: {
    projectType: DibodevProjectSpecificationProjectType
    kind: DibodevProjectSpecificationKind
    budget: DibodevProjectSpecificationBudget | null
    launchDate: DibodevProjectSpecificationLaunchDate | null
    goalCount: number
    featureCount: number
    location: string
  }
  [TRACKING_EVENTS.projectSpecificationDownloaded]: {
    format: 'docx' | 'pdf'
    projectType: DibodevProjectSpecificationProjectType
    location: string
  }
  [TRACKING_EVENTS.projectSpecificationQuoteRequested]: {
    projectType: DibodevProjectSpecificationProjectType
    budget: DibodevProjectSpecificationBudget | null
    status: ContactFormSubmissionStatus
    hasPhone: boolean
    errorStatus?: number | null
  }
  [TRACKING_EVENTS.legalNoticeGeneratorStarted]: { location: string }
  [TRACKING_EVENTS.legalNoticeGeneratorStepCompleted]: { location: string; step: number }
  [TRACKING_EVENTS.legalNoticeGeneratorCompleted]: {
    location: string
    status: string
    hostingProvider: string
    hasConsentTool: boolean
    hasAnalytics: boolean
  }
  [TRACKING_EVENTS.legalNoticeGeneratorDownloaded]: {
    location: string
    format: 'docx' | 'pdf' | 'copy'
    document: 'legalNotice' | 'privacyPolicy' | 'both'
  }
}
