import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  CANOE_KAYAK_SAFETY_SOURCE,
  LEISURE_ACTIVITY_NO_WITHDRAWAL_SOURCE,
  LEISURE_ACTIVITY_VAT_RATES_SOURCE,
  LEISURE_BOOKING_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  LEISURE_BOOKING_PAGE_PROJECT_SLUG,
  LEISURE_BOOKING_PAGE_RELATED_ARTICLE_SLUGS,
  LEISURE_BOOKING_PAGE_SCREENSHOT_URL,
  LEISURE_BOOKING_PAGE_UPDATED_AT,
  LEISURE_BOOKING_TEMPLATE_PDF_PATH,
  LEISURE_BOOKING_TEMPLATE_XLSX_PATH,
  PAID_SPORTS_INSTRUCTOR_SOURCE,
  SPORTS_FACILITY_DISPLAY_SOURCE,
} from '~/core/constants/tools/leisureBookingSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'

export const LEISURE_BOOKING_PAGE_CONTENT_FR: DibodevSoftwareToolPageContent = {
  meta: {
    title: `Logiciel réservation activités de loisirs${NBSP}: prix 2026`,
    description: `Yoplanning, Activiteez, Regiondo, Bookeo${NBSP}: les prix 2026 et le coût des commissions, un test gratuit en 6 questions et un planning de réservation gratuit.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Logiciel de réservation et de gestion pour les activités de loisirs',
  },
  breadcrumbLabel: 'Logiciel de réservation pour activités de loisirs',
  shareImage: {
    titleLines: ['Quel logiciel pour vos', `activités de loisirs${NBSP}?`],
    highlight: 'activités de loisirs',
    subtitle: 'Six questions, les prix 2026 des logiciels de réservation et un planning de réservations gratuit',
    badge: 'Test gratuit, en 2 minutes',
    icon: 'tent',
    alt: `Quel logiciel de réservation pour vos activités de loisirs${NBSP}? Test gratuit en 6 questions, prix 2026 des logiciels et modèle de planning des réservations, sur dibodev.fr`,
  },
  hero: {
    titleBefore: 'Quel logiciel de réservation pour vos ',
    titleHighlight: 'activités de loisirs',
    titleAfter: `${NBSP}?`,
    description:
      'Six questions sur vos encadrants, vos sites et vos activités. Accrobranche, escape game, base nautique, centre équestre ou karting, le test vous dit quel type de logiciel choisir pour vos réservations, vos moniteurs et vos jours de mauvais temps, et combien prévoir, commissions comprises.',
    reassurances: ['2 minutes', 'Sans inscription ni e-mail', 'Résultat immédiat'],
    authorIntro: 'Test conçu par',
    authorBio: `développeur d’applications métier près de Rennes. En alternance chez Izidoor de 2023 à 2025, j’ai développé la plateforme de réservation d’une trentaine de structures de sport et de loisirs${NBSP}; je suis aujourd’hui actionnaire d’Izidoor.`,
    updatedAt: LEISURE_BOOKING_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'logiciels',
    eyebrow: 'Prix publics 2026',
    title: 'Comparatif des logiciels de réservation pour activités de loisirs et de leurs prix',
    intro: `Les tarifs affichés sur leur site par les éditeurs de réservation pour le loisir, de l’accrobranche à l’escape game, de la base nautique au karting. Deux modèles se côtoient${NBSP}: un abonnement sans commission, ou un petit abonnement (parfois gratuit) avec une part de chaque réservation en ligne. Lequel vous coûte le moins dépend de votre volume${NBSP}: le calcul est sous le tableau.`,
    productColumnLabel: 'Logiciel',
    coverageColumnLabel: 'Ce qu’il gère',
    priceColumnLabel: 'Prix public',
    products: [
      {
        name: 'Yoplanning',
        coverage: `Planning, base clients, billetterie, bons cadeaux, stock de matériel en temps réel, gestion des taxes, API${NBSP}; sur demande${NBSP}: facturation française, honoraires des moniteurs`,
        price: `0${NBSP}€ + 5${NBSP}%, ou 19 à 59${NBSP}€ + 2,5${NBSP}%`,
        priceCondition: `Découverte gratuite avec 5${NBSP}% de frais de réservation${NBSP}; Solo 19${NBSP}€, Micro 39${NBSP}€ (chiffre d’affaires sous 150${NBSP}000${NBSP}€), Entreprise 59${NBSP}€ par mois, plus 2,5${NBSP}% sur les réservations en ligne${NBSP}; HT ou TTC non précisé${NBSP}; essai 14 jours sans carte`,
      },
      {
        name: 'Activiteez',
        coverage: `Planning, espace client, encadrants (20 en BUSINESS, 60 en SÉRÉNITÉ), notes d’honoraires, codes promo, export FEC`,
        price: `Dès 19${NBSP}€ HT par mois`,
        priceCondition: `LIGHT 19${NBSP}€ HT avec engagement de 12 mois ou 29${NBSP}€ sans, jusqu’à SÉRÉNITÉ 119 ou 129${NBSP}€${NBSP}; plus 2${NBSP}% et les frais Stripe sur l’encaissé en ligne${NBSP}; formule GO gratuite à 10${NBSP}% + 0,40${NBSP}€${NBSP}; caisse NF525 et facture électronique +20${NBSP}€ HT par mois (incluses en SÉRÉNITÉ)${NBSP}; pause hors saison possible sans engagement`,
      },
      {
        name: 'Regiondo',
        coverage: `Widget de réservation, paiements Stripe et PayPal, vente sur GetYourGuide et Viator, billets et application de scan${NBSP}; en Pro${NBSP}: API, plan de places, données hébergées en Europe`,
        price: `59 ou 99${NBSP}€ par mois`,
        priceCondition: `Grow ou Pro, contrat annuel facturé au mois (−10${NBSP}% payé à l’année)${NBSP}; «${NBSP}petite commission${NBSP}» par réservation en ligne, taux non affiché, aucune hors ligne${NBSP}; HT ou TTC non précisé${NBSP}; site web 1${NBSP}000${NBSP}€ une fois`,
      },
      {
        name: 'Tourbiz',
        coverage: `Channel manager (GetYourGuide, Viator, Funbooker…), bons cadeaux, ressources${NBSP}; réservations hors ligne sans frais`,
        price: `0 à 249${NBSP}€ par mois + 0,8 à 0,99${NBSP}%`,
        priceCondition: `Freemium 0${NBSP}€ + 0,99${NBSP}% (3 produits), Intermediate 29${NBSP}€ + 0,95${NBSP}%, Advanced 79${NBSP}€ + 0,90${NBSP}%, Entreprise 249${NBSP}€ + dès 0,8${NBSP}%, tous les prix HT${NBSP}; essai gratuit sans carte`,
      },
      {
        name: 'Bookeo Tours et activités',
        coverage: 'Réservations en ligne, guides et véhicules, renonciations (décharges) signées en ligne',
        price: `29,95 à 89,95${NBSP}€ par mois`,
        priceCondition: `Sans commission${NBSP}; Standard 29,95${NBSP}€ (20 guides, 1${NBSP}000 réservations par mois), Large 59,95${NBSP}€, X-large 89,95${NBSP}€${NBSP}; gel hors saison à 30${NBSP}% du prix${NBSP}; renonciations numériques dès 7${NBSP}€ par mois${NBSP}; HT ou TTC non précisé${NBSP}; essai 30 jours sans carte`,
      },
      {
        name: 'Booky',
        coverage: `Réservation en ligne${NBSP}; en PRO${NBSP}: caisse anti-fraude TVA, facture électronique, contrats signés, EPI${NBSP}; en BUSINESS${NBSP}: cautions, bons cadeaux, GPS`,
        price: `49 à 149${NBSP}€ HT par mois`,
        priceCondition: `START 49${NBSP}€, PRO 89${NBSP}€, BUSINESS 149${NBSP}€${NBSP}; moitié prix les mois sans vente${NBSP}; «${NBSP}aucune commission${NBSP}»${NBSP}; essai 14 jours sans carte, sans engagement`,
      },
      {
        name: 'MyEscapeBoard (escape game)',
        coverage: 'Réservations, paiement individuel, planning des game masters, API, exports comptables',
        price: `30${NBSP}€ HT par salle et par mois`,
        priceCondition: `30${NBSP}€ pour les salles 1 à 6, 25${NBSP}€ de 7 à 14, 20${NBSP}€ à partir de 15${NBSP}; dès 3 salles (90${NBSP}€ HT par mois)${NBSP}; à l’année, 2 mois offerts${NBSP}; sans engagement`,
      },
      {
        name: 'Guidap, Qweekle, OuiRésa, FareHarbor',
        coverage: `Réservation et billetterie du loisir${NBSP}: accrobranche, canoë-kayak et grottes (Guidap), caisse et contrôle d’accès (Qweekle), centres nautiques (OuiRésa), selon l’éditeur`,
        price: 'Sur devis',
        priceCondition: 'Tarifs non publiés',
      },
    ],
    calloutEmphasizedIntro: `Le coût réel sur un an, pour 2${NBSP}000 réservations en ligne à 30${NBSP}€ (60${NBSP}000${NBSP}€)${NBSP}:`,
    calloutText: `Bookeo Standard 359${NBSP}€, frais de paiement en plus${NBSP}; Booky START 588${NBSP}€ HT et Tourbiz Advanced 1${NBSP}488${NBSP}€ HT, frais de paiement non précisés${NBSP}; Yoplanning Micro 1${NBSP}968${NBSP}€, frais de paiement non précisés${NBSP}; Weezevent 1${NBSP}980${NBSP}€ TTC, frais bancaires inclus (0,99${NBSP}€ au minimum par billet)${NBSP}; Activiteez PRO avec engagement, environ 2${NBSP}948${NBSP}€ HT, paiement compris${NBSP}; Addock 3${NBSP}740${NBSP}€ HT, frais bancaires compris${NBSP}; Bookingkit Starterkit, 5${NBSP}388${NBSP}€ au moins, frais de transaction compris (un billet par réservation). Pour le même volume, l’écart dépasse 5${NBSP}000${NBSP}€ par an${NBSP}: refaites ce calcul avec vos chiffres avant de signer.`,
    calloutFootnote: `Abonnement et commissions sur un an, d’après les tarifs relevés le 1er novembre 2026 sur les pages tarifs des éditeurs${NBSP}; Bookeo, Yoplanning et Bookingkit ne précisent pas si leurs prix sont HT ou TTC. Liste non exhaustive.`,
  },
  rules: {
    anchorId: 'reglementation',
    eyebrow: 'Le point en 2026',
    title: `TVA, arrhes, moniteurs, météo${NBSP}: ce que votre logiciel doit suivre en 2026`,
    intro: `Un taux de TVA par activité, une avance qui vaut arrhes, des cartes professionnelles à renouveler, des sorties à annuler quand la rivière monte${NBSP}: les règles d’un site de loisirs passent par ses réservations. Le 16 octobre 2026, la DGCCRF a publié son enquête sur les loisirs sportifs${NBSP}: 332 sites contrôlés en 2024, 13${NBSP}% en manquement, 13 suspensions. Et la loi du 3 août 2026 recrée une déclaration d’activité, dont le décret n’était pas encore publié au 1er novembre 2026.`,
    facts: [
      {
        contextLabel: 'BOFiP, BOI-TVA-LIQ-30-20-50',
        title: `10, 20 ou 5,5${NBSP}%${NBSP}: un taux de TVA par activité`,
        text: `10${NBSP}% pour les droits d’entrée (accrobranche, tyrolienne, escape game, laser game, paintball, parc de loisirs), 20${NBSP}% pour le karting, l’escalade, les sports nautiques, la location de matériel et un cours vendu seul, 5,5${NBSP}% pour certaines activités équestres. Un forfait qui mêle plusieurs activités suit un seul taux, celui de l’activité principale.`,
        sourceName: LEISURE_ACTIVITY_VAT_RATES_SOURCE.name,
        sourceUrl: LEISURE_ACTIVITY_VAT_RATES_SOURCE.url,
      },
      {
        contextLabel: 'Code de la consommation, L221-28 et L214-1',
        title: 'Pas de rétractation, et une avance qui vaut arrhes',
        text: `Une activité de loisirs réservée pour une date précise n’ouvre pas de droit de rétractation. Sauf clause contraire, la somme versée d’avance vaut arrhes${NBSP}: le client qui renonce la perd, le professionnel qui se dédit la rend au double.`,
        sourceName: LEISURE_ACTIVITY_NO_WITHDRAWAL_SOURCE.name,
        sourceUrl: LEISURE_ACTIVITY_NO_WITHDRAWAL_SOURCE.url,
      },
      {
        contextLabel: 'Code du sport, L212-1 et L212-11',
        title: 'Des moniteurs diplômés, déclarés, avec une carte à jour',
        text: 'Encadrer contre rémunération exige un diplôme et une déclaration auprès de l’administration, qui délivre la carte professionnelle, à renouveler tous les 5 ans. Une copie de la carte et du diplôme de chaque encadrant est affichée dans l’établissement.',
        sourceName: PAID_SPORTS_INSTRUCTOR_SOURCE.name,
        sourceUrl: PAID_SPORTS_INSTRUCTOR_SOURCE.url,
      },
      {
        contextLabel: 'Code du sport, A322-44 et A322-3-1',
        title: `Canoë-kayak${NBSP}: annuler quand l’eau ou la météo l’impose`,
        text: `L’exploitant adapte ou annule la sortie si la météo ou l’état de l’eau met les pratiquants en péril. En canoë-kayak et en voile, chacun atteste savoir nager 25${NBSP}mètres et s’immerger (pour un mineur, son représentant légal signe), sinon il passe le test Pass-nautique.`,
        sourceName: CANOE_KAYAK_SAFETY_SOURCE.name,
        sourceUrl: CANOE_KAYAK_SAFETY_SOURCE.url,
      },
      {
        contextLabel: 'Code du sport, R322-4 et R322-5',
        title: 'Un tableau des secours et des affichages obligatoires',
        text: `L’établissement a une trousse de secours, un moyen d’alerte et un tableau d’organisation des secours affiché. Il affiche aussi les copies des diplômes et des cartes, les textes de sécurité, l’attestation d’assurance et, depuis 2025, l’information sur les dispositifs de signalement des violences. Tout accident grave est signalé au préfet.`,
        sourceName: SPORTS_FACILITY_DISPLAY_SOURCE.name,
        sourceUrl: SPORTS_FACILITY_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: '1er septembre 2027',
        title: 'Facture électronique et e-reporting',
        text: `Toutes les entreprises doivent pouvoir recevoir des factures électroniques depuis le 1er septembre 2026${NBSP}; les PME les émettront à partir du 1er septembre 2027. À la même date, pour vos clients particuliers, la facture reste sur le canal habituel, mais les données de chaque vente et de son paiement partent vers la plateforme agréée (e-reporting).`,
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: `Ce que l’outil sur mesure ne remplace pas${NBSP}:`,
    calloutText: `votre caisse sécurisée ni votre comptabilité${NBSP}: les paiements en ligne passent par Stripe, l’encaissement sur place par votre caisse, et l’outil se branche sur les deux. Il ne tranche pas non plus vos conditions de vente${NBSP}: quand c’est vous qui annulez pour la météo, arrhes rendues au double ou force majeure, faites relire vos CGV par un juriste, l’outil appliquera ce qu’elles prévoient.`,
  },
  freeTemplate: {
    anchorId: 'modele',
    eyebrow: 'Modèle gratuit',
    title: 'Un planning de réservations et une fiche d’inscription prêts à l’emploi',
    description: `Pour la saison${NBSP}: le planning des créneaux, des réservations et des acomptes, le suivi des moniteurs et des contrôles du matériel en Excel, et une fiche d’inscription et de briefing à imprimer, avec l’attestation «${NBSP}savoir nager${NBSP}» et la signature d’un parent pour un mineur. Un planning de réservation gratuit, sans abonnement ni commission.`,
    items: [
      `Excel, 4 feuilles${NBSP}: créneaux (places restantes et remplissage calculés), réservations et acomptes (taux de TVA, arrhes, solde, commission du canal), moniteurs (carte professionnelle et fin de validité), contrôles du matériel (alerte en cas de retard)`,
      `PDF${NBSP}: fiche d’inscription et de briefing (activité, niveau, consignes lues, attestation «${NBSP}savoir nager 25${NBSP}m et s’immerger${NBSP}», signature du représentant légal), tableau d’organisation des secours et liste des affichages obligatoires`,
      `Repères utiles${NBSP}: TVA à 10, 20 ou 5,5${NBSP}% selon l’activité (BOFiP), avance qui vaut arrhes sauf clause contraire, prix TTC affichés à l’accueil`,
    ],
    downloads: [
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
    footnote: 'Modèle libre d’utilisation, à adapter avec votre fédération et votre assureur.',
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
          {
            state: 'yes',
            text: `0 à 249${NBSP}€ par mois, souvent plus une commission sur chaque réservation en ligne`,
          },
          { state: 'partial', text: `Votre abonnement, plus 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois` },
          {
            state: 'partial',
            text: `5${NBSP}000 à 25${NBSP}000${NBSP}€ une seule fois, plus 100 à 300${NBSP}€ par mois de maintenance`,
          },
        ],
      },
      {
        label: 'Commission sur vos réservations',
        cells: [
          {
            state: 'partial',
            text: `De 0 à plus de 10${NBSP}% par réservation en ligne, selon l’éditeur et la formule`,
          },
          { state: 'partial', text: 'Celle de votre logiciel actuel' },
          { state: 'yes', text: 'Aucune, seulement les frais de paiement de votre banque ou de Stripe' },
        ],
      },
      {
        label: 'Réservation en ligne, planning, paiements',
        cells: [
          { state: 'yes', text: 'Inclus, dans un widget ou une page de l’éditeur' },
          { state: 'yes', text: 'Restent dans votre logiciel actuel' },
          { state: 'yes', text: 'Sur votre site, à vos couleurs, autour de vos créneaux et de vos moniteurs' },
        ],
      },
      {
        label: `Vos règles${NBSP}: météo, matériel, TVA par activité`,
        cells: [
          { state: 'partial', text: 'Dans la limite des réglages prévus par l’éditeur' },
          { state: 'yes', text: 'Sur les points ajoutés par le complément' },
          { state: 'yes', text: 'Conçu autour de votre organisation' },
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
    rowsShownOnSmallScreens: LEISURE_BOOKING_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: LEISURE_BOOKING_PAGE_PROJECT_SLUG,
    screenshotUrl: LEISURE_BOOKING_PAGE_SCREENSHOT_URL,
    showBrowserFrame: false,
    eyebrow: 'Déjà réalisé',
    title: `Surf, kayak, ski, vélo${NBSP}: une plateforme de réservation déjà en production`,
    description: `En alternance chez Izidoor, de janvier 2023 à juillet 2025, j’ai développé comme ingénieur full-stack la plateforme de réservation d’une trentaine de structures de sport et de loisirs (surf, centres nautiques, ski, kayak, pêche, location de vélos). Leurs clients réservent et paient dans un module intégré au site de chaque structure${NBSP}; l’équipe gère réservations, plannings, produits, paiements et caisse dans le back-office. Plusieurs milliers de réservations y passent chaque saison, et je suis aujourd’hui actionnaire d’Izidoor.`,
    highlights: [
      'Créneaux calculés par un moteur de disponibilités multicritère',
      'Planning par moniteur et tarification dynamique',
      'Acomptes et remboursements par Stripe, caisse dans le back-office',
    ],
    linkLabel: 'Voir le projet Izidoor',
    imageAlt: `Planning Izidoor sur ordinateur et sur téléphone${NBSP}: créneaux réservés par moniteur et par jour`,
    browserBarCaption: 'Izidoor · planning des réservations',
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Logiciel de réservation pour activités de loisirs${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un logiciel de réservation pour activités de loisirs${NBSP}?`,
        answer: `Bookeo coûte 29,95 à 89,95${NBSP}€ par mois sans commission, Booky 49 à 149${NBSP}€ HT par mois, Activiteez dès 19${NBSP}€ HT par mois plus 2${NBSP}% en ligne, Yoplanning 19 à 59${NBSP}€ par mois plus 2,5${NBSP}% (ou 0${NBSP}€ plus 5${NBSP}%), Regiondo 59 ou 99${NBSP}€ par mois plus une commission non affichée, Tourbiz 0 à 249${NBSP}€ HT par mois plus 0,8 à 0,99${NBSP}% et MyEscapeBoard 30${NBSP}€ HT par salle${NBSP}; Guidap, Qweekle, OuiRésa et FareHarbor sont sur devis (tarifs relevés le 1er novembre 2026). Un complément sur mesure coûte de 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois, un outil complet de 5${NBSP}000 à 25${NBSP}000${NBSP}€, puis 100 à 300${NBSP}€ par mois de maintenance, sans commission sur vos ventes.`,
      },
      {
        question: `Abonnement ou commission${NBSP}: lequel coûte le moins${NBSP}?`,
        answer: `Tout dépend de votre volume. Pour 2${NBSP}000 réservations en ligne par an à 30${NBSP}€ (60${NBSP}000${NBSP}€), le coût sur un an va de 359${NBSP}€ chez Bookeo Standard (frais de paiement en plus) à 5${NBSP}388${NBSP}€ au moins chez Bookingkit Starterkit (frais de transaction compris). Entre les deux${NBSP}: Booky START 588${NBSP}€ HT et Tourbiz Advanced 1${NBSP}488${NBSP}€ HT (frais de paiement non précisés)${NBSP}; Yoplanning Micro 1${NBSP}968${NBSP}€ (frais de paiement non précisés)${NBSP}; Weezevent 1${NBSP}980${NBSP}€ TTC (frais bancaires inclus)${NBSP}; Activiteez PRO environ 2${NBSP}948${NBSP}€ HT (paiement compris)${NBSP}; Addock 3${NBSP}740${NBSP}€ HT (frais bancaires compris). Une commission grandit avec votre volume, pas un abonnement${NBSP}: refaites ce calcul avec vos réservations et votre panier moyen avant de signer.`,
      },
      {
        question: `Quel est le meilleur logiciel de réservation pour une activité de loisirs${NBSP}?`,
        answer: `Celui qui colle à votre façon de vendre, pas le plus connu. Avant de signer, faites-lui passer une vraie journée${NBSP}: un groupe de 12 qui réserve sur votre site pendant qu’un client prend au téléphone les deux derniers kayaks, un orage à 14${NBSP}h qui oblige à reporter un créneau et à prévenir tous les inscrits, un bon cadeau utilisé à l’accueil, puis le solde encaissé sur place et la commission de la plateforme retrouvée dans vos comptes. Vérifiez aussi que la page de réservation est accessible${NBSP}: un site de réservation y est soumis depuis le 28 juin 2025, sauf pour les entreprises de moins de 10 salariés dont le chiffre d’affaires ou le bilan reste sous 2 millions d’euros.`,
      },
      {
        question: `Quel logiciel de réservation pour un accrobranche ou un parc de loisirs${NBSP}?`,
        answer: `Guidap (accrobranche, canoë-kayak, grottes) et Qweekle (billetterie, caisse, contrôle d’accès) sont sur devis, Logi-parc coûte 216${NBSP}€ par an, licence tout compris (HT ou TTC non précisé), Regiondo 59 ou 99${NBSP}€ par mois et Booky 49 à 149${NBSP}€ HT par mois, avec les EPI dès la formule PRO. Un logiciel de gestion de parc de loisirs doit aussi tenir le registre de vos contrôles${NBSP}: dans son enquête d’octobre 2026, la DGCCRF a relevé des «${NBSP}contrôles périodiques obligatoires des équipements non enregistrés${NBSP}» et des EPI périmés. Les droits d’entrée d’un parcours acrobatique en hauteur sont soumis à une TVA de 10${NBSP}%. Data ES, le recensement des équipements du ministère des Sports, compte 757 parcours acrobatiques en hauteur ou sites d’accrobranche.`,
      },
      {
        question: `Quel logiciel de réservation pour un escape game${NBSP}?`,
        answer: `MyEscapeBoard, conçu pour l’escape game, coûte 30${NBSP}€ HT par salle et par mois pour les salles 1 à 6, 25${NBSP}€ de 7 à 14 et 20${NBSP}€ au-delà, dès 3 salles, avec le planning des game masters, le paiement individuel et une API. Les autres logiciels de cette page vendent des créneaux${NBSP}: vérifiez en démonstration qu’une salle ne peut jamais être réservée deux fois sur le même créneau, que la réservation vienne du site, du téléphone ou d’une plateforme. Escape game, laser game et paintball relèvent de la TVA à 10${NBSP}% (droits d’entrée).`,
      },
      {
        question: `Quelle TVA pour une activité de loisirs${NBSP}: 10, 20 ou 5,5${NBSP}%${NBSP}?`,
        answer: `Elle dépend de l’activité (BOFiP, BOI-TVA-LIQ-30-20-50). 10${NBSP}% pour les droits d’entrée${NBSP}: parcours acrobatiques en hauteur, tyroliennes, luge d’été, escape game, laser game, paintball, réalité virtuelle, parcs de loisirs. 20${NBSP}% pour les installations sportives (le karting, même en loisir, l’escalade, le bowling, les sports nautiques), pour la location de matériel et pour un cours ou un guide vendu seul${NBSP}; 5,5${NBSP}% pour certaines activités équestres. Un logiciel de gestion de karting ou de centre équestre doit donc porter un taux par prestation, et un forfait qui mêle plusieurs activités suit un seul taux, celui de l’activité principale.`,
      },
      {
        question: `Que faire quand la météo oblige à annuler${NBSP}?`,
        answer: `En canoë, kayak et raft, ce n’est pas un choix${NBSP}: l’exploitant adapte ou annule la sortie si la météo ou l’état de l’eau met les pratiquants en péril (code du sport, A322-44). Reste à savoir ce que vous devez quand c’est vous qui annulez${NBSP}: les arrhes au double, comme un professionnel qui se dédit, ou est-ce un cas de force majeure${NBSP}? La réponse dépend de vos conditions de vente${NBSP}: faites-les relire par un juriste. Les remboursements météo, je l’écrivais le 20 octobre 2026, sont «${NBSP}le point qui fait le plus de dégâts quand il est mal géré${NBSP}»${NBSP}: un bon logiciel reporte ou rembourse tout un créneau en quelques clics et prévient chaque inscrit.`,
      },
      {
        question: `Acompte ou arrhes${NBSP}: que mettre dans ses conditions de vente${NBSP}?`,
        answer: `Sans clause contraire, une somme versée d’avance vaut arrhes${NBSP}: le client qui renonce la perd, le professionnel qui se dédit la rend au double (code de la consommation, L214-1). Une activité de loisirs réservée pour une date précise n’ouvre pas de droit de rétractation (L221-28), et vous devez proposer un médiateur de la consommation gratuit (L612-1). Dans son enquête publiée le 16 octobre 2026, la DGCCRF a relevé des conditions générales de vente incomplètes et l’absence d’informations sur le droit de rétractation, suivies d’injonctions. Notez dans le logiciel la nature de chaque somme versée, arrhes ou acompte, pour rendre le bon montant en cas d’annulation.`,
      },
      {
        question: `Faut-il déclarer son activité de loisirs en 2026${NBSP}?`,
        answer: `La déclaration d’ouverture d’un établissement d’activités physiques ou sportives a été supprimée en 2014, mais la loi du 3 août 2026 crée l’article L322-2-1 du code du sport, en vigueur depuis le 5 août${NBSP}: un décret en Conseil d’État fixera la déclaration d’activité, et il n’était pas encore publié au 1er novembre 2026. En attendant, chaque encadrant payé se déclare et détient une carte professionnelle, tout accident grave est signalé au préfet, et l’assurance de responsabilité civile est obligatoire (6 mois d’emprisonnement et 7${NBSP}500${NBSP}€ d’amende sans elle). À partir de 7 mineurs accueillis sans leurs parents, le régime des accueils collectifs de mineurs s’applique.`,
      },
      {
        question: `Existe-t-il un logiciel de réservation gratuit${NBSP}?`,
        answer: `Oui, mais gratuit veut souvent dire commission${NBSP}: Yoplanning Découverte est à 0${NBSP}€ avec 5${NBSP}% de frais de réservation, Activiteez GO prend 10${NBSP}% + 0,40${NBSP}€, Tourbiz Freemium 0,99${NBSP}% HT pour 3 produits et Ubiliz Forever Free 4${NBSP}% HT sur les réservations en ligne. SimplyBook.me est gratuit jusqu’à 50 réservations, sans frais de transaction, et HelloAsso ne prend ni frais ni commission aux associations (une contribution volontaire est proposée au payeur). Si vous cherchez un planning de réservation en ligne gratuit, ce sont ces formules${NBSP}; pour démarrer sans abonnement ni commission, le modèle gratuit de cette page (Excel et PDF) suit vos créneaux, vos acomptes, vos moniteurs et vos contrôles de matériel.`,
      },
      {
        question: `Faut-il un logiciel de caisse certifié pour encaisser sur place${NBSP}?`,
        answer: `Oui, si vous êtes assujetti à la TVA et que vous encaissez des particuliers avec un logiciel de caisse${NBSP}: il doit être sécurisé, avec l’attestation de l’éditeur rétablie par la loi de finances du 19 février 2026, sous peine de 7${NBSP}500${NBSP}€ d’amende par caisse. Les entreprises en franchise en base de TVA en sont dispensées, comme celles dont tous les paiements passent par une banque. Activiteez vend la caisse NF525 en option (+20${NBSP}€ HT par mois) et Booky inclut une caisse anti-fraude dès la formule PRO.`,
      },
      {
        question: `Peut-on reprendre les données de mon logiciel actuel${NBSP}?`,
        answer: `Si votre logiciel exporte vos clients, vos réservations, vos produits, vos bons cadeaux et vos paiements en Excel ou en CSV, je les reprends dans le nouvel outil${NBSP}; c’est prévu dans le devis. Deux limites posées par la CNIL${NBSP}: le cryptogramme d’une carte ne se garde jamais après la première transaction, et les données des clients se conservent 3 ans après la fin de la relation, celles des prospects 3 ans après le dernier contact. Vérifiez cette possibilité d’export avant de signer avec un éditeur.`,
      },
    ],
  },
  relatedArticles: {
    title: 'À lire aussi',
    slugs: LEISURE_BOOKING_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: `Un doute sur le bon outil pour vos activités de loisirs${NBSP}?`,
    description: `Décrivez-moi vos activités, vos saisons et vos canaux de réservation en quelques lignes. Je vous réponds sous 24${NBSP}h, et si un logiciel du marché vous suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
  },
}
