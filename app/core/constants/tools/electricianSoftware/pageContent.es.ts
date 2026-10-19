import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  CHARGING_POINT_QUALIFICATION_SOURCE,
  CONSUEL_SOURCE,
  ELECTRICIAN_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  ELECTRICIAN_PAGE_PROJECT_SLUG,
  ELECTRICIAN_PAGE_RELATED_ARTICLE_SLUGS,
  ELECTRICIAN_PAGE_SCREENSHOT_URL,
  ELECTRICIAN_PAGE_UPDATED_AT,
  ELECTRICIAN_TEMPLATE_PDF_PATH,
  ELECTRICIAN_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/electricianSoftware/pageShared'
import { E_INVOICING_SOURCE, HOME_REPAIR_QUOTE_RULES_SOURCE } from '~/core/constants/tools/officialSources'
import {
  DECENNIAL_INSURANCE_SOURCE,
  REDUCED_VAT_WORKS_SOURCE,
} from '~/core/constants/tools/plumbingHeatingSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const ELECTRICIAN_PAGE_CONTENT_ES: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Software para electricistas en Francia: presupuestos, obras, Consuel, precios 2026',
    description:
      'Programas para electricistas en Francia: precios 2026 (Tolteck, Obat, Batappli, Organilog…), un test gratuito en 6 preguntas y una plantilla de presupuesto y acta de puesta en servicio para descargar.',
    inLanguage: 'es',
    schemaAbout: 'Software de gestión para electricistas en Francia',
  },
  breadcrumbLabel: 'Software para electricistas',
  shareImage: {
    titleLines: ['¿Qué software para', 'un electricista?'],
    highlight: 'electricista',
    subtitle:
      'Seis preguntas, los precios 2026 de los programas del mercado francés y una plantilla de presupuesto gratuita',
    badge: 'Test gratuito, en 2 minutos',
    icon: 'zap',
    alt: '¿Qué software para un electricista? Test gratuito en 6 preguntas, precios 2026 de los programas en Francia y plantilla de presupuesto, en dibodev.fr',
  },
  hero: {
    titleBefore: '¿Qué software para tu empresa de ',
    titleHighlight: 'electricidad',
    titleAfter: '?',
    description:
      'Seis preguntas sobre tu equipo, tus delegaciones y tus obras. Averías, instalaciones, domótica o puntos de recarga, a partir del mercado francés el test te dice qué tipo de programa elegir para tus presupuestos, tus intervenciones y tus facturas, y cuánto prever.',
    reassurances: ['2 minutos', 'Sin registro ni e-mail', 'Resultado inmediato'],
    authorIntro: 'Test diseñado por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Creé desde cero un programa de seguimiento de horas por obra, que varias pymes siguen usando.',
    updatedAt: ELECTRICIAN_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'programas',
    eyebrow: 'Precios públicos 2026',
    title: 'Comparativa de los programas para electricistas en Francia y de sus precios',
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
          'Presupuestos y facturas ilimitados, facturación electrónica, biblioteca de partidas (incluidas partidas eléctricas), firma electrónica; planificación y carga de trabajo del equipo en la oferta Croissance',
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
        name: 'Kizeo Forms',
        coverage:
          'Formularios y partes de intervención en el móvil (actas, listas de control), modo sin conexión, fotos, automatizaciones; sin presupuestos ni planificación',
        price: `15 a 37${NBSP}€ sin IVA por usuario al mes`,
        priceCondition: `Smart 15${NBSP}€ y Business 25${NBSP}€ pagando el año, 22 y 37${NBSP}€ al mes; 15 días de prueba`,
      },
    ],
    calloutEmphasizedIntro: 'Antes de firmar:',
    calloutText: `haz pasar un día real por el programa. Un presupuesto de reforma de cuadro con tus materiales y tu tarifa horaria, aceptado y planificado, el acta de puesta en servicio rellenada en el móvil, la factura con el IVA al 10${NBSP}%, y el certificado Consuel adjunto, sin volver a teclear nada.`,
    calloutFootnote: 'Tarifas consultadas el 19 de octubre de 2026 en las webs de los editores. Lista no exhaustiva.',
  },
  rules: {
    anchorId: 'normativa',
    eyebrow: 'Francia en 2026',
    title: 'Presupuestos, Consuel, puntos de recarga, IVA: lo que tu programa debe respetar en Francia en 2026',
    intro:
      'En Francia, el presupuesto antes de una avería, el certificado de conformidad, la cualificación para los puntos de recarga, el IVA reducido, el seguro decenal y la factura electrónica: las normas del electricista pasan todas por sus documentos. Un buen programa los rellena por ti.',
    facts: [
      {
        contextLabel: 'Desde el 1 de abril de 2017',
        title: 'Un presupuesto antes de cualquier avería en casa de un particular',
        text: `Avería, reparación o mantenimiento en casa de un particular (electricidad, fontanería, cerrajería…): presupuesto detallado entregado antes de los trabajos, sea cual sea el importe, con la tarifa horaria, los gastos de desplazamiento y su plazo de validez; factura desde 25${NBSP}€ con IVA.`,
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Antes de la puesta en tensión',
        title: 'El certificado de conformidad Consuel',
        text: 'Toda instalación nueva conectada a la red pública recibe un certificado de conformidad, enviado al Consuel al terminar los trabajos y al menos 20 días antes de la puesta en servicio; desde el 1 de enero de 2025, el Consuel lo transmite él mismo al gestor de la red.',
        sourceName: CONSUEL_SOURCE.name,
        sourceUrl: CONSUEL_SOURCE.url,
      },
      {
        contextLabel: 'Decreto del 12 de enero de 2017',
        title: 'Una cualificación IRVE para los puntos de recarga',
        text: `Salvo puntos de recarga de 3,7${NBSP}kW como máximo en una vivienda privada, los puntos de recarga los instalan profesionales cualificados por un organismo autorizado; la multa administrativa puede llegar a 300${NBSP}€ por punto de recarga.`,
        sourceName: CHARGING_POINT_QUALIFICATION_SOURCE.name,
        sourceUrl: CHARGING_POINT_QUALIFICATION_SOURCE.url,
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
      'tu programa de contabilidad, ni las bibliotecas de precios de los editores (partidas, tarifas de mayoristas). Las facturas van a tu contabilidad (exportación o Factur-X), y la herramienta importa las tarifas de tus proveedores.',
  },
  freeTemplate: {
    anchorId: 'plantilla',
    eyebrow: 'Plantilla gratuita',
    title: 'Un presupuesto y un acta de puesta en servicio listos para rellenar',
    description: `El presupuesto de electricista con el IVA al 5,5${NBSP}%, 10${NBSP}% o 20${NBSP}% y la certificación del cliente para las viviendas de más de 2 años; el acta de puesta en servicio con los controles del cuadro, de la tierra y de las mediciones, y el seguimiento del certificado Consuel. En francés, en PDF para rellenar a mano o en Excel con los totales calculados.`,
    items: [
      'Presupuesto: materiales y mano de obra, tarifa horaria, desplazamiento, IVA por línea, anticipo, seguro decenal, naturaleza de los trabajos',
      'Acta de puesta en servicio: instalación, controles del cuadro y de los diferenciales, toma de tierra, aislamiento y continuidad, ensayos, certificado Consuel, firma del cliente',
      `Menciones al día: presupuesto antes de una avería, Consuel 20 días antes de la puesta en servicio, factura desde 25${NBSP}€ con IVA`,
    ],
    downloads: [
      {
        label: 'Descargar la plantilla PDF',
        href: ELECTRICIAN_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: ELECTRICIAN_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 hojas, totales calculados, en francés',
      },
    ],
    footnote:
      'De uso libre, para adaptar a tu empresa. No sustituye el consejo de tu contable ni los formularios oficiales del Consuel.',
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
          { state: 'yes', text: `15 a 129${NBSP}€ sin IVA al mes, según los módulos y los usuarios` },
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
          { state: 'yes', text: 'Diseñados en torno a tus partidas, tus obras y tus controles' },
        ],
      },
      {
        label: 'Tus reglas: partidas, obras, delegaciones',
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
    rowsShownOnSmallScreens: ELECTRICIAN_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: ELECTRICIAN_PAGE_PROJECT_SLUG,
    screenshotUrl: ELECTRICIAN_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Ya realizado',
    title: 'Un programa de seguimiento de horas por obra, ya en producción',
    description:
      'Gest-Time es el programa de tiempo de trabajo que creé desde cero en Kodeva, durante mis años de formación dual. Los equipos registran sus horas por proyecto o por obra en una tableta, y los responsables las validan cada semana. El mismo principio sirve para seguir el tiempo que tus electricistas dedican a cada obra y a cada avería.',
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
    title: 'Software para electricistas: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta un programa para electricistas en Francia?',
        answer: `Tolteck cuesta 25${NBSP}€ sin IVA al mes (19${NBSP}€ pagando el año), Obat 49 a 129${NBSP}€ sin IVA al mes (39 a 109${NBSP}€ al año, menos para una microempresa), Batappli 39 o 79${NBSP}€ sin IVA al mes, Organilog 19 a 59${NBSP}€ al mes por usuario y Kizeo Forms 15 a 37${NBSP}€ sin IVA por usuario al mes (tarifas consultadas el 19 de octubre de 2026). Un complemento a medida cuesta de 2.500 a 7.000${NBSP}€ una sola vez, una herramienta completa de 5.000 a 25.000${NBSP}€, y luego 100 a 300${NBSP}€ al mes de mantenimiento.`,
      },
      {
        question: '¿Qué programa de presupuestos y facturación para un electricista en Francia?',
        answer: `Un programa de facturación generalista hace presupuestos y facturas, pero le faltan la biblioteca de partidas eléctricas, el IVA al 10${NBSP}% o al 5,5${NBSP}% con la certificación del cliente, las certificaciones de obra y el certificado del seguro decenal. Los programas de construcción (Tolteck, Obat, Batappli…) los integran, y Obat ya emite facturas electrónicas. Una empresa con varios electricistas en obra necesita además la planificación y el parte de intervención en el móvil, que se encuentran en Organilog, Kizeo Forms o en una herramienta a medida.`,
      },
      {
        question: '¿Existe un programa gratuito para electricistas?',
        answer:
          'Organilog ofrece una oferta Basique gratuita y limitada (vista previa de los módulos, archivo de 72 horas, sin soporte). Tolteck ofrece un mes de prueba, Obat y Kizeo Forms una prueba gratuita. Un programa de facturación gratuito puede sacar de un apuro, pero sin partidas eléctricas, sin actas de puesta en servicio ni seguimiento de los certificados Consuel.',
      },
      {
        question: '¿Es obligatorio el presupuesto para una avería eléctrica en Francia?',
        answer:
          'Sí. Desde el 1 de abril de 2017, todo profesional que repara, arregla o mantiene en casa de un particular (electricidad, fontanería, cerrajería…) entrega un presupuesto detallado antes de los trabajos, sea cual sea el importe, incluso en una urgencia. Indica la tarifa horaria, los gastos de desplazamiento, su plazo de validez y si es gratuito o de pago. Firmado en casa del cliente, abre un derecho de desistimiento de 14 días, salvo trabajos urgentes pedidos por el cliente.',
      },
      {
        question: '¿Cuándo hace falta un certificado de conformidad Consuel?',
        answer:
          'Para toda instalación eléctrica nueva de carácter definitivo conectada a la red pública, y antes de su puesta en tensión: el formulario se envía al Consuel al terminar los trabajos y al menos 20 días antes de la fecha de puesta en servicio. Desde el 1 de enero de 2025, el Consuel transmite él mismo el certificado visado al gestor de la red. Las instalaciones provisionales (obra, feria) no están afectadas. Un buen programa guarda para cada obra el número y la fecha de envío del certificado.',
      },
      {
        question: '¿Hace falta una cualificación para instalar un punto de recarga en Francia?',
        answer: `Sí, salvo para un punto de recarga de 3,7${NBSP}kW como máximo en una vivienda privada: los puntos de recarga los instalan profesionales con cualificación IRVE de un organismo autorizado, con una multa administrativa de hasta 300${NBSP}€ por punto de recarga. Tu programa puede seguir las cualificaciones de cada electricista y su fecha de renovación.`,
      },
      {
        question: `¿Cómo aplicar el IVA al 10${NBSP}% en un presupuesto de electricidad en Francia?`,
        answer: `Para obras de mejora, transformación, acondicionamiento o mantenimiento en una vivienda terminada hace más de 2 años, el IVA es del 10${NBSP}% (5,5${NBSP}% para la renovación energética). El cliente certifica en el presupuesto o la factura que se cumplen estas condiciones; la declaración Cerfa ya no se exige desde el 16 de febrero de 2025. Cada documento se hace por duplicado, y el cliente guarda el suyo 5 años.`,
      },
      {
        question: 'Mis electricistas trabajan a menudo sin cobertura: ¿qué programa?',
        answer:
          'Comprueba el modo sin conexión: la planificación, la ficha de la obra y el parte de intervención siguen disponibles en un sótano, un cuarto técnico o una zona sin cobertura, y se sincronizan cuando vuelve la red. Tolteck, Organilog (oferta Pro) y Kizeo Forms lo anuncian; en una herramienta a medida, es un punto previsto desde el presupuesto.',
      },
      {
        question: '¿Se pueden recuperar los datos de mi programa actual?',
        answer:
          'Si tu programa exporta tus clientes, obras, partidas y facturas a Excel o CSV, los recupero en la nueva herramienta; está previsto en el presupuesto. Comprueba esta posibilidad de exportación antes de firmar con un editor.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para seguir leyendo',
    slugs: ELECTRICIAN_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: '¿Dudas sobre la herramienta adecuada para tu empresa?',
    description:
      'Cuéntame tu actividad en unas líneas. Te respondo en 24 horas, y si un programa del mercado te basta, te lo digo.',
    button: 'Hablar de mi proyecto',
  },
}
