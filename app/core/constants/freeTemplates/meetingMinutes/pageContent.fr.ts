import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  ASSOCIATION_POST_MEETING_DECLARATION_SOURCE,
  ASSOCIATION_STATUTES_SOURCE,
  CO_OWNERSHIP_MINUTES_SOURCE,
  CSE_MINUTES_SOURCE,
  MEETING_MINUTES_TEMPLATE_DOCX_PATH,
  MEETING_MINUTES_TEMPLATE_PDF_PATH,
  MEETING_MINUTES_TEMPLATE_UPDATED_AT,
  MEETING_MINUTES_TEMPLATE_XLSX_PATH,
  SARL_MINUTES_CONTENT_SOURCE,
  SARL_MINUTES_OBLIGATION_SOURCE,
} from '~/core/constants/freeTemplates/meetingMinutes/pageShared'
import { NBSP } from '~/core/constants/typography'

export const MEETING_MINUTES_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Compte rendu de réunion${NBSP}: modèle gratuit Word, Excel, PDF`,
    description: `Modèle de compte rendu de réunion gratuit en PDF, Word et Excel${NBSP}: points traités, relevé de décisions, plan d’actions et retards calculés.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle de compte rendu de réunion avec relevé de décisions et plan d’actions',
  },
  breadcrumbLabel: 'Compte rendu de réunion',
  shareImage: {
    titleLines: ['Compte rendu de réunion', 'modèle gratuit'],
    highlight: 'Compte rendu de réunion',
    subtitle: 'Points traités, relevé de décisions et plan d’actions, en PDF, Word et Excel, retards calculés',
    badge: 'Gratuit, sans inscription',
    icon: 'fileText',
    alt: `Modèle de compte rendu de réunion gratuit${NBSP}: points traités, relevé de décisions et plan d’actions en PDF, Word et Excel, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Compte rendu de réunion',
    titleAfter: `${NBSP}: modèle gratuit PDF, Word et Excel (+ relevé de décisions et plan d’actions)`,
    reassurances: [
      'Réunion d’équipe, de chantier ou de bureau',
      'Actions suivies d’une réunion à l’autre',
      'Sans inscription ni e-mail',
    ],
    aboutTitle: 'À propos du modèle',
    description: `Une réunion se juge à ce qu’il en reste le lendemain. Ce modèle garde trois choses${NBSP}: ce qui a été dit sur chaque point, ce qui a été décidé, et qui fait quoi pour quand. La première page est le compte rendu que l’on envoie aux participants. La seconde est le relevé de décisions et le plan d’actions, celle que l’on relit au début de la réunion suivante pour voir ce qui a avancé. L’Excel calcule les retards.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai lu le Code de commerce sur les SARL, le Code du travail sur le CSE, le décret de 1967 sur la copropriété et les fiches Service-Public sur les associations, pour savoir quand un compte rendu suffit et quand la loi demande un procès-verbal.',
    updatedAt: MEETING_MINUTES_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les gérants, les chefs d’équipe, les conducteurs de travaux, les chefs de projet et les secrétaires d’association. Trois fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime pour prendre des notes en séance, le Word se remplit et s’envoie, l’Excel suit les actions et signale ce qui a glissé.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: MEETING_MINUTES_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: MEETING_MINUTES_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 feuilles, retards calculés',
      },
      {
        label: 'Télécharger la version Word',
        href: MEETING_MINUTES_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 pages, modifiable',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à votre organisation. Il ne remplace pas le procès-verbal quand un texte en impose un, ni l’avis d’un juriste.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Un compte rendu, un relevé de décisions et un plan d’actions suivi',
    intro: `Le PDF et le Word tiennent sur deux pages A4${NBSP}: le compte rendu de la réunion, puis le relevé de décisions et le plan d’actions. L’Excel reprend le compte rendu, garde toutes les actions d’une réunion à l’autre dans une seule liste, et ajoute une synthèse.`,
    documents: [
      {
        title: 'Compte rendu de réunion',
        format: `Page 1 du PDF et du Word, feuille «${NBSP}Compte rendu${NBSP}» de l’Excel`,
        items: [
          `Organisation et type de réunion en 6 cases${NBSP}: réunion d’équipe, réunion de chantier, client ou partenaire, comité de pilotage, bureau ou conseil, autre`,
          'Objet, date, heures de début et de fin, lieu ou visio, qui anime, qui rédige',
          `Présents avec leur fonction (8 lignes), excusés ou absents, et diffusion${NBSP}: les personnes qui reçoivent le compte rendu sans avoir été là${NBSP}; dans l’Excel, un statut à choisir pour 15 personnes`,
          `Points traités, un par ligne${NBSP}: sujet, ce qui a été dit (informations, avis, chiffres), décision ou suite à donner${NBSP}; dans l’Excel, 12 points et une suite à choisir, décision, pour information ou reporté`,
          'Prochaine réunion (date, heure, lieu, points déjà prévus), date d’envoi du compte rendu et date limite pour les remarques',
          'Signatures du rédacteur et du relecteur, et un rappel des cas où un procès-verbal est imposé',
        ],
      },
      {
        title: 'Relevé de décisions et plan d’actions',
        format: `Page 2 du PDF et du Word, feuille «${NBSP}Suivi des actions${NBSP}» de l’Excel`,
        items: [
          'Réunion concernée, numéro du relevé, responsable du suivi des actions',
          `Relevé de décisions numérotées D1 à D5${NBSP}: texte exact de la décision, point d’où elle vient, comment elle a été prise (accord, vote, arbitrage), date d’effet`,
          `Plan d’actions sur 10 lignes (40 dans l’Excel)${NBSP}: action, un seul responsable, échéance, décision liée, état, commentaire`,
          `Cinq états à reporter d’une réunion à l’autre${NBSP}: à faire, en cours, fait, reporté, abandonné`,
          `Dans l’Excel, une date de référence (aujourd’hui par défaut) et, pour chaque action, le retard en jours et sa situation${NBSP}: dans les temps, sous 7${NBSP}jours, en retard, faite à temps ou faite en retard`,
          'Points reportés ou questions en suspens, à remettre à l’ordre du jour suivant, et validation du relevé',
        ],
      },
      {
        title: 'Synthèse',
        format: `Feuille «${NBSP}Synthèse${NBSP}» de l’Excel, sans équivalent dans le PDF`,
        items: [
          `La réunion en chiffres${NBSP}: durée, présents, excusés, absents, points traités, points avec une décision, points reportés, date de la suivante`,
          `Les actions${NBSP}: ouvertes, en retard, à échéance dans les 7${NBSP}jours, retard moyen, faites, part faite à temps, abandonnées`,
          'Pour chaque participant, ses actions ouvertes, en retard, à échéance proche, faites et faites en retard',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Rédiger un compte rendu de réunion en quatre étapes',
    intro: `Le compte rendu s’écrit en deux temps${NBSP}: des notes rapides pendant la réunion, la mise au propre juste après. Dans l’Excel, seules les cases blanches et la case jaune se saisissent${NBSP}: les comptes, les retards et la synthèse se calculent seuls.`,
    steps: [
      {
        label: 'Étape 1',
        title: 'Avant de commencer, l’en-tête et le rédacteur',
        description: `Notez l’objet, la date, l’heure, le lieu, et désignez qui rédige${NBSP}: ce n’est pas la personne qui anime, sinon l’un des deux rôles est mal tenu. Ouvrez la page 2 avec les actions encore ouvertes de la réunion précédente, et passez-les en revue en premier.`,
      },
      {
        label: 'Étape 2',
        title: 'Pendant la réunion, un point par ligne',
        description: `Pour chaque sujet, écrivez l’essentiel de ce qui a été dit, les chiffres et les avis qui ont pesé, pas les échanges mot pour mot. Dès qu’une décision tombe, lisez-la à voix haute et écrivez-la telle qu’elle a été acceptée${NBSP}: c’est elle qui part dans le relevé.`,
      },
      {
        label: 'Étape 3',
        title: 'Avant de se quitter, qui fait quoi pour quand',
        description: `Chaque action reçoit un verbe, un seul responsable et une date. «${NBSP}Voir avec le fournisseur${NBSP}» n’est pas une action${NBSP}; «${NBSP}Sarah demande un troisième devis avant le 4${NBSP}» en est une. Ce qui n’a pas pu être traité va dans les points reportés, et la date de la prochaine réunion se fixe tant que tout le monde est là.`,
      },
      {
        label: 'Étape 4',
        title: 'Après la réunion, l’envoi et le suivi',
        description: `Mettez le compte rendu au propre, faites-le relire, puis envoyez-le aux présents, aux excusés et aux personnes de la diffusion, avec une date limite pour les remarques. Dans l’Excel, reportez les actions dans le suivi${NBSP}: à la réunion suivante, la colonne «${NBSP}Situation${NBSP}» montre ce qui est en retard avant même d’ouvrir la discussion.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: `Compte rendu ou procès-verbal${NBSP}: quand la loi impose sa forme`,
    intro: `Pour une réunion d’équipe, de chantier ou avec un client, je n’ai trouvé aucun texte qui fixe la forme d’un compte rendu. Certaines instances doivent en revanche tenir un procès-verbal, dont le contenu, les signataires et parfois le délai sont écrits dans la loi${NBSP}; le modèle ne remplace pas l’avis d’un juriste dans ces cas-là.`,
    facts: [
      {
        contextLabel: 'Compte rendu ou procès-verbal',
        title: 'Le compte rendu est libre, le procès-verbal est imposé',
        text: `Aucun des textes que j’ai lus ne définit le compte rendu${NBSP}: c’est un document de travail, que chacun organise à sa façon. Le procès-verbal, lui, est exigé par la loi pour certaines instances. La fiche Service-Public sur les décisions d’une SARL n’emploie que ce mot${NBSP}: un procès-verbal après chaque assemblée des associés et chaque consultation écrite, signé par le ou les gérants, puis inséré dans le registre des procès-verbaux de la société.`,
        sourceName: SARL_MINUTES_OBLIGATION_SOURCE.name,
        sourceUrl: SARL_MINUTES_OBLIGATION_SOURCE.url,
      },
      {
        contextLabel: 'SARL, Code de commerce, R223-24 et R221-3',
        title: 'Le procès-verbal d’assemblée a un contenu fixé',
        text: `Il indique la date et le lieu, le président de séance, les associés présents ou représentés avec leurs parts, les documents soumis, un résumé des débats, le texte des résolutions et le résultat des votes. Les gérants l’établissent et le signent, avec le président de séance s’il y en a un. Il est porté sur un registre spécial tenu au siège, coté et paraphé par un juge ou par le maire, ou tenu sous forme électronique avec une signature électronique avancée.`,
        sourceName: SARL_MINUTES_CONTENT_SOURCE.name,
        sourceUrl: SARL_MINUTES_CONTENT_SOURCE.url,
      },
      {
        contextLabel: 'CSE, Code du travail, L2315-34 et D2315-26',
        title: 'Le secrétaire du CSE rédige, l’employeur répond à la séance suivante',
        text: `Les délibérations du comité social et économique sont consignées dans un procès-verbal établi par son secrétaire, et les déclarations y sont reportées. Le délai et les modalités se fixent par accord. À défaut d’accord, le procès-verbal est transmis à l’employeur dans les 15${NBSP}jours qui suivent la réunion et contient au moins le résumé des délibérations et la décision motivée de l’employeur sur les propositions de la réunion précédente.`,
        sourceName: CSE_MINUTES_SOURCE.name,
        sourceUrl: CSE_MINUTES_SOURCE.url,
      },
      {
        contextLabel: 'Copropriété, décret du 17 mars 1967, art. 17',
        title: 'Le résultat de chaque vote, les opposants nommés',
        text: `Le procès-verbal de l’assemblée générale donne, sous chaque question de l’ordre du jour, le résultat du vote, le nom et les voix des opposants et des abstentionnistes, et les réserves sur la régularité des décisions. Il est signé par le président, le secrétaire et les scrutateurs, en fin de séance ou au plus tard dans les 8${NBSP}jours, puis inscrit au registre. Le syndic notifie les décisions dans un délai d’un mois, et les opposants ou défaillants ont 2${NBSP}mois pour les contester.`,
        sourceName: CO_OWNERSHIP_MINUTES_SOURCE.name,
        sourceUrl: CO_OWNERSHIP_MINUTES_SOURCE.url,
      },
      {
        contextLabel: 'Association loi 1901',
        title: 'Les statuts décident de la façon de garder trace',
        text: `Les statuts fixent librement la composition et les attributions de l’assemblée générale, et la façon dont le conseil d’administration et le bureau fonctionnent${NBSP}; un règlement intérieur peut compléter. Si vos statuts demandent un procès-verbal signé du président et du secrétaire, suivez-les à la lettre. Sinon, un compte rendu clair, avec un relevé de décisions, suffit pour les réunions courantes.`,
        sourceName: ASSOCIATION_STATUTES_SOURCE.name,
        sourceUrl: ASSOCIATION_STATUTES_SOURCE.url,
      },
      {
        contextLabel: 'Association, après l’assemblée',
        title: 'Certaines décisions se déclarent dans les 3 mois',
        text: `En principe, rien n’est à déclarer en préfecture après chaque assemblée générale. Mais un changement de nom ou d’objet, d’adresse du siège, de dirigeants ou de statuts, l’ouverture ou la fermeture d’un lieu d’activité, l’achat ou la vente d’un bien immobilier se déclarent dans les 3${NBSP}mois qui suivent. Le relevé de décisions sert alors de liste${NBSP}: ce qui doit être déclaré, par qui, avant quelle date.`,
        sourceName: ASSOCIATION_POST_MEETING_DECLARATION_SOURCE.name,
        sourceUrl: ASSOCIATION_POST_MEETING_DECLARATION_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Compte rendu de réunion${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de compte rendu de réunion est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Le PDF, le Word et l’Excel se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne «${NBSP}modèle proposé par Dibodev${NBSP}» en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Compte rendu ou procès-verbal${NBSP}: quelle différence${NBSP}?`,
        answer: `Le compte rendu est un document de travail${NBSP}: aucun texte que j’ai lu n’en fixe la forme, il sert à informer et à suivre les décisions. Le procès-verbal est imposé par la loi pour certaines instances, avec un contenu, des signataires et parfois un registre et un délai fixés. Dans une SARL, par exemple, il donne les associés présents ou représentés, un résumé des débats, le texte des résolutions et le résultat des votes, et il est signé par le gérant.`,
      },
      {
        question: `Quand un procès-verbal est-il obligatoire${NBSP}?`,
        answer: `Parmi les cas que j’ai vérifiés${NBSP}: l’assemblée des associés d’une SARL et ses consultations écrites, les réunions du CSE, l’assemblée générale des copropriétaires. Dans une association, ce sont les statuts qui le disent. Pour une réunion d’équipe, de chantier ou avec un client, je n’ai trouvé aucune obligation${NBSP}: le compte rendu est une bonne habitude, pas une formalité. Dans le doute pour une instance précise, lisez ses statuts ou demandez à un juriste.`,
      },
      {
        question: `Que faut-il écrire dans un compte rendu de réunion${NBSP}?`,
        answer: `L’en-tête (objet, date, lieu, présents, excusés), puis pour chaque point ce qui a été dit d’utile et ce qui a été décidé. Pas les échanges mot pour mot, ni qui a eu raison${NBSP}: les faits, les chiffres, les décisions. Et surtout, à la fin, les actions avec un responsable et une date, sans quoi le compte rendu se lit une fois puis s’oublie.`,
      },
      {
        question: `Et pour un compte rendu de réunion de chantier${NBSP}?`,
        answer: `Le même modèle convient${NBSP}: cochez «${NBSP}Réunion de chantier${NBSP}», notez dans les présents l’entreprise de chacun, et traitez un lot ou une zone par ligne. Le plan d’actions devient la liste de ce que chaque entreprise doit faire avant la réunion suivante, avec son échéance. Les photos et les plans se joignent en annexe, en les numérotant dans la colonne «${NBSP}Ce qui a été dit${NBSP}».`,
      },
      {
        question: `Dans quel délai envoyer le compte rendu${NBSP}?`,
        answer: `Pour une réunion courante, je n’ai trouvé aucun délai fixé par un texte${NBSP}: envoyez-le tant que chacun se souvient de la réunion, dans les jours qui suivent, pour que les actions démarrent. Pour un procès-verbal imposé, le délai est écrit${NBSP}: au CSE, à défaut d’accord, transmission à l’employeur dans les 15${NBSP}jours${NBSP}; en copropriété, signature en fin de séance ou dans les 8${NBSP}jours, puis notification des décisions dans le mois.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Trois feuilles. «${NBSP}Compte rendu${NBSP}»${NBSP}: l’en-tête, les participants avec un statut et les points avec leur suite (décision, pour information, reporté). «${NBSP}Suivi des actions${NBSP}»${NBSP}: une ligne par action, un responsable choisi parmi les participants, une échéance et un état${NBSP}; le retard et la situation se calculent par rapport à la date de référence, aujourd’hui par défaut. «${NBSP}Synthèse${NBSP}» compte les présents, les décisions, les actions ouvertes et en retard, et la charge de chacun. Les lignes «${NBSP}Exemple${NBSP}» montrent le calcul${NBSP}: effacez-les.`,
      },
      {
        question: `Faut-il faire signer le compte rendu${NBSP}?`,
        answer: `Pour une réunion courante, je n’ai trouvé aucun texte qui l’impose. La relecture par un second participant et une date limite pour les remarques suffisent en général${NBSP}: passé cette date, la version envoyée devient celle de référence pour l’équipe. Les cases de signature du modèle servent quand vous voulez une trace plus solide. Pour un procès-verbal imposé, les signataires sont fixés par le texte${NBSP}: gérant en SARL, président, secrétaire et scrutateurs en copropriété.`,
      },
      {
        question: `Et quand les comptes rendus s’empilent${NBSP}?`,
        answer: `Un Excel suffit pour une équipe et une réunion par mois. Au-delà, retrouver une décision dans vingt fichiers, relancer chacun sur ses actions et recopier les actions ouvertes d’un compte rendu à l’autre prend du temps${NBSP}: un outil qui garde réunions, décisions et actions au même endroit le fait à votre place. Si vos réunions tournent autour de formations ou de cours, le test de la page outil vous dit quel logiciel choisir.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand les comptes rendus se perdent dans les boîtes mail, que les mêmes actions reviennent «${NBSP}en cours${NBSP}» d’une réunion à l’autre et que personne ne sait plus quelle décision a été prise quand, un outil qui garde tout au même endroit vous rend des heures. Décrivez-moi votre organisation${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels pour organismes de formation',
  },
}
