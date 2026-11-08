import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  EQUIPMENT_RENTAL_AGREEMENT_CONDITION_REPORT_SOURCE,
  EQUIPMENT_RENTAL_AGREEMENT_DEPOSIT_VAT_SOURCE,
  EQUIPMENT_RENTAL_AGREEMENT_LESSOR_DUTIES_SOURCE,
  EQUIPMENT_RENTAL_AGREEMENT_RENTER_DUTIES_SOURCE,
  EQUIPMENT_RENTAL_AGREEMENT_RENTER_LIABILITY_SOURCE,
  EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_UPDATED_AT,
} from '~/core/constants/freeTemplates/equipmentRentalAgreement/pageShared'
import {
  EVENT_RENTAL_TEMPLATE_PDF_PATH,
  EVENT_RENTAL_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/eventRentalSoftware/pageShared'
import { INVOICE_MENTIONS_SOURCE } from '~/core/constants/tools/fieldServiceSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_CONTENT_FR: DibodevFreeTemplatePageContent = {
  meta: {
    title: `Contrat de location de matériel${NBSP}: modèle gratuit PDF + Excel`,
    description: `Contrat de location de matériel${NBSP}: modèle gratuit PDF et Excel, avec état des lieux de sortie et de retour. Dépôt de garantie, casse, retard. Sans inscription.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Modèle de contrat de location de matériel et d’état des lieux de sortie et de retour',
  },
  breadcrumbLabel: 'Contrat de location de matériel',
  shareImage: {
    titleLines: ['Contrat de location', 'de matériel gratuit'],
    highlight: 'Contrat de location',
    subtitle: 'Contrat et état des lieux de sortie et de retour en PDF et Excel, dépôt de garantie, totaux calculés',
    badge: 'Gratuit, sans inscription',
    icon: 'fileText',
    alt: `Modèle de contrat de location de matériel gratuit${NBSP}: contrat et état des lieux de sortie et de retour en PDF et Excel, à télécharger sans inscription sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Contrat de location de matériel',
    titleAfter: `${NBSP}: modèle gratuit PDF et Excel (+ état des lieux)`,
    reassurances: ['Contrat + état des lieux', 'Excel avec totaux calculés', 'Sans inscription ni e-mail'],
    aboutTitle: 'À propos du modèle',
    description:
      'Un contrat de location de matériel et un état des lieux de sortie et de retour prêts à remplir, pour un loueur de matériel événementiel, de mobilier de réception, de sono et d’éclairage ou d’outillage. Le contrat fixe le matériel loué et sa valeur de remplacement, les dates et heures de sortie et de retour, le prix HT et TTC, le dépôt de garantie, et ce qui se passe en cas de casse, de perte, de vol, de retard ou d’annulation. L’état des lieux se remplit article par article, à la sortie puis au retour, devant le client.',
    authorIntro: 'Modèle préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. J’ai lu les règles du louage de choses dans le Code civil, les mentions de la facture et le traitement du dépôt de garantie en TVA pour que les clauses et les mentions soient à jour.',
    updatedAt: EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Téléchargement gratuit',
    lead: `Pour les loueurs de matériel événementiel, de mobilier, de sono et d’éclairage ou d’outillage. Deux fichiers, aucun formulaire à remplir${NBSP}: le PDF s’imprime, l’Excel calcule.`,
    files: [
      {
        label: 'Télécharger le modèle PDF',
        href: EVENT_RENTAL_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: EVENT_RENTAL_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 feuilles, totaux et écarts calculés',
      },
    ],
    footnote:
      'Modèle libre d’utilisation, à adapter à votre activité et à vos conditions de location. Il ne remplace pas l’avis de votre comptable.',
  },
  contents: {
    anchorId: 'contenu',
    eyebrow: 'Ce que contient le modèle',
    title: 'Un contrat de location et un état des lieux, en PDF et en Excel',
    intro: `Le PDF reprend les deux documents sur deux pages A4. L’Excel les reprend sur deux feuilles, avec les totaux HT et TTC, l’acompte, la valeur des manquants, les jours de retard et le dépôt de garantie à rendre calculés, et ajoute une troisième feuille${NBSP}: le suivi de toutes vos locations.`,
    documents: [
      {
        title: 'Contrat de location de matériel',
        format: `Page 1 du PDF, feuille «${NBSP}Matériel et montants${NBSP}» de l’Excel`,
        items: [
          'En-tête du loueur (nom, adresse, téléphone, SIRET, n° de TVA), n° de contrat, date, n° de devis ou de commande, événement',
          `Locataire${NBSP}: nom ou raison sociale, particulier ou professionnel (SIREN), adresse, téléphone, e-mail, représentant, contact sur place le jour de l’événement`,
          `Dates, lieu et usage${NBSP}: sortie et retour (date et heure), retrait au dépôt ou livraison, retour au dépôt ou reprise sur place, adresse d’utilisation, usage prévu, accès, jours facturés`,
          `Matériel loué${NBSP}: référence, désignation (modèle, n° de série, accessoires), quantité, prix unitaire HT, jours, total HT, valeur de remplacement, plus les lignes livraison et reprise, installation et démontage (l’Excel passe de 8 à 15 articles et ajoute une ligne de nettoyage)`,
          `Totaux et dépôt${NBSP}: total HT, TVA, total TTC, acompte, reste à payer${NBSP}; le dépôt de garantie à part, sans TVA tant qu’il est rendu, avec son délai de restitution (l’Excel le compare à la valeur de remplacement totale)`,
          `Conditions${NBSP}: transport et installation, usage et sous-location, assurance, casse, perte et vol, retard, nettoyage, annulation, pénalités pour un client professionnel, signatures «${NBSP}Lu et approuvé${NBSP}» et cachet`,
        ],
      },
      {
        title: 'État des lieux de sortie et de retour',
        format: `Page 2 du PDF, feuille «${NBSP}État des lieux${NBSP}» de l’Excel`,
        items: [
          'N° de contrat, locataire, date, heure et nom de la personne qui contrôle, à la sortie puis au retour',
          `Codes d’état${NBSP}: neuf, bon, usure normale, abîmé, hors service (listes déroulantes dans l’Excel)`,
          `Une ligne par article${NBSP}: à la sortie, quantité, état et accessoires fournis${NBSP}; au retour, quantité, état, accessoires complets, propreté, n° des photos, observations`,
          `Écarts au retour${NBSP}: manquants, casse, nettoyage, retard, en HT puis en TTC (l’Excel calcule l’écart de chaque ligne, la valeur des manquants et les jours de retard)`,
          `Dépôt de garantie${NBSP}: montant versé, somme retenue sur justificatif, montant rendu et date, reste à facturer`,
          'Réserves du locataire et quatre signatures, le locataire et le loueur, à la sortie puis au retour',
        ],
      },
      {
        title: 'Suivi des locations',
        format: `Feuille «${NBSP}Suivi des locations${NBSP}» de l’Excel seulement, absente du PDF`,
        items: [
          `Une ligne par contrat${NBSP}: n° de contrat, locataire, événement, date de sortie, retour prévu et retour réel`,
          'Jours de retard comptés jusqu’à aujourd’hui tant que le matériel n’est pas rendu',
          'Montant TTC, encaissé, reste dû, dépôt reçu, dépôt rendu et somme retenue sur le dépôt',
          `Statut calculé${NBSP}: réservé, sorti, en retard, rendu avec un dépôt à traiter ou un solde à encaisser, clôturé`,
          `En un coup d’œil${NBSP}: locations en cours, en retard, dépôts à traiter, reste dû, dépôts détenus, chiffre d’affaires TTC`,
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'remplir',
    eyebrow: 'Comment le remplir',
    title: 'Remplir le contrat et l’état des lieux en quatre étapes',
    intro:
      'Dans l’Excel, seules les cases blanches se saisissent. Les totaux, l’acompte, les écarts au retour et le dépôt à rendre se calculent tout seuls.',
    steps: [
      {
        label: 'Étape 1',
        title: 'Vos coordonnées et vos conditions, une fois pour toutes',
        description: `Remplissez l’en-tête du loueur (nom, adresse, SIRET, n° de TVA), puis vos conditions habituelles${NBSP}: prix d’un jour de retard, forfait de nettoyage, délai de restitution du dépôt, annulation, pénalités pour les clients professionnels. Enregistrez le fichier comme modèle${NBSP}: chaque nouvelle location part de cette copie.`,
      },
      {
        label: 'Étape 2',
        title: 'Le contrat, à la réservation',
        description: `Le locataire, l’événement, les dates et heures de sortie et de retour, puis une ligne par article avec sa quantité, son prix unitaire HT et sa valeur de remplacement. L’Excel calcule les jours, les totaux HT et TTC, l’acompte et la valeur de remplacement totale, à côté du dépôt de garantie que vous demandez. Le client signe «${NBSP}Lu et approuvé${NBSP}».`,
      },
      {
        label: 'Étape 3',
        title: 'L’état des lieux, à la sortie',
        description: `Devant le client, contrôlez chaque article${NBSP}: quantité, état, accessoires fournis. Photographiez les défauts déjà là, notez le numéro de chaque photo, puis signez tous les deux la partie «${NBSP}À la sortie${NBSP}». Dans l’Excel, les lignes reprennent le matériel du contrat.`,
      },
      {
        label: 'Étape 4',
        title: 'Le retour, les écarts et le dépôt',
        description: `Au retour, même contrôle${NBSP}: quantité rendue, état, accessoires, propreté. L’Excel compte les manquants à leur valeur de remplacement, les jours de retard, la casse que vous saisissez et le nettoyage, puis donne le dépôt à rendre ou le reste à facturer. Le client note ses réserves s’il en a, vous signez tous les deux, et la ligne du suivi passe à «${NBSP}Clôturé${NBSP}» une fois le dépôt rendu et le solde encaissé.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que la règle impose',
    title: 'Ce que le Code civil et la TVA prévoient déjà',
    intro:
      'Le Code civil encadre la location de toutes sortes de biens, meubles compris (art. 1713), et le dépôt de garantie a son traitement en TVA. Le modèle reprend chacune de ces règles dans une clause ou une case. Ce sont des repères, pas un conseil juridique.',
    facts: [
      {
        contextLabel: 'Code civil, art. 1719 et 1720',
        title: 'Un matériel délivré en bon état',
        text: 'Le loueur délivre le matériel en bon état, l’entretient en état de servir à l’usage prévu et en assure la jouissance paisible pendant la location. L’état des lieux de sortie en garde la preuve, article par article, avec les accessoires fournis.',
        sourceName: EQUIPMENT_RENTAL_AGREEMENT_LESSOR_DUTIES_SOURCE.name,
        sourceUrl: EQUIPMENT_RENTAL_AGREEMENT_LESSOR_DUTIES_SOURCE.url,
      },
      {
        contextLabel: 'Code civil, art. 1728',
        title: 'Un usage raisonnable, celui prévu au contrat',
        text: `Le locataire se sert du matériel raisonnablement, suivant l’usage prévu au contrat, et paie le prix aux dates convenues. Le contrat écrit donc l’usage et le lieu d’utilisation${NBSP}; il interdit aussi la sous-location sans votre accord écrit, ce que le Code civil permet (art. 1717).`,
        sourceName: EQUIPMENT_RENTAL_AGREEMENT_RENTER_DUTIES_SOURCE.name,
        sourceUrl: EQUIPMENT_RENTAL_AGREEMENT_RENTER_DUTIES_SOURCE.url,
      },
      {
        contextLabel: 'Code civil, art. 1730 et 1731',
        title: 'Rendu tel qu’il a été reçu',
        text: 'S’il a été fait un état des lieux, le locataire rend le matériel tel qu’il l’a reçu suivant cet état, sauf ce qui a péri ou s’est dégradé par vétusté ou force majeure. Sans état des lieux, il est présumé l’avoir reçu en bon état, sauf preuve contraire. La page 2 du modèle se remplit à la sortie et au retour, en présence des deux parties.',
        sourceName: EQUIPMENT_RENTAL_AGREEMENT_CONDITION_REPORT_SOURCE.name,
        sourceUrl: EQUIPMENT_RENTAL_AGREEMENT_CONDITION_REPORT_SOURCE.url,
      },
      {
        contextLabel: 'Code civil, art. 1732',
        title: 'La casse et les pertes pendant la location',
        text: 'Le locataire répond des dégradations et des pertes survenues pendant la location, à moins de prouver qu’elles ont eu lieu sans sa faute. Le contrat écrit la valeur de remplacement de chaque article, ce qui est facturé (réparation sur devis ou remplacement) et ce que fait le locataire en cas de vol.',
        sourceName: EQUIPMENT_RENTAL_AGREEMENT_RENTER_LIABILITY_SOURCE.name,
        sourceUrl: EQUIPMENT_RENTAL_AGREEMENT_RENTER_LIABILITY_SOURCE.url,
      },
      {
        contextLabel: 'Sans TVA tant qu’il est rendu',
        title: 'Le dépôt de garantie, à part du prix',
        text: `Le dépôt n’est acquis au loueur que si le locataire manque aux obligations dont le contrat fait dépendre son remboursement${NBSP}: il n’est soumis à la TVA qu’à ce moment-là, pour la part conservée. Un dépôt excessif au regard du risque réel peut être taxé dès l’encaissement, pour l’excédent. Le modèle le tient hors du total TTC et le compare à la valeur de remplacement du matériel.`,
        sourceName: EQUIPMENT_RENTAL_AGREEMENT_DEPOSIT_VAT_SOURCE.name,
        sourceUrl: EQUIPMENT_RENTAL_AGREEMENT_DEPOSIT_VAT_SOURCE.url,
      },
      {
        contextLabel: 'Sur chaque facture',
        title: 'La facture de location et ses mentions',
        text: `Elle porte notamment un n° unique, la date, l’identité du loueur avec son SIREN, le nom et l’adresse du client, la désignation et la quantité, le prix unitaire HT, le taux de TVA, les totaux HT et TTC et la date d’échéance${NBSP}; pour un client professionnel, le taux des pénalités de retard et l’indemnité forfaitaire de 40${NBSP}€. À partir du 1er septembre 2027, les PME et les microentreprises y ajoutent le SIREN du client, l’adresse de livraison si elle diffère et la nature de l’opération. Le contrat réunit déjà la plupart de ces informations.`,
        sourceName: INVOICE_MENTIONS_SOURCE.name,
        sourceUrl: INVOICE_MENTIONS_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Modèle de contrat de location de matériel${NBSP}: vos questions`,
    questions: [
      {
        question: `Le modèle de contrat de location de matériel est-il vraiment gratuit${NBSP}?`,
        answer: `Oui. Les deux fichiers se téléchargent sans inscription ni adresse e-mail, et vous pouvez les modifier, les imprimer et les réutiliser autant que vous voulez. Seule contrepartie${NBSP}: une ligne «${NBSP}modèle proposé par Dibodev${NBSP}» en pied de page, que vous pouvez retirer.`,
      },
      {
        question: `Un état des lieux est-il obligatoire pour louer du matériel${NBSP}?`,
        answer: `Le Code civil n’en fait pas une obligation, mais il en tire les conséquences. Avec un état des lieux, le locataire rend le matériel tel qu’il l’a reçu, sauf ce qui s’est dégradé par vétusté ou force majeure${NBSP}; sans état des lieux, il est présumé l’avoir reçu en bon état, sauf preuve contraire (art. 1730 et 1731). L’état des lieux de sortie protège donc aussi votre client${NBSP}: une rayure notée au départ ne peut pas lui être reprochée au retour.`,
      },
      {
        question: `Comment fixer le montant du dépôt de garantie${NBSP}?`,
        answer: `À partir de ce que vous risquez de perdre${NBSP}: l’Excel additionne la valeur de remplacement HT de chaque article loué et affiche le dépôt en pourcentage de ce total. Pour l’administration fiscale, un dépôt excessif au regard des risques réels peut être soumis à la TVA dès l’encaissement, pour la partie en trop. Le contrat écrit aussi quand il est rendu et ce qui peut en être retenu.`,
      },
      {
        question: `Le dépôt de garantie est-il soumis à la TVA${NBSP}?`,
        answer: `Pas tant qu’il est rendu. Il ne devient imposable que pour la part que vous gardez parce que le locataire n’a pas rempli ses obligations, par exemple pour un impayé ou une remise en état du matériel. C’est pourquoi le modèle le place à part du total TTC et calcule les sommes retenues en HT, puis avec la TVA à votre taux (0${NBSP}% si vous êtes en franchise de TVA).`,
      },
      {
        question: `Qui paie si le matériel est cassé, perdu ou volé${NBSP}?`,
        answer: `Le locataire répond des dégradations et des pertes survenues pendant la location, sauf s’il prouve qu’elles ont eu lieu sans sa faute (Code civil, art. 1732). Le contrat fixe la suite${NBSP}: réparation facturée sur devis dans la limite de la valeur de remplacement, article perdu, volé ou hors d’usage facturé à sa valeur de remplacement, récépissé de plainte à remettre en cas de vol. Une case indique si le locataire a assuré le matériel.`,
      },
      {
        question: `Mon client peut-il sous-louer ou prêter le matériel${NBSP}?`,
        answer: `Le Code civil le lui permet, sauf si le contrat l’interdit (art. 1717). Le modèle l’interdit sans votre accord écrit${NBSP}: vous savez qui a le matériel entre les mains, et à quelle adresse.`,
      },
      {
        question: `Comment fonctionne la version Excel${NBSP}?`,
        answer: `Sur la feuille «${NBSP}Matériel et montants${NBSP}», vous saisissez les dates, puis la quantité, le prix unitaire HT et la valeur de remplacement de chaque article${NBSP}: les jours, les totaux HT et TTC, l’acompte et la valeur de remplacement totale se calculent tout seuls. La feuille «${NBSP}État des lieux${NBSP}» reprend le matériel du contrat${NBSP}; au retour, la quantité rendue suffit pour obtenir l’écart, la valeur des manquants, les jours de retard et le dépôt à rendre. La feuille «${NBSP}Suivi des locations${NBSP}» donne le statut de chaque contrat et les dépôts que vous détenez.`,
      },
      {
        question: `Et quand les locations se multiplient${NBSP}?`,
        answer: `Un modèle Excel suffit pour quelques locations par semaine. Au-delà, les logiciels de location (Unipresta, LoKisi, Rentman, Booqable) suivent votre stock et vos disponibilités${NBSP}: Unipresta a une version gratuite, LoKisi commence à 29${NBSP}€ par mois. Si votre organisation sort de leur cadre (kits, plusieurs dépôts, réservation sur votre site), le test de la page outil vous dit quoi choisir.`,
      },
    ],
  },
  excelLimits: {
    title: `Quand Excel ne suffit plus${NBSP}?`,
    description: `Quand les contrats, les états des lieux et les dépôts de garantie se recopient d’un fichier à l’autre, et qu’un même article doit partir sur deux événements le même week-end, un outil qui suit vos disponibilités vous rend des heures. Décrivez-moi votre activité${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
    toolPageLinkLabel: 'Comparer les logiciels de location de matériel',
  },
}
