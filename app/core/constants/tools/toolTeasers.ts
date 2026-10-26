import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
import { AI_APP_CHECK_QUIZ_ID } from '~/core/constants/aiAppCheckQuiz'
import { WORDPRESS_HACK_CHECK_ROUTE_NAME } from '~/core/constants/wordpressHackCheck/pageShared'
import { E_INVOICING_SCOPE_QUIZ_ID } from '~/core/constants/eInvoicingScopeQuiz'
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

const ELECTRICIAN_SOFTWARE_TEASER: DibodevToolTeaserContent = {
  toolId: 'electrician-software',
  routeName: 'tools-electrician-software',
  icon: 'Zap',
  wording: {
    fr: {
      emphasizedIntro: `Vous êtes électricien${NBSP}?`,
      text: 'En 6 questions, le test vous dit quel logiciel choisir pour vos devis, vos chantiers et vos PV de mise en service, avec les prix 2026 des logiciels du marché et un modèle de devis et de PV gratuit.',
      linkLabel: `Faire le test${NBSP}: quel logiciel pour mon entreprise d’électricité${NBSP}?`,
      listLabel: `Quel logiciel pour mon entreprise d’électricité${NBSP}?`,
      hubDescription: `Devis, chantiers, PV de mise en service et attestations Consuel${NBSP}: le logiciel qui convient à votre entreprise d’électricité, et son prix.`,
    },
    en: {
      emphasizedIntro: 'Running an electrical business in France?',
      text: 'In 6 questions, the test tells you which software to choose for your quotes, jobs and commissioning reports, with the 2026 prices of the software on the French market.',
      linkLabel: 'Take the test: which software for my electrical business?',
      listLabel: 'Which software for my electrical business?',
      hubDescription:
        'Quotes, jobs, commissioning reports and Consuel certificates: the software that fits your electrical business, and its price.',
    },
    es: {
      emphasizedIntro: '¿Tienes una empresa de electricidad en Francia?',
      text: 'En 6 preguntas, el test te dice qué programa elegir para tus presupuestos, tus obras y tus actas de puesta en servicio, con los precios 2026 de los programas del mercado francés.',
      linkLabel: 'Hacer el test: ¿qué software para mi empresa de electricidad?',
      listLabel: '¿Qué software para mi empresa de electricidad?',
      hubDescription:
        'Presupuestos, obras, actas de puesta en servicio y certificados Consuel: el programa que encaja con tu empresa de electricidad, y su precio.',
    },
  },
}

const PERSONAL_TRAINER_SOFTWARE_TEASER: DibodevToolTeaserContent = {
  toolId: 'personal-trainer-software',
  routeName: 'tools-personal-trainer-software',
  icon: 'Dumbbell',
  wording: {
    fr: {
      emphasizedIntro: `Vous êtes coach sportif ou vous gérez une salle${NBSP}?`,
      text: 'En 6 questions, le test vous dit quel logiciel choisir pour vos réservations, vos programmes et vos encaissements, avec les prix 2026 des logiciels du marché et un modèle de bilan client et de carnet de séances gratuit.',
      linkLabel: `Faire le test${NBSP}: quel logiciel pour mon coaching${NBSP}?`,
      listLabel: `Quel logiciel pour mon coaching ou ma salle de musculation${NBSP}?`,
      hubDescription: `Réservations, programmes, abonnements et suivi des progrès${NBSP}: le logiciel qui convient à votre coaching ou à votre salle, et son prix.`,
    },
    en: {
      emphasizedIntro: 'Personal trainer or gym owner in France?',
      text: 'In 6 questions, the test tells you which software to choose for your bookings, programmes and payments, with the 2026 prices of the software on the French market.',
      linkLabel: 'Take the test: which software for my coaching?',
      listLabel: 'Which software for my coaching or my gym?',
      hubDescription:
        'Bookings, programmes, memberships and progress tracking: the software that fits your coaching or your gym, and its price.',
    },
    es: {
      emphasizedIntro: '¿Eres entrenador personal o gestionas un gimnasio en Francia?',
      text: 'En 6 preguntas, el test te dice qué programa elegir para tus reservas, tus programas y tus cobros, con los precios 2026 de los programas del mercado francés.',
      linkLabel: 'Hacer el test: ¿qué software para mi coaching?',
      listLabel: '¿Qué software para mi coaching o mi gimnasio?',
      hubDescription:
        'Reservas, programas, abonos y seguimiento de los progresos: el programa que encaja con tu coaching o tu gimnasio, y su precio.',
    },
  },
}

