import type { LeadSource, MailLocale } from '~~/server/types/mail/contact'

/** One Google Business profile found by the workshop search; `photoUrls` is filled only when a profile is asked by its id. */
export type SiteAtelierGooglePlace = {
  placeId: string
  name: string
  city: string | null
  phone: string | null
  rating: number | null
  reviewCount: number | null
  mapsUrl: string | null
  photoUrls: string[]
}

/** Answer of `GET /api/site-atelier/google-place`; `configured` is false when the server has no Places key. */
export type SiteAtelierGooglePlaceResponse = {
  configured: boolean
  places: SiteAtelierGooglePlace[]
}

/** A cached Places answer, kept a day. */
export type SiteAtelierGooglePlaceCacheEntry = {
  places: SiteAtelierGooglePlace[]
  expiresAt: number
}

/** Requests counted for one address in the current window. */
export type SiteAtelierRateLimitWindow = {
  count: number
  resetAt: number
}

export type SiteAtelierDemoRequestAttachment = {
  fileName: string
  dataUrl: string
}

export type SiteAtelierDemoRequestGooglePlace = {
  name: string
  rating: number | null
  reviewCount: number | null
  mapsUrl: string | null
  photoUrls: string[]
}

/** What the workshop sends to `POST /api/site-atelier/demo-request`; `websiteUrl` is the honeypot, empty for a human. */
export type SiteAtelierDemoRequestPayload = {
  trade: string
  templateId: string
  templateName: string
  color: string | null
  businessName: string
  city: string
  phone: string
  suggestedSlug: string
  services: string[]
  hasEmergencyService: boolean
  googlePlace: SiteAtelierDemoRequestGooglePlace | null
  visitorEmail: string
  visitorPhone: string
  attachments: SiteAtelierDemoRequestAttachment[]
  hasLogo: boolean
  photoCount: number
  locale: string
  pagePath: string
  source: LeadSource | null
  websiteUrl: string
}

/** Answer of the demo request: `ignored` when the honeypot was filled (the visitor still sees a success). */
export type SiteAtelierDemoRequestResponse = {
  outcome: 'sent' | 'ignored'
}

export type SiteAtelierDecodedAttachment = {
  fileName: string
  contentType: string
  base64Content: string
}

/** A demo request once checked: trimmed texts, known trade and template, decoded pictures. */
export type SiteAtelierDemoRequest = {
  id: string
  trade: string
  tradeLabel: string
  templateId: string
  templateName: string
  color: string | null
  businessName: string
  city: string
  phone: string
  suggestedSlug: string
  services: string[]
  hasEmergencyService: boolean
  googlePlace: SiteAtelierDemoRequestGooglePlace | null
  visitorEmail: string
  visitorPhone: string | null
  attachments: SiteAtelierDecodedAttachment[]
  hasLogo: boolean
  photoCount: number
  locale: MailLocale
  pagePath: string | null
  source: LeadSource | null
  receivedAt: string
}

export type SiteAtelierDemoRequestRecord = Omit<SiteAtelierDemoRequest, 'attachments'> & {
  attachmentNames: string[]
}

/** One step of "what happens next" in the acknowledgement e-mail. */
export type SiteAtelierAcknowledgementStepTexts = {
  title: string
  description: string
}

/** Texts of the e-mail that tells the visitor his demo is on its way, in one language. */
export type SiteAtelierAcknowledgementTexts = {
  subject: string
  fromName: string
  preheader: (businessName: string, replyDeadline: string) => string
  title: string
  introStart: (businessName: string) => string
  introEnd: string
  nextStepsTitle: string
  nextSteps: (templateName: string) => SiteAtelierAcknowledgementStepTexts[]
  requestTitle: string
  tradeLabel: string
  styleLabel: string
  cityLabel: string
  servicesLabel: string
  replyStart: string
  replyEnd: string
  ownerPhoneDisplay: string
  tradePageStart: string
  tradePageLabel: string
  tradePageEnd: string
  signOff: string
  footerText: string
  privacyLabel: string
  privacyUrl: string
  labelSeparator: string
  replySubject: string
}
