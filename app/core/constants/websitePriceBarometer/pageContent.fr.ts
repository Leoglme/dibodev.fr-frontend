import type { DibodevWebsitePriceBarometerPageContent } from '~/core/types/DibodevWebsitePriceBarometerPage'
import { NBSP } from '~/core/constants/typography'

/** The figures written in the FAQ and the callouts come from the dataset: update them by hand after each new edition. */
export const WEBSITE_PRICE_BAROMETER_PAGE_CONTENT_FR: DibodevWebsitePriceBarometerPageContent = {
  meta: {
    title: `Prix d’un site internet en 2026${NBSP}: baromètre de 20 sources`,
    description: `Prix affichés par 20 freelances, agences, créateurs de sites et guides français, relevés le 1er novembre 2026${NBSP}: médianes par taille de site, coût sur 3 ans.`,
    datasetName: 'Baromètre 2026 des prix d’un site internet en France',
    datasetDescription:
      'Prix publics de création de site internet relevés le 1er novembre 2026 chez 20 sources françaises (freelances, agences, créateurs de sites, guides de prix) : site une page, site vitrine, site complet ou boutique, maintenance et hébergement par mois, HT ou TTC.',
  },
  breadcrumbLabel: 'Prix d’un site internet',
  numberLocale: 'fr-FR',
  rangeTemplate: `{min} à {max}${NBSP}€`,
  monthlyRangeTemplate: `{min} à {max}${NBSP}€ par mois`,
  hero: {
    titlePart1: `Prix d’un site internet en 2026${NBSP}: ce que `,
    titleHighlight: '20 sources',
    titlePart2: ' affichent vraiment',
    description:
      'Plutôt qu’une fourchette de plus, voici les prix que les freelances, les agences, les créateurs de sites et les guides de prix français publient sur leurs propres pages, relevés le même jour, avec les médianes par taille de site, la maintenance et le coût sur trois ans. Les miens sont dans le tableau.',
    cta: 'Demander un devis',
    ctaSecondary: 'Voir les 20 sources',
    reassurances: [
      'Prix publics, liés à leur source',
      'Relevé du 1er novembre 2026',
      'Données téléchargeables (CSV, CC BY)',
    ],
    statLabels: {
      showcaseRange: 'site vitrine, médianes',
      sources: 'sources relevées',
      checkedAt: 'date du relevé',
    },
  },
  categories: {
    eyebrow: 'Les chiffres clés',
    title: 'Trois tailles de site, puis la maintenance',
    intro:
      'Pour chaque taille, la médiane des prix planchers et la médiane des prix plafonds publiés par les sources qui la chiffrent. Une médiane n’est pas tirée vers le haut par les deux ou trois agences les plus chères, ni vers le bas par un prix d’appel.',
    categoryColumnLabel: 'Taille de site',
    coverageColumnLabel: 'Ce que ça couvre',
    priceColumnLabel: 'Médianes publiées',
    items: {
      onePage: {
        name: 'Site une page',
        coverage:
          'Une seule page qui présente l’activité, les coordonnées et un formulaire. Pour une activité qui démarre ou un besoin de présence minimale.',
      },
      showcase: {
        name: 'Site vitrine de 3 à 6 pages',
        coverage:
          'Accueil, prestations, à propos, contact, parfois une page par service. Le site de la plupart des artisans, commerces et indépendants.',
      },
      fullShowcase: {
        name: 'Site complet ou boutique',
        coverage:
          'Dix pages et plus, un blog, ou une boutique en ligne simple. Chaque source précise dans sa fiche lequel des deux elle chiffre.',
      },
      maintenance: {
        name: 'Maintenance et hébergement',
        coverage:
          'Hébergement, nom de domaine, mises à jour et petites modifications, par mois, chez les freelances et les agences qui l’affichent. Les abonnements des créateurs de sites sont dans leurs fiches.',
      },
    },
    conditionTemplate: `{count} sources${NBSP}: du plancher le plus bas, {lowestFloor}${NBSP}€, au plafond le plus haut, {highestCeiling}${NBSP}€`,
    maintenanceConditionTemplate: `{count} sources${NBSP}: de {lowestFloor} à {highestCeiling}${NBSP}€ par mois`,
    calloutEmphasizedIntro: `HT, TTC ou prix nets${NBSP}:`,
    calloutText:
      'chaque fiche reprend la mention de la source. Les freelances en franchise de TVA affichent des prix nets (TVA non applicable, article 293 B du CGI), les agences des prix hors taxes auxquels s’ajoutent 20 % de TVA, les créateurs de sites tantôt l’un, tantôt l’autre. Les médianes mélangent les trois, comme les devis que vous recevrez.',
    calloutFootnote: 'Médianes calculées sur les sources qui chiffrent la taille de site, Dibodev compris.',
  },
  sources: {
    eyebrow: 'Le tableau',
    title: 'Les 20 sources, avec le lien vers chacune',
    intro:
      'Chaque fiche reprend ce que la source publie elle-même, sans arrondi, avec la date de sa page. Rien n’a été demandé par devis, aucun jugement sur les prestataires.',
    wording: {
      kindLabels: {
        freelance: 'Freelance',
        agency: 'Agence',
        builder: 'Créateur de sites',
        guide: 'Guide de prix',
      },
      rangeLabels: {
        onePage: 'Site une page',
        showcase: 'Site vitrine',
        fullShowcase: 'Site complet ou boutique',
      },
      maintenanceLabel: 'Par mois',
      taxLabels: {
        excludingTax: 'prix HT',
        includingTax: 'prix TTC',
        net: 'prix nets, TVA non applicable',
        unspecified: 'HT ou TTC non précisé',
      },
      rangeTemplate: `{label} {min} à {max}${NBSP}€`,
      openRangeTemplate: `{label} dès {min}${NBSP}€`,
      fixedPriceTemplate: `{label} {value}${NBSP}€`,
      publishedTemplate: 'Relevé le {checkedAt}, page datée {publishedAt}.',
      notes: {
        'la-fabrique-du-net':
          'Baromètre de 3 226 budgets réels : médiane générale 5 000 €, site vitrine 3 500 € de médiane ; « site vitrine TPE sur Wix ou WordPress 2 500 à 4 000 € », « site vitrine PME soigné 5 000 à 8 000 € », boutique 10 000 à 15 000 €.',
        codeur:
          'Guide titré 2025 (page modifiée le 18 mars 2025) : site une page 300 à 1 500 €, vitrine simple 500 à 2 000 €, boutique basique 1 000 à 5 000 €, maintenance 200 à 500 € par an ramenés au mois.',
        kolonell:
          'Grille « France (EUR) » d’un éditeur installé à Dakar : site une page 400 à 950 €, vitrine 5 à 8 pages 950 à 2 300 €, vitrine complète 10 à 20 pages 1 850 à 4 600 €, boutique 2 300 à 6 900 €.',
        'independant-io':
          'Site réalisé par un professionnel « de 1 000 à plus de 10 000 € » ; maintenance 50 à 500 € par mois selon la charge ; hébergement 50 à 200 € par an.',
        'sk-web':
          'Link-in-bio dès 440 €, Essentiel (1 à 3 pages) dès 690 €, Business (4 à 6 pages) dès 1 590 €, boutique sur devis, « payé une fois » ; accompagnement en option après deux mois, 9, 22 ou 32 € par mois selon l’offre.',
        'lucas-fonseque':
          'Une page 800 € HT, Vitrine 1 500 € HT, Vitrine complète 2 500 € HT, Sur mesure (boutique ou grand site) dès 5 000 € HT ; maintenance 60 € HT par mois avec douze mois d’engagement, hébergement et nom de domaine compris.',
        'vorlyx-studio':
          'Essentiel 350 à 500 € (1 page), Professionnel 700 à 2 000 € (jusqu’à 5 pages), Premium sur devis ; hébergement 150 à 180 € par an, domaine compris, ramené au mois.',
        adekoite:
          'Site vitrine standard 1 500 à 2 500 € HT (5 à 10 pages), personnalisé 2 500 à 4 500 € HT (10 à 20 pages), premium 5 000 à 8 000 € HT ; maintenance dès 70 € HT par mois, hébergement et domaine à part.',
        fsweb:
          'Site vitrine Essentiel dès 990 € HT (5 pages), Pro 1 990 € HT ; boutique Starter 1 990 € HT, Business 3 990 € HT ; maintenance 39 € HT par mois pour une vitrine, 89 € pour une boutique.',
        'marine-et-mots':
          'Offres Projecteur et Performance de 2 000 à 3 500 € HT selon les options ; site sur modèle « clé en main » 549 € ; offre une page sans prix affiché.',
        dibodev:
          'C’est moi : site sur modèle 290 € une seule fois, généré avec DevLeadHunter (mon produit), domaine et hébergement compris ; site vitrine sur mesure dès 1 500 € ; maintenance des sites sur mesure 100 à 300 € par mois.',
        fenxi: 'Sites vitrines dès 2 000 € HT ; diagnostic UX/UI 1 300 € HT, déduit d’une refonte.',
        'la-taniere-numerique':
          'Essentiel dès 2 500 € HT (5 pages, hébergement un an compris), Business dès 4 500 € HT (jusqu’à 10 pages, blog), Premium dès 7 500 € HT.',
        'e-cybercom':
          'Landing page WordPress dès 1 000 € HT, site vitrine WordPress de 2 à 5 pages dès 2 000 € HT, boutique WooCommerce dès 3 500 € HT, refonte dès 2 000 € HT.',
        simplebo:
          'Site réalisé par Simplébo en abonnement : 400 € de lancement puis 60 € par mois (Site Web), 500 € puis 120 € (Pack Croissance), 800 € puis 150 € (Pack Complet), douze mois d’engagement en mensuel, nom de domaine compris.',
        solocal:
          'Abonnement tout compris, sans prix de création : Initiale dès 64 € par mois (site en autonomie), Confort dès 114 € (site réalisé par leurs experts), Performance dès 209 €.',
        wix: 'Forfaits Light 16,80 €, Essentiel 30 €, Business 40,80 €, Business Plus 178,80 € par mois, prix des abonnements annuels payés d’avance, domaine offert un an ; pas de prix public pour un site fait par un expert.',
        jimdo:
          'Packs Start 12,10 €, Grow 20,17 €, Grow Legal 29,25 €, Unlimited 50,42 € par mois sur douze mois, domaine compris ; pas de prix public pour un site fait pour vous.',
        webnode:
          'Forfaits Limited 3,90 €, Mini 6,90 €, Standard 9,90 €, Pro 17,90 € par mois en paiement annuel, domaine offert un an sauf Limited.',
        ionos:
          'Packs MyWebsite 10, 16 et 30 € HT par mois hors promotion (promotions à 1 ou 6 € les premiers mois), domaine compris la première année ; le service de conception par IONOS n’affiche pas de prix en 2026.',
      },
    },
    csvEmphasizedIntro: `Les données sont à vous aussi${NBSP}:`,
    csvText:
      'le relevé complet est téléchargeable, sous licence CC BY 4.0. Citez « Dibodev, baromètre 2026 des prix d’un site internet » avec un lien vers cette page.',
    csvLinkLabel: 'Télécharger le relevé (CSV)',
    csvFootnote: `Une source manque ou a changé de prix${NBSP}? Écrivez-moi, je corrige et je date la correction.`,
  },
  threeYears: {
    eyebrow: 'Sur trois ans',
    title: `Abonnement, site sur modèle ou sur mesure${NBSP}: ce que ça coûte sur trois ans`,
    intro:
      'Un abonnement paraît toujours moins cher le premier mois. Voici le calcul sur trois ans pour un site vitrine, hébergement et maintenance compris.',
    criterionLabel: 'Critère',
    columns: ['Créateur de site en abonnement', 'Site sur modèle Dibodev', 'Site vitrine sur mesure (médianes)'],
    rows: [
      {
        label: 'Prix de départ',
        cells: [
          { state: 'yes', text: '{builderMonthly}, du forfait le moins cher au plus cher des six créateurs relevés' },
          { state: 'yes', text: '{templatePrice} une seule fois, nom de domaine et hébergement compris' },
          { state: 'partial', text: '{showcaseRange} au forfait (médianes des sources qui chiffrent le site vitrine)' },
        ],
      },
      {
        label: 'Coût sur trois ans',
        cells: [
          { state: 'partial', text: '{builderThreeYears}' },
          { state: 'yes', text: '{templatePrice}' },
          { state: 'partial', text: '{customThreeYears}, maintenance de {maintenanceMonthly} comprise' },
        ],
      },
      {
        label: 'Nom de domaine et hébergement',
        cells: [
          { state: 'yes', text: 'Compris dans l’abonnement, domaine souvent offert la première année' },
          { state: 'yes', text: 'Compris' },
          { state: 'partial', text: 'À part (10 à 100 € par an) ou dans la maintenance' },
        ],
      },
      {
        label: 'Ce qui vous appartient',
        cells: [
          { state: 'partial', text: 'Vos textes et photos ; le site reste sur la plateforme' },
          { state: 'partial', text: 'Vos textes et photos ; le site est hébergé par Dibodev' },
          { state: 'yes', text: 'Le site, son code et ses contenus' },
        ],
      },
      {
        label: 'Mise en ligne',
        cells: [
          { state: 'yes', text: 'Quelques jours, en le faisant vous-même' },
          { state: 'yes', text: 'Sous une semaine' },
          { state: 'partial', text: '3 à 6 semaines' },
        ],
      },
      {
        label: 'Quand ça a du sens',
        cells: [
          { state: 'yes', text: 'Un besoin simple, et du temps pour le faire vous-même' },
          { state: 'yes', text: 'Être trouvé vite, sans y passer du temps ni y revenir' },
          { state: 'yes', text: 'Des pages par prestation, un référencement local travaillé, une image à vous' },
        ],
      },
    ],
    rowsShownOnSmallScreens: 2,
  },
  factors: {
    eyebrow: 'Ce qui fait varier le prix',
    title: 'Six facteurs qui expliquent l’écart entre deux devis',
    intro: 'Les sources sont d’accord sur ces facteurs. C’est leur poids dans chaque devis qui change.',
    items: [
      {
        title: 'Le nombre de pages',
        description:
          'Une page, cinq pages ou vingt : les grilles publiées sont presque toutes découpées ainsi. Chez SK Web, une page de plus coûte 100 € ; chez Adekoite, le passage de 10 à 20 pages fait passer la fourchette de 1 500-2 500 à 2 500-4 500 € HT.',
      },
      {
        title: 'Le modèle ou le sur mesure',
        description:
          'Un site sur modèle réutilise une structure et un design éprouvés : 290 € chez moi, 549 € chez Marine & Mots. Un design dessiné pour vous se paie à part : 600 à 1 200 € HT chez Adekoite, 1 500 € HT chez Simplébo.',
      },
      {
        title: 'Les textes et les photos',
        description:
          'Qui écrit ? Si vous fournissez textes et photos, le prix baisse. La rédaction se facture 70 € par page chez SK Web ; un rédacteur se paie 200 à 400 € par jour selon independant.io.',
      },
      {
        title: 'Le référencement',
        description:
          'Un site vitrine « optimisé » et un site pensé pour sortir sur « plombier Rennes » ne demandent pas le même travail. Le référencement est souvent une option : 400 € puis 50 € par mois chez Simplébo, 250 à 700 € par jour en prestation selon independant.io.',
      },
      {
        title: 'Les fonctions en plus',
        description:
          'Réservation en ligne, paiement, espace client, boutique : chaque fonction ajoute des jours. Adekoite affiche 400 € HT pour une réservation, 500 € HT pour un espace membre ; une boutique part de 1 990 € HT chez FSWeb.',
      },
      {
        title: 'Qui vous répond',
        description:
          'Un freelance n’a ni commercial ni chef de projet à financer : les TJM publiés vont de 280 à 450 € en freelance selon Codeur.com, les agences du relevé démarrent leurs vitrines à 2 000 ou 2 500 € HT.',
      },
    ],
  },
  method: {
    eyebrow: 'Méthode',
    title: 'Comment ce baromètre est fait',
    intro:
      'Il ne mesure pas des devis, mais ce que chaque prestataire assume d’écrire publiquement. C’est sa limite et son intérêt.',
    steps: [
      {
        label: 'Relevé',
        title: 'Les pages publiques, le même jour',
        description:
          'Les prix viennent des pages de tarifs ou des guides de prix des sources, toutes lues le 1er novembre 2026, avec un lien vers chacune. Aucun devis demandé, aucun prix négocié.',
      },
      {
        label: 'Tri',
        title: 'Trois tailles de site et la maintenance',
        description:
          'Chaque prix est rangé dans une taille (site une page, site vitrine de 3 à 6 pages, site complet ou boutique) d’après la description de la source, et la maintenance ou l’abonnement dans une colonne par mois. Les prix annuels sont ramenés au mois.',
      },
      {
        label: 'Calcul',
        title: 'Des médianes, pas des moyennes',
        description:
          'Pour chaque taille, la médiane des planchers et la médiane des plafonds publiés. Un prix « à partir de » compte pour le plancher seulement. La maintenance des freelances et des agences est calculée à part des abonnements des créateurs de sites.',
      },
      {
        label: 'Mise à jour',
        title: 'Une édition par an',
        description:
          'Prix revérifiés deux fois par an, édition refaite chaque année. Un prestataire qui publie ses prix peut demander à entrer dans le relevé.',
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Prix d’un site internet${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un site internet en 2026${NBSP}?`,
        answer:
          'Sur les 20 sources relevées le 1er novembre 2026, les médianes publiées vont de 420 à 950 € pour un site une page, de 1 000 à 2 000 € pour un site vitrine de 3 à 6 pages et de 2 500 à 4 600 € pour un site complet ou une boutique simple. Les créateurs de sites en abonnement vont de 3,90 à 209 € par mois. La Fabrique du Net, qui mesure des budgets réellement engagés, trouve une médiane de 3 500 € pour un site vitrine.',
      },
      {
        question: `Combien coûte un site internet pour un artisan${NBSP}?`,
        answer:
          'Un artisan a besoin d’un site vitrine de 3 à 6 pages : accueil, prestations, zone d’intervention, contact. Les médianes publiées vont de 1 000 à 2 000 €, du plancher de 290 € au plafond de 10 000 €. Chez moi, c’est 290 € une seule fois pour un site sur modèle, domaine et hébergement compris, ou dès 1 500 € pour un site sur mesure, pensé pour sortir sur les recherches de votre métier dans votre ville.',
      },
      {
        question: `Site à 290 € ou site à 1 500 €${NBSP}: la différence${NBSP}?`,
        answer:
          'Le site à 290 € est généré avec DevLeadHunter, mon produit, à partir d’un modèle fait pour les artisans : vos textes, vos photos, vos coordonnées, votre nom de domaine et l’hébergement, en ligne sous une semaine, payé une seule fois. Le site à 1 500 € est dessiné et écrit pour vous : une page par prestation, un référencement local travaillé, des fonctions à vous (devis en ligne, réservation), et le code vous appartient. Le premier sert à exister et à être trouvé ; le second à se démarquer.',
      },
      {
        question: `Que comprend la maintenance d’un site internet${NBSP}?`,
        answer:
          'L’hébergement, le nom de domaine, les mises à jour du CMS et des extensions, les sauvegardes et un peu de temps de modification chaque mois. Les freelances et les agences du relevé affichent 9 à 300 € par mois, avec des médianes de 50 à 60 € par mois. Je facture la mienne de 100 à 300 € par mois pour un site sur mesure, hébergement, sauvegardes et petites évolutions compris ; le site sur modèle à 290 € n’en a pas.',
      },
      {
        question: `Un site Wix ou Jimdo est-il moins cher${NBSP}?`,
        answer:
          'Le premier mois, oui. Sur trois ans, un forfait Wix de 16,80 à 178,80 € par mois représente 605 à 6 437 €, et les six créateurs relevés vont de 140 à 7 524 € sur la période, contre 290 € pour un site sur modèle payé une fois ou 2 782 à 4 160 € pour un site vitrine sur mesure maintenance comprise. L’abonnement a un autre coût : le site reste sur la plateforme, et vous repartez de zéro si vous la quittez.',
      },
      {
        question: `Combien coûtent un nom de domaine et l’hébergement${NBSP}?`,
        answer:
          'Un .fr coûte 4,99 € HT la première année puis 7,79 € HT par an chez OVHcloud (relevé du 1er novembre 2026). Un hébergement mutualisé se paie 1,59 € HT par mois la première année puis 2,59 € HT chez OVHcloud, dès 1,86 € HT par mois la première année chez o2switch. Soit 50 à 100 € par an pour les deux, souvent compris dans la maintenance ou dans l’abonnement.',
      },
      {
        question: `Les prix sont-ils HT ou TTC${NBSP}?`,
        answer:
          'Chaque fiche le dit. Les freelances en franchise de TVA affichent des prix nets, sans TVA à ajouter : c’est mon cas (TVA non applicable, article 293 B du CGI). Les agences affichent des prix hors taxes, auxquels s’ajoutent 20 % de TVA que vous récupérez si vous y êtes assujetti. Les créateurs de sites affichent tantôt du HT (Webnode, IONOS, Simplébo), tantôt du TTC (Wix, Jimdo).',
      },
      {
        question: `Payer une fois ou s’abonner${NBSP}?`,
        answer:
          'Payer une fois convient à un site qui change peu : vous possédez le site, et il ne vous coûte ensuite que son hébergement, ou une maintenance si vous la voulez. L’abonnement convient si vous mettez votre site à jour souvent vous-même et acceptez de rester sur la plateforme. Le tableau sur trois ans de cette page fait le calcul pour les deux.',
      },
      {
        question: `Qu’est-ce qui n’est pas dans ce baromètre${NBSP}?`,
        answer:
          'Les devis, les remises et les prix négociés, que personne ne publie. Les boutiques complexes et les plateformes, qui relèvent du logiciel sur mesure. Les prestataires qui n’affichent aucun prix, lus mais laissés de côté. Et les prix hors de France.',
      },
      {
        question: `Puis-je réutiliser ces chiffres${NBSP}?`,
        answer:
          'Oui. Le relevé est téléchargeable en CSV sous licence CC BY 4.0 : citez « Dibodev, baromètre 2026 des prix d’un site internet » avec un lien vers cette page. Si vous repérez une erreur ou un prix qui a changé, écrivez-moi, je corrige et je date la correction.',
      },
    ],
  },
  relatedArticles: {
    title: 'Pour aller plus loin',
    intro: 'Les articles qui aident à choisir entre un site vitrine et un outil métier, et à financer le projet.',
  },
  contactCta: {
    title: `Vous voulez un prix pour votre site, pas une fourchette${NBSP}?`,
    description: `Dites-moi votre métier, votre ville et ce que le site doit faire. Je vous réponds sous 24${NBSP}h avec un prix ferme${NBSP}: 290${NBSP}€ pour un site sur modèle, un devis au forfait pour un site sur mesure. Et si un créateur de site suffit, je vous le dis.`,
    button: 'Demander mon prix',
  },
}
