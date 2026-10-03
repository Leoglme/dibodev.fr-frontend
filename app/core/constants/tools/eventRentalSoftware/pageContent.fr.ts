import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  EVENT_RENTAL_MARQUEE_RULES_SOURCE,
  EVENT_RENTAL_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  EVENT_RENTAL_PAGE_PROJECT_SLUG,
  EVENT_RENTAL_PAGE_RELATED_ARTICLE_SLUGS,
  EVENT_RENTAL_PAGE_SCREENSHOT_URL,
  EVENT_RENTAL_PAGE_UPDATED_AT,
} from '~/core/constants/tools/eventRentalSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'

export const EVENT_RENTAL_PAGE_CONTENT_FR: DibodevSoftwareToolPageContent = {
  meta: {
    title: `Logiciel location matériel événementiel${NBSP}: prix 2026 et test`,
    description: `Logiciels de location de matériel événementiel${NBSP}: prix 2026 (Unipresta gratuit, LoKisi, Rentman, Booqable…) et test gratuit en 6 questions pour choisir le vôtre.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Logiciel de gestion de location de matériel événementiel',
  },
  breadcrumbLabel: 'Logiciel de location événementielle',
  shareImage: {
    titleLines: ['Quel logiciel pour', `louer votre matériel${NBSP}?`],
    highlight: 'matériel',
    subtitle: 'Six questions, les prix 2026 des logiciels de location événementielle et combien prévoir',
    badge: 'Test gratuit, en 2 minutes',
    icon: 'truck',
    alt: `Quel logiciel pour votre location de matériel événementiel${NBSP}? Test gratuit en 6 questions et prix 2026 des logiciels, sur dibodev.fr`,
  },
  hero: {
    titleBefore: 'Quel logiciel pour votre location de ',
    titleHighlight: 'matériel événementiel',
    titleAfter: `${NBSP}?`,
    description:
      'Six questions sur votre équipe, vos dépôts et ce que vous louez. Le test vous dit quel type de logiciel choisir pour gérer vos disponibilités, vos sorties et retours, et combien prévoir.',
    reassurances: ['2 minutes', 'Sans inscription ni e-mail', 'Résultat immédiat'],
    authorIntro: 'Test conçu par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai déjà développé un logiciel de gestion de stock multi-entrepôts pour des PME.',
    updatedAt: EVENT_RENTAL_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'logiciels',
    eyebrow: 'Prix publics 2026',
    title: 'Comparatif des logiciels de location de matériel événementiel et de leurs prix',
    intro:
      'Les tarifs affichés par les éditeurs sur leur site. Le prix dépend le plus souvent du nombre d’utilisateurs, de dépôts ou des modules choisis.',
    productColumnLabel: 'Logiciel',
    coverageColumnLabel: 'Ce qu’il gère',
    priceColumnLabel: 'Prix public',
    products: [
      {
        name: 'Unipresta',
        coverage: 'Devis, réservations, stock et disponibilités, planning, clients, site de location en ligne',
        price: 'Version gratuite',
        priceCondition: 'Abonnements payants pour un accès illimité, prix non affichés sur la page',
      },
      {
        name: 'LoKisi',
        coverage: 'Stock et disponibilités en temps réel, devis, réservations, bons de livraison, contrats, factures',
        price: `Dès 29${NBSP}€ par mois`,
        priceCondition: 'Sans engagement',
      },
      {
        name: 'Booqable',
        coverage:
          'Commandes, stock et disponibilités, page de réservation en ligne, signature électronique (offre Grow)',
        price: `29 à 149${NBSP}$ par mois`,
        priceCondition: `Prix en dollars, 20${NBSP}% de moins à l’année${NBSP}; livraisons en option`,
      },
      {
        name: 'Rentman',
        coverage: 'Stock, planning des équipes, devis et factures (module), suivi du matériel, plusieurs entrepôts',
        price: `39${NBSP}€ par mois, plus les modules`,
        priceCondition: `Par utilisateur avancé${NBSP}: stock 14 à 19${NBSP}€, devis et factures 9${NBSP}€, entrepôt en plus 5${NBSP}€`,
      },
      {
        name: 'Current RMS',
        coverage: 'Location, stock, devis, planning, sans module à ajouter',
        price: `69${NBSP}€ par mois`,
        priceCondition: `Pour le premier utilisateur, puis 49${NBSP}€ par utilisateur`,
      },
      {
        name: 'Sphinx Manager',
        coverage: 'Catalogue, bons de sortie et de retour, casse facturée, kits, appli mobile, factures Factur-X',
        price: 'Sur devis',
        priceCondition: 'Tarifs non publiés',
      },
      {
        name: 'Locasyst, Codial, CLE, Utiliz',
        coverage: `Suites de gestion de location${NBSP}: stock par dépôt, devis, planning, facturation`,
        price: 'Sur devis',
        priceCondition: 'Tarifs non publiés',
      },
    ],
    calloutEmphasizedIntro: `Avant de signer${NBSP}:`,
    calloutText:
      'faites tester au logiciel un cas réel de votre saison. Le même article loué sur deux événements qui se suivent, avec le temps de nettoyage entre les deux, et un kit (table, chaises, nappe) dont un élément manque au retour.',
    calloutFootnote: 'Tarifs relevés le 29 septembre 2026 sur les sites des éditeurs. Liste non exhaustive.',
  },
  rules: {
    anchorId: 'reglementation',
    eyebrow: 'Le point en 2026',
    title: 'Ce que votre logiciel doit suivre en 2026',
    intro:
      'Les tentes et chapiteaux ont leurs propres règles de sécurité, et la facture électronique arrive pour toutes les entreprises. Un bon logiciel garde ces documents avec le matériel.',
    facts: [
      {
        contextLabel: 'Au-delà de 50 personnes',
        title: 'Un registre de sécurité par chapiteau',
        text: 'Les chapiteaux, tentes et structures itinérants qui accueillent plus de 50 personnes doivent avoir un registre de sécurité, délivré par le préfet.',
        sourceName: EVENT_RENTAL_MARQUEE_RULES_SOURCE.name,
        sourceUrl: EVENT_RENTAL_MARQUEE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Avant la délivrance',
        title: 'Le contrôle d’un organisme habilité',
        text: 'Le propriétaire fait d’abord contrôler par un organisme habilité la stabilité de l’ossature et la réaction au feu de la toile.',
        sourceName: EVENT_RENTAL_MARQUEE_RULES_SOURCE.name,
        sourceUrl: EVENT_RENTAL_MARQUEE_RULES_SOURCE.url,
      },
      {
        contextLabel: '8 jours avant l’ouverture',
        title: 'L’extrait du registre remis au maire',
        text: `L’organisateur de l’événement doit le remettre au maire huit jours avant d’accueillir du public${NBSP}: votre client vous le demandera avec la location.`,
        sourceName: EVENT_RENTAL_MARQUEE_RULES_SOURCE.name,
        sourceUrl: EVENT_RENTAL_MARQUEE_RULES_SOURCE.url,
      },
      {
        contextLabel: '1er septembre 2027',
        title: 'La facture électronique',
        text: `Toutes les entreprises doivent pouvoir recevoir des factures électroniques depuis le 1er septembre 2026${NBSP}; les PME devront les émettre à partir du 1er septembre 2027.`,
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: `Ce que l’outil sur mesure ne remplace pas${NBSP}:`,
    calloutText:
      'votre logiciel comptable. Les factures partent vers lui (export ou Factur-X), et les paiements en ligne passent par un prestataire agréé comme Stripe.',
  },
  comparison: {
    eyebrow: 'Les trois options',
    title: `Logiciel du marché, complément ou sur mesure${NBSP}?`,
    intro: `Chacune a sa place. Le test vous oriente${NBSP}; ce tableau montre ce que vous gagnez et ce que vous acceptez avec chacune.`,
    criterionLabel: 'Critère',
    columns: ['Logiciel du marché', 'Logiciel du marché + complément', 'Outil sur mesure'],
    rows: [
      {
        label: 'Prix',
        cells: [
          { state: 'yes', text: `Gratuit à 150${NBSP}€ par mois, selon les utilisateurs et les modules` },
          { state: 'partial', text: `Votre abonnement, plus 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois` },
          {
            state: 'partial',
            text: `5${NBSP}000 à 25${NBSP}000${NBSP}€ une seule fois, plus 100 à 300${NBSP}€ par mois de maintenance`,
          },
        ],
      },
      {
        label: 'Disponibilités, sorties et retours',
        cells: [
          { state: 'yes', text: 'Inclus, avec des différences d’un logiciel à l’autre' },
          { state: 'yes', text: 'Restent dans votre logiciel actuel' },
          { state: 'yes', text: 'Conçus autour de vos kits et de vos délais de nettoyage' },
        ],
      },
      {
        label: `Vos règles${NBSP}: kits, tarifs, dépôts`,
        cells: [
          { state: 'partial', text: 'Dans la limite des réglages prévus par l’éditeur' },
          { state: 'yes', text: 'Sur les points ajoutés par le complément' },
          { state: 'yes', text: 'Conçu autour de votre organisation' },
        ],
      },
      {
        label: 'Devis et réservation sur votre site',
        cells: [
          { state: 'partial', text: 'Souvent sur la page ou la boutique de l’éditeur' },
          { state: 'yes', text: 'Sur votre site, à vos couleurs' },
          { state: 'yes', text: 'Sur votre site, à vos couleurs' },
        ],
      },
      {
        label: 'Mise en route',
        cells: [
          { state: 'yes', text: 'Quelques jours' },
          { state: 'partial', text: '2 à 6 semaines' },
          { state: 'partial', text: '5 à 20 semaines, par étapes' },
        ],
      },
      {
        label: 'Vos données',
        cells: [
          { state: 'partial', text: 'Chez l’éditeur, export selon le logiciel' },
          { state: 'partial', text: 'Réparties entre les deux outils' },
          { state: 'yes', text: 'À vous, code compris' },
        ],
      },
    ],
    rowsShownOnSmallScreens: EVENT_RENTAL_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: EVENT_RENTAL_PAGE_PROJECT_SLUG,
    screenshotUrl: EVENT_RENTAL_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Déjà réalisé',
    title: 'Un logiciel de stock multi-dépôts, déjà en production',
    description: `StockPME est un logiciel de gestion de stock que j’ai créé de zéro chez Kodeva, où j’étais en alternance. Il est toujours en production dans des PME de 20 à 200 salariés. Chaque mouvement est tracé, entrepôt par entrepôt${NBSP}: entrées, sorties, transferts et inventaires.`,
    highlights: [
      'Stock par entrepôt, transferts d’un dépôt à l’autre',
      'Étiquettes à QR code pour chaque article',
      'Historique des mouvements et inventaires',
    ],
    linkLabel: 'Voir le projet StockPME',
    imageAlt: 'Fiche produit de StockPME : stock par entrepôt, numéros de série, boutons de transfert et d’étiquette',
    browserBarCaption: 'StockPME · fiche produit, stock par entrepôt',
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Logiciel de location événementielle${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un logiciel de location de matériel événementiel${NBSP}?`,
        answer: `Unipresta a une version gratuite, LoKisi coûte à partir de 29${NBSP}€ par mois, Rentman 39${NBSP}€ par mois plus des modules par utilisateur, Current RMS 69${NBSP}€ par mois pour le premier utilisateur puis 49${NBSP}€ par utilisateur, et Booqable 29 à 149${NBSP}$ par mois. Sphinx Manager, Locasyst, Codial et CLE sont sur devis (tarifs relevés le 29 septembre 2026). Un complément sur mesure coûte de 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois, un outil complet de 5${NBSP}000 à 25${NBSP}000${NBSP}€, puis 100 à 300${NBSP}€ par mois de maintenance.`,
      },
      {
        question: `Existe-t-il un logiciel de location événementielle gratuit${NBSP}?`,
        answer: `Oui, Unipresta propose une version gratuite avec la gestion et un site de location en ligne${NBSP}; ses abonnements payants ouvrent un accès illimité. Avant de vous lancer, vérifiez comment il gère vos kits et les retours incomplets.`,
      },
      {
        question: `Comment éviter de louer deux fois le même article${NBSP}?`,
        answer:
          'Le logiciel doit réserver l’article sur toute la période, préparation, livraison et nettoyage compris, et le montrer indisponible dès le devis. Testez-le sur deux événements qui se suivent avant de signer.',
      },
      {
        question: `Peut-on gérer plusieurs dépôts${NBSP}?`,
        answer: `Oui${NBSP}: Rentman facture 5${NBSP}€ par entrepôt en plus et par utilisateur avancé, et Locasyst suit le stock par dépôt. Un outil sur mesure peut aussi gérer les transferts d’un dépôt à l’autre, comme StockPME, le logiciel de stock multi-entrepôts que j’ai développé.`,
      },
      {
        question: `Comment facturer la casse et les manquants${NBSP}?`,
        answer:
          'Au retour, l’équipe scanne ou coche ce qui revient. L’écart avec le bon de sortie est calculé, puis ajouté à la facture ou retenu sur la caution selon vos conditions de location.',
      },
      {
        question: `Mes clients peuvent-ils réserver sur mon propre site${NBSP}?`,
        answer: `Oui${NBSP}: un catalogue relié au stock réel, avec demande de devis ou réservation et acompte payé en ligne par un prestataire comme Stripe. Vos clients voient seulement ce qui est disponible à leurs dates.`,
      },
      {
        question: `Quels documents garder pour les chapiteaux${NBSP}?`,
        answer: `Le registre de sécurité, obligatoire pour les structures qui accueillent plus de 50 personnes. L’organisateur en remet un extrait au maire huit jours avant l’événement${NBSP}: votre logiciel peut le joindre directement au contrat de location.`,
      },
      {
        question: `Peut-on reprendre les données de mon logiciel actuel${NBSP}?`,
        answer: `Si votre logiciel exporte vos articles, clients et contrats en Excel ou en CSV, je les reprends dans le nouvel outil${NBSP}; c’est prévu dans le devis. Vérifiez cette possibilité d’export avant de signer avec un éditeur.`,
      },
    ],
  },
  relatedArticles: {
    title: 'À lire aussi',
    slugs: EVENT_RENTAL_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: `Un doute sur le bon outil pour votre parc de location${NBSP}?`,
    description: `Décrivez-moi votre activité en quelques lignes. Je vous réponds sous 24${NBSP}h, et si un logiciel du marché vous suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
  },
}
