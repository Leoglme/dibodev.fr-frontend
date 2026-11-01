import type { DibodevHostingProviderKey } from '~/core/types/DibodevHostingStatus'
import type {
  DibodevHostingProviderPageContent,
  DibodevHostingProviderPageSpecifics,
  DibodevHostingStatusCardWording,
  DibodevHostingStatusPageContent,
  DibodevHostingStatusPageSections,
} from '~/core/types/DibodevHostingStatusPage'
import type { DibodevFaqQuestion } from '~/core/types/DibodevFaqSection'
import type { DibodevGuarantee } from '~/core/types/DibodevGuaranteesSection'
import type { DibodevMethodStep } from '~/core/types/DibodevMethodSection'
import type { DibodevSourcedFact } from '~/core/types/DibodevSourcedFactsSection'
import { NBSP } from '~/core/constants/typography'
import { HostingStatusUtils } from '~/core/utils/HostingStatusUtils'

const AUTHOR_INTRO: string = 'Page tenue par'
const AUTHOR_BIO: string =
  'développeur freelance près de Rennes, qui remet en ligne des sites et des logiciels hébergés chez ces hébergeurs depuis 2019.'

/** What the visitor can do while the host is down, the same on every page. */
const COMMON_CHECKS: DibodevGuarantee[] = [
  {
    title: 'Testez un autre site du même hébergeur',
    description:
      'Si un autre site hébergé au même endroit répond, la panne ne vient pas de l’hébergeur mais de votre site, de votre nom de domaine ou de votre cache.',
  },
  {
    title: 'Regardez le message d’erreur',
    description:
      '« Ce site est inaccessible » ou un délai dépassé pointent vers le serveur ou le DNS ; une erreur 500 ou une page blanche pointent vers le site lui-même (PHP, extension, base de données).',
  },
  {
    title: 'Vérifiez le nom de domaine',
    description:
      'Un domaine expiré ou des DNS changés la veille donnent les mêmes symptômes qu’une panne. L’espace client de l’hébergeur ou le registrar affiche la date d’expiration.',
  },
]

const COMMON_METHOD_STEPS: DibodevMethodStep[] = [
  {
    label: 'Minute 1',
    title: 'Confirmez que ce n’est pas seulement vous',
    description:
      'Ouvrez votre site depuis un autre réseau (4G plutôt que la box) et en navigation privée. Si ça marche ailleurs, le problème est local : cache, DNS de la box, pare-feu.',
  },
  {
    label: 'Minute 5',
    title: 'Lisez l’état de l’hébergeur sur cette page',
    description:
      'Un incident annoncé par l’hébergeur se règle sans vous : inutile de toucher au site. Notez l’heure de début pour votre propre communication.',
  },
  {
    label: 'Minute 10',
    title: 'Prévenez vos clients avant qu’ils ne vous préviennent',
    description:
      'Un mot sur votre fiche Google, vos réseaux ou votre répondeur évite les appels. Donnez l’heure de retour annoncée par l’hébergeur plutôt qu’une promesse.',
  },
  {
    label: 'Après',
    title: 'Décidez à froid',
    description:
      'Une panne isolée n’est pas une raison de changer d’hébergeur. Trois pannes en un trimestre, ou un support muet, oui : une migration se prépare en une semaine.',
  },
]

const CARD_WORDING: DibodevHostingStatusCardWording = {
  resultLabel: 'État en direct',
  stateLabels: {
    operational: 'Tout fonctionne',
    degraded: 'Service perturbé',
    incident: 'Incident en cours',
    maintenance: 'Maintenance en cours',
    unknown: 'État inconnu',
  },
  stateTitles: {
    operational: `{provider}${NBSP}: aucun incident annoncé`,
    degraded: `{provider}${NBSP}: une perturbation est annoncée`,
    incident: `{provider}${NBSP}: un incident est en cours`,
    maintenance: `{provider}${NBSP}: une maintenance est en cours`,
    unknown: `{provider}${NBSP}: état impossible à lire`,
  },
  stateTexts: {
    operational:
      'Rien n’est signalé sur la page de statut. Si votre site ne répond pas, la cause est probablement votre site, votre domaine ou votre cache : suivez les vérifications ci-dessous.',
    degraded:
      'L’hébergeur signale une perturbation sur une partie de ses services. Votre site peut être lent ou inaccessible par moments ; attendez la fin de l’incident avant de modifier quoi que ce soit.',
    incident:
      'L’hébergeur reconnaît une panne. Ne touchez pas à votre site : il reviendra avec le service. Le détail et les mises à jour sont sur sa page de statut.',
    maintenance:
      'Une opération planifiée est en cours. De courtes interruptions sont possibles jusqu’à l’heure de fin annoncée.',
    unknown:
      'La page de statut n’a pas pu être lue à l’instant. Cela ne veut pas dire que tout va bien : ouvrez-la directement avec le lien ci-dessous.',
  },
  loadingTitle: 'Lecture de la page de statut…',
  loadingText: 'Quelques secondes : l’état est lu au moment où vous ouvrez cette page.',
  errorTitle: 'Impossible de lire l’état pour l’instant',
  errorText: 'Réessayez dans une minute ou ouvrez la page de statut de l’hébergeur avec le lien ci-dessous.',
  checkedAtText: 'Vérifié à {time} (heure de Paris), état inchangé depuis {since}.',
  activeIncidentsTitle: 'En cours',
  recentIncidentsTitle: 'Derniers événements',
  noRecentIncidentsText: 'Aucun événement récent sur la page de statut.',
  ongoingLabel: 'en cours',
  resolvedLabel: 'résolu',
  maintenanceLabel: 'maintenance',
  incidentLinkLabel: 'Voir le détail chez l’hébergeur',
  sourceTexts: {
    statuspage: 'Lu toutes les 5 minutes sur la page de statut officielle de {provider}.',
    infomaniak: 'Lu toutes les 5 minutes sur la page de statut officielle de {provider}.',
    lws: 'Lu toutes les 5 minutes sur la page d’état des services de {provider}.',
    none: '{provider} ne publie pas de page de statut lisible.',
  },
  staleText: 'La dernière lecture a échoué : cet état est celui de la lecture précédente.',
  statusPageLinkLabel: 'Ouvrir la page de statut',
  noStatusPageResultLabel: 'Où regarder',
  noStatusPageTitle: `{provider}${NBSP}: pas de page de statut publique`,
  noStatusPageText:
    '{provider} ne publie pas de page de statut que cette page puisse lire : son état n’est donc pas affiché, plutôt que deviné. Ses annonces de maintenance et d’incident passent par son compte X ; pour une panne de votre serveur, son support reste la seule source sûre.',
  noStatusPageLinkLabel: 'Voir ses annonces sur X',
  refreshLabel: 'Relire maintenant',
  refreshingLabel: 'Lecture…',
  ctaIntros: {
    operational:
      'L’hébergeur ne signale rien et votre site reste inaccessible ? Envoyez-moi son lien : je regarde d’où vient la panne et je vous réponds sous 24 h, gratuitement.',
    degraded:
      'Votre site est touché par cette perturbation, ou vous n’êtes pas sûr que ce soit la cause ? Envoyez-moi son lien, je vérifie sous 24 h.',
    incident:
      'Votre site ne revient pas une fois l’incident clos ? Envoyez-moi son lien, je regarde ce qui bloque et je vous réponds sous 24 h.',
    maintenance: 'Votre site ne revient pas à la fin de la maintenance ? Envoyez-moi son lien, je vérifie sous 24 h.',
    unknown:
      'Votre site est inaccessible et vous ne savez pas d’où ça vient ? Envoyez-moi son lien, je regarde et je vous réponds sous 24 h.',
  },
  ctaLabel: 'Envoyer le lien de mon site',
}

