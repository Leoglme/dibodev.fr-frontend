/**
 * Props of the message shown when an alert link lands on the site.
 * @type {DibodevAlertLandingSectionProps}
 * @property {string} icon - Name of the icon drawn above the title.
 * @property {string} title - The message title.
 * @property {string} text - The message.
 * @property {string} detail - A second line, specific to the alert topic, or an empty string.
 * @property {string} linkLabel - Text of the button under the message.
 * @property {string} linkTo - Where the button leads.
 */
export type DibodevAlertLandingSectionProps = {
  icon: string
  title: string
  text: string
  detail: string
  linkLabel: string
  linkTo: string
}
