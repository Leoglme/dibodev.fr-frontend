import type { LeadSource } from '~~/server/types/mail/contact'

/**
 * Builds a human-readable acquisition source label from a lead source (UTM first, then referrer, then direct).
 * @param {LeadSource | null} source - The first-touch source captured on the client, or null when unavailable.
 * @returns {string} A readable label, or an empty string when no source object was provided.
 */
export function formatAcquisitionSource(source: LeadSource | null): string {
  if (!source) {
    return ''
  }

  if (source.utmSource) {
    const base: string = source.utmMedium ? `${source.utmSource} / ${source.utmMedium}` : source.utmSource
    return source.utmCampaign ? `${base} (${source.utmCampaign})` : base
  }

  if (source.referrer) {
    return source.referrer
  }

  return 'Direct / inconnu'
}
