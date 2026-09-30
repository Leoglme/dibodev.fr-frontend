/** A hreflang link of the page head, keyed like the site-wide ones (useSeoMetaFromI18n) so a page can replace them. */
export type HeadAlternateLink = {
  rel: 'alternate'
  hreflang: string
  href: string
  key: string
}
