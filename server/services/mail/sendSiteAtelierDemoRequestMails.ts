import type { DateTime } from 'luxon'
import type { ContactMailAction, ContactMailDetailRow, ContactMailNextStep } from '~~/server/types/mail/contact'
import type {
  SiteAtelierAcknowledgementStepTexts,
  SiteAtelierAcknowledgementTexts,
  SiteAtelierDecodedAttachment,
  SiteAtelierDemoRequest,
} from '~~/server/types/tools/siteAtelier'
import type { MailAttachment } from '~~/server/services/mail/sendMail'
import type { DibodevTradeWebsiteDefinition, DibodevTradeWebsiteTemplate } from '~~/app/core/types/DibodevTradeWebsite'
import { TRADE_WEBSITE_CATALOG } from '~~/app/core/constants/tradeWebsites/tradeWebsiteCatalog'
import { TRADE_WEBSITE_WORDINGS } from '~~/app/core/constants/tradeWebsites/tradeWebsiteWording'
import { registerHandlebarsHelpers } from '~~/server/helpers/HandlebarsHelpers'
import { OWNER_PHONE_HREF } from '~~/server/services/mail/contactMailTexts'
import {
  buildOwnerActions,
  buildOwnerDetailRows,
  formatDetailRowsAsText,
} from '~~/server/services/mail/contactNotificationContent'
import { EMAIL_SIGNATURE_HTML, EMAIL_SIGNATURE_TEXT } from '~~/server/services/mail/emailSignature'
import { ownerEmail, websiteName } from '~~/server/services/mail/mail.config'
import MjmlService from '~~/server/services/mail/mjml/MjmlService'
import { sendMail } from '~~/server/services/mail/sendMail'
import {
  SITE_ATELIER_ACKNOWLEDGEMENT_TEXTS,
  SITE_ATELIER_OWNER_FROM_NAME,
} from '~~/server/services/mail/siteAtelierMailTexts'
import { ContactUtils } from '~~/server/utils/ContactUtils'
import { MailDateUtils } from '~~/server/utils/MailDateUtils'
import { PagePathUtils } from '~~/server/utils/PagePathUtils'

const DEMO_ORIGIN: string = 'https://demo.dibodev.fr'
const TRADE_WEBSITES_HUB_URL: string = 'https://dibodev.fr/site-internet-par-metier'
const ACKNOWLEDGEMENT_UTM: string = 'utm_source=email&utm_medium=transactional&utm_campaign=site_demo_acknowledgement'
const TEST_SUBJECT_PREFIX: string = process.env.NODE_ENV === 'production' ? '' : '[TEST] '

/**
 * The showcase demo of the template the visitor picked, for the owner to open it from the e-mail.
 * @param {SiteAtelierDemoRequest} request - The demo request.
 * @returns {string | null} The demo address, or null when the template is unknown.
 */
function showcaseDemoUrlOf(request: SiteAtelierDemoRequest): string | null {
  const trade: DibodevTradeWebsiteDefinition | undefined = TRADE_WEBSITE_CATALOG.find(
    (candidate: DibodevTradeWebsiteDefinition): boolean => candidate.key === request.trade,
  )
  const template: DibodevTradeWebsiteTemplate | undefined = trade?.templates.find(
    (candidate: DibodevTradeWebsiteTemplate): boolean => candidate.id === request.templateId,
  )
  return template ? `${DEMO_ORIGIN}/${template.demoSlug}` : null
}

/**
 * Describes the logo and photos for the owner: chosen by the visitor, and attached or not.
 * @param {SiteAtelierDemoRequest} request - The demo request.
 * @returns {{ logo: string; photos: string }} The two lines.
 */
