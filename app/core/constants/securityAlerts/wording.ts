import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type {
  DibodevSecurityAlertFormWording,
  DibodevSecurityAlertPagesContent,
} from '~/core/types/DibodevSecurityAlert'
import { NBSP } from '~/core/constants/typography'

export const SECURITY_ALERT_SUBSCRIBE_API_PATH: string = '/api/tools/security-alerts/subscribe'

export const SECURITY_ALERT_PRIVACY_ANCHOR_ID: string = 'alertes'

/** Texts of the form that asks for a vulnerability alert (PHP and WordPress checkers). */
export const SECURITY_ALERT_FORM_WORDING: Record<SupportedLocale, DibodevSecurityAlertFormWording> = {
  fr: {
    title: 'Être prévenu à la prochaine faille',
    titleWithSite: 'Être prévenu si une faille touche {site}',
    intro: `Un seul e-mail${NBSP}: la faille, si votre site est concerné et quoi faire. Jamais de publicité.`,
    emailLabel: 'Votre adresse e-mail',
    emailPlaceholder: 'prenom@monentreprise.fr',
    consent: 'J’accepte de recevoir cette alerte par e-mail. Je peux me désinscrire en un clic depuis chaque message.',
    submit: 'Me prévenir',
    submitting: 'Envoi…',
    confirmationSentTitle: 'Un dernier clic',
    confirmationSentText:
      'Un e-mail de confirmation vient de partir. Cliquez sur son bouton pour activer l’alerte ; sans ce clic, rien ne sera envoyé.',
    alreadyConfirmedTitle: 'Alerte déjà active',
    alreadyConfirmedText: 'Cette adresse reçoit déjà cette alerte. Rien à faire.',
    errorTitle: 'L’alerte n’a pas pu être enregistrée',
    errorTexts: {
      invalid: 'Vérifiez l’adresse e-mail.',
      rateLimited: 'Trop de demandes d’un coup. Réessayez dans quelques minutes.',
      failed: 'Réessayez dans une minute, ou écrivez-moi directement.',
    },
    privacyLinkLabel: 'Ce que je fais de votre adresse',
  },
  en: {
    title: 'Be warned at the next vulnerability',
    titleWithSite: 'Be warned if a vulnerability affects {site}',
    intro: 'A single e-mail: the vulnerability, whether your site is affected and what to do. Never any advertising.',
    emailLabel: 'Your e-mail address',
    emailPlaceholder: 'name@mycompany.com',
    consent: 'I agree to receive this alert by e-mail. I can unsubscribe in one click from every message.',
    submit: 'Warn me',
    submitting: 'Sending…',
    confirmationSentTitle: 'One last click',
    confirmationSentText:
      'A confirmation e-mail is on its way. Click its button to activate the alert; without that click, nothing will be sent.',
    alreadyConfirmedTitle: 'Alert already active',
    alreadyConfirmedText: 'This address already receives this alert. Nothing to do.',
    errorTitle: 'The alert could not be saved',
    errorTexts: {
      invalid: 'Check the e-mail address.',
      rateLimited: 'Too many requests at once. Try again in a few minutes.',
      failed: 'Try again in a minute, or write to me directly.',
    },
    privacyLinkLabel: 'What I do with your address',
  },
  es: {
    title: 'Que te avisen en la próxima vulnerabilidad',
    titleWithSite: 'Que te avisen si una vulnerabilidad afecta a {site}',
    intro: 'Un solo correo: la vulnerabilidad, si tu web está afectada y qué hacer. Nunca publicidad.',
    emailLabel: 'Tu dirección de correo',
    emailPlaceholder: 'nombre@miempresa.es',
    consent: 'Acepto recibir esta alerta por correo. Puedo darme de baja con un clic desde cada mensaje.',
    submit: 'Avisarme',
    submitting: 'Enviando…',
    confirmationSentTitle: 'Un último clic',
    confirmationSentText:
      'Acaba de salir un correo de confirmación. Pulsa su botón para activar la alerta; sin ese clic no se enviará nada.',
    alreadyConfirmedTitle: 'Alerta ya activa',
    alreadyConfirmedText: 'Esta dirección ya recibe esta alerta. Nada que hacer.',
    errorTitle: 'No se ha podido guardar la alerta',
    errorTexts: {
      invalid: 'Comprueba la dirección de correo.',
      rateLimited: 'Demasiadas peticiones seguidas. Vuelve a intentarlo en unos minutos.',
      failed: 'Vuelve a intentarlo en un minuto, o escríbeme directamente.',
    },
    privacyLinkLabel: 'Qué hago con tu dirección',
  },
}

