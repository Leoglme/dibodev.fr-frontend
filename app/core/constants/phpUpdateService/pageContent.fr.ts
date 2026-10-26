import type { DibodevPhpUpdateServicePageContent } from '~/core/types/DibodevPhpUpdateServicePage'
import { NBSP } from '~/core/constants/typography'

export const PHP_UPDATE_SERVICE_PAGE_FR: DibodevPhpUpdateServicePageContent = {
  meta: {
    title: 'Mise à jour PHP de votre site ou logiciel : intervention 24 h',
    description:
      'Je mets à jour PHP et votre site WordPress, PrestaShop ou logiciel métier à distance, après sauvegarde. Diagnostic gratuit, dès 190 €, réponse sous 24 h.',
    serviceName: 'Mise à jour PHP de sites, boutiques et logiciels métier',
  },
  breadcrumbLabel: 'Mise à jour PHP',
  shareImage: {
    titleLines: ['Mise à jour PHP', 'de votre site ou logiciel'],
    highlight: 'Dès 190 €, réponse sous 24 h',
    subtitle: 'Sauvegarde, test sur une copie, compte rendu écrit',
    badge: 'Intervention à distance',
    alt: 'Mise à jour PHP de votre site ou logiciel : intervention à distance dès 190 €, réponse sous 24 h',
  },
  hero: {
    titlePart1: 'Mise à jour PHP de votre site, boutique ou logiciel : ',
    titleHighlight1: 'intervention à distance',
    titlePart2: ' sous 24 h',
    description: `Votre hébergeur dit « aucune action requise », votre prestataire ne répond pas, ou votre site est resté en PHP 8.1 ou plus ancien et n’a aucun correctif à recevoir. Je m’en occupe à distance${NBSP}: diagnostic gratuit sous 24${NBSP}h, sauvegarde, test sur une copie, mise à jour, compte rendu écrit. Les prix sont annoncés d’avance.`,
    ctaText: 'Envoyer le lien de mon site',
    secondaryCtaText: 'Voir les prix',
    reassurances: ['Réponse sous 24 h', 'Sauvegarde avant tout', 'Prix fixes, annoncés d’avance'],
  },
  offers: {
    anchorId: 'prix',
    eyebrow: 'Offres et prix',
    title: 'Quatre forfaits, un prix connu avant de commencer',
    intro: `Le diagnostic est gratuit et sans engagement. Ensuite, un prix fixe selon ce qu’il y a à mettre à jour, pas un taux horaire qui dérape.`,
    cards: [
      {
        title: 'Diagnostic',
        price: 'Gratuit',
        description: `Vous m’envoyez le lien du site. Je vous dis par écrit sous 24${NBSP}h s’il est concerné par la faille du 21 octobre 2026, quelle version de PHP il sert et quoi faire. Sans engagement.`,
        isHighlighted: false,
      },
      {
        title: 'Site vitrine WordPress',
        price: '190 €',
        description: `Sauvegarde hors du serveur, test sur une copie, changement de version de PHP chez l’hébergeur, mise à jour de WordPress, du thème et des extensions, contrôle du correctif, test de l’accueil et de l’administration, compte rendu écrit.`,
        isHighlighted: true,
      },
      {
        title: 'Boutique ou site chargé',
        price: '390 €',
        description: `Tout le forfait site vitrine, plus les extensions nombreuses, les modules de paiement et de livraison, le test d’une commande et des formulaires, et la remise en état si une extension casse au passage.`,
        isHighlighted: false,
      },
      {
        title: 'Logiciel métier, intranet, application',
        price: 'Dès 690 €',
        description: `Audit du code et des dépendances, montée de version de PHP et du framework (Laravel, Symfony ou maison), tests sur une copie, mise en production accompagnée. Devis sous 48${NBSP}h après un échange.`,
        isHighlighted: false,
      },
    ],
    notes: [
      `Suivi${NBSP}: mises à jour mensuelles et surveillance pour 100 € par mois, sans engagement de durée.`,
      'Prix nets, TVA non applicable (art. 293 B du CGI). Intervention à distance, partout en France.',
    ],
    ctaLabel: 'Envoyer le lien de mon site',
    highlightLabel: 'Le plus demandé',
    toolLinkText: 'Vérifier d’abord mon site gratuitement',
  },
  included: {
    anchorId: 'inclus',
    eyebrow: 'Dans chaque intervention',
    title: 'Ce qui est compris, quel que soit le forfait',
    intro:
      'Les mêmes précautions pour un site vitrine et pour une boutique, parce que c’est là que les mises à jour tournent mal.',
    items: [
      {
        title: 'Sauvegarde hors du serveur',
        description:
          'Fichiers et base de données copiés ailleurs que sur l’hébergement avant de toucher à quoi que ce soit.',
      },
      {
        title: 'Test sur une copie',
        description:
          'La nouvelle version de PHP est d’abord essayée sur une copie du site, jamais directement en production.',
      },
      {
        title: 'Retour arrière possible',
        description:
          'Si une extension casse et ne peut pas être remplacée le jour même, le site revient à l’état d’avant.',
      },
      {
        title: 'Correctif vérifié',
        description: `Le numéro servi est contrôlé après l’intervention${NBSP}: 8.2.35, 8.3.36, 8.4.27 ou 8.5.12 au minimum.`,
      },
      {
        title: 'Compte rendu écrit',
        description: 'Ce qui a été fait, ce qui a été mis à jour, ce qui reste à surveiller, en français lisible.',
      },
      {
        title: 'Aucune coupure non annoncée',
        description:
          'Le site reste en ligne pendant la préparation. Si une bascule demande une minute d’arrêt, elle est prévenue.',
      },
    ],
  },
  audiences: {
    anchorId: 'pour-qui',
    eyebrow: 'Pour qui',
    title: 'Sites, boutiques, logiciels et hébergements concernés',
    intro: 'Tout ce qui tourne en PHP, chez tout hébergeur qui laisse choisir la version.',
    items: [
      {
        title: 'WordPress et WooCommerce',
        description: 'Thèmes et extensions mis à jour avec PHP, et une vieille extension remplacée quand elle bloque.',
      },
      {
        title: 'Site WordPress piraté',
        description: `Nettoyage et remise en sécurité après un piratage (extensions, comptes, fichiers, sauvegardes), sur devis après le diagnostic gratuit${NBSP}: je vous dis d’abord ce que je vois.`,
      },
      {
        title: 'PrestaShop, Magento, Joomla, Drupal',
        description: 'Montée de version de PHP compatible avec la version du CMS, modules de paiement testés.',
      },
      {
        title: 'Logiciel métier, intranet, extranet',
        description:
          'Applications Laravel, Symfony ou développées sur mesure, avec audit des dépendances avant la montée.',
      },
      {
        title: 'Hébergement mutualisé ou serveur',
        description: 'OVHcloud, o2switch, IONOS, Hostinger, Infomaniak, PlanetHoster, VPS ou serveur dédié.',
      },
    ],
  },
  method: {
    eyebrow: 'Déroulé',
    title: 'Cinq étapes, de votre message au compte rendu',
    intro:
      'Rien à installer de votre côté. Un accès à l’hébergement suffit, que vous reprenez à la fin si vous le souhaitez.',
    steps: [
      {
        label: 'Lien',
        title: 'Vous m’envoyez le lien du site',
        description: 'Par le formulaire, avec votre hébergeur si vous le connaissez. Sinon, je le retrouve.',
      },
      {
        label: 'Diagnostic',
        title: 'Réponse écrite sous 24 h',
        description:
          'Version de PHP servie, plateforme, hébergeur, et le forfait qui convient. Gratuit, sans engagement.',
      },
      {
        label: 'Préparation',
        title: 'Sauvegarde et copie du site',
        description: 'Tout est copié hors du serveur, puis la nouvelle version est testée sur une copie.',
      },
      {
        label: 'Mise à jour',
        title: 'Changement de version et contrôle',
        description: 'PHP, le CMS, le thème et les extensions, puis la vérification du correctif et des pages clés.',
      },
      {
        label: 'Compte rendu',
        title: 'Ce qui a été fait, par écrit',
        description: 'Et ce qu’il faudra surveiller. La facture arrive après, pas avant.',
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Avant de m’écrire',
    questions: [
      {
        question: `Mon site WordPress semble piraté${NBSP}: est-ce la même intervention${NBSP}?`,
        answer: `Non, et ce n’est pas au même prix. Je commence par le diagnostic gratuit (l’outil « Mon site WordPress est-il piraté${NBSP}? » et une lecture de l’intérieur si vous me donnez un accès), puis je vous envoie un devis pour le nettoyage${NBSP}: extensions et comptes vérifiés, fichiers inconnus retirés, mots de passe et clés changés, sauvegarde saine restaurée si besoin, puis mise à jour de PHP, de WordPress et des extensions. Le prix dépend de ce que le diagnostic trouve.`,
      },
      {
        question: 'Mon hébergeur dit qu’aucune action n’est requise. Pourquoi faire quelque chose ?',
        answer: `Parce que ce message vaut pour les branches de PHP que le projet PHP corrige encore, de 8.2 à 8.5. Un site resté en PHP 8.1, 8.0 ou 7.4 n’a aucune version corrigée à recevoir, chez aucun hébergeur, à l’exception d’Infomaniak qui rétroporte un correctif maison. Le diagnostic gratuit vous dit en 24${NBSP}h dans quel cas vous êtes.`,
      },
      {
        question: 'Combien de temps dure l’intervention ?',
        answer:
          'Une à deux heures pour un site vitrine, une demi-journée pour une boutique avec beaucoup de modules, et un devis après audit pour un logiciel métier. La préparation se fait sans couper le site.',
      },
      {
        question: 'Mon site sera-t-il coupé ?',
        answer:
          'Non pendant la préparation et les tests, qui se font sur une copie. Le changement de version lui-même prend quelques minutes chez la plupart des hébergeurs, et vous êtes prévenu de l’heure.',
      },
      {
        question: 'Et si une extension ou un thème casse ?',
        answer:
          'C’est justement ce que le test sur une copie révèle avant la production. Une extension cassée est mise à jour, remplacée par une équivalente ou, si rien n’est possible le jour même, le site revient à l’état d’avant et on décide ensemble de la suite.',
      },
      {
        question: 'Chez quels hébergeurs intervenez-vous ?',
        answer:
          'Tous ceux qui laissent choisir la version de PHP : OVHcloud, o2switch, IONOS, Hostinger, Infomaniak, PlanetHoster, LWS, Gandi, et les serveurs VPS ou dédiés. Les guides pas à pas de chacun sont sur ce site si vous préférez faire vous-même.',
      },
      {
        question: 'Je ne connais pas ma version de PHP ni mon hébergeur.',
        answer:
          'Ce n’est pas un problème. L’outil de vérification gratuit lit la version quand le serveur l’affiche et reconnaît l’hébergeur, et le diagnostic fait le reste. Vous n’avez besoin que du lien du site.',
      },
      {
        question: 'Mettez-vous aussi à jour WordPress, le thème et les extensions ?',
        answer:
          'Oui, c’est compris dans les forfaits site vitrine et boutique. Changer PHP sans mettre à jour le reste est le meilleur moyen de casser le site, et l’inverse ne protège pas de la faille.',
      },
      {
        question: 'Comment se passe le paiement ?',
        answer:
          'Un diagnostic gratuit, un prix annoncé avant l’intervention, puis une facture à l’issue, réglée par virement. Prix nets, TVA non applicable. Pas d’abonnement imposé : le suivi mensuel est une option, résiliable quand vous voulez.',
      },
    ],
  },
  relatedArticles: {
    title: 'Pour faire vous-même, ou comprendre ce qui se passe',
    intro: 'La faille du 21 octobre 2026 expliquée, et le pas à pas chez chaque hébergeur.',
  },
  contactCta: {
    title: 'Envoyez-moi le lien de votre site',
    description: `Diagnostic gratuit sous 24${NBSP}h, puis un prix fixe annoncé avant toute intervention.`,
    button: 'Envoyer le lien de mon site',
  },
  mobileContactBar: {
    text: `Besoin d’une mise à jour${NBSP}?`,
    buttonLabel: 'Envoyer le lien de mon site',
  },
}
