import type { SeoMetaTag } from '~/core/types/SeoMetaTag'
import type { SharePreviewDetail } from '~/core/types/SharePreviewDetail'

/** The X card format only defines two label and value pairs. */
const MAX_SHARE_PREVIEW_DETAILS: number = 2

/**
 * Builds the twitter:label and twitter:data meta tags that Slack shows under a link preview.
 * @param {SharePreviewDetail[]} details - The details to show, in order; details without a value are skipped.
 * @returns {SeoMetaTag[]} The meta tags to add to the page head.
 */
export function buildSharePreviewDetailsMeta(details: SharePreviewDetail[]): SeoMetaTag[] {
  return details
    .filter((detail: SharePreviewDetail): boolean => detail.value.length > 0)
    .slice(0, MAX_SHARE_PREVIEW_DETAILS)
    .flatMap((detail: SharePreviewDetail, index: number): SeoMetaTag[] => [
      { name: `twitter:label${index + 1}`, content: detail.label },
      { name: `twitter:data${index + 1}`, content: detail.value },
    ])
}