function describePictures(request: SiteAtelierDemoRequest): { logo: string; photos: string } {
  const attachedPhotoCount: number = request.hasLogo ? request.attachments.length - 1 : request.attachments.length
  const isLogoAttached: boolean = request.hasLogo && request.attachments.length > 0
  let logo: string = 'Non fourni'
  if (request.hasLogo) {
    logo = isLogoAttached ? 'Joint à cet e-mail' : 'Fourni, trop lourd pour l’e-mail'
  }
  const photos: string =
    request.photoCount === 0
      ? 'Aucune (photos du modèle)'
      : `${request.photoCount} choisie(s), ${Math.max(attachedPhotoCount, 0)} jointe(s)`
  return { logo, photos }
}

/**
 * The answers of the visitor, as the owner reads them to build the demo in DevLeadHunter.
 * @param {SiteAtelierDemoRequest} request - The demo request.
 * @returns {ContactMailDetailRow[]} The rows, without the empty ones.
 */
function buildDemoRows(request: SiteAtelierDemoRequest): ContactMailDetailRow[] {
  const rows: ContactMailDetailRow[] = []
  rows.push({ label: 'Métier', value: request.tradeLabel, href: null })
  rows.push({
    label: 'Style',
    value: `${request.templateName} (${request.templateId})`,
    href: showcaseDemoUrlOf(request),
  })
  rows.push({ label: 'Couleur', value: request.color ?? 'Couleurs du modèle', href: null })
  rows.push({ label: 'Nom', value: request.businessName, href: null })
  if (request.city) {
    rows.push({ label: 'Ville', value: request.city, href: null })
  }
  if (request.phone) {
    rows.push({ label: 'Téléphone affiché', value: request.phone, href: ContactUtils.buildTelHref(request.phone) })
  }
  if (request.services.length > 0) {
    rows.push({ label: 'Prestations', value: request.services.join(', '), href: null })
  }
  if (request.hasEmergencyService) {
    rows.push({ label: 'Urgence 7 j / 7', value: 'Oui', href: null })
  }
  if (request.googlePlace) {
    const placeParts: string[] = [request.googlePlace.name]
    if (request.googlePlace.rating !== null) {
      placeParts.push(`${request.googlePlace.rating.toLocaleString('fr-FR')} ★`)
    }
    if (request.googlePlace.reviewCount !== null) {
      placeParts.push(`${request.googlePlace.reviewCount} avis`)
    }
    rows.push({ label: 'Fiche Google', value: placeParts.join(' · '), href: request.googlePlace.mapsUrl })
    request.googlePlace.photoUrls.forEach((photoUrl: string, index: number): void => {
      rows.push({ label: `Photo de la fiche ${index + 1}`, value: 'Ouvrir', href: photoUrl })
    })
  }
  const pictures: { logo: string; photos: string } = describePictures(request)
  rows.push({ label: 'Logo', value: pictures.logo, href: null })
  rows.push({ label: 'Photos', value: pictures.photos, href: null })
  if (request.suggestedSlug) {
    rows.push({ label: 'Adresse proposée', value: request.suggestedSlug, href: null })
  }
  return rows
}

/**
 * Turns the decoded pictures into e-mail attachments.
 * @param {SiteAtelierDecodedAttachment[]} attachments - The pictures of the request.
 * @returns {MailAttachment[]} The attachments.
 */
function toMailAttachments(attachments: SiteAtelierDecodedAttachment[]): MailAttachment[] {
  return attachments.map(
    (attachment: SiteAtelierDecodedAttachment): MailAttachment => ({
      fileName: attachment.fileName,
      contentType: attachment.contentType,
      base64Content: attachment.base64Content,
    }),
  )
}

/**
 * Sends the owner the demo request, with every answer, the visitor's details and the pictures attached.
 * @param {SiteAtelierDemoRequest} request - The checked demo request.
 * @returns {Promise<void>} Resolves once the e-mail is sent.
 */
