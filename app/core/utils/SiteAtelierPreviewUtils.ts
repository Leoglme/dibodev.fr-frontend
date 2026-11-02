import type { SiteAtelierDemoRequestAttachment } from '~~/server/types/tools/siteAtelier'
import type {
  DibodevSiteAtelierPicture,
  DibodevSiteAtelierPreviewIdentity,
  DibodevSiteAtelierPreviewMessage,
  DibodevSiteAtelierPreviewServiceCard,
  DibodevSiteAtelierServiceOption,
  DibodevSiteAtelierState,
  DibodevSiteAtelierTradeWording,
} from '~/core/types/DibodevSiteAtelier'
import type { DibodevTemplatePalette, DibodevTradeWebsiteTemplate } from '~/core/types/DibodevTradeWebsite'
import {
  SITE_ATELIER_BUSINESS_NAME_MAX_LENGTH,
  SITE_ATELIER_CITY_MAX_LENGTH,
  SITE_ATELIER_DEMO_EDIT_QUERY,
  SITE_ATELIER_DEMO_ORIGIN,
  SITE_ATELIER_MAX_ATTACHMENTS,
  SITE_ATELIER_PHONE_MAX_LENGTH,
  SITE_ATELIER_PREVIEW_MESSAGE_TYPE,
  SITE_ATELIER_PREVIEW_PICTURE_MAX_LENGTH,
  SITE_ATELIER_PREVIEW_SERVICE_DESCRIPTION_MAX_LENGTH,
  SITE_ATELIER_PREVIEW_SERVICE_MAX_COUNT,
  SITE_ATELIER_PREVIEW_SERVICE_TITLE_MAX_LENGTH,
} from '~/core/constants/siteAtelier/siteAtelierShared'

/** Builds what the demo frame receives from the visitor's choices, within the limits DevLeadHunter accepts. */
export class SiteAtelierPreviewUtils {
  private static readonly HEX_COLOR_REGEX: RegExp = /^#[0-9a-f]{6}$/i
  private static readonly CONTROL_CHARACTERS_REGEX: RegExp = /\p{Cc}+/gu
  private static readonly ACCEPTED_PICTURE_URL_REGEX: RegExp = /^(https:\/\/|data:image\/)/
  private static readonly GALLERY_START_INDEX: number = 2

  /**
   * Address of the showcase demo of a template, in live-edit mode for the frame or plain for a new tab.
   * @param {DibodevTradeWebsiteTemplate} template - The template.
   * @param {boolean} isLiveEdit - Whether the address carries the live-edit flag.
   * @returns {string} The address.
   */
  public static demoUrlOf(template: DibodevTradeWebsiteTemplate, isLiveEdit: boolean): string {
    const demoUrl: string = `${SITE_ATELIER_DEMO_ORIGIN}/${template.demoSlug}`
    return isLiveEdit ? `${demoUrl}?${SITE_ATELIER_DEMO_EDIT_QUERY}` : demoUrl
  }

  /**
   * The colour the visitor gave the site: the logo's when he keeps it, the one he picked otherwise.
   * @param {DibodevSiteAtelierState} state - The visitor's choices.
   * @returns {string | null} The colour as `#rrggbb`, or null while the template keeps its own colours.
   */
  public static effectiveColorOf(state: DibodevSiteAtelierState): string | null {
    if (state.usesLogoColor && state.logoColor) {
      return state.logoColor
    }
    return state.chosenColor
  }

  /**
   * The palette sent to the demo: the visitor's colour on `primary` and `accent` (the call buttons), the template's `secondary` kept.
   * @param {DibodevTradeWebsiteTemplate} template - The template picked.
   * @param {string | null} color - The visitor's colour, or null.
   * @returns {DibodevTemplatePalette | null} The three colours, or null to keep the published ones.
   */
  public static paletteOf(template: DibodevTradeWebsiteTemplate, color: string | null): DibodevTemplatePalette | null {
    if (!color || !SiteAtelierPreviewUtils.HEX_COLOR_REGEX.test(color)) {
      return null
    }
    return { primary: color, secondary: template.defaultPalette.secondary, accent: color }
  }

  /**
   * Builds the `dlh:preview` message of the visitor's choices: always the whole state, a null field keeping the published value.
   * @param {DibodevSiteAtelierState} state - The visitor's choices.
   * @param {DibodevTradeWebsiteTemplate} template - The template picked.
   * @param {DibodevSiteAtelierTradeWording} tradeWording - The trade texts (service labels and their description).
   * @param {boolean} includesServices - Whether the visitor has reached the services step, so his pills replace the published services.
   * @returns {DibodevSiteAtelierPreviewMessage} The message, ready to be posted.
   */
  public static buildPreviewMessage(
    state: DibodevSiteAtelierState,
    template: DibodevTradeWebsiteTemplate,
    tradeWording: DibodevSiteAtelierTradeWording,
    includesServices: boolean,
  ): DibodevSiteAtelierPreviewMessage {
    return {
      type: SITE_ATELIER_PREVIEW_MESSAGE_TYPE,
      templateId: template.id,
      palette: SiteAtelierPreviewUtils.paletteOf(template, SiteAtelierPreviewUtils.effectiveColorOf(state)),
      photos: SiteAtelierPreviewUtils.previewPhotosOf(state),
      services: includesServices ? SiteAtelierPreviewUtils.serviceCardsOf(state, tradeWording) : null,
      identity: SiteAtelierPreviewUtils.identityOf(state),
    }
  }

