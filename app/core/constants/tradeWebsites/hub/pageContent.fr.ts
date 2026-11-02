import type { DibodevTradeWebsiteHubPageContent } from '~/core/types/DibodevTradeWebsiteHubPage'
import { TRADE_WEBSITES_HUB_CATALOG_ANCHOR_ID } from '~/core/constants/tradeWebsites/tradeWebsiteCatalog'
import { NBSP } from '~/core/constants/typography'

export const TRADE_WEBSITES_HUB_PAGE_FR: DibodevTradeWebsiteHubPageContent = {
  meta: {
    title: `Site internet par métier${NBSP}: votre démo en 2 minutes`,
    description: `Plombier, garage, restaurant, coiffeur… Voyez votre site à votre nom en 2 minutes${NBSP}: 290${NBSP}€ une seule fois, en ligne sous 48${NBSP}h, sur mesure dès 1${NBSP}500${NBSP}€.`,
    inLanguage: 'fr-FR',
  },
  shareImage: {
    titleLines: ['Site internet', 'par métier'],
    highlight: 'par métier',
    subtitle: 'Voyez le vôtre en 2 minutes, à votre nom',
    badge: `290${NBSP}€ une seule fois`,
    alt: `Site internet par métier${NBSP}: voyez le vôtre en 2 minutes, 290${NBSP}€ une seule fois`,
  },
  hero: {
    titlePart1: 'Site internet ',
    titleHighlight1: 'par métier',
    titlePart2: `${NBSP}: voyez le vôtre en 2 minutes`,
    description: `Choisissez votre métier, puis composez votre site dans l’atelier${NBSP}: votre nom, votre ville, vos couleurs, votre logo et vos photos, sur un vrai modèle. 290${NBSP}€ une seule fois, nom de domaine et hébergement compris, ou sur mesure à partir de 1${NBSP}500${NBSP}€.`,
    cta: 'Choisir mon métier',
    reassurances: ['Sans inscription', `Démo à votre nom sous 24${NBSP}h ouvrées`, 'Prix connus d’avance'],
    tradesCountLabel: 'métiers',
    templatesCountLabel: 'modèles de site',
    priceValue: `290${NBSP}€`,
    priceLabel: 'une seule fois',
  },
  catalog: {
    anchorId: TRADE_WEBSITES_HUB_CATALOG_ANCHOR_ID,
    eyebrow: 'Choisissez votre métier',
    title: 'Huit métiers, onze modèles',
    intro: `Chaque page a son atelier${NBSP}: le site se construit sous vos yeux sur le modèle de votre métier, avec les règles qu’il doit afficher.`,
    cards: [
      {
        key: 'plumber',
        title: 'Site internet pour plombier',
        description: `Urgences, tarifs de dépannage, zone d’intervention${NBSP}: trois modèles pour faire appeler.`,
      },
      {
        key: 'electrician',
        title: 'Site internet pour électricien',
        description: `Dépannage, mise aux normes, bornes de recharge${NBSP}: deux modèles, clair ou nuit électrique.`,
      },
      {
        key: 'garage',
        title: 'Site internet pour garage',
        description: `Entretien, réparation, prise de rendez-vous${NBSP}: un modèle sombre façon atelier.`,
      },
      {
        key: 'landscaper',
        title: 'Site internet pour paysagiste',
        description: `Entretien de jardins, créations, crédit d’impôt${NBSP}: un modèle vert et lumineux.`,
      },
      {
        key: 'carpenter',
        title: 'Site internet pour menuisier',
        description: `Fenêtres, escaliers, agencement${NBSP}: un modèle éditorial qui met vos réalisations en avant.`,
      },
      {
        key: 'restaurant',
        title: 'Site internet pour restaurant',
        description: `Carte, horaires, réservation${NBSP}: un modèle chaleureux pour faire venir à table.`,
      },
      {
        key: 'hairSalon',
        title: 'Site internet pour coiffeur',
        description: `Prestations, prix, prise de rendez-vous${NBSP}: un modèle élégant pour les salons et les barbiers.`,
      },
      {
        key: 'dentist',
        title: 'Site internet pour dentiste',
        description: `Soins, équipe, accès et rendez-vous${NBSP}: un modèle sobre et rassurant pour un cabinet.`,
      },
    ],
    stylesCountOne: '1 modèle',
    stylesCountMany: '{count} modèles',
    linkLabel: 'Composer mon site',
    otherTrade: {
      title: `Un autre métier${NBSP}?`,
      description: `Serrurier, chauffagiste, commerce, artisan du bâtiment${NBSP}: le modèle Édito convient à tous les métiers, ou je crée votre site sur mesure.`,
      linkLabel: 'Parlons de votre site',
    },
  },
  pricing: {
    intro:
      'Un prix connu d’avance pour le site sur modèle, un devis gratuit pour le sur mesure. Dans les deux cas, vous restez propriétaire de votre site et de votre nom de domaine.',
    templateOfferDescription:
      'Le modèle de votre métier, à votre nom et à votre couleur. Nom de domaine et hébergement compris. Vos textes et vos photos, ou on les écrit ensemble en 30 minutes. Modifiable depuis un éditeur simple.',
    customOfferDescription: `Design unique, prise de rendez-vous ou devis en ligne reliés à votre agenda, une page par commune pour le référencement local, et un logiciel derrière le site si vous en avez besoin. Maintenance de 100 à 300${NBSP}€ par mois.`,
  },
  faq: {
    title: `Site internet par métier${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un site internet pour un artisan ou un commerce${NBSP}?`,
        answer: `290${NBSP}€ une seule fois pour un site sur modèle, nom de domaine et hébergement compris, en ligne sous 48${NBSP}h. Un site sur mesure, avec prise de rendez-vous ou devis en ligne, commence à 1${NBSP}500${NBSP}€. Le baromètre des prix d’un site internet compare 20 sources françaises.`,
      },
      {
        question: `Pourquoi un modèle par métier${NBSP}?`,
        answer: `Parce qu’un client ne cherche pas la même chose chez un plombier et chez un coiffeur${NBSP}: l’un veut un numéro à appeler tout de suite, l’autre des prix et un rendez-vous. Chaque modèle met en avant ce qui fait appeler ou réserver dans le métier.`,
      },
      {
        question: `Comment voir mon site avant de payer${NBSP}?`,
        answer: `Ouvrez la page de votre métier et composez votre site dans l’atelier, en 2 minutes. Laissez ensuite votre e-mail${NBSP}: vous recevez une démo à votre nom sous 24${NBSP}h ouvrées, gratuite et sans engagement.`,
      },
      {
        question: `290${NBSP}€, c’est vraiment tout compris${NBSP}?`,
        answer: `Oui pour la mise en ligne${NBSP}: le site, votre nom de domaine et l’hébergement. Vous fournissez vos textes et vos photos, ou on les écrit ensemble lors d’un appel de 30 minutes.`,
      },
      {
        question: `Puis-je modifier mon site moi-même${NBSP}?`,
        answer:
          'Oui. Vous changez vos textes, vos photos et vos prix depuis un éditeur simple, sans rien installer. Je reste joignable si vous bloquez.',
      },
      {
        question: `Mon métier n’est pas dans la liste, que faire${NBSP}?`,
        answer: `Écrivez-moi. Le modèle Édito convient à tous les métiers, et le sur mesure part de votre activité. Le premier échange est gratuit.`,
      },
    ],
  },
  contactCta: {
    title: `Votre métier n’est pas dans la liste${NBSP}?`,
    description: `Dites-moi ce que vous faites et pour qui${NBSP}: je vous dis quel site il vous faut, et combien il coûte, avant tout engagement.`,
    button: 'Parler de mon site',
  },
}
