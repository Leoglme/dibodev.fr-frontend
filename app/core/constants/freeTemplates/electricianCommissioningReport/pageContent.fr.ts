import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { ELECTRICIAN_COMMISSIONING_REPORT_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/electricianCommissioningReport/pageShared'
import {
  CHARGING_POINT_QUALIFICATION_SOURCE,
  CONSUEL_SOURCE,
  ELECTRICIAN_TEMPLATE_PDF_PATH,
  ELECTRICIAN_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/electricianSoftware/pageShared'
import { HOME_REPAIR_QUOTE_RULES_SOURCE } from '~/core/constants/tools/officialSources'
import { REDUCED_VAT_WORKS_SOURCE } from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const ELECTRICIAN_COMMISSIONING_REPORT_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `PV de mise en service électricien${NBSP}: modèle gratuit (+ devis)`,
    description: `PV de mise en service électricien${NBSP}: modèle gratuit en Excel et PDF, avec devis. TVA 5,5, 10 ou 20${NBSP}%, essais, attestation Consuel. Sans inscription.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle de procès-verbal de mise en service et de devis pour électricien',
  },
  breadcrumbLabel: 'PV de mise en service électricien',
  shareImage: {
    titleLines: ['PV de mise en service', 'électricien gratuit'],
    highlight: 'PV de mise en service',
    subtitle: `PV de mise en service et devis en Excel et PDF, Consuel, TVA 5,5, 10 ou 20${NBSP}%, mentions à jour`,
    badge: 'Gratuit, sans inscription',
    icon: 'fileText',
    alt: `PV de mise en service électricien gratuit${NBSP}: PV et devis en Excel et PDF, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'PV de mise en service électricien',
    titleAfter: `${NBSP}: modèle gratuit (+ devis)`,
    reassurances: ['PV de mise en service + devis', 'Excel avec totaux calculés', 'Sans inscription ni e-mail'],
    aboutTitle: 'À propos du modèle',
    description: `Un devis d’électricien et un procès-verbal de mise en service prêts à remplir, pour un artisan seul ou une petite équipe. Le devis sépare fournitures et main-d’œuvre, applique la TVA ligne par ligne et porte la certification du client pour le taux réduit. Le PV se signe sur place à la fin du chantier${NBSP}: contrôles du tableau, prise de terre, mesures par circuit, attestation Consuel.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai lu les règles du devis, de la TVA réduite, du Consuel et des bornes de recharge pour que les mentions soient à jour.',
    updatedAt: ELECTRICIAN_COMMISSIONING_REPORT_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les électriciens, les installateurs et les auto-entrepreneurs du bâtiment. Deux fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime, l’Excel calcule.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: ELECTRICIAN_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: ELECTRICIAN_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 feuilles, totaux calculés',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à votre entreprise. Il ne remplace pas l’avis de votre comptable ni les formulaires officiels du Consuel.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Un devis et un PV de mise en service, en PDF et en Excel',
    intro: `Le PDF reprend les deux documents sur deux pages A4. L’Excel les reprend sur deux feuilles${NBSP}; la feuille « Devis » calcule les totaux, la TVA par taux et l’acompte dès que vous saisissez une quantité et un prix.`,
    documents: [
      {
        title: 'Devis',
        format: 'Page 1 du PDF, feuille « Devis » de l’Excel',
        items: [
          'En-tête de l’entreprise (nom, adresse, téléphone, SIRET, n° de TVA), assurance décennale (assureur, n° de contrat, couverture) et qualifications (Qualifelec, IRVE…)',
          'N° de devis, date, date de validité, devis gratuit ou payant',
          'Client, adresse des travaux, nature des travaux (tableau, rénovation, borne, dépannage), logement achevé depuis plus de 2 ans',
          `Lignes de prestations${NBSP}: désignation, unité, quantité, prix unitaire HT, taux de TVA, total HT, plus une ligne main-d’œuvre au taux horaire et une ligne frais de déplacement`,
          `Totaux${NBSP}: total HT, TVA à 5,5${NBSP}%, 10${NBSP}% et 20${NBSP}%, total TTC, acompte à la commande (30${NBSP}% par défaut dans l’Excel)`,
          'Conditions (coupure de courant, paiement, garantie, attestation Consuel incluse ou en sus), certification du client pour la TVA réduite, signatures « Bon pour accord » et cachet, mentions légales du dépannage et des bornes de recharge',
        ],
      },
      {
        title: 'PV de mise en service',
        format: 'Page 2 du PDF, feuille « PV de mise en service » de l’Excel',
        items: [
          'N° de chantier ou de devis, date, électricien, heures d’arrivée et de départ',
          `Client et installation${NBSP}: nature (neuf, rénovation, tableau, borne, extension), raccordement mono ou tri, puissance souscrite, disjoncteur de branchement, n° de compteur`,
          `Contrôles du tableau en 6 cases${NBSP}: différentiels 30${NBSP}mA (nombre, type A, AC ou F), test du bouton « T », calibre des disjoncteurs, repérage des circuits, serrage, parafoudre et réserve de 20${NBSP}%`,
          `Prise de terre et liaisons${NBSP}: résistance de la terre en Ω, liaison équipotentielle principale, liaison de la salle d’eau`,
          `Mesures par circuit${NBSP}: section, protection, isolement en MΩ, continuité du PE en Ω, essai (6 lignes dans le PDF, 8 dans l’Excel)`,
          'Essais et borne de recharge (puissance, circuit dédié, différentiel type A ou F, charge d’essai), attestation Consuel (type, n° et date d’envoi, visa reçu), observations et signatures',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir le devis et le PV en six étapes',
    intro:
      'Dans l’Excel, seules les cases blanches se saisissent. Les totaux, la TVA par taux et l’acompte du devis se calculent tout seuls.',
    steps: [
      {
        label: 'Étape 1',
        title: 'Vos coordonnées et vos qualifications, une fois pour toutes',
        description:
          'Remplissez l’en-tête (nom, adresse, SIRET, n° de TVA), votre assurance décennale et vos qualifications (Qualifelec, IRVE), puis enregistrez le fichier comme modèle. Chaque nouveau devis part de cette copie.',
      },
      {
        label: 'Étape 2',
        title: 'Le client, le lieu et la nature des travaux',
        description: `Nom, adresse des travaux et nature des travaux${NBSP}: tableau, rénovation, borne ou dépannage. Indiquez si le logement est achevé depuis plus de 2 ans${NBSP}: c’est ce qui ouvre la TVA à 10${NBSP}% ou à 5,5${NBSP}%.`,
      },
      {
        label: 'Étape 3',
        title: 'Les lignes, fournitures et main-d’œuvre séparées',
        description:
          'Une ligne par fourniture avec son unité, sa quantité et son prix unitaire HT, puis la main-d’œuvre au taux horaire et le déplacement au forfait. L’Excel calcule le total HT de chaque ligne.',
      },
      {
        label: 'Étape 4',
        title: 'Le bon taux de TVA sur chaque ligne',
        description: `La colonne TVA est à 10${NBSP}% par défaut. Passez à 5,5${NBSP}% pour une rénovation énergétique, à 20${NBSP}% pour un logement neuf ou un local professionnel. Les totaux par taux suivent.`,
      },
      {
        label: 'Étape 5',
        title: 'Conditions, acompte, signature',
        description:
          'Notez la date de début, la coupure de courant à prévoir, l’attestation Consuel incluse ou en sus, la validité et le taux d’acompte. Le client signe « Bon pour accord » et coche la certification s’il bénéficie du taux réduit.',
      },
      {
        label: 'Étape 6',
        title: 'Le PV, signé à la mise en service',
        description:
          'Sur place, cochez les contrôles du tableau, relevez la terre et les mesures de chaque circuit, notez le n° et la date d’envoi de l’attestation Consuel. Le client signe la réception de l’installation.',
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Les mentions que le modèle prévoit déjà',
    intro:
      'Quatre règles de l’électricien passent par le devis et le PV de mise en service. Le modèle leur réserve une case ou une mention.',
    facts: [
      {
        contextLabel: 'Depuis le 1er avril 2017',
        title: 'Un devis avant tout dépannage chez un particulier',
        text: `Dépannage, réparation ou entretien au domicile d’un particulier${NBSP}: devis détaillé remis avant les travaux, quel que soit le montant, avec le taux horaire, les frais de déplacement et sa durée de validité${NBSP}; facture dès 25${NBSP}€ TTC. Le modèle prévoit ces trois mentions.`,
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Avant la mise sous tension',
        title: 'L’attestation de conformité Consuel',
        text: `Toute installation neuve raccordée au réseau public reçoit une attestation de conformité, envoyée au Consuel à l’achèvement des travaux et au moins 20 jours avant la mise en service${NBSP}; depuis le 1er janvier 2025, le Consuel la transmet lui-même au gestionnaire de réseau. Le PV en garde le type, le n° et la date d’envoi.`,
        sourceName: CONSUEL_SOURCE.name,
        sourceUrl: CONSUEL_SOURCE.url,
      },
      {
        contextLabel: 'Décret du 12 janvier 2017',
        title: 'Une qualification IRVE pour les bornes de recharge',
        text: `Hors bornes de 3,7${NBSP}kW au plus dans un logement privé, les points de recharge sont posés par des professionnels qualifiés par un organisme agréé${NBSP}; l’amende administrative peut atteindre 300${NBSP}€ par point de recharge. L’en-tête du devis porte vos qualifications.`,
        sourceName: CHARGING_POINT_QUALIFICATION_SOURCE.name,
        sourceUrl: CHARGING_POINT_QUALIFICATION_SOURCE.url,
      },
      {
        contextLabel: `TVA à 10${NBSP}% ou 5,5${NBSP}%`,
        title: 'La certification du client sur le devis ou la facture',
        text: `Pour des travaux dans un logement achevé depuis plus de 2 ans, le client certifie sur le devis ou la facture que les conditions du taux réduit sont remplies. Chaque document est établi en deux exemplaires, le sien conservé 5 ans. Le devis prévoit la case à cocher.`,
        sourceName: REDUCED_VAT_WORKS_SOURCE.name,
        sourceUrl: REDUCED_VAT_WORKS_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Modèle de devis électricien${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de devis électricien est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Les deux fichiers se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne « modèle proposé par Dibodev » en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Quelle TVA appliquer sur un devis d’électricité${NBSP}?`,
        answer: `20${NBSP}% par défaut. Dans un logement achevé depuis plus de 2 ans, les travaux d’amélioration et d’entretien passent à 10${NBSP}%, et la rénovation énergétique à 5,5${NBSP}%, à condition que le client certifie ces conditions sur le devis ou la facture. Le modèle prévoit les trois taux par ligne et la case de certification${NBSP}; l’Excel est à 10${NBSP}% par défaut.`,
      },
      {
        question: `Un devis est-il obligatoire pour un dépannage électrique${NBSP}?`,
        answer: `Chez un particulier, oui, depuis le 1er avril 2017${NBSP}: dépannage, réparation ou entretien, quel que soit le montant, même en urgence. Le devis indique le taux horaire, les frais de déplacement, sa durée de validité et s’il est gratuit ou payant. Signé chez le client, il ouvre un droit de rétractation de 14 jours, sauf travaux urgents qu’il a demandés. Le modèle rappelle ces mentions en bas de page.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Dans la feuille « Devis », vous saisissez la quantité, le prix unitaire HT et le taux de TVA de chaque ligne (12 lignes, dont la main-d’œuvre et le déplacement). Le total HT de la ligne, le total HT du devis, la TVA par taux (5,5, 10 et 20${NBSP}%), le total TTC et l’acompte se calculent tout seuls. La feuille « PV de mise en service » ne calcule rien${NBSP}: elle reprend les cases à cocher et le tableau des mesures sur 8 circuits. Les deux feuilles s’impriment sur une page A4.`,
      },
      {
        question: `Le PV de mise en service remplace-t-il l’attestation Consuel${NBSP}?`,
        answer: `Non. L’attestation de conformité reste le formulaire officiel du Consuel, envoyé à l’achèvement des travaux et au moins 20 jours avant la mise en service. Le PV garde la trace de vos contrôles (différentiels, terre, isolement, continuité, essais), le type, le n° et la date d’envoi de l’attestation, puis la réception du visa. C’est le document que le client signe quand il reçoit l’installation.`,
      },
      {
        question: `Et quand les devis se multiplient${NBSP}?`,
        answer: `Un modèle Excel suffit pour quelques devis par semaine. Au-delà, les logiciels de devis du bâtiment (Tolteck, Obat, Batappli) reprennent vos ouvrages et vos tarifs fournisseurs à partir de 19${NBSP}€ HT par mois, et Organilog ou Kizeo Forms font remplir le PV sur le téléphone, de 15 à 59${NBSP}€ par utilisateur et par mois. Si votre organisation sort de leur cadre (plusieurs électriciens, attestations Consuel à suivre), le test de la page outil vous dit quoi choisir.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand les devis, les PV de mise en service et les attestations Consuel se recopient d’un fichier à l’autre, un outil qui les enchaîne vous rend des heures. Décrivez-moi votre activité${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels pour électriciens',
  },
}
