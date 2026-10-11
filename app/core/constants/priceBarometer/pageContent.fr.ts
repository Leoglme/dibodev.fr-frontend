import type { DibodevPriceBarometerPageContent } from '~/core/types/DibodevPriceBarometerPage'
import { NBSP } from '~/core/constants/typography'

// The figures written in the FAQ and the callouts come from the dataset: update them by hand after each new edition.

export const PRICE_BAROMETER_PAGE_CONTENT_FR: DibodevPriceBarometerPageContent = {
  meta: {
    title: `Prix d’un logiciel sur mesure en 2026${NBSP}: baromètre | Dibodev`,
    description: `Les prix publiés par 14 agences, freelances et plateformes françaises, compilés et datés${NBSP}: médianes par taille de projet, TJM et coût sur cinq ans.`,
    datasetName: 'Baromètre 2026 des prix du logiciel sur mesure en France',
    datasetDescription:
      'Fourchettes de prix publiées par 14 agences, freelances et plateformes françaises pour un logiciel sur mesure, relevées le 11 octobre 2026 : outil simple, application métier, plateforme, taux journaliers et maintenance.',
  },
  breadcrumbLabel: 'Prix d’un logiciel sur mesure',
  numberLocale: 'fr-FR',
  rangeTemplate: `{min} à {max}${NBSP}€`,
  hero: {
    titlePart1: `Prix d’un logiciel sur mesure en 2026${NBSP}: ce que `,
    titleHighlight: '14 prestataires',
    titlePart2: ' affichent vraiment',
    description:
      'Au lieu d’une fourchette de plus, voici celles que les agences, les freelances et les plateformes françaises publient sur leurs propres pages, relevées le même jour, avec les médianes par taille de projet et le coût sur cinq ans. La mienne est dans le tableau.',
    cta: 'Estimer mon projet',
    ctaSecondary: 'Voir les 14 sources',
    reassurances: [
      'Prix publics, liés à leur source',
      'Relevé du 11 octobre 2026',
      'Données téléchargeables (CSV, CC BY)',
    ],
    statLabels: {
      businessAppRange: 'application métier, médianes',
      sources: 'sources relevées',
      checkedAt: 'date du relevé',
    },
  },
  tiers: {
    eyebrow: 'Les chiffres clés',
    title: 'Trois tailles de projet, trois fourchettes',
    intro:
      'Pour chaque taille, la médiane des prix planchers et la médiane des prix plafonds publiés par les sources qui la chiffrent. Une médiane n’est pas tirée vers le haut par les deux ou trois agences les plus chères.',
    tierColumnLabel: 'Taille de projet',
    coverageColumnLabel: 'Ce que ça couvre',
    priceColumnLabel: 'Médianes publiées',
    items: {
      simpleTool: {
        name: 'Outil simple ou MVP',
        coverage:
          'Un besoin précis : un planning, un suivi de dossiers, une automatisation, un portail client. Un seul type d’utilisateur, peu d’intégrations.',
      },
      businessApp: {
        name: 'Application métier complète',
        coverage:
          'Plusieurs rôles, un tableau de bord, des devis ou des factures, une ou deux intégrations (comptabilité, paiement, e-mails). La plupart des outils de TPE et PME.',
      },
      platform: {
        name: 'Plateforme ou SaaS',
        coverage:
          'Espace client, paiements, montée en charge, intégrations multiples, parfois une application mobile. Se découpe en lots.',
      },
    },
    conditionTemplate: `{count} sources${NBSP}: du plancher le plus bas, {lowestFloor}${NBSP}€, au plafond le plus haut, {highestCeiling}${NBSP}€`,
    calloutEmphasizedIntro: `Pourquoi un tel écart${NBSP}:`,
    calloutText:
      'une agence parisienne de vingt personnes et un indépendant ne vendent pas le même périmètre ni la même structure. La Fabrique du Net, qui mesure des budgets réellement engagés, trouve une médiane de 50 000 € en Île-de-France contre 15 000 € dans le reste de la France.',
    calloutFootnote: 'Médianes calculées sur les sources qui chiffrent la taille de projet, Dibodev compris.',
  },
  sources: {
    eyebrow: 'Le tableau',
    title: 'Les 14 sources, avec le lien vers chacune',
    intro:
      'Chaque fiche reprend ce que la source publie elle-même, sans arrondi, avec la date de sa page. Rien n’a été demandé par devis.',
    wording: {
      kindLabels: {
        agency: 'Agence',
        freelance: 'Freelance',
        platform: 'Plateforme',
        media: 'Média',
        directory: 'Annuaire',
      },
      rangeLabels: {
        simpleTool: 'Outil simple',
        businessApp: 'Application métier',
        platform: 'Plateforme',
        overall: 'Fourchette globale',
      },
      rangeTemplate: `{label} {min} à {max}${NBSP}€`,
      openRangeTemplate: `{label} dès {min}${NBSP}€`,
      fixedPriceTemplate: `{label} {value}${NBSP}€`,
      dayRateTemplate: `TJM {min} à {max}${NBSP}€`,
      singleDayRateTemplate: `TJM {value}${NBSP}€`,
      maintenanceTemplate: `maintenance {min} à {max}${NBSP}% par an`,
      publishedTemplate: 'Relevé le {checkedAt}, page datée {publishedAt}.',
      notes: {
        'la-fabrique-du-net': 'Médianes de 184 budgets réels (médiane générale 30 000 €, application métier 20 000 €).',
        velyria:
          'Abonnement : 890 € puis 119 € par mois sur 24 mois pour l’outil, 2 990 € puis 199 € par mois pour le logiciel complet, ramenés au total sur 24 mois.',
        codeur: 'Tarifs horaires moyens de 27 à 39 € convertis en journées de 7 heures.',
        malt: 'Développeurs expérimentés actifs sur Malt, de 317 € (0 à 2 ans) à 672 € (15 ans et plus) ; 576 € en moyenne.',
        dibodev: 'C’est moi : prix au forfait affichés sur ce site, maintenance 100 à 300 € par mois.',
        sokeo: 'Paliers donnés pour des applications, dont mobiles.',
        digitiz: 'Étude d’un média avec les prix d’une agence, cas réels de 3 100 à 36 000 € HT.',
        appminds: 'Par brique livrée, hébergement 30 à 150 € par mois en plus.',
        'nocode-factory': 'Outils no-code et low-code, maintenance 500 à 5 000 € par mois selon la taille.',
      },
    },
    csvEmphasizedIntro: `Les données sont à vous aussi${NBSP}:`,
    csvText:
      'le relevé complet est téléchargeable, sous licence CC BY 4.0. Citez « Dibodev, baromètre 2026 des prix du logiciel sur mesure » avec un lien vers cette page.',
    csvLinkLabel: 'Télécharger le relevé (CSV)',
    openDataLinkLabel: 'Voir la fiche sur data.gouv.fr',
    csvFootnote: `Une source manque ou a changé de prix${NBSP}? Écrivez-moi, je corrige et je date la correction.`,
  },
  fiveYears: {
    eyebrow: 'Sur cinq ans',
    title: `Abonnement métier, freelance ou agence${NBSP}: ce que ça coûte sur cinq ans`,
    intro:
      'Un abonnement paraît toujours moins cher la première année. Voici le calcul sur cinq ans pour une application métier, maintenance comprise.',
    criterionLabel: 'Critère',
    columns: ['Abonnement métier du marché', 'Sur mesure par Dibodev', 'Sur mesure par une agence (médianes)'],
    rows: [
      {
        label: 'Prix de départ',
        cells: [
          { state: 'yes', text: `9 à 249${NBSP}€ par mois (prix 2026 des logiciels des quatre tests métier)` },
          { state: 'partial', text: `5 000 à 15 000${NBSP}€ au forfait` },
          { state: 'partial', text: `{agencyRange} (médianes des sources qui chiffrent ce palier)` },
        ],
      },
      {
        label: 'Coût sur cinq ans',
        cells: [
          { state: 'yes', text: '{subscriptionFiveYears}' },
          { state: 'partial', text: `{dibodevFiveYears}, maintenance de 100 à 300${NBSP}€ par mois comprise` },
          { state: 'no', text: `{agencyFiveYears}, avec une maintenance de 15 à 25${NBSP}% par an` },
        ],
      },
      {
        label: 'Vos règles de gestion',
        cells: [
          { state: 'partial', text: 'Celles prévues par l’éditeur' },
          { state: 'yes', text: 'Conçues autour de votre organisation' },
          { state: 'yes', text: 'Conçues autour de votre organisation' },
        ],
      },
      {
        label: 'Vos données et le code',
        cells: [
          { state: 'partial', text: 'Chez l’éditeur, export selon le logiciel' },
          { state: 'yes', text: 'À vous, code compris' },
          { state: 'yes', text: 'À vous dans la plupart des contrats, à vérifier' },
        ],
      },
      {
        label: 'Mise en route',
        cells: [
          { state: 'yes', text: 'Quelques jours' },
          { state: 'partial', text: '5 à 20 semaines, par étapes' },
          { state: 'partial', text: '3 à 12 mois selon La Fabrique du Net' },
        ],
      },
      {
        label: 'Quand ça a du sens',
        cells: [
          { state: 'yes', text: 'Un besoin standard, une petite équipe' },
          { state: 'yes', text: 'Un métier précis, des règles à vous, 1 à 50 utilisateurs' },
          { state: 'partial', text: 'Plusieurs équipes, un système d’information à relier' },
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
        title: 'Le périmètre fonctionnel',
        description:
          'Un outil qui gère une seule chose coûte bien moins qu’une plateforme qui relie devis, facturation, stock et clients. Chaque « et aussi » ajoute des jours.',
      },
      {
        title: 'Les utilisateurs et les rôles',
        description:
          'Un outil pour trois personnes est simple. Dès qu’il y a des rôles, des permissions et beaucoup de monde en même temps, l’architecture pèse : Nocode Factory compte 10 à 50 % de plus au-delà de cent utilisateurs.',
      },
      {
        title: 'Les intégrations',
        description:
          'Comptabilité, paiement, API externe : chaque connexion est un chantier, surtout quand l’autre système est capricieux. Une intégration simple se chiffre 2 000 à 5 000 € chez les agences qui la détaillent.',
      },
      {
        title: 'Le niveau de finition et les tests',
        description:
          'La Fabrique du Net mesure l’écart : 25 000 € de médiane pour du développement pur, 50 000 € quand les tests sont explicitement prévus.',
      },
      {
        title: 'Qui vous répond',
        description:
          'Un indépendant n’a ni commercial ni chef de projet à financer : les TJM publiés vont de 400 € en freelance à 800 ou 1 000 € en agence.',
      },
      {
        title: 'La région',
        description:
          'Île-de-France 50 000 € de médiane contre 15 000 € ailleurs, selon La Fabrique du Net. Le développement se fait à distance : rien n’oblige à payer la prime parisienne.',
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
          'Les fourchettes viennent des pages de tarifs ou des guides de prix des prestataires, toutes lues le 11 octobre 2026, avec un lien vers chacune. Aucun devis demandé, aucun prix négocié.',
      },
      {
        label: 'Tri',
        title: 'Trois tailles de projet',
        description:
          'Chaque fourchette est rangée dans une taille (outil simple, application métier, plateforme) d’après la description de la source. Une source qui ne donne qu’un chiffre global reste en fourchette globale et n’entre pas dans les médianes.',
      },
      {
        label: 'Calcul',
        title: 'Des médianes, pas des moyennes',
        description:
          'Pour chaque taille, la médiane des planchers et la médiane des plafonds publiés. Les abonnements sont ramenés au total sur la durée d’engagement, les tarifs horaires à la journée.',
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
    title: `Prix d’un logiciel sur mesure${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un logiciel sur mesure en 2026${NBSP}?`,
        answer:
          'Tout dépend de la taille du projet et de qui vous répond. Sur les 14 sources relevées, les médianes publiées vont de 5 000 à 12 500 € pour un outil simple, de 13 500 à 50 000 € pour une application métier complète et de 50 000 à 150 000 € pour une plateforme. La Fabrique du Net, qui mesure des budgets réellement engagés, trouve une médiane de 30 000 € tous projets confondus et de 20 000 € pour une application métier.',
      },
      {
        question: `Pourquoi les prix vont-ils de 2 500 à 300 000${NBSP}€${NBSP}?`,
        answer:
          'Parce que « logiciel sur mesure » recouvre un planning pour trois personnes comme une plateforme à dix mille utilisateurs, et qu’un indépendant et une agence de vingt personnes ne vendent pas la même structure. Les fourchettes les plus larges viennent des agences qui adressent aussi les grands comptes.',
      },
      {
        question: `Un freelance est-il moins cher qu’une agence${NBSP}?`,
        answer:
          'À périmètre égal, oui, en général. Les TJM publiés vont de 400 € en freelance à 500 à 700 € pour une agence selon Lonestone, et jusqu’à 800 à 1 000 € chez Sokeo. Un freelance n’a pas de commercial ni de chef de projet à financer. En échange, vérifiez qu’il a déjà livré des projets comparables et que le code vous sera remis.',
      },
      {
        question: `Combien coûte la maintenance d’un logiciel sur mesure${NBSP}?`,
        answer:
          'Les agences du relevé annoncent 10 à 25 % du prix initial par an, soit 5 000 à 12 500 € par an pour un outil à 50 000 €. Je facture la mienne au forfait, de 100 à 300 € par mois, hébergement, sauvegardes et petites évolutions compris.',
      },
      {
        question: `Un abonnement à un logiciel du marché n’est-il pas moins cher${NBSP}?`,
        answer:
          'Sur un an, presque toujours. Sur cinq ans, un abonnement de 9 à 249 € par mois représente 540 à 14 940 €, contre 11 000 à 33 000 € pour une application métier sur mesure chez moi, maintenance comprise. La vraie question est ailleurs : si le logiciel du marché colle à votre façon de travailler, prenez-le. Mes tests par métier vous le disent en six questions.',
      },
      {
        question: `Qu’est-ce qui n’est pas dans ce baromètre${NBSP}?`,
        answer:
          'Les devis, les remises et les prix négociés, que personne ne publie. Les prestataires qui ne donnent aucun chiffre public (KC Web ou Scale-me, par exemple) sont lus mais n’entrent pas dans les médianes. Et les prix hors de France.',
      },
      {
        question: `Comment estimer mon propre projet${NBSP}?`,
        answer:
          'Avec l’estimateur en trois questions de la page application métier, qui donne une fourchette pour votre taille de projet. Puis par un échange de trente minutes, gratuit, pour transformer la fourchette en devis au forfait.',
      },
      {
        question: `Puis-je réutiliser ces chiffres${NBSP}?`,
        answer:
          'Oui. Le relevé est téléchargeable en CSV sous licence CC BY 4.0 : citez « Dibodev, baromètre 2026 des prix du logiciel sur mesure » avec un lien vers cette page. Si vous repérez une erreur, écrivez-moi, je corrige et je date la correction.',
      },
    ],
  },
  relatedArticles: {
    title: 'Pour aller plus loin',
    intro:
      'Les articles qui détaillent le prix d’un outil sur mesure et le choix entre logiciel du marché et sur mesure.',
  },
  contactCta: {
    title: `Vous voulez un chiffre pour votre projet, pas une fourchette${NBSP}?`,
    description: `Décrivez-moi votre activité et ce que l’outil doit faire. Je vous réponds sous 24${NBSP}h avec un ordre de grandeur, puis un devis au forfait si vous voulez aller plus loin. Et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
  },
}
