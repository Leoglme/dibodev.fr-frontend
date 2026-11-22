import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  CASH_PAYMENT_CEILING_SOURCE,
  INVOICING_OBLIGATION_SOURCE,
  PAYMENT_PROOF_SOURCE,
  PAYMENT_RECEIPT_TEMPLATE_DOCX_PATH,
  PAYMENT_RECEIPT_TEMPLATE_PDF_PATH,
  PAYMENT_RECEIPT_TEMPLATE_UPDATED_AT,
  PAYMENT_RECEIPT_TEMPLATE_XLSX_PATH,
  SERVICE_NOTE_SOURCE,
} from '~/core/constants/freeTemplates/paymentReceipt/pageShared'
import { CONSUMER_DEPOSIT_SOURCE } from '~/core/constants/freeTemplates/purchaseOrder/pageShared'
import { NBSP } from '~/core/constants/typography'

export const PAYMENT_RECEIPT_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Reçu de paiement${NBSP}: modèle gratuit Word, Excel et PDF`,
    description: `Reçu de paiement gratuit en PDF, Word et Excel${NBSP}: carnet de 3 reçus avec souche, reçu d’acompte, reste dû calculé, espèces, acompte ou arrhes.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle de reçu de paiement, de carnet de reçus avec souche et de reçu d’acompte',
  },
  breadcrumbLabel: 'Reçu de paiement',
  shareImage: {
    titleLines: ['Reçu de paiement', 'modèle gratuit'],
    highlight: 'Reçu de paiement',
    subtitle: 'Carnet de reçus avec souche et reçu d’acompte en PDF, Word et Excel, reste dû calculé',
    badge: 'Gratuit, sans inscription',
    icon: 'receipt',
    alt: `Modèle de reçu de paiement gratuit${NBSP}: carnet de reçus avec souche et reçu d’acompte en PDF, Word et Excel, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Reçu de paiement',
    titleAfter: `${NBSP}: modèle gratuit PDF, Word et Excel (+ reçu d’acompte)`,
    reassurances: ['Carnet de 3 reçus avec souche', 'Reçu d’acompte avec le reste dû', 'Sans inscription ni e-mail'],
    aboutTitle: 'À propos du modèle',
    description: `Un reçu dit une chose simple${NBSP}: telle somme a été remise, tel jour, par telle personne, pour telle raison. La première page est un carnet de trois reçus à découper, chacun avec sa souche qui reste chez vous, pour les paiements du quotidien, en espèces, par chèque ou par virement. La seconde est un reçu d’acompte détaillé, quand un client verse une partie du prix avant les travaux ou la livraison${NBSP}: il reprend le devis, les versements déjà faits et ce qui reste dû. L’Excel numérote, additionne et relit chaque ligne.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai lu le Code civil sur la preuve du paiement, l’arrêté de 1983 sur la note de prestation, le Code monétaire et financier sur les espèces et les fiches Service-Public sur l’acompte et la facture, pour que le reçu dise ce qu’il prouve, et rien de plus.',
    updatedAt: PAYMENT_RECEIPT_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les artisans, les commerçants, les indépendants, les associations et les particuliers qui encaissent une somme et veulent en garder la trace. Trois fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime et se découpe, l’Excel tient le registre et calcule le reste dû, le Word se modifie librement.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: PAYMENT_RECEIPT_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: PAYMENT_RECEIPT_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 feuilles, totaux calculés',
      },
      {
        label: 'Télécharger la version Word',
        href: PAYMENT_RECEIPT_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 pages, modifiable',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à votre activité. Il ne remplace ni une facture, ni l’avis de votre comptable.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Un carnet de reçus, un reçu d’acompte et un registre qui fait les comptes',
    intro: `Le PDF tient sur deux pages A4${NBSP}: trois reçus à découper avec leur souche, puis un reçu d’acompte. L’Excel les remplace par un registre numéroté, un reçu qui se remplit tout seul à partir du registre, et une synthèse par mois.`,
    documents: [
      {
        title: 'Carnet de trois reçus avec souche',
        format: `Page 1 du PDF et du Word, feuille «${NBSP}Reçu à imprimer${NBSP}» de l’Excel`,
        items: [
          `En tête, le carnet${NBSP}: numéros des reçus du premier au dernier, personne qui le tient`,
          `Une souche par reçu, côté gauche, qui reste chez vous${NBSP}: n°, date, reçu de, montant, mode, objet, reste dû`,
          `Le reçu, côté droit, derrière une ligne pointillée${NBSP}: n°, date, qui reçoit (nom, adresse, SIRET), qui paie, la somme en chiffres dans un cadre et en lettres, l’objet avec le n° de devis ou de facture`,
          `Mode de paiement en cinq cases${NBSP}: espèces, chèque avec son numéro, virement, carte, autre`,
          `Nature du paiement en quatre cases${NBSP}: paiement complet, acompte, arrhes ou solde, et le reste dû`,
          'Lieu, date et cadre de signature de la personne qui reçoit la somme',
        ],
      },
      {
        title: 'Reçu d’acompte',
        format: `Page 2 du PDF et du Word, feuilles «${NBSP}Registre des reçus${NBSP}» et «${NBSP}Reçu à imprimer${NBSP}» de l’Excel`,
        items: [
          'Qui reçoit (nom, adresse, SIREN ou SIRET, n° de TVA) et qui paie, avec trois cases particulier, professionnel ou association',
          `Le devis ou la commande${NBSP}: numéro, date d’acceptation, total HT, TVA, total TTC dû, objet, date ou délai d’exécution prévu`,
          `Tableau des versements déjà faits sur ce devis (date, n° de reçu, nature, mode, montant), la somme reçue ce jour, le total reçu et le reste dû`,
          'Deux cases acompte ou arrhes, chacune avec ce qu’elle engage, et le rappel de ce que vaut une somme sans mot écrit',
          `Mode de paiement avec le plafond des espèces, et un encadré «${NBSP}Ce reçu n’est pas une facture${NBSP}» qui dit quand une facture ou une note reste due`,
          'Deux signatures, le professionnel qui reconnaît avoir reçu la somme et le client',
        ],
      },
      {
        title: 'Registre et synthèse',
        format: `Feuilles «${NBSP}Registre des reçus${NBSP}» et «${NBSP}Synthèse${NBSP}» de l’Excel, sans équivalent dans le PDF`,
        items: [
          `60 reçus numérotés${NBSP}: date, payeur et son type, objet, n° de devis ou de facture, nature et mode choisis dans une liste, montant`,
          'Pour chaque reçu, le déjà reçu sur le même devis et le reste dû, calculés en additionnant les lignes précédentes',
          `Une colonne d’alerte${NBSP}: numéro en double, espèces au-delà du plafond, plus reçu que le total dû, somme d’un particulier sans le mot acompte ou arrhes, client professionnel sans n° de facture`,
          `Synthèse de l’année en case jaune${NBSP}: encaissements de chaque mois par mode de paiement, totaux par nature, et trois points à vérifier`,
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir un reçu de paiement en quatre étapes',
    intro: `Le PDF se remplit au stylo, souche d’abord. Dans l’Excel, tout part du registre${NBSP}: le reçu à imprimer et la synthèse se mettent à jour seuls. Les lignes «${NBSP}exemple${NBSP}» sont à effacer.`,
    steps: [
      {
        label: 'Étape 1',
        title: 'Numérotez le carnet avant le premier reçu',
        description: `Écrivez le premier et le dernier numéro du carnet, puis un numéro sur chaque souche et chaque reçu, à la suite. Un reçu raté ne se jette pas${NBSP}: barrez-le et gardez-le avec sa souche, pour qu’aucun numéro ne manque.`,
      },
      {
        label: 'Étape 2',
        title: 'La souche, puis le reçu',
        description: `Remplissez la souche avant de détacher le reçu${NBSP}: c’est votre seule trace. Sur le reçu, écrivez la somme en chiffres et en lettres, l’objet avec le n° du devis ou de la facture, et cochez le mode de paiement. Pour un chèque, notez son numéro.`,
      },
      {
        label: 'Étape 3',
        title: `Une avance sur un devis${NBSP}: le reçu d’acompte`,
        description: `Si la somme ne règle qu’une partie du prix, prenez la page 2. Reportez le total du devis et les versements déjà faits, cochez acompte ou arrhes comme sur le devis signé, et calculez le reste dû. Dans l’Excel, le même n° de devis sur chaque ligne suffit pour que le reste dû se calcule.`,
      },
      {
        label: 'Étape 4',
        title: 'Signez, remettez, rangez',
        description: `Signez le reçu et remettez-le à la personne qui a payé. Le reçu d’acompte se fait en deux exemplaires, un pour chacun. En fin de mois, la synthèse de l’Excel donne vos encaissements par mode de paiement, à rapprocher de votre relevé bancaire.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Ce qu’un reçu prouve, et les documents qu’il ne remplace pas',
    intro: `Aucun texte n’impose un reçu pour chaque paiement. Mais cinq règles disent ce qu’il vaut, ce qu’on écrit dessus et quand il faut autre chose${NBSP}; le modèle ne remplace pas l’avis de votre comptable.`,
    facts: [
      {
        contextLabel: 'Code civil, art. 1342-8',
        title: 'Le paiement se prouve par tout moyen',
        text: `Un relevé de compte, un talon de chèque, un message${NBSP}: tout peut prouver qu’une somme a été payée. Le reçu signé par celui qui reçoit l’argent est la preuve la plus simple, surtout pour des espèces qui ne laissent aucune autre trace. D’où le numéro, la date, la somme en lettres et la signature.`,
        sourceName: PAYMENT_PROOF_SOURCE.name,
        sourceUrl: PAYMENT_PROOF_SOURCE.url,
      },
      {
        contextLabel: 'Prestation de services, arrêté du 3 octobre 1983',
        title: `Une note dès 25${NBSP}€ TTC, remise avant le paiement`,
        text: `Une prestation de services dont le prix atteint 25${NBSP}€ TTC donne lieu à une note, remise dès la prestation rendue et en tout cas avant le paiement${NBSP}; en dessous, au client qui la demande. Elle porte la date, le nom et l’adresse du prestataire, le nom du client, la date et le lieu de la prestation, le détail en quantités et en prix, et le total HT et TTC. Elle s’établit en double, et le prestataire garde le sien deux ans.`,
        sourceName: SERVICE_NOTE_SOURCE.name,
        sourceUrl: SERVICE_NOTE_SOURCE.url,
      },
      {
        contextLabel: 'Entre professionnels',
        title: 'Le reçu ne remplace pas la facture',
        text: `Entre professionnels, une facture est obligatoire pour chaque vente de bien ou prestation de services. Un reçu peut s’y ajouter pour un paiement comptant, jamais la remplacer. Pour une vente de biens à un particulier, la facture ou la note n’est due qu’à sa demande, pour une vente à distance ou une livraison intracommunautaire exonérée.`,
        sourceName: INVOICING_OBLIGATION_SOURCE.name,
        sourceUrl: INVOICING_OBLIGATION_SOURCE.url,
      },
      {
        contextLabel: 'Code monétaire et financier, D112-3',
        title: `Espèces${NBSP}: 1${NBSP}000${NBSP}€ au plus vers un professionnel`,
        text: `Un particulier qui a son domicile fiscal en France paie un professionnel en espèces dans la limite de 1${NBSP}000${NBSP}€, comme un professionnel qui en paie un autre. Le plafond monte pour un particulier domicilié à l’étranger. En cas de dépassement, l’amende va jusqu’à 5${NBSP}% des sommes, partagée par moitié entre celui qui paie et celui qui accepte. Entre particuliers, pas de plafond, mais un écrit au-delà de 1${NBSP}500${NBSP}€.`,
        sourceName: CASH_PAYMENT_CEILING_SOURCE.name,
        sourceUrl: CASH_PAYMENT_CEILING_SOURCE.url,
      },
      {
        contextLabel: 'Acompte ou arrhes',
        title: 'Le mot écrit sur le reçu décide de ce qu’on rend',
        text: `Après un acompte, chacun est tenu d’aller au bout. Avec des arrhes, le client peut renoncer en les perdant, et le professionnel en les rendant au double. Quand rien n’est précisé, une somme versée d’avance vaut arrhes. Le reçu reprend le mot du devis signé${NBSP}: s’ils se contredisent, c’est un litige tout trouvé.`,
        sourceName: CONSUMER_DEPOSIT_SOURCE.name,
        sourceUrl: CONSUMER_DEPOSIT_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Reçu de paiement${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de reçu de paiement est-il gratuit, et existe-t-il en Word${NBSP}?`,
        answer: `Oui aux deux. Le PDF, l’Excel et le Word se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne «${NBSP}modèle proposé par Dibodev${NBSP}» en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Reçu, note ou facture${NBSP}: quelle différence${NBSP}?`,
        answer: `Le reçu atteste qu’une somme a été remise${NBSP}; il ne détaille pas ce qui a été vendu. La facture et la note détaillent la vente ou la prestation, les quantités, les prix et les totaux HT et TTC. Entre professionnels, la facture est obligatoire pour chaque vente ou prestation${NBSP}; pour une prestation à un particulier, la note l’est dès 25${NBSP}€ TTC. Le reçu vient en plus, il ne prend la place d’aucune des deux.`,
      },
      {
        question: `Un reçu de paiement est-il obligatoire${NBSP}?`,
        answer: `Je n’ai trouvé aucun texte qui l’impose pour chaque paiement. Le Code civil dit que le paiement se prouve par tout moyen${NBSP}: virement et chèque laissent une trace à la banque, les espèces n’en laissent aucune. C’est pour elles que le reçu sert le plus, et pour une avance versée sur un devis. Celui qui paie a tout intérêt à le demander.`,
      },
      {
        question: `Quelles mentions mettre sur un reçu de paiement${NBSP}?`,
        answer: `Un numéro, la date, le nom de celui qui reçoit et de celui qui paie, la somme en chiffres et en lettres, l’objet du paiement, le mode de paiement, et la signature de celui qui reçoit. Le carnet ajoute la nature (paiement complet, acompte, arrhes ou solde) et le reste dû. Pour une entreprise, le nom, l’adresse et le SIRET évitent tout doute sur qui a encaissé.`,
      },
      {
        question: `Comment faire un reçu d’acompte${NBSP}?`,
        answer: `Prenez la page 2${NBSP}: reportez le numéro et le total TTC du devis, les versements déjà faits, puis la somme reçue ce jour. Cochez acompte ou arrhes, le même mot que sur le devis, car il décide de ce que chacun perd ou rend si la commande est annulée. Le reste dû se calcule en retirant tout ce qui a été reçu du total. Faites-le en deux exemplaires et signez-le.`,
      },
      {
        question: `Peut-on être payé en espèces sans limite${NBSP}?`,
        answer: `Non, dès qu’un professionnel est en jeu. Service-Public fixe la limite à 1${NBSP}000${NBSP}€ pour un particulier domicilié en France qui paie un professionnel, et entre professionnels, avec une amende jusqu’à 5${NBSP}% des sommes partagée entre les deux. Entre particuliers, il n’y a pas de plafond, mais un écrit est demandé au-delà de 1${NBSP}500${NBSP}€. L’Excel signale chaque reçu en espèces au-delà de 1${NBSP}000${NBSP}€.`,
      },
      {
        question: `Faut-il numéroter les reçus et les garder${NBSP}?`,
        answer: `Pour un reçu, je n’ai pas trouvé de règle de numérotation ou de durée propre${NBSP}; la note de prestation, elle, se garde deux ans. Numéroter à la suite, sans trou, reste le meilleur moyen de montrer qu’aucun encaissement n’a disparu, et la souche garde la trace de chaque reçu remis. Pour la durée de conservation de vos pièces de recettes, suivez ce que vous dit votre comptable.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Trois feuilles. «${NBSP}Registre des reçus${NBSP}»${NBSP}: une ligne par reçu, nature et mode choisis dans une liste${NBSP}; le déjà reçu et le reste dû se calculent par n° de devis, et une colonne d’alerte relit chaque ligne. «${NBSP}Reçu à imprimer${NBSP}»${NBSP}: choisissez un numéro en case jaune, le reçu se remplit, il ne reste qu’à écrire la somme en lettres et à signer. «${NBSP}Synthèse${NBSP}»${NBSP}: vos encaissements de chaque mois par mode de paiement, pour l’année choisie.`,
      },
      {
        question: `Et la facture électronique, change-t-elle quelque chose${NBSP}?`,
        answer: `La réforme de la facture électronique porte sur les factures, et un reçu n’en est pas une${NBSP}: il reste une preuve de paiement, sur papier ou en PDF. Ce sont vos factures qui changent de forme, si vous facturez des entreprises. Le test de la page outil vous dit, en cinq questions, si vous êtes concerné et à quelle date.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand les reçus, les devis et les factures se recopient d’un fichier à l’autre et que les acomptes se suivent à la main, un outil qui relie chaque encaissement à son devis et à sa facture vous rend des heures. Décrivez-moi votre activité${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: `Faire le test${NBSP}: la facture électronique me concerne-t-elle${NBSP}?`,
  },
}
