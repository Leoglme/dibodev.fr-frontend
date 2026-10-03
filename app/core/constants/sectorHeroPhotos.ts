import type { SectorKey } from '~/core/constants/projectEnums'

/** Widths of the sector photo files, from the smallest (fallback) to the largest. */
export const SECTOR_HERO_PHOTO_WIDTHS: number[] = [480, 960]

/** Photo at the top of each sector page, by file slug in `public/images/sectors` (Unsplash photos under the free licence, cropped to the 12:13 frame). */
export const SECTOR_HERO_PHOTO_FILE_SLUGS: Record<SectorKey, string> = {
  'sport-loisirs': 'sport-leisure',
  immobilier: 'real-estate',
  sante: 'health',
  'voyage-transport': 'travel',
  productivite: 'productivity',
  logistique: 'logistics',
  b2b: 'business',
  'reseaux-sociaux': 'social-media',
  gaming: 'gaming',
}
