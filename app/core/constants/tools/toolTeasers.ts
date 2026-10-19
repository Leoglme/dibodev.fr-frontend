import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import { AI_APP_CHECK_QUIZ_ID } from '~/core/constants/aiAppCheckQuiz'
import { NBSP } from '~/core/constants/typography'

const DRIVING_SCHOOL_SOFTWARE_TEASER: DibodevToolTeaserContent = {
  toolId: 'driving-school-software',
  routeName: 'tools-driving-school-software',
  icon: 'Car',
  wording: {
    fr: {
      emphasizedIntro: `Vous dirigez une auto-école${NBSP}?`,
      text: 'En 6 questions, le test vous dit quel logiciel choisir et combien prévoir, avec les prix 2026 des logiciels du marché.',
      linkLabel: `Faire le test${NBSP}: quel logiciel pour mon auto-école${NBSP}?`,
      listLabel: `Quel logiciel pour mon auto-école${NBSP}?`,
      hubDescription: `Planning des leçons, élèves, heures et paiements${NBSP}: le logiciel qui convient à votre auto-école, et son prix.`,
    },
    en: {
      emphasizedIntro: 'Running a driving school in France?',
      text: 'In 6 questions, the test tells you which software to choose and how much to budget, with the 2026 prices of the software on the French market.',
      linkLabel: 'Take the test: which software for my driving school?',
      listLabel: 'Which software for my driving school?',
      hubDescription:
        'Lesson planning, students, hours and payments: the software that fits your driving school, and its price.',
    },
    es: {
      emphasizedIntro: '¿Diriges una autoescuela en Francia?',
      text: 'En 6 preguntas, el test te dice qué programa elegir y cuánto prever, con los precios 2026 de los programas del mercado francés.',
      linkLabel: 'Hacer el test: ¿qué software para mi autoescuela?',
      listLabel: '¿Qué software para mi autoescuela?',
      hubDescription:
        'Planificación de clases, alumnos, horas y pagos: el programa que encaja con tu autoescuela, y su precio.',
    },
  },
}

const EVENT_RENTAL_SOFTWARE_TEASER: DibodevToolTeaserContent = {
  toolId: 'event-rental-software',
  routeName: 'tools-event-rental-software',
  icon: 'Truck',
  wording: {
    fr: {
      emphasizedIntro: `Vous louez du matériel pour les événements${NBSP}?`,
      text: 'En 6 questions, le test vous dit quel logiciel choisir pour vos disponibilités, vos sorties et vos retours, avec les prix 2026 des logiciels du marché.',
      linkLabel: `Faire le test${NBSP}: quel logiciel pour ma location de matériel${NBSP}?`,
      listLabel: `Quel logiciel pour ma location de matériel événementiel${NBSP}?`,
      hubDescription: `Disponibilités, sorties, retours et devis${NBSP}: le logiciel qui convient à votre parc de matériel, et son prix.`,
    },
    en: {
      emphasizedIntro: 'Renting out event equipment in France?',
      text: 'In 6 questions, the test tells you which software to choose for your availability, orders and returns, with the 2026 prices of the software on the French market.',
      linkLabel: 'Take the test: which software for my event rental business?',
      listLabel: 'Which software for my event rental business?',
      hubDescription:
        'Availability, orders, returns and quotes: the software that fits your equipment stock, and its price.',
    },
    es: {
      emphasizedIntro: '¿Alquilas material para eventos en Francia?',
      text: 'En 6 preguntas, el test te dice qué programa elegir para tu disponibilidad, tus salidas y tus devoluciones, con los precios 2026 de los programas del mercado francés.',
      linkLabel: 'Hacer el test: ¿qué software para mi alquiler de material?',
      listLabel: '¿Qué software para mi alquiler de material para eventos?',
      hubDescription:
        'Disponibilidad, salidas, devoluciones y presupuestos: el programa que encaja con tu parque de material, y su precio.',
    },
  },
}

