import type { MailLocale } from '~~/server/types/mail/contact'
import type {
  HostingIncidentMailTexts,
  SecurityAlertConfirmationTexts,
  SecurityAlertLandingPaths,
} from '~~/server/types/tools/securityAlerts'

/** Non-breaking hyphen, so "e-mail" never breaks at the end of a line. */
const NON_BREAKING_HYPHEN: string = '\u2011'
const MAIL_PLACEHOLDER_REGEX: RegExp = /\{(\w+)\}/g

export const SECURITY_ALERT_CONFIRMATION_TEXTS: Record<MailLocale, SecurityAlertConfirmationTexts> = {
  fr: {
    fromName: 'Léo Guillaume · Dibodev',
    subjectSecurity: 'Confirmez votre alerte faille',
    subjectSecurityWithSite: 'Confirmez votre alerte faille pour {site}',
    subjectHosting: 'Confirmez votre alerte panne {provider}',
    preheader: 'Un clic pour activer l’alerte. Sans ce clic, rien ne sera envoyé.',
    titleSecurity: 'Un clic pour activer votre alerte',
    titleHosting: 'Un clic pour activer votre alerte {provider}',
    introSecurity: `Vous avez demandé à être prévenu quand une nouvelle faille touche les sites PHP ou WordPress. Confirmez votre adresse e${NON_BREAKING_HYPHEN}mail pour activer l’alerte.`,
    introSecurityWithSite: `Vous avez demandé à être prévenu quand une nouvelle faille touche les sites comme {site}. Confirmez votre adresse e${NON_BREAKING_HYPHEN}mail pour activer l’alerte.`,
    introHosting: `Vous avez demandé à être prévenu quand {provider} annonce une panne. Confirmez votre adresse e${NON_BREAKING_HYPHEN}mail pour activer l’alerte.`,
    buttonLabel: 'Confirmer mon alerte',
    expiryNote:
      'Le lien reste valable 7 jours. Vous recevrez ensuite un seul message par événement, jamais de publicité.',
    ignoreNote: 'Si vous n’êtes pas à l’origine de cette demande, ignorez ce message : rien ne sera envoyé.',
    signOff: 'À bientôt,',
    footerText: `Vous recevez cet e${NON_BREAKING_HYPHEN}mail parce qu’une alerte a été demandée avec votre adresse sur dibodev.fr. Votre adresse sert uniquement à envoyer cette alerte.`,
    unsubscribeLabel: 'Ne plus recevoir d’alerte',
    privacyLabel: 'Confidentialité',
    privacyUrl: 'https://dibodev.fr/privacy',
  },
  en: {
    fromName: 'Léo Guillaume · Dibodev',
    subjectSecurity: 'Confirm your vulnerability alert',
    subjectSecurityWithSite: 'Confirm your vulnerability alert for {site}',
    subjectHosting: 'Confirm your {provider} outage alert',
    preheader: 'One click to activate the alert. Without it, nothing will be sent.',
    titleSecurity: 'One click to activate your alert',
    titleHosting: 'One click to activate your {provider} alert',
    introSecurity: `You asked to be warned when a new vulnerability affects PHP or WordPress sites. Confirm your e${NON_BREAKING_HYPHEN}mail address to activate the alert.`,
    introSecurityWithSite: `You asked to be warned when a new vulnerability affects sites like {site}. Confirm your e${NON_BREAKING_HYPHEN}mail address to activate the alert.`,
    introHosting: `You asked to be warned when {provider} announces an outage. Confirm your e${NON_BREAKING_HYPHEN}mail address to activate the alert.`,
    buttonLabel: 'Confirm my alert',
    expiryNote:
      'The link stays valid for 7 days. You will then receive a single message per event, never any advertising.',
    ignoreNote: 'If you did not ask for this, ignore this message: nothing will be sent.',
    signOff: 'Talk soon,',
    footerText: `You are receiving this e${NON_BREAKING_HYPHEN}mail because an alert was requested with your address on dibodev.fr. Your address is used only to send this alert.`,
    unsubscribeLabel: 'Stop receiving alerts',
    privacyLabel: 'Privacy',
    privacyUrl: 'https://dibodev.fr/en/privacy',
  },
  es: {
    fromName: 'Léo Guillaume · Dibodev',
    subjectSecurity: 'Confirma tu alerta de vulnerabilidad',
    subjectSecurityWithSite: 'Confirma tu alerta de vulnerabilidad para {site}',
    subjectHosting: 'Confirma tu alerta de caída de {provider}',
    preheader: 'Un clic para activar la alerta. Sin ese clic no se enviará nada.',
    titleSecurity: 'Un clic para activar tu alerta',
    titleHosting: 'Un clic para activar tu alerta de {provider}',
    introSecurity: `Pediste que te avisáramos cuando una nueva vulnerabilidad afecte a las webs PHP o WordPress. Confirma tu dirección de correo para activar la alerta.`,
    introSecurityWithSite: `Pediste que te avisáramos cuando una nueva vulnerabilidad afecte a webs como {site}. Confirma tu dirección de correo para activar la alerta.`,
    introHosting: `Pediste que te avisáramos cuando {provider} anuncie una caída. Confirma tu dirección de correo para activar la alerta.`,
    buttonLabel: 'Confirmar mi alerta',
    expiryNote: 'El enlace es válido 7 días. Después recibirás un solo mensaje por evento, nunca publicidad.',
    ignoreNote: 'Si no has pedido esto, ignora este mensaje: no se enviará nada.',
    signOff: 'Hasta pronto,',
    footerText:
      'Recibes este correo porque se ha pedido una alerta con tu dirección en dibodev.fr. Tu dirección sirve únicamente para enviar esta alerta.',
    unsubscribeLabel: 'Dejar de recibir alertas',
    privacyLabel: 'Privacidad',
    privacyUrl: 'https://dibodev.fr/es/privacy',
  },
}

