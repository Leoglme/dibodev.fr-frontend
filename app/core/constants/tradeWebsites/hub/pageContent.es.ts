import type { DibodevTradeWebsiteHubPageContent } from '~/core/types/DibodevTradeWebsiteHubPage'
import { TRADE_WEBSITES_HUB_CATALOG_ANCHOR_ID } from '~/core/constants/tradeWebsites/tradeWebsiteCatalog'

export const TRADE_WEBSITES_HUB_PAGE_ES: DibodevTradeWebsiteHubPageContent = {
  meta: {
    title: 'Página web por oficio en Francia: tu demo en 2 minutos',
    description:
      'Fontanero, taller, restaurante, peluquería… Mira tu web a tu nombre en 2 minutos: 290 € en un solo pago, en línea en 48 h, a medida desde 1500 €.',
    inLanguage: 'es-ES',
  },
  shareImage: {
    titleLines: ['Página web', 'por oficio en Francia'],
    highlight: 'por oficio',
    subtitle: 'Mira la tuya en 2 minutos, a tu nombre',
    badge: '290 € en un solo pago',
    alt: 'Página web por oficio en Francia: mira la tuya en 2 minutos, 290 € en un solo pago',
  },
  hero: {
    titlePart1: 'Página web ',
    titleHighlight1: 'por oficio',
    titlePart2: ' en Francia: mira la tuya en 2 minutos',
    description:
      'Elige tu oficio y compón tu web en el taller: tu nombre, tu ciudad, tus colores, tu logo y tus fotos, con una plantilla real. 290 € en un solo pago, dominio y alojamiento incluidos, o a medida desde 1500 €.',
    cta: 'Elegir mi oficio',
    reassurances: ['Sin registro', 'Demo a tu nombre en 24 horas laborables', 'Precios conocidos de antemano'],
    tradesCountLabel: 'oficios',
    templatesCountLabel: 'plantillas de web',
    priceValue: '290 €',
    priceLabel: 'en un solo pago',
  },
  catalog: {
    anchorId: TRADE_WEBSITES_HUB_CATALOG_ANCHOR_ID,
    eyebrow: 'Elige tu oficio',
    title: 'Ocho oficios, once plantillas',
    intro:
      'Cada página tiene su taller: la web se construye ante tus ojos con la plantilla de tu oficio y las reglas que debe mostrar en Francia.',
    cards: [
      {
        key: 'plumber',
        title: 'Página web para fontanero',
        description: 'Urgencias, tarifas de reparación, zona de servicio: tres plantillas para que suene el teléfono.',
      },
      {
        key: 'electrician',
        title: 'Página web para electricista',
        description: 'Averías, adecuación a la norma, puntos de recarga: dos plantillas, clara o noche eléctrica.',
      },
      {
        key: 'garage',
        title: 'Página web para taller mecánico',
        description: 'Mantenimiento, reparaciones, citas: una plantilla oscura con estilo de taller.',
      },
      {
        key: 'landscaper',
        title: 'Página web para paisajista',
        description: 'Mantenimiento de jardines, creaciones, crédito fiscal: una plantilla verde y luminosa.',
      },
      {
        key: 'carpenter',
        title: 'Página web para carpintero',
        description: 'Ventanas, escaleras, mobiliario: una plantilla editorial que luce tus trabajos.',
      },
      {
        key: 'restaurant',
        title: 'Página web para restaurante',
        description: 'Carta, horarios, reservas: una plantilla cálida para llenar las mesas.',
      },
      {
        key: 'hairSalon',
        title: 'Página web para peluquería',
        description: 'Servicios, precios, citas: una plantilla elegante para peluquerías y barberías.',
      },
      {
        key: 'dentist',
        title: 'Página web para dentista',
        description: 'Tratamientos, equipo, acceso y citas: una plantilla sobria y tranquilizadora para una clínica.',
      },
    ],
    stylesCountOne: '1 plantilla',
    stylesCountMany: '{count} plantillas',
    linkLabel: 'Componer mi web',
    otherTrade: {
      title: '¿Otro oficio?',
      description:
        'Cerrajero, calefactor, comercio, construcción: la plantilla Édito sirve para todos los oficios, o creo tu web a medida.',
      linkLabel: 'Hablemos de tu web',
    },
  },
  pricing: {
    intro:
      'Un precio conocido de antemano para la web con plantilla, un presupuesto gratis para la web a medida. En los dos casos, eres propietario de tu web y de tu dominio.',
    templateOfferDescription:
      'La plantilla de tu oficio, a tu nombre y con tu color. Dominio y alojamiento incluidos. Tus textos y tus fotos, o los escribimos juntos en 30 minutos. Modificable desde un editor sencillo.',
    customOfferDescription:
      'Diseño único, reservas o presupuestos en línea conectados a tu agenda, una página por municipio para el posicionamiento local, y un programa detrás de la web si lo necesitas. Mantenimiento de 100 a 300 € al mes.',
  },
  faq: {
    title: 'Página web por oficio en Francia: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta una página web para un artesano o un comercio?',
        answer:
          '290 € en un solo pago por una web con plantilla, dominio y alojamiento incluidos, en línea en 48 horas. Una web a medida, con reservas o presupuestos en línea, empieza en 1500 €. El barómetro de precios de una página web compara 20 fuentes francesas.',
      },
      {
        question: '¿Por qué una plantilla por oficio?',
        answer:
          'Porque un cliente no busca lo mismo en un fontanero que en una peluquería: uno quiere un número al que llamar enseguida, el otro precios y una cita. Cada plantilla destaca lo que hace llamar o reservar en ese oficio.',
      },
      {
        question: '¿Cómo puedo ver mi web antes de pagar?',
        answer:
          'Abre la página de tu oficio y compón tu web en el taller, en 2 minutos. Después deja tu correo: recibes una demo a tu nombre en 24 horas laborables, gratis y sin compromiso.',
      },
      {
        question: '290 €, ¿de verdad está todo incluido?',
        answer:
          'Sí para la puesta en línea: la web, tu dominio y el alojamiento. Tú aportas tus textos y tus fotos, o los escribimos juntos en una llamada de 30 minutos.',
      },
      {
        question: '¿Puedo modificar mi web yo mismo?',
        answer:
          'Sí. Cambias tus textos, tus fotos y tus precios desde un editor sencillo, sin instalar nada. Sigo disponible si te atascas.',
      },
      {
        question: 'Mi oficio no está en la lista, ¿qué hago?',
        answer:
          'Escríbeme. La plantilla Édito sirve para todos los oficios, y la web a medida parte de tu actividad. La primera llamada es gratis.',
      },
    ],
  },
  contactCta: {
    title: '¿Tu oficio no está en la lista?',
    description:
      'Cuéntame qué haces y para quién: te digo qué web necesitas y cuánto cuesta, antes de cualquier compromiso.',
    button: 'Hablar de mi web',
  },
}
