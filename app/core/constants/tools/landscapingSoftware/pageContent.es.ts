import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  BIOWASTE_SORTING_SOURCE,
  GARDENING_HOME_SERVICES_SOURCE,
  HOME_SERVICES_TAX_CREDIT_SOURCE,
  LANDSCAPING_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  LANDSCAPING_PAGE_PROJECT_SLUG,
  LANDSCAPING_PAGE_RELATED_ARTICLE_SLUGS,
  LANDSCAPING_PAGE_SCREENSHOT_URL,
  LANDSCAPING_PAGE_UPDATED_AT,
  LANDSCAPING_TEMPLATE_PDF_PATH,
  LANDSCAPING_TEMPLATE_XLSX_PATH,
  LANDSCAPING_VAT_SOURCE,
  PESTICIDE_BAN_SOURCE,
} from '~/core/constants/tools/landscapingSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'

export const LANDSCAPING_PAGE_CONTENT_ES: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Software para paisajistas en Francia: presupuestos y precios',
    description:
      'Programas para paisajistas en Francia: precios 2026 (Robbin, Extrabat…), test gratuito en 6 preguntas y plantilla de presupuesto y contrato de mantenimiento.',
    inLanguage: 'es',
    schemaAbout: 'Software de gestión para paisajistas en Francia',
  },
  breadcrumbLabel: 'Software para paisajistas',
  shareImage: {
    titleLines: ['¿Qué software para', 'un paisajista?'],
    highlight: 'paisajista',
    subtitle:
      'Seis preguntas, los precios 2026 de los programas del mercado francés y una plantilla de contrato de mantenimiento gratuita',
    badge: 'Test gratuito, en 2 minutos',
    icon: 'leaf',
    alt: '¿Qué software para un paisajista? Test gratuito en 6 preguntas, precios 2026 de los programas en Francia y plantilla de presupuesto y de contrato de mantenimiento, en dibodev.fr',
  },
  hero: {
    titleBefore: '¿Qué software para tu empresa de ',
    titleHighlight: 'paisajismo',
    titleAfter: '?',
    description:
      'Seis preguntas sobre tu equipo, tus almacenes y tus obras. Creación de jardines, mantenimiento con contrato o pequeña jardinería en casa de particulares, a partir del mercado francés el test te dice qué tipo de programa elegir para tus presupuestos, tus contratos de mantenimiento y tus facturas, y cuánto prever.',
    reassurances: ['2 minutos', 'Sin registro ni e-mail', 'Resultado inmediato'],
    authorIntro: 'Test diseñado por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Creé desde cero un programa de seguimiento de horas por obra, que varias pymes siguen usando.',
    updatedAt: LANDSCAPING_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'programas',
    eyebrow: 'Precios públicos 2026',
    title: 'Comparativa de los programas para paisajistas en Francia y de sus precios',
    intro:
      'Las tarifas que los editores de programas para paisajistas, de construcción y de gestión de intervenciones muestran en su web. El precio depende sobre todo de los módulos elegidos y del número de usuarios.',
    productColumnLabel: 'Programa',
    coverageColumnLabel: 'Qué gestiona',
    priceColumnLabel: 'Precio público',
    products: [
      {
        name: 'Robbin',
        coverage:
          'Presupuestos y facturas para paisajistas, catálogo de obras, planificación, márgenes y tiempo de obra; contratos de mantenimiento en la oferta Pro; en el navegador, sin aplicación propia',
        price: `19 o 49${NBSP}€ al mes sin IVA`,
        priceCondition: `15 o 39${NBSP}€ al mes sin IVA pagando el año (180 o 468${NBSP}€ sin IVA al año); 1 usuario en Essentiel, 2 en Pro; 14 días de prueba sin tarjeta`,
      },
      {
        name: 'Extrabat Paysage',
        coverage:
          'Gestión completa para empresas de paisajismo, facturación electrónica incluida (vía Iopole); planificación de obras y contratos de servicio desde la oferta Standard, carga de trabajo en Premium',
        price: `49 a 99${NBSP}€ sin IVA por usuario al mes`,
        priceCondition: `Éco 49${NBSP}€, Standard 69${NBSP}€, Premium 99${NBSP}€, tarifa decreciente; sin permanencia`,
      },
      {
        name: 'Paysagio',
        coverage:
          'Programa pensado para paisajistas: registro de horas y rentabilidad por obra; cuentas de operarios gratuitas',
        price: `34,90 a 99,90${NBSP}€ al mes`,
        priceCondition: `Por cuenta, sin IVA: Gestionnaire 99,90${NBSP}€, Conducteur 49,90${NBSP}€, Chef d’équipe 34,90${NBSP}€; sin permanencia, 14 días de prueba sin tarjeta`,
      },
      {
        name: 'Tomas',
        coverage:
          'Programa de gestión para paisajistas, en dos ofertas (Essentiel y Expert chantier), con licencias para gestores y técnicos',
        price: `24,50 o 49,50${NBSP}€ al mes sin IVA`,
        priceCondition: `Licencia de gestor adicional 24,50${NBSP}€ sin IVA al mes, licencia de técnico 9,50${NBSP}€; sin permanencia, 15 días de prueba sin tarjeta`,
      },
      {
        name: 'Organilog',
        coverage:
          'Gestión de intervenciones para paisajistas: biblioteca de precios, planificación y contratos desde la oferta Pro, app móvil sin conexión; presupuestos y facturas desde la oferta Business',
        price: `19 a 64${NBSP}€ al mes por usuario`,
        priceCondition: `Oferta Basique gratuita; Business 35${NBSP}€, Premium 59${NBSP}€, Premium + Carte 64${NBSP}€; sin permanencia`,
      },
      {
        name: 'Batappli',
        coverage:
          'Presupuestos y facturas de construcción, con presupuestos de paisajista (terraza, plantaciones, valla); contratos de mantenimiento recurrentes en la oferta Artisan',
        price: `39 o 79${NBSP}€ al mes sin IVA`,
        priceCondition: `429 u 869${NBSP}€ sin IVA al año; 19${NBSP}€ sin IVA al mes por usuario adicional; 10 días de prueba`,
      },
    ],
    calloutEmphasizedIntro: 'Antes de firmar:',
    calloutText: `haz pasar una semana real por el programa. Un presupuesto de reforma de terraza de obra y de plantaciones para una casa de más de 2 años, con el IVA al 10${NBSP}% en la terraza y al 20${NBSP}% en las plantas, aceptado y planificado, un contrato de mantenimiento con sus visitas del año, las horas del equipo registradas en la obra, y luego la factura y el certificado fiscal de un cliente de servicios a domicilio.`,
    calloutFootnote:
      'Tarifas consultadas el 26 de octubre de 2026 en las webs de los editores. JardiSoft y Vertuoza funcionan con presupuesto. Lista no exhaustiva.',
  },
  rules: {
    anchorId: 'normativa',
    eyebrow: 'Francia en 2026',
    title: 'IVA, servicios a domicilio, fitosanitarios: lo que tu programa debe respetar en Francia en 2026',
    intro: `En Francia, el IVA al 10${NBSP}% o al 20${NBSP}% según la obra, el certificado fiscal de los clientes de servicios a domicilio, los fitosanitarios, los residuos verdes y la factura electrónica: las normas del paisajista pasan casi todas por sus presupuestos, sus contratos y sus facturas. Un buen programa los rellena por ti.`,
    facts: [
      {
        contextLabel: `IVA al 10${NBSP}% o al 20${NBSP}%`,
        title: 'El tipo de IVA correcto, obra por obra',
        text: `Crear o mantener un jardín se factura al 20${NBSP}%. Algunas obras anexas a una vivienda terminada hace más de 2 años bajan al 10${NBSP}%: muro de cerramiento (salvo setos vivos), portal, reforma de una terraza de obra, murete de protección, camino de acceso principal. Caseta, invernadero, pérgola, fuente, estanque, iluminación y piscina se quedan al 20${NBSP}%.`,
        sourceName: LANDSCAPING_VAT_SOURCE.name,
        sourceUrl: LANDSCAPING_VAT_SOURCE.url,
      },
      {
        contextLabel: 'Servicios a domicilio',
        title: 'Pequeña jardinería: una declaración y un certificado fiscal',
        text: 'El mantenimiento habitual de jardines, la poda de setos y árboles y el desbroce en casa de un particular pueden entrar en los servicios a domicilio franceses (services à la personne), con una simple declaración (NOVA), sin autorización. Cada cliente recibe entonces un certificado fiscal antes del 31 de marzo del año siguiente. La venta de plantas, el diseño y la creación de jardines, la poda en altura y los movimientos de tierra no entran.',
        sourceName: GARDENING_HOME_SERVICES_SOURCE.name,
        sourceUrl: GARDENING_HOME_SERVICES_SOURCE.url,
      },
      {
        contextLabel: `Hasta 5000${NBSP}€ de gastos al año`,
        title: `Un crédito fiscal del 50${NBSP}% para tus clientes`,
        text: `La pequeña jardinería pagada a una empresa declarada en servicios a domicilio da derecho al cliente a un crédito fiscal del 50${NBSP}% de sus gastos, con un límite de 5000${NBSP}€ al año por hogar (dentro del límite general de 12${NBSP}000${NBSP}€).`,
        sourceName: HOME_SERVICES_TAX_CREDIT_SOURCE.name,
        sourceUrl: HOME_SERVICES_TAX_CREDIT_SOURCE.url,
      },
      {
        contextLabel: 'Desde el 1 de julio de 2022',
        title: 'Se acabaron los fitosanitarios en casa de los particulares',
        text: 'Los productos fitosanitarios están prohibidos en las propiedades privadas de uso residencial y sus espacios exteriores, salvo los productos de biocontrol, de bajo riesgo o autorizados en agricultura ecológica. Donde siguen permitidos, su uso profesional exige el Certiphyto, válido 5 años.',
        sourceName: PESTICIDE_BAN_SOURCE.name,
        sourceUrl: PESTICIDE_BAN_SOURCE.url,
      },
      {
        contextLabel: 'Desde el 1 de enero de 2024',
        title: 'Los residuos verdes, separados en origen',
        text: `Todos los profesionales separan sus biorresiduos en origen, residuos verdes incluidos. Quemar residuos verdes está prohibido (multa de 750${NBSP}€), y el registro cronológico de residuos se conserva 3 años.`,
        sourceName: BIOWASTE_SORTING_SOURCE.name,
        sourceUrl: BIOWASTE_SORTING_SOURCE.url,
      },
      {
        contextLabel: '1 de septiembre de 2027',
        title: 'La factura electrónica',
        text: 'Todas las empresas francesas sujetas al IVA deben poder recibir facturas electrónicas desde el 1 de septiembre de 2026; las pymes y las microempresas deberán emitirlas a partir del 1 de septiembre de 2027, y transmitir los datos de sus ventas a particulares (e-reporting).',
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'Lo que la herramienta a medida no sustituye:',
    calloutText:
      'tu programa de contabilidad, ni un programa de diseño de jardines (planos, 3D). Las facturas van a tu contabilidad (exportación o Factur-X), y la herramienta importa las tarifas de tus viveros y proveedores.',
  },
  freeTemplate: {
    anchorId: 'plantilla',
    eyebrow: 'Plantilla gratuita',
    title: 'Un presupuesto de paisajismo y un contrato de mantenimiento listos para rellenar',
    description: `El presupuesto de paisajismo con el IVA línea por línea, al 10${NBSP}% para las obras elegibles anexas a una vivienda de más de 2 años y al 20${NBSP}% para las plantaciones y el mantenimiento; el contrato de mantenimiento de jardín con las prestaciones, el número de visitas, el periodo, el precio, su revisión y la rescisión. En francés, en PDF para rellenar a mano o en Excel con los totales calculados.`,
    items: [
      `Presupuesto: obras y plantas, cantidades, precios unitarios, IVA por línea, anticipo, plazo de validez, certificación del cliente para el IVA al 10${NBSP}%`,
      'Contrato de mantenimiento: siega, poda, recogida de hojas, número de visitas, periodo, importe anual y mensualidades, revisión del precio, rescisión',
      `Menciones útiles: crédito fiscal del 50${NBSP}% si la empresa está declarada en servicios a domicilio, presupuesto gratuito desde 100${NBSP}€ con IVA al mes, sin fitosanitarios en casa de particulares`,
    ],
    downloads: [
      {
        label: 'Descargar la plantilla PDF',
        href: LANDSCAPING_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: LANDSCAPING_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 hojas, totales calculados, en francés',
      },
    ],
    footnote:
      'De uso libre, para adaptar a tu empresa. No sustituye el consejo de tu contable ni la comprobación de que puedes acogerte a los servicios a domicilio.',
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
          { state: 'yes', text: `15 a 99,90${NBSP}€ sin IVA al mes, según los módulos y los usuarios` },
          { state: 'partial', text: `Tu suscripción, más 2500 a 7000${NBSP}€ una sola vez` },
          {
            state: 'partial',
            text: `5000 a 25${NBSP}000${NBSP}€ una sola vez, más 100 a 300${NBSP}€ al mes de mantenimiento`,
          },
        ],
      },
      {
        label: 'Presupuestos, contratos de mantenimiento, facturas',
        cells: [
          { state: 'yes', text: 'Incluidos, los contratos a menudo en las ofertas intermedias' },
          { state: 'yes', text: 'Se quedan en tu programa actual' },
          { state: 'yes', text: 'Diseñados en torno a tus obras, tus contratos y tus visitas' },
        ],
      },
      {
        label: 'Tus reglas: contratos, visitas, equipos',
        cells: [
          { state: 'partial', text: 'Dentro de los ajustes previstos por el editor' },
          { state: 'yes', text: 'En los puntos que añade el complemento' },
          { state: 'yes', text: 'Diseñada en torno a tu organización' },
        ],
      },
      {
        label: 'Solicitudes de presupuesto y de mantenimiento en tu web',
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
    rowsShownOnSmallScreens: LANDSCAPING_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: LANDSCAPING_PAGE_PROJECT_SLUG,
    screenshotUrl: LANDSCAPING_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Ya realizado',
    title: 'Un programa de seguimiento de horas por obra, ya en producción',
    description:
      'Gest-Time es el programa de tiempo de trabajo que creé desde cero en Kodeva, durante mis años de formación dual. Los equipos registran sus horas por proyecto o por obra en una tableta, y los responsables las validan cada semana. El mismo principio sirve para seguir el tiempo que tus equipos dedican a cada obra de paisajismo y a cada visita de mantenimiento.',
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
    title: 'Software para paisajistas: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta un programa para paisajistas en Francia?',
        answer: `Robbin cuesta 19 o 49${NBSP}€ sin IVA al mes (15 o 39${NBSP}€ pagando el año), Extrabat Paysage 49 a 99${NBSP}€ sin IVA por usuario al mes, Paysagio 34,90 a 99,90${NBSP}€ sin IVA al mes según la cuenta (cuentas de operarios gratuitas), Tomas 24,50 o 49,50${NBSP}€ sin IVA al mes, Organilog 19 a 64${NBSP}€ al mes por usuario y Batappli 39 o 79${NBSP}€ sin IVA al mes; JardiSoft y Vertuoza funcionan con presupuesto (tarifas consultadas el 26 de octubre de 2026). Un complemento a medida cuesta de 2500 a 7000${NBSP}€ una sola vez, una herramienta completa de 5000 a 25${NBSP}000${NBSP}€, y luego 100 a 300${NBSP}€ al mes de mantenimiento.`,
      },
      {
        question: '¿Qué programa de presupuestos y facturación para un paisajista en Francia?',
        answer: `Un programa de facturación generalista hace presupuestos y facturas, pero le faltan la biblioteca de obras y plantas, el IVA al 10${NBSP}% en las obras elegibles, los contratos de mantenimiento y, en servicios a domicilio, los certificados fiscales. Los programas para paisajistas parten de estas necesidades: Robbin tiene un catálogo de obras y gestiona los contratos en la oferta Pro, Extrabat Paysage los contratos de servicio desde la oferta Standard, y JardiSoft (con presupuesto) anuncia 7000 plantas y 1000 materiales. Una empresa con varios equipos necesita además la planificación y las horas por obra en el móvil, en Paysagio, Organilog o en una herramienta a medida.`,
      },
      {
        question: '¿Existe un programa gratuito para paisajistas?',
        answer: `Organilog tiene una oferta Basique gratuita, pero los presupuestos y las facturas empiezan en la oferta Business (35${NBSP}€ al mes por usuario). Robbin, Paysagio y Kwixéo ofrecen 14 días de prueba sin tarjeta bancaria, Tomas 15 días, Batappli 10 días. Un programa de facturación gratuito puede sacar de un apuro al principio, pero sin biblioteca de plantas, sin contratos de mantenimiento ni certificados fiscales.`,
      },
      {
        question: '¿Cómo gestionar los contratos de mantenimiento de jardín?',
        answer: `El contrato fija las prestaciones (siega, poda, recogida de hojas), el número de visitas, el periodo, el precio, su revisión y la rescisión. El programa saca de él las visitas del año en la planificación y factura al ritmo acordado, cada mes o tras cada visita. Robbin los gestiona en la oferta Pro, Extrabat Paysage desde la oferta Standard, Organilog desde la oferta Pro, JardiSoft factura los contratos según su frecuencia, y Prospecto (29${NBSP}€ al mes) se dirige a las empresas de zonas verdes de 1 a 5 personas. La plantilla gratuita de esta página incluye un contrato listo para rellenar.`,
      },
      {
        question: '¿Qué IVA en un presupuesto de paisajista en Francia?',
        answer: `20${NBSP}% para la creación y el mantenimiento de jardines, las plantaciones y la pequeña jardinería en servicios a domicilio (tipo general desde el 1 de julio de 2013). 10${NBSP}% para algunas obras anexas a una vivienda terminada hace más de 2 años: muro de cerramiento (salvo setos vivos), portal, reforma de una terraza de obra, murete de protección, camino de acceso principal; el cliente certifica entonces en el presupuesto o la factura que se cumplen las condiciones. Caseta, invernadero, pérgola, fuente, estanque, iluminación y piscina se quedan al 20${NBSP}%. En un presupuesto que mezcla los dos tipos, indica el IVA de cada línea y el total por tipo.`,
      },
      {
        question: '¿Cómo hacer los certificados fiscales de los clientes de servicios a domicilio?',
        answer: `Si tu empresa está declarada en servicios a domicilio (declaración NOVA, sin autorización), entregas a cada cliente un certificado fiscal antes del 31 de marzo del año siguiente. Le permite obtener un crédito fiscal del 50${NBSP}% sobre la pequeña jardinería, con un límite de 5000${NBSP}€ de gastos al año por hogar. Solo cuentan el mantenimiento habitual, la poda de setos y árboles y el desbroce, no la creación de jardines, la poda en altura ni los movimientos de tierra: tu programa debe separar estas prestaciones en tus facturas. Una empresa de paisajismo de cada cinco hace servicios a domicilio (20,5${NBSP}% según la UNEP, la federación francesa del paisaje).`,
      },
      {
        question: '¿Se pueden seguir usando fitosanitarios en casa de un particular en Francia?',
        answer:
          'No, salvo excepciones: desde el 1 de julio de 2022, los productos fitosanitarios están prohibidos en las propiedades privadas de uso residencial y sus espacios exteriores, salvo los productos de biocontrol, de bajo riesgo o autorizados en agricultura ecológica. Donde siguen permitidos, su uso profesional exige el Certiphyto, válido 5 años. Tu programa puede guardar el Certiphyto de cada empleado con su fecha de caducidad.',
      },
      {
        question: '¿Es obligatorio el presupuesto para un paisajista en Francia?',
        answer: `La obligación de presupuesto antes de una avería, fijada en 2017 para los trabajos de construcción (albañilería, cubiertas, fontanería…), no se aplica a la jardinería. En servicios a domicilio, en cambio, el presupuesto es obligatorio y gratuito desde 100${NBSP}€ con IVA al mes, con 12 menciones. Para una obra de albañilería (murete, terraza), como para cualquier obra de paisajismo, un presupuesto detallado y firmado sigue siendo la mejor protección.`,
      },
      {
        question: '¿Cómo seguir las horas y la rentabilidad de cada obra?',
        answer:
          'Los equipos registran sus horas en el móvil, obra por obra, y el programa compara el tiempo dedicado con el previsto en el presupuesto. Paysagio destaca el registro de horas y la rentabilidad por obra, Robbin los márgenes y el tiempo de obra (en el navegador, sin aplicación propia), y JardiSoft una aplicación de campo para las horas y la firma. Si tus equipos trabajan sin cobertura, comprueba el modo sin conexión: Organilog lo anuncia; en una herramienta a medida, está previsto desde el presupuesto.',
      },
      {
        question: 'Programa de diseño 3D o programa de gestión: ¿cuál elegir?',
        answer:
          'No son las mismas herramientas. Los programas de diseño (Planner 5D, Lumion, las herramientas de Autodesk…) dibujan el jardín en plano o en 3D para presentárselo al cliente. Los programas de gestión comparados en esta página hacen los presupuestos, los contratos de mantenimiento, la planificación y las facturas: sobre ellos trata el test.',
      },
      {
        question: '¿Se pueden recuperar los datos de mi programa actual?',
        answer:
          'Si tu programa exporta tus clientes, contratos, obras y facturas a Excel o CSV, los recupero en la nueva herramienta; está previsto en el presupuesto. Comprueba esta posibilidad de exportación antes de firmar con un editor.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para seguir leyendo',
    slugs: LANDSCAPING_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: '¿Dudas sobre la herramienta adecuada para tu empresa?',
    description:
      'Cuéntame tu actividad en unas líneas. Te respondo en 24 horas, y si un programa del mercado te basta, te lo digo.',
    button: 'Hablar de mi proyecto',
  },
}