/** Texts of the form that asks for an outage alert of one provider (hosting status pages). */
export const HOSTING_ALERT_FORM_WORDING: Record<SupportedLocale, DibodevSecurityAlertFormWording> = {
  fr: {
    title: 'Être prévenu si {provider} tombe en panne',
    titleWithSite: 'Être prévenu si {provider} tombe en panne',
    intro:
      'Un e-mail dès que la page de statut de {provider} annonce un incident, un seul par panne. Jamais de publicité.',
    emailLabel: 'Votre adresse e-mail',
    emailPlaceholder: 'prenom@monentreprise.fr',
    consent: 'J’accepte de recevoir cette alerte par e-mail. Je peux me désinscrire en un clic depuis chaque message.',
    submit: 'Me prévenir',
    submitting: 'Envoi…',
    confirmationSentTitle: 'Un dernier clic',
    confirmationSentText:
      'Un e-mail de confirmation vient de partir. Cliquez sur son bouton pour activer l’alerte ; sans ce clic, rien ne sera envoyé.',
    alreadyConfirmedTitle: 'Alerte déjà active',
    alreadyConfirmedText: 'Cette adresse reçoit déjà l’alerte {provider}. Rien à faire.',
    errorTitle: 'L’alerte n’a pas pu être enregistrée',
    errorTexts: {
      invalid: 'Vérifiez l’adresse e-mail.',
      rateLimited: 'Trop de demandes d’un coup. Réessayez dans quelques minutes.',
      failed: 'Réessayez dans une minute, ou écrivez-moi directement.',
    },
    privacyLinkLabel: 'Ce que je fais de votre adresse',
  },
  en: {
    title: 'Be warned if {provider} goes down',
    titleWithSite: 'Be warned if {provider} goes down',
    intro:
      'An e-mail as soon as the status page of {provider} announces an incident, one per outage. Never any advertising.',
    emailLabel: 'Your e-mail address',
    emailPlaceholder: 'name@mycompany.com',
    consent: 'I agree to receive this alert by e-mail. I can unsubscribe in one click from every message.',
    submit: 'Warn me',
    submitting: 'Sending…',
    confirmationSentTitle: 'One last click',
    confirmationSentText:
      'A confirmation e-mail is on its way. Click its button to activate the alert; without that click, nothing will be sent.',
    alreadyConfirmedTitle: 'Alert already active',
    alreadyConfirmedText: 'This address already receives the {provider} alert. Nothing to do.',
    errorTitle: 'The alert could not be saved',
    errorTexts: {
      invalid: 'Check the e-mail address.',
      rateLimited: 'Too many requests at once. Try again in a few minutes.',
      failed: 'Try again in a minute, or write to me directly.',
    },
    privacyLinkLabel: 'What I do with your address',
  },
  es: {
    title: 'Que te avisen si {provider} se cae',
    titleWithSite: 'Que te avisen si {provider} se cae',
    intro:
      'Un correo en cuanto la página de estado de {provider} anuncie una incidencia, uno por caída. Nunca publicidad.',
    emailLabel: 'Tu dirección de correo',
    emailPlaceholder: 'nombre@miempresa.es',
    consent: 'Acepto recibir esta alerta por correo. Puedo darme de baja con un clic desde cada mensaje.',
    submit: 'Avisarme',
    submitting: 'Enviando…',
    confirmationSentTitle: 'Un último clic',
    confirmationSentText:
      'Acaba de salir un correo de confirmación. Pulsa su botón para activar la alerta; sin ese clic no se enviará nada.',
    alreadyConfirmedTitle: 'Alerta ya activa',
    alreadyConfirmedText: 'Esta dirección ya recibe la alerta de {provider}. Nada que hacer.',
    errorTitle: 'No se ha podido guardar la alerta',
    errorTexts: {
      invalid: 'Comprueba la dirección de correo.',
      rateLimited: 'Demasiadas peticiones seguidas. Vuelve a intentarlo en unos minutos.',
      failed: 'Vuelve a intentarlo en un minuto, o escríbeme directamente.',
    },
    privacyLinkLabel: 'Qué hago con tu dirección',
  },
}