export const HOSTING_INCIDENT_MAIL_TEXTS: Record<MailLocale, HostingIncidentMailTexts> = {
  fr: {
    fromName: 'Léo Guillaume · Dibodev',
    subject: '{provider} : une panne est annoncée',
    preheader: '{provider} signale un incident depuis {time}. Votre site peut être touché.',
    title: '{provider} annonce un incident',
    intro:
      'La page de statut de {provider} vient de passer en incident. Si votre site ne répond pas, la cause est probablement là : inutile de modifier quoi que ce soit, il reviendra avec le service.',
    incidentLabel: 'Incident annoncé',
    sinceLabel: 'Depuis',
    buttonLabel: 'Voir l’état en direct',
    statusPageLabel: 'Page de statut officielle',
    contactIntro: 'Votre site ne revient pas une fois l’incident clos ?',
    contactLabel: 'Envoyez-moi son lien, je regarde sous 24 h',
    signOff: 'À bientôt,',
    footerText: `Vous recevez cet e${NON_BREAKING_HYPHEN}mail parce que vous avez demandé une alerte panne {provider} sur dibodev.fr. Un seul message par incident.`,
    unsubscribeLabel: 'Ne plus recevoir d’alerte',
  },
  en: {
    fromName: 'Léo Guillaume · Dibodev',
    subject: '{provider}: an outage is announced',
    preheader: '{provider} reports an incident since {time}. Your site may be affected.',
    title: '{provider} announces an incident',
    intro:
      'The status page of {provider} just switched to incident. If your site is not responding, this is probably why: no need to change anything, it will come back with the service.',
    incidentLabel: 'Announced incident',
    sinceLabel: 'Since',
    buttonLabel: 'See the live status',
    statusPageLabel: 'Official status page',
    contactIntro: 'Your site does not come back once the incident is closed?',
    contactLabel: 'Send me its link, I look within 24 hours',
    signOff: 'Talk soon,',
    footerText: `You are receiving this e${NON_BREAKING_HYPHEN}mail because you asked for a {provider} outage alert on dibodev.fr. One message per incident.`,
    unsubscribeLabel: 'Stop receiving alerts',
  },
  es: {
    fromName: 'Léo Guillaume · Dibodev',
    subject: '{provider}: se ha anunciado una caída',
    preheader: '{provider} señala una incidencia desde las {time}. Tu web puede estar afectada.',
    title: '{provider} anuncia una incidencia',
    intro:
      'La página de estado de {provider} acaba de pasar a incidencia. Si tu web no responde, probablemente sea por eso: no cambies nada, volverá con el servicio.',
    incidentLabel: 'Incidencia anunciada',
    sinceLabel: 'Desde',
    buttonLabel: 'Ver el estado en directo',
    statusPageLabel: 'Página de estado oficial',
    contactIntro: '¿Tu web no vuelve una vez cerrada la incidencia?',
    contactLabel: 'Envíame su enlace, lo miro en 24 h',
    signOff: 'Hasta pronto,',
    footerText:
      'Recibes este correo porque pediste una alerta de caída de {provider} en dibodev.fr. Un solo mensaje por incidencia.',
    unsubscribeLabel: 'Dejar de recibir alertas',
  },
}

export const SECURITY_ALERT_LANDING_PATHS: Record<MailLocale, SecurityAlertLandingPaths> = {
  fr: { confirmed: '/alertes/confirmee', unsubscribed: '/alertes/desinscrite', invalid: '/alertes/lien-invalide' },
  en: {
    confirmed: '/en/alerts/confirmed',
    unsubscribed: '/en/alerts/unsubscribed',
    invalid: '/en/alerts/invalid-link',
  },
  es: {
    confirmed: '/es/alertas/confirmada',
    unsubscribed: '/es/alertas/baja',
    invalid: '/es/alertas/enlace-no-valido',
  },
}

export const HOSTING_STATUS_PAGE_PATHS: Record<MailLocale, string> = {
  fr: '/outils/hebergeur-en-panne',
  en: '/en/tools/web-host-down',
  es: '/es/herramientas/hosting-caido',
}

/**
 * Fills the `{placeholders}` of a mail text.
 * @param {string} template - The text.
 * @param {Record<string, string>} values - The values by placeholder name.
 * @returns {string} The filled text.
 */
export function fillMailTemplate(template: string, values: Record<string, string>): string {
  return template.replace(
    MAIL_PLACEHOLDER_REGEX,
    (placeholder: string, name: string): string => values[name] ?? placeholder,
  )
}
