import type { SupportedLocale } from '~/core/constants/categorySlugs'
import type {
  DibodevFreeTemplateDownloadFollowUpWording,
  DibodevFreeTemplateMonthlyVolume,
} from '~/core/types/DibodevFreeTemplateDownloadFollowUp'
import { NBSP } from '~/core/constants/typography'

export const FREE_TEMPLATE_MONTHLY_VOLUMES: DibodevFreeTemplateMonthlyVolume[] = ['low', 'medium', 'high']

export const FREE_TEMPLATE_DOWNLOAD_FOLLOW_UP_TRACKING_LOCATION: string = 'free_template_download_follow_up'

export const FREE_TEMPLATE_DOWNLOAD_FOLLOW_UP_WORDING: Record<
  SupportedLocale,
  DibodevFreeTemplateDownloadFollowUpWording
> = {
  fr: {
    title: 'Votre fichier se télécharge.',
    question: `Ce document, vous en remplissez combien par mois${NBSP}?`,
    hint: 'Un clic, et je vous dis si le modèle suffit ou s’il est temps de passer à un outil.',
    volumeLabels: {
      low: 'Moins de 10',
      medium: 'De 10 à 50',
      high: 'Plus de 50',
    },
    advices: {
      low: {
        title: 'À ce rythme, le modèle suffit.',
        text: `Quelques documents par mois, c’est quelques minutes à chaque fois${NBSP}: gardez le fichier, il est fait pour ça. Les autres modèles gratuits sont rangés au même endroit.`,
      },
      medium: {
        title: 'À ce rythme, la ressaisie commence à coûter.',
        text: `Entre dix et cinquante par mois, on retape souvent les mêmes informations d’un document à l’autre. Avant de changer d’outil, prenez deux minutes pour savoir où vous en êtes.`,
      },
      high: {
        title: 'À ce rythme, le document devrait se remplir tout seul.',
        text: `Plus de cinquante par mois, c’est de la saisie toutes les semaines. Décrivez-moi comment vous travaillez${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
      },
    },
    otherTemplatesLinkLabel: 'Voir les autres modèles gratuits',
    contactButtonLabel: 'Décrire ma façon de travailler',
  },
  en: {
    title: 'Your file is downloading.',
    question: 'How many of these do you fill in each month?',
    hint: 'One click, and I tell you whether the template is enough or it is time for a tool.',
    volumeLabels: {
      low: 'Fewer than 10',
      medium: '10 to 50',
      high: 'More than 50',
    },
    advices: {
      low: {
        title: 'At that pace, the template is enough.',
        text: 'A few documents a month means a few minutes each time: keep the file, that is what it is for. The other free templates are in the same place.',
      },
      medium: {
        title: 'At that pace, retyping starts to cost you.',
        text: 'Between ten and fifty a month, you often type the same details from one document to the next. Before changing tools, take two minutes to see where you stand.',
      },
      high: {
        title: 'At that pace, the document should fill itself in.',
        text: 'More than fifty a month means data entry every week. Tell me how you work: I reply within 24 hours, and if off-the-shelf software is enough, I will say so.',
      },
    },
    otherTemplatesLinkLabel: 'See the other free templates',
    contactButtonLabel: 'Describe how I work',
  },
  es: {
    title: 'Tu archivo se está descargando.',
    question: '¿Cuántos documentos de este tipo rellenas al mes?',
    hint: 'Un clic y te digo si la plantilla basta o si ya toca pasar a una herramienta.',
    volumeLabels: {
      low: 'Menos de 10',
      medium: 'De 10 a 50',
      high: 'Más de 50',
    },
    advices: {
      low: {
        title: 'A ese ritmo, la plantilla basta.',
        text: 'Unos pocos documentos al mes son unos minutos cada vez: quédate con el archivo, está hecho para eso. Las demás plantillas gratuitas están en el mismo sitio.',
      },
      medium: {
        title: 'A ese ritmo, volver a teclear empieza a costar.',
        text: 'Entre diez y cincuenta al mes, se repiten a menudo los mismos datos de un documento a otro. Antes de cambiar de herramienta, dedica dos minutos a saber en qué punto estás.',
      },
      high: {
        title: 'A ese ritmo, el documento debería rellenarse solo.',
        text: 'Más de cincuenta al mes es teclear datos todas las semanas. Cuéntame cómo trabajas: te respondo en 24 horas y, si un programa del mercado te basta, te lo digo.',
      },
    },
    otherTemplatesLinkLabel: 'Ver las demás plantillas gratuitas',
    contactButtonLabel: 'Explicar cómo trabajo',
  },
}
