import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  AUTO_REPAIR_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  AUTO_REPAIR_PAGE_PROJECT_SLUG,
  AUTO_REPAIR_PAGE_RELATED_ARTICLE_SLUGS,
  AUTO_REPAIR_PAGE_SCREENSHOT_URL,
  AUTO_REPAIR_PAGE_UPDATED_AT,
  AUTO_REPAIR_RULES_SOURCE,
} from '~/core/constants/tools/autoRepairShopSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'

export const AUTO_REPAIR_PAGE_CONTENT_FR: DibodevSoftwareToolPageContent = {
  meta: {
    title: `Logiciel garage automobile${NBSP}: comparatif, prix 2026 et test`,
    description: `Logiciels de garage automobile${NBSP}: prix 2026 (Gest’Garage, TDV, AutoProGestion, Kwixéo…) et test gratuit en 6 questions pour choisir le vôtre.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Logiciel de gestion de garage automobile',
  },
  breadcrumbLabel: 'Logiciel garage automobile',
  shareImage: {
    titleLines: ['Quel logiciel pour', `votre garage${NBSP}?`],
    highlight: 'garage',
    subtitle: 'Six questions, les prix 2026 des logiciels de garage et combien prévoir',
    badge: 'Test gratuit, en 2 minutes',
    icon: 'wrench',
    alt: `Quel logiciel pour votre garage automobile${NBSP}? Test gratuit en 6 questions et prix 2026 des logiciels, sur dibodev.fr`,
  },
  hero: {
    titleBefore: 'Quel logiciel pour votre ',
    titleHighlight: 'garage',
    titleAfter: `${NBSP}?`,
    description:
      'Six questions sur votre équipe, vos ateliers et votre activité. Le test vous dit quel type de logiciel choisir pour vos devis, vos ordres de réparation et vos factures, et combien prévoir.',
    reassurances: ['2 minutes', 'Sans inscription ni e-mail', 'Résultat immédiat'],
    authorIntro: 'Test conçu par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai créé de zéro un logiciel de suivi des heures par chantier, toujours utilisé par des PME.',
    updatedAt: AUTO_REPAIR_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'logiciels',
    eyebrow: 'Prix publics 2026',
    title: 'Comparatif des logiciels de garage automobile et de leurs prix',
    intro:
      'Les tarifs affichés par les éditeurs sur leur site. Le prix dépend surtout des modules choisis et du nombre d’utilisateurs.',
    productColumnLabel: 'Logiciel',
    coverageColumnLabel: 'Ce qu’il gère',
    priceColumnLabel: 'Prix public',
    products: [
      {
        name: 'Gest’Garage',
        coverage: `Devis, ordres de réparation, factures Factur-X, planning, signature électronique, stock, rappels SMS`,
        price: `19${NBSP}€ par mois`,
        priceCondition: 'TVA non applicable, jusqu’à 5 collaborateurs, une seule offre',
      },
      {
        name: 'TDV',
        coverage: 'Agenda et temps barémés, puis devis, ordres de réparation, factures et stock (Solo Complet)',
        price: `19,90 à 24,90${NBSP}€ TTC par mois`,
        priceCondition: `L’offre à 19,90${NBSP}€ ne comprend que l’agenda et les temps`,
      },
      {
        name: 'AutoProGestion',
        coverage: 'Devis, factures, rendez-vous, fiches clients et véhicules, stock',
        price: `29 ou 59${NBSP}€ par mois`,
        priceCondition: `Sans engagement${NBSP}; 100 clients à 29${NBSP}€, illimité et flotte de véhicules à 59${NBSP}€`,
      },
      {
        name: 'Kwixéo',
        coverage: 'Véhicules, ordres de réparation, devis, factures, stock multi-dépôts (offre Expert)',
        price: `22 à 89${NBSP}€ HT par mois`,
        priceCondition: `18,33 à 74,17${NBSP}€ HT par mois payé à l’année`,
      },
      {
        name: 'EBP MéCa, GAD Garage',
        coverage: 'Devis, factures, ordres de réparation, stock, comptabilité ou exports comptables',
        price: 'Sur devis',
        priceCondition: 'Tarifs non publiés',
      },
    ],
    calloutEmphasizedIntro: `Avant de signer${NBSP}:`,
    calloutText:
      'faites passer une vraie journée au logiciel. Un devis accepté au téléphone, transformé en ordre de réparation signé, une pièce ajoutée en cours de route, puis la facture, sans rien ressaisir.',
    calloutFootnote: 'Tarifs relevés le 29 septembre 2026 sur les sites des éditeurs. Liste non exhaustive.',
  },
  rules: {
    anchorId: 'reglementation',
    eyebrow: 'Le point en 2026',
    title: 'Ce que votre logiciel doit respecter en 2026',
    intro: `Affichage des prix, devis, ordre de réparation, pièces de réemploi, facture${NBSP}: les règles du garage passent toutes par vos documents. Un bon logiciel les remplit pour vous.`,
    facts: [
      {
        contextLabel: 'Arrêté du 27 mars 1987',
        title: 'Des prix TTC affichés à l’entrée',
        text: 'Taux horaires de main-d’œuvre et prix des forfaits TTC, avec le détail des opérations comprises, à l’entrée du garage et à l’accueil.',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Si le client le demande',
        title: 'Un devis, gratuit ou payant',
        text: `Le devis n’est pas obligatoire, mais vous ne pouvez pas le refuser au client qui le demande. Il peut être payant si le client le sait avant${NBSP}; signé, il vous engage.`,
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Fortement recommandé',
        title: 'L’ordre de réparation en deux exemplaires',
        text: `Signé par vous et le client${NBSP}: date, identité, véhicule et kilométrage, réparations, coût probable et délai d’immobilisation.`,
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Depuis le 1er janvier 2017',
        title: 'Des pièces de réemploi à proposer',
        text: 'Pour certaines réparations (carrosserie amovible, garnitures, optiques, vitrages non collés, certaines pièces mécaniques), hors liaison au sol et freinage.',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: `Dès 25${NBSP}€ TTC`,
        title: 'Une facture détaillée',
        text: `Date, nom et adresse du garage, client, date et lieu de l’intervention, décompte détaillé, totaux HT et TTC${NBSP}; le kilométrage figure sur tous vos documents.`,
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
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
      'votre logiciel comptable, ni les bases de pièces et de temps des éditeurs spécialisés. Les factures partent vers votre comptabilité (export ou Factur-X), et l’outil se connecte aux bases que vous utilisez déjà.',
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
          { state: 'yes', text: `19 à 90${NBSP}€ par mois, selon les modules et les utilisateurs` },
          { state: 'partial', text: `Votre abonnement, plus 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois` },
          {
            state: 'partial',
            text: `5${NBSP}000 à 25${NBSP}000${NBSP}€ une seule fois, plus 100 à 300${NBSP}€ par mois de maintenance`,
          },
        ],
      },
      {
        label: 'Devis, ordres de réparation, factures',
        cells: [
          { state: 'yes', text: 'Inclus, conformes aux règles du garage' },
          { state: 'yes', text: 'Restent dans votre logiciel actuel' },
          { state: 'yes', text: 'Conçus autour de vos forfaits et de vos taux horaires' },
        ],
      },
      {
        label: `Vos règles${NBSP}: forfaits, taux, ateliers`,
        cells: [
          { state: 'partial', text: 'Dans la limite des réglages prévus par l’éditeur' },
          { state: 'yes', text: 'Sur les points ajoutés par le complément' },
          { state: 'yes', text: 'Conçu autour de votre organisation' },
        ],
      },
      {
        label: 'Rendez-vous et demandes de devis sur votre site',
        cells: [
          { state: 'partial', text: 'Souvent un formulaire ou une page de l’éditeur' },
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
    rowsShownOnSmallScreens: AUTO_REPAIR_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: AUTO_REPAIR_PAGE_PROJECT_SLUG,
    screenshotUrl: AUTO_REPAIR_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Déjà réalisé',
    title: 'Un logiciel de suivi des heures par chantier, déjà en production',
    description:
      'Gest-Time est le logiciel de temps de travail que j’ai créé de zéro chez Kodeva, où j’étais en alternance. Les équipes saisissent leurs heures par projet ou par chantier sur tablette, et les responsables les valident chaque semaine. Le même principe sert à suivre le temps passé sur chaque intervention.',
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
    title: `Logiciel de garage${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un logiciel de garage automobile${NBSP}?`,
        answer: `Gest’Garage coûte 19${NBSP}€ par mois, TDV 19,90 à 24,90${NBSP}€ TTC par mois, AutoProGestion 29 ou 59${NBSP}€ par mois et Kwixéo 22 à 89${NBSP}€ HT par mois (moins à l’année). EBP MéCa et GAD Garage sont sur devis (tarifs relevés le 29 septembre 2026). Un complément sur mesure coûte de 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois, un outil complet de 5${NBSP}000 à 25${NBSP}000${NBSP}€, puis 100 à 300${NBSP}€ par mois de maintenance.`,
      },
      {
        question: `Existe-t-il un logiciel de garage gratuit${NBSP}?`,
        answer: `Les logiciels pensés pour les garages sont payants, avec un essai gratuit de 14 jours chez Gest’Garage, AutoProGestion et Kwixéo. Un logiciel de facturation gratuit peut dépanner, mais sans ordre de réparation ni historique des véhicules.`,
      },
      {
        question: `L’ordre de réparation est-il obligatoire${NBSP}?`,
        answer: `Il est fortement recommandé, pas imposé. En deux exemplaires signés, il protège le garage et le client${NBSP}: date, identité, véhicule et kilométrage, réparations prévues, coût probable et délai d’immobilisation. Un bon logiciel le crée directement depuis le devis accepté.`,
      },
      {
        question: `Un garagiste peut-il faire payer un devis${NBSP}?`,
        answer:
          'Oui, s’il prévient le client avant. Le devis n’est pas obligatoire, mais le garage ne peut pas le refuser si le client le demande. Une fois signé, il engage les deux parties.',
      },
      {
        question: `Faut-il proposer des pièces de réemploi${NBSP}?`,
        answer:
          'Oui, depuis le 1er janvier 2017, pour certaines pièces (carrosserie amovible, garnitures, optiques, vitrages non collés, certaines pièces mécaniques), hors liaison au sol et freinage. Le garage peut ne pas en proposer si le délai de livraison est trop long ou si la réparation est prise en charge par une garantie.',
      },
      {
        question: `Que doit contenir la facture d’un garage${NBSP}?`,
        answer: `Dès 25${NBSP}€ TTC${NBSP}: la date, le nom et l’adresse du garage, le nom du client, la date et le lieu de l’intervention, le décompte détaillé et les totaux HT et TTC, avec le kilométrage. À partir du 1er septembre 2027, les PME devront aussi émettre leurs factures au format électronique.`,
      },
      {
        question: `Ces logiciels conviennent-ils à un garage moto${NBSP}?`,
        answer:
          'Beaucoup sont pensés pour l’automobile. Vérifiez en démonstration que la fiche véhicule accepte les motos et que vos forfaits se règlent librement. Un outil sur mesure part directement de vos forfaits et de vos catégories de véhicules.',
      },
      {
        question: `Peut-on reprendre les données de mon logiciel actuel${NBSP}?`,
        answer: `Si votre logiciel exporte vos clients, véhicules et factures en Excel ou en CSV, je les reprends dans le nouvel outil${NBSP}; c’est prévu dans le devis. Vérifiez cette possibilité d’export avant de signer avec un éditeur.`,
      },
    ],
  },
  relatedArticles: {
    title: 'À lire aussi',
    slugs: AUTO_REPAIR_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: `Un doute sur le bon outil pour votre garage${NBSP}?`,
    description: `Décrivez-moi votre garage en quelques lignes. Je vous réponds sous 24${NBSP}h, et si un logiciel du marché vous suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
  },
}
