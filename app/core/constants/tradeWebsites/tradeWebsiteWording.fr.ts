import type { DibodevTradeWebsiteSharedWording } from '~/core/types/DibodevTradeWebsitePage'
import { NBSP } from '~/core/constants/typography'

export const TRADE_WEBSITE_WORDING_FR: DibodevTradeWebsiteSharedWording = {
  hubBreadcrumbLabel: 'Sites internet par métier',
  summaryTitle: 'En bref',
  authorIntro: 'Page écrite par',
  tradeLabels: {
    plumber: 'Plombier',
    electrician: 'Électricien',
    garage: 'Garage',
    landscaper: 'Paysagiste',
    carpenter: 'Menuisier',
    restaurant: 'Restaurant',
    hairSalon: 'Coiffeur',
    dentist: 'Dentiste',
  },
  pricing: {
    eyebrow: 'Tarifs',
    title: 'Deux façons d’avoir votre site',
    highlightLabel: `Prêt en 48${NBSP}h`,
    templateOfferTitle: 'Site sur modèle',
    templateOfferPrice: `290${NBSP}€ une seule fois`,
    customOfferTitle: 'Site sur mesure',
    customOfferPrice: `À partir de 1${NBSP}500${NBSP}€`,
    notes: [
      'Vous êtes propriétaire du site et du nom de domaine.',
      'La démo et le premier échange sont gratuits.',
      `Prix nets${NBSP}: TVA non applicable (article 293${NBSP}B du CGI).`,
    ],
    demoButtonLabel: 'Voir ma démo gratuite',
    quoteLinkLabel: 'Demander un devis sur mesure',
  },
  resourcesEyebrow: 'Pour aller plus loin',
  fallbackResourceCards: {
    websiteHealthCheck: {
      icon: 'ShieldCheck',
      label: 'Outil gratuit, 10 secondes',
      title: `Tester mon site internet${NBSP}: 8 vérifications gratuites`,
      description: `Déjà un site${NBSP}? HTTPS, PHP, e-mails, mentions légales, affichage sur téléphone${NBSP}: le point en dix secondes, sans inscription.`,
    },
    websitePriceBarometer: {
      icon: 'Euro',
      label: 'Baromètre 2026',
      title: `Prix d’un site internet en 2026${NBSP}: baromètre de 20 sources`,
      description:
        'Les prix affichés par des freelances, des agences et des créateurs de sites français, relevés le même jour.',
    },
  },
  otherTradesTitle: 'Un site internet pour un autre métier',
  allTradesLabel: 'Tous les métiers',
  faqEyebrow: 'Questions fréquentes',
  relatedArticlesTitle: 'À lire aussi',
  contactCtaButton: 'Voir mon site en démo',
  mobileBarButton: 'Voir mon site en démo',
}