/** The pages the links of the alert e-mails land on. */
export const SECURITY_ALERT_PAGES: Record<SupportedLocale, DibodevSecurityAlertPagesContent> = {
  fr: {
    confirmed: {
      meta: { title: 'Alerte activée — Dibodev', description: 'Votre alerte est activée.' },
      title: 'Votre alerte est activée',
      text: 'Merci. Vous recevrez un seul e-mail par événement, jamais de publicité, et un lien de désinscription dans chaque message.',
      topicTexts: {
        security:
          'Dès qu’une nouvelle faille touche les sites PHP ou WordPress, vous saurez si votre site est concerné et quoi faire.',
        hosting:
          'Dès que la page de statut de votre hébergeur annonce un incident, vous le saurez, avec un lien vers son état en direct.',
      },
      linkLabel: 'Retour aux outils gratuits',
    },
    unsubscribed: {
      meta: { title: 'Alerte désactivée — Dibodev', description: 'Vous ne recevrez plus cette alerte.' },
      title: 'Vous ne recevrez plus cette alerte',
      text: 'C’est fait : votre adresse ne recevra plus de message pour cette alerte. Vous pouvez la réactiver quand vous voulez depuis l’outil.',
      topicTexts: { security: '', hosting: '' },
      linkLabel: 'Retour aux outils gratuits',
    },
    invalid: {
      meta: { title: 'Lien invalide — Dibodev', description: 'Ce lien d’alerte n’est plus valable.' },
      title: 'Ce lien n’est plus valable',
      text: 'Le lien de confirmation reste valable sept jours. Redemandez l’alerte depuis l’outil pour recevoir un nouveau lien.',
      topicTexts: { security: '', hosting: '' },
      linkLabel: 'Retour aux outils gratuits',
    },
  },
  en: {
    confirmed: {
      meta: { title: 'Alert activated — Dibodev', description: 'Your alert is active.' },
      title: 'Your alert is active',
      text: 'Thank you. You will receive a single e-mail per event, never any advertising, and an unsubscribe link in every message.',
      topicTexts: {
        security:
          'As soon as a new vulnerability affects PHP or WordPress sites, you will know whether your site is affected and what to do.',
        hosting:
          'As soon as the status page of your web host announces an incident, you will know, with a link to its live status.',
      },
      linkLabel: 'Back to the free tools',
    },
    unsubscribed: {
      meta: { title: 'Alert deactivated — Dibodev', description: 'You will no longer receive this alert.' },
      title: 'You will no longer receive this alert',
      text: 'Done: your address will not get any more messages for this alert. You can activate it again any time from the tool.',
      topicTexts: { security: '', hosting: '' },
      linkLabel: 'Back to the free tools',
    },
    invalid: {
      meta: { title: 'Invalid link — Dibodev', description: 'This alert link is no longer valid.' },
      title: 'This link is no longer valid',
      text: 'A confirmation link stays valid for seven days. Ask for the alert again from the tool to get a new link.',
      topicTexts: { security: '', hosting: '' },
      linkLabel: 'Back to the free tools',
    },
  },
  es: {
    confirmed: {
      meta: { title: 'Alerta activada — Dibodev', description: 'Tu alerta está activada.' },
      title: 'Tu alerta está activada',
      text: 'Gracias. Recibirás un solo correo por evento, nunca publicidad, y un enlace de baja en cada mensaje.',
      topicTexts: {
        security:
          'En cuanto una nueva vulnerabilidad afecte a las webs PHP o WordPress, sabrás si tu web está afectada y qué hacer.',
        hosting:
          'En cuanto la página de estado de tu hosting anuncie una incidencia, lo sabrás, con un enlace a su estado en directo.',
      },
      linkLabel: 'Volver a las herramientas gratuitas',
    },
    unsubscribed: {
      meta: { title: 'Alerta desactivada — Dibodev', description: 'Ya no recibirás esta alerta.' },
      title: 'Ya no recibirás esta alerta',
      text: 'Hecho: tu dirección no recibirá más mensajes de esta alerta. Puedes volver a activarla cuando quieras desde la herramienta.',
      topicTexts: { security: '', hosting: '' },
      linkLabel: 'Volver a las herramientas gratuitas',
    },
    invalid: {
      meta: { title: 'Enlace no válido — Dibodev', description: 'Este enlace de alerta ya no es válido.' },
      title: 'Este enlace ya no es válido',
      text: 'El enlace de confirmación es válido siete días. Vuelve a pedir la alerta desde la herramienta para recibir un enlace nuevo.',
      topicTexts: { security: '', hosting: '' },
      linkLabel: 'Volver a las herramientas gratuitas',
    },
  },
}
