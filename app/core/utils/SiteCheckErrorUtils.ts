import type { DibodevSiteCheckErrorKind } from '~/core/types/DibodevSiteCheck'

const INVALID_INPUT_STATUS: number = 400
const RATE_LIMITED_STATUS: number = 429
const UNREACHABLE_STATUS: number = 502

/** Reads what a failed call to a site check API means for the visitor. */
export class SiteCheckErrorUtils {
  /**
   * Reads the HTTP status of a failed `$fetch`, when it has one.
   * @param {unknown} error - The error thrown.
   * @returns {number | null} The status, or null for a network failure.
   */
  static readStatus(error: unknown): number | null {
    if (typeof error !== 'object' || error === null) {
      return null
    }
    const failure: { statusCode?: unknown; response?: { status?: unknown } } = error

    if (typeof failure.statusCode === 'number') {
      return failure.statusCode
    }
    if (typeof failure.response?.status === 'number') {
      return failure.response.status
    }
    return null
  }

  /**
   * Maps a failed call to the message shown: a wrong address, too many checks, an unreachable site, or a failure here.
   * @param {unknown} error - The error thrown.
   * @returns {DibodevSiteCheckErrorKind} The kind of error.
   */
  static kindOf(error: unknown): DibodevSiteCheckErrorKind {
    const status: number | null = SiteCheckErrorUtils.readStatus(error)

    if (status === INVALID_INPUT_STATUS) {
      return 'invalid'
    }
    if (status === RATE_LIMITED_STATUS) {
      return 'rateLimited'
    }
    if (status === UNREACHABLE_STATUS) {
      return 'unreachable'
    }
    return 'failed'
  }
}
