import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { CARPENTRY_CUTTING_LIST_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/carpentryCuttingList/pageShared'
import { HOME_REPAIR_QUOTE_RULES_SOURCE } from '~/core/constants/tools/officialSources'
import {
  BUILDER_WARRANTIES_SOURCE,
  CARPENTRY_TEMPLATE_PDF_PATH,
  CARPENTRY_TEMPLATE_XLSX_PATH,
  CUSTOM_WINDOW_WITHDRAWAL_SOURCE,
  REDUCED_VAT_CUSTOMER_STATEMENT_SOURCE,
} from '~/core/constants/tools/carpentrySoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const CARPENTRY_CUTTING_LIST_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Fiche de débit menuiserie${NBSP}: modèle Excel gratuit (+ devis)`,
    description: `Fiche de débit menuiserie${NBSP}: modèle Excel gratuit, avec devis avec métré, plan de coupe et PV de réception. Cotes et coût matière calculés. Sans inscription.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle de fiche de débit, de devis avec métré, de plan de coupe et de PV de réception pour menuisier',
  },
  breadcrumbLabel: 'Fiche de débit menuiserie',
  shareImage: {
    titleLines: ['Fiche de débit', 'menuiserie en Excel'],
    highlight: 'Fiche de débit',
    subtitle: 'Devis avec métré, fiche de débit, plan de coupe et PV de réception, coût matière et totaux calculés',
    badge: 'Gratuit, sans inscription',
    icon: 'hammer',
    alt: `Fiche de débit menuiserie Excel gratuite${NBSP}: devis avec métré, fiche de débit, plan de coupe et PV de réception, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Fiche de débit menuiserie',
    titleAfter: `${NBSP}: modèle Excel gratuit (+ devis avec métré)`,
    reassurances: ['Devis, débit, plan de coupe, PV', 'Excel avec coût matière calculé', 'Sans inscription ni e-mail'],
    aboutTitle: 'À propos du modèle',
    description: `Une fiche de débit qui passe des cotes finies aux cotes de débit et renvoie le coût matière dans le devis, un devis de menuiserie avec le métré de chaque ouvrage, un plan de coupe simple des panneaux et un procès-verbal de réception, pour un menuisier seul, un agenceur ou une petite équipe de poseurs. Le PDF (devis et PV) s’imprime${NBSP}; l’Excel calcule.`,
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai lu les règles du devis, de la TVA réduite, de la rétractation et des garanties pour que les mentions soient à jour.',
    updatedAt: CARPENTRY_CUTTING_LIST_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les menuisiers, agenceurs, ébénistes et poseurs. Deux fichiers, aucun formulaire à remplir${NBSP}: le PDF (devis et PV de réception) s’imprime, l’Excel (devis, fiche de débit, plan de coupe) calcule.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: CARPENTRY_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, devis et PV de réception',
      },
      {
        label: 'Télécharger la version Excel',
        href: CARPENTRY_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 feuilles, totaux et débits calculés',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à votre entreprise. Il ne remplace ni votre logiciel de CAO ni l’avis de votre comptable.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Un devis avec métré, une fiche de débit, un plan de coupe et un PV de réception',
    intro: `Le PDF reprend le devis et le procès-verbal de réception sur deux pages A4. L’Excel reprend le devis et y ajoute deux feuilles de calcul, la fiche de débit et le plan de coupe${NBSP}: le coût matière de chaque repère remonte tout seul dans le devis.`,
    documents: [
      {
        title: 'Devis avec métré',
        format: 'Page 1 du PDF, feuille « Devis » de l’Excel',
        items: [
          'En-tête de l’entreprise (nom, adresse, téléphone, SIREN ou SIRET, n° de TVA) et assurance décennale (assureur, n° de contrat, couverture géographique)',
          'N° de devis, date, validité, lieu de signature (dans nos locaux ou hors établissement), client, adresse du chantier, cotes prises le et par, logement achevé depuis plus de 2 ans',
          `Ouvrages et métré${NBSP}: repère, ouvrage (désignation, finition, quincaillerie), matériau (bois, PVC, alu…), cotes L × H × ép. en mm, quantité, unité (u, m², ml, forfait), fourniture HT, heures d’atelier et de pose, TVA, total HT, plus une ligne de dépose et évacuation des anciens ouvrages`,
          `Variantes et options hors total (matériau, vitrage, finition, motorisation…)${NBSP}; dans l’Excel, une colonne «${NBSP}Base, variante ou option${NBSP}» les écarte des totaux`,
          `Totaux${NBSP}: total HT, TVA à 5,5${NBSP}%, 10${NBSP}% et 20${NBSP}%, total TTC, acompte à la commande${NBSP}; dans l’Excel, taux horaires atelier et pose et taux d’acompte en cases jaunes, TVA à 10${NBSP}% par défaut sur chaque ligne`,
          `Bloc de rétractation du contrat signé hors établissement (14 jours, aucun paiement avant 7 jours, dates de signature et d’appel de l’acompte), mention de TVA du client au modèle du BOFiP avec ses deux cases (10${NBSP}% ou 5,5${NBSP}%), signatures «${NBSP}Bon pour accord${NBSP}» et cachet`,
        ],
      },
      {
        title: 'Fiche de débit',
        format: 'Feuille « Fiche de débit » de l’Excel, sans page dans le PDF',
        items: [
          `Paramètres en cases jaunes${NBSP}: surcote en longueur (100${NBSP}mm) et en largeur (10${NBSP}mm) pour le massif, coefficient de perte (1,3 par défaut), repris sur chaque ligne et modifiable ligne par ligne`,
          `25 lignes de pièces${NBSP}: repère de l’ouvrage du devis (F1, P2…), pièce (montant, tablette…), essence ou panneau (chêne, mélaminé…), massif ou panneau, longueur et largeur finies, épaisseur, quantité`,
          `Calculé${NBSP}: longueur et largeur de débit (cotes finies + surcotes pour le massif), volume brut en m³ pour le massif ou surface en m² pour le panneau, quantité à acheter avec le coefficient de perte, unité`,
          `Prix d’achat HT au m³ ou au m² à saisir${NBSP}; coût matière HT de chaque ligne et totaux (volume, surface, coût)`,
          'Le coût matière de chaque repère remonte tout seul dans la colonne « Matière HT » du devis, pour le même repère',
        ],
      },
      {
        title: 'Plan de coupe',
        format: 'Feuille « Plan de coupe » de l’Excel, sans page dans le PDF',
        items: [
          `Panneau en cases jaunes${NBSP}: longueur et largeur en mm, trait de scie, largeur à partir de laquelle une chute se garde, prix d’un panneau HT, matière et épaisseur`,
          `15 lignes de pièces${NBSP}: repère, pièce, longueur, largeur, quantité, fil imposé (oui par défaut${NBSP}; «${NBSP}non${NBSP}» autorise la pièce tournée)`,
          `Calculé par pièce${NBSP}: pièces par panneau avec le trait de scie, sens de coupe (dans le fil ou pièce tournée), panneaux si la pièce est débitée à part («${NBSP}Trop grande${NBSP}» si elle ne tient pas), surface, chutes en bout et en rive, chute à garder (oui ou non)`,
          `Résultat${NBSP}: surface totale des pièces, surface d’un panneau, panneaux au minimum (surface seule) et panneaux si chaque pièce est débitée à part (le besoin réel se situe entre les deux), rendement matière, coût des panneaux HT`,
          'Tableau des chutes à garder (longueur, largeur, matière, rangée où, chantier) pour le stock de l’atelier',
        ],
      },
      {
        title: 'PV de réception',
        format: 'Page 2 du PDF, sans feuille dans l’Excel',
        items: [
          'En-tête de l’entreprise et assurance décennale, n° de devis ou de chantier, fin des travaux, date et lieu de la réception',
          'Client (maître d’ouvrage), adresse du chantier, devis accepté le, ouvrages reçus (repères du devis), présents à la réception',
          `Décision du client${NBSP}: réception sans réserve, ou avec les réserves listées`,
          `10 lignes de réserves${NBSP}: n°, repère, réserve constatée (défaut, finition, réglage, élément manquant), photo n°, levée prévue le, levée constatée le avec visa du client, puis «${NBSP}toutes les réserves levées le${NBSP}» avec les deux visas`,
          `Trois garanties datées à partir de la réception${NBSP}: parfait achèvement (1 an), biennale (2 ans), décennale (10 ans)`,
          'Documents remis et observations (notices, attestation décennale, réglages expliqués), signatures du client et de l’entreprise, rappel des deux exemplaires',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir le modèle en six étapes',
    intro:
      'Dans l’Excel, seules les cases blanches et les cases jaunes (paramètres) se saisissent. Les cotes de débit, le coût matière, les totaux et la TVA par taux se calculent tout seuls.',
    steps: [
      {
        label: 'Étape 1',
        title: 'Vos coordonnées et vos taux, une fois pour toutes',
        description:
          'Remplissez l’en-tête (nom, adresse, SIREN ou SIRET, n° de TVA) et votre assurance décennale, puis vos taux horaires d’atelier et de pose et votre taux d’acompte dans les cases jaunes. Enregistrez le fichier comme modèle.',
      },
      {
        label: 'Étape 2',
        title: 'Le client, le chantier et le métré',
        description:
          'Nom, adresses, cotes prises le et par, logement achevé depuis plus de 2 ans. Puis une ligne par ouvrage avec un repère (F1, P2…), le matériau, les cotes L × H × ép., la quantité, l’unité et les heures d’atelier et de pose.',
      },
      {
        label: 'Étape 3',
        title: 'La fiche de débit, repère par repère',
        description:
          'Une ligne par pièce avec le repère de son ouvrage, massif ou panneau, les cotes finies, l’épaisseur, la quantité et le prix d’achat au m³ ou au m². Les cotes de débit et le coût matière se calculent et remontent dans la colonne « Matière HT » du devis.',
      },
      {
        label: 'Étape 4',
        title: 'Le plan de coupe des panneaux',
        description:
          'Indiquez les dimensions du panneau, le trait de scie, la largeur de chute à garder et le prix du panneau, puis vos pièces de panneau avec le fil imposé ou non. Lisez le nombre de panneaux à acheter et les chutes à garder.',
      },
      {
        label: 'Étape 5',
        title: 'TVA, variantes, rétractation, signature',
        description: `Choisissez la TVA de chaque ligne (10${NBSP}% par défaut, 5,5${NBSP}% ou 20${NBSP}%) et faites cocher la mention du BOFiP par le client. Marquez les variantes et options. Si le devis est signé chez le client, datez la signature et l’appel de l’acompte 7 jours plus tard, puis faites signer « Bon pour accord ».`,
      },
      {
        label: 'Étape 6',
        title: 'Le PV de réception en fin de chantier',
        description:
          'Imprimez la page 2, cochez la réception sans réserve ou avec réserves, listez-les avec leur date de levée prévue, et datez les trois garanties à partir de la réception. Un exemplaire signé chacun.',
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Les mentions que le modèle prévoit déjà',
    intro:
      'Quatre règles du menuisier passent par le devis et le procès-verbal de réception. Le modèle leur réserve une case ou une mention.',
    facts: [
      {
        contextLabel: 'Arrêté du 24 janvier 2017',
        title: 'Un devis avant tout dépannage ou réparation chez un particulier',
        text: `Dépannage, réparation ou entretien en menuiserie, portes de garage et portails électriques compris${NBSP}: le devis détaillé est remis avant les travaux, quel que soit le montant, avec les prix HT et TTC et sa durée de validité. Devis et factures indiquent aussi votre assurance professionnelle (nom et adresse de l’assureur, couverture géographique)${NBSP}: l’en-tête du modèle en reprend les références.`,
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: `TVA à 10${NBSP}% et 5,5${NBSP}%`,
        title: 'Plus d’attestation, une mention du client sur le devis',
        text: `L’attestation de TVA, simplifiée ou non, a disparu${NBSP}: pour des travaux dans un logement achevé depuis plus de deux ans, le client certifie les conditions du taux réduit par une mention sur le devis ou la facture, dont le BOFiP publie les modèles. Le devis reprend la mention BOI-LETTRE-000280, avec une case pour le 10${NBSP}% et une pour le 5,5${NBSP}%.`,
        sourceName: REDUCED_VAT_CUSTOMER_STATEMENT_SOURCE.name,
        sourceUrl: REDUCED_VAT_CUSTOMER_STATEMENT_SOURCE.url,
      },
      {
        contextLabel: 'Contrat signé chez le client',
        title: `Fenêtres sur mesure posées${NBSP}: 14 jours de rétractation`,
        text: `Pour la vente et la pose de fenêtres, de volets ou de portes sur mesure, signées hors de votre établissement, la DGCCRF écarte l’exception des biens faits sur mesure${NBSP}: le client dispose de 14 jours pour se rétracter, comptés à partir de la réception des biens (il peut le faire dès la signature), et vous ne pouvez recevoir aucun paiement avant 7 jours. Le devis porte ce bloc, avec la date de signature et celle de l’appel de l’acompte.`,
        sourceName: CUSTOM_WINDOW_WITHDRAWAL_SOURCE.name,
        sourceUrl: CUSTOM_WINDOW_WITHDRAWAL_SOURCE.url,
      },
      {
        contextLabel: 'À la réception des travaux',
        title: 'Le PV de réception fait partir les garanties',
        text: `Parfait achèvement (1 an, réserves du procès-verbal comprises), biennale (2 ans, équipements dissociables) et décennale (10 ans, solidité de l’ouvrage et de ses éléments indissociables, comme les huisseries)${NBSP}: les trois garanties partent de la réception. La page 2 du modèle date chacune d’elles et garde la trace de la levée des réserves.`,
        sourceName: BUILDER_WARRANTIES_SOURCE.name,
        sourceUrl: BUILDER_WARRANTIES_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Fiche de débit menuiserie${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de fiche de débit est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Les deux fichiers se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne «${NBSP}modèle proposé par Dibodev${NBSP}» en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Comment la fiche de débit calcule-t-elle les cotes de débit et le coût matière${NBSP}?`,
        answer: `Pour une pièce en massif, la longueur et la largeur de débit ajoutent les surcotes aux cotes finies (10${NBSP}cm en longueur et 10${NBSP}mm en largeur par défaut), le volume brut se calcule avec l’épaisseur du plateau acheté et la quantité, puis il est multiplié par le coefficient de perte (1,3 par défaut) et par votre prix d’achat au m³. Pour un panneau, c’est la surface aux cotes finies, multipliée par le coefficient et par le prix au m². Les trois valeurs par défaut se changent dans les cases jaunes, et le coefficient se change aussi ligne par ligne.`,
      },
      {
        question: `Le plan de coupe remplace-t-il un optimiseur de découpe${NBSP}?`,
        answer: `Non. La feuille «${NBSP}Plan de coupe${NBSP}» fait un calcul simple${NBSP}: chaque pièce est placée en grille sur ses propres panneaux, avec un trait de scie entre deux pièces, et le besoin réel se situe entre le minimum par la surface et le total si chaque pièce est débitée à part. Un optimiseur comme CutList Optimizer (gratuit avec une limite de calculs, puis 15 ou 25${NBSP}€ par mois), MaxCut (gratuit en version Community) ou OptiCoupe mélange les pièces sur un même panneau et calcule le plan au plus juste.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Trois feuilles. Dans «${NBSP}Devis${NBSP}», vous saisissez les ouvrages, les heures d’atelier et de pose et les autres fournitures${NBSP}; le total HT de chaque ligne, le total HT, la TVA par taux (5,5, 10 et 20${NBSP}%), le total TTC, l’acompte et le montant des variantes et options se calculent tout seuls. Dans «${NBSP}Fiche de débit${NBSP}», les cotes de débit, le volume ou la surface, la quantité à acheter et le coût matière se calculent, et le coût matière remonte dans le devis pour le même repère. Dans «${NBSP}Plan de coupe${NBSP}», les pièces par panneau, le nombre de panneaux et les chutes se calculent. Des listes déroulantes guident le matériau, l’unité, la TVA, massif ou panneau et le fil imposé. Chaque feuille s’imprime sur une page A4.`,
      },
      {
        question: `Quelle TVA sur un devis de menuiserie, et faut-il encore une attestation${NBSP}?`,
        answer: `L’attestation de TVA, simplifiée ou non, n’existe plus. Pour appliquer 10${NBSP}% (article 279-0 bis du CGI) ou 5,5${NBSP}% pour des travaux de rénovation énergétique (article 278-0 bis A), le client certifie les conditions par une mention sur le devis ou la facture, dont le BOFiP publie les modèles (BOI-LETTRE-000280). À défaut, c’est le taux normal de 20${NBSP}%. Le modèle prévoit les trois taux par ligne et la mention prête à cocher et à signer.`,
      },
      {
        question: `Et quand les devis et les fiches de débit se multiplient${NBSP}?`,
        answer: `Un modèle Excel suffit pour quelques chantiers par mois. Au-delà, les logiciels de devis du bâtiment (Obat de 49 à 129${NBSP}€ HT par mois, Batappli 39 ou 79${NBSP}€ HT) reprennent vos ouvrages, les spécialistes de la menuiserie chiffrent sur les tarifs des fabricants (ProDevis START 75${NBSP}€ HT par mois, Anodos 19 ou 49${NBSP}€ par mois) et une CAO comme Aléker sort les débits depuis le plan 3D (3${NBSP}590${NBSP}€ HT de licence, puis 79 à 169${NBSP}€ HT par mois). Si votre organisation sort de leur cadre (du métré à la marge, heures d’atelier et de pose, réserves après la pose), le test de la page outil vous dit quoi choisir.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand le métré, la fiche de débit, les heures d’atelier et de pose et la facture se recopient d’un fichier à l’autre, un outil qui les enchaîne, du métré à la marge du chantier, vous rend des heures. Décrivez-moi votre atelier${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels pour menuisiers',
  },
}
