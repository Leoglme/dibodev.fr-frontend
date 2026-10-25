import type { DibodevEInvoicingScopePageContent } from '~/core/types/DibodevEInvoicingScopePage'
import { E_INVOICING_SCOPE_SOURCES } from '~/core/constants/eInvoicingScope/pageShared'
import { NBSP } from '~/core/constants/typography'

export const E_INVOICING_SCOPE_PAGE_FR: DibodevEInvoicingScopePageContent = {
  meta: {
    title: 'Facture électronique : suis-je concerné, et quand ?',
    description:
      'Micro-entreprise, franchise de TVA, loueur en meublé, association : 5 questions pour savoir si la facture électronique vous concerne, et à quelle date. Gratuit.',
    inLanguage: 'fr-FR',
    schemaAbout: 'Champ d’application de la facturation électronique en France : qui est concerné et à quelle date',
  },
  breadcrumbLabel: 'Facture électronique : suis-je concerné ?',
  shareImage: {
    titleLines: ['Facture électronique :', 'suis-je concerné,', 'et quand ?'],
    highlight: 'concerné',
    subtitle: 'Micro-entreprise, franchise de TVA, loueur en meublé, association',
    badge: 'Gratuit · 5 questions · 1 minute',
    alt: 'Facture électronique : suis-je concerné, et quand ? Test gratuit sur dibodev.fr',
  },
  hero: {
    titleBefore: `Facture électronique${NBSP}: êtes-vous `,
    titleHighlight: 'concerné',
    titleAfter: `, et à partir de quand${NBSP}?`,
    reassurances: [
      'Gratuit, 5 questions, 1 minute',
      'Résultat sans e-mail',
      'Textes officiels relus le 25 octobre 2026',
    ],
    description: `Depuis le 1er septembre 2026, toute entreprise assujettie à la TVA doit pouvoir recevoir des factures électroniques${NBSP}; les TPE devront en émettre à partir du 1er septembre 2027. Mais micro-entrepreneur en franchise, loueur en meublé, association, profession exonérée${NBSP}: chacun se demande s’il est dans le champ. Ce test croise votre statut, votre régime de TVA, votre taille et vos clients, et vous donne vos dates.`,
    authorIntro: 'Test conçu par',
    authorBio: `développeur freelance près de Rennes. Je raccorde les logiciels métier et les outils maison aux plateformes agréées, et j’automatise les devis et les factures des TPE, à distance.`,
  },
  mobileContactBar: {
    text: 'Un doute sur votre cas ?',
    buttonLabel: 'Décrire mon cas',
  },
  facts: {
    anchorId: 'textes',
    eyebrow: 'Ce que disent les textes',
    title: 'Qui est concerné : six points vérifiés',
    intro: `Les règles relues le 25 octobre 2026 sur les sources officielles. impots.gouv.fr était en maintenance ce jour-là${NBSP}: les fiches de la DGFiP ont été lues sur leurs relais.`,
    facts: [
      {
        contextLabel: 'Entre assujettis en France',
        title: 'La réforme vise les ventes entre entreprises établies en France et assujetties à la TVA',
        text: `La facturation électronique s’applique aux achats et ventes de biens ou de services entre entreprises établies en France et assujetties à la TVA. Toute entreprise concernée doit pouvoir recevoir des factures électroniques depuis le 1er septembre 2026${NBSP}; l’émission est obligatoire à cette date pour les grandes entreprises et les ETI, et à partir du 1er septembre 2027 pour les micro-entreprises et les PME.`,
        sourceName: 'Entreprendre.Service-Public.gouv.fr, actualité du 2 septembre 2026',
        sourceUrl: E_INVOICING_SCOPE_SOURCES.servicePublicNews,
      },
      {
        contextLabel: 'Franchise en base',
        title: 'La franchise de TVA ne sort pas du champ',
        text: `La franchise en base dispense de facturer la TVA, pas d’être assujetti${NBSP}: un micro-entrepreneur ou une petite société en franchise doit pouvoir recevoir des factures électroniques depuis le 1er septembre 2026, et émettre celles de ses clients professionnels par une plateforme agréée à partir du 1er septembre 2027.`,
        sourceName: 'Guide pratique de démarrage de la facturation électronique, DGFiP, juillet 2026',
        sourceUrl: E_INVOICING_SCOPE_SOURCES.officialStarterGuide,
      },
      {
        contextLabel: 'Exonérés : réception seule',
        title: 'Une activité exonérée reçoit, mais n’émet pas',
        text: `Un assujetti dont toutes les opérations sont exonérées de TVA (santé, enseignement, location meublée sans services…) reste assujetti en qualité de destinataire${NBSP}: il doit pouvoir recevoir les factures électroniques de ses fournisseurs depuis le 1er septembre 2026, mais n’a ni facture électronique à émettre ni e-reporting à transmettre pour ces opérations.`,
        sourceName: 'Légifiscal, « Facturation électronique et loueur en meublé », d’après la fiche de la DGFiP',
        sourceUrl: E_INVOICING_SCOPE_SOURCES.legifiscalLandlord,
      },
      {
        contextLabel: 'Particuliers et étranger',
        title: 'Pas de facture électronique, mais un e-reporting',
        text: `Les ventes à des particuliers et les opérations avec des clients établis à l’étranger ne donnent pas lieu à une facture électronique${NBSP}: leurs données de transaction sont transmises à l’administration par e-reporting, au même calendrier que l’émission. Une entreprise peut donc relever des deux obligations selon ses clients.`,
        sourceName: 'Entreprendre.Service-Public.gouv.fr, actualité du 2 septembre 2026',
        sourceUrl: E_INVOICING_SCOPE_SOURCES.servicePublicNews,
      },
      {
        contextLabel: 'Annuaire',
        title: 'Sans plateforme désignée, pas d’adresse de réception',
        text: `L’annuaire de la facturation électronique recense chaque entreprise assujettie, sa plateforme agréée et ses adresses de facturation. Tant que vous n’avez pas désigné de plateforme, vos fournisseurs ne peuvent pas vous adresser de facture électronique${NBSP}: c’est la première chose à faire, quelle que soit votre date d’émission.`,
        sourceName: 'economie.gouv.fr, « Qu’est-ce que l’annuaire de la facturation électronique ? »',
        sourceUrl: E_INVOICING_SCOPE_SOURCES.economieGouvDirectory,
      },
      {
        contextLabel: 'Tolérance 2026',
        title: 'Aucune sanction en 2026, mais ni report ni suspension',
        text: `Le gouvernement a annoncé qu’aucune sanction ne serait appliquée en 2026 aux entreprises en difficulté réelle, documentée et suivie d’actions de correction. Le guide de démarrage de la DGFiP précise que cette tolérance « n’est ni un report, ni une suspension de l’obligation ».`,
        sourceName: 'Compta Online, 5 octobre 2026, d’après le communiqué et le guide de la DGFiP',
        sourceUrl: E_INVOICING_SCOPE_SOURCES.comptaOnlineTolerance,
      },
    ],
    calloutEmphasizedIntro: `Ce que je fais pour vous${NBSP}:`,
    calloutText: `je vérifie votre situation, je raccorde votre logiciel métier ou votre outil maison à une plateforme agréée, et j’automatise la sortie des devis et des factures. À distance, premier échange gratuit.`,
  },
  cases: {
    anchorId: 'cas',
    eyebrow: 'Cas par cas',
    title: 'Micro-entrepreneur, loueur, association, profession libérale : ce que chacun doit faire',
    intro: 'Les six situations qui reviennent le plus dans les questions que je reçois, avec la règle qui s’applique.',
    items: [
      {
        title: 'Micro-entrepreneur en franchise de TVA',
        description: `Recevoir par une plateforme agréée depuis le 1er septembre 2026${NBSP}; émettre les factures de vos clients professionnels par une plateforme à partir du 1er septembre 2027${NBSP}; e-reporting des ventes aux particuliers à la même date.`,
      },
      {
        title: 'Société ou entreprise individuelle au réel',
        description: `Mêmes dates que la micro-entreprise tant que vous restez sous 250 salariés et 50${NBSP}M€ de chiffre d’affaires. Au-delà, tout est obligatoire depuis le 1er septembre 2026.`,
      },
      {
        title: 'Profession libérale',
        description:
          'Si vos actes sont exonérés (médecin, infirmier, enseignant…), réception seule depuis 2026. Si vous facturez la TVA ou êtes en franchise (avocat, consultant, architecte…), réception depuis 2026 et émission en 2027.',
      },
      {
        title: 'Loueur en meublé sans services (LMNP, LMP)',
        description: `Location exonérée${NBSP}: vous restez assujetti en tant que destinataire. Réception des factures de vos fournisseurs depuis le 1er septembre 2026, si vous avez un SIREN${NBSP}; aucune émission, aucun e-reporting.`,
      },
      {
        title: 'Loueur en meublé avec services hôteliers',
        description: `Au moins trois services parmi petit-déjeuner, ménage régulier, linge et accueil${NBSP}: la location est taxable. Réception depuis 2026, émission pour les clients professionnels et e-reporting pour les particuliers à partir du 1er septembre 2027.`,
      },
      {
        title: 'Association',
        description: `Hors du champ pour ses activités non lucratives${NBSP}: rien à faire. Concernée pour une activité lucrative soumise à la TVA (bar, boutique, prestations facturées à des entreprises), aux mêmes dates qu’une TPE.`,
      },
    ],
  },
  timeline: {
    anchorId: 'calendrier',
    eyebrow: 'Le calendrier',
    title: 'Trois dates à retenir',
    intro: 'Fixées par la loi de finances pour 2024, confirmées sans report.',
    items: [
      {
        title: '1er septembre 2026 : réception pour tous, émission pour les grandes entreprises et les ETI',
        description: `Toute entreprise assujettie doit pouvoir recevoir par une plateforme agréée${NBSP}; les grandes entreprises et les ETI émettent et transmettent leur e-reporting.`,
      },
      {
        title: 'Jusqu’à fin 2026 : tolérance sur les sanctions',
        description:
          'Aucune sanction pour une entreprise en difficulté réelle, engagée dans une démarche de mise en conformité. Ce n’est ni un report ni une suspension.',
      },
      {
        title: '1er septembre 2027 : émission et e-reporting pour les micro-entreprises, TPE et PME',
        description: `Les factures à des clients professionnels passent par une plateforme${NBSP}; les ventes aux particuliers et à l’étranger sont déclarées.`,
      },
    ],
  },
  method: {
    eyebrow: 'Et ensuite',
    title: 'Quatre étapes, dans l’ordre',
    intro: 'Ce que je fais avec mes clients une fois la date connue.',
    steps: [
      {
        label: 'Savoir',
        title: 'Votre date, avec le test',
        description: `Statut, TVA, taille, clients${NBSP}: le test ci-dessus vous dit si vous recevez seulement, ou si vous émettez aussi, et quand.`,
      },
      {
        label: 'Désigner',
        title: 'Une plateforme agréée pour recevoir',
        description:
          'Dans votre logiciel s’il est agréé ou raccordé, sinon sur une plateforme gratuite. Avec le compte du représentant légal, puis contrôle de l’annuaire.',
      },
      {
        label: 'Vérifier',
        title: 'Votre logiciel de facturation',
        description:
          'Le vérificateur de logiciel dit s’il est plateforme agréée, raccordé, ou s’il manque quelque chose avant votre date d’émission.',
      },
      {
        label: 'Raccorder',
        title: 'Vos devis et factures maison',
        description:
          'Si vos factures sortent d’un logiciel métier ou d’un outil sur mesure, je le raccorde à une plateforme agréée et j’automatise l’envoi.',
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Suis-je concerné ? Les questions qu’on me pose',
    questions: [
      {
        question: `Je suis micro-entrepreneur en franchise de TVA${NBSP}: suis-je concerné${NBSP}?`,
        answer: `Oui. La franchise en base dispense de facturer la TVA, pas d’être assujetti. Vous devez pouvoir recevoir des factures électroniques depuis le 1er septembre 2026 et, à partir du 1er septembre 2027, émettre celles de vos clients professionnels par une plateforme agréée. Vos ventes à des particuliers ne donnent pas lieu à une facture électronique, mais à un e-reporting à la même date.`,
      },
      {
        question: `Je ne vends qu’à des particuliers${NBSP}: dois-je quand même faire quelque chose${NBSP}?`,
        answer: `Oui, deux choses. Recevoir${NBSP}: vos fournisseurs français vous enverront des factures électroniques, il vous faut une plateforme agréée désignée dans l’annuaire, depuis le 1er septembre 2026. Déclarer${NBSP}: vos ventes aux particuliers seront transmises à l’administration par e-reporting, à partir du 1er septembre 2027 pour une petite entreprise. Vous n’avez en revanche aucune facture électronique à émettre.`,
      },
      {
        question: `Je suis loueur en meublé non professionnel${NBSP}: suis-je concerné${NBSP}?`,
        answer: `Pour la réception, oui, si vous avez un SIREN${NBSP}: la location meublée sans services est exonérée de TVA, mais vous restez assujetti en tant que destinataire et devez pouvoir recevoir les factures de vos fournisseurs par une plateforme agréée depuis le 1er septembre 2026. Vous n’avez rien à émettre ni à déclarer. Si vous proposez au moins trois services hôteliers (petit-déjeuner, ménage régulier, linge, accueil), la location devient taxable et vous suivez le calendrier d’une entreprise.`,
      },
      {
        question: `Notre association est-elle concernée${NBSP}?`,
        answer: `Pas pour ses activités non lucratives, qui sont hors du champ de la TVA${NBSP}: aucune facture électronique à recevoir ni à émettre, pas d’e-reporting. Elle l’est pour une activité lucrative soumise à la TVA, même en franchise${NBSP}: bar, boutique, prestations facturées à des entreprises. Dans ce cas, réception depuis le 1er septembre 2026 et émission à partir du 1er septembre 2027 pour cette activité.`,
      },
      {
        question: `Je suis médecin, infirmier ou formateur exonéré de TVA${NBSP}: que dois-je faire${NBSP}?`,
        answer: `Pouvoir recevoir, seulement. Vos actes exonérés ne donnent lieu ni à une facture électronique ni à un e-reporting, mais vous restez assujetti en tant que destinataire${NBSP}: désignez une plateforme agréée (plusieurs ont une offre gratuite) pour recevoir les factures de vos fournisseurs, depuis le 1er septembre 2026. Si une partie de votre activité est taxable (vente de produits, prestations annexes), elle suit le calendrier d’émission.`,
      },
      {
        question: `Je n’ai aucun fournisseur en France${NBSP}: dois-je quand même désigner une plateforme${NBSP}?`,
        answer: `L’obligation est d’être en mesure de recevoir, pas d’avoir reçu${NBSP}: tout assujetti établi en France doit figurer dans l’annuaire avec une plateforme désignée. Sans elle, le premier fournisseur français qui vous facture (abonnement, matériel, loyer professionnel) ne pourra pas vous adresser sa facture. Choisissez une plateforme à offre gratuite${NBSP}: la démarche prend une demi-heure.`,
      },
      {
        question: `Comment savoir si mon entreprise est une PME ou une ETI${NBSP}?`,
        answer: `Une PME compte moins de 250 salariés et au plus 50${NBSP}millions d’euros de chiffre d’affaires ou 43${NBSP}millions de total de bilan${NBSP}; les micro-entreprises en font partie. Au-delà, vous êtes une ETI (jusqu’à 4${NBSP}999 salariés) ou une grande entreprise, et tout est obligatoire depuis le 1er septembre 2026. Les seuils s’apprécient sur le dernier exercice clos, au niveau de l’entreprise elle-même, pas du groupe.`,
      },
      {
        question: `Je démarre mon activité en 2027${NBSP}: quelle date s’applique${NBSP}?`,
        answer: `Celle de votre catégorie. Dès votre immatriculation, vous devez pouvoir recevoir${NBSP}; si vous créez une micro-entreprise ou une PME après le 1er septembre 2027, l’émission électronique s’applique dès vos premières factures à des professionnels. Autant choisir dès le départ un logiciel agréé ou raccordé.`,
      },
      {
        question: `Mes factures sortent d’un logiciel métier ou d’un outil maison${NBSP}: que se passe-t-il${NBSP}?`,
        answer: `Il ne deviendra pas une plateforme agréée, et il n’a pas besoin de l’être${NBSP}: on le raccorde à une plateforme qui reçoit et émet pour lui, par API ou par dépôt de fichiers au format Factur-X, UBL ou CII. C’est le travail que je fais pour mes clients${NBSP}: raccordement, format des factures, annuaire et automatisation de l’envoi, à distance.`,
      },
      {
        question: `Que risque une entreprise qui n’a rien fait${NBSP}?`,
        answer: `Pour l’émission${NBSP}: 50${NBSP}€ par facture non électronique, plafonné à 15${NBSP}000${NBSP}€ par an. Pour la réception hors plateforme agréée${NBSP}: mise en demeure, puis 500${NBSP}€ et 1${NBSP}000${NBSP}€ par nouvelle période de trois mois. Pour l’e-reporting non transmis${NBSP}: 500${NBSP}€ par transmission, plafonné à 15${NBSP}000${NBSP}€ par an. Aucune de ces sanctions n’est appliquée en 2026 à une entreprise en difficulté réelle qui a engagé la démarche.`,
      },
    ],
  },
  relatedArticles: {
    title: 'À lire aussi',
    intro: 'Trois articles sur la facturation des petites entreprises.',
  },
  contactCta: {
    title: 'Un doute sur votre cas, ou un outil à raccorder ?',
    description: `Décrivez-moi votre situation${NBSP}: je vous réponds sous 24${NBSP}h avec les étapes à faire, et un devis seulement s’il faut raccorder un logiciel.`,
    button: 'Décrire mon cas',
  },
}
