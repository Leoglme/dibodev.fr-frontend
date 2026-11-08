import type { MailLocale } from '~~/server/types/mail/contact'
import type { SiteCheckReportPoint, SiteCheckToolKey } from '~~/server/types/tools/siteCheckReport'
import { SITE_CHECK_TOOL_CHECKER_ANCHOR_ID, SITE_CHECK_TOOL_PAGE_PATHS } from '~~/server/constants/siteCheckTools'

const SITE_ORIGIN: string = 'https://dibodev.fr'
const REPORT_UTM: string = 'utm_source=email&utm_medium=transactional&utm_campaign=site_check_report'
const VERSION_REGEX: RegExp = /^\d{1,4}(?:\.\d{1,4}){0,3}$/
const COUNT_REGEX: RegExp = /^\d{1,7}$/
const NAME_MAX_LENGTH: number = 80
const CONTROL_CHARACTERS_REGEX: RegExp = /\p{Cc}+/gu
const PLACEHOLDER_REGEX: RegExp = /\{(\w+)\}/g
const BLOG_PATH_PREFIXES: Record<MailLocale, string> = {
  fr: '/blog/',
  en: '/en/blog/',
  es: '/es/blog/',
}

/**
 * Helpers of the e-mailed reports: only values that cannot carry a message (versions, counts, our own names) reach a mail.
 * @class SiteCheckReportTextUtils
 */
export class SiteCheckReportTextUtils {
  /**
   * A version number read on a site, such as `8.2.35`.
   * @param {string | null | undefined} value - The value read.
   * @returns {string} The version, or an empty text when the value is anything else.
   */
  static filterVersionNumber(value: string | null | undefined): string {
    return typeof value === 'string' && VERSION_REGEX.test(value) ? value : ''
  }

  /**
   * A count or a year.
   * @param {number | string | null | undefined} value - The value read.
   * @returns {string} The number as text, or an empty text when the value is anything else.
   */
  static filterCount(value: number | string | null | undefined): string {
    const text: string = value === null || value === undefined ? '' : String(value)
    return COUNT_REGEX.test(text) ? text : ''
  }

  /**
   * A name from our own lists or from the WordPress.org directory, without control characters and kept short.
   * @param {string | null | undefined} value - The name.
   * @returns {string} The name, or an empty text.
   */
  static cleanKnownName(value: string | null | undefined): string {
    if (typeof value !== 'string') {
      return ''
    }
    return value.replace(CONTROL_CHARACTERS_REGEX, ' ').trim().slice(0, NAME_MAX_LENGTH).trim()
  }

  /**
   * Whether a template quotes one of the given placeholders.
   * @param {string} template - A text with `{placeholders}`.
   * @param {string[]} placeholders - The placeholder names looked for.
   * @returns {boolean} True when one of them is in the template.
   */
  static usesPlaceholder(template: string, placeholders: string[]): boolean {
    for (const match of template.matchAll(PLACEHOLDER_REGEX)) {
      if (placeholders.includes(match[1] ?? '')) {
        return true
      }
    }
    return false
  }

  /**
   * A plain fact of the report, without label nor status.
   * @param {string} text - The sentence.
   * @returns {SiteCheckReportPoint} The point.
   */
  static buildFactPoint(text: string): SiteCheckReportPoint {
    return { level: 'info', label: '', statusLabel: null, text, advice: null }
  }

  /**
   * A text, or null when it is empty.
   * @param {string | null | undefined} text - The text.
   * @returns {string | null} The trimmed text, or null.
   */
  static convertEmptyTextToNull(text: string | null | undefined): string | null {
    const trimmed: string = (text ?? '').trim()
    return trimmed === '' ? null : trimmed
  }

  /**
   * The page of a checker in the visitor's language, with the campaign of the e-mail and the anchor of the form.
   * @param {SiteCheckToolKey} tool - The checker.
   * @param {MailLocale} locale - The language of the e-mail.
   * @returns {string} The address.
   */
  static buildToolPageUrl(tool: SiteCheckToolKey, locale: MailLocale): string {
    return `${SITE_ORIGIN}${SITE_CHECK_TOOL_PAGE_PATHS[tool][locale]}?${REPORT_UTM}#${SITE_CHECK_TOOL_CHECKER_ANCHOR_ID}`
  }

  /**
   * A blog article in the visitor's language, with the campaign of the e-mail.
   * @param {string} slug - The slug of the article.
   * @param {MailLocale} locale - The language of the e-mail.
   * @returns {string} The address.
   */
  static buildBlogArticleUrl(slug: string, locale: MailLocale): string {
    return `${SITE_ORIGIN}${BLOG_PATH_PREFIXES[locale]}${slug}?${REPORT_UTM}`
  }
}
