import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  STAFF_DATA_PRINCIPLES_SOURCE,
  STAFF_REGISTER_DIGITAL_SOURCE,
  STAFF_REGISTER_ENTRIES_SOURCE,
  STAFF_REGISTER_KEEPING_SOURCE,
  STAFF_REGISTER_PENALTY_SOURCE,
  STAFF_REGISTER_RETENTION_SOURCE,
  STAFF_REGISTER_TEMPLATE_DOCX_PATH,
  STAFF_REGISTER_TEMPLATE_PDF_PATH,
  STAFF_REGISTER_TEMPLATE_UPDATED_AT,
  STAFF_REGISTER_TEMPLATE_XLSX_PATH,
} from '~/core/constants/freeTemplates/staffRegister/pageShared'
import { NBSP } from '~/core/constants/typography'

export const STAFF_REGISTER_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Registre unique du personnel gratuit${NBSP}: Excel, Word, PDF`,
    description: `Registre unique du personnel gratuit en PDF, Word et Excel${NBSP}: les mentions du Code du travail, stagiaires, service civique, effectif calculé.`,
    inLanguage: 'fr-FR',
    schemaAbout:
      'Modèle de registre unique du personnel avec la partie des stagiaires et des volontaires en service civique',
  },
  breadcrumbLabel: 'Registre unique du personnel',
  shareImage: {
    titleLines: ['Registre unique', 'du personnel gratuit'],
    highlight: 'Registre unique',
    subtitle:
      'Salariés, stagiaires et volontaires en service civique, en PDF, Word et Excel, mentions du Code du travail',
    badge: 'Gratuit, sans inscription',
    icon: 'fileText',
    alt: `Modèle de registre unique du personnel gratuit${NBSP}: salariés, stagiaires et volontaires en service civique en PDF, Word et Excel, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Registre unique du personnel',
    titleAfter: `${NBSP}: modèle gratuit PDF, Word et Excel (+ stagiaires et service civique)`,
    reassurances: [
      'Toutes les mentions du Code du travail',
      'Stagiaires et service civique à part',
      'Sans inscription ni e-mail',
    ],
    aboutTitle: 'À propos du modèle',
    description: `Le registre unique du personnel est la liste, tenue dans l’ordre des embauches, de toutes les personnes qui travaillent dans un établissement, avec les mentions que fixe le Code du travail. Ce n’est ni une feuille de présence ni une fiche de pointage${NBSP}: il ne dit pas qui était là ni combien d’heures, il dit qui fait partie de l’effectif, depuis quand et sous quel contrat. Chaque colonne du modèle correspond à une mention imposée, et rien de plus.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai lu un à un les articles du Code du travail sur le registre, la fiche Service-Public sur les registres obligatoires et le référentiel de la CNIL sur les durées de conservation, pour que chaque colonne renvoie à un texte.',
    updatedAt: STAFF_REGISTER_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les artisans, commerçants, associations et TPE qui embauchent leur premier salarié, et pour ceux qui reprennent un registre en retard. Trois fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime et se remplit à l’encre, l’Excel contrôle les lignes et compte l’effectif, le Word se modifie librement.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: STAFF_REGISTER_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: STAFF_REGISTER_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 feuilles, effectif calculé',
      },
      {
        label: 'Télécharger la version Word',
        href: STAFF_REGISTER_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 pages, modifiable',
      },
    ],
    footnote: `Modèle libre d’utilisation, fait à partir des textes en vigueur le jour de sa mise à jour. Ce n’est pas un conseil juridique${NBSP}: pour un cas particulier, demandez à votre gestionnaire de paie ou à un juriste.`,
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Le registre des salariés, la partie des stagiaires et des volontaires, et une synthèse',
    intro: `Le PDF tient sur deux pages A4 en paysage, pour loger toutes les colonnes${NBSP}: les salariés sur la première, les stagiaires, les volontaires en service civique et une notice sur la seconde. L’Excel reprend les deux avec plus de lignes, contrôle chaque inscription et ajoute une synthèse de l’année.`,
    documents: [
      {
        title: 'Registre des salariés',
        format: `Page 1 du PDF, feuille «${NBSP}Registre du personnel${NBSP}» de l’Excel`,
        items: [
          'En-tête de l’établissement (raison sociale, adresse, SIRET), date d’ouverture du registre et numéro de feuillet, pour suivre les pages papier',
          `10 lignes de salariés (60 dans l’Excel), numérotées dans l’ordre des embauches${NBSP}: nom et prénoms, nationalité, date de naissance, sexe, emploi, qualification, dates d’entrée et de sortie`,
          `Une colonne des mentions de contrat, avec les mots du Code du travail${NBSP}: «${NBSP}contrat à durée déterminée${NBSP}», «${NBSP}salarié à temps partiel${NBSP}», «${NBSP}apprenti${NBSP}», «${NBSP}contrat de professionnalisation${NBSP}», «${NBSP}salarié temporaire${NBSP}», mise à disposition par un groupement d’employeurs${NBSP}; listes déroulantes dans l’Excel`,
          'Pour un travailleur étranger, le type et le numéro d’ordre du titre qui l’autorise à travailler, et la date de l’autorisation d’embauche ou de licenciement quand elle est requise, ou à défaut celle de la demande',
          `Un encadré pour les salariés temporaires et mis à disposition, en face de leur numéro d’ordre${NBSP}: nom et adresse de l’entreprise de travail temporaire ou du groupement`,
          `Dans l’Excel, présent ou non à la date choisie, fin de la durée de conservation, et une colonne «${NBSP}Contrôle${NBSP}»${NBSP}: date d’entrée manquante, sortie avant l’entrée, embauche inscrite hors de l’ordre, entreprise de travail temporaire sans nom, titre de travail à vérifier`,
        ],
      },
      {
        title: 'Stagiaires, volontaires en service civique et notice',
        format: `Page 2 du PDF, feuille «${NBSP}Stagiaires et volontaires${NBSP}» de l’Excel`,
        items: [
          `8 lignes de stagiaires (30 dans l’Excel), dans l’ordre d’arrivée${NBSP}: nom et prénoms, dates de début et de fin du stage ou de la période de formation en milieu professionnel, nom et prénoms du tuteur, lieu de présence du stagiaire`,
          `5 lignes de volontaires en service civique (20 dans l’Excel)${NBSP}: nom et prénoms, la seule mention exigée, et une date d’arrivée qui montre l’ordre`,
          'Dans l’Excel, stage en cours ou terminé à la date choisie et fin de la durée de conservation de chaque ligne',
          `Une notice qui tient en un encadré${NBSP}: qui tient le registre, l’ordre des inscriptions, les mentions à ajouter en cours de contrat, la copie des titres de travail, le registre numérique, la conservation et la sanction, avec l’article de chaque règle`,
          `Un encadré d’information des salariés${NBSP}: à quoi servent les données, qui les tient, combien de temps, à qui s’adresser`,
        ],
      },
      {
        title: 'Synthèse de l’année',
        format: `Feuille «${NBSP}Synthèse${NBSP}» de l’Excel, sans équivalent dans le PDF`,
        items: [
          'Année en case jaune, personnes inscrites et présentes au 1er janvier et au 31 décembre, entrées et sorties de l’année',
          `Un tableau mois par mois${NBSP}: entrées, sorties et présents en fin de mois`,
          'Présents à la date choisie, par mention de contrat (CDD, temps partiel, apprentis, contrats de professionnalisation, temporaires, groupement)',
          'Stagiaires et volontaires arrivés dans l’année, et nombre de lignes dont les cinq ans de conservation sont écoulés',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Tenir le registre unique du personnel en quatre étapes',
    intro: `Le PDF se remplit à l’encre, ligne après ligne. Dans l’Excel, seules les cases blanches et les cases jaunes se saisissent${NBSP}: numéros, présence, conservation, contrôles et synthèse se calculent seuls.`,
    steps: [
      {
        label: 'Étape 1',
        title: 'À la première embauche, l’en-tête',
        description: `Notez la raison sociale, l’adresse et le SIRET de l’établissement, et la date d’ouverture du registre. Une entreprise qui a plusieurs établissements tient un registre dans chacun${NBSP}: un fichier ou un cahier par adresse.`,
      },
      {
        label: 'Étape 2',
        title: 'À chaque embauche, une ligne à la suite',
        description: `Le jour de l’embauche, inscrivez le salarié à la suite du dernier, avec toutes ses mentions. Ne laissez pas de ligne vide et ne renumérotez jamais${NBSP}: le numéro d’ordre suit l’ordre des embauches. Pour un travailleur étranger, joignez au registre la copie de son titre de travail.`,
      },
      {
        label: 'Étape 3',
        title: 'Quand un événement survient, la mention le jour même',
        description: `Ce qui arrive après l’embauche s’écrit au moment où cela arrive${NBSP}: la date de sortie le jour du départ, une autorisation reçue, un nouveau titre de travail. La ligne du salarié reste dans le registre après son départ${NBSP}; seule la date de sortie la ferme.`,
      },
      {
        label: 'Étape 4',
        title: 'Pour un stagiaire ou un volontaire, la page 2',
        description: `Un stagiaire ou un volontaire en service civique ne va pas dans la liste des salariés, mais dans la partie qui lui est réservée, dans l’ordre d’arrivée. Pour un stagiaire, notez aussi les dates du stage, le tuteur et le lieu où il se trouve${NBSP}; pour un volontaire, le nom et les prénoms suffisent.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Six règles du Code du travail et de la CNIL',
    intro: `Le registre unique du personnel est une obligation du Code du travail, pas un usage. Six règles disent qui le tient, ce qu’on y écrit, comment et combien de temps${NBSP}; elles résument les textes lus le jour de la mise à jour et ne remplacent pas l’avis d’un juriste.`,
    facts: [
      {
        contextLabel: 'Code du travail, L1221-13',
        title: 'Un registre par établissement, dans l’ordre des embauches',
        text: `Un registre unique du personnel est tenu dans tout établissement où sont employés des salariés. Les noms et prénoms de tous les salariés y sont inscrits dans l’ordre des embauches, au moment de l’embauche et de façon indélébile. Les stagiaires et les volontaires en service civique vont dans une partie à part, dans l’ordre de leur arrivée.`,
        sourceName: STAFF_REGISTER_KEEPING_SOURCE.name,
        sourceUrl: STAFF_REGISTER_KEEPING_SOURCE.url,
      },
      {
        contextLabel: 'Code du travail, D1221-23',
        title: 'Les mentions de chaque salarié',
        text: `Nationalité, date de naissance, sexe, emploi, qualification, dates d’entrée et de sortie${NBSP}; la date de l’autorisation d’embauche ou de licenciement quand elle est requise${NBSP}; pour un travailleur étranger, le type et le numéro d’ordre de son titre de travail. Puis, selon le cas, «${NBSP}contrat à durée déterminée${NBSP}», «${NBSP}salarié à temps partiel${NBSP}», «${NBSP}apprenti${NBSP}» ou «${NBSP}contrat de professionnalisation${NBSP}», «${NBSP}salarié temporaire${NBSP}» avec le nom et l’adresse de l’entreprise de travail temporaire, ou la mise à disposition par un groupement d’employeurs avec son nom et son adresse.`,
        sourceName: STAFF_REGISTER_ENTRIES_SOURCE.name,
        sourceUrl: STAFF_REGISTER_ENTRIES_SOURCE.url,
      },
      {
        contextLabel: 'Code du travail, R1221-26',
        title: 'Cinq ans après le départ',
        text: `Les mentions du registre se conservent pendant cinq ans à compter du jour où le salarié ou le stagiaire a quitté l’établissement. Le référentiel de la CNIL sur les données des ressources humaines reprend cette durée comme une obligation. Une ligne ne s’efface donc pas au départ${NBSP}: l’Excel calcule pour chacune la date de fin de conservation.`,
        sourceName: STAFF_REGISTER_RETENTION_SOURCE.name,
        sourceUrl: STAFF_REGISTER_RETENTION_SOURCE.url,
      },
      {
        contextLabel: 'Code du travail, D1221-27, D8113-2 et L2315-5',
        title: 'Sur ordinateur, à trois conditions',
        text: `Le registre peut être tenu sur un support de substitution, informatique par exemple. Ce support doit recevoir toutes les mentions, sans difficulté d’utilisation ni risque d’altération, être présenté comme le registre papier et conservé aussi longtemps. Le comité social et économique, s’il existe, est consulté avant, et son avis est transmis à l’inspection du travail.`,
        sourceName: STAFF_REGISTER_DIGITAL_SOURCE.name,
        sourceUrl: STAFF_REGISTER_DIGITAL_SOURCE.url,
      },
      {
        contextLabel: 'Code du travail, R1227-7',
        title: 'Une amende par salarié concerné',
        text: `Ne pas tenir le registre, ou le tenir sans les mentions prévues, est puni de l’amende des contraventions de la quatrième classe, soit 750${NBSP}€ au plus (Code pénal, article 131-13). Elle s’applique autant de fois qu’il y a de salariés concernés. Le registre est tenu à la disposition du comité social et économique et des agents de contrôle (article L1221-15).`,
        sourceName: STAFF_REGISTER_PENALTY_SOURCE.name,
        sourceUrl: STAFF_REGISTER_PENALTY_SOURCE.url,
      },
      {
        contextLabel: 'Données personnelles',
        title: 'Les mentions prévues, et rien de plus',
        text: `Pour la CNIL, on ne collecte que les données strictement nécessaires au but du fichier, et seules les personnes autorisées y ont accès. La liste de l’article D1221-23 ne comprend ni adresse personnelle, ni numéro de sécurité sociale, ni salaire${NBSP}: ces données ont leur place dans le dossier du salarié ou la paie, pas dans le registre. Le modèle n’a pas de colonne pour elles.`,
        sourceName: STAFF_DATA_PRINCIPLES_SOURCE.name,
        sourceUrl: STAFF_DATA_PRINCIPLES_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Registre unique du personnel${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de registre unique du personnel est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Le PDF, l’Excel et le Word se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne «${NBSP}modèle proposé par Dibodev${NBSP}» en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Qui doit tenir un registre unique du personnel${NBSP}?`,
        answer: `Tout employeur, dès l’embauche de son premier salarié, quelle que soit la taille de l’entreprise${NBSP}: Service-Public le classe parmi les registres obligatoires. Le Code du travail le demande dans chaque établissement où travaillent des salariés, donc un registre par établissement. Une entreprise sans salarié n’en tient pas${NBSP}; si elle accueille un stagiaire, ses mentions se suivent alors dans un autre document (article D1221-23-1).`,
      },
      {
        question: `Quelles sont les mentions obligatoires${NBSP}?`,
        answer: `Pour chaque salarié${NBSP}: nom et prénoms, nationalité, date de naissance, sexe, emploi, qualification, dates d’entrée et de sortie, et selon le cas la mention du contrat (CDD, temps partiel, apprenti, contrat de professionnalisation, salarié temporaire, groupement d’employeurs), le titre de travail d’un travailleur étranger et la date d’une autorisation d’embauche ou de licenciement. Chacune a sa colonne dans le modèle. Pour un stagiaire et un volontaire, les mentions sont plus courtes${NBSP}: c’est la page 2.`,
      },
      {
        question: `Faut-il inscrire les intérimaires, les stagiaires et les volontaires${NBSP}?`,
        answer: `Oui, chacun à sa place. Un intérimaire est inscrit dans la liste des salariés de l’entreprise où il travaille, avec la mention «${NBSP}salarié temporaire${NBSP}» et le nom et l’adresse de l’entreprise de travail temporaire${NBSP}; un salarié mis à disposition par un groupement d’employeurs aussi, avec le nom et l’adresse du groupement. Les stagiaires et les volontaires en service civique vont dans la partie à part, dans l’ordre d’arrivée.`,
      },
      {
        question: `Peut-on tenir le registre sur Excel${NBSP}?`,
        answer: `Le registre peut être tenu sur un support informatique, à condition qu’il reçoive toutes les mentions sans risque d’altération, qu’il se présente comme le registre papier et qu’il soit gardé aussi longtemps${NBSP}; le comité social et économique, s’il existe, est consulté avant et son avis est transmis à l’inspection du travail. Un fichier Excel qu’on peut réécrire sans laisser de trace répond mal à la condition d’altération. Le plus simple avec ce modèle${NBSP}: préparer et contrôler dans l’Excel, puis imprimer les feuillets et les garder.`,
      },
      {
        question: `Combien de temps garder le registre${NBSP}?`,
        answer: `Les mentions se conservent cinq ans à compter du départ du salarié ou du stagiaire (article R1221-26 du Code du travail). La ligne d’un salarié parti reste donc dans le registre pendant ce temps, avec sa date de sortie. L’Excel calcule pour chaque ligne la date de fin de conservation, et la synthèse compte celles qui l’ont dépassée.`,
      },
      {
        question: `Qui peut consulter le registre du personnel${NBSP}?`,
        answer: `Le registre est tenu à la disposition du comité social et économique et des agents chargés de contrôler l’application du Code du travail et du Code de la sécurité sociale, comme l’inspection du travail. La copie des titres de travail des salariés étrangers, annexée au registre, leur est accessible de la même façon. En dehors d’eux, seules les personnes qui en ont besoin pour leur travail devraient y avoir accès.`,
      },
      {
        question: `Que risque-t-on sans registre à jour${NBSP}?`,
        answer: `L’absence de registre, ou un registre sans les mentions prévues, est puni de l’amende des contraventions de la quatrième classe, 750${NBSP}€ au plus, appliquée autant de fois qu’il y a de salariés concernés (articles R1227-7 du Code du travail et 131-13 du Code pénal). Service-Public donne le même montant. Un registre rempli le jour de chaque embauche évite ce risque pour quelques minutes par salarié.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Trois feuilles. «${NBSP}Registre du personnel${NBSP}»${NBSP}: une ligne par salarié, mentions de contrat en listes déroulantes, et pour chaque ligne la présence à la date choisie en case jaune, la fin de conservation et les contrôles. «${NBSP}Stagiaires et volontaires${NBSP}» fait de même pour la partie à part. «${NBSP}Synthèse${NBSP}» compte, pour l’année choisie, les entrées, les sorties et les présents mois par mois. Les lignes «${NBSP}Exemple${NBSP}» montrent le calcul${NBSP}: effacez-les.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand l’équipe grandit, que les techniciens changent de contrat ou de chantier et que le registre, les plannings et les bons d’intervention vivent dans des fichiers séparés, un outil qui garde l’historique de chaque personne vous évite de tout recopier. Décrivez-moi votre organisation${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels de gestion d’interventions',
  },
}
