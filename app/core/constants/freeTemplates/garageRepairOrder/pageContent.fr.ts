import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { GARAGE_REPAIR_ORDER_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/garageRepairOrder/pageShared'
import {
  AUTO_REPAIR_RULES_SOURCE,
  AUTO_REPAIR_TEMPLATE_PDF_PATH,
  AUTO_REPAIR_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/autoRepairShopSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const GARAGE_REPAIR_ORDER_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Ordre de réparation garage${NBSP}: modèle gratuit Excel et PDF`,
    description: `Ordre de réparation garage${NBSP}: modèle gratuit en PDF et Excel, avec devis. Kilométrage, pièces de réemploi, estimation TTC, totaux calculés. Sans inscription.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle d’ordre de réparation et de devis pour garage automobile',
  },
  breadcrumbLabel: 'Ordre de réparation garage',
  shareImage: {
    titleLines: ['Ordre de réparation', 'de garage gratuit'],
    highlight: 'Ordre de réparation',
    subtitle: 'Ordre de réparation et devis en PDF et Excel, kilométrage, pièces de réemploi, totaux calculés',
    badge: 'Gratuit, sans inscription',
    icon: 'fileText',
    alt: `Modèle d’ordre de réparation garage gratuit${NBSP}: ordre de réparation et devis en PDF et Excel, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Ordre de réparation garage',
    titleAfter: `${NBSP}: modèle gratuit Excel et PDF (+ devis)`,
    reassurances: ['Ordre de réparation + devis', 'Excel avec totaux calculés', 'Sans inscription ni e-mail'],
    aboutTitle: 'À propos du modèle',
    description:
      'Un ordre de réparation et un devis de garage prêts à remplir, pour un mécanicien indépendant, un garage ou un centre auto. L’ordre de réparation se signe à l’entrée du véhicule, en deux exemplaires, avec le kilométrage, l’état du véhicule, l’estimation TTC et les accords du client. Le devis détaille pièces et main-d’œuvre, applique la TVA et porte l’acceptation « Bon pour accord ».',
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai lu les règles du devis, de l’ordre de réparation et de la facture du garagiste pour que les mentions soient à jour.',
    updatedAt: GARAGE_REPAIR_ORDER_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les garages, les mécaniciens indépendants et les centres auto. Deux fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime, l’Excel calcule.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: AUTO_REPAIR_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: AUTO_REPAIR_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 feuilles, totaux calculés',
      },
    ],
    footnote: 'Modèle libre d’utilisation, à adapter à votre atelier. Il ne remplace pas l’avis de votre comptable.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Un ordre de réparation et un devis, en PDF et en Excel',
    intro:
      'Le PDF reprend les deux documents sur deux pages A4. L’Excel les reprend sur deux feuilles, avec l’estimation de chaque ligne, le coût probable de l’intervention et les totaux du devis calculés dès que vous saisissez un prix.',
    documents: [
      {
        title: 'Ordre de réparation',
        format: 'Page 1 du PDF, feuille « Ordre de réparation » de l’Excel',
        items: [
          'En-tête du garage (nom, adresse, téléphone, SIRET), n° d’ordre, date d’entrée, restitution prévue, réceptionnaire',
          `Client (nom, téléphone, adresse, e-mail) et véhicule${NBSP}: immatriculation, kilométrage à l’entrée, marque, modèle, motorisation, n° de série (VIN), date de 1re mise en circulation, niveau de carburant`,
          `Travaux demandés et estimation${NBSP}: désignation (symptôme constaté, travaux à réaliser), quantité, heures de main-d’œuvre, estimation TTC, coût probable de l’intervention, taux horaire TTC appliqué (colonnes taux horaire et pièces TTC dans l’Excel)`,
          `État du véhicule à l’entrée${NBSP}: carrosserie, intérieur, objets laissés dans le véhicule, voyants allumés`,
          `Accords du client en 3 cases${NBSP}: pièces de réemploi acceptées, appel avant tout dépassement d’un montant TTC, pièces remplacées à récupérer`,
          `Signatures « Bon pour accord » et cachet du garage, mentions légales${NBSP}: kilométrage sur tous les documents, pièces de l’économie circulaire, note dès 25${NBSP}€ TTC, prix affichés`,
        ],
      },
      {
        title: 'Devis',
        format: 'Page 2 du PDF, feuille « Devis » de l’Excel',
        items: [
          'En-tête du garage avec n° de TVA, n° de devis, date, valable jusqu’au, devis payant oui / non',
          'Client (nom, adresse), téléphone / e-mail, véhicule (immatriculation, modèle), kilométrage',
          `Lignes de prestations${NBSP}: désignation (pièce ou main-d’œuvre), quantité, prix unitaire HT, TVA, total HT (l’Excel ajoute le total TTC par ligne et passe de 8 à 12 lignes)`,
          `Totaux${NBSP}: total HT, TVA à 20${NBSP}% par défaut, total TTC (calculés dans l’Excel, taux de TVA modifiable ligne par ligne)`,
          `Conditions${NBSP}: délai d’immobilisation prévu, acompte éventuel, modalités de paiement, pièces de réemploi proposées, garantie des pièces et de la main-d’œuvre`,
          `Acceptation en 2 cases (bon pour accord, montant du devis déduit de la facture finale si devis payant), signatures, mentions légales${NBSP}: devis non refusable, prix libres, accord du client pour tout travail non prévu, kilométrage sur la facture`,
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir l’ordre de réparation en cinq étapes',
    intro:
      'Dans l’Excel, seules les cases blanches se saisissent. L’estimation de chaque ligne, le coût probable de l’intervention et les totaux du devis se calculent tout seuls.',
    steps: [
      {
        label: 'Étape 1',
        title: 'Vos coordonnées, une fois pour toutes',
        description:
          'Remplissez l’en-tête du garage (nom, adresse, SIRET, n° de TVA) sur les deux documents, puis enregistrez le fichier comme modèle. Chaque nouvel ordre de réparation part de cette copie.',
      },
      {
        label: 'Étape 2',
        title: 'Le client et le véhicule à l’entrée',
        description: `Devant le client, notez l’immatriculation, le kilométrage, le VIN et le niveau de carburant, puis l’état du véhicule${NBSP}: rayures, chocs, objets laissés, voyants allumés. C’est ce qui évite les litiges à la restitution.`,
      },
      {
        label: 'Étape 3',
        title: 'Les travaux demandés et l’estimation',
        description:
          'Une ligne par symptôme ou travail à réaliser, avec les heures de main-d’œuvre, votre taux horaire TTC et le prix des pièces. L’Excel calcule l’estimation de chaque ligne et le coût probable de l’intervention. Indiquez la restitution prévue.',
      },
      {
        label: 'Étape 4',
        title: 'Les accords du client et la signature',
        description:
          'Le client coche s’il accepte les pièces de réemploi, le montant au-delà duquel vous l’appelez avant tout travail supplémentaire, et s’il veut récupérer les pièces remplacées. Il signe « Bon pour accord », vous signez et tamponnez, un exemplaire chacun.',
      },
      {
        label: 'Étape 5',
        title: 'Le devis quand le client le demande',
        description: `Sur la feuille « Devis », une ligne par pièce ou poste de main-d’œuvre avec sa quantité et son prix unitaire HT. La TVA est à 20${NBSP}% par défaut, les totaux suivent. Indiquez la validité, si le devis est payant et les conditions${NBSP}: immobilisation, acompte, garantie.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Les mentions que le modèle prévoit déjà',
    intro:
      'Quatre règles du garagiste passent par l’ordre de réparation et le devis. Le modèle leur réserve une case ou une mention.',
    facts: [
      {
        contextLabel: 'Fortement recommandé',
        title: 'L’ordre de réparation en deux exemplaires',
        text: `Signé par vous et le client${NBSP}: date, identité, véhicule et kilométrage, réparations, coût probable et délai d’immobilisation. La page 1 du modèle reprend chacune de ces mentions, avec la date de restitution prévue.`,
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Si le client le demande',
        title: 'Un devis, gratuit ou payant',
        text: `Le devis n’est pas obligatoire, mais vous ne pouvez pas le refuser au client qui le demande. Il peut être payant si le client le sait avant${NBSP}; signé, il vous engage. Le modèle prévoit la case « devis payant${NBSP}: oui / non » et la déduction de son montant sur la facture finale.`,
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Depuis le 1er janvier 2017',
        title: 'Des pièces de réemploi à proposer',
        text: 'Pour certaines réparations (carrosserie amovible, garnitures, optiques, vitrages non collés, certaines pièces mécaniques), hors liaison au sol et freinage. L’ordre de réparation porte la case d’accord du client, le devis la ligne « pièces de réemploi proposées ».',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: `Dès 25${NBSP}€ TTC`,
        title: 'Une facture détaillée, le kilométrage partout',
        text: `Date, nom et adresse du garage, client, date et lieu de l’intervention, décompte détaillé, totaux HT et TTC${NBSP}; le kilométrage figure sur tous vos documents. Le modèle le demande à l’entrée du véhicule et le rappelle sur le devis.`,
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Modèle d’ordre de réparation${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle d’ordre de réparation est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Les deux fichiers se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne « modèle proposé par Dibodev » en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `L’ordre de réparation est-il obligatoire${NBSP}?`,
        answer: `Il est fortement recommandé, pas imposé. En deux exemplaires signés, il protège le garage et le client${NBSP}: date, identité, véhicule et kilométrage, réparations prévues, coût probable et délai d’immobilisation. Le modèle y ajoute l’état du véhicule à l’entrée et le niveau de carburant, sources fréquentes de litige à la restitution.`,
      },
      {
        question: `Un garagiste peut-il faire payer le devis${NBSP}?`,
        answer: `Oui, s’il prévient le client avant. Le devis n’est pas obligatoire, mais le garage ne peut pas le refuser si le client le demande. Une fois signé, il engage les deux parties. Le modèle prévoit la mention « devis payant${NBSP}: oui / non » et la case qui déduit son montant de la facture finale.`,
      },
      {
        question: `Que faire si des travaux supplémentaires apparaissent en cours de réparation${NBSP}?`,
        answer: `Tout travail non prévu demande l’accord du client. L’ordre de réparation du modèle fixe à l’avance le montant TTC au-delà duquel vous l’appelez avant de continuer${NBSP}: le client le remplit à l’entrée du véhicule, et vous gardez la trace écrite de son accord.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Sur la feuille « Ordre de réparation », vous saisissez les heures de main-d’œuvre, le taux horaire TTC et le prix des pièces${NBSP}: l’estimation de chaque ligne et le coût probable de l’intervention se calculent tout seuls. Sur la feuille « Devis », vous saisissez la quantité et le prix unitaire HT${NBSP}; la TVA, à 20${NBSP}% par défaut, se modifie ligne par ligne, et le total HT, la TVA et le total TTC suivent. Les deux feuilles s’impriment sur une page A4.`,
      },
      {
        question: `Et quand les ordres de réparation se multiplient${NBSP}?`,
        answer: `Un modèle Excel suffit pour quelques véhicules par semaine. Au-delà, les logiciels de garage (Gest’Garage, TDV, AutoProGestion, Kwixéo) enchaînent devis, ordre de réparation et facture avec l’historique de chaque véhicule, à partir de 19${NBSP}€ par mois. Si votre organisation sort de leur cadre (forfaits, plusieurs ateliers, rendez-vous sur votre site), le test de la page outil vous dit quoi choisir.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand les ordres de réparation, les devis et les factures se recopient d’un fichier à l’autre et que l’historique de chaque véhicule se perd, un outil qui les enchaîne vous rend des heures. Décrivez-moi votre atelier${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels pour garages',
  },
}