  /**
   * The files sent with the demo request: the logo first, then the first uploaded photos, three at most.
   * @param {DibodevSiteAtelierState} state - The visitor's choices.
   * @returns {SiteAtelierDemoRequestAttachment[]} The attachments.
   */
  public static attachmentsOf(state: DibodevSiteAtelierState): SiteAtelierDemoRequestAttachment[] {
    const pictures: DibodevSiteAtelierPicture[] = state.logo ? [state.logo, ...state.photos] : [...state.photos]
    return pictures.slice(0, SITE_ATELIER_MAX_ATTACHMENTS).map(
      (picture: DibodevSiteAtelierPicture): SiteAtelierDemoRequestAttachment => ({
        fileName: picture.fileName,
        dataUrl: picture.dataUrl,
      }),
    )
  }

  /**
   * One line of text within a limit, or null when nothing is left.
   * @param {string} text - The text typed by the visitor.
   * @param {number} maxLength - Longest text DevLeadHunter accepts for this field.
   * @returns {string | null} The cleaned text, or null.
   */
  private static singleLineWithin(text: string, maxLength: number): string | null {
    const singleLine: string = text.replace(SiteAtelierPreviewUtils.CONTROL_CHARACTERS_REGEX, ' ').trim()
    const boundedText: string = singleLine.slice(0, maxLength).trim()
    return boundedText || null
  }

  /**
   * Tells whether DevLeadHunter will accept a picture.
   * @param {string} pictureUrl - An https address or a data URL.
   * @returns {boolean} True when it is a picture under the size limit.
   */
  private static isAcceptedPicture(pictureUrl: string): boolean {
    return (
      pictureUrl.length <= SITE_ATELIER_PREVIEW_PICTURE_MAX_LENGTH &&
      SiteAtelierPreviewUtils.ACCEPTED_PICTURE_URL_REGEX.test(pictureUrl)
    )
  }

  /**
   * The identity merged into the demo; the fields left empty keep the showcase business.
   * @param {DibodevSiteAtelierState} state - The visitor's choices.
   * @returns {DibodevSiteAtelierPreviewIdentity | null} The identity, or null when the visitor has typed nothing.
   */
  private static identityOf(state: DibodevSiteAtelierState): DibodevSiteAtelierPreviewIdentity | null {
    const logoUrl: string | null =
      state.logo && SiteAtelierPreviewUtils.isAcceptedPicture(state.logo.dataUrl) ? state.logo.dataUrl : null
    const identity: DibodevSiteAtelierPreviewIdentity = {
      businessName: SiteAtelierPreviewUtils.singleLineWithin(state.businessName, SITE_ATELIER_BUSINESS_NAME_MAX_LENGTH),
      phone: SiteAtelierPreviewUtils.singleLineWithin(state.phone, SITE_ATELIER_PHONE_MAX_LENGTH),
      city: SiteAtelierPreviewUtils.singleLineWithin(state.city, SITE_ATELIER_CITY_MAX_LENGTH),
      area: null,
      logoUrl,
    }
    const hasAnyField: boolean = Object.values(identity).some((value: string | null): boolean => value !== null)
    return hasAnyField ? identity : null
  }

  /**
   * The pictures of the demo: the visitor's uploads, or the photos of his Google profile; one or two pictures are repeated so no block stays empty.
   * @param {DibodevSiteAtelierState} state - The visitor's choices.
   * @returns {string[] | null} Header, "about" picture, then the gallery, or null to keep the template's photos.
   */
  private static previewPhotosOf(state: DibodevSiteAtelierState): string[] | null {
    const uploadedPictures: string[] = state.photos.map((photo: DibodevSiteAtelierPicture): string => photo.dataUrl)
    const sourcePictures: string[] =
      uploadedPictures.length > 0 ? uploadedPictures : (state.googlePlace?.photoUrls ?? [])
    const pictures: string[] = sourcePictures.filter((pictureUrl: string): boolean =>
      SiteAtelierPreviewUtils.isAcceptedPicture(pictureUrl),
    )
    const headerPicture: string | undefined = pictures[0]
    if (!headerPicture) {
      return null
    }
    const aboutPicture: string = pictures[1] ?? headerPicture
    const galleryPictures: string[] =
      pictures.length > SiteAtelierPreviewUtils.GALLERY_START_INDEX
        ? pictures.slice(SiteAtelierPreviewUtils.GALLERY_START_INDEX)
        : pictures
    return [headerPicture, aboutPicture, ...galleryPictures]
  }

  /**
   * The service cards of the demo, one per pill checked.
   * @param {DibodevSiteAtelierState} state - The visitor's choices.
   * @param {DibodevSiteAtelierTradeWording} tradeWording - The trade texts.
   * @returns {DibodevSiteAtelierPreviewServiceCard[] | null} The cards, or null when no pill is checked.
   */
  private static serviceCardsOf(
    state: DibodevSiteAtelierState,
    tradeWording: DibodevSiteAtelierTradeWording,
  ): DibodevSiteAtelierPreviewServiceCard[] | null {
    const description: string = tradeWording.serviceDescription.slice(
      0,
      SITE_ATELIER_PREVIEW_SERVICE_DESCRIPTION_MAX_LENGTH,
    )
    const cards: DibodevSiteAtelierPreviewServiceCard[] = tradeWording.serviceOptions
      .filter((option: DibodevSiteAtelierServiceOption): boolean => state.selectedServiceIds.includes(option.id))
      .slice(0, SITE_ATELIER_PREVIEW_SERVICE_MAX_COUNT)
      .map(
        (option: DibodevSiteAtelierServiceOption): DibodevSiteAtelierPreviewServiceCard => ({
          title: option.label.slice(0, SITE_ATELIER_PREVIEW_SERVICE_TITLE_MAX_LENGTH),
          description,
          image: '',
        }),
      )
    return cards.length > 0 ? cards : null
  }
}