const HUB_FAQ: DibodevFaqQuestion[] = [
  {
    question: 'Mon hébergeur dit que tout fonctionne, mais mon site est inaccessible. Pourquoi ?',
    answer:
      'Neuf fois sur dix, la panne est sur le site lui-même et pas sur le serveur : une extension WordPress cassée après une mise à jour, un fichier PHP en erreur, une base de données saturée, un certificat HTTPS expiré ou un nom de domaine arrivé à échéance. L’hébergeur ne voit que ses machines ; votre site, lui, dépend aussi de votre code et de votre domaine. Les trois vérifications de cette page permettent de faire la différence en cinq minutes.',
  },
  {
    question: 'Comment cette page connaît-elle l’état des hébergeurs ?',
    answer:
      'Un programme lit toutes les cinq minutes les pages de statut officielles d’OVHcloud, d’IONOS, de Hostinger, de Gandi, d’Infomaniak et de LWS, et garde l’heure de chaque changement d’état. o2switch et PlanetHoster n’ont pas de page de statut lisible : leur carte le dit et renvoie vers leurs annonces sur X et leur support, sans rien deviner. Rien n’est deviné à partir du code de réponse d’une page : une page de statut répond « 200 OK » même en pleine panne.',
  },
  {
    question: 'Combien de temps dure une panne d’hébergeur ?',
    answer:
      'La plupart des incidents publiés sur les pages de statut durent de vingt minutes à trois heures. Les pannes longues, de plusieurs heures à plusieurs jours, sont rares et concernent en général un matériel défaillant (un serveur de fichiers, un cluster) ou un centre de données entier. Les hébergeurs donnent rarement une heure de retour avant d’avoir identifié la cause : comptez sur les mises à jour de leur page plutôt que sur une estimation.',
  },
  {
    question: 'Puis-je être remboursé pour une panne ?',
    answer:
      'Cela dépend des conditions particulières de votre offre. Les offres d’hébergement mutualisé des grands hébergeurs prévoient en général un engagement de disponibilité et un geste commercial sur demande, rarement un remboursement automatique. Gardez l’heure de début et de fin de l’incident telle qu’elle apparaît sur la page de statut : c’est la pièce qu’on vous demandera.',
  },
  {
    question: 'Faut-il changer d’hébergeur après une panne ?',
    answer:
      'Pas pour une panne isolée : tous les hébergeurs de cette page ont connu des incidents en 2026. Changez si les pannes se répètent, si le support ne répond pas pendant l’incident, ou si votre site est devenu trop important pour un hébergement mutualisé à quelques euros par mois. Une migration bien préparée se fait en une semaine, sans coupure visible, en changeant les DNS en dernier.',
  },
  {
    question: 'Vous êtes l’hébergeur ?',
    answer:
      'Non. Dibodev est un développeur indépendant qui met en ligne et maintient des sites et des logiciels chez ces hébergeurs pour des TPE et des PME. Cette page existe parce que la première question d’un client dont le site ne répond plus est toujours la même : « est-ce que c’est moi ou l’hébergeur ? ». Pour un incident sur votre compte, le support de votre hébergeur reste le seul interlocuteur.',
  },
]

const HUB_FACTS: DibodevSourcedFact[] = [
  {
    contextLabel: '6 hébergeurs sur 8',
    title: 'Six hébergeurs publient une page de statut officielle',
    text: 'OVHcloud, IONOS, Hostinger et Gandi utilisent le service Statuspage ; Infomaniak et LWS tiennent leur propre page. C’est là que l’incident est reconnu, daté, puis clos, et c’est ce que cette page lit.',
    sourceName: 'OVHcloud, page de statut Web Cloud',
    sourceUrl: 'https://web-cloud.status-ovhcloud.com/',
  },
  {
    contextLabel: 'o2switch et PlanetHoster',
    title: 'Deux hébergeurs n’ont pas de page de statut publique',
    text: 'o2switch publie ses annonces de maintenance et d’incident sur son compte X ; PlanetHoster a fermé le forum qui tenait lieu de page d’état, dont les liens renvoient vers un formulaire de contact. Pour ces deux-là, cette page n’affiche pas d’état : elle renvoie vers leurs annonces publiques et leur support plutôt que de deviner.',
    sourceName: 'o2switch sur X',
    sourceUrl: 'https://x.com/o2switch',
  },
  {
    contextLabel: '21 au 23 octobre 2026',
    title: 'La faille PHP a montré la valeur de ces pages',
    text: 'Pendant trois jours, les hébergeurs ont déployé les correctifs PHP 8.5.12, 8.4.27, 8.3.36 et 8.2.35 serveur par serveur, avec de brèves interruptions annoncées sur leurs pages de statut et leurs comptes X. Les sites qui affichaient une page blanche ce matin-là n’étaient pas piratés : ils attendaient leur serveur.',
    sourceName: 'IONOS, page de statut',
    sourceUrl: 'https://www.ionos-status.fr/',
  },
  {
    contextLabel: 'Code 200',
    title: 'Une page de statut répond « OK » même en pleine panne',
    text: 'Le code de réponse d’une page de statut ne dit rien de l’hébergement : seule son contenu compte. Cette page lit donc les incidents déclarés et les composants touchés, jamais le simple fait que la page s’affiche. Et quand la lecture échoue, elle le dit au lieu d’afficher « tout va bien ».',
    sourceName: 'Statuspage, API publique',
    sourceUrl: 'https://statuspage.hostinger.com/api/v2/summary.json',
  },
]

const HUB: DibodevHostingStatusPageSections = {
  meta: {
    title: 'Hébergeur en panne ? OVH, IONOS, Hostinger… en direct',
    description:
      'Site inaccessible ? L’état en direct d’OVHcloud, IONOS, Hostinger, Infomaniak, Gandi et LWS, où regarder pour o2switch et PlanetHoster, et quoi faire.',
    inLanguage: 'fr-FR',
    schemaAbout: 'État des hébergeurs web',
  },
  breadcrumbLabel: 'Hébergeur en panne ?',
  shareImage: {
    titleLines: ['Votre hébergeur', 'est-il en panne ?'],
    highlight: 'en panne',
    subtitle: 'OVHcloud, o2switch, IONOS, Hostinger, Infomaniak, PlanetHoster, Gandi, LWS',
    badge: 'En direct',
    alt: 'Votre hébergeur est-il en panne ? L’état des hébergeurs en direct sur dibodev.fr',
  },
  hero: {
    titleBefore: 'Votre hébergeur ',
    titleHighlight: 'est-il en panne',
    titleAfter: `${NBSP}?`,
    description:
      'Votre site ne répond plus ? Avant de chercher une faille ou d’appeler votre développeur, regardez si la panne vient de l’hébergeur. L’état de six hébergeurs est lu toutes les cinq minutes sur leurs pages de statut officielles ; pour o2switch et PlanetHoster, qui n’en ont pas, la page dit où regarder.',
    reassurances: ['Lu toutes les 5 minutes', 'Sources officielles', 'Quoi faire pendant la panne'],
    authorIntro: AUTHOR_INTRO,
    authorBio: AUTHOR_BIO,
  },
  mobileContactBar: {
    text: 'Votre site est inaccessible et ce n’est pas l’hébergeur ?',
    buttonLabel: 'Envoyer le lien de mon site',
  },
  checks: {
    anchorId: 'verifications',
    eyebrow: 'Vous ou l’hébergeur ?',
    title: 'Trois vérifications avant d’appeler qui que ce soit',
    intro:
      'Quand l’hébergeur ne signale rien, la panne est presque toujours sur le site, le domaine ou le cache. Cinq minutes suffisent pour le savoir.',
    items: COMMON_CHECKS,
  },
  facts: {
    anchorId: 'faits',
    eyebrow: 'Ce qu’il faut savoir',
    title: 'Comment les hébergeurs annoncent leurs pannes',
    intro: 'Les faits relus le 27 octobre 2026 sur les pages de chaque hébergeur.',
    facts: HUB_FACTS,
    calloutEmphasizedIntro: 'Une lecture, pas un diagnostic :',
    calloutText:
      'cette page dit ce que l’hébergeur annonce. Elle ne teste pas votre site. Pour savoir pourquoi votre site ne répond pas, envoyez-moi son lien : je regarde et je vous réponds sous 24 h.',
  },
  method: {
    eyebrow: 'Pendant la panne',
    title: 'Que faire dans les dix premières minutes',
    intro: 'Dans l’ordre, sans rien casser.',
    steps: COMMON_METHOD_STEPS,
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Pannes d’hébergeur : les réponses',
    questions: HUB_FAQ,
  },
  relatedArticles: {
    title: 'À lire aussi',
    intro: 'Quand la panne vient du site et pas de l’hébergeur.',
  },
  contactCta: {
    title: 'Votre site est inaccessible et l’hébergeur ne signale rien ?',
    description:
      'Envoyez-moi le lien de votre site : je regarde d’où vient la panne (domaine, certificat, PHP, extension, base de données) et je vous dis quoi faire sous 24 h. Gratuit, sans engagement.',
    button: 'Envoyer le lien de mon site',
  },
}

