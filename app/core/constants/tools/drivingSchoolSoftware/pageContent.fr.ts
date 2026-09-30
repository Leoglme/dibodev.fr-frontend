import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  DRIVING_SCHOOL_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  DRIVING_SCHOOL_PAGE_PROJECT_SLUG,
  DRIVING_SCHOOL_PAGE_RELATED_ARTICLE_SLUGS,
  DRIVING_SCHOOL_PAGE_SCREENSHOT_URL,
  DRIVING_SCHOOL_PAGE_UPDATED_AT,
  DRIVING_SCHOOL_RULE_SOURCES,
} from '~/core/constants/tools/drivingSchoolSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const DRIVING_SCHOOL_PAGE_CONTENT_FR: DibodevSoftwareToolPageContent = {
  meta: {
    title: `Logiciel auto-école${NBSP}: comparatif, prix 2026 et test gratuit`,
    description: `Comparatif 2026 des logiciels d’auto-école et de leurs prix (Drivea, Ma Gestion Zen, Drivup, Kréno 2…) et test gratuit en 6 questions pour choisir le vôtre.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Logiciel de gestion d’auto-école',
  },
  breadcrumbLabel: 'Logiciel auto-école',
  shareImage: {
    titleLines: ['Quel logiciel pour', `votre auto-école${NBSP}?`],
    highlight: 'auto-école',
    subtitle: 'Six questions, les prix 2026 des logiciels du marché et combien prévoir',
    badge: 'Test gratuit, en 2 minutes',
    icon: 'car',
    alt: `Quel logiciel pour votre auto-école${NBSP}? Test gratuit en 6 questions et prix 2026 des logiciels, sur dibodev.fr`,
  },
  hero: {
    titleBefore: 'Quel logiciel pour votre ',
    titleHighlight: 'auto-école',
    titleAfter: `${NBSP}?`,
    description:
      'Répondez à six questions sur vos moniteurs, vos agences et vos élèves. Le test vous dit quel type de logiciel choisir et combien prévoir.',
    reassurances: ['2 minutes', 'Sans inscription ni e-mail', 'Résultat immédiat'],
    authorIntro: 'Test conçu par',
    authorBio:
      ', développeur d’applications métier près de Rennes. J’ai déjà développé un logiciel de gestion d’auto-école.',
    updatedAt: DRIVING_SCHOOL_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'logiciels',
    eyebrow: 'Prix publics 2026',
    title: 'Comparatif des logiciels d’auto-école et de leurs prix',
    intro:
      'Les tarifs que les éditeurs affichent sur leur site, hors taxes. Le prix dépend le plus souvent du nombre d’agences ou d’inscriptions.',
    productColumnLabel: 'Logiciel',
    coverageColumnLabel: 'Ce qu’il gère',
    priceColumnLabel: 'Prix public, hors taxes',
    products: [
      {
        name: 'Drivea',
        coverage: 'Planning, élèves, paiements, progression des élèves, applis iOS et Android',
        price: 'Gratuit',
        priceCondition: `Option à 10${NBSP}€ par mois pour recevoir des élèves`,
      },
      {
        name: 'rdv360',
        coverage: `Agenda en ligne, réservation 24${NBSP}h/24, rappels${NBSP}; caisse et paiement en ligne dans les formules payantes`,
        price: `Gratuit, puis 29,90 à 59,90${NBSP}€ par mois`,
        priceCondition: 'Selon la caisse et le paiement en ligne',
      },
      {
        name: 'Ma Gestion Zen',
        coverage: 'Planning, élèves, flotte, comptabilité, portail élève, connexion ANTS, plusieurs agences',
        price: `39${NBSP}€ par mois`,
        priceCondition: '3 utilisateurs inclus',
      },
      {
        name: 'Drivup',
        coverage: 'Planning, réservation et paiement en ligne, livret, signature électronique, ANTS, appli élève',
        price: `45${NBSP}€ ou 69${NBSP}€ par mois`,
        priceCondition: `Pour une agence, selon l’offre${NBSP}; livret dès 3,50${NBSP}€ par élève`,
      },
      {
        name: 'Kréno 2',
        coverage:
          'Planning, contrats, factures, encaissements certifiés, livret relié à l’État, applis élève et moniteur',
        price: `49${NBSP}€ par mois`,
        priceCondition: `Jusqu’à 200 inscriptions par an, puis 2,70${NBSP}€ l’inscription`,
      },
      {
        name: 'GestAuto-École',
        coverage: 'Planning, livret, portail élève, forfaits, plusieurs agences, sur la base d’Odoo',
        price: `79${NBSP}€ par mois`,
        priceCondition: 'Moniteurs et élèves illimités',
      },
      {
        name: 'Klaxo',
        coverage: 'Planning, réservation en ligne, rappels SMS, boutique, contrats, livret, ANTS et RdvPermis',
        price: 'Sur devis',
        priceCondition: 'Trois formules selon le nombre d’inscriptions, tarifs non publiés',
      },
      {
        name: 'Rapido, Elgéaweb, AGX',
        coverage: `Suites des éditeurs historiques${NBSP}: livret, ANTS, RdvPermis, applis élève`,
        price: 'Sur devis',
        priceCondition: 'Tarifs non publiés',
      },
    ],
    calloutEmphasizedIntro: `Avant de signer${NBSP}:`,
    calloutText:
      'le livret numérique est obligatoire depuis 2024. Demandez à l’éditeur s’il transmet vos heures à l’État par l’interface officielle, et si vous pouvez exporter vos données le jour où vous changez de logiciel.',
    calloutFootnote: 'Tarifs relevés les 28 et 29 septembre 2026 sur les sites des éditeurs. Liste non exhaustive.',
  },
  rules: {
    anchorId: 'reglementation',
    eyebrow: 'Le point en 2026',
    title: 'Ce qu’un logiciel d’auto-école doit gérer en 2026',
    intro:
      'Ces obligations décident en partie de ce qu’un logiciel doit faire, et de ce qu’il ne faut pas refaire soi-même.',
    facts: [
      {
        contextLabel: 'Depuis le 1er janvier 2024',
        title: 'Le livret d’apprentissage numérique',
        text: `Obligatoire. Les heures qu’il transmet servent à calculer vos places d’examen${NBSP}: un numéro NEPH erroné ou un horaire incohérent, et ces heures ne comptent pas.`,
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.logbook.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.logbook.url,
      },
      {
        contextLabel: '1,57 million de places en 2024',
        title: 'Les places d’examen sur RdvPermis',
        text: `Vous réservez les places de vos élèves, et elles manquent${NBSP}: la profession estimait le besoin à 2,19 millions pour 2025.`,
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.testSlots.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.testSlots.url,
      },
      {
        contextLabel: 'Depuis le 1er janvier 2025',
        title: 'Le contrat-type',
        text: 'Évaluation de départ, prix à l’unité et au forfait, et une leçon non décommandée 48 heures ouvrées à l’avance n’est pas remboursée.',
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.standardContract.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.standardContract.url,
      },
      {
        contextLabel: 'Depuis le 20 février 2026',
        title: 'Le CPF, beaucoup plus restreint',
        text: `Le permis B n’est plus financé que pour les demandeurs d’emploi et les salariés cofinancés, jusqu’à 900${NBSP}€. Qualiopi reste obligatoire.`,
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.trainingAccount.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.trainingAccount.url,
      },
      {
        contextLabel: 'Article 286 du CGI',
        title: 'Les encaissements et la facture',
        text: `Vos encaissements passent par un logiciel de caisse sécurisé. Facture électronique${NBSP}: réception obligatoire depuis le 1er septembre 2026, émission pour les PME au 1er septembre 2027.`,
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.payments.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.payments.url,
      },
      {
        contextLabel: `3${NBSP}000${NBSP}km au minimum`,
        title: 'La conduite accompagnée',
        text: `Rendez-vous préalable, rendez-vous pédagogiques, kilomètres parcourus${NBSP}: élèves et parents veulent suivre tout cela sans appeler le bureau.`,
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.accompaniedDriving.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.accompaniedDriving.url,
      },
    ],
    calloutEmphasizedIntro: `Ce que je ne refais jamais en sur mesure${NBSP}:`,
    calloutText:
      'le livret numérique, l’ANTS et RdvPermis. Ces échanges avec l’État passent par des éditeurs spécialisés, et une erreur coûte des places d’examen. Un outil sur mesure se branche à côté d’un logiciel conforme.',
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
          {
            state: 'yes',
            text: `Gratuit à 79${NBSP}€ HT par mois pour une agence, ou sur devis selon l’éditeur`,
          },
          { state: 'partial', text: `Votre abonnement, plus 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois` },
          {
            state: 'partial',
            text: `5${NBSP}000 à 25${NBSP}000${NBSP}€ une seule fois, plus 100 à 300${NBSP}€ par mois de maintenance`,
          },
        ],
      },
      {
        label: 'Livret numérique, ANTS, RdvPermis',
        cells: [
          { state: 'yes', text: 'Inclus et tenus à jour par l’éditeur, selon le logiciel' },
          { state: 'yes', text: 'Restent dans votre logiciel actuel' },
          { state: 'partial', text: 'Restent dans un logiciel conforme, relié à l’outil' },
        ],
      },
      {
        label: `Vos règles${NBSP}: forfaits, tarifs, agences`,
        cells: [
          { state: 'partial', text: 'Dans la limite des réglages prévus par l’éditeur' },
          { state: 'yes', text: 'Sur les points ajoutés par le complément' },
          { state: 'yes', text: 'Conçu autour de votre organisation' },
        ],
      },
      {
        label: 'Réservation et paiement sur votre site',
        cells: [
          { state: 'partial', text: 'Souvent sur le portail ou la boutique de l’éditeur' },
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
    rowsShownOnSmallScreens: DRIVING_SCHOOL_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: DRIVING_SCHOOL_PAGE_PROJECT_SLUG,
    screenshotUrl: DRIVING_SCHOOL_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Déjà réalisé',
    title: 'Un logiciel de gestion d’auto-école, déjà développé',
    description:
      'Driving School est une application web de gestion d’auto-école que j’ai conçue pendant ma formation à Epitech. Elle remplace le planning mural par un planning partagé et montre à chaque élève où il en est.',
    highlights: [
      'Planning des leçons de conduite, au jour, à la semaine ou au mois',
      'Fiches élèves et moniteurs, avec les droits de chacun',
      'Heures effectuées et heures restantes pour chaque élève',
    ],
    linkLabel: 'Voir le projet Driving School',
    imageAlt: 'Planning mensuel de Driving School : leçons de conduite réparties par jour avec le prénom de l’élève',
    browserBarCaption: 'Driving School · planning du mois',
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Logiciel d’auto-école${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un logiciel de gestion d’auto-école${NBSP}?`,
        answer: `Entre 0 et 79${NBSP}€ HT par mois pour une agence avec les logiciels qui affichent leurs prix. Drivea et la formule de base de rdv360 sont gratuits, Ma Gestion Zen coûte 39${NBSP}€ par mois, Drivup 45 ou 69${NBSP}€ pour une agence, Kréno 2 49${NBSP}€ jusqu’à 200 inscriptions par an et GestAuto-École 79${NBSP}€ (tarifs publics relevés fin septembre 2026). Klaxo, Rapido, Elgéaweb et AGX sont sur devis. Un complément sur mesure coûte de 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois, un outil complet de 5${NBSP}000 à 25${NBSP}000${NBSP}€, puis 100 à 300${NBSP}€ par mois de maintenance.`,
      },
      {
        question: `Existe-t-il un logiciel d’auto-école gratuit${NBSP}?`,
        answer: `Oui. Drivea est gratuit, avec une option à 10${NBSP}€ par mois pour recevoir de nouveaux élèves. La formule gratuite de rdv360 donne un agenda en ligne, la réservation 24${NBSP}h/24 et des rappels, sans caisse ni paiement en ligne. Vérifiez dans tous les cas le livret numérique${NBSP}: il est obligatoire depuis 2024 et vos heures doivent être transmises à l’État.`,
      },
      {
        question: `Quel est le meilleur logiciel pour une auto-école${NBSP}?`,
        answer: `Il dépend surtout de votre taille. Seul ou avec quelques moniteurs, un logiciel simple à moins de 50${NBSP}€ par mois suffit souvent. Avec plusieurs agences, regardez la gestion multi-agences, le livret relié à l’État, la réservation et le paiement en ligne. Le test en haut de cette page vous oriente en 2 minutes.`,
      },
      {
        question: `Un outil sur mesure peut-il remplacer mon logiciel pour le livret numérique${NBSP}?`,
        answer: `Je ne le conseille pas. Le livret transmet vos heures de formation à l’État par une interface prévue pour les éditeurs de logiciels, et ces heures servent à calculer vos places d’examen. Gardez un logiciel conforme pour cette partie${NBSP}; l’outil sur mesure se branche à côté pour le planning, les réservations, les tarifs ou le suivi de vos agences.`,
      },
      {
        question: `Mes élèves peuvent-ils réserver et payer sur mon propre site${NBSP}?`,
        answer: `Oui, c’est souvent la première demande${NBSP}: réserver ses leçons, payer en ligne ou en plusieurs fois et voir ses heures restantes sur le site de l’auto-école, plutôt que sur le portail d’un éditeur.`,
      },
      {
        question: `Et les encaissements, la caisse${NBSP}?`,
        answer: `Les paiements de vos élèves doivent être enregistrés dans un logiciel de caisse sécurisé (article 286 du Code général des impôts). Si l’outil sur mesure prend des paiements, on fixe dans le devis où ils sont enregistrés${NBSP}: dans votre logiciel conforme, ou dans l’outil avec les garanties exigées.`,
      },
      {
        question: `Combien de temps faut-il pour mettre en place un outil sur mesure${NBSP}?`,
        answer:
          'Comptez 2 à 6 semaines pour un complément, et 5 à 20 semaines pour un outil complet selon le nombre d’agences. Vous testez chaque partie au fur et à mesure, sans arrêter l’activité.',
      },
      {
        question: `Peut-on reprendre les données de mon logiciel actuel${NBSP}?`,
        answer: `Si votre logiciel exporte vos données (élèves, leçons, paiements) en Excel ou en CSV, je les reprends dans le nouvel outil${NBSP}; c’est prévu dans le devis. Vérifiez cette possibilité d’export avant de signer avec un éditeur, quel que soit votre choix.`,
      },
    ],
  },
  relatedArticles: {
    title: 'À lire aussi',
    slugs: DRIVING_SCHOOL_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: `Un doute sur le bon choix pour votre auto-école${NBSP}?`,
    description: `Décrivez-moi votre auto-école en quelques lignes. Je vous réponds sous 24${NBSP}h, et si un logiciel du marché vous suffit, je vous le dis.`,
    button: 'Parler de mon projet',
  },
}
