import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { INVENTORY_SHEET_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/inventorySheet/pageShared'
import {
  ANNUAL_INVENTORY_SOURCE,
  DOCUMENT_RETENTION_SOURCE,
  INVENTORY_MANAGEMENT_TEMPLATE_PDF_PATH,
  INVENTORY_MANAGEMENT_TEMPLATE_XLSX_PATH,
  STOCK_WITHDRAWAL_VAT_SOURCE,
  USE_BY_DATE_SOURCE,
} from '~/core/constants/tools/inventoryManagementSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const INVENTORY_SHEET_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Fiche d’inventaire${NBSP}: modèle Excel gratuit + bon de réception`,
    description: `Fiche d’inventaire${NBSP}: modèle Excel gratuit, avec bon de réception fournisseur en PDF et Excel. Écarts, taux d’exactitude et totaux calculés. Sans inscription.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle de fiche d’inventaire tournant et de bon de réception fournisseur pour la gestion de stock',
  },
  breadcrumbLabel: 'Fiche d’inventaire',
  shareImage: {
    titleLines: ['Fiche d’inventaire', 'et bon de réception'],
    highlight: 'inventaire',
    subtitle: 'Inventaire tournant et réception fournisseur en Excel et PDF, écarts et taux d’exactitude calculés',
    badge: 'Gratuit, sans inscription',
    icon: 'clipboard',
    alt: `Modèle de fiche d’inventaire Excel gratuit${NBSP}: fiche d’inventaire tournant et bon de réception fournisseur en Excel et PDF, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Fiche d’inventaire',
    titleAfter: `${NBSP}: modèle Excel gratuit (+ bon de réception)`,
    reassurances: ['Fiche d’inventaire + bon de réception', 'Excel avec écarts calculés', 'Sans inscription ni e-mail'],
    aboutTitle: 'À propos du modèle',
    description: `Une fiche d’inventaire tournant et un bon de réception fournisseur prêts à remplir, pour une TPE ou une PME qui tient un stock${NBSP}: atelier, négoce, dépôt, commerce. La fiche compte une zone à la fois et relève l’écart, sa valeur et sa cause probable, référence par référence. Le bon de réception contrôle une livraison ligne par ligne, puis se rapproche de la facture du fournisseur.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai créé de zéro StockPME, un logiciel de gestion de stock et d’inventaire toujours utilisé par des PME, et relu les règles de l’inventaire, des pièces à conserver et des dates limites pour que les repères soient à jour.',
    updatedAt: INVENTORY_SHEET_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les TPE et PME qui tiennent un stock, et les commerces. Deux fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime, l’Excel calcule les écarts et les totaux.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: INVENTORY_MANAGEMENT_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: INVENTORY_MANAGEMENT_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 feuilles, écarts et totaux calculés',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à votre entreprise et à vos produits. Il ne remplace pas l’avis de votre comptable.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Une fiche d’inventaire et un bon de réception, en PDF et en Excel',
    intro:
      'Le PDF reprend les deux documents sur deux pages A4 en paysage. L’Excel les reprend sur deux feuilles, avec les écarts, le taux d’exactitude et les totaux calculés dès que vous saisissez les quantités.',
    documents: [
      {
        title: 'Fiche d’inventaire tournant',
        format: 'Page 1 du PDF, feuille « Inventaire tournant » de l’Excel',
        items: [
          'En-tête de l’entreprise, dépôt ou zone comptée, date du comptage, compté par, validé par',
          `Classe ABC et fréquence, avec le repère d’usage${NBSP}: articles A chaque mois, B chaque trimestre, C chaque semestre`,
          `Lignes de comptage${NBSP}: référence, désignation, emplacement, lot ou n° de série, DLC / DDM, unité, stock théorique, quantité comptée, écart, valeur unitaire HT, valeur de l’écart, cause probable, correction saisie (12 lignes dans le PDF, 20 dans l’Excel)`,
          `Causes probables${NBSP}: casse, vol, erreur de saisie, retour, transfert ou prélèvement non saisi, autre (liste déroulante dans l’Excel)`,
          `Résultat du comptage${NBSP}: total de la zone, lignes comptées, lignes avec écart, taux d’exactitude, somme des écarts en valeur absolue, prochaine zone à compter`,
          'Signatures du compteur et du valideur, date de saisie des corrections, rappel de l’inventaire annuel (code de commerce, art. L123-12) et du prélèvement personnel à noter comme une sortie à part',
        ],
      },
      {
        title: 'Bon de réception fournisseur',
        format: 'Page 2 du PDF, feuille « Bon de réception » de l’Excel',
        items: [
          'N° de réception, date et heure, fournisseur, n° de commande, n° du bon de livraison fournisseur, dépôt de rangement, réceptionné par',
          `Lignes reçues${NBSP}: référence, désignation, quantités commandée, livrée et acceptée, écart, état (conforme, abîmé, manquant, en trop), lot ou n° de série, DLC / DDM, emplacement de rangement, prix unitaire HT, photo, facture rapprochée (11 lignes dans le PDF, 18 dans l’Excel)`,
          'Totaux de la réception, et dans l’Excel le montant accepté HT de chaque ligne et le nombre de lignes avec réserve',
          `Réserves écrites (manquants, casse, erreurs) et suite donnée${NBSP}: article, quantité, nature du problème, photo prise, fournisseur prévenu le`,
          `Facture fournisseur${NBSP}: reçue le, n° de facture, rapprochée le, entrées saisies dans le stock le`,
          `Signatures du réceptionnaire et du transporteur, repères${NBSP}: conservation 10 ans (art. L123-22), lot «${NBSP}L${NBSP}» et date limite des denrées, procès-verbal de VGP du matériel loué`,
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir la fiche et le bon en cinq étapes',
    intro:
      'Dans l’Excel, seules les cases blanches se saisissent. Les écarts, leur valeur, le taux d’exactitude et les totaux se calculent tout seuls.',
    steps: [
      {
        label: 'Étape 1',
        title: 'Vos coordonnées et la zone à compter',
        description: `Remplissez l’en-tête, puis le dépôt ou la zone comptée, la date et le nom du compteur. Une fiche par zone${NBSP}: c’est le principe de l’inventaire tournant.`,
      },
      {
        label: 'Étape 2',
        title: 'Comptez à l’aveugle',
        description:
          'Remplissez « Quantité comptée » avant de regarder le stock théorique, référence par référence, avec l’emplacement, le lot et la date limite si vos produits en ont. Reportez ensuite le stock théorique de votre fichier ou de votre logiciel.',
      },
      {
        label: 'Étape 3',
        title: 'Lisez l’écart et cherchez la cause',
        description:
          'L’Excel calcule l’écart (quantité comptée − stock théorique) et sa valeur au coût d’achat moyen HT, et le passe en rouge. Choisissez la cause probable dans la liste, puis « Oui » une fois la correction saisie dans votre stock.',
      },
      {
        label: 'Étape 4',
        title: 'Le résultat et la zone suivante',
        description:
          'Lignes comptées, lignes avec écart, taux d’exactitude et somme des écarts se calculent tout seuls. Notez la prochaine zone à compter, puis faites signer le compteur et le valideur.',
      },
      {
        label: 'Étape 5',
        title: 'À la livraison, le bon de réception',
        description: `Reportez le n° de commande et le n° du bon de livraison du fournisseur, puis les quantités commandée, livrée et acceptée de chaque ligne. L’Excel calcule l’écart et l’état${NBSP}; choisissez « Abîmé » à la main, écrivez la réserve, et rapprochez la facture quand elle arrive.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Les repères que le modèle prévoit déjà',
    intro:
      'Quatre règles du stock passent par la fiche d’inventaire et le bon de réception. Le modèle leur réserve une colonne ou un rappel en bas de page.',
    facts: [
      {
        contextLabel: 'Code de commerce, art. L123-12',
        title: 'Un inventaire au moins une fois tous les douze mois',
        text: `Toute entreprise tenue à une comptabilité contrôle par inventaire, au moins une fois tous les douze mois, l’existence et la valeur de ses stocks. L’inventaire tournant répartit ce comptage sur l’année sans dispenser de compter chaque référence${NBSP}: la fiche le rappelle en bas de page.`,
        sourceName: ANNUAL_INVENTORY_SOURCE.name,
        sourceUrl: ANNUAL_INVENTORY_SOURCE.url,
      },
      {
        contextLabel: '10 ans',
        title: 'Bons de commande, bons de livraison et factures conservés 10 ans',
        text: `Bons de commande, bons de livraison, factures fournisseurs et livre d’inventaire se conservent 10 ans à partir de la clôture de l’exercice (code de commerce, art. L123-22). Le bon de réception porte le n° de commande, le n° du bon de livraison et la facture rapprochée pour être classé avec eux.`,
        sourceName: DOCUMENT_RETENTION_SOURCE.name,
        sourceUrl: DOCUMENT_RETENTION_SOURCE.url,
      },
      {
        contextLabel: 'TVA, BOFiP',
        title: 'Un prélèvement personnel ou un cadeau est une sortie à part',
        text: `Un bien sorti du stock pour autre chose que les besoins de l’entreprise (prélèvement personnel, cadeau, usage interne) est imposable à la TVA quand celle-ci a été déduite à l’achat. La fiche propose «${NBSP}prélèvement non saisi${NBSP}» parmi les causes d’écart et rappelle de noter cette sortie à part, avec sa valeur.`,
        sourceName: STOCK_WITHDRAWAL_VAT_SOURCE.name,
        sourceUrl: STOCK_WITHDRAWAL_VAT_SOURCE.url,
      },
      {
        contextLabel: 'Denrées alimentaires',
        title: 'Interdit de vendre un produit le lendemain de sa DLC',
        text: `Proposer à la vente un produit dont la date limite de consommation est dépassée est interdit${NBSP}: 1${NBSP}500${NBSP}€ d’amende par produit. Un produit à date de durabilité minimale (DDM) dépassée peut encore être vendu. Les deux documents suivent le lot et la DLC / DDM ligne par ligne.`,
        sourceName: USE_BY_DATE_SOURCE.name,
        sourceUrl: USE_BY_DATE_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Modèle de fiche d’inventaire${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de fiche d’inventaire est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Les deux fichiers se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne « modèle proposé par Dibodev » en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `L’inventaire annuel est-il obligatoire, et faut-il valoriser le stock${NBSP}?`,
        answer: `Oui pour toute entreprise tenue à une comptabilité${NBSP}: le code de commerce (art. L123-12) impose de contrôler par inventaire, au moins une fois tous les douze mois, l’existence et la valeur des stocks. À la clôture, le stock est évalué au coût de revient, ou au cours du jour s’il est plus bas (BOFiP, CGI art. 38). La fiche prévoit la valeur unitaire HT au coût d’achat moyen pour chiffrer chaque écart${NBSP}; la valeur du stock à la clôture se calcule avec votre comptable.`,
      },
      {
        question: `L’inventaire tournant remplace-t-il l’inventaire annuel${NBSP}?`,
        answer: `Pas tout à fait. L’inventaire tournant (une zone ou une classe d’articles comptée chaque semaine ou chaque mois) est admis quand le stock permanent est fiable, à condition que chaque référence ait été comptée au moins une fois dans l’année. La méthode ABC (articles A chaque mois, B chaque trimestre, C chaque semestre) est un usage, pas une règle. La fiche compte une zone à la fois et note la prochaine zone à compter.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Sur la feuille « Inventaire tournant », vous saisissez le stock théorique, la quantité comptée et la valeur unitaire HT. L’écart et sa valeur se calculent et passent en rouge, la cause et la correction se choisissent dans des listes, et le résultat du comptage (lignes comptées, lignes avec écart, taux d’exactitude, écarts en valeur absolue) s’affiche. Sur la feuille « Bon de réception », l’écart, l’état, le montant accepté HT, les totaux et le nombre de lignes avec réserve se calculent de la même façon. Chaque feuille s’imprime sur une page A4 en paysage.`,
      },
      {
        question: `Un article manque ou arrive abîmé${NBSP}: que noter sur le bon de réception${NBSP}?`,
        answer: `Sur la ligne, la quantité livrée et la quantité acceptée, l’état (manquant, en trop ou abîmé) et « Oui » dans la colonne photo. En bas, la réserve écrite${NBSP}: article, quantité, nature du problème, photo prise, fournisseur prévenu le. Le transporteur signe le bon, et la facture ne se rapproche qu’une fois la réserve réglée.`,
      },
      {
        question: `Et quand les références se multiplient${NBSP}?`,
        answer: `Un modèle Excel suffit pour un petit stock et quelques livraisons par semaine. Au-delà, les logiciels de gestion de stock (Odoo Inventaire, Zoho Inventory, Monstock, Erplain) tiennent un stock permanent, les lots et les codes-barres, à partir de 14,90${NBSP}€ HT par mois, ou gratuitement avec la seule application Inventaire d’Odoo. Si votre organisation sort de leur cadre (camion, lots et DLC, numéros de série), le test de la page outil vous dit quoi choisir.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand les fiches d’inventaire, les bons de réception et le stock théorique se recopient d’un fichier à l’autre, un outil qui enchaîne entrées, sorties et inventaires vous rend des heures. Décrivez-moi vos dépôts et ce que vous stockez${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels de gestion de stock',
  },
}
