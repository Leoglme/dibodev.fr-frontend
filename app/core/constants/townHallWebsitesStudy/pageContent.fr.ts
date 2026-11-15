import type { DibodevTownHallWebsitesStudyPageContent } from '~/core/types/DibodevTownHallWebsitesStudyPage'
import { JOOMLA_VERSION_SOURCES } from '~/core/constants/joomlaVersionCheck/pageShared'
import { TOWN_HALL_WEBSITES_STUDY_SOURCES } from '~/core/constants/townHallWebsitesStudy/pageShared'
import { NBSP } from '~/core/constants/typography'

/** Every figure below comes from the stats.md of the 15-16 November 2026 survey: update them by hand after a new survey. */
export const TOWN_HALL_WEBSITES_STUDY_PAGE_CONTENT_FR: DibodevTownHallWebsitesStudyPageContent = {
  meta: {
    title: `Sites internet des mairies${NBSP}: sont-ils à jour${NBSP}? Étude 2026`,
    description: `19 854 sites de mairies lus les 15 et 16 novembre 2026${NBSP}: WordPress, versions de PHP et de Joomla, https, par département, méthode et limites.`,
    datasetName: 'Sites internet des mairies françaises, relevé des 15 et 16 novembre 2026',
    datasetDescription: `Chiffres agrégés par département sur les sites déclarés par les mairies dans l’annuaire officiel de l’administration${NBSP}: mairies, sites sans déclaration, sites lus, part de WordPress et de Joomla, sites qui affichent leur version de PHP et, parmi eux, ceux sur une version qui ne reçoit plus de correctifs de sécurité. Aucune commune ni adresse de site.`,
  },
  breadcrumbLabel: 'Sites internet des mairies',
  numberLocale: 'fr-FR',
  percentTemplate: `{value}${NBSP}%`,
  hero: {
    titlePart1: 'Les sites internet des ',
    titleHighlight: 'mairies françaises',
    titlePart2: ` sont-ils à jour${NBSP}?`,
    description: `Les 15 et 16 novembre 2026, j’ai lu une fois la page d’accueil de chaque site propre que les mairies déclarent dans l’annuaire officiel, comme n’importe quel visiteur. 19 854 sites ont répondu. Voici ce qu’ils laissent voir de leurs logiciels, avec la base de chaque chiffre. Deux choses avant de lire${NBSP}: la version de PHP ne se lit que sur un site sur quatre, et aucune commune n’est citée.`,
    cta: 'Lire la version de PHP d’un site',
    ctaSecondary: 'Voir les chiffres par département',
    reassurances: [
      'Chiffres agrégés, aucune commune citée',
      'Relevé des 15 et 16 novembre 2026',
      'Données par département (CSV, CC BY)',
    ],
    stats: [
      { value: '19 854', label: 'sites de mairies lus' },
      { value: `48,3${NBSP}%`, label: 'sous WordPress' },
      { value: `35,6${NBSP}%`, label: 'sans correctifs PHP, sur 4 887 sites' },
    ],
  },
  keyFigures: {
    eyebrow: 'Les chiffres clés',
    title: 'Ce que les sites des mairies laissent voir',
    intro: `Chaque chiffre est donné avec sa base, c’est-à-dire le nombre de sites sur lequel il est calculé. Un site, ici, c’est une adresse distincte${NBSP}: une commune nouvelle ou une communauté de communes peut porter le site de plusieurs mairies.`,
    indicatorColumnLabel: 'Ce qui est compté',
    basisColumnLabel: 'Sur quelle base',
    resultColumnLabel: 'Résultat',
    items: [
      {
        name: 'Mairies dans l’annuaire officiel',
        coverage: `Toutes les fiches «${NBSP}mairie${NBSP}» de l’annuaire de l’administration, dans 101 départements, outre-mer compris (dont 803 mairies déléguées ou annexes).`,
        price: '35 733',
        priceCondition:
          '13 363 sans site déclaré, 728 qui renvoient vers une page Facebook ou une plateforme toute faite, 21 642 qui déclarent un site propre',
      },
      {
        name: 'Sites lus',
        coverage:
          'Les 20 865 sites distincts déclarés par ces 21 642 mairies, une lecture de la page d’accueil chacun.',
        price: '19 854',
        priceCondition: `95,2${NBSP}% des 20 865${NBSP}; 1 011 n’ont pas répondu correctement (réponse en erreur, domaine introuvable, certificat invalide, délai dépassé)`,
      },
      {
        name: 'WordPress',
        coverage: 'Les 19 854 sites lus.',
        price: `48,3${NBSP}%`,
        priceCondition: `9 592 sites. Loin derrière${NBSP}: Joomla 4,0${NBSP}% (798), Drupal 3,4${NBSP}% (670), TYPO3 3,3${NBSP}% (648), SPIP 1,0${NBSP}% (206)${NBSP}; 16,6${NBSP}% (3 299) non identifiés`,
      },
      {
        name: 'Version de PHP visible',
        coverage: 'Les 19 854 sites lus.',
        price: `24,6${NBSP}%`,
        priceCondition: '4 887 sites, un sur quatre. Les chiffres de PHP qui suivent ne valent que pour eux',
      },
      {
        name: 'PHP qui ne reçoit plus de correctifs de sécurité',
        coverage: `Les 4 887 sites qui affichent leur version de PHP. Sans correctifs${NBSP}: PHP 8.1 et plus ancien.`,
        price: `35,6${NBSP}%`,
        priceCondition: `1 739 sites${NBSP}: PHP 5.x 361, PHP 7.0 à 7.3 384, PHP 7.4 684, PHP 8.0 140, PHP 8.1 170`,
      },
      {
        name: 'PHP 8.2',
        coverage: 'Les 4 887 sites qui affichent leur version de PHP.',
        price: `9,3${NBSP}%`,
        priceCondition: `454 sites, qui perdent leurs correctifs le 31 décembre 2026. Au 1er janvier 2027, 44,9${NBSP}% (2 193 sur 4 887) seront sans correctifs si rien ne bouge`,
      },
      {
        name: 'Joomla sur une branche sans correctifs',
        coverage: `Les 580 sites Joomla dont la version se lit, sur 798 (72,7${NBSP}%).`,
        price: `58,8${NBSP}%`,
        priceCondition: '341 sites en Joomla 1.x, 2.5, 3 ou 4, dont 248 en Joomla 3',
      },
      {
        name: 'WordPress avec deux versions majeures de retard ou plus',
        coverage:
          'Les 5 155 sites WordPress dont la version se lit, hors plateforme mutualisée (voir l’encadré sous le tableau).',
        price: `27,0${NBSP}%`,
        priceCondition: `1 393 sites${NBSP}; 68,9${NBSP}% (3 554) sont sur la dernière version majeure, la 7.1`,
      },
      {
        name: 'Sans https valide',
        coverage: 'Les 19 854 sites lus.',
        price: `4,6${NBSP}%`,
        priceCondition:
          '913 sites, dont 682 à cause d’un certificat invalide (expiré, établi pour un autre nom…), les autres ne répondant pas en https',
      },
    ],
    calloutEmphasizedIntro: `À lire avant de citer un chiffre${NBSP}:`,
    calloutText: `la version de PHP ne se lit que sur un site sur quatre (4 887 sur 19 854), et les 35,6${NBSP}% ne valent que pour ces sites-là. Un site derrière un pare-feu, un CDN ou un hébergeur qui masque cette information n’apparaît pas, et ce sont plutôt les hébergements anciens qui affichent leur version${NBSP}: sur l’ensemble des sites, la part serait probablement plus basse. Ce n’est ni un classement des communes ni une liste de sites${NBSP}: aucune commune n’est citée, ni sur cette page ni dans le fichier.`,
    calloutFootnote: `WordPress${NBSP}: 1 059 sites sont identiques (même version 6.6.1, même serveur, une seule installation partagée). C’est très probablement une seule plateforme mutualisée, donc une seule décision technique${NBSP}: je l’écarte pour parler de sites gérés un par un. En la comptant, la part avec deux versions majeures de retard ou plus serait de 39,5${NBSP}% (2 452 sur 6 214).`,
  },
  departments: {
    eyebrow: 'Par département',
    title: 'Les 15 départements où j’ai lu le plus de sites',
    intro: `Pour chaque part, l’effectif entre parenthèses. La part de PHP sans correctifs se calcule sur les sites du département qui affichent leur version, souvent quelques dizaines${NBSP}: quelques points d’écart entre deux départements ne veulent rien dire. Les 101 départements sont dans le fichier à télécharger.`,
    departmentColumnLabel: 'Département',
    countsColumnLabel: 'Mairies et sites lus',
    phpColumnLabel: 'PHP sans correctifs',
    nameTemplate: '{code} · {name}',
    countsTemplate: `{townHallCount} mairies dans l’annuaire, dont {withoutDeclaredWebsiteCount} sans site déclaré${NBSP}; {readWebsiteCount} sites lus. WordPress${NBSP}: {wordpressShare} ({wordpressCount}), Joomla${NBSP}: {joomlaShare} ({joomlaCount}).`,
    phpConditionTemplate: '{phpWithoutSecurityFixesCount} sur {phpVisibleWebsiteCount} sites qui affichent leur PHP',
    noShareLabel: '–',
    csvEmphasizedIntro: `Les 101 départements, à télécharger${NBSP}:`,
    csvText: `une ligne par département, avec les mairies de l’annuaire, celles sans site déclaré, les sites lus, les parts de WordPress et de Joomla, les sites qui affichent leur PHP et, parmi eux, ceux sans correctifs. Aucune commune, aucune adresse de site, aucun prestataire dans le fichier. Licence CC BY 4.0${NBSP}: citez «${NBSP}Dibodev, relevé des 15 et 16 novembre 2026${NBSP}» avec un lien vers cette page.`,
    csvLinkLabel: 'Télécharger les chiffres par département (CSV)',
    csvFootnote: `Petits effectifs${NBSP}: Paris, les Hauts-de-Seine, la Seine-Saint-Denis et l’outre-mer comptent moins de 40 sites lus. Leurs parts ne se commentent pas seules.`,
  },
  limits: {
    eyebrow: 'Limites',
    title: 'Ce que ces chiffres ne disent pas',
    intro: 'Je les mets ici plutôt qu’en bas de page, parce qu’elles changent la façon de lire les chiffres.',
    items: [
      {
        icon: 'EyeOff',
        title: 'Un site sur quatre affiche son PHP',
        description: `24,6${NBSP}% des sites lus (4 887 sur 19 854). Les autres sont derrière un pare-feu, un CDN comme Cloudflare ou un hébergeur qui masque l’information. Les hébergements anciens l’affichent plus souvent${NBSP}: étendue à tous les sites, la part «${NBSP}sans correctifs${NBSP}» serait probablement surestimée.`,
      },
      {
        icon: 'Server',
        title: 'La version annoncée par le serveur',
        description:
          'C’est celle que le serveur écrit dans sa réponse. Un hébergeur peut en servir une autre sans mettre cette mention à jour.',
      },
      {
        icon: 'Copy',
        title: 'Des grappes de sites identiques',
        description: `772 sites d’une même plateforme de communes (tous en PHP 8.4.27), 1 059 sites WordPress 6.6.1 identiques, 449 sites identiques faits avec un même générateur${NBSP}: une seule décision technique pèse sur des centaines de sites. Hors plateformes de communes, 42,5${NBSP}% des sites qui affichent leur PHP sont sans correctifs (1 708 sur 4 016).`,
      },
      {
        icon: 'Search',
        title: 'Des sites non identifiés',
        description: `16,6${NBSP}% des sites lus (3 299) restent non identifiés${NBSP}: site fait sur mesure, ou outil qui ne laisse aucune marque visible. 21 sites lus au début du relevé n’ont pas pu être reclassés après une correction de la détection.`,
      },
      {
        icon: 'RotateCcw',
        title: 'Quelques doublons',
        description: `90 des 19 854 sites lus (0,45${NBSP}%) mènent au même site qu’une autre adresse (avec et sans «${NBSP}www${NBSP}», ou renvoi vers un site commun) et sont comptés deux fois. Effet sur les parts${NBSP}: moins d’un demi-point, non corrigé.`,
      },
      {
        icon: 'Flag',
        title: 'Les trous de l’annuaire',
        description: `13 363 mairies n’y déclarent aucun site, et certaines en ont un${NBSP}; une mairie peut aussi déclarer un site périmé. La version se lit sur 64,8${NBSP}% des sites WordPress et 72,7${NBSP}% des sites Joomla.`,
      },
    ],
  },
  actions: {
    eyebrow: 'À quoi ça sert pour une mairie',
    title: 'Ce que vous pouvez faire pour le site de votre commune',
    intro:
      'Lire la version de PHP, lire celle de Joomla si le site l’utilise, puis planifier la mise à jour. Les deux premiers se font avec la seule adresse du site, sans accès à son administration. Le troisième se décide avec le prestataire ou l’hébergeur.',
    items: {
      phpVersionCheck: {
        title: 'Lire la version de PHP du site',
        description: `Entrez l’adresse du site${NBSP}: l’outil gratuit lit la version de PHP quand le serveur l’affiche. PHP 8.1 et plus ancien ne reçoivent plus de correctifs de sécurité, PHP 8.2 les perd le 31 décembre 2026.`,
        linkLabel: 'Lire la version de PHP',
      },
      joomlaVersionCheck: {
        title: 'Si le site est sous Joomla, lire sa version',
        description:
          'Un second outil gratuit lit la version de Joomla dans le fichier public prévu pour ça. Joomla 3 et Joomla 4 ne reçoivent plus de correctifs, Joomla 5 en reçoit jusqu’au 12 octobre 2027.',
        linkLabel: 'Lire la version de Joomla',
      },
      phpUpdate: {
        title: 'Planifier la mise à jour de PHP',
        description: `Avant le 31 décembre 2026 si le site est en PHP 8.2 ou plus ancien${NBSP}: mettre à jour le site, puis changer la version de PHP, après une sauvegarde et un test sur une copie.`,
        linkLabel: `Voir la page «${NBSP}mise à jour PHP${NBSP}»`,
      },
      joomlaUpdate: {
        title: 'Pour un site Joomla, avancer une version à la fois',
        description:
          'Le passage se fait une branche après l’autre, jusqu’à Joomla 6, qui reçoit des correctifs de sécurité jusqu’au 16 octobre 2029. Il se prévoit en même temps que celui de PHP.',
        linkLabel: `Voir la page «${NBSP}mise à jour Joomla${NBSP}»`,
      },
    },
  },
  sources: {
    eyebrow: 'Les dates',
    title: 'Les fins de support, lues à la source',
    intro: `Une version «${NBSP}sans correctifs${NBSP}», ici, c’est une version que son projet ne corrige plus. Chaque date renvoie vers la page officielle du projet.`,
    facts: [
      {
        contextLabel: '31 décembre 2026',
        title: 'PHP 8.2 perd ses correctifs de sécurité',
        text: 'PHP 8.3, 8.4 et 8.5 en reçoivent jusqu’au 31 décembre 2027, 2028 et 2029.',
        sourceName: 'PHP, versions prises en charge',
        sourceUrl: JOOMLA_VERSION_SOURCES.phpSupportedVersions,
      },
      {
        contextLabel: '31 décembre 2025',
        title: `PHP 8.1 et plus ancien${NBSP}: plus aucun correctif`,
        text: 'PHP 8.1 est en fin de vie depuis le 31 décembre 2025, PHP 8.0 depuis le 26 novembre 2023, PHP 7.4 depuis le 28 novembre 2022 et PHP 5.6 depuis le 31 décembre 2018.',
        sourceName: 'PHP, versions en fin de vie',
        sourceUrl: TOWN_HALL_WEBSITES_STUDY_SOURCES.phpEndOfLife,
      },
      {
        contextLabel: '12 octobre 2027',
        title: 'Joomla 5, puis Joomla 6',
        text: `Joomla 5 reçoit des correctifs de sécurité jusqu’au 12 octobre 2027, Joomla 6 jusqu’au 16 octobre 2029. Dernières versions au moment du relevé${NBSP}: 5.4.10 et 6.2.`,
        sourceName: 'Joomla, calendrier des versions',
        sourceUrl: JOOMLA_VERSION_SOURCES.joomlaRoadmap,
      },
      {
        contextLabel: '14 octobre 2025',
        title: 'Joomla 4 n’est plus suivi',
        text: 'Joomla 4 ne reçoit plus aucun correctif depuis le 14 octobre 2025.',
        sourceName: 'Joomla, versions 5.3.4 et 4.4.14',
        sourceUrl: JOOMLA_VERSION_SOURCES.joomla4EndOfSupport,
      },
      {
        contextLabel: '17 août 2023',
        title: 'Joomla 3, arrêté',
        text: 'Le support officiel de Joomla 3 s’est arrêté le 17 août 2023. Les branches 1.x et 2.5, plus anciennes, sont aussi comptées sans correctifs.',
        sourceName: 'Joomla Magazine, juillet 2023',
        sourceUrl: JOOMLA_VERSION_SOURCES.joomla3ExtendedSupport,
      },
      {
        contextLabel: 'WordPress 7.1.4',
        title: 'La dernière version de WordPress',
        text: 'Dernière version publiée au moment du relevé, lue sur l’interface officielle de wordpress.org. La dernière version majeure est donc la 7.1.',
        sourceName: 'WordPress.org, versions',
        sourceUrl: TOWN_HALL_WEBSITES_STUDY_SOURCES.wordpressVersionApi,
      },
      {
        contextLabel: '15 novembre 2026',
        title: 'La liste des mairies',
        text: `Export complet de l’annuaire de l’administration (jeu «${NBSP}api-lannuaire-administration${NBSP}»), filtré sur les fiches «${NBSP}mairie${NBSP}».`,
        sourceName: 'Annuaire de l’administration, service-public.fr',
        sourceUrl: TOWN_HALL_WEBSITES_STUDY_SOURCES.officialDirectory,
      },
    ],
    authorEmphasizedIntro: `Qui a fait ce relevé${NBSP}:`,
    authorText:
      'moi, Léo Guillaume, développeur freelance près de Rennes. Je mets à jour des sites sous PHP, WordPress et Joomla pour des TPE, des indépendants et des associations, à distance.',
    authorFootnote: `Un chiffre vous semble faux${NBSP}? Écrivez-moi, je corrige et je date la correction.`,
  },
  method: {
    eyebrow: 'Méthode',
    title: 'Comment ce relevé est fait',
    intro:
      'Une seule lecture de la page d’accueil de chaque site, comme n’importe quel visiteur. Aucune tentative d’entrer dans un site, aucune page de connexion ouverte.',
    steps: [
      {
        label: 'Liste',
        title: 'L’annuaire officiel, mairie par mairie',
        description: `Export complet de l’annuaire de l’administration, filtré sur les fiches «${NBSP}mairie${NBSP}», lu le 15 novembre 2026. Pour chaque mairie, le premier site déclaré qui n’est ni une plateforme toute faite ni un réseau social, puis une seule ligne par adresse de site.`,
      },
      {
        label: 'Lecture',
        title: 'Une page d’accueil, une fois',
        description:
          'Une seule demande de la page d’accueil par site, en https puis en http si besoin, avec 12 secondes d’attente au plus. Aucune page n’est gardée, seulement les quelques informations qui en sont tirées.',
      },
      {
        label: 'Outil',
        title: 'Ce que la page laisse voir',
        description: `L’outil du site se reconnaît aux traces qu’il laisse dans la page (dossiers de WordPress, de Joomla, de Drupal, de TYPO3 ou de SPIP), à la balise «${NBSP}generator${NBSP}», puis aux plateformes de communes. La version de WordPress vient de cette balise ou des fichiers du cœur.`,
      },
      {
        label: 'Versions',
        title: 'PHP et Joomla',
        description:
          'La version de PHP vient des informations que le serveur envoie avec la page. Pour Joomla, une seconde demande lit le fichier public de version que Joomla installe sur chaque site. Jamais plus de deux demandes par site.',
      },
      {
        label: 'Contrôle',
        title: 'Un comptage, puis une relecture à la main',
        description: `Comptage par adresse de site, chaque part avec sa base. 30 sites tirés au hasard ont été relus à la main le 16 novembre 2026${NBSP}: aucun écart sur l’outil, la version ni PHP.`,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Sites des mairies${NBSP}: vos questions`,
    questions: [
      {
        question: `Comment savoir quelle version de PHP utilise le site de ma commune${NBSP}?`,
        answer: `Le plus simple${NBSP}: la demander au prestataire ou à l’hébergeur du site, qui la voit dans son espace client. Sans accès, l’outil gratuit de ce site la lit quand le serveur l’affiche, ce qui arrive sur un site de mairie sur quatre (4 887 sur 19 854 dans ce relevé). S’il ne l’affiche pas, cela ne dit rien de la version utilisée.`,
      },
      {
        question: `Que se passe-t-il le 1er janvier 2027${NBSP}?`,
        answer: `PHP 8.2 ne reçoit plus de correctifs de sécurité après le 31 décembre 2026. Le site continue de fonctionner, mais un problème de sécurité découvert ensuite ne sera plus corrigé dans cette version. Parmi les sites de mairies qui affichent leur PHP, 9,3${NBSP}% sont en PHP 8.2 (454 sur 4 887)${NBSP}: si rien ne bouge, 44,9${NBSP}% (2 193 sur 4 887) seront sans correctifs au 1er janvier 2027, contre 35,6${NBSP}% aujourd’hui.`,
      },
      {
        question: `Pourquoi seulement un site sur quatre${NBSP}?`,
        answer: `Parce que la plupart des serveurs ne disent pas leur version de PHP${NBSP}: pare-feu, CDN comme Cloudflare, ou hébergeur qui masque l’information. 24,6${NBSP}% des sites lus l’affichent (4 887 sur 19 854). Les hébergements anciens l’affichent plus souvent, donc la part de 35,6${NBSP}% serait probablement plus basse sur l’ensemble des sites. Je la donne pour ce qu’elle est${NBSP}: une mesure sur un quart des sites.`,
      },
      {
        question: `Pourquoi écarter 1 059 sites WordPress${NBSP}?`,
        answer: `Parce qu’ils sont identiques${NBSP}: même version 6.6.1, même serveur, une seule installation partagée. C’est très probablement une seule plateforme mutualisée, donc une seule décision technique, pas 1 059 sites gérés un par un. Sans eux, 27,0${NBSP}% des sites WordPress dont la version se lit ont deux versions majeures de retard ou plus (1 393 sur 5 155)${NBSP}; avec eux, 39,5${NBSP}% (2 452 sur 6 214).`,
      },
      {
        question: `Quels outils utilisent les sites des mairies${NBSP}?`,
        answer: `WordPress d’abord${NBSP}: 48,3${NBSP}% des sites lus (9 592 sur 19 854). Loin derrière viennent Joomla 4,0${NBSP}% (798), Drupal 3,4${NBSP}% (670), TYPO3 3,3${NBSP}% (648) et SPIP 1,0${NBSP}% (206), à côté des plateformes de communes et des créateurs de sites. 16,6${NBSP}% (3 299) restent non identifiés.`,
      },
      {
        question: `Où en sont les sites Joomla des mairies${NBSP}?`,
        answer: `La version se lit sur 580 des 798 sites Joomla (72,7${NBSP}%). 58,8${NBSP}% d’entre eux (341 sur 580) sont sur une branche sans correctifs, et Joomla 3 en compte à lui seul 248. 20,3${NBSP}% (118) sont déjà en Joomla 6. Côté PHP, 52,4${NBSP}% des sites Joomla qui affichent leur version sont sans correctifs (140 sur 267).`,
      },
      {
        question: `Le site de ma commune est-il dans une liste${NBSP}?`,
        answer: `Aucune liste n’est publiée. La page et le fichier ne donnent que des totaux, nationaux et par département${NBSP}: aucune commune, aucune adresse de site, aucun prestataire. Pour le site de votre commune, les deux outils gratuits de ce site répondent à partir de sa seule adresse.`,
      },
      {
        question: `Peut-on réutiliser ces chiffres${NBSP}?`,
        answer: `Oui. Les chiffres et le fichier par département sont sous licence CC BY 4.0${NBSP}: citez «${NBSP}Dibodev, relevé des 15 et 16 novembre 2026${NBSP}» avec un lien vers cette page. Gardez la base de chaque chiffre, surtout pour PHP${NBSP}: 35,6${NBSP}% des 4 887 sites qui affichent leur version, pas des 19 854 sites lus. Une erreur${NBSP}? Écrivez-moi, je corrige et je date la correction.`,
      },
    ],
  },
  relatedArticles: {
    title: 'Pour aller plus loin',
    intro: 'Les guides pour passer à une version de PHP suivie et à Joomla 6.',
  },
  contactCta: {
    title: `Un doute sur le site de votre commune${NBSP}?`,
    description: `Envoyez-moi son adresse. Je vous dis par écrit sous 24${NBSP}h quelles versions il utilise et ce qu’il faut prévoir avant le 31 décembre 2026, sans engagement.`,
    button: 'Envoyer l’adresse du site',
  },
}
