import type { DibodevTradeWebsitePageContent } from '~/core/types/DibodevTradeWebsitePage'
import { CONSUMER_MEDIATION_SOURCE } from '~/core/constants/tools/officialSources'
import {
  HAIR_SALON_BILL_SOURCE,
  HAIR_SALON_PRICE_DISPLAY_SOURCE,
  HAIR_SALON_QUALIFICATION_SOURCE,
} from '~/core/constants/tradeWebsites/hairSalon/pageShared'
import { NBSP } from '~/core/constants/typography'

export const HAIR_SALON_WEBSITE_PAGE_FR: DibodevTradeWebsitePageContent = {
  meta: {
    title: `Site internet pour coiffeur${NBSP}: démo à votre nom, prix 2026`,
    description: `Voyez votre site de coiffeur à votre nom en 2 minutes${NBSP}: 290${NBSP}€ une seule fois, domaine et hébergement compris, en ligne sous 48${NBSP}h. Sur mesure dès 1${NBSP}500${NBSP}€.`,
    inLanguage: 'fr-FR',
    serviceName: 'Création de site internet pour coiffeur et barbier',
    serviceDescription:
      'Site internet de salon de coiffure sur modèle, à votre nom, à votre couleur et avec vos photos, nom de domaine et hébergement compris, ou site sur mesure avec prise de rendez-vous en ligne.',
    serviceType: 'Création de site internet pour coiffeur',
  },
  breadcrumbLabel: 'Coiffeur',
  shareImage: {
    titleLines: ['Site internet pour', 'coiffeur'],
    highlight: 'coiffeur',
    subtitle: 'Voyez le vôtre en 2 minutes, à votre nom',
    badge: `290${NBSP}€ une seule fois`,
    alt: `Site internet pour coiffeur${NBSP}: voyez le vôtre en 2 minutes, 290${NBSP}€ une seule fois`,
  },
  hero: {
    titleBefore: 'Site internet pour ',
    titleHighlight: 'coiffeur',
    titleAfter: `${NBSP}: voyez le vôtre en 2 minutes`,
    intro: `Le nom du salon, votre ville, votre couleur, votre logo et vos photos${NBSP}: le site se construit sous vos yeux pendant que vous répondez. 290${NBSP}€ une seule fois sur modèle, domaine et hébergement compris, ou sur mesure à partir de 1${NBSP}500${NBSP}€.`,
    reassurances: ['2 minutes', 'Sans inscription', 'Résultat immédiat'],
  },
  summary: {
    text: `Un site de coiffeur, de coiffeuse ou de barbier coûte 290${NBSP}€ une seule fois chez Dibodev, nom de domaine et hébergement compris, sur le modèle de cette page, en ligne sous 48${NBSP}h. Un site sur mesure, avec prise de rendez-vous en ligne, commence à 1${NBSP}500${NBSP}€. Dans les deux cas, la carte des prix, les horaires, l’adresse du salon et les mentions légales obligatoires sont prévus.`,
    authorBio:
      'développeur indépendant près de Rennes. Je crée des sites et des logiciels pour les artisans et les commerces de proximité, et j’ai développé le modèle de salon ci-dessus.',
  },
  atelier: {
    styleIntro: 'Un modèle pensé pour les barbiers et les salons mixtes. Couleurs, photos et prestations sont à vous.',
    templates: {
      barber: {
        name: 'Charbon',
        description: `Tons charbon, photo du salon en plein écran, grands titres en capitales et bouton de rendez-vous${NBSP}: l’allure d’un barbier de quartier.`,
      },
    },
    mediaIntro: `Commencez par une photo du salon${NBSP}: la première s’affiche en grand en haut du site, la deuxième dans la présentation. Sans photo, le site garde celles du modèle.`,
    serviceOptions: [
      { id: 'womens-cut', label: 'Coupe femme', defaultSelected: true },
      { id: 'mens-cut', label: 'Coupe homme', defaultSelected: true },
      { id: 'colour', label: 'Couleur', defaultSelected: true },
      { id: 'highlights', label: 'Mèches et balayage', defaultSelected: false },
      { id: 'blow-dry', label: 'Brushing et soin', defaultSelected: false },
      { id: 'beard', label: 'Barbe', defaultSelected: false },
      { id: 'wedding', label: 'Coiffure de mariage', defaultSelected: false },
    ],
    serviceDescription: 'Conseil personnalisé, prix annoncé avant de commencer.',
    requestTitle: 'Votre site de coiffeur, à votre nom',
  },
  contents: {
    eyebrow: 'Ce qui fait réserver',
    title: 'Ce que doit contenir le site d’un coiffeur',
    intro: 'Six éléments séparent un site qui fait réserver d’une simple carte de visite en ligne.',
    cards: [
      {
        icon: 'CalendarCheck',
        title: 'Le rendez-vous en un geste',
        description: `Un bouton «${NBSP}Prendre rendez-vous${NBSP}» sur chaque écran de téléphone${NBSP}: un appel, un message ou votre agenda en ligne si vous en avez un.`,
      },
      {
        icon: 'Euro',
        title: 'La carte des prix',
        description: `Coupes, couleurs, forfaits${NBSP}: les mêmes prix TTC qu’en vitrine. On sait ce que l’on paiera avant de venir.`,
      },
      {
        icon: 'MapPin',
        title: 'Adresse et horaires',
        description: `L’adresse, le plan, les horaires et les jours de fermeture${NBSP}: ce que l’on vérifie avant de venir. Google les lit aussi.`,
      },
      {
        icon: 'Camera',
        title: 'Le salon et vos réalisations',
        description: `Vos coupes et vos couleurs en photo, avec l’accord de vos clients, et un lien vers votre Instagram${NBSP}: de quoi donner envie de pousser la porte.`,
      },
      {
        icon: 'Star',
        title: 'Les avis de vos clients',
        description: `Votre note et vos derniers avis Google, bien en vue${NBSP}: ils rassurent avant une première visite.`,
      },
      {
        icon: 'ShieldCheck',
        title: 'Savoir-faire et produits',
        description: `Votre brevet professionnel, vos formations et les marques que vous utilisez${NBSP}: ce qui rassure avant une couleur ou un lissage.`,
      },
    ],
  },
  rules: {
    eyebrow: 'Ce que la loi impose',
    title: 'Quatre règles à respecter dans votre salon et sur votre site',
    intro: `Les agents de la répression des fraudes contrôlent régulièrement les salons de coiffure et les barbiers, pour vérifier l’affichage des prix et la qualification. Voici ce que les textes demandent, relus le 2${NBSP}novembre 2026.`,
    facts: [
      {
        contextLabel: `Arrêté du 27${NBSP}mars 1987`,
        title: 'Vos prix en vitrine et à la caisse',
        text: `En vitrine, lisibles de l’extérieur${NBSP}: au moins 10 prix TTC des prestations les plus courantes, 20 en salon mixte, forfaits détaillés. Le même tarif au lieu de paiement, et la carte complète des prix à la caisse, à la vue des clients.`,
        sourceName: HAIR_SALON_PRICE_DISPLAY_SOURCE.name,
        sourceUrl: HAIR_SALON_PRICE_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: `Dès 25${NBSP}€ TTC`,
        title: 'Une note avant le paiement',
        text: `En double exemplaire, avant le paiement${NBSP}: date, nom et adresse du salon, nom du client, prestations et produits détaillés, total HT et TTC. En dessous de 25${NBSP}€, seulement si le client la demande. Vous gardez le double deux ans.`,
        sourceName: HAIR_SALON_BILL_SOURCE.name,
        sourceUrl: HAIR_SALON_BILL_SOURCE.url,
      },
      {
        contextLabel: 'Code de l’artisanat, art. R121-2',
        title: 'Un brevet professionnel pour coiffer en salon',
        text: `Coiffer en salon demande le brevet professionnel, le brevet de maîtrise ou un diplôme de coiffure de niveau égal ou supérieur, ou le contrôle effectif et permanent d’une personne qui l’a. Sans diplôme${NBSP}: trois ans d’expérience dans le métier.`,
        sourceName: HAIR_SALON_QUALIFICATION_SOURCE.name,
        sourceUrl: HAIR_SALON_QUALIFICATION_SOURCE.url,
      },
      {
        contextLabel: 'Sur le site lui-même',
        title: 'Mentions légales et médiateur',
        text: `Nom ou dénomination sociale (mention EI en entreprise individuelle), adresse, téléphone, e-mail, numéro d’immatriculation et hébergeur du site${NBSP}; puis le nom, l’adresse et le site du médiateur de la consommation que vos clients peuvent saisir.`,
        sourceName: CONSUMER_MEDIATION_SOURCE.name,
        sourceUrl: CONSUMER_MEDIATION_SOURCE.url,
      },
    ],
    footnote: `Sources${NBSP}: Légifrance (arrêté du 27${NBSP}mars 1987 relatif à la publicité des tarifs de coiffure, articles 1 et 2${NBSP}; arrêté n°${NBSP}83-50/A du 3${NBSP}octobre 1983, articles 1, 3 et 4${NBSP}; code de l’artisanat, articles L121-1 et R121-2 à R121-4), Assemblée nationale (réponse du Gouvernement publiée le 31${NBSP}mars 2026 à la question écrite n°${NBSP}12555), Entreprendre.Service-Public.fr (mentions obligatoires sur le site internet d’une entreprise, médiation de la consommation). Relues le 2${NBSP}novembre 2026.`,
  },
  pricing: {
    intro:
      'Un prix connu d’avance pour le site sur modèle, un devis gratuit pour le sur mesure. Dans les deux cas, vous restez propriétaire de votre site et de votre nom de domaine.',
    templateOfferDescription:
      'Le modèle Charbon, à votre nom et à votre couleur. Nom de domaine et hébergement compris. Vos textes, votre carte des prix et vos photos, ou on les écrit ensemble en 30 minutes. Modifiable depuis un éditeur simple.',
    customOfferDescription: `Design unique, prise de rendez-vous en ligne reliée à votre agenda, une page par prestation pour le référencement local, et un logiciel derrière le site si vous en avez besoin. Maintenance de 100 à 300${NBSP}€ par mois.`,
  },
  resources: {
    title: 'Pour aller plus loin sur dibodev.fr',
    toolCard: null,
    freeTemplateCard: null,
  },
  faq: {
    title: `Site internet de coiffeur${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un site internet pour un coiffeur${NBSP}?`,
        answer: `290${NBSP}€ une seule fois pour un site sur modèle, nom de domaine et hébergement compris. Un site sur mesure, avec prise de rendez-vous en ligne, commence à 1${NBSP}500${NBSP}€. Le baromètre des prix d’un site internet, qui compare 20 sources françaises, donne les ordres de grandeur du marché.`,
      },
      {
        question: `290${NBSP}€, c’est vraiment tout compris${NBSP}?`,
        answer: `Oui pour la mise en ligne${NBSP}: le site, votre nom de domaine et l’hébergement. Vous fournissez vos textes, votre carte des prix et vos photos, ou on les écrit ensemble lors d’un appel de 30 minutes.`,
      },
      {
        question: `Puis-je changer mes prix et mes horaires moi-même${NBSP}?`,
        answer:
          'Oui. Vous changez vos prix, vos horaires, vos textes et vos photos depuis un éditeur simple, sans rien installer. Je reste joignable si vous bloquez.',
      },
      {
        question: `En combien de temps le site est-il en ligne${NBSP}?`,
        answer: `48${NBSP}h après réception de vos textes et de vos photos pour un site sur modèle. Deux à quatre semaines pour un site sur mesure.`,
      },
      {
        question: `Mon salon va-t-il apparaître sur Google${NBSP}?`,
        answer: `Le site est construit pour la recherche locale${NBSP}: adresse, horaires et prestations écrits en clair, fiche Google reliée. Pour viser chaque prestation (couleur, mariage, barbe), le sur mesure ajoute une page par prestation.`,
      },
      {
        question: `Puis-je voir un vrai site avant de payer${NBSP}?`,
        answer: `Oui, c’est le principe de cette page${NBSP}: vous composez votre site dans l’atelier, puis vous recevez une démo à votre nom sous 24${NBSP}h ouvrées, avant toute décision.`,
      },
      {
        question: `Quelles mentions obligatoires sur le site d’un salon de coiffure${NBSP}?`,
        answer: `Les mentions légales (nom ou dénomination sociale, adresse, numéro d’immatriculation, hébergeur) et les coordonnées de votre médiateur de la consommation. Vos prix, eux, sont obligatoires en vitrine et en caisse${NBSP}: les reprendre sur le site évite les surprises. Je mets tout en place avec vous avant la mise en ligne.`,
      },
      {
        question: `Le modèle convient-il à un salon pour femmes${NBSP}?`,
        answer: `Il vient de l’univers du barbier${NBSP}: tons sombres, lettres capitales, et une accroche d’accueil qui parle de coupe et de barbe. Vos couleurs, vos photos et vos prestations remplacent celles de la démo, et l’atelier vous montre le résultat. Si votre salon a une tout autre ambiance, le sur mesure part de la vôtre.`,
      },
    ],
  },
  contactCta: {
    title: 'Votre site de coiffeur, prêt à faire réserver',
    description: `Un modèle prêt à l’emploi, une démo à votre nom sous 24${NBSP}h ouvrées, et un prix connu d’avance. Si un site sur modèle vous suffit, je vous le dis.`,
  },
  mobileBarText: 'Un site de coiffeur à votre nom, gratuit à voir',
}
