import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  IMMEDIATE_ADVANCE_PROVIDER_SOURCE,
  QUALITY_FRAMEWORK_DECREE_SOURCE,
  SELF_FUNDED_TRAINING_CONTRACT_SOURCE,
  TRAINING_ACTIVITY_DECLARATION_SOURCE,
  TRAINING_CENTER_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  TRAINING_CENTER_PAGE_PROJECT_SLUG,
  TRAINING_CENTER_PAGE_RELATED_ARTICLE_SLUGS,
  TRAINING_CENTER_PAGE_SCREENSHOT_URL,
  TRAINING_CENTER_PAGE_UPDATED_AT,
  TRAINING_CENTER_TEMPLATE_PDF_PATH,
  TRAINING_CENTER_TEMPLATE_XLSX_PATH,
  VAT_EXEMPT_E_INVOICING_SOURCE,
} from '~/core/constants/tools/trainingCenterSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'
import { TRAINING_ATTENDANCE_SHEET_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/trainingAttendanceSheet/pageShared'

export const TRAINING_CENTER_PAGE_CONTENT_FR: DibodevSoftwareToolPageContent = {
  meta: {
    title: `Logiciel organisme de formation et soutien scolaire${NBSP}: prix`,
    description: `Soutien scolaire, cours particuliers, école de musique${NBSP}: prix 2026 de Digiforma, Dendreo, Platformeasy, test gratuit en 6 questions et feuille d’émargement.`,
    inLanguage: 'fr-FR',
    schemaAbout: 'Logiciel de gestion pour organisme de formation, centre de soutien scolaire et école de musique',
  },
  breadcrumbLabel: 'Logiciel pour organisme de formation',
  shareImage: {
    titleLines: ['Quel logiciel pour', `vos formations${NBSP}?`],
    highlight: 'formations',
    subtitle:
      'Six questions, les prix 2026 des logiciels de formation et de cours, et une feuille d’émargement gratuite',
    badge: 'Test gratuit, en 2 minutes',
    icon: 'graduation',
    alt: `Quel logiciel pour votre organisme de formation ou votre centre de cours${NBSP}? Test gratuit en 6 questions, prix 2026 des logiciels et feuille d’émargement à télécharger, sur dibodev.fr`,
  },
  hero: {
    titleBefore: 'Quel logiciel pour votre ',
    titleHighlight: 'organisme de formation',
    titleAfter: ` ou votre centre de cours${NBSP}?`,
    description: `Six questions sur vos formateurs ou vos profs, vos lieux de cours et surtout sur qui vous paie${NBSP}: CPF, OPCO, familles avec crédit d’impôt ou adhérents. Formation Qualiopi, soutien scolaire, cours particuliers, école de musique ou de danse${NBSP}: le test vous dit quelle famille de logiciels choisir, les règles qui s’appliquent à vous et combien prévoir.`,
    reassurances: ['2 minutes', 'Sans inscription ni e-mail', 'Résultat immédiat'],
    authorIntro: 'Test conçu par',
    authorBio: `développeur d’applications métier près de Rennes. Pendant ma formation à Epitech, j’ai conçu une application de gestion d’auto-école${NBSP}: planning des leçons, élèves, moniteurs et heures restantes.`,
    updatedAt: TRAINING_CENTER_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'logiciels',
    eyebrow: 'Prix publics 2026',
    title: 'Comparatif des logiciels de formation, de soutien scolaire et d’école de musique',
    intro: `Trois mondes qui ne se croisent pas${NBSP}: les logiciels d’organisme de formation (Qualiopi, BPF, CPF), ceux du soutien scolaire et des cours particuliers (avance immédiate, attestations fiscales), et ceux des écoles de musique, de danse ou de langues (inscriptions, tarifs famille). Voici les prix affichés par les éditeurs${NBSP}; ils montent avec le nombre d’apprenants, d’heures-stagiaires, d’utilisateurs ou de signatures.`,
    productColumnLabel: 'Logiciel',
    coverageColumnLabel: 'Ce qu’il gère',
    priceColumnLabel: 'Prix public',
    products: [
      {
        name: 'Digiforma',
        coverage: `Organisme de formation${NBSP}: sessions, émargement numérique, BPF, conformité qualité, devis, factures et facture électronique${NBSP}; CPF et EDOF non décrits sur la page tarifs`,
        price: `Dès 49${NBSP}€ HT par mois`,
        priceCondition: `Indep 49${NBSP}€ avec engagement annuel ou 59${NBSP}€ sans (200 apprenants par an, 1 utilisateur), jusqu’à Leader dès 699 ou 839${NBSP}€${NBSP}; options dès 29${NBSP}€ par mois${NBSP}; 15 jours offerts`,
      },
      {
        name: 'Dendreo',
        coverage: `Organisme de formation${NBSP}: émargement illimité, BPF automatique, guide Qualiopi, export EDOF (connecteur par un abonnement Wedof en plus), facture électronique`,
        price: `225 à 992${NBSP}€ HT par mois`,
        priceCondition: `Starter${NBSP}: 10${NBSP}000${NBSP}heures-stagiaires par an, 2 utilisateurs${NBSP}; mise en service de 1${NBSP}490 à 3${NBSP}990${NBSP}€ HT${NBSP}; Platine sur devis${NBSP}; essai 14 jours, sans engagement`,
      },
      {
        name: 'Edusign',
        coverage: `Émargement en ligne seul${NBSP}: apprenants et questionnaires illimités, 200 à 1${NBSP}000 signatures par mois selon l’offre${NBSP}; Qualiopi cité dans l’offre Organisme Pro`,
        price: `29 à 119${NBSP}€ par mois`,
        priceCondition: `HT ou TTC non précisé${NBSP}; Indépendant 29${NBSP}€ à l’année ou 39${NBSP}€ au mois, Organisme 59 ou 75${NBSP}€, Organisme Pro 99 ou 119${NBSP}€, puis 0,25 à 0,50${NBSP}€ la signature au-delà du quota${NBSP}; essai gratuit`,
      },
      {
        name: 'Platformeasy (ex-Ogustine)',
        coverage: `Soutien scolaire et cours à domicile${NBSP}: planning, factures depuis le planning, avance immédiate (interface Urssaf) et attestations fiscales dès Solo, facture électronique`,
        price: `39 à 109${NBSP}€ HT par mois`,
        priceCondition: `Solo 39${NBSP}€, Standard 69${NBSP}€ (+29${NBSP}€ par compte), Pro 109${NBSP}€ (+39${NBSP}€ par compte)${NBSP}; appli mobile 1${NBSP}750${NBSP}€ plus 35${NBSP}€ HT par mois${NBSP}; 30 jours pour 1${NBSP}€, sans engagement`,
      },
      {
        name: 'Kadrella',
        coverage: `Cours particuliers${NBSP}: élèves et profs illimités, cours récurrents, attestation fiscale${NBSP}; factures dans l’offre Complet${NBSP}; avance immédiate non mentionnée`,
        price: `Gratuit, puis 29 ou 49${NBSP}€ par mois`,
        priceCondition: `HT ou TTC non précisé${NBSP}; Essentiel 29${NBSP}€ (319${NBSP}€ à l’année), Complet 49${NBSP}€ (539${NBSP}€ à l’année)${NBSP}; essai 14 jours, sans engagement`,
      },
      {
        name: 'MyScol',
        coverage: `Soutien scolaire, musique et danse${NBSP}: planning par élève, présences et absences, factures et paiements des parents, cahier de texte`,
        price: `84 à 360${NBSP}€ HT par mois`,
        priceCondition: `De 50 à 500 élèves${NBSP}; à l’année, 504 à 2${NBSP}160${NBSP}€ HT${NBSP}; pas d’essai, un mois sans engagement en mensuel`,
      },
      {
        name: 'Viviarto',
        coverage: `Écoles de musique et de danse${NBSP}: planning, inscriptions en ligne, tarifs famille, présences, QR code`,
        price: `Dès 19${NBSP}€ par mois`,
        priceCondition: `HT ou TTC non précisé${NBSP}; Autonomie dès 19${NBSP}€, Sérénité dès 38${NBSP}€, Tout compris dès 52${NBSP}€, tarif adapté à la taille de l’école, abonnement à la saison`,
      },
      {
        name: 'Alcuin, Belami, Accès SAP, Ogust',
        coverage:
          'Planning des sessions et BPF (Alcuin), factures et prélèvements SEPA des familles (Belami), avance immédiate pour le soutien scolaire (Accès SAP, Ogust)',
        price: 'Sur devis',
        priceCondition: `Tarifs non publiés${NBSP}; chez Accès SAP, logiciel inclus dans l’adhésion à la coopérative${NBSP}; chez Ogust, Standard et Entreprise sur devis, Essentiel à partir de 50${NBSP}€ par mois (HT ou TTC non précisé)`,
      },
    ],
    calloutEmphasizedIntro: `Avant de signer${NBSP}:`,
    calloutText: `faites passer une vraie semaine au logiciel. Un prof absent remplacé le matin même, une session dont chaque demi-journée est émargée en ligne, le certificat de réalisation envoyé au financeur, une famille facturée avec l’avance immédiate, puis le total d’heures prêt pour le BPF. Et regardez ce qui fait monter la facture${NBSP}: apprenants, heures-stagiaires, utilisateurs ou signatures.`,
    calloutFootnote: 'Tarifs relevés le 1er novembre 2026 sur les pages tarifs des éditeurs. Liste non exhaustive.',
  },
  rules: {
    anchorId: 'reglementation',
    eyebrow: 'Le point en 2026',
    title: `Qualiopi, BPF, avance immédiate${NBSP}: les règles selon qui vous paie`,
    intro: `Tout dépend de qui paie vos cours. Pour le CPF, un OPCO ou une entreprise, vous êtes un organisme de formation${NBSP}: déclaration d’activité, BPF chaque année, Qualiopi pour le CPF. Pour des familles, le soutien scolaire à domicile relève des services à la personne${NBSP}: TVA à 10${NBSP}% si vous n’exercez que ces services, crédit d’impôt de 50${NBSP}% pour elles. Une école de musique, de danse ou de langues qui donne des cours de loisirs n’a pas de déclaration d’activité à faire.`,
    facts: [
      {
        contextLabel: 'Dans les 3 mois, puis chaque année',
        title: 'La déclaration d’activité et le BPF annuel',
        text: `Déclarez votre activité dans les 3 mois qui suivent la première convention ou le premier contrat signé${NBSP}; son numéro figure ensuite sur vos conventions, devis, factures et contrats. Chaque année, le bilan pédagogique et financier (BPF) la garde valable${NBSP}: sans lui, elle devient caduque. Les cours de loisirs donnés à des particuliers ne sont pas concernés.`,
        sourceName: TRAINING_ACTIVITY_DECLARATION_SOURCE.name,
        sourceUrl: TRAINING_ACTIVITY_DECLARATION_SOURCE.url,
      },
      {
        contextLabel: 'Depuis le 1er novembre 2026',
        title: `Qualiopi${NBSP}: un référentiel à 33 indicateurs`,
        text: `Le décret du 1er août 2026 fixe 7 critères et 33 indicateurs, contre 32 auparavant. Plusieurs portent sur le suivi${NBSP}: positionnement à l’entrée, suivi adapté, ruptures de parcours et, pour les modules à distance, l’effectivité de leur suivi (indicateur 19). Le texte ne cite pas l’émargement${NBSP}: c’est la preuve de réalisation que demandent les financeurs.`,
        sourceName: QUALITY_FRAMEWORK_DECREE_SOURCE.name,
        sourceUrl: QUALITY_FRAMEWORK_DECREE_SOURCE.url,
      },
      {
        contextLabel: 'Articles L6353-3 à L6353-6',
        title: `Un particulier paie lui-même${NBSP}: 10 jours pour se rétracter`,
        text: `Le contrat est signé avant l’inscription définitive et avant tout paiement. Le stagiaire a 10 jours pour se rétracter par lettre recommandée${NBSP}; rien n’est encaissé avant la fin de ce délai, puis 30${NBSP}% du prix au plus, le solde étant échelonné.`,
        sourceName: SELF_FUNDED_TRAINING_CONTRACT_SOURCE.name,
        sourceUrl: SELF_FUNDED_TRAINING_CONTRACT_SOURCE.url,
      },
      {
        contextLabel: 'Soutien scolaire à domicile',
        title: 'L’avance immédiate passe par un logiciel compatible',
        text: 'Pour proposer aux familles l’avance immédiate de leur crédit d’impôt, votre structure doit être déclarée ou agréée services à la personne, à jour de ses obligations sociales et fiscales, sans infraction de travail dissimulé depuis 5 ans, et utiliser un logiciel compatible avec l’API Tiers de prestation de l’Urssaf.',
        sourceName: IMMEDIATE_ADVANCE_PROVIDER_SOURCE.name,
        sourceUrl: IMMEDIATE_ADVANCE_PROVIDER_SOURCE.url,
      },
      {
        contextLabel: 'Facture électronique',
        title: `Formation exonérée de TVA${NBSP}: recevoir, pas émettre`,
        text: `Pour les opérations exonérées de TVA (articles 261 à 261 E du CGI, où figure la formation professionnelle), impots.gouv.fr indique que vous n’êtes «${NBSP}pas concernés en émission${NBSP}». Votre organisme doit en revanche recevoir les factures électroniques de ses fournisseurs. Certains éditeurs disent l’inverse${NBSP}: faites confirmer par votre expert-comptable.`,
        sourceName: VAT_EXEMPT_E_INVOICING_SOURCE.name,
        sourceUrl: VAT_EXEMPT_E_INVOICING_SOURCE.url,
      },
      {
        contextLabel: '1er septembre 2027',
        title: 'Le calendrier de la facture électronique',
        text: `Toutes les entreprises concernées par la réforme doivent pouvoir recevoir des factures électroniques depuis le 1er septembre 2026${NBSP}; les PME devront les émettre à partir du 1er septembre 2027, pour les opérations qui entrent dans son champ.`,
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: `Ce que l’outil sur mesure ne remplace pas${NBSP}:`,
    calloutText: `la certification Qualiopi, ni vos démarches sur Mon activité formation, sur EDOF ou auprès de l’Urssaf. C’est votre organisme qui est audité et qui déclare${NBSP}; l’outil range les preuves, prépare les chiffres du BPF et se branche sur votre comptabilité.`,
  },
  freeTemplate: {
    anchorId: 'modele',
    eyebrow: 'Modèle gratuit',
    title: 'Feuille d’émargement et suivi des heures, en PDF et en Excel',
    description: `Une feuille d’émargement par demi-journée pour vos formations, avec le numéro de déclaration d’activité et les signatures du stagiaire et du formateur${NBSP}; sa variante hebdomadaire pour les cours réguliers de soutien scolaire, de musique ou de langues. En Excel, le planning des cours, le solde d’heures de chaque élève et le total d’heures par stagiaire se calculent seuls.`,
    items: [
      `Feuille d’émargement par demi-journée${NBSP}: intitulé, dates, horaires, présentiel ou distance, lieu, NDA, signatures du stagiaire et du formateur, absence ou retard`,
      `Présences de la semaine${NBSP}: un élève par ligne, une case par cours, le forfait et le solde d’heures, pour le soutien scolaire, la musique ou les langues`,
      `Version Excel${NBSP}: planning des cours, des profs et des salles avec alerte de double réservation, solde d’heures par élève avec alerte sous 2${NBSP}heures, total par stagiaire pour le certificat de réalisation et le BPF`,
      `Repères utiles${NBSP}: la signature par demi-journée est un usage demandé par la plupart des financeurs, pas une obligation écrite${NBSP}; le certificat de réalisation suit le modèle du ministère du Travail`,
    ],
    downloads: [
      {
        label: 'Télécharger le modèle PDF',
        href: TRAINING_CENTER_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 pages, à imprimer',
      },
      {
        label: 'Télécharger la version Excel',
        href: TRAINING_CENTER_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 feuilles, heures et soldes calculés',
      },
    ],
    footnote: 'Modèle libre d’utilisation, à adapter à votre organisme et à vos financeurs.',
    pageLinkLabel: 'Voir la page du modèle',
    pageLinkRouteName: TRAINING_ATTENDANCE_SHEET_TEMPLATE_ROUTE_NAME,
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
          { state: 'yes', text: `Offres d’entrée de 39 à 225${NBSP}€ HT par mois, puis selon le volume` },
          { state: 'partial', text: `Votre abonnement, plus 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois` },
          {
            state: 'partial',
            text: `5${NBSP}000 à 25${NBSP}000${NBSP}€ une seule fois, plus 100 à 300${NBSP}€ par mois de maintenance`,
          },
        ],
      },
      {
        label: 'Émargement, BPF, avance immédiate',
        cells: [
          {
            state: 'partial',
            text: `Selon l’éditeur${NBSP}: BPF chez les logiciels de formation, avance immédiate chez ceux du soutien scolaire, pas les deux dans les offres relevées`,
          },
          { state: 'yes', text: 'Restent dans votre logiciel actuel' },
          {
            state: 'yes',
            text: `Réunis dans un seul outil${NBSP}; l’avance immédiate passe par l’API de l’Urssaf, après habilitation`,
          },
        ],
      },
      {
        label: `Vos règles${NBSP}: forfaits, financeurs, plusieurs activités`,
        cells: [
          { state: 'partial', text: 'Dans la limite des réglages prévus par l’éditeur' },
          { state: 'yes', text: 'Sur les points ajoutés par le complément' },
          { state: 'yes', text: 'Conçu autour de votre organisation' },
        ],
      },
      {
        label: 'Espace pour les élèves, les familles ou les stagiaires',
        cells: [
          { state: 'partial', text: 'Souvent un extranet de l’éditeur, à ses couleurs' },
          { state: 'yes', text: 'Sur votre site, à vos couleurs' },
          { state: 'yes', text: 'Sur votre site, à vos couleurs' },
        ],
      },
      {
        label: 'Mise en route',
        cells: [
          { state: 'yes', text: `Quelques jours${NBSP}; plus long pour les logiciels très paramétrables` },
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
    rowsShownOnSmallScreens: TRAINING_CENTER_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: TRAINING_CENTER_PAGE_PROJECT_SLUG,
    screenshotUrl: TRAINING_CENTER_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Déjà réalisé',
    title: 'Un planning de cours avec le solde d’heures de chaque élève, déjà développé',
    description: `Driving School est une application web de gestion d’auto-école que j’ai conçue pendant ma formation à Epitech. Une leçon de conduite et un cours de soutien ont le même squelette${NBSP}: un élève, un prof, un créneau, un forfait d’heures qui se vide. C’est ce noyau que je reprends pour un centre de cours ou un organisme de formation, avec vos salles, vos financeurs et vos émargements en plus.`,
    highlights: [
      'Un planning à consulter au jour, à la semaine ou au mois',
      'Une fiche par élève et par moniteur, avec les droits de chacun',
      `Le solde de chaque élève${NBSP}: heures effectuées, heures restantes`,
    ],
    linkLabel: 'Voir le projet Driving School',
    imageAlt: `Driving School${NBSP}: le planning du mois, avec le prénom de l’élève sur chaque leçon`,
    browserBarCaption: 'Driving School · planning des leçons',
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Logiciel de formation, de soutien scolaire ou d’école${NBSP}: vos questions`,
    questions: [
      {
        question: `Combien coûte un logiciel pour organisme de formation${NBSP}?`,
        answer: `Digiforma démarre à 49${NBSP}€ HT par mois avec engagement annuel (59${NBSP}€ sans) pour 200 apprenants par an, Dendreo à 225${NBSP}€ HT par mois plus une mise en service dès 1${NBSP}490${NBSP}€ HT, hop3team à 39${NBSP}€ HT par mois à l’année (49${NBSP}€ sans engagement), Qualiobee à 49${NBSP}€ HT par mois pour 100 apprenants par an et SmartOF à 75${NBSP}€ HT par mois. Pour l’émargement seul, Edusign coûte 29${NBSP}€ par mois à l’année (HT ou TTC non précisé). Les prix montent avec les apprenants, les heures-stagiaires, les utilisateurs ou les signatures (tarifs relevés le 1er novembre 2026). Un complément sur mesure coûte de 2${NBSP}500 à 7${NBSP}000${NBSP}€ une seule fois, un outil complet de 5${NBSP}000 à 25${NBSP}000${NBSP}€, puis 100 à 300${NBSP}€ par mois de maintenance.`,
      },
      {
        question: `Quel est le logiciel de gestion de formation le plus utilisé${NBSP}?`,
        answer: `Je n’ai trouvé aucun chiffre public fiable sur le nombre d’utilisateurs de chaque logiciel. Le 1er novembre 2026, la première page de Google sur «${NBSP}logiciel organisme de formation${NBSP}» montrait Digiforma, Wedof, Qualiobee, SmartOF et Dendreo${NBSP}; sur «${NBSP}logiciel soutien scolaire${NBSP}», Platformeasy, MyScol, Ogust, Accès SAP et Gestio. Ce sont deux familles d’outils différentes${NBSP}: choisissez d’abord la vôtre selon qui vous paie, c’est ce que fait le test en haut de cette page.`,
      },
      {
        question: `Quel logiciel pour le soutien scolaire ou les cours particuliers${NBSP}?`,
        answer: `Regardez d’abord l’avance immédiate${NBSP}: avec elle, la famille ne règle que 50${NBSP}% du coût (dans la limite du plafond du crédit d’impôt), et vous ne pouvez la proposer qu’en étant déclaré ou agréé services à la personne, avec un logiciel compatible avec l’API Tiers de prestation de l’Urssaf. Platformeasy l’inclut dès son offre Solo à 39${NBSP}€ HT par mois, Ogust la propose aussi (offre Essentiel à partir de 50${NBSP}€ par mois, HT ou TTC non précisé) et Accès SAP inclut son logiciel dans l’adhésion à sa coopérative. Kadrella (gratuit, puis 29 ou 49${NBSP}€ par mois) fait les attestations fiscales sans mentionner l’avance immédiate, et MyScol (84${NBSP}€ HT par mois pour 50 élèves) gère le planning, les présences et les factures des parents. Tarifs relevés le 1er novembre 2026.`,
      },
      {
        question: `Quel logiciel de gestion pour une école de musique ou de danse${NBSP}?`,
        answer: `Les outils des écoles de loisirs gèrent les inscriptions, les tarifs famille et les présences${NBSP}: Viviarto démarre à 19${NBSP}€ par mois (HT ou TTC non précisé, abonnement à la saison), Liberfit à 79${NBSP}€ HT par mois avec engagement (99${NBSP}€ sans, plus des frais de mise en service), AssoConnect est gratuit puis de 23 à 109${NBSP}€ TTC par mois pour les associations, MyScol démarre à 84${NBSP}€ HT par mois et Belami est sur devis (tarifs relevés le 1er novembre 2026). Une école qui donne des cours de loisirs à des particuliers n’a pas de déclaration d’activité de formation à faire. En danse classique, contemporaine ou jazz, l’enseignant rémunéré doit avoir le diplôme d’État, une équivalence ou une dispense, et chaque élève fournit un certificat médical par an (code de l’éducation, articles L362-1 et R362-2).`,
      },
      {
        question: `Existe-t-il un logiciel gratuit pour organisme de formation ou cours particuliers${NBSP}?`,
        answer: `Oui, pour démarrer${NBSP}: Kadrella a une offre gratuite pour les cours particuliers, AssoConnect une offre gratuite pour les associations, et Teachizy une offre Découverte gratuite pour vendre des cours en ligne (9${NBSP}% de commission, 3 formations, 70 apprenants). Les logiciels d’organisme de formation relevés sont payants, mais s’essaient sans payer${NBSP}: hop3team ouvre un compte gratuit complet sans carte bancaire, Digiforma offre 15 jours, Dendreo et Qualiobee 14 jours. Le modèle gratuit de cette page (feuille d’émargement en PDF, suivi des heures en Excel) dépanne une petite structure, sans signature en ligne ni BPF automatique.`,
      },
      {
        question: `Feuille d’émargement de formation${NBSP}: par demi-journée, sur papier ou en ligne${NBSP}?`,
        answer: `Le référentiel Qualiopi ne cite pas l’émargement${NBSP}: c’est la preuve de réalisation que demandent les financeurs, avec le certificat de réalisation dont le ministère du Travail publie le modèle. Signer par demi-journée, le matin et l’après-midi, est un usage demandé par la plupart des financeurs, pas une obligation écrite dans un texte. En ligne, Edusign démarre à 29${NBSP}€ par mois à l’année (200 signatures par mois, puis 0,50${NBSP}€ la signature), hop3team facture 0,15${NBSP}€ HT la signature et Dendreo inclut l’émargement illimité. Sur papier, la feuille gratuite de cette page prévoit les deux demi-journées, le numéro de déclaration d’activité et les signatures du stagiaire et du formateur.`,
      },
      {
        question: `Qualiopi${NBSP}: qu’est-ce qui change depuis le 1er novembre 2026${NBSP}?`,
        answer: `Depuis le 1er novembre 2026, le référentiel national qualité compte 7 critères et 33 indicateurs, contre 32 auparavant (décret n°${NBSP}2026-728 du 1er août 2026). Plusieurs indicateurs portent sur le suivi des apprenants${NBSP}: positionnement et évaluation des acquis à l’entrée (8), suivi adapté (10), atteinte des objectifs (11), engagement, ruptures de parcours, violences et harcèlement (12), effectivité du suivi des modules à distance (19). Vérifiez que votre logiciel est passé aux 33 indicateurs${NBSP}: le 1er novembre 2026, au moins une page tarifs d’éditeur parlait encore des 32. Un logiciel ne vous certifie pas${NBSP}: c’est votre organisme qui est audité.`,
      },
      {
        question: `Quand envoyer le bilan pédagogique et financier (BPF)${NBSP}?`,
        answer: `Chaque année, sur Mon activité formation, à la date fixée par le ministère du Travail${NBSP}: en 2026, la campagne courait du 1er avril au 31 mai (Centre Inffo). Tout organisme déclaré l’envoie, formateur indépendant compris${NBSP}; sans BPF, la déclaration d’activité devient caduque. Un logiciel qui tient les émargements et les heures par stagiaire vous évite de tout recompter au moment de le remplir.`,
      },
      {
        question: `Un particulier paie lui-même sa formation${NBSP}: que doit prévoir le contrat${NBSP}?`,
        answer: `Le contrat est signé avant l’inscription définitive et avant tout paiement (article L6353-3 du Code du travail). Le stagiaire peut se rétracter pendant 10 jours par lettre recommandée${NBSP}; aucune somme ne peut être exigée avant la fin de ce délai, puis 30${NBSP}% du prix au plus, le solde étant échelonné (articles L6353-5 et L6353-6). Ces règles visent la personne qui entreprend une formation à titre individuel et à ses frais.`,
      },
      {
        question: `Quelle TVA pour une formation, du soutien scolaire ou des cours à domicile${NBSP}?`,
        answer: `Une formation professionnelle n’est exonérée de TVA qu’avec l’attestation de la Dreets, et la facture porte la mention «${NBSP}article 261-4-4° du CGI${NBSP}» (Centre Inffo). Le soutien scolaire à domicile est à 10${NBSP}% si vous n’exercez que des services à la personne${NBSP}; les autres cours à domicile sont à 20${NBSP}% (Entreprendre.Service-Public.fr). Les familles récupèrent ensuite 50${NBSP}% de leurs dépenses en crédit d’impôt, dans la limite de 12${NBSP}000${NBSP}€ par an plus 1${NBSP}500${NBSP}€ par enfant à charge (15${NBSP}000${NBSP}€ au plus), et un devis est obligatoire dès 100${NBSP}€ TTC par mois.`,
      },
      {
        question: `Mon centre fait de la formation et du soutien scolaire${NBSP}: un seul logiciel suffit-il${NBSP}?`,
        answer: `Pas avec les offres que j’ai relevées${NBSP}: le 1er novembre 2026, aucune page lue d’un logiciel pour organisme de formation ne citait l’avance immédiate, et aucune page lue d’un logiciel de services à la personne ne citait le BPF ou Qualiopi. Vous payez alors souvent deux abonnements, par exemple Digiforma dès 49${NBSP}€ HT et Platformeasy dès 39${NBSP}€ HT par mois, et vous ressaisissez de l’un à l’autre. C’est le cas où un outil sur mesure se justifie${NBSP}: un seul planning et un seul suivi des heures, avec l’émargement et le BPF d’un côté, l’avance immédiate et l’attestation fiscale de l’autre. On peut y ajouter de l’IA si elle vous sert${NBSP}: BPF prérempli à partir des présences, conventions et attestations préparées, résumé des progrès pour les parents.`,
      },
      {
        question: `Peut-on reprendre les données de mon logiciel actuel${NBSP}?`,
        answer: `Si votre logiciel exporte vos élèves ou stagiaires, vos sessions, vos émargements et vos factures en Excel ou en CSV, je les reprends dans le nouvel outil${NBSP}; c’est prévu dans le devis. Vérifiez cette possibilité d’export avant de signer avec un éditeur, et gardez vos feuilles d’émargement signées${NBSP}: ce sont vos preuves de réalisation auprès des financeurs.`,
      },
    ],
  },
  relatedArticles: {
    title: 'À lire aussi',
    slugs: TRAINING_CENTER_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: `Un doute sur le bon outil pour vos formations ou vos cours${NBSP}?`,
    description: `Décrivez-moi en quelques lignes qui vous paie, vos lieux et vos profs. Je vous réponds sous 24${NBSP}h, et si un logiciel du marché vous suffit, je vous le dis.`,
    button: 'Discuter de mon projet',
  },
}
