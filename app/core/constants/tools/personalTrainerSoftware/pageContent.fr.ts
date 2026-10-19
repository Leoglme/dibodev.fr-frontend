import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  GYM_MEMBERSHIP_RULES_SOURCE,
  HEALTH_DATA_SOURCE,
  PERSONAL_TRAINER_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  PERSONAL_TRAINER_PAGE_PROJECT_SLUG,
  PERSONAL_TRAINER_PAGE_RELATED_ARTICLE_SLUGS,
  PERSONAL_TRAINER_PAGE_SCREENSHOT_URL,
  PERSONAL_TRAINER_PAGE_UPDATED_AT,
  PERSONAL_TRAINER_TEMPLATE_PDF_PATH,
  PERSONAL_TRAINER_TEMPLATE_XLSX_PATH,
  SPORTS_EDUCATOR_DECLARATION_SOURCE,
} from '~/core/constants/tools/personalTrainerSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'

export const PERSONAL_TRAINER_PAGE_CONTENT_FR: DibodevSoftwareToolPageContent = {
  meta: {
    title: `Logiciel coach sportif${NBSP}: réservation, programmes, prix 2026`,
    description: `Harbiz, Hexfit, Eversports, Trafft${NBSP}: les prix 2026 des logiciels pour coachs sportifs et salles de musculation, un test gratuit en 6 questions et un modèle de bilan et de carnet de séances à télécharger.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Logiciel de gestion pour coachs sportifs et salles de musculation',
  },
  breadcrumbLabel: 'Logiciel coach sportif',
  shareImage: {
    titleLines: ['Quel logiciel pour un', `coach sportif${NBSP}?`],
    highlight: 'coach sportif',
    subtitle:
      'Six questions, les prix 2026 des logiciels pour coachs et salles de musculation et un modèle de carnet de séances gratuit',
    badge: 'Test gratuit, en 2 minutes',
    icon: 'dumbbell',
    alt: `Quel logiciel pour un coach sportif${NBSP}? Test gratuit en 6 questions, prix 2026 des logiciels et modèle de carnet de séances, sur dibodev.fr`,
  },
  hero: {
    titleBefore: 'Quel logiciel pour un ',
    titleHighlight: 'coach sportif',
    titleAfter: ` ou une salle de musculation${NBSP}?`,
    description:
      'Six questions sur votre équipe, vos lieux et votre activité. Coaching individuel, cours collectifs, suivi en ligne ou salle de musculation, le test vous dit quel type de logiciel choisir pour vos réservations, vos programmes et vos encaissements, et combien prévoir.',
    reassurances: ['2 minutes', 'Sans inscription ni e-mail', 'Résultat immédiat'],
    authorIntro: 'Test conçu par',
    authorBio:
      'développeur d’applications métier près de Rennes, passionné de musculation. Chez Izidoor, j’ai développé la plateforme de réservation d’une trentaine de structures de sport et de loisirs.',
    updatedAt: PERSONAL_TRAINER_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'logiciels',
    eyebrow: 'Prix publics 2026',
    title: 'Comparatif des logiciels pour coachs sportifs et salles de musculation et de leurs prix',
    intro:
      'Les tarifs affichés sur leur site par les éditeurs de logiciels de coaching et de réservation. Le prix dépend surtout du nombre de clients actifs ou de réservations par mois.',
    productColumnLabel: 'Logiciel',
    coverageColumnLabel: 'Ce qu’il gère',
    priceColumnLabel: 'Prix public',
    products: [
      {
        name: 'Harbiz',
        coverage:
          'Programmes d’entraînement, suivi des clients, application à votre nom (iOS et Android), paiements, communauté, assistant IA',
        price: `19 à 199${NBSP}€ par mois`,
        priceCondition: `14 à 149${NBSP}€ HT par mois payé à l’année${NBSP}; Basic jusqu’à 5 clients, Pro et My APP jusqu’à 50${NBSP}; 14 jours d’essai`,
      },
      {
        name: 'Hexfit',
        coverage:
          'Programmes, bibliothèque d’exercices, tests physiques, rendez-vous, application mobile, PDF pour les clients, nutrition en option',
        price: `19 à 250${NBSP}$ par mois`,
        priceCondition: `Prix affichés en dollars${NBSP}; Starter 5 clients actifs, Solo 15 à 30, Growth 40 à 150, Studio 500${NBSP}; 14 jours d’essai`,
      },
      {
        name: 'Eversports Manager',
        coverage:
          'Planning des cours, réservation et paiement en ligne (Stripe), abonnements et cartes, vente de produits, cours en direct',
        price: `36 à 169${NBSP}€ HT par mois`,
        priceCondition: `Payé à l’année, selon le nombre de réservations (49 à plus de 1 500 par mois)${NBSP}; application à votre marque sur devis`,
      },
      {
        name: 'Trafft',
        coverage:
          'Prise de rendez-vous en ligne, site de réservation, rappels, acomptes, cartes cadeaux, cours collectifs',
        price: 'Gratuit jusqu’à 100 rendez-vous par mois',
        priceCondition: `1 utilisateur en gratuit${NBSP}; formules payantes de 3 à 30 utilisateurs, tarifs non affichés sur la page${NBSP}; 14 jours d’essai`,
      },
      {
        name: 'Virtuagym',
        coverage:
          'Gestion des adhérents, abonnements et paiements, contrôle d’accès, programmes et nutrition, application',
        price: 'Sur demande',
        priceCondition: 'Tarifs communiqués après démonstration',
      },
    ],
    calloutEmphasizedIntro: `Avant de signer${NBSP}:`,
    calloutText:
      'faites passer une vraie semaine au logiciel. Une séance réservée et payée depuis votre site, le rappel la veille, le programme envoyé sur le téléphone du client, l’annulation tardive facturée selon vos règles, puis la facture de l’abonnement, sans rien ressaisir.',
    calloutFootnote: 'Tarifs relevés le 19 octobre 2026 sur les sites des éditeurs. Liste non exhaustive.',
  },
  rules: {
    anchorId: 'reglementation',
    eyebrow: 'Le point en 2026',
    title: `Carte professionnelle, abonnements, données de santé${NBSP}: ce que votre logiciel doit respecter en 2026`,
    intro: `Déclaration d’éducateur sportif, affichage des diplômes, information avant un abonnement, certificat médical, données de santé${NBSP}: les règles du coach et de la salle passent par ses fiches clients et ses contrats. Un bon logiciel les tient à jour pour vous.`,
    facts: [
      {
        contextLabel: 'Avant la première séance payée',
        title: 'La déclaration d’éducateur sportif',
        text: 'Enseigner, animer ou encadrer une activité physique contre rémunération impose de se déclarer auprès de l’administration, qui vérifie la qualification et l’absence d’interdiction d’encadrer, puis délivre la carte professionnelle.',
        sourceName: SPORTS_EDUCATOR_DECLARATION_SOURCE.name,
        sourceUrl: SPORTS_EDUCATOR_DECLARATION_SOURCE.url,
      },
      {
        contextLabel: 'Dans la salle',
        title: 'Diplômes et cartes affichés',
        text: 'Les copies des diplômes, titres et cartes professionnelles de chaque encadrant sont affichées, visibles du public, dans l’établissement.',
        sourceName: GYM_MEMBERSHIP_RULES_SOURCE.name,
        sourceUrl: GYM_MEMBERSHIP_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Abonnements',
        title: 'Information avant la signature',
        text: `Durée du contrat, conditions de résiliation, prix TTC et frais (inscription, options) sont remis avant l’adhésion${NBSP}; le client peut lire le contrat hors du lieu de vente, et dispose de 14 jours de rétractation pour un contrat conclu à distance.`,
        sourceName: GYM_MEMBERSHIP_RULES_SOURCE.name,
        sourceUrl: GYM_MEMBERSHIP_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Certificat médical',
        title: 'Pas une obligation légale, souvent demandé',
        text: `Fournir un certificat médical n’est pas une obligation légale pour s’inscrire${NBSP}; la salle peut le demander, car il est lié à son assurance. Un logiciel garde sa date et relance avant l’échéance.`,
        sourceName: GYM_MEMBERSHIP_RULES_SOURCE.name,
        sourceUrl: GYM_MEMBERSHIP_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Données sensibles',
        title: 'Blessures, inaptitudes et mesures croisées',
        text: `L’inaptitude à une activité sportive est une donnée de santé, comme le poids croisé avec d’autres mesures${NBSP}: un régime particulier s’applique (confidentialité, sécurité, interdiction de commercialisation). À prévoir dès la fiche client.`,
        sourceName: HEALTH_DATA_SOURCE.name,
        sourceUrl: HEALTH_DATA_SOURCE.url,
      },
      {
        contextLabel: '1er septembre 2027',
        title: 'La facture électronique',
        text: `Pour vos clients professionnels (entreprises, clubs)${NBSP}: toutes les entreprises doivent pouvoir recevoir des factures électroniques depuis le 1er septembre 2026${NBSP}; les PME devront les émettre à partir du 1er septembre 2027.`,
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: `Ce que l’outil sur mesure ne remplace pas${NBSP}:`,
    calloutText:
      'votre logiciel de comptabilité, ni les applications d’entraînement que vos clients aiment déjà. Les encaissements passent par Stripe ou votre banque, et l’outil se branche sur votre site, votre agenda et vos e-mails.',
  },
  freeTemplate: {
    anchorId: 'modele',
    eyebrow: 'Modèle gratuit',
    title: 'Un bilan client et un carnet de séances prêts à remplir',
    description:
      'Le bilan initial d’un client (objectifs, antécédents, mesures, tests de départ) et le carnet de séances de musculation avec séries, répétitions, charges et ressenti. En PDF à remplir à la main, ou en Excel avec le tonnage et la progression calculés.',
    items: [
      `Bilan initial${NBSP}: objectifs, pratique actuelle, antécédents et douleurs, mesures et tests de départ, consentement pour les données de santé`,
      `Carnet de séances${NBSP}: exercices, séries, répétitions, charge, RPE, tonnage par séance, notes du coach`,
      `Version Excel${NBSP}: tonnage calculé automatiquement, progression d’une séance à l’autre`,
    ],
    downloads: [
      {
        label: 'Télécharger le modèle PDF',
        href: PERSONAL_TRAINER_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: PERSONAL_TRAINER_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 feuilles, tonnage calculé',
      },
    ],
    footnote: 'Modèle libre d’utilisation, à adapter à votre pratique. Il ne remplace pas un avis médical.',
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
          { state: 'yes', text: `14 à 199${NBSP}€ par mois, selon le nombre de clients ou de réservations` },
          { state: 'partial', text: `Votre abonnement, plus 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois` },
          {
            state: 'partial',
            text: `5${NBSP}000 à 25${NBSP}000${NBSP}€ une seule fois, plus 100 à 300${NBSP}€ par mois de maintenance`,
          },
        ],
      },
      {
        label: 'Réservation, programmes, paiements',
        cells: [
          { state: 'yes', text: 'Inclus, dans l’application et aux couleurs de l’éditeur' },
          { state: 'yes', text: 'Restent dans votre logiciel actuel' },
          { state: 'yes', text: 'Conçus autour de votre méthode, de vos formules et de vos lieux' },
        ],
      },
      {
        label: `Vos règles${NBSP}: formules, annulations, lieux`,
        cells: [
          { state: 'partial', text: 'Dans la limite des réglages prévus par l’éditeur' },
          { state: 'yes', text: 'Sur les points ajoutés par le complément' },
          { state: 'yes', text: 'Conçu autour de votre organisation' },
        ],
      },
      {
        label: 'Réservation et paiement sur votre site, à vos couleurs',
        cells: [
          { state: 'partial', text: 'Souvent une page ou une application de l’éditeur' },
          { state: 'yes', text: 'Sur votre site, à vos couleurs' },
          { state: 'yes', text: 'Sur votre site et dans une application à votre nom' },
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
    rowsShownOnSmallScreens: PERSONAL_TRAINER_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: PERSONAL_TRAINER_PAGE_PROJECT_SLUG,
    screenshotUrl: PERSONAL_TRAINER_PAGE_SCREENSHOT_URL,
    showBrowserFrame: false,
    eyebrow: 'Déjà réalisé',
    title: 'Une plateforme de réservation pour le sport et les loisirs, déjà en production',
    description:
      'Chez Izidoor, j’ai développé la plateforme de réservation d’une trentaine de structures de sport et de loisirs. Leurs clients réservent et paient sur le site de chaque structure, l’équipe suit tout dans un planning par moniteur. Plusieurs milliers de réservations y passent chaque saison.',
    highlights: [
      'Réservation en ligne sur le site de chaque structure',
      'Paiement Stripe, acomptes et remboursements',
      'Planning par moniteur, disponibilités et caisse pour encaisser sur place',
    ],
    linkLabel: 'Voir le projet Izidoor',
    imageAlt: 'Planning Izidoor sur ordinateur et sur téléphone : créneaux réservés par moniteur et par jour',
    browserBarCaption: 'Izidoor · planning des réservations',
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Logiciel pour coach sportif${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un logiciel pour coach sportif${NBSP}?`,
        answer: `Harbiz coûte 19 à 199${NBSP}€ par mois (14 à 149${NBSP}€ HT à l’année) selon le nombre de clients, Hexfit 19 à 250${NBSP}$ par mois, Eversports Manager 36 à 169${NBSP}€ HT par mois selon le nombre de réservations, Trafft est gratuit jusqu’à 100 rendez-vous par mois et Virtuagym est sur demande (tarifs relevés le 19 octobre 2026). Un complément sur mesure coûte de 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois, un outil complet de 5${NBSP}000 à 25${NBSP}000${NBSP}€, puis 100 à 300${NBSP}€ par mois de maintenance.`,
      },
      {
        question: `Quel logiciel pour un coach sportif indépendant${NBSP}?`,
        answer: `Avec moins de 15 clients actifs, une application de coaching à moins de 30${NBSP}€ par mois (Harbiz Basic, Hexfit Starter ou Solo) couvre les programmes, le suivi et les rendez-vous${NBSP}; pour la réservation en ligne seule, Trafft est gratuit jusqu’à 100 rendez-vous par mois. Le sur mesure se justifie quand vos formules, votre méthode ou votre application à votre nom ne rentrent plus dans ces outils.`,
      },
      {
        question: `Existe-t-il un logiciel gratuit pour coach sportif${NBSP}?`,
        answer: `Trafft propose une offre gratuite limitée à un utilisateur et 100 rendez-vous par mois, suffisante pour prendre les réservations. Harbiz et Hexfit offrent 14 jours d’essai avec toutes les fonctions. Un agenda et un tableur dépannent au début, mais sans rappels automatiques, sans programmes sur le téléphone du client ni paiement en ligne.`,
      },
      {
        question: `Faut-il une carte professionnelle pour coacher${NBSP}?`,
        answer: `Oui. Enseigner, animer ou encadrer une activité physique contre rémunération impose de se déclarer auprès de l’administration, qui vérifie votre qualification et l’absence d’interdiction d’encadrer, puis délivre la carte professionnelle. Dans une salle, les copies des diplômes et des cartes de chaque encadrant sont affichées, visibles du public.`,
      },
      {
        question: `Puis-je stocker les blessures et les mesures de mes clients${NBSP}?`,
        answer: `Oui, avec précaution${NBSP}: une inaptitude à une activité sportive est une donnée de santé selon la CNIL, et un poids croisé avec d’autres mesures peut le devenir. Un régime particulier s’applique (confidentialité, sécurité, pas de commercialisation). Recueillez le consentement dans le bilan initial, limitez l’accès à ces champs et évitez les messageries grand public pour les échanger.`,
      },
      {
        question: `Que doit contenir un contrat d’abonnement de salle${NBSP}?`,
        answer: `La durée, les conditions de résiliation, le prix TTC et les frais (inscription, options), remis avant l’adhésion, et un contrat que le client peut lire hors du lieu de vente. À distance, le client dispose de 14 jours de rétractation. Les contrats de six mois et plus sont considérés comme de longue durée${NBSP}: prévoyez aussi des formules courtes.`,
      },
      {
        question: `Comment limiter les annulations de dernière minute${NBSP}?`,
        answer: `Avec une politique d’annulation écrite dans la réservation (délai, séance décomptée ou acompte conservé), un rappel automatique la veille et une liste d’attente qui redonne la place à un autre client. Les logiciels du marché prévoient le rappel${NBSP}; la liste d’attente et la facturation des absences selon vos règles sont souvent le point où un complément sur mesure devient utile.`,
      },
      {
        question: `Quel logiciel pour une salle de musculation avec contrôle d’accès${NBSP}?`,
        answer: `Les logiciels de salle (Virtuagym, Eversports Manager) relient les abonnements aux badges ou QR codes et aux paiements récurrents. Si votre salle a ses propres règles (créneaux réservés, accès par formule, plusieurs sites), un outil sur mesure relie le contrôle d’accès de votre matériel à vos abonnements et à votre planning.`,
      },
      {
        question: `Peut-on reprendre les données de mon logiciel actuel${NBSP}?`,
        answer: `Si votre logiciel exporte vos clients, vos séances, vos abonnements et vos paiements en Excel ou en CSV, je les reprends dans le nouvel outil${NBSP}; c’est prévu dans le devis. Vérifiez cette possibilité d’export avant de signer avec un éditeur.`,
      },
    ],
  },
  relatedArticles: {
    title: 'À lire aussi',
    slugs: PERSONAL_TRAINER_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: `Un doute sur le bon outil pour votre coaching${NBSP}?`,
    description: `Décrivez-moi votre activité en quelques lignes. Je vous réponds sous 24${NBSP}h, et si un logiciel du marché vous suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
  },
}
