import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  BOILER_MAINTENANCE_SOURCE,
  DECENNIAL_INSURANCE_SOURCE,
  PLUMBING_HEATING_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  PLUMBING_HEATING_PAGE_PROJECT_SLUG,
  PLUMBING_HEATING_PAGE_RELATED_ARTICLE_SLUGS,
  PLUMBING_HEATING_PAGE_SCREENSHOT_URL,
  PLUMBING_HEATING_PAGE_UPDATED_AT,
  PLUMBING_HEATING_TEMPLATE_PDF_PATH,
  PLUMBING_HEATING_TEMPLATE_XLSX_PATH,
  PLUMBING_QUOTE_RULES_SOURCE,
  REDUCED_VAT_WORKS_SOURCE,
} from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'

export const PLUMBING_HEATING_PAGE_CONTENT_FR: DibodevSoftwareToolPageContent = {
  meta: {
    title: `Logiciel plombier chauffagiste${NBSP}: devis, interventions, prix 2026`,
    description: `Tolteck, Obat, Batappli, Organilog${NBSP}: les prix 2026 des logiciels pour plombiers et chauffagistes, un test gratuit en 6 questions et un modèle de devis à télécharger.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Logiciel de gestion pour plombiers et chauffagistes',
  },
  breadcrumbLabel: 'Logiciel plombier-chauffagiste',
  shareImage: {
    titleLines: ['Quel logiciel pour un', `plombier-chauffagiste${NBSP}?`],
    highlight: 'plombier-chauffagiste',
    subtitle: 'Six questions, les prix 2026 des logiciels de plomberie-chauffage et un modèle de devis gratuit',
    badge: 'Test gratuit, en 2 minutes',
    icon: 'flame',
    alt: `Quel logiciel pour un plombier-chauffagiste${NBSP}? Test gratuit en 6 questions, prix 2026 des logiciels et modèle de devis, sur dibodev.fr`,
  },
  hero: {
    titleBefore: 'Quel logiciel pour un ',
    titleHighlight: 'plombier-chauffagiste',
    titleAfter: `${NBSP}?`,
    description:
      'Six questions sur votre équipe, vos agences et votre activité. Plombier, chauffagiste ou les deux, le test vous dit quel type de logiciel choisir pour vos devis, vos interventions et vos contrats d’entretien, et combien prévoir.',
    reassurances: ['2 minutes', 'Sans inscription ni e-mail', 'Résultat immédiat'],
    authorIntro: 'Test conçu par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai créé de zéro un logiciel de suivi des heures par chantier, toujours utilisé par des PME.',
    updatedAt: PLUMBING_HEATING_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'logiciels',
    eyebrow: 'Prix publics 2026',
    title: 'Comparatif des logiciels pour plombiers et chauffagistes et de leurs prix',
    intro:
      'Les tarifs affichés sur leur site par les éditeurs de logiciels du bâtiment et de gestion d’interventions. Le prix dépend surtout des modules choisis et du nombre d’utilisateurs.',
    productColumnLabel: 'Logiciel',
    coverageColumnLabel: 'Ce qu’il gère',
    priceColumnLabel: 'Prix public',
    products: [
      {
        name: 'Tolteck',
        coverage:
          'Devis et factures, bibliothèque d’ouvrages, TVA et montants déductibles, sur PC, tablette et smartphone, hors ligne',
        price: `25${NBSP}€ HT par mois`,
        priceCondition: `19${NBSP}€ HT par mois payé à l’année (228${NBSP}€ par an), une seule offre, un mois d’essai`,
      },
      {
        name: 'Obat',
        coverage: `Devis et factures illimités, facturation électronique, bibliothèque de 30${NBSP}000 ouvrages, signature électronique${NBSP}; planning et plan de charge en offre Croissance`,
        price: `49 à 129${NBSP}€ HT par mois`,
        priceCondition: `39 à 109${NBSP}€ HT payé à l’année${NBSP}; 32 à 95${NBSP}€ HT en micro-entreprise${NBSP}; accès de l’équipe en option`,
      },
      {
        name: 'Batappli',
        coverage: `Devis et factures, acomptes, situations, export comptable (offre Devis)${NBSP}; stock, suivi de chantiers, contrats d’entretien et bons de travail (offre Artisan)`,
        price: `39 ou 79${NBSP}€ HT par mois`,
        priceCondition: `429 ou 869${NBSP}€ HT par an${NBSP}; 19${NBSP}€ HT par mois par utilisateur supplémentaire`,
      },
      {
        name: 'Organilog',
        coverage: `Interventions, planning, application mobile hors ligne, rapports d’intervention, stock (offre Pro)${NBSP}; devis, factures et signature en ligne (offre Business)`,
        price: `19 à 59${NBSP}€ par mois et par utilisateur`,
        priceCondition: `Offre Basique gratuite et limitée (archivage 72${NBSP}h)${NBSP}; devis et factures à partir de l’offre Business à 35${NBSP}€`,
      },
      {
        name: 'Praxedo',
        coverage: `Gestion d’interventions pour les équipes de techniciens${NBSP}: planning, application mobile, rapports`,
        price: 'Sur devis',
        priceCondition: 'Tarifs non publiés',
      },
    ],
    calloutEmphasizedIntro: `Avant de signer${NBSP}:`,
    calloutText: `faites passer une vraie journée au logiciel. Un dépannage pris au téléphone, placé dans la tournée du technicien, le bon d’intervention signé sur son téléphone dans une chaufferie sans réseau, puis la facture avec la TVA à 10${NBSP}%, sans rien ressaisir.`,
    calloutFootnote: 'Tarifs relevés le 19 octobre 2026 sur les sites des éditeurs. Liste non exhaustive.',
  },
  rules: {
    anchorId: 'reglementation',
    eyebrow: 'Le point en 2026',
    title: `Devis, facture, entretien, TVA${NBSP}: ce que votre logiciel doit respecter en 2026`,
    intro: `Devis avant intervention, facture, entretien annuel des chaudières, TVA réduite, assurance décennale${NBSP}: les règles du plombier-chauffagiste passent toutes par vos documents. Un bon logiciel les remplit pour vous.`,
    facts: [
      {
        contextLabel: 'Depuis le 1er avril 2017',
        title: 'Un devis avant toute intervention',
        text: `Dépannage, réparation ou entretien chez un particulier (plomberie, sanitaires, génie climatique)${NBSP}: devis détaillé remis avant les travaux, quel que soit le montant, avec le taux horaire, les frais de déplacement et sa durée de validité.`,
        sourceName: PLUMBING_QUOTE_RULES_SOURCE.name,
        sourceUrl: PLUMBING_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: `Dès 25${NBSP}€ TTC`,
        title: 'Une facture en deux exemplaires',
        text: `Remise après les travaux et avant le paiement${NBSP}: date, nom et adresse de l’entreprise, nom du client, date et lieu de l’intervention, totaux HT et TTC. Le client peut garder les pièces remplacées.`,
        sourceName: PLUMBING_QUOTE_RULES_SOURCE.name,
        sourceUrl: PLUMBING_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Chaque année civile',
        title: 'L’entretien des chaudières de 4 à 400 kW',
        text: `Chaudières fioul, gaz, bois ou charbon, pompes à chaleur et appareils avec ventilation${NBSP}: une visite par année civile, et une attestation d’entretien remise au client dans les 15 jours, à conserver 2 ans.`,
        sourceName: BOILER_MAINTENANCE_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_SOURCE.url,
      },
      {
        contextLabel: `TVA à 10${NBSP}% ou 5,5${NBSP}%`,
        title: 'La certification du client sur le devis ou la facture',
        text: `Pour des travaux dans un logement achevé depuis plus de 2 ans, le client certifie sur le devis ou la facture que les conditions du taux réduit sont remplies. Chaque document est établi en deux exemplaires, le sien conservé 5 ans.`,
        sourceName: REDUCED_VAT_WORKS_SOURCE.name,
        sourceUrl: REDUCED_VAT_WORKS_SOURCE.url,
      },
      {
        contextLabel: 'Avec chaque devis et facture',
        title: 'L’attestation d’assurance décennale',
        text: `Artisan ou auto-entrepreneur du bâtiment, vous souscrivez une assurance de responsabilité civile décennale, et son attestation est jointe à vos devis et à vos factures.`,
        sourceName: DECENNIAL_INSURANCE_SOURCE.name,
        sourceUrl: DECENNIAL_INSURANCE_SOURCE.url,
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
      'votre logiciel comptable, ni les bibliothèques de prix des éditeurs (ouvrages, tarifs fournisseurs). Les factures partent vers votre comptabilité (export ou Factur-X), et l’outil importe les tarifs de vos fournisseurs.',
  },
  freeTemplate: {
    anchorId: 'modele',
    eyebrow: 'Modèle gratuit',
    title: 'Un devis et un bon d’intervention prêts à remplir',
    description: `Le devis avec la TVA à 5,5${NBSP}%, 10${NBSP}% ou 20${NBSP}% et la certification du client pour les logements de plus de 2 ans${NBSP}; le bon d’intervention avec le relevé d’entretien de chaudière. En PDF à remplir à la main, ou en Excel avec les totaux calculés.`,
    items: [
      `Devis${NBSP}: fournitures et main-d’œuvre, taux horaire, frais de déplacement, TVA par ligne, acompte, assurance décennale`,
      `Bon d’intervention${NBSP}: appareil, heures, travaux réalisés, pièces, points de contrôle de l’entretien annuel, signature du client`,
      `Mentions à jour${NBSP}: devis avant intervention, attestation d’entretien sous 15 jours, facture dès 25${NBSP}€ TTC`,
    ],
    downloads: [
      {
        label: 'Télécharger le modèle PDF',
        href: PLUMBING_HEATING_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: PLUMBING_HEATING_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 feuilles, totaux calculés',
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
          { state: 'yes', text: `19 à 129${NBSP}€ HT par mois, selon les modules et les utilisateurs` },
          { state: 'partial', text: `Votre abonnement, plus 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois` },
          {
            state: 'partial',
            text: `5${NBSP}000 à 25${NBSP}000${NBSP}€ une seule fois, plus 100 à 300${NBSP}€ par mois de maintenance`,
          },
        ],
      },
      {
        label: 'Devis, bons d’intervention, factures',
        cells: [
          { state: 'yes', text: 'Inclus, conformes aux règles du bâtiment' },
          { state: 'yes', text: 'Restent dans votre logiciel actuel' },
          { state: 'yes', text: 'Conçus autour de vos forfaits, de vos contrats et de vos tournées' },
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
        label: 'Demandes de dépannage et de devis sur votre site',
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
    rowsShownOnSmallScreens: PLUMBING_HEATING_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: PLUMBING_HEATING_PAGE_PROJECT_SLUG,
    screenshotUrl: PLUMBING_HEATING_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Déjà réalisé',
    title: 'Un logiciel de suivi des heures par chantier, déjà en production',
    description:
      'Gest-Time est le logiciel de temps de travail que j’ai créé de zéro chez Kodeva, où j’étais en alternance. Les équipes saisissent leurs heures par projet ou par chantier sur tablette, et les responsables les valident chaque semaine. Le même principe sert à suivre le temps passé par vos techniciens sur chaque chantier et chaque intervention.',
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
    title: `Logiciel pour plombier-chauffagiste${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un logiciel pour plombier-chauffagiste${NBSP}?`,
        answer: `Tolteck coûte 25${NBSP}€ HT par mois (19${NBSP}€ à l’année), Obat 49 à 129${NBSP}€ HT par mois (39 à 109${NBSP}€ à l’année, moins en micro-entreprise), Batappli 39 ou 79${NBSP}€ HT par mois et Organilog 19 à 59${NBSP}€ par mois et par utilisateur. Praxedo est sur devis (tarifs relevés le 19 octobre 2026). Un complément sur mesure coûte de 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois, un outil complet de 5${NBSP}000 à 25${NBSP}000${NBSP}€, puis 100 à 300${NBSP}€ par mois de maintenance.`,
      },
      {
        question: `Quel logiciel de devis et de facturation pour un plombier${NBSP}?`,
        answer: `Un logiciel de facturation généraliste fait des devis et des factures, mais il lui manque la bibliothèque d’ouvrages, la TVA à 10${NBSP}% ou 5,5${NBSP}% avec la certification du client, les situations de travaux et l’attestation d’assurance décennale. Les logiciels du bâtiment (Tolteck, Obat, Batappli…) les intègrent, et Obat émet déjà des factures électroniques. Une entreprise avec plusieurs techniciens sur la route a aussi besoin du planning et du bon d’intervention sur mobile, que l’on trouve chez Organilog ou dans un outil sur mesure.`,
      },
      {
        question: `Existe-t-il un logiciel de plomberie gratuit${NBSP}?`,
        answer: `Organilog propose une offre Basique gratuite, limitée (aperçu des modules, archivage de 72${NBSP}heures, sans support). Tolteck offre un mois d’essai et Obat un essai gratuit. Un logiciel de facturation gratuit peut dépanner, mais sans bon d’intervention ni contrats d’entretien.`,
      },
      {
        question: `Le devis est-il obligatoire pour un dépannage de plomberie${NBSP}?`,
        answer: `Oui. Depuis le 1er avril 2017, tout professionnel qui dépanne, répare ou entretient chez un particulier (plomberie, sanitaires, génie climatique…) remet un devis détaillé avant les travaux, quel que soit le montant, même en urgence. Il indique le taux horaire, les frais de déplacement, sa durée de validité et s’il est gratuit ou payant. Signé chez le client, il ouvre un droit de rétractation de 14 jours, sauf travaux urgents demandés par le client.`,
      },
      {
        question: `Que doit contenir l’attestation d’entretien de chaudière${NBSP}?`,
        answer: `Après chaque entretien annuel (chaudières de 4 à 400${NBSP}kW, pompes à chaleur, appareils de chauffage avec ventilation), le chauffagiste remet une attestation dans les 15 jours, sur papier ou par e-mail, que le client conserve au moins 2 ans. Elle porte ses conseils sur le bon usage de l’appareil, les améliorations possibles et l’intérêt d’un remplacement. Un bon logiciel la génère à la fin de la visite et planifie la suivante.`,
      },
      {
        question: `Comment appliquer la TVA à 10${NBSP}% sur un devis de plomberie${NBSP}?`,
        answer: `Pour des travaux d’amélioration, de transformation, d’aménagement ou d’entretien dans un logement achevé depuis plus de 2 ans, la TVA est à 10${NBSP}% (5,5${NBSP}% pour la rénovation énergétique). Le client certifie sur le devis ou la facture que ces conditions sont remplies${NBSP}; l’attestation Cerfa n’est plus demandée depuis le 16 février 2025. Chaque document est établi en deux exemplaires, et le client garde le sien 5 ans.`,
      },
      {
        question: `Quel logiciel pour gérer les contrats d’entretien${NBSP}?`,
        answer: `Batappli (offre Artisan) gère les contrats d’entretien et les bons de travail, Organilog les interventions récurrentes avec son application mobile. Si vos contrats ont leurs particularités (visites à des mois différents selon l’énergie, pièces incluses, tarifs par client), un outil sur mesure planifie les visites, génère l’attestation et facture le contrat à l’échéance.`,
      },
      {
        question: `Mes techniciens travaillent souvent sans réseau${NBSP}: quel logiciel${NBSP}?`,
        answer: `Vérifiez que l’application mobile fonctionne hors ligne${NBSP}: la tournée, la fiche du client et le bon d’intervention restent disponibles dans une cave ou une chaufferie, et se synchronisent au retour du réseau. Tolteck et Organilog l’annoncent${NBSP}; en sur mesure, c’est un point prévu dès le devis.`,
      },
      {
        question: `Peut-on reprendre les données de mon logiciel actuel${NBSP}?`,
        answer: `Si votre logiciel exporte vos clients, vos appareils, vos contrats et vos factures en Excel ou en CSV, je les reprends dans le nouvel outil${NBSP}; c’est prévu dans le devis. Vérifiez cette possibilité d’export avant de signer avec un éditeur.`,
      },
    ],
  },
  relatedArticles: {
    title: 'À lire aussi',
    slugs: PLUMBING_HEATING_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: `Un doute sur le bon outil pour votre entreprise${NBSP}?`,
    description: `Décrivez-moi votre activité en quelques lignes. Je vous réponds sous 24${NBSP}h, et si un logiciel du marché vous suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
  },
}
