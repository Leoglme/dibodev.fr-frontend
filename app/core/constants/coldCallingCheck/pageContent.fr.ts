import type { DibodevColdCallingCheckPageContent } from '~/core/types/DibodevColdCallingCheckPage'
import { COLD_CALLING_CHECK_SOURCES } from '~/core/constants/coldCallingCheck/pageShared'
import { NBSP } from '~/core/constants/typography'

export const COLD_CALLING_CHECK_PAGE_FR: DibodevColdCallingCheckPageContent = {
  meta: {
    title: `Démarchage téléphonique interdit${NBSP}: puis-je encore appeler${NBSP}?`,
    description: `Depuis le 11 août 2026, appeler un particulier exige son accord. Artisan, TPE${NBSP}: 5 questions pour savoir qui appeler, et comment trouver des clients autrement.`,
    inLanguage: 'fr-FR',
    schemaAbout: `Interdiction du démarchage téléphonique sans consentement en France depuis le 11 août 2026${NBSP}: qui peut encore appeler, et comment`,
  },
  breadcrumbLabel: `Démarchage téléphonique${NBSP}: puis-je appeler${NBSP}?`,
  shareImage: {
    titleLines: ['Démarchage téléphonique', `interdit${NBSP}: puis-je`, `encore appeler${NBSP}?`],
    highlight: 'appeler',
    subtitle: `Artisans, TPE, indépendants${NBSP}: ce qui est encore permis`,
    badge: 'Gratuit · 5 questions · 1 minute',
    alt: `Démarchage téléphonique interdit${NBSP}: puis-je encore appeler${NBSP}? Test gratuit sur dibodev.fr`,
  },
  hero: {
    titleBefore: `Démarchage téléphonique interdit${NBSP}: pouvez-vous encore `,
    titleHighlight: 'appeler vos prospects',
    titleAfter: `${NBSP}?`,
    reassurances: [
      'Gratuit, 5 questions, 1 minute',
      'Résultat sans e-mail',
      'Textes officiels relus le 26 octobre 2026',
    ],
    description: `Depuis le 11 août 2026, appeler un particulier pour lui vendre quelque chose est interdit s’il n’a pas donné son accord avant. Bloctel a disparu, et beaucoup d’artisans, d’indépendants et de TPE ne savent plus qui ils ont le droit d’appeler${NBSP}: un client, un ancien client, quelqu’un qui a demandé un devis, une entreprise. Ce test croise qui vous appelez, votre secteur, votre lien avec ces personnes et leur accord, et vous dit ce qui est permis.`,
    authorIntro: 'Test conçu par',
    authorBio:
      'développeur freelance près de Rennes. Je crée des sites qui font venir les demandes, avec formulaire, fiche Google et suivi des contacts, pour les artisans, les indépendants et les TPE.',
  },
  mobileContactBar: {
    text: `Trouver des clients sans appeler${NBSP}?`,
    buttonLabel: 'En parler',
  },
  facts: {
    anchorId: 'textes',
    eyebrow: 'Ce que disent les textes',
    title: `Démarchage téléphonique${NBSP}: six règles vérifiées`,
    intro: 'Les règles relues le 26 octobre 2026 sur Légifrance, le site de la DGCCRF, la CNIL et Service-Public.',
    facts: [
      {
        contextLabel: 'Loi du 30 juin 2025 · depuis le 11 août 2026',
        title: 'Plus d’appel commercial à un particulier sans son accord préalable',
        text: `Un professionnel ne peut plus démarcher par téléphone, lui-même ou par un tiers, un consommateur qui n’a pas donné son accord avant l’appel. Cet accord doit être libre, spécifique, éclairé, univoque et révocable, donné par un acte positif clair${NBSP}: le silence ou une case pré-cochée ne valent rien. C’est au professionnel de le prouver, celui qui profite des appels est présumé responsable, et tout contrat conclu après un appel interdit est nul.`,
        sourceName: 'Légifrance, article L.223-1 du Code de la consommation',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.consumerCodeConsentArticle,
      },
      {
        contextLabel: 'Décret du 23 juillet 2026',
        title: 'Un accord d’un an au plus, dont vous gardez la preuve trois ans',
        text: `La demande d’accord indique qui vous êtes, ce que vous proposez et sa durée, d’un an au plus, sans renouvellement tacite. Vous gardez la preuve trois ans (date, heure, informations données) et la fournissez gratuitement à la personne qui la demande. Elle peut retirer son accord à tout moment, même à l’oral, aussi simplement qu’elle l’a donné.`,
        sourceName: `Légifrance, décret n°${NBSP}2026-662 du 23 juillet 2026`,
        sourceUrl: COLD_CALLING_CHECK_SOURCES.consentDecree,
      },
      {
        contextLabel: 'Fiche DGCCRF du 27 juillet 2026',
        title: `Rénovation énergétique, adaptation du logement, CPF${NBSP}: interdit même avec accord`,
        text: `Dans trois secteurs, démarcher un particulier par téléphone reste interdit même s’il est d’accord${NBSP}: la rénovation énergétique (depuis juillet 2020), l’adaptation du logement au vieillissement ou au handicap (ajoutée par la loi de 2025) et les formations financées par le CPF. Pour ces travaux, la prospection par SMS, e-mail et réseaux sociaux est interdite aussi, et seul reste permis le rappel d’une personne qui l’a demandé, dans les 5 jours ouvrables.`,
        sourceName: 'DGCCRF, fiche pratique sur les règles du démarchage téléphonique',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.dgccrfBusinessRules,
      },
      {
        contextLabel: '11 août 2026',
        title: `Bloctel n’existe plus${NBSP}: seul compte l’accord de la personne`,
        text: `La liste d’opposition Bloctel a disparu le jour où la loi est entrée en vigueur. Vérifier qu’un numéro n’y est pas inscrit ne sert plus à rien${NBSP}: la logique s’inverse, et c’est l’accord préalable de la personne qui permet de l’appeler, sauf contrat en cours.`,
        sourceName: 'Entreprendre.Service-Public.gouv.fr, actualité mise à jour le 11 août 2026',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.servicePublicNews,
      },
      {
        contextLabel: 'Article L.242-16 du Code de la consommation',
        title: `Jusqu’à 75${NBSP}000${NBSP}€ d’amende, 375${NBSP}000${NBSP}€ pour une société`,
        text: `Un appel interdit expose à une amende administrative jusqu’à 75${NBSP}000${NBSP}€ pour une personne physique et 375${NBSP}000${NBSP}€ pour une personne morale, publiée aux frais de la personne sanctionnée. La DGCCRF contrôle, notamment à partir des signalements des particuliers sur SignalConso.`,
        sourceName: 'Légifrance, article L.242-16 du Code de la consommation',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.consumerCodePenaltyArticle,
      },
      {
        contextLabel: 'CNIL · appels aux professionnels',
        title: 'Appeler une entreprise reste possible, si l’offre concerne son métier',
        text: `La loi de 2025 protège le consommateur. Pour un professionnel, la CNIL admet la prospection par téléphone sans accord préalable quand l’offre a un rapport avec sa profession, comme un logiciel proposé au directeur informatique d’une entreprise. Il doit en être informé, pouvoir s’y opposer simplement et gratuitement, et savoir à chaque appel qui l’appelle.`,
        sourceName: 'CNIL, règles de la prospection commerciale par téléphone',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.cnilPhoneProspecting,
      },
    ],
    calloutEmphasizedIntro: `Ce qui reste permis sans accord${NBSP}:`,
    calloutText: `appeler un client dans le cadre d’un contrat en cours (abonnement, contrat non résilié, garantie commerciale), pour ce contrat et ce qui le complète${NBSP}; proposer un abonnement à un journal ou à un magazine${NBSP}; passer un appel qui n’est pas commercial, comme ceux des associations ou des instituts de sondage.`,
  },
  cases: {
    anchorId: 'cas',
    eyebrow: 'Cas par cas',
    title: `Artisan, commerçant, agence immobilière, auto-école${NBSP}: qui peut appeler qui`,
    intro:
      'Six situations courantes, avec la règle qui s’applique. Les cas que les textes ne tranchent pas sont signalés comme tels.',
    items: [
      {
        title: 'Artisan du bâtiment',
        description: `Appeler un particulier pour lui proposer des travaux demande son accord préalable et prouvé. Rénovation énergétique ou adaptation du logement${NBSP}: interdit même avec accord, hors contrat en cours${NBSP}; seul le rappel qu’il a demandé reste permis, dans les 5 jours ouvrables.`,
      },
      {
        title: 'Entreprise avec contrats d’entretien ou abonnements',
        description: `Un client dont le contrat court toujours peut être appelé pour ce contrat, et pour ce qui le complète ou l’améliore. Un ancien client, travaux finis et payés ou simple garantie légale, non${NBSP}: il faut son accord.`,
      },
      {
        title: 'Commerçant',
        description: `La DGCCRF cite la boutique et le moment de l’achat pour recueillir l’accord, avec une preuve datée. Sans lui, pas d’appel commercial à un client particulier. Un e-mail à un client pour des produits similaires reste possible sans accord préalable, s’il peut s’y opposer simplement.`,
      },
      {
        title: 'Agence immobilière',
        description: `Appeler un propriétaire vu dans une annonce pour lui proposer un mandat, c’est démarcher un particulier${NBSP}: il faut son accord préalable, et un numéro publié n’en est pas un. Un client dont le mandat court encore peut être appelé pour ce mandat.`,
      },
      {
        title: 'Auto-école',
        description: `Un élève dont la formation est en cours peut être appelé pour sa formation et ce qui la complète. Un ancien élève, formation terminée et payée, non${NBSP}: il faut son accord. Une formation financée par le CPF ne se démarche pas par téléphone, même avec accord.`,
      },
      {
        title: 'Indépendant ou entreprise qui vend aux professionnels',
        description: `La loi de 2025 ne vous vise pas tant que vous appelez des professionnels pour une offre liée à leur métier, en vous présentant et en les laissant refuser simplement. Zone grise${NBSP}: l’artisan joint sur son portable personnel${NBSP}; aucun texte ne tranche, restez prudent.`,
      },
    ],
  },
  timeline: {
    anchorId: 'calendrier',
    eyebrow: 'Le calendrier',
    title: 'Six dates, de 2020 à aujourd’hui',
    intro: 'Les règles se sont durcies par étapes. Ce qui s’applique aujourd’hui, c’est la somme de ces dates.',
    items: [
      {
        title: `Juillet 2020${NBSP}: la rénovation énergétique fermée au démarchage`,
        description:
          'Depuis le 26 juillet 2020, appeler un particulier pour des travaux de rénovation énergétique est interdit, même avec son accord, hors contrat en cours.',
      },
      {
        title: `1er mars 2023${NBSP}: jours, heures et fréquence encadrés`,
        description: `Du lundi au vendredi hors jours fériés, de 10${NBSP}h à 13${NBSP}h et de 14${NBSP}h à 20${NBSP}h, et 4 appels au plus par personne sur 30 jours.`,
      },
      {
        title: `30 juin 2025${NBSP}: la loi contre les fraudes aux aides publiques`,
        description:
          'Elle prévoit l’accord préalable pour le 11 août 2026, ajoute l’adaptation du logement aux secteurs interdits et interdit aussi, pour ces travaux, la prospection par SMS, e-mail et réseaux sociaux.',
      },
      {
        title: `23 juillet 2026${NBSP}: le décret sur le consentement`,
        description:
          'Il fixe la durée de l’accord, un an au plus, la preuve à garder trois ans et le retrait possible à tout moment, même à l’oral.',
      },
      {
        title: `11 août 2026${NBSP}: accord préalable obligatoire, fin de Bloctel`,
        description:
          'Sans contrat en cours ni accord prouvé, plus d’appel commercial à un particulier. La liste Bloctel disparaît le même jour.',
      },
      {
        title: `Depuis${NBSP}: contrôles et amendes`,
        description: `La DGCCRF annonce des amendes calculées par appel et leur publication systématique${NBSP}; les particuliers signalent les abus sur SignalConso.`,
      },
    ],
  },
  findingClientsWithoutCalling: {
    anchorId: 'sans-appeler',
    eyebrow: 'Trouver des clients sans appeler',
    title: 'Faire venir les demandes, dans les règles',
    intro:
      'Les façons permises de trouver des clients sans les démarcher au téléphone, avec la source de chaque règle.',
    ways: [
      {
        contextLabel: 'Formulaire de contact ou de devis',
        title: `Une case «${NBSP}J’accepte d’être rappelé${NBSP}», non pré-cochée`,
        text: `Une case dédiée, que la personne coche elle-même, qui dit qui vous êtes, ce que vous proposez et pour combien de temps, un an au plus. Gardez la date et l’heure${NBSP}: c’est votre preuve d’accord pour rappeler, à conserver trois ans.`,
        sourceName: 'CNIL, règles de la prospection commerciale par téléphone',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.cnilPhoneProspecting,
      },
      {
        contextLabel: 'Fiche Google',
        title: 'Votre zone d’intervention, vos horaires et vos avis',
        text: 'Une fiche complète, avec votre zone d’intervention, vos horaires, des photos et des avis clients, aide les gens du coin à vous trouver et à vous appeler eux-mêmes. C’est un conseil de chambre de commerce, pas une obligation.',
        sourceName: 'CCI Savoie, fiche établissement Google',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.cciGoogleListing,
      },
      {
        contextLabel: 'E-mail aux professionnels',
        title: 'Un message lié à leur activité, avec un lien pour refuser',
        text: 'Pour vendre à des entreprises, un e-mail en rapport avec leur activité n’a pas besoin d’accord préalable, s’il dit qui vous êtes et permet de refuser simplement et gratuitement. Vers un particulier, il faut son accord, sauf client existant et produits similaires.',
        sourceName: 'CNIL, règles de la prospection par e-mail et SMS',
        sourceUrl: COLD_CALLING_CHECK_SOURCES.cnilEmailProspecting,
      },
    ],
    calloutEmphasizedIntro: `Le plus simple${NBSP}: un site qui reçoit les demandes.`,
    calloutText: `Une page par service et par zone, un formulaire court avec la case d’accord, reliés à votre fiche Google${NBSP}: les clients viennent à vous, par écrit. C’est ce que je fais pour les artisans, les indépendants et les TPE, près de Rennes et à distance.`,
    calloutFootnote: `Site vitrine dès 1${NBSP}500${NBSP}€, premier échange gratuit.`,
    freelanceRennesLinkLabel: 'Voir mes offres de développeur web à Rennes',
    homeLinkLabel: 'Découvrir Dibodev',
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Démarchage téléphonique${NBSP}: les questions qu’on me pose`,
    questions: [
      {
        question: `Bloctel existe-t-il encore${NBSP}?`,
        answer: `Non. Bloctel a été supprimé le 11 août 2026. Vérifier qu’un numéro n’y est pas inscrit ne sert donc plus à rien${NBSP}: depuis cette date, la logique s’inverse, et il faut l’accord préalable de la personne pour l’appeler, sauf si vous avez un contrat en cours avec elle.`,
      },
      {
        question: `Puis-je appeler un client qui m’a demandé un devis${NBSP}?`,
        answer: `Aucun texte ni aucune fiche officielle ne le tranche clairement à ce jour${NBSP}: la question a été posée lors d’un webinaire de la CNIL et de la DGCCRF, sans réponse écrite. Le plus sûr${NBSP}: ajoutez à votre formulaire de devis une case non pré-cochée «${NBSP}J’accepte d’être rappelé par téléphone au sujet de ma demande${NBSP}», et gardez la date et l’heure. Pour la rénovation énergétique et l’adaptation du logement, le décret permet seulement de rappeler la personne dans les 5 jours ouvrables qui suivent sa demande, pour ce qu’elle a demandé, si vous pouvez prouver cette demande.`,
      },
      {
        question: `Puis-je rappeler mes anciens clients${NBSP}?`,
        answer: `Seulement avec leur accord, sauf si le contrat est toujours en cours. Un contrat est en cours tant qu’un abonnement, un contrat non résilié, un contrat à durée déterminée ou une garantie commerciale court encore. Quand les travaux sont finis et payés, ou seulement couverts par la garantie légale, il ne l’est plus${NBSP}: il vous faut l’accord préalable de la personne.`,
      },
      {
        question: `Comment recueillir un accord valable${NBSP}?`,
        answer: `Jamais par téléphone${NBSP}: on ne peut pas appeler quelqu’un pour lui demander s’il accepte d’être appelé. Il faut un geste clair de sa part, par exemple une case dédiée et non pré-cochée sur votre formulaire, votre devis ou en boutique, qui indique votre nom, ce que vous proposez et une durée d’un an au plus, sans renouvellement tacite. Gardez la preuve trois ans (date, heure, informations données) et laissez la personne retirer son accord aussi simplement, même à l’oral.`,
      },
      {
        question: `Puis-je utiliser un fichier de numéros acheté${NBSP}?`,
        answer: `Pour des particuliers, seulement si chaque personne a accepté d’être appelée par votre entreprise, pour ce que vous vendez, et si vous pouvez le prouver. Le démarchage fait par un prestataire pour votre compte est visé lui aussi, et celui qui profite des appels est présumé responsable. Un numéro trouvé dans un annuaire ou une annonce ne vaut pas accord. Pour des professionnels, ce sont les règles de la CNIL qui s’appliquent.`,
      },
      {
        question: `Et les SMS et les e-mails${NBSP}?`,
        answer: `Ils suivent les règles de la CNIL. Vers un particulier${NBSP}: accord préalable, sauf client existant et produits ou services similaires. Vers un professionnel${NBSP}: pas d’accord préalable si le message concerne son activité, à condition de l’informer et de lui permettre de refuser simplement${NBSP}; les adresses génériques (contact@…) ne sont pas soumises à ces règles. Pour la rénovation énergétique et l’adaptation du logement, la prospection par SMS, e-mail et réseaux sociaux est interdite, hors contrat en cours.`,
      },
      {
        question: `À quels jours et heures peut-on encore appeler${NBSP}?`,
        answer: `Quand l’appel est permis (contrat en cours ou accord prouvé)${NBSP}: du lundi au vendredi hors jours fériés, de 10${NBSP}h à 13${NBSP}h et de 14${NBSP}h à 20${NBSP}h, et 4 appels ou tentatives au plus par personne sur 30 jours. Une date et une heure choisies par la personne font exception aux jours et aux heures, pas au nombre d’appels. Le numéro ne doit pas être masqué, vous dites qui vous êtes et que l’appel est commercial, et si la personne refuse, l’appel s’arrête et vous ne rappelez pas. Elle ne s’engage qu’après avoir signé une confirmation écrite.`,
      },
      {
        question: `Que risque-t-on${NBSP}?`,
        answer: `Une amende administrative jusqu’à 75${NBSP}000${NBSP}€ pour une personne physique et 375${NBSP}000${NBSP}€ pour une société, publiée aux frais de la personne sanctionnée${NBSP}; la DGCCRF annonce des amendes calculées par appel. Tout contrat obtenu par un appel interdit est nul. Et l’abus de faiblesse commis par démarchage téléphonique est puni de 5 ans de prison et 500${NBSP}000${NBSP}€ d’amende.`,
      },
      {
        question: `Le B2B est-il concerné${NBSP}?`,
        answer: `Pas par la loi de 2025, qui protège le consommateur, ni par les règles de jours, d’heures et de fréquence. Pour appeler un professionnel, la CNIL demande que l’offre ait un rapport avec son métier (un logiciel proposé au directeur informatique, par exemple), que vous vous présentiez à chaque appel et qu’il puisse refuser simplement et gratuitement. Zone grise${NBSP}: l’artisan ou l’auto-entrepreneur joint sur son portable personnel. Aucun texte ne le tranche${NBSP}; dans le doute, traitez-le comme un particulier.`,
      },
      {
        question: `Mes accords recueillis avant le 11 août 2026 sont-ils encore valables${NBSP}?`,
        answer: `Aucun texte ne le tranche clairement à ce jour. Le plus prudent${NBSP}: ne garder que ceux qui respectent déjà les règles du décret (geste clair, votre nom, ce que vous proposez, un an au plus, preuve datée), et redemander les autres, par écrit, jamais par téléphone.`,
      },
    ],
  },
  relatedArticles: {
    title: 'À lire aussi',
    intro: 'Trois articles pour faire venir les clients à vous.',
  },
  contactCta: {
    title: `Et si les clients vous appelaient${NBSP}?`,
    description: `Je vous aide à faire venir les demandes au lieu d’appeler${NBSP}: site, fiche Google, formulaire avec consentement. Décrivez-moi votre activité, je vous réponds sous 24${NBSP}h.`,
    button: 'Faire venir les demandes',
  },
}
