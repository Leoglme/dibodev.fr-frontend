import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  CARRIER_PROTEST_SOURCE,
  CONSUMER_CARRIER_PROTEST_SOURCE,
  CONSUMER_DELIVERY_RESERVATIONS_SOURCE,
  CONSUMER_RISK_TRANSFER_SOURCE,
  DELIVERY_NOTE_TEMPLATE_PDF_PATH,
  DELIVERY_NOTE_TEMPLATE_UPDATED_AT,
  DELIVERY_NOTE_TEMPLATE_XLSX_PATH,
  DELIVERY_OBLIGATION_SOURCE,
  INVOICE_TIMING_SOURCE,
} from '~/core/constants/freeTemplates/deliveryNote/pageShared'
import { NBSP } from '~/core/constants/typography'

export const DELIVERY_NOTE_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Bon de livraison${NBSP}: modèle gratuit PDF et Excel`,
    description: `Bon de livraison${NBSP}: modèle gratuit PDF et Excel, reste à livrer calculé, case reçu conforme ou avec réserves, fiche de réserves pour le transporteur.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle de bon de livraison et de fiche de réserves à la livraison',
  },
  breadcrumbLabel: 'Bon de livraison',
  shareImage: {
    titleLines: ['Bon de livraison', 'modèle gratuit'],
    highlight: 'Bon de livraison',
    subtitle: 'Bon de livraison avec reste à livrer et fiche de réserves à la livraison, en PDF et Excel',
    badge: 'Gratuit, sans inscription',
    icon: 'truck',
    alt: `Modèle de bon de livraison gratuit${NBSP}: bon de livraison et fiche de réserves à la livraison en PDF et Excel, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Bon de livraison',
    titleAfter: `${NBSP}: modèle gratuit PDF et Excel (+ fiche de réserves)`,
    reassurances: [
      'Bon de livraison + fiche de réserves',
      'Excel avec le reste à livrer calculé',
      'Sans inscription ni e-mail',
    ],
    aboutTitle: 'À propos du modèle',
    description: `Un bon de livraison et une fiche de réserves prêts à remplir, pour une TPE qui livre ses clients${NBSP}: négoce, fournitures, mobilier, matériaux, location de matériel, vente aux particuliers. Le bon dit ce qui part, ce qui reste à livrer et dans combien de colis, puis le client coche «${NBSP}reçu conforme${NBSP}» ou «${NBSP}reçu avec réserves${NBSP}» et signe devant le livreur. Quand un colis arrive abîmé, manquant ou faux, la fiche de réserves garde la description, les photos et la date du courrier au transporteur.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai lu les articles du Code civil sur la délivrance, ceux du Code de la consommation sur la livraison aux particuliers et l’article du Code de commerce sur les réserves au transporteur, pour que les mentions et les délais soient exacts.',
    updatedAt: DELIVERY_NOTE_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les entreprises qui livrent leurs clients, avec leur propre camion ou par un transporteur. Deux fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime en deux exemplaires, l’Excel calcule le reste à livrer et tient le registre. Vous recevez une livraison d’un fournisseur${NBSP}? Prenez plutôt notre modèle de fiche d’inventaire et bon de réception.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: DELIVERY_NOTE_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: DELIVERY_NOTE_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 feuilles, reste à livrer calculé',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à vos produits et à vos livraisons. Il ne remplace pas l’avis d’un juriste.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Un bon de livraison, une fiche de réserves et un registre des livraisons',
    intro: `Le PDF tient sur deux pages A4${NBSP}: le bon de livraison au recto, la fiche de réserves au verso. L’Excel les prolonge sur trois feuilles${NBSP}: le bon avec son reste à livrer, le registre de toutes vos livraisons, et le suivi des livraisons partielles, commande par commande.`,
    documents: [
      {
        title: 'Bon de livraison',
        format: `Page 1 du PDF, feuille «${NBSP}Bon de livraison${NBSP}» de l’Excel`,
        items: [
          `En-tête de l’expéditeur (nom, adresse, SIREN ou SIRET), n° du bon, date de livraison, n° de la commande du client, livraison «${NBSP}n°${NBSP}2 sur 3${NBSP}» quand elle se fait en plusieurs fois`,
          `Destinataire et adresse de facturation, adresse de livraison si elle est différente, contact sur place, créneau et code d’accès`,
          `12 lignes (14 dans l’Excel)${NBSP}: référence, désignation, unité, quantité commandée, déjà livrée, livrée ce jour, reste à livrer, n° de colis${NBSP}; l’Excel calcule le reste et le statut de chaque ligne (soldée, partielle, en trop)`,
          `Nombre de colis, palettes, poids, case «${NBSP}solde la commande${NBSP}» ou «${NBSP}partielle${NBSP}» avec la date de la suite`,
          'Transport (par nos soins, transporteur et n° de suivi, retrait par le client) et documents remis avec la marchandise (notice, garantie, emballages consignés)',
          `Réception${NBSP}: reçu conforme, reçu avec réserves ou refusé, réserves écrites, nom, date, heure et signature du destinataire, signature du livreur`,
        ],
      },
      {
        title: 'Fiche de réserves à la livraison',
        format: `Page 2 du PDF, colonnes «${NBSP}Réception${NBSP}» et «${NBSP}Réserves${NBSP}» du registre Excel`,
        items: [
          'Rappel du bon de livraison, de la commande, de la date et de l’heure de livraison, du transporteur et du n° de suivi',
          `Neuf cases à cocher${NBSP}: colis écrasé ou mouillé, emballage rouvert, palette penchée, colis manquant (reçus sur annoncés), quantité inférieure, produit cassé, erreur de référence, notice manquante, mauvaise adresse`,
          `7 lignes de réserves${NBSP}: colis ou référence, description précise, quantité concernée, n° des photos, suite demandée (remplacement, complément, reprise, avoir)`,
          'Liste des photos à prendre avant de jeter l’emballage, et le texte des réserves écrites sur le bordereau du transporteur, recopié mot pour mot',
          `Les délais pour écrire au transporteur (3${NBSP}jours, 10${NBSP}jours pour un particulier qui n’a pas pu vérifier) et le suivi du courrier${NBSP}: date, n° du recommandé, vendeur prévenu, solution`,
        ],
      },
      {
        title: 'Registre et livraisons partielles',
        format: `Feuilles «${NBSP}Registre des livraisons${NBSP}» et «${NBSP}Livraisons partielles${NBSP}» de l’Excel`,
        items: [
          `Registre, une ligne par bon${NBSP}: date, n° du bon, client, commande, livré par, colis, livraison complète ou partielle, client particulier ou non, réception, réserves`,
          `Pour chaque livraison avec réserves, l’Excel affiche le délai pour protester et ce qu’il reste à faire${NBSP}: protestation à envoyer, réclamation à suivre`,
          'En tête du registre, le nombre de livraisons, de livraisons partielles, de réceptions avec réserves et de dossiers à traiter',
          `Suivi par commande${NBSP}: pour chaque article, la quantité commandée et jusqu’à trois bons avec leur quantité${NBSP}; total livré, reste à livrer, statut et dernier bon se calculent`,
          `Vous tapez un n° de commande dans la case jaune${NBSP}: l’Excel dit combien de lignes sont soldées et ce qu’il reste à livrer`,
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir le bon de livraison en quatre étapes',
    intro:
      'Dans l’Excel, seules les cases blanches et les cases jaunes se saisissent. Le reste à livrer, le statut des lignes et ce qu’il reste à faire se calculent tout seuls. Les lignes d’exemple sont à remplacer.',
    steps: [
      {
        label: 'Étape 1',
        title: 'Avant le départ, la commande et les colis',
        description: `Reprenez le n° de la commande du client, puis une ligne par article avec la quantité commandée, ce qui a déjà été livré et ce qui part aujourd’hui${NBSP}: le reste à livrer se calcule. Numérotez les colis et notez leur nombre. Imprimez deux exemplaires.`,
      },
      {
        label: 'Étape 2',
        title: 'À la livraison, le client vérifie devant le livreur',
        description: `Il compte les colis, regarde leur état et, si possible, ouvre ceux qui sont abîmés. Puis il coche «${NBSP}reçu conforme${NBSP}», «${NBSP}reçu avec réserves${NBSP}» ou «${NBSP}refusé${NBSP}», et écrit ce qu’il voit${NBSP}: quel colis, quel dégât, combien de pièces manquent.`,
      },
      {
        label: 'Étape 3',
        title: 'Une réserve, une ligne de la fiche et des photos',
        description: `Au verso, une ligne par problème, avec la quantité et les numéros de photos. Photographiez le colis fermé avec son étiquette, puis le contenu. Quand un transporteur a livré, la protestation part par lettre recommandée dans les 3${NBSP}jours${NBSP}: notez la date et le n° du recommandé.`,
      },
      {
        label: 'Étape 4',
        title: 'Après, le registre et la facture',
        description: `Reportez le bon dans le registre, et chaque quantité livrée dans le suivi des livraisons partielles. La facture se fait à part${NBSP}: à la livraison, ou une seule à la fin du mois pour toutes les livraisons du mois au même client.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Les règles que le modèle suit déjà',
    intro: `Le Code civil, le Code de la consommation, le Code de commerce et les règles de facturation encadrent la livraison, le risque et les réserves. Le modèle leur réserve une case, une date ou une mention${NBSP}; il ne remplace pas l’avis d’un juriste en cas de litige.`,
    facts: [
      {
        contextLabel: 'Code civil, art. 1604',
        title: 'Le bon signé prouve la délivrance',
        text: `Le vendeur doit délivrer la chose vendue, c’est-à-dire la faire passer «${NBSP}en la puissance et possession de l’acheteur${NBSP}», dans la quantité prévue au contrat (art. 1616). Le bon de livraison daté, avec les quantités livrées et la signature du destinataire, en garde la trace écrite, livraison par livraison.`,
        sourceName: DELIVERY_OBLIGATION_SOURCE.name,
        sourceUrl: DELIVERY_OBLIGATION_SOURCE.url,
      },
      {
        contextLabel: 'Client particulier, art. L216-5',
        title: 'Un écrit à la livraison qui rappelle le droit aux réserves',
        text: `Quand le client est un consommateur, le vendeur lui remet, à la prise de possession, un document écrit qui mentionne son droit de formuler des réserves, par exemple si le bien est abîmé ou livré sans sa notice. Et l’absence de réserves ne dispense pas le vendeur de la garantie de conformité. D’où la case «${NBSP}reçu avec réserves${NBSP}» et les lignes pour les écrire.`,
        sourceName: CONSUMER_DELIVERY_RESERVATIONS_SOURCE.name,
        sourceUrl: CONSUMER_DELIVERY_RESERVATIONS_SOURCE.url,
      },
      {
        contextLabel: 'Client particulier, art. L216-2',
        title: 'Le risque passe au client quand il prend le bien en main',
        text: 'Avec un consommateur, le risque de perte ou d’abîme passe à lui au moment où lui, ou une personne qu’il a désignée, prend physiquement possession du bien. S’il a choisi lui-même un autre transporteur que celui proposé par le vendeur, le risque passe dès la remise à ce transporteur (art. L216-3). La date et l’heure de réception du bon marquent ce moment.',
        sourceName: CONSUMER_RISK_TRANSFER_SOURCE.name,
        sourceUrl: CONSUMER_RISK_TRANSFER_SOURCE.url,
      },
      {
        contextLabel: `3${NBSP}jours, Code de commerce, art. L133-3`,
        title: 'Les réserves au transporteur se confirment par écrit',
        text: 'Quand un transporteur achemine la marchandise, la réception éteint toute action contre lui pour avarie ou perte partielle, sauf si le destinataire lui notifie une protestation motivée dans les trois jours, jours fériés non compris, par lettre recommandée ou acte extrajudiciaire. La fiche de réserves note la date de ce courrier et le n° du recommandé.',
        sourceName: CARRIER_PROTEST_SOURCE.name,
        sourceUrl: CARRIER_PROTEST_SOURCE.url,
      },
      {
        contextLabel: `10${NBSP}jours, Code de la consommation, art. L224-65`,
        title: 'Un délai plus long pour le particulier qui n’a pas pu vérifier',
        text: `Quand un consommateur reçoit lui-même le colis et que le transporteur ne prouve pas lui avoir laissé la possibilité de vérifier son bon état, le délai de trois jours passe à dix jours. La case «${NBSP}le livreur a refusé que je vérifie le contenu${NBSP}» de la fiche sert à le noter le jour même.`,
        sourceName: CONSUMER_CARRIER_PROTEST_SOURCE.name,
        sourceUrl: CONSUMER_CARRIER_PROTEST_SOURCE.url,
      },
      {
        contextLabel: 'Facture à la livraison ou à la fin du mois',
        title: 'Le bon de livraison ne remplace pas la facture',
        text: 'La facture d’une vente se fait en principe au moment de la livraison. Quand plusieurs livraisons distinctes partent au même client dans le mois, une facture récapitulative peut être émise au plus tard à la fin du mois. Le bon ne porte donc pas de prix, et la facture peut citer les numéros des bons qu’elle regroupe.',
        sourceName: INVOICE_TIMING_SOURCE.name,
        sourceUrl: INVOICE_TIMING_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Bon de livraison${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de bon de livraison est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Les deux fichiers se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne «${NBSP}modèle proposé par Dibodev${NBSP}» en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Le bon de livraison est-il obligatoire${NBSP}?`,
        answer: `Entre professionnels, les textes que j’ai lus n’imposent ni sa forme ni ses mentions, mais c’est la preuve écrite que vous avez livré ce que dit la commande, dans la quantité prévue (Code civil, art. 1604 et 1616). Avec un particulier, le vendeur doit lui remettre à la livraison un document écrit qui mentionne son droit de formuler des réserves (Code de la consommation, art. L216-5)${NBSP}: le bon de ce modèle a la case prévue.`,
      },
      {
        question: `Bon de livraison ou bordereau de livraison${NBSP}: quelle différence${NBSP}?`,
        answer: `Dans l’usage, les deux mots désignent souvent le même papier${NBSP}: la liste de ce qui est livré, signée par le client. Quand un transporteur livre, il a en plus son propre document, papier ou sur son terminal, qu’il fait signer. Écrivez vos réserves sur les deux, et recopiez celles du transporteur mot pour mot sur la fiche de réserves.`,
      },
      {
        question: `Quelle différence entre le bon de livraison et la facture${NBSP}?`,
        answer: `Le bon dit ce qui a été remis, sans prix${NBSP}; la facture dit ce que le client doit payer. La facture se fait en principe à la livraison, ou une seule au plus tard à la fin du mois pour plusieurs livraisons au même client. Avec la facture électronique, l’adresse de livraison devient une mention de la facture quand elle diffère de celle du client${NBSP}: Entreprendre.Service-Public.fr l’annonce pour les PME et les micro-entreprises à partir du 1er${NBSP}septembre 2027.`,
      },
      {
        question: `Que faire si un colis arrive abîmé ou s’il en manque un${NBSP}?`,
        answer: `Devant le livreur, cochez «${NBSP}reçu avec réserves${NBSP}» et écrivez précisément ce que vous voyez${NBSP}: quel colis, quel dégât, combien manquent. Photographiez le colis fermé avec son étiquette, puis le contenu, et gardez l’emballage. Si un transporteur a livré, envoyez-lui une protestation motivée par lettre recommandée dans les 3${NBSP}jours, jours fériés non compris, et prévenez le vendeur.`,
      },
      {
        question: `Combien de temps pour contester auprès du transporteur${NBSP}?`,
        answer: `Trois jours après la réception, jours fériés non compris, par lettre recommandée ou acte extrajudiciaire (Code de commerce, art. L133-3)${NBSP}; sans cela, plus d’action contre lui pour avarie ou perte partielle. Pour un particulier qui a reçu le colis lui-même sans que le transporteur lui laisse vérifier son état, le délai passe à dix jours (Code de la consommation, art. L224-65). Un particulier qui n’a rien noté garde la garantie de conformité du vendeur.`,
      },
      {
        question: `Comment faire une livraison partielle${NBSP}?`,
        answer: `Un bon par départ, avec le même n° de commande et «${NBSP}livraison n°${NBSP}2 sur 3${NBSP}» en tête. Chaque ligne reprend la quantité commandée, ce qui est déjà parti et ce qui part aujourd’hui${NBSP}: le reste à livrer se calcule. La feuille «${NBSP}Livraisons partielles${NBSP}» de l’Excel suit chaque article sur trois bons et dit quand la commande est soldée.`,
      },
      {
        question: `Combien de temps garder les bons de livraison${NBSP}?`,
        answer: `Dix ans à compter de la clôture de l’exercice${NBSP}: Entreprendre.Service-Public.fr range les bons de commande, de livraison et de réception parmi les pièces justificatives de la comptabilité. Gardez avec chaque bon signé sa fiche de réserves, les photos et la copie du recommandé envoyé au transporteur.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Trois feuilles, avec des lignes d’exemple à remplacer. «${NBSP}Bon de livraison${NBSP}»${NBSP}: vous saisissez quantités commandée, déjà livrée et livrée ce jour, le reste à livrer et le statut de chaque ligne se calculent, et une alerte demande les réserves si la réception n’est pas conforme. «${NBSP}Registre des livraisons${NBSP}» donne, pour chaque livraison avec réserves, le délai pour protester et ce qu’il reste à faire. «${NBSP}Livraisons partielles${NBSP}» totalise jusqu’à trois bons par article et dit où en est une commande. Chaque feuille s’imprime sur une page A4.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand les bons se recopient de la commande, que les restes à livrer se suivent de tête et que les réserves dorment dans un classeur, un outil qui relie commande, bons et facture vous rend des heures. Si vous louez du matériel, les sorties et les retours ont leur propre modèle${NBSP}: le contrat de location avec état des lieux. Décrivez-moi vos livraisons${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels de location de matériel',
  },
}
