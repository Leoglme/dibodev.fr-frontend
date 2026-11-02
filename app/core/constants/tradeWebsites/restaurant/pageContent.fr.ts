import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import {
  HOMEMADE_DISH_MENTION_SOURCE,
  RESTAURANT_ALLERGENS_SOURCE,
  RESTAURANT_MEAT_ORIGIN_SOURCE,
  RESTAURANT_PRICE_DISPLAY_SOURCE,
} from '~/core/constants/tradeWebsites/restaurant/pageShared'
import { NBSP } from '~/core/constants/typography'

export const RESTAURANT_WEBSITE_PAGE_FR: DibodevTradeWebsitePageContent = {
  meta: {
    title: `Site internet pour restaurant${NBSP}: démo à votre nom, prix 2026`,
    description: `Voyez votre site de restaurant à votre nom en 2 minutes${NBSP}: 290${NBSP}€ une seule fois, domaine et hébergement compris, en ligne sous 48${NBSP}h. Sur mesure dès 1${NBSP}500${NBSP}€.`,
    inLanguage: 'fr-FR',
    serviceName: 'Création de site internet pour restaurant',
    serviceDescription:
      'Site internet de restaurant sur modèle, à votre nom, à votre couleur et avec vos photos, nom de domaine et hébergement compris, ou site sur mesure avec réservation de table et commande en ligne.',
    serviceType: 'Création de site internet pour restaurant',
  },
  breadcrumbLabel: 'Restaurant',
  shareImage: {
    titleLines: ['Site internet pour', 'restaurant'],
    highlight: 'restaurant',
    subtitle: 'Voyez le vôtre en 2 minutes, à votre nom',
    badge: `290${NBSP}€ une seule fois`,
    alt: `Site internet pour restaurant${NBSP}: voyez le vôtre en 2 minutes, 290${NBSP}€ une seule fois`,
  },
  hero: {
    titleBefore: 'Site internet pour ',
    titleHighlight: 'restaurant',
    titleAfter: `${NBSP}: voyez le vôtre en 2 minutes`,
    intro: `Le nom de votre restaurant, votre ville, votre couleur, votre logo et vos plats${NBSP}: le site se construit sous vos yeux pendant que vous répondez. 290${NBSP}€ une seule fois sur modèle, domaine et hébergement compris, ou sur mesure à partir de 1${NBSP}500${NBSP}€.`,
    reassurances: ['2 minutes', 'Sans inscription', 'Résultat immédiat'],
  },
  summary: {
    text: `La création d’un site internet pour un restaurant, un bistrot ou un food truck coûte 290${NBSP}€ une seule fois chez Dibodev, nom de domaine et hébergement compris, sur le modèle de cette page, en ligne sous 48${NBSP}h. Un site sur mesure, avec réservation de table ou commande en ligne, commence à 1${NBSP}500${NBSP}€. Dans les deux cas, la carte, les horaires, l’accès et les mentions obligatoires sont prévus.`,
    authorBio:
      'développeur indépendant près de Rennes. Je crée des sites et des logiciels pour les artisans et les commerçants, et j’ai développé le modèle de restaurant ci-dessus.',
  },
  atelier: {
    styleIntro:
      'Un modèle pensé pour la restauration, du bistrot au food truck. Couleurs, photos et textes sont à vous.',
    templates: {
      food: {
        name: 'Arche',
        description: `Fond crème, grand titre vert forêt, photo en arche et bouton «${NBSP}Voir le menu${NBSP}» en haut de page.`,
      },
    },
    mediaIntro:
      'Vos assiettes, votre salle et votre devanture valent mieux que n’importe quelle photo de banque. Sans photo, le site garde celles du modèle.',
    serviceOptions: [
      { id: 'daily-menu', label: 'Menu du jour', defaultSelected: true },
      { id: 'table-booking', label: 'Réservation de table', defaultSelected: true },
      { id: 'takeaway', label: 'Vente à emporter', defaultSelected: true },
      { id: 'delivery', label: 'Livraison', defaultSelected: false },
      { id: 'private-hire', label: 'Privatisation', defaultSelected: false },
      { id: 'catering', label: 'Traiteur', defaultSelected: false },
      { id: 'terrace', label: 'Terrasse', defaultSelected: false },
    ],
    serviceDescription: 'Renseignements et réservations par téléphone.',
    requestTitle: 'Votre site de restaurant, à votre nom',
  },
  examples: {
    title: 'Un exemple de site internet pour restaurant',
    imageAlt: 'Exemple de site internet pour restaurant, modèle {name}',
  },
  contents: {
    eyebrow: 'Ce qui fait réserver',
    title: 'Ce que doit contenir le site d’un restaurant',
    intro: 'Six éléments font la différence entre un site que l’on parcourt et une table réservée.',
    cards: [
      {
        icon: 'Utensils',
        title: 'La carte et ses prix, à jour',
        description: `La carte et le menu du jour en vrai texte, pas en PDF ni en photo floue${NBSP}: lisibles au téléphone, et Google les lit aussi.`,
      },
      {
        icon: 'CalendarCheck',
        title: 'Réserver sans chercher',
        description:
          'Un bouton de réservation sur chaque écran, et le numéro juste à côté pour ceux qui préfèrent appeler.',
      },
      {
        icon: 'MapPin',
        title: 'Horaires et accès',
        description: `Services du midi et du soir, jours de fermeture, adresse et stationnement${NBSP}: les mêmes que sur votre fiche Google.`,
      },
      {
        icon: 'Camera',
        title: 'Vos plats en photo',
        description:
          'Vos vraies assiettes et votre salle, même prises au téléphone, donnent plus envie que des photos de banque.',
      },
      {
        icon: 'Star',
        title: 'Les avis bien en vue',
        description: `Votre note Google et quelques avis récents${NBSP}: c’est souvent ce qui départage deux restaurants voisins.`,
      },
      {
        icon: 'Bike',
        title: 'Emporter, livrer, privatiser',
        description: `Vente à emporter, livraison, groupes et traiteur${NBSP}: chaque service est présenté avec ses conditions et un contact direct.`,
      },
    ],
  },
  rules: {
    eyebrow: 'Ce que la loi impose',
    title: 'Quatre règles à respecter sur votre carte et votre site',
    intro: `Prix, allergènes, origine des viandes, fait maison${NBSP}: la carte d’un restaurant est très encadrée, et votre site la montre. Voici ce que les textes demandent, relus le 2${NBSP}novembre 2026.`,
    facts: [
      {
        contextLabel: `Arrêté du 27${NBSP}mars 1987`,
        title: 'Les prix affichés dehors, service compris',
        text: `Menus ou carte du jour et prix d’au moins cinq vins, lisibles de l’extérieur pendant le service, et au moins à partir de 11${NBSP}h${NBSP}30 le midi et de 18${NBSP}h le soir. Prix taxes et service compris, boisson comprise ou non. Un QR code seul ne suffit pas.`,
        sourceName: RESTAURANT_PRICE_DISPLAY_SOURCE.name,
        sourceUrl: RESTAURANT_PRICE_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: `Depuis le 1er${NBSP}juillet 2015`,
        title: 'Les 14 allergènes, par écrit',
        text: `Gluten, lait, œufs, fruits à coque…${NBSP}: les 14 allergènes réglementaires présents dans chaque plat sont signalés par écrit, affichés en salle ou dans un document en libre accès. Pour une commande en ligne, l’information est donnée avant la validation.`,
        sourceName: RESTAURANT_ALLERGENS_SOURCE.name,
        sourceUrl: RESTAURANT_ALLERGENS_SOURCE.url,
      },
      {
        contextLabel: `Depuis le 19${NBSP}février 2025`,
        title: 'L’origine de chaque viande',
        text: `Porc, agneau, mouton et volaille rejoignent le bœuf${NBSP}: pour ces viandes achetées crues, «${NBSP}Origine${NBSP}: France${NBSP}» ou pays d’élevage et d’abattage, sur la carte ou un affichage. Restaurant sans salle${NBSP}: l’origine s’affiche avant la commande, en ligne comprise.`,
        sourceName: RESTAURANT_MEAT_ORIGIN_SOURCE.name,
        sourceUrl: RESTAURANT_MEAT_ORIGIN_SOURCE.url,
      },
      {
        contextLabel: 'Sur la carte et en ligne',
        title: `La mention «${NBSP}fait maison${NBSP}», plat par plat`,
        text: `Un plat «${NBSP}fait maison${NBSP}» est cuisiné sur place à partir de produits bruts. La mention ou son logo accompagne chaque plat concerné, sur la carte comme sur votre site, ou figure une seule fois si toute la carte est faite maison.`,
        sourceName: HOMEMADE_DISH_MENTION_SOURCE.name,
        sourceUrl: HOMEMADE_DISH_MENTION_SOURCE.url,
      },
    ],
    footnote: `Sources${NBSP}: DGCCRF (fiche pratique sur les restaurants, 10${NBSP}février 2025), Légifrance (arrêté du 27${NBSP}mars 1987, articles 1, 4 et 5${NBSP}; code de la consommation, articles R.${NBSP}412-12 à R.${NBSP}412-14 et D.${NBSP}122-1 à D.${NBSP}122-3${NBSP}; décret n°${NBSP}2002-1465 modifié le 13${NBSP}février 2025${NBSP}; décret n°${NBSP}2023-492), EUR-Lex (règlement UE n°${NBSP}1169/2011, articles 14 et 44, annexe II). Relues le 2${NBSP}novembre 2026.`,
  },
  pricing: {
    intro:
      'Un prix connu d’avance pour le site sur modèle, un devis gratuit pour le sur mesure. Dans les deux cas, vous restez propriétaire de votre site et de votre nom de domaine.',
    templateOfferDescription:
      'Le modèle de cette page, à votre nom et à votre couleur. Nom de domaine et hébergement compris. Votre carte, vos textes et vos photos, ou on les écrit ensemble en 30 minutes. Modifiable depuis un éditeur simple.',
    customOfferDescription: `Design unique, réservation de table en ligne avec vos créneaux, commande à emporter ou en livraison, carte en plusieurs langues, et un logiciel derrière le site si vous en avez besoin. Maintenance de 100 à 300${NBSP}€ par mois.`,
  },
  resources: {
    title: 'Pour aller plus loin sur dibodev.fr',
    toolCard: null,
    freeTemplateCard: null,
  },
  faq: {
    title: `Site internet de restaurant${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un site internet pour un restaurant${NBSP}?`,
        answer: `290${NBSP}€ une seule fois pour un site sur modèle, nom de domaine et hébergement compris. Un site sur mesure, avec réservation ou commande en ligne, commence à 1${NBSP}500${NBSP}€. Le baromètre des prix d’un site internet, qui compare 20 sources françaises, donne les ordres de grandeur du marché.`,
      },
      {
        question: `290${NBSP}€, c’est vraiment tout compris${NBSP}?`,
        answer: `Oui pour la mise en ligne${NBSP}: le site, votre nom de domaine et l’hébergement, avec un formulaire de demande de réservation. Vous fournissez votre carte, vos textes et vos photos, ou on les écrit ensemble lors d’un appel de 30 minutes.`,
      },
      {
        question: `Puis-je modifier ma carte moi-même${NBSP}?`,
        answer:
          'Oui. Vous changez vos plats, vos textes, vos horaires et vos photos depuis un éditeur simple, sans rien installer. Je reste joignable si vous bloquez.',
      },
      {
        question: `En combien de temps le site est-il en ligne${NBSP}?`,
        answer: `48${NBSP}h après réception de vos textes et de vos photos pour un site sur modèle. Deux à quatre semaines pour un site sur mesure.`,
      },
      {
        question: `Mon restaurant va-t-il apparaître sur Google${NBSP}?`,
        answer: `Le site est construit pour la recherche locale${NBSP}: adresse, horaires et carte écrits en texte, fiche Google reliée. Sur une recherche «${NBSP}restaurant${NBSP}» suivie de votre ville, c’est souvent votre fiche Google qui s’affiche d’abord${NBSP}: le site la complète avec votre carte et vos photos.`,
      },
      {
        question: `Puis-je voir un vrai site avant de payer${NBSP}?`,
        answer: `Oui, c’est le principe de cette page${NBSP}: vous composez votre site dans l’atelier, puis vous recevez une démo à votre nom sous 24${NBSP}h ouvrées, avant toute décision.`,
      },
      {
        question: `Quelles mentions obligatoires sur le site d’un restaurant${NBSP}?`,
        answer: `Les mentions légales (nom, adresse, numéro d’immatriculation, hébergeur) et les coordonnées de votre médiateur de la consommation. Sur la carte en ligne, la mention «${NBSP}fait maison${NBSP}» accompagne les plats concernés, et si vous prenez des commandes, les allergènes s’affichent avant la validation. Je les mets en place avec vous avant la mise en ligne.`,
      },
      {
        question: `Un QR code vers mon site peut-il remplacer la carte affichée${NBSP}?`,
        answer: `Non. La DGCCRF le rappelle${NBSP}: un QR code seul ne suffit pas pour les affichages obligatoires, comme les menus et les prix visibles de l’extérieur. Le site vient en plus${NBSP}: il fait découvrir votre carte avant la visite, et le QR code de la table peut y renvoyer.`,
      },
    ],
  },
  contactCta: {
    title: 'Votre site de restaurant, prêt à faire réserver',
    description: `Un modèle pensé pour la restauration, une démo à votre nom sous 24${NBSP}h ouvrées, et un prix connu d’avance. Si un site sur modèle vous suffit, je vous le dis.`,
  },
  mobileBarText: 'Un site de restaurant à votre nom, gratuit à voir',
}
