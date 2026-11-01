import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { LANDSCAPER_MAINTENANCE_CONTRACT_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/landscaperMaintenanceContract/pageShared'
import {
  BIOWASTE_SORTING_SOURCE,
  GARDENING_HOME_SERVICES_SOURCE,
  HOME_SERVICES_TAX_CREDIT_SOURCE,
  LANDSCAPING_TEMPLATE_PDF_PATH,
  LANDSCAPING_TEMPLATE_XLSX_PATH,
  LANDSCAPING_VAT_SOURCE,
} from '~/core/constants/tools/landscapingSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const LANDSCAPER_MAINTENANCE_CONTRACT_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Contrat d’entretien espaces verts${NBSP}: modèle gratuit (+ devis)`,
    description: `Contrat d’entretien espaces verts${NBSP}: modèle gratuit en Excel et PDF, avec devis paysagiste. TVA 10 ou 20${NBSP}%, acompte, services à la personne. Sans inscription.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle de contrat d’entretien de jardin et de devis d’aménagement paysager',
  },
  breadcrumbLabel: 'Contrat d’entretien espaces verts',
  shareImage: {
    titleLines: ['Contrat d’entretien', 'espaces verts gratuit'],
    highlight: 'Contrat d’entretien',
    subtitle: `Contrat d’entretien de jardin et devis d’aménagement en Excel et PDF, TVA 10 ou 20${NBSP}%, services à la personne`,
    badge: 'Gratuit, sans inscription',
    icon: 'fileText',
    alt: `Contrat d’entretien espaces verts gratuit${NBSP}: contrat d’entretien de jardin et devis d’aménagement en Excel et PDF, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Contrat d’entretien espaces verts',
    titleAfter: `${NBSP}: modèle gratuit (+ devis paysagiste)`,
    reassurances: ['Contrat d’entretien + devis', 'Excel avec totaux calculés', 'Sans inscription ni e-mail'],
    aboutTitle: 'À propos du modèle',
    description: `Un devis d’aménagement paysager et un contrat d’entretien de jardin prêts à remplir, pour un paysagiste seul ou une petite équipe d’espaces verts. Le devis détaille ouvrages, végétaux et main-d’œuvre, applique la TVA à 10${NBSP}% ou 20${NBSP}% ligne par ligne et porte la certification du client pour le taux réduit. Le contrat fixe les prestations, les passages de l’année, le prix et sa révision, avec une colonne pour les prestations en services à la personne.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai lu les règles de la TVA des travaux de jardin, des services à la personne et des déchets verts pour que les mentions soient à jour.',
    updatedAt: LANDSCAPER_MAINTENANCE_CONTRACT_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les paysagistes, les jardiniers et les entreprises d’espaces verts. Deux fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime, l’Excel calcule.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: LANDSCAPING_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: LANDSCAPING_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 feuilles, totaux calculés',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à votre entreprise. Il ne remplace pas l’avis de votre comptable, ni la vérification de votre éligibilité aux services à la personne.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Un devis et un contrat d’entretien, en PDF et en Excel',
    intro:
      'Le PDF reprend les deux documents sur deux pages A4. L’Excel les reprend sur deux feuilles, avec le total de chaque ligne, la TVA par taux, l’acompte, le montant annuel du contrat et sa mensualité calculés dès que vous saisissez une quantité et un prix.',
    documents: [
      {
        title: 'Devis d’aménagement',
        format: 'Page 1 du PDF, feuille « Devis » de l’Excel',
        items: [
          'En-tête de l’entreprise (nom, adresse, téléphone, SIRET, n° de TVA) et assurances (RC professionnelle, décennale le cas échéant, assureur, n° de contrat)',
          'N° de devis, date, « valable jusqu’au », début des travaux prévu',
          `Client, adresse du chantier si elle diffère, nature des travaux (création, plantations, clôture…), logement achevé depuis plus de 2 ans${NBSP}: oui / non`,
          `Lignes d’ouvrages et de végétaux${NBSP}: désignation, unité, quantité, prix unitaire HT, taux de TVA, total HT, plus trois lignes préremplies pour la main-d’œuvre au taux horaire, l’évacuation des déchets verts au m³ et les frais de déplacement`,
          `Totaux${NBSP}: total HT, TVA à 10${NBSP}% (ouvrages éligibles attenants à un logement de plus de 2 ans) et à 20${NBSP}% (plantations, entretien et autres ouvrages), total TTC, acompte à la commande (30${NBSP}% par défaut dans l’Excel)`,
          `Conditions (accès, eau et électricité, paiement, garantie de reprise des végétaux), case de certification du client pour la TVA à 10${NBSP}% (art. 279-0 bis du CGI), signatures « Bon pour accord » et cachet, rappel des taux de TVA en pied de page`,
        ],
      },
      {
        title: 'Contrat d’entretien de jardin',
        format: 'Page 2 du PDF, feuille « Contrat d’entretien » de l’Excel',
        items: [
          'En-tête de l’entreprise (nom, adresse, téléphone, SIRET) et n° de déclaration services à la personne, si l’entreprise est déclarée',
          'N° de contrat, date, début et fin du contrat, client particulier ou professionnel, adresse du jardin, surfaces (pelouse en m², haies en mètres), accès (portail, clé, eau, électricité)',
          'Sept prestations préremplies (tonte et ramassage de l’herbe, taille des haies, taille des arbustes et des rosiers, désherbage manuel, ramassage des feuilles, débroussaillage, évacuation des déchets verts) avec période et fréquence, passages par an, prix HT par passage, services à la personne oui / non, total HT par an',
          `Montant annuel HT, TVA 20${NBSP}%, montant annuel TTC, paiement à cocher${NBSP}: en 12 mensualités, après chaque passage ou en une fois (l’Excel calcule la mensualité et la part des prestations en services à la personne)`,
          'Durée d’un an, révision du prix à la date anniversaire, résiliation par écrit avec préavis, passage reporté en cas de météo défavorable, non compris (création, élagage, abattage, fournitures) sur devis séparé',
          `Encadré services à la personne (crédit d’impôt de 50${NBSP}%, plafond de 5${NBSP}000${NBSP}€, attestation fiscale avant le 31 mars), clauses produits phytosanitaires et déchets verts (inclus ou facturés en sus), signatures « Lu et approuvé » et cachet`,
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir le devis et le contrat en six étapes',
    intro:
      'Dans l’Excel, seules les cases blanches se saisissent. Les totaux, la TVA par taux, l’acompte et la mensualité du contrat se calculent tout seuls.',
    steps: [
      {
        label: 'Étape 1',
        title: 'Vos coordonnées, une fois pour toutes',
        description: `Remplissez l’en-tête (nom, adresse, SIRET, n° de TVA), vos assurances et, si vous êtes déclaré en services à la personne, votre n° de déclaration sur le contrat. Enregistrez le fichier comme modèle${NBSP}: chaque nouveau devis part de cette copie.`,
      },
      {
        label: 'Étape 2',
        title: 'Le client et le chantier',
        description: `Nom, adresse du chantier si elle diffère de celle du client, nature des travaux (création, plantations, clôture…). Indiquez si le logement est achevé depuis plus de 2 ans${NBSP}: c’est la condition de la TVA à 10${NBSP}% sur les ouvrages éligibles.`,
      },
      {
        label: 'Étape 3',
        title: 'Les lignes, ouvrages et végétaux séparés',
        description:
          'Une ligne par ouvrage ou par végétal avec son unité, sa quantité et son prix unitaire HT, puis la main-d’œuvre au taux horaire, l’évacuation des déchets verts au m³ et le déplacement. L’Excel calcule le total HT de chaque ligne.',
      },
      {
        label: 'Étape 4',
        title: 'Le bon taux de TVA sur chaque ligne',
        description: `La colonne TVA est à 20${NBSP}% par défaut. Passez à 10${NBSP}% seulement pour un ouvrage éligible attenant à un logement de plus de 2 ans (mur de clôture, portail, terrasse maçonnée…)${NBSP}; l’Excel refuse tout autre taux et le client coche la certification.`,
      },
      {
        label: 'Étape 5',
        title: 'Validité, acompte, signature du devis',
        description: `Indiquez la date de validité, le début des travaux prévu et le taux d’acompte (30${NBSP}% par défaut). Notez vos conditions (accès, eau et électricité, garantie de reprise), puis le client signe avec la mention « Bon pour accord ».`,
      },
      {
        label: 'Étape 6',
        title: 'Le contrat d’entretien et ses passages',
        description: `Pour chaque prestation, la période, le nombre de passages par an, le prix HT par passage et oui / non en services à la personne. L’Excel calcule le montant annuel, la TVA, la mensualité et la part en services à la personne${NBSP}; complétez durée, révision, résiliation et cochez le mode de paiement.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Les mentions que le modèle prévoit déjà',
    intro:
      'Quatre règles du paysagiste passent par le devis et le contrat d’entretien. Le modèle leur réserve une colonne, une case ou une mention.',
    facts: [
      {
        contextLabel: `TVA à 10${NBSP}% ou 20${NBSP}%`,
        title: 'Le bon taux de TVA, ouvrage par ouvrage',
        text: `Créer ou entretenir un jardin se facture à 20${NBSP}%. Certains ouvrages attenants à un logement achevé depuis plus de 2 ans passent à 10${NBSP}%${NBSP}: mur de clôture (hors haies vives), portail, réfection d’une terrasse maçonnée, muret de protection, chemin d’accès principal. Le devis prévoit le taux par ligne, le total par taux et la certification du client.`,
        sourceName: LANDSCAPING_VAT_SOURCE.name,
        sourceUrl: LANDSCAPING_VAT_SOURCE.url,
      },
      {
        contextLabel: 'Services à la personne',
        title: `Petit jardinage${NBSP}: une déclaration et une attestation fiscale`,
        text: 'L’entretien courant des jardins, la taille des haies et des arbres et le débroussaillage chez un particulier peuvent relever des services à la personne, sur simple déclaration (NOVA), sans agrément. Chaque client reçoit alors une attestation fiscale avant le 31 mars de l’année suivante. Le contrat porte votre n° de déclaration et marque chaque prestation oui / non.',
        sourceName: GARDENING_HOME_SERVICES_SOURCE.name,
        sourceUrl: GARDENING_HOME_SERVICES_SOURCE.url,
      },
      {
        contextLabel: `Jusqu’à 5${NBSP}000${NBSP}€ de dépenses par an`,
        title: `Un crédit d’impôt de 50${NBSP}% pour vos clients`,
        text: `Le petit jardinage payé à une entreprise déclarée en services à la personne ouvre droit, pour le client, à un crédit d’impôt de 50${NBSP}% de ses dépenses, dans la limite de 5${NBSP}000${NBSP}€ par an et par foyer. L’encadré du contrat le rappelle, sans garantir l’éligibilité de chaque prestation.`,
        sourceName: HOME_SERVICES_TAX_CREDIT_SOURCE.name,
        sourceUrl: HOME_SERVICES_TAX_CREDIT_SOURCE.url,
      },
      {
        contextLabel: 'Depuis le 1er janvier 2024',
        title: 'Les déchets verts triés à la source',
        text: `Tous les professionnels trient leurs biodéchets à la source, déchets verts compris, et le brûlage des déchets verts est interdit (amende de 750${NBSP}€). Le devis et le contrat prévoient une ligne d’évacuation vers une filière de tri, incluse ou facturée en sus.`,
        sourceName: BIOWASTE_SORTING_SOURCE.name,
        sourceUrl: BIOWASTE_SORTING_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Modèle de devis paysagiste${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de devis paysagiste est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Les deux fichiers se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne « modèle proposé par Dibodev » en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Quelle TVA appliquer sur un devis de paysagiste${NBSP}?`,
        answer: `20${NBSP}% pour la création et l’entretien des jardins, les plantations et le petit jardinage. 10${NBSP}% pour certains ouvrages attenants à un logement achevé depuis plus de 2 ans (mur de clôture hors haies vives, portail, réfection d’une terrasse maçonnée, muret, chemin d’accès principal), à condition que le client certifie ces conditions sur le devis. Abri, serre, pergola, bassin, éclairage et piscine restent à 20${NBSP}%. Le modèle prévoit les deux taux par ligne, le total par taux et la case de certification.`,
      },
      {
        question: `Le contrat d’entretien ouvre-t-il droit au crédit d’impôt de 50${NBSP}%${NBSP}?`,
        answer: `Seulement si votre entreprise est déclarée en services à la personne, et pour les prestations éligibles${NBSP}: entretien courant, taille des haies et des arbres, débroussaillage. La création de jardins, l’élagage et le terrassement n’en font pas partie. Le contrat porte votre n° de déclaration, marque chaque prestation oui / non et rappelle l’attestation fiscale à remettre avant le 31 mars${NBSP}; en services à la personne, le devis est d’ailleurs obligatoire et gratuit dès 100${NBSP}€ TTC par mois.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Sur la feuille « Devis », vous saisissez la quantité, le prix unitaire HT et le taux de TVA de chaque ligne (10 ou 20${NBSP}%, l’Excel refuse les autres). Le total HT de la ligne, le total HT, la TVA par taux, le total TTC et l’acompte se calculent tout seuls. Sur la feuille « Contrat d’entretien », le nombre de passages et le prix par passage donnent le total annuel de chaque prestation, le montant annuel HT et TTC, la mensualité sur 12 mois et la part des prestations marquées « oui » en services à la personne. Les deux feuilles s’impriment sur une page A4.`,
      },
      {
        question: `Peut-on prévoir des produits phytosanitaires dans le contrat${NBSP}?`,
        answer: `Pas chez un particulier${NBSP}: depuis le 1er juillet 2022, les produits phytopharmaceutiques sont interdits dans les propriétés privées à usage d’habitation et leurs espaces extérieurs, sauf produits de biocontrôle, à faible risque ou utilisables en agriculture biologique. Là où ils restent permis, leur usage professionnel demande le Certiphyto. Le contrat contient cette clause, et le désherbage y est prévu manuel.`,
      },
      {
        question: `Et quand les devis et les contrats se multiplient${NBSP}?`,
        answer: `Un modèle Excel suffit pour quelques devis et contrats par mois. Au-delà, les logiciels pour paysagistes (Robbin, Extrabat Paysage, Paysagio) reprennent vos ouvrages, vos végétaux et les passages de vos contrats à partir de 19${NBSP}€ HT par mois. Si votre organisation sort de leur cadre (plusieurs équipes, heures par chantier, attestations fiscales), le test de la page outil vous dit quoi choisir.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand les devis, les contrats d’entretien et les passages de l’année se recopient d’un fichier à l’autre, un outil qui les enchaîne vous rend des heures. Décrivez-moi votre activité${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels pour paysagistes',
  },
}
