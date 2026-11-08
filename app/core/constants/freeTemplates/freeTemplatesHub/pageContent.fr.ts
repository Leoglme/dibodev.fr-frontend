import type { DibodevFreeTemplateHubPageContent } from '~/core/types/DibodevFreeTemplateHubPage'
import { NBSP } from '~/core/constants/typography'

export const FREE_TEMPLATES_HUB_CONTENT_FR: DibodevFreeTemplateHubPageContent = {
  meta: {
    title: `Modèles gratuits par métier${NBSP}: devis, bons, plannings`,
    description: `17 modèles gratuits sans inscription${NBSP}: devis, contrat de location, attestation chaudière, PV de réception, bon d’intervention, plannings. PDF + Excel.`,
    inLanguage: 'fr-FR',
  },
  breadcrumbLabel: 'Modèles gratuits',
  shareImage: {
    titleLines: ['17 modèles gratuits', 'pour votre métier'],
    highlight: 'gratuits',
    subtitle: 'Devis, bons d’intervention, plannings, feuilles d’émargement : PDF à imprimer et Excel à adapter',
    badge: 'Sans inscription ni e-mail',
    icon: 'download',
    alt: `17 modèles gratuits par métier${NBSP}: devis, contrats, attestations, bons d’intervention et plannings en PDF et Excel, sans inscription, sur dibodev.fr`,
  },
  hero: {
    titlePart1: 'Des modèles ',
    titleHighlight1: 'gratuits',
    titlePart2: ' pour votre métier, en PDF et en Excel',
    description: `Devis, contrat de location, attestation d’entretien de chaudière, PV de réception, bon d’intervention, planning${NBSP}: dix-sept modèles préparés pour les métiers des tests de ce site, avec les mentions que la règle impose. Le PDF s’imprime, l’Excel calcule les totaux. Aucun formulaire, aucune adresse e-mail à laisser.`,
    cta: 'Choisir un modèle',
    templatesCountLabel: 'modèles par métier',
    formatsValue: '2',
    formatsLabel: 'formats, PDF et Excel',
    reassurances: [
      'Gratuits, sans inscription ni e-mail',
      'Mentions légales lues et datées',
      'Faits pour les artisans et les TPE',
    ],
  },
  catalog: {
    anchorId: 'modeles',
    eyebrow: 'Par métier',
    title: 'Choisissez votre modèle',
    intro:
      'Chaque modèle a sa page, qui détaille ce qu’il contient, comment le remplir et ce que la règle du métier impose. Le test du métier vous dit ensuite quel logiciel choisir quand Excel ne suffit plus.',
    templateLinkLabel: 'Voir le modèle',
    testLinkLabel: 'Faire le test du métier',
    cards: [
      {
        key: 'plumber-quote',
        tradeLabel: 'Plombier-chauffagiste',
        title: 'Devis + bon d’intervention',
        description: `Devis avec TVA à 5,5, 10 ou 20${NBSP}% et certification du client, bon d’intervention avec le relevé d’entretien de chaudière.`,
        formats: 'PDF 2 pages · Excel 2 feuilles',
      },
      {
        key: 'intervention-slip',
        tradeLabel: 'Gestion d’interventions',
        title: 'Bon d’intervention + feuille de tournée',
        description:
          'Bon d’intervention signé sur place par le client, feuille de tournée du technicien avec les durées et les totaux calculés.',
        formats: 'PDF 2 pages · Excel 2 feuilles',
      },
      {
        key: 'garage-repair-order',
        tradeLabel: 'Garage automobile',
        title: 'Ordre de réparation + devis',
        description:
          'Ordre de réparation avec l’état du véhicule, le kilométrage et les accords du client, devis avec pièces, main-d’œuvre et totaux.',
        formats: 'PDF 2 pages · Excel 2 feuilles',
      },
      {
        key: 'electrician-commissioning-report',
        tradeLabel: 'Électricien',
        title: 'PV de mise en service + devis',
        description:
          'Devis d’électricité avec la TVA par ligne, PV de mise en service avec les essais et l’attestation Consuel.',
        formats: 'PDF 2 pages · Excel 2 feuilles',
      },
      {
        key: 'personal-trainer-client-review',
        tradeLabel: 'Coach sportif',
        title: 'Bilan client + carnet de séances',
        description:
          'Bilan initial avec mesures et tests, carnet de séances avec le tonnage calculé séance après séance.',
        formats: 'PDF 2 pages · Excel 2 feuilles',
      },
      {
        key: 'landscaping-maintenance-contract',
        tradeLabel: 'Paysagiste',
        title: 'Contrat d’entretien + devis d’aménagement',
        description: `Devis d’aménagement avec TVA à 10 ou 20${NBSP}%, contrat d’entretien de jardin avec les passages et les services à la personne.`,
        formats: 'PDF 2 pages · Excel 2 feuilles',
      },
      {
        key: 'cleaning-schedule',
        tradeLabel: 'Entreprise de nettoyage',
        title: 'Planning des passages + contrôle qualité',
        description:
          'Planning de la semaine par site et par agent avec les heures calculées, fiche de contrôle qualité zone par zone avec le taux de conformité.',
        formats: 'PDF 2 pages · Excel 2 feuilles',
      },
      {
        key: 'inventory-sheet',
        tradeLabel: 'Gestion de stock',
        title: 'Fiche d’inventaire + bon de réception',
        description:
          'Fiche d’inventaire tournant avec les écarts calculés, bon de réception fournisseur avec les quantités commandées, livrées et acceptées.',
        formats: 'PDF 2 pages · Excel 2 feuilles',
      },
      {
        key: 'body-shop-claim-tracking',
        tradeLabel: 'Carrosserie',
        title: 'Suivi de sinistre + devis carrosserie',
        description:
          'Devis avec relevé photos, pièces de réemploi et part de l’assureur, fiche de suivi de sinistre, planning de la cabine et véhicules de prêt.',
        formats: 'PDF 2 pages · Excel 3 feuilles',
      },
      {
        key: 'carpentry-cutting-list',
        tradeLabel: 'Menuisier',
        title: 'Fiche de débit + devis avec métré',
        description:
          'Devis avec métré, fiche de débit et plan de coupe avec le coût matière calculé, PV de réception qui ouvre les garanties.',
        formats: 'PDF 2 pages · Excel 3 feuilles',
      },
      {
        key: 'training-attendance-sheet',
        tradeLabel: 'Organisme de formation',
        title: 'Feuille d’émargement + suivi des heures',
        description:
          'Émargement par demi-journée, présences de la semaine et suivi des heures par stagiaire avec les soldes calculés.',
        formats: 'PDF 2 pages · Excel 3 feuilles',
      },
      {
        key: 'booking-schedule',
        tradeLabel: 'Activités de loisirs',
        title: 'Planning de réservation + fiche d’inscription',
        description:
          'Planning des créneaux avec les places et les acomptes calculés, fiche d’inscription et de briefing, tableau d’organisation des secours.',
        formats: 'PDF 2 pages · Excel 4 feuilles',
      },
      {
        key: 'equipment-rental-agreement',
        tradeLabel: 'Location de matériel',
        title: 'Contrat de location de matériel + état des lieux',
        description:
          'Contrat avec valeur de remplacement, dépôt de garantie, transport et casse, état des lieux de sortie et de retour, montants HT, TVA et TTC calculés.',
        formats: 'PDF 2 pages · Excel 3 feuilles',
      },
      {
        key: 'driving-school-contract',
        tradeLabel: 'Auto-école',
        title: 'Contrat de formation + fiche de suivi de l’élève',
        description:
          'Contrat avec évaluation de départ, heures prévues et échéancier, fiche de suivi des leçons et des 4 compétences du livret, heures et examens calculés.',
        formats: 'PDF 2 pages · Excel 3 feuilles',
      },
      {
        key: 'bike-repair-ticket',
        tradeLabel: 'Atelier vélo',
        title: 'Fiche de dépôt et de réparation vélo',
        description:
          'Fiche de dépôt avec le marquage du vélo et son état, devis accepté, pièces et main-d’œuvre, suivi des vélos à l’atelier et des pièces commandées.',
        formats: 'PDF 2 pages · Excel 3 feuilles',
      },
      {
        key: 'boiler-service-certificate',
        tradeLabel: 'Chauffagiste',
        title: 'Attestation d’entretien de chaudière + carnet',
        description:
          'Attestation avec les mentions de l’arrêté du 15 septembre 2009, carnet des visites sur dix ans, clients à relancer avant la date anniversaire.',
        formats: 'PDF 2 pages · Excel 3 feuilles',
      },
      {
        key: 'works-acceptance-report',
        tradeLabel: 'Bâtiment',
        title: 'PV de réception de travaux + levée des réserves',
        description:
          'Procès-verbal avec ou sans réserves, délais de levée, retenue de garantie, PV de levée des réserves et calendrier des garanties calculé.',
        formats: 'PDF 2 pages · Excel 3 feuilles',
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Modèles gratuits${NBSP}: vos questions`,
    questions: [
      {
        question: `Les modèles sont-ils vraiment gratuits${NBSP}?`,
        answer: `Oui. Chaque modèle se télécharge en un clic, sans inscription ni adresse e-mail, et vous pouvez le modifier, l’imprimer et le réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne « modèle proposé par Dibodev » en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Quelle différence entre le PDF et l’Excel${NBSP}?`,
        answer: `Le PDF est fait pour être imprimé et rempli à la main, sur le chantier ou chez le client. L’Excel reprend les mêmes documents avec des formules${NBSP}: totaux HT et TTC, TVA par taux, heures, écarts d’inventaire ou soldes d’heures se calculent dès que vous saisissez les chiffres. Les deux s’impriment sur des pages A4.`,
      },
      {
        question: `Les mentions légales sont-elles à jour${NBSP}?`,
        answer: `Chaque modèle reprend les règles sourcées de la page outil de son métier (devis avant intervention, TVA réduite, entretien des chaudières, assurance décennale, émargement, affichages obligatoires…), avec la date de relecture en haut de sa page. Elles ne remplacent pas l’avis de votre comptable ou de votre assureur.`,
      },
      {
        question: `Puis-je adapter un modèle à mon entreprise${NBSP}?`,
        answer: `C’est prévu. Remplissez l’en-tête avec vos coordonnées, votre SIRET et vos assurances, ajoutez ou retirez des lignes, changez les taux par défaut, puis enregistrez le fichier comme votre propre modèle. Les formules de l’Excel suivent les lignes que vous ajoutez à l’intérieur des tableaux.`,
      },
      {
        question: `Mon métier n’a pas de modèle, que faire${NBSP}?`,
        answer: `Les modèles suivent les métiers des tests de ce site. Un devis d’un métier voisin se transforme souvent en quelques minutes (le devis plombier sert à n’importe quel artisan du bâtiment). Sinon, décrivez-moi votre document${NBSP}: je vous dis gratuitement si un modèle suffit ou s’il vaut mieux un outil.`,
      },
      {
        question: `Et quand les documents se multiplient${NBSP}?`,
        answer: `Un modèle suffit pour quelques documents par semaine. Quand ils se recopient d’un fichier à l’autre, un logiciel du marché ou un outil sur mesure prend le relais${NBSP}: le test de chaque métier vous dit lequel choisir et combien prévoir, avec les prix 2026 des logiciels.`,
      },
    ],
  },
  contactCta: {
    title: `Un modèle ne suffit plus${NBSP}?`,
    description: `Décrivez-moi votre activité et les documents que vous remplissez chaque semaine. Je vous réponds sous 24${NBSP}h, et si un logiciel du marché vous suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
  },
}
