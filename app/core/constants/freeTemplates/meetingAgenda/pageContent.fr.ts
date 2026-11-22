import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  ASSOCIATION_BODIES_SOURCE,
  SARL_DECISIONS_SOURCE,
} from '~/core/constants/freeTemplates/attendanceList/pageShared'
import {
  CO_OWNERSHIP_MEETING_NOTICE_SOURCE,
  CSE_AGENDA_NOTICE_SOURCE,
  CSE_AGENDA_SETTING_SOURCE,
  MEETING_AGENDA_TEMPLATE_DOCX_PATH,
  MEETING_AGENDA_TEMPLATE_PDF_PATH,
  MEETING_AGENDA_TEMPLATE_UPDATED_AT,
  MEETING_AGENDA_TEMPLATE_XLSX_PATH,
  SMALL_CSE_WRITTEN_REQUESTS_SOURCE,
} from '~/core/constants/freeTemplates/meetingAgenda/pageShared'
import { NBSP } from '~/core/constants/typography'

export const MEETING_AGENDA_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Ordre du jour de réunion${NBSP}: modèle gratuit Word, Excel, PDF`,
    description: `Ordre du jour minuté et convocation de réunion, gratuits en PDF, Word et Excel${NBSP}: l’heure de chaque point se calcule, les réponses des convoqués se suivent.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle d’ordre du jour de réunion minuté et de convocation',
  },
  breadcrumbLabel: 'Ordre du jour',
  shareImage: {
    titleLines: ['Ordre du jour', 'et convocation gratuits'],
    highlight: 'Ordre du jour',
    subtitle: 'Ordre du jour minuté et convocation de réunion, en PDF, Word et Excel, horaires calculés',
    badge: 'Gratuit, sans inscription',
    icon: 'clipboard',
    alt: `Modèle d’ordre du jour de réunion gratuit${NBSP}: ordre du jour minuté et convocation en PDF, Word et Excel, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Ordre du jour',
    titleAfter: `${NBSP}: modèle gratuit PDF, Word et Excel (+ convocation de réunion)`,
    reassurances: ['Points minutés, heures calculées', 'Convocation et coupon-réponse', 'Sans inscription ni e-mail'],
    aboutTitle: 'À propos du modèle',
    description: `Un ordre du jour qui tient sur une page, et la convocation qui part avec. Chaque point a son heure, sa durée, la personne qui le porte et ce qu’on attend de la salle${NBSP}: une information, une discussion ou une décision. La convocation dit où, quand, pour quoi, avec quels documents, et demande une réponse avant une date. Dans l’Excel, vous saisissez l’heure de début et les durées${NBSP}: l’heure de chaque point et l’heure de fin se calculent.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. Avant d’écrire ce modèle, j’ai lu sur Légifrance et Service-Public les règles de convocation d’une assemblée de SARL, d’un CSE et d’une assemblée de copropriété, pour que la convocation vous dise quel délai vérifier.',
    updatedAt: MEETING_AGENDA_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les gérants, les chefs de projet, les secrétaires de CSE ou d’association et les syndics bénévoles. Trois fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime, l’Excel calcule les horaires et suit les réponses, le Word se modifie librement.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: MEETING_AGENDA_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: MEETING_AGENDA_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 feuilles, horaires calculés',
      },
      {
        label: 'Télécharger la version Word',
        href: MEETING_AGENDA_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 pages, modifiable',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à vos statuts et à votre organisation. Il ne remplace pas l’avis d’un juriste quand la régularité d’une assemblée ou d’une réunion du CSE est en jeu.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Un ordre du jour minuté, une convocation et le suivi des convoqués',
    intro: `Le PDF tient sur deux pages A4${NBSP}: l’ordre du jour, puis la convocation qui l’accompagne. L’Excel reprend l’ordre du jour avec les heures calculées, ajoute la liste des convoqués et une synthèse qui dit si tout est prêt.`,
    documents: [
      {
        title: 'Ordre du jour minuté',
        format: `Page 1 du PDF, feuille «${NBSP}Ordre du jour${NBSP}» de l’Excel`,
        items: [
          `Type de réunion en 6 cases${NBSP}: réunion d’équipe, réunion de projet ou avec un client, comité de direction, bureau ou conseil, CSE, assemblée générale`,
          'Objet, date, heure de début et heure de fin prévue, lieu ou lien de la visio, animateur, secrétaire de séance qui prendra les notes',
          `Une ligne «${NBSP}objectif${NBSP}»${NBSP}: ce que la réunion doit avoir produit quand elle se termine`,
          `10 points (15 dans l’Excel)${NBSP}: heure, sujet, qui le porte, durée en minutes, et une case pour dire si le point est pour information, pour discussion ou pour décision`,
          `Une colonne «${NBSP}à lire avant${NBSP}» pour le document que chacun doit avoir ouvert, avec l’ouverture et les points divers déjà placés en premier et en dernier`,
          `Durée totale, heure de fin et un encadré «${NBSP}points reportés${NBSP}» pour ce qui ne tient pas dans le temps`,
        ],
      },
      {
        title: 'Convocation',
        format: 'Page 2 du PDF',
        items: [
          'Expéditeur, destinataire, lieu et date d’envoi, mode d’envoi à cocher (e-mail, lettre simple, recommandé avec accusé de réception, lettre recommandée électronique, remise en main propre contre signature)',
          `Objet et texte de convocation à compléter${NBSP}: type de réunion, date, heure, lieu ou lien`,
          '8 lignes pour recopier l’ordre du jour, avec pour chacune information ou décision',
          `Documents joints à cocher${NBSP}: ordre du jour détaillé, projets de résolution, comptes ou rapports, devis, formulaire de pouvoir, formulaire de vote par correspondance`,
          `Date limite de réponse, signature, et un coupon-réponse à découper${NBSP}: présent, représenté par, excusé`,
          `Un tableau de repères des délais${NBSP}: assemblée de SARL, CSE de 50 salariés et plus, CSE de moins de 50 salariés, copropriété, association`,
        ],
      },
      {
        title: 'Suivi des convoqués et synthèse',
        format: `Feuilles «${NBSP}Convoqués${NBSP}» et «${NBSP}Synthèse${NBSP}» de l’Excel, sans équivalent dans le PDF`,
        items: [
          'Délai minimal de convocation en case jaune, et la date limite d’envoi qui en découle',
          `30 convoqués${NBSP}: nom, qualité, adresse ou e-mail, mode d’envoi, date d’envoi, réponse (présent, représenté, excusé, sans réponse), mandataire`,
          'Par ligne, le nombre de jours entre l’envoi et la réunion, et une alerte si la convocation est partie trop tard ou si la réponse manque',
          'Synthèse de la réunion et des envois, avec la part du temps consacrée aux décisions et les convocations parties en retard',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Préparer l’ordre du jour et la convocation en quatre étapes',
    intro: `Le PDF se remplit à la main ou se recopie dans un e-mail. Dans l’Excel, seules les cases blanches et les cases jaunes se saisissent${NBSP}: les heures, les totaux et les alertes se calculent seuls.`,
    steps: [
      {
        label: 'Étape 1',
        title: 'Partir de ce que la réunion doit produire',
        description: `Écrivez d’abord l’objectif en une phrase${NBSP}: «${NBSP}à la fin, nous aurons choisi le prestataire et fixé le planning${NBSP}». Listez ensuite les points qui y mènent. Je place les décisions tôt, quand tout le monde est encore là et attentif${NBSP}; un sujet qui ne sert pas l’objectif va dans les points reportés.`,
      },
      {
        label: 'Étape 2',
        title: 'Une durée et un nom pour chaque point',
        description: `Pour chaque point, notez qui le porte, combien de minutes il lui faut et ce qu’on attend de la salle${NBSP}: information, discussion ou décision. Dans l’Excel, l’heure de chaque point suit, et la feuille vous prévient si la fin dépasse l’heure que vous vous êtes fixée.`,
      },
      {
        label: 'Étape 3',
        title: 'Vérifier le délai, puis envoyer',
        description: `Cherchez le délai qui s’applique${NBSP}: vos statuts, votre règlement, ou la loi pour une SARL, un CSE ou une copropriété. Saisissez-le dans la feuille des convoqués, joignez les documents à lire, et envoyez avant la date limite affichée. Notez la date et le mode d’envoi de chacun${NBSP}: c’est votre preuve.`,
      },
      {
        label: 'Étape 4',
        title: 'Suivre les réponses jusqu’au jour J',
        description: `Reportez les réponses au fil de l’eau${NBSP}: présent, représenté, excusé. L’Excel signale ceux qui n’ont pas répondu. En séance, l’ordre du jour devient le fil${NBSP}: l’animateur annonce le point et son temps, et passe au suivant quand l’heure prévue arrive.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Qui fixe l’ordre du jour, et quel délai pour convoquer',
    intro: `Pour une réunion d’équipe ou de projet, je n’ai trouvé aucun texte qui impose un ordre du jour ou un délai. Pour une assemblée de SARL, un CSE ou une copropriété, la loi en fixe${NBSP}; dans une association, ce sont les statuts. Six repères, à confronter à vos statuts${NBSP}: ce modèle n’est pas un conseil juridique.`,
    facts: [
      {
        contextLabel: 'SARL',
        title: `Assemblée d’associés${NBSP}: 15${NBSP}jours, l’ordre du jour dans la lettre`,
        text: `Les associés sont convoqués par lettre recommandée au moins 15${NBSP}jours avant l’assemblée, sauf délai plus long dans les statuts, et la lettre indique l’ordre du jour. Le courriel est possible pour les associés qui l’ont accepté au moins 20${NBSP}jours avant l’assemblée suivante, avec le même délai de 15${NBSP}jours. Le texte des résolutions et le rapport du gérant leur sont envoyés dans ce délai, avec les comptes annuels pour l’assemblée qui les approuve.`,
        sourceName: SARL_DECISIONS_SOURCE.name,
        sourceUrl: SARL_DECISIONS_SOURCE.url,
      },
      {
        contextLabel: 'CSE de 50 salariés et plus, Code du travail, L2315-29',
        title: 'L’ordre du jour s’écrit à deux',
        text: `L’ordre du jour de chaque réunion du CSE est établi par le président et le secrétaire. Les consultations rendues obligatoires par la loi, un règlement ou un accord collectif y sont inscrites de plein droit, par le président ou par le secrétaire. La colonne «${NBSP}porté par${NBSP}» du modèle sert aussi à garder trace de qui a demandé chaque point.`,
        sourceName: CSE_AGENDA_SETTING_SOURCE.name,
        sourceUrl: CSE_AGENDA_SETTING_SOURCE.url,
      },
      {
        contextLabel: 'CSE de 50 salariés et plus, Code du travail, L2315-30',
        title: 'Trois jours au moins avant la réunion',
        text: `Le président communique l’ordre du jour aux membres du comité au moins trois jours avant la réunion, et dans le même délai à l’agent de contrôle de l’inspection du travail et à l’agent des services de prévention des organismes de sécurité sociale. Ajoutez ces deux destinataires à la liste des convoqués de l’Excel${NBSP}: la date d’envoi reste notée à côté de leur nom.`,
        sourceName: CSE_AGENDA_NOTICE_SOURCE.name,
        sourceUrl: CSE_AGENDA_NOTICE_SOURCE.url,
      },
      {
        contextLabel: 'CSE de moins de 50 salariés, Code du travail, L2315-22',
        title: 'Les demandes des élus, par écrit, deux jours ouvrables avant',
        text: `Sauf circonstances exceptionnelles, les membres de la délégation du personnel remettent à l’employeur une note écrite qui expose l’objet de leurs demandes deux jours ouvrables avant la réunion. L’employeur y répond par écrit au plus tard six jours ouvrables après la réunion. Écrivez cette date limite sur la convocation, pour que les demandes arrivent à temps.`,
        sourceName: SMALL_CSE_WRITTEN_REQUESTS_SOURCE.name,
        sourceUrl: SMALL_CSE_WRITTEN_REQUESTS_SOURCE.url,
      },
      {
        contextLabel: 'Copropriété',
        title: `21${NBSP}jours calendaires, une question par vote`,
        text: `La convocation part au moins 21${NBSP}jours calendaires avant l’assemblée, sauf délai plus long dans le règlement de copropriété ou urgence. Elle donne le lieu, la date et l’heure, et un ordre du jour où chaque question est formulée clairement, soumise à un vote séparé, avec la majorité requise. Un sujet absent de l’ordre du jour peut être discuté, pas voté${NBSP}; une question demandée trop tard passe à l’assemblée suivante.`,
        sourceName: CO_OWNERSHIP_MEETING_NOTICE_SOURCE.name,
        sourceUrl: CO_OWNERSHIP_MEETING_NOTICE_SOURCE.url,
      },
      {
        contextLabel: 'Association loi 1901',
        title: 'Les statuts fixent la convocation',
        text: `Pour une association, Service-Public renvoie aux statuts ou au règlement intérieur${NBSP}: ce sont eux qui fixent les conditions de convocation, de vote et de quorum de l’assemblée générale. Relisez l’article de vos statuts avant d’envoyer (délai, forme, qui convoque, documents à joindre), puis saisissez ce délai dans l’Excel pour obtenir la date limite d’envoi.`,
        sourceName: ASSOCIATION_BODIES_SOURCE.name,
        sourceUrl: ASSOCIATION_BODIES_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Ordre du jour${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle d’ordre du jour est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Le PDF, l’Excel et le Word se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne «${NBSP}modèle proposé par Dibodev${NBSP}» en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Ordre du jour et convocation${NBSP}: quelle différence${NBSP}?`,
        answer: `L’ordre du jour est la liste des sujets, dans l’ordre où ils seront traités. La convocation est l’invitation${NBSP}: elle dit qui est attendu, où, quand, et elle porte l’ordre du jour. Pour une assemblée de SARL ou de copropriété, la convocation doit contenir l’ordre du jour${NBSP}; c’est pour cela que le modèle les met l’une à la suite de l’autre.`,
      },
      {
        question: `Combien de points mettre à l’ordre du jour${NBSP}?`,
        answer: `Aucun texte ne fixe de nombre. La bonne limite, c’est le temps${NBSP}: additionnez les durées, comparez à l’heure de fin, et retirez ce qui dépasse. Un point égale une question, formulée pour qu’on sache ce qu’on attend de la salle. Ce qui ne tient pas va dans les points reportés, avec une date.`,
      },
      {
        question: `Peut-on voter un point ajouté en «${NBSP}questions diverses${NBSP}»${NBSP}?`,
        answer: `En copropriété, non${NBSP}: Service-Public le dit nettement, un sujet absent de l’ordre du jour peut être discuté, pas voté. Pour une autre assemblée, vérifiez vos statuts${NBSP}; dans le doute, inscrivez le point avec sa décision attendue plutôt que de compter sur les questions diverses. Dans une réunion d’équipe, c’est une question d’usage.`,
      },
      {
        question: `Quel délai pour envoyer une convocation${NBSP}?`,
        answer: `Au moins 15${NBSP}jours pour une assemblée d’associés de SARL, au moins 21${NBSP}jours calendaires pour une assemblée de copropriété, au moins trois jours pour l’ordre du jour d’un CSE de 50 salariés et plus. Dans une association, ce sont les statuts. Statuts et règlement peuvent allonger ces délais. Pour une réunion d’équipe, aucun texte${NBSP}: laissez à chacun le temps de lire les documents.`,
      },
      {
        question: `Faut-il envoyer la convocation en recommandé${NBSP}?`,
        answer: `Pour une SARL, oui, sauf pour les associés qui ont accepté le courriel. En copropriété, la convocation part par voie électronique, sauf si le copropriétaire a demandé le recommandé avec avis de réception, ou contre émargement en main propre. Pour le CSE, l’article sur l’ordre du jour que j’ai lu ne fixe pas la forme. Dans tous les cas, gardez la date et le mode d’envoi de chacun${NBSP}: la feuille des convoqués est faite pour ça.`,
      },
      {
        question: `Ordre du jour, feuille de présence, compte rendu${NBSP}: dans quel ordre${NBSP}?`,
        answer: `L’ordre du jour et la convocation partent avant la réunion. La feuille de présence se signe à l’arrivée. Le compte rendu s’écrit après, en reprenant les points dans le même ordre, avec ce qui a été décidé. Les trois existent dans les modèles gratuits du site${NBSP}: notre modèle de feuille de présence et notre modèle de compte rendu de réunion complètent celui-ci.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Trois feuilles. «${NBSP}Ordre du jour${NBSP}»${NBSP}: vous saisissez l’heure de début en case jaune, puis une durée par point, et l’heure de début et de fin de chaque point se calcule, avec une alerte si la réunion dépasse l’heure de fin souhaitée. «${NBSP}Convoqués${NBSP}»${NBSP}: vous saisissez le délai de convocation, la date d’envoi et la réponse de chacun, et la feuille signale les envois tardifs et les réponses manquantes. «${NBSP}Synthèse${NBSP}» résume les deux. Les lignes «${NBSP}Exemple${NBSP}» montrent le calcul${NBSP}: effacez-les.`,
      },
      {
        question: `Et quand les réunions s’enchaînent${NBSP}?`,
        answer: `Un ordre du jour papier et un Excel suffisent pour quelques réunions par mois. Au-delà, recopier les points d’une réunion à l’autre, relancer les convoqués et retrouver qui a répondu prend du temps${NBSP}: un outil qui garde tout au même endroit le fait à votre place. Si vos réunions servent à des formations ou à des cours, le test de la page outil vous dit quel logiciel choisir.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand les réunions se suivent, que les convocations partent à trente personnes et que les réponses arrivent par e-mail, par SMS et dans le couloir, un outil qui garde ordres du jour, convoqués et réponses au même endroit vous rend des heures. Décrivez-moi votre organisation${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels pour organismes de formation',
  },
}
