import type { DibodevWebAccessibilityScopePageContent } from '~/core/types/DibodevWebAccessibilityScopePage'
import {
  WEB_ACCESSIBILITY_ARTICLE_47_1_SOURCE,
  WEB_ACCESSIBILITY_ARTICLE_47_SOURCE,
  WEB_ACCESSIBILITY_DECREE_2019_768_SOURCE,
  WEB_ACCESSIBILITY_DGCCRF_PROFESSIONALS_SOURCE,
  WEB_ACCESSIBILITY_RGAA_HOME_SOURCE,
} from '~/core/constants/webAccessibilityScope/pageShared'
import { NBSP } from '~/core/constants/typography'

export const WEB_ACCESSIBILITY_SCOPE_PAGE_FR: DibodevWebAccessibilityScopePageContent = {
  meta: {
    title: `Accessibilité site internet${NBSP}: obligatoire pour vous${NBSP}? Test`,
    description: `Test gratuit en 5 questions${NBSP}: RGAA, loi de 2005, loi européenne du 28 juin 2025. Votre site doit-il être accessible, depuis quand, et que faire${NBSP}?`,
    inLanguage: 'fr-FR',
    schemaAbout:
      'Obligations d’accessibilité numérique des sites internet en France : RGAA, article 47 de la loi de 2005 et loi européenne sur l’accessibilité',
  },
  breadcrumbLabel: `Accessibilité numérique${NBSP}: suis-je concerné${NBSP}?`,
  shareImage: {
    titleLines: ['Accessibilité numérique :', 'mon site est-il', 'concerné ?'],
    highlight: 'concerné',
    subtitle: 'RGAA, loi de 2005, loi européenne du 28 juin 2025',
    badge: 'Gratuit · 5 questions · 2 minutes',
    alt: 'Accessibilité numérique : mon site est-il concerné ? Test gratuit sur dibodev.fr',
  },
  hero: {
    titleBefore: `Accessibilité numérique${NBSP}: votre site est-il `,
    titleHighlight: 'concerné',
    titleAfter: `, et depuis quand${NBSP}?`,
    reassurances: [
      'Gratuit, 5 questions, 2 minutes',
      'Résultat sans e-mail',
      'Textes officiels relus le 8 novembre 2026',
    ],
    description: `Depuis le 28 juin 2025, la loi européenne sur l’accessibilité s’ajoute au RGAA${NBSP}: les sites de vente en ligne aux particuliers doivent eux aussi être utilisables par les personnes handicapées. Mais une boutique de quartier, une association, une mairie de 500 habitants, un site vitrine d’artisan${NBSP}: qui est vraiment visé${NBSP}? Ce test croise votre structure, votre taille, ce que fait votre site et vos clients, et vous dit ce que la loi vous demande, et depuis quand.`,
    authorIntro: 'Test conçu par',
    authorBio: `développeur freelance près de Rennes. Je crée et je refais des sites et des outils métier pour les TPE et les PME, en tenant compte de l’accessibilité dès le cahier des charges.`,
  },
  mobileContactBar: {
    text: `Un premier avis sur votre site${NBSP}?`,
    buttonLabel: 'Me contacter',
  },
  facts: {
    anchorId: 'textes',
    eyebrow: 'Ce que disent les textes',
    title: `Qui doit rendre son site accessible${NBSP}: huit points vérifiés`,
    intro: `Les règles relues le 8 novembre 2026 sur Légifrance, le site du RGAA (DINUM) et la DGCCRF. Deux textes coexistent${NBSP}: l’article 47 de la loi de 2005 et la loi européenne sur l’accessibilité.`,
    facts: [
      {
        contextLabel: 'Loi de 2005, article 47',
        title: 'Les organismes publics, quelle que soit leur taille',
        text: `Les sites, intranets, extranets et applications mobiles des personnes morales de droit public doivent être accessibles aux personnes handicapées, comme ceux des structures privées chargées d’une mission de service public. Aucun seuil de taille n’est prévu${NBSP}: une petite commune est visée comme un ministère.`,
        sourceName: 'Loi n° 2005-102 du 11 février 2005, article 47 (version du 8 septembre 2023)',
        sourceUrl: WEB_ACCESSIBILITY_ARTICLE_47_SOURCE.url,
      },
      {
        contextLabel: `Au-delà de 250${NBSP}M€`,
        title: 'Les grandes entreprises, depuis 2019',
        text: `L’article 47 vise aussi les entreprises dont le chiffre d’affaires réalisé en France dépasse 250${NBSP}millions d’euros, en moyenne sur les trois derniers exercices clos. Pour elles, les nouveaux sites sont concernés depuis le 1er octobre 2019, les sites plus anciens depuis le 1er octobre 2020, les applications depuis le 1er juillet 2021.`,
        sourceName: 'Décret n° 2019-768 du 24 juillet 2019, articles 2 et 10',
        sourceUrl: WEB_ACCESSIBILITY_DECREE_2019_768_SOURCE.url,
      },
      {
        contextLabel: 'Déclaration et schéma',
        title: 'Une déclaration d’accessibilité et une mention sur la page d’accueil',
        text: `Les structures visées publient une déclaration d’accessibilité et un schéma pluriannuel de trois ans au plus, décliné en plans d’actions annuels. La page d’accueil indique clairement si le site est conforme ou non, et chaque site permet de signaler facilement un défaut d’accessibilité.`,
        sourceName: 'Loi n° 2005-102 du 11 février 2005, article 47, III et IV',
        sourceUrl: WEB_ACCESSIBILITY_ARTICLE_47_SOURCE.url,
      },
      {
        contextLabel: 'Arcom',
        title: `Jusqu’à 50${NBSP}000${NBSP}€, après une mise en demeure publique`,
        text: `L’Arcom contrôle, met en demeure publiquement, puis peut sanctionner${NBSP}: jusqu’à 50${NBSP}000${NBSP}€ pour un organisme public dont le site n’est pas accessible, et jusqu’à 25${NBSP}000${NBSP}€ pour un manquement à la déclaration, au schéma ou à la mention, seul point contrôlé chez les grandes entreprises. Une nouvelle sanction est possible si le manquement dure encore six mois après.`,
        sourceName: 'Loi n° 2005-102 du 11 février 2005, article 47-1 (ordonnance n° 2023-859)',
        sourceUrl: WEB_ACCESSIBILITY_ARTICLE_47_1_SOURCE.url,
      },
      {
        contextLabel: 'RGAA 4.1.2',
        title: '106 critères, et une version 5 annoncée pour fin 2026',
        text: `Le référentiel général d’amélioration de l’accessibilité (RGAA), publié par la DINUM, compte 106 critères dans sa version 4.1.2, mise à jour le 18 avril 2023. Une entreprise peut aussi se référer aux règles internationales WCAG 2.1, niveaux A et AA. Le RGAA 5 est en cours de rédaction${NBSP}: la DINUM demande de ne pas suspendre les travaux en l’attendant.`,
        sourceName: 'accessibilite.numerique.gouv.fr (DINUM), page d’accueil et champ d’application du RGAA',
        sourceUrl: WEB_ACCESSIBILITY_RGAA_HOME_SOURCE.url,
      },
      {
        contextLabel: '28 juin 2025',
        title: 'La loi européenne vise la vente en ligne aux particuliers',
        text: `Depuis le 28 juin 2025, des services doivent répondre à des exigences d’accessibilité, quel que soit le statut de l’entreprise${NBSP}: commerce électronique, téléphonie, accès aux médias audiovisuels, transports de voyageurs (sites, applications, billets, informations), services bancaires aux consommateurs, livres numériques.`,
        sourceName:
          'DGCCRF, « Professionnels : vos produits et services doivent être conformes à la directive Accessibilité », 13 novembre 2025',
        sourceUrl: WEB_ACCESSIBILITY_DGCCRF_PROFESSIONALS_SOURCE.url,
      },
      {
        contextLabel: 'Micro-entreprises',
        title: 'Exemptées pour les services, mais un site existant n’a pas de délai',
        text: `Une entreprise de moins de 10 salariés, avec un chiffre d’affaires ou un bilan annuel de 2${NBSP}millions d’euros au plus, n’a aucune obligation d’accessibilité pour les services qu’elle fournit. Pour les autres, la DGCCRF précise qu’un site ou une application n’est pas un produit${NBSP}: un site de vente en ligne existant n’a pas de période transitoire. Seuls les contrats signés avec des particuliers avant le 28 juin 2025 peuvent courir jusqu’au 28 juin 2030 au plus tard.`,
        sourceName: 'DGCCRF, fiche professionnels, 13 novembre 2025',
        sourceUrl: WEB_ACCESSIBILITY_DGCCRF_PROFESSIONALS_SOURCE.url,
      },
      {
        contextLabel: 'DGCCRF',
        title: `Des amendes de 7${NBSP}500${NBSP}€, cumulables`,
        text: `La DGCCRF contrôle depuis le 28 juin 2025, notamment sur signalement, en lien avec l’Arcom, l’ARCEP, la Banque de France, l’ACPR et l’AMF. Elle peut enjoindre la mise en conformité, avec astreinte et publicité, et les infractions sont des contraventions de la 5e classe${NBSP}: des amendes de 7${NBSP}500${NBSP}€, cumulatives selon le nombre d’infractions constatées.`,
        sourceName: 'DGCCRF, fiche professionnels, 13 novembre 2025',
        sourceUrl: WEB_ACCESSIBILITY_DGCCRF_PROFESSIONALS_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: `Ce que je fais pour vous${NBSP}:`,
    calloutText: `je regarde votre site, je vous dis ce qui bloque vraiment, et je corrige ou je refais ce qu’il faut, en visant le RGAA et les WCAG 2.1 AA. À distance, premier échange gratuit.`,
  },
  cases: {
    anchorId: 'cas',
    eyebrow: 'Cas par cas',
    title: `Organisme public, e-commerce, association, artisan${NBSP}: qui est concerné`,
    intro: 'Les six situations qui reviennent le plus, avec le texte qui s’applique.',
    items: [
      {
        title: 'Mairie, intercommunalité, école, organisme public',
        description: `Concerné quelle que soit la taille, depuis 2019 ou 2020 pour les sites${NBSP}: RGAA, déclaration d’accessibilité, schéma pluriannuel et mention sur la page d’accueil. Contrôle de l’Arcom.`,
      },
      {
        title: `Entreprise au-delà de 250${NBSP}M€ de chiffre d’affaires en France`,
        description: `Concernée par l’article 47 depuis le 1er octobre 2019 ou 2020${NBSP}: site accessible, déclaration, schéma et mention. Et par la loi européenne si elle vend aussi en ligne à des particuliers.`,
      },
      {
        title: 'Vente en ligne aux particuliers, hors micro-entreprise',
        description: `Concernée depuis le 28 juin 2025 par la loi européenne${NBSP}: boutique en ligne, réservation payante, souscription. Informations d’accessibilité à publier, contrôle de la DGCCRF.`,
      },
      {
        title: 'Banque, transport de voyageurs, télécoms, vidéo, livres numériques',
        description: `Concernés depuis le 28 juin 2025 pour certains éléments${NBSP}: sites, applications, billets et informations. Le contrôle dépend du secteur${NBSP}: DGCCRF, Arcom, ARCEP, Banque de France.`,
      },
      {
        title: 'Micro-entreprise, artisan, indépendant',
        description: `Moins de 10 salariés et 2${NBSP}M€ au plus${NBSP}: pas d’obligation pour les services, même en vente en ligne. Un site vitrine n’est visé par aucun texte. Recommandé, et bon pour la lisibilité de tous.`,
      },
      {
        title: 'Association',
        description: `Hors de l’article 47, sauf mission de service public, financement public majoritaire ou services essentiels au public. Visée par la loi européenne si elle vend en ligne à des particuliers sans être une micro-entreprise.`,
      },
    ],
  },
  timeline: {
    anchorId: 'dates',
    eyebrow: 'Les dates',
    title: 'Trois dates à retenir',
    intro: 'Fixées par le décret du 24 juillet 2019 et par la loi européenne sur l’accessibilité.',
    items: [
      {
        title: `2019-2020${NBSP}: secteur public et grandes entreprises`,
        description: `Sites accessibles depuis le 23 septembre 2019 ou 2020 pour le secteur public, le 1er octobre 2019 ou 2020 pour les entreprises au-delà de 250${NBSP}M€${NBSP}; applications mobiles en 2021.`,
      },
      {
        title: `28 juin 2025${NBSP}: la loi européenne s’applique`,
        description: `Vente en ligne aux particuliers, banque, transports, télécoms, médias, livres numériques${NBSP}: les nouveaux services comme les sites existants, sauf micro-entreprises.`,
      },
      {
        title: `28 juin 2030${NBSP}: fin de la période transitoire`,
        description:
          'Date limite pour les contrats de service conclus avec des particuliers avant le 28 juin 2025, et pour les produits déjà utilisés pour fournir le service. Un site, lui, n’en bénéficie pas.',
      },
    ],
  },
  method: {
    eyebrow: 'Par où commencer',
    title: '6 gestes à faire dès cette semaine',
    intro: 'Sans outil, sur votre propre site. Chacun correspond à un critère du RGAA.',
    steps: [
      {
        label: 'Images',
        title: 'Un texte alternatif aux images qui informent',
        description: `Une photo de produit, un schéma, un logo cliquable${NBSP}: chacun a un texte qui dit ce qu’il montre. Les images décoratives, elles, restent muettes (critère 1.1).`,
      },
      {
        label: 'Langue',
        title: 'La langue et le titre de chaque page',
        description: `La page déclare sa langue (lang="fr") pour que le lecteur d’écran prononce juste, et chaque onglet a un titre qui dit où l’on est (critères 8.3 et 8.5).`,
      },
      {
        label: 'Titres',
        title: 'Des titres dans l’ordre',
        description: `Un seul grand titre, puis des sous-titres qui se suivent, sans sauter de niveau pour une question de taille de texte${NBSP}: c’est le sommaire de ceux qui ne voient pas la page (critère 9.1).`,
      },
      {
        label: 'Contraste',
        title: 'Un texte qui se lit sur son fond',
        description: `Le gris clair sur blanc, le blanc sur jaune${NBSP}: si vous plissez les yeux pour lire, d’autres n’y arriveront pas (critère 3.2).`,
      },
      {
        label: 'Clavier',
        title: 'Tout le site avec la touche Tab',
        description: `Débranchez la souris${NBSP}: chaque lien et chaque bouton doit s’atteindre dans un ordre logique, avec un cadre visible autour de l’élément actif (critères 7.3, 10.7 et 12.8).`,
      },
      {
        label: 'Formulaires',
        title: 'Une étiquette à chaque champ, des sous-titres aux vidéos',
        description: `«${NBSP}Nom${NBSP}», «${NBSP}E-mail${NBSP}» écrits à côté du champ, pas seulement en gris dedans${NBSP}; et des sous-titres pour toute vidéo qui parle (critères 11.1 et 4.3).`,
      },
    ],
  },
  faq: {
    eyebrow: 'Questions fréquentes',
    title: `Accessibilité de votre site${NBSP}: les questions qu’on me pose`,
    questions: [
      {
        question: `Mon site vitrine d’artisan doit-il être accessible${NBSP}?`,
        answer: `Pas au sens de la loi${NBSP}: un site vitrine sans vente en ligne, publié par une entreprise privée sous 250${NBSP}millions d’euros de chiffre d’affaires, n’est visé ni par l’article 47 ni par la loi européenne. C’est tout de même recommandé${NBSP}: textes alternatifs, titres bien hiérarchisés et liens explicites aident aussi Google à comprendre vos pages. Pas de miracle pour le référencement, mais aucun effet négatif.`,
      },
      {
        question: `Je vends en ligne${NBSP}: suis-je concerné${NBSP}?`,
        answer: `Oui, si vous vendez à des particuliers et que vous n’êtes pas une micro-entreprise (moins de 10 salariés et 2${NBSP}millions d’euros au plus de chiffre d’affaires ou de bilan). Depuis le 28 juin 2025, votre boutique doit respecter les exigences d’accessibilité du Code de la consommation, et vous publiez des informations sur la façon dont elle y répond. Un site existant ne bénéficie d’aucun délai.`,
      },
      {
        question: `C’est quoi le RGAA${NBSP}?`,
        answer: `Le référentiel général d’amélioration de l’accessibilité, publié par la DINUM. Sa version en vigueur, la 4.1.2, compte 106 critères concrets (images, couleurs, titres, formulaires, navigation…) avec des tests pour chacun. Il traduit en méthode française la norme européenne et les règles WCAG. Une version 5 est annoncée pour fin 2026.`,
      },
      {
        question: `C’est quoi une déclaration d’accessibilité${NBSP}?`,
        answer: `Une page qui dit, après un audit, si votre site est totalement conforme (100${NBSP}% des critères du RGAA), partiellement conforme (au moins 50${NBSP}%) ou non conforme, liste les contenus non accessibles et donne un moyen de vous signaler un problème, avec le recours au Défenseur des droits. Elle est obligatoire pour les organismes publics et les entreprises au-delà de 250${NBSP}millions d’euros, et se met à jour à chaque refonte.`,
      },
      {
        question: `Quel est le risque si je ne fais rien${NBSP}?`,
        answer: `Pour un organisme public, jusqu’à 50${NBSP}000${NBSP}€ d’amende prononcée par l’Arcom après une mise en demeure publique, et 25${NBSP}000${NBSP}€ pour la déclaration, le schéma ou la mention manquants (seul plafond applicable aux grandes entreprises). Pour une boutique en ligne visée par la loi européenne, des amendes de 7${NBSP}500${NBSP}€ par infraction constatée par la DGCCRF, cumulables, et une injonction de mise en conformité.`,
      },
      {
        question: `WordPress, Shopify ou Wix rendent-ils mon site accessible d’office${NBSP}?`,
        answer: `Non. L’outil peut faciliter les choses, mais l’accessibilité dépend du thème choisi, des extensions et surtout du contenu que vous ajoutez${NBSP}: textes alternatifs des images, titres, couleurs, libellés des formulaires, vidéos. Un thème annoncé «${NBSP}accessible${NBSP}» reste à vérifier une fois rempli.`,
      },
      {
        question: `Combien coûte une mise en conformité${NBSP}?`,
        answer: `Cela dépend du site${NBSP}: nombre de gabarits de pages, formulaires, tunnel de commande, thème de départ. On commence par un audit d’un échantillon de pages représentatives, qui donne la liste des corrections et leur ordre d’importance${NBSP}; le devis vient ensuite. Sur un site neuf, prévoir l’accessibilité dès le cahier des charges coûte bien moins cher qu’une correction après coup.`,
      },
      {
        question: `Notre association est-elle concernée${NBSP}?`,
        answer: `Pas par l’article 47, sauf si elle est chargée d’une mission de service public, financée ou contrôlée majoritairement par des organismes publics, ou si elle fournit des services essentiels au public ou destinés aux personnes handicapées. Par la loi européenne, seulement si elle vend en ligne à des particuliers sans être une micro-entreprise.`,
      },
      {
        question: `Une mairie de 500 habitants est-elle concernée${NBSP}?`,
        answer: `Oui. L’article 47 vise toutes les personnes morales de droit public, sans seuil de taille${NBSP}: le site de la commune doit être accessible, avec une déclaration d’accessibilité, un schéma pluriannuel et la mention sur la page d’accueil. Une charge disproportionnée peut être invoquée pour un contenu précis, avec une alternative, mais jamais pour tout le site.`,
      },
      {
        question: `Mon application mobile est-elle concernée${NBSP}?`,
        answer: `Selon les mêmes règles que le site. Pour un organisme public ou une entreprise au-delà de 250${NBSP}millions d’euros, les applications sont visées depuis 2021. Pour la loi européenne, une application qui vend à des particuliers ou qui donne accès à un service bancaire, de transport ou de télécoms est visée depuis le 28 juin 2025, comme le site.`,
      },
      {
        question: `Dois-je sous-titrer mes vidéos${NBSP}?`,
        answer: `Si votre site est soumis au RGAA, oui${NBSP}: le critère 4.3 demande des sous-titres synchronisés pour les vidéos préenregistrées qui ont du son. Pour un organisme public, les vidéos publiées avant le 23 septembre 2020 et les directs en sont exemptés. Pour tous les autres, c’est une bonne habitude${NBSP}: beaucoup de vidéos sont regardées sans le son.`,
      },
      {
        question: `Qui contrôle${NBSP}?`,
        answer: `L’Arcom pour l’article 47 (organismes publics et entreprises au-delà de 250${NBSP}millions d’euros), avec des contrôles qui peuvent être automatisés. La DGCCRF pour la loi européenne, notamment sur signalement par SignalConso, en lien avec l’Arcom (médias, livres numériques), l’ARCEP, la Banque de France, l’ACPR et l’AMF selon le secteur.`,
      },
    ],
  },
  relatedArticles: {
    title: 'À lire aussi',
    intro: 'Trois articles sur les sites et les outils des petites entreprises.',
  },
  contactCta: {
    title: `Vous voulez un premier avis sur votre site${NBSP}?`,
    description: `Envoyez-moi son adresse${NBSP}: je vous réponds sous 24${NBSP}h avec ce qui bloque vraiment et les étapes à faire, et un devis seulement s’il y a des corrections à prévoir.`,
    button: 'Demander un premier avis',
  },
}
