import type { DibodevEInvoicingCheckPageContent } from '~/core/types/DibodevEInvoicingCheckPage'
import { E_INVOICING_SOURCES } from '~/core/constants/eInvoicingCheck/pageShared'
import { NBSP } from '~/core/constants/typography'

export const E_INVOICING_CHECK_PAGE_FR: DibodevEInvoicingCheckPageContent = {
  meta: {
    title: 'Facture électronique : votre logiciel est-il agréé ?',
    description:
      'Tapez le nom de votre logiciel de facturation : plateforme agréée, raccordé, ou rien. Liste officielle DGFiP du 13 octobre 2026, 24 logiciels relus. Gratuit.',
    inLanguage: 'fr-FR',
    schemaAbout: 'Réforme de la facturation électronique en France : plateformes agréées et solutions compatibles',
  },
  breadcrumbLabel: 'Facture électronique : mon logiciel',
  shareImage: {
    titleLines: ['Facture électronique :', 'votre logiciel est-il', 'agréé ?'],
    highlight: 'agréé',
    subtitle: 'Liste officielle DGFiP du 13 octobre 2026, logiciels courants relus',
    badge: 'Gratuit · résultat immédiat',
    alt: 'Facture électronique : votre logiciel est-il agréé ? Vérificateur gratuit sur dibodev.fr',
  },
  hero: {
    titleBefore: 'Facture électronique : votre logiciel est-il ',
    titleHighlight: 'agréé ou raccordé',
    titleAfter: `${NBSP}?`,
    reassurances: [
      'Gratuit, sans inscription',
      'Liste officielle DGFiP du 13 octobre 2026',
      'Sources relues le 23 octobre 2026',
    ],
    description: `Depuis le 1er septembre 2026, toute entreprise doit pouvoir recevoir ses factures par une plateforme agréée${NBSP}; les TPE et micro-entreprises devront aussi en émettre à partir du 1er septembre 2027. La DGFiP immatricule les plateformes, mais la plupart des logiciels de facturation n’en sont pas une${NBSP}: ils passent par un partenaire, qu’ils nomment ou non. Cet outil croise la liste officielle et les pages des éditeurs, et vous dit où vous en êtes.`,
    authorIntro: 'Outil réalisé par',
    authorBio: `développeur freelance près de Rennes. Je raccorde les logiciels métier et les outils maison aux plateformes agréées, et j’automatise les devis et les factures des TPE, à distance.`,
  },
  checker: {
    softwareLabel: 'Votre logiciel de facturation',
    softwarePlaceholder: 'Ex. : EBP, Henrri, Pennylane, Excel…',
    softwareHint: `Tapez le nom de l’outil qui fait vos factures. Rien n’est envoyé${NBSP}: la liste est lue dans la page.`,
    submit: 'Vérifier mon logiciel',
    suggestionsLabel: 'Vous cherchez peut-être',
    suggestionPlatformDetail: 'plateforme agréée',
    suggestionPendingDetail: 'dossier en attente',
    resultLabel: 'Résultat',
    idleTitle: `Votre logiciel est-il prêt pour la facture électronique${NBSP}?`,
    idleText: `Entrez son nom${NBSP}: vous saurez s’il est plateforme agréée, raccordé à une plateforme, ou s’il vous manque quelque chose avant le 1er septembre 2027.`,
    verdictTitles: {
      accredited: '{name} est une plateforme agréée',
      pending: '{name} attend son immatriculation définitive',
      connected: '{name} est raccordé à {platform}',
      compatibleUnnamed: '{name} se dit compatible, sans nommer sa plateforme',
      announced: '{name} n’est pas dans la liste officielle',
      none: 'Il vous manque une plateforme agréée',
      publicSector: 'Chorus Pro ne sert que pour le secteur public',
      ppf: 'Le portail public ne transmet plus de factures',
      unknown: '« {query} » n’est ni dans la liste officielle, ni dans mon relevé',
    },
    verdictTexts: {
      accredited: `{name} figure dans la liste des plateformes agréées publiée par la DGFiP (liste du {listDate}). Vous pouvez recevoir, et émettre quand votre tour viendra, sans autre outil${NBSP}: il reste à activer la facturation électronique dans le logiciel et à vérifier votre adresse dans l’annuaire.`,
      pending: `{name} a déposé un dossier complet et conforme, mais n’a pas encore réussi les tests d’interopérabilité qui conditionnent l’immatriculation définitive (liste DGFiP du {listDate}). Demandez à l’éditeur une date, et gardez une plateforme de repli pour la réception.`,
      connected: `{name} n’est pas une plateforme agréée${NBSP}: c’est une solution compatible qui passe par {platform}, plateforme agréée de la liste officielle. C’est un montage normal, prévu par la réforme. Vérifiez que le raccordement est bien actif dans votre compte, et à quel prix.`,
      compatibleUnnamed: `{name} annonce passer par une plateforme agréée, mais ne dit pas laquelle sur sa page. Ce n’est pas forcément un problème${NBSP}: demandez le nom de la plateforme par écrit, puis vérifiez-la dans la liste officielle (champ ci-dessus).`,
      announced: `{name} annonce son arrivée, mais le nom n’apparaît ni parmi les {registeredCount} plateformes immatriculées ni parmi les {pendingCount} dossiers en attente de la liste du {listDate}. Tant que ce n’est pas le cas, vous n’avez pas de plateforme pour recevoir vos factures.`,
      none: `Excel, Word, un modèle PDF ou le papier ne font pas de factures électroniques. Pour recevoir celles de vos fournisseurs, obligatoire depuis le 1er septembre 2026, il vous faut une plateforme agréée${NBSP}: plusieurs ont une offre gratuite. Pour émettre, vous avez jusqu’au 1er septembre 2027.`,
      publicSector: `Chorus Pro reste le passage obligé pour facturer l’État, les collectivités et les hôpitaux. Pour vos clients privés, il vous faut une plateforme agréée ou un logiciel raccordé à l’une d’elles.`,
      ppf: `Le Portail public de facturation n’assure plus ni l’émission ni la réception${NBSP}: il tient l’annuaire des entreprises et transmet les données à l’administration. Il n’y a pas d’option publique gratuite${NBSP}; choisissez une plateforme agréée.`,
      unknown: `Je n’ai trouvé « {query} » ni parmi les {registeredCount} plateformes immatriculées de la liste DGFiP du {listDate}, ni parmi les dossiers en attente, ni parmi les {softwareCount} logiciels dont j’ai relu la page. Soit l’éditeur passe par une plateforme partenaire sans l’annoncer, soit il n’est pas prêt.`,
    },
    detailsTitle: 'Ce qu’il faut savoir',
    registrationDateLine: 'Numéro d’immatriculation délivré par la DGFiP le {date}.',
    registrationDateUnknownLine: 'Immatriculée par la DGFiP (date non lisible dans la liste officielle).',
    pendingLine: 'Dossier complet et conforme, en attente de l’immatriculation définitive.',
    partnerPlatformLine: 'Plateforme agréée partenaire : {platform}, immatriculée le {platformDate}.',
    partnerPlatformDateUnknownLine: 'Plateforme agréée partenaire : {platform}, dans la liste officielle.',
    includedLine: 'La facturation électronique est annoncée incluse dans l’abonnement.',
    notIncludedLine: 'Tout ou partie du service est vendu à part : vérifiez votre formule.',
    publisherSourceLabel: 'Page de l’éditeur, consultée le {readAt}',
    publisherSourceDatedLabel: 'Page de l’éditeur datée du {sourceDate}, consultée le {readAt}',
    officialSourceLabel: 'Liste officielle des plateformes agréées, DGFiP, {listDate}',
    stepsTitle: 'Ce que je ferais à votre place',
    steps: {
      accredited: [
        'Activez la facturation électronique dans les réglages du logiciel, avec le compte du représentant légal.',
        'Vérifiez dans l’annuaire que votre SIREN a bien une adresse de réception active.',
        'Prévenez vos principaux fournisseurs du canal à utiliser, et testez une facture reçue.',
      ],
      pending: [
        'Demandez à l’éditeur une date pour l’immatriculation définitive, par écrit.',
        'Désignez en attendant une plateforme agréée pour recevoir, quitte à en changer ensuite.',
        'Gardez la réponse de l’éditeur : c’est ce qui prouve une démarche sérieuse en cas de contrôle.',
      ],
      connected: [
        'Dans votre compte, vérifiez que le raccordement à la plateforme est activé et que l’inscription à l’annuaire est faite.',
        'Lisez ce qui est inclus dans votre formule : certains éditeurs facturent la synchronisation à part.',
        'Testez une facture reçue d’un fournisseur avant la fin de l’année.',
      ],
      compatibleUnnamed: [
        'Écrivez à l’éditeur : « Quelle plateforme agréée utilisez-vous pour mes factures, et depuis quand ? »',
        'Vérifiez le nom obtenu dans le champ ci-dessus, ou dans la liste officielle.',
        'Sans réponse claire sous quinze jours, désignez vous-même une plateforme agréée pour la réception.',
      ],
      announced: [
        'Ne comptez pas sur une annonce : désignez dès maintenant une plateforme agréée pour recevoir vos factures.',
        'Demandez à l’éditeur un calendrier écrit et ce qui se passera pour vos factures en attendant.',
        'Revérifiez le nom dans la liste officielle à chaque mise à jour.',
      ],
      none: [
        'Choisissez une plateforme agréée avec une offre gratuite pour la réception (liste plus bas sur cette page).',
        'Inscrivez votre entreprise à l’annuaire avec le compte du représentant légal.',
        'D’ici septembre 2027, passez vos devis et factures dans un outil qui émet au format électronique.',
      ],
      publicSector: [
        'Gardez Chorus Pro pour vos clients publics.',
        'Choisissez une plateforme agréée, ou un logiciel raccordé, pour vos clients privés.',
        'Vérifiez que les deux adresses figurent bien dans l’annuaire.',
      ],
      ppf: [
        'Choisissez une plateforme agréée dans la liste officielle, plusieurs sont gratuites pour la réception.',
        'Inscrivez votre entreprise à l’annuaire par cette plateforme.',
        'Si vous émettez déjà, vérifiez que votre logiciel est raccordé à cette plateforme ou à une autre.',
      ],
      unknown: [
        'Demandez à l’éditeur, par écrit : « Êtes-vous plateforme agréée, ou raccordé à laquelle ? »',
        'Vérifiez le nom qu’il vous donne dans le champ ci-dessus.',
        'En attendant, désignez une plateforme agréée pour la réception : c’est obligatoire depuis le 1er septembre 2026.',
      ],
    },
    disclaimer: `Verdict établi d’après la liste officielle DGFiP du 13 octobre 2026 et les pages des éditeurs relues le 23 octobre 2026. Un éditeur peut changer de partenaire ou obtenir son immatriculation après cette date${NBSP}: la liste officielle fait foi.`,
    idleCtaIntro: `Vos factures sortent d’un outil maison, d’un logiciel métier ou d’un tableur, et vous ne savez pas comment le raccorder${NBSP}? Décrivez-moi votre cas, je réponds sous 24${NBSP}h.`,
    idleCtaLabel: 'Décrire mon cas',
    ctaIntro: `Vous voulez que quelqu’un s’en occupe${NBSP}? Je vérifie votre situation, je raccorde votre outil et j’automatise l’envoi. Premier échange gratuit, réponse sous 24${NBSP}h.`,
    ctaLabels: {
      accredited: 'Faire vérifier mon paramétrage',
      pending: 'Me faire conseiller une plateforme',
      connected: 'Faire vérifier mon raccordement',
      compatibleUnnamed: 'Me faire aider à y voir clair',
      announced: 'Me faire conseiller une plateforme',
      none: 'Me faire équiper avant 2027',
      publicSector: 'Me faire conseiller une plateforme',
      ppf: 'Me faire conseiller une plateforme',
      unknown: 'Me faire aider à y voir clair',
    },
    serviceLinkLabel: 'Raccorder un logiciel métier ou un outil maison : comment je travaille',
  },
  mobileContactBar: {
    text: 'Un doute sur votre logiciel ou votre outil maison ?',
    buttonLabel: 'Décrire mon cas',
  },
  facts: {
    anchorId: 'reforme',
    eyebrow: 'Ce qui est vrai aujourd’hui',
    title: 'La facture électronique, en six faits vérifiés',
    intro: `Le calendrier a été fixé, puis confirmé${NBSP}: pas de report. Voici ce que disent les sources officielles, relues le 23 octobre 2026.`,
    facts: [
      {
        contextLabel: '1er septembre 2026',
        title: 'Recevoir des factures électroniques est obligatoire pour toutes les entreprises',
        text: `Depuis le 1er septembre 2026, toute entreprise établie en France et assujettie à la TVA, micro-entreprise comprise, doit pouvoir recevoir des factures électroniques par une plateforme agréée. L’émission est obligatoire à la même date pour les grandes entreprises et les ETI, et le 1er septembre 2027 pour les PME, les TPE et les micro-entreprises.`,
        sourceName: 'Entreprendre.Service-Public.gouv.fr, actualité du 1er septembre 2026',
        sourceUrl: E_INVOICING_SOURCES.servicePublicNews,
      },
      {
        contextLabel: 'Communiqué du 1er septembre 2026',
        title: 'Aucune sanction en 2026, mais ni report ni suspension',
        text: `Le gouvernement a annoncé qu’aucune sanction ne serait appliquée en 2026 aux entreprises qui rencontrent une difficulté réelle, documentée et suivie d’actions de correction. Le guide de démarrage de la DGFiP (juillet 2026) le précise${NBSP}: cette tolérance « n’est ni un report, ni une suspension de l’obligation ». Une entreprise qui n’a rien engagé n’est pas couverte.`,
        sourceName: 'Compta Online, 5 octobre 2026, d’après le communiqué et le guide de la DGFiP',
        sourceUrl: E_INVOICING_SOURCES.comptaOnlineTolerance,
      },
      {
        contextLabel: '142 immatriculées, 14 en attente',
        title: 'La liste officielle, et elle seule, fait foi',
        text: `La DGFiP publie la liste des plateformes agréées sur impots.gouv.fr${NBSP}: au 13 octobre 2026, 142 opérateurs satisfont à l’ensemble des conditions, tests d’interopérabilité compris, et 14 ont déposé un dossier complet en attente d’immatriculation définitive. Un logo « plateforme agréée » sur le site d’un éditeur ne prouve rien${NBSP}; les logiciels qui ne sont pas plateforme eux-mêmes portent le label « solution compatible » et passent par un partenaire.`,
        sourceName: 'impots.gouv.fr, « Je consulte la liste des plateformes agréées », mise à jour du 13 octobre 2026',
        sourceUrl: E_INVOICING_SOURCES.officialList,
      },
      {
        contextLabel: 'Annuaire',
        title: 'Votre adresse de réception doit exister dans l’annuaire',
        text: `Ouvert en septembre 2025, l’annuaire de la facturation électronique recense les entreprises assujetties et, pour chacune, sa plateforme agréée et ses adresses de facturation. Sans plateforme désignée, vous n’avez pas d’adresse active${NBSP}: vos fournisseurs ne peuvent pas vous adresser de facture électronique, et l’administration recommande d’engager la démarche sans attendre.`,
        sourceName: 'economie.gouv.fr, « Qu’est-ce que l’annuaire de la facturation électronique ? »',
        sourceUrl: E_INVOICING_SOURCES.economieGouvDirectory,
      },
      {
        contextLabel: 'Portail public',
        title: 'Le portail public ne transmet plus de factures',
        text: `Le Portail public de facturation n’assure plus ni l’émission ni la réception${NBSP}: il tient l’annuaire et concentre les données pour l’administration. Il n’existe donc pas d’option publique gratuite pour émettre. En revanche, plusieurs plateformes agréées annoncent une offre gratuite, dont Abby, Indy, Tiime et Dougs pour les petites entreprises.`,
        sourceName:
          'Compta Online, 5 octobre 2026 ; offres gratuites d’après les pages des éditeurs, relevé du 20 octobre 2026',
        sourceUrl: E_INVOICING_SOURCES.comptaOnlineTolerance,
      },
      {
        contextLabel: 'Amendes prévues',
        title: 'Des amendes plafonnées, suspendues en 2026',
        text: `Non-émission d’une facture électronique${NBSP}: 50${NBSP}€ par facture, plafonné à 15${NBSP}000${NBSP}€ par an. Réception hors plateforme agréée${NBSP}: mise en demeure, puis 500${NBSP}€, puis 1${NBSP}000${NBSP}€ par nouvelle période de trois mois. Données de transaction et de paiement non transmises${NBSP}: 500${NBSP}€, plafonné à 15${NBSP}000${NBSP}€ par an. Aucune de ces sanctions n’est appliquée en 2026.`,
        sourceName: 'Entreprendre.Service-Public.gouv.fr, actualité du 1er septembre 2026',
        sourceUrl: E_INVOICING_SOURCES.servicePublicNews,
      },
    ],
    calloutEmphasizedIntro: `Ce que je fais pour vous${NBSP}:`,
    calloutText: `je vérifie votre situation (logiciel, annuaire, formule), je raccorde votre logiciel métier ou votre outil maison à une plateforme agréée, et j’automatise la sortie des devis et des factures. À distance, premier échange gratuit.`,
  },
  timeline: {
    anchorId: 'calendrier',
    eyebrow: 'Le calendrier',
    title: 'De l’annuaire à la dernière échéance, les dates qui comptent',
    intro: 'Six dates, de l’ouverture de l’annuaire à l’obligation d’émettre pour les plus petites entreprises.',
    items: [
      {
        title: 'Septembre 2025 : l’annuaire ouvre',
        description: 'Les entreprises peuvent déclarer leur plateforme agréée et leurs adresses de facturation.',
      },
      {
        title: 'Décembre 2025 : premières immatriculations',
        description:
          'Pennylane le 11, Qonto, Tiime et Cegid le 18, Sage le 22, Sellsy le 24 décembre obtiennent leur numéro (liste DGFiP).',
      },
      {
        title: 'Été 2026 : les « PDP » deviennent « plateformes agréées »',
        description:
          'Nouveau nom, mêmes obligations ; la DGFiP publie les logos « plateforme agréée » et « solution compatible ».',
      },
      {
        title: '1er septembre 2026 : réception pour tous, émission pour les grandes entreprises',
        description: 'Toute entreprise assujettie doit pouvoir recevoir ; les grandes entreprises et les ETI émettent.',
      },
      {
        title: 'Jusqu’à fin 2026 : tolérance sur les sanctions',
        description: 'Aucune sanction pour une entreprise en difficulté réelle et engagée dans une démarche sérieuse.',
      },
      {
        title: '1er septembre 2027 : émission et e-reporting pour les PME, TPE et micro-entreprises',
        description:
          'Toutes les factures à des clients professionnels passent par une plateforme ; les ventes aux particuliers sont déclarées.',
      },
    ],
  },
  concerned: {
    anchorId: 'concernes',
    eyebrow: 'Qui est concerné',
    title: 'Artisan, commerçant, micro-entrepreneur, association : qui doit agir',
    intro: `La réforme vise les entreprises assujetties à la TVA établies en France, quelle que soit leur taille. Trois cas reviennent dans les questions que je reçois.`,
    items: [
      {
        title: 'Artisans, commerçants, indépendants',
        description:
          'Recevoir par une plateforme agréée depuis le 1er septembre 2026 ; émettre vos factures à des professionnels par une plateforme à partir du 1er septembre 2027.',
      },
      {
        title: 'Micro-entrepreneurs en franchise de TVA',
        description:
          'Concernés aussi : la franchise dispense de facturer la TVA, pas de la facturation électronique. Réception depuis 2026, émission en 2027 pour vos clients professionnels.',
      },
      {
        title: 'Ventes aux particuliers et clients publics',
        description:
          'Pas de facture électronique pour un particulier : un e-reporting des ventes à partir de 2027. Pour l’État et les collectivités, Chorus Pro reste le canal.',
      },
    ],
  },
  softwareTable: {
    anchorId: 'logiciels',
    eyebrow: 'Logiciel par logiciel',
    title: 'Les logiciels de facturation courants et leur statut',
    intro: `Vingt-quatre outils utilisés par les TPE et les artisans, avec ce que dit la liste officielle ou, à défaut, la page de l’éditeur. Statut relu le 23 octobre 2026.`,
    softwareColumnLabel: 'Logiciel',
    statusColumnLabel: 'Statut',
    platformColumnLabel: 'Plateforme agréée',
    statusLabels: {
      accredited: 'Plateforme agréée',
      connected: 'Solution compatible, raccordée',
      compatibleUnnamed: 'Solution compatible, plateforme non nommée',
      announced: 'Annoncé, pas dans la liste',
      none: 'Pas un logiciel de facturation électronique',
      publicSector: 'Secteur public seulement',
      ppf: 'Portail public',
    },
    noPlatformLabel: 'non précisée',
    officialSourceTemplate: 'liste DGFiP du {listDate}',
    publisherSourceTemplate: 'page de l’éditeur, {sourceDate}',
    calloutEmphasizedIntro: `Votre logiciel n’est pas dans la liste${NBSP}?`,
    calloutText: `Tapez son nom dans le vérificateur en haut de page${NBSP}: il cherche aussi parmi les 142 plateformes immatriculées. S’il ne le trouve pas, posez la question à l’éditeur par écrit, et vérifiez sa réponse ici.`,
  },
  guides: {
    anchorId: 'guides',
    eyebrow: 'Que faire, selon votre logiciel',
    title: 'Le pas à pas, logiciel par logiciel',
    intro: `Ce que l’éditeur dit lui-même, et ce qu’il vous reste à faire. Les solutions compatibles d’abord, parce que c’est là qu’il y a quelque chose à vérifier.`,
    accreditedTemplate: `{name} est une plateforme agréée depuis le {date}${NBSP}: activez la facturation électronique dans le logiciel avec le compte du représentant légal, vérifiez votre adresse dans l’annuaire, et vous n’avez rien d’autre à acheter.`,
    accreditedDateUnknownTemplate: `{name} figure dans la liste officielle des plateformes agréées${NBSP}: activez la facturation électronique dans le logiciel, vérifiez votre adresse dans l’annuaire, et vous n’avez rien d’autre à acheter.`,
    connectedPlatformTemplate: ' Plateforme agréée : {platform}, immatriculée le {platformDate}.',
  },
  freePlatforms: {
    anchorId: 'gratuites',
    eyebrow: 'Sans logiciel aujourd’hui',
    title: 'Les plateformes agréées qui annoncent une offre gratuite',
    intro: `Si vous facturez sur Excel ou sur papier, voici les plateformes de la liste officielle qui visent les petites entreprises et annoncent une formule gratuite (pages des éditeurs, relevé du 20 octobre 2026). À vérifier au moment de l’inscription${NBSP}: une offre gratuite peut changer.`,
    itemTemplate: 'Immatriculée le {date}. Offre gratuite annoncée par l’éditeur.',
    itemDateUnknownTemplate: 'Dans la liste officielle. Offre gratuite annoncée par l’éditeur.',
  },
  method: {
    eyebrow: 'Ma méthode',
    title: 'Quatre étapes pour être en règle sans y passer vos soirées',
    intro: `La même séquence que pour mes clients, à faire seul si votre logiciel est agréé, avec moi s’il faut raccorder un outil.`,
    steps: [
      {
        label: 'Vérifier',
        title: 'Le nom, dans la liste officielle',
        description:
          'Le vérificateur en haut de page, ou la liste DGFiP. Un logo sur un site commercial ne suffit pas.',
      },
      {
        label: 'Désigner',
        title: 'Une plateforme pour recevoir',
        description:
          'Activation dans le logiciel, ou inscription sur une plateforme gratuite. Toujours avec le compte du représentant légal.',
      },
      {
        label: 'Contrôler',
        title: 'L’annuaire et une première facture',
        description:
          'Votre SIREN doit avoir une adresse active ; demandez à un fournisseur de vous envoyer une facture par ce canal.',
      },
      {
        label: 'Raccorder',
        title: 'Vos devis et factures maison',
        description:
          'Si vos factures sortent d’un logiciel métier ou d’un outil sur mesure, je le raccorde à une plateforme agréée et j’automatise l’envoi.',
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Vos questions sur la facture électronique et votre logiciel',
    questions: [
      {
        question: `Je suis micro-entrepreneur en franchise de TVA${NBSP}: suis-je concerné${NBSP}?`,
        answer: `Oui. La réforme s’applique aux entreprises assujetties à la TVA établies en France, et la franchise en base ne retire pas la qualité d’assujetti${NBSP}: elle dispense seulement de facturer la taxe. Vous devez pouvoir recevoir des factures électroniques depuis le 1er septembre 2026 et émettre celles de vos clients professionnels par une plateforme agréée à partir du 1er septembre 2027. Vos ventes à des particuliers ne donnent pas lieu à une facture électronique, mais à un e-reporting à partir de 2027.`,
      },
      {
        question: `Je fais mes factures sur Excel, Word ou un modèle PDF${NBSP}: que dois-je faire${NBSP}?`,
        answer: `Pour la réception, rien n’attend 2027${NBSP}: choisissez une plateforme agréée, plusieurs sont gratuites (Abby, Indy, Tiime, Dougs annoncent une offre sans abonnement), inscrivez-vous avec le compte du représentant légal, et votre SIREN aura une adresse dans l’annuaire. Pour l’émission, vous avez jusqu’au 1er septembre 2027 pour passer vos devis et factures dans un outil qui produit le format électronique. Un fichier Excel ou un PDF envoyé par e-mail ne sera plus une facture valable entre professionnels.`,
      },
      {
        question: `Quelle différence entre une plateforme agréée et une solution compatible${NBSP}?`,
        answer: `La plateforme agréée est immatriculée par la DGFiP${NBSP}: c’est elle qui transmet les factures et les données à l’administration, et elle apparaît dans la liste officielle. La solution compatible est un logiciel qui prépare les factures au bon format et les confie à une plateforme agréée partenaire${NBSP}; elle n’est pas immatriculée mais peut porter un label officiel. EBP, Evoliz, Henrri, Tolteck, Obat ou Batappli sont dans ce cas. Les deux montages sont conformes${NBSP}; ce qui compte est de savoir quelle plateforme agréée se trouve derrière.`,
      },
      {
        question: `Existe-t-il une plateforme agréée gratuite${NBSP}?`,
        answer: `Oui, plusieurs plateformes de la liste officielle annoncent une offre gratuite, en général pour la réception et un volume limité d’émission${NBSP}: Abby, Indy, Tiime, Dougs (facturation gratuite), Macompta.fr, et des acteurs plus techniques comme B2BRouter ou Super PDP. La liste de cette page les reprend. Lisez bien ce qui est compris${NBSP}: l’émission au-delà d’un certain nombre de factures, l’archivage ou la comptabilité sont souvent payants.`,
      },
      {
        question: `Je n’émets qu’en septembre 2027${NBSP}: dois-je quand même choisir une plateforme maintenant${NBSP}?`,
        answer: `Oui, pour la réception, obligatoire depuis le 1er septembre 2026. Sans plateforme désignée, votre entreprise n’a pas d’adresse active dans l’annuaire, et vos fournisseurs, dont les grandes entreprises déjà obligées d’émettre, ne peuvent pas vous adresser leurs factures par le circuit officiel. La tolérance de 2026 protège les entreprises engagées dans une démarche, pas celles qui n’ont rien fait.`,
      },
      {
        question: `Mon logiciel se dit « compatible » mais n’est pas dans la liste${NBSP}: est-ce un problème${NBSP}?`,
        answer: `Non, si l’éditeur nomme la plateforme agréée qu’il utilise et que ce nom figure dans la liste officielle${NBSP}: c’est le cas d’Evoliz (Chaintrust), d’Obat (Iopole), de Batappli (Cecurity) ou d’EBP (Shine). Oui, si personne ne peut vous dire laquelle. Demandez-le par écrit, vérifiez le nom dans le vérificateur, et gardez la réponse.`,
      },
      {
        question: `Puis-je utiliser deux plateformes, une pour recevoir et une pour émettre${NBSP}?`,
        answer: `Oui. L’annuaire permet de déclarer une plateforme pour la réception et une autre pour l’émission, et le fournisseur et le client peuvent être sur des plateformes différentes${NBSP}: elles sont tenues d’être interopérables. C’est pratique quand votre logiciel de devis émet par un partenaire et que vous préférez recevoir sur une plateforme gratuite.`,
      },
      {
        question: `Que risque une entreprise qui n’a rien fait${NBSP}?`,
        answer: `En 2026, rien${NBSP}: le gouvernement a annoncé qu’aucune sanction ne serait appliquée aux entreprises en difficulté réelle et engagées dans une démarche. Ensuite, la loi prévoit 50${NBSP}€ par facture non émise au format électronique (plafonné à 15${NBSP}000${NBSP}€ par an), une mise en demeure puis 500${NBSP}€ et 1${NBSP}000${NBSP}€ par période de trois mois pour la réception hors plateforme, et 500${NBSP}€ par manquement au e-reporting. Le risque le plus concret reste commercial${NBSP}: des clients qui ne peuvent plus vous payer sur une facture non conforme.`,
      },
      {
        question: `L’annuaire, c’est quoi, et comment vérifier mon adresse${NBSP}?`,
        answer: `C’est le répertoire central, tenu par l’administration, qui indique pour chaque entreprise assujettie sa plateforme agréée et ses adresses de facturation. Votre plateforme vous y inscrit quand vous activez le service${NBSP}; la plupart affichent ensuite votre adresse dans les réglages. Le test le plus simple${NBSP}: demander à un fournisseur déjà équipé de vous envoyer une facture par le circuit officiel.`,
      },
      {
        question: `Mes factures sortent d’un logiciel métier sur mesure ou d’un outil maison${NBSP}: comment le raccorder${NBSP}?`,
        answer: `C’est mon métier. Un outil maison n’a pas besoin de devenir plateforme agréée${NBSP}: il doit produire les factures dans l’un des formats prévus (Factur-X, UBL ou CII) et les confier à une plateforme agréée par son API, qui se charge de la transmission, de l’annuaire et du e-reporting. Je commence par un audit de ce que fait votre outil, puis je branche la plateforme la plus adaptée à votre volume, et j’automatise l’envoi et le suivi des statuts. Décrivez-moi votre cas, je réponds sous 24${NBSP}h.`,
      },
      {
        question: `Chorus Pro suffit-il${NBSP}?`,
        answer: `Non. Chorus Pro est le portail des factures adressées à l’État, aux collectivités et aux établissements publics, et il le reste. Pour vos clients privés, il vous faut une plateforme agréée ou un logiciel raccordé à l’une d’elles. Les deux canaux coexistent.`,
      },
      {
        question: `Pourquoi la liste officielle a-t-elle été lue sur une copie archivée${NBSP}?`,
        answer: `Parce que impots.gouv.fr affiche une page de maintenance depuis le 21 octobre 2026, à la suite de la faille PHP corrigée ce jour-là (voir mon outil de vérification de la faille PHP). La liste de cette page est celle que la DGFiP avait mise à jour le 13 octobre, lue le 23 octobre dans la copie du 16 octobre conservée par l’Internet Archive. Dès que le site revient, je relis la liste et je redate cette page.`,
      },
      {
        question: `Que fait exactement cet outil, et que ne voit-il pas${NBSP}?`,
        answer: `Il cherche le nom que vous tapez dans la liste officielle des plateformes agréées (142 immatriculées et 14 dossiers en attente au 13 octobre 2026) et dans mon relevé de 24 logiciels courants, dont j’ai lu la page sur la facturation électronique le 23 octobre 2026. Il ne se connecte à rien, ne garde rien et n’envoie pas ce que vous tapez. Il ne voit pas votre formule d’abonnement, l’état réel de votre raccordement ni votre inscription à l’annuaire${NBSP}: seuls votre compte, ou l’éditeur, le disent.`,
      },
    ],
  },
  relatedArticles: {
    title: 'Pour aller plus loin',
    intro: 'Trois lectures sur la facture électronique et les outils de devis et de facturation.',
  },
  contactCta: {
    title: 'Votre outil fait vos factures, et vous ne savez pas s’il passera en 2027 ?',
    description: `Décrivez-le-moi en trois lignes${NBSP}: logiciel du marché, outil maison, tableur. Je vous dis sous 24${NBSP}h ce qu’il faut faire, et ce que je peux raccorder ou automatiser.`,
    button: 'Décrire mon cas',
  },
}
