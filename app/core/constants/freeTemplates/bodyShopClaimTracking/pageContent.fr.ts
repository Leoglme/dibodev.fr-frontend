import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { BODY_SHOP_CLAIM_TRACKING_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/bodyShopClaimTracking/pageShared'
import {
  BODY_SHOP_TEMPLATE_PDF_PATH,
  BODY_SHOP_TEMPLATE_XLSX_PATH,
  CIRCULAR_ECONOMY_PARTS_SOURCE,
  FREE_CHOICE_OF_REPAIRER_SOURCE,
  GARAGE_RULES_SOURCE,
  VEHICLE_APPRAISAL_SOURCE,
} from '~/core/constants/tools/bodyShopSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const BODY_SHOP_CLAIM_TRACKING_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Suivi de sinistre carrosserie${NBSP}: modèle gratuit (+ devis)`,
    description: `Suivi de sinistre carrosserie${NBSP}: modèle gratuit en Excel et PDF, avec devis carrosserie. Pièces de réemploi, part assureur, relevé photos. Sans inscription.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle de fiche de suivi de sinistre et de devis pour carrosserie',
  },
  breadcrumbLabel: 'Suivi de sinistre carrosserie',
  shareImage: {
    titleLines: ['Suivi de sinistre', 'carrosserie gratuit'],
    highlight: 'Suivi de sinistre',
    subtitle: 'Fiche de suivi de sinistre et devis en Excel et PDF, relevé photos, pièces de réemploi, part assureur',
    badge: 'Gratuit, sans inscription',
    icon: 'fileText',
    alt: `Suivi de sinistre carrosserie gratuit${NBSP}: fiche de suivi de sinistre et devis avec relevé photos en Excel et PDF, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Suivi de sinistre carrosserie',
    titleAfter: `${NBSP}: modèle gratuit (+ devis)`,
    reassurances: [
      'Fiche de suivi de sinistre + devis',
      'Excel avec totaux et délais calculés',
      'Sans inscription ni e-mail',
    ],
    aboutTitle: 'À propos du modèle',
    description: `Un devis de carrosserie et une fiche de suivi de sinistre prêts à remplir, pour un carrossier seul ou une carrosserie-peinture indépendante. Le devis porte les taux tôlerie et peinture, le relevé des dommages photo par photo, la nature de chaque pièce, la part de l’assureur et celle du client. La fiche suit le dossier de l’entrée du véhicule au paiement de l’assureur${NBSP}: expert, pièces, cabine, véhicule de prêt, facture, relances.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai lu les règles du garage, des pièces de réemploi, du libre choix du réparateur et de l’expertise pour que les mentions soient à jour.',
    updatedAt: BODY_SHOP_CLAIM_TRACKING_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les carrossiers et les carrosseries-peinture indépendantes. Deux fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime, l’Excel calcule.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: BODY_SHOP_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: BODY_SHOP_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 feuilles, totaux et délais calculés',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à votre atelier. Il ne remplace ni le chiffrage normé demandé par l’expert ni l’avis de votre comptable.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Un devis et une fiche de suivi de sinistre, en PDF et en Excel',
    intro: `Le PDF reprend les deux documents sur deux pages A4. L’Excel les reprend sur deux feuilles, avec les totaux, les parts assureur et client, l’écart devis / accord et les jours d’immobilisation calculés, et ajoute une troisième feuille${NBSP}: le planning de la cabine et le registre des véhicules de prêt.`,
    documents: [
      {
        title: 'Devis carrosserie',
        format: 'Page 1 du PDF, feuille « Devis carrosserie » de l’Excel',
        items: [
          `En-tête de la carrosserie (nom, adresse, SIREN, n° de TVA ou « TVA non applicable »), n° de devis, date, date de validité, puis les taux horaires tôlerie, peinture et mécanique affichés TTC avec le mode de calcul${NBSP}; l’Excel saisit les taux HT, la TVA à 20${NBSP}% par défaut, et calcule les taux TTC`,
          `Client et véhicule (nom, téléphone, e-mail, immatriculation, VIN, marque et modèle, kilométrage, 1re immatriculation, code peinture) et sinistre${NBSP}: date, assureur, n° de contrat, n° de sinistre, franchise annoncée, expert ou cabinet, expertise sur place ou à distance, libre choix du réparateur rappelé au client`,
          `Relevé des dommages en six lignes${NBSP}: n° de photo, zone, dommage, réparer ou remplacer, pièce de réemploi proposée (oui, non ou exception avec son motif)`,
          `Lignes de chiffrage${NBSP}: désignation, zone, nature de la pièce (neuve, réemploi, qualité équivalente, échange standard), quantité, prix unitaire HT, heures tôlerie, heures peinture, ingrédients, total HT`,
          `Totaux${NBSP}: pièces, main-d’œuvre tôlerie et peinture (heures × taux), ingrédients et petites fournitures, total HT, TVA 20${NBSP}%, total TTC, part de l’assureur, part du client (franchise, vétusté), cession de créance oui / non`,
          'Six accords du client à cocher (choix sur les pièces de réemploi recueilli le, délai d’immobilisation estimé, véhicule de prêt et ses garanties, cession de créance, seuil d’appel pour travaux supplémentaires, bon pour accord), signatures et mentions légales',
        ],
      },
      {
        title: 'Fiche de suivi de sinistre',
        format: 'Page 2 du PDF, feuille « Suivi des sinistres » de l’Excel (une ligne par dossier)',
        items: [
          'N° de dossier, date d’entrée du véhicule, client, immatriculation, assureur, n° de sinistre, expert ou cabinet, expertise à distance ou sur place',
          `Dates clés${NBSP}: photos envoyées, devis envoyé et son montant, accord de l’expert et montant accordé, écart devis / accord (montant accordé − montant du devis, en rouge dans l’Excel quand l’expert accorde moins)`,
          `Pièces${NBSP}: référence, fournisseur, commandée le, reçue le, pièce manquante avec la date annoncée`,
          `Atelier${NBSP}: tôlerie, cabine de peinture, remontage et contrôle, restitution prévue et réelle, jours d’immobilisation (restitution réelle − date d’entrée, comptés jusqu’à aujourd’hui dans l’Excel tant que le véhicule n’est pas rendu)`,
          'Véhicule de prêt (immatriculation, dates, états des lieux au départ et au retour), facture, part assureur, part client, paiement de l’assureur, relances 1 et 2',
          `Statut du dossier en six états, de «${NBSP}en attente d’accord${NBSP}» à «${NBSP}payé, dossier clos${NBSP}»${NBSP}; dans l’Excel, un tableau de bord compte les dossiers ouverts, ceux en attente d’accord ou de pièces, l’encours assureurs, l’immobilisation moyenne et l’occupation de la cabine`,
        ],
      },
      {
        title: 'Planning de la cabine et registre des véhicules de prêt',
        format: 'Feuille « Cabine et véhicules de prêt » de l’Excel seulement, absente du PDF',
        items: [
          `Planning de la cabine de peinture sur une semaine, du lundi au samedi, matin et après-midi${NBSP}: véhicule, n° de dossier, peintre, étape (apprêt, base, vernis, séchage, complet), remarque`,
          `Taux d’occupation de la cabine calculé (créneaux utilisés ÷ 12 créneaux disponibles), repris dans le tableau de bord de la feuille «${NBSP}Suivi des sinistres${NBSP}»`,
          `Registre des véhicules de prêt${NBSP}: immatriculation, marque et modèle, assurance (contrat, garanties), client, n° de dossier, dates, kilométrage au départ et au retour`,
          'Jours prêtés calculés jusqu’à aujourd’hui tant que la date de retour est vide, états des lieux départ et retour (fait sans réserve, fait avec réserves, à faire)',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir le devis et ouvrir le dossier en six étapes',
    intro:
      'Dans l’Excel, seules les cases blanches se saisissent. Les totaux, les parts assureur et client, les écarts et les délais se calculent tout seuls.',
    steps: [
      {
        label: 'Étape 1',
        title: 'Vos coordonnées et vos taux horaires',
        description:
          'Remplissez l’en-tête (nom, adresse, SIREN, n° de TVA) et vos taux horaires tôlerie, peinture et mécanique, tels qu’ils sont affichés à la réception, puis enregistrez le fichier comme modèle. Dans l’Excel, les taux se saisissent HT et les taux TTC s’affichent à côté.',
      },
      {
        label: 'Étape 2',
        title: 'Le client, le véhicule et le sinistre',
        description:
          'Immatriculation, VIN, kilométrage et code peinture, puis l’assureur, le n° de sinistre, la franchise annoncée, l’expert et le mode d’expertise. Notez la date à laquelle le libre choix du réparateur a été rappelé au client.',
      },
      {
        label: 'Étape 3',
        title: 'Le relevé des dommages, photo par photo',
        description: `Une ligne par photo${NBSP}: la zone, le dommage, réparer ou remplacer, et si une pièce de réemploi est proposée. Quand elle ne l’est pas pour une pièce concernée, notez le motif de l’exception.`,
      },
      {
        label: 'Étape 4',
        title: `Le chiffrage${NBSP}: pièces, heures, ingrédients`,
        description:
          'Une ligne par pièce ou par opération, avec la nature de la pièce, la quantité, le prix unitaire HT, les heures tôlerie et peinture et les ingrédients. L’Excel multiplie les heures par vos taux et calcule le total HT de chaque ligne.',
      },
      {
        label: 'Étape 5',
        title: 'Les parts, les accords du client et la signature',
        description: `Saisissez la franchise et la vétusté${NBSP}: la part du client et celle de l’assureur suivent. Cochez les accords (pièces de réemploi, délai d’immobilisation, véhicule de prêt, cession de créance, seuil d’appel pour travaux supplémentaires), puis le client signe « Bon pour accord ».`,
      },
      {
        label: 'Étape 6',
        title: 'La fiche de suivi, dès l’entrée du véhicule',
        description: `Ouvrez le dossier avec son numéro et la date d’entrée, puis datez chaque étape au fil du dossier${NBSP}: photos et devis envoyés, accord de l’expert, pièces, cabine, restitution, facture et paiement. Dans l’Excel, une ligne par dossier et le statut à choisir dans la liste.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Les mentions que le modèle prévoit déjà',
    intro:
      'Quatre règles du carrossier passent par le devis et la fiche de suivi. Le modèle leur réserve une case, une colonne ou une mention.',
    facts: [
      {
        contextLabel: 'Arrêté du 27 mars 1987',
        title: 'Un taux tôlerie, un taux peinture, chacun affiché TTC',
        text: `Quand vos taux horaires diffèrent (mécanique, carrosserie, peinture), chacun est affiché TTC à l’extérieur et à la réception, avec le mode de calcul (temps passé ou barème consultable). Le devis reprend les trois taux et le mode de calcul en tête de page.`,
        sourceName: GARAGE_RULES_SOURCE.name,
        sourceUrl: GARAGE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Depuis le 1er octobre 2024',
        title: 'Le choix du client sur les pièces de réemploi, tracé et conservé 2 ans',
        text: `Pièces de carrosserie amovibles, vitrages non collés, optiques, garnissage${NBSP}: le client choisit entre pièce neuve et pièce issue de l’économie circulaire, sur un support durable, avant d’accepter le devis. Le double est conservé 2 ans. Le relevé des dommages note la pièce de réemploi proposée, et les accords du client datent son choix.`,
        sourceName: CIRCULAR_ECONOMY_PARTS_SOURCE.name,
        sourceUrl: CIRCULAR_ECONOMY_PARTS_SOURCE.url,
      },
      {
        contextLabel: 'Code des assurances, art. L211-5-1',
        title: 'Le libre choix du réparateur et la cession de créance',
        text: `L’assuré choisit son réparateur, et l’assureur le lui rappelle dès le premier contact pour déclarer le sinistre (arrêté du 17 juin 2016). Depuis décembre 2020, une clause qui lui interdit de vous céder sa créance d’indemnité est nulle (art. L211-5-2). Le devis a sa case «${NBSP}libre choix du réparateur rappelé au client${NBSP}» et sa ligne «${NBSP}cession de créance${NBSP}».`,
        sourceName: FREE_CHOICE_OF_REPAIRER_SOURCE.name,
        sourceUrl: FREE_CHOICE_OF_REPAIRER_SOURCE.url,
      },
      {
        contextLabel: 'Aucun délai légal pour le rapport',
        title: `L’assureur choisit l’expert «${NBSP}en moyenne dans les 15 jours${NBSP}»`,
        text: `L’assureur choisit l’expert, en moyenne dans les 15 jours suivant la déclaration, et l’expert intervient sur place ou sur photos pour les sinistres légers${NBSP}; aucun texte ne fixe le délai du rapport. Ne réparez pas avant son passage, sauf urgence. La fiche de suivi date l’envoi des photos et du devis, l’accord de l’expert et sa relance à date fixe.`,
        sourceName: VEHICLE_APPRAISAL_SOURCE.name,
        sourceUrl: VEHICLE_APPRAISAL_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Modèle de devis carrosserie${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de devis carrosserie est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Les deux fichiers se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne « modèle proposé par Dibodev » en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Comment répartir la part de l’assureur et la part du client${NBSP}?`,
        answer: `Le client ne règle que sa franchise et l’éventuelle vétusté, l’assureur règle le reste. Dans l’Excel, vous saisissez la franchise et la vétusté${NBSP}: la part du client les additionne, et la part de l’assureur est le total TTC moins cette part. Si le client vous cède sa créance d’indemnité (une clause du contrat qui l’interdit est nulle depuis décembre 2020, art. L211-5-2 du code des assurances), passez « cession de créance » à oui et facturez l’assureur directement pour sa part.`,
      },
      {
        question: `Faut-il proposer une pièce de réemploi sur chaque ligne${NBSP}?`,
        answer: `Non, seulement pour les catégories visées par le code de la consommation${NBSP}: pièces de carrosserie amovibles, vitrages non collés, optiques, garnissage. Vous pouvez ne pas en proposer si la pièce n’est pas disponible dans un délai compatible avec l’immobilisation, si la prestation est gratuite ou sous garantie, ou en cas de risque pour la sécurité, en notant le motif. Le relevé des dommages prévoit la colonne « oui / non / exception », et les accords du client datent son choix, dont le double est conservé 2 ans.`,
      },
      {
        question: `Ce devis remplace-t-il le chiffrage demandé par l’expert${NBSP}?`,
        answer: `Non. Quand le dossier passe par un assureur, l’expert attend un chiffrage normé produit par un chiffreur (Sidexa, GT Estimate, DAT…) à partir des temps et des pièces constructeur. Ce modèle sert au devis remis au client, au relevé photo par photo et au suivi du dossier, et il le rappelle dans ses mentions. Pour un client qui paie lui-même la réparation, il suffit.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Vous saisissez vos taux horaires HT, puis la quantité, le prix unitaire HT, les heures tôlerie et peinture et les ingrédients de chaque ligne${NBSP}: le total HT de la ligne, les totaux, la TVA, le total TTC et les parts assureur et client se calculent tout seuls. La feuille « Suivi des sinistres » tient tous les dossiers, une ligne chacun, et calcule l’écart devis / accord, les jours d’immobilisation (en rouge au-delà de 15 jours sur un dossier non clos) et l’encours assureurs. La feuille « Cabine et véhicules de prêt » calcule le taux d’occupation de la cabine et les jours prêtés.`,
      },
      {
        question: `Et quand les dossiers se multiplient${NBSP}?`,
        answer: `Un modèle Excel suffit pour quelques dossiers par semaine, jusqu’à une trentaine de dossiers ouverts en même temps. Au-delà, les logiciels d’atelier (Gest’Garage, TDV Agent, AutoProGestion) enchaînent devis, ordres de réparation et factures à partir de 19${NBSP}€ TTC par mois, et les DMS avec module carrosserie (EBP MéCa PRO, Fiducial, Repair Soft), sur devis, ajoutent les échanges Darva et la répartition assureur / client. Si votre organisation sort de leur cadre, le test de la page outil vous dit quoi choisir.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand le devis, la fiche de suivi, le planning de la cabine et le registre des prêts se recopient d’un fichier à l’autre, un outil qui les enchaîne vous rend des heures. Décrivez-moi votre atelier${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels pour carrosseries',
  },
}
