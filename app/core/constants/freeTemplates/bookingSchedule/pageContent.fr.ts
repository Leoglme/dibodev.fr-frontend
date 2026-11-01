import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { BOOKING_SCHEDULE_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/bookingSchedule/pageShared'
import {
  CANOE_KAYAK_SAFETY_SOURCE,
  LEISURE_ACTIVITY_NO_WITHDRAWAL_SOURCE,
  LEISURE_BOOKING_TEMPLATE_PDF_PATH,
  LEISURE_BOOKING_TEMPLATE_XLSX_PATH,
  PAID_SPORTS_INSTRUCTOR_SOURCE,
  SPORTS_FACILITY_DISPLAY_SOURCE,
} from '~/core/constants/tools/leisureBookingSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const BOOKING_SCHEDULE_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Planning de réservations loisirs${NBSP}: modèle Excel gratuit`,
    description: `Planning de réservations loisirs${NBSP}: modèle Excel gratuit, places et soldes calculés, avec fiche d’inscription et tableau des secours en PDF. Sans inscription.`,
    inLanguage: 'fr-FR',
    schemaAbout:
      'Modèle de planning des réservations, de fiche d’inscription et de tableau des secours pour les activités de loisirs',
  },
  breadcrumbLabel: 'Planning de réservation',
  shareImage: {
    titleLines: ['Planning de réservations', 'loisirs gratuit'],
    highlight: 'Planning de réservations',
    subtitle: 'Planning des créneaux et des acomptes en Excel, fiche d’inscription et tableau des secours en PDF',
    badge: 'Gratuit, sans inscription',
    icon: 'tent',
    alt: `Modèle de planning de réservation gratuit pour les activités de loisirs${NBSP}: planning des créneaux et des acomptes en Excel, fiche d’inscription et tableau des secours en PDF, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Planning de réservations loisirs',
    titleAfter: `${NBSP}: modèle Excel gratuit (+ fiche d’inscription)`,
    reassurances: [
      'Planning + fiche d’inscription + tableau des secours',
      'Excel avec places et soldes calculés',
      'Sans inscription ni e-mail',
    ],
    aboutTitle: 'À propos du modèle',
    description: `Un planning des réservations de la saison, une fiche d’inscription et un tableau des secours prêts à remplir, pour un accrobranche, un escape game, une base nautique, un centre équestre, un karting ou une location de matériel de loisirs. L’Excel suit les créneaux, les réservations et les sommes versées d’avance, les moniteurs et les contrôles du matériel. Le PDF se signe à l’accueil, avec l’attestation «${NBSP}savoir nager${NBSP}» et l’autorisation d’un parent pour un mineur, et le tableau des secours s’affiche dans l’établissement.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. En alternance chez Izidoor de 2023 à 2025, j’ai développé la plateforme de réservation d’une trentaine de structures de sport et de loisirs, et j’ai lu les règles des arrhes, des moniteurs et des secours pour que les repères du modèle soient à jour.',
    updatedAt: BOOKING_SCHEDULE_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les accrobranches, escape games, bases nautiques, centres équestres, kartings et loueurs de matériel de loisirs. Deux fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime, l’Excel calcule les places restantes, les soldes et les alertes.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: LEISURE_BOOKING_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: LEISURE_BOOKING_TEMPLATE_XLSX_PATH,
        format: 'Excel, 4 feuilles, places, soldes et alertes calculés',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter avec votre fédération et votre assureur. Il ne remplace pas la relecture de vos conditions de vente par un juriste.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Quatre feuilles de suivi en Excel, deux pages à signer ou à afficher en PDF',
    intro: `L’Excel tient la saison sur quatre feuilles reliées entre elles${NBSP}: les créneaux, les réservations et les acomptes, les moniteurs et les contrôles du matériel. Le numéro de créneau et le nom du moniteur font le lien, et les places restantes, les soldes, les heures et les alertes se calculent dès que vous saisissez une ligne. Le PDF ne reprend pas ces feuilles${NBSP}: il tient sur deux pages A4 ce qui se signe ou s’affiche, la fiche d’inscription et de briefing, puis le tableau d’organisation des secours.`,
    documents: [
      {
        title: 'Planning des créneaux',
        format: 'Feuille « Créneaux » de l’Excel (1 sur 4), sans page dans le PDF',
        items: [
          `Saison ou semaine, site ou base, responsable, puis un créneau par ligne sur 60 lignes${NBSP}: n° (C01, C02…), date, activité, début et fin au format hh:mm, durée calculée`,
          'Capacité en places, inscrits calculés depuis la feuille « Réservations et acomptes » (adultes et enfants, sans les réservations annulées), places restantes en rouge si elles passent sous zéro, taux de remplissage',
          `Moniteur choisi dans la liste de la feuille «${NBSP}Moniteurs${NBSP}», matériel affecté, météo du créneau${NBSP}: OK, à surveiller ou annulé, avec la couleur qui va avec`,
          'Total de la période (places, inscrits, places restantes, remplissage) et nombre de créneaux annulés pour la météo',
        ],
      },
      {
        title: 'Réservations et acomptes',
        format: 'Feuille « Réservations et acomptes » de l’Excel (2 sur 4), sans page dans le PDF',
        items: [
          `Tableau des trois taux de TVA du loisir en haut de la feuille, 5,5, 10 et 20${NBSP}% avec les activités de chacun (BOFiP), repris dans la liste de la colonne TVA`,
          `Une ligne par réservation sur 150 lignes${NBSP}: réservée le, client, téléphone, n° de créneau (l’activité et la date se remplissent seules), adultes, enfants`,
          `Prix TTC, taux de TVA, montant HT et TVA calculés, versé d’avance, nature (vide ou «${NBSP}Arrhes${NBSP}», sinon «${NBSP}Acompte${NBSP}»), solde à encaisser calculé, mode de paiement (CB en ligne, CB sur place, espèces, chèque, virement, bon cadeau)`,
          `Canal (site, téléphone, sur place, plateforme), commission en${NBSP}% puis en euros calculée, statut (confirmée, annulée client, annulée météo, reportée), somme rendue au client et forme du rendu (remboursement ou avoir)`,
          `Bilan de la période${NBSP}: chiffre d’affaires TTC des réservations non annulées, arrhes et acomptes encaissés, soldes à encaisser sur place, commissions des canaux, réservations annulées pour la météo et sommes rendues`,
        ],
      },
      {
        title: 'Moniteurs',
        format: 'Feuille « Moniteurs » de l’Excel (3 sur 4), sans page dans le PDF',
        items: [
          `15 lignes${NBSP}: moniteur (nom exact), diplôme ou qualification, n° de carte professionnelle, date de délivrance ou de renouvellement, téléphone`,
          `Fin de validité calculée 5 ans après la délivrance, et alerte «${NBSP}À jour${NBSP}», «${NBSP}À renouveler${NBSP}» 90 jours avant l’échéance ou «${NBSP}Carte expirée${NBSP}», en orange ou en rouge`,
          'Créneaux et heures comptés depuis la feuille « Créneaux », honoraires par heure saisis, honoraires dus calculés, totaux en bas',
          `Le nom écrit ici alimente la liste des moniteurs du planning${NBSP}: une seule orthographe, et ses heures se comptent seules`,
        ],
      },
      {
        title: 'Contrôles du matériel',
        format: 'Feuille « Contrôles du matériel » de l’Excel (4 sur 4), sans page dans le PDF',
        items: [
          `40 lignes${NBSP}: équipement ou EPI (harnais, longe, casque, gilet, kayak, kart…), n° de série ou de lot, mise en service, organisme ou contrôleur, observations`,
          'Dernier contrôle, périodicité en mois (de 1 à 120, celle de la notice ou de votre organisme), prochain contrôle calculé',
          `Résultat (conforme, à réparer, réformé) et alerte calculée${NBSP}: à jour, dans moins de 30 jours, en retard${NBSP}; un équipement réformé est barré`,
          'Compte des contrôles en retard, et rappel du gilet de 50 newtons au moins en canoë-kayak',
        ],
      },
      {
        title: 'Fiche d’inscription et de briefing',
        format: 'Page 1 du PDF, une fiche par participant, sans feuille dans l’Excel',
        items: [
          `Structure, date de l’activité, créneau, n° de réservation, moniteur, puis le participant${NBSP}: nom, date de naissance, téléphone, e-mail, personne à prévenir en cas d’accident, groupe ou accompagnateur`,
          'Activité à cocher (accrobranche, escape game, canoë-kayak, équitation, karting ou location, autre), niveau (débutant, déjà pratiqué, confirmé), parcours ou itinéraire, points à signaler au moniteur',
          `Réservation et paiement${NBSP}: prix TTC, versé d’avance, nature (arrhes par défaut ou acompte), solde à régler sur place, mode de paiement ou n° de bon cadeau, réservé par (site, téléphone, plateforme)`,
          `Briefing en 6 cases${NBSP}: consignes de sécurité, équipement remis et vérifié, parcours et limites, signal d’alerte, conditions du jour, règles du site`,
          `Attestation «${NBSP}savoir nager 25${NBSP}mètres et s’immerger${NBSP}» pour le canoë-kayak et la voile, autorisation du représentant légal pour un mineur, signatures du participant, du parent et du moniteur avec son n° de carte professionnelle`,
        ],
      },
      {
        title: 'Tableau d’organisation des secours',
        format: 'Page 2 du PDF, à afficher dans l’établissement, sans feuille dans l’Excel',
        items: [
          'Numéros d’urgence en gros caractères (15, 18, 112), établissement (nom, adresse)',
          `Organisation sur place${NBSP}: responsable des secours et remplaçant, emplacement de la trousse de secours, du moyen d’alerte et du défibrillateur, adresse exacte et point d’accès des secours, repère pour un site extérieur, hôpital le plus proche`,
          `Conduite à tenir en 4 étapes${NBSP}: protéger, alerter, secourir, prévenir (un accident grave est signalé au préfet)`,
          `Les 6 affichages obligatoires avec une case «${NBSP}affiché${NBSP}» et une date de mise à jour${NBSP}: diplômes et cartes professionnelles, textes de sécurité, attestation d’assurance, information sur le signalement des violences, tableau des secours, prix TTC des prestations`,
          'Documents à tenir à disposition (registre public d’accessibilité, conditions de vente, médiateur de la consommation, registre des contrôles du matériel), date d’affichage et signature du responsable',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir le planning en six étapes',
    intro:
      'Dans l’Excel, seules les cases blanches se saisissent. Les places restantes, les soldes, les heures des moniteurs et les alertes se calculent tout seuls.',
    steps: [
      {
        label: 'Étape 1',
        title: 'Votre structure et la saison',
        description:
          'Remplissez l’en-tête de chaque feuille (nom, adresse, téléphone), la saison ou la semaine, le site et le responsable, puis enregistrez le fichier comme modèle. Chaque saison part de cette copie.',
      },
      {
        label: 'Étape 2',
        title: 'Les moniteurs, puis les créneaux',
        description: `Dans «${NBSP}Moniteurs${NBSP}», écrivez chaque encadrant avec sa carte professionnelle et sa date de délivrance${NBSP}: la fin de validité et l’alerte s’affichent. Dans «${NBSP}Créneaux${NBSP}», une ligne par créneau avec la date, l’activité, le début, la fin et la capacité, et le moniteur choisi dans la liste.`,
      },
      {
        label: 'Étape 3',
        title: 'Une ligne par réservation',
        description:
          'Client, téléphone, n° de créneau (l’activité et la date se remplissent seules), adultes et enfants, prix TTC et taux de TVA. Les inscrits et les places restantes du créneau se mettent à jour aussitôt.',
      },
      {
        label: 'Étape 4',
        title: 'L’avance, le canal et le statut',
        description: `Notez la somme versée d’avance et sa nature (vide = arrhes), le mode de paiement, le canal et sa commission en${NBSP}%${NBSP}: le solde à encaisser et la commission en euros se calculent. Une réservation passée en «${NBSP}Annulée météo${NBSP}» sort des inscrits, son solde tombe à zéro, et vous notez la somme rendue.`,
      },
      {
        label: 'Étape 5',
        title: 'Les contrôles du matériel',
        description:
          'Pour chaque harnais, gilet, kayak ou kart, saisissez le dernier contrôle, sa périodicité en mois et son résultat. Le prochain contrôle se calcule, et l’alerte passe en orange 30 jours avant, en rouge en retard.',
      },
      {
        label: 'Étape 6',
        title: 'La fiche signée, le tableau affiché',
        description: `Imprimez une fiche par participant${NBSP}: activité, niveau, cases du briefing cochées au fur et à mesure, attestation «${NBSP}savoir nager${NBSP}» en canoë-kayak et en voile, signature du parent pour un mineur. Remplissez le tableau des secours une fois, affichez-le et cochez les affichages obligatoires.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Les repères que le modèle prévoit déjà',
    intro:
      'Quatre règles d’un site de loisirs passent par ses réservations, ses fiches et ses affichages. Le modèle leur réserve une colonne, une case ou une page.',
    facts: [
      {
        contextLabel: 'Code de la consommation, L221-28 et L214-1',
        title: 'Pas de rétractation, et une avance qui vaut arrhes',
        text: `Une activité de loisirs réservée pour une date précise n’ouvre pas de droit de rétractation. Sauf clause contraire, la somme versée d’avance vaut arrhes${NBSP}: le client qui renonce la perd, le professionnel qui se dédit la rend au double. La fiche et l’Excel notent la nature de chaque somme, arrhes par défaut.`,
        sourceName: LEISURE_ACTIVITY_NO_WITHDRAWAL_SOURCE.name,
        sourceUrl: LEISURE_ACTIVITY_NO_WITHDRAWAL_SOURCE.url,
      },
      {
        contextLabel: 'Code du sport, L212-1 et L212-11',
        title: 'Des moniteurs diplômés, déclarés, avec une carte à jour',
        text: `Encadrer contre rémunération exige un diplôme et une déclaration auprès de l’administration, qui délivre la carte professionnelle, à renouveler tous les 5 ans. Une copie de la carte et du diplôme de chaque encadrant est affichée dans l’établissement. La feuille «${NBSP}Moniteurs${NBSP}» calcule la fin de validité et prévient 90 jours avant.`,
        sourceName: PAID_SPORTS_INSTRUCTOR_SOURCE.name,
        sourceUrl: PAID_SPORTS_INSTRUCTOR_SOURCE.url,
      },
      {
        contextLabel: 'Code du sport, A322-44 et A322-3-1',
        title: `Canoë-kayak${NBSP}: annuler quand l’eau ou la météo l’impose`,
        text: `L’exploitant adapte ou annule la sortie si la météo ou l’état de l’eau met les pratiquants en péril. En canoë-kayak et en voile, chacun atteste savoir nager 25${NBSP}mètres et s’immerger (pour un mineur, son représentant légal signe), sinon il passe le test Pass-nautique. La fiche porte l’attestation, le planning a sa colonne météo.`,
        sourceName: CANOE_KAYAK_SAFETY_SOURCE.name,
        sourceUrl: CANOE_KAYAK_SAFETY_SOURCE.url,
      },
      {
        contextLabel: 'Code du sport, R322-4 et R322-5',
        title: 'Un tableau des secours et des affichages obligatoires',
        text: `L’établissement a une trousse de secours, un moyen d’alerte et un tableau d’organisation des secours affiché. Il affiche aussi les copies des diplômes et des cartes, les textes de sécurité, l’attestation d’assurance et, depuis 2025, l’information sur les dispositifs de signalement des violences. Tout accident grave est signalé au préfet. La page 2 du PDF est ce tableau, avec la liste des affichages à cocher.`,
        sourceName: SPORTS_FACILITY_DISPLAY_SOURCE.name,
        sourceUrl: SPORTS_FACILITY_DISPLAY_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Modèle de planning de réservation${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de planning de réservation est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Les deux fichiers se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne « modèle proposé par Dibodev » en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Acompte ou arrhes${NBSP}: que noter sur la fiche et dans l’Excel${NBSP}?`,
        answer: `Sans clause contraire, une somme versée d’avance vaut arrhes${NBSP}: le client qui renonce la perd, le professionnel qui se dédit la rend au double (code de la consommation, L214-1). Une activité réservée pour une date précise n’ouvre pas de droit de rétractation (L221-28). Le modèle laisse donc la nature vide pour des arrhes et vous fait cocher «${NBSP}Acompte${NBSP}» seulement si vos conditions de vente le prévoient${NBSP}; le bilan de l’Excel sépare les deux. Quand c’est vous qui annulez pour la météo, ce que vous rendez dépend de vos conditions de vente${NBSP}: faites-les relire par un juriste.`,
      },
      {
        question: `Quelle TVA appliquer sur une réservation d’activité de loisirs${NBSP}?`,
        answer: `Elle dépend de l’activité (BOFiP, BOI-TVA-LIQ-30-20-50)${NBSP}: 10${NBSP}% pour les droits d’entrée (accrobranche, tyrolienne, escape game, laser game, paintball, parc de loisirs), 20${NBSP}% pour le karting, l’escalade, les sports nautiques, la location de matériel et un cours vendu seul, 5,5${NBSP}% pour certaines activités équestres. Un forfait qui mêle plusieurs activités suit un seul taux, celui de l’activité principale. La feuille «${NBSP}Réservations et acomptes${NBSP}» reprend ces trois taux et calcule le montant HT et la TVA à partir du prix TTC.`,
      },
      {
        question: `Que doit afficher un établissement d’activités de loisirs${NBSP}?`,
        answer: `Le tableau d’organisation des secours, les copies des diplômes et des cartes professionnelles des encadrants, les textes de sécurité de vos activités, l’attestation d’assurance de responsabilité civile et, depuis le décret du 16 mai 2025, l’information sur les dispositifs de signalement des violences (code du sport, R322-4 et R322-5), plus les prix TTC des prestations sur un document unique à l’accueil. La page 2 du PDF reprend cette liste avec une case «${NBSP}affiché${NBSP}» et une date de mise à jour pour chaque document.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Vous créez vos créneaux (60 lignes) et vos moniteurs (15 lignes), puis une ligne par réservation (150 lignes) avec son n° de créneau, ses participants, son prix TTC, son taux de TVA et la somme versée d’avance. Les inscrits et les places restantes de chaque créneau, le montant HT, le solde à encaisser, la commission du canal, les heures et les honoraires de chaque moniteur se calculent tout seuls, sans les réservations annulées. La feuille «${NBSP}Contrôles du matériel${NBSP}» (40 lignes) calcule le prochain contrôle et signale les retards. Chaque feuille s’imprime en A4 paysage.`,
      },
      {
        question: `Et quand les réservations se multiplient${NBSP}?`,
        answer: `Un fichier Excel suffit tant que les réservations arrivent au téléphone et à l’accueil. Dès que vos clients réservent en ligne, les logiciels de réservation du loisir prennent le relais${NBSP}: Bookeo de 29,95 à 89,95${NBSP}€ par mois sans commission, Activiteez dès 19${NBSP}€ HT par mois plus 2${NBSP}% en ligne, Yoplanning à 0${NBSP}€ plus 5${NBSP}% ou de 19 à 59${NBSP}€ plus 2,5${NBSP}%, Booky de 49 à 149${NBSP}€ HT par mois. Si votre organisation sort de leur cadre (moniteurs, matériel, météo, plusieurs sites), le test de la page outil vous dit quoi choisir, commissions comprises.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand les réservations arrivent du site, du téléphone et des plateformes en même temps, et qu’un orage oblige à reporter tout un créneau et à prévenir chaque inscrit, un outil qui tient le planning, les paiements et les messages vous rend des heures. Décrivez-moi votre activité${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels de réservation',
  },
}
