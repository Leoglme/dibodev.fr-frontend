import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  BUILDER_WARRANTIES_SOURCE,
  CARPENTRY_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  CARPENTRY_PAGE_PROJECT_SLUG,
  CARPENTRY_PAGE_RELATED_ARTICLE_SLUGS,
  CARPENTRY_PAGE_SCREENSHOT_URL,
  CARPENTRY_PAGE_UPDATED_AT,
  CARPENTRY_TEMPLATE_PDF_PATH,
  CARPENTRY_TEMPLATE_XLSX_PATH,
  CUSTOM_WINDOW_WITHDRAWAL_SOURCE,
  MAPRIMERENOV_SOURCE,
  REDUCED_VAT_CUSTOMER_STATEMENT_SOURCE,
} from '~/core/constants/tools/carpentrySoftware/pageShared'
import { E_INVOICING_SOURCE, HOME_REPAIR_QUOTE_RULES_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'
import { CARPENTRY_CUTTING_LIST_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/carpentryCuttingList/pageShared'

export const CARPENTRY_PAGE_CONTENT_FR: DibodevSoftwareToolPageContent = {
  meta: {
    title: `Logiciel menuiserie${NBSP}: prix 2026 pour menuisier et agenceur`,
    description: `Obat, ProDevis, Anodos, Aléker${NBSP}: prix 2026 des logiciels de menuiserie, test gratuit en 6 questions et modèle de devis et de fiche de débit à télécharger.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Logiciel de gestion pour menuisiers, agenceurs et poseurs de menuiseries',
  },
  breadcrumbLabel: 'Logiciel menuisier',
  shareImage: {
    titleLines: ['Quel logiciel pour', `votre menuiserie${NBSP}?`],
    highlight: 'menuiserie',
    subtitle:
      'Six questions, les prix 2026 des logiciels de menuiserie et un modèle de devis et de fiche de débit gratuit',
    badge: 'Test gratuit, en 2 minutes',
    icon: 'hammer',
    alt: `Quel logiciel pour votre menuiserie${NBSP}? Test gratuit en 6 questions, prix 2026 des logiciels de menuiserie et modèle de devis avec métré et fiche de débit, sur dibodev.fr`,
  },
  hero: {
    titleBefore: 'Quel logiciel pour votre ',
    titleHighlight: 'menuiserie',
    titleAfter: `${NBSP}?`,
    description:
      'Six questions sur votre atelier, vos poseurs et ce qui vous prend du temps. Pose de fenêtres, agencement, cuisines ou menuiserie bois, le test vous dit quel type de logiciel choisir pour vos devis, vos fiches de débit, le planning de l’atelier et des poses et vos factures, et combien prévoir.',
    reassurances: ['2 minutes', 'Sans inscription ni e-mail', 'Résultat immédiat'],
    authorIntro: 'Test conçu par',
    authorBio:
      'développeur d’applications métier près de Rennes. Chez Kodeva, j’ai créé de zéro un logiciel de suivi des heures par chantier, toujours utilisé par des PME.',
    updatedAt: CARPENTRY_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'logiciels',
    eyebrow: 'Prix publics 2026',
    title: 'Comparatif des logiciels de menuiserie et de leurs prix',
    intro: `Trois familles se partagent le métier${NBSP}: les logiciels de devis du bâtiment, les spécialistes de la menuiserie (chiffrage sur les tarifs des fabricants, planning de fabrication et de pose) et les logiciels de conception et de débit. Voici les tarifs affichés par les éditeurs. Je n’en ai trouvé aucun qui relie à lui seul le métré, le devis, la fiche de débit, le plan de coupe, les heures d’atelier et de pose et la marge du chantier.`,
    productColumnLabel: 'Logiciel',
    coverageColumnLabel: 'Ce qu’il gère',
    priceColumnLabel: 'Prix public',
    products: [
      {
        name: 'Obat',
        coverage: `Devis et factures illimités, 30${NBSP}000 ouvrages, facture électronique (via Iopole)${NBSP}; rentabilité par chantier, suivi du temps et planning en offre Croissance`,
        price: `49 à 129${NBSP}€ HT par mois`,
        priceCondition: `Pro, Croissance ou Booster pour un artisan assujetti à la TVA, 39 à 109${NBSP}€ HT par mois payé à l’année${NBSP}; 25 à 95${NBSP}€ HT en micro-entreprise non assujettie${NBSP}; licence en plus 20${NBSP}€ HT par mois${NBSP}; sans engagement au mois`,
      },
      {
        name: 'Batappli',
        coverage: `Devis assistés par IA (8 ou 16 par mois), acomptes, situations, planning${NBSP}; suivi de chantier et paiement en ligne en offre Artisan`,
        price: `39 ou 79${NBSP}€ HT par mois`,
        priceCondition: `Devis ou Artisan, 429 ou 869${NBSP}€ HT par an${NBSP}; 19${NBSP}€ par mois par utilisateur en plus${NBSP}; 10 jours d’essai`,
      },
      {
        name: 'Sage Batigest Connect',
        coverage: `Études de prix et bibliothèques d’ouvrages, suivi de chantier simplifié (Standard) ou avancé (Premium)${NBSP}; tarifs de 700 fabricants avec le module Sage e-tarif${NBSP}; sous Windows`,
        price: `36,08 à 122,25${NBSP}€ HT par mois`,
        priceCondition: `Essentials (1 utilisateur), Standard 55,33${NBSP}€ (jusqu’à 10), Premium (jusqu’à 50)${NBSP}; démonstration`,
      },
      {
        name: 'ProDevis START (Elcia)',
        coverage: `Chiffrage sur les tarifs des fabricants («${NBSP}plus de 2${NBSP}000 tarifs de 650 fabricants${NBSP}»), plusieurs fournisseurs, commandes${NBSP}; pas de factures (version complète de ProDevis, prix non affiché)`,
        price: `75${NBSP}€ HT par mois`,
        priceCondition: 'Résiliable à tout moment, pas d’essai annoncé',
      },
      {
        name: 'Anodos',
        coverage: `Devis et factures électroniques, commandes fournisseurs, planning de fabrication et de pose, facturation par jalons${NBSP}; suivi des réserves, Gantt et pointage GPS en offre Pro`,
        price: `19 ou 49${NBSP}€ par mois`,
        priceCondition: `HT ou TTC non précisé${NBSP}; Starter (1 utilisateur, 5 projets actifs) ou Pro (5 utilisateurs), 14 ou 36${NBSP}€ par mois payé à l’année${NBSP}; Business 73${NBSP}€ par mois à l’année (15 utilisateurs)${NBSP}; 30 jours d’essai sans carte, sans engagement`,
      },
      {
        name: 'Aléker',
        coverage: `CAO 3D paramétrique pour la menuiserie${NBSP}; débits automatiques, déboursé et export vers 10 optimiseurs (Pro)${NBSP}; exports pour les machines Biesse et Homag (Pro CN)`,
        price: `3${NBSP}590${NBSP}€, puis 79 à 169${NBSP}€ par mois`,
        priceCondition: `Licence de 3${NBSP}590${NBSP}€ HT plus location obligatoire (Basic 79, Pro 109, Pro CN 169${NBSP}€ HT par mois)${NBSP}; engagement initial de 12 mois, 8${NBSP}h de formation incluses${NBSP}; démonstration d’une heure`,
      },
      {
        name: 'MaxCut',
        coverage:
          'Listes de coupe et optimisation de la découpe des panneaux, chants, perçages, coût de coupe et de main-d’œuvre',
        price: 'Gratuit (Community)',
        priceCondition: `Business 20${NBSP}USD HT par mois ou 200${NBSP}USD HT par an, par appareil${NBSP}; aucun essai mentionné`,
      },
      {
        name: 'EBP Bâtiment, HerculePro, Cabinet Vision, Codial',
        coverage: `Gestion du bâtiment (EBP Bâtiment, Codial), chiffrage sur «${NBSP}+1${NBSP}800 catalogues${NBSP}» de fabricants (HerculePro), conception et fabrication pour agenceurs, cuisinistes et fabricants de placards (Cabinet Vision)`,
        price: 'Sur devis',
        priceCondition: 'Tarifs non publiés, démonstration',
      },
    ],
    calloutEmphasizedIntro: `Avant de signer${NBSP}:`,
    calloutText:
      'faites passer un vrai chantier au logiciel. Le métré d’un dressing ou de trois fenêtres, le devis avec une variante et la mention de TVA signée par le client, la commande au fournisseur, la fiche de débit et le plan de coupe, les heures d’atelier et de pose, l’acompte puis la facture finale, et à la fin la marge du chantier, sans rien ressaisir.',
    calloutFootnote: 'Tarifs relevés le 1er novembre 2026 sur les pages tarifs des éditeurs. Liste non exhaustive.',
  },
  rules: {
    anchorId: 'reglementation',
    eyebrow: 'Le point en 2026',
    title: `Devis, TVA, rétractation, garanties${NBSP}: ce que votre logiciel de menuiserie doit suivre en 2026`,
    intro: `Devis avant un dépannage, mention de TVA du client, rétractation des fenêtres posées, garanties, aides à la rénovation, facture électronique${NBSP}: en menuiserie, les règles de 2026 passent par vos devis, vos procès-verbaux de réception et vos factures. Un bon logiciel les remplit pour vous.`,
    facts: [
      {
        contextLabel: 'Arrêté du 24 janvier 2017',
        title: 'Un devis avant tout dépannage ou réparation chez un particulier',
        text: `Dépannage, réparation ou entretien en menuiserie, portes de garage et portails électriques compris${NBSP}: le devis détaillé est remis avant les travaux, quel que soit le montant, avec les prix HT et TTC et sa durée de validité. Vos devis et vos factures indiquent aussi votre assurance professionnelle${NBSP}: nom et adresse de l’assureur, couverture géographique (loi du 5 juillet 1996, article 22-2).`,
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: `TVA à 10${NBSP}% et 5,5${NBSP}%`,
        title: 'Plus d’attestation, une mention du client sur le devis',
        text: `L’attestation de TVA, simplifiée ou non, a disparu${NBSP}: pour des travaux dans un logement achevé depuis plus de deux ans, le client certifie les conditions du taux réduit par une mention sur le devis ou la facture. Le BOFiP en publie les modèles, pour le 10${NBSP}% et pour le 5,5${NBSP}% des travaux de rénovation énergétique.`,
        sourceName: REDUCED_VAT_CUSTOMER_STATEMENT_SOURCE.name,
        sourceUrl: REDUCED_VAT_CUSTOMER_STATEMENT_SOURCE.url,
      },
      {
        contextLabel: 'Contrat signé chez le client',
        title: `Fenêtres sur mesure posées${NBSP}: 14 jours de rétractation`,
        text: `Pour la vente et la pose de fenêtres, de volets ou de portes sur mesure, signées hors de votre établissement, la DGCCRF écarte l’exception des biens faits sur mesure${NBSP}: le client dispose de 14 jours pour se rétracter, comptés à partir de la réception des biens (il peut le faire dès la signature), et vous ne pouvez recevoir aucun paiement avant 7 jours.`,
        sourceName: CUSTOM_WINDOW_WITHDRAWAL_SOURCE.name,
        sourceUrl: CUSTOM_WINDOW_WITHDRAWAL_SOURCE.url,
      },
      {
        contextLabel: 'À la réception des travaux',
        title: 'Le PV de réception fait partir les garanties',
        text: `Parfait achèvement (1 an, réserves du procès-verbal comprises), biennale (2 ans, équipements dissociables) et décennale (10 ans, solidité de l’ouvrage et de ses éléments indissociables, comme les huisseries)${NBSP}: les trois garanties partent de la réception. Le procès-verbal daté et signé en est la preuve.`,
        sourceName: BUILDER_WARRANTIES_SOURCE.name,
        sourceUrl: BUILDER_WARRANTIES_SOURCE.url,
      },
      {
        contextLabel: 'MaPrimeRénov’',
        title: `Fenêtres${NBSP}: plus d’aide «${NBSP}par geste${NBSP}» en métropole`,
        text: `Le parcours «${NBSP}par geste${NBSP}» de MaPrimeRénov’ ne finance plus le remplacement des fenêtres en métropole. Elles restent l’un des quatre postes «${NBSP}enveloppe${NBSP}» de la rénovation d’ampleur, et l’aide exige un artisan RGE.`,
        sourceName: MAPRIMERENOV_SOURCE.name,
        sourceUrl: MAPRIMERENOV_SOURCE.url,
      },
      {
        contextLabel: '1er septembre 2027',
        title: 'La facture électronique',
        text: `Toutes les entreprises doivent pouvoir recevoir des factures électroniques depuis le 1er septembre 2026${NBSP}; les PME et les micro-entreprises devront les émettre à partir du 1er septembre 2027.`,
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: `Ce que l’outil sur mesure ne remplace pas${NBSP}:`,
    calloutText:
      'votre logiciel de CAO, ni les catalogues de vos fabricants, ni votre comptabilité. Les plans et les débits restent dans votre CAO, les tarifs chez vos fabricants, et l’outil reprend ce qu’ils exportent pour le relier à vos devis, à vos heures et à vos factures.',
  },
  freeTemplate: {
    anchorId: 'modele',
    eyebrow: 'Modèle gratuit',
    title: 'Un devis avec métré, une fiche de débit et un plan de coupe prêts à remplir',
    description: `Le devis de menuiserie avec le métré de chaque ouvrage, la fourniture, l’atelier et la pose, la TVA par ligne avec la mention du client et le bloc de rétractation d’un contrat signé chez lui${NBSP}; le procès-verbal de réception qui fait partir les garanties. Le PDF (devis et PV) s’imprime${NBSP}; l’Excel calcule les totaux du devis, le coût matière de la fiche de débit et un plan de coupe simple des panneaux.`,
    items: [
      `Devis${NBSP}: repère, ouvrage, matériau, cotes, quantité, fourniture, heures d’atelier et de pose, variantes et options, TVA par ligne, acompte, assurance décennale`,
      `Fiche de débit et plan de coupe (Excel)${NBSP}: surcotes de 10${NBSP}cm en longueur et 10${NBSP}mm en largeur, 30${NBSP}% de pertes par défaut, coût matière, trait de scie, sens du fil, chutes réutilisables`,
      `PV de réception${NBSP}: réserves, levée des réserves, signatures et date de départ des garanties de 1, 2 et 10 ans`,
    ],
    downloads: [
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
    pageLinkLabel: 'Voir la page du modèle',
    pageLinkRouteName: CARPENTRY_CUTTING_LIST_TEMPLATE_ROUTE_NAME,
  },
  comparison: {
    eyebrow: 'Les trois options',
    title: `Logiciel du marché, complément ou sur mesure${NBSP}?`,
    intro: `Chacune a sa place. Le test vous oriente${NBSP}; ce tableau montre ce que vous gagnez et ce que vous acceptez avec chacune.`,
    criterionLabel: 'Critère',
    columns: ['Logiciel du marché', 'Logiciel du marché + complément', 'Outil sur mesure'],
    rows: [
      {
        label: 'Prix',
        cells: [
          {
            state: 'yes',
            text: `14 à 129${NBSP}€ par mois selon l’éditeur${NBSP}; une CAO comme Aléker ajoute 3${NBSP}590${NBSP}€ HT de licence`,
          },
          { state: 'partial', text: `Votre abonnement, plus 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois` },
          {
            state: 'partial',
            text: `5${NBSP}000 à 25${NBSP}000${NBSP}€ une seule fois, plus 100 à 300${NBSP}€ par mois de maintenance`,
          },
        ],
      },
      {
        label: 'Devis, commandes, factures',
        cells: [
          { state: 'yes', text: 'Inclus dans les logiciels du bâtiment et de menuiserie' },
          { state: 'yes', text: 'Restent dans votre logiciel actuel' },
          { state: 'yes', text: 'Conçus autour de vos ouvrages, de vos variantes et de vos taux horaires' },
        ],
      },
      {
        label: `Du métré à la marge${NBSP}: devis, débit, heures d’atelier et de pose`,
        cells: [
          { state: 'partial', text: 'Réparti entre plusieurs logiciels (CAO, devis, tableur des heures)' },
          { state: 'yes', text: 'Le complément fait le lien entre vos outils' },
          { state: 'yes', text: 'Un seul outil, du métré à la marge de chaque chantier' },
        ],
      },
      {
        label: `Vos règles${NBSP}: ouvrages maison, taux par machine, réserves après pose`,
        cells: [
          { state: 'partial', text: 'Dans la limite des réglages prévus par l’éditeur' },
          { state: 'yes', text: 'Sur les points ajoutés par le complément' },
          { state: 'yes', text: 'Conçu autour de votre organisation' },
        ],
      },
      {
        label: 'Mise en route',
        cells: [
          { state: 'yes', text: 'Quelques jours' },
          { state: 'partial', text: '2 à 6 semaines' },
          { state: 'partial', text: '5 à 20 semaines, par étapes' },
        ],
      },
      {
        label: 'Vos données',
        cells: [
          { state: 'partial', text: 'Chez l’éditeur, export selon le logiciel' },
          { state: 'partial', text: 'Réparties entre les deux outils' },
          { state: 'yes', text: 'À vous, code compris' },
        ],
      },
    ],
    rowsShownOnSmallScreens: CARPENTRY_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: CARPENTRY_PAGE_PROJECT_SLUG,
    screenshotUrl: CARPENTRY_PAGE_SCREENSHOT_URL,
    showBrowserFrame: false,
    eyebrow: 'Déjà réalisé',
    title: 'Le temps passé sur chaque chantier, déjà compté dans un logiciel en production',
    description: `Gest-Time est le logiciel de suivi du temps que j’ai créé de zéro chez Kodeva, où j’étais en alternance, pour des PME de 20 à 200 salariés${NBSP}; il est toujours en production. Chacun y saisit ses heures par jour et par projet, tâche ou chantier, sur tablette ou sur téléphone, et son responsable les valide chaque semaine. Ce n’est pas un logiciel de menuiserie. Mais le prix de revient d’un chantier tient en deux moitiés${NBSP}: la matière, qui se lit sur les factures des fournisseurs, et les heures d’atelier et de pose, qu’il faut compter. Gest-Time fait déjà la seconde.`,
    highlights: [
      'Heures saisies au quart d’heure, par jour et par chantier, projet ou tâche',
      'Validation chaque semaine, alertes d’anomalies et suivi des absences',
      'Coûts horaires et kilomètres, exports Excel et PDF',
    ],
    linkLabel: 'Voir le projet Gest-Time',
    imageAlt: `Gest-Time sur téléphone${NBSP}: la vue du jour avec les tâches et les absences, et le clavier de saisie des heures au quart d’heure`,
    browserBarCaption: 'Gest-Time · saisie des heures du jour',
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Logiciel de menuiserie${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un logiciel de menuiserie${NBSP}?`,
        answer: `Pour les devis et les factures, comptez 25${NBSP}€ HT par mois chez Tolteck (19${NBSP}€ à l’année), 49 à 129${NBSP}€ HT chez Obat (39 à 109${NBSP}€ à l’année), 39 ou 79${NBSP}€ HT chez Batappli et 36,08 à 122,25${NBSP}€ HT pour Sage Batigest Connect. Les spécialistes de la menuiserie affichent 75${NBSP}€ HT par mois pour ProDevis START et 19 à 49${NBSP}€ par mois chez Anodos (14 à 36${NBSP}€ à l’année, HT ou TTC non précisé). La CAO Aléker demande 3${NBSP}590${NBSP}€ HT de licence plus 79 à 169${NBSP}€ HT par mois, et MaxCut est gratuit en version Community (tarifs relevés le 1er novembre 2026). Un complément sur mesure coûte de 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois, un outil complet de 5${NBSP}000 à 25${NBSP}000${NBSP}€, puis 100 à 300${NBSP}€ par mois de maintenance.`,
      },
      {
        question: `Quel logiciel de devis pour une menuiserie${NBSP}?`,
        answer: `Tout dépend d’où partent vos devis. Si vous revendez des fenêtres, des volets et des portes, un logiciel de chiffrage sur les tarifs des fabricants vous évite de recopier les catalogues${NBSP}: ProDevis START annonce «${NBSP}plus de 2${NBSP}000 tarifs de 650 fabricants${NBSP}», HerculePro «${NBSP}+1${NBSP}800 catalogues${NBSP}», Sage Batigest Connect 700 fabricants avec son module e-tarif. Si vous chiffrez au métré avec vos propres ouvrages, un logiciel de devis du bâtiment suffit (Obat annonce 30${NBSP}000 ouvrages, Tolteck une bibliothèque d’ouvrages, Batappli des devis assistés par IA). Si vous partez d’un plan 3D, une CAO qui calcule le déboursé, comme Aléker en version Pro, chiffre depuis le dessin.`,
      },
      {
        question: `Existe-t-il un logiciel de menuiserie gratuit${NBSP}?`,
        answer: `Pour la découpe, oui${NBSP}: MaxCut a une version Community gratuite, et CutList Optimizer une formule gratuite limitée en nombre de calculs. Pour les devis, Costructor propose une formule Starter gratuite, et plusieurs éditeurs payants s’essaient sans payer (30 jours sans carte chez Anodos, un mois chez Tolteck, 15 jours chez INFast). SketchUp n’affiche aucune version gratuite sur sa page de tarifs. Pour démarrer, le modèle gratuit de cette page (devis avec métré, fiche de débit et plan de coupe simple, en PDF et en Excel) dépanne un atelier, sans planning ni facture électronique.`,
      },
      {
        question: `Peut-on optimiser la découpe des panneaux dans Excel${NBSP}?`,
        answer: `Pour une estimation, oui${NBSP}: la feuille «${NBSP}Plan de coupe${NBSP}» du modèle Excel de cette page calcule, pièce par pièce, combien en tiennent sur un panneau avec le trait de scie et le sens du fil, le nombre de panneaux à acheter et les chutes assez grandes pour resservir. Pour un vrai calepinage qui mélange les pièces sur un même panneau, un optimiseur fait mieux${NBSP}: CutList Optimizer (gratuit avec une limite de calculs, puis 15 ou 25${NBSP}€ par mois) ou MaxCut (gratuit, Business à 20${NBSP}USD HT par mois). La Menuiserie de l’Auxois a ainsi adopté OptiCoupe pour ses plans de coupe de panneaux et de carrelets, avec moins de chutes et de manipulations selon Prévention BTP. Boole & Partners n’affiche pas ses prix, et un revendeur britannique vend OptiCut de 545 à 3${NBSP}445${NBSP}€ (HT ou TTC non précisé).`,
      },
      {
        question: `Quel logiciel de conception pour un menuisier agenceur${NBSP}?`,
        answer: `Pour dessiner les meubles et sortir les débits, les logiciels de conception et de fabrication de menuiserie sont nombreux${NBSP}: SketchUp (Go 10,75${NBSP}USD, Pro 33,25${NBSP}USD et Studio 71,58${NBSP}USD par mois, facturés à l’année, hors taxes), Aléker (3${NBSP}590${NBSP}€ HT de licence plus 79 à 169${NBSP}€ HT par mois, exports Biesse et Homag en version Pro CN), PolyBoard de Boole & Partners (2${NBSP}445 à 4${NBSP}695${NBSP}€ chez un revendeur britannique, HT ou TTC non précisé, sans prix chez l’éditeur) ou Cabinet Vision, sur devis, pour les agenceurs, les cuisinistes et les fabricants de placards. Ils conçoivent et débitent${NBSP}; le devis, le planning des poses et la facture se font en général dans un second logiciel. Avant de choisir, vérifiez que la liste de débit s’exporte, en Excel ou en CSV, vers votre logiciel de devis.`,
      },
      {
        question: `Quelle TVA sur un devis de menuiserie, et faut-il encore une attestation${NBSP}?`,
        answer: `L’attestation de TVA, simplifiée ou non, n’existe plus. Pour appliquer 10${NBSP}% (article 279-0 bis du CGI) ou 5,5${NBSP}% pour des travaux de rénovation énergétique (article 278-0 bis A), le client certifie les conditions par une mention sur le devis ou la facture, dont le BOFiP publie des modèles (BOI-LETTRE-000280). À défaut, c’est le taux normal de 20${NBSP}%. Les critères techniques qui ouvrent le 5,5${NBSP}% à une fenêtre se vérifient avec votre fournisseur ou votre comptable${NBSP}; le modèle de devis de cette page reprend la mention, prête à signer.`,
      },
      {
        question: `Un client peut-il annuler une commande de fenêtres sur mesure signée chez lui${NBSP}?`,
        answer: `Oui. Selon la DGCCRF, un contrat signé hors établissement pour la vente et la pose de fenêtres, de volets ou de portes sur mesure n’entre pas dans l’exception des biens «${NBSP}confectionnés selon les spécifications du consommateur${NBSP}»${NBSP}: le client dispose de 14 jours pour se rétracter. Le délai court à partir de la réception des biens, mais le client peut se rétracter dès la signature, et vous ne pouvez recevoir aucun paiement avant 7 jours. Votre devis signé chez le client doit donc le prévoir, et l’acompte attendre la fin de ces 7 jours.`,
      },
      {
        question: `Quelles garanties après la pose, et à partir de quand${NBSP}?`,
        answer: `Trois garanties partent de la réception des travaux${NBSP}: la garantie de parfait achèvement (1 an, pour les réserves notées au procès-verbal et les désordres apparus dans l’année), la garantie biennale (2 ans, pour les équipements dissociables) et la garantie décennale (10 ans, pour ce qui compromet la solidité de l’ouvrage ou le rend impropre à son usage${NBSP}; Service-Public cite les huisseries parmi les éléments indissociables). Le procès-verbal de réception, daté et signé, fixe ce point de départ${NBSP}: c’est la page 2 du modèle gratuit, avec les réserves et leur levée.`,
      },
      {
        question: `Les fenêtres sont-elles encore aidées par MaPrimeRénov’${NBSP}?`,
        answer: `Plus en «${NBSP}parcours par geste${NBSP}» en métropole${NBSP}: le remplacement des fenêtres n’y figure plus. Il reste l’un des quatre postes «${NBSP}enveloppe${NBSP}» de MaPrimeRénov’ rénovation d’ampleur, où chaque poste retenu doit porter sur au moins 25${NBSP}% des surfaces du logement. Dans les deux parcours, l’aide exige un artisan RGE (Service-Public, page vérifiée le 1er septembre 2026).`,
      },
      {
        question: `Poussières de bois${NBSP}: quelles obligations pour l’atelier${NBSP}?`,
        answer: `Les poussières de bois sont classées cancérogènes (groupe 1 du CIRC), quel que soit le bois. L’INRS rappelle la valeur limite de 1${NBSP}mg/m³ sur 8${NBSP}heures (article R4412-149 du Code du travail), contrôlée chaque année par un organisme accrédité, le captage à la source, le nettoyage par aspiration, le suivi individuel renforcé des salariés exposés et le contrôle annuel de la ventilation. Les machines restent conformes aux règles de leur date de première mise en service, et leurs risques figurent au document unique. Un outil de gestion peut rappeler ces contrôles à leur échéance.`,
      },
      {
        question: `Combien coûte ProDevis en 2026${NBSP}?`,
        answer: `Elcia affiche ProDevis START à 75${NBSP}€ HT par mois, résiliable à tout moment${NBSP}: il chiffre sur les tarifs des fabricants et passe les commandes, mais ne fait pas les factures. Le prix de la version complète de ProDevis n’est pas affiché. D’autres montants circulent en ligne, de 55 à 175${NBSP}€ selon les sites${NBSP}; seul le prix de la page de l’éditeur, relevé ici le 1er novembre 2026, fait foi.`,
      },
      {
        question: `Peut-on reprendre les données de mon logiciel actuel${NBSP}?`,
        answer: `Si votre logiciel exporte vos clients, vos chantiers, vos ouvrages et vos devis en Excel ou en CSV, je les reprends dans le nouvel outil${NBSP}; c’est prévu dans le devis. Les listes de débit de votre logiciel de CAO peuvent suivre le même chemin. Vérifiez cette possibilité d’export avant de signer avec un éditeur.`,
      },
    ],
  },
  relatedArticles: {
    title: 'À lire aussi',
    slugs: CARPENTRY_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: `Un doute sur le bon outil pour votre menuiserie${NBSP}?`,
    description: `Décrivez-moi votre atelier, vos chantiers et vos outils actuels en quelques lignes. Je vous réponds sous 24${NBSP}h, et si un logiciel du marché vous suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
  },
}
