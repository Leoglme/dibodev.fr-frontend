import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  COLLECTIVE_SCHEDULE_POSTING_SOURCE,
  DAILY_REST_SOURCE,
  MAXIMUM_WORKING_HOURS_SOURCE,
  PART_TIME_CHANGE_NOTICE_SOURCE,
  PART_TIME_WORK_SOURCE,
  WEEKLY_SCHEDULE_TEMPLATE_DOCX_PATH,
  WEEKLY_SCHEDULE_TEMPLATE_PDF_PATH,
  WEEKLY_SCHEDULE_TEMPLATE_UPDATED_AT,
  WEEKLY_SCHEDULE_TEMPLATE_XLSX_PATH,
} from '~/core/constants/freeTemplates/weeklySchedule/pageShared'
import { NBSP } from '~/core/constants/typography'

export const WEEKLY_SCHEDULE_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Planning hebdomadaire${NBSP}: modèle gratuit Excel, Word et PDF`,
    description: `Planning hebdomadaire d’équipe et semainier à imprimer, gratuits en PDF, Word et Excel${NBSP}: heures du jour, repos et totaux calculés. Sans inscription.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle de planning hebdomadaire d’équipe et de semainier individuel à imprimer',
  },
  breadcrumbLabel: 'Planning hebdomadaire',
  shareImage: {
    titleLines: ['Planning hebdomadaire', 'gratuit à imprimer'],
    highlight: 'Planning hebdomadaire',
    subtitle:
      'Planning de l’équipe sur la semaine et semainier d’une personne, en PDF, Word et Excel, heures calculées',
    badge: 'Gratuit, sans inscription',
    icon: 'fileText',
    alt: `Modèle de planning hebdomadaire gratuit${NBSP}: planning d’équipe du lundi au dimanche et semainier à imprimer en PDF, Word et Excel, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Planning hebdomadaire',
    titleAfter: `${NBSP}: modèle gratuit Excel, Word et PDF (+ semainier à imprimer)`,
    reassurances: ['Planning d’équipe + semainier', 'Excel qui contrôle repos et durées', 'Sans inscription ni e-mail'],
    aboutTitle: 'À propos du modèle',
    description: `Le planning hebdomadaire se fait avant la semaine${NBSP}: qui travaille quel jour, de quelle heure à quelle heure, et combien d’heures cela fait face au contrat de chacun. La page 1 le donne pour toute l’équipe, du lundi au dimanche, prête à afficher. La page 2 est un semainier, la semaine d’une seule personne heure par heure, à imprimer pour la remettre au salarié ou pour organiser vos propres journées. L’Excel calcule les heures et signale une journée trop longue ou un repos trop court avant que le planning parte.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. Chez l’éditeur Kodeva, j’ai créé de zéro Gest-Time, un logiciel de suivi des heures par chantier toujours utilisé par des PME. Pour ce modèle, j’ai lu sur Légifrance et Service-Public les règles d’affichage des horaires, de repos et de temps partiel.',
    updatedAt: WEEKLY_SCHEDULE_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les commerces, restaurants, entreprises de nettoyage, cabinets, associations et toute équipe qui tourne sur plusieurs horaires, mais aussi pour qui cherche simplement un planning de la semaine à imprimer. Trois fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime, l’Excel calcule et contrôle, le Word se modifie librement.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: WEEKLY_SCHEDULE_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: WEEKLY_SCHEDULE_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 feuilles, heures et contrôles calculés',
      },
      {
        label: 'Télécharger la version Word',
        href: WEEKLY_SCHEDULE_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 pages, modifiable',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à votre entreprise et à votre convention collective. Il ne remplace pas l’avis d’un juriste.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Un planning d’équipe, un semainier et une synthèse de la semaine',
    intro: `Le PDF tient sur deux pages A4${NBSP}: le planning de l’équipe en paysage, pour loger les sept jours, puis le semainier en portrait. L’Excel reprend les deux, relie le semainier au planning, et ajoute une synthèse qui relit la semaine avant que vous la diffusiez.`,
    documents: [
      {
        title: 'Planning hebdomadaire de l’équipe',
        format: `Page 1 du PDF en paysage, feuille «${NBSP}Planning de l’équipe${NBSP}» de l’Excel`,
        items: [
          'Entreprise, équipe ou lieu de travail, semaine du lundi au dimanche, numéro de semaine, date d’établissement et numéro de version',
          `9 personnes en lignes (15 dans l’Excel)${NBSP}: nom, poste, durée prévue au contrat, puis les sept jours, avec deux lignes par jour pour une journée en deux périodes`,
          `Dans l’Excel, pour chaque jour${NBSP}: début, fin et pause en minutes, et les heures du jour calculées, poste de nuit compris`,
          'En bout de ligne, le total prévu de la semaine et l’écart au contrat, et dans l’Excel les jours travaillés, la journée la plus longue et le repos le plus court entre deux jours',
          `Une colonne «${NBSP}Contrôle${NBSP}» dans l’Excel${NBSP}: journée de plus de 10${NBSP}h, semaine de plus de 48${NBSP}h, repos de moins de 11${NBSP}h, total au-dessus ou sous le contrat`,
          'En bas, les personnes et les heures prévues chaque jour, le tableau des changements après diffusion (avis donné le, nouvel horaire, prévenu par) et le cadre daté, signé et affiché',
        ],
      },
      {
        title: 'Semainier d’une personne',
        format: `Page 2 du PDF, feuille «${NBSP}Semainier${NBSP}» de l’Excel`,
        items: [
          'Nom, poste ou rôle, semaine du lundi au dimanche, numéro de semaine',
          `Une grille de 7${NBSP}h à 21${NBSP}h, une ligne par heure coupée en deux demi-heures dans le PDF, une ligne par demi-heure dans l’Excel, sept colonnes du lundi au dimanche`,
          'Sous la grille, l’horaire et les heures prévues de chaque jour, et le total de la semaine',
          `Dans l’Excel, vous choisissez la personne dans une liste${NBSP}: son début, sa fin et ses heures viennent du planning, et ses demi-heures de travail se colorent`,
          'Priorités de la semaine à cocher, rendez-vous, échéances, ce qu’il faut préparer pour la semaine suivante, notes',
        ],
      },
      {
        title: 'Synthèse de la semaine',
        format: `Feuille «${NBSP}Synthèse${NBSP}» de l’Excel, sans équivalent dans le PDF`,
        items: [
          'Par personne, le contrat, le total prévu, l’écart, les jours travaillés, la journée la plus longue, le repos le plus court et le contrôle',
          'Par jour, les personnes et les heures prévues, pour voir d’un coup d’œil un samedi trop léger ou un mardi trop chargé',
          'Pour l’équipe, le nombre de personnes, les heures de la semaine et le nombre de lignes à corriger',
          'Les quatre repères utilisés par les contrôles, avec l’article du Code du travail d’où vient chacun',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir le planning hebdomadaire en quatre étapes',
    intro:
      'Dans l’Excel, seules les cases blanches et les cases jaunes se saisissent. Les heures, les totaux, les contrôles et le semainier se mettent à jour seuls.',
    steps: [
      {
        label: 'Étape 1',
        title: 'L’équipe et la semaine',
        description: `Écrivez le nom de chaque personne, son poste et la durée prévue à son contrat. Dans l’Excel, saisissez la date du lundi en case jaune${NBSP}: les dates des sept jours et le numéro de semaine suivent. Effacez la ligne «${NBSP}Exemple${NBSP}» une fois le calcul compris.`,
      },
      {
        label: 'Étape 2',
        title: 'Les horaires de chaque jour',
        description: `Pour chaque personne, le début et la fin de chaque jour travaillé, au format 08:30, et la pause en minutes. Une journée coupée (9:00 → 12:00 puis 15:00 → 19:00) se saisit en une seule période avec 180${NBSP}minutes de pause. Sur papier, écrivez R pour un repos, CP pour des congés.`,
      },
      {
        label: 'Étape 3',
        title: 'Relire, puis diffuser',
        description: `Avant de diffuser, regardez la colonne «${NBSP}Contrôle${NBSP}» et la synthèse${NBSP}: journée trop longue, repos trop court, total qui s’écarte du contrat. Datez, signez, affichez le planning, et imprimez le semainier de chaque personne qui doit recevoir ses horaires par écrit.`,
      },
      {
        label: 'Étape 4',
        title: 'Un changement en cours de semaine',
        description: `Notez-le dans le tableau des changements${NBSP}: date de l’avis, personne, jour, ancien et nouvel horaire, moyen utilisé. Passez la version à 2, réaffichez le planning corrigé avant qu’il s’applique, et respectez le délai de prévenance d’un salarié à temps partiel.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Ce que le Code du travail demande au planning avant la semaine',
    intro: `Six règles touchent un planning d’équipe, de son affichage à ses changements. Le modèle leur réserve une case, un contrôle ou un rappel${NBSP}; il ne remplace pas l’avis d’un juriste, ni la lecture de votre convention collective.`,
    facts: [
      {
        contextLabel: 'Code du travail, art. D3171-1 à D3171-4',
        title: 'Un horaire collectif daté, signé et affiché',
        text: `Quand toute une équipe travaille sur le même horaire, il indique le début et la fin de chaque période de travail. L’employeur le date et le signe, puis l’affiche lisiblement sur chaque lieu de travail concerné. Une modification est affichée avant de s’appliquer, et un double de l’horaire et de ses rectifications part à l’avance à l’inspection du travail. Le cadre en bas de la page 1 sert à cela.`,
        sourceName: COLLECTIVE_SCHEDULE_POSTING_SOURCE.name,
        sourceUrl: COLLECTIVE_SCHEDULE_POSTING_SOURCE.url,
      },
      {
        contextLabel: 'Code du travail, art. D3171-7',
        title: `Travail en équipes successives${NBSP}: le nom de chacun`,
        text: `En travail par relais, par roulement ou en équipes successives, la composition nominative de chaque équipe, intérimaires compris, est donnée par un tableau affiché ou par un registre tenu à jour, que l’inspection du travail et les représentants du personnel peuvent consulter. Un planning de la semaine avec une ligne par personne et par équipe répond à cette question.`,
        sourceName: COLLECTIVE_SCHEDULE_POSTING_SOURCE.name,
        sourceUrl: COLLECTIVE_SCHEDULE_POSTING_SOURCE.url,
      },
      {
        contextLabel: 'Durées maximales',
        title: `Pas plus de 10${NBSP}heures par jour ni 48${NBSP}heures dans la semaine`,
        text: `Le travail effectif ne dépasse pas 10${NBSP}heures par jour, sauf dérogation, et une convention collective peut porter ce maximum à 12${NBSP}heures. La semaine reste sous 48${NBSP}heures, et sous 44${NBSP}heures en moyenne sur 12 semaines consécutives. Mieux vaut le voir au moment de prévoir que le découvrir sur les heures faites${NBSP}: l’Excel alerte dès la saisie.`,
        sourceName: MAXIMUM_WORKING_HOURS_SOURCE.name,
        sourceUrl: MAXIMUM_WORKING_HOURS_SOURCE.url,
      },
      {
        contextLabel: 'Repos quotidien',
        title: `11${NBSP}heures de repos consécutives entre deux journées`,
        text: `Un salarié majeur a droit à au moins 11${NBSP}heures de repos consécutives entre deux journées de travail. Certaines activités ou un surcroît d’activité permettent d’y déroger par accord ou avec l’autorisation de l’inspection du travail, jamais en dessous de 9${NBSP}heures. C’est le piège classique de la fermeture le soir suivie de l’ouverture le lendemain${NBSP}: l’Excel calcule le repos le plus court de chaque personne dans la semaine.`,
        sourceName: DAILY_REST_SOURCE.name,
        sourceUrl: DAILY_REST_SOURCE.url,
      },
      {
        contextLabel: 'Temps partiel, art. L3123-31 et L3123-24',
        title: 'Un changement d’horaires annoncé 7 jours ouvrés avant',
        text: `Pour un salarié à temps partiel, toute modification de la répartition de ses heures entre les jours de la semaine ou les semaines du mois lui est notifiée au moins 7${NBSP}jours ouvrés avant. Un accord d’entreprise ou de branche peut prévoir un délai plus court, jamais sous 3${NBSP}jours ouvrés, avec des contreparties pour le salarié. Le tableau des changements garde la date de chaque avis.`,
        sourceName: PART_TIME_CHANGE_NOTICE_SOURCE.name,
        sourceUrl: PART_TIME_CHANGE_NOTICE_SOURCE.url,
      },
      {
        contextLabel: 'Contrat à temps partiel',
        title: 'Les horaires de chaque journée, communiqués par écrit',
        text: `Le contrat à temps partiel prévoit comment les horaires de chaque journée travaillée sont communiqués par écrit au salarié, et les cas où leur répartition peut changer. Si le changement n’est pas prévu au contrat, le refus du salarié n’est ni une faute ni un motif de licenciement. Le semainier imprimé ou envoyé chaque semaine est un support simple pour cet écrit.`,
        sourceName: PART_TIME_WORK_SOURCE.name,
        sourceUrl: PART_TIME_WORK_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Planning hebdomadaire${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de planning hebdomadaire est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Les trois fichiers se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne «${NBSP}modèle proposé par Dibodev${NBSP}» en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Planning hebdomadaire ou semainier${NBSP}: quelle différence${NBSP}?`,
        answer: `Le planning hebdomadaire montre toute une équipe sur une page${NBSP}: une ligne par personne, une colonne par jour. Le semainier montre une seule personne, heure par heure, avec la place pour ses rendez-vous et ses tâches. Le premier sert à organiser et à afficher, le second à remettre à chacun ses horaires ou à tenir son propre agenda de la semaine.`,
      },
      {
        question: `Planning ou fiche de pointage${NBSP}: lequel me faut-il${NBSP}?`,
        answer: `Souvent les deux, car ils ne disent pas la même chose. Le planning dit ce qui est prévu, avant la semaine. La fiche de pointage note ce qui a été fait, jour après jour, et c’est elle qui compte les heures supplémentaires${NBSP}: si les horaires réels s’écartent du planning, c’est elle qui fait foi. Le modèle de fiche de pointage est dans les modèles gratuits.`,
      },
      {
        question: `Faut-il afficher le planning de l’équipe${NBSP}?`,
        answer: `Quand toute l’équipe suit le même horaire collectif, oui${NBSP}: daté, signé par l’employeur, affiché lisiblement sur le lieu de travail, et chaque modification affichée avant de s’appliquer (Code du travail, art. D3171-1 à D3171-3). Quand les horaires diffèrent d’une personne à l’autre, la durée du travail de chacun se décompte chaque jour et se récapitule chaque semaine (art. D3171-8)${NBSP}: le planning reste utile pour prévenir, mais il ne remplace pas ce décompte.`,
      },
      {
        question: `Dans quel délai prévenir d’un changement de planning${NBSP}?`,
        answer: `Pour un salarié à temps partiel, au moins 7${NBSP}jours ouvrés avant, sauf accord collectif qui fixe un autre délai, jamais sous 3${NBSP}jours ouvrés (art. L3123-31 et L3123-24). Si votre entreprise répartit la durée du travail sur plusieurs semaines par accord, les changements de programme suivent le délai de sept jours ou celui de l’accord (art. D3171-5). Votre convention collective peut ajouter ses propres règles${NBSP}: lisez-la.`,
      },
      {
        question: `Combien d’heures prévoir au plus par jour et par semaine${NBSP}?`,
        answer: `10${NBSP}heures de travail effectif par jour, sauf dérogation, et 12 au plus si votre convention le prévoit${NBSP}; 48${NBSP}heures sur une même semaine et 44${NBSP}heures en moyenne sur 12 semaines${NBSP}; et au moins 11${NBSP}heures de repos consécutives entre deux journées. L’Excel contrôle la journée, la semaine et le repos de chaque personne dès que vous saisissez ses horaires.`,
      },
      {
        question: `Comment imprimer un planning de la semaine${NBSP}?`,
        answer: `Prenez la page 2 du PDF, le semainier${NBSP}: une page A4 en portrait, de 7${NBSP}h à 21${NBSP}h, sept colonnes du lundi au dimanche, à imprimer autant de fois que de semaines. Elle sert aussi bien de planning semaine à imprimer pour un salarié que d’agenda personnel. Dans l’Excel, la feuille «${NBSP}Semainier${NBSP}» tient sur une page A4 et se remplit seule depuis le planning de l’équipe.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Trois feuilles. «${NBSP}Planning de l’équipe${NBSP}»${NBSP}: vous saisissez le lundi en case jaune, puis le début, la fin et la pause de chaque jour pour chacun${NBSP}; les heures, les totaux, l’écart au contrat et la colonne «${NBSP}Contrôle${NBSP}» se calculent, poste de nuit compris. «${NBSP}Semainier${NBSP}»${NBSP}: vous choisissez une personne dans la liste, et ses horaires et ses heures de travail colorées s’affichent. «${NBSP}Synthèse${NBSP}» relit la semaine par personne et par jour.`,
      },
      {
        question: `Et quand le planning se refait chaque semaine${NBSP}?`,
        answer: `Un Excel tient très bien pour une équipe et une semaine type. Quand les absences, les remplacements et les changements de dernière minute obligent à tout refaire, puis à prévenir chacun, un logiciel qui relie le planning, les messages aux salariés et le pointage fait gagner ce temps. Si vous dirigez une entreprise de nettoyage, le test de la page outil vous dit lequel choisir pour le planning de vos agents.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand le planning se recopie chaque lundi, que chaque changement part par SMS un par un et que personne ne sait plus quelle version est la bonne, un outil qui tient le planning, prévient l’équipe et garde l’historique vous rend des heures. Décrivez-moi votre organisation${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels pour entreprises de nettoyage',
  },
}
