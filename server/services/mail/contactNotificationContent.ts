import type { ContactMailAction, ContactMailDetailRow, OwnerNotificationContact } from '~~/server/types/mail/contact'
import { CONTACT_LOCALE_NAMES } from '~~/server/services/mail/contactMailTexts'
import { formatAcquisitionSource } from '~~/server/services/mail/formatLeadSource'
import { ContactUtils } from '~~/server/utils/ContactUtils'
import { MailDateUtils } from '~~/server/utils/MailDateUtils'

/** Non-breaking hyphen, so the label never breaks as "E-" / "mail". */
const EMAIL_LABEL: string = 'E\u2011mail'

/**
 * Builds the buttons of a notification e-mail: write back first, then call and WhatsApp when a phone number was given.
 *
 * @param {string | null} email - Visitor e-mail, or null.
 * @param {string | null} phone - Visitor phone as typed, or null.
 * @param {string} emailActionLabel - Label of the e-mail button ("Répondre", "Écrire").
 * @param {string} replySubject - Subject of the e-mail opened by the e-mail button.
 * @returns {ContactMailAction[]} The buttons, the first one highlighted.
 */
export function buildOwnerActions(
  email: string | null,
  phone: string | null,
  emailActionLabel: string,
  replySubject: string,
): ContactMailAction[] {
  const actions: ContactMailAction[] = []
  if (email) {
    actions.push({ label: emailActionLabel, href: ContactUtils.buildMailtoHref(email, replySubject), isPrimary: true })
  }
  if (phone) {
    actions.push({ label: 'Appeler', href: ContactUtils.buildTelHref(phone), isPrimary: actions.length === 0 })

    const whatsappUrl: string | null = ContactUtils.buildWhatsappUrl(phone)
    if (whatsappUrl) {
      actions.push({ label: 'WhatsApp', href: whatsappUrl, isPrimary: false })
    }
  }
  return actions
}

/**
 * Builds the details table of a notification e-mail: contact, acquisition source, landing page, form language and date.
 *
 * @param {OwnerNotificationContact} contact - Contact details of the visitor.
 * @returns {ContactMailDetailRow[]} The rows, without the empty ones.
 */
export function buildOwnerDetailRows(contact: OwnerNotificationContact): ContactMailDetailRow[] {
  const rows: ContactMailDetailRow[] = []
  if (contact.email) {
    rows.push({ label: EMAIL_LABEL, value: contact.email, href: `mailto:${contact.email}` })
  }
  if (contact.phone) {
    rows.push({ label: 'Téléphone', value: contact.phone, href: ContactUtils.buildTelHref(contact.phone) })
  }

  const acquisitionSource: string = formatAcquisitionSource(contact.source)
  if (acquisitionSource) {
    rows.push({ label: 'Source', value: acquisitionSource, href: null })
  }

  const landingPage: string | null = contact.source?.landingPage ?? null
  if (landingPage) {
    const landingPageUrl: string | null = landingPage.startsWith('/') ? `https://dibodev.fr${landingPage}` : null
    rows.push({ label: 'Page d’entrée', value: landingPage, href: landingPageUrl })
  }

  rows.push({ label: 'Langue', value: CONTACT_LOCALE_NAMES[contact.locale], href: null })
  rows.push({ label: 'Reçue le', value: MailDateUtils.formatFrenchDateAndTime(contact.receivedAt), href: null })
  return rows
}

/**
 * Formats the rows of a details table as plain-text lines ("Source : Recherche Google").
 *
 * @param {ContactMailDetailRow[]} rows - Rows of the table.
 * @returns {string[]} One line per row.
 */
export function formatDetailRowsAsText(rows: ContactMailDetailRow[]): string[] {
  return rows.map((row: ContactMailDetailRow): string => `${row.label}\u00a0: ${row.value}`)
}
