import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  B2B_PAYMENT_TERMS_SOURCE,
  COMMERCIAL_DOCUMENTS_SOURCE,
  CONSUMER_DELIVERY_DATE_SOURCE,
  CONSUMER_DEPOSIT_SOURCE,
  PURCHASE_ORDER_TEMPLATE_DOCX_PATH,
  PURCHASE_ORDER_TEMPLATE_PDF_PATH,
  PURCHASE_ORDER_TEMPLATE_UPDATED_AT,
  PURCHASE_ORDER_TEMPLATE_XLSX_PATH,
  SALE_AGREEMENT_SOURCE,
  TERMS_OF_SALE_SOURCE,
} from '~/core/constants/freeTemplates/purchaseOrder/pageShared'
import { NBSP } from '~/core/constants/typography'

export const PURCHASE_ORDER_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Bon de commande${NBSP}: modèle gratuit Word, Excel et PDF`,
    description: `Bon de commande${NBSP}: modèle gratuit en PDF, Word et Excel, fournisseur ou client, totaux HT, TVA et TTC calculés, acompte ou arrhes, suivi des commandes.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle de bon de commande et de registre de suivi des commandes',
  },
  breadcrumbLabel: 'Bon de commande',
  shareImage: {
    titleLines: ['Bon de commande', 'modèle gratuit'],
    highlight: 'Bon de commande',
    subtitle: 'Bon de commande et suivi des commandes en PDF, Word et Excel, totaux HT, TVA et TTC calculés',
    badge: 'Gratuit, sans inscription',
    icon: 'receipt',
    alt: `Modèle de bon de commande gratuit${NBSP}: bon de commande et suivi des commandes en PDF, Word et Excel, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Bon de commande',
    titleAfter: `${NBSP}: modèle gratuit PDF, Word et Excel (+ suivi des commandes)`,
    reassurances: [
      'Fournisseur ou client, un seul bon',
      'Excel avec HT, TVA et TTC calculés',
      'Sans inscription ni e-mail',
    ],
    aboutTitle: 'À propos du modèle',
    description: `Un bon de commande prêt à remplir, qui sert dans les deux sens${NBSP}: quand vous commandez à un fournisseur, et quand un client vous commande. Une case dit qui est l’acheteur. Le bon porte les identifiants des deux parties, les lignes avec leur prix unitaire HT, leur remise et leur taux de TVA, la somme versée à la commande en précisant acompte ou arrhes, la date de livraison et le délai de paiement, puis deux signatures. La page 2 suit toutes les commandes de la période${NBSP}: commandé, reçu, reste à livrer, reste à payer.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai créé StockPME, un logiciel de gestion de stock toujours utilisé par des PME, et relu les articles du Code civil, du Code de la consommation et du Code de commerce qui touchent à la commande pour que les mentions soient exactes.',
    updatedAt: PURCHASE_ORDER_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les artisans, les commerçants et les TPE qui passent ou reçoivent des commandes. Trois fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime et se signe, l’Excel calcule les totaux et suit les commandes, le Word se modifie librement.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: PURCHASE_ORDER_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: PURCHASE_ORDER_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 feuilles, totaux calculés',
      },
      {
        label: 'Télécharger la version Word',
        href: PURCHASE_ORDER_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 pages, modifiable',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à votre entreprise. Il ne remplace pas l’avis d’un juriste ni celui de votre comptable.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Un bon de commande, un suivi des commandes et une liste de fournisseurs et de clients',
    intro: `Le PDF tient sur deux pages A4${NBSP}: le bon de commande, puis le suivi des commandes de la période. L’Excel ajoute une troisième feuille, la liste de vos fournisseurs et de vos clients, qui remplit le bon et calcule les échéances de paiement.`,
    documents: [
      {
        title: 'Bon de commande',
        format: `Page 1 du PDF, feuille «${NBSP}Bon de commande${NBSP}» de l’Excel`,
        items: [
          `Sens de la commande en deux cases${NBSP}: je commande à un fournisseur (je suis l’acheteur) ou mon client me commande (je suis le vendeur)`,
          'N° du bon, date de la commande, n° du devis ou de l’offre acceptée, personne qui suit la commande',
          `Acheteur et vendeur${NBSP}: nom ou raison sociale, adresse, SIREN ou SIRET, n° de TVA intracommunautaire, contact, et une case «${NBSP}l’acheteur est un particulier${NBSP}»`,
          `12 lignes (15 dans l’Excel)${NBSP}: référence, désignation, quantité, unité, prix unitaire HT, remise, taux de TVA, total HT`,
          `Totaux${NBSP}: total HT, remise globale, frais de livraison, TVA par taux, total TTC, somme versée à la commande avec la case acompte ou arrhes, reste à payer`,
          `Livraison (adresse, date ou délai convenu, mode, frais), paiement (mode, échéance, pénalités de retard, CGV jointes), signatures «${NBSP}Bon pour commande${NBSP}» de l’acheteur et d’acceptation du vendeur`,
        ],
      },
      {
        title: 'Suivi des commandes',
        format: `Page 2 du PDF, feuille «${NBSP}Registre des commandes${NBSP}» de l’Excel`,
        items: [
          `Une ligne par bon${NBSP}: n°, date, sens (achat ou vente), fournisseur ou client, objet, montant TTC, somme versée d’avance`,
          'Livraison prévue le, quantité commandée, quantité reçue et reste à livrer',
          `Dans l’Excel, statut de la livraison calculé à la date du jour${NBSP}: en attente, partielle, en retard, livrée, avec les jours de retard`,
          'N° et date de la facture, échéance calculée avec le délai de paiement du fournisseur ou du client, date du paiement, reste à payer et statut (pas facturée, à payer, en retard, payée)',
          `En tête de l’Excel${NBSP}: commandes à livrer, livraisons en retard, reste à payer sur les achats, reste à encaisser sur les ventes`,
          'Sur le PDF, la liste à vérifier avant de signer un bon et le rappel de ce qu’on fait quand la marchandise arrive',
        ],
      },
      {
        title: 'Fournisseurs et clients',
        format: `Feuille «${NBSP}Fournisseurs et clients${NBSP}» de l’Excel`,
        items: [
          'Nom, rôle (fournisseur, client ou les deux), SIREN ou SIRET, n° de TVA intracommunautaire, adresse, contact',
          'Délai de paiement convenu en jours, en rouge s’il dépasse 60 jours entre professionnels',
          `Case «${NBSP}particulier${NBSP}» qui, sur le bon, déclenche les rappels du Code de la consommation`,
          `Choisissez un nom dans le bon ou le registre${NBSP}: adresse, SIRET, contact et échéance suivent`,
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir le bon de commande en quatre étapes',
    intro:
      'Dans l’Excel, les cases jaunes se choisissent ou se saisissent, les cases blanches s’écrivent librement. Les totaux, la TVA par taux, le reste à payer, la date limite de livraison et les statuts du registre se calculent tout seuls. Les lignes d’exemple sont à effacer.',
    steps: [
      {
        label: 'Étape 1',
        title: 'Le sens de la commande et les deux parties',
        description: `Cochez si vous commandez à un fournisseur ou si votre client vous commande${NBSP}: c’est ce qui dit qui est l’acheteur. Remplissez les deux blocs avec les SIREN ou SIRET et les numéros de TVA. Si l’acheteur est un particulier, cochez la case${NBSP}: d’autres règles s’appliquent.`,
      },
      {
        label: 'Étape 2',
        title: 'Une ligne par référence',
        description: `Reprenez le numéro du devis ou de l’offre que le bon accepte, puis ses lignes avec les mêmes prix${NBSP}: référence, désignation précise (modèle, dimensions, couleur), quantité, unité, prix unitaire HT, remise et taux de TVA. L’Excel calcule chaque total, la TVA par taux et le TTC.`,
      },
      {
        label: 'Étape 3',
        title: 'Livraison, paiement et somme versée',
        description: `Écrivez une date ou un délai de livraison, le délai de paiement et le mode de règlement. Si une somme est versée à la commande, cochez «${NBSP}acompte${NBSP}» ou «${NBSP}arrhes${NBSP}»${NBSP}: le mot change ce qui se passe si l’un des deux renonce.`,
      },
      {
        label: 'Étape 4',
        title: 'Deux signatures, puis le suivi',
        description: `L’acheteur signe «${NBSP}Bon pour commande${NBSP}», le vendeur date son acceptation, chacun garde un exemplaire. Reportez le bon dans le registre. À l’arrivée de la marchandise, contrôlez-la sur un bon de réception, notez la quantité reçue, puis la facture et son paiement.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Les règles que le bon de commande suit déjà',
    intro: `Six règles du Code civil, du Code de la consommation et du Code de commerce passent par un bon de commande. Le modèle leur réserve une case, une ligne ou une mention${NBSP}; il ne remplace pas l’avis d’un juriste en cas de litige.`,
    facts: [
      {
        contextLabel: 'Code civil, art. 1583',
        title: 'D’accord sur la chose et le prix, la vente est conclue',
        text: `La vente est parfaite entre les parties dès qu’elles sont d’accord sur la chose et sur le prix, même si rien n’est encore livré ni payé. Un bon signé par l’acheteur et accepté par le vendeur en garde la preuve${NBSP}: d’où les références, les quantités, les prix unitaires et les deux signatures datées.`,
        sourceName: SALE_AGREEMENT_SOURCE.name,
        sourceUrl: SALE_AGREEMENT_SOURCE.url,
      },
      {
        contextLabel: 'Acheteur particulier, art. L214-1',
        title: `Sans le mot «${NBSP}acompte${NBSP}», la somme versée vaut arrhes`,
        text: `Entre un professionnel et un consommateur, sauf stipulation contraire, les sommes versées d’avance sont des arrhes${NBSP}: chacun peut renoncer, le client en les perdant, le professionnel en les rendant au double. Un acompte, lui, rend la commande ferme. Le bon porte les deux cases à côté du montant versé.`,
        sourceName: CONSUMER_DEPOSIT_SOURCE.name,
        sourceUrl: CONSUMER_DEPOSIT_SOURCE.url,
      },
      {
        contextLabel: 'Acheteur particulier, art. L216-1',
        title: '30 jours au plus quand aucune date n’est écrite',
        text: `Le professionnel livre à la date ou dans le délai indiqué au consommateur. À défaut, il livre sans retard injustifié et au plus tard trente jours après la conclusion du contrat. Le bon a une ligne «${NBSP}date ou délai de livraison convenu${NBSP}», et l’Excel calcule la date limite.`,
        sourceName: CONSUMER_DELIVERY_DATE_SOURCE.name,
        sourceUrl: CONSUMER_DELIVERY_DATE_SOURCE.url,
      },
      {
        contextLabel: 'Entre professionnels, art. L441-10',
        title: '30 jours par défaut, 60 jours au plus après la facture',
        text: 'Sans accord, le paiement intervient au plus tard 30 jours après la réception des marchandises. Le délai convenu ne peut dépasser 60 jours après la date de la facture, ou 45 jours fin de mois s’il est écrit au contrat. Les pénalités de retard ne peuvent être inférieures à trois fois le taux d’intérêt légal.',
        sourceName: B2B_PAYMENT_TERMS_SOURCE.name,
        sourceUrl: B2B_PAYMENT_TERMS_SOURCE.url,
      },
      {
        contextLabel: 'Conditions générales de vente',
        title: 'Obligatoires envers un particulier, à remettre à un pro qui les demande',
        text: `Entre professionnels, les CGV ne sont pas obligatoires, mais celles qui existent se communiquent au client professionnel qui les demande${NBSP}; elles prévoient l’indemnité forfaitaire de 40${NBSP}€ pour frais de recouvrement en cas de retard. Envers un consommateur, elles se remettent avant le contrat. Le bon a une case «${NBSP}CGV remises et acceptées${NBSP}».`,
        sourceName: TERMS_OF_SALE_SOURCE.name,
        sourceUrl: TERMS_OF_SALE_SOURCE.url,
      },
      {
        contextLabel: 'Ni devis ni facture',
        title: 'La facture reprend le numéro du bon de commande',
        text: `Le devis est le document remis avant le contrat${NBSP}; la facture vient après et porte le numéro du bon de commande quand l’acheteur l’a établi le premier. Un bon de commande se conserve 5 ans, ou 10 ans s’il sert de pièce comptable. D’où le n° du devis accepté en tête du bon, et la facture notée dans le registre.`,
        sourceName: COMMERCIAL_DOCUMENTS_SOURCE.name,
        sourceUrl: COMMERCIAL_DOCUMENTS_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Bon de commande${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de bon de commande est-il gratuit, et existe-t-il en Word${NBSP}?`,
        answer: `Oui, il est gratuit${NBSP}: les trois fichiers se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser. Il existe aussi en Word${NBSP}: le PDF s’imprime et se remplit à la main, le Word se modifie librement, l’Excel se remplit à l’écran et calcule les totaux. Seule contrepartie, une ligne «${NBSP}modèle proposé par Dibodev${NBSP}» en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Un bon de commande signé engage-t-il l’acheteur${NBSP}?`,
        answer: `Oui, dès que l’acheteur et le vendeur sont d’accord sur les articles et le prix${NBSP}: le Code civil (art. 1583) tient alors la vente pour conclue, même avant la livraison et le paiement. Le contrat se forme par la rencontre d’une offre et d’une acceptation (art. 1113)${NBSP}; le bon signé des deux côtés en est la preuve la plus simple. Si le vendeur ne le signe pas, gardez une trace écrite de son accord.`,
      },
      {
        question: `Quelle différence entre un bon de commande, un devis et une facture${NBSP}?`,
        answer: `Le devis est l’offre du vendeur, remise avant le contrat. Le bon de commande est l’engagement de l’acheteur, souvent en reprenant le numéro du devis. La facture vient après la livraison ou la prestation et demande le paiement${NBSP}; elle reprend le numéro du bon de commande quand l’acheteur l’a établi le premier. Les trois se classent ensemble.`,
      },
      {
        question: `Acompte ou arrhes${NBSP}: que mettre sur le bon${NBSP}?`,
        answer: `Un acompte rend la commande ferme${NBSP}: ni l’acheteur ni le vendeur ne peut se dédire. Des arrhes laissent à chacun la possibilité de renoncer, l’acheteur en les perdant, le vendeur en les rendant au double. Quand l’acheteur est un particulier, une somme versée d’avance sans précision vaut arrhes (Code de la consommation, art. L214-1)${NBSP}: cochez donc toujours l’une des deux cases.`,
      },
      {
        question: `Faut-il écrire une date de livraison${NBSP}?`,
        answer: `Pour un client particulier, oui${NBSP}: le vendeur doit lui indiquer une date ou un délai, et sans date le Code de la consommation fixe 30 jours au plus après la commande (art. L216-1). En cas de retard, Service-Public explique que le client peut demander une livraison dans un nouveau délai raisonnable, puis annuler la commande et être remboursé. Entre professionnels, la date se convient librement, mais l’écrire sur le bon évite le débat.`,
      },
      {
        question: `Quels délais de paiement entre professionnels${NBSP}?`,
        answer: `Sans accord, 30 jours après la réception des marchandises ou l’exécution de la prestation. Le délai convenu ne peut dépasser 60 jours après la date de la facture, ou 45 jours fin de mois s’il est écrit au contrat (Code de commerce, art. L441-10). En cas de retard, les pénalités sont d’au moins trois fois le taux d’intérêt légal, plus l’indemnité forfaitaire de 40${NBSP}€ pour frais de recouvrement.`,
      },
      {
        question: `Combien de temps garder les bons de commande${NBSP}?`,
        answer:
          'Entreprendre.Service-Public indique 5 ans pour un bon de commande à usage commercial, et 10 ans quand il sert de pièce comptable. Le plus simple est de le classer avec la facture qui reprend son numéro, et de garder le registre des commandes avec.',
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Trois feuilles. «${NBSP}Bon de commande${NBSP}»${NBSP}: vous choisissez le sens et le fournisseur ou le client dans la liste, son adresse et son SIRET se remplissent${NBSP}; les totaux HT, la TVA par taux, le TTC, la somme versée et le reste à payer se calculent, et des alertes rappellent les règles quand l’acheteur est un particulier. «${NBSP}Registre des commandes${NBSP}» calcule le reste à livrer, les retards, l’échéance et le reste à payer. «${NBSP}Fournisseurs et clients${NBSP}» tient la liste. Chaque feuille s’imprime sur une page A4.`,
      },
      {
        question: `Et pour contrôler la marchandise à l’arrivée${NBSP}?`,
        answer: `Le bon de commande dit ce que vous attendez${NBSP}; la livraison se contrôle ligne par ligne sur un bon de réception (quantités commandée, livrée et acceptée, réserves, photos). Le modèle «${NBSP}fiche d’inventaire + bon de réception${NBSP}» de dibodev.fr en contient un, à côté de ce bon. Reportez ensuite la quantité reçue dans le registre${NBSP}: le reste à livrer se met à jour.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand les bons de commande se recopient à la main dans le stock, que les reliquats se suivent de mémoire et que les factures se rapprochent une à une, un outil qui enchaîne commande, réception et stock vous rend des heures. Décrivez-moi vos achats et vos ventes${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels de gestion de stock',
  },
}
