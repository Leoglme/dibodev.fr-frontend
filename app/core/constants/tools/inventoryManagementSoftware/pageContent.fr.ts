import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  ANNUAL_INVENTORY_SOURCE,
  DOCUMENT_RETENTION_SOURCE,
  INVENTORY_MANAGEMENT_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  INVENTORY_MANAGEMENT_PAGE_PROJECT_SLUG,
  INVENTORY_MANAGEMENT_PAGE_RELATED_ARTICLE_SLUGS,
  INVENTORY_MANAGEMENT_PAGE_SCREENSHOT_URL,
  INVENTORY_MANAGEMENT_PAGE_UPDATED_AT,
  INVENTORY_MANAGEMENT_TEMPLATE_PDF_PATH,
  INVENTORY_MANAGEMENT_TEMPLATE_XLSX_PATH,
  STOCK_VALUATION_SOURCE,
  STOCK_WITHDRAWAL_VAT_SOURCE,
  USE_BY_DATE_SOURCE,
} from '~/core/constants/tools/inventoryManagementSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'
import { INVENTORY_SHEET_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/inventorySheet/pageShared'

export const INVENTORY_MANAGEMENT_PAGE_CONTENT_FR: DibodevSoftwareToolPageContent = {
  meta: {
    title: `Logiciel de gestion de stock${NBSP}: comparatif, prix 2026`,
    description: `Odoo, Zoho, Monstock, Erplain, Dolibarr${NBSP}: les prix 2026 des logiciels de stock, un test gratuit en 6 questions et une fiche d’inventaire à télécharger.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Logiciel de gestion de stock et d’inventaire pour TPE et PME',
  },
  breadcrumbLabel: 'Logiciel de gestion de stock',
  shareImage: {
    titleLines: ['Quel logiciel', `pour votre stock${NBSP}?`],
    highlight: 'stock',
    subtitle: 'Six questions, les prix 2026 des logiciels de gestion de stock et une fiche d’inventaire gratuite',
    badge: 'Test gratuit, en 2 minutes',
    icon: 'clipboard',
    alt: `Quel logiciel pour gérer votre stock${NBSP}? Test gratuit en 6 questions, prix 2026 des logiciels de gestion de stock et fiche d’inventaire tournant à télécharger, sur dibodev.fr`,
  },
  hero: {
    titleBefore: 'Quel logiciel pour ',
    titleHighlight: 'gérer votre stock',
    titleAfter: `${NBSP}?`,
    description:
      'Six questions sur votre équipe, vos dépôts et ce que vous stockez. Boutique, atelier, matériel loué ou produits à date limite, le test vous dit quel type de logiciel choisir pour vos entrées, vos sorties et vos inventaires, et combien prévoir par mois pour votre équipe.',
    reassurances: ['2 minutes', 'Sans inscription ni e-mail', 'Résultat immédiat'],
    authorIntro: 'Test conçu par',
    authorBio:
      'développeur d’applications métier près de Rennes. Chez Kodeva, j’ai créé de zéro StockPME, un logiciel de gestion de stock et d’inventaire avec étiquettes QR, toujours utilisé par des PME.',
    updatedAt: INVENTORY_MANAGEMENT_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'logiciels',
    eyebrow: 'Prix publics 2026',
    title: 'Comparatif des logiciels de gestion de stock et de leurs prix',
    intro:
      'Les tarifs affichés sur leur site par les éditeurs, des gratuits aux abonnements. Le prix dépend surtout du nombre d’utilisateurs, puis du nombre de dépôts et de commandes par mois, et des options comme les lots ou les codes-barres.',
    productColumnLabel: 'Logiciel',
    coverageColumnLabel: 'Ce qu’il gère',
    priceColumnLabel: 'Prix public',
    products: [
      {
        name: 'Odoo Inventaire',
        coverage:
          'Multi-entrepôts, codes-barres et QR, numéros de série et lots, inventaires tournants, valorisation FIFO ou coût moyen, réassort min-max avec bons de commande, fonctionnement hors ligne',
        price: `0${NBSP}€, puis 19,90 à 24,90${NBSP}€ par utilisateur et par mois`,
        priceCondition: `Gratuit avec la seule application Inventaire, utilisateurs illimités, hébergement compris${NBSP}; formule Standard dès la deuxième application (remise de 12 mois, prix barrés 24,90 à 31,10${NBSP}€), Custom 35,90 à 44,90${NBSP}€${NBSP}; mise en place et maintenance du code non comprises`,
      },
      {
        name: 'Zoho Inventory',
        coverage:
          'Articles composés, portails client et fournisseur, numéros de série et lots dès Professionnel, génération de codes-barres et comptage de stock dès Premium',
        price: `0 à 249${NBSP}€ par organisation et par mois`,
        priceCondition: `Gratuit${NBSP}: 1 utilisateur, 2 entrepôts, 50 commandes par mois${NBSP}; Standard 29${NBSP}€ (2 utilisateurs, 2 entrepôts, 500 commandes), Professionnel 79${NBSP}€ (4 entrepôts), Premium 129${NBSP}€ (6 entrepôts), Entreprise 249${NBSP}€ (7 utilisateurs, 10 entrepôts), en facturation annuelle${NBSP}; utilisateur en plus 7,50${NBSP}€ par mois${NBSP}; essai 14 jours sans carte`,
      },
      {
        name: 'Dolibarr et DoliCloud',
        coverage:
          'ERP libre avec un module Stocks multi-entrepôts, lots et numéros de série avec DLC et DLUO en standard, module Inventaire (comptage et validation des corrections), douchette par module externe ou application Android',
        price: `0${NBSP}€ (logiciel libre), hébergé dès 14${NBSP}€ HT par utilisateur et par mois`,
        priceCondition: `À installer soi-même, ou DoliCloud Basic 14${NBSP}€ par utilisateur (4${NBSP}Go, tous les modules officiels, support par ticket) et Premium 30${NBSP}€ par mois plus 15${NBSP}€ par utilisateur${NBSP}; attestation loi de finances 5${NBSP}€ par utilisateur en Basic, incluse en Premium${NBSP}; essai 30 jours, sans engagement`,
      },
      {
        name: 'Monstock',
        coverage: 'Gestion de stock et de flux, sur ordinateur et sur mobile',
        price: `14,90 à 51,90${NBSP}€ HT par mois pour le premier utilisateur`,
        priceCondition: `Prépayé à l’année${NBSP}: Essential 14,90${NBSP}€ plus 9,90${NBSP}€ par utilisateur en plus (10 utilisateurs au maximum), Professional 24,90 plus 19,90${NBSP}€, Enterprise 39,90 plus 29,90${NBSP}€${NBSP}; au mois 19,90 plus 12,90${NBSP}€, 32,90 plus 25,90${NBSP}€, 51,90 plus 38,90${NBSP}€${NBSP}; essai 14 jours sans carte, sans engagement${NBSP}; import de données 450${NBSP}€ HT, formation 950${NBSP}€ HT par jour`,
      },
      {
        name: 'Stockpit (by Erplain)',
        coverage: `Niveaux, ajustements et valorisation CUMP, PEPS ou DEPS en Power${NBSP}; ventes synchronisées, achats, lieux de stockage multiples et bons de livraison en Smart${NBSP}; kits, conditionnements et numéros de lots en Boost${NBSP}; se branche sur Pennylane, Sellsy ou QuickBooks pour la facturation`,
        price: `19 à 59${NBSP}€ HT par utilisateur et par mois`,
        priceCondition: `Avec Pennylane${NBSP}: Power 19${NBSP}€, Smart 39${NBSP}€, Boost 59${NBSP}€ (190, 390 et 590${NBSP}€ à l’année)${NBSP}; avec Sellsy, Smart et Boost seulement${NBSP}; avec QuickBooks, prix en dollars et formule Lieux de stockage à 9${NBSP}$${NBSP}; 1${NBSP}000 commandes par mois en Smart et Boost, puis 0,03${NBSP}€ par commande${NBSP}; API en option à 30${NBSP}€ HT par mois${NBSP}; essai 14 jours`,
      },
      {
        name: 'Erplain',
        coverage: `Niveaux de stock, inventaires, variantes, alertes, codes-barres, valorisation${NBSP}; devis, commandes, bons de livraison, facture électronique`,
        price: `59 à 308,40${NBSP}€ HT par mois`,
        priceCondition: `À l’année, avec 12 mois d’engagement${NBSP}: 59${NBSP}€ pour 1 utilisateur et 1${NBSP}000 commandes par mois, 14${NBSP}€ par utilisateur en plus, 0,03${NBSP}€ par commande au-delà${NBSP}; paliers à 138 et 257${NBSP}€${NBSP}; au mois sans engagement${NBSP}: 70,80, 165,60 et 308,40${NBSP}€, 16,80${NBSP}€ par utilisateur en plus${NBSP}; essai 14 jours sans carte`,
      },
      {
        name: 'Axonaut',
        coverage: `Gestion commerciale avec stock inclus${NBSP}: coût moyen (CMUP) et valeur du stock en temps réel, alerte de stock bas, décrémentation automatique, réception de marchandises, traçabilité par lot, numéro de série, DLC et DLUO`,
        price: `À partir de 58,20${NBSP}€ par mois`,
        priceCondition: `Offre TPE${NBSP}: 97${NBSP}€ par mois avec 1 utilisateur, puis 30${NBSP}€ par utilisateur en plus${NBSP}; payé pour 1 an 77,60${NBSP}€ plus 24${NBSP}€ par utilisateur, pour 2 ans 67,90 plus 21${NBSP}€, pour 3 ans 58,20 plus 18${NBSP}€${NBSP}; sans engagement${NBSP}; essai 15 jours`,
      },
      {
        name: 'Sortly',
        coverage:
          'Application d’inventaire par photos, dossiers et champs personnalisés, étiquettes QR dès Advanced, QR et codes-barres dès Ultra',
        price: `0 à 149${NBSP}$ par mois, en dollars`,
        priceCondition: `Gratuit${NBSP}: 100 articles, 1 utilisateur${NBSP}; Advanced 24${NBSP}$ (500 articles, 2 utilisateurs), Ultra 74${NBSP}$ (2${NBSP}000 articles, 5 utilisateurs), Premium 149${NBSP}$ (5${NBSP}000 articles, 8 utilisateurs), prix de première année facturés à l’année${NBSP}; essai 14 jours avec carte, abonnement lancé sauf annulation`,
      },
      {
        name: 'Sage 100 Gestion Commerciale, Hector, Timly',
        coverage: `Gestion commerciale avec stock (Sage)${NBSP}; suivi d’équipements et de stock par QR code, prêts et retours (Hector, Timly)`,
        price: 'Sur devis ou non publié',
        priceCondition: `Sage${NBSP}: vendu par des revendeurs, prix d’appel annoncé à partir de 64${NBSP}€ HT par mois${NBSP}; Hector${NBSP}: formules affichées sans montant lisible, essai 15 jours sans carte${NBSP}; Timly${NBSP}: à partir de 195${NBSP}€ par mois, la gestion des stocks arrive à partir de 495${NBSP}€`,
      },
    ],
    calloutEmphasizedIntro: `Avant de signer${NBSP}:`,
    calloutText:
      'faites passer une vraie semaine au logiciel. Une livraison de 40 lignes réceptionnée depuis le bon du fournisseur avec deux articles manquants, un carton transféré de la réserve au camion, un article retrouvé par son étiquette QR dans un sous-sol sans réseau, l’inventaire d’un rayon le vendredi soir avec ses écarts corrigés, puis le stock valorisé envoyé au comptable, sans rien ressaisir.',
    calloutFootnote: 'Tarifs relevés le 1er novembre 2026 sur les pages tarifs des éditeurs. Liste non exhaustive.',
  },
  rules: {
    anchorId: 'reglementation',
    eyebrow: 'Le point en 2026',
    title: `Inventaire annuel, valorisation, DLC${NBSP}: ce que votre logiciel de stock doit suivre en 2026`,
    intro: `Un stock n’est pas qu’une liste de quantités. Le code de commerce impose un inventaire chaque année, les impôts une valeur à la clôture, la TVA un suivi des prélèvements, la facture électronique de 2027 une date et une adresse de livraison, et les denrées un lot et une date limite. Ces règles passent par les mouvements et les documents de votre outil.`,
    facts: [
      {
        contextLabel: 'Code de commerce, art. L123-12',
        title: 'Un inventaire au moins une fois tous les douze mois',
        text: `Toute entreprise tenue à une comptabilité contrôle par inventaire, au moins une fois tous les douze mois, l’existence et la valeur de ses stocks. L’inventaire tournant répartit ce comptage sur l’année${NBSP}; il ne dispense pas de compter chaque référence.`,
        sourceName: ANNUAL_INVENTORY_SOURCE.name,
        sourceUrl: ANNUAL_INVENTORY_SOURCE.url,
      },
      {
        contextLabel: '10 ans',
        title: 'Bons de commande, bons de livraison et factures conservés 10 ans',
        text: `Bons de commande, bons de livraison, factures clients et fournisseurs et livre d’inventaire se conservent 10 ans à partir de la clôture de l’exercice (code de commerce, art. L123-22). Un bon de réception rangé dans l’outil avec sa facture remplit cette obligation.`,
        sourceName: DOCUMENT_RETENTION_SOURCE.name,
        sourceUrl: DOCUMENT_RETENTION_SOURCE.url,
      },
      {
        contextLabel: 'BOFiP, CGI art. 38',
        title: 'Un stock valorisé au coût de revient, pas seulement compté',
        text: `À la clôture, les stocks sont évalués au coût de revient, ou au cours du jour s’il est plus bas. Aucune entreprise n’en est dispensée, même avec des milliers d’articles${NBSP}: l’outil doit sortir une valeur (coût moyen pondéré ou FIFO), pas seulement des quantités.`,
        sourceName: STOCK_VALUATION_SOURCE.name,
        sourceUrl: STOCK_VALUATION_SOURCE.url,
      },
      {
        contextLabel: 'TVA, BOFiP',
        title: 'Un prélèvement personnel ou un cadeau est une sortie à part',
        text: `Un bien sorti du stock pour autre chose que les besoins de l’entreprise (prélèvement personnel, cadeau, usage interne) est imposable à la TVA quand celle-ci a été déduite à l’achat. Chaque sortie de ce type se trace avec son motif et sa valeur, à part des ventes et de la casse.`,
        sourceName: STOCK_WITHDRAWAL_VAT_SOURCE.name,
        sourceUrl: STOCK_WITHDRAWAL_VAT_SOURCE.url,
      },
      {
        contextLabel: 'Denrées alimentaires',
        title: 'Interdit de vendre un produit le lendemain de sa DLC',
        text: `Proposer à la vente un produit dont la date limite de consommation est dépassée est interdit${NBSP}: 1${NBSP}500${NBSP}€ d’amende par produit. Un produit à date de durabilité minimale (DDM) dépassée peut encore être vendu. Pour les denrées, le lot (mention «${NBSP}L${NBSP}») et la date se suivent ligne par ligne.`,
        sourceName: USE_BY_DATE_SOURCE.name,
        sourceUrl: USE_BY_DATE_SOURCE.url,
      },
      {
        contextLabel: '1er septembre 2027',
        title: 'La facture électronique, avec la date et l’adresse de livraison',
        text: `Toutes les entreprises doivent pouvoir recevoir des factures électroniques depuis le 1er septembre 2026${NBSP}; les PME et les micro-entreprises devront les émettre à partir du 1er septembre 2027. La facture porte la date de livraison, et l’adresse de livraison si elle diffère${NBSP}: le bon de livraison de l’outil doit les fournir.`,
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: `Ce que l’outil sur mesure ne remplace pas${NBSP}:`,
    calloutText:
      'votre logiciel de facturation ni votre comptabilité. Les sorties alimentent vos devis, vos factures ou votre boutique, le stock valorisé part vers votre comptable à la clôture, et l’outil se branche sur vos outils actuels (Pennylane, Sellsy, caisse, boutique en ligne).',
  },
  freeTemplate: {
    anchorId: 'modele',
    eyebrow: 'Modèle gratuit',
    title: 'Une fiche d’inventaire tournant et un bon de réception fournisseur prêts à remplir',
    description: `La fiche d’inventaire d’une zone ou d’un dépôt${NBSP}: stock théorique, quantité comptée, écart, valeur de l’écart et cause probable, ligne par ligne${NBSP}; le bon de réception d’une livraison${NBSP}: quantités commandées, livrées et acceptées, état, lot ou numéro de série, date limite, réserves et rapprochement avec la facture. En PDF à imprimer, ou en Excel avec les écarts, le taux d’exactitude et les totaux calculés.`,
    items: [
      `Fiche d’inventaire tournant${NBSP}: dépôt ou zone, classe ABC et fréquence, référence, emplacement, lot, stock théorique, quantité comptée, écart en quantité et en valeur, cause, compté par, validé par`,
      `Bon de réception fournisseur${NBSP}: numéro de commande et de bon de livraison, quantités commandées, livrées et acceptées, état, lot ou numéro de série, DLC, emplacement de rangement, réserves, facture rapprochée`,
      `Repères utiles${NBSP}: chaque référence comptée au moins une fois par 12 mois (code de commerce, art. L123-12)${NBSP}; bons et factures conservés 10 ans${NBSP}; un prélèvement personnel noté comme une sortie à part`,
    ],
    downloads: [
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
    footnote: 'Modèle libre d’utilisation, à adapter à votre entreprise et à vos produits.',
    pageLinkLabel: 'Voir la page du modèle',
    pageLinkRouteName: INVENTORY_SHEET_TEMPLATE_ROUTE_NAME,
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
          { state: 'yes', text: `0 à 257${NBSP}€ par mois payé à l’année, le plus souvent par utilisateur` },
          { state: 'partial', text: `Votre abonnement, plus 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois` },
          {
            state: 'partial',
            text: `5${NBSP}000 à 25${NBSP}000${NBSP}€ une seule fois, plus 100 à 300${NBSP}€ par mois de maintenance`,
          },
        ],
      },
      {
        label: 'Fiches produits, entrées, sorties, alertes de seuil',
        cells: [
          { state: 'yes', text: 'Inclus partout, gratuits compris (avec une limite d’utilisateurs ou de commandes)' },
          { state: 'yes', text: 'Restent dans votre logiciel actuel' },
          { state: 'yes', text: 'Conçus autour de vos articles et de vos flux' },
        ],
      },
      {
        label: `Vos règles${NBSP}: dépôts et camion, lots et DLC, retours, numéros de série`,
        cells: [
          { state: 'partial', text: 'Souvent en formule supérieure, dans la limite des réglages de l’éditeur' },
          { state: 'yes', text: 'Sur les points ajoutés par le complément' },
          { state: 'yes', text: 'Conçu autour de votre organisation' },
        ],
      },
      {
        label: 'Étiquettes QR et scan au téléphone',
        cells: [
          { state: 'partial', text: 'Selon la formule, parfois en module payant' },
          { state: 'yes', text: 'Générées par le complément, lues avec le téléphone' },
          { state: 'yes', text: `Générées par l’outil, 0${NBSP}€ par étiquette` },
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
    rowsShownOnSmallScreens: INVENTORY_MANAGEMENT_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: INVENTORY_MANAGEMENT_PAGE_PROJECT_SLUG,
    screenshotUrl: INVENTORY_MANAGEMENT_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Déjà réalisé',
    title: 'Un logiciel de gestion de stock avec étiquettes QR, déjà en production',
    description: `StockPME est le logiciel de gestion de stock et d’inventaire que j’ai créé de zéro chez Kodeva, où j’étais en alternance${NBSP}; Breizhtic le distribuait avec le matériel. Fiches produits, niveaux de stock, entrées, sorties, corrections et inventaires, transferts entre emplacements et entrepôts, étiquettes QR générées dans l’outil${NBSP}: il est toujours en production dans des PME de 20 à 200 salariés.`,
    highlights: [
      `Chaque mouvement tracé${NBSP}: entrées, sorties, corrections, inventaires`,
      'Transferts entre emplacements et entrepôts, statistiques d’évolution',
      'Étiquettes QR générées dans l’outil, suivi des interventions SAV',
    ],
    linkLabel: 'Voir le projet StockPME',
    imageAlt: `Fiche produit de StockPME${NBSP}: historique des mouvements avec numéro de série, date, entrepôt, quantité et utilisateur`,
    browserBarCaption: 'StockPME · fiche produit, historique des mouvements',
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Logiciel de gestion de stock${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un logiciel de gestion de stock pour une petite équipe${NBSP}?`,
        answer: `Le prix se joue sur le nombre de personnes qui touchent au stock. Pour 5 personnes${NBSP}: Monstock Essential 14,90 plus 4 × 9,90, soit 54,50${NBSP}€ HT par mois en prépayé${NBSP}; Stockpit Smart 5 × 39, soit 195${NBSP}€ HT par mois${NBSP}; Zoho Inventory Standard 29${NBSP}€ par mois plus 3 utilisateurs en plus à 7,50${NBSP}€${NBSP}; DoliCloud Basic 5 × 14, soit 70${NBSP}€ HT${NBSP}; Erplain 59${NBSP}€ plus 4 × 14, soit 115${NBSP}€ HT${NBSP}; Odoo avec la seule application Inventaire, 0${NBSP}€ (tarifs relevés le 1er novembre 2026). Un complément sur mesure coûte de 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois, un outil complet de 5${NBSP}000 à 15${NBSP}000${NBSP}€ le plus souvent, jusqu’à 25${NBSP}000${NBSP}€ avec plusieurs dépôts et des flux particuliers, puis 100 à 300${NBSP}€ par mois de maintenance.`,
      },
      {
        question: `Existe-t-il un logiciel de gestion de stock gratuit${NBSP}?`,
        answer: `Oui, avec des limites précises. Odoo Inventaire est gratuit avec un nombre illimité d’utilisateurs tant que vous n’utilisez qu’une seule application Odoo. Zoho Inventory a un plan gratuit limité à 1 utilisateur, 2 entrepôts et 50 commandes par mois. Sortly offre 100 articles pour 1 utilisateur. Dolibarr est un logiciel libre, gratuit si vous l’installez et l’hébergez vous-même. Pour démarrer sans logiciel, la fiche d’inventaire tournant et le bon de réception de cette page (PDF et Excel) tiennent un petit stock à jour.`,
      },
      {
        question: `Faut-il un code-barres GS1 pour mes étiquettes${NBSP}?`,
        answer: `Non pour un suivi interne. Un code GS1 (GTIN) ne sert qu’à vendre en grande distribution ou sur les places de marché, et GS1 France facture une adhésion${NBSP}: pour un chiffre d’affaires jusqu’à 50${NBSP}000${NBSP}€, une redevance annuelle de 104${NBSP}€ HT plus un droit d’entrée (tarifs 2026). Pour retrouver, sortir ou compter vos articles, des étiquettes QR générées par l’outil et lues avec le téléphone coûtent 0${NBSP}€ par étiquette, comme dans StockPME. Attention aux formules${NBSP}: Sortly facture les étiquettes QR dès 24${NBSP}$ par mois, Zoho ne génère les codes-barres qu’en Premium (129${NBSP}€), Dolibarr a besoin d’un module externe pour la douchette.`,
      },
      {
        question: `L’inventaire tournant remplace-t-il l’inventaire annuel${NBSP}?`,
        answer: `Pas tout à fait. Le code de commerce (art. L123-12) impose de contrôler par inventaire, au moins une fois tous les douze mois, l’existence et la valeur du stock. L’inventaire tournant (une zone ou une classe d’articles comptée chaque semaine ou chaque mois) est admis quand le logiciel tient un stock permanent fiable, à condition que chaque référence ait été comptée au moins une fois dans l’année. La méthode ABC (articles A chaque mois, B chaque trimestre, C chaque semestre) est un usage, pas une règle. Les écarts constatés servent d’abord à corriger le stock et à chercher la cause${NBSP}: casse, vol, sortie ou transfert non saisi.`,
      },
      {
        question: `Un micro-entrepreneur doit-il faire un inventaire${NBSP}?`,
        answer: `Un micro-entrepreneur peut ne pas établir de comptes annuels (code de commerce, art. L123-28), donc pas d’inventaire comptable imposé. Si son activité principale est la vente de marchandises, de fournitures ou de denrées, il tient en revanche un registre récapitulatif annuel de ses achats, conservé avec ses pièces pendant 10 ans. Compter son stock reste le seul moyen de savoir ce qu’on a et ce qu’on a perdu${NBSP}; un outil qui garde chaque achat produit ce registre sans ressaisie.`,
      },
      {
        question: `Comment suivre le stock du camion ou de la camionnette${NBSP}?`,
        answer: `En traitant le camion comme un dépôt à part entière${NBSP}: on y transfère les articles depuis la réserve le matin, on scanne ce qui sort sur le chantier ou chez le client, et on recompte au retour. Le logiciel montre alors ce qui reste dans chaque véhicule et prépare le réassort. Vérifiez la formule avant de signer${NBSP}: Zoho Inventory limite à 2 entrepôts jusqu’au plan Standard, Stockpit ne gère plusieurs lieux de stockage qu’à partir de Smart avec Pennylane ou Sellsy (formule Lieux de stockage à 9${NBSP}$ avec QuickBooks), Odoo et Dolibarr gèrent plusieurs entrepôts dès le départ. Avec StockPME, chaque transfert entre emplacements ou entrepôts est tracé.`,
      },
      {
        question: `Que faire des produits dont la DLC est dépassée${NBSP}?`,
        answer: `Les retirer de la vente la veille${NBSP}: proposer un produit le lendemain de sa date limite de consommation est interdit, avec une amende de 1${NBSP}500${NBSP}€ par produit. Un produit à date de durabilité minimale (DDM) dépassée peut encore être vendu. Pour les denrées, la mention de lot (précédée de «${NBSP}L${NBSP}») et la date se suivent ligne par ligne, et en cas de rappel l’entreprise déclare le produit sur le site dédié et tient un état chiffré des produits retirés (code de la consommation, art. L423-3). Un logiciel adapté sort les lots les plus anciens d’abord, bloque la vente à la date limite et enregistre la sortie en «${NBSP}périmé${NBSP}», avec sa valeur.`,
      },
      {
        question: `Que doit porter le bon de livraison pour la facture électronique de 2027${NBSP}?`,
        answer: `La facture mentionne la date de la vente, c’est-à-dire le jour effectif de la livraison, l’adresse de livraison si elle diffère de l’adresse de facturation, la nature de l’opération (livraison de biens, prestation ou les deux) et, pour les professionnels, le SIREN du client. Toutes les entreprises reçoivent des factures électroniques depuis le 1er septembre 2026, les PME et les micro-entreprises devront en émettre à partir du 1er septembre 2027, avec une amende de 50${NBSP}€ par facture non électronique. Le bon de livraison de votre outil doit donc porter la date et l’adresse réelles, et se rapprocher de la facture, qui reste dans votre logiciel de facturation.`,
      },
      {
        question: `Loueur de matériel${NBSP}: où noter les vérifications périodiques (VGP)${NBSP}?`,
        answer: `Les équipements de travail listés par arrêté (appareils de levage, engins, échafaudages…) subissent des vérifications générales périodiques dont les résultats sont consignés au registre de sécurité (code du travail, art. R4323-23 et R4323-25)${NBSP}; pour les appareils de levage, la périodicité est de 12 mois. L’INRS rappelle qu’en pratique ces contrôles sont faits par le loueur, l’utilisateur vérifiant que les procès-verbaux lui sont fournis. Une fiche par équipement avec la date de la dernière VGP, la prochaine échéance et le procès-verbal joint, et un blocage de la sortie quand la date est dépassée, évitent de louer un matériel non contrôlé.`,
      },
      {
        question: `Je revends de l’occasion${NBSP}: quel registre tenir${NBSP}?`,
        answer: `Toute entreprise qui vend des biens mobiliers d’occasion (dépôt-vente, reconditionné) tient un registre des objets mobiliers, dit livre de police, un par établissement${NBSP}: sur papier coté et paraphé, ou sous forme dématérialisée conforme à la norme ISO 14641-1 avec les données conservées 10 ans. Il décrit chaque objet et son vendeur, au jour le jour. L’absence de registre est punie de 6 mois d’emprisonnement et 30${NBSP}000${NBSP}€ d’amende. Un logiciel de stock qui enregistre l’origine de chaque entrée peut produire ce registre, à condition de respecter le format légal.`,
      },
      {
        question: `Peut-on reprendre mon fichier Excel ou mon logiciel actuel${NBSP}?`,
        answer: `Oui. Si votre fichier ou votre logiciel exporte vos articles, vos quantités par dépôt, vos fournisseurs et votre historique en Excel ou en CSV, je les reprends dans le nouvel outil${NBSP}; c’est prévu dans le devis, et le premier inventaire sert de point de départ fiable. Vérifiez cette possibilité d’export avant de signer avec un éditeur.`,
      },
    ],
  },
  relatedArticles: {
    title: 'À lire aussi',
    slugs: INVENTORY_MANAGEMENT_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: `Un doute sur le bon outil pour votre stock${NBSP}?`,
    description: `Décrivez-moi vos dépôts, votre équipe et ce que vous stockez en quelques lignes. Je vous réponds sous 24${NBSP}h, et si un logiciel du marché vous suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
  },
}
