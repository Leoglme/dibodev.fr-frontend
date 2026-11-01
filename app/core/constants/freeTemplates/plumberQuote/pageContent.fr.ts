import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { PLUMBER_QUOTE_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/plumberQuote/pageShared'
import { HOME_REPAIR_QUOTE_RULES_SOURCE } from '~/core/constants/tools/officialSources'
import {
  BOILER_MAINTENANCE_SOURCE,
  DECENNIAL_INSURANCE_SOURCE,
  PLUMBING_HEATING_TEMPLATE_PDF_PATH,
  PLUMBING_HEATING_TEMPLATE_XLSX_PATH,
  REDUCED_VAT_WORKS_SOURCE,
} from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const PLUMBER_QUOTE_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Devis plombier chauffagiste${NBSP}: modèle gratuit Excel + PDF`,
    description: `Devis plombier chauffagiste${NBSP}: modèle gratuit en Excel et PDF, avec bon d’intervention. TVA 5,5, 10 ou 20${NBSP}%, acompte, mentions à jour. Sans inscription.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle de devis et de bon d’intervention pour plombier-chauffagiste',
  },
  breadcrumbLabel: 'Devis plombier',
  shareImage: {
    titleLines: ['Devis plombier', 'chauffagiste gratuit'],
    highlight: 'Devis plombier',
    subtitle: `Devis et bon d’intervention en Excel et PDF, TVA 5,5, 10 ou 20${NBSP}%, mentions à jour`,
    badge: 'Gratuit, sans inscription',
    icon: 'fileText',
    alt: `Modèle de devis plombier gratuit${NBSP}: devis et bon d’intervention en Excel et PDF, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Devis plombier chauffagiste',
    titleAfter: `${NBSP}: modèle gratuit Excel et PDF (+ bon d’intervention)`,
    reassurances: ['Devis + bon d’intervention', 'Excel avec totaux calculés', 'Sans inscription ni e-mail'],
    aboutTitle: 'À propos du modèle',
    description:
      'Un devis de plomberie-chauffage et un bon d’intervention prêts à remplir, pour un artisan seul ou une petite équipe. Le devis sépare fournitures et main-d’œuvre, applique la TVA ligne par ligne et porte la certification du client pour le taux réduit. Le bon d’intervention se signe sur place, avec le relevé de l’entretien annuel de chaudière.',
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai lu les règles du devis, de la facture et de l’entretien des chaudières pour que les mentions soient à jour.',
    updatedAt: PLUMBER_QUOTE_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les plombiers, chauffagistes et installateurs sanitaires. Deux fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime, l’Excel calcule.`,
    files: [
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
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Un devis et un bon d’intervention, en PDF et en Excel',
    intro:
      'Le PDF reprend les deux documents sur deux pages A4. L’Excel les reprend sur deux feuilles, avec les totaux, la TVA par taux et l’acompte calculés dès que vous saisissez une quantité et un prix.',
    documents: [
      {
        title: 'Devis',
        format: 'Page 1 du PDF, feuille « Devis » de l’Excel',
        items: [
          'En-tête de l’entreprise (nom, adresse, téléphone, SIRET, n° de TVA) et assurance décennale (assureur, n° de contrat, zone couverte)',
          'N° de devis, date, date de validité, devis gratuit ou payant',
          'Client, adresse des travaux, nature des travaux, logement achevé depuis plus de 2 ans',
          `Lignes de prestations${NBSP}: désignation, unité, quantité, prix unitaire HT, taux de TVA, total HT, plus une ligne main-d’œuvre au taux horaire et une ligne frais de déplacement`,
          `Totaux${NBSP}: total HT, TVA à 5,5${NBSP}%, 10${NBSP}% et 20${NBSP}%, total TTC, acompte à la commande (30${NBSP}% par défaut dans l’Excel)`,
          'Conditions, certification du client pour la TVA réduite, signatures « Bon pour accord » et cachet, mentions légales du dépannage chez un particulier',
        ],
      },
      {
        title: 'Bon d’intervention',
        format: 'Page 2 du PDF, feuille « Bon d’intervention » de l’Excel',
        items: [
          'N° d’intervention, date, technicien, n° de contrat d’entretien, heures d’arrivée et de départ',
          'Client et appareil (chaudière, chauffe-eau, pompe à chaleur), marque, modèle, n° de série, énergie, puissance, date de pose',
          'Motif (dépannage, entretien, mise en service), constat et travaux réalisés',
          `Pièces fournies et main-d’œuvre${NBSP}: désignation, quantité, prix unitaire HT, TVA, total HT (l’Excel ajoute le total TTC par ligne)`,
          `Relevé de l’entretien annuel de chaudière en 6 cases${NBSP}: nettoyage, sécurité et régulation, monoxyde de carbone en ppm, rendement, conseils remis, prochaine visite`,
          'Signatures du client et du technicien, rappel de l’attestation d’entretien sous 15 jours',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir le devis en cinq étapes',
    intro:
      'Dans l’Excel, seules les cases blanches se saisissent. Les totaux, la TVA par taux et l’acompte se calculent tout seuls.',
    steps: [
      {
        label: 'Étape 1',
        title: 'Vos coordonnées, une fois pour toutes',
        description:
          'Remplissez l’en-tête (nom, adresse, SIRET, n° de TVA) et votre assurance décennale, puis enregistrez le fichier comme modèle. Chaque nouveau devis part de cette copie.',
      },
      {
        label: 'Étape 2',
        title: 'Le client et le logement',
        description: `Nom, adresse des travaux et nature des travaux. Cochez si le logement est achevé depuis plus de 2 ans${NBSP}: c’est ce qui ouvre la TVA à 10${NBSP}% ou à 5,5${NBSP}%.`,
      },
      {
        label: 'Étape 3',
        title: 'Les lignes, fournitures et main-d’œuvre séparées',
        description:
          'Une ligne par fourniture avec sa quantité et son prix unitaire HT, puis la main-d’œuvre au taux horaire et le déplacement. L’Excel calcule le total HT de chaque ligne.',
      },
      {
        label: 'Étape 4',
        title: 'Le bon taux de TVA sur chaque ligne',
        description: `La colonne TVA est à 10${NBSP}% par défaut. Passez à 5,5${NBSP}% pour une rénovation énergétique, à 20${NBSP}% pour un logement neuf ou un local professionnel. Les totaux par taux suivent.`,
      },
      {
        label: 'Étape 5',
        title: 'Validité, acompte, signature',
        description:
          'Indiquez la date de validité, le caractère gratuit ou payant du devis et le taux d’acompte. Le client signe avec la mention « Bon pour accord », et coche la certification s’il bénéficie du taux réduit.',
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Les mentions que le modèle prévoit déjà',
    intro:
      'Quatre règles du plombier-chauffagiste passent par le devis et le bon d’intervention. Le modèle leur réserve une case ou une mention.',
    facts: [
      {
        contextLabel: 'Depuis le 1er avril 2017',
        title: 'Un devis avant toute intervention chez un particulier',
        text: `Dépannage, réparation ou entretien de plomberie, de sanitaires ou de génie climatique${NBSP}: un devis détaillé est remis avant les travaux, quel que soit le montant, avec le taux horaire, les frais de déplacement et sa durée de validité.`,
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: `TVA à 10${NBSP}% ou 5,5${NBSP}%`,
        title: 'La certification du client sur le devis ou la facture',
        text: `Pour des travaux dans un logement achevé depuis plus de 2 ans, le client certifie sur le devis ou la facture que les conditions du taux réduit sont remplies. Chaque document est établi en deux exemplaires, le sien conservé 5 ans.`,
        sourceName: REDUCED_VAT_WORKS_SOURCE.name,
        sourceUrl: REDUCED_VAT_WORKS_SOURCE.url,
      },
      {
        contextLabel: 'Chaque année civile',
        title: `L’entretien des chaudières de 4 à 400${NBSP}kW`,
        text: `Chaudières, pompes à chaleur et appareils avec ventilation${NBSP}: une visite par année civile, et une attestation d’entretien remise au client dans les 15 jours, conservée 2 ans. Le bon d’intervention en garde la trace.`,
        sourceName: BOILER_MAINTENANCE_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_SOURCE.url,
      },
      {
        contextLabel: 'Avec chaque devis et facture',
        title: 'L’attestation d’assurance décennale',
        text: `Artisan ou auto-entrepreneur du bâtiment, vous souscrivez une assurance de responsabilité civile décennale, et son attestation est jointe à vos devis et à vos factures. L’en-tête du devis en reprend les références.`,
        sourceName: DECENNIAL_INSURANCE_SOURCE.name,
        sourceUrl: DECENNIAL_INSURANCE_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Modèle de devis plombier${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de devis plombier est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Les deux fichiers se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne « modèle proposé par Dibodev » en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Quelle TVA appliquer sur un devis de plomberie${NBSP}?`,
        answer: `20${NBSP}% par défaut. Dans un logement achevé depuis plus de 2 ans, les travaux d’amélioration et d’entretien passent à 10${NBSP}%, et les travaux de rénovation énergétique à 5,5${NBSP}%, à condition que le client certifie ces conditions sur le devis ou la facture. Le modèle prévoit les trois taux par ligne et la case de certification.`,
      },
      {
        question: `Un devis est-il obligatoire pour un simple dépannage${NBSP}?`,
        answer: `Chez un particulier, oui, depuis le 1er avril 2017${NBSP}: dépannage, réparation ou entretien de plomberie, de sanitaires ou de chauffage, quel que soit le montant. Le devis indique le taux horaire, les frais de déplacement et sa durée de validité. Signé hors de votre établissement, le client dispose de 14 jours pour se rétracter, sauf travaux urgents qu’il a demandés.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Vous saisissez la quantité, le prix unitaire HT et le taux de TVA de chaque ligne. Le total HT de la ligne, le total HT du devis, la TVA par taux (5,5, 10 et 20${NBSP}%), le total TTC et l’acompte se calculent tout seuls. La feuille « Bon d’intervention » calcule aussi le total TTC de chaque ligne. Les deux feuilles s’impriment sur une page A4.`,
      },
      {
        question: `Le bon d’intervention remplace-t-il l’attestation d’entretien de chaudière${NBSP}?`,
        answer: `Non. Le bon d’intervention garde la trace de la visite (points contrôlés, mesure du monoxyde de carbone, conseils remis), mais l’attestation d’entretien reste un document à part, remis au client dans les 15 jours suivant la visite et conservé 2 ans. Le modèle vous rappelle cette échéance.`,
      },
      {
        question: `Et quand les devis se multiplient${NBSP}?`,
        answer: `Un modèle Excel suffit pour quelques devis par semaine. Au-delà, les logiciels de devis du bâtiment (Tolteck, Obat, Batappli) reprennent vos ouvrages et vos tarifs fournisseurs à partir de 19${NBSP}€ HT par mois. Si votre organisation sort de leur cadre (contrats d’entretien, tournées, pièces), le test de la page outil vous dit quoi choisir.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand les devis, les bons d’intervention et les contrats d’entretien se recopient d’un fichier à l’autre, un outil qui les enchaîne vous rend des heures. Décrivez-moi votre activité${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels pour plombiers',
  },
}