const BIKE_SHOP_SOFTWARE_TEASER: DibodevToolTeaserContent = {
  toolId: 'bike-shop-software',
  routeName: 'tools-bike-shop-software',
  icon: 'Bike',
  wording: {
    fr: {
      emphasizedIntro: `Vous tenez un atelier vélo${NBSP}?`,
      text: 'En 6 questions, le test vous dit quel logiciel choisir pour vos rendez-vous, vos réparations et votre caisse, avec les prix 2026 des logiciels du marché.',
      linkLabel: `Faire le test${NBSP}: quel logiciel pour mon atelier vélo${NBSP}?`,
      listLabel: `Quel logiciel pour mon atelier vélo${NBSP}?`,
      hubDescription: `Rendez-vous, réparations et caisse${NBSP}: le logiciel qui convient à votre atelier, et son prix.`,
    },
    en: {
      emphasizedIntro: 'Running a bike shop in France?',
      text: 'In 6 questions, the test tells you which software to choose for your bookings, repairs and till, with the 2026 prices of the software on the French market.',
      linkLabel: 'Take the test: which software for my bike shop?',
      listLabel: 'Which software for my bike shop?',
      hubDescription: 'Bookings, repairs and till: the software that fits your workshop, and its price.',
    },
    es: {
      emphasizedIntro: '¿Tienes un taller de bicicletas en Francia?',
      text: 'En 6 preguntas, el test te dice qué programa elegir para tus citas, tus reparaciones y tu caja, con los precios 2026 de los programas del mercado francés.',
      linkLabel: 'Hacer el test: ¿qué software para mi taller de bicicletas?',
      listLabel: '¿Qué software para mi taller de bicicletas?',
      hubDescription: 'Citas, reparaciones y caja: el programa que encaja con tu taller, y su precio.',
    },
  },
}

const AUTO_REPAIR_SHOP_SOFTWARE_TEASER: DibodevToolTeaserContent = {
  toolId: 'auto-repair-shop-software',
  routeName: 'tools-auto-repair-shop-software',
  icon: 'Wrench',
  wording: {
    fr: {
      emphasizedIntro: `Vous dirigez un garage${NBSP}?`,
      text: 'En 6 questions, le test vous dit quel logiciel choisir pour vos devis, vos ordres de réparation et vos factures, avec les prix 2026 des logiciels du marché.',
      linkLabel: `Faire le test${NBSP}: quel logiciel pour mon garage${NBSP}?`,
      listLabel: `Quel logiciel pour mon garage${NBSP}?`,
      hubDescription: `Devis, ordres de réparation et factures${NBSP}: le logiciel qui convient à votre garage, et son prix.`,
    },
    en: {
      emphasizedIntro: 'Running a garage in France?',
      text: 'In 6 questions, the test tells you which software to choose for your quotes, repair orders and invoices, with the 2026 prices of the software on the French market.',
      linkLabel: 'Take the test: which software for my garage?',
      listLabel: 'Which software for my garage?',
      hubDescription: 'Quotes, repair orders and invoices: the software that fits your garage, and its price.',
    },
    es: {
      emphasizedIntro: '¿Diriges un taller mecánico en Francia?',
      text: 'En 6 preguntas, el test te dice qué programa elegir para tus presupuestos, tus órdenes de reparación y tus facturas, con los precios 2026 de los programas del mercado francés.',
      linkLabel: 'Hacer el test: ¿qué software para mi taller mecánico?',
      listLabel: '¿Qué software para mi taller mecánico?',
      hubDescription:
        'Presupuestos, órdenes de reparación y facturas: el programa que encaja con tu taller, y su precio.',
    },
  },
}

const PLUMBING_HEATING_SOFTWARE_TEASER: DibodevToolTeaserContent = {
  toolId: 'plumbing-heating-software',
  routeName: 'tools-plumbing-heating-software',
  icon: 'Flame',
  wording: {
    fr: {
      emphasizedIntro: `Vous êtes plombier ou chauffagiste${NBSP}?`,
      text: 'En 6 questions, le test vous dit quel logiciel choisir pour vos devis, vos interventions et vos contrats d’entretien, avec les prix 2026 des logiciels du marché et un modèle de devis gratuit.',
      linkLabel: `Faire le test${NBSP}: quel logiciel pour mon entreprise de plomberie-chauffage${NBSP}?`,
      listLabel: `Quel logiciel pour mon entreprise de plomberie-chauffage${NBSP}?`,
      hubDescription: `Devis, interventions, contrats d’entretien et factures${NBSP}: le logiciel qui convient à votre entreprise de plomberie ou de chauffage, et son prix.`,
    },
    en: {
      emphasizedIntro: 'Running a plumbing or heating business in France?',
      text: 'In 6 questions, the test tells you which software to choose for your quotes, call-outs and maintenance contracts, with the 2026 prices of the software on the French market.',
      linkLabel: 'Take the test: which software for my plumbing and heating business?',
      listLabel: 'Which software for my plumbing and heating business?',
      hubDescription:
        'Quotes, call-outs, maintenance contracts and invoices: the software that fits your plumbing or heating business, and its price.',
    },
    es: {
      emphasizedIntro: '¿Tienes una empresa de fontanería o calefacción en Francia?',
      text: 'En 6 preguntas, el test te dice qué programa elegir para tus presupuestos, tus intervenciones y tus contratos de mantenimiento, con los precios 2026 de los programas del mercado francés.',
      linkLabel: 'Hacer el test: ¿qué software para mi empresa de fontanería y calefacción?',
      listLabel: '¿Qué software para mi empresa de fontanería y calefacción?',
      hubDescription:
        'Presupuestos, intervenciones, contratos de mantenimiento y facturas: el programa que encaja con tu empresa de fontanería o calefacción, y su precio.',
    },
  },
}

