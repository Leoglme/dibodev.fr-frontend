import type { ComputedRef, Ref } from 'vue'
import type { LeadSource } from '~~/server/types/mail/contact'
import type {
  SiteAtelierDemoRequestAttachment,
  SiteAtelierDemoRequestGooglePlace,
  SiteAtelierDemoRequestPayload,
  SiteAtelierDemoRequestResponse,
  SiteAtelierGooglePlace,
} from '~~/server/types/tools/siteAtelier'
import type {
  DibodevSiteAtelierDevice,
  DibodevSiteAtelierPicture,
  DibodevSiteAtelierPreviewMessage,
  DibodevSiteAtelierRequestStatus,
  DibodevSiteAtelierServiceOption,
  DibodevSiteAtelierState,
  DibodevSiteAtelierStep,
  DibodevSiteAtelierTradeWording,
} from '~/core/types/DibodevSiteAtelier'
import type { ContactFormSubmissionStatus } from '~/core/types/Tracking'
import type { DibodevTradeWebsiteDefinition, DibodevTradeWebsiteTemplate } from '~/core/types/DibodevTradeWebsite'
import { computed, onMounted, reactive, ref, watch } from 'vue'
import { useLeadSource } from '~/composables/useLeadSource'
import { useTracking } from '~/composables/useTracking'
import {
  SITE_ATELIER_DEMO_REQUEST_API_PATH,
  SITE_ATELIER_MAX_PHOTOS,
  SITE_ATELIER_QUESTION_STEP_COUNT,
  SITE_ATELIER_REQUEST_ATTACHMENT_MAX_BYTES,
  SITE_ATELIER_REQUEST_ATTACHMENT_MAX_EDGE_PX,
  SITE_ATELIER_SIDE_BY_SIDE_MIN_WIDTH,
  SITE_ATELIER_STEPS,
} from '~/core/constants/siteAtelier/siteAtelierShared'
import { TRACKING_EVENTS } from '~/core/constants/trackingEvents'
import { DominantColorUtils } from '~/core/utils/DominantColorUtils'
import { ImageResizeUtils } from '~/core/utils/ImageResizeUtils'
import { SiteAtelierPreviewUtils } from '~/core/utils/SiteAtelierPreviewUtils'
import { SlugUtils } from '~/core/utils/SlugUtils'

const EMAIL_REGEX: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const HTTP_PAYLOAD_TOO_LARGE: number = 413
export const SITE_ATELIER_RATE_LIMITED_STATUS: number = 429
const STEPS_SHOWING_CHOSEN_SERVICES: DibodevSiteAtelierStep[] = ['services', 'request']

export type SiteAtelierRequestValidationError = 'missingBusinessName' | 'invalidEmail' | null

type SiteAtelierRequestAttachments = {
  attachments: SiteAtelierDemoRequestAttachment[]
  hasDroppedAttachment: boolean
}

export type UseSiteAtelierReturn = {
  state: DibodevSiteAtelierState
  stepIndex: Ref<number>
  currentStep: ComputedRef<DibodevSiteAtelierStep>
  isFinalStep: ComputedRef<boolean>
  isLastQuestionStep: ComputedRef<boolean>
  questionStepNumber: ComputedRef<number>
  device: Ref<DibodevSiteAtelierDevice>
  currentTemplate: ComputedRef<DibodevTradeWebsiteTemplate>
  previewMessage: ComputedRef<DibodevSiteAtelierPreviewMessage>
  requestStatus: Ref<DibodevSiteAtelierRequestStatus>
  requestErrorStatus: Ref<number | null>
  requestValidationError: Ref<SiteAtelierRequestValidationError>
  wereAttachmentsDropped: Ref<boolean>
  goNext: () => void
  goBack: () => void
  noteFirstInteraction: () => void
  selectTemplate: (templateId: string) => void
  selectColor: (color: string | null) => void
  setUsesLogoColor: (usesLogoColor: boolean) => void
  applyGooglePlace: (place: SiteAtelierGooglePlace) => void
  setLogo: (logo: DibodevSiteAtelierPicture | null) => Promise<void>
  addPhotos: (photos: DibodevSiteAtelierPicture[]) => void
  removePhoto: (index: number) => void
  toggleService: (serviceId: string) => void
  setDevice: (device: DibodevSiteAtelierDevice) => void
  submitDemoRequest: (visitorEmail: string, visitorPhone: string, websiteUrl: string) => Promise<void>
  trackDemoOpened: () => void
}

