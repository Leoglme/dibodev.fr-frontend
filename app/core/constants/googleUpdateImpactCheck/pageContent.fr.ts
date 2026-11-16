import type { DibodevGoogleUpdateImpactPageContent } from '~/core/types/DibodevGoogleUpdateImpactPage'
import { GOOGLE_SEARCH_STATUS_DASHBOARD_URL } from '~/core/constants/googleSearchUpdates'
import {
  GOOGLE_CORE_UPDATES_SOURCE,
  GOOGLE_TRAFFIC_DROPS_SOURCE,
} from '~/core/constants/googleUpdateImpactCheck/pageShared'
import { NBSP } from '~/core/constants/typography'

export const GOOGLE_UPDATE_IMPACT_PAGE_FR: DibodevGoogleUpdateImpactPageContent = {
  meta: {
    title: `Mise à jour Google${NBSP}: mon site est-il touché${NBSP}? Test gratuit`,
    description: `Google déploie une mise à jour de son classement depuis le 10 novembre 2026. Export Search Console ou 5 questions${NBSP}: votre site est-il touché${NBSP}?`,
    inLanguage: 'fr-FR',
    schemaAbout:
      'Mise à jour principale de Google de novembre 2026 (November 2026 core update) et son effet sur la visibilité d’un site',
  },
  breadcrumbLabel: `Mise à jour Google${NBSP}: mon site est-il touché${NBSP}?`,
  shareImage: {
    titleLines: ['Mise à jour Google :', 'mon site est-il', 'touché ?'],
    highlight: 'touché',
    subtitle: 'Export Search Console ou test en 5 questions',
    badge: 'Gratuit · sans inscription',
    alt: 'Mise à jour Google : mon site est-il touché ? Outil gratuit sur dibodev.fr',
  },
  hero: {
    titleBefore: `Mise à jour Google${NBSP}: mon site est-il `,
    titleHighlight: 'touché',
    titleAfter: `${NBSP}?`,
    reassurances: [
      'Gratuit, sans inscription',
      'Fichier lu dans votre navigateur',
      'Dates relues sur Google le 16 novembre 2026',
    ],
    briefTitle: 'En bref, au 16 novembre 2026',
    brief: `Google a lancé le 10 novembre 2026 une mise à jour générale de son classement, la «${NBSP}November 2026 core update${NBSP}», dont le déploiement peut prendre jusqu’à deux semaines. Ce n’est pas une sanction${NBSP}: Google ne vise ni un site ni une page en particulier. Avant de toucher à votre site, attendez la fin du déploiement, puis une semaine, et comparez avec une semaine d’avant le début.`,
    authorIntro: 'Outil conçu par',
    authorBio:
      'développeur freelance près de Rennes. Je crée et je reprends des sites et des outils métier pour les TPE et les PME.',
  },
  checker: {
    tabsLabel: 'Choisir comment vérifier',
    exportTabLabel: 'J’ai la Search Console',
    exportTabHint: 'Je dépose mon export, verdict chiffré',
    quizTabLabel: 'Je n’ai pas la Search Console',
    quizTabHint: '5 questions, 1 minute',
    updateSelectLabel: 'Mise à jour comparée',
    updateOptionTemplate: '{name} ({kind}, depuis le {startDate})',
    updateKindLabels: { core: 'mise à jour générale', spam: 'mise à jour antispam' },
    dropZoneTitle: 'Déposez votre export de la Search Console',
    dropZoneText:
      'Le fichier .zip téléchargé depuis le rapport Performances, ou ses fichiers .csv. Vous pouvez en déposer plusieurs à la fois.',
    dropZoneButton: 'Choisir un fichier',
    dropZoneFormats: '.zip ou .csv',
    privacyNote: 'Votre fichier est lu dans votre navigateur. Rien n’est envoyé à mon serveur, rien n’est gardé.',
    readingLabel: 'Lecture du fichier…',
    exampleButton: 'Essayer avec un exemple',
    exampleBadge: `Exemple${NBSP}: données fictives`,
    resetButton: 'Effacer',
    errors: {
      zipUnsupported:
        'Votre navigateur ne sait pas ouvrir ce .zip. Ouvrez-le sur votre ordinateur et déposez ici les fichiers .csv qu’il contient (Dates.csv et Pages.csv), ou essayez avec un navigateur à jour.',
      zipUnreadable:
        'Ce .zip semble abîmé. Exportez-le à nouveau depuis la Search Console, ou déposez directement ses fichiers .csv.',
      noRecognizedFile:
        'Aucun fichier de la Search Console reconnu. Déposez le .zip du rapport Performances, ou ses fichiers Dates.csv et Pages.csv.',
    },
    exportStepsTitle: 'Comment exporter depuis la Search Console',
    exportSteps: [
      `Ouvrez la Search Console, puis le rapport «${NBSP}Performances${NBSP}» (menu de gauche, «${NBSP}Résultats de recherche${NBSP}»).`,
      `Choisissez la période «${NBSP}3 derniers mois${NBSP}», ou l’onglet «${NBSP}Comparer${NBSP}» pour opposer deux périodes${NBSP}: les pages qui ont bougé apparaissent alors.`,
      `Cliquez sur «${NBSP}Exporter${NBSP}», en haut à droite du rapport.`,
      `Choisissez «${NBSP}Télécharger le fichier CSV${NBSP}», puis déposez ici le .zip obtenu, sans l’ouvrir.`,
    ],
    resultLabel: 'Résultat',
    idleTitle: 'Votre verdict s’affichera ici',
    idleText: 'Déposez votre export, ou essayez avec un exemple pour voir à quoi ressemble le résultat.',
    verdictTitles: {
      affected: 'Touché, probablement',
      stable: 'Pas touché, d’après vos chiffres',
      winner: 'Plutôt gagnant',
      startedBefore: 'La baisse a commencé avant la mise à jour',
      tooEarly: 'Trop tôt pour conclure',
      unreadable: 'Comparaison impossible avec ce fichier',
    },
    verdictTexts: {
      affected: `Depuis le {startDate}, vos {metric} sont nettement en dessous des mêmes jours de semaine d’avant, alors que les semaines précédentes tenaient. La mise à jour est la cause la plus probable. Ce n’est pas une sanction${NBSP}: ne réécrivez rien dans la précipitation, vérifiez d’abord que le site fonctionne, puis regardez quelles pages ont baissé.`,
      stable: `Depuis le {startDate}, vos {metric} restent à moins de 20${NBSP}% des mêmes jours de semaine d’avant. Rien à faire à cause de la mise à jour${NBSP}: continuez comme avant.`,
      winner: `Depuis le {startDate}, vos {metric} sont nettement au-dessus des mêmes jours de semaine d’avant. Gardez ce qui marche, et ne changez pas tout maintenant.`,
      startedBefore: `Vos {metric} avaient déjà baissé de 20${NBSP}% ou plus dans les semaines d’avant le {startDate}. La mise à jour n’explique donc pas tout${NBSP}: cherchez d’abord une autre cause (panne, changement sur le site, liens de pages modifiés, saison).`,
      tooEarly: `Pendant un déploiement, les chiffres bougent d’un jour à l’autre. Google conseille d’attendre au moins une semaine après la fin du déploiement avant de comparer. Revenez avec un nouvel export à ce moment-là.`,
      unreadable: 'Il manque de quoi comparer les jours d’après le début avec ceux d’avant.',
    },
    rolloutOngoingNote: 'Le déploiement commencé le {startDate} n’est pas annoncé terminé.',
    rolloutWaitNote: `Le déploiement s’est terminé le {endDate}${NBSP}: un export qui va jusqu’au {waitUntil} au moins donnera un verdict.`,
    provisionalTemplate: `Tendance provisoire sur {days}${NBSP}jours${NBSP}: {trend}.`,
    trendLabels: {
      affected: 'en baisse nette',
      stable: 'stable',
      winner: 'en hausse nette',
      startedBefore: 'en baisse, mais la baisse avait commencé avant',
    },
    unreadableTexts: {
      noDates: `Le fichier «${NBSP}Dates${NBSP}» n’a pas été trouvé. Il est dans le .zip exporté depuis le rapport Performances.`,
      noDaysBefore: `Vos données commencent trop tard${NBSP}: il faut plusieurs semaines avant le {startDate}. Exportez la période «${NBSP}3 derniers mois${NBSP}».`,
      noTrafficBefore: `Aucun clic ni aucune impression avant le {startDate} dans ce fichier${NBSP}: rien à comparer.`,
      endsBeforeUpdate:
        'Vos données s’arrêtent avant le {startDate}, début de la mise à jour. Exportez une période plus récente.',
    },
    figuresTitle: 'Vos chiffres',
    metricLabels: { clicks: 'clics', impressions: 'impressions' },
    currentFigureTemplate: `{metric} depuis le {startDate} ({days}${NBSP}jours)`,
    baselineFigureLabel: 'Mêmes jours de semaine, juste avant',
    changeFigureLabel: 'Écart',
    changeBeforeFigureLabel: 'Écart des semaines d’avant',
    changeBeforeUnknown: 'non mesurable',
    pagesTitle: 'Vos pages',
    droppedToZeroTitle: 'Tombées à zéro impression',
    biggestDropsTitle: 'Plus fortes baisses',
    biggestGainsTitle: 'Plus fortes hausses',
    pageImpressionsLabel: 'impressions, avant puis après',
    pagesEmptyList: 'Aucune.',
    pagesNeedComparison: `Pour voir les pages qui ont bougé, exportez aussi le rapport en mode «${NBSP}Comparer${NBSP}», par exemple les 28${NBSP}derniers jours face aux 28${NBSP}jours précédents.`,
    pagesMissing: `Ajoutez le fichier «${NBSP}Pages${NBSP}» d’un export en mode «${NBSP}Comparer${NBSP}» pour voir les pages qui ont bougé.`,
    disclaimer: `Lecture automatique de vos chiffres, pas un audit. Seuils et limites dans la section «${NBSP}Méthode${NBSP}».`,
    ctaIntro: `Un premier avis gratuit sur vos chiffres${NBSP}? Je regarde, et je vous dis par où commencer ou s’il vaut mieux attendre.`,
    idleCtaIntro: `Pas le temps d’exporter${NBSP}? Décrivez-moi ce que vous voyez, je vous donne un premier avis gratuit.`,
    ctaLabels: {
      affected: 'Avoir un premier avis sur cette baisse',
      stable: 'Poser une question',
      winner: 'Poser une question',
      startedBefore: 'Chercher la cause avec moi',
      tooEarly: 'Avoir un premier avis gratuit',
      unreadable: 'Décrire ce que je vois',
    },
    idleCtaLabel: 'Avoir un premier avis gratuit',
  },
  mobileContactBar: {
    text: `Un premier avis sur votre baisse${NBSP}?`,
    buttonLabel: 'Me contacter',
  },
  definition: {
    anchorId: 'mise-a-jour',
    eyebrow: 'Ce que dit Google',
    title: 'Ce qu’est une mise à jour de Google',
    intro: 'Six points relus le 16 novembre 2026 sur la documentation de Google et son tableau de bord officiel.',
    facts: [
      {
        contextLabel: 'Plusieurs fois par an',
        title: 'Une mise à jour générale du classement',
        text: `Une «${NBSP}core update${NBSP}», ou mise à jour principale, est un changement large des systèmes qui classent les résultats de Google. Google en fait plusieurs fois par an, et les annonce sur son tableau de bord officiel.`,
        sourceName: 'Google Search Central, mises à jour principales de la recherche Google',
        sourceUrl: GOOGLE_CORE_UPDATES_SOURCE.url,
      },
      {
        contextLabel: 'Pas une sanction',
        title: 'Elle ne vise ni un site ni une page',
        text: 'Google précise que ces mises à jour ne ciblent pas de site ou de page en particulier. Une page qui recule n’a pas forcément un problème de contenu.',
        sourceName: 'Google Search Central, mises à jour principales de la recherche Google',
        sourceUrl: GOOGLE_CORE_UPDATES_SOURCE.url,
      },
      {
        contextLabel: 'Jusqu’à 2 semaines',
        title: 'Un déploiement en plusieurs jours',
        text: `La mise à jour de novembre 2026 a commencé le 10 novembre${NBSP}; Google annonce un déploiement qui peut prendre jusqu’à deux semaines. Celles de mars et de mai 2026 ont duré 12${NBSP}jours chacune.`,
        sourceName: 'Tableau de bord de la recherche Google (Search Status Dashboard)',
        sourceUrl: GOOGLE_SEARCH_STATUS_DASHBOARD_URL,
      },
      {
        contextLabel: 'Une semaine après',
        title: 'Attendre, puis comparer',
        text: `Google conseille d’attendre au moins une semaine complète après la fin du déploiement, puis de comparer cette semaine-là avec une semaine d’avant le début. Il déconseille les corrections express faites à chaud.`,
        sourceName: 'Google Search Central, mises à jour principales de la recherche Google',
        sourceUrl: GOOGLE_CORE_UPDATES_SOURCE.url,
      },
      {
        contextLabel: 'D’autres causes',
        title: 'Une baisse n’est pas toujours la mise à jour',
        text: `Problème technique (serveur, fichier robots.txt, balise noindex), piratage, action manuelle pour spam, liens de pages changés lors d’une refonte, saison ou baisse de la demande${NBSP}: Google liste aussi ces causes dans son guide sur les baisses de trafic.`,
        sourceName: 'Google Search Central, déboguer une baisse du trafic de la recherche Google',
        sourceUrl: GOOGLE_TRAFFIC_DROPS_SOURCE.url,
      },
      {
        contextLabel: 'Remonter',
        title: 'Une remontée possible, sans date garantie',
        text: 'Selon Google, une page peut regagner des places entre deux mises à jour, en quelques jours comme en plusieurs mois. Personne ne peut promettre une date.',
        sourceName: 'Google Search Central, mises à jour principales de la recherche Google',
        sourceUrl: GOOGLE_CORE_UPDATES_SOURCE.url,
      },
    ],
  },
  calendar: {
    anchorId: 'calendrier',
    eyebrow: 'Calendrier',
    title: 'Les mises à jour de Google en 2026',
    intro:
      'Les mises à jour principales et antispam relevées sur le tableau de bord officiel de la recherche Google le 16 novembre 2026. Dates à l’heure du Pacifique.',
    nameColumnLabel: 'Mise à jour',
    detailColumnLabel: 'Dates',
    linkColumnLabel: 'Source',
    linkLabel: 'Tableau de bord de Google',
    finishedTemplate: '{kind}, du {startDate} au {endDate}.',
    ongoingTemplate: '{kind}, depuis le {startDate}. En cours au {readAt}.',
    kindLabels: { core: 'Mise à jour générale', spam: 'Mise à jour antispam' },
  },
  reading: {
    anchorId: 'lire-le-resultat',
    eyebrow: 'Comment lire le résultat',
    title: 'Six verdicts, et ce qu’ils veulent dire',
    intro: `Avec votre export, l’outil donne l’un de ces six verdicts. Le test en 5 questions, lui, dit «${NBSP}mise à jour probable${NBSP}», «${NBSP}autre cause probable${NBSP}» ou «${NBSP}trop tôt pour savoir${NBSP}».`,
    items: [
      {
        title: 'Touché, probablement',
        description: `Baisse de 20${NBSP}% ou plus depuis le début, alors que les semaines d’avant tenaient. Ne rien réécrire à chaud${NBSP}: vérifier le site, puis regarder les pages qui ont baissé.`,
      },
      {
        title: 'Pas touché',
        description: `Moins de 20${NBSP}% d’écart, dans un sens ou dans l’autre. La mise à jour ne change rien pour vous.`,
      },
      {
        title: 'Plutôt gagnant',
        description: `Hausse de 20${NBSP}% ou plus depuis le début. Gardez ce qui marche.`,
      },
      {
        title: 'La baisse a commencé avant',
        description: `Les semaines d’avant le début avaient déjà perdu 20${NBSP}% ou plus. Cherchez une autre cause en premier${NBSP}: panne, refonte, liens changés, saison.`,
      },
      {
        title: 'Trop tôt pour conclure',
        description: `Moins de 7${NBSP}jours de données, déploiement pas terminé, ou moins d’une semaine après la fin. La tendance provisoire s’affiche, avec cette réserve.`,
      },
      {
        title: 'Comparaison impossible',
        description:
          'Pas de fichier des dates, pas assez de semaines avant le début, ou aucune visite avant. Le message dit quoi exporter.',
      },
    ],
  },
  doAndDont: {
    anchorId: 'que-faire',
    eyebrow: 'Que faire, que ne pas faire',
    title: 'Six réflexes pendant une mise à jour de Google',
    intro: 'Dans l’ordre. Le plus utile est souvent de ne rien changer trop vite.',
    pitfallLabel: 'L’erreur fréquente',
    items: [
      {
        title: 'Vérifier d’abord que le site marche',
        text: `Ouvrez votre site sur téléphone et sur ordinateur, testez le formulaire de contact, regardez les rapports «${NBSP}Pages${NBSP}» et «${NBSP}Problèmes de sécurité${NBSP}» de la Search Console. Une panne ou un piratage ressemblent à une mise à jour.`,
        pitfall: 'Accuser Google alors que le site était en panne.',
      },
      {
        title: 'Ne rien réécrire dans la panique',
        text: 'Google déconseille les corrections express. Si vous changez tout pendant le déploiement, vous ne saurez plus ce qui a joué.',
        pitfall: `Supprimer des pages ou réécrire tous les titres pendant le déploiement.`,
      },
      {
        title: 'Noter les dates',
        text: 'Notez le jour où la baisse a commencé, et ce qui a changé sur le site dans les semaines d’avant (refonte, hébergeur, extension, liens des pages).',
        pitfall: 'Se fier à sa mémoire un mois plus tard.',
      },
      {
        title: 'Attendre la fin, puis une semaine',
        text: 'Le tableau de bord de Google indique quand le déploiement est terminé. Une semaine après, refaites l’export et comparez avec une semaine d’avant le début.',
        pitfall: 'Conclure au troisième jour, quand les chiffres bougent encore.',
      },
      {
        title: 'Regarder page par page',
        text: `Une baisse générale et une baisse sur deux ou trois pages ne se traitent pas pareil. Le mode «${NBSP}Comparer${NBSP}» de la Search Console montre lesquelles ont bougé.`,
        pitfall: 'Tout refaire alors que trois pages seulement ont reculé.',
      },
      {
        title: 'Améliorer pour vos clients, pas pour Google',
        text: `Si une page a reculé, demandez-vous si elle répond bien à la question de vos clients${NBSP}: informations à jour, prix, zone, délais, moyen de vous joindre.`,
        pitfall: 'Ajouter des mots-clés partout.',
      },
    ],
  },
  ownSite: {
    anchorId: 'mon-site',
    eyebrow: 'Vécu',
    title: 'Ce que j’ai mesuré sur mon propre site',
    emphasizedIntro: 'Entre le 27 octobre et le 12 novembre 2026,',
    text: `23 pages de dibodev.fr, en français, en anglais et en espagnol, ont perdu toutes leurs impressions du jour au lendemain, tout en restant indexées. Plus de la moitié sont tombées avant le 10 novembre${NBSP}: la mise à jour est le contexte probable, pas une cause prouvée. J’ai décidé de ne retoucher aucune de ces pages avant la fin du déploiement, et de comparer une semaine après.`,
    footnote: '',
  },
  method: {
    eyebrow: 'Méthode',
    title: 'Méthode et limites',
    intro: 'Des seuils simples, écrits ici pour que vous puissiez refaire le calcul à la main.',
    steps: [
      {
        label: 'Jours comparés',
        title: 'Un lundi face à un lundi',
        description: `Les jours depuis le début de la mise à jour, cinq semaines au plus, sont comparés aux mêmes jours de semaine juste avant${NBSP}: on recule d’un nombre entier de semaines. Le dernier jour de l’export est laissé de côté${NBSP}: Google ne l’a pas encore fini de compter.`,
      },
      {
        label: 'Mesure',
        title: 'Clics, ou impressions',
        description:
          'Les clics quand il y en a au moins 100 sur la période d’avant, sinon les impressions, plus nombreuses et moins sensibles au hasard.',
      },
      {
        label: 'Seuils',
        title: `20${NBSP}%, dans un sens ou dans l’autre`,
        description: `Baisse de 20${NBSP}% ou plus${NBSP}: touché. Hausse de 20${NBSP}% ou plus${NBSP}: gagnant. Entre les deux${NBSP}: stable. Si les semaines d’avant avaient déjà perdu 20${NBSP}% ou plus face aux semaines d’encore avant, le verdict devient «${NBSP}la baisse a commencé avant${NBSP}».`,
      },
      {
        label: 'Prudence',
        title: 'Trop tôt, tant que ça bouge',
        description: `Moins de 7${NBSP}jours de données, déploiement pas terminé, ou moins d’une semaine après la fin${NBSP}: «${NBSP}trop tôt${NBSP}», avec la tendance provisoire dès 3${NBSP}jours.`,
      },
      {
        label: 'Pages',
        title: 'Seulement en mode comparaison',
        description: `Une page «${NBSP}tombée à zéro${NBSP}» avait au moins 10 impressions sur la période d’avant et aucune après. Dix pages au plus par liste, classées par impressions perdues ou gagnées.`,
      },
      {
        label: 'Limites',
        title: 'Une lecture, pas un diagnostic',
        description:
          'L’outil ne connaît ni votre secteur, ni la saison, ni les jours fériés, ni vos pannes. Le test en 5 questions donne une tendance, jamais une certitude.',
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Mise à jour Google${NBSP}: les questions qu’on me pose`,
    questions: [
      {
        question: `Comment savoir si mon site a été touché par la mise à jour Google${NBSP}?`,
        answer: `Comparez vos clics et vos impressions depuis le début de la mise à jour avec les mêmes jours de semaine d’avant, dans le rapport Performances de la Search Console. L’outil de cette page le fait pour vous à partir de l’export. Une baisse de 20${NBSP}% ou plus, qui n’avait pas commencé avant, rend la mise à jour probable. Pour conclure, attendez une semaine après la fin du déploiement.`,
      },
      {
        question: `Combien de temps dure une mise à jour Google${NBSP}?`,
        answer: `Google annonce en général un déploiement qui peut prendre jusqu’à deux semaines. En 2026, les mises à jour principales de mars et de mai ont duré 12${NBSP}jours chacune, et la mise à jour antispam de septembre 14${NBSP}jours. Celle de novembre a commencé le 10 novembre 2026${NBSP}: la date de fin s’affiche sur le tableau de bord de Google.`,
      },
      {
        question: `C’est quoi une core update${NBSP}?`,
        answer: `C’est le nom anglais d’une mise à jour principale${NBSP}: un changement large des systèmes qui classent les résultats de Google, fait plusieurs fois par an. Elle ne vise pas un site en particulier. Des pages montent, d’autres descendent, sans que les secondes aient forcément un défaut.`,
      },
      {
        question: `Mon site a disparu de Google, est-ce une sanction${NBSP}?`,
        answer: `Une mise à jour principale n’est pas une sanction. Si votre site n’apparaît même plus quand on tape le nom de votre entreprise, cherchez plutôt un problème technique (page bloquée, site en panne), un piratage ou une action manuelle${NBSP}: les rapports «${NBSP}Actions manuelles${NBSP}» et «${NBSP}Problèmes de sécurité${NBSP}» de la Search Console le disent.`,
      },
      {
        question: `Faut-il modifier ses pages pendant une mise à jour${NBSP}?`,
        answer: `Non. Google déconseille les corrections express, et un changement pendant le déploiement brouille la comparaison. Corrigez seulement ce qui est cassé (formulaire, page en erreur, lien mort), et gardez le reste pour après.`,
      },
      {
        question: `Quand mon site va-t-il remonter${NBSP}?`,
        answer: `Personne ne peut le promettre. Selon Google, une page peut regagner des places entre deux mises à jour, en quelques jours comme en plusieurs mois, si elle devient plus utile pour ceux qui la lisent. Une remontée n’est pas garantie.`,
      },
      {
        question: `Quelle différence entre une mise à jour générale et une mise à jour antispam${NBSP}?`,
        answer: `La mise à jour générale (core update) revoit le classement de toutes sortes de pages. La mise à jour antispam vise les sites qui ne respectent pas les règles de Google contre le spam. Le tableau de bord de Google les liste séparément, avec leurs dates.`,
      },
      {
        question: `Comment exporter mes données de la Search Console${NBSP}?`,
        answer: `Dans le rapport «${NBSP}Performances${NBSP}», choisissez la période «${NBSP}3 derniers mois${NBSP}» (ou l’onglet «${NBSP}Comparer${NBSP}»), cliquez sur «${NBSP}Exporter${NBSP}» en haut à droite, puis sur «${NBSP}Télécharger le fichier CSV${NBSP}». Vous obtenez un .zip à déposer tel quel dans l’outil.`,
      },
      {
        question: `Mon fichier est-il envoyé quelque part${NBSP}?`,
        answer: `Non. Le .zip est ouvert et lu par votre navigateur, sur votre ordinateur. Rien n’est envoyé à mon serveur et rien n’est gardé${NBSP}: fermez la page, tout disparaît.`,
      },
      {
        question: `Je n’ai pas la Search Console, comment savoir${NBSP}?`,
        answer: `Répondez au test en 5 questions de l’onglet «${NBSP}Je n’ai pas la Search Console${NBSP}»${NBSP}: il donne une tendance (mise à jour probable, autre cause probable, ou trop tôt pour savoir). Pour un verdict chiffré, la Search Console est gratuite${NBSP}: il suffit d’y ajouter votre site.`,
      },
      {
        question: `Mes visites baissent, mais pas mes positions sur Google${NBSP}: d’où ça vient${NBSP}?`,
        answer: `Souvent d’ailleurs que Google${NBSP}: saison, baisse de la demande, panne, formulaire de contact cassé, ou trafic venu d’une autre source (réseaux sociaux, annuaire, publicité). Comparez avec la même période de l’an dernier et vérifiez le site.`,
      },
    ],
  },
  relatedArticles: {
    title: 'À lire aussi',
    intro: 'Des articles sur la visibilité et la sécurité des sites de petites entreprises.',
  },
  contactCta: {
    title: `Vos visites venant de Google ont chuté${NBSP}?`,
    description: `Envoyez-moi le lien de votre site et ce que vous voyez${NBSP}: je vous réponds sous 24${NBSP}h avec un premier avis gratuit, et je vous dis s’il vaut mieux attendre.`,
    button: 'Demander un premier avis',
  },
}