const FIELD_SERVICE_SOFTWARE_TEASER: DibodevToolTeaserContent = {
  toolId: 'field-service-software',
  routeName: 'tools-field-service-software',
  icon: 'ClipboardCheck',
  wording: {
    fr: {
      emphasizedIntro: `Vos techniciens interviennent chez les clients${NBSP}?`,
      text: 'En 6 questions, le test vous dit quel logiciel de gestion d’interventions choisir pour vos tournées, vos bons d’intervention et vos factures, avec les prix 2026 des logiciels du marché et un modèle de bon d’intervention gratuit.',
      linkLabel: `Faire le test${NBSP}: quel logiciel de gestion d’interventions${NBSP}?`,
      listLabel: `Quel logiciel de gestion d’interventions${NBSP}?`,
      hubDescription: `Tournées, bons d’intervention signés sur mobile, pièces et factures${NBSP}: le logiciel qui convient à vos techniciens de terrain, et son prix.`,
    },
    en: {
      emphasizedIntro: 'Do your technicians work at your customers’ sites in France?',
      text: 'In 6 questions, the test tells you which field service software to choose for your rounds, intervention slips and invoices, with the 2026 prices of the software on the French market.',
      linkLabel: 'Take the test: which field service software?',
      listLabel: 'Which field service software?',
      hubDescription:
        'Rounds, intervention slips signed on mobile, parts and invoices: the software that fits your field technicians, and its price.',
    },
    es: {
      emphasizedIntro: '¿Tus técnicos intervienen en casa de los clientes, en Francia?',
      text: 'En 6 preguntas, el test te dice qué programa de gestión de intervenciones elegir para tus rutas, tus partes de intervención y tus facturas, con los precios 2026 de los programas del mercado francés.',
      linkLabel: 'Hacer el test: ¿qué software de gestión de intervenciones?',
      listLabel: '¿Qué software de gestión de intervenciones?',
      hubDescription:
        'Rutas, partes de intervención firmados en el móvil, piezas y facturas: el programa que encaja con tus técnicos de campo, y su precio.',
    },
  },
}

const AI_APP_CHECK_TEASER: DibodevToolTeaserContent = {
  toolId: AI_APP_CHECK_QUIZ_ID,
  routeName: 'ai-app-takeover',
  icon: 'ShieldCheck',
  wording: {
    fr: {
      emphasizedIntro: `Votre application a été faite avec Lovable, Bolt ou une autre IA${NBSP}?`,
      text: 'En 8 questions, le test vous dit si elle tient la route : niveau de risque, points à vérifier en premier et formule adaptée, de l’audit gratuit à la reprise.',
      linkLabel: `Faire le test${NBSP}: mon application IA tient-elle la route${NBSP}?`,
      listLabel: `Mon application faite avec l’IA tient-elle la route${NBSP}?`,
      hubDescription: `Données, accès, code, sauvegardes${NBSP}: le niveau de risque de votre application générée par l’IA, et par où commencer.`,
      hubMeta: '8 questions · 2 minutes',
    },
    en: {
      emphasizedIntro: 'Was your app built with Lovable, Bolt or another AI?',
      text: 'In 8 questions, the test tells you whether it is solid enough: risk level, points to check first and the right formula, from the free audit to the takeover.',
      linkLabel: 'Take the test: is my AI-built app solid enough?',
      listLabel: 'Is my AI-built app solid enough?',
      hubDescription: 'Data, access, code, backups: the risk level of your AI-generated app, and where to start.',
      hubMeta: '8 questions · 2 minutes',
    },
    es: {
      emphasizedIntro: '¿Tu aplicación se hizo con Lovable, Bolt u otra IA?',
      text: 'En 8 preguntas, el test te dice si se sostiene: nivel de riesgo, puntos a revisar primero y fórmula adecuada, de la auditoría gratuita a la recuperación.',
      linkLabel: 'Hacer el test: ¿mi aplicación hecha con IA se sostiene?',
      listLabel: '¿Mi aplicación hecha con IA se sostiene?',
      hubDescription:
        'Datos, accesos, código, copias de seguridad: el nivel de riesgo de tu aplicación generada por IA, y por dónde empezar.',
      hubMeta: '8 preguntas · 2 minutos',
    },
  },
}

