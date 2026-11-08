import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  GOOD_WORKING_WARRANTY_SOURCE,
  RETENTION_MONEY_SOURCE,
  TEN_YEAR_LIABILITY_SOURCE,
  WORKS_ACCEPTANCE_REPORT_TEMPLATE_PDF_PATH,
  WORKS_ACCEPTANCE_REPORT_TEMPLATE_UPDATED_AT,
  WORKS_ACCEPTANCE_REPORT_TEMPLATE_XLSX_PATH,
  WORKS_ACCEPTANCE_SOURCE,
} from '~/core/constants/freeTemplates/worksAcceptanceReport/pageShared'
import { BUILDER_WARRANTIES_SOURCE } from '~/core/constants/tools/carpentrySoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const WORKS_ACCEPTANCE_REPORT_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `PV de réception de travaux${NBSP}: modèle gratuit PDF et Excel`,
    description: `PV de réception de travaux${NBSP}: modèle gratuit en PDF et Excel, avec ou sans réserves, PV de levée des réserves, dates des garanties calculées. Sans inscription.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle de procès-verbal de réception de travaux et de procès-verbal de levée des réserves',
  },
  breadcrumbLabel: 'PV de réception de travaux',
  shareImage: {
    titleLines: ['PV de réception', 'de travaux gratuit'],
    highlight: 'PV de réception',
    subtitle: 'PV de réception avec ou sans réserves et PV de levée des réserves, en PDF et Excel, garanties datées',
    badge: 'Gratuit, sans inscription',
    icon: 'clipboard',
    alt: `Modèle de PV de réception de travaux gratuit${NBSP}: PV de réception et PV de levée des réserves en PDF et Excel, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'PV de réception de travaux',
    titleAfter: `${NBSP}: modèle gratuit PDF et Excel (+ levée des réserves)`,
    reassurances: [
      'PV de réception + levée des réserves',
      'Excel avec les garanties datées',
      'Sans inscription ni e-mail',
    ],
    aboutTitle: 'À propos du modèle',
    description: `Un procès-verbal de réception de travaux et un procès-verbal de levée des réserves prêts à remplir, pour tous les corps de métier du bâtiment${NBSP}: maçon, plombier, électricien, menuisier, peintre, couvreur… Le PV de réception se signe en fin de chantier, après une visite faite avec le client, avec ou sans réserves. Le PV de levée constate ensuite, d’un commun accord, que chaque défaut noté a été repris. La date de réception fait partir les garanties${NBSP}: l’Excel calcule leurs dates de fin.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai lu les articles du Code civil sur la réception et les garanties, et la loi sur la retenue de garantie, pour que les mentions soient exactes.',
    updatedAt: WORKS_ACCEPTANCE_REPORT_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les artisans et les entreprises du bâtiment, et pour les particuliers qui reçoivent leurs travaux. Deux fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime, l’Excel suit les réserves et calcule les dates.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: WORKS_ACCEPTANCE_REPORT_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: WORKS_ACCEPTANCE_REPORT_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 feuilles, dates calculées',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à votre chantier. Il ne remplace pas l’avis d’un juriste ni celui de votre assureur.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Un PV de réception, un PV de levée des réserves et un calendrier des garanties',
    intro: `Le PDF reprend les deux procès-verbaux sur deux pages A4, à remplir à la main pendant la visite. L’Excel les reprend sur trois feuilles${NBSP}: le procès-verbal et ses réserves, le suivi de la levée avec la date et le statut de chaque réserve, et le calendrier des garanties calculé depuis la date de réception.`,
    documents: [
      {
        title: 'PV de réception de travaux',
        format: `Page 1 du PDF, feuille «${NBSP}PV et réserves${NBSP}» de l’Excel`,
        items: [
          'En-tête de l’entreprise (nom, adresse, SIREN ou SIRET) et assurance décennale (assureur, n° de contrat), n° du PV, date de la visite contradictoire, date de réception, devis ou marché de référence',
          `Les parties${NBSP}: maître d’ouvrage (le client) et son représentant, entreprise, maître d’œuvre ou architecte s’il y en a un, personnes présentes à la visite`,
          `Le chantier et le marché${NBSP}: adresse, lot ou corps d’état, nature des travaux, date d’acceptation et montant TTC du devis, avenants, début et fin des travaux`,
          `Décision du maître d’ouvrage en 3 cases${NBSP}: réception sans réserve, avec les réserves listées, ou reportée avec la date d’une nouvelle visite${NBSP}; dans l’Excel, une alerte signale une décision qui ne colle pas avec la liste`,
          `10 lignes de réserves (12 dans l’Excel)${NBSP}: n°, localisation, réserve constatée, photo n°, entreprise chargée de la reprise, levée convenue le${NBSP}; l’Excel calcule la date à partir d’un délai en jours`,
          `Retenue de garantie si le marché en prévoit une (5${NBSP}% au plus, montant, date de libération), les trois garanties datées, documents remis, signatures du client, de l’entreprise et du maître d’œuvre, mentions du Code civil`,
        ],
      },
      {
        title: 'PV de levée des réserves',
        format: `Page 2 du PDF, feuille «${NBSP}Levée des réserves${NBSP}» de l’Excel`,
        items: [
          'Rappel du PV de réception (n°, date de réception), date de la visite de levée, maître d’ouvrage, entreprise, adresse du chantier, présents',
          `Une ligne par réserve, avec son numéro du PV de réception${NBSP}: réserve, travaux réalisés, levée convenue le, levée constatée le, accord du client${NBSP}; l’Excel reprend tout seul les réserves de la première feuille`,
          'Statut calculé dans l’Excel (levée, à lever, en retard) et jours de retard, à la date de la visite de levée ou, à défaut, à la date du jour',
          `Conclusion${NBSP}: toutes les réserves levées à telle date, ou réserves restant à lever avec un nouveau délai convenu${NBSP}; l’Excel compte les réserves levées, à lever et en retard`,
          `Désordres signalés après la réception, pendant l’année de parfait achèvement${NBSP}: date de la lettre recommandée, désordre, reprise attendue et constatée${NBSP}; l’Excel vérifie que le signalement tombe dans l’année`,
          'Signatures du client et de l’entreprise, rappel de l’article 1792-6 du Code civil sur la reprise constatée d’un commun accord',
        ],
      },
      {
        title: 'Calendrier des garanties',
        format: `Feuille «${NBSP}Calendrier des garanties${NBSP}» de l’Excel, dates à reporter en page 1 du PDF`,
        items: [
          'Date de réception reprise du PV, durée de la garantie de bon fonctionnement en case jaune (2 ans au moins, plus si le contrat le prévoit)',
          `Pour chaque garantie, ce qu’elle couvre, sa durée, son départ et sa date de fin${NBSP}: parfait achèvement (1 an), bon fonctionnement (2 ans ou plus), décennale (10 ans)`,
          'Date de libération de la retenue de garantie, un an après la réception, quand le marché en prévoit une',
          'Jours restants et statut de chaque garantie (en cours ou terminée) à la date du jour',
          `Un désordre apparaît${NBSP}: vous saisissez sa date, et l’Excel dit quelles garanties couraient encore ce jour-là`,
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir le PV de réception en quatre étapes',
    intro:
      'Dans l’Excel, seules les cases blanches et les cases jaunes se saisissent. Les dates de levée, le statut de chaque réserve et les dates de fin des garanties se calculent tout seuls.',
    steps: [
      {
        label: 'Étape 1',
        title: 'Avant la visite, le chantier et le marché',
        description: `Remplissez l’en-tête de l’entreprise, les parties, l’adresse du chantier, le lot et le devis accepté, avec sa date et son montant. Fixez la visite avec le client, et avec le maître d’œuvre s’il y en a un${NBSP}: la réception se fait ensemble.`,
      },
      {
        label: 'Étape 2',
        title: 'Pendant la visite, une réserve par ligne',
        description: `Faites le tour pièce par pièce, façade comprise. Chaque défaut visible a sa ligne${NBSP}: où il est, ce qui ne va pas, le numéro de la photo, l’entreprise qui reprend et le délai convenu. Ce qui n’est pas noté ce jour-là sera considéré comme accepté.`,
      },
      {
        label: 'Étape 3',
        title: 'La décision, la date, les signatures',
        description: `Le client coche sans réserve, avec réserves ou réception reportée. Saisissez la date de réception dans la case jaune de l’Excel${NBSP}: les dates de levée, de fin des garanties et de libération de la retenue suivent. Chacun signe les deux exemplaires et en garde un.`,
      },
      {
        label: 'Étape 4',
        title: 'La levée des réserves, une par une',
        description: `À chaque reprise, notez dans la feuille «${NBSP}Levée des réserves${NBSP}» les travaux réalisés, la date et l’accord du client${NBSP}: le statut passe à «${NBSP}Levée${NBSP}». Quand tout est repris, imprimez la page 2, cochez «${NBSP}toutes les réserves sont levées${NBSP}» et faites-la signer.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Les règles que le modèle suit déjà',
    intro: `Six règles du Code civil et de la loi passent par la réception et la levée des réserves. Le modèle leur réserve une case, une date ou une mention${NBSP}; il ne remplace pas l’avis d’un juriste en cas de litige.`,
    facts: [
      {
        contextLabel: 'Code civil, art. 1792-6',
        title: 'La réception se prononce ensemble, avec ou sans réserves',
        text: 'C’est l’acte par lequel le maître d’ouvrage accepte les travaux, avec ou sans réserves. Elle se fait à l’amiable ou, à défaut, en justice, et toujours de façon contradictoire, avec l’entreprise et le client. Le PV date la visite, nomme les présents et porte la décision du client.',
        sourceName: WORKS_ACCEPTANCE_SOURCE.name,
        sourceUrl: WORKS_ACCEPTANCE_SOURCE.url,
      },
      {
        contextLabel: 'Le jour de la visite',
        title: 'Un défaut visible qui n’est pas noté est accepté',
        text: `Si le désordre n’est pas signalé au procès-verbal, il est considéré comme accepté${NBSP}: le client ne pourra plus en demander la réparation au titre des garanties. Un défaut qui n’était pas visible ce jour-là peut relever d’une garantie selon sa nature. D’où les dix lignes de réserves du modèle, avec la photo et l’entreprise chargée de la reprise.`,
        sourceName: BUILDER_WARRANTIES_SOURCE.name,
        sourceUrl: BUILDER_WARRANTIES_SOURCE.url,
      },
      {
        contextLabel: '1 an à compter de la réception',
        title: 'Les réserves se lèvent dans un délai convenu ensemble',
        text: 'La garantie de parfait achèvement oblige l’entreprise à reprendre les réserves du procès-verbal et les désordres signalés par écrit dans l’année, hors usure normale ou usage. Le délai de reprise se fixe d’un commun accord, et la reprise se constate de même, ou à défaut en justice. Sans accord ou sans reprise dans le délai, le client peut, après une mise en demeure restée sans effet, faire exécuter les travaux aux frais et risques de l’entreprise.',
        sourceName: WORKS_ACCEPTANCE_SOURCE.name,
        sourceUrl: WORKS_ACCEPTANCE_SOURCE.url,
      },
      {
        contextLabel: '2 ans au moins',
        title: 'La garantie de bon fonctionnement, dite biennale',
        text: 'Les éléments d’équipement de l’ouvrage qu’on peut enlever sans dégrader le bâti ont une garantie de bon fonctionnement d’au moins deux ans à compter de la réception. Le calendrier de l’Excel compte 2 ans par défaut, et la durée plus longue que votre contrat prévoit si vous la saisissez.',
        sourceName: GOOD_WORKING_WARRANTY_SOURCE.name,
        sourceUrl: GOOD_WORKING_WARRANTY_SOURCE.url,
      },
      {
        contextLabel: '10 ans à compter de la réception',
        title: 'La décennale court elle aussi depuis la réception',
        text: 'Les dommages qui compromettent la solidité de l’ouvrage, ou qui le rendent impropre à sa destination, engagent l’entreprise pendant dix ans à compter de la réception des travaux. Le PV en fixe la date par écrit, et l’Excel calcule la fin des dix ans.',
        sourceName: TEN_YEAR_LIABILITY_SOURCE.name,
        sourceUrl: TEN_YEAR_LIABILITY_SOURCE.url,
      },
      {
        contextLabel: 'Si le marché la prévoit',
        title: `Retenue de garantie${NBSP}: 5${NBSP}% au plus, libérée au bout d’un an`,
        text: `Le client peut retenir jusqu’à 5${NBSP}% des paiements pour garantir la reprise des réserves. La somme est consignée chez un tiers accepté par les deux parties, sauf si l’entreprise fournit la caution d’un établissement financier. Un an après la réception, avec ou sans réserves, elle revient à l’entreprise, sauf opposition motivée notifiée par lettre recommandée. Le modèle calcule le montant et la date de libération.`,
        sourceName: RETENTION_MONEY_SOURCE.name,
        sourceUrl: RETENTION_MONEY_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `PV de réception de travaux${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de PV de réception est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Les deux fichiers se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne «${NBSP}modèle proposé par Dibodev${NBSP}» en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Le procès-verbal de réception est-il obligatoire${NBSP}?`,
        answer: `Le Code civil n’impose pas de formulaire, mais il fait de la réception le point de départ des garanties et demande qu’elle soit prononcée contradictoirement, à l’amiable ou, à défaut, en justice. Un procès-verbal daté et signé par le client et l’entreprise, en deux exemplaires, en garde la preuve${NBSP}: la date, les présents, la décision et les réserves. Sa date fait partir l’année de parfait achèvement et les autres garanties.`,
      },
      {
        question: `Que se passe-t-il si un défaut n’est pas noté au PV${NBSP}?`,
        answer: `S’il était visible le jour de la réception, il est considéré comme accepté${NBSP}: le client ne pourra plus en demander la réparation au titre des garanties. Un défaut qui n’était pas visible peut relever d’une garantie selon sa nature${NBSP}: parfait achèvement dans l’année, bon fonctionnement ou décennale. D’où l’intérêt de faire la visite ensemble, pièce par pièce, et de photographier chaque réserve.`,
      },
      {
        question: `Quel délai pour lever les réserves${NBSP}?`,
        answer: `La loi ne fixe pas de durée${NBSP}: le délai se convient entre le client et l’entreprise, et le modèle prévoit une date pour chaque réserve. Faute d’accord, ou si la reprise n’est pas faite à temps, le client peut, après une mise en demeure restée sans effet, faire exécuter les travaux aux frais et risques de l’entreprise. S’il faut aller en justice, Service-Public rappelle que c’est dans l’année de la garantie de parfait achèvement.`,
      },
      {
        question: `À quoi sert le PV de levée des réserves${NBSP}?`,
        answer: `Il constate, d’un commun accord, que les réserves ont été reprises${NBSP}: c’est ce que prévoit l’article 1792-6 du Code civil pour les travaux de la garantie de parfait achèvement. Il reprend les numéros du PV de réception, la date de levée et l’accord du client, et dit si tout est levé ou ce qui reste, avec un nouveau délai. Pour l’entreprise, c’est la preuve que les reprises sont faites${NBSP}; pour le client, la liste écrite de ce qui reste à reprendre.`,
      },
      {
        question: `Qu’est-ce que la retenue de garantie de 5${NBSP}%${NBSP}?`,
        answer: `Une somme que le client peut retenir sur les paiements, si le marché le prévoit, pour garantir la reprise des réserves faites à la réception${NBSP}: 5${NBSP}% au plus (loi du 16 juillet 1971). Elle est consignée chez un tiers accepté par les deux parties, sauf si l’entreprise fournit à la place la caution d’un établissement financier. Un an après la réception, avec ou sans réserves, elle revient à l’entreprise, sauf opposition motivée notifiée par lettre recommandée.`,
      },
      {
        question: `Parfait achèvement, biennale, décennale${NBSP}: quelle différence${NBSP}?`,
        answer: `Les trois partent de la date de réception. Le parfait achèvement (1 an) couvre les réserves du PV et les désordres signalés par écrit dans l’année. La garantie de bon fonctionnement, dite biennale (2 ans au moins), couvre les équipements qu’on peut enlever sans dégrader le bâti, comme un ballon d’eau chaude. La décennale (10 ans) couvre ce qui compromet la solidité de l’ouvrage ou le rend impropre à sa destination${NBSP}; Service-Public cite les fondations, les canalisations, les huisseries ou l’installation électrique encastrée.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Trois feuilles. Dans «${NBSP}PV et réserves${NBSP}», vous saisissez la date de réception dans la case jaune, la décision du client et les réserves avec leur délai en jours${NBSP}: la date de levée se calcule, et une alerte signale une décision qui ne colle pas avec la liste. «${NBSP}Levée des réserves${NBSP}» reprend chaque réserve${NBSP}; vous notez la date de levée et l’accord du client, et le statut (levée, à lever, en retard) et les jours de retard se calculent. «${NBSP}Calendrier des garanties${NBSP}» donne la date de fin et les jours restants de chaque garantie, la libération de la retenue, et dit quelles garanties courent encore à la date d’un désordre. Chaque feuille s’imprime sur une page A4.`,
      },
      {
        question: `Et quand les chantiers et les réserves se multiplient${NBSP}?`,
        answer: `Un modèle Excel suffit pour quelques réceptions par mois. Au-delà, il faut retrouver la bonne photo, prévenir le bon sous-traitant et relancer à la bonne date, chantier après chantier${NBSP}: c’est là qu’un logiciel qui garde chaque réserve avec sa photo, son entreprise et son échéance fait gagner du temps. Si vous êtes menuisier ou agenceur, le test de la page outil vous dit quel logiciel choisir, réserves après la pose comprises.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand les réserves se notent sur un carnet, partent en photo par SMS et se relancent de mémoire, chantier après chantier, un outil qui les garde avec leur photo, leur entreprise et leur échéance vous rend des heures. Décrivez-moi vos chantiers${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels pour menuisiers',
  },
}
