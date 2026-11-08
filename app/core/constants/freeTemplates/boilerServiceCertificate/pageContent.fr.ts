import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  BOILER_MAINTENANCE_DECREE_SOURCE,
  BOILER_MAINTENANCE_ORDER_SOURCE,
  BOILER_SERVICE_CERTIFICATE_TEMPLATE_PDF_PATH,
  BOILER_SERVICE_CERTIFICATE_TEMPLATE_UPDATED_AT,
  BOILER_SERVICE_CERTIFICATE_TEMPLATE_XLSX_PATH,
} from '~/core/constants/freeTemplates/boilerServiceCertificate/pageShared'
import { BOILER_MAINTENANCE_SOURCE } from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const BOILER_SERVICE_CERTIFICATE_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Attestation entretien chaudière${NBSP}: modèle gratuit PDF + Excel`,
    description: `Attestation d’entretien de chaudière${NBSP}: modèle gratuit en PDF et Excel, avec les mentions de l’arrêté de 2009, la phrase CO et un carnet des visites.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle d’attestation d’entretien annuel de chaudière et de carnet des visites',
  },
  breadcrumbLabel: 'Attestation d’entretien de chaudière',
  shareImage: {
    titleLines: ['Attestation d’entretien', 'de chaudière gratuite'],
    highlight: 'Attestation d’entretien',
    subtitle: 'Attestation et carnet des visites en PDF et Excel, mesure du CO, rendement, conseils, relances',
    badge: 'Gratuit, sans inscription',
    icon: 'flame',
    alt: `Modèle d’attestation d’entretien de chaudière gratuit${NBSP}: attestation et carnet des visites en PDF et Excel, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Attestation d’entretien de chaudière',
    titleAfter: `${NBSP}: modèle gratuit PDF et Excel (+ carnet des visites)`,
    reassurances: [
      'Attestation + carnet des visites',
      'Excel avec phrase CO et relances calculées',
      'Sans inscription ni e-mail',
    ],
    aboutTitle: 'À propos du modèle',
    description: `Une attestation d’entretien annuel de chaudière prête à remplir, pour un chauffagiste, un plombier-chauffagiste ou une entreprise de maintenance. Elle reprend une à une les mentions de l’arrêté du 15 septembre 2009${NBSP}: chaudière, points contrôlés, mesure du monoxyde de carbone, rendement, émissions, classe énergétique et conseils. Le carnet garde la trace de chaque visite, année après année, et l’Excel liste les clients à relancer à la date anniversaire.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai lu le décret et l’arrêté sur l’entretien des chaudières, annexe par annexe, pour que l’attestation porte toutes les mentions demandées.',
    updatedAt: BOILER_SERVICE_CERTIFICATE_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les chauffagistes, les plombiers-chauffagistes et les entreprises de maintenance. Deux fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime, l’Excel calcule et tient vos relances.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: BOILER_SERVICE_CERTIFICATE_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: BOILER_SERVICE_CERTIFICATE_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 feuilles, phrase CO et relances calculées',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à votre entreprise. Il ne remplace ni la notice du fabricant ni les normes d’entretien citées par l’arrêté.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Une attestation, un carnet des visites et une liste de relance',
    intro:
      'Le PDF tient l’attestation sur une page A4 et le carnet des visites sur la seconde. L’Excel reprend les deux et ajoute la liste des clients à relancer. Il écrit pour vous la phrase sur le monoxyde de carbone, la date limite de remise et l’échéance du prochain entretien.',
    documents: [
      {
        title: 'Attestation d’entretien',
        format: 'Page 1 du PDF, feuille « Attestation » de l’Excel',
        items: [
          'En-tête de l’entreprise, n° d’attestation, date de la visite, technicien, date d’établissement',
          'Commanditaire, adresse de l’installation, local de la chaudière, n° de contrat d’entretien',
          `Chaudière${NBSP}: énergie (gaz, fioul, bois, charbon, multi-combustible), marque, modèle, type, n° de série, mise en service, puissance, évacuation, brûleur, dates du dernier entretien et du dernier ramonage`,
          'Points contrôlés selon l’annexe 1 de l’arrêté, en cases à cocher (chaudière, circuit d’eau, régulation), appareils de mesure utilisés',
          'Mesure du CO avec les trois phrases de l’arrêté, rendement et émissions face aux valeurs de référence, classe énergétique et tableau des solutions de remplacement',
          'Conseils en trois rubriques, signature du technicien, cachet, rappel de la remise sous 15 jours et de la conservation 2 ans',
        ],
      },
      {
        title: 'Carnet des visites',
        format: 'Page 2 du PDF, feuille « Carnet des visites » de l’Excel',
        items: [
          'Le commanditaire et la chaudière en tête, une fois pour toutes (repris de l’attestation dans l’Excel)',
          `Une ligne par année civile${NBSP}: date de la visite, technicien, CO en ppm, situation, rendement, classe, ramonage, attestation remise le, travaux à prévoir`,
          'Dépannages et travaux entre deux visites, avec le n° de bon ou de facture',
          `Rappels${NBSP}: échéances, méthode de mesure du CO, tableau 12 de l’arrêté pour la classe énergétique`,
          `Dans l’Excel${NBSP}: délai de remise calculé et signalé au-delà de 15 jours, prochain entretien au plus tard le 31 décembre de l’année suivante`,
        ],
      },
      {
        title: 'Clients à relancer',
        format: 'Feuille « Clients à relancer » de l’Excel',
        items: [
          `Une ligne par client, 60 lignes${NBSP}: nom, téléphone, e-mail, adresse, chaudière, dernier entretien`,
          'Date anniversaire et date de relance calculées, 30 jours avant par défaut, délai modifiable',
          'Entretien à faire avant le 31 décembre de l’année civile suivante, comptée depuis la mise en service pour une chaudière neuve',
          `Statut calculé${NBSP}: à relancer, en retard, échéance dépassée, relancé, rendez-vous fixé${NBSP}; compteurs en haut de la feuille et filtre par statut`,
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir l’attestation en quatre étapes',
    intro:
      'Dans l’Excel, seules les cases blanches se saisissent. Les cases grisées se calculent toutes seules, et des listes déroulantes évitent les fautes de frappe sur l’énergie, le type et l’évacuation.',
    steps: [
      {
        label: 'Étape 1',
        title: 'Vos coordonnées et la chaudière, une fois par client',
        description:
          'Remplissez l’en-tête de l’entreprise, le commanditaire et la fiche de la chaudière (énergie, type, année de fabrication, puissance), puis enregistrez une copie du fichier par client. L’année suivante, seules la visite et les mesures changent.',
      },
      {
        label: 'Étape 2',
        title: 'Les points contrôlés et la mesure du CO',
        description: `Cochez les opérations faites selon l’énergie de la chaudière, puis notez la marque et la référence de vos appareils de mesure. Saisissez la mesure de monoxyde de carbone en ppm${NBSP}: l’Excel écrit la phrase que l’arrêté impose de reporter.`,
      },
      {
        label: 'Étape 3',
        title: 'Rendement, émissions et conseils',
        description:
          'Reportez le rendement et les émissions lus dans les tableaux de l’arrêté. Les références des émissions se remplissent d’après l’énergie, et la classe énergétique est proposée d’après le tableau 12, à vérifier. Écrivez vos conseils dans les trois rubriques.',
      },
      {
        label: 'Étape 4',
        title: 'Signer, remettre sous 15 jours, noter au carnet',
        description:
          'Signez, tamponnez et remettez l’attestation au commanditaire dans les 15 jours, sur papier ou par e-mail. Ajoutez la visite au carnet et mettez à jour la date du dernier entretien dans la liste des clients à relancer.',
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Les mentions que le modèle prévoit déjà',
    intro: `Six règles de l’entretien des chaudières passent par l’attestation. Le modèle leur réserve une case, une ligne ou une formule. Ce résumé n’est pas un conseil juridique${NBSP}: les textes en lien font foi.`,
    facts: [
      {
        contextLabel: `De 4 à 400${NBSP}kW`,
        title: 'Un entretien chaque année civile',
        text: `Chaudières au gaz, au fioul ou à combustible solide de 4 à 400${NBSP}kW${NBSP}: un entretien par année civile, par un professionnel qualifié. Après une installation ou un remplacement, le premier a lieu au plus tard l’année civile suivante. Le carnet et la liste de relance suivent cette échéance.`,
        sourceName: BOILER_MAINTENANCE_DECREE_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_DECREE_SOURCE.url,
      },
      {
        contextLabel: 'Dans les 15 jours',
        title: 'L’attestation remise au commanditaire, gardée 2 ans',
        text: 'La personne qui a fait l’entretien établit l’attestation dans les 15 jours suivant sa visite et la remet au commanditaire de l’entretien, qui la conserve au moins 2 ans. L’Excel calcule la date limite de remise, le carnet garde la date de remise.',
        sourceName: BOILER_MAINTENANCE_DECREE_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_DECREE_SOURCE.url,
      },
      {
        contextLabel: 'Locataire ou propriétaire',
        title: 'Qui fait faire l’entretien',
        text: `Chaudière individuelle louée${NBSP}: le locataire fait appel au chauffagiste qualifié de son choix, sauf si le bail en charge le bailleur. Chaudière collective${NBSP}: le propriétaire ou le syndicat des copropriétaires. C’est lui, le « commanditaire » de l’attestation.`,
        sourceName: BOILER_MAINTENANCE_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_SOURCE.url,
      },
      {
        contextLabel: 'Annexe 5 de l’arrêté',
        title: 'Le contenu minimum de l’attestation',
        text: 'Commanditaire, adresse de l’installation, chaudière (marque, modèle, énergie, évacuation, n° de série, mise en service, puissance), dates du dernier entretien et du dernier ramonage, points contrôlés, appareils de mesure, résultats, conseils. Une attestation par chaudière, l’original peut être dématérialisé.',
        sourceName: BOILER_MAINTENANCE_ORDER_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_ORDER_SOURCE.url,
      },
      {
        contextLabel: `Seuils de 10 et 50${NBSP}ppm`,
        title: 'La mesure du monoxyde de carbone',
        text: `Mesuré dans la pièce de la chaudière, après les réglages. Moins de 10${NBSP}ppm${NBSP}: « La situation est normale ». De 10 à moins de 50${NBSP}ppm${NBSP}: anomalie, tirage du conduit et ventilation à examiner. 50${NBSP}ppm ou plus${NBSP}: danger grave, chaudière à l’arrêt. L’Excel écrit la phrase exacte.`,
        sourceName: BOILER_MAINTENANCE_ORDER_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_ORDER_SOURCE.url,
      },
      {
        contextLabel: 'Rendement, émissions, conseils',
        title: 'Une comparaison avec la référence',
        text: `Rendement et émissions se lisent dans les tableaux de l’arrêté, puis se comparent à une référence${NBSP}: au gaz et au fioul, une chaudière à condensation de même puissance et 35 ou 90${NBSP}mg/kWh d’oxydes d’azote. Sous 70${NBSP}kW, la classe énergétique figure aussi. Les conseils restent indicatifs.`,
        sourceName: BOILER_MAINTENANCE_ORDER_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_ORDER_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Attestation d’entretien de chaudière${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle d’attestation d’entretien est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Les deux fichiers se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne « modèle proposé par Dibodev » en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Qui doit fournir l’attestation d’entretien de chaudière${NBSP}?`,
        answer: `Le professionnel qui a fait l’entretien. Il l’établit dans les 15 jours suivant sa visite et la remet à celui qui a commandé l’entretien${NBSP}: l’occupant pour une chaudière individuelle, sauf si le bail en charge le bailleur, le propriétaire ou le syndicat des copropriétaires pour une chaudière collective. Elle peut être envoyée par e-mail.`,
      },
      {
        question: `Combien de temps conserver l’attestation d’entretien${NBSP}?`,
        answer: `Au moins 2 ans pour celui qui l’a reçue, qui la tient à la disposition des agents de contrôle. De votre côté, l’arrêté vous permet d’en garder une copie pendant deux ans, sur papier ou en fichier. Le carnet des visites du modèle, lui, garde toutes les années.`,
      },
      {
        question: `Que faire si la mesure de CO dépasse 10${NBSP}ppm${NBSP}?`,
        answer: `De 10 à moins de 50${NBSP}ppm, la situation est anormale${NBSP}: vous prévenez l’usager que le tirage du conduit de fumée et la ventilation du local doivent être examinés, pendant la visite ou lors d’une intervention à part. À 50${NBSP}ppm ou plus, c’est un danger grave et immédiat${NBSP}: vous lui enjoignez de garder la chaudière à l’arrêt jusqu’à sa remise en service. La phrase correspondante figure sur l’attestation.`,
      },
      {
        question: `Comment remplir le rendement et les émissions${NBSP}?`,
        answer: `L’arrêté prévoit une évaluation à l’aide de ses tableaux${NBSP}: le rendement selon l’énergie, l’âge et la puissance ou le type de la chaudière (annexe 2), les émissions dans l’annexe 3. Vous les comparez ensuite aux références, par exemple une chaudière à condensation de même puissance pour le rendement au gaz ou au fioul. Dans l’Excel, les références des émissions se remplissent d’après l’énergie choisie.`,
      },
      {
        question: `Faut-il une attestation par chaudière${NBSP}?`,
        answer:
          'Oui. Dans un logement ou un local équipé de plusieurs chaudières, l’arrêté demande une attestation pour chacune des chaudières entretenues. Tenez aussi un carnet des visites par chaudière, pour retrouver ses mesures d’une année sur l’autre.',
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Sur la feuille « Attestation », vous choisissez l’énergie, le type et l’évacuation dans des listes, puis saisissez la mesure de CO${NBSP}: la phrase de l’arrêté s’écrit seule, comme la date limite de remise, l’échéance du prochain entretien, les références des émissions et la classe énergétique proposée. Le carnet calcule le délai de remise de chaque attestation. La feuille « Clients à relancer » calcule la date anniversaire, la date de relance et le statut de chaque client.`,
      },
      {
        question: `Et quand les contrats d’entretien se multiplient${NBSP}?`,
        answer:
          'Un fichier par client et une liste de relance suffisent tant que les contrats restent peu nombreux. Au-delà, les logiciels pour plombiers-chauffagistes regroupent contrats d’entretien, visites, attestations et relances, avec l’historique de chaque appareil. Le test de la page outil vous dit lequel choisir, avec les prix 2026 des logiciels du marché.',
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand les attestations, les carnets et les relances de vos contrats d’entretien se recopient d’un fichier à l’autre, un outil qui les enchaîne vous rend des heures. Décrivez-moi votre activité${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels pour chauffagistes',
  },
}