export async function sendSiteAtelierOwnerMail(request: SiteAtelierDemoRequest): Promise<void> {
  registerHandlebarsHelpers()

  const receivedAt: DateTime = MailDateUtils.fromIsoInParis(request.receivedAt)
  const replyDeadline: string = MailDateUtils.formatWeekdayDayAndMonth(
    MailDateUtils.getNextBusinessDay(receivedAt),
    'fr',
  )
  const qualificationParts: string[] = [request.tradeLabel, `style ${request.templateName}`]
  if (request.city) {
    qualificationParts.push(request.city)
  }
  const qualification: string = qualificationParts.join(' · ')
  const subjectParts: string[] = ['Démo demandée', request.businessName, request.tradeLabel]
  if (request.city) {
    subjectParts.push(request.city)
  }
  const subject: string = `${TEST_SUBJECT_PREFIX}${subjectParts.join(' · ')}`
  const actions: ContactMailAction[] = buildOwnerActions(
    request.visitorEmail,
    request.visitorPhone,
    'Répondre',
    SITE_ATELIER_ACKNOWLEDGEMENT_TEXTS[request.locale].replySubject,
  )
  const demoRows: ContactMailDetailRow[] = buildDemoRows(request)
  const contactRows: ContactMailDetailRow[] = buildOwnerDetailRows({
    email: request.visitorEmail,
    phone: request.visitorPhone,
    source: request.source,
    pagePath: request.pagePath,
    locale: request.locale,
    receivedAt,
  })

  const htmlContent: string = await MjmlService.getHtml({
    viewPath: 'site-atelier-demo-request',
    payload: {
      subject,
      preheader: `${qualification}. Démo à envoyer au plus tard ${replyDeadline}.`,
      headerTitle: 'Demande de démo',
      headerMeta: MailDateUtils.formatFrenchShortDateAndTime(receivedAt),
      replyDeadline,
      businessName: request.businessName,
      qualification,
      actions,
      demoRows,
      contactRows,
      footerText: `Envoyé par l’atelier des pages « site internet par métier » de dibodev.fr. Répondre à cet e‑mail écrit directement au visiteur.`,
      privacyUrl: null,
    },
    partialsNames: ['head', 'header', 'footer'],
  })

  const textContent: string = [
    `Démo demandée par ${request.businessName}`,
    qualification,
    `À envoyer au plus tard ${replyDeadline}`,
    '',
    'La démo à créer dans DevLeadHunter',
    ...formatDetailRowsAsText(demoRows),
    '',
    'Le visiteur',
    ...formatDetailRowsAsText(contactRows),
  ].join('\n')

  await sendMail({
    toEmail: ownerEmail,
    toName: websiteName,
    subject,
    htmlContent,
    textContent,
    fromName: SITE_ATELIER_OWNER_FROM_NAME,
    replyTo: { Email: request.visitorEmail },
    attachments: toMailAttachments(request.attachments),
  })
}

/**
 * The summary of the request shown to the visitor, in his language.
 * @param {SiteAtelierDemoRequest} request - The demo request.
 * @param {SiteAtelierAcknowledgementTexts} texts - Texts in the e-mail language.
 * @returns {ContactMailDetailRow[]} The rows, without the empty ones.
 */
function buildAcknowledgementRows(
  request: SiteAtelierDemoRequest,
  texts: SiteAtelierAcknowledgementTexts,
): ContactMailDetailRow[] {
  const tradeLabels: Record<string, string> = TRADE_WEBSITE_WORDINGS[request.locale].tradeLabels
  const rows: ContactMailDetailRow[] = []
  rows.push({ label: texts.tradeLabel, value: tradeLabels[request.trade] ?? request.tradeLabel, href: null })
  rows.push({ label: texts.styleLabel, value: request.templateName, href: null })
  if (request.city) {
    rows.push({ label: texts.cityLabel, value: request.city, href: null })
  }
  if (request.services.length > 0) {
    rows.push({ label: texts.servicesLabel, value: request.services.join(', '), href: null })
  }
  return rows
}

/**
 * The page the visitor came from, where the prices and the FAQ of his trade are, or the hub when it is unknown.
 * @param {SiteAtelierDemoRequest} request - The demo request.
 * @returns {string} The address, with the campaign of this e-mail.
 */
