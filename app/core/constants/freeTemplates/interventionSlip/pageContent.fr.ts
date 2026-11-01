import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { INTERVENTION_SLIP_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/interventionSlip/pageShared'
import {
  DOCUMENT_RETENTION_SOURCE,
  FIELD_SERVICE_TEMPLATE_PDF_PATH,
  FIELD_SERVICE_TEMPLATE_XLSX_PATH,
  ITINERANT_TRAVEL_TIME_SOURCE,
  VEHICLE_GEOLOCATION_SOURCE,
} from '~/core/constants/tools/fieldServiceSoftware/pageShared'
import { HOME_REPAIR_QUOTE_RULES_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'

export const INTERVENTION_SLIP_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Bon d’intervention${NBSP}: modèle PDF et Excel gratuit 2026`,
    description: `Bon d’intervention${NBSP}: modèle gratuit en PDF et Excel, avec feuille de tournée. Pièces, main-d’œuvre, heures et kilomètres calculés. Sans inscription.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle de bon d’intervention et de feuille de tournée pour techniciens itinérants',
  },
  breadcrumbLabel: 'Bon d’intervention',
  shareImage: {
    titleLines: ['Bon d’intervention', 'modèle gratuit'],
    highlight: 'Bon d’intervention',
    subtitle: 'Bon d’intervention et feuille de tournée en PDF et Excel, totaux et durées calculés, mentions à jour',
    badge: 'Gratuit, sans inscription',
    icon: 'clipboard',
    alt: `Modèle de bon d’intervention gratuit${NBSP}: bon d’intervention et feuille de tournée en PDF et Excel, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Bon d’intervention',
    titleAfter: `${NBSP}: modèle PDF et Excel gratuit (+ feuille de tournée)`,
    reassurances: ['Bon + feuille de tournée', 'Excel avec totaux et durées calculés', 'Sans inscription ni e-mail'],
    aboutTitle: 'À propos du modèle',
    description: `Un bon d’intervention et une feuille de tournée prêts à remplir, pour un dépanneur seul, un service après-vente ou une petite équipe de techniciens itinérants. Le bon se signe chez le client, avec le type d’intervention, le constat, les pièces, la main-d’œuvre et la suite à donner. La feuille de tournée suit la journée d’un technicien${NBSP}: interventions prévues, heures, statuts et kilomètres.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai lu les règles de conservation des bons, du devis avant un dépannage, du temps de trajet et de la géolocalisation pour que les mentions soient à jour.',
    updatedAt: INTERVENTION_SLIP_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les techniciens itinérants, les dépanneurs, les services après-vente et toutes les entreprises qui interviennent chez leurs clients. Deux fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime, l’Excel calcule.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: FIELD_SERVICE_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: FIELD_SERVICE_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 feuilles, durées et totaux calculés',
      },
    ],
    footnote: 'Modèle libre d’utilisation, à adapter à votre entreprise. Il ne remplace pas l’avis de votre comptable.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Un bon d’intervention et une feuille de tournée, en PDF et en Excel',
    intro:
      'Le PDF reprend les deux documents sur deux pages A4. L’Excel les reprend sur deux feuilles, avec les totaux du bon, la durée de chaque intervention et les kilomètres de la journée calculés dès que vous saisissez.',
    documents: [
      {
        title: 'Bon d’intervention',
        format: 'Page 1 du PDF, feuille « Bon d’intervention » de l’Excel',
        items: [
          'En-tête de l’entreprise (nom, adresse, téléphone, SIRET), n° d’intervention, date, technicien, n° de contrat ou de demande',
          `Client et site${NBSP}: société ou nom, contact sur place, adresse, équipement (marque, modèle, n° de série), emplacement, date de pose ou dernière intervention`,
          'Type d’intervention en 4 cases (dépannage, maintenance préventive, installation et mise en service, contrôle), heures d’arrivée et de départ, temps de trajet aller dans le PDF',
          'Zone libre pour la demande du client, le constat, les travaux réalisés, les mesures relevées et les références des photos',
          `Pièces et main-d’œuvre${NBSP}: désignation, quantité, prix unitaire HT, TVA, total HT, avec une ligne main-d’œuvre au taux horaire et une ligne frais de déplacement, puis total HT et total TTC (l’Excel ajoute le TTC par ligne et la TVA à 20${NBSP}% par défaut)`,
          'Suite à donner en 4 cases (terminée, nouvelle intervention à planifier, devis à établir, pièce à commander), observations du client, signatures du client et du technicien',
        ],
      },
      {
        title: 'Feuille de tournée',
        format: 'Page 2 du PDF, feuille « Feuille de tournée » de l’Excel',
        items: [
          'Technicien, date, véhicule, kilométrage au départ et à l’arrivée, heures de départ et de retour (l’Excel calcule les km de la journée)',
          `Interventions de la journée${NBSP}: heure prévue, client et adresse, motif, arrivée, départ, statut, km, sur 8 lignes (10 dans l’Excel, qui calcule la durée de chacune)`,
          `Statut en une lettre${NBSP}: T terminée, R à revenir (pièce, devis, absent), A annulée`,
          `Total de la journée${NBSP}: heures d’intervention et de trajet à reporter dans le PDF, heures et kilomètres additionnés dans l’Excel`,
          'Pièces prises dans le camion ou à réapprovisionner, consignes pour le bureau (devis à établir, interventions à replanifier, incidents)',
          'Signature du technicien, visa du responsable, mentions sur le temps de trajet des itinérants et la géolocalisation des véhicules',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir le bon d’intervention en cinq étapes',
    intro:
      'Dans l’Excel, seules les cases blanches se saisissent. Les totaux du bon, les durées et les kilomètres de la tournée se calculent tout seuls.',
    steps: [
      {
        label: 'Étape 1',
        title: 'Vos coordonnées, une fois pour toutes',
        description:
          'Remplissez l’en-tête (nom, adresse, téléphone, SIRET) sur les deux feuilles et enregistrez le fichier comme modèle. Chaque bon part de cette copie, avec un numéro d’intervention qui se suit.',
      },
      {
        label: 'Étape 2',
        title: 'Le client, le site et l’équipement',
        description: `Société ou nom, contact sur place, adresse, puis l’équipement avec marque, modèle, n° de série et date de pose${NBSP}: c’est ce qui permet de retrouver l’historique d’un appareil à la visite suivante.`,
      },
      {
        label: 'Étape 3',
        title: 'Le type d’intervention et le constat',
        description:
          'Cochez dépannage, maintenance, installation ou contrôle, notez les heures d’arrivée et de départ, puis décrivez la demande du client, le constat, les travaux réalisés et les mesures relevées.',
      },
      {
        label: 'Étape 4',
        title: 'Pièces, main-d’œuvre et suite à donner',
        description: `Une ligne par pièce avec sa quantité et son prix unitaire HT, puis la main-d’œuvre au taux horaire et le déplacement. L’Excel calcule les totaux HT et TTC. Cochez la suite à donner et faites signer le client${NBSP}: travaux reçus.`,
      },
      {
        label: 'Étape 5',
        title: 'La feuille de tournée, au fil de la journée',
        description:
          'Technicien, véhicule, kilométrage au départ, puis une ligne par intervention avec l’heure prévue, l’arrivée, le départ, le statut et les km. Le soir, les pièces à réapprovisionner, les consignes pour le bureau et le visa du responsable.',
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Les mentions que le modèle prévoit déjà',
    intro:
      'Quatre règles de l’entreprise d’interventions passent par le bon d’intervention et la feuille de tournée. Le modèle leur réserve une case ou une mention.',
    facts: [
      {
        contextLabel: '10 ans',
        title: 'Le bon d’intervention signé, conservé dix ans',
        text: `Bons de commande, de livraison et d’intervention, factures clients et fournisseurs${NBSP}: pièces justificatives à conserver 10 ans à compter de la clôture de l’exercice. Le bon signé par le client fait foi de la prestation, et le modèle le rappelle en bas de page.`,
        sourceName: DOCUMENT_RETENTION_SOURCE.name,
        sourceUrl: DOCUMENT_RETENTION_SOURCE.url,
      },
      {
        contextLabel: 'Depuis le 1er avril 2017',
        title: 'Un devis avant tout dépannage chez un particulier',
        text: `Dépannage, réparation ou entretien au domicile d’un particulier (plomberie, électricité, serrurerie, génie climatique…)${NBSP}: devis détaillé remis avant les travaux, quel que soit le montant, puis facture dès 25${NBSP}€ TTC. Le bon d’intervention vient après le devis, il ne le remplace pas.`,
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Cour de cassation, 23 novembre 2022',
        title: 'Le trajet vers le premier client est du temps de travail',
        text: 'Pour un salarié itinérant qui reste à la disposition de l’employeur pendant le trajet, les déplacements entre son domicile et le premier ou le dernier client comptent dans le temps de travail effectif. La feuille de tournée note l’heure de départ, l’arrivée chez chaque client et l’heure de retour.',
        sourceName: ITINERANT_TRAVEL_TIME_SOURCE.name,
        sourceUrl: ITINERANT_TRAVEL_TIME_SOURCE.url,
      },
      {
        contextLabel: 'Règles de la CNIL',
        title: 'La géolocalisation des véhicules, encadrée',
        text: 'Finalités limitées (justifier une intervention, envoyer le technicien le plus proche, sécurité), salariés informés, jamais hors temps de travail ni pour contrôler la vitesse, données gardées 2 mois (1 an pour prouver une intervention). Les kilomètres de la feuille de tournée, eux, sont relevés par le technicien.',
        sourceName: VEHICLE_GEOLOCATION_SOURCE.name,
        sourceUrl: VEHICLE_GEOLOCATION_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Modèle de bon d’intervention${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de bon d’intervention est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Les deux fichiers se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne « modèle proposé par Dibodev » en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Le bon d’intervention remplace-t-il le devis ou la facture${NBSP}?`,
        answer: `Non. Chez un particulier, un devis détaillé est remis avant tout dépannage, réparation ou entretien, quel que soit le montant. Le bon signé prouve ensuite que les travaux ont été faits et reçus, puis la facture suit, avec entre professionnels la date d’échéance, le taux des pénalités de retard et l’indemnité forfaitaire de 40${NBSP}€ pour frais de recouvrement. Le modèle rappelle ces trois documents en bas de page.`,
      },
      {
        question: `Que doit contenir un bon d’intervention${NBSP}?`,
        answer: `Tout ce qui permet, un an plus tard, de prouver ce qui a été fait, où, quand et par qui${NBSP}: l’entreprise, le client et le site, la date et les heures, l’équipement, le type d’intervention, le constat et les travaux, les pièces et la main-d’œuvre, la suite à donner, le nom et la signature du client. Le modèle reprend ces rubriques dans cet ordre.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Sur la feuille « Bon d’intervention », vous saisissez la quantité et le prix unitaire HT de chaque ligne${NBSP}; le total HT et le total TTC de la ligne (TVA à 20${NBSP}% par défaut, modifiable), puis le total HT, la TVA et le total TTC du bon se calculent tout seuls. Sur la feuille « Feuille de tournée », les heures d’arrivée et de départ au format hh:mm donnent la durée de chaque intervention, le bas du tableau additionne les heures et les kilomètres, et les km de la journée se déduisent du compteur. Les deux feuilles s’impriment sur une page A4.`,
      },
      {
        question: `Le temps de trajet des techniciens compte-t-il dans les heures${NBSP}?`,
        answer:
          'Pour un salarié itinérant qui reste à la disposition de l’employeur pendant le trajet, les déplacements entre son domicile et le premier ou le dernier client sont du temps de travail effectif (Cour de cassation, 23 novembre 2022). La feuille de tournée prévoit l’heure de départ, l’arrivée et le départ chez chaque client et l’heure de retour, avec une case pour le total des heures de trajet dans le PDF.',
      },
      {
        question: `Et quand les bons d’intervention se multiplient${NBSP}?`,
        answer: `Un modèle Excel suffit pour quelques interventions par semaine et un ou deux techniciens. Au-delà, les logiciels de gestion d’interventions (Organilog, Synchroteam, Kizeo Forms) planifient les tournées et font signer le bon sur le téléphone du technicien, à partir de 15${NBSP}€ HT par utilisateur et par mois chez Kizeo Forms (sans planning) et de 19${NBSP}€ chez Organilog. Si votre organisation sort de leur cadre (contrats d’entretien, pièces du camion, plusieurs agences), le test de la page outil vous dit quoi choisir.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand les bons d’intervention, les feuilles de tournée et les factures se recopient d’un fichier à l’autre, un outil qui les enchaîne vous rend des heures. Décrivez-moi votre activité${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels d’interventions',
  },
}
