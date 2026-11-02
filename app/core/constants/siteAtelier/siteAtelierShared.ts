import type {
  DibodevSiteAtelierDevice,
  DibodevSiteAtelierScreenSize,
  DibodevSiteAtelierStep,
} from '~/core/types/DibodevSiteAtelier'

export const SITE_ATELIER_DEMO_ORIGIN: string = 'https://demo.dibodev.fr'

export const SITE_ATELIER_DEMO_EDIT_QUERY: string = '_edit=1'

export const SITE_ATELIER_PREVIEW_MESSAGE_TYPE: 'dlh:preview' = 'dlh:preview'
export const SITE_ATELIER_PREVIEW_READY_MESSAGE_TYPE: string = 'dlh:preview-ready'

export const SITE_ATELIER_GOOGLE_PLACE_API_PATH: string = '/api/site-atelier/google-place'
export const SITE_ATELIER_DEMO_REQUEST_API_PATH: string = '/api/site-atelier/demo-request'

export const SITE_ATELIER_STEPS: DibodevSiteAtelierStep[] = [
  'business',
  'style',
  'colors',
  'media',
  'services',
  'request',
]

export const SITE_ATELIER_QUESTION_STEP_COUNT: number = 5

export const SITE_ATELIER_SIDE_BY_SIDE_MIN_WIDTH: number = 1024

export const SITE_ATELIER_SCREEN_SIZES: Record<DibodevSiteAtelierDevice, DibodevSiteAtelierScreenSize> = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 },
}

export const SITE_ATELIER_FRAME_MAX_HEIGHT_RATIOS: Record<DibodevSiteAtelierDevice, number> = {
  desktop: 0.58,
  mobile: 0.62,
}
export const SITE_ATELIER_FRAME_MAX_HEIGHTS_PX: Record<DibodevSiteAtelierDevice, number> = {
  desktop: 560,
  mobile: 640,
}

export const SITE_ATELIER_PREVIEW_DEBOUNCE_MS: number = 200

export const SITE_ATELIER_PREVIEW_READY_TIMEOUT_MS: number = 10_000

/** Limits of the `dlh:preview` message: DevLeadHunter ignores a longer field rather than cutting it. */
export const SITE_ATELIER_BUSINESS_NAME_MAX_LENGTH: number = 120
export const SITE_ATELIER_CITY_MAX_LENGTH: number = 80
export const SITE_ATELIER_PHONE_MAX_LENGTH: number = 32
export const SITE_ATELIER_PREVIEW_PICTURE_MAX_LENGTH: number = 2_000_000
export const SITE_ATELIER_PREVIEW_SERVICE_MAX_COUNT: number = 12
export const SITE_ATELIER_PREVIEW_SERVICE_TITLE_MAX_LENGTH: number = 120
export const SITE_ATELIER_PREVIEW_SERVICE_DESCRIPTION_MAX_LENGTH: number = 400

export const SITE_ATELIER_MAX_PHOTOS: number = 6
export const SITE_ATELIER_IMAGE_MAX_EDGE_PX: number = 1_600
/** Base64 grows a file by a third: under this weight its data URL stays under `SITE_ATELIER_PREVIEW_PICTURE_MAX_LENGTH`. */
export const SITE_ATELIER_IMAGE_MAX_BYTES: number = 1_450_000
export const SITE_ATELIER_MAX_ATTACHMENTS: number = 3
/** The server refuses a request body over 1 MB: each file travels re-encoded under this weight, three of them staying under the limit. */
export const SITE_ATELIER_REQUEST_ATTACHMENT_MAX_EDGE_PX: number = 1_280
export const SITE_ATELIER_REQUEST_ATTACHMENT_MAX_BYTES: number = 230_000

export const SITE_ATELIER_EMAIL_MAX_LENGTH: number = 254

export const SITE_ATELIER_TEXT_FIELD_CLASS: string =
  'focus:border-primary placeholder:text-muted relative flex h-12 w-full appearance-none items-center justify-center rounded-lg border border-gray-400 bg-white pl-3 text-gray-100 outline-none placeholder:text-base hover:border-gray-100'

export const SITE_ATELIER_GOOGLE_SEARCH_MIN_LENGTH: number = 3
export const SITE_ATELIER_GOOGLE_SEARCH_DEBOUNCE_MS: number = 350