const LANDSCAPING_SOFTWARE_TEASER: DibodevToolTeaserContent = {
  toolId: 'landscaping-software',
  routeName: 'tools-landscaping-software',
  icon: 'Sprout',
  wording: {
    fr: {
      emphasizedIntro: `Vous êtes paysagiste${NBSP}?`,
      text: 'En 6 questions, le test vous dit quel logiciel choisir pour vos devis, vos contrats d’entretien et vos chantiers, avec les prix 2026 des logiciels du marché et un modèle de devis et de contrat d’entretien gratuit.',
      linkLabel: `Faire le test${NBSP}: quel logiciel pour mon entreprise de paysage${NBSP}?`,
      listLabel: `Quel logiciel pour mon entreprise de paysage${NBSP}?`,
      hubDescription: `Devis d’aménagement, contrats d’entretien, planning des équipes et attestations fiscales${NBSP}: le logiciel qui convient à votre entreprise de paysage, et son prix.`,
    },
    en: {
      emphasizedIntro: 'Running a landscaping business in France?',
      text: 'In 6 questions, the test tells you which software to choose for your quotes, maintenance contracts and job sites, with the 2026 prices of the software on the French market.',
      linkLabel: 'Take the test: which software for my landscaping business?',
      listLabel: 'Which software for my landscaping business?',
      hubDescription:
        'Landscaping quotes, maintenance contracts, team schedules and tax certificates: the software that fits your landscaping business, and its price.',
    },
    es: {
      emphasizedIntro: '¿Tienes una empresa de paisajismo en Francia?',
      text: 'En 6 preguntas, el test te dice qué programa elegir para tus presupuestos, tus contratos de mantenimiento y tus obras, con los precios 2026 de los programas del mercado francés.',
      linkLabel: 'Hacer el test: ¿qué software para mi empresa de paisajismo?',
      listLabel: '¿Qué software para mi empresa de paisajismo?',
      hubDescription:
        'Presupuestos de paisajismo, contratos de mantenimiento, planificación de los equipos y certificados fiscales: el programa que encaja con tu empresa de paisajismo, y su precio.',
    },
  },
}

