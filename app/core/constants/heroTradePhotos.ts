import type { DibodevHeroTradePhoto } from '~/core/types/DibodevHeroTradePhoto'

/** Widths of the photo files, from the smallest (fallback) to the largest. */
export const HERO_TRADE_PHOTO_WIDTHS: number[] = [480, 960]

/** Trades shown in the home hero slideshow, in display order (Unsplash photos under the free licence, cropped to the 12:13 frame). */
export const HERO_TRADE_PHOTOS: DibodevHeroTradePhoto[] = [
  { id: 'business', fileSlug: 'business' },
  { id: 'shop', fileSlug: 'shop-counter' },
  { id: 'craftsman', fileSlug: 'craftsman' },
  { id: 'drivingSchool', fileSlug: 'driving-school' },
  { id: 'bikeShop', fileSlug: 'bike-shop' },
  { id: 'garage', fileSlug: 'garage' },
]
