import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  ASSOCIATION_BODIES_SOURCE,
  ATTENDANCE_LIST_TEMPLATE_PDF_PATH,
  ATTENDANCE_LIST_TEMPLATE_UPDATED_AT,
  ATTENDANCE_LIST_TEMPLATE_XLSX_PATH,
  CO_OWNERSHIP_MEETING_SOURCE,
  DATA_PROTECTION_PRINCIPLES_SOURCE,
  SARL_DECISIONS_SOURCE,
  SHAREHOLDERS_MEETING_ATTENDANCE_SOURCE,
  WORKING_HOURS_COUNT_SOURCE,
} from '~/core/constants/freeTemplates/attendanceList/pageShared'
import { NBSP } from '~/core/constants/typography'

export const ATTENDANCE_LIST_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Feuille et liste de présence${NBSP}: modèle gratuit PDF et Excel`,
    description: `Feuille de présence de réunion ou d’assemblée (pouvoirs, quorum) et liste de présence du mois, gratuites en PDF et Excel, totaux calculés. Sans inscription.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle de feuille de présence de réunion ou d’assemblée et de liste de présence mensuelle',
  },
  breadcrumbLabel: 'Feuille de présence',
  shareImage: {
    titleLines: ['Feuille de présence', 'gratuite à imprimer'],
    highlight: 'Feuille de présence',
    subtitle: 'Feuille de réunion ou d’assemblée et liste de présence du mois, en PDF et Excel, totaux calculés',
    badge: 'Gratuit, sans inscription',
    icon: 'clipboard',
    alt: `Modèle de feuille de présence gratuit${NBSP}: feuille de réunion ou d’assemblée et liste de présence mensuelle en PDF et Excel, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Feuille de présence',
    titleAfter: `${NBSP}: modèle gratuit PDF et Excel (+ liste de présence du mois)`,
    reassurances: [
      'Réunion, assemblée ou événement',
      'Liste du mois avec les totaux par code',
      'Sans inscription ni e-mail',
    ],
    aboutTitle: 'À propos du modèle',
    description: `Deux documents pour deux usages. La feuille de présence sert un jour donné${NBSP}: une réunion, une assemblée générale, un conseil ou un événement, avec une signature par participant, les pouvoirs des membres représentés et le total qui dit si le quorum est atteint. La liste de présence sert sur la durée${NBSP}: une équipe, un club ou un groupe sur un mois, un code par jour (présent, absent, congé, maladie) et les totaux de chacun. L’Excel compte tout seul.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai lu le Code de commerce sur les assemblées, les fiches Service-Public sur les SARL, les copropriétés et les associations, et les principes de la CNIL, pour que chaque case ait sa raison d’être.',
    updatedAt: ATTENDANCE_LIST_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les dirigeants, les secrétaires d’association, les syndics bénévoles, les chefs d’équipe et les responsables de club. Deux fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime, l’Excel compte les présents, les pouvoirs et les jours.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: ATTENDANCE_LIST_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: ATTENDANCE_LIST_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 feuilles, totaux calculés',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à vos statuts et à votre organisation. Il ne remplace pas l’avis d’un juriste pour une assemblée contestée.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Une feuille de présence, une liste de présence du mois et un récapitulatif',
    intro: `Le PDF tient sur deux pages A4${NBSP}: la feuille de présence d’une réunion ou d’une assemblée, en portrait, puis la liste de présence du mois, en paysage pour loger les 31 jours. L’Excel reprend les deux, avec des lignes en plus, et ajoute un récapitulatif du mois et de la dernière réunion.`,
    documents: [
      {
        title: 'Feuille de présence d’une réunion ou d’une assemblée',
        format: `Page 1 du PDF, feuille «${NBSP}Feuille de réunion${NBSP}» de l’Excel`,
        items: [
          `Organisation (société, association, copropriété…) et type en 6 cases${NBSP}: réunion d’équipe, réunion avec des partenaires, assemblée générale ordinaire ou extraordinaire, conseil, bureau ou comité, événement`,
          'Objet ou ordre du jour, date, heure de début, lieu ou lien de la visio, organisateur, président de séance',
          `14 lignes de participants (30 dans l’Excel)${NBSP}: nom, prénom, structure ou fonction, heure d’arrivée, voix, signature${NBSP}; l’Excel ajoute un statut à choisir, présent, représenté, excusé ou absent`,
          `Membres représentés${NBSP}: membre, mandataire présent, voix, case «${NBSP}pouvoir joint${NBSP}»${NBSP}; l’Excel signale un pouvoir sans mandataire, un mandataire qui n’est pas sur la liste des présents, ou qui détient plus de pouvoirs que vos statuts n’en permettent`,
          `Totaux${NBSP}: présents, représentés, voix présentes et représentées, quorum atteint ou non${NBSP}; dans l’Excel, le quorum de vos statuts se saisit en case jaune et la réponse s’affiche`,
          'Feuille arrêtée à telle heure et certifiée exacte par le président et le secrétaire de séance, encadré d’information des participants (qui tient la feuille, jusqu’à quand, à qui s’adresser)',
        ],
      },
      {
        title: 'Liste de présence du mois',
        format: `Page 2 du PDF en paysage, feuille «${NBSP}Liste du mois${NBSP}» de l’Excel`,
        items: [
          'Mois, année, équipe, service ou groupe, responsable qui tient la liste',
          `16 personnes en lignes (20 dans l’Excel), les 31 jours en colonnes${NBSP}; dans l’Excel, le premier jour du mois en case jaune fait suivre les dates, les initiales des jours et les week-ends grisés`,
          `Un code par case${NBSP}: P présent, A absent, C congé, M maladie, / jour non travaillé${NBSP}; liste déroulante et couleur par code dans l’Excel`,
          `En bout de ligne, le total de P, A, C et M de chaque personne, et dans l’Excel son taux de présence${NBSP}: jours P divisés par P + A + M, les congés ne comptant pas`,
          'En bas, les présents de chaque jour, et dans l’Excel les absents du jour (A + M)',
          'Observations (remplacements, changements d’équipe), visa du responsable, rappel sur les heures de travail et sur la maladie',
        ],
      },
      {
        title: 'Récapitulatif',
        format: `Feuille «${NBSP}Récapitulatif${NBSP}» de l’Excel, sans équivalent dans le PDF`,
        items: [
          'Mois affiché, jours du lundi au vendredi du mois, seuil d’alerte en case jaune (3 jours d’absence par défaut)',
          `Par personne${NBSP}: P, A, C, M, taux de présence, jours d’absence (A + M) et mention «${NBSP}À suivre${NBSP}» dès que le seuil est atteint`,
          'Pour l’équipe, les totaux par code, le taux de présence moyen et le nombre de personnes à suivre',
          'La dernière réunion en un coup d’œil, reprise de la feuille de réunion, objet, date, présents, représentés, voix et quorum',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir la feuille de présence en quatre étapes',
    intro: `Le PDF se remplit à la main et circule dans la salle. Dans l’Excel, seules les cases blanches et les cases jaunes se saisissent${NBSP}: totaux, voix, quorum et taux de présence se calculent seuls.`,
    steps: [
      {
        label: 'Étape 1',
        title: 'Avant la réunion, l’en-tête et l’encadré d’information',
        description: `Cochez le type, notez l’objet, la date, le lieu et le président de séance. Pour une assemblée, saisissez dans l’Excel le nombre de voix, le quorum et le nombre de pouvoirs que vos statuts fixent, puis la liste des convoqués. Remplissez une fois pour toutes l’encadré d’information${NBSP}: qui tient la feuille, jusqu’à quand, à qui s’adresser.`,
      },
      {
        label: 'Étape 2',
        title: 'À l’arrivée, une ligne et une signature',
        description: `Chacun écrit son nom, sa structure ou sa fonction, l’heure d’arrivée, et signe. Un membre absent qui a donné pouvoir va dans le tableau des représentés, avec le nom de son mandataire présent${NBSP}; pour une assemblée, agrafez le pouvoir signé à la feuille.`,
      },
      {
        label: 'Étape 3',
        title: 'Avant le premier vote, les totaux',
        description: `Comptez les présents, les représentés et les voix, et cochez si le quorum est atteint. Arrêtez la feuille à l’heure dite, barrez les lignes vides, et faites signer le président et le secrétaire de séance${NBSP}: la feuille se range avec le procès-verbal.`,
      },
      {
        label: 'Étape 4',
        title: 'Chaque jour du mois, un code par personne',
        description: `Sur la liste du mois, le responsable note P, A, C ou M dans la case du jour, et / les jours non travaillés. Pour une maladie, M suffit, sans le motif. En fin de mois, les totaux de chaque ligne sont déjà faits dans l’Excel, et le récapitulatif signale qui cumule des absences.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Quand la feuille de présence est obligatoire, et ce qu’elle ne remplace pas',
    intro: `La feuille de présence est imposée pour certaines assemblées, pas pour une réunion d’équipe. Six règles disent quand elle compte et ce qu’on y écrit${NBSP}; le modèle ne remplace pas l’avis d’un juriste si une assemblée est contestée.`,
    facts: [
      {
        contextLabel: 'SA, Code de commerce, L225-114 et R225-95',
        title: `Société anonyme${NBSP}: une feuille à chaque assemblée, pouvoirs annexés`,
        text: `Chaque assemblée d’actionnaires a sa feuille de présence, à laquelle sont annexés les pouvoirs donnés à chaque mandataire, sinon les délibérations peuvent être annulées. Elle mentionne les actionnaires présents, représentés ou votant à distance, avec leur domicile, leurs actions et leurs voix${NBSP}; les présents et les mandataires l’émargent, et le bureau la certifie exacte. Une assemblée tenue entièrement à distance se passe d’émargement.`,
        sourceName: SHAREHOLDERS_MEETING_ATTENDANCE_SOURCE.name,
        sourceUrl: SHAREHOLDERS_MEETING_ATTENDANCE_SOURCE.url,
      },
      {
        contextLabel: 'SARL et SAS',
        title: 'Le procès-verbal nomme les associés présents ou représentés',
        text: `Les fiches Service-Public sur les décisions d’une SARL ou d’une SAS ne parlent pas de feuille de présence, mais le procès-verbal doit donner les noms des associés présents ou représentés et le nombre de parts ou d’actions de chacun. La feuille, signée à l’arrivée, est le moyen simple de remplir ce passage sans oubli. Dans une SAS, les statuts fixent le reste.`,
        sourceName: SARL_DECISIONS_SOURCE.name,
        sourceUrl: SARL_DECISIONS_SOURCE.url,
      },
      {
        contextLabel: 'Copropriété',
        title: 'Obligatoire à chaque assemblée générale de copropriétaires',
        text: `Une feuille de présence est obligatoirement tenue à chaque assemblée. Elle donne le nom et le domicile de chaque copropriétaire et de chaque mandataire, s’il est présent, représenté, à distance ou s’il a voté par correspondance, et le nombre de voix de chacun. Elle se signe à la main ou par voie électronique, le président de séance la certifie exacte, et elle est annexée au procès-verbal.`,
        sourceName: CO_OWNERSHIP_MEETING_SOURCE.name,
        sourceUrl: CO_OWNERSHIP_MEETING_SOURCE.url,
      },
      {
        contextLabel: 'Association loi 1901',
        title: 'Ce sont les statuts qui décident',
        text: `Les statuts fixent librement la composition de l’assemblée générale, les membres qui votent, les conditions de convocation, de vote et de quorum. Si vos statuts prévoient un quorum ou limitent les procurations, la feuille de présence est la preuve qu’ils ont été respectés${NBSP}: le modèle compte les présents, les représentés et les pouvoirs par mandataire.`,
        sourceName: ASSOCIATION_BODIES_SOURCE.name,
        sourceUrl: ASSOCIATION_BODIES_SOURCE.url,
      },
      {
        contextLabel: 'Données personnelles',
        title: 'Peu de données, une durée fixée, des personnes informées',
        text: `Pour la CNIL, on ne collecte que les données strictement nécessaires au but du fichier, on fixe une durée de conservation, et seules les personnes autorisées y ont accès. Une feuille de présence n’a besoin ni de date de naissance ni d’adresse personnelle, sauf exigence d’un texte comme en SA ou en copropriété. L’article 13 du RGPD demande d’informer les personnes au moment de la collecte${NBSP}: c’est l’encadré du modèle.`,
        sourceName: DATA_PROTECTION_PRINCIPLES_SOURCE.name,
        sourceUrl: DATA_PROTECTION_PRINCIPLES_SOURCE.url,
      },
      {
        contextLabel: 'Code du travail, D3171-8',
        title: 'Une liste de présence ne compte pas les heures de travail',
        text: `Quand les salariés d’une équipe n’ont pas le même horaire collectif affiché, l’employeur décompte chaque jour leurs heures de début et de fin, ou le nombre d’heures faites, et récapitule chaque semaine les heures de chacun. Un P dans une case ne dit rien de tout cela${NBSP}: pour les heures, c’est notre modèle de fiche de pointage, et la liste de présence reste un outil d’organisation.`,
        sourceName: WORKING_HOURS_COUNT_SOURCE.name,
        sourceUrl: WORKING_HOURS_COUNT_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Feuille de présence${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de feuille de présence est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Le PDF et l’Excel se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne «${NBSP}modèle proposé par Dibodev${NBSP}» en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Feuille de présence ou liste de présence${NBSP}: quelle différence${NBSP}?`,
        answer: `La feuille de présence couvre un seul moment, une réunion ou une assemblée${NBSP}: chacun signe en arrivant, et elle prouve qui était là ce jour-là. La liste de présence suit un groupe dans la durée, ici sur un mois${NBSP}: pas de signature, un code par jour et des totaux. On dit aussi «${NBSP}fiche de présence${NBSP}» pour l’une ou l’autre.`,
      },
      {
        question: `La feuille de présence est-elle obligatoire${NBSP}?`,
        answer: `Pour une assemblée d’actionnaires de SA et pour une assemblée de copropriétaires, oui, à chaque fois. Dans une SARL ou une SAS, le procès-verbal doit nommer les associés présents ou représentés, et la feuille sert à le remplir. Dans une association, tout dépend des statuts. Pour une réunion d’équipe ou un événement, je n’ai trouvé aucun texte qui l’impose${NBSP}: c’est une preuve utile, pas une formalité.`,
      },
      {
        question: `Comment compter les pouvoirs et le quorum${NBSP}?`,
        answer: `Un membre représenté ne signe pas${NBSP}: c’est son mandataire, présent, qui est noté à côté de lui, et le pouvoir signé se joint à la feuille. Le quorum et le nombre de pouvoirs par personne sont fixés par vos statuts ou par les textes de votre forme juridique. Dans l’Excel, vous les saisissez en case jaune${NBSP}: la feuille compare au quorum les voix présentes et représentées, et signale un mandataire qui dépasse le nombre permis. Si vos statuts ne comptent que les présents, comparez au total des présents.`,
      },
      {
        question: `Feuille de présence et fiche de pointage${NBSP}: quelle différence${NBSP}?`,
        answer: `La feuille de présence dit qui était là${NBSP}; la fiche de pointage dit combien de temps. Quand des salariés n’ont pas le même horaire collectif affiché, le Code du travail demande à l’employeur de décompter chaque jour leurs heures de début et de fin, puis de les récapituler chaque semaine (article D3171-8)${NBSP}: une liste de présence n’y suffit pas. Pour les heures et les heures supplémentaires, prenez notre modèle de fiche de pointage.`,
      },
      {
        question: `Et pour une formation${NBSP}?`,
        answer: `Prenez plutôt notre modèle de feuille d’émargement formation, dans les modèles gratuits${NBSP}: il est fait pour les organismes de formation, avec une signature par demi-journée, le numéro de déclaration d’activité et les heures par stagiaire. La feuille de présence de cette page vise les réunions, les assemblées et les événements, et la liste du mois les équipes et les groupes.`,
      },
      {
        question: `Quelles informations noter, et combien de temps les garder${NBSP}?`,
        answer: `Le strict nécessaire${NBSP}: nom, prénom, structure ou fonction, heure d’arrivée et signature suffisent pour une réunion, plus le domicile et les voix pour une assemblée de SA ou de copropriété. Pour une absence pour maladie, notez M, jamais la nature de la maladie${NBSP}: la CNIL rappelle que l’employeur n’a pas à détenir d’informations médicales sur son personnel. Fixez une durée de conservation, écrivez-la dans l’encadré d’information, puis détruisez la feuille${NBSP}; celle d’une assemblée suit le procès-verbal.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Trois feuilles. «${NBSP}Liste du mois${NBSP}»${NBSP}: vous saisissez le premier jour du mois en case jaune et un code par jour, et les totaux par code, le taux de présence et les présents du jour se calculent. «${NBSP}Feuille de réunion${NBSP}»${NBSP}: vous donnez un statut à chaque participant, et les présents, les représentés, les voix et le quorum se calculent, avec des alertes sur les pouvoirs. «${NBSP}Récapitulatif${NBSP}» reprend le mois par personne, signale qui cumule des absences et résume la dernière réunion. Les lignes «${NBSP}Exemple${NBSP}» montrent le calcul${NBSP}: effacez-les.`,
      },
      {
        question: `Et quand les listes se multiplient${NBSP}?`,
        answer: `Une feuille papier et un Excel suffisent pour quelques réunions et une équipe. Au-delà, recopier les signatures, relancer les pouvoirs et additionner les mois prend du temps${NBSP}: un outil qui garde chaque présence au même endroit le fait à votre place. Si vos listes servent à des formations ou à des cours, le test de la page outil vous dit quel logiciel choisir.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand les feuilles signées s’empilent, que les pouvoirs arrivent par e-mail et que les listes du mois se recopient d’un fichier à l’autre, un outil qui garde chaque présence au même endroit vous rend des heures. Décrivez-moi votre organisation${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels pour organismes de formation',
  },
}
