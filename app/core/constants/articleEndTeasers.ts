import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import { PHP_UPDATE_SERVICE_TEASER } from '~/core/constants/phpUpdateService/pageShared'

/** Teaser shown at the end of an article instead of the business software one, for articles on another subject. */
export const ARTICLE_END_TEASERS_BY_SLUG: Record<string, DibodevToolTeaserContent> = {
  'faille-php-octobre-2026-site-boutique-logiciel-que-faire': PHP_UPDATE_SERVICE_TEASER,
  'changer-version-php-ovh-faille-octobre-2026': PHP_UPDATE_SERVICE_TEASER,
  'changer-version-php-o2switch-faille-octobre-2026': PHP_UPDATE_SERVICE_TEASER,
  'changer-version-php-ionos-faille-octobre-2026': PHP_UPDATE_SERVICE_TEASER,
  'changer-version-php-hostinger-faille-octobre-2026': PHP_UPDATE_SERVICE_TEASER,
  'changer-version-php-infomaniak-faille-octobre-2026': PHP_UPDATE_SERVICE_TEASER,
  'changer-version-php-planethoster-faille-octobre-2026': PHP_UPDATE_SERVICE_TEASER,
}
