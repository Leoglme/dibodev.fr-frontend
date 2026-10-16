import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { CategoryKey, SectorKey } from '~/core/constants/projectEnums'
import { parseCategoryFromSlug } from '~/core/constants/categorySlugs'
import { parseSectorFromSlug } from '~/core/constants/sectorSlugs'
import { TRANSLATED_PAGE_ANCHOR_IDS_BY_FRENCH_ID } from '~/core/constants/translatedPageAnchorIds'
import { getCategoryPagePath } from '~/composables/useCategorySeo'
import { getSectorPagePath } from '~/composables/useSectorSeo'
import { StoryblokLinkUtils } from '~/core/utils/StoryblokLinkUtils'

const CATEGORY_PAGE_PATH_PATTERN: RegExp =
  /^(?:\/(en|es))?\/(?:projets\/categorie|projects\/category|proyectos\/categoria)\/([^/?#]+)\/?$/
const SECTOR_PAGE_PATH_PATTERN: RegExp =
  /^(?:\/(en|es))?\/(?:projets\/secteur|projects\/sector|proyectos\/sector)\/([^/?#]+)\/?$/

/**
 * Reads a locale code, French when it is not one of the site languages.
 *
 * @param {string | undefined} code - Locale code, or the "en" / "es" prefix of a path.
 * @returns {SupportedLocale} The site language.
 */
function toSupportedLocale(code: string | undefined): SupportedLocale {
  return code === 'en' || code === 'es' ? code : 'fr'
}

/**
 * Localizes a category or sector page path, whose slug is translated and unknown to localePath.
 *
 * @param {string} path - Internal path without its anchor.
 * @param {SupportedLocale} targetLocale - Language of the page being rendered.
 * @returns {string | null} The localized path, or null when the path is not a known category or sector page.
 */
function localizeTranslatedSlugPath(path: string, targetLocale: SupportedLocale): string | null {
  const categoryMatch: RegExpExecArray | null = CATEGORY_PAGE_PATH_PATTERN.exec(path)
  const categoryKey: CategoryKey | null = categoryMatch?.[2]
    ? parseCategoryFromSlug(toSupportedLocale(categoryMatch[1]), categoryMatch[2])
    : null
  if (categoryKey) {
    return getCategoryPagePath(targetLocale, categoryKey)
  }
  const sectorMatch: RegExpExecArray | null = SECTOR_PAGE_PATH_PATTERN.exec(path)
  const sectorKey: SectorKey | null = sectorMatch?.[2]
    ? parseSectorFromSlug(toSupportedLocale(sectorMatch[1]), sectorMatch[2])
    : null
  if (sectorKey) {
    return getSectorPagePath(targetLocale, sectorKey)
  }
  return null
}

/**
 * Gives the function that turns an internal link of an article into the same page in the current language.
 *
 * @returns {(href: string) => string} External links are returned as is; on an English page, "/prix-logiciel-sur-mesure#sources" becomes "/en/custom-software-price-barometer#sources" and "/outils/logiciel-auto-ecole#logiciels" becomes "/en/tools/driving-school-software#software".
 */
export function useLocalizedInternalHref(): (href: string) => string {
  const { locale } = useI18n()
  const localePath: ReturnType<typeof useLocalePath> = useLocalePath()

  return (href: string): string => {
    if (!StoryblokLinkUtils.isInternalPath(href)) {
      return href
    }
    const targetLocale: SupportedLocale = toSupportedLocale(locale.value)
    const anchorIndex: number = href.indexOf('#')
    const path: string = anchorIndex === -1 ? href : href.slice(0, anchorIndex)
    const anchor: string = anchorIndex === -1 ? '' : href.slice(anchorIndex + 1)
    const localizedPath: string =
      localizeTranslatedSlugPath(path, targetLocale) ?? (localePath(path, targetLocale) || path)
    if (!anchor) {
      return localizedPath
    }
    const localizedAnchor: string = TRANSLATED_PAGE_ANCHOR_IDS_BY_FRENCH_ID[anchor]?.[targetLocale] ?? anchor
    return `${localizedPath}#${localizedAnchor}`
  }
}
