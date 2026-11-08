import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  BIKE_IDENTIFICATION_RULES_SOURCE,
  BIKE_REPAIR_TICKET_TEMPLATE_UPDATED_AT,
  SERVICE_PRICE_DISPLAY_SOURCE,
  SERVICE_QUOTE_SOURCE,
} from '~/core/constants/freeTemplates/bikeRepairTicket/pageShared'
import {
  BIKE_SHOP_TEMPLATE_PDF_PATH,
  BIKE_SHOP_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/bikeShopSoftware/pageShared'
import { INVOICE_MENTIONS_SOURCE } from '~/core/constants/tools/fieldServiceSoftware/pageShared'
import { HAIR_SALON_BILL_SOURCE } from '~/core/constants/tradeWebsites/hairSalon/pageShared'
import { NBSP } from '~/core/constants/typography'

export const BIKE_REPAIR_TICKET_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Fiche de réparation vélo${NBSP}: modèle gratuit PDF et Excel`,
    description: `Fiche de réparation vélo et bon de dépôt${NBSP}: modèle gratuit PDF et Excel. Devis, pièces et main-d’œuvre, accessoires laissés, suivi d’atelier. Sans inscription.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle de fiche de dépôt et de réparation pour atelier vélo',
  },
  breadcrumbLabel: 'Fiche de réparation vélo',
  shareImage: {
    titleLines: ['Fiche de réparation', 'vélo gratuite'],
    highlight: 'Fiche de réparation',
    subtitle: 'Bon de dépôt, devis, pièces et main-d’œuvre en PDF et Excel, suivi des vélos à l’atelier',
    badge: 'Gratuit, sans inscription',
    icon: 'fileText',
    alt: `Fiche de réparation vélo gratuite${NBSP}: bon de dépôt, devis et suivi d’atelier en PDF et Excel, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Fiche de réparation vélo',
    titleAfter: `${NBSP}: modèle gratuit PDF et Excel (+ bon de dépôt et devis)`,
    reassurances: [
      'Bon de dépôt + devis + suivi d’atelier',
      'Excel avec totaux et délais calculés',
      'Sans inscription ni e-mail',
    ],
    aboutTitle: 'À propos du modèle',
    description: `Une fiche de dépôt et de réparation prête à remplir, pour un atelier vélo, un magasin de cycles ou un mécanicien indépendant. Elle se remplit au comptoir, devant le client${NBSP}: le vélo et son numéro de marquage, ce qui reste avec lui (batterie, chargeur, antivol), son état à l’arrivée, puis le diagnostic, le devis accepté ou non, les pièces et la main-d’œuvre, et les signatures au dépôt et au retrait. Une deuxième page suit tous les vélos de l’atelier.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai lu les textes sur le marquage des vélos, le devis, l’affichage des prix et la facture pour que les mentions soient à jour.',
    updatedAt: BIKE_REPAIR_TICKET_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les ateliers vélo, les magasins de cycles et les mécaniciens indépendants. Deux fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime, l’Excel calcule.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: BIKE_SHOP_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: BIKE_SHOP_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 feuilles, totaux et délais calculés',
      },
    ],
    footnote: 'Modèle libre d’utilisation, à adapter à votre atelier. Il ne remplace pas l’avis de votre comptable.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Une fiche de dépôt et de réparation, et le suivi de l’atelier',
    intro: `Le PDF tient sur deux pages A4${NBSP}: la fiche qui accompagne le vélo du dépôt au retrait, puis le registre des vélos et des pièces commandées. L’Excel les reprend sur trois feuilles, avec les totaux du devis, l’écart avec le montant accepté, les jours à l’atelier et les pièces en attente calculés.`,
    documents: [
      {
        title: 'Fiche de dépôt et de réparation',
        format: `Page 1 du PDF, feuille «${NBSP}Fiche et chiffrage${NBSP}» de l’Excel`,
        items: [
          `En-tête de l’atelier (nom, adresse, téléphone, SIREN, n° de TVA ou «${NBSP}TVA non applicable${NBSP}»), n° de fiche, date et heure de dépôt, retrait prévu le, reçu par, puis votre taux horaire et le prix du diagnostic, gratuit ou payant`,
          `Client (nom, téléphone, e-mail, société et SIREN pour un client professionnel) et la façon de le prévenir${NBSP}: SMS, appel ou e-mail`,
          `Vélo${NBSP}: type (ville, VTT, route, gravel, enfant, cargo, pliant, vélo à assistance électrique), marque, modèle, couleur, taille, n° de cadre, n° de marquage${NBSP}; pour un VAE, le moteur, le n° de batterie et les kilomètres au compteur`,
          `Ce qui reste avec le vélo, en cases à cocher (batterie, chargeur, clé de batterie, antivol et sa clé, compteur, éclairage, sacoches, siège enfant), et l’état à l’arrivée${NBSP}: rayures, chocs, pièces cassées, photos prises`,
          `Demande du client, diagnostic de l’atelier, puis le devis ligne par ligne${NBSP}: pièce neuve ou de réemploi, quantité ou heures, prix unitaire HT, TVA, total HT${NBSP}; totaux HT, TVA et TTC, Bonus Réparation déduit, acompte, reste à payer, n° de note ou de facture`,
          'Accord du client (devis accepté ou refusé, et comment, montant à ne pas dépasser sans l’appeler, pièces issues de l’économie circulaire, pièces remplacées à rendre, frais de garde), signatures de l’atelier et du client au dépôt et au retrait, mentions légales',
        ],
      },
      {
        title: 'Suivi des vélos à l’atelier',
        format: `Page 2 du PDF, feuille «${NBSP}Suivi atelier${NBSP}» de l’Excel (une ligne par vélo)`,
        items: [
          'N° de fiche, date de dépôt, client et téléphone, vélo (type, marque, couleur), n° de marquage dans l’Excel, travaux demandés',
          'Devis TTC et date de l’accord, pièces reçues le, retrait prévu, client prévenu le, retiré et payé le',
          `Statut en sept étapes, de «${NBSP}à diagnostiquer${NBSP}» à «${NBSP}retiré${NBSP}», ou «${NBSP}refusé${NBSP}» quand le vélo repart sans réparation`,
          `Dans l’Excel${NBSP}: jours à l’atelier calculés, retards sur la date promise et vélos prêts non retirés signalés, tableau de bord des vélos à l’atelier, en attente d’accord ou de pièces, prêts, et de l’encaissé`,
        ],
      },
      {
        title: 'Pièces commandées',
        format: `Bas de la page 2 du PDF, feuille «${NBSP}Pièces${NBSP}» de l’Excel`,
        items: [
          `Une ligne par pièce${NBSP}: n° de fiche (l’Excel affiche le client tout seul), pièce et référence, fournisseur, neuve ou de réemploi, quantité`,
          'Prix d’achat HT et prix de vente TTC, marge HT calculée',
          `Commandée le, livraison annoncée, reçue le, client prévenu le${NBSP}; jours d’attente et statut calculés (à commander, commandée, en retard, reçue)`,
          'Les pièces pas encore reçues remontent dans le suivi de l’atelier, vélo par vélo',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir la fiche de réparation en quatre étapes',
    intro:
      'Dans l’Excel, seules les cases blanches se saisissent. Les totaux du devis, l’écart avec le montant accepté, les jours à l’atelier et le statut des pièces se calculent tout seuls.',
    steps: [
      {
        label: 'Étape 1',
        title: 'Vos coordonnées et vos prix, une fois pour toutes',
        description:
          'Remplissez l’en-tête de l’atelier (nom, adresse, SIREN, n° de TVA), votre taux horaire et le prix du diagnostic, comme sur la liste affichée au comptoir, puis enregistrez le fichier comme modèle. Chaque nouvelle fiche part de cette copie.',
      },
      {
        label: 'Étape 2',
        title: 'Au comptoir, le vélo et ce qu’il laisse',
        description: `Devant le client, notez le vélo (marque, couleur, n° de cadre et de marquage) et cochez ce qui reste avec lui${NBSP}: la batterie et le chargeur d’un VAE, la clé de l’antivol. Décrivez l’état à l’arrivée et prenez une photo. Le client signe au dépôt et repart avec son exemplaire.`,
      },
      {
        label: 'Étape 3',
        title: 'Le diagnostic et le devis',
        description: `Une ligne par pièce, par temps de main-d’œuvre ou par forfait. Pour les pièces concernées, proposez le réemploi et notez le choix du client, puis le montant au-delà duquel vous l’appelez. Un accord par téléphone se note avec sa date${NBSP}; l’Excel signale tout dépassement.`,
      },
      {
        label: 'Étape 4',
        title: 'Le suivi jusqu’au retrait',
        description: `Reportez chaque vélo dans le suivi${NBSP}: devis, pièces commandées, client prévenu. Au retrait, le client vérifie son vélo et signe, vous remettez la note ou la facture. L’Excel compte les jours et signale les vélos prêts que personne ne vient chercher.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Les mentions que le modèle prévoit déjà',
    intro:
      'Cinq règles passent par la fiche de dépôt et de réparation. Le modèle leur réserve une case, une ligne ou une mention. Ce rappel, relu le 8 novembre 2026, ne vaut pas conseil juridique.',
    facts: [
      {
        contextLabel: 'Depuis le 1er janvier 2021',
        title: 'Le numéro de marquage des vélos vendus',
        text: `Tout vélo, électrique ou non, vendu par un commerçant porte un identifiant${NBSP}: depuis le 1er janvier 2021 pour un vélo neuf, le 1er juillet 2021 pour un vélo d’occasion. Les vélos d’enfant à roues de 16${NBSP}pouces ou moins en sont dispensés. La fiche a sa case «${NBSP}n° de marquage${NBSP}», à côté du n° de cadre.`,
        sourceName: BIKE_IDENTIFICATION_RULES_SOURCE.name,
        sourceUrl: BIKE_IDENTIFICATION_RULES_SOURCE.url,
      },
      {
        contextLabel: 'À l’accueil de l’atelier',
        title: 'La liste de vos prix, affichée',
        text: 'La liste de vos prestations et le prix de chacune sont affichés en euros TTC sur un document unique, lisible de l’endroit où vous recevez les clients. Un diagnostic ou un devis payant y figure aussi. La fiche reprend votre taux horaire et le prix du diagnostic.',
        sourceName: SERVICE_PRICE_DISPLAY_SOURCE.name,
        sourceUrl: SERVICE_PRICE_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: 'À la demande du client',
        title: 'Un devis détaillé, gratuit sauf annonce',
        text: `Quand le prix ne peut pas être fixé à l’avance, vous remettez un devis suffisamment détaillé au client qui le demande. Il est en principe gratuit${NBSP}; payant, son prix est annoncé avant, et il peut être déduit de la réparation. Il vous engage sur les travaux, le prix et le délai${NBSP}; le client ne l’est qu’une fois son accord donné.`,
        sourceName: SERVICE_QUOTE_SOURCE.name,
        sourceUrl: SERVICE_QUOTE_SOURCE.url,
      },
      {
        contextLabel: `Dès 25${NBSP}€ TTC`,
        title: 'Une note détaillée avant le paiement',
        text: `Pour toute prestation de 25${NBSP}€ TTC ou plus, vous remettez une note avant le paiement${NBSP}: date, nom et adresse de l’atelier, nom du client sauf s’il s’y oppose, date et lieu de la réparation, détail des pièces et de la main-d’œuvre, totaux HT et TTC. Vous en gardez le double 2${NBSP}ans.`,
        sourceName: HAIR_SALON_BILL_SOURCE.name,
        sourceUrl: HAIR_SALON_BILL_SOURCE.url,
      },
      {
        contextLabel: 'Sur chaque facture',
        title: 'Les mentions de la facture',
        text: `Numéro unique et chronologique, date, nom, adresse et SIREN de l’atelier, avec «${NBSP}EI${NBSP}» pour un entrepreneur individuel, désignation de chaque pièce et de la main-d’œuvre avec quantité, prix unitaire HT et taux de TVA, totaux HT et TTC. En franchise de TVA, la mention «${NBSP}TVA non applicable, art.${NBSP}293${NBSP}B du code général des impôts${NBSP}».`,
        sourceName: INVOICE_MENTIONS_SOURCE.name,
        sourceUrl: INVOICE_MENTIONS_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Modèle de fiche de réparation vélo${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de fiche de réparation vélo est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Les deux fichiers se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne «${NBSP}modèle proposé par Dibodev${NBSP}» en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Un atelier vélo doit-il faire un devis${NBSP}?`,
        answer: `Pas pour tout. L’affichage de vos prix suffit dans la plupart des cas, pour une crevaison ou un réglage de freins au tarif affiché par exemple. Mais quand le prix ne peut pas être fixé à l’avance, une assistance électrique qui coupe ou une roue à reprendre, vous remettez un devis suffisamment détaillé au client qui le demande. Il vous engage sur les travaux, le prix et le délai${NBSP}; le client n’est engagé qu’une fois son accord donné.`,
      },
      {
        question: `Peut-on faire payer le diagnostic ou le devis${NBSP}?`,
        answer: `Oui, si vous annoncez son prix au client avant de le faire, et qu’il figure sur la liste des prix affichée à l’atelier. Le devis est en principe gratuit, mais rien n’interdit de le faire payer, notamment quand il demande une étude poussée. Vous pouvez proposer d’en déduire le montant si le client accepte la réparation${NBSP}: la fiche a la case «${NBSP}diagnostic payant${NBSP}» et le montant déduit.`,
      },
      {
        question: `Faut-il noter le numéro de marquage du vélo${NBSP}?`,
        answer: `Ce n’est pas une obligation de l’atelier qui répare${NBSP}: le marquage s’impose à la vente. Mais c’est le moyen le plus sûr de ne pas confondre deux vélos noirs de la même marque. Tout vélo vendu par un commerçant porte un identifiant depuis 2021, neuf (1er janvier) ou d’occasion (1er juillet)${NBSP}; un vélo plus ancien ou acheté à un particulier peut ne pas en avoir. Notez alors «${NBSP}non marqué${NBSP}» et le numéro de cadre.`,
      },
      {
        question: `Que noter de plus pour un vélo à assistance électrique${NBSP}?`,
        answer: `Ce qui se sépare du vélo${NBSP}: la batterie, le chargeur et la clé de batterie. La fiche les a en cases à cocher, avec le n° de batterie, la marque du moteur et les kilomètres affichés au compteur, utiles pour une garantie ou le suivi d’entretien. Au retrait, le client vérifie qu’il repart avec tout ce qu’il a laissé.`,
      },
      {
        question: `Faut-il remettre une facture au client${NBSP}?`,
        answer: `Dès 25${NBSP}€ TTC, oui${NBSP}: une note détaillée, remise avant le paiement, dont vous gardez le double 2${NBSP}ans${NBSP}; en dessous, si le client la demande. Le détail des pièces et de la main-d’œuvre peut être omis si un devis détaillé, accepté par le client, correspond aux travaux faits. Pour un client professionnel, la facture est obligatoire quel que soit le montant.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Sur la feuille «${NBSP}Fiche et chiffrage${NBSP}», vous saisissez votre taux horaire HT, puis une ligne par pièce, temps de main-d’œuvre ou forfait${NBSP}: pour la main-d’œuvre, les heures suffisent, le taux s’applique. Les totaux HT, TVA (20${NBSP}% par défaut, modifiable ligne par ligne) et TTC, le reste à payer et l’écart avec le devis accepté se calculent, et une alerte apparaît au-delà du montant autorisé par le client. La feuille «${NBSP}Suivi atelier${NBSP}» compte les jours à l’atelier et signale les retards et les vélos prêts non retirés${NBSP}; la feuille «${NBSP}Pièces${NBSP}» calcule les délais et la marge.`,
      },
      {
        question: `Et quand les vélos s’accumulent à l’atelier${NBSP}?`,
        answer: `Un modèle Excel suffit tant que les fiches tiennent sur l’établi. Au-delà, les logiciels d’atelier vélo (Epsylon, Atelier Vélo+, CycleSoftware, Shifter) enchaînent fiche de réparation, devis, stock de pièces et caisse, à partir de 9${NBSP}€ par mois chez Epsylon (tarifs relevés le 29 septembre 2026). Si votre organisation sort de leur cadre, le test de la page outil vous dit quoi choisir.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand les fiches, les devis et le suivi des vélos se recopient d’un fichier à l’autre, et qu’il faut appeler chaque client pour lui dire que son vélo est prêt, un outil qui les enchaîne vous rend des heures. Décrivez-moi votre atelier${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels pour atelier vélo',
  },
}
