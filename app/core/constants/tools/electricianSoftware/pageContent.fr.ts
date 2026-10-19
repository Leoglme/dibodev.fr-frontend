import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  CHARGING_POINT_QUALIFICATION_SOURCE,
  CONSUEL_SOURCE,
  ELECTRICIAN_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  ELECTRICIAN_PAGE_PROJECT_SLUG,
  ELECTRICIAN_PAGE_RELATED_ARTICLE_SLUGS,
  ELECTRICIAN_PAGE_SCREENSHOT_URL,
  ELECTRICIAN_PAGE_UPDATED_AT,
  ELECTRICIAN_TEMPLATE_PDF_PATH,
  ELECTRICIAN_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/electricianSoftware/pageShared'
import { E_INVOICING_SOURCE, HOME_REPAIR_QUOTE_RULES_SOURCE } from '~/core/constants/tools/officialSources'
import {
  DECENNIAL_INSURANCE_SOURCE,
  REDUCED_VAT_WORKS_SOURCE,
} from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const ELECTRICIAN_PAGE_CONTENT_FR: DibodevSoftwareToolPageContent = {
  meta: {
    title: `Logiciel électricien${NBSP}: devis, interventions, Consuel, prix 2026`,
    description: `Tolteck, Obat, Batappli, Organilog${NBSP}: les prix 2026 des logiciels pour électriciens, un test gratuit en 6 questions et un modèle de devis et de PV de mise en service à télécharger.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Logiciel de gestion pour électriciens',
  },
  breadcrumbLabel: 'Logiciel électricien',
  shareImage: {
    titleLines: ['Quel logiciel pour', `un électricien${NBSP}?`],
    highlight: 'électricien',
    subtitle: 'Six questions, les prix 2026 des logiciels pour électriciens et un modèle de devis gratuit',
    badge: 'Test gratuit, en 2 minutes',
    icon: 'zap',
    alt: `Quel logiciel pour un électricien${NBSP}? Test gratuit en 6 questions, prix 2026 des logiciels et modèle de devis, sur dibodev.fr`,
  },
  hero: {
    titleBefore: 'Quel logiciel pour un ',
    titleHighlight: 'électricien',
    titleAfter: `${NBSP}?`,
    description:
      'Six questions sur votre équipe, vos agences et vos chantiers. Dépannage, installation, domotique ou bornes de recharge, le test vous dit quel type de logiciel choisir pour vos devis, vos interventions et vos factures, et combien prévoir.',
    reassurances: ['2 minutes', 'Sans inscription ni e-mail', 'Résultat immédiat'],
    authorIntro: 'Test conçu par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai créé de zéro un logiciel de suivi des heures par chantier, toujours utilisé par des PME.',
    updatedAt: ELECTRICIAN_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'logiciels',
    eyebrow: 'Prix publics 2026',
    title: 'Comparatif des logiciels pour électriciens et de leurs prix',
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
        coverage: `Devis et factures illimités, facturation électronique, bibliothèque d’ouvrages (dont des ouvrages électriques), signature électronique${NBSP}; planning et plan de charge en offre Croissance`,
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
        name: 'Kizeo Forms',
        coverage: `Formulaires et rapports d’intervention sur mobile (PV, fiches de contrôle), mode hors ligne, photos, automatisations${NBSP}; pas de devis ni de planning`,
        price: `15 à 37${NBSP}€ HT par utilisateur et par mois`,
        priceCondition: `Smart 15${NBSP}€ et Business 25${NBSP}€ payés à l’année, 22 et 37${NBSP}€ au mois${NBSP}; 15 jours d’essai`,
      },
    ],
    calloutEmphasizedIntro: `Avant de signer${NBSP}:`,
    calloutText: `faites passer une vraie journée au logiciel. Un devis de rénovation de tableau avec vos fournitures et votre taux horaire, accepté puis planifié, le PV de mise en service rempli sur le téléphone, la facture avec la TVA à 10${NBSP}%, puis l’attestation Consuel à joindre, sans rien ressaisir.`,
    calloutFootnote: 'Tarifs relevés le 19 octobre 2026 sur les sites des éditeurs. Liste non exhaustive.',
  },
  rules: {
    anchorId: 'reglementation',
    eyebrow: 'Le point en 2026',
    title: `Devis, Consuel, bornes de recharge, TVA${NBSP}: ce que votre logiciel doit respecter en 2026`,
    intro: `Devis avant un dépannage, attestation de conformité, qualification pour les bornes, TVA réduite, assurance décennale, facture électronique${NBSP}: les règles de l’électricien passent toutes par ses documents. Un bon logiciel les remplit pour vous.`,
    facts: [
      {
        contextLabel: 'Depuis le 1er avril 2017',
        title: 'Un devis avant tout dépannage chez un particulier',
        text: `Dépannage, réparation ou entretien au domicile d’un particulier (électricité, plomberie, serrurerie…)${NBSP}: devis détaillé remis avant les travaux, quel que soit le montant, avec le taux horaire, les frais de déplacement et sa durée de validité${NBSP}; facture dès 25${NBSP}€ TTC.`,
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Avant la mise sous tension',
        title: 'L’attestation de conformité Consuel',
        text: `Toute installation neuve raccordée au réseau public reçoit une attestation de conformité, envoyée au Consuel à l’achèvement des travaux et au moins 20 jours avant la mise en service${NBSP}; depuis le 1er janvier 2025, le Consuel la transmet lui-même au gestionnaire de réseau.`,
        sourceName: CONSUEL_SOURCE.name,
        sourceUrl: CONSUEL_SOURCE.url,
      },
      {
        contextLabel: 'Décret du 12 janvier 2017',
        title: 'Une qualification IRVE pour les bornes de recharge',
        text: `Hors bornes de 3,7${NBSP}kW au plus dans un logement privé, les points de recharge sont posés par des professionnels qualifiés par un organisme agréé${NBSP}; l’amende administrative peut atteindre 300${NBSP}€ par point de recharge.`,
        sourceName: CHARGING_POINT_QUALIFICATION_SOURCE.name,
        sourceUrl: CHARGING_POINT_QUALIFICATION_SOURCE.url,
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
      'votre logiciel comptable, ni les bibliothèques de prix des éditeurs (ouvrages, tarifs des grossistes). Les factures partent vers votre comptabilité (export ou Factur-X), et l’outil importe les tarifs de vos fournisseurs.',
  },
  freeTemplate: {
    anchorId: 'modele',
    eyebrow: 'Modèle gratuit',
    title: 'Un devis et un PV de mise en service prêts à remplir',
    description: `Le devis d’électricien avec la TVA à 5,5${NBSP}%, 10${NBSP}% ou 20${NBSP}% et la certification du client pour les logements de plus de 2 ans${NBSP}; le procès-verbal de mise en service avec les contrôles du tableau, de la terre et des mesures, et le suivi de l’attestation Consuel. En PDF à remplir à la main, ou en Excel avec les totaux calculés.`,
    items: [
      `Devis${NBSP}: fournitures et main-d’œuvre, taux horaire, frais de déplacement, TVA par ligne, acompte, assurance décennale, nature des travaux`,
      `PV de mise en service${NBSP}: installation, contrôles du tableau et des différentiels, prise de terre, isolement et continuité, essais, attestation Consuel, signature du client`,
      `Mentions à jour${NBSP}: devis avant un dépannage, Consuel 20 jours avant la mise en service, facture dès 25${NBSP}€ TTC`,
    ],
    downloads: [
      { label: 'Télécharger le modèle PDF', href: ELECTRICIAN_TEMPLATE_PDF_PATH, format: 'PDF, 2 pages, à imprimer' },
      {
        label: 'Télécharger la version Excel',
        href: ELECTRICIAN_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 feuilles, totaux calculés',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à votre entreprise. Il ne remplace pas l’avis de votre comptable ni les formulaires officiels du Consuel.',
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
          { state: 'yes', text: `15 à 129${NBSP}€ HT par mois, selon les modules et les utilisateurs` },
          { state: 'partial', text: `Votre abonnement, plus 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois` },
          {
            state: 'partial',
            text: `5${NBSP}000 à 25${NBSP}000${NBSP}€ une seule fois, plus 100 à 300${NBSP}€ par mois de maintenance`,
          },
        ],
      },
      {
        label: 'Devis, PV d’intervention, factures',
        cells: [
          { state: 'yes', text: 'Inclus, conformes aux règles du bâtiment' },
          { state: 'yes', text: 'Restent dans votre logiciel actuel' },
          { state: 'yes', text: 'Conçus autour de vos ouvrages, de vos chantiers et de vos contrôles' },
        ],
      },
      {
        label: `Vos règles${NBSP}: ouvrages, chantiers, agences`,
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
    rowsShownOnSmallScreens: ELECTRICIAN_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: ELECTRICIAN_PAGE_PROJECT_SLUG,
    screenshotUrl: ELECTRICIAN_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Déjà réalisé',
    title: 'Un logiciel de suivi des heures par chantier, déjà en production',
    description:
      'Gest-Time est le logiciel de temps de travail que j’ai créé de zéro chez Kodeva, où j’étais en alternance. Les équipes saisissent leurs heures par projet ou par chantier sur tablette, et les responsables les valident chaque semaine. Le même principe sert à suivre le temps passé par vos électriciens sur chaque chantier et chaque dépannage.',
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
    title: `Logiciel pour électricien${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un logiciel pour électricien${NBSP}?`,
        answer: `Tolteck coûte 25${NBSP}€ HT par mois (19${NBSP}€ à l’année), Obat 49 à 129${NBSP}€ HT par mois (39 à 109${NBSP}€ à l’année, moins en micro-entreprise), Batappli 39 ou 79${NBSP}€ HT par mois, Organilog 19 à 59${NBSP}€ par mois et par utilisateur et Kizeo Forms 15 à 37${NBSP}€ HT par utilisateur et par mois (tarifs relevés le 19 octobre 2026). Un complément sur mesure coûte de 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois, un outil complet de 5${NBSP}000 à 25${NBSP}000${NBSP}€, puis 100 à 300${NBSP}€ par mois de maintenance.`,
      },
      {
        question: `Quel logiciel de devis et de facturation pour un électricien${NBSP}?`,
        answer: `Un logiciel de facturation généraliste fait des devis et des factures, mais il lui manque la bibliothèque d’ouvrages électriques, la TVA à 10${NBSP}% ou 5,5${NBSP}% avec la certification du client, les situations de travaux et l’attestation d’assurance décennale. Les logiciels du bâtiment (Tolteck, Obat, Batappli…) les intègrent, et Obat émet déjà des factures électroniques. Une entreprise avec plusieurs électriciens sur les chantiers a aussi besoin du planning et du PV d’intervention sur mobile, que l’on trouve chez Organilog, Kizeo Forms ou dans un outil sur mesure.`,
      },
      {
        question: `Existe-t-il un logiciel gratuit pour électricien${NBSP}?`,
        answer: `Organilog propose une offre Basique gratuite et limitée (aperçu des modules, archivage de 72${NBSP}heures, sans support). Tolteck offre un mois d’essai, Obat et Kizeo Forms un essai gratuit. Un logiciel de facturation gratuit peut dépanner, mais sans ouvrages électriques, sans PV de mise en service ni suivi des attestations Consuel.`,
      },
      {
        question: `Le devis est-il obligatoire pour un dépannage électrique${NBSP}?`,
        answer: `Oui. Depuis le 1er avril 2017, tout professionnel qui dépanne, répare ou entretient chez un particulier (électricité, plomberie, serrurerie…) remet un devis détaillé avant les travaux, quel que soit le montant, même en urgence. Il indique le taux horaire, les frais de déplacement, sa durée de validité et s’il est gratuit ou payant. Signé chez le client, il ouvre un droit de rétractation de 14 jours, sauf travaux urgents demandés par le client.`,
      },
      {
        question: `Quand faut-il une attestation de conformité Consuel${NBSP}?`,
        answer: `Pour toute installation électrique neuve à caractère définitif raccordée au réseau public, et avant sa mise sous tension${NBSP}: le formulaire est envoyé au Consuel à l’achèvement des travaux et au moins 20 jours avant la date de mise en service. Depuis le 1er janvier 2025, le Consuel transmet lui-même l’attestation visée au gestionnaire de réseau. Les installations provisoires (chantier, foire) ne sont pas concernées. Un bon logiciel garde pour chaque chantier le numéro et la date d’envoi de l’attestation.`,
      },
      {
        question: `Faut-il une qualification pour installer une borne de recharge${NBSP}?`,
        answer: `Oui, sauf pour une borne de 3,7${NBSP}kW au plus dans un logement privé${NBSP}: les points de recharge sont installés par des professionnels qualifiés IRVE par un organisme agréé, avec une amende administrative pouvant atteindre 300${NBSP}€ par point de recharge. Votre logiciel peut suivre les qualifications de chaque électricien et leur date de renouvellement.`,
      },
      {
        question: `Comment appliquer la TVA à 10${NBSP}% sur un devis d’électricité${NBSP}?`,
        answer: `Pour des travaux d’amélioration, de transformation, d’aménagement ou d’entretien dans un logement achevé depuis plus de 2 ans, la TVA est à 10${NBSP}% (5,5${NBSP}% pour la rénovation énergétique). Le client certifie sur le devis ou la facture que ces conditions sont remplies${NBSP}; l’attestation Cerfa n’est plus demandée depuis le 16 février 2025. Chaque document est établi en deux exemplaires, et le client garde le sien 5 ans.`,
      },
      {
        question: `Mes électriciens travaillent souvent sans réseau${NBSP}: quel logiciel${NBSP}?`,
        answer: `Vérifiez le mode hors ligne${NBSP}: le planning, la fiche du chantier et le PV d’intervention restent disponibles dans un sous-sol, un local technique ou une zone blanche, et se synchronisent au retour du réseau. Tolteck, Organilog (offre Pro) et Kizeo Forms l’annoncent${NBSP}; en sur mesure, c’est un point prévu dès le devis.`,
      },
      {
        question: `Peut-on reprendre les données de mon logiciel actuel${NBSP}?`,
        answer: `Si votre logiciel exporte vos clients, vos chantiers, vos ouvrages et vos factures en Excel ou en CSV, je les reprends dans le nouvel outil${NBSP}; c’est prévu dans le devis. Vérifiez cette possibilité d’export avant de signer avec un éditeur.`,
      },
    ],
  },
  relatedArticles: {
    title: 'À lire aussi',
    slugs: ELECTRICIAN_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: `Un doute sur le bon outil pour votre entreprise${NBSP}?`,
    description: `Décrivez-moi votre activité en quelques lignes. Je vous réponds sous 24${NBSP}h, et si un logiciel du marché vous suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
  },
}
