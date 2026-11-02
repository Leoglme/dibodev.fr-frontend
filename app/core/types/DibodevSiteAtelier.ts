import type { SiteAtelierGooglePlace } from '~~/server/types/tools/siteAtelier'
import type { DibodevTemplatePalette, DibodevTradeWebsiteDefinition } from '~/core/types/DibodevTradeWebsite'

/** The five steps of the workshop, then the final screen where the visitor asks for his demo. */
export type DibodevSiteAtelierStep = 'business' | 'style' | 'colors' | 'media' | 'services' | 'request'

export type DibodevSiteAtelierDevice = 'mobile' | 'desktop'

export type DibodevSiteAtelierColorSwatch = {
  hex: string
  label: string
}

export type DibodevSiteAtelierServiceOption = {
  id: string
  label: string
  defaultSelected: boolean
}

/** A picture chosen by the visitor, already resized in the browser. */
export type DibodevSiteAtelierPicture = {
  dataUrl: string
  fileName: string
}

/** Everything the visitor has chosen, the source of the preview and of the demo request; `chosenColor` stays null while the template keeps its own colours. */
export type DibodevSiteAtelierState = {
  businessName: string
  city: string
  phone: string
  googlePlace: SiteAtelierGooglePlace | null
  templateId: string
  chosenColor: string | null
  logoColor: string | null
  usesLogoColor: boolean
  logo: DibodevSiteAtelierPicture | null
  photos: DibodevSiteAtelierPicture[]
  selectedServiceIds: string[]
  hasEmergencyService: boolean
}

/** The identity merged by DevLeadHunter into the rendered demo; a null field keeps the value of the showcase demo. */
export type DibodevSiteAtelierPreviewIdentity = {
  businessName: string | null
  phone: string | null
  city: string | null
  area: string | null
  logoUrl: string | null
}

export type DibodevSiteAtelierPreviewServiceCard = {
  title: string
  description: string
  image: string
}

/** The message posted to the demo frame; every null field leaves the showcase demo as it is published. */
export type DibodevSiteAtelierPreviewMessage = {
  type: 'dlh:preview'
  templateId: string
  palette: DibodevTemplatePalette | null
  photos: string[] | null
  services: DibodevSiteAtelierPreviewServiceCard[] | null
  identity: DibodevSiteAtelierPreviewIdentity | null
}

/** Texts of the workshop shared by every trade page, in one language. */
export type DibodevSiteAtelierWording = {
  stepCount: string
  finalStepCount: string
  progressLabel: string
  back: string
  next: string
  seeMyDemo: string
  hintDefault: string
  hintLastStep: string
  hintMedia: string
  business: {
    title: string
    intro: string
    googleSearchLabel: string
    googleSearchOptional: string
    googleSearchPlaceholder: string
    googleSearchHint: string
    googleSearchNoResult: string
    googleSearchError: string
    googleSearchReviews: string
    nameLabel: string
    namePlaceholder: string
    cityLabel: string
    cityPlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
  }
  style: {
    title: string
    styleGroupLabel: string
  }
  colors: {
    title: string
    intro: string
    groupLabel: string
    templateColor: string
    swatches: DibodevSiteAtelierColorSwatch[]
    customColor: string
    useLogoColor: string
  }
  media: {
    title: string
    logoLabel: string
    logoHint: string
    removeLogo: string
    photosLabel: string
    photosHint: string
    photosChosen: string
    photoChosen: string
    removePhoto: string
    fileTooLarge: string
    processing: string
  }
  services: {
    title: string
    intro: string
    emergencyLabel: string
  }
  request: {
    eyebrow: string
    intro: string
    emailLabel: string
    emailPlaceholder: string
    phoneLabel: string
    phoneHint: string
    phonePlaceholder: string
    submit: string
    submitting: string
    privacyNote: string
    privacyLink: string
    sentTitle: string
    sentText: string
    attachmentsDroppedNote: string
    missingBusinessName: string
    invalidEmail: string
    error: string
    rateLimited: string
    priceTitle: string
    templateOfferPrice: string
    templateOfferText: string
    customOfferPrice: string
    customOfferText: string
    priceLink: string
  }
  preview: {
    liveLabel: string
    captureLabel: string
    deviceGroupLabel: string
    mobile: string
    desktop: string
    loading: string
    frameTitle: string
    captureAlt: string
    openFullScreen: string
    closeFullScreen: string
    fullScreenTitle: string
    captureNote: string
  }
}

/** The trade-specific texts of the workshop, written in the page content of each trade. */
export type DibodevSiteAtelierTradeWording = {
  styleIntro: string
  templates: Record<string, { name: string; description: string }>
  mediaIntro: string
  serviceOptions: DibodevSiteAtelierServiceOption[]
  serviceDescription: string
  requestTitle: string
}

/** What the page tells the workshop: the trade, its templates, its texts and the id of its PostHog tunnel. */
export type DibodevSiteAtelierProps = {
  trade: DibodevTradeWebsiteDefinition
  tradeWording: DibodevSiteAtelierTradeWording
  wording: DibodevSiteAtelierWording
  tunnelId: string
  anchorId: string
  pricingAnchorId: string
}

export type DibodevSiteAtelierStepComponent = {
  focusTitle: () => void
}

export type DibodevSiteAtelierRequestStatus = 'idle' | 'sending' | 'sent' | 'error'

/** The width and height of a real screen at scale 1. */
export type DibodevSiteAtelierScreenSize = {
  width: number
  height: number
}
