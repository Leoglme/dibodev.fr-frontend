import type { MailLocale } from '~~/server/types/mail/contact'
import type {
  SiteAtelierAcknowledgementStepTexts,
  SiteAtelierAcknowledgementTexts,
} from '~~/server/types/tools/siteAtelier'
import { NBSP } from '~~/app/core/constants/typography'

const NON_BREAKING_HYPHEN: string = '‑'

export const SITE_ATELIER_OWNER_FROM_NAME: string = 'Atelier dibodev.fr'

export const SITE_ATELIER_ACKNOWLEDGEMENT_TEXTS: Record<MailLocale, SiteAtelierAcknowledgementTexts> = {
  fr: {
    subject: `Votre démo arrive sous 24${NBSP}h ouvrées`,
    fromName: 'Léo Guillaume · Dibodev',
    preheader: (businessName: string, replyDeadline: string): string =>
      `Je vous envoie le lien de la démo «${NBSP}${businessName}${NBSP}» au plus tard ${replyDeadline}.`,
    title: 'Merci, votre démo arrive.',
    introStart: (businessName: string): string =>
      `Je prépare le site «${NBSP}${businessName}${NBSP}» avec vos réponses, et je vous envoie le lien de la démo au plus tard`,
    introEnd: '.',
    nextStepsTitle: 'Ce qui se passe ensuite',
    nextSteps: (templateName: string): SiteAtelierAcknowledgementStepTexts[] => [
      {
        title: 'Je crée votre démo',
        description: `Sur le modèle ${templateName}, à votre nom, avec vos couleurs, votre logo et vos photos.`,
      },
      {
        title: 'Vous recevez le lien',
        description: `Par e${NON_BREAKING_HYPHEN}mail, pour la regarder sur téléphone et sur ordinateur, et la montrer autour de vous.`,
      },
      {
        title: 'Si elle vous plaît',
        description: `Le site est en ligne sous 48${NBSP}h${NBSP}: 290${NBSP}€ une seule fois, nom de domaine et hébergement compris. Sans engagement d’ici là.`,
      },
    ],
    requestTitle: 'Votre demande',
    tradeLabel: 'Métier',
    styleLabel: 'Style',
    cityLabel: 'Ville',
    servicesLabel: 'Prestations',
    replyStart: `Une précision, une photo de plus${NBSP}? Répondez simplement à cet e${NON_BREAKING_HYPHEN}mail. Et si c’est urgent, appelez-moi au`,
    replyEnd: '.',
    ownerPhoneDisplay: `06${NBSP}42${NBSP}19${NBSP}38${NBSP}12`,
    tradePageStart: 'En attendant, les prix et les réponses aux questions fréquentes sont sur',
    tradePageLabel: 'la page de votre métier',
    tradePageEnd: '.',
    signOff: 'À très vite,',
    footerText: `Vous recevez cet e${NON_BREAKING_HYPHEN}mail parce que vous avez demandé une démo sur dibodev.fr. Vos coordonnées servent uniquement à vous l’envoyer.`,
    privacyLabel: 'Confidentialité',
    privacyUrl: 'https://dibodev.fr/privacy',
    labelSeparator: `${NBSP}: `,
    replySubject: 'Votre démo de site internet',
  },
  en: {
    subject: 'Your demo arrives within 24 working hours',
    fromName: 'Léo Guillaume · Dibodev',
    preheader: (businessName: string, replyDeadline: string): string =>
      `I will send you the link to the “${businessName}” demo by ${replyDeadline} at the latest.`,
    title: 'Thank you, your demo is on its way.',
    introStart: (businessName: string): string =>
      `I am preparing the “${businessName}” website with your answers, and I will send you the link to the demo by`,
    introEnd: ' at the latest.',
    nextStepsTitle: 'What happens next',
    nextSteps: (templateName: string): SiteAtelierAcknowledgementStepTexts[] => [
      {
        title: 'I build your demo',
        description: `On the ${templateName} template, under your name, with your colours, your logo and your photos.`,
      },
      {
        title: 'You receive the link',
        description: `By e${NON_BREAKING_HYPHEN}mail, to look at it on a phone and on a computer, and to show it around.`,
      },
      {
        title: 'If you like it',
        description:
          'The website goes online within 48 hours: €290, paid once, domain name and hosting included. No commitment until then.',
      },
    ],
    requestTitle: 'Your request',
    tradeLabel: 'Trade',
    styleLabel: 'Style',
    cityLabel: 'Town',
    servicesLabel: 'Services',
    replyStart: `A detail to add, one more photo? Simply reply to this e${NON_BREAKING_HYPHEN}mail. And if it is urgent, call me on`,
    replyEnd: '.',
    ownerPhoneDisplay: '+33 6 42 19 38 12',
    tradePageStart: 'In the meantime, prices and answers to frequent questions are on',
    tradePageLabel: 'the page of your trade',
    tradePageEnd: '.',
    signOff: 'Speak soon,',
    footerText: `You receive this e${NON_BREAKING_HYPHEN}mail because you asked for a demo on dibodev.fr. Your details are only used to send it to you.`,
    privacyLabel: 'Privacy',
    privacyUrl: 'https://dibodev.fr/en/privacy',
    labelSeparator: ': ',
    replySubject: 'Your website demo',
  },
  es: {
    subject: 'Tu demo llega en 24 horas laborables',
    fromName: 'Léo Guillaume · Dibodev',
    preheader: (businessName: string, replyDeadline: string): string =>
      `Te envío el enlace de la demo «${businessName}» como muy tarde el ${replyDeadline}.`,
    title: 'Gracias, tu demo está en camino.',
    introStart: (businessName: string): string =>
      `Preparo la web «${businessName}» con tus respuestas y te envío el enlace de la demo como muy tarde el`,
    introEnd: '.',
    nextStepsTitle: 'Lo que pasa ahora',
    nextSteps: (templateName: string): SiteAtelierAcknowledgementStepTexts[] => [
      {
        title: 'Creo tu demo',
        description: `Con la plantilla ${templateName}, a tu nombre, con tus colores, tu logo y tus fotos.`,
      },
      {
        title: 'Recibes el enlace',
        description: 'Por correo, para verla en el móvil y en el ordenador, y enseñarla a tu alrededor.',
      },
      {
        title: 'Si te gusta',
        description:
          'La web está en línea en 48 horas: 290 € en un solo pago, dominio y alojamiento incluidos. Sin compromiso hasta entonces.',
      },
    ],
    requestTitle: 'Tu solicitud',
    tradeLabel: 'Oficio',
    styleLabel: 'Estilo',
    cityLabel: 'Ciudad',
    servicesLabel: 'Servicios',
    replyStart: '¿Un detalle, una foto más? Responde simplemente a este correo. Y si es urgente, llámame al',
    replyEnd: '.',
    ownerPhoneDisplay: '+33 6 42 19 38 12',
    tradePageStart: 'Mientras tanto, los precios y las respuestas a las preguntas frecuentes están en',
    tradePageLabel: 'la página de tu oficio',
    tradePageEnd: '.',
    signOff: '¡Hasta pronto!',
    footerText: 'Recibes este correo porque pediste una demo en dibodev.fr. Tus datos solo sirven para enviártela.',
    privacyLabel: 'Privacidad',
    privacyUrl: 'https://dibodev.fr/es/privacy',
    labelSeparator: ': ',
    replySubject: 'Tu demo de página web',
  },
}