const PUBLIC_AID_SIMULATOR_TEASER: DibodevToolTeaserContent = {
  toolId: 'public-aid-simulator',
  routeName: 'tools-public-aid-simulator',
  icon: 'MapPin',
  wording: {
    fr: {
      emphasizedIntro: `Votre commune peut financer 30 à 50 % de ce projet${NBSP}?`,
      text: 'Le simulateur applique les règles du Pass Commerce et Artisanat des 18 intercommunalités d’Ille-et-Vilaine, et le cadre régional ailleurs en Bretagne : montant d’aide, reste à payer, points à confirmer, qui appeler.',
      linkLabel: 'Simuler l’aide pour mon site ou mon logiciel',
      listLabel: `Quelles aides pour financer mon site ou mon logiciel${NBSP}?`,
      hubDescription: `Votre commune, votre projet, son montant${NBSP}: l’aide du Pass Commerce et Artisanat, le reste à payer et les points à confirmer avant de signer.`,
      hubMeta: '6 réponses · 1 minute',
    },
    en: {
      emphasizedIntro: 'Could your commune fund 30 to 50% of this project?',
      text: 'The simulator applies the Pass Commerce et Artisanat rules of the 18 intercommunalités of Ille-et-Vilaine, and the regional frame elsewhere in Brittany: aid, what is left to pay, points to confirm, who to call.',
      linkLabel: 'Simulate the aid for my website or software',
      listLabel: 'Which aid can fund my website or software?',
      hubDescription:
        'Your commune, your project, its amount: the aid of the Pass Commerce et Artisanat, what is left to pay and the points to confirm before signing.',
      hubMeta: '6 answers · 1 minute',
    },
    es: {
      emphasizedIntro: '¿Tu municipio puede financiar del 30 al 50 % de este proyecto?',
      text: 'El simulador aplica las reglas del Pass Commerce et Artisanat de las 18 mancomunidades de Ille-et-Vilaine, y el marco regional en el resto de Bretaña: ayuda, lo que queda por pagar, puntos a confirmar, a quién llamar.',
      linkLabel: 'Simular la ayuda para mi web o mi software',
      listLabel: '¿Qué ayudas pueden financiar mi web o mi software?',
      hubDescription:
        'Tu municipio, tu proyecto, su importe: la ayuda del Pass Commerce et Artisanat, lo que queda por pagar y los puntos a confirmar antes de firmar.',
      hubMeta: '6 respuestas · 1 minuto',
    },
  },
}

export const TOOL_TEASERS_BY_ARTICLE_SLUG: Record<string, DibodevToolTeaserContent> = {
  'reprendre-application-vibe-coding': AI_APP_CHECK_TEASER,
  'application-metier-no-code-ia-limites': AI_APP_CHECK_TEASER,
  'logiciel-gestion-auto-ecole-planning-eleves-heures': DRIVING_SCHOOL_SOFTWARE_TEASER,
  'logiciel-rdv-auto-ecole-reservation-en-ligne': DRIVING_SCHOOL_SOFTWARE_TEASER,
  'site-web-professionnel-atelier-reparation-velos-2026': BIKE_SHOP_SOFTWARE_TEASER,
  'garagiste-outil-sur-mesure-rendez-vous-devis-suivi-vehicules': AUTO_REPAIR_SHOP_SOFTWARE_TEASER,
  'logiciel-gestion-plombiers-saas-sur-mesure-2026': PLUMBING_HEATING_SOFTWARE_TEASER,
  'chauffagiste-contrats-entretien-outil-sur-mesure': PLUMBING_HEATING_SOFTWARE_TEASER,
  'logiciel-gestion-interventions-techniciens-hors-ligne': FIELD_SERVICE_SOFTWARE_TEASER,
  'pass-commerce-artisanat-rennes-site-internet': PUBLIC_AID_SIMULATOR_TEASER,
}

export const TOOL_TEASERS_BY_PROJECT_SLUG: Record<string, DibodevToolTeaserContent> = {
  'driving-school': DRIVING_SCHOOL_SOFTWARE_TEASER,
  stockpme: EVENT_RENTAL_SOFTWARE_TEASER,
}

/** Every test, listed together on the business software page and the tools hub. */
export const BUSINESS_SOFTWARE_TOOL_TEASERS: DibodevToolTeaserContent[] = [
  DRIVING_SCHOOL_SOFTWARE_TEASER,
  EVENT_RENTAL_SOFTWARE_TEASER,
  BIKE_SHOP_SOFTWARE_TEASER,
  AUTO_REPAIR_SHOP_SOFTWARE_TEASER,
  PLUMBING_HEATING_SOFTWARE_TEASER,
  FIELD_SERVICE_SOFTWARE_TEASER,
  AI_APP_CHECK_TEASER,
  PUBLIC_AID_SIMULATOR_TEASER,
]

/** The public aid simulator, teased under the comparison of every trade tool page. */
export const PUBLIC_AID_TEASER: DibodevToolTeaserContent = PUBLIC_AID_SIMULATOR_TEASER
