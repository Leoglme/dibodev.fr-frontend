import type { DibodevSourceReference } from '~/core/types/DibodevSoftwareToolPage'

export const CARPENTER_WEBSITE_PAGE_UPDATED_AT: string = '2026-11-02'

/** Articles shown under the FAQ; the untranslated ones are left out of /en and /es automatically. */
export const CARPENTER_WEBSITE_PAGE_RELATED_ARTICLE_SLUGS: string[] = [
  'site-web-sur-mesure-menuiserie-2026',
  'site-web-artisans-attirer-clients-locaux',
]

/** RGE label: before signing, the professional tells the consumer in writing whether he holds it, with its proof, or what its absence changes for the aids (Consumer Code, article L224-114). */
export const RGE_LABEL_CLIENT_INFORMATION_SOURCE: DibodevSourceReference = {
  name: 'Entreprendre.Service-Public.fr',
  url: 'https://entreprendre.service-public.gouv.fr/vosdroits/F32251',
}
