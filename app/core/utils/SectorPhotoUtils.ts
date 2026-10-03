import type { SectorKey } from '~/core/constants/projectEnums'
import { SECTOR_PHOTO_FILE_SLUGS, SECTOR_PHOTO_WIDTHS } from '~/core/constants/sectorPhotos'

/**
 * Paths of the sector photos served from `public/images/sectors`, one file per width.
 */
export class SectorPhotoUtils {
  private static readonly FOLDER: string = '/images/sectors'

  /**
   * URL of the smallest photo file of a sector, the image fallback.
   * @param {SectorKey} sectorKey - The sector.
   * @returns {string} The URL of the photo file.
   */
  public static getFallbackUrl(sectorKey: SectorKey): string {
    return this.buildUrl(sectorKey, SECTOR_PHOTO_WIDTHS[0]!)
  }

  /**
   * Srcset listing every width of the photo of a sector.
   * @param {SectorKey} sectorKey - The sector.
   * @returns {string} The srcset value.
   */
  public static getSrcset(sectorKey: SectorKey): string {
    return SECTOR_PHOTO_WIDTHS.map((width: number): string => `${this.buildUrl(sectorKey, width)} ${width}w`).join(', ')
  }

  /**
   * URL of the photo file of a sector at a given width.
   * @param {SectorKey} sectorKey - The sector.
   * @param {number} width - Width of the file, in pixels.
   * @returns {string} The URL of the photo file.
   */
  private static buildUrl(sectorKey: SectorKey, width: number): string {
    return `${this.FOLDER}/${SECTOR_PHOTO_FILE_SLUGS[sectorKey]}-${width}.webp`
  }
}
