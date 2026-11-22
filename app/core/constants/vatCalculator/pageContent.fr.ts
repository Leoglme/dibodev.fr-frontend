import type { DibodevVatCalculatorPageContent } from '~/core/types/DibodevVatCalculatorPage'
import { PAYMENT_RECEIPT_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/paymentReceipt/pageShared'
import { PLUMBER_QUOTE_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/plumberQuote/pageShared'
import { NBSP } from '~/core/constants/typography'
import {
  INVOICE_MENTIONS_SOURCE,
  PRICE_EXCLUDING_TAX_FORMULA_SOURCE,
  RENOVATION_WORKS_CLIENT_MENTION_SOURCE,
  RENOVATION_WORKS_VAT_SOURCE,
  VAT_FRANCHISE_SOURCE,
  VAT_RATES_SOURCE,
} from '~/core/constants/vatCalculator/pageShared'

export const VAT_CALCULATOR_PAGE_FR: DibodevVatCalculatorPageContent = {
  meta: {
    title: `Calcul TVA HT TTC${NBSP}: calculatrice gratuite, TTC en HT`,
    description: `Calcul de TVA gratuit${NBSP}: passez du HT au TTC ou du TTC au HT à 20, 10, 5,5 ou 2,1${NBSP}%, formule affichée, et total d’un devis à plusieurs taux.`,
    inLanguage: 'fr-FR',
    schemaAbout:
      'Calcul de la TVA, conversion d’un prix HT en TTC et d’un prix TTC en HT, total d’un devis à plusieurs taux',
  },
  breadcrumbLabel: 'Calcul de TVA, HT et TTC',
  numberLocale: 'fr-FR',
  shareImage: {
    titleLines: ['Calcul de TVA', 'HT et TTC gratuit'],
    highlight: 'Calcul de TVA',
    subtitle: `Du HT au TTC et du TTC au HT à 20, 10, 5,5 ou 2,1${NBSP}%, et le total d’un devis à plusieurs taux`,
    badge: 'Gratuit, sans inscription',
    alt: `Calculateur de TVA gratuit${NBSP}: prix HT, TVA et prix TTC, formule affichée et total d’un devis à plusieurs taux, sur dibodev.fr`,
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Calcul TVA',
    titleAfter: ' HT et TTC en ligne',
    reassurances: ['HT, TVA et TTC avec la formule', 'Devis à plusieurs taux', 'Rien n’est enregistré'],
    aboutTitle: 'À propos du calculateur',
    description: `Un calculateur de TVA pour préparer un devis ou une facture${NBSP}: vous donnez un montant, vous dites s’il est HT ou TTC, vous choisissez le taux, et vous lisez le HT, la TVA et le TTC avec la formule appliquée. Le mode «${NBSP}Plusieurs lignes${NBSP}» additionne les lignes d’un devis, chacune avec son taux, et ventile la TVA par taux.`,
    authorIntro: 'Calculateur préparé par',
    authorBio:
      'développeur d’applications métier près de Rennes. Je fais mes propres devis et factures, en franchise de TVA. Pour ce calculateur, j’ai relu les pages de Service-Public et d’impots.gouv.fr sur les taux de TVA, les travaux dans les logements et la franchise en base.',
  },
  calculator: {
    modeGroupLabel: 'Type de calcul',
    modeLabels: {
      single: 'Un montant',
      lines: 'Plusieurs lignes',
    },
    directionLabel: `Quel montant avez-vous${NBSP}?`,
    directionLabels: {
      fromExcludingTax: 'J’ai le HT',
      fromIncludingTax: 'J’ai le TTC',
    },
    amountLabels: {
      fromExcludingTax: 'Montant HT en euros',
      fromIncludingTax: 'Montant TTC en euros',
    },
    amountPlaceholder: '0,00',
    amountHint: 'Virgule ou point, comme vous voulez. Le résultat se calcule à chaque saisie.',
    rateLabel: 'Taux de TVA',
    rateTemplate: `{rate}${NBSP}%`,
    customRateButton: 'Autre taux',
    customRateLabel: `Taux libre en${NBSP}%`,
    customRateHint: 'Pour un taux de Corse ou d’outre-mer, par exemple.',
    lineNameLabel: 'Libellé (facultatif)',
    lineNamePlaceholder: 'Main-d’œuvre, fourniture, déplacement…',
    quantityLabel: 'Quantité',
    unitPriceLabel: 'Prix unitaire HT',
    lineRateLabel: 'TVA',
    lineTotalLabel: 'Total HT de la ligne',
    lineNumberTemplate: 'Ligne {number}',
    removeLineTemplate: 'Supprimer la ligne {number}',
    addLineButton: 'Ajouter une ligne',
    clearButton: 'Tout effacer',
    roundingNote: `Chaque ligne est arrondie au centime. La TVA est calculée taux par taux, sur le total HT des lignes de ce taux, puis arrondie au centime.`,
    singleResultLabels: {
      fromExcludingTax: 'Prix TTC',
      fromIncludingTax: 'Prix HT',
    },
    quoteResultLabel: 'Total TTC',
    emptyResultTexts: {
      single: `Saisissez un montant${NBSP}: le HT, la TVA et le TTC se calculent à chaque saisie.`,
      lines: `Saisissez une quantité et un prix unitaire HT sur au moins une ligne${NBSP}: les totaux se calculent à chaque saisie.`,
    },
    singleVatLineTemplate: `dont TVA à {rate}${NBSP}: {amount}`,
    quoteVatLineTemplate: `dont TVA${NBSP}: {amount}`,
    amountExcludingTaxLabel: 'Prix HT',
    vatAmountTemplate: 'TVA à {rate}',
    amountIncludingTaxLabel: 'Prix TTC',
    totalExcludingTaxLabel: 'Total HT',
    vatOnBaseTemplate: 'TVA à {rate} sur {base}',
    totalVatLabel: 'Total TVA',
    totalIncludingTaxLabel: 'Total TTC',
    formulaLabel: 'Formule appliquée',
    formulaTemplates: {
      fromExcludingTax: `{amountExcludingTax} × {coefficient} = {amountIncludingTax}${NBSP}€ TTC`,
      fromIncludingTax: `{amountIncludingTax} ÷ {coefficient} = {amountExcludingTax}${NBSP}€ HT`,
    },
    copySummaryButton: 'Copier le récapitulatif',
    copiedStatus: `Récapitulatif copié${NBSP}: collez-le dans un mail ou un devis.`,
    copyFailedStatus: `La copie n’a pas fonctionné dans ce navigateur${NBSP}: notez le résultat à la main.`,
    privacyNote: `Tout se calcule dans votre navigateur${NBSP}: aucun montant n’est envoyé ni enregistré.`,
    summary: {
      singleTitle: 'Calcul de TVA',
      quoteTitle: 'Récapitulatif du devis',
      quoteLineTemplate: `{label}${NBSP}: {quantity} × {unitPrice} = {amount} HT (TVA {rate})`,
      unnamedLineTemplate: 'Ligne {number}',
      resultRowTemplate: `{label}${NBSP}: {amount}`,
      formulaTemplate: `Formule${NBSP}: {formula}`,
      footer: 'Calculé avec le calculateur de TVA de dibodev.fr. Vérifiez le taux qui s’applique à votre activité.',
    },
  },
  summary: {
    eyebrow: 'En bref',
    text: `Prix TTC = prix HT × (1 + taux). Prix HT = prix TTC ÷ (1 + taux). À 20${NBSP}%, on multiplie ou on divise par 1,20${NBSP}: 1${NBSP}000${NBSP}€ HT font 1${NBSP}200${NBSP}€ TTC, et 1${NBSP}200${NBSP}€ TTC font 1${NBSP}000${NBSP}€ HT. Ne retirez jamais 20${NBSP}% du TTC${NBSP}: vous trouveriez 960${NBSP}€. En métropole, les taux sont de 20, 10, 5,5 et 2,1${NBSP}%. Une entreprise en franchise en base ne facture pas de TVA.`,
    dateLabel: 'Règles relues le 22 novembre 2026 sur Service-Public et impots.gouv.fr.',
  },
  method: {
    eyebrow: 'Comment calculer',
    title: 'Calculer la TVA sans se tromper',
    intro: `Quatre points font la différence entre un devis juste et un devis faux${NBSP}: le sens du calcul, l’erreur des 20${NBSP}% retirés du TTC, les taux mélangés et les arrondis.`,
    steps: [
      {
        label: 'HT vers TTC',
        title: 'Multiplier le HT par 1 + le taux',
        description: `Pour passer du HT au TTC, multipliez par 1,20 à 20${NBSP}%, par 1,10 à 10${NBSP}%, par 1,055 à 5,5${NBSP}% et par 1,021 à 2,1${NBSP}%. 1${NBSP}000${NBSP}€ HT à 20${NBSP}%${NBSP}: 1${NBSP}000 × 1,20 = 1${NBSP}200${NBSP}€ TTC. La TVA seule vaut 1${NBSP}000 × 0,20 = 200${NBSP}€.`,
      },
      {
        label: 'TTC vers HT',
        title: `Diviser le TTC, ne pas retirer 20${NBSP}%`,
        description: `Pour revenir au HT, divisez le TTC par le même nombre${NBSP}: 1${NBSP}200 ÷ 1,20 = 1${NBSP}000${NBSP}€ HT. L’erreur classique est de retirer 20${NBSP}% du TTC${NBSP}: 1${NBSP}200 − 20${NBSP}% = 960${NBSP}€, soit 40${NBSP}€ de moins que le vrai HT. La TVA se calcule sur le HT, pas sur le TTC${NBSP}: dans un prix TTC à 20${NBSP}%, elle ne pèse que 16,67${NBSP}% du total.`,
      },
      {
        label: 'Plusieurs taux',
        title: 'Un devis avec deux taux',
        description: `Quand un devis mélange les taux, calculez la TVA taux par taux, jamais avec un taux moyen. 800${NBSP}€ HT à 10${NBSP}% et 300${NBSP}€ HT à 20${NBSP}%${NBSP}: total HT 1${NBSP}100${NBSP}€, TVA 80 + 60 = 140${NBSP}€, total TTC 1${NBSP}240${NBSP}€. C’est ce que fait le mode «${NBSP}Plusieurs lignes${NBSP}», avec la TVA ventilée par taux.`,
      },
      {
        label: 'Les arrondis',
        title: 'Arrondir au centime, une fois par taux',
        description: `Un montant s’arrondit au centime${NBSP}: vers le haut quand le troisième chiffre après la virgule vaut 5 ou plus, vers le bas sinon. Le calculateur arrondit chaque ligne, puis calcule la TVA sur le total HT de chaque taux. Trois lignes de 33,33${NBSP}€ à 20${NBSP}% donnent 99,99${NBSP}€ HT et 20,00${NBSP}€ de TVA. Arrondie ligne par ligne, la TVA ferait 20,01${NBSP}€${NBSP}: un centime d’écart possible avec un logiciel qui compte autrement.`,
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Ce que disent les textes',
    title: 'Six règles sur les taux, les travaux et la franchise de TVA',
    intro: `Lues le 22 novembre 2026 sur Service-Public et impots.gouv.fr, pour la métropole. Les taux et ce qu’ils couvrent changent régulièrement${NBSP}: vérifiez le taux de chaque opération avant de l’écrire sur un devis.`,
    facts: [
      {
        contextLabel: 'Métropole',
        title: `Quatre taux${NBSP}: 20, 10, 5,5 et 2,1${NBSP}%`,
        text: `D’après impots.gouv.fr, le taux normal de 20${NBSP}% s’applique à la majorité des biens et des services. Le taux de 10${NBSP}% vise notamment la restauration, le transport de voyageurs, les travaux d’amélioration du logement et l’hébergement hôtelier. Le taux de 5,5${NBSP}% vise notamment les produits alimentaires de première nécessité, les livres et les travaux de rénovation énergétique. Le taux de 2,1${NBSP}% vise notamment les publications de presse et les médicaments remboursables.`,
        sourceName: VAT_RATES_SOURCE.name,
        sourceUrl: VAT_RATES_SOURCE.url,
      },
      {
        contextLabel: 'Travaux dans un logement',
        title: `10${NBSP}% ou 5,5${NBSP}% dans un logement de plus de 2 ans`,
        text: `Dans un logement achevé depuis plus de 2 ans, les travaux d’amélioration, de transformation, d’aménagement ou d’entretien sont à 10${NBSP}%, et les travaux de rénovation énergétique, comme l’isolation thermique, à 5,5${NBSP}%. Le taux de 20${NBSP}% reste dû pour les travaux exclus, par exemple dans des locaux qui ne servent pas à l’habitation ou pour l’entretien des espaces verts, et pour les équipements que le particulier achète lui-même.`,
        sourceName: RENOVATION_WORKS_VAT_SOURCE.name,
        sourceUrl: RENOVATION_WORKS_VAT_SOURCE.url,
      },
      {
        contextLabel: 'Depuis le 1er mars 2025',
        title: 'Le client certifie le taux réduit sur le devis ou la facture',
        text: `Pour appliquer 10${NBSP}% ou 5,5${NBSP}%, le client doit certifier, par une mention sur le devis ou la facture, que les travaux remplissent les conditions. D’après impots.gouv.fr, une attestation à part n’est plus exigée depuis le 1er mars 2025. Les taux réduits valent pour une résidence principale ou secondaire, que le client soit propriétaire, locataire ou occupant à titre gratuit.`,
        sourceName: RENOVATION_WORKS_CLIENT_MENTION_SOURCE.name,
        sourceUrl: RENOVATION_WORKS_CLIENT_MENTION_SOURCE.url,
      },
      {
        contextLabel: 'Franchise en base, seuils 2026',
        title: `Sous 37${NBSP}500${NBSP}€ ou 85${NBSP}000${NBSP}€, pas de TVA à facturer`,
        text: `Une entreprise en franchise en base ne facture pas la TVA et ne la déduit pas de ses achats. Pour 2026, Service-Public indique que les seuils restent inchangés${NBSP}: 85${NBSP}000${NBSP}€ de chiffre d’affaires pour la vente de marchandises et l’hébergement, 37${NBSP}500${NBSP}€ pour les prestations de services et les professions libérales, hors avocats. Chaque facture porte la mention «${NBSP}TVA non applicable, article 293 B du CGI${NBSP}».`,
        sourceName: VAT_FRANCHISE_SOURCE.name,
        sourceUrl: VAT_FRANCHISE_SOURCE.url,
      },
      {
        contextLabel: 'Du TTC au HT',
        title: 'Prix HT = prix TTC ÷ (1 + taux de TVA)',
        text: `C’est la formule que donne Service-Public, avec un exemple${NBSP}: 50${NBSP}€ TTC font 41,67${NBSP}€ HT à 20${NBSP}%, 45,45${NBSP}€ à 10${NBSP}% et 47,39${NBSP}€ à 5,5${NBSP}%. Le prix HT s’arrondit au centime supérieur quand le troisième chiffre après la virgule vaut 5 ou plus, au centime inférieur sinon${NBSP}: 41,669${NBSP}€ devient 41,67${NBSP}€.`,
        sourceName: PRICE_EXCLUDING_TAX_FORMULA_SOURCE.name,
        sourceUrl: PRICE_EXCLUDING_TAX_FORMULA_SOURCE.url,
      },
      {
        contextLabel: 'Sur une facture',
        title: 'Le prix unitaire HT et le taux sur chaque ligne',
        text: `Pour chaque produit ou prestation, une facture indique la quantité, la dénomination précise, le prix unitaire HT et le taux de TVA applicable. Elle donne ensuite la somme totale HT et la somme TTC à payer. Le mode «${NBSP}Plusieurs lignes${NBSP}» du calculateur suit le même ordre.`,
        sourceName: INVOICE_MENTIONS_SOURCE.name,
        sourceUrl: INVOICE_MENTIONS_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'Le calculateur ne choisit pas le taux à votre place.',
    calloutText: `Il applique le taux que vous lui donnez. Les quatre boutons sont les taux de la métropole${NBSP}: la Corse et l’outre-mer ont d’autres taux pour certaines opérations, à saisir dans «${NBSP}Autre taux${NBSP}». Si vous hésitez sur un taux, demandez à votre comptable ou à votre service des impôts.`,
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Calcul de TVA${NBSP}: vos questions`,
    questions: [
      {
        question: `Comment calculer la TVA${NBSP}?`,
        answer: `Multipliez le prix HT par le taux${NBSP}: 1${NBSP}000${NBSP}€ HT à 20${NBSP}% donnent 1${NBSP}000 × 0,20 = 200${NBSP}€ de TVA. Ajoutez-la au HT pour obtenir le TTC${NBSP}: 1${NBSP}200${NBSP}€. Si vous partez du TTC, calculez d’abord le HT (TTC ÷ 1,20), puis faites la différence${NBSP}: 1${NBSP}200 − 1${NBSP}000 = 200${NBSP}€ de TVA.`,
      },
      {
        question: `Comment passer du TTC au HT${NBSP}?`,
        answer: `Divisez le prix TTC par 1 + le taux de TVA${NBSP}: par 1,20 à 20${NBSP}%, 1,10 à 10${NBSP}%, 1,055 à 5,5${NBSP}% et 1,021 à 2,1${NBSP}%. 500${NBSP}€ TTC à 10${NBSP}% font 500 ÷ 1,10 = 454,55${NBSP}€ HT, donc 45,45${NBSP}€ de TVA. Dans le calculateur, choisissez «${NBSP}J’ai le TTC${NBSP}».`,
      },
      {
        question: `Comment passer du HT au TTC${NBSP}?`,
        answer: `Multipliez le prix HT par 1 + le taux de TVA. 100${NBSP}€ HT font 120${NBSP}€ TTC à 20${NBSP}%, 110${NBSP}€ à 10${NBSP}%, 105,50${NBSP}€ à 5,5${NBSP}% et 102,10${NBSP}€ à 2,1${NBSP}%. Dans le calculateur, choisissez «${NBSP}J’ai le HT${NBSP}».`,
      },
      {
        question: `Pourquoi ne faut-il pas retirer 20${NBSP}% du TTC${NBSP}?`,
        answer: `Parce que les 20${NBSP}% de TVA se calculent sur le prix HT, pas sur le prix TTC. Sur 1${NBSP}200${NBSP}€ TTC, retirer 20${NBSP}% donne 960${NBSP}€, alors que le vrai HT est de 1${NBSP}000${NBSP}€. La TVA contenue dans un prix TTC à 20${NBSP}% ne vaut que 16,67${NBSP}% de ce prix. Il faut diviser par 1,20.`,
      },
      {
        question: `Quel taux de TVA pour des travaux${NBSP}?`,
        answer: `Dans un logement achevé depuis plus de 2 ans${NBSP}: 10${NBSP}% pour les travaux d’amélioration, de transformation, d’aménagement ou d’entretien, et 5,5${NBSP}% pour les travaux de rénovation énergétique, comme l’isolation thermique. Le taux de 20${NBSP}% s’applique au reste${NBSP}: locaux qui ne servent pas à l’habitation, entretien des espaces verts, équipements que le client achète lui-même. Le client doit certifier sur le devis ou la facture que les conditions sont remplies.`,
      },
      {
        question: `Un auto-entrepreneur facture-t-il la TVA${NBSP}?`,
        answer: `Pas tant qu’il reste en franchise en base. Pour 2026, les seuils sont de 37${NBSP}500${NBSP}€ de chiffre d’affaires pour les services et de 85${NBSP}000${NBSP}€ pour la vente de marchandises et l’hébergement. Il facture alors sans TVA, avec la mention «${NBSP}TVA non applicable, article 293 B du CGI${NBSP}», et ne récupère pas la TVA de ses achats. Au-dessus du seuil majoré (41${NBSP}250${NBSP}€ pour les services, 93${NBSP}500${NBSP}€ pour la vente), la TVA s’applique dès le premier jour du dépassement. Entre les deux seuils, elle s’applique à partir du 1er janvier de l’année suivante.`,
      },
      {
        question: `Quels sont les taux de TVA en France${NBSP}?`,
        answer: `En métropole, quatre taux${NBSP}: 20${NBSP}% pour la majorité des biens et des services, 10${NBSP}% notamment pour la restauration, le transport de voyageurs et les travaux d’amélioration du logement, 5,5${NBSP}% notamment pour les produits alimentaires de première nécessité, les livres et la rénovation énergétique, 2,1${NBSP}% notamment pour la presse et les médicaments remboursables. La Corse et l’outre-mer ont d’autres taux pour certaines opérations.`,
      },
      {
        question: `Comment calculer la TVA d’un devis avec plusieurs taux${NBSP}?`,
        answer: `Additionnez d’abord le HT des lignes qui ont le même taux, puis calculez la TVA de chaque groupe. 800${NBSP}€ HT à 10${NBSP}% donnent 80${NBSP}€ de TVA, 300${NBSP}€ HT à 20${NBSP}% donnent 60${NBSP}€${NBSP}: le devis fait 1${NBSP}100${NBSP}€ HT, 140${NBSP}€ de TVA et 1${NBSP}240${NBSP}€ TTC. Le mode «${NBSP}Plusieurs lignes${NBSP}» fait ce calcul et affiche la TVA de chaque taux.`,
      },
      {
        question: `Comment arrondir la TVA${NBSP}?`,
        answer: `Au centime${NBSP}: vers le haut quand le troisième chiffre après la virgule vaut 5 ou plus, vers le bas sinon. 41,669${NBSP}€ devient 41,67${NBSP}€. Le calculateur arrondit chaque ligne, puis la TVA de chaque taux sur le total HT de ce taux. Un logiciel qui arrondit la TVA ligne par ligne peut trouver un centime d’écart.`,
      },
      {
        question: `Le calculateur garde-t-il mes montants${NBSP}?`,
        answer: `Non. Tout se calcule dans votre navigateur${NBSP}: aucun montant n’est envoyé ni enregistré, et tout s’efface quand vous fermez la page. Pour garder une trace, copiez le récapitulatif et collez-le dans un mail ou dans votre devis.`,
      },
    ],
  },
  templates: {
    eyebrow: 'Modèles gratuits',
    title: 'Poser ces montants sur un devis ou un reçu',
    intro:
      'Le calculateur ne garde rien. Pour remettre un document propre à votre client, deux modèles gratuits à télécharger, sans inscription.',
    links: [
      {
        routeName: PLUMBER_QUOTE_TEMPLATE_ROUTE_NAME,
        title: 'Devis plombier chauffagiste',
        description: `Devis et bon d’intervention en Excel et PDF, avec un taux de TVA de 5,5, 10 ou 20${NBSP}% sur chaque ligne.`,
        linkLabel: 'Voir le modèle de devis',
      },
      {
        routeName: PAYMENT_RECEIPT_TEMPLATE_ROUTE_NAME,
        title: 'Reçu de paiement et d’acompte',
        description: 'Carnet de reçus avec souche et reçu d’acompte en PDF, Word et Excel, avec le reste dû calculé.',
        linkLabel: 'Voir le reçu de paiement',
      },
    ],
  },
  contactCta: {
    title: `Vos devis et vos factures se font encore à la main${NBSP}?`,
    description: `Quand chaque devis se retape dans un tableur, que les taux se choisissent ligne par ligne et que la facture se ressaisit ensuite, un outil qui relie les devis, les factures et le suivi des paiements vous rend du temps. Décrivez-moi votre organisation${NBSP}: je vous réponds sous 24${NBSP}h, et si un logiciel du marché suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
  },
}
