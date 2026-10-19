import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  DOCUMENT_RETENTION_SOURCE,
  FIELD_SERVICE_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  FIELD_SERVICE_PAGE_PROJECT_SLUG,
  FIELD_SERVICE_PAGE_RELATED_ARTICLE_SLUGS,
  FIELD_SERVICE_PAGE_SCREENSHOT_URL,
  FIELD_SERVICE_PAGE_UPDATED_AT,
  FIELD_SERVICE_TEMPLATE_PDF_PATH,
  FIELD_SERVICE_TEMPLATE_XLSX_PATH,
  INVOICE_MENTIONS_SOURCE,
  ITINERANT_TRAVEL_TIME_SOURCE,
  VEHICLE_GEOLOCATION_SOURCE,
} from '~/core/constants/tools/fieldServiceSoftware/pageShared'
import { E_INVOICING_SOURCE, HOME_REPAIR_QUOTE_RULES_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'

// The page describes the French market (publishers, working-time and invoicing rules): the Spanish text says so instead of adapting it.

export const FIELD_SERVICE_PAGE_CONTENT_ES: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Software de gestión de intervenciones en Francia: planificación, móvil, precios 2026',
    description:
      'Programas de gestión de intervenciones para técnicos en Francia: precios 2026 (Organilog, Synchroteam, Kizeo Forms, Praxedo…), un test gratuito en 6 preguntas y una plantilla de parte de intervención para descargar.',
    inLanguage: 'es',
    schemaAbout: 'Software de gestión de intervenciones para técnicos de campo en Francia',
  },
  breadcrumbLabel: 'Software de gestión de intervenciones',
  shareImage: {
    titleLines: ['¿Qué software para', 'tus intervenciones?'],
    highlight: 'intervenciones',
    subtitle:
      'Seis preguntas, los precios 2026 de los programas del mercado francés y una plantilla de parte de intervención gratuita',
    badge: 'Test gratuito, en 2 minutos',
    icon: 'clipboard',
    alt: '¿Qué software de gestión de intervenciones para tus técnicos? Test gratuito en 6 preguntas, precios 2026 de los programas en Francia y plantilla de parte de intervención, en dibodev.fr',
  },
  hero: {
    titleBefore: '¿Qué software de ',
    titleHighlight: 'gestión de intervenciones',
    titleAfter: ' para tus técnicos?',
    description:
      'Seis preguntas sobre tu equipo, tus delegaciones y tus intervenciones. Mantenimiento, averías, instalación o inspecciones, a partir del mercado francés el test te dice qué tipo de programa elegir para tus rutas, tus partes de intervención y tus facturas, y cuánto prever.',
    reassurances: ['2 minutos', 'Sin registro ni e-mail', 'Resultado inmediato'],
    authorIntro: 'Test diseñado por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. En Kodeva trabajé en una aplicación de posventa para técnicos de campo y creé desde cero un programa de seguimiento de horas por obra, que varias pymes siguen usando.',
    updatedAt: FIELD_SERVICE_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'programas',
    eyebrow: 'Precios públicos 2026',
    title: 'Comparativa de los programas de gestión de intervenciones en Francia y de sus precios',
    intro:
      'Las tarifas que los editores de programas de intervenciones y de formularios móviles muestran en su web. El precio depende sobre todo del número de técnicos y de los módulos elegidos.',
    productColumnLabel: 'Programa',
    coverageColumnLabel: 'Qué gestiona',
    priceColumnLabel: 'Precio público',
    products: [
      {
        name: 'Organilog',
        coverage:
          'Intervenciones, planificación, app móvil sin conexión, partes de intervención, stock (oferta Pro); presupuestos, facturas y firma en línea (Business); gamas de mantenimiento (Premium)',
        price: `19 a 59${NBSP}€ al mes por usuario`,
        priceCondition: `Oferta Basique gratuita y limitada (archivo de 72${NBSP}h); presupuestos y facturas desde la oferta Business a 35${NBSP}€`,
      },
      {
        name: 'Kizeo Forms',
        coverage:
          'Formularios y partes de intervención en el móvil, modo sin conexión, fotos, automatizaciones, API; dictado por voz y OCR en Business; sin planificación',
        price: `15 a 37${NBSP}€ sin IVA por usuario al mes`,
        priceCondition: `Smart 15${NBSP}€ y Business 25${NBSP}€ pagando el año, 22 y 37${NBSP}€ al mes; 15 días de prueba`,
      },
      {
        name: 'Synchroteam',
        coverage:
          'Planificación y asignación de intervenciones, app móvil, partes, conectores Sage, Zoho CRM, Xero y QuickBooks (todas las funciones incluidas)',
        price: `39,49 o 64,79${NBSP}€ por usuario al mes`,
        priceCondition:
          'Primera licencia de administrador gratuita; optimización de rutas solo en Premium; prueba de 14 días sin compromiso',
      },
      {
        name: 'Batappli',
        coverage:
          'Presupuestos, facturas, certificaciones de obra, seguimiento de obras, contratos de mantenimiento y partes de trabajo, stock, permisos de usuario (oferta Artisan)',
        price: `79${NBSP}€ al mes sin IVA`,
        priceCondition: `869${NBSP}€ sin IVA al año; 19${NBSP}€ sin IVA al mes por usuario adicional`,
      },
      {
        name: 'Praxedo',
        coverage: 'Gestión de intervenciones para equipos de técnicos: planificación, app móvil, partes',
        price: 'Bajo presupuesto',
        priceCondition: 'Tarifas no publicadas',
      },
    ],
    calloutEmphasizedIntro: 'Antes de firmar:',
    calloutText:
      'haz pasar un día real por el programa. Un aviso de avería recibido por teléfono, asignado al técnico más cercano, el parte de intervención firmado en su móvil en un sótano sin cobertura, la pieza sacada del stock de la furgoneta, y luego la factura enviada antes de irse, sin volver a teclear nada.',
    calloutFootnote: 'Tarifas consultadas el 19 de octubre de 2026 en las webs de los editores. Lista no exhaustiva.',
  },
  rules: {
    anchorId: 'normativa',
    eyebrow: 'Francia en 2026',
    title:
      'Presupuestos, facturas, desplazamientos, geolocalización: lo que tu programa debe respetar en Francia en 2026',
    intro:
      'En Francia, el presupuesto antes de una avería, las menciones de la factura, el tiempo de desplazamiento de los técnicos, la geolocalización y la conservación de los partes: las normas de una empresa de intervenciones pasan todas por sus documentos y su planificación. Un buen programa las aplica por ti.',
    facts: [
      {
        contextLabel: 'Desde el 1 de abril de 2017',
        title: 'Un presupuesto antes de cualquier avería en casa de un particular',
        text: `Avería, reparación o mantenimiento en casa de un particular (fontanería, electricidad, cerrajería, climatización…): presupuesto detallado entregado antes de los trabajos, sea cual sea el importe, y luego factura desde 25${NBSP}€ con IVA.`,
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Entre empresas',
        title: 'Una factura con vencimiento y penalizaciones',
        text: `Fecha de vencimiento del pago, tipo de las penalizaciones por demora, condiciones de descuento por pronto pago e indemnización fija de 40${NBSP}€ por gastos de cobro: estas menciones figuran en cada factura dirigida a un cliente profesional.`,
        sourceName: INVOICE_MENTIONS_SOURCE.name,
        sourceUrl: INVOICE_MENTIONS_SOURCE.url,
      },
      {
        contextLabel: 'Tribunal de Casación, 23 de noviembre de 2022',
        title: 'El trayecto hasta el primer cliente es tiempo de trabajo',
        text: 'Para un empleado itinerante que sigue a disposición del empleador durante el trayecto, los desplazamientos entre su domicilio y el primer o el último cliente cuentan como tiempo de trabajo efectivo y se pagan como tal.',
        sourceName: ITINERANT_TRAVEL_TIME_SOURCE.name,
        sourceUrl: ITINERANT_TRAVEL_TIME_SOURCE.url,
      },
      {
        contextLabel: 'Reglas de la CNIL',
        title: 'La geolocalización de los técnicos, con límites',
        text: 'Finalidades limitadas (justificar una intervención, enviar al técnico más cercano, seguridad), empleados y representantes del personal informados, nunca fuera del horario de trabajo ni para controlar la velocidad, datos conservados 2 meses (1 año para probar una intervención).',
        sourceName: VEHICLE_GEOLOCATION_SOURCE.name,
        sourceUrl: VEHICLE_GEOLOCATION_SOURCE.url,
      },
      {
        contextLabel: '10 años',
        title: 'Partes y facturas conservados diez años',
        text: 'Pedidos, albaranes y partes de intervención, facturas de clientes y proveedores: justificantes que se conservan 10 años desde el cierre del ejercicio.',
        sourceName: DOCUMENT_RETENTION_SOURCE.name,
        sourceUrl: DOCUMENT_RETENTION_SOURCE.url,
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
      'tu programa de contabilidad ni tu nómina. Las facturas van a tu contabilidad (exportación o Factur-X), las horas de los técnicos a tu programa de nóminas, y la herramienta se conecta a tus herramientas actuales (CRM, stock, telefonía).',
  },
  freeTemplate: {
    anchorId: 'plantilla',
    eyebrow: 'Plantilla gratuita',
    title: 'Un parte de intervención y una hoja de ruta listos para rellenar',
    description:
      'El parte de intervención para una avería, un mantenimiento, una instalación o una inspección, con piezas, mano de obra y pasos siguientes; la hoja de ruta diaria de un técnico con horas, estados y kilómetros. En francés, en PDF para rellenar a mano o en Excel con las duraciones y los totales calculados.',
    items: [
      'Parte de intervención: cliente y sitio, equipo, tipo de intervención, horas, diagnóstico y trabajos, piezas y mano de obra, pasos siguientes, firma del cliente',
      'Hoja de ruta: intervenciones del día, horas de llegada y salida, estado, kilómetros, piezas por reponer, consignas para la oficina',
      'Menciones al día: conservación 10 años, presupuesto antes de una avería en casa de un particular, tiempo de desplazamiento de los itinerantes, geolocalización según la CNIL',
    ],
    downloads: [
      {
        label: 'Descargar la plantilla PDF',
        href: FIELD_SERVICE_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: FIELD_SERVICE_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 hojas, duraciones y totales calculados, en francés',
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
          { state: 'yes', text: `15 a 79${NBSP}€ al mes, casi siempre por usuario` },
          { state: 'partial', text: `Tu suscripción, más 2.500 a 7.000${NBSP}€ una sola vez` },
          {
            state: 'partial',
            text: `5.000 a 25.000${NBSP}€ una sola vez, más 100 a 300${NBSP}€ al mes de mantenimiento`,
          },
        ],
      },
      {
        label: 'Partes de intervención, planificación, facturas',
        cells: [
          {
            state: 'yes',
            text: 'Incluidos en los editores de intervenciones (los formularios móviles solos no tienen planificación)',
          },
          { state: 'yes', text: 'Se quedan en tu programa actual' },
          { state: 'yes', text: 'Diseñados en torno a tus contratos, tus rutas y tus equipos' },
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
        label: 'Solicitudes y seguimiento de intervenciones en tu web (portal de cliente)',
        cells: [
          { state: 'partial', text: 'A menudo un portal del editor, con sus colores' },
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
    rowsShownOnSmallScreens: FIELD_SERVICE_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: FIELD_SERVICE_PAGE_PROJECT_SLUG,
    screenshotUrl: FIELD_SERVICE_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Ya realizado',
    title: 'Un programa de seguimiento de horas por obra, ya en producción',
    description:
      'Gest-Time es el programa de tiempo de trabajo que creé desde cero en Kodeva, durante mis años de formación dual. Los equipos registran sus horas por proyecto o por obra en una tableta, y los responsables las validan cada semana. El mismo principio sirve para seguir el tiempo que tus técnicos dedican a cada intervención, desplazamientos incluidos.',
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
    title: 'Software de gestión de intervenciones: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta un programa de gestión de intervenciones en Francia?',
        answer: `Organilog cuesta 19 a 59${NBSP}€ al mes por usuario (oferta Basique gratuita y limitada), Kizeo Forms 15 a 37${NBSP}€ sin IVA por usuario al mes, Synchroteam 39,49 o 64,79${NBSP}€ por usuario al mes, Batappli 79${NBSP}€ sin IVA al mes en la oferta Artisan. Praxedo va bajo presupuesto (tarifas consultadas el 19 de octubre de 2026). Para cinco técnicos, cuenta de 75 a 325${NBSP}€ al mes según el editor. Un complemento a medida cuesta de 2.500 a 7.000${NBSP}€ una sola vez, una herramienta completa de 5.000 a 25.000${NBSP}€, y luego 100 a 300${NBSP}€ al mes de mantenimiento.`,
      },
      {
        question: '¿Qué programa para técnicos que trabajan sin cobertura?',
        answer:
          'Comprueba el modo sin conexión: la ruta, la ficha del cliente y el parte de intervención siguen disponibles en un sótano, una sala de calderas o una zona sin cobertura, y se sincronizan cuando vuelve la red. Organilog (oferta Pro) y Kizeo Forms lo anuncian; en una herramienta a medida, es un punto previsto desde el presupuesto, con las fotos en cola.',
      },
      {
        question: '¿Existe un programa de gestión de intervenciones gratuito?',
        answer:
          'Organilog ofrece una oferta Basique gratuita y limitada (vista previa de los módulos, archivo de 72 horas, sin soporte). Kizeo Forms ofrece 15 días de prueba, Synchroteam 14 días. Una hoja de cálculo compartida saca de un apuro a un equipo de dos, pero sin firma, sin fotos ni historial por equipo.',
      },
      {
        question: '¿Tiene validez un parte de intervención firmado en una tableta?',
        answer:
          'Una firma electrónica es admisible como prueba; su fuerza depende de su nivel (simple, avanzada o cualificada). Para un parte de intervención, la práctica habitual es una firma simple con sello de tiempo, el PDF enviado al cliente en el acto y el parte conservado 10 años con la factura. Para un contrato o un compromiso económico importante, usa una firma avanzada o cualificada.',
      },
      {
        question: '¿Se puede geolocalizar a los técnicos en Francia?',
        answer:
          'Sí, dentro del marco fijado por la CNIL: para justificar una intervención, enviar al técnico más cercano o proteger el vehículo, nunca para controlar a un empleado de forma permanente ni fuera del horario de trabajo. Los empleados están informados, pueden apagar la geolocalización fuera del trabajo, y los datos se conservan 2 meses como máximo (1 año para probar una intervención).',
      },
      {
        question: '¿El tiempo de desplazamiento de los técnicos cuenta como trabajo en Francia?',
        answer:
          'Para un empleado itinerante que sigue a disposición del empleador durante el trayecto (llamadas, citas que gestionar), los desplazamientos entre su domicilio y el primer o el último cliente son tiempo de trabajo efectivo (Tribunal de Casación, 23 de noviembre de 2022). Un programa que registra la hora de salida, de llegada y de regreso evita litigios sobre las horas.',
      },
      {
        question: '¿Qué programa para los contratos de mantenimiento y las visitas recurrentes?',
        answer:
          'Batappli (oferta Artisan) gestiona los contratos de mantenimiento y los partes de trabajo, Organilog planifica las intervenciones recurrentes y ofrece gamas de mantenimiento en Premium. Si tus contratos tienen sus particularidades (periodicidades por equipo, piezas incluidas, penalizaciones por plazo), una herramienta a medida planifica las visitas, genera el informe y factura el contrato a su vencimiento.',
      },
      {
        question: '¿Sirven estos programas para el mantenimiento de cocinas profesionales o de frío?',
        answer:
          'Sí, siempre que la ficha de equipo acepte tus datos (refrigerante, potencia, número de serie, fecha de instalación) y que el parte de intervención recoja tus puntos de control. Compruébalo en una demostración. Una herramienta a medida parte directamente de tus equipos y de tus lecturas obligatorias.',
      },
      {
        question: '¿Se pueden recuperar los datos de mi programa actual?',
        answer:
          'Si tu programa exporta tus clientes, sitios, equipos, contratos e intervenciones a Excel o CSV, los recupero en la nueva herramienta; está previsto en el presupuesto. Comprueba esta posibilidad de exportación antes de firmar con un editor.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para seguir leyendo',
    slugs: FIELD_SERVICE_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: '¿Dudas sobre la herramienta adecuada para tus técnicos?',
    description:
      'Cuéntame tus intervenciones en unas líneas. Te respondo en 24 horas, y si un programa del mercado te basta, te lo digo.',
    button: 'Hablar de mi proyecto',
  },
}
