import type { DibodevToolTeaserContent } from '~/core/types/DibodevToolTeaser'
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
    },
    en: {
      emphasizedIntro: 'Running a driving school in France?',
      text: 'In 6 questions, the test tells you which software to choose and how much to budget, with the 2026 prices of the software on the French market.',
      linkLabel: 'Take the test: which software for my driving school?',
      listLabel: 'Which software for my driving school?',
    },
    es: {
      emphasizedIntro: '¿Diriges una autoescuela en Francia?',
      text: 'En 6 preguntas, el test te dice qué programa elegir y cuánto prever, con los precios 2026 de los programas del mercado francés.',
      linkLabel: 'Hacer el test: ¿qué software para mi autoescuela?',
      listLabel: '¿Qué software para mi autoescuela?',
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
    },
    en: {
      emphasizedIntro: 'Renting out event equipment in France?',
      text: 'In 6 questions, the test tells you which software to choose for your availability, orders and returns, with the 2026 prices of the software on the French market.',
      linkLabel: 'Take the test: which software for my event rental business?',
      listLabel: 'Which software for my event rental business?',
    },
    es: {
      emphasizedIntro: '¿Alquilas material para eventos en Francia?',
      text: 'En 6 preguntas, el test te dice qué programa elegir para tu disponibilidad, tus salidas y tus devoluciones, con los precios 2026 de los programas del mercado francés.',
      linkLabel: 'Hacer el test: ¿qué software para mi alquiler de material?',
      listLabel: '¿Qué software para mi alquiler de material para eventos?',
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
    },
    en: {
      emphasizedIntro: 'Running a bike shop in France?',
      text: 'In 6 questions, the test tells you which software to choose for your bookings, repairs and till, with the 2026 prices of the software on the French market.',
      linkLabel: 'Take the test: which software for my bike shop?',
      listLabel: 'Which software for my bike shop?',
    },
    es: {
      emphasizedIntro: '¿Tienes un taller de bicicletas en Francia?',
      text: 'En 6 preguntas, el test te dice qué programa elegir para tus citas, tus reparaciones y tu caja, con los precios 2026 de los programas del mercado francés.',
      linkLabel: 'Hacer el test: ¿qué software para mi taller de bicicletas?',
      listLabel: '¿Qué software para mi taller de bicicletas?',
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
    },
    en: {
      emphasizedIntro: 'Running a garage in France?',
      text: 'In 6 questions, the test tells you which software to choose for your quotes, repair orders and invoices, with the 2026 prices of the software on the French market.',
      linkLabel: 'Take the test: which software for my garage?',
      listLabel: 'Which software for my garage?',
    },
    es: {
      emphasizedIntro: '¿Diriges un taller mecánico en Francia?',
      text: 'En 6 preguntas, el test te dice qué programa elegir para tus presupuestos, tus órdenes de reparación y tus facturas, con los precios 2026 de los programas del mercado francés.',
      linkLabel: 'Hacer el test: ¿qué software para mi taller mecánico?',
      listLabel: '¿Qué software para mi taller mecánico?',
    },
  },
}

export const TOOL_TEASERS_BY_ARTICLE_SLUG: Record<string, DibodevToolTeaserContent> = {
  'logiciel-gestion-auto-ecole-planning-eleves-heures': DRIVING_SCHOOL_SOFTWARE_TEASER,
  'logiciel-rdv-auto-ecole-reservation-en-ligne': DRIVING_SCHOOL_SOFTWARE_TEASER,
  'site-web-professionnel-atelier-reparation-velos-2026': BIKE_SHOP_SOFTWARE_TEASER,
  'garagiste-outil-sur-mesure-rendez-vous-devis-suivi-vehicules': AUTO_REPAIR_SHOP_SOFTWARE_TEASER,
}

export const TOOL_TEASERS_BY_PROJECT_SLUG: Record<string, DibodevToolTeaserContent> = {
  'driving-school': DRIVING_SCHOOL_SOFTWARE_TEASER,
  stockpme: EVENT_RENTAL_SOFTWARE_TEASER,
}

/** Every trade test, listed together on the business software page. */
export const BUSINESS_SOFTWARE_TOOL_TEASERS: DibodevToolTeaserContent[] = [
  DRIVING_SCHOOL_SOFTWARE_TEASER,
  EVENT_RENTAL_SOFTWARE_TEASER,
  BIKE_SHOP_SOFTWARE_TEASER,
  AUTO_REPAIR_SHOP_SOFTWARE_TEASER,
]
