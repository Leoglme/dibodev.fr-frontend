import type { DibodevBusinessSoftwareHeroSlide } from '~/core/types/DibodevBusinessSoftwareHeroSlide'

/** Widths of the photo files, from the smallest (fallback) to the largest. */
export const BUSINESS_SOFTWARE_HERO_PHOTO_WIDTHS: number[] = [480, 960]

/** Trades and the software built for them, shown in the hero of the business software page, in display order. */
export const BUSINESS_SOFTWARE_HERO_SLIDES: DibodevBusinessSoftwareHeroSlide[] = [
  { id: 'services', fileSlug: 'services', hasTransparentScreenshot: false },
  { id: 'sailingSchool', fileSlug: 'sailing-school', hasTransparentScreenshot: true },
  { id: 'stock', fileSlug: 'stock', hasTransparentScreenshot: false },
  { id: 'drivingSchool', fileSlug: 'driving-school', hasTransparentScreenshot: false },
  { id: 'cardShop', fileSlug: 'card-shop', hasTransparentScreenshot: false },
  { id: 'radiology', fileSlug: 'radiology', hasTransparentScreenshot: false },
  { id: 'construction', fileSlug: 'construction', hasTransparentScreenshot: false },
  { id: 'developers', fileSlug: 'developers', hasTransparentScreenshot: false },
]
