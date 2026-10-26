import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  CLEANING_BUSINESS_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  CLEANING_BUSINESS_PAGE_PROJECT_SLUG,
  CLEANING_BUSINESS_PAGE_RELATED_ARTICLE_SLUGS,
  CLEANING_BUSINESS_PAGE_SCREENSHOT_URL,
  CLEANING_BUSINESS_PAGE_UPDATED_AT,
  CLEANING_BUSINESS_TEMPLATE_PDF_PATH,
  CLEANING_BUSINESS_TEMPLATE_XLSX_PATH,
  CLEANING_COLLECTIVE_AGREEMENT_SOURCE,
  HOME_SERVICES_VAT_SOURCE,
  PREVENTION_PLAN_SOURCE,
  WORKING_TIME_MONITORING_SOURCE,
} from '~/core/constants/tools/cleaningBusinessSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'

export const CLEANING_BUSINESS_PAGE_CONTENT_FR: DibodevSoftwareToolPageContent = {
  meta: {
    title: `Logiciel entreprise de nettoyage${NBSP}: comparatif, prix 2026`,
    description: `PROPRET, PROGESTI, CleanPlus, MyClic${NBSP}: les prix 2026 des logiciels de propreté, un test gratuit en 6 questions et un modèle de planning à télécharger.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Logiciel de gestion pour entreprise de nettoyage et de propreté',
  },
  breadcrumbLabel: 'Logiciel pour entreprise de nettoyage',
  shareImage: {
    titleLines: ['Quel logiciel', `pour le nettoyage${NBSP}?`],
    highlight: 'nettoyage',
    subtitle: 'Six questions, les prix 2026 des logiciels de propreté et un modèle de planning gratuit',
    badge: 'Test gratuit, en 2 minutes',
    icon: 'sparkles',
    alt: `Quel logiciel pour votre entreprise de nettoyage${NBSP}? Test gratuit en 6 questions, prix 2026 des logiciels de propreté et modèle de planning des passages, sur dibodev.fr`,
  },
  hero: {
    titleBefore: 'Quel logiciel pour votre ',
    titleHighlight: 'entreprise de nettoyage',
    titleAfter: `${NBSP}?`,
    description:
      'Six questions sur vos équipes, vos agences et vos clients. Bureaux, copropriétés, particuliers ou milieux sensibles, le test vous dit quel type de logiciel choisir pour le planning, le pointage de vos agents et le contrôle qualité, et combien prévoir.',
    reassurances: ['2 minutes', 'Sans inscription ni e-mail', 'Résultat immédiat'],
    authorIntro: 'Test conçu par',
    authorBio:
      'développeur d’applications métier près de Rennes. Chez Kodeva, j’ai créé de zéro un logiciel de suivi des heures par chantier, toujours utilisé par des PME.',
    updatedAt: CLEANING_BUSINESS_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'logiciels',
    eyebrow: 'Prix publics 2026',
    title: 'Comparatif des logiciels pour entreprise de nettoyage et de leurs prix',
    intro:
      'Les tarifs affichés sur leur site par les éditeurs spécialisés dans la propreté, et par un logiciel d’interventions généraliste. Le prix dépend surtout du nombre d’utilisateurs, des agents qui pointent et des options.',
    productColumnLabel: 'Logiciel',
    coverageColumnLabel: 'Ce qu’il gère',
    priceColumnLabel: 'Prix public',
    products: [
      {
        name: 'PROPRET',
        coverage: `Planning, pointage de début et de fin de service, géolocalisation, bons d’intervention, contrats, facturation, RH et prépaie, stock${NBSP}; facture électronique via Pennylane (Factur-X)`,
        price: `29,99 à 99,99${NBSP}€ HT par mois`,
        priceCondition: `Starter, Pro (5 utilisateurs) ou Premium (20 utilisateurs), tous les modules, mise en place offerte${NBSP}; accès sans carte bancaire, sans engagement`,
      },
      {
        name: 'PROGESTI',
        coverage:
          'Planning multi-sites, pointage d’arrivée et de départ géolocalisé, devis et factures alimentés par le pointage, RH, CRM',
        price: `59 à 399${NBSP}€ HT par mois`,
        priceCondition: `Solo (1 utilisateur), Équipe (5), Business (15), Enterprise (30), 10${NBSP}€ par utilisateur en plus${NBSP}; essai 14 jours sans carte`,
      },
      {
        name: 'CleanPlus',
        coverage: `Pointage GPS, portail client, grilles de contrôle qualité avec photos et scores, rapports, alertes sur les titres de séjour${NBSP}; lien avec Pennylane`,
        price: `29${NBSP}€ HT par mois`,
        priceCondition: `Plus 3,40 à 4,40${NBSP}€ par agent selon le palier${NBSP}; un administrateur inclus (289${NBSP}€ HT à l’année)${NBSP}; options Factur-X 14${NBSP}€ par mois, assistant IA 9${NBSP}€, signature 7${NBSP}€${NBSP}; essai 7 jours`,
      },
      {
        name: 'MyClic Propreté',
        coverage: 'CRM, devis, factures et relances, planning, pointage des arrivées, des départs et des pauses',
        price: `169${NBSP}€ HT par mois`,
        priceCondition: `Pour 3 collaborateurs, 49${NBSP}€ par collaborateur en plus${NBSP}; pointage terrain 4${NBSP}€ HT par agent${NBSP}; sur démonstration`,
      },
      {
        name: 'Experhygia (SASHA)',
        coverage:
          'Application hors connexion, pointage des arrivées, des départs et des pauses (QR code possible), contrôle qualité pondéré avec photos et signatures',
        price: `À partir de 30${NBSP}€ HT par mois`,
        priceCondition: 'Selon le nombre d’utilisateurs et les besoins',
      },
      {
        name: 'Organilog',
        coverage: `Logiciel d’interventions généraliste avec une offre nettoyage${NBSP}: planning, pointage par NFC, QR code ou géolocalisation, formulaires de contrôle qualité, mode hors ligne`,
        price: `19 à 64${NBSP}€ par utilisateur et par mois`,
        priceCondition: `Pro 19${NBSP}€ à l’année ou 24${NBSP}€ au mois, Business 35 ou 45${NBSP}€, Premium 59${NBSP}€, Premium + Carte 64${NBSP}€`,
      },
      {
        name: 'Penbase MOZAIK Clean, Teleric, Progiclean, 2BePragma',
        coverage: `Suites de la propreté${NBSP}: pointage NFC, QR code ou GPS, contrôle qualité sur mobile, photos avant et après, extranet client ou lien avec la paie, selon l’éditeur`,
        price: 'Sur devis',
        priceCondition: 'Tarifs non publiés',
      },
    ],
    calloutEmphasizedIntro: `Avant de signer${NBSP}:`,
    calloutText:
      'faites passer une vraie semaine au logiciel. Une agente absente remplacée le matin même sur trois sites, le pointage de sa remplaçante par QR code dans un sous-sol sans réseau, le contrôle qualité d’un site avec photos envoyé au client, puis les heures du mois parties vers la paie et la facture du contrat envoyée, sans rien ressaisir.',
    calloutFootnote: 'Tarifs relevés le 26 octobre 2026 sur les pages tarifs des éditeurs. Liste non exhaustive.',
  },
  rules: {
    anchorId: 'reglementation',
    eyebrow: 'Le point en 2026',
    title: `Temps partiel, pointage, reprise de marché${NBSP}: ce que votre logiciel doit suivre en 2026`,
    intro: `Temps partiels et vacations, pointage sur site, reprise du personnel quand un marché change de prestataire, plan de prévention chez le client, TVA, facture électronique${NBSP}: les règles d’une entreprise de propreté passent par son planning et ses documents. Dans la branche, un salarié sur deux travaille pour plusieurs employeurs, d’où des plannings serrés.`,
    facts: [
      {
        contextLabel: 'Convention de la propreté, art. 6.2.4.1',
        title: `Un temps partiel de 16${NBSP}heures par semaine au minimum`,
        text: `Sauf demande écrite du salarié, un contrat à temps partiel compte au moins 16${NBSP}heures par semaine, avec au plus 2 vacations par jour sous 24${NBSP}heures hebdomadaires, et 3 au-delà.`,
        sourceName: CLEANING_COLLECTIVE_AGREEMENT_SOURCE.name,
        sourceUrl: CLEANING_COLLECTIVE_AGREEMENT_SOURCE.url,
      },
      {
        contextLabel: 'Règles de la CNIL',
        title: 'Le pointage sur site, annoncé avant d’être lancé',
        text: `Badge NFC, QR code ou géolocalisation du téléphone${NBSP}: un dispositif de contrôle des horaires est porté à la connaissance des salariés avant sa mise en place, et le CSE est consulté à partir de 50 salariés.`,
        sourceName: WORKING_TIME_MONITORING_SOURCE.name,
        sourceUrl: WORKING_TIME_MONITORING_SOURCE.url,
      },
      {
        contextLabel: 'Convention de la propreté, article 7',
        title: 'Un marché change de prestataire, le personnel suit',
        text: `Le nouveau prestataire reprend 100${NBSP}% du personnel affecté au marché qui remplit les conditions (notamment un CDI, une affectation depuis au moins 6 mois, 30${NBSP}% de son temps sur ce marché). L’entreprise sortante transmet les informations sous 8 jours ouvrables.`,
        sourceName: CLEANING_COLLECTIVE_AGREEMENT_SOURCE.name,
        sourceUrl: CLEANING_COLLECTIVE_AGREEMENT_SOURCE.url,
      },
      {
        contextLabel: 'Dès 400 heures sur 12 mois',
        title: 'Un plan de prévention écrit chez le client',
        text: `Votre entreprise et le client analysent ensemble les risques après une inspection commune des lieux. Le plan de prévention est écrit dès 400${NBSP}heures de travail sur 12 mois, ou pour les travaux dangereux listés par l’arrêté du 19 mars 1993.`,
        sourceName: PREVENTION_PLAN_SOURCE.name,
        sourceUrl: PREVENTION_PLAN_SOURCE.url,
      },
      {
        contextLabel: 'TVA',
        title: `20${NBSP}% chez les pros, 10${NBSP}% chez les particuliers sous condition`,
        text: `Le nettoyage de locaux professionnels est facturé avec une TVA à 20${NBSP}%. Le ménage chez les particuliers, en services à la personne, passe à 10${NBSP}% si l’entreprise n’intervient qu’au domicile de ses clients${NBSP}; sinon, 20${NBSP}%.`,
        sourceName: HOME_SERVICES_VAT_SOURCE.name,
        sourceUrl: HOME_SERVICES_VAT_SOURCE.url,
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
      'votre logiciel de paie ni votre comptabilité. Les heures pointées partent vers votre paie, les factures vers votre comptabilité (export ou Factur-X), et l’outil se branche sur vos outils actuels.',
  },
  freeTemplate: {
    anchorId: 'modele',
    eyebrow: 'Modèle gratuit',
    title: 'Un planning des passages et une fiche de contrôle qualité prêts à remplir',
    description: `Le planning de la semaine par site et par agent, avec les horaires de chaque passage${NBSP}; la fiche de contrôle qualité d’un site, zone par zone, avec note, photos et signature du client. En PDF à imprimer, ou en Excel avec les heures, le total par agent et le taux de conformité calculés.`,
    items: [
      `Planning des passages${NBSP}: site, agent, horaires de chaque jour, heures de la semaine et total par agent`,
      `Fiche de contrôle qualité${NBSP}: zones du site, points contrôlés, note de chaque zone, photos, actions correctives, signature du client`,
      `Repères utiles${NBSP}: 16${NBSP}heures par semaine au minimum pour un temps partiel, sauf demande écrite du salarié (convention de la propreté)${NBSP}; une photo de chaque défaut au contrôle`,
    ],
    downloads: [
      {
        label: 'Télécharger le modèle PDF',
        href: CLEANING_BUSINESS_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: CLEANING_BUSINESS_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 feuilles, heures et conformité calculées',
      },
    ],
    footnote: 'Modèle libre d’utilisation, à adapter à votre entreprise et à vos contrats.',
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
          { state: 'yes', text: `29 à 399${NBSP}€ HT par mois, selon les utilisateurs ou les agents` },
          { state: 'partial', text: `Votre abonnement, plus 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois` },
          {
            state: 'partial',
            text: `5${NBSP}000 à 25${NBSP}000${NBSP}€ une seule fois, plus 100 à 300${NBSP}€ par mois de maintenance`,
          },
        ],
      },
      {
        label: 'Planning, pointage, factures',
        cells: [
          { state: 'yes', text: 'Inclus chez les éditeurs de la propreté (le pointage est parfois facturé par agent)' },
          { state: 'yes', text: 'Restent dans votre logiciel actuel' },
          { state: 'yes', text: 'Conçus autour de vos sites, de vos vacations et de vos contrats' },
        ],
      },
      {
        label: `Vos règles${NBSP}: vacations, reprises de marché, plans de prévention`,
        cells: [
          { state: 'partial', text: 'Dans la limite des réglages prévus par l’éditeur' },
          { state: 'yes', text: 'Sur les points ajoutés par le complément' },
          { state: 'yes', text: 'Conçu autour de votre organisation' },
        ],
      },
      {
        label: 'Rapports de passage et de contrôle pour vos clients (portail client)',
        cells: [
          { state: 'partial', text: 'Souvent un portail de l’éditeur, à ses couleurs' },
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
    rowsShownOnSmallScreens: CLEANING_BUSINESS_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: CLEANING_BUSINESS_PAGE_PROJECT_SLUG,
    screenshotUrl: CLEANING_BUSINESS_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Déjà réalisé',
    title: 'Un logiciel de suivi des heures par chantier, déjà en production',
    description:
      'Gest-Time est le logiciel de temps de travail que j’ai créé de zéro chez Kodeva, où j’étais en alternance. Les équipes saisissent leurs heures par projet ou par chantier sur tablette, et les responsables les valident chaque semaine. Le même principe sert à compter les heures de vos agents sur chaque site client, puis à préparer la paie et la facture.',
    highlights: [
      'Heures saisies par chantier, pensées pour la tablette',
      'Validation chaque semaine, alertes sur les heures manquantes',
      'Reporting par projet et exports Excel et PDF',
    ],
    linkLabel: 'Voir le projet Gest-Time',
    imageAlt: `Rapport Gest-Time${NBSP}: heures, absences et trajets par salarié et par semaine, avec export Excel`,
    browserBarCaption: 'Gest-Time · rapport des heures par salarié',
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Logiciel pour entreprise de nettoyage${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un logiciel pour entreprise de nettoyage${NBSP}?`,
        answer: `PROPRET coûte 29,99 à 99,99${NBSP}€ HT par mois (tous les modules), PROGESTI 59 à 399${NBSP}€ HT par mois selon le nombre d’utilisateurs, CleanPlus 29${NBSP}€ HT par mois plus 3,40 à 4,40${NBSP}€ par agent, MyClic Propreté 169${NBSP}€ HT par mois pour 3 collaborateurs, Experhygia à partir de 30${NBSP}€ HT par mois et Organilog 19 à 64${NBSP}€ par utilisateur et par mois. Penbase MOZAIK Clean, Teleric, Progiclean et 2BePragma sont sur devis (tarifs relevés le 26 octobre 2026). Un complément sur mesure coûte de 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois, un outil complet de 5${NBSP}000 à 25${NBSP}000${NBSP}€, puis 100 à 300${NBSP}€ par mois de maintenance.`,
      },
      {
        question: `Quel pointage pour les agents d’entretien${NBSP}: GPS, QR code ou NFC${NBSP}?`,
        answer: `Les trois existent. Le GPS du téléphone date et situe l’arrivée et le départ (PROPRET, PROGESTI, CleanPlus)${NBSP}; le QR code ou le badge NFC posé sur le site prouve que l’agent était sur place, même là où le GPS est imprécis (Experhygia, Organilog, Penbase MOZAIK Clean). Experhygia et Organilog fonctionnent aussi hors connexion. Dans tous les cas, le dispositif est présenté aux salariés avant sa mise en place, et le CSE est consulté à partir de 50 salariés (CNIL).`,
      },
      {
        question: `Un logiciel de planning sait-il gérer les temps partiels et les vacations${NBSP}?`,
        answer: `Vérifiez-le en démonstration, car la convention de la propreté a ses propres règles${NBSP}: un temps partiel compte au moins 16${NBSP}heures par semaine (sauf demande écrite du salarié), avec au plus 2 vacations par jour sous 24${NBSP}heures hebdomadaires, 3 au-delà. Quand la durée du travail est calculée en moyenne sur le semestre civil, un planning prévisionnel est remis chaque mois et tout changement est annoncé 3 jours ouvrés à l’avance. Un agent sur deux travaille aussi pour d’autres employeurs${NBSP}: le planning doit tenir compte de ses autres horaires.`,
      },
      {
        question: `Que faire quand on reprend un marché déjà nettoyé par un autre prestataire${NBSP}?`,
        answer: `L’article 7 de la convention collective s’applique${NBSP}: vous reprenez 100${NBSP}% du personnel affecté au marché qui remplit ses conditions (notamment un CDI, une affectation au marché depuis au moins 6 mois et 30${NBSP}% de son temps sur ce marché). L’entreprise sortante vous transmet les informations sur ces salariés sous 8 jours ouvrables. Un bon logiciel importe cette liste (contrats, ancienneté, horaires) et la place dans le planning du site dès le premier jour.`,
      },
      {
        question: `Quand faut-il un plan de prévention écrit chez le client${NBSP}?`,
        answer: `Dès 400${NBSP}heures de travail sur 12 mois chez le client, ou quelle que soit la durée pour les travaux dangereux listés par l’arrêté du 19 mars 1993. Avant d’intervenir, votre entreprise et le client analysent ensemble les risques après une inspection commune des lieux (articles R4512-6 à R4512-12 du Code du travail). Un logiciel qui compte les heures par site peut vous prévenir avant d’atteindre le seuil.`,
      },
      {
        question: `Produits d’entretien${NBSP}: quels documents tenir${NBSP}?`,
        answer: `Les produits sont étiquetés et rangés dans un local ou une armoire réservée (convention de la propreté, art. 3.4.1.3), et leurs fiches de données de sécurité restent accessibles aux agents (articles R4411-73 et R4412-38 du Code du travail). Dans la propreté, le document unique d’évaluation des risques est obligatoire quel que soit l’effectif, et la convention interdit de laisser un salarié seul sur un travail dangereux.`,
      },
      {
        question: `Comment prouver la qualité du nettoyage au client${NBSP}?`,
        answer: `Avec un contrôle zone par zone${NBSP}: chaque zone reçoit une note, les défauts sont photographiés, puis le rapport est signé par le client et envoyé. CleanPlus et Experhygia proposent des grilles notées avec photos, 2BePragma un taux de qualité et des photos avant et après. Je n’ai trouvé aucun texte qui impose ce rapport ou une attestation de passage${NBSP}: c’est un usage, à prévoir dans votre contrat. Le modèle gratuit de cette page en donne une version à imprimer.`,
      },
      {
        question: `Quelle TVA pour une entreprise de nettoyage${NBSP}: 10${NBSP}% ou 20${NBSP}%${NBSP}?`,
        answer: `20${NBSP}% pour le nettoyage de locaux professionnels (bureaux, commerces). Le ménage chez les particuliers, en services à la personne, passe à 10${NBSP}% si l’entreprise n’intervient qu’au domicile de ses clients${NBSP}; sinon, 20${NBSP}%. Pour ces clients particuliers, un devis est obligatoire dès 100${NBSP}€ TTC par mois. Un logiciel qui gère les deux clientèles applique le bon taux sur chaque facture.`,
      },
      {
        question: `Existe-t-il un logiciel gratuit pour entreprise de nettoyage${NBSP}?`,
        answer: `Les logiciels de propreté relevés sont payants, mais plusieurs se testent sans payer${NBSP}: PROPRET ouvre un accès complet sans carte bancaire ni engagement, PROGESTI offre 14 jours d’essai sans carte, CleanPlus 7 jours (carte demandée, rien de prélevé). Pour démarrer, le modèle gratuit de cette page (planning des passages et fiche de contrôle qualité, en PDF et en Excel) dépanne une petite équipe, sans pointage ni photos.`,
      },
      {
        question: `Peut-on reprendre les données de mon logiciel actuel${NBSP}?`,
        answer: `Si votre logiciel exporte vos clients, vos sites, vos agents, vos contrats et vos plannings en Excel ou en CSV, je les reprends dans le nouvel outil${NBSP}; c’est prévu dans le devis. Vérifiez cette possibilité d’export avant de signer avec un éditeur.`,
      },
    ],
  },
  relatedArticles: {
    title: 'À lire aussi',
    slugs: CLEANING_BUSINESS_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: `Un doute sur le bon outil pour votre entreprise de nettoyage${NBSP}?`,
    description: `Décrivez-moi vos sites et vos équipes en quelques lignes. Je vous réponds sous 24${NBSP}h, et si un logiciel du marché vous suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
  },
}