/**
 * Builds the page of one provider from what differs between them; the checks, the method and the CTA are shared.
 * @param {DibodevHostingProviderKey} key - The provider.
 * @param {DibodevHostingProviderPageSpecifics} specifics - Its own texts and facts.
 * @returns {DibodevHostingProviderPageContent} The page content.
 */
function buildProviderPage(
  key: DibodevHostingProviderKey,
  specifics: DibodevHostingProviderPageSpecifics,
): DibodevHostingProviderPageContent {
  const hasReadableStatusPage: boolean = HostingStatusUtils.hasReadableStatusPage(key)

  return {
    key,
    name: specifics.name,
    supportUrl: specifics.supportUrl,
    supportLabel: specifics.supportLabel,
    meta: {
      title: specifics.metaTitle,
      description: specifics.metaDescription,
      inLanguage: 'fr-FR',
      schemaAbout: `État des services de ${specifics.name}`,
    },
    breadcrumbLabel: specifics.name,
    shareImage: {
      titleLines: [`${specifics.name} est-il`, 'en panne ?'],
      highlight: 'en panne',
      subtitle: specifics.shareSubtitle,
      badge: hasReadableStatusPage ? 'En direct' : 'Que faire',
      alt: hasReadableStatusPage
        ? `${specifics.name} est-il en panne ? L’état en direct sur dibodev.fr`
        : `${specifics.name} est-il en panne ? Où regarder et quoi faire, sur dibodev.fr`,
    },
    hero: {
      titleBefore: `${specifics.name} est-il `,
      titleHighlight: 'en panne',
      titleAfter: `${NBSP}?`,
      description: specifics.heroDescription,
      reassurances: hasReadableStatusPage
        ? ['Lu toutes les 5 minutes', 'Incidents récents', 'Quoi faire pendant la panne']
        : ['Canaux officiels', 'Trois vérifications', 'Quoi faire pendant la panne'],
      authorIntro: AUTHOR_INTRO,
      authorBio: AUTHOR_BIO,
    },
    mobileContactBar: {
      text: `Votre site chez ${specifics.name} est inaccessible${NBSP}?`,
      buttonLabel: 'Envoyer le lien de mon site',
    },
    checks: {
      anchorId: 'verifications',
      eyebrow: 'Vous ou l’hébergeur ?',
      title: `Trois vérifications quand ${specifics.name} ne signale rien`,
      intro: 'Quand la page de statut est verte, la panne est presque toujours sur le site, le domaine ou le cache.',
      items: COMMON_CHECKS,
    },
    facts: {
      anchorId: 'faits',
      eyebrow: 'Ce qu’il faut savoir',
      title: `${specifics.name} et les pannes : les faits`,
      intro: 'Relus le 27 octobre 2026 sur les pages officielles de l’hébergeur.',
      facts: specifics.facts,
      calloutEmphasizedIntro: 'Support officiel :',
      calloutText: specifics.factsCalloutText,
    },
    method: {
      eyebrow: 'Pendant la panne',
      title: 'Que faire dans les dix premières minutes',
      intro: 'Dans l’ordre, sans rien casser.',
      steps: COMMON_METHOD_STEPS,
    },
    faq: {
      eyebrow: 'Questions fréquentes',
      title: `Pannes ${specifics.name} : les réponses`,
      questions: specifics.faq,
    },
    relatedArticles: {
      title: 'À lire aussi',
      intro: `Les guides écrits pour les sites hébergés chez ${specifics.name} et ce qui casse un site sans que l’hébergeur y soit pour rien.`,
    },
    contactCta: {
      title: `Votre site chez ${specifics.name} est inaccessible et l’hébergeur ne signale rien${NBSP}?`,
      description:
        'Envoyez-moi le lien de votre site : je regarde d’où vient la panne (domaine, certificat, PHP, extension, base de données) et je vous dis quoi faire sous 24 h. Gratuit, sans engagement.',
      button: 'Envoyer le lien de mon site',
    },
  }
}

