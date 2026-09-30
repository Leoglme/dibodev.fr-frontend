/**
 * Internal link displayed in the footer columns.
 * @type {DibodevFooterLink}
 * @property {string} title - The link label.
 * @property {string} to - The localized route.
 * @property {string} [key] - Stable identifier when the route may change with the locale.
 */
export type DibodevFooterLink = {
  title: string
  to: string
  key?: string
}

/**
 * External profile link displayed in the footer contact column.
 * @type {DibodevFooterSocialLink}
 * @property {string} name - The platform name (also the tracked `platform` property).
 * @property {string} link - The public profile URL.
 */
export type DibodevFooterSocialLink = {
  name: string
  link: string
}
