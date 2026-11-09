import type { DibodevUpdateServicePageContent } from '~/core/types/DibodevUpdateServicePage'
import { NBSP } from '~/core/constants/typography'

export const JOOMLA_UPDATE_SERVICE_PAGE_FR: DibodevUpdateServicePageContent = {
  meta: {
    title: 'Mise à jour Joomla 6 et PHP 8.3 de votre site : dès 190 €',
    description:
      'Je passe votre site Joomla 3, 4 ou 5 à Joomla 6 et PHP 8.3, à distance, présentation et formulaires identiques. Diagnostic gratuit sous 24 h, dès 190 €.',
    serviceName: 'Mise à jour de sites Joomla vers Joomla 6 et PHP 8.3',
  },
  breadcrumbLabel: 'Mise à jour Joomla',
  shareImage: {
    titleLines: ['Mise à jour Joomla 6', 'et PHP 8.3 de votre site'],
    highlight: 'Dès 190 €, diagnostic gratuit',
    subtitle: 'Sauvegarde, test sur une copie, présentation identique',
    badge: 'Intervention à distance',
    alt: 'Mise à jour de votre site Joomla vers Joomla 6 et PHP 8.3 : intervention à distance dès 190 €, diagnostic gratuit',
  },
  hero: {
    titlePart1: `Mise à jour Joomla${NBSP}: votre site passe à Joomla 6 et PHP 8.3, `,
    titleHighlight1: 'sans changer d’apparence',
    titlePart2: '',
    description: `Joomla 3 et 4 ne reçoivent plus de correctifs, Joomla 5 s’arrête en octobre 2027 et PHP 8.2 le 31 décembre 2026. Je mets votre site à jour à distance${NBSP}: sauvegarde, test sur une copie, Joomla 6 et PHP 8.3, puis compte rendu écrit. Votre site garde sa présentation, ses contenus et ses formulaires.`,
    ctaText: 'Envoyer le lien de mon site',
    secondaryCtaText: 'Voir les prix',
    reassurances: [`Diagnostic gratuit sous 24${NBSP}h`, 'Présentation identique', 'Prix annoncé avant de commencer'],
  },
  offers: {
    anchorId: 'prix',
    eyebrow: 'Offres et prix',
    title: 'Un prix annoncé avant de commencer',
    intro: `Le diagnostic est gratuit et sans engagement. Une montée de version simple se facture au forfait de base${NBSP}; le prix monte seulement s’il faut adapter le modèle, remplacer des extensions ou régler un problème de sécurité, et vous le connaissez avant que je touche au site.`,
    cards: [
      {
        title: 'Diagnostic',
        price: 'Gratuit',
        description: `Vous m’envoyez le lien du site. Je vous dis par écrit sous 24${NBSP}h quelles versions de Joomla et de PHP il utilise, ce qui risque de bloquer le passage à Joomla 6 et le forfait qui convient. Sans engagement.`,
        isHighlighted: false,
      },
      {
        title: 'Montée de version simple',
        price: '190 €',
        description: `Un site Joomla 4 ou 5 dont le modèle et les extensions suivent Joomla 6${NBSP}: sauvegarde hors du serveur, test sur une copie, dernière version de Joomla 5, PHP 8.3 puis Joomla 6, extensions mises à jour, pages et formulaires vérifiés, compte rendu écrit.`,
        isHighlighted: true,
      },
      {
        title: 'Modèle, extensions ou sécurité à reprendre',
        price: '390 €',
        description: `Tout le forfait de base, plus l’adaptation d’un modèle graphique fait sur mesure, le remplacement des extensions qui bloquent (formulaire, galerie, éditeur) ou la remise en ordre après une faille connue${NBSP}: comptes suspects supprimés, version corrigée.`,
        isHighlighted: false,
      },
    ],
    notes: [
      `Joomla 3 ou site à reconstruire${NBSP}: le passage demande plusieurs étapes (3.10, 4.4, 5.4, puis 6) ou une reprise des contenus dans un Joomla 6 neuf. Le prix est annoncé après le diagnostic gratuit, avant toute intervention.`,
      `Suivi${NBSP}: mises à jour mensuelles et surveillance pour 100 € par mois, sans engagement de durée.`,
      'Prix nets, TVA non applicable (art. 293 B du CGI). Intervention à distance, partout en France.',
    ],
    ctaLabel: 'Envoyer le lien de mon site',
    highlightLabel: 'Forfait de base',
    toolLinkText: 'Vérifier d’abord la version Joomla de mon site',
  },
  included: {
    anchorId: 'inclus',
    eyebrow: 'Dans chaque intervention',
    title: 'Ce qui est compris, quel que soit le forfait',
    intro:
      'Les précautions qui évitent qu’une mise à jour de Joomla tourne mal, pour un site de dix pages comme pour un site de mille.',
    items: [
      {
        title: 'Sauvegarde complète avant tout',
        description: 'Fichiers et base de données, dans une sauvegarde qui se restaure, rangée hors du serveur.',
      },
      {
        title: 'Test sur une copie',
        description:
          'Joomla 6 et PHP 8.3 sont d’abord installés sur une copie du site, jamais directement sur le site en ligne.',
      },
      {
        title: 'Présentation identique',
        description: 'Même modèle graphique, mêmes menus, mêmes contenus, mêmes adresses de pages.',
      },
      {
        title: 'Formulaires vérifiés',
        description: `Contact, prise de rendez-vous, inscription${NBSP}: chaque formulaire s’affiche et s’envoie après la mise à jour.`,
      },
      {
        title: 'Retour arrière possible',
        description:
          'Si une extension bloque et ne peut pas être remplacée le jour même, le site revient à l’état d’avant.',
      },
      {
        title: 'Compte rendu écrit',
        description: 'Versions avant et après, ce qui a été modifié, où sont les sauvegardes, en français lisible.',
      },
    ],
  },
  audiences: {
    anchorId: 'sites-concernes',
    eyebrow: 'Sites concernés',
    title: 'Joomla 3, 4 ou 5, chez tout hébergeur',
    intro: 'Du plus simple au plus long, selon la version de départ.',
    items: [
      {
        title: 'Joomla 5',
        description:
          'Correctifs de sécurité jusqu’au 12 octobre 2027. Le passage à Joomla 6 se fait avec PHP 8.3, dans la même intervention.',
      },
      {
        title: 'Joomla 4',
        description:
          'Plus aucun correctif depuis le 14 octobre 2025. Passage par Joomla 5.4, puis Joomla 6, sur la même copie de test.',
      },
      {
        title: 'Joomla 3',
        description:
          'Plus aucun correctif depuis le 17 août 2023. Mise à jour en plusieurs étapes, ou reprise des contenus dans un Joomla 6 neuf quand c’est plus court.',
      },
      {
        title: 'Modèle graphique fait sur mesure',
        description:
          'Un modèle conçu pour Joomla 2.5 ou 3 est vérifié sur la copie, puis adapté sans toucher à l’apparence du site.',
      },
      {
        title: 'Formulaires et extensions',
        description: `ChronoForms, JCE, Akeeba Backup, AcyMailing, 4SEF${NBSP}: mis à jour un par un, ou remplacés quand leur éditeur a disparu.`,
      },
      {
        title: 'Hébergement mutualisé ou serveur',
        description: 'OVHcloud, o2switch, IONOS, Hostinger, Infomaniak, PlanetHoster, serveurs Plesk ou cPanel.',
      },
    ],
  },
  method: {
    eyebrow: 'Déroulé',
    title: 'Cinq étapes, de votre message au compte rendu',
    intro:
      'Rien à installer de votre côté. Un compte administrateur Joomla et un accès à l’hébergement suffisent, et vous les retirez à la fin.',
    steps: [
      {
        label: 'Lien',
        title: 'Vous m’envoyez le lien du site',
        description:
          'Par le formulaire, avec votre version de Joomla et votre hébergeur si vous les connaissez. Sinon, je les trouve.',
      },
      {
        label: 'Diagnostic',
        title: `Réponse écrite sous 24${NBSP}h`,
        description:
          'Versions de Joomla et de PHP, modèle, extensions qui risquent de bloquer, et le forfait qui convient. Gratuit, sans engagement.',
      },
      {
        label: 'Préparation',
        title: 'Sauvegarde et copie de test',
        description: 'Tout est sauvegardé, puis la mise à jour est faite et vérifiée sur une copie du site.',
      },
      {
        label: 'Mise à jour',
        title: 'Joomla 6 et PHP 8.3 en ligne',
        description:
          'La même suite d’opérations sur le site en ligne, à l’heure convenue, avec une nouvelle sauvegarde juste avant.',
      },
      {
        label: 'Compte rendu',
        title: 'Ce qui a été fait, par écrit',
        description: 'Versions avant et après, ce qui a été modifié, et ce qu’il faudra surveiller.',
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Avant de m’écrire',
    questions: [
      {
        question: `Combien coûte la mise à jour d’un site Joomla vers Joomla 6${NBSP}?`,
        answer: `190${NBSP}€ pour une montée de version simple${NBSP}: un site Joomla 4 ou 5 dont le modèle et les extensions suivent Joomla 6, avec sauvegarde, test sur une copie et compte rendu. 390${NBSP}€ quand il faut aussi adapter un modèle fait sur mesure, remplacer des extensions ou remettre le site en ordre après une faille connue. Pour un site Joomla 3, le prix dépend du chemin le plus court, et vous l’avez après le diagnostic gratuit, avant toute intervention.`,
      },
      {
        question: `Peut-on passer directement de Joomla 3 ou 4 à Joomla 6${NBSP}?`,
        answer: `Non. Le chemin officiel passe par la dernière version de chaque branche${NBSP}: 3.10, puis 4.4, puis 5.4, puis 6, chacune avec son pré-contrôle. Sur une copie de test, ces étapes s’enchaînent dans la même intervention, et le site en ligne ne change qu’une fois tout validé.`,
      },
      {
        question: `Joomla 5 est-il encore sûr${NBSP}?`,
        answer: `Oui, jusqu’au 12 octobre 2027, à condition d’être dans la dernière version 5.4 et sur un PHP corrigé. Mais PHP 8.2 s’arrête le 31 décembre 2026 et Joomla 6 exige PHP 8.3${NBSP}: faire les deux changements dans la même intervention évite de payer deux fois.`,
      },
      {
        question: `Mon site gardera-t-il la même apparence${NBSP}?`,
        answer: `Oui. Le modèle graphique est conservé et, s’il a été conçu pour une ancienne version de Joomla, adapté sans changer l’apparence${NBSP}: mêmes couleurs, mêmes menus, mêmes contenus, mêmes adresses de pages. Les pages principales et les formulaires sont vérifiés avant et après.`,
      },
      {
        question: `Mon formulaire de contact ou de prise de rendez-vous fonctionnera-t-il encore${NBSP}?`,
        answer: `C’est le point que je vérifie en premier. ChronoForms 7, par exemple, n’est annoncé par son éditeur que jusqu’à Joomla 5, mais il fonctionne sous Joomla 6 avec un correctif d’une ligne, testé en novembre 2026. Quand une extension de formulaire ne suit vraiment pas, je la remplace en gardant les mêmes champs et les mêmes destinataires.`,
      },
      {
        question: `Faut-il mettre à jour le site ou le refaire${NBSP}?`,
        answer: `Je mets à jour quand le modèle est adaptable et que les extensions importantes existent pour Joomla 6. Pour un vieux site Joomla 3 aux extensions abandonnées, reprendre les contenus dans un Joomla 6 neuf peut coûter moins cher. Le diagnostic vous dit lequel des deux, avant tout engagement.`,
      },
      {
        question: `De quels accès avez-vous besoin${NBSP}?`,
        answer: `Un compte administrateur Joomla (groupe Super Users) et un accès à l’hébergement, pour la version de PHP et la sauvegarde. Si c’est votre webmaster ou votre agence qui les détient, il peut me les créer. Vous les retirez à la fin.`,
      },
      {
        question: `Mon site sera-t-il coupé${NBSP}?`,
        answer:
          'Non pendant la préparation, qui se fait sur une copie. Sur le site en ligne, le passage prend quelques minutes, à l’heure convenue avec vous.',
      },
      {
        question: `Combien de temps faut-il${NBSP}?`,
        answer: `Quelques heures pour un site Joomla 5 sans surprise, une à deux journées quand le modèle ou les extensions demandent du travail. Le diagnostic arrive sous 24${NBSP}h.`,
      },
      {
        question: `Travaillez-vous avec les webmasters et les agences${NBSP}?`,
        answer:
          'Oui. Si l’un de vos clients a besoin d’une montée de version, d’un point sur la sécurité ou d’un nettoyage après un piratage, vous pouvez me l’envoyer, et je vois directement avec lui si vous le souhaitez, uniquement pour la partie technique. Le graphisme, les contenus et la communication restent bien sûr chez vous.',
      },
      {
        question: `Comment se passe le paiement${NBSP}?`,
        answer: `Le diagnostic est gratuit, le prix est annoncé par écrit avant l’intervention, et la facture se règle par virement. Prix nets, TVA non applicable. Pas d’abonnement imposé${NBSP}: le suivi mensuel est une option, résiliable quand vous voulez.`,
      },
    ],
  },
  relatedArticles: {
    title: 'Pour comprendre avant de décider',
    intro: 'Les versions de Joomla et de PHP encore suivies, et le récit d’une mise à jour vers Joomla 6.',
  },
  contactCta: {
    title: 'Envoyez-moi le lien de votre site Joomla',
    description: `Diagnostic gratuit sous 24${NBSP}h, puis un prix annoncé avant toute intervention.`,
    button: 'Envoyer le lien de mon site',
  },
  mobileContactBar: {
    text: `Site Joomla à mettre à jour${NBSP}?`,
    buttonLabel: 'Envoyer le lien de mon site',
  },
}