const CLEANING_BUSINESS_SOFTWARE_TEASER: DibodevToolTeaserContent = {
  toolId: 'cleaning-business-software',
  routeName: 'tools-cleaning-business-software',
  icon: 'SprayCan',
  wording: {
    fr: {
      emphasizedIntro: `Vous dirigez une entreprise de nettoyage${NBSP}?`,
      text: 'En 6 questions, le test vous dit quel logiciel choisir pour le planning, le pointage de vos agents et le contrôle qualité, avec les prix 2026 des logiciels du marché et un modèle de planning des passages gratuit.',
      linkLabel: `Faire le test${NBSP}: quel logiciel pour mon entreprise de nettoyage${NBSP}?`,
      listLabel: `Quel logiciel pour mon entreprise de nettoyage${NBSP}?`,
      hubDescription: `Planning des agents, pointage sur site, contrôle qualité et reprise de marché${NBSP}: le logiciel qui convient à votre entreprise de propreté, et son prix.`,
    },
    en: {
      emphasizedIntro: 'Running a cleaning business in France?',
      text: 'In 6 questions, the test tells you which software to choose for scheduling, clocking your cleaners in and out and quality inspections, with the 2026 prices of the software on the French market.',
      linkLabel: 'Take the test: which software for my cleaning business?',
      listLabel: 'Which software for my cleaning business?',
      hubDescription:
        'Cleaner schedules, on-site clocking, quality inspections and contract takeovers: the software that fits your cleaning business, and its price.',
    },
    es: {
      emphasizedIntro: '¿Diriges una empresa de limpieza en Francia?',
      text: 'En 6 preguntas, el test te dice qué programa elegir para la planificación, el fichaje de tu personal y el control de calidad, con los precios 2026 de los programas del mercado francés.',
      linkLabel: 'Hacer el test: ¿qué software para mi empresa de limpieza?',
      listLabel: '¿Qué software para mi empresa de limpieza?',
      hubDescription:
        'Planificación del personal, fichaje en el sitio, control de calidad y subrogaciones: el programa que encaja con tu empresa de limpieza, y su precio.',
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

const PHP_VULNERABILITY_CHECK_TEASER: DibodevToolTeaserContent = {
  toolId: 'php-vulnerability-check',
  routeName: 'tools-php-vulnerability-check',
  icon: 'ShieldCheck',
  wording: {
    fr: {
      emphasizedIntro: `Votre site ou votre logiciel tourne sur PHP${NBSP}?`,
      text: 'Deux failles critiques ont été corrigées le 21 octobre 2026. L’outil lit votre page d’accueil, repère PHP, sa version et votre hébergeur, et dit s’il faut mettre à jour aujourd’hui.',
      linkLabel: `Vérifier mon site${NBSP}: faille PHP d’octobre 2026`,
      listLabel: `Faille PHP${NBSP}: mon site est-il concerné${NBSP}?`,
      hubDescription: `Site internet, boutique, logiciel métier ou intranet${NBSP}: PHP, sa version et votre hébergeur lus depuis votre page d’accueil, et ce qu’il faut faire.`,
      hubMeta: '1 adresse · 10 secondes',
    },
    en: {
      emphasizedIntro: 'Does your website or software run on PHP?',
      text: 'Two critical flaws were fixed on 21 October 2026. The tool reads your home page, spots PHP, its version and your host, and says whether you must update today.',
      linkLabel: 'Check my site: October 2026 PHP vulnerability',
      listLabel: 'PHP vulnerability: is my website affected?',
      hubDescription:
        'Website, store, business software or intranet: PHP, its version and your host read from your home page, and what to do.',
      hubMeta: '1 address · 10 seconds',
    },
    es: {
      emphasizedIntro: '¿Tu web o tu software funciona con PHP?',
      text: 'Dos fallos críticos se corrigieron el 21 de octubre de 2026. La herramienta lee tu página de inicio, detecta PHP, su versión y tu hosting, y dice si hay que actualizar hoy.',
      linkLabel: 'Comprobar mi web: fallo de PHP de octubre de 2026',
      listLabel: 'Fallo de PHP: ¿mi web está afectada?',
      hubDescription:
        'Web, tienda, software de gestión o intranet: PHP, su versión y tu hosting leídos desde tu página de inicio, y qué hacer.',
      hubMeta: '1 dirección · 10 segundos',
    },
  },
}

const WORDPRESS_HACK_CHECK_TEASER: DibodevToolTeaserContent = {
  toolId: 'wordpress-hack-check',
  routeName: WORDPRESS_HACK_CHECK_ROUTE_NAME,
  icon: 'ShieldCheck',
  wording: {
    fr: {
      emphasizedIntro: `Votre site tourne sur WordPress${NBSP}?`,
      text: 'L’outil lit votre page d’accueil et quelques fichiers publics, repère une extension vulnérable, un cœur trop ancien ou des signes d’injection, et dit quoi faire aujourd’hui.',
      linkLabel: `Vérifier mon site WordPress${NBSP}: est-il piraté${NBSP}?`,
      listLabel: `Site WordPress piraté${NBSP}: vérifier mon site`,
      hubDescription: `Extension vulnérable (UpdraftPlus…), WordPress trop ancien, liens cachés ou redirection${NBSP}: ce qu’un visiteur peut voir depuis l’extérieur, et les trois guides pour réagir.`,
      hubMeta: '1 adresse · 10 secondes',
    },
    en: {
      emphasizedIntro: 'Does your website run on WordPress?',
      text: 'The tool reads your home page and a few public files, spots a vulnerable extension, an outdated core or signs of injection, and says what to do today.',
      linkLabel: 'Check my WordPress site: has it been hacked?',
      listLabel: 'Hacked WordPress site: check my site',
      hubDescription:
        'Vulnerable extension (UpdraftPlus…), outdated WordPress, hidden links or redirection: what a visitor can see from outside, and three guides to react.',
      hubMeta: '1 address · 10 seconds',
    },
    es: {
      emphasizedIntro: '¿Tu web funciona con WordPress?',
      text: 'La herramienta lee tu página de inicio y algunos archivos públicos, detecta una extensión vulnerable, un núcleo demasiado antiguo o señales de inyección, y dice qué hacer hoy.',
      linkLabel: 'Comprobar mi web WordPress: ¿está hackeada?',
      listLabel: 'Web WordPress hackeada: comprobar mi web',
      hubDescription:
        'Extensión vulnerable (UpdraftPlus…), WordPress antiguo, enlaces ocultos o redirección: lo que un visitante puede ver desde fuera, y tres guías para reaccionar.',
      hubMeta: '1 dirección · 10 segundos',
    },
  },
}

/** The e-invoicing software checker, also teased under the scope test. */
export const E_INVOICING_CHECK_TEASER: DibodevToolTeaserContent = {
  toolId: 'e-invoicing-software-check',
  routeName: 'tools-e-invoicing-software-check',
  icon: 'ClipboardCheck',
  wording: {
    fr: {
      emphasizedIntro: `Votre logiciel de facturation est-il prêt pour la facture électronique${NBSP}?`,
      text: 'Tapez son nom : plateforme agréée, raccordé à une plateforme, ou rien. Liste officielle DGFiP du 13 octobre 2026 et 24 logiciels relus.',
      linkLabel: `Vérifier mon logiciel${NBSP}: facture électronique`,
      listLabel: `Facture électronique${NBSP}: mon logiciel est-il agréé${NBSP}?`,
      hubDescription: `EBP, Henrri, Pennylane, Excel…${NBSP}: plateforme agréée, raccordé à une plateforme, ou rien, d’après la liste officielle et les pages des éditeurs, et ce qu’il reste à faire avant 2027.`,
      hubMeta: '1 nom · 5 secondes',
    },
    en: {
      emphasizedIntro: 'Is your invoicing software ready for French e-invoicing?',
      text: 'Type its name: accredited platform, connected to one, or nothing. Official DGFiP list of 13 October 2026 and 24 tools re-read.',
      linkLabel: 'Check my software: e-invoicing',
      listLabel: 'E-invoicing: is my software accredited?',
      hubDescription:
        'EBP, Henrri, Pennylane, Excel…: accredited platform, connected to one, or nothing, from the official list and the publishers’ pages, and what is left to do before 2027.',
      hubMeta: '1 name · 5 seconds',
    },
    es: {
      emphasizedIntro: '¿Tu software de facturación está listo para la factura electrónica?',
      text: 'Escribe su nombre: plataforma homologada, conectado a una, o nada. Lista oficial de la DGFiP del 13 de octubre de 2026 y 24 programas revisados.',
      linkLabel: 'Comprobar mi software: factura electrónica',
      listLabel: 'Factura electrónica: ¿mi software está homologado?',
      hubDescription:
        'EBP, Henrri, Pennylane, Excel…: plataforma homologada, conectado a una, o nada, según la lista oficial y las páginas de los editores, y lo que queda por hacer antes de 2027.',
      hubMeta: '1 nombre · 5 segundos',
    },
  },
}

/** The e-invoicing scope test, teased on the software checker and under the comparison of every trade tool page. */
export const E_INVOICING_SCOPE_TEASER: DibodevToolTeaserContent = {
  toolId: E_INVOICING_SCOPE_QUIZ_ID,
  routeName: 'tools-e-invoicing-scope-check',
  icon: 'CalendarCheck',
  wording: {
    fr: {
      emphasizedIntro: `Vous ne savez pas si la facture électronique vous concerne${NBSP}?`,
      text: `Micro-entrepreneur, franchise de TVA, loueur en meublé, association${NBSP}: en 5 questions, le test vous dit si vous devez recevoir, émettre, ou rien, et à quelle date.`,
      linkLabel: `Faire le test${NBSP}: suis-je concerné, et quand${NBSP}?`,
      listLabel: `Facture électronique${NBSP}: suis-je concerné, et quand${NBSP}?`,
      hubDescription: `Statut, TVA, taille, clients${NBSP}: si la réforme vous concerne, ce que vous devez faire, et vos dates.`,
      hubMeta: '5 questions · 1 minute',
    },
    en: {
      emphasizedIntro: 'Not sure whether French e-invoicing applies to you?',
      text: 'Micro-entrepreneur, VAT franchise, furnished rental, association: in 5 questions, the test tells you whether you must receive, issue, or nothing, and from which date.',
      linkLabel: 'Take the test: does it apply to me, and when?',
      listLabel: 'French e-invoicing: does it apply to me, and when?',
      hubDescription:
        'Status, VAT, size, customers: whether the reform applies to you, what you have to do, and your dates.',
      hubMeta: '5 questions · 1 minute',
    },
    es: {
      emphasizedIntro: '¿No sabes si la factura electrónica te afecta?',
      text: 'Microempresario, franquicia de IVA, alquiler amueblado, asociación: en 5 preguntas, el test te dice si debes recibir, emitir, o nada, y desde qué fecha.',
      linkLabel: 'Hacer el test: ¿me afecta, y cuándo?',
      listLabel: 'Factura electrónica en Francia: ¿me afecta, y cuándo?',
      hubDescription: 'Estatus, IVA, tamaño, clientes: si la reforma te afecta, lo que tienes que hacer, y tus fechas.',
      hubMeta: '5 preguntas · 1 minuto',
    },
  },
}

export const TOOL_TEASERS_BY_ARTICLE_SLUG: Record<string, DibodevToolTeaserContent> = {
  'faille-php-octobre-2026-site-boutique-logiciel-que-faire': PHP_VULNERABILITY_CHECK_TEASER,
  'changer-version-php-ovh-faille-octobre-2026': PHP_VULNERABILITY_CHECK_TEASER,
  'changer-version-php-o2switch-faille-octobre-2026': PHP_VULNERABILITY_CHECK_TEASER,
  'changer-version-php-ionos-faille-octobre-2026': PHP_VULNERABILITY_CHECK_TEASER,
  'changer-version-php-hostinger-faille-octobre-2026': PHP_VULNERABILITY_CHECK_TEASER,
  'changer-version-php-infomaniak-faille-octobre-2026': PHP_VULNERABILITY_CHECK_TEASER,
  'changer-version-php-planethoster-faille-octobre-2026': PHP_VULNERABILITY_CHECK_TEASER,
  'site-web-artisans-attirer-clients-locaux': PHP_VULNERABILITY_CHECK_TEASER,
  'site-web-commerce-proximite-2026': PHP_VULNERABILITY_CHECK_TEASER,
  'site-wordpress-pirate-verifications-a-faire-aujourd-hui': WORDPRESS_HACK_CHECK_TEASER,
  'updraftplus-revoquer-updraftcentral-verifier-sauvegardes': WORDPRESS_HACK_CHECK_TEASER,
  'restaurer-site-wordpress-apres-piratage': WORDPRESS_HACK_CHECK_TEASER,
  'facture-electronique-artisan-ce-qui-change': E_INVOICING_CHECK_TEASER,
  'logiciel-gestion-des-temps-feuilles-heures-excel': CLEANING_BUSINESS_SOFTWARE_TEASER,
  'paysagiste-outil-metier-devis-chantiers-plannings': LANDSCAPING_SOFTWARE_TEASER,
  'logiciel-facturation-garage-devis-ordre-de-reparation-facture': E_INVOICING_CHECK_TEASER,
  'reprendre-application-vibe-coding': AI_APP_CHECK_TEASER,
  'application-metier-no-code-ia-limites': AI_APP_CHECK_TEASER,
  'logiciel-gestion-auto-ecole-planning-eleves-heures': DRIVING_SCHOOL_SOFTWARE_TEASER,
  'logiciel-rdv-auto-ecole-reservation-en-ligne': DRIVING_SCHOOL_SOFTWARE_TEASER,
  'site-web-professionnel-atelier-reparation-velos-2026': BIKE_SHOP_SOFTWARE_TEASER,
  'garagiste-outil-sur-mesure-rendez-vous-devis-suivi-vehicules': AUTO_REPAIR_SHOP_SOFTWARE_TEASER,
  'logiciel-gestion-plombiers-saas-sur-mesure-2026': PLUMBING_HEATING_SOFTWARE_TEASER,
  'chauffagiste-contrats-entretien-outil-sur-mesure': PLUMBING_HEATING_SOFTWARE_TEASER,
  'logiciel-gestion-interventions-techniciens-hors-ligne': FIELD_SERVICE_SOFTWARE_TEASER,
  'electricien-outil-sur-mesure-devis-interventions-factures': ELECTRICIAN_SOFTWARE_TEASER,
  'artisan-btp-gerer-ses-chantiers-sans-excel-avec-un-outil-dedie': ELECTRICIAN_SOFTWARE_TEASER,
  'coach-sportif-limiter-les-annulations-avec-un-outil-de-reservation-en-ligne': PERSONAL_TRAINER_SOFTWARE_TEASER,
  'pass-commerce-artisanat-rennes-site-internet': PUBLIC_AID_SIMULATOR_TEASER,
}

export const TOOL_TEASERS_BY_PROJECT_SLUG: Record<string, DibodevToolTeaserContent> = {
  'driving-school': DRIVING_SCHOOL_SOFTWARE_TEASER,
  stockpme: EVENT_RENTAL_SOFTWARE_TEASER,
  izidoor: PERSONAL_TRAINER_SOFTWARE_TEASER,
}

/** Every test, listed together on the business software page and the tools hub. */
export const BUSINESS_SOFTWARE_TOOL_TEASERS: DibodevToolTeaserContent[] = [
  DRIVING_SCHOOL_SOFTWARE_TEASER,
  EVENT_RENTAL_SOFTWARE_TEASER,
  BIKE_SHOP_SOFTWARE_TEASER,
  AUTO_REPAIR_SHOP_SOFTWARE_TEASER,
  PLUMBING_HEATING_SOFTWARE_TEASER,
  FIELD_SERVICE_SOFTWARE_TEASER,
  ELECTRICIAN_SOFTWARE_TEASER,
  PERSONAL_TRAINER_SOFTWARE_TEASER,
  LANDSCAPING_SOFTWARE_TEASER,
  CLEANING_BUSINESS_SOFTWARE_TEASER,
  AI_APP_CHECK_TEASER,
  PUBLIC_AID_SIMULATOR_TEASER,
  PHP_VULNERABILITY_CHECK_TEASER,
  WORDPRESS_HACK_CHECK_TEASER,
  E_INVOICING_CHECK_TEASER,
  E_INVOICING_SCOPE_TEASER,
]

/** The public aid simulator, teased under the comparison of every trade tool page. */
export const PUBLIC_AID_TEASER: DibodevToolTeaserContent = PUBLIC_AID_SIMULATOR_TEASER
