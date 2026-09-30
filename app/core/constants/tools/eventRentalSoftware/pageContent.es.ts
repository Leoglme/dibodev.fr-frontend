import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  EVENT_RENTAL_MARQUEE_RULES_SOURCE,
  EVENT_RENTAL_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  EVENT_RENTAL_PAGE_PROJECT_SLUG,
  EVENT_RENTAL_PAGE_RELATED_ARTICLE_SLUGS,
  EVENT_RENTAL_PAGE_SCREENSHOT_URL,
  EVENT_RENTAL_PAGE_UPDATED_AT,
} from '~/core/constants/tools/eventRentalSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'

// The page describes the French market (publishers, marquee rules, e-invoicing): the Spanish text says so instead of adapting it.

export const EVENT_RENTAL_PAGE_CONTENT_ES: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Software de alquiler para eventos en Francia: precios 2026 y test',
    description:
      'Programas de alquiler de material para eventos en Francia: precios 2026 (LoKisi, Rentman, Booqable…) y test gratis de 6 preguntas para elegir el tuyo.',
    inLanguage: 'es',
    schemaAbout: 'Software de gestión de alquiler de material para eventos en Francia',
  },
  breadcrumbLabel: 'Software de alquiler para eventos',
  shareImage: {
    titleLines: ['¿Qué software para', 'alquilar tu material?'],
    highlight: 'material',
    subtitle: 'Seis preguntas, los precios 2026 de los programas de alquiler vendidos en Francia y cuánto prever',
    badge: 'Test gratis, en 2 minutos',
    icon: 'truck',
    alt: '¿Qué software para tu empresa de alquiler de material para eventos? Test gratis de 6 preguntas y precios 2026 de los programas en Francia, en dibodev.fr',
  },
  hero: {
    titleBefore: '¿Qué software para tu alquiler de ',
    titleHighlight: 'material para eventos',
    titleAfter: '?',
    description:
      'Responde a seis preguntas sobre tu equipo, tus almacenes y tu material. Según el mercado francés, el test te dice qué tipo de programa elegir para gestionar la disponibilidad, las salidas y las devoluciones, y cuánto prever.',
    reassurances: ['2 minutos', 'Sin registro ni correo', 'Resultado inmediato'],
    authorIntro: 'Test creado por',
    authorBio:
      ', desarrollador de software de gestión cerca de Rennes (Francia). Ya he desarrollado un software de gestión de stock multialmacén para pymes.',
    updatedAt: EVENT_RENTAL_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'programas',
    eyebrow: 'Precios públicos 2026',
    title: 'Los programas de alquiler para eventos vendidos en Francia y sus precios',
    intro:
      'Las tarifas que muestran los editores en su web. El precio depende sobre todo del número de usuarios, de almacenes o de módulos elegidos.',
    productColumnLabel: 'Programa',
    coverageColumnLabel: 'Qué gestiona',
    priceColumnLabel: 'Precio público',
    products: [
      {
        name: 'Unipresta',
        coverage: 'Presupuestos, reservas, stock y disponibilidad, agenda, clientes, web de alquiler en línea',
        price: 'Versión gratuita',
        priceCondition: 'Suscripciones de pago para un acceso ilimitado, precios no indicados en la página',
      },
      {
        name: 'LoKisi',
        coverage: 'Stock y disponibilidad en tiempo real, presupuestos, reservas, albaranes, contratos, facturas',
        price: `Desde 29${NBSP}€ al mes`,
        priceCondition: 'Sin permanencia',
      },
      {
        name: 'Booqable',
        coverage: 'Pedidos, stock y disponibilidad, página de reserva en línea, firma electrónica (plan Grow)',
        price: `29 a 149${NBSP}$ al mes`,
        priceCondition: `Precios en dólares, un 20${NBSP}% menos al año; entregas como opción`,
      },
      {
        name: 'Rentman',
        coverage:
          'Stock, planificación de equipos, presupuestos y facturas (módulo), seguimiento del material, varios almacenes',
        price: `39${NBSP}€ al mes, más los módulos`,
        priceCondition: `Por usuario avanzado: stock 14 a 19${NBSP}€, presupuestos y facturas 9${NBSP}€, almacén adicional 5${NBSP}€`,
      },
      {
        name: 'Current RMS',
        coverage: 'Alquiler, stock, presupuestos, agenda, sin módulos que añadir',
        price: `69${NBSP}€ al mes`,
        priceCondition: `Para el primer usuario, luego 49${NBSP}€ por usuario`,
      },
      {
        name: 'Sphinx Manager',
        coverage: 'Catálogo, albaranes de salida y devolución, roturas facturadas, packs, app móvil, facturas Factur-X',
        price: 'Con presupuesto',
        priceCondition: 'Tarifas no publicadas',
      },
      {
        name: 'Locasyst, Codial, CLE, Utiliz',
        coverage: 'Suites de gestión de alquiler: stock por almacén, presupuestos, agenda, facturación',
        price: 'Con presupuesto',
        priceCondition: 'Tarifas no publicadas',
      },
    ],
    calloutEmphasizedIntro: 'Antes de firmar:',
    calloutText:
      'pide que el programa resuelva un caso real de tu temporada. El mismo artículo alquilado para dos eventos seguidos, con el tiempo de limpieza entre ambos, y un pack (mesa, sillas, mantel) al que le falta una pieza a la devolución.',
    calloutFootnote:
      'Tarifas consultadas el 29 de septiembre de 2026 en las webs de los editores. Lista no exhaustiva.',
  },
  rules: {
    anchorId: 'normativa',
    eyebrow: 'Francia en 2026',
    title: 'Lo que tu programa debe seguir en Francia en 2026',
    intro:
      'En Francia, las carpas y jaimas tienen sus propias normas de seguridad, y la factura electrónica llega para todas las empresas. Un buen programa guarda estos documentos con el material.',
    facts: [
      {
        contextLabel: 'Más de 50 personas',
        title: 'Un registro de seguridad por carpa',
        text: 'Las carpas, jaimas y estructuras itinerantes que acogen a más de 50 personas deben tener un registro de seguridad, expedido por el prefecto.',
        sourceName: EVENT_RENTAL_MARQUEE_RULES_SOURCE.name,
        sourceUrl: EVENT_RENTAL_MARQUEE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Antes de expedirlo',
        title: 'El control de un organismo autorizado',
        text: 'El propietario hace controlar primero por un organismo autorizado la estabilidad de la estructura y la reacción al fuego de la lona.',
        sourceName: EVENT_RENTAL_MARQUEE_RULES_SOURCE.name,
        sourceUrl: EVENT_RENTAL_MARQUEE_RULES_SOURCE.url,
      },
      {
        contextLabel: '8 días antes de abrir',
        title: 'Un extracto del registro para el alcalde',
        text: 'El organizador del evento debe entregarlo al alcalde ocho días antes de recibir al público: tu cliente te lo pedirá con el alquiler.',
        sourceName: EVENT_RENTAL_MARQUEE_RULES_SOURCE.name,
        sourceUrl: EVENT_RENTAL_MARQUEE_RULES_SOURCE.url,
      },
      {
        contextLabel: '1 de septiembre de 2027',
        title: 'La factura electrónica',
        text: 'Todas las empresas francesas deben poder recibir facturas electrónicas desde el 1 de septiembre de 2026; las pymes tendrán que emitirlas a partir del 1 de septiembre de 2027.',
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'Lo que la herramienta a medida no sustituye:',
    calloutText:
      'tu programa de contabilidad. Las facturas se envían a él (exportación o Factur-X), y los pagos en línea pasan por un proveedor autorizado como Stripe.',
  },
  comparison: {
    eyebrow: 'Las tres opciones',
    title: '¿Programa del mercado, complemento o herramienta a medida?',
    intro:
      'Cada una tiene su lugar. El test te orienta; esta tabla muestra lo que ganas y lo que aceptas con cada una.',
    criterionLabel: 'Criterio',
    columns: ['Programa del mercado', 'Programa + complemento', 'Herramienta a medida'],
    rows: [
      {
        label: 'Precio',
        cells: [
          { state: 'yes', text: `Gratis a 150${NBSP}€ al mes, según los usuarios y los módulos` },
          { state: 'partial', text: `Tu suscripción, más 2500 a 7000${NBSP}€ una sola vez` },
          {
            state: 'partial',
            text: `5000 a 25${NBSP}000${NBSP}€ una sola vez, más 100 a 300${NBSP}€ al mes de mantenimiento`,
          },
        ],
      },
      {
        label: 'Disponibilidad, salidas y devoluciones',
        cells: [
          { state: 'yes', text: 'Incluidas, con diferencias de un programa a otro' },
          { state: 'yes', text: 'Se quedan en tu programa actual' },
          { state: 'yes', text: 'Diseñadas en torno a tus packs y tus tiempos de limpieza' },
        ],
      },
      {
        label: 'Tus reglas: packs, tarifas, almacenes',
        cells: [
          { state: 'partial', text: 'Dentro de los ajustes previstos por el editor' },
          { state: 'yes', text: 'En los puntos que añade el complemento' },
          { state: 'yes', text: 'Diseñada en torno a tu organización' },
        ],
      },
      {
        label: 'Presupuestos y reservas en tu web',
        cells: [
          { state: 'partial', text: 'A menudo en la página o la tienda del editor' },
          { state: 'yes', text: 'En tu web, con tus colores' },
          { state: 'yes', text: 'En tu web, con tus colores' },
        ],
      },
      {
        label: 'Puesta en marcha',
        cells: [
          { state: 'yes', text: 'Unos días' },
          { state: 'partial', text: '2 a 6 semanas' },
          { state: 'partial', text: '5 a 20 semanas, por etapas' },
        ],
      },
      {
        label: 'Tus datos',
        cells: [
          { state: 'partial', text: 'En el editor, exportación según el programa' },
          { state: 'partial', text: 'Repartidos entre las dos herramientas' },
          { state: 'yes', text: 'Tuyos, código incluido' },
        ],
      },
    ],
    rowsShownOnSmallScreens: EVENT_RENTAL_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: EVENT_RENTAL_PAGE_PROJECT_SLUG,
    screenshotUrl: EVENT_RENTAL_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Ya realizado',
    title: 'Un software de stock multialmacén, ya en producción',
    description:
      'StockPME es un software de gestión de stock que creé desde cero en Kodeva, donde trabajaba en alternancia. Sigue en producción en pymes de 20 a 200 empleados. Cada movimiento queda registrado, almacén por almacén: entradas, salidas, traslados e inventarios.',
    highlights: [
      'Stock por almacén, traslados de un almacén a otro',
      'Etiquetas con código QR para cada artículo',
      'Historial de movimientos e inventarios',
    ],
    linkLabel: 'Ver el proyecto StockPME',
    imageAlt: 'Ficha de producto de StockPME: stock por almacén, números de serie, botones de traslado y de etiqueta',
    browserBarCaption: 'StockPME · ficha de producto, stock por almacén',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Software de alquiler para eventos: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta un software de alquiler de material para eventos en Francia?',
        answer: `Unipresta tiene una versión gratuita, LoKisi cuesta desde 29${NBSP}€ al mes, Rentman 39${NBSP}€ al mes más módulos por usuario, Current RMS 69${NBSP}€ al mes para el primer usuario y luego 49${NBSP}€ por usuario, y Booqable de 29 a 149${NBSP}$ al mes. Sphinx Manager, Locasyst, Codial y CLE funcionan con presupuesto (tarifas consultadas el 29 de septiembre de 2026). Un complemento a medida cuesta de 2500 a 7000${NBSP}€ una sola vez, una herramienta completa de 5000 a 25${NBSP}000${NBSP}€, y luego de 100 a 300${NBSP}€ al mes de mantenimiento.`,
      },
      {
        question: '¿Existe un software de alquiler para eventos gratuito?',
        answer:
          'Sí, Unipresta ofrece una versión gratuita con la gestión y una web de alquiler en línea; sus suscripciones de pago dan un acceso ilimitado. Antes de empezar, comprueba cómo gestiona tus packs y las devoluciones incompletas.',
      },
      {
        question: '¿Cómo evitar alquilar dos veces el mismo artículo?',
        answer:
          'El programa debe reservar el artículo durante todo el periodo, preparación, entrega y limpieza incluidas, y mostrarlo como no disponible desde el presupuesto. Pruébalo con dos eventos seguidos antes de firmar.',
      },
      {
        question: '¿Se pueden gestionar varios almacenes?',
        answer: `Sí: Rentman cobra 5${NBSP}€ por almacén adicional y por usuario avanzado, y Locasyst sigue el stock por almacén. Una herramienta a medida también puede gestionar los traslados entre almacenes, como StockPME, el software de stock multialmacén que desarrollé.`,
      },
      {
        question: '¿Cómo facturar las roturas y lo que falta?',
        answer:
          'A la devolución, el equipo escanea o marca lo que vuelve. La diferencia con el albarán de salida se calcula y se añade a la factura o se descuenta de la fianza según tus condiciones de alquiler.',
      },
      {
        question: '¿Pueden mis clientes reservar en mi propia web?',
        answer:
          'Sí: un catálogo conectado al stock real, con solicitud de presupuesto o reserva y un anticipo pagado en línea con un proveedor como Stripe. Tus clientes solo ven lo que está disponible en sus fechas.',
      },
      {
        question: '¿Qué documentos guardar para las carpas?',
        answer:
          'En Francia, el registro de seguridad, obligatorio para las estructuras que acogen a más de 50 personas. El organizador entrega un extracto al alcalde ocho días antes del evento: tu programa puede adjuntarlo directamente al contrato de alquiler.',
      },
      {
        question: '¿Se pueden recuperar los datos de mi programa actual?',
        answer:
          'Si tu programa exporta tus artículos, clientes y contratos a Excel o CSV, los paso a la nueva herramienta; está previsto en el presupuesto. Comprueba esta opción de exportación antes de firmar con un editor.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para leer también',
    slugs: EVENT_RENTAL_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: '¿Dudas sobre la herramienta adecuada para tu empresa de alquiler?',
    description:
      'Descríbeme tu actividad en unas líneas. Te respondo en 24 horas y, si te basta con un programa del mercado, te lo digo.',
    button: 'Hablar de mi proyecto',
  },
}
