import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  DOCUMENT_RETENTION_SOURCE,
  FIELD_SERVICE_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  FIELD_SERVICE_PAGE_PROJECT_SLUG,
  FIELD_SERVICE_PAGE_RELATED_ARTICLE_SLUGS,
  FIELD_SERVICE_PAGE_SCREENSHOT_URL,
  FIELD_SERVICE_PAGE_UPDATED_AT,
  FIELD_SERVICE_TEMPLATE_PDF_PATH,
  FIELD_SERVICE_TEMPLATE_XLSX_PATH,
  INVOICE_MENTIONS_SOURCE,
  ITINERANT_TRAVEL_TIME_SOURCE,
  VEHICLE_GEOLOCATION_SOURCE,
} from '~/core/constants/tools/fieldServiceSoftware/pageShared'
import { E_INVOICING_SOURCE, HOME_REPAIR_QUOTE_RULES_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'

export const FIELD_SERVICE_PAGE_CONTENT_FR: DibodevSoftwareToolPageContent = {
  meta: {
    title: `Logiciel de gestion d’interventions${NBSP}: planning, mobile, prix 2026`,
    description: `Organilog, Synchroteam, Kizeo Forms, Praxedo${NBSP}: les prix 2026 des logiciels de gestion d’interventions pour techniciens, un test gratuit en 6 questions et un modèle de bon d’intervention à télécharger.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Logiciel de gestion d’interventions pour techniciens de terrain',
  },
  breadcrumbLabel: 'Logiciel de gestion d’interventions',
  shareImage: {
    titleLines: ['Quel logiciel pour', `vos interventions${NBSP}?`],
    highlight: 'interventions',
    subtitle:
      'Six questions, les prix 2026 des logiciels de gestion d’interventions et un modèle de bon d’intervention gratuit',
    badge: 'Test gratuit, en 2 minutes',
    icon: 'clipboard',
    alt: `Quel logiciel de gestion d’interventions pour vos techniciens${NBSP}? Test gratuit en 6 questions, prix 2026 des logiciels et modèle de bon d’intervention, sur dibodev.fr`,
  },
  hero: {
    titleBefore: 'Quel logiciel de ',
    titleHighlight: 'gestion d’interventions',
    titleAfter: ` pour vos techniciens${NBSP}?`,
    description:
      'Six questions sur votre équipe, vos agences et vos interventions. Maintenance, dépannage, installation ou contrôle, le test vous dit quel type de logiciel choisir pour vos tournées, vos bons d’intervention et vos factures, et combien prévoir.',
    reassurances: ['2 minutes', 'Sans inscription ni e-mail', 'Résultat immédiat'],
    authorIntro: 'Test conçu par',
    authorBio:
      'développeur d’applications métier près de Rennes. Chez Kodeva, j’ai travaillé sur une application de SAV pour techniciens de terrain et créé de zéro un logiciel de suivi des heures par chantier, toujours utilisé par des PME.',
    updatedAt: FIELD_SERVICE_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'logiciels',
    eyebrow: 'Prix publics 2026',
    title: 'Comparatif des logiciels de gestion d’interventions et de leurs prix',
    intro:
      'Les tarifs affichés sur leur site par les éditeurs de logiciels d’interventions et de formulaires mobiles. Le prix dépend surtout du nombre de techniciens et des modules choisis.',
    productColumnLabel: 'Logiciel',
    coverageColumnLabel: 'Ce qu’il gère',
    priceColumnLabel: 'Prix public',
    products: [
      {
        name: 'Organilog',
        coverage: `Interventions, planning, application mobile hors ligne, rapports d’intervention, stock (offre Pro)${NBSP}; devis, factures et signature en ligne (Business)${NBSP}; gamme de maintenance (Premium)`,
        price: `19 à 59${NBSP}€ par mois et par utilisateur`,
        priceCondition: `Offre Basique gratuite et limitée (archivage 72${NBSP}h)${NBSP}; devis et factures à partir de l’offre Business à 35${NBSP}€`,
      },
      {
        name: 'Kizeo Forms',
        coverage: `Formulaires et rapports d’intervention sur mobile, mode hors ligne, photos, automatisations, API${NBSP}; saisie vocale et OCR en Business${NBSP}; pas de planning`,
        price: `15 à 37${NBSP}€ HT par utilisateur et par mois`,
        priceCondition: `Smart 15${NBSP}€ et Business 25${NBSP}€ payés à l’année, 22 et 37${NBSP}€ au mois${NBSP}; 15 jours d’essai`,
      },
      {
        name: 'Synchroteam',
        coverage:
          'Planning et répartition des interventions, application mobile, rapports, connecteurs Sage, Zoho CRM, Xero et QuickBooks (toutes les fonctions incluses)',
        price: `39,49 ou 64,79${NBSP}€ par utilisateur et par mois`,
        priceCondition: `Première licence administrateur gratuite${NBSP}; optimisation de tournées seulement en Premium${NBSP}; essai 14 jours sans engagement`,
      },
      {
        name: 'Batappli',
        coverage:
          'Devis, factures, situations, suivi de chantiers, contrats d’entretien et bons de travail, stock, droits utilisateurs (offre Artisan)',
        price: `79${NBSP}€ HT par mois`,
        priceCondition: `869${NBSP}€ HT par an${NBSP}; 19${NBSP}€ HT par mois par utilisateur supplémentaire`,
      },
      {
        name: 'Praxedo',
        coverage: `Gestion d’interventions pour les équipes de techniciens${NBSP}: planning, application mobile, rapports`,
        price: 'Sur devis',
        priceCondition: 'Tarifs non publiés',
      },
    ],
    calloutEmphasizedIntro: `Avant de signer${NBSP}:`,
    calloutText:
      'faites passer une vraie journée au logiciel. Une demande de dépannage prise au téléphone, affectée au technicien le plus proche, le bon d’intervention signé sur son téléphone dans un sous-sol sans réseau, la pièce sortie du stock du camion, puis la facture envoyée avant de repartir, sans rien ressaisir.',
    calloutFootnote: 'Tarifs relevés le 19 octobre 2026 sur les sites des éditeurs. Liste non exhaustive.',
  },
  rules: {
    anchorId: 'reglementation',
    eyebrow: 'Le point en 2026',
    title: `Devis, factures, trajets, géolocalisation${NBSP}: ce que votre logiciel doit respecter en 2026`,
    intro: `Devis avant un dépannage, mentions de la facture, temps de trajet des techniciens, géolocalisation, conservation des bons${NBSP}: les règles d’une entreprise d’interventions passent toutes par ses documents et son planning. Un bon logiciel les applique pour vous.`,
    facts: [
      {
        contextLabel: 'Depuis le 1er avril 2017',
        title: 'Un devis avant tout dépannage chez un particulier',
        text: `Dépannage, réparation ou entretien au domicile d’un particulier (plomberie, électricité, serrurerie, génie climatique…)${NBSP}: devis détaillé remis avant les travaux, quel que soit le montant, puis facture dès 25${NBSP}€ TTC.`,
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Entre professionnels',
        title: 'Une facture avec échéance et pénalités',
        text: `Date d’échéance du paiement, taux des pénalités de retard, conditions d’escompte et indemnité forfaitaire de 40${NBSP}€ pour frais de recouvrement${NBSP}: ces mentions figurent sur chaque facture adressée à un client professionnel.`,
        sourceName: INVOICE_MENTIONS_SOURCE.name,
        sourceUrl: INVOICE_MENTIONS_SOURCE.url,
      },
      {
        contextLabel: 'Cour de cassation, 23 novembre 2022',
        title: 'Le trajet vers le premier client est du temps de travail',
        text: 'Pour un salarié itinérant qui reste à la disposition de l’employeur pendant le trajet, les déplacements entre son domicile et le premier ou le dernier client comptent dans le temps de travail effectif et sont payés comme tel.',
        sourceName: ITINERANT_TRAVEL_TIME_SOURCE.name,
        sourceUrl: ITINERANT_TRAVEL_TIME_SOURCE.url,
      },
      {
        contextLabel: 'Règles de la CNIL',
        title: 'La géolocalisation des techniciens, encadrée',
        text: 'Finalités limitées (justifier une intervention, envoyer le technicien le plus proche, sécurité), salariés et représentants du personnel informés, jamais hors temps de travail ni pour contrôler la vitesse, données gardées 2 mois (1 an pour prouver une intervention).',
        sourceName: VEHICLE_GEOLOCATION_SOURCE.name,
        sourceUrl: VEHICLE_GEOLOCATION_SOURCE.url,
      },
      {
        contextLabel: '10 ans',
        title: 'Bons et factures conservés dix ans',
        text: `Bons de commande, de livraison et d’intervention, factures clients et fournisseurs${NBSP}: pièces justificatives à conserver 10 ans à compter de la clôture de l’exercice.`,
        sourceName: DOCUMENT_RETENTION_SOURCE.name,
        sourceUrl: DOCUMENT_RETENTION_SOURCE.url,
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
      'votre logiciel comptable ni votre paie. Les factures partent vers votre comptabilité (export ou Factur-X), les heures des techniciens vers votre logiciel de paie, et l’outil se branche sur vos outils actuels (CRM, stock, téléphonie).',
  },
  freeTemplate: {
    anchorId: 'modele',
    eyebrow: 'Modèle gratuit',
    title: 'Un bon d’intervention et une feuille de tournée prêts à remplir',
    description: `Le bon d’intervention pour un dépannage, une maintenance, une installation ou un contrôle, avec pièces, main-d’œuvre et suite à donner${NBSP}; la feuille de tournée d’un technicien avec heures, statuts et kilomètres. En PDF à remplir à la main, ou en Excel avec les durées et les totaux calculés.`,
    items: [
      `Bon d’intervention${NBSP}: client et site, équipement, type d’intervention, heures, constat et travaux, pièces et main-d’œuvre, suite à donner, signature du client`,
      `Feuille de tournée${NBSP}: interventions de la journée, heures d’arrivée et de départ, statut, kilomètres, pièces à réapprovisionner, consignes pour le bureau`,
      `Mentions à jour${NBSP}: conservation 10 ans, devis avant un dépannage chez un particulier, temps de trajet des itinérants, géolocalisation selon la CNIL`,
    ],
    downloads: [
      { label: 'Télécharger le modèle PDF', href: FIELD_SERVICE_TEMPLATE_PDF_PATH, format: 'PDF, 2 pages, à imprimer' },
      {
        label: 'Télécharger la version Excel',
        href: FIELD_SERVICE_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 feuilles, durées et totaux calculés',
      },
    ],
    footnote: 'Modèle libre d’utilisation, à adapter à votre entreprise. Il ne remplace pas l’avis de votre comptable.',
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
          { state: 'yes', text: `15 à 79${NBSP}€ par mois, le plus souvent par utilisateur` },
          { state: 'partial', text: `Votre abonnement, plus 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois` },
          {
            state: 'partial',
            text: `5${NBSP}000 à 25${NBSP}000${NBSP}€ une seule fois, plus 100 à 300${NBSP}€ par mois de maintenance`,
          },
        ],
      },
      {
        label: 'Bons d’intervention, planning, factures',
        cells: [
          {
            state: 'yes',
            text: 'Inclus chez les éditeurs d’interventions (les formulaires mobiles seuls n’ont pas le planning)',
          },
          { state: 'yes', text: 'Restent dans votre logiciel actuel' },
          { state: 'yes', text: 'Conçus autour de vos contrats, de vos tournées et de vos équipements' },
        ],
      },
      {
        label: `Vos règles${NBSP}: contrats, tournées, agences`,
        cells: [
          { state: 'partial', text: 'Dans la limite des réglages prévus par l’éditeur' },
          { state: 'yes', text: 'Sur les points ajoutés par le complément' },
          { state: 'yes', text: 'Conçu autour de votre organisation' },
        ],
      },
      {
        label: 'Demandes et suivi d’intervention sur votre site (portail client)',
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
    rowsShownOnSmallScreens: FIELD_SERVICE_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: FIELD_SERVICE_PAGE_PROJECT_SLUG,
    screenshotUrl: FIELD_SERVICE_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Déjà réalisé',
    title: 'Un logiciel de suivi des heures par chantier, déjà en production',
    description:
      'Gest-Time est le logiciel de temps de travail que j’ai créé de zéro chez Kodeva, où j’étais en alternance. Les équipes saisissent leurs heures par projet ou par chantier sur tablette, et les responsables les valident chaque semaine. Le même principe sert à suivre le temps passé par vos techniciens sur chaque intervention, trajets compris.',
    highlights: [
      'Heures saisies par chantier, pensées pour la tablette',
      'Validation chaque semaine, alertes sur les heures manquantes',
      'Reporting par projet et exports Excel et PDF',
    ],
    linkLabel: 'Voir le projet Gest-Time',
    imageAlt: 'Rapport Gest-Time : heures, absences et trajets par salarié et par semaine, avec export Excel',
    browserBarCaption: 'Gest-Time · rapport des heures par salarié',
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Logiciel de gestion d’interventions${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un logiciel de gestion d’interventions${NBSP}?`,
        answer: `Organilog coûte 19 à 59${NBSP}€ par mois et par utilisateur (offre Basique gratuite et limitée), Kizeo Forms 15 à 37${NBSP}€ HT par utilisateur et par mois, Synchroteam 39,49 ou 64,79${NBSP}€ par utilisateur et par mois, Batappli 79${NBSP}€ HT par mois en offre Artisan. Praxedo est sur devis (tarifs relevés le 19 octobre 2026). Pour cinq techniciens, comptez de 75 à 325${NBSP}€ par mois selon l’éditeur. Un complément sur mesure coûte de 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois, un outil complet de 5${NBSP}000 à 25${NBSP}000${NBSP}€, puis 100 à 300${NBSP}€ par mois de maintenance.`,
      },
      {
        question: `Quel logiciel pour des techniciens qui travaillent sans réseau${NBSP}?`,
        answer: `Vérifiez le mode hors ligne${NBSP}: la tournée, la fiche du client et le bon d’intervention restent disponibles dans un sous-sol, une chaufferie ou une zone blanche, et se synchronisent au retour du réseau. Organilog (offre Pro) et Kizeo Forms l’annoncent${NBSP}; en sur mesure, c’est un point prévu dès le devis, avec les photos mises en file d’attente.`,
      },
      {
        question: `Existe-t-il un logiciel de gestion d’interventions gratuit${NBSP}?`,
        answer: `Organilog propose une offre Basique gratuite, limitée (aperçu des modules, archivage de 72${NBSP}heures, sans support). Kizeo Forms offre 15 jours d’essai, Synchroteam 14 jours. Un tableur partagé dépanne une équipe de deux, mais sans signature, sans photos ni historique par équipement.`,
      },
      {
        question: `Le bon d’intervention signé sur tablette a-t-il une valeur${NBSP}?`,
        answer: `Une signature électronique est recevable comme preuve${NBSP}; sa force dépend de son niveau (simple, avancée ou qualifiée). Pour un bon d’intervention, la pratique courante est une signature simple horodatée, avec le PDF envoyé au client dans la foulée, et le bon conservé 10 ans avec la facture. Pour un contrat ou un engagement financier important, passez par une signature avancée ou qualifiée.`,
      },
      {
        question: `Peut-on géolocaliser les techniciens${NBSP}?`,
        answer: `Oui, dans le cadre fixé par la CNIL${NBSP}: pour justifier une intervention, envoyer le technicien le plus proche ou sécuriser le véhicule, jamais pour contrôler un salarié en permanence ni en dehors du temps de travail. Les salariés sont informés, peuvent couper la géolocalisation hors du travail, et les données sont gardées 2 mois au plus (1 an pour prouver une intervention).`,
      },
      {
        question: `Le temps de trajet des techniciens compte-t-il comme du travail${NBSP}?`,
        answer: `Pour un salarié itinérant qui reste à la disposition de l’employeur pendant le trajet (appels, rendez-vous à gérer), les déplacements entre son domicile et le premier ou le dernier client sont du temps de travail effectif (Cour de cassation, 23 novembre 2022). Un logiciel qui horodate le départ, l’arrivée et le retour évite les litiges sur les heures.`,
      },
      {
        question: `Quel logiciel pour les contrats de maintenance et les visites récurrentes${NBSP}?`,
        answer: `Batappli (offre Artisan) gère les contrats d’entretien et les bons de travail, Organilog planifie les interventions récurrentes et propose une gamme de maintenance en Premium. Si vos contrats ont leurs particularités (périodicités par équipement, pièces incluses, pénalités de délai), un outil sur mesure planifie les visites, génère le rapport et facture le contrat à l’échéance.`,
      },
      {
        question: `Ces logiciels conviennent-ils à la maintenance de cuisines professionnelles ou de froid${NBSP}?`,
        answer:
          'Oui, à condition que la fiche équipement accepte vos données (fluide, puissance, numéro de série, date de pose) et que le bon d’intervention porte vos points de contrôle. Vérifiez-le en démonstration. Un outil sur mesure part directement de vos équipements et de vos relevés obligatoires.',
      },
      {
        question: `Peut-on reprendre les données de mon logiciel actuel${NBSP}?`,
        answer: `Si votre logiciel exporte vos clients, vos sites, vos équipements, vos contrats et vos interventions en Excel ou en CSV, je les reprends dans le nouvel outil${NBSP}; c’est prévu dans le devis. Vérifiez cette possibilité d’export avant de signer avec un éditeur.`,
      },
    ],
  },
  relatedArticles: {
    title: 'À lire aussi',
    slugs: FIELD_SERVICE_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: `Un doute sur le bon outil pour vos techniciens${NBSP}?`,
    description: `Décrivez-moi vos interventions en quelques lignes. Je vous réponds sous 24${NBSP}h, et si un logiciel du marché vous suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
  },
}
