import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  AUTO_REPAIR_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  AUTO_REPAIR_PAGE_PROJECT_SLUG,
  AUTO_REPAIR_PAGE_RELATED_ARTICLE_SLUGS,
  AUTO_REPAIR_PAGE_SCREENSHOT_URL,
  AUTO_REPAIR_PAGE_UPDATED_AT,
  AUTO_REPAIR_RULES_SOURCE,
} from '~/core/constants/tools/autoRepairShopSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'

// The page describes the French market (publishers, garage rules, e-invoicing): the Spanish text says so instead of adapting it.

export const AUTO_REPAIR_PAGE_CONTENT_ES: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Software para talleres mecánicos en Francia: precios 2026 y test',
    description:
      'Programas para talleres mecánicos en Francia: precios 2026 (Gest’Garage, TDV, AutoProGestion, Kwixéo…) y test gratis de 6 preguntas para elegir el tuyo.',
    inLanguage: 'es',
    schemaAbout: 'Software de gestión para talleres mecánicos en Francia',
  },
  breadcrumbLabel: 'Software para talleres mecánicos',
  shareImage: {
    titleLines: ['¿Qué software para', 'tu taller mecánico?'],
    highlight: 'taller mecánico',
    subtitle: 'Seis preguntas, los precios 2026 de los programas de taller vendidos en Francia y cuánto prever',
    badge: 'Test gratis, en 2 minutos',
    icon: 'wrench',
    alt: '¿Qué software para tu taller mecánico? Test gratis de 6 preguntas y precios 2026 de los programas en Francia, en dibodev.fr',
  },
  hero: {
    titleBefore: '¿Qué software para tu ',
    titleHighlight: 'taller mecánico',
    titleAfter: '?',
    description:
      'Responde a seis preguntas sobre tu equipo, tus talleres y tu actividad. Según el mercado francés, el test te dice qué tipo de programa elegir para tus presupuestos, tus órdenes de reparación y tus facturas, y cuánto prever.',
    reassurances: ['2 minutos', 'Sin registro ni correo', 'Resultado inmediato'],
    authorIntro: 'Test creado por',
    authorBio:
      ', desarrollador de software de gestión cerca de Rennes (Francia). Creé desde cero un software de control de horas por obra que siguen usando varias pymes.',
    updatedAt: AUTO_REPAIR_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'programas',
    eyebrow: 'Precios públicos 2026',
    title: 'Los programas para talleres mecánicos vendidos en Francia y sus precios',
    intro:
      'Las tarifas que muestran los editores en su web. El precio depende sobre todo de los módulos elegidos y del número de usuarios.',
    productColumnLabel: 'Programa',
    coverageColumnLabel: 'Qué gestiona',
    priceColumnLabel: 'Precio público',
    products: [
      {
        name: 'Gest’Garage',
        coverage:
          'Presupuestos, órdenes de reparación, facturas Factur-X, agenda, firma electrónica, stock, recordatorios por SMS',
        price: `19${NBSP}€ al mes`,
        priceCondition: 'Sin IVA aplicado, hasta 5 personas, un solo plan',
      },
      {
        name: 'TDV',
        coverage:
          'Agenda y tiempos de baremo, luego presupuestos, órdenes de reparación, facturas y stock (Solo Complet)',
        price: `19,90 a 24,90${NBSP}€ al mes con IVA`,
        priceCondition: `El plan de 19,90${NBSP}€ solo incluye la agenda y los tiempos`,
      },
      {
        name: 'AutoProGestion',
        coverage: 'Presupuestos, facturas, citas, fichas de clientes y vehículos, stock',
        price: `29 o 59${NBSP}€ al mes`,
        priceCondition: `Sin permanencia; 100 clientes por 29${NBSP}€, ilimitado y flota de vehículos por 59${NBSP}€`,
      },
      {
        name: 'Kwixéo',
        coverage: 'Vehículos, órdenes de reparación, presupuestos, facturas, stock en varios almacenes (plan Expert)',
        price: `22 a 89${NBSP}€ al mes sin IVA`,
        priceCondition: `18,33 a 74,17${NBSP}€ sin IVA al mes con pago anual`,
      },
      {
        name: 'EBP MéCa, GAD Garage',
        coverage: 'Presupuestos, facturas, órdenes de reparación, stock, contabilidad o exportaciones contables',
        price: 'Con presupuesto',
        priceCondition: 'Tarifas no publicadas',
      },
    ],
    calloutEmphasizedIntro: 'Antes de firmar:',
    calloutText:
      'pasa un día real por el programa. Un presupuesto aceptado por teléfono, convertido en orden de reparación firmada, una pieza añadida por el camino y luego la factura, sin volver a escribir nada.',
    calloutFootnote:
      'Tarifas consultadas el 29 de septiembre de 2026 en las webs de los editores. Lista no exhaustiva.',
  },
  rules: {
    anchorId: 'normativa',
    eyebrow: 'Francia en 2026',
    title: 'Lo que tu programa debe respetar en Francia en 2026',
    intro:
      'En Francia, precios expuestos, presupuestos, órdenes de reparación, piezas de reutilización y facturas: las normas del taller pasan todas por tus documentos. Un buen programa los rellena por ti.',
    facts: [
      {
        contextLabel: 'Orden del 27 de marzo de 1987',
        title: 'Precios con IVA expuestos en la entrada',
        text: 'Precios por hora de mano de obra y precios de las tarifas cerradas con IVA, con el detalle de las operaciones incluidas, en la entrada del taller y en la recepción.',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Si el cliente lo pide',
        title: 'Un presupuesto, gratis o de pago',
        text: 'El presupuesto no es obligatorio, pero no puedes negarlo al cliente que lo pide. Puede cobrarse si el cliente lo sabe antes; firmado, te compromete.',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Muy recomendada',
        title: 'La orden de reparación, en dos ejemplares',
        text: 'Firmada por ti y por el cliente: fecha, identidad, vehículo y kilometraje, reparaciones, coste probable y plazo de inmovilización.',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Desde el 1 de enero de 2017',
        title: 'Piezas de reutilización que ofrecer',
        text: 'Para algunas reparaciones (carrocería desmontable, guarnecidos, ópticas, lunas no pegadas, algunas piezas mecánicas), salvo suspensión y frenos.',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
      },
      {
        contextLabel: `Desde 25${NBSP}€ con IVA`,
        title: 'Una factura detallada',
        text: 'Fecha, nombre y dirección del taller, cliente, fecha y lugar de la intervención, desglose detallado, totales sin IVA y con IVA; el kilometraje figura en todos tus documentos.',
        sourceName: AUTO_REPAIR_RULES_SOURCE.name,
        sourceUrl: AUTO_REPAIR_RULES_SOURCE.url,
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
      'tu programa de contabilidad, ni las bases de piezas y tiempos de los editores especializados. Las facturas van a tu contabilidad (exportación o Factur-X), y la herramienta se conecta a las bases que ya usas.',
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
          { state: 'yes', text: `19 a 90${NBSP}€ al mes, según los módulos y los usuarios` },
          { state: 'partial', text: `Tu suscripción, más 2500 a 7000${NBSP}€ una sola vez` },
          {
            state: 'partial',
            text: `5000 a 25${NBSP}000${NBSP}€ una sola vez, más 100 a 300${NBSP}€ al mes de mantenimiento`,
          },
        ],
      },
      {
        label: 'Presupuestos, órdenes de reparación, facturas',
        cells: [
          { state: 'yes', text: 'Incluidos, conformes a las normas del taller' },
          { state: 'yes', text: 'Se quedan en tu programa actual' },
          { state: 'yes', text: 'Diseñados en torno a tus tarifas y tus precios por hora' },
        ],
      },
      {
        label: 'Tus reglas: tarifas, precios, talleres',
        cells: [
          { state: 'partial', text: 'Dentro de los ajustes previstos por el editor' },
          { state: 'yes', text: 'En los puntos que añade el complemento' },
          { state: 'yes', text: 'Diseñada en torno a tu organización' },
        ],
      },
      {
        label: 'Citas y solicitudes de presupuesto en tu web',
        cells: [
          { state: 'partial', text: 'A menudo un formulario o una página del editor' },
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
    rowsShownOnSmallScreens: AUTO_REPAIR_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: AUTO_REPAIR_PAGE_PROJECT_SLUG,
    screenshotUrl: AUTO_REPAIR_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Ya realizado',
    title: 'Un software de control de horas por obra, ya en producción',
    description:
      'Gest-Time es el software de tiempo de trabajo que creé desde cero en Kodeva, donde trabajaba en alternancia. Los equipos registran sus horas por proyecto u obra en una tableta, y los responsables las validan cada semana. La misma idea sirve para seguir el tiempo dedicado a cada intervención.',
    highlights: [
      'Horas registradas por obra, pensadas para tableta',
      'Validación semanal, alertas sobre horas que faltan',
      'Informes por proyecto y exportaciones Excel y PDF',
    ],
    linkLabel: 'Ver el proyecto Gest-Time',
    imageAlt: 'Informe de Gest-Time: horas, ausencias y trayectos por empleado y por semana, con exportación a Excel',
    browserBarCaption: 'Gest-Time · informe de horas por empleado',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Software para talleres mecánicos: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta un software para talleres mecánicos en Francia?',
        answer: `Gest’Garage cuesta 19${NBSP}€ al mes, TDV de 19,90 a 24,90${NBSP}€ al mes con IVA, AutoProGestion 29 o 59${NBSP}€ al mes y Kwixéo de 22 a 89${NBSP}€ al mes sin IVA (menos con pago anual). EBP MéCa y GAD Garage funcionan con presupuesto (tarifas consultadas el 29 de septiembre de 2026). Un complemento a medida cuesta de 2500 a 7000${NBSP}€ una sola vez, una herramienta completa de 5000 a 25${NBSP}000${NBSP}€, y luego de 100 a 300${NBSP}€ al mes de mantenimiento.`,
      },
      {
        question: '¿Existe un software gratuito para talleres mecánicos?',
        answer:
          'Los programas pensados para talleres son de pago, con una prueba gratuita de 14 días en Gest’Garage, AutoProGestion y Kwixéo. Un programa de facturación gratuito puede servir de apaño, pero sin órdenes de reparación ni historial de vehículos.',
      },
      {
        question: '¿La orden de reparación es obligatoria en Francia?',
        answer:
          'Es muy recomendable, pero no obligatoria. En dos ejemplares firmados, protege al taller y al cliente: fecha, identidad, vehículo y kilometraje, reparaciones previstas, coste probable y plazo de inmovilización. Un buen programa la crea directamente desde el presupuesto aceptado.',
      },
      {
        question: '¿Un taller puede cobrar un presupuesto?',
        answer:
          'Sí, si avisa antes al cliente. El presupuesto no es obligatorio, pero el taller no puede negarlo si el cliente lo pide. Una vez firmado, compromete a las dos partes.',
      },
      {
        question: '¿Hay que ofrecer piezas de reutilización?',
        answer:
          'Sí, desde el 1 de enero de 2017, para algunas piezas (carrocería desmontable, guarnecidos, ópticas, lunas no pegadas, algunas piezas mecánicas), salvo suspensión y frenos. El taller puede no ofrecerlas si el plazo de entrega es demasiado largo o si la reparación la cubre una garantía.',
      },
      {
        question: '¿Qué debe incluir la factura de un taller?',
        answer: `Desde 25${NBSP}€ con IVA: la fecha, el nombre y la dirección del taller, el nombre del cliente, la fecha y el lugar de la intervención, el desglose detallado y los totales sin IVA y con IVA, con el kilometraje. A partir del 1 de septiembre de 2027, las pymes también tendrán que emitir sus facturas en formato electrónico.`,
      },
      {
        question: '¿Estos programas sirven para un taller de motos?',
        answer:
          'Muchos están pensados para coches. Comprueba en una demostración que la ficha del vehículo acepta motos y que puedes ajustar libremente tus tarifas. Una herramienta a medida parte directamente de tus tarifas y tus categorías de vehículos.',
      },
      {
        question: '¿Se pueden recuperar los datos de mi programa actual?',
        answer:
          'Si tu programa exporta tus clientes, vehículos y facturas a Excel o CSV, los paso a la nueva herramienta; está previsto en el presupuesto. Comprueba esta opción de exportación antes de firmar con un editor.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para leer también',
    slugs: AUTO_REPAIR_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: '¿Dudas sobre la herramienta adecuada para tu taller?',
    description:
      'Descríbeme tu taller en unas líneas. Te respondo en 24 horas y, si te basta con un programa del mercado, te lo digo.',
    button: 'Hablar de mi proyecto',
  },
}
