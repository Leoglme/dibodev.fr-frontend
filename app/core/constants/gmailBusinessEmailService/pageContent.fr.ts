import type { DibodevUpdateServicePageContent } from '~/core/types/DibodevUpdateServicePage'
import { NBSP } from '~/core/constants/typography'

export const GMAIL_BUSINESS_EMAIL_SERVICE_PAGE_FR: DibodevUpdateServicePageContent = {
  meta: {
    title: `Adresse pro sur Gmail${NBSP}: configuration à distance dès 90${NBSP}€`,
    description: `Gmail gratuit arrête «${NBSP}Envoyer en tant que${NBSP}» en janvier 2027. Je configure votre adresse professionnelle à distance${NBSP}: diagnostic gratuit, à partir de 90${NBSP}€.`,
    serviceName: 'Réglage de l’adresse mail professionnelle dans Gmail et passage à Google Workspace',
  },
  breadcrumbLabel: 'Adresse mail professionnelle dans Gmail',
  shareImage: {
    titleLines: ['Votre adresse pro dans Gmail', 'après janvier 2027'],
    highlight: 'après janvier 2027',
    subtitle: 'Transfert vers Gmail ou passage à Google Workspace, à distance',
    badge: 'À partir de 90 €, diagnostic gratuit',
    alt: 'Votre adresse mail professionnelle dans Gmail après janvier 2027 : réglage à distance à partir de 90 €, diagnostic gratuit',
  },
  hero: {
    titlePart1: `Votre adresse mail professionnelle dans Gmail après janvier 2027${NBSP}: `,
    titleHighlight1: 'je fais les réglages',
    titlePart2: ' à distance',
    description: `À partir de janvier 2027, d’après Google, un Gmail gratuit ne pourra plus envoyer avec une adresse hébergée ailleurs («${NBSP}Envoyer en tant que${NBSP}») ni aller chercher ses mails («${NBSP}Consulter d’autres comptes de messagerie${NBSP}»). Si vous lisez votre adresse professionnelle dans Gmail, il y a un réglage à faire avant. Je m’en occupe à distance${NBSP}: diagnostic gratuit sous 24${NBSP}h, puis soit un transfert vers votre Gmail, soit le passage de votre Gmail en Google Workspace, avec les essais d’envoi et de réception. Le prix est annoncé avant de commencer.`,
    ctaText: 'Envoyer mon adresse',
    secondaryCtaText: 'Voir les prix',
    reassurances: ['Réponse sous 24 h', 'Aucun mail perdu', 'Prix annoncé avant de commencer'],
  },
  offers: {
    anchorId: 'prix',
    eyebrow: 'Offres et prix',
    title: 'Deux solutions, un prix connu avant de commencer',
    intro: `Le diagnostic est gratuit et sans engagement. Ensuite, deux interventions différentes${NBSP}: la première garde votre Gmail gratuit, la seconde le rend professionnel. Je vous dis laquelle vous convient.`,
    cards: [
      {
        title: 'Diagnostic',
        price: 'Gratuit',
        description: `Vous m’envoyez votre adresse professionnelle. Je vous dis par écrit sous 24${NBSP}h où elle est hébergée, ce qui s’arrête pour vous en janvier 2027, quelle solution vous convient et son prix. Sans engagement.`,
        isHighlighted: false,
      },
      {
        title: 'Garder votre Gmail gratuit',
        price: `À partir de 90${NBSP}€`,
        description: `Je crée chez votre hébergeur le transfert de votre adresse professionnelle vers votre Gmail, je vérifie que les mails arrivent et ne partent pas en spam, et je vous montre où écrire avec votre adresse professionnelle. Aucun abonnement. Vous recevez comme avant${NBSP}; depuis Gmail, vous écrivez avec votre adresse @gmail.com.`,
        isHighlighted: false,
      },
      {
        title: 'Passer votre Gmail en Google Workspace',
        price: `À partir de 190${NBSP}€`,
        description: `Votre Gmail devient professionnel${NBSP}: même boîte, mêmes mails, et vous continuez d’écrire avec votre adresse professionnelle. Je valide votre nom de domaine, je recrée vos adresses, je bascule la réception chez Google, je règle l’authentification des envois et je teste. L’abonnement Google (6,80 à 8,10${NBSP}€ HT par mois et par boîte) se paie à Google, à votre nom.`,
        isHighlighted: true,
      },
    ],
    notes: [
      `«${NBSP}À partir de${NBSP}»${NBSP}: le prix de départ vaut pour une adresse, sur un nom de domaine dont vous avez les accès. Il monte avec le nombre d’adresses, les mails envoyés par votre site (formulaires, boutique) et les réglages à corriger. Le prix définitif est annoncé après le diagnostic, avant toute modification.`,
      'Prix nets, TVA non applicable (art. 293 B du CGI). Intervention à distance, partout en France.',
    ],
    ctaLabel: 'Envoyer mon adresse',
    highlightLabel: 'Pour ne rien changer à vos habitudes',
    toolLinkText: 'Tester d’abord mon adresse gratuitement',
  },
  included: {
    anchorId: 'inclus',
    eyebrow: 'Dans chaque intervention',
    title: 'Ce qui est compris, quelle que soit la solution',
    intro: 'Une messagerie qui s’arrête, ce sont des clients qui n’ont pas de réponse. D’où ces précautions.',
    items: [
      {
        title: 'Rien n’est modifié avant votre accord',
        description: 'Le diagnostic est une lecture. Les réglages commencent quand vous avez dit oui au prix.',
      },
      {
        title: 'Aucun mail perdu',
        description:
          'Chaque adresse existante du domaine est listée et recréée avant la bascule, et la boîte chez votre hébergeur est gardée.',
      },
      {
        title: 'Envoi et réception testés',
        description:
          'Des mails d’essai dans les deux sens, vers plusieurs messageries, avec un regard sur le dossier Spam.',
      },
      {
        title: 'Authentification des envois vérifiée',
        description: `Les lignes SPF, DKIM et DMARC de votre nom de domaine sont contrôlées${NBSP}: sans elles, un mail bien envoyé arrive en spam.`,
      },
      {
        title: 'Vous gardez la main sur votre compte',
        description: `Je ne vous demande pas le mot de passe de votre Gmail${NBSP}: les étapes côté Google se font avec vous, en visio ou pas à pas par écrit.`,
      },
      {
        title: 'Compte rendu écrit',
        description:
          'Ce qui a été fait, où se trouvent les réglages et ce qu’il faudra surveiller, en français lisible.',
      },
    ],
  },
  audiences: {
    anchorId: 'pour-qui',
    eyebrow: 'Pour qui',
    title: 'Adresses, hébergeurs et situations concernés',
    intro: 'Toute adresse hébergée ailleurs que chez Google et utilisée dans un Gmail gratuit.',
    items: [
      {
        title: 'Artisans, indépendants, professions libérales',
        description:
          'Une adresse contact@votre-entreprise.fr lue dans votre Gmail personnel, installée un jour par vous ou par votre webmaster.',
      },
      {
        title: 'OVHcloud, o2switch, IONOS et les autres',
        description:
          'Infomaniak, Gandi, Hostinger, LWS, Plesk ou cPanel chez un petit hébergeur : le principe est le même partout.',
      },
      {
        title: 'Plusieurs adresses sur le même nom de domaine',
        description:
          'contact@, devis@, facturation@ : chacune est reprise, en boîte ou en alias, pour que rien ne se perde à la bascule.',
      },
      {
        title: 'Mails du site qui arrivent en spam',
        description:
          'Formulaires de contact, confirmations de commande, rappels de rendez-vous : je règle aussi l’envoi des mails de votre site.',
        link: { label: 'Tester si vos mails arrivent en spam', to: '/outils/mes-mails-arrivent-en-spam' },
      },
      {
        title: 'Adresse Orange, Free, SFR ou laposte.net',
        description:
          'Le bon moment pour passer à une adresse à votre nom de domaine, qui vous suit si vous changez de fournisseur d’accès.',
      },
      {
        title: 'Webmasters et agences',
        description:
          'Vous avez installé ce montage chez vos clients : vous pouvez me les envoyer pour la partie technique, je vois directement avec eux.',
      },
    ],
  },
  method: {
    eyebrow: 'Déroulé',
    title: 'Cinq étapes, de votre message au compte rendu',
    intro: 'Rien à installer de votre côté. Un accès à votre hébergeur suffit, que vous reprenez à la fin.',
    steps: [
      {
        label: 'Adresse',
        title: 'Vous m’envoyez votre adresse professionnelle',
        description: 'Par le formulaire, avec votre hébergeur si vous le connaissez. Sinon, je le retrouve.',
      },
      {
        label: 'Diagnostic',
        title: 'Réponse écrite sous 24 h',
        description:
          'Où votre adresse est hébergée, ce qui s’arrête pour vous, la solution qui vous convient et son prix. Gratuit, sans engagement.',
      },
      {
        label: 'Préparation',
        title: 'Liste des adresses et des réglages',
        description: 'Toutes les adresses du domaine, les mails envoyés par votre site, les accès nécessaires.',
      },
      {
        label: 'Réglages',
        title: 'Transfert ou bascule, à une heure convenue',
        description: 'Vos mails continuent d’arriver pendant les réglages. Les étapes côté Google se font avec vous.',
      },
      {
        label: 'Compte rendu',
        title: 'Essais, puis ce qui a été fait, par écrit',
        description: 'Et ce qu’il faudra surveiller. La facture arrive après, pas avant.',
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Avant de m’écrire',
    questions: [
      {
        question: `Qui peut configurer mon adresse mail professionnelle sur Gmail avant janvier 2027${NBSP}?`,
        answer: `Trois personnes peuvent le faire${NBSP}: vous-même, avec le guide de votre hébergeur (les guides OVHcloud, o2switch et IONOS sont sur ce site)${NBSP}; le webmaster qui a installé votre adresse${NBSP}; ou un développeur comme moi, qui regarde ce qui est en place, vous propose la solution la plus simple, fait les réglages chez l’hébergeur et teste l’envoi et la réception. Le diagnostic est gratuit, et vous avez le prix avant l’intervention${NBSP}: à partir de 90${NBSP}€ pour garder votre Gmail gratuit, à partir de 190${NBSP}€ pour le passer en Google Workspace.`,
      },
      {
        question: `Pourquoi deux prix${NBSP}?`,
        answer: `Parce que ce sont deux interventions différentes. À partir de 90${NBSP}€, votre Gmail reste gratuit${NBSP}: je crée un transfert de votre adresse professionnelle vers Gmail, vous recevez comme avant, mais depuis Gmail vous écrivez avec votre adresse @gmail.com. À partir de 190${NBSP}€, votre Gmail devient un compte Google Workspace${NBSP}: vous continuez de recevoir et d’écrire avec votre adresse professionnelle, comme aujourd’hui, et vous payez à Google un abonnement de 6,80 à 8,10${NBSP}€ HT par mois et par boîte (prix lus le 19 novembre 2026).`,
      },
      {
        question: `Pourquoi «${NBSP}à partir de${NBSP}»${NBSP}?`,
        answer: `Parce que le travail dépend de ce qui est en place chez vous. Le prix de départ vaut pour une adresse, sur un nom de domaine dont vous avez les accès. Plusieurs adresses, des mails envoyés par votre site, des réglages d’authentification à corriger ou un hébergeur sans accès demandent plus de temps. Le diagnostic gratuit le dit, et le prix définitif est annoncé avant toute modification.`,
      },
      {
        question: `Dois-je payer Google en plus${NBSP}?`,
        answer: `Seulement si vous choisissez Google Workspace. Sur la page des prix de Google pour la France, lue le 19 novembre 2026${NBSP}: Business Starter à 6,80${NBSP}€ hors taxes par utilisateur et par mois avec un engagement d’un an, 8,10${NBSP}€ sans engagement, avec un essai gratuit de 14 jours. Une boîte suffit pour une personne${NBSP}: les autres adresses du domaine peuvent en être des alias. L’abonnement est à votre nom et se paie à Google, pas à moi. Avec le transfert vers un Gmail gratuit, il n’y a aucun abonnement.`,
      },
      {
        question: `Faut-il le faire avant janvier 2027${NBSP}?`,
        answer: `C’est plus confortable. Google écrit que les réglages actuels marchent jusqu’en janvier 2027 et ne donne pas de jour précis. Faire le changement avant, c’est le faire à une heure choisie, avec des essais, plutôt qu’un matin où les mails ne partent plus. Si c’est déjà le cas, rien n’est perdu${NBSP}: les mails attendent chez votre hébergeur, et je commence par là.`,
      },
      {
        question: `Vais-je perdre des mails pendant le changement${NBSP}?`,
        answer: `Non, c’est tout l’objet de la préparation. Avant un passage à Google Workspace, chaque adresse du domaine est listée et recréée chez Google, puis la réception est basculée${NBSP}; la boîte chez votre hébergeur est gardée. Les mails déjà dans votre Gmail y restent, Google l’écrit. Avec un transfert, les mails continuent d’arriver dans la boîte de l’hébergeur en plus de Gmail.`,
      },
      {
        question: `Combien de temps dure l’intervention${NBSP}?`,
        answer: `Un transfert se règle en une séance courte. Pour un passage à Google Workspace, j’ai mis environ 40 minutes sur un compte de test le 19 novembre 2026, pour une adresse${NBSP}; il faut compter davantage avec plusieurs adresses et les mails du site. Google prévient que l’arrivée des nouveaux mails peut prendre jusqu’à 24 heures après la bascule.`,
      },
      {
        question: `Chez quels hébergeurs intervenez-vous${NBSP}?`,
        answer: `Tous ceux qui donnent accès aux adresses et aux réglages du nom de domaine${NBSP}: OVHcloud, o2switch, IONOS, Infomaniak, Gandi, Hostinger, LWS, et les hébergements sous Plesk ou cPanel. Mon adresse professionnelle est elle-même hébergée chez o2switch.`,
      },
      {
        question: `Et si un réglage gratuit me suffit${NBSP}?`,
        answer: `Je vous le dis au diagnostic. Si vous recevez surtout et que vos clients ne voient jamais votre adresse, un transfert que vous pouvez créer vous-même chez votre hébergeur suffit, et les guides de ce site montrent où cliquer.`,
      },
      {
        question: `Travaillez-vous avec les webmasters et les agences${NBSP}?`,
        answer: `Oui. Si vous avez installé des adresses professionnelles dans le Gmail de vos clients, vous pouvez me les envoyer${NBSP}: je vois directement avec eux, uniquement pour la messagerie. Le site, le graphisme et les contenus restent bien sûr chez vous.`,
      },
      {
        question: `Comment se passe le paiement${NBSP}?`,
        answer: `Un diagnostic gratuit, un prix annoncé avant l’intervention, puis une facture à l’issue, réglée par virement. Prix nets, TVA non applicable. L’abonnement Google Workspace, si vous le prenez, est à votre nom et se règle directement à Google.`,
      },
    ],
  },
  relatedArticles: {
    title: 'Pour faire vous-même, ou comprendre ce qui change',
    intro: 'Le pas à pas par hébergeur, le dépannage, et le passage à Google Workspace raconté étape par étape.',
  },
  contactCta: {
    title: 'Envoyez-moi votre adresse professionnelle',
    description: `Diagnostic gratuit sous 24${NBSP}h, puis un prix annoncé avant toute intervention.`,
    button: 'Envoyer mon adresse',
  },
  mobileContactBar: {
    text: `Votre adresse pro dans Gmail${NBSP}?`,
    buttonLabel: 'Envoyer mon adresse',
  },
}
