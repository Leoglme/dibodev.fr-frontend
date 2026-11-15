import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  BUSINESS_PURCHASES_VAT_SOURCE,
  EXPENSE_REPORT_TEMPLATE_DOCX_PATH,
  EXPENSE_REPORT_TEMPLATE_PDF_PATH,
  EXPENSE_REPORT_TEMPLATE_UPDATED_AT,
  EXPENSE_REPORT_TEMPLATE_XLSX_PATH,
  MILEAGE_ALLOWANCE_SCALE_SOURCE,
  PROFESSIONAL_EXPENSES_SOURCE,
} from '~/core/constants/freeTemplates/expenseReport/pageShared'
import { DOCUMENT_RETENTION_SOURCE } from '~/core/constants/tools/fieldServiceSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const EXPENSE_REPORT_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Note de frais${NBSP}: modèle gratuit Word, Excel et PDF (+ km)`,
    description: `Note de frais${NBSP}: modèle gratuit en PDF, Word et Excel, sous-totaux repas, hôtel, transport, relevé des indemnités kilométriques, récap annuel. Sans inscription.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle de note de frais mensuelle et de relevé des indemnités kilométriques',
  },
  breadcrumbLabel: 'Note de frais',
  shareImage: {
    titleLines: ['Note de frais', 'modèle gratuit'],
    highlight: 'Note de frais',
    subtitle:
      'Note de frais du mois et relevé des trajets en véhicule personnel, en PDF, Word et Excel, totaux calculés',
    badge: 'Gratuit, sans inscription',
    icon: 'receipt',
    alt: `Modèle de note de frais gratuit${NBSP}: note de frais du mois et relevé des indemnités kilométriques en PDF, Word et Excel, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Note de frais',
    titleAfter: `${NBSP}: modèle gratuit PDF, Word et Excel (+ relevé des indemnités kilométriques)`,
    reassurances: [
      'Note du mois + relevé kilométrique',
      'Excel avec sous-totaux par nature',
      'Sans inscription ni e-mail',
    ],
    aboutTitle: 'À propos du modèle',
    description: `Une note de frais mensuelle et un relevé des trajets en véhicule personnel, prêts à remplir, pour un salarié ou un dirigeant qui avance des dépenses pour l’entreprise${NBSP}: le repas sur la route d’un chantier, la nuit d’hôtel avant un salon, le billet de train, le péage, les kilomètres faits avec sa propre voiture. Chaque ligne renvoie à un justificatif numéroté, les totaux se font par nature, et l’avance déjà reçue est déduite. Aucun barème n’est écrit en dur${NBSP}: vous saisissez le taux par kilomètre de l’année, et la page vous dit où le lire.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai lu les pages de l’Urssaf sur les frais professionnels et les indemnités kilométriques, et celles de l’administration fiscale sur la TVA récupérable, pour que les rubriques et les mentions soient justes.',
    updatedAt: EXPENSE_REPORT_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les salariés et les dirigeants qui avancent des frais, et pour la personne qui les valide et les rembourse. Trois fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime et se remplit au stylo, l’Excel fait les totaux et le récapitulatif de l’année, le Word se modifie librement.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: EXPENSE_REPORT_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: EXPENSE_REPORT_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 feuilles, totaux calculés',
      },
      {
        label: 'Télécharger la version Word',
        href: EXPENSE_REPORT_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 pages, modifiable',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à votre entreprise. Il ne remplace pas l’avis de votre expert-comptable.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Une note de frais, un relevé kilométrique et un récapitulatif de l’année',
    intro: `Le PDF tient sur deux pages A4${NBSP}: la note de frais du mois, puis le relevé des trajets faits avec un véhicule personnel et la liste des justificatifs joints. L’Excel reprend les deux sur deux feuilles et ajoute une troisième, le récapitulatif de l’année mois par mois, avec le calcul de fin d’année des indemnités kilométriques.`,
    documents: [
      {
        title: 'Note de frais du mois',
        format: `Page 1 du PDF, feuille «${NBSP}Note de frais${NBSP}» de l’Excel`,
        items: [
          'En-tête de l’entreprise (nom, adresse, SIREN ou SIRET), service ou chantier imputé, n° de la note, mois, période couverte, date de remise',
          `Le demandeur${NBSP}: nom, fonction, et son statut en trois cases (salarié, dirigeant assimilé salarié, dirigeant non salarié), parce que les règles de remboursement ne sont pas les mêmes`,
          `16 lignes de dépenses (20 dans l’Excel)${NBSP}: n° du justificatif, date, nature (repas, hébergement, transport, autres), fournisseur, motif professionnel, montant HT, TVA, TTC`,
          `Sous-totaux TTC par nature, plus la ligne des indemnités kilométriques reportée de la page 2${NBSP}; dans l’Excel, la TVA et le HT sont aussi totalisés par nature`,
          `Règlement${NBSP}: total de la note, avance reçue, reste à rembourser ou trop-perçu à rendre, date et mode de paiement`,
          `Signatures du demandeur, qui certifie les dépenses, et du valideur, avec la mention «${NBSP}bon pour remboursement${NBSP}»${NBSP}; dans l’Excel, une colonne «${NBSP}Contrôle${NBSP}» signale une ligne sans motif, sans date ou datée hors du mois`,
        ],
      },
      {
        title: 'Relevé des trajets en véhicule personnel',
        format: `Page 2 du PDF, feuille «${NBSP}Trajets véhicule perso${NBSP}» de l’Excel`,
        items: [
          `Le véhicule${NBSP}: marque et modèle, immatriculation, puissance fiscale, titulaire de la carte grise, type (voiture thermique ou hybride, voiture électrique, moto, cyclomoteur)`,
          `14 lignes de trajets (25 dans l’Excel)${NBSP}: date, départ, arrivée, motif professionnel, aller-retour, kilomètres${NBSP}; l’Excel double tout seul les kilomètres d’un aller-retour`,
          'Total des kilomètres du mois et cumul depuis le 1er janvier, car le barème fiscal se lit sur la distance de l’année',
          `Taux par kilomètre que vous saisissez vous-même, d’après le barème de l’année${NBSP}: l’indemnité du mois se calcule et remonte dans la note`,
          `Liste des justificatifs joints (type, objet, montant TTC, facture au nom de l’entreprise ou non, original ou copie numérique) et case «${NBSP}copie de la carte grise jointe${NBSP}»`,
        ],
      },
      {
        title: 'Récapitulatif annuel',
        format: `Feuille «${NBSP}Récap annuel${NBSP}» de l’Excel`,
        items: [
          `Une ligne par mois${NBSP}: repas, hébergement, transport, autres, TVA, kilomètres professionnels, indemnités kilométriques versées, total remboursé`,
          'Un rappel des totaux de la note en cours, à recopier dans le bon mois une fois la note validée',
          `Total de l’année par colonne, utile pour la clôture et pour suivre ce que coûtent les déplacements`,
          `Calcul de fin d’année${NBSP}: vous saisissez le coefficient et le montant fixe de la tranche du barème qui correspond à vos kilomètres de l’année, et l’Excel donne l’écart avec les indemnités déjà versées`,
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment la remplir',
    title: 'Remplir la note de frais en quatre étapes',
    intro:
      'Dans l’Excel, seules les cases blanches et les cases jaunes se saisissent. Le HT, les sous-totaux, l’indemnité kilométrique et le reste à rembourser se calculent tout seuls. Effacez les lignes d’exemple avant de commencer.',
    steps: [
      {
        label: 'Étape 1',
        title: 'Numéroter chaque justificatif',
        description: `Au fil du mois, gardez chaque ticket et chaque facture, et écrivez dessus un numéro${NBSP}: 1, 2, 3… C’est ce numéro que reprend la ligne de la note. Une dépense sans justificatif n’a pas sa place ici, sauf si l’entreprise verse des allocations forfaitaires.`,
      },
      {
        label: 'Étape 2',
        title: 'Une ligne par dépense, avec son motif',
        description: `Date, nature, fournisseur, puis le motif professionnel en clair${NBSP}: «${NBSP}déjeuner, chantier Le Goff à Vannes${NBSP}», pas «${NBSP}repas${NBSP}». Recopiez le TTC et la TVA tels qu’ils figurent sur le ticket. Les péages et le parking vont en transport.`,
      },
      {
        label: 'Étape 3',
        title: 'Les trajets avec votre propre véhicule',
        description: `Notez chaque déplacement professionnel le jour même, avec ses kilomètres. En fin de mois, saisissez dans la case jaune le taux par kilomètre du barème de l’année, lu sur la page «${NBSP}Indemnités kilométriques${NBSP}» de l’Urssaf, pour votre type de véhicule et sa puissance fiscale.`,
      },
      {
        label: 'Étape 4',
        title: 'Signer, valider, rembourser',
        description: `Indiquez l’avance reçue, signez et remettez la note avec ses justificatifs. Le valideur vérifie, signe «${NBSP}bon pour remboursement${NBSP}» et paie le reste dû. Recopiez ensuite les totaux du mois dans le récapitulatif annuel.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Les règles que le modèle suit déjà',
    intro: `Six règles de l’Urssaf et de l’administration fiscale passent par une note de frais. Le modèle leur réserve une colonne, une case ou une mention${NBSP}; les montants et les plafonds, eux, changent chaque année, et la page vous renvoie à la source plutôt que de les recopier. Pour un cas particulier, demandez à votre expert-comptable.`,
    facts: [
      {
        contextLabel: 'Urssaf, frais professionnels',
        title: 'Sur justificatifs, ou par allocation forfaitaire',
        text: `L’entreprise rembourse les frais soit à leur montant réel, sur justificatifs, soit par une allocation forfaitaire. Au réel, il n’y a pas de plafond, mais il faut prouver que la dépense était imposée par le travail et produire le justificatif. Au forfait, le montant se compare à des limites revalorisées chaque année par l’Urssaf${NBSP}: en dessous, pas de justificatif à fournir, seulement le caractère professionnel à démontrer.`,
        sourceName: PROFESSIONAL_EXPENSES_SOURCE.name,
        sourceUrl: PROFESSIONAL_EXPENSES_SOURCE.url,
      },
      {
        contextLabel: 'Dirigeants',
        title: 'Pas de forfait pour la plupart des dirigeants',
        text: `Les allocations forfaitaires ne s’appliquent ni aux dirigeants relevant du régime des non-salariés, ni aux gérants minoritaires ou égalitaires de SARL, ni aux présidents-directeurs généraux de SA, ni aux présidents et dirigeants de SAS. Leurs frais sont évalués d’après leur valeur réelle${NBSP}: d’où la case du statut en tête de la note, et un justificatif pour chaque ligne.`,
        sourceName: PROFESSIONAL_EXPENSES_SOURCE.name,
        sourceUrl: PROFESSIONAL_EXPENSES_SOURCE.url,
      },
      {
        contextLabel: 'Véhicule personnel',
        title: 'Les indemnités kilométriques suivent le barème fiscal',
        text: `Un salarié contraint d’utiliser son propre véhicule pour un déplacement professionnel peut recevoir des indemnités kilométriques, exonérées de cotisations dans la limite du barème fiscal publié chaque année. Ce barème dépend du type de véhicule, de sa puissance fiscale et des kilomètres professionnels de l’année, avec un tableau propre aux véhicules électriques. L’Urssaf le reprend sur sa page «${NBSP}Indemnités kilométriques${NBSP}»${NBSP}: c’est là que vous lisez le taux à saisir.`,
        sourceName: MILEAGE_ALLOWANCE_SCALE_SOURCE.name,
        sourceUrl: MILEAGE_ALLOWANCE_SCALE_SOURCE.url,
      },
      {
        contextLabel: 'Preuve des kilomètres',
        title: 'Un relevé jour par jour et la carte grise',
        text: `Pour justifier les indemnités kilométriques, l’entreprise doit prouver chaque déplacement professionnel et le nombre de kilomètres parcourus, et produire la carte grise du véhicule. L’Urssaf cite un état des kilomètres par jour. Sans ces pièces, les indemnités entrent dans l’assiette des cotisations${NBSP}: c’est le rôle de la page 2 du modèle.`,
        sourceName: PROFESSIONAL_EXPENSES_SOURCE.name,
        sourceUrl: PROFESSIONAL_EXPENSES_SOURCE.url,
      },
      {
        contextLabel: 'TVA',
        title: `TVA récupérable${NBSP}: une facture, et pas sur tout`,
        text: `Une entreprise redevable de la TVA ne la récupère que si elle a une facture qui mentionne le taux et le montant de la TVA. La TVA de l’hébergement des dirigeants et du personnel ne se récupère pas, pas plus que celle du transport de personnes (Service-Public cite les taxis et les VTC). Une entreprise en franchise en base de TVA, comme beaucoup de micro-entrepreneurs, ne récupère aucune TVA.`,
        sourceName: BUSINESS_PURCHASES_VAT_SOURCE.name,
        sourceUrl: BUSINESS_PURCHASES_VAT_SOURCE.url,
      },
      {
        contextLabel: '10 ans',
        title: 'Les justificatifs se gardent dix ans',
        text: `Factures et autres pièces justificatives se conservent 10 ans à partir de la clôture de l’exercice${NBSP}; l’administration fiscale peut contrôler pendant 6 ans. Gardez donc la note signée avec ses tickets, ou leur copie numérique, rangée par mois. La liste des justificatifs en page 2 sert à vérifier qu’il n’en manque aucun.`,
        sourceName: DOCUMENT_RETENTION_SOURCE.name,
        sourceUrl: DOCUMENT_RETENTION_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Note de frais${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de note de frais est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Les trois fichiers se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne «${NBSP}modèle proposé par Dibodev${NBSP}» en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Que doit contenir une note de frais${NBSP}?`,
        answer: `Aucune page officielle que j’ai lue n’impose de formulaire. Ce que l’Urssaf demande, c’est de pouvoir prouver que chaque dépense était professionnelle et de produire son justificatif. La note sert à ça${NBSP}: qui a dépensé, quand, chez qui, pour quel client ou quel chantier, combien en HT, TVA et TTC, et le numéro du ticket ou de la facture joint. Le statut du demandeur, l’avance reçue et les deux signatures complètent le tout.`,
      },
      {
        question: `Ticket de caisse ou facture${NBSP}: lequel garder${NBSP}?`,
        answer: `Pour le remboursement, l’Urssaf parle de justificatifs${NBSP}: le ticket prouve la dépense. Pour récupérer la TVA, l’administration fiscale est plus exigeante${NBSP}: seule une facture, avec le taux et le montant de la TVA, justifie la déduction. Au restaurant ou à l’hôtel, demandez donc une facture au nom de l’entreprise${NBSP}; la colonne «${NBSP}facture au nom de l’entreprise${NBSP}» de la page 2 sert à le vérifier.`,
      },
      {
        question: `Comment calculer les indemnités kilométriques${NBSP}?`,
        answer: `Additionnez les kilomètres professionnels faits avec votre propre véhicule, puis appliquez le barème kilométrique fiscal de l’année, selon le type de véhicule et sa puissance fiscale. L’Urssaf le publie sur sa page «${NBSP}Indemnités kilométriques${NBSP}», et impots.gouv.fr propose un simulateur. Le barème se lit sur la distance de toute l’année, avec trois tranches, dont une qui ajoute un montant fixe${NBSP}: un taux simple appliqué chaque mois est une avance, que le récapitulatif annuel de l’Excel permet d’ajuster en fin d’année.`,
      },
      {
        question: `Pourquoi l’Excel ne contient-il aucun taux par kilomètre${NBSP}?`,
        answer: `Parce que le barème change avec l’année et dépend de votre véhicule${NBSP}: un taux écrit en dur serait faux pour une partie des utilisateurs, ou dès l’année suivante. Vous le saisissez dans une case jaune, et tant qu’elle est vide, l’Excel vous le rappelle au lieu de calculer un montant inventé. Même chose pour les repas${NBSP}: les limites des allocations forfaitaires sont revalorisées chaque année, lisez-les sur urssaf.fr.`,
      },
      {
        question: `La TVA d’une note de frais est-elle récupérable${NBSP}?`,
        answer: `Oui pour une entreprise redevable de la TVA, à deux conditions${NBSP}: la dépense est faite pour l’activité, et une facture mentionne la TVA. Certaines dépenses en sont exclues${NBSP}: l’hébergement des dirigeants et du personnel, le transport de personnes, quel que soit le moyen (train, avion, taxi, VTC). Pour le carburant, impots.gouv.fr indique une TVA récupérable à 80${NBSP}% pour un véhicule de tourisme et à 100${NBSP}% pour un utilitaire. En franchise en base de TVA, rien ne se récupère.`,
      },
      {
        question: `Un gérant ou un président de SAS peut-il faire une note de frais${NBSP}?`,
        answer: `Oui, mais au réel. L’Urssaf exclut des allocations forfaitaires les dirigeants non salariés, les gérants minoritaires ou égalitaires de SARL, les PDG de SA et les présidents et dirigeants de SAS${NBSP}: leurs frais sont évalués d’après leur valeur réelle. Concrètement, chaque ligne de leur note a son justificatif, et la case du statut en tête du modèle le rappelle à celui qui valide.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Trois feuilles. «${NBSP}Note de frais${NBSP}»${NBSP}: vous choisissez le mois et saisissez les dépenses avec leur TTC et leur TVA${NBSP}; le HT, les sous-totaux par nature et le reste à rembourser se calculent, et la colonne «${NBSP}Contrôle${NBSP}» signale une ligne incomplète ou datée hors du mois. «${NBSP}Trajets véhicule perso${NBSP}»${NBSP}: les trajets, le total des kilomètres et, une fois le taux saisi, l’indemnité du mois, reportée dans la note. «${NBSP}Récap annuel${NBSP}»${NBSP}: un mois par ligne, le total de l’année et l’écart avec le barème annuel. Chaque feuille s’imprime sur une page A4.`,
      },
      {
        question: `Et quand les notes de frais se multiplient${NBSP}?`,
        answer: `Un modèle Excel suffit pour quelques notes par mois. Avec plusieurs techniciens sur la route, les tickets se perdent dans les camionnettes, les kilomètres se reconstituent de mémoire et les notes arrivent toutes le dernier jour${NBSP}: c’est là qu’un outil où le technicien photographie son ticket et où les trajets se notent depuis l’intervention fait gagner du temps. Si vos équipes interviennent chez les clients, le test de la page outil vous dit quel logiciel de gestion d’interventions choisir.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand les tickets arrivent froissés en fin de mois, que les kilomètres se recomptent sur Google Maps et que chaque note demande trois allers-retours avant d’être validée, un outil qui garde la photo du ticket et le trajet avec l’intervention vous rend des heures. Décrivez-moi votre organisation${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels de gestion d’interventions',
  },
}