/**
 * Site workshop of a trade page: the visitor answers, the message sent to the demo, the tunnel events and the demo request.
 * @param {DibodevTradeWebsiteDefinition} trade - The trade and its templates.
 * @param {DibodevSiteAtelierTradeWording} tradeWording - The trade texts (template names, services).
 * @param {string} tunnelId - The PostHog tunnel id (`site-atelier-plumber`).
 * @returns {UseSiteAtelierReturn} The workshop.
 */
export function useSiteAtelier(
  trade: DibodevTradeWebsiteDefinition,
  tradeWording: DibodevSiteAtelierTradeWording,
  tunnelId: string,
): UseSiteAtelierReturn {
  const { track } = useTracking()
  const { getLeadSource } = useLeadSource()
  const { locale } = useI18n()
  const route = useRoute()

  const firstTemplate: DibodevTradeWebsiteTemplate | undefined = trade.templates[0]
  if (!firstTemplate) {
    throw new Error(`The trade ${trade.key} has no template.`)
  }
  let hasTrackedTunnelStart: boolean = false
  let hasTrackedTunnelCompletion: boolean = false

  /* STATE */
  const state: DibodevSiteAtelierState = reactive({
    businessName: '',
    city: '',
    phone: '',
    googlePlace: null,
    templateId: firstTemplate.id,
    chosenColor: null,
    logoColor: null,
    usesLogoColor: false,
    logo: null,
    photos: [],
    selectedServiceIds: tradeWording.serviceOptions
      .filter((option: DibodevSiteAtelierServiceOption): boolean => option.defaultSelected)
      .map((option: DibodevSiteAtelierServiceOption): string => option.id),
    hasEmergencyService: trade.hasEmergencyService,
  })
  const stepIndex: Ref<number> = ref(0)
  const device: Ref<DibodevSiteAtelierDevice> = ref('desktop')
  const hasReachedServicesStep: Ref<boolean> = ref(false)
  const requestStatus: Ref<DibodevSiteAtelierRequestStatus> = ref('idle')
  const requestErrorStatus: Ref<number | null> = ref(null)
  const requestValidationError: Ref<SiteAtelierRequestValidationError> = ref(null)
  const wereAttachmentsDropped: Ref<boolean> = ref(false)

  /* COMPUTED */
  const currentStep: ComputedRef<DibodevSiteAtelierStep> = computed(
    (): DibodevSiteAtelierStep => SITE_ATELIER_STEPS[stepIndex.value] ?? 'business',
  )
  const isFinalStep: ComputedRef<boolean> = computed((): boolean => currentStep.value === 'request')
  const isLastQuestionStep: ComputedRef<boolean> = computed(
    (): boolean => stepIndex.value === SITE_ATELIER_QUESTION_STEP_COUNT - 1,
  )
  const questionStepNumber: ComputedRef<number> = computed((): number =>
    Math.min(stepIndex.value + 1, SITE_ATELIER_QUESTION_STEP_COUNT),
  )
  const currentTemplate: ComputedRef<DibodevTradeWebsiteTemplate> = computed(
    (): DibodevTradeWebsiteTemplate =>
      trade.templates.find((template: DibodevTradeWebsiteTemplate): boolean => template.id === state.templateId) ??
      firstTemplate,
  )
  const previewMessage: ComputedRef<DibodevSiteAtelierPreviewMessage> = computed(
    (): DibodevSiteAtelierPreviewMessage =>
      SiteAtelierPreviewUtils.buildPreviewMessage(
        state,
        currentTemplate.value,
        tradeWording,
        hasReachedServicesStep.value,
      ),
  )

  /* METHODS */
  /**
   * Sends the tunnel start once, on the first change made by the visitor.
   * @returns {void}
   */
  function noteFirstInteraction(): void {
    if (hasTrackedTunnelStart) {
      return
    }
    hasTrackedTunnelStart = true
    track(TRACKING_EVENTS.tunnelStarted, { tunnel: tunnelId })
  }

  /**
   * What the visitor answered at a step of the business form, as flags, never as personal data.
   * @returns {string[]} The flags of the business step.
   */
  function businessStepAnswers(): string[] {
    const answers: string[] = []
    answers.push(state.businessName.trim() ? 'business_name' : 'business_name_empty')
    answers.push(state.city.trim() ? 'city' : 'city_empty')
    answers.push(state.phone.trim() ? 'phone' : 'phone_empty')
    answers.push(state.googlePlace ? 'google_place' : 'no_google_place')
    return answers
  }

  /**
   * What the visitor answered at the current step, as ids and flags, never as personal data.
   * @returns {string[]} The answers sent with `tunnel_step_answered`.
   */
  function currentStepAnswers(): string[] {
    if (currentStep.value === 'business') {
      return businessStepAnswers()
    }
    if (currentStep.value === 'style') {
      return [state.templateId]
    }
    if (currentStep.value === 'colors') {
      return [SiteAtelierPreviewUtils.effectiveColorOf(state) ?? 'template_color']
    }
    if (currentStep.value === 'media') {
      return [state.logo ? 'logo' : 'no_logo', `photos:${state.photos.length}`]
    }
    if (currentStep.value === 'services') {
      const answers: string[] = [...state.selectedServiceIds]
      if (state.hasEmergencyService) {
        answers.push('emergency')
      }
      return answers
    }
    return []
  }

  /**
   * Sends the completion of the tunnel once, when the demo screen opens.
   * @returns {void}
   */
  function trackTunnelCompletion(): void {
    if (hasTrackedTunnelCompletion) {
      return
    }
    hasTrackedTunnelCompletion = true
    track(TRACKING_EVENTS.tunnelCompleted, {
      tunnel: tunnelId,
      verdict: state.templateId,
      answers: {
        style: [state.templateId],
        color: [SiteAtelierPreviewUtils.effectiveColorOf(state) ?? 'template_color'],
        media: [state.logo ? 'logo' : 'no_logo', `photos:${state.photos.length}`],
        services: [...state.selectedServiceIds],
      },
    })
  }

  /**
   * Moves to the next step, tracking the answer of the current one.
   * @returns {void}
   */
  function goNext(): void {
    if (isFinalStep.value) {
      return
    }
    noteFirstInteraction()
    track(TRACKING_EVENTS.tunnelStepAnswered, {
      tunnel: tunnelId,
      step: stepIndex.value + 1,
      question: currentStep.value,
      answers: currentStepAnswers(),
    })
    stepIndex.value += 1
    if (isFinalStep.value) {
      trackTunnelCompletion()
    }
  }

  /**
   * Moves back one step.
   * @returns {void}
   */
  function goBack(): void {
    if (stepIndex.value === 0) {
      return
    }
    stepIndex.value -= 1
  }

  /**
   * Picks a style.
   * @param {string} templateId - The template id.
   * @returns {void}
   */
  function selectTemplate(templateId: string): void {
    noteFirstInteraction()
    state.templateId = templateId
  }

  /**
   * Picks a colour, which replaces the logo colour until the visitor asks for it again; null goes back to the template colours.
   * @param {string | null} color - The colour as `#rrggbb`, or null.
   * @returns {void}
   */
  function selectColor(color: string | null): void {
    noteFirstInteraction()
    state.chosenColor = color
    state.usesLogoColor = false
  }

  /**
   * Keeps or drops the colour read from the logo.
   * @param {boolean} usesLogoColor - True to paint the demo with the logo colour.
   * @returns {void}
   */
  function setUsesLogoColor(usesLogoColor: boolean): void {
    noteFirstInteraction()
    state.usesLogoColor = usesLogoColor
  }

  /**
   * Fills the business fields from a Google Business profile.
   * @param {SiteAtelierGooglePlace} place - The profile picked.
   * @returns {void}
   */
  function applyGooglePlace(place: SiteAtelierGooglePlace): void {
    noteFirstInteraction()
    state.googlePlace = place
    state.businessName = place.name
    if (place.city) {
      state.city = place.city
    }
    if (place.phone) {
      state.phone = place.phone
    }
  }

  /**
   * Sets or removes the logo and reads its colour, painted at once unless the visitor picked a colour of his own.
   * @param {DibodevSiteAtelierPicture | null} logo - The logo, or null to remove it.
   * @returns {Promise<void>} Resolves once the colour is read.
   */
  async function setLogo(logo: DibodevSiteAtelierPicture | null): Promise<void> {
    noteFirstInteraction()
    const shouldPaintLogoColor: boolean = state.usesLogoColor || state.chosenColor === null
    state.logo = logo
    state.logoColor = logo ? await DominantColorUtils.fromImage(logo.dataUrl) : null
    state.usesLogoColor = state.logoColor !== null && shouldPaintLogoColor
  }

  /**
   * Adds photos, keeping six at most.
   * @param {DibodevSiteAtelierPicture[]} photos - The resized photos.
   * @returns {void}
   */
  function addPhotos(photos: DibodevSiteAtelierPicture[]): void {
    noteFirstInteraction()
    state.photos = [...state.photos, ...photos].slice(0, SITE_ATELIER_MAX_PHOTOS)
  }

  /**
   * Removes a photo.
   * @param {number} index - Its position.
   * @returns {void}
   */
  function removePhoto(index: number): void {
    state.photos = state.photos.filter(
      (_photo: DibodevSiteAtelierPicture, photoIndex: number): boolean => photoIndex !== index,
    )
  }

  /**
   * Checks or unchecks a service pill.
   * @param {string} serviceId - The service.
   * @returns {void}
   */
  function toggleService(serviceId: string): void {
    noteFirstInteraction()
    state.selectedServiceIds = state.selectedServiceIds.includes(serviceId)
      ? state.selectedServiceIds.filter((selectedServiceId: string): boolean => selectedServiceId !== serviceId)
      : [...state.selectedServiceIds, serviceId]
  }

  /**
   * Shows the demo as on a phone or as on a computer.
   * @param {DibodevSiteAtelierDevice} nextDevice - The screen to show.
   * @returns {void}
   */
  function setDevice(nextDevice: DibodevSiteAtelierDevice): void {
    device.value = nextDevice
  }

  /**
   * Re-encodes the logo and the first photos so the request stays under the size the server accepts.
   * @returns {Promise<SiteAtelierRequestAttachments>} The files that fit, and whether one had to be left out.
   */
  async function buildRequestAttachments(): Promise<SiteAtelierRequestAttachments> {
    const attachments: SiteAtelierDemoRequestAttachment[] = []
    let hasDroppedAttachment: boolean = false
    for (const picture of SiteAtelierPreviewUtils.attachmentsOf(state)) {
      const lighterDataUrl: string | null = await ImageResizeUtils.shrinkDataUrl(
        picture.dataUrl,
        SITE_ATELIER_REQUEST_ATTACHMENT_MAX_EDGE_PX,
        SITE_ATELIER_REQUEST_ATTACHMENT_MAX_BYTES,
      )
      if (lighterDataUrl) {
        attachments.push({ fileName: picture.fileName, dataUrl: lighterDataUrl })
      } else {
        hasDroppedAttachment = true
      }
    }
    return { attachments, hasDroppedAttachment }
  }

  /**
   * The Google Business profile as sent with the request.
   * @returns {SiteAtelierDemoRequestGooglePlace | null} The profile, or null when none was picked.
   */
  function requestGooglePlace(): SiteAtelierDemoRequestGooglePlace | null {
    if (!state.googlePlace) {
      return null
    }
    return {
      name: state.googlePlace.name,
      rating: state.googlePlace.rating,
      reviewCount: state.googlePlace.reviewCount,
      mapsUrl: state.googlePlace.mapsUrl,
      photoUrls: state.googlePlace.photoUrls,
    }
  }

  /**
   * Builds the body of the demo request.
   * @param {string} visitorEmail - Where the link will be sent.
   * @param {string} visitorPhone - Optional phone of the visitor.
   * @param {string} websiteUrl - The honeypot field, empty for a human.
   * @param {SiteAtelierDemoRequestAttachment[]} attachments - The files travelling with the request.
   * @returns {SiteAtelierDemoRequestPayload} The body.
   */
  function buildRequestPayload(
    visitorEmail: string,
    visitorPhone: string,
    websiteUrl: string,
    attachments: SiteAtelierDemoRequestAttachment[],
  ): SiteAtelierDemoRequestPayload {
    const source: LeadSource | null = getLeadSource()
    const services: string[] = tradeWording.serviceOptions
      .filter((option: DibodevSiteAtelierServiceOption): boolean => state.selectedServiceIds.includes(option.id))
      .map((option: DibodevSiteAtelierServiceOption): string => option.label)
    return {
      trade: trade.key,
      templateId: state.templateId,
      templateName: tradeWording.templates[state.templateId]?.name ?? state.templateId,
      color: SiteAtelierPreviewUtils.effectiveColorOf(state),
      businessName: state.businessName.trim(),
      city: state.city.trim(),
      phone: state.phone.trim(),
      suggestedSlug: SlugUtils.slugify(state.businessName),
      services,
      hasEmergencyService: trade.hasEmergencyService && state.hasEmergencyService,
      googlePlace: requestGooglePlace(),
      visitorEmail: visitorEmail.trim(),
      visitorPhone: visitorPhone.trim(),
      attachments,
      hasLogo: state.logo !== null,
      photoCount: state.photos.length,
      locale: locale.value,
      pagePath: route.path,
      source,
      websiteUrl,
    }
  }

  /**
   * HTTP status of a failed `$fetch`, when it has one.
   * @param {unknown} error - The error thrown.
   * @returns {number | null} The status, or null.
   */
  function readErrorStatus(error: unknown): number | null {
    const statusCode: unknown = typeof error === 'object' && error !== null ? Reflect.get(error, 'statusCode') : null
    return typeof statusCode === 'number' ? statusCode : null
  }

  /**
   * Posts the demo request.
   * @param {SiteAtelierDemoRequestPayload} payload - The body.
   * @returns {Promise<SiteAtelierDemoRequestResponse>} The answer of the server.
   */
  function postDemoRequest(payload: SiteAtelierDemoRequestPayload): Promise<SiteAtelierDemoRequestResponse> {
    return $fetch<SiteAtelierDemoRequestResponse>(SITE_ATELIER_DEMO_REQUEST_API_PATH, { method: 'POST', body: payload })
  }

  /**
   * Tells why a demo request cannot be sent yet.
   * @param {string} visitorEmail - The address typed.
   * @returns {SiteAtelierRequestValidationError} The reason, or null when the request can go.
   */
  function validateDemoRequest(visitorEmail: string): SiteAtelierRequestValidationError {
    if (!state.businessName.trim()) {
      return 'missingBusinessName'
    }
    if (!EMAIL_REGEX.test(visitorEmail.trim())) {
      return 'invalidEmail'
    }
    return null
  }

  /**
   * Sends the demo request; when the files make the body too heavy for the server, sends it again without them.
   * @param {string} visitorEmail - Where the link will be sent.
   * @param {string} visitorPhone - Optional phone of the visitor.
   * @param {string} websiteUrl - The honeypot field, empty for a human.
   * @returns {Promise<void>} Resolves once the request is answered.
   */
  async function submitDemoRequest(visitorEmail: string, visitorPhone: string, websiteUrl: string): Promise<void> {
    requestValidationError.value = validateDemoRequest(visitorEmail)
    if (requestValidationError.value) {
      return
    }
    requestStatus.value = 'sending'
    requestErrorStatus.value = null
    let status: ContactFormSubmissionStatus = 'success'
    const { attachments, hasDroppedAttachment }: SiteAtelierRequestAttachments = await buildRequestAttachments()
    wereAttachmentsDropped.value = hasDroppedAttachment
    try {
      try {
        await postDemoRequest(buildRequestPayload(visitorEmail, visitorPhone, websiteUrl, attachments))
      } catch (error: unknown) {
        if (readErrorStatus(error) !== HTTP_PAYLOAD_TOO_LARGE || attachments.length === 0) {
          throw error
        }
        wereAttachmentsDropped.value = true
        await postDemoRequest(buildRequestPayload(visitorEmail, visitorPhone, websiteUrl, []))
      }
      requestStatus.value = 'sent'
    } catch (error: unknown) {
      status = 'error'
      requestErrorStatus.value = readErrorStatus(error)
      requestStatus.value = 'error'
    }
    track(TRACKING_EVENTS.siteDemoRequested, {
      tunnel: tunnelId,
      trade: trade.key,
      template: state.templateId,
      status,
      hasLogo: state.logo !== null,
      photoCount: state.photos.length,
      usedGooglePlace: state.googlePlace !== null,
      hasPhone: visitorPhone.trim() !== '',
      serviceCount: state.selectedServiceIds.length,
      errorStatus: requestErrorStatus.value,
    })
  }

  /**
   * Sends the opening of the demo in a new tab.
   * @returns {void}
   */
  function trackDemoOpened(): void {
    track(TRACKING_EVENTS.siteDemoOpened, {
      tunnel: tunnelId,
      trade: trade.key,
      template: state.templateId,
      device: device.value,
    })
  }

  /* WATCHERS */
  watch(currentStep, (step: DibodevSiteAtelierStep): void => {
    if (STEPS_SHOWING_CHOSEN_SERVICES.includes(step)) {
      hasReachedServicesStep.value = true
    }
  })

  /* LIFECYCLE */
  onMounted((): void => {
    if (window.innerWidth < SITE_ATELIER_SIDE_BY_SIDE_MIN_WIDTH) {
      device.value = 'mobile'
    }
  })

  return {
    state,
    stepIndex,
    currentStep,
    isFinalStep,
    isLastQuestionStep,
    questionStepNumber,
    device,
    currentTemplate,
    previewMessage,
    requestStatus,
    requestErrorStatus,
    requestValidationError,
    wereAttachmentsDropped,
    goNext,
    goBack,
    noteFirstInteraction,
    selectTemplate,
    selectColor,
    setUsesLogoColor,
    applyGooglePlace,
    setLogo,
    addPhotos,
    removePhoto,
    toggleService,
    setDevice,
    submitDemoRequest,
    trackDemoOpened,
  }
}
