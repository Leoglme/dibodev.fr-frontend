import type { ContactAcknowledgementTexts, MailLocale } from '~~/server/types/mail/contact'

const ACKNOWLEDGEMENT_UTM: string = 'utm_source=email&utm_medium=transactional&utm_campaign=contact_acknowledgement'

/** Non-breaking hyphen, so "e-mail" never breaks at the end of a line. */
const NON_BREAKING_HYPHEN: string = '\u2011'

/** The steps repeat `contact.nextSteps` of i18n/locales/*.json, so the e-mail matches the contact page. */
export const CONTACT_ACKNOWLEDGEMENT_TEXTS: Record<MailLocale, ContactAcknowledgementTexts> = {
  fr: {
    subject: 'Votre demande est bien arrivée',
    fromName: 'Léo Guillaume · Dibodev',
    preheader: (replyDeadline: string): string =>
      `Je vous réponds au plus tard ${replyDeadline}. Voici la suite et le récapitulatif de votre demande.`,
    title: (greetingName: string): string => `Merci ${greetingName}, votre message est bien arrivé.`,
    introStart: 'Je vous réponds au plus tard',
    introEnd: '. Voici comment la suite va se passer.',
    nextStepsTitle: 'Ce qui se passe ensuite',
    nextSteps: [
      {
        title: 'Je vous réponds sous 24\u00a0h',
        description: `Par e${NON_BREAKING_HYPHEN}mail ou par téléphone, selon ce que vous préférez.`,
      },
      {
        title: 'Un échange de 30 minutes',
        description: 'On regarde ensemble votre besoin, vos outils actuels et ce qui existe déjà.',
      },
      {
        title: 'Une proposition chiffrée',
        description: 'Périmètre, prix au forfait et étapes, gratuitement et sans engagement.',
      },
    ],
    requestTitle: 'Votre demande',
    projectTypeLabel: 'Besoin',
    pagesRangeLabel: 'Nombre de pages',
    budgetLabel: 'Budget',
    phoneLabel: 'Téléphone',
    messageLabel: 'Message',
    replyStart: `Un détail à ajouter ? Répondez simplement à cet e${NON_BREAKING_HYPHEN}mail. Et si c’est urgent, appelez-moi au`,
    replyEnd: '.',
    ownerPhoneDisplay: '06\u00a042\u00a019\u00a038\u00a012',
    portfolioStart: 'En attendant, vous pouvez parcourir',
    portfolioLabel: 'mes réalisations',
    portfolioEnd: '.',
    portfolioUrl: `https://dibodev.fr/projets?${ACKNOWLEDGEMENT_UTM}`,
    signOff: 'À très vite,',
    footerText: `Vous recevez cet e${NON_BREAKING_HYPHEN}mail parce que vous avez écrit via un formulaire de dibodev.fr. Vos coordonnées servent uniquement à vous répondre.`,
    privacyLabel: 'Confidentialité',
    privacyUrl: 'https://dibodev.fr/privacy',
    labelSeparator: '\u00a0: ',
  },
  en: {
    subject: 'I’ve received your request',
    fromName: 'Léo Guillaume · Dibodev',
    preheader: (replyDeadline: string): string =>
      `I’ll reply by ${replyDeadline} at the latest. Here’s what happens next and a summary of your request.`,
    title: (greetingName: string): string => `Thanks ${greetingName}, your message has arrived.`,
    introStart: 'I’ll get back to you by',
    introEnd: ' at the latest. Here’s what happens next.',
    nextStepsTitle: 'What happens next',
    nextSteps: [
      {
        title: 'I reply within 24 hours',
        description: `By e${NON_BREAKING_HYPHEN}mail or by phone, whichever you prefer.`,
      },
      {
        title: 'A 30-minute call',
        description: 'We look together at your needs, your current tools and what already exists.',
      },
      {
        title: 'A priced proposal',
        description: 'Scope, fixed price and milestones, free of charge and without commitment.',
      },
    ],
    requestTitle: 'Your request',
    projectTypeLabel: 'Project',
    pagesRangeLabel: 'Number of pages',
    budgetLabel: 'Budget',
    phoneLabel: 'Phone',
    messageLabel: 'Message',
    replyStart: `Anything to add? Just reply to this e${NON_BREAKING_HYPHEN}mail. And if it’s urgent, call me on`,
    replyEnd: '.',
    ownerPhoneDisplay: '+33\u00a06\u00a042\u00a019\u00a038\u00a012',
    portfolioStart: 'In the meantime, you can browse',
    portfolioLabel: 'my work',
    portfolioEnd: '.',
    portfolioUrl: `https://dibodev.fr/en/projects?${ACKNOWLEDGEMENT_UTM}`,
    signOff: 'Talk soon,',
    footerText: `You’re receiving this e${NON_BREAKING_HYPHEN}mail because you wrote to me through a form on dibodev.fr. Your details are only used to reply to you.`,
    privacyLabel: 'Privacy',
    privacyUrl: 'https://dibodev.fr/en/privacy',
    labelSeparator: ': ',
  },
  es: {
    subject: 'He recibido tu solicitud',
    fromName: 'Léo Guillaume · Dibodev',
    preheader: (replyDeadline: string): string =>
      `Te respondo como muy tarde el ${replyDeadline}. Aquí tienes los siguientes pasos y el resumen de tu solicitud.`,
    title: (greetingName: string): string => `Gracias ${greetingName}, tu mensaje ha llegado bien.`,
    introStart: 'Te respondo como muy tarde el',
    introEnd: '. Así es como sigue.',
    nextStepsTitle: 'Qué pasa después',
    nextSteps: [
      {
        title: 'Te respondo en 24 horas',
        description: 'Por correo o por teléfono, como prefieras.',
      },
      {
        title: 'Una conversación de 30 minutos',
        description: 'Vemos juntos tu necesidad, tus herramientas actuales y lo que ya existe.',
      },
      {
        title: 'Una propuesta con precio',
        description: 'Alcance, precio cerrado y etapas, gratis y sin compromiso.',
      },
    ],
    requestTitle: 'Tu solicitud',
    projectTypeLabel: 'Proyecto',
    pagesRangeLabel: 'Número de páginas',
    budgetLabel: 'Presupuesto',
    phoneLabel: 'Teléfono',
    messageLabel: 'Mensaje',
    replyStart: '¿Algo que añadir? Responde a este correo. Y si es urgente, llámame al',
    replyEnd: '.',
    ownerPhoneDisplay: '+33\u00a06\u00a042\u00a019\u00a038\u00a012',
    portfolioStart: 'Mientras tanto, puedes ver',
    portfolioLabel: 'mis proyectos',
    portfolioEnd: '.',
    portfolioUrl: `https://dibodev.fr/es/proyectos?${ACKNOWLEDGEMENT_UTM}`,
    signOff: 'Hasta pronto,',
    footerText:
      'Recibes este correo porque escribiste a través de un formulario de dibodev.fr. Tus datos solo sirven para responderte.',
    privacyLabel: 'Privacidad',
    privacyUrl: 'https://dibodev.fr/es/privacy',
    labelSeparator: ': ',
  },
}

export const CONTACT_LOCALE_NAMES: Record<MailLocale, string> = {
  fr: 'Français',
  en: 'Anglais',
  es: 'Espagnol',
}

export const OWNER_PHONE_HREF: string = 'tel:+33642193812'

export const OWNER_NOTIFICATION_FROM_NAME: string = 'Formulaire dibodev.fr'

/** Subject of the e-mail opened by the "Répondre" button of a notification, in the visitor's language. */
export const OWNER_REPLY_SUBJECTS: Record<MailLocale, string> = {
  fr: 'Votre demande sur dibodev.fr',
  en: 'Your request on dibodev.fr',
  es: 'Tu solicitud en dibodev.fr',
}

/**
 * Resolves the language of the contact e-mails from the locale sent by a form.
 *
 * @param {string | null | undefined} locale - Raw locale code from the request body.
 * @returns {MailLocale} The matching site locale, French when the value is missing or unknown.
 */
export function resolveMailLocale(locale: string | null | undefined): MailLocale {
  if (locale === 'en' || locale === 'es') {
    return locale
  }
  return 'fr'
}