const PROVIDERS: Record<DibodevHostingProviderKey, DibodevHostingProviderPageContent> = {
  ovh: buildProviderPage('ovh', {
    name: 'OVHcloud',
    supportUrl: 'https://docs.ovhcloud.com/fr/guides/web-cloud/web-hosting/diagnostic-website-not-accessible',
    supportLabel: 'Que faire si mon site est inaccessible ? (guide OVHcloud)',
    metaTitle: 'OVH en panne ? État des hébergements web en direct',
    metaDescription:
      'OVHcloud est-il en panne aujourd’hui ? L’état des hébergements web, domaines et DNS lu toutes les 5 minutes sur la page de statut officielle, les incidents récents et quoi faire.',
    heroDescription:
      'Votre site hébergé chez OVHcloud ne répond plus ? Voici ce que dit la page de statut Web Cloud de l’hébergeur (hébergements mutualisés, domaines, DNS, bases de données), lue toutes les cinq minutes, et comment savoir si la panne vient de lui ou de votre site.',
    shareSubtitle: 'Hébergements web, domaines, DNS : l’état en direct',
    facts: [
      {
        contextLabel: 'Page de statut',
        title: 'OVHcloud publie six pages de statut, dont une pour l’hébergement web',
        text: 'Le portail status-ovhcloud.com regroupe six pages ; celle qui compte pour un site vitrine ou une boutique est « Web Cloud » : hébergements mutualisés des centres de données de Gravelines (GRA) et de Beauharnois (BHS), domaines, DNS, bases de données, CDN. C’est elle qui est lue ici.',
        sourceName: 'OVHcloud, statut Web Cloud',
        sourceUrl: 'https://web-cloud.status-ovhcloud.com/',
      },
      {
        contextLabel: '27 octobre 2026',
        title: 'Un incident sur un serveur de fichiers a coupé des sites du cluster 129',
        text: 'L’incident « Filerz 956 Cluster129 » a été ouvert à 9 h 36 UTC avec un impact majeur : « les clients étaient temporairement dans l’impossibilité d’accéder à leurs sites hébergés sur le filerz touché ». Le même jour, un incident sur le cluster 121 (10 h 28 à 13 h 59 UTC) n’a pas touché l’accès aux sites.',
        sourceName: 'OVHcloud, historique des incidents Web Cloud',
        sourceUrl: 'https://web-cloud.status-ovhcloud.com/history',
      },
      {
        contextLabel: 'Cluster',
        title: 'Votre hébergement mutualisé a un numéro de cluster',
        text: 'Chaque hébergement web OVHcloud est rattaché à un cluster (cluster021, cluster121…) visible dans l’espace client, rubrique Hébergements. Les incidents sont annoncés par cluster : si le vôtre n’est pas cité, la panne n’est probablement pas celle-là.',
        sourceName: 'OVHcloud, diagnostic d’un site inaccessible',
        sourceUrl: 'https://docs.ovhcloud.com/fr/guides/web-cloud/web-hosting/diagnostic-website-not-accessible',
      },
      {
        contextLabel: 'Maintenance permanente',
        title: 'Plusieurs clusters sont en maintenance sans que les sites soient coupés',
        text: 'Sur la page Web Cloud, une dizaine de clusters apparaissent « en maintenance » en continu : ce sont des opérations de fond, pas des pannes. Cette page ne les compte pas comme des incidents ; seuls les incidents déclarés par OVHcloud le sont.',
        sourceName: 'OVHcloud, statut Web Cloud',
        sourceUrl: 'https://web-cloud.status-ovhcloud.com/',
      },
    ],
    factsCalloutText:
      'le guide « Que faire si mon site est inaccessible ? » d’OVHcloud détaille les vérifications côté client (DNS, .htaccess, PHP, quotas) et la création d’un ticket depuis l’espace client. Le support téléphonique est joignable au 1007 depuis la France.',
    faq: [
      {
        question: 'Comment savoir si la panne vient d’OVHcloud ou de mon site ?',
        answer:
          'Regardez d’abord l’état ci-dessus : un incident Web Cloud en cours sur votre cluster explique tout, et il ne vous reste qu’à attendre. Si rien n’est annoncé, ouvrez votre espace client, rubrique Hébergements : un hébergement expiré, un domaine non renouvelé ou une alerte de quota y sont affichés. Ensuite, une erreur 500 ou une page blanche désignent votre site (PHP, extension, base de données), un délai dépassé désigne plutôt le DNS ou le serveur.',
      },
      {
        question: 'Mon site OVH affiche une page blanche depuis la mise à jour PHP d’octobre 2026',
        answer:
          'Du 21 au 23 octobre 2026, OVHcloud a déployé les correctifs PHP sur tous les clusters mutualisés. Un site resté sur une vieille version de PHP ou dont une extension n’est plus compatible peut afficher une page blanche ou une erreur 500 après ce changement. Le guide « changer la version de PHP chez OVH » du blog explique où lire et modifier la version dans l’espace client.',
      },
      {
        question: 'Combien de temps durent les incidents OVHcloud sur l’hébergement web ?',
        answer:
          'Les incidents de cluster publiés en octobre 2026 ont duré de quelques minutes à quelques heures : 3 h 30 pour le cluster 121 le 27 octobre, un peu plus de 5 heures pour les clusters 120, 126 et 131 le 26 octobre. Les incidents de serveur de fichiers (filerz) peuvent durer davantage, car ils demandent parfois une restauration.',
      },
      {
        question: 'OVHcloud rembourse-t-il une panne ?',
        answer:
          'Les conditions particulières de l’hébergement web OVHcloud prévoient un engagement de disponibilité et des pénalités sous forme d’avoir, à demander au support avec les références de l’incident. Rien n’est automatique : gardez l’heure de début et de fin affichée sur la page de statut.',
      },
    ],
  }),
  o2switch: buildProviderPage('o2switch', {
    name: 'o2switch',
    supportUrl: 'https://faq.o2switch.fr/guides/webmastering/debuguer-page-blanche-erreur-500/',
    supportLabel: 'Corriger une page blanche ou une erreur 500 (FAQ o2switch)',
    metaTitle: 'o2switch en panne ? Où regarder et quoi faire',
    metaDescription:
      'o2switch est-il en panne aujourd’hui ? Il n’a pas de page de statut : où lire ses annonces, comment savoir si la panne vient de lui et quoi faire.',
    heroDescription:
      'Votre site hébergé chez o2switch ne répond plus ? o2switch n’a pas de page de statut publique : ses annonces de maintenance et d’incident passent par son compte X. Voici où regarder, et comment savoir en cinq minutes si la panne vient de lui ou de votre site.',
    shareSubtitle: 'Hébergement mutualisé : ce que l’hébergeur annonce',
    facts: [
      {
        contextLabel: 'Pas de page de statut',
        title: 'o2switch n’a pas de page de statut officielle',
        text: 'Aucune adresse « status » ou « état des services » n’existe chez o2switch. Le site renvoie vers le support et le compte X, où sont publiées les annonces de maintenance et les incidents. Une page o2switch sur Statuspage existe mais c’est un brouillon jamais mis en service, figé en janvier 2024 : elle affiche toujours « tout fonctionne ».',
        sourceName: 'o2switch, page support',
        sourceUrl: 'https://www.o2switch.fr/support-hebergeur/',
      },
      {
        contextLabel: '21 au 23 octobre 2026',
        title: 'Les correctifs PHP ont été annoncés sur X, serveur par serveur',
        text: 'Le 21 octobre à 22 h 44 UTC, o2switch a annoncé le déploiement des correctifs PHP « sur tous nos serveurs » ; le 22 à 7 h 21, la fin du déploiement ; le 23, une précision sur le numéro de version affiché. Pendant cette période, certains sites ont affiché une page blanche le temps du redémarrage.',
        sourceName: 'o2switch sur X',
        sourceUrl: 'https://x.com/o2switch',
      },
      {
        contextLabel: 'Offre unique',
        title: 'Un seul serveur par client, à Clermont-Ferrand',
        text: 'o2switch propose une offre mutualisée unique, hébergée dans son propre centre de données à Clermont-Ferrand, avec cPanel. Une panne touche donc un serveur et tous ses sites, rarement l’ensemble de l’hébergeur : regardez si un autre site hébergé sur le même serveur que le vôtre répond.',
        sourceName: 'o2switch, l’offre unique',
        sourceUrl: 'https://www.o2switch.fr/',
      },
      {
        contextLabel: 'Erreur 500',
        title: 'La FAQ explique comment lire les erreurs Apache depuis cPanel',
        text: 'Quand le serveur répond mais que le site affiche une page blanche ou une erreur 500, la cause est dans le site : o2switch documente la lecture du registre des erreurs Apache depuis cPanel et les corrections les plus courantes (extension, .htaccess, version de PHP).',
        sourceName: 'o2switch, FAQ erreurs Apache',
        sourceUrl: 'https://faq.o2switch.fr/cpanel/mesures/erreurs-apache/',
      },
    ],
    factsCalloutText:
      'le support o2switch répond par ticket depuis l’espace client et par téléphone, 7 jours sur 7. En cas de panne de serveur, c’est lui qui donne l’heure de retour .',
    faq: [
      {
        question: 'Comment savoir si la panne vient d’o2switch ou de mon site ?',
        answer:
          'Sans page de statut, le plus sûr est de tester un autre site hébergé chez o2switch, idéalement sur le même serveur que le vôtre (le nom du serveur est dans votre espace client). S’il répond, la panne est sur votre site : une erreur 500 ou une page blanche se lit dans le registre des erreurs de cPanel. S’il ne répond pas non plus, ouvrez un ticket : le support o2switch confirme ou non l’incident.',
      },
      {
        question: 'o2switch a-t-il annoncé une panne aujourd’hui ?',
        answer:
          'Cette page ne peut pas le dire : o2switch n’a pas de page de statut lisible, et deviner un état à partir de ses messages serait trompeur. Ses annonces de maintenance et d’incident passent par son compte X (x.com/o2switch) ; la panne d’un serveur isolé n’y est pas toujours annoncée. Pour en avoir le cœur net, ouvrez un ticket depuis l’espace client : le support confirme ou non l’incident.',
      },
      {
        question: 'Mon site o2switch affiche une page blanche depuis la mise à jour PHP',
        answer:
          'Les correctifs PHP du 21 au 23 octobre 2026 ont été installés sur tous les serveurs. Un site qui utilisait une version de PHP très ancienne, ou une extension incompatible avec la version choisie dans cPanel, peut afficher une page blanche depuis. Le guide « changer la version de PHP chez o2switch » explique où régler la version dans cPanel, extension par extension.',
      },
      {
        question: 'o2switch rembourse-t-il une panne ?',
        answer:
          'Les conditions générales d’o2switch prévoient une garantie de disponibilité et un geste sur demande, pas de remboursement automatique. Notez l’heure de début et de fin de l’indisponibilité telle que vous l’avez constatée, et joignez-la à votre ticket.',
      },
    ],
  }),
  infomaniak: buildProviderPage('infomaniak', {
    name: 'Infomaniak',
    supportUrl: 'https://www.infomaniak.com/fr/support/faq/978/resoudre-un-probleme-de-site-inaccessible',
    supportLabel: 'Résoudre un problème de site inaccessible (FAQ Infomaniak)',
    metaTitle: 'Infomaniak en panne ? État des services en direct',
    metaDescription:
      'Infomaniak est-il en panne aujourd’hui ? L’état des hébergements, domaines et e-mails lu toutes les 5 minutes sur infomaniakstatus.com, les événements en cours et quoi faire si votre site ne répond plus.',
    heroDescription:
      'Votre site hébergé chez Infomaniak ne répond plus ? Voici ce que dit la page d’état des services de l’hébergeur suisse, lue toutes les cinq minutes, avec les événements en cours et l’historique des derniers jours, et comment savoir si la panne vient de lui ou de votre site.',
    shareSubtitle: 'Hébergement, domaines, e-mail : l’état en direct',
    facts: [
      {
        contextLabel: 'Page de statut',
        title: 'Infomaniak tient sa propre page d’état, en cinq langues',
        text: 'infomaniakstatus.com liste les événements en cours (maintenances, incidents, perturbations) avec leur heure de début et de fin estimée, puis l’historique des soixante derniers jours avec la durée de chaque événement. Chaque événement a sa page avec les mises à jour horodatées.',
        sourceName: 'Infomaniak, état des services',
        sourceUrl: 'https://infomaniakstatus.com/fr/',
      },
      {
        contextLabel: '27 octobre 2026',
        title: 'Un incident de neuf heures sur les VPS Cloud',
        text: 'L’événement « VPS Cloud : évènement en cours » a duré de 1 h à 10 h 40 le 27 octobre 2026. Le 23 octobre, l’authentification S3 du Public Cloud a été perturbée pendant sept heures ; le 22, les migrations vers la nouvelle infrastructure ont été suspendues huit heures.',
        sourceName: 'Infomaniak, historique des 60 derniers jours',
        sourceUrl: 'https://infomaniakstatus.com/fr/',
      },
      {
        contextLabel: '21 octobre 2026',
        title: 'Les correctifs PHP ont fait l’objet d’un événement de deux jours',
        text: 'L’événement « Vulnérabilités PHP critiques : mesures de sécurité et recommandations » a été ouvert le 21 octobre et tenu à jour pendant deux jours, le temps de déployer les correctifs sur les hébergements et de recommander aux clients de vérifier leur version de PHP.',
        sourceName: 'Infomaniak, historique des 60 derniers jours',
        sourceUrl: 'https://infomaniakstatus.com/fr/',
      },
      {
        contextLabel: 'Suisse',
        title: 'Des centres de données en Suisse, une heure identique à Paris',
        text: 'Les serveurs d’Infomaniak sont en Suisse (région de Genève) et la page d’état est à l’heure suisse, la même que Paris. Les dates affichées ici sont donc celles de la page, sans conversion.',
        sourceName: 'Infomaniak, FAQ site inaccessible',
        sourceUrl: 'https://www.infomaniak.com/fr/support/faq/978/resoudre-un-probleme-de-site-inaccessible',
      },
    ],
    factsCalloutText:
      'la FAQ « Résoudre un problème de site inaccessible » d’Infomaniak passe en revue les causes côté client (domaine, DNS, certificat, PHP, quotas). Le support est joignable par ticket depuis le manager et par téléphone, 7 jours sur 7.',
    faq: [
      {
        question: 'Comment savoir si la panne vient d’Infomaniak ou de mon site ?',
        answer:
          'L’état ci-dessus distingue les maintenances (annoncées à l’avance, avec une heure de fin) des incidents et perturbations. Si rien ne concerne l’hébergement web, ouvrez le manager Infomaniak : un domaine expiré, un hébergement suspendu ou une alerte y sont affichés. La FAQ 978 de l’hébergeur déroule ensuite les causes côté site, de la plus fréquente à la plus rare.',
      },
      {
        question: 'Les maintenances Infomaniak coupent-elles les sites ?',
        answer:
          'Le plus souvent non : les maintenances du Public Cloud, du Serveur Cloud ou de Node.js annoncées sur la page d’état concernent des produits précis et prévoient au pire de courtes interruptions. Le libellé de l’événement et le tag (hébergement, e-mail, cloud) disent quel produit est concerné.',
      },
      {
        question: 'Combien de temps durent les incidents Infomaniak ?',
        answer:
          'Les événements de l’historique des soixante derniers jours vont de quelques dizaines de minutes à quelques heures : neuf heures pour les VPS Cloud le 27 octobre 2026, sept heures pour l’authentification S3 le 23 octobre. La page de chaque événement donne les mises à jour à la minute.',
      },
      {
        question: 'Infomaniak rembourse-t-il une panne ?',
        answer:
          'Les conditions particulières d’Infomaniak prévoient un engagement de disponibilité selon le produit ; une demande se fait depuis le manager avec les références de l’événement. Rien n’est automatique : gardez l’heure de début et de fin affichée sur la page de l’événement.',
      },
    ],
  }),
  ionos: buildProviderPage('ionos', {
    name: 'IONOS',
    supportUrl: 'https://www.ionos.fr/digitalguide/hebergement/aspects-techniques/err-connection-refused/',
    supportLabel: 'Ce site est inaccessible : les solutions (guide IONOS)',
    metaTitle: 'IONOS en panne ? État de l’hébergement web en direct',
    metaDescription:
      'IONOS est-il en panne aujourd’hui ? L’état des hébergements, domaines et e-mails lu toutes les 5 minutes sur ionos-status.fr, les incidents récents et quoi faire si votre site ne répond plus.',
    heroDescription:
      'Votre site hébergé chez IONOS ne répond plus ? Voici ce que dit la page de statut française de l’hébergeur (hébergement web, WordPress, domaines, e-mail, espace client), lue toutes les cinq minutes, et comment savoir si la panne vient de lui ou de votre site.',
    shareSubtitle: 'Hébergement, domaines, e-mail : l’état en direct',
    facts: [
      {
        contextLabel: 'Page de statut',
        title: 'IONOS a une page de statut française, distincte de la page américaine',
        text: 'ionos-status.fr couvre l’offre française : hébergement web, hébergement WordPress, domaines, e-mail, serveurs, outil de création de site, espace client. Les incidents y sont rédigés en français avec l’heure de Paris. La page ionos-status.com, elle, concerne l’offre américaine.',
        sourceName: 'IONOS, page de statut',
        sourceUrl: 'https://www.ionos-status.fr/',
      },
      {
        contextLabel: '22 octobre 2026',
        title: 'Deux incidents sur le panneau de contrôle le même jour',
        text: 'Le 22 octobre 2026, « certaines fonctions du panneau de contrôle » ont été indisponibles de 12 h 30 à 13 h 08, puis de 16 h 06 à 18 h 14. Les sites eux-mêmes restaient en ligne : seule l’administration était touchée.',
        sourceName: 'IONOS, historique des incidents',
        sourceUrl: 'https://www.ionos-status.fr/history',
      },
      {
        contextLabel: '21 et 22 octobre 2026',
        title: 'La maintenance de sécurité PHP a duré une nuit',
        text: 'L’incident « Maintenance de sécurité : de brèves interruptions possibles sur les services basés sur PHP » a été ouvert le 21 octobre à 18 h 11 et clos le 22 à 13 h 07, le temps de déployer les correctifs PHP sur les hébergements. Les sites ont pu être brièvement indisponibles pendant les redémarrages.',
        sourceName: 'IONOS, historique des incidents',
        sourceUrl: 'https://www.ionos-status.fr/history',
      },
      {
        contextLabel: 'Espace client',
        title: 'Une panne de l’espace client n’est pas une panne de votre site',
        text: 'IONOS déclare séparément les incidents de l’espace client, de la connexion et des outils d’IA. Quand seul le groupe « IONOS » (espace client) est touché, votre site reste accessible aux visiteurs ; vous ne pouvez simplement pas l’administrer pendant l’incident.',
        sourceName: 'IONOS, composants surveillés',
        sourceUrl: 'https://www.ionos-status.fr/',
      },
    ],
    factsCalloutText:
      'le guide « Ce site est inaccessible » d’IONOS explique les causes côté navigateur et côté site. Le support IONOS est joignable par téléphone et par chat depuis l’espace client, 24 heures sur 24.',
    faq: [
      {
        question: 'Comment savoir si la panne vient d’IONOS ou de mon site ?',
        answer:
          'Lisez d’abord l’état ci-dessus : un incident du groupe « Hébergement » ou « Domains » vous concerne, un incident du groupe « IONOS » (espace client) non. Si rien n’est annoncé, testez un autre site hébergé chez IONOS. S’il répond, la panne est sur votre site : contrat expiré, domaine non renouvelé, erreur PHP, extension. Le guide « ERR_CONNECTION_REFUSED » d’IONOS liste les vérifications côté navigateur.',
      },
      {
        question: 'Mon site IONOS affiche une erreur 503 ou une page blanche',
        answer:
          'Une erreur 503 chez IONOS vient le plus souvent d’une limite de ressources de l’hébergement ou d’un script PHP qui ne répond plus ; une page blanche vient d’une erreur PHP, souvent après un changement de version ou une mise à jour d’extension. Le guide « HTTP 503 » d’IONOS et le guide « changer la version de PHP chez IONOS » du blog détaillent les deux cas.',
      },
      {
        question: 'Combien de temps durent les incidents IONOS ?',
        answer:
          'Les incidents d’octobre 2026 ont duré de quarante minutes (panneau de contrôle, le 22 octobre à midi) à deux heures (le même jour en fin d’après-midi) ; la maintenance de sécurité PHP a été ouverte dix-neuf heures. Les incidents sont mis à jour en français sur la page de statut jusqu’à leur clôture.',
      },
      {
        question: 'IONOS rembourse-t-il une panne ?',
        answer:
          'Les conditions particulières d’IONOS prévoient un engagement de disponibilité pour l’hébergement web ; la demande se fait auprès du support avec les références de l’incident. Rien n’est automatique : gardez les heures de début et de fin affichées sur la page de statut.',
      },
    ],
  }),
  hostinger: buildProviderPage('hostinger', {
    name: 'Hostinger',
    supportUrl:
      'https://www.hostinger.com/fr/support/1583286-que-faire-si-vous-ne-pouvez-pas-acceder-a-votre-site-web-chez-hostinger/',
    supportLabel: 'Que faire si vous ne pouvez pas accéder à votre site (aide Hostinger)',
    metaTitle: 'Hostinger en panne ? État des hébergements en direct',
    metaDescription:
      'Hostinger est-il en panne aujourd’hui ? L’état des hébergements mutualisés, cloud et e-mail lu toutes les 5 minutes sur statuspage.hostinger.com, les incidents récents et quoi faire si votre site ne répond plus.',
    heroDescription:
      'Votre site hébergé chez Hostinger ne répond plus ? Voici ce que dit la page de statut de l’hébergeur (hébergement mutualisé, cloud, cPanel, e-mail, centres de données), lue toutes les cinq minutes, et comment savoir si la panne vient de lui ou de votre site.',
    shareSubtitle: 'Hébergement mutualisé, cloud, e-mail : l’état en direct',
    facts: [
      {
        contextLabel: 'Page de statut',
        title: 'Hostinger publie l’état de 85 composants, en anglais',
        text: 'statuspage.hostinger.com suit l’hébergement mutualisé, le cloud, cPanel, l’e-mail et treize centres de données, dont ceux d’Europe. Les incidents sont rédigés en anglais et horodatés en temps universel ; cette page les affiche à l’heure de Paris.',
        sourceName: 'Hostinger, page de statut',
        sourceUrl: 'https://statuspage.hostinger.com/',
      },
      {
        contextLabel: 'Plusieurs fois par jour',
        title: 'Les « Emergency Server Maintenance » ne sont pas des pannes générales',
        text: 'Hostinger déclare chaque intervention d’urgence sur un serveur isolé (« Emergency Server fr-1231 Maintenance », quelques minutes) comme un incident sans impact. Cette page les écarte pour ne garder que les incidents qui touchent un service entier ; si votre serveur est cité, c’est sur la page officielle que vous le verrez.',
        sourceName: 'Hostinger, historique des incidents',
        sourceUrl: 'https://statuspage.hostinger.com/history',
      },
      {
        contextLabel: '27 octobre 2026',
        title: 'Deux incidents ouverts sur des outils, pas sur les sites',
        text: 'Le 27 octobre 2026, Hostinger suivait un incident sur ses statistiques (« Analytics Temporarily Unavailable ») et un autre sur ses outils de récupération de pages web ; l’hébergement lui-même n’était pas déclaré en panne.',
        sourceName: 'Hostinger, incidents en cours',
        sourceUrl: 'https://statuspage.hostinger.com/',
      },
      {
        contextLabel: 'hPanel',
        title: 'Le panneau hPanel peut être ralenti sans que les sites le soient',
        text: 'Le composant « Hostinger hPanel Backend » apparaît régulièrement en performance dégradée. Cela ralentit l’administration de l’hébergement, pas les sites des visiteurs.',
        sourceName: 'Hostinger, composants surveillés',
        sourceUrl: 'https://statuspage.hostinger.com/',
      },
    ],
    factsCalloutText:
      'l’article « Que faire si vous ne pouvez pas accéder à votre site web chez Hostinger » liste les vérifications côté client. Le support Hostinger se fait par chat depuis hPanel, 24 heures sur 24 ; il n’y a pas de support téléphonique.',
    faq: [
      {
        question: 'Comment savoir si la panne vient d’Hostinger ou de mon site ?',
        answer:
          'Lisez l’état ci-dessus : un incident sur « Hostinger Shared Hosting », « Cloud Hosting » ou un centre de données vous concerne ; un incident sur hPanel, les statistiques ou l’IA, non. Si rien n’est annoncé, testez un autre site hébergé chez Hostinger ; s’il répond, la cause est sur votre site ou votre domaine. L’article d’aide d’Hostinger déroule les vérifications dans l’ordre.',
      },
      {
        question: 'Mon serveur Hostinger est en « Emergency Maintenance », que faire ?',
        answer:
          'Rien : ces interventions durent quelques minutes et sont faites par Hostinger. Si votre serveur (son nom est dans hPanel) est cité, attendez la fin annoncée sur la page officielle. Ces interventions ne sont pas comptées ici comme des pannes générales, pour ne pas afficher un incident en permanence.',
      },
      {
        question: 'Mon site Hostinger affiche une page blanche depuis la mise à jour PHP',
        answer:
          'Hostinger a déployé les correctifs PHP 8.5.12, 8.4.27, 8.3.36 et 8.2.35 le 21 octobre 2026. Un site resté sur une version plus ancienne, ou une extension incompatible, peut afficher une page blanche depuis. Le guide « changer la version de PHP chez Hostinger » du blog explique le réglage dans hPanel.',
      },
      {
        question: 'Hostinger rembourse-t-il une panne ?',
        answer:
          'Hostinger annonce une garantie de disponibilité de 99,9 % dans ses conditions ; la compensation se demande au support par chat avec les références de l’incident. Rien n’est automatique : gardez l’heure de début et de fin affichée sur la page de statut.',
      },
    ],
  }),
  planethoster: buildProviderPage('planethoster', {
    name: 'PlanetHoster',
    supportUrl: 'https://kb.planethoster.com/guide/astuces-techniques/codes-d-erreur-http/',
    supportLabel: 'Interpréter les codes d’erreur HTTP (base de connaissances PlanetHoster)',
    metaTitle: 'PlanetHoster en panne ? Où regarder et quoi faire',
    metaDescription:
      'PlanetHoster est-il en panne aujourd’hui ? Il n’a plus de page de statut : où lire ses annonces, comment savoir si la panne vient de lui et quoi faire.',
    heroDescription:
      'Votre site hébergé chez PlanetHoster ne répond plus ? PlanetHoster n’a plus de page de statut publique : ses annonces passent par son compte X et son blog. Voici où regarder, et comment savoir en cinq minutes si la panne vient de lui ou de votre site.',
    shareSubtitle: 'World, HybridCloud, N0C : ce que l’hébergeur annonce',
    facts: [
      {
        contextLabel: 'Pas de page de statut',
        title: 'Le forum qui servait de page d’état a fermé',
        text: 'Les liens « État des services » et « Travaux en cours » du site PlanetHoster pointent vers un forum fermé, qui redirige vers un formulaire de contact. La catégorie « Travaux et maintenances » du blog n’a plus été alimentée depuis janvier 2019. Il n’existe aucune adresse status.planethoster.',
        sourceName: 'PlanetHoster, site officiel',
        sourceUrl: 'https://www.planethoster.com/fr/',
      },
      {
        contextLabel: '21 au 23 octobre 2026',
        title: 'Les correctifs PHP ont été annoncés sur X puis sur le blog',
        text: 'Le 21 octobre à 23 h 39 UTC, PlanetHoster a annoncé le déploiement des correctifs PHP « sur tous nos serveurs », avec des mises à jour le 22 et le 23 octobre, puis un retour d’expérience « PHP2Shell : retour sur notre intervention » publié sur le blog le 23 octobre.',
        sourceName: 'PlanetHoster, blog',
        sourceUrl: 'https://blog.planethoster.com/',
      },
      {
        contextLabel: 'France et Canada',
        title: 'Deux pays de centres de données',
        text: 'Les hébergements World et HybridCloud de PlanetHoster sont répartis entre la France et le Canada (Montréal). Les annonces publiques donnent souvent l’heure de Montréal et l’heure de Paris ; cette page affiche les horaires à l’heure de Paris.',
        sourceName: 'PlanetHoster, site officiel',
        sourceUrl: 'https://www.planethoster.com/fr/',
      },
      {
        contextLabel: 'Codes HTTP',
        title: 'La base de connaissances explique les codes d’erreur',
        text: 'Quand le serveur répond mais que le site affiche une erreur, PlanetHoster documente la lecture des codes HTTP (403, 404, 500, 503) et les corrections courantes depuis son panneau N0C.',
        sourceName: 'PlanetHoster, base de connaissances',
        sourceUrl: 'https://kb.planethoster.com/guide/astuces-techniques/codes-d-erreur-http/',
      },
    ],
    factsCalloutText:
      'le support PlanetHoster répond par ticket depuis l’espace client et par téléphone. En cas de panne, c’est lui qui confirme l’incident et donne l’heure de retour .',
    faq: [
      {
        question: 'Comment savoir si la panne vient de PlanetHoster ou de mon site ?',
        answer:
          'Sans page de statut, testez un autre site hébergé chez PlanetHoster, sur la même plateforme que le vôtre (World ou HybridCloud, visible dans l’espace client). S’il répond, la panne est sur votre site : les codes d’erreur HTTP se lisent depuis N0C. S’il ne répond pas non plus, ouvrez un ticket : le support confirme ou non l’incident.',
      },
      {
        question: 'PlanetHoster a-t-il annoncé une panne aujourd’hui ?',
        answer:
          'Cette page ne peut pas le dire : PlanetHoster n’a plus de page de statut lisible, et deviner un état à partir de ses messages serait trompeur. Ses annonces passent par son compte X (x.com/planethoster) et son blog. Pour en avoir le cœur net, ouvrez un ticket depuis l’espace client : le support confirme ou non l’incident.',
      },
      {
        question: 'Mon site PlanetHoster affiche une page blanche depuis la mise à jour PHP',
        answer:
          'Les correctifs PHP ont été déployés sur tous les serveurs du 21 au 23 octobre 2026. Un site qui utilisait une version de PHP très ancienne, ou une extension incompatible, peut afficher une page blanche depuis. Le guide « changer la version de PHP chez PlanetHoster » du blog explique le réglage dans N0C.',
      },
      {
        question: 'PlanetHoster rembourse-t-il une panne ?',
        answer:
          'Les conditions générales de PlanetHoster prévoient une garantie de disponibilité et un geste sur demande, pas de remboursement automatique. Notez l’heure de début et de fin de l’indisponibilité telle que vous l’avez constatée, et joignez-la à votre ticket.',
      },
    ],
  }),
  gandi: buildProviderPage('gandi', {
    name: 'Gandi',
    supportUrl: 'https://docs.gandi.net/fr/hebergement_web/erreurs_courantes/index.html',
    supportLabel: 'Erreurs courantes sur un hébergement web (documentation Gandi)',
    metaTitle: 'Gandi en panne ? État de l’hébergement et des DNS en direct',
    metaDescription:
      'Gandi est-il en panne aujourd’hui ? L’état des hébergements web, DNS, e-mails et domaines lu toutes les 5 minutes sur status.gandi.net, les incidents récents et quoi faire si votre site ne répond plus.',
    heroDescription:
      'Votre site ou votre nom de domaine chez Gandi ne répond plus ? Voici ce que dit la page de statut de Gandi (hébergement web, DNS, e-mail, portail), lue toutes les cinq minutes, et comment savoir si la panne vient de lui ou de votre site.',
    shareSubtitle: 'Hébergement, DNS, domaines, e-mail : l’état en direct',
    facts: [
      {
        contextLabel: 'Page de statut',
        title: 'Gandi suit 30 composants : hébergement, DNS, e-mail, portail, API',
        text: 'status.gandi.net distingue l’hébergement (Simple Hosting, PaaS, cloud), les DNS, l’e-mail, le portail client et les API. Pour un site, les groupes qui comptent sont « Hosting » et « DNS » ; un incident sur le portail ne coupe pas les sites.',
        sourceName: 'Gandi, page de statut',
        sourceUrl: 'https://status.gandi.net/',
      },
      {
        contextLabel: '23 octobre 2026',
        title: 'Un incident de trois heures sur le webmail',
        text: 'L’incident « Webmail incident » a duré de 9 h 03 à 12 h 12 UTC le 23 octobre 2026, avec un impact majeur sur la consultation des e-mails en ligne ; les sites n’étaient pas concernés.',
        sourceName: 'Gandi, historique des incidents',
        sourceUrl: 'https://status.gandi.net/history',
      },
      {
        contextLabel: '9 septembre 2026',
        title: 'Des erreurs 503 sur une partie des hébergements web',
        text: 'L’incident « 503 error on some webhosting instances » a duré de 16 h 59 à 20 h 44 UTC le 9 septembre 2026, avec un impact majeur : certains sites hébergés renvoyaient une erreur 503 pendant près de quatre heures.',
        sourceName: 'Gandi, historique des incidents',
        sourceUrl: 'https://status.gandi.net/history',
      },
      {
        contextLabel: 'Registres',
        title: 'Les maintenances de registres n’affectent pas les sites',
        text: 'Une dizaine de maintenances de registres de noms de domaine sont planifiées en permanence sur la page de statut. Elles peuvent retarder un enregistrement ou un transfert de domaine, jamais l’affichage d’un site : cette page ne les compte pas comme des incidents.',
        sourceName: 'Gandi, maintenances planifiées',
        sourceUrl: 'https://status.gandi.net/',
      },
    ],
    factsCalloutText:
      'la documentation « Erreurs courantes » de Gandi explique les erreurs HTTP et les causes côté site. Le support Gandi répond par ticket depuis le portail client.',
    faq: [
      {
        question: 'Comment savoir si la panne vient de Gandi ou de mon site ?',
        answer:
          'Regardez l’état ci-dessus : un incident « Hosting » ou « DNS » vous concerne, un incident « Portal » ou « Email » non. Si rien n’est annoncé, vérifiez dans le portail Gandi que le domaine et l’hébergement sont bien renouvelés, puis lisez l’erreur affichée : une erreur 503 ou une page blanche désignent le site, un délai dépassé désigne plutôt le DNS.',
      },
      {
        question: 'Mon domaine est chez Gandi mais mon site est hébergé ailleurs',
        answer:
          'Dans ce cas, seuls les groupes « DNS » et « Domains » de la page de statut vous concernent. Un incident DNS chez Gandi rend votre site inaccessible même si l’hébergeur du site fonctionne, car les visiteurs ne trouvent plus l’adresse du serveur. Vérifiez aussi l’état de l’hébergeur du site sur sa propre page.',
      },
      {
        question: 'Combien de temps durent les incidents Gandi ?',
        answer:
          'Les incidents publiés en 2026 ont duré de vingt minutes (opérations PaaS le 6 octobre) à près de quatre heures (erreurs 503 sur des hébergements le 9 septembre). Les maintenances annoncées à l’avance peuvent durer une journée, sans coupure visible dans la plupart des cas.',
      },
      {
        question: 'Gandi rembourse-t-il une panne ?',
        answer:
          'Les conditions particulières de l’hébergement web de Gandi prévoient un engagement de disponibilité et une compensation sur demande, avec les références de l’incident. Rien n’est automatique : gardez l’heure de début et de fin affichée sur la page de statut.',
      },
    ],
  }),
  lws: buildProviderPage('lws', {
    name: 'LWS',
    supportUrl: 'https://aide.lws.fr/base/Hebergement-web-mutualise/Depannage-des-erreurs-HTTP/Codes-derreurs-HTTP',
    supportLabel: 'Dépannage des erreurs HTTP (aide LWS)',
    metaTitle: 'LWS en panne ? État des services en direct',
    metaDescription:
      'LWS est-il en panne aujourd’hui ? L’état des services web, mail, SQL, DNS et cPanel lu toutes les 5 minutes sur la page d’état de LWS, les événements des 72 dernières heures et quoi faire si votre site ne répond plus.',
    heroDescription:
      'Votre site hébergé chez LWS ne répond plus ? Voici ce que dit la page d’état des services de l’hébergeur (web, mail, SQL, DNS, cPanel, Plesk, VPS), lue toutes les cinq minutes, avec les événements des soixante-douze dernières heures, et comment savoir si la panne vient de lui ou de votre site.',
    shareSubtitle: 'Web, mail, SQL, DNS, cPanel : l’état en direct',
    facts: [
      {
        contextLabel: 'Page de statut',
        title: 'LWS tient une page d’état par service, avec quatre niveaux',
        text: 'La page « État des services » de l’aide LWS affiche un état global et un état par service (réseau, web, mail, SQL, VPS, DNS, centre de données, cPanel, Plesk, sauvegardes) avec quatre niveaux : tout va bien, maintenance programmée, perturbation en cours, incident en cours. Elle ne garde que les événements des 72 dernières heures : cette page conserve ceux qu’elle a vus.',
        sourceName: 'LWS, état des services',
        sourceUrl: 'https://aide.lws.fr/service-status',
      },
      {
        contextLabel: '27 octobre 2026',
        title: 'Une maintenance Plesk et une amélioration du service mail le matin',
        text: 'Le 27 octobre 2026, LWS a mené une maintenance sur le service Plesk de 8 h à 11 h 35 et une amélioration du service mail de 8 h à 8 h 32, toutes deux annoncées puis closes sur la page d’état.',
        sourceName: 'LWS, état des services',
        sourceUrl: 'https://aide.lws.fr/service-status',
      },
      {
        contextLabel: 'Depuis le 23 octobre 2026',
        title: 'Un correctif de sécurité Node.js sur les serveurs cPanel',
        text: 'Le 23 octobre 2026 à 18 h 09, LWS a appliqué un correctif de sécurité Node.js sur ses serveurs cPanel, clos le 27 octobre à 17 h 10. La même semaine, la page signalait des délais de réponse du support, classés en « perturbation ».',
        sourceName: 'LWS, état des services',
        sourceUrl: 'https://aide.lws.fr/service-status',
      },
      {
        contextLabel: 'Erreurs HTTP',
        title: 'L’aide LWS documente les erreurs 500 sur cPanel',
        text: 'Quand le serveur répond mais que le site affiche une erreur, LWS documente le dépannage des codes HTTP et le diagnostic d’une erreur 500 sur un hébergement cPanel : registre des erreurs, .htaccess, version de PHP, extensions.',
        sourceName: 'LWS, diagnostic d’une erreur 500',
        sourceUrl: 'https://aide.lws.fr/base/cPanel/Hebergement-web-mutualise-cPanel/diagnostic-erreur-500-cpanel',
      },
    ],
    factsCalloutText:
      'l’aide LWS détaille le dépannage des erreurs HTTP et des erreurs 500 sur cPanel. Le support LWS répond par ticket depuis l’espace client et par téléphone aux heures ouvrées.',
    faq: [
      {
        question: 'Comment savoir si la panne vient de LWS ou de mon site ?',
        answer:
          'Lisez l’état ci-dessus : « incident en cours » ou « perturbation en cours » sur le service web, SQL ou DNS vous concerne ; une maintenance programmée est annoncée à l’avance avec son heure de fin. Si tout va bien côté LWS, la panne est sur votre site : l’aide LWS explique comment lire le registre des erreurs depuis cPanel.',
      },
      {
        question: 'La page d’état de LWS ne montre que 72 heures, où est l’historique ?',
        answer:
          'LWS n’affiche que les événements des trois derniers jours. Cette page garde en mémoire les événements qu’elle a lus et les changements d’état qu’elle a constatés, pour que vous puissiez retrouver la date et la durée d’une panne passée.',
      },
      {
        question: 'Mon site LWS affiche une page blanche depuis la mise à jour PHP',
        answer:
          'Les correctifs PHP d’octobre 2026 ont été déployés sur les serveurs mutualisés. Un site resté sur une version de PHP ancienne, ou une extension incompatible avec la version choisie dans cPanel, peut afficher une page blanche depuis. Le réglage de la version se fait depuis l’outil « Sélectionner une version PHP » de cPanel.',
      },
      {
        question: 'LWS rembourse-t-il une panne ?',
        answer:
          'Les conditions générales de LWS prévoient une garantie de disponibilité et un geste sur demande, pas de remboursement automatique. Notez l’heure de début et de fin de l’indisponibilité telle qu’elle apparaît sur la page d’état, et joignez-la à votre ticket.',
      },
    ],
  }),
}

export const HOSTING_STATUS_PAGE_FR: DibodevHostingStatusPageContent = {
  cardWording: CARD_WORDING,
  boardWording: {
    stateLabels: CARD_WORDING.stateLabels,
    checkedAtText: 'Vérifié à {time}, heure de Paris. Les hébergeurs avec un incident passent en tête.',
    loadingText: 'Lecture des pages de statut…',
    errorText: 'Impossible de lire les états pour l’instant. Réessayez dans une minute.',
    lastIncidentText: '{title} · {date}',
    noIncidentText: 'Aucun événement récent',
    noStatusPageLabel: 'Pas de page de statut',
    noStatusPageText: 'Annonces sur X et support',
    cardLinkLabel: 'Voir le détail',
  },
  hub: HUB,
  providers: PROVIDERS,
}
