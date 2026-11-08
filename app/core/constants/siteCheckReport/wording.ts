import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type { DibodevSiteCheckReportFormWording } from '~/core/types/DibodevSiteCheckReport'
import { NBSP } from '~/core/constants/typography'

export const SITE_CHECK_REPORT_API_PATH: string = '/api/tools/site-check-report'

/** Anchor of the privacy section about the free checkers (statistics kept, e-mailed results, contact consent). */
export const SITE_CHECK_PRIVACY_ANCHOR_ID: string = 'outils-de-verification'

/** Texts of the form that e-mails the result of a check, under the result card of the five checkers. */
export const SITE_CHECK_REPORT_FORM_WORDING: Record<SupportedLocale, DibodevSiteCheckReportFormWording> = {
  fr: {
    title: 'Recevoir ce résultat par e-mail',
    intro: `Le résultat pour {site}, avec ce qu’il faut faire, dans votre boîte mail. À garder, ou à transférer à la personne qui s’occupe de votre site.`,
    emailLabel: 'Votre adresse e-mail',
    emailPlaceholder: 'prenom@monentreprise.fr',
    contactConsent: 'J’accepte que Léo Guillaume (Dibodev) me recontacte au sujet de ce site.',
    privacyNote:
      'Votre adresse sert à vous envoyer le résultat. Elle n’est gardée que si vous cochez la case, un an au plus.',
    privacyLinkLabel: 'Ce que je fais de vos données',
    submit: 'Recevoir le résultat',
    submitting: 'Envoi…',
    sentTitle: 'C’est envoyé',
    sentText: `Le résultat arrive dans votre boîte mail d’ici une minute. S’il n’y est pas, regardez dans les indésirables.`,
    sentTextWithContactConsent: `Le résultat arrive dans votre boîte mail d’ici une minute. Je reviendrai vers vous au sujet de ce site.`,
    errorTitle: 'Le résultat n’est pas parti.',
    errorTexts: {
      invalid: 'Vérifiez l’adresse e-mail.',
      rateLimited: 'Trop de demandes d’un coup. Réessayez dans une heure.',
      unreachable: `Le site ne répond plus${NBSP}: relancez le test, puis réessayez.`,
      failed: 'Réessayez dans une minute, ou écrivez-moi directement.',
    },
  },
  en: {
    title: 'Get this result by e-mail',
    intro:
      'The result for {site}, with what to do, in your inbox. To keep, or to forward to whoever looks after your website.',
    emailLabel: 'Your e-mail address',
    emailPlaceholder: 'name@mycompany.com',
    contactConsent: 'I agree that Léo Guillaume (Dibodev) may contact me about this website.',
    privacyNote:
      'Your address is used to send you the result. It is only kept if you tick the box, for a year at most.',
    privacyLinkLabel: 'What I do with your data',
    submit: 'Get the result',
    submitting: 'Sending…',
    sentTitle: 'Sent',
    sentText: 'The result reaches your inbox within a minute. If it is not there, look in your spam folder.',
    sentTextWithContactConsent:
      'The result reaches your inbox within a minute. I will get back to you about this website.',
    errorTitle: 'The result could not be sent.',
    errorTexts: {
      invalid: 'Check the e-mail address.',
      rateLimited: 'Too many requests at once. Try again in an hour.',
      unreachable: 'The website no longer answers: run the test again, then retry.',
      failed: 'Try again in a minute, or write to me directly.',
    },
  },
  es: {
    title: 'Recibir este resultado por correo',
    intro:
      'El resultado para {site}, con lo que hay que hacer, en tu bandeja de entrada. Para guardarlo o reenviarlo a quien se ocupa de tu web.',
    emailLabel: 'Tu dirección de correo',
    emailPlaceholder: 'nombre@miempresa.es',
    contactConsent: 'Acepto que Léo Guillaume (Dibodev) me contacte sobre esta web.',
    privacyNote:
      'Tu dirección sirve para enviarte el resultado. Solo se guarda si marcas la casilla, un año como máximo.',
    privacyLinkLabel: 'Lo que hago con tus datos',
    submit: 'Recibir el resultado',
    submitting: 'Enviando…',
    sentTitle: 'Enviado',
    sentText: 'El resultado llega a tu bandeja de entrada en un minuto. Si no está, mira en la carpeta de spam.',
    sentTextWithContactConsent:
      'El resultado llega a tu bandeja de entrada en un minuto. Volveré a contactarte sobre esta web.',
    errorTitle: 'El resultado no se ha enviado.',
    errorTexts: {
      invalid: 'Revisa la dirección de correo.',
      rateLimited: 'Demasiadas solicitudes seguidas. Vuelve a intentarlo dentro de una hora.',
      unreachable: 'La web ya no responde: repite la prueba y vuelve a intentarlo.',
      failed: 'Vuelve a intentarlo en un minuto, o escríbeme directamente.',
    },
  },
}