function tradePageUrlOf(request: SiteAtelierDemoRequest): string {
  const pageUrl: string = request.pagePath ? PagePathUtils.buildSiteUrl(request.pagePath) : TRADE_WEBSITES_HUB_URL
  return `${pageUrl}?${ACKNOWLEDGEMENT_UTM}`
}

/**
 * Tells the visitor, in his language, that his demo is on its way and when it arrives.
 * @param {SiteAtelierDemoRequest} request - The checked demo request.
 * @returns {Promise<void>} Resolves once the e-mail is sent.
 */
export async function sendSiteAtelierAcknowledgementMail(request: SiteAtelierDemoRequest): Promise<void> {
  registerHandlebarsHelpers()

  const texts: SiteAtelierAcknowledgementTexts = SITE_ATELIER_ACKNOWLEDGEMENT_TEXTS[request.locale]
  const replyDeadline: string = MailDateUtils.formatWeekdayDayAndMonth(
    MailDateUtils.getNextBusinessDay(MailDateUtils.fromIsoInParis(request.receivedAt)),
    request.locale,
  )
  const subject: string = `${TEST_SUBJECT_PREFIX}${texts.subject}`
  const nextSteps: ContactMailNextStep[] = texts.nextSteps(request.templateName).map(
    (step: SiteAtelierAcknowledgementStepTexts, index: number): ContactMailNextStep => ({
      number: index + 1,
      title: step.title,
      description: step.description,
    }),
  )
  const requestRows: ContactMailDetailRow[] = buildAcknowledgementRows(request, texts)
  const tradePageUrl: string = tradePageUrlOf(request)
  const introStart: string = texts.introStart(request.businessName)

  const htmlContent: string = await MjmlService.getHtml({
    viewPath: 'acknowledgement',
    payload: {
      subject,
      preheader: texts.preheader(request.businessName, replyDeadline),
      headerTitle: websiteName,
      headerMeta: null,
      title: texts.title,
      introStart,
      replyDeadline,
      introEnd: texts.introEnd,
      nextStepsTitle: texts.nextStepsTitle,
      nextSteps,
      requestTitle: texts.requestTitle,
      requestRows,
      message: '',
      replyStart: texts.replyStart,
      ownerPhoneHref: OWNER_PHONE_HREF,
      ownerPhoneDisplay: texts.ownerPhoneDisplay,
      replyEnd: texts.replyEnd,
      portfolioStart: texts.tradePageStart,
      portfolioUrl: tradePageUrl,
      portfolioLabel: texts.tradePageLabel,
      portfolioEnd: texts.tradePageEnd,
      signOff: texts.signOff,
      signature: EMAIL_SIGNATURE_HTML,
      footerText: texts.footerText,
      privacyUrl: texts.privacyUrl,
      privacyLabel: texts.privacyLabel,
    },
    partialsNames: ['head', 'header', 'footer'],
  })

  const stepLines: string[] = nextSteps.map(
    (step: ContactMailNextStep): string => `${step.number}. ${step.title}\n   ${step.description}`,
  )
  const requestLines: string[] = requestRows.map(
    (row: ContactMailDetailRow): string => `${row.label}${texts.labelSeparator}${row.value}`,
  )
  const textContent: string = [
    texts.title,
    '',
    `${introStart} ${replyDeadline}${texts.introEnd}`,
    '',
    texts.nextStepsTitle,
    ...stepLines,
    '',
    texts.requestTitle,
    ...requestLines,
    '',
    `${texts.replyStart} ${texts.ownerPhoneDisplay}${texts.replyEnd}`,
    `${texts.tradePageStart} ${texts.tradePageLabel}${texts.labelSeparator}${tradePageUrl}`,
    '',
    texts.signOff,
    EMAIL_SIGNATURE_TEXT,
    '',
    texts.footerText,
  ].join('\n')

  await sendMail({
    toEmail: request.visitorEmail,
    subject,
    htmlContent,
    textContent,
    fromName: texts.fromName,
  })
}
