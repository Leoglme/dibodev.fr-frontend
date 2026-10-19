import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  BOILER_MAINTENANCE_SOURCE,
  DECENNIAL_INSURANCE_SOURCE,
  PLUMBING_HEATING_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  PLUMBING_HEATING_PAGE_PROJECT_SLUG,
  PLUMBING_HEATING_PAGE_RELATED_ARTICLE_SLUGS,
  PLUMBING_HEATING_PAGE_SCREENSHOT_URL,
  PLUMBING_HEATING_PAGE_UPDATED_AT,
  PLUMBING_HEATING_TEMPLATE_PDF_PATH,
  PLUMBING_HEATING_TEMPLATE_XLSX_PATH,
  PLUMBING_QUOTE_RULES_SOURCE,
  REDUCED_VAT_WORKS_SOURCE,
} from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'

// The page describes the French market (publishers, VAT, boiler and quote rules): the Spanish text says so instead of adapting it.

export const PLUMBING_HEATING_PAGE_CONTENT_ES: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Software para fontaneros y calefactores en Francia: presupuestos, precios 2026',
    description:
      'Programas para fontaneros y calefactores en Francia: precios 2026 (Tolteck, Obat, Batappli, Organilog…), un test gratuito en 6 preguntas y una plantilla de presupuesto para descargar.',
    inLanguage: 'es',
    schemaAbout: 'Software de gestión para fontaneros y calefactores en Francia',
  },
  breadcrumbLabel: 'Software para fontanería y calefacción',
  shareImage: {
    titleLines: ['¿Qué software para una empresa', 'de fontanería y calefacción?'],
    highlight: 'fontanería y calefacción',
    subtitle:
      'Seis preguntas, los precios 2026 de los programas del mercado francés y una plantilla de presupuesto gratuita',
    badge: 'Test gratuito, en 2 minutos',
    icon: 'flame',
    alt: '¿Qué software para una empresa de fontanería y calefacción? Test gratuito en 6 preguntas, precios 2026 de los programas en Francia y plantilla de presupuesto, en dibodev.fr',
  },
  hero: {
    titleBefore: '¿Qué software para tu empresa de ',
    titleHighlight: 'fontanería y calefacción',
    titleAfter: '?',
    description:
      'Seis preguntas sobre tu equipo, tus delegaciones y tu actividad. Fontanero, calefactor o ambos, a partir del mercado francés el test te dice qué tipo de programa elegir para tus presupuestos, tus intervenciones y tus contratos de mantenimiento, y cuánto prever.',
    reassurances: ['2 minutos', 'Sin registro ni e-mail', 'Resultado inmediato'],
    authorIntro: 'Test diseñado por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Creé desde cero un programa de seguimiento de horas por obra, que varias pymes siguen usando.',
    updatedAt: PLUMBING_HEATING_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'programas',
    eyebrow: 'Precios públicos 2026',
    title: 'Comparativa de los programas para fontaneros y calefactores en Francia y de sus precios',
    intro:
      'Las tarifas que los editores de programas de construcción y de gestión de intervenciones muestran en su web. El precio depende sobre todo de los módulos elegidos y del número de usuarios.',
    productColumnLabel: 'Programa',
    coverageColumnLabel: 'Qué gestiona',
    priceColumnLabel: 'Precio público',
    products: [
      {
        name: 'Tolteck',
        coverage:
          'Presupuestos y facturas, biblioteca de partidas, IVA e importes deducibles, en PC, tableta y móvil, sin conexión',
        price: `25${NBSP}€ al mes sin IVA`,
        priceCondition: `19${NBSP}€ al mes sin IVA pagando el año (228${NBSP}€ al año), una sola oferta, un mes de prueba`,
      },
      {
        name: 'Obat',
        coverage:
          'Presupuestos y facturas ilimitados, facturación electrónica, biblioteca de 30.000 partidas, firma electrónica; planificación y carga de trabajo del equipo en la oferta Croissance',
        price: `49 a 129${NBSP}€ al mes sin IVA`,
        priceCondition: `39 a 109${NBSP}€ sin IVA pagando el año; 32 a 95${NBSP}€ sin IVA para una microempresa; acceso del equipo opcional`,
      },
      {
        name: 'Batappli',
        coverage:
          'Presupuestos y facturas, anticipos, certificaciones de obra, exportación contable (oferta Devis); stock, seguimiento de obras, contratos de mantenimiento y partes de trabajo (oferta Artisan)',
        price: `39 o 79${NBSP}€ al mes sin IVA`,
        priceCondition: `429 u 869${NBSP}€ sin IVA al año; 19${NBSP}€ sin IVA al mes por usuario adicional`,
      },
      {
        name: 'Organilog',
        coverage:
          'Intervenciones, planificación, app móvil sin conexión, partes de intervención, stock (oferta Pro); presupuestos, facturas y firma en línea (oferta Business)',
        price: `19 a 59${NBSP}€ al mes por usuario`,
        priceCondition: `Oferta Basique gratuita y limitada (archivo de 72${NBSP}h); presupuestos y facturas desde la oferta Business a 35${NBSP}€`,
      },
      {
        name: 'Praxedo',
        coverage: 'Gestión de intervenciones para equipos de técnicos: planificación, app móvil, partes',
        price: 'Bajo presupuesto',
        priceCondition: 'Tarifas no publicadas',
      },
    ],
    calloutEmphasizedIntro: 'Antes de firmar:',
    calloutText: `haz pasar un día real por el programa. Un aviso de avería recibido por teléfono, colocado en la ruta del técnico, el parte de intervención firmado en su móvil en una sala de calderas sin cobertura, y luego la factura con el IVA al 10${NBSP}%, sin volver a teclear nada.`,
    calloutFootnote: 'Tarifas consultadas el 19 de octubre de 2026 en las webs de los editores. Lista no exhaustiva.',
  },
  rules: {
    anchorId: 'normativa',
    eyebrow: 'Francia en 2026',
    title: 'Presupuestos, facturas, mantenimiento, IVA: lo que tu programa debe respetar en Francia en 2026',
    intro:
      'En Francia, el presupuesto antes de cada intervención, la factura, el mantenimiento anual de las calderas, el IVA reducido y el seguro decenal: las normas del fontanero-calefactor pasan todas por tus documentos. Un buen programa los rellena por ti.',
    facts: [
      {
        contextLabel: 'Desde el 1 de abril de 2017',
        title: 'Un presupuesto antes de cualquier intervención',
        text: 'Avería, reparación o mantenimiento en casa de un particular (fontanería, sanitarios, climatización): presupuesto detallado entregado antes de los trabajos, sea cual sea el importe, con la tarifa horaria, los gastos de desplazamiento y su plazo de validez.',
        sourceName: PLUMBING_QUOTE_RULES_SOURCE.name,
        sourceUrl: PLUMBING_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: `Desde 25${NBSP}€ con IVA`,
        title: 'Una factura por duplicado',
        text: 'Entregada tras los trabajos y antes del pago: fecha, nombre y dirección de la empresa, nombre del cliente, fecha y lugar de la intervención, totales sin y con IVA. El cliente puede quedarse con las piezas sustituidas.',
        sourceName: PLUMBING_QUOTE_RULES_SOURCE.name,
        sourceUrl: PLUMBING_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Cada año natural',
        title: 'El mantenimiento de las calderas de 4 a 400 kW',
        text: 'Calderas de gasóleo, gas, leña o carbón, bombas de calor y aparatos de calefacción con ventilación: una visita por año natural, y un certificado de mantenimiento entregado al cliente en 15 días, que conserva 2 años.',
        sourceName: BOILER_MAINTENANCE_SOURCE.name,
        sourceUrl: BOILER_MAINTENANCE_SOURCE.url,
      },
      {
        contextLabel: `IVA al 10${NBSP}% o al 5,5${NBSP}%`,
        title: 'La certificación del cliente en el presupuesto o la factura',
        text: 'Para obras en una vivienda terminada hace más de 2 años, el cliente certifica en el presupuesto o la factura que se cumplen las condiciones del tipo reducido. Cada documento se hace por duplicado, y el suyo se conserva 5 años.',
        sourceName: REDUCED_VAT_WORKS_SOURCE.name,
        sourceUrl: REDUCED_VAT_WORKS_SOURCE.url,
      },
      {
        contextLabel: 'Con cada presupuesto y factura',
        title: 'El certificado del seguro decenal',
        text: 'Como artesano o autónomo de la construcción, contratas un seguro de responsabilidad civil decenal, y su certificado acompaña tus presupuestos y tus facturas.',
        sourceName: DECENNIAL_INSURANCE_SOURCE.name,
        sourceUrl: DECENNIAL_INSURANCE_SOURCE.url,
      },
      {
        contextLabel: '1 de septiembre de 2027',
        title: 'La factura electrónica',
        text: 'Todas las empresas francesas deben poder recibir facturas electrónicas desde el 1 de septiembre de 2026; las pymes deberán emitirlas a partir del 1 de septiembre de 2027.',
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'Lo que la herramienta a medida no sustituye:',
    calloutText:
      'tu programa de contabilidad, ni las bibliotecas de precios de los editores (partidas, tarifas de proveedores). Las facturas van a tu contabilidad (exportación o Factur-X), y la herramienta importa las tarifas de tus proveedores.',
  },
  freeTemplate: {
    anchorId: 'plantilla',
    eyebrow: 'Plantilla gratuita',
    title: 'Un presupuesto y un parte de intervención listos para rellenar',
    description: `El presupuesto con el IVA al 5,5${NBSP}%, 10${NBSP}% o 20${NBSP}% y la certificación del cliente para las viviendas de más de 2 años; el parte de intervención con la lista de control del mantenimiento de calderas. En francés, en PDF para rellenar a mano o en Excel con los totales calculados.`,
    items: [
      'Presupuesto: materiales y mano de obra, tarifa horaria, desplazamiento, IVA por línea, anticipo, seguro decenal',
      'Parte de intervención: aparato, horas, trabajos realizados, piezas, puntos de control del mantenimiento anual, firma del cliente',
      `Menciones al día: presupuesto antes de la intervención, certificado de mantenimiento en 15 días, factura desde 25${NBSP}€ con IVA`,
    ],
    downloads: [
      {
        label: 'Descargar la plantilla PDF',
        href: PLUMBING_HEATING_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: PLUMBING_HEATING_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 hojas, totales calculados, en francés',
      },
    ],
    footnote: 'De uso libre, para adaptar a tu empresa. No sustituye el consejo de tu contable.',
  },
  comparison: {
    eyebrow: 'Las tres opciones',
    title: '¿Programa del mercado, complemento o a medida?',
    intro:
      'Cada una tiene su lugar. El test te orienta; esta tabla muestra lo que ganas y lo que aceptas con cada una.',
    criterionLabel: 'Criterio',
    columns: ['Programa del mercado', 'Programa del mercado + complemento', 'Herramienta a medida'],
    rows: [
      {
        label: 'Precio',
        cells: [
          { state: 'yes', text: `19 a 129${NBSP}€ sin IVA al mes, según los módulos y los usuarios` },
          { state: 'partial', text: `Tu suscripción, más 2.500 a 7.000${NBSP}€ una sola vez` },
          {
            state: 'partial',
            text: `5.000 a 25.000${NBSP}€ una sola vez, más 100 a 300${NBSP}€ al mes de mantenimiento`,
          },
        ],
      },
      {
        label: 'Presupuestos, partes de intervención, facturas',
        cells: [
          { state: 'yes', text: 'Incluidos, conformes a las normas francesas de la construcción' },
          { state: 'yes', text: 'Se quedan en tu programa actual' },
          { state: 'yes', text: 'Diseñados en torno a tus tarifas, tus contratos y tus rutas' },
        ],
      },
      {
        label: 'Tus reglas: contratos, rutas, delegaciones',
        cells: [
          { state: 'partial', text: 'Dentro de los ajustes previstos por el editor' },
          { state: 'yes', text: 'En los puntos que añade el complemento' },
          { state: 'yes', text: 'Diseñada en torno a tu organización' },
        ],
      },
      {
        label: 'Avisos de avería y solicitudes de presupuesto en tu web',
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
    rowsShownOnSmallScreens: PLUMBING_HEATING_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: PLUMBING_HEATING_PAGE_PROJECT_SLUG,
    screenshotUrl: PLUMBING_HEATING_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Ya realizado',
    title: 'Un programa de seguimiento de horas por obra, ya en producción',
    description:
      'Gest-Time es el programa de tiempo de trabajo que creé desde cero en Kodeva, durante mis años de formación dual. Los equipos registran sus horas por proyecto o por obra en una tableta, y los responsables las validan cada semana. El mismo principio sirve para seguir el tiempo que tus técnicos dedican a cada obra y a cada intervención.',
    highlights: [
      'Horas registradas por obra, pensadas para la tableta',
      'Validación semanal, alertas por horas que faltan',
      'Informes por proyecto y exportaciones a Excel y PDF',
    ],
    linkLabel: 'Ver el proyecto Gest-Time',
    imageAlt:
      'Informe Gest-Time: horas, ausencias y desplazamientos por empleado y por semana, con exportación a Excel',
    browserBarCaption: 'Gest-Time · informe de horas por empleado',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Software para fontanería y calefacción: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta un programa para fontaneros y calefactores en Francia?',
        answer: `Tolteck cuesta 25${NBSP}€ sin IVA al mes (19${NBSP}€ pagando el año), Obat 49 a 129${NBSP}€ sin IVA al mes (39 a 109${NBSP}€ al año, menos para una microempresa), Batappli 39 o 79${NBSP}€ sin IVA al mes y Organilog 19 a 59${NBSP}€ al mes por usuario. Praxedo va bajo presupuesto (tarifas consultadas el 19 de octubre de 2026). Un complemento a medida cuesta de 2.500 a 7.000${NBSP}€ una sola vez, una herramienta completa de 5.000 a 25.000${NBSP}€, y luego 100 a 300${NBSP}€ al mes de mantenimiento.`,
      },
      {
        question: '¿Qué programa de presupuestos y facturación para un fontanero en Francia?',
        answer: `Un programa de facturación generalista hace presupuestos y facturas, pero le faltan la biblioteca de partidas, el IVA al 10${NBSP}% o al 5,5${NBSP}% con la certificación del cliente, las certificaciones de obra y el certificado del seguro decenal. Los programas de construcción (Tolteck, Obat, Batappli…) los integran, y Obat ya emite facturas electrónicas. Una empresa con varios técnicos en ruta necesita además la planificación y el parte de intervención en el móvil, que se encuentran en Organilog o en una herramienta a medida.`,
      },
      {
        question: '¿Existe un programa de fontanería gratuito?',
        answer:
          'Organilog ofrece una oferta Basique gratuita y limitada (vista previa de los módulos, archivo de 72 horas, sin soporte). Tolteck ofrece un mes de prueba y Obat una prueba gratuita. Un programa de facturación gratuito puede sacar de un apuro, pero sin partes de intervención ni contratos de mantenimiento.',
      },
      {
        question: '¿Es obligatorio el presupuesto para una avería de fontanería en Francia?',
        answer:
          'Sí. Desde el 1 de abril de 2017, todo profesional que repara, arregla o mantiene en casa de un particular (fontanería, sanitarios, climatización…) entrega un presupuesto detallado antes de los trabajos, sea cual sea el importe, incluso en una urgencia. Indica la tarifa horaria, los gastos de desplazamiento, su plazo de validez y si es gratuito o de pago. Firmado en casa del cliente, abre un derecho de desistimiento de 14 días, salvo trabajos urgentes pedidos por el cliente.',
      },
      {
        question: '¿Qué debe contener el certificado de mantenimiento de la caldera?',
        answer: `Tras cada mantenimiento anual (calderas de 4 a 400${NBSP}kW, bombas de calor, aparatos de calefacción con ventilación), el calefactor entrega un certificado en 15 días, en papel o por e-mail, que el cliente conserva al menos 2 años. Recoge sus consejos sobre el buen uso del aparato, las mejoras posibles y el interés de una sustitución. Un buen programa lo genera al final de la visita y planifica la siguiente.`,
      },
      {
        question: `¿Cómo aplicar el IVA al 10${NBSP}% en un presupuesto de fontanería en Francia?`,
        answer: `Para obras de mejora, transformación, acondicionamiento o mantenimiento en una vivienda terminada hace más de 2 años, el IVA es del 10${NBSP}% (5,5${NBSP}% para la renovación energética). El cliente certifica en el presupuesto o la factura que se cumplen estas condiciones; la declaración Cerfa ya no se exige desde el 16 de febrero de 2025. Cada documento se hace por duplicado, y el cliente guarda el suyo 5 años.`,
      },
      {
        question: '¿Qué programa para gestionar los contratos de mantenimiento?',
        answer:
          'Batappli (oferta Artisan) gestiona los contratos de mantenimiento y los partes de trabajo, Organilog las intervenciones recurrentes con su app móvil. Si tus contratos tienen sus particularidades (visitas en meses distintos según la energía, piezas incluidas, tarifas por cliente), una herramienta a medida planifica las visitas, genera el certificado y factura el contrato a su vencimiento.',
      },
      {
        question: 'Mis técnicos trabajan a menudo sin cobertura: ¿qué programa?',
        answer:
          'Comprueba que la app móvil funciona sin conexión: la ruta, la ficha del cliente y el parte de intervención siguen disponibles en un sótano o una sala de calderas, y se sincronizan cuando vuelve la cobertura. Tolteck y Organilog lo anuncian; en una herramienta a medida, es un punto previsto desde el presupuesto.',
      },
      {
        question: '¿Se pueden recuperar los datos de mi programa actual?',
        answer:
          'Si tu programa exporta tus clientes, tus aparatos, tus contratos y tus facturas a Excel o CSV, los recupero en la nueva herramienta; está previsto en el presupuesto. Comprueba esta posibilidad de exportación antes de firmar con un editor.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para seguir leyendo',
    slugs: PLUMBING_HEATING_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: '¿Dudas sobre la herramienta adecuada para tu empresa?',
    description:
      'Cuéntame tu actividad en unas líneas. Te respondo en 24 horas, y si un programa del mercado te basta, te lo digo.',
    button: 'Hablar de mi proyecto',
  },
}
