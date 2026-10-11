import type { DibodevAiAppTakeoverPageContent } from '~/core/types/DibodevAiAppTakeoverPage'
import {
  LOVABLE_CREDITS_SOURCE,
  LOVABLE_CVE_SOURCE,
  SUPABASE_RLS_SOURCE,
  VERACODE_REPORT_SOURCE,
} from '~/core/constants/aiAppTakeover/pageShared'
import { NBSP } from '~/core/constants/typography'

export const AI_APP_TAKEOVER_PAGE_CONTENT_FR: DibodevAiAppTakeoverPageContent = {
  meta: {
    title: 'Reprendre une application Lovable ou Bolt bloquée | Dibodev',
    description: `Application faite avec Lovable, Bolt, v0 ou Cursor qui bugue ou n’arrive pas en production${NBSP}? Audit gratuit, sécurisation et reprise au forfait, par un freelance.`,
    serviceName:
      'Reprise, sécurisation et mise en production d’applications générées par l’IA (Lovable, Bolt, v0, Cursor)',
  },
  breadcrumbLabel: 'Reprise d’application IA',
  hero: {
    titlePart1: 'Reprendre une application faite avec ',
    titleHighlight: 'Lovable, Bolt ou Cursor',
    titlePart2: '',
    description:
      'Votre outil a été généré par une IA, et il bugue, casse à chaque correction ou n’arrive pas en production. Je l’audite gratuitement, je le sécurise et je le finis, au forfait, sans tout jeter.',
    cta: 'Demander mon audit gratuit',
    ctaSecondary: 'Faire le test en 8 questions',
    reassurances: [
      `Audit gratuit, premier avis sous 48${NBSP}h`,
      'Code et données restent à vous',
      'À distance, partout en France',
    ],
    portraitAlt: 'Portrait de Léo Guillaume, développeur freelance qui reprend les applications générées par l’IA',
    portraitCaption: 'Développeur freelance, près de Rennes',
  },
  symptoms: {
    eyebrow: `Vous en êtes là${NBSP}?`,
    title: 'Six situations que je retrouve dans presque toutes les applications générées par l’IA',
    intro:
      'Si vous vous reconnaissez dans deux ou trois d’entre elles, ce n’est pas un échec. C’est le moment où un prototype doit devenir une vraie application.',
    items: [
      {
        title: 'Chaque correction en casse une autre',
        description:
          'Vous demandez une retouche, l’IA répare l’écran et en dérègle un autre. Au bout de dix allers-retours, plus personne ne sait ce qui marche encore.',
      },
      {
        title: 'La base de données est ouverte à tous',
        description:
          'Les règles d’accès générées sont souvent trop permissives : n’importe qui connaissant l’adresse peut lire les fiches clients. C’est un problème légal, pas seulement technique.',
      },
      {
        title: 'Impossible d’ajouter une fonction',
        description:
          'Le paiement, les relances ou l’export que vous vouliez depuis le début ne passent plus : l’IA tourne en rond sur une logique qu’elle ne comprend plus.',
      },
      {
        title: 'Les crédits s’envolent',
        description:
          'Chaque tentative de correction consomme des crédits, même quand elle échoue. La facture monte et le projet n’avance pas.',
      },
      {
        title: 'Ça marche pour vous, pas pour vingt utilisateurs',
        description:
          'Lenteurs, données qui se mélangent, réservations en double dès que plusieurs personnes travaillent en même temps.',
      },
      {
        title: 'Personne ne veut reprendre le code',
        description:
          'Le prestataire ou l’outil n’est plus là, ou un développeur a regardé et vous a conseillé de tout refaire. Vous restez bloqué avec un outil que vous utilisez tous les jours.',
      },
    ],
  },
  risks: {
    eyebrow: 'Ce que l’audit regarde en premier',
    title: 'Ce que votre application expose, sans que vous le sachiez',
    intro:
      'Quatre points que je vérifie avant toute autre chose, avec les chiffres publics qui montrent que ce n’est pas théorique.',
    facts: [
      {
        contextLabel: `45${NBSP}% des tests`,
        title: 'Du code généré avec des failles',
        text: 'Dans l’étude 2025 de Veracode sur plus de cent modèles d’IA, le code généré introduisait une faille de sécurité dans 45 % des tests. Les modèles plus récents ou plus gros ne font pas mieux.',
        sourceName: VERACODE_REPORT_SOURCE.name,
        sourceUrl: VERACODE_REPORT_SOURCE.url,
      },
      {
        contextLabel: 'CVE-2025-48757, score 9,3 sur 10',
        title: 'Des bases Lovable lisibles par n’importe qui',
        text: 'Une faille publiée en mai 2025 décrit des règles d’accès insuffisantes sur les bases des sites générés par Lovable : lecture et écriture possibles sans compte. Lovable répond que la protection des données reste à la charge de chaque client. C’est donc à vérifier sur la vôtre.',
        sourceName: LOVABLE_CVE_SOURCE.name,
        sourceUrl: LOVABLE_CVE_SOURCE.url,
      },
      {
        contextLabel: 'Règle de Supabase',
        title: 'Sans règles d’accès, une table est publique',
        text: 'La documentation de Supabase, la base utilisée par Lovable et Bolt, le dit sans détour : une table exposée sans Row Level Security est lisible et modifiable par n’importe quel rôle qui y a accès, dont le rôle public utilisé par votre application.',
        sourceName: SUPABASE_RLS_SOURCE.name,
        sourceUrl: SUPABASE_RLS_SOURCE.url,
      },
      {
        contextLabel: '0,50 à 2 crédits par demande',
        title: 'Des corrections payées même quand elles échouent',
        text: 'Chez Lovable, chaque message en mode construction coûte des crédits : griser un bouton 0,50, ajouter une authentification 1,20. Une demande arrêtée en cours de route est facturée pour le travail déjà fait, et les crédits mensuels expirent au bout de deux mois.',
        sourceName: LOVABLE_CREDITS_SOURCE.name,
        sourceUrl: LOVABLE_CREDITS_SOURCE.url,
      },
    ],
  },
  test: {
    eyebrow: 'Test gratuit',
    title: `Votre application IA tient-elle la route${NBSP}?`,
    intro:
      'Huit questions sur votre outil, ses utilisateurs et ses données. Le test vous donne un niveau de risque, les points que je vérifierais en premier et la formule adaptée. Sans inscription.',
  },
  method: {
    eyebrow: 'Comment je m’y prends',
    title: 'De l’audit gratuit à l’application fiable',
    intro: 'Vous pouvez vous arrêter après chaque étape, et votre application reste en ligne pendant tout le travail.',
    steps: [
      {
        label: 'Audit',
        title: 'Un audit gratuit, sans engagement',
        description: `Trente minutes en visio ou par téléphone, puis je lis votre code et vos règles d’accès (dépôt GitHub en lecture seule, ou export de l’outil). Sous 48${NBSP}h, vous savez si votre application est récupérable et par où commencer.`,
      },
      {
        label: 'Diagnostic',
        title: 'Un diagnostic écrit, classé par urgence',
        description:
          'Si vous voulez aller plus loin, je rédige la liste complète : failles, bugs, dette technique, ce qu’on garde et ce qu’on refait, avec un prix fixe pour chaque étape. Déduit de la suite si vous continuez.',
      },
      {
        label: 'Reprise',
        title: 'Sécuriser, stabiliser, finir',
        description:
          'D’abord les données et les accès, puis les bugs qui bloquent, puis les fonctions qui manquent. Je travaille sur une copie et on bascule quand c’est prêt.',
      },
      {
        label: 'Suite',
        title: 'Le code à votre nom, et un relais si vous voulez',
        description:
          'Dépôt GitHub à vous, documentation, sauvegardes en place. Vous continuez avec l’IA sur une base saine, ou vous me confiez la maintenance.',
      },
    ],
  },
  pricing: {
    eyebrow: 'Tarifs',
    title: 'Des prix fixés avant de commencer',
    intro: 'Chaque étape a son prix, annoncé d’avance, et vous pouvez vous arrêter après chacune.',
    offers: [
      {
        title: 'Audit',
        price: 'Gratuit',
        description: `Trente minutes d’échange, lecture du code et des règles d’accès, premier avis écrit sous 48${NBSP}h.`,
        isHighlighted: false,
      },
      {
        title: 'Diagnostic écrit',
        price: `400${NBSP}€`,
        description:
          'Liste complète des failles, bugs et corrections, classée par urgence, avec un prix fixe par étape. Déduit si vous continuez.',
        isHighlighted: false,
      },
      {
        title: 'Mise en sécurité',
        price: `De 900 à 1${NBSP}500${NBSP}€`,
        description:
          'Règles d’accès de la base, clés retirées du navigateur, sauvegardes, comptes et droits. Trois à sept jours.',
        isHighlighted: false,
      },
      {
        title: 'Reprise et mise en production',
        price: `De 2${NBSP}500 à 6${NBSP}000${NBSP}€`,
        description:
          'Bugs bloquants corrigés, doublons supprimés, tests sur les parcours sensibles, déploiement propre. Deux à quatre semaines.',
        isHighlighted: true,
      },
    ],
    notes: [
      `Une refonte complète se chiffre après le diagnostic : la plupart des outils de TPE et PME se situent entre 5${NBSP}000 et 15${NBSP}000${NBSP}€.`,
      `Maintenance ensuite, si vous le souhaitez : de 100 à 300${NBSP}€ par mois.`,
      'Prix nets : TVA non applicable (article 293 B du CGI).',
    ],
    highlightLabel: 'Le plus fréquent',
    cta: 'Demander mon audit gratuit',
    secondaryLink: 'Faire le test en 8 questions',
  },
  deliverables: {
    eyebrow: 'Ce que vous récupérez',
    title: 'À la fin, tout est à vous',
    intro: '',
    items: [
      {
        title: 'Le code sur un dépôt à votre nom',
        description:
          'Un dépôt GitHub que vous possédez, lisible par n’importe quel développeur. Vous n’êtes plus prisonnier d’un outil.',
      },
      {
        title: 'Des données protégées',
        description:
          'Chaque utilisateur ne voit que ses données, les clés sensibles sont côté serveur, et c’est vérifié par un test.',
      },
      {
        title: 'Des tests et un déploiement reproductible',
        description:
          'Les parcours qui comptent (connexion, paiement, réservation) sont testés automatiquement, et la mise en ligne se fait en une commande.',
      },
      {
        title: 'Une documentation et un relais',
        description:
          'Comment lancer, sauvegarder et restaurer l’application, écrit noir sur blanc. Et quelqu’un à appeler.',
      },
    ],
  },
  caseStudy: {
    eyebrow: 'Cas réel',
    title: 'Un outil d’automatisation IA, fait avec Base44 puis Lovable, refait pour durer',
    intro:
      'Un client est venu avec un outil qu’il avait construit lui-même, et qu’il utilisait tous les jours malgré les plantages.',
    columns: [
      {
        stage: 'before',
        title: 'Avant',
        items: [
          'Un outil d’automatisation IA construit par le client, avec Base44 puis Lovable',
          'Des bugs à chaque utilisation et des résultats instables',
          'Une architecture qui empêchait toute évolution, et une interface qui faisait perdre du temps',
        ],
      },
      {
        stage: 'built',
        title: 'Ce que j’ai fait',
        items: [
          'Lecture de l’existant pour garder exactement ce que l’outil devait faire',
          'Application refaite avec des technologies répandues, adaptées au besoin et non à la démonstration',
          'Interface repensée autour du quotidien du client',
        ],
      },
      {
        stage: 'after',
        title: 'Après',
        items: [
          'Un outil stable, utilisé chaque jour',
          'Du code lisible, que n’importe quel développeur peut reprendre',
          'Une base prête pour les prochaines fonctions, pensée pour durer des années',
        ],
      },
    ],
  },
  sampleReport: {
    eyebrow: 'Exemple de diagnostic',
    title: 'À quoi ressemble le rapport que vous recevez',
    intro:
      'Extrait d’un diagnostic rédigé sur un projet de démonstration (une application de réservation générée avec Lovable), pour vous montrer le niveau de détail. Chaque point donne le constat, la gravité et la correction prévue.',
    items: [
      {
        title: 'Critique · La table des clients est lisible sans compte',
        description:
          'Aucune règle d’accès sur la table des clients : avec la clé publique de l’application, n’importe qui peut lister les noms, e-mails et téléphones. Correction : règles par utilisateur, vérifiées par un test automatique.',
      },
      {
        title: 'Élevé · La clé de paiement est dans le code envoyé au navigateur',
        description:
          'La clé secrète Stripe est appelée depuis la page. Correction : déplacer l’appel côté serveur et renouveler la clé.',
      },
      {
        title: 'Moyen · Deux réservations peuvent prendre le même créneau',
        description:
          'Rien n’empêche deux clients de réserver la même place au même moment. Correction : contrainte en base et message clair à l’utilisateur.',
      },
      {
        title: 'À surveiller · Aucune sauvegarde restaurable',
        description:
          'La base est sauvegardée par l’hébergeur, mais personne n’a jamais testé une restauration. Correction : sauvegarde quotidienne et essai de restauration documenté.',
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Reprise d’une application faite avec l’IA : vos questions',
    questions: [
      {
        question: `Mon application est-elle récupérable${NBSP}?`,
        answer:
          'Dans la plupart des cas, oui. Si la structure tient, on sécurise, on nettoie et on continue à partir de votre code. Si chaque écran a été bricolé séparément, repartir sur une base propre coûte parfois moins cher que de colmater pendant des mois. L’audit gratuit vous le dit avant d’engager un euro.',
      },
      {
        question: `Faut-il tout réécrire${NBSP}?`,
        answer:
          'Rarement. Réécrire efface ce qui marche déjà. Je garde l’interface et les parcours que vos utilisateurs connaissent, et je refais seulement les fondations qui lâchent : accès, données, paiement, déploiement.',
      },
      {
        question: `Comment vous transmettre mon code Lovable ou Bolt${NBSP}?`,
        answer:
          'Lovable et Bolt synchronisent le projet avec un dépôt GitHub qui vous appartient ; vous m’y donnez un accès en lecture seule. Sans dépôt, l’export du code suffit pour l’audit. Je ne modifie rien sans votre accord.',
      },
      {
        question: `Dois-je garder mon abonnement pendant la reprise${NBSP}?`,
        answer:
          'Pendant l’audit, oui, pour que rien ne bouge. Ensuite, c’est à vous de voir : beaucoup gardent l’outil pour maquetter de nouveaux écrans et confient à un développeur tout ce qui part en production.',
      },
      {
        question: `Mes données ont-elles pu fuiter${NBSP}?`,
        answer:
          'C’est la première chose que je vérifie. Si la base était ouverte, je vous le dis par écrit, avec ce que le RGPD vous impose (information des personnes concernées et déclaration à la CNIL sous 72 heures quand le risque est avéré), et je ferme la porte le jour même.',
      },
      {
        question: `Combien de temps ça prend${NBSP}?`,
        answer: `Premier avis sous 48${NBSP}heures. Mise en sécurité en trois à sept jours. Reprise et mise en production en deux à quatre semaines. Une refonte complète suit le rythme d’un projet classique, livré par étapes.`,
      },
      {
        question: `Vous travaillez aussi sur v0, Cursor, Claude Code, Replit ou Base44${NBSP}?`,
        answer:
          'Oui. Les outils changent, les défauts se ressemblent : accès trop larges, clés dans le navigateur, pas de tests, pas de sauvegarde. J’ai repris un outil construit avec Base44 puis Lovable, et je travaille en React, Nuxt, Vue, Node.js et Python.',
      },
      {
        question: `Pourrai-je continuer à utiliser l’IA après${NBSP}?`,
        answer:
          'Oui, et c’est même conseillé pour les petites retouches. La différence, c’est qu’une fois en production, chaque modification passe par une relecture et des tests avant d’être mise en ligne.',
      },
      {
        question: `Travaillez-vous à distance${NBSP}?`,
        answer:
          'Oui, avec des entreprises de Rennes, de Bretagne et d’ailleurs en France. Visio, téléphone, accès au dépôt : tout se fait à distance, avec des points réguliers.',
      },
    ],
  },
  relatedArticles: {
    title: 'Pour aller plus loin',
    intro: 'Ce que j’ai écrit sur les applications générées par l’IA, le no-code et les outils sur mesure.',
  },
  contactCta: {
    title: `Une application faite avec l’IA qui vous inquiète${NBSP}?`,
    description: `Envoyez-moi son adresse et quelques mots sur ce qui coince. Je regarde le code et vous repartez avec un premier avis écrit sous 48${NBSP}h, gratuit, même si la conclusion est que tout va bien.`,
    button: 'Demander mon audit gratuit',
  },
}
