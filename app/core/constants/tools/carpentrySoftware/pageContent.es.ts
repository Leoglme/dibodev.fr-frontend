import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  BUILDER_WARRANTIES_SOURCE,
  CARPENTRY_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  CARPENTRY_PAGE_PROJECT_SLUG,
  CARPENTRY_PAGE_RELATED_ARTICLE_SLUGS,
  CARPENTRY_PAGE_SCREENSHOT_URL,
  CARPENTRY_PAGE_UPDATED_AT,
  CARPENTRY_TEMPLATE_PDF_PATH,
  CARPENTRY_TEMPLATE_XLSX_PATH,
  CUSTOM_WINDOW_WITHDRAWAL_SOURCE,
  MAPRIMERENOV_SOURCE,
  REDUCED_VAT_CUSTOMER_STATEMENT_SOURCE,
} from '~/core/constants/tools/carpentrySoftware/pageShared'
import { E_INVOICING_SOURCE, HOME_REPAIR_QUOTE_RULES_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'
import { CARPENTRY_CUTTING_LIST_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/carpentryCuttingList/pageShared'

export const CARPENTRY_PAGE_CONTENT_ES: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Software de carpintería en Francia: precios 2026',
    description:
      'Programas de carpintería en Francia: precios 2026 (Obat, ProDevis, Anodos, Aléker…), test gratuito en 6 preguntas y plantilla de presupuesto y despiece.',
    inLanguage: 'es',
    schemaAbout: 'Programa de gestión para carpinterías, instaladores de ventanas y de mobiliario a medida en Francia',
  },
  breadcrumbLabel: 'Software para carpinterías',
  shareImage: {
    titleLines: ['¿Qué software', 'para tu carpintería?'],
    highlight: 'carpintería',
    subtitle:
      'Seis preguntas, los precios 2026 de los programas de carpintería en Francia y una plantilla de presupuesto y despiece gratuita',
    badge: 'Test gratuito, en 2 minutos',
    icon: 'hammer',
    alt: '¿Qué software para tu carpintería? Test gratuito en 6 preguntas, precios 2026 de los programas de carpintería en Francia y plantilla de presupuesto con mediciones y hoja de despiece, en dibodev.fr',
  },
  hero: {
    titleBefore: '¿Qué software para tu ',
    titleHighlight: 'carpintería',
    titleAfter: '?',
    description:
      'Seis preguntas sobre tu taller, tus instaladores y lo que te quita tiempo. Instalación de ventanas, mobiliario a medida, cocinas o carpintería de madera, a partir del mercado francés el test te dice qué tipo de programa elegir para tus presupuestos, tus hojas de despiece, la planificación del taller y de las instalaciones y tus facturas, y cuánto prever.',
    reassurances: ['2 minutos', 'Sin registro ni e-mail', 'Resultado inmediato'],
    authorIntro: 'Test diseñado por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. En Kodeva creé desde cero un programa de seguimiento de horas por obra, que varias pymes siguen usando.',
    updatedAt: CARPENTRY_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'programas',
    eyebrow: 'Precios públicos 2026',
    title: 'Comparativa de los programas de carpintería en Francia y de sus precios',
    intro:
      'Tres familias se reparten el oficio: los programas de presupuestos de obra, los especialistas de la carpintería (presupuestos con las tarifas de los fabricantes, planificación de fabricación e instalación) y los programas de diseño y despiece. Estas son las tarifas que muestran los editores. No he encontrado ninguno que una por sí solo las mediciones, el presupuesto, la hoja de despiece, el plan de corte, las horas de taller y de instalación y el margen de la obra.',
    productColumnLabel: 'Programa',
    coverageColumnLabel: 'Qué gestiona',
    priceColumnLabel: 'Precio público',
    products: [
      {
        name: 'Obat',
        coverage: `Presupuestos y facturas ilimitados, 30${NBSP}000 partidas de obra, factura electrónica (a través de Iopole); rentabilidad por obra, control del tiempo y planificación en la oferta Croissance`,
        price: `49 a 129${NBSP}€ sin IVA al mes`,
        priceCondition: `Pro, Croissance o Booster para un profesional sujeto al IVA, 39 a 109${NBSP}€ sin IVA al mes pagando el año; 25 a 95${NBSP}€ sin IVA para una microempresa no sujeta; licencia adicional 20${NBSP}€ sin IVA al mes; sin compromiso en la modalidad mensual`,
      },
      {
        name: 'Batappli',
        coverage:
          'Presupuestos asistidos por IA (8 o 16 al mes), anticipos, certificaciones de obra, planificación; seguimiento de obra y pago en línea en la oferta Artisan',
        price: `39 o 79${NBSP}€ sin IVA al mes`,
        priceCondition: `Devis o Artisan, 429 o 869${NBSP}€ sin IVA al año; 19${NBSP}€ al mes por usuario adicional; 10 días de prueba`,
      },
      {
        name: 'Sage Batigest Connect',
        coverage:
          'Estudios de precios y bibliotecas de partidas, seguimiento de obra simplificado (Standard) o avanzado (Premium); tarifas de 700 fabricantes con el módulo Sage e-tarif; solo Windows',
        price: `36,08 a 122,25${NBSP}€ sin IVA al mes`,
        priceCondition: `Essentials (1 usuario), Standard 55,33${NBSP}€ (hasta 10), Premium (hasta 50); demostración`,
      },
      {
        name: 'ProDevis START (Elcia)',
        coverage:
          'Presupuestos con las tarifas de los fabricantes («más de 2000 tarifas de 650 fabricantes»), varios proveedores, pedidos; sin facturas (versión completa de ProDevis, precio no publicado)',
        price: `75${NBSP}€ sin IVA al mes`,
        priceCondition: 'Se puede cancelar en cualquier momento, sin prueba anunciada',
      },
      {
        name: 'Anodos',
        coverage:
          'Presupuestos y facturas electrónicas, pedidos a proveedores, planificación de fabricación e instalación, facturación por hitos; seguimiento de reservas, diagrama de Gantt y fichaje por GPS en la oferta Pro',
        price: `19 o 49${NBSP}€ al mes`,
        priceCondition: `Sin precisar si lleva IVA; Starter (1 usuario, 5 proyectos activos) o Pro (5 usuarios), 14 o 36${NBSP}€ al mes pagando el año; Business 73${NBSP}€ al mes pagando el año (15 usuarios); 30 días de prueba sin tarjeta, sin compromiso`,
      },
      {
        name: 'Aléker',
        coverage:
          'CAD 3D paramétrico para carpintería; despieces automáticos, coste desglosado y exportación a 10 optimizadores (Pro); exportaciones para máquinas Biesse y Homag (Pro CN)',
        price: `3590${NBSP}€, luego 79 a 169${NBSP}€ al mes`,
        priceCondition: `Licencia de 3590${NBSP}€ sin IVA más alquiler obligatorio (Basic 79, Pro 109, Pro CN 169${NBSP}€ sin IVA al mes); compromiso inicial de 12 meses, 8 horas de formación incluidas; demostración de una hora`,
      },
      {
        name: 'MaxCut',
        coverage:
          'Listas de corte y optimización del corte de tableros, cantos, taladros, coste de corte y de mano de obra',
        price: 'Gratis (Community)',
        priceCondition: `Business 20${NBSP}USD sin impuestos al mes o 200${NBSP}USD al año, por dispositivo; ninguna prueba mencionada`,
      },
      {
        name: 'EBP Bâtiment, HerculePro, Cabinet Vision, Codial',
        coverage:
          'Gestión de empresas de construcción (EBP Bâtiment, Codial), presupuestos con «+1800 catálogos» de fabricantes (HerculePro), diseño y fabricación para interioristas, cocinas y fabricantes de armarios (Cabinet Vision)',
        price: 'Bajo presupuesto',
        priceCondition: 'Tarifas no publicadas, demostración',
      },
    ],
    calloutEmphasizedIntro: 'Antes de firmar:',
    calloutText:
      'haz pasar una obra real por el programa. Las mediciones de un vestidor o de tres ventanas, el presupuesto con una variante y la mención del IVA firmada por el cliente, el pedido al proveedor, la hoja de despiece y el plan de corte, las horas de taller y de instalación, el anticipo y luego la factura final, y al final el margen de la obra, sin volver a teclear nada.',
    calloutFootnote:
      'Tarifas consultadas el 1 de noviembre de 2026 en las páginas de precios de los editores. Lista no exhaustiva.',
  },
  rules: {
    anchorId: 'normativa',
    eyebrow: 'Francia en 2026',
    title:
      'Presupuesto, IVA, desistimiento, garantías: lo que tu programa de carpintería debe seguir en Francia en 2026',
    intro:
      'En Francia, el presupuesto antes de una reparación, la mención del IVA por el cliente, el desistimiento de las ventanas instaladas, las garantías, las ayudas a la renovación y la factura electrónica: en carpintería, las normas de 2026 pasan por tus presupuestos, tus actas de recepción y tus facturas. Un buen programa las rellena por ti.',
    facts: [
      {
        contextLabel: 'Orden del 24 de enero de 2017',
        title: 'Un presupuesto antes de cualquier reparación en casa de un particular',
        text: 'Reparación, arreglo o mantenimiento en carpintería, puertas de garaje y portones eléctricos incluidos: el presupuesto detallado se entrega antes de los trabajos, sea cual sea el importe, con los precios sin IVA y con IVA y su plazo de validez. Tus presupuestos y facturas indican también tu seguro profesional: nombre y dirección de la aseguradora, cobertura geográfica (ley del 5 de julio de 1996, artículo 22-2).',
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: `IVA del 10${NBSP}% y del 5,5${NBSP}%`,
        title: 'Sin certificado: una mención del cliente en el presupuesto',
        text: `El certificado de IVA, simplificado o no, ha desaparecido: para obras en una vivienda terminada hace más de dos años, el cliente certifica las condiciones del tipo reducido con una mención en el presupuesto o en la factura. La doctrina fiscal francesa (BOFiP) publica los modelos, para el 10${NBSP}% y para el 5,5${NBSP}% de las obras de renovación energética.`,
        sourceName: REDUCED_VAT_CUSTOMER_STATEMENT_SOURCE.name,
        sourceUrl: REDUCED_VAT_CUSTOMER_STATEMENT_SOURCE.url,
      },
      {
        contextLabel: 'Contrato firmado en casa del cliente',
        title: 'Ventanas a medida instaladas: 14 días de desistimiento',
        text: 'Para la venta e instalación de ventanas, persianas o puertas a medida firmadas fuera de tu establecimiento, la DGCCRF (autoridad francesa de consumo) descarta la excepción de los bienes hechos a medida: el cliente tiene 14 días para desistir, contados desde la recepción de los bienes (puede hacerlo desde la firma), y no puedes recibir ningún pago antes de 7 días.',
        sourceName: CUSTOM_WINDOW_WITHDRAWAL_SOURCE.name,
        sourceUrl: CUSTOM_WINDOW_WITHDRAWAL_SOURCE.url,
      },
      {
        contextLabel: 'En la recepción de la obra',
        title: 'El acta de recepción pone en marcha las garantías',
        text: 'Perfecto acabado (1 año, reservas del acta incluidas), bienal (2 años, equipos separables) y decenal (10 años, solidez de la obra y de sus elementos inseparables, como los marcos de puertas y ventanas): las tres garantías empiezan en la recepción (réception). El acta fechada y firmada es la prueba.',
        sourceName: BUILDER_WARRANTIES_SOURCE.name,
        sourceUrl: BUILDER_WARRANTIES_SOURCE.url,
      },
      {
        contextLabel: 'MaPrimeRénov’',
        title: 'Ventanas: sin ayuda «por gesto» en la Francia metropolitana',
        text: 'El itinerario «par geste» (por gesto) de MaPrimeRénov’, la ayuda francesa a la renovación, ya no financia la sustitución de ventanas en la Francia metropolitana. Las ventanas siguen siendo una de las cuatro partidas de «envolvente» de la renovación integral, y la ayuda exige un profesional con certificación RGE.',
        sourceName: MAPRIMERENOV_SOURCE.name,
        sourceUrl: MAPRIMERENOV_SOURCE.url,
      },
      {
        contextLabel: '1 de septiembre de 2027',
        title: 'La factura electrónica',
        text: 'Todas las empresas francesas deben poder recibir facturas electrónicas desde el 1 de septiembre de 2026; las pymes y las microempresas deberán emitirlas a partir del 1 de septiembre de 2027.',
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'Lo que la herramienta a medida no sustituye:',
    calloutText:
      'tu programa de CAD, ni los catálogos de tus fabricantes, ni tu contabilidad. Los planos y los despieces se quedan en tu CAD, las tarifas en tus fabricantes, y la herramienta recoge lo que exportan para unirlo a tus presupuestos, tus horas y tus facturas.',
  },
  freeTemplate: {
    anchorId: 'plantilla',
    eyebrow: 'Plantilla gratuita',
    title: 'Un presupuesto con mediciones, una hoja de despiece y un plan de corte listos para rellenar',
    description:
      'El presupuesto de carpintería con las mediciones de cada partida, el suministro, el taller y la instalación, el IVA por línea con la mención del cliente y el bloque de desistimiento de un contrato firmado en su casa; el acta de recepción que pone en marcha las garantías. En francés: el PDF (presupuesto y acta) se imprime; el Excel calcula los totales del presupuesto, el coste del material de la hoja de despiece y un plan de corte sencillo de los tableros.',
    items: [
      'Presupuesto: referencia, partida, material, medidas, cantidad, suministro, horas de taller y de instalación, variantes y opciones, IVA por línea, anticipo, seguro decenal',
      `Hoja de despiece y plan de corte (Excel): creces de 10${NBSP}cm en longitud y 10${NBSP}mm en anchura, 30${NBSP}% de merma por defecto, coste del material, grosor de corte de la sierra, dirección de la veta, retales reutilizables`,
      'Acta de recepción: reservas, levantamiento de las reservas, firmas y fecha de inicio de las garantías de 1, 2 y 10 años',
    ],
    downloads: [
      {
        label: 'Descargar la plantilla PDF',
        href: CARPENTRY_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, presupuesto y acta de recepción, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: CARPENTRY_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 hojas, totales y despiece calculados, en francés',
      },
    ],
    footnote:
      'De uso libre, para adaptar a tu empresa. No sustituye ni a tu programa de CAD ni al consejo de tu asesor contable.',
    pageLinkLabel: 'Ver la página de la plantilla',
    pageLinkRouteName: CARPENTRY_CUTTING_LIST_TEMPLATE_ROUTE_NAME,
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
          {
            state: 'yes',
            text: `14 a 129${NBSP}€ al mes según el editor; un CAD como Aléker añade una licencia de 3590${NBSP}€ sin IVA`,
          },
          { state: 'partial', text: `Tu suscripción, más 2500 a 7000${NBSP}€ una sola vez` },
          {
            state: 'partial',
            text: `5000 a 25${NBSP}000${NBSP}€ una sola vez, más 100 a 300${NBSP}€ al mes de mantenimiento`,
          },
        ],
      },
      {
        label: 'Presupuestos, pedidos, facturas',
        cells: [
          { state: 'yes', text: 'Incluidos en los programas de construcción y de carpintería' },
          { state: 'yes', text: 'Se quedan en tu programa actual' },
          { state: 'yes', text: 'Diseñados en torno a tus partidas, tus variantes y tus tarifas horarias' },
        ],
      },
      {
        label: 'De las mediciones al margen: presupuesto, despiece, horas de taller y de instalación',
        cells: [
          { state: 'partial', text: 'Repartido entre varios programas (CAD, presupuestos, hoja de horas)' },
          { state: 'yes', text: 'El complemento une tus herramientas' },
          { state: 'yes', text: 'Una sola herramienta, de las mediciones al margen de cada obra' },
        ],
      },
      {
        label: 'Tus reglas: partidas propias, tarifas por máquina, reservas tras la instalación',
        cells: [
          { state: 'partial', text: 'Dentro de los ajustes previstos por el editor' },
          { state: 'yes', text: 'En los puntos que añade el complemento' },
          { state: 'yes', text: 'Diseñada en torno a tu organización' },
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
    rowsShownOnSmallScreens: CARPENTRY_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: CARPENTRY_PAGE_PROJECT_SLUG,
    screenshotUrl: CARPENTRY_PAGE_SCREENSHOT_URL,
    showBrowserFrame: false,
    eyebrow: 'Ya realizado',
    title: 'El tiempo dedicado a cada obra, ya contado en un programa en producción',
    description:
      'Gest-Time es el programa de control del tiempo que creé desde cero en Kodeva, durante mis años de formación dual, para pymes de 20 a 200 empleados; sigue en producción. Cada uno registra sus horas por día y por proyecto, tarea u obra, en una tableta o en el móvil, y su responsable las valida cada semana. No es un programa de carpintería. Pero el precio de coste de una obra tiene dos mitades: el material, que se lee en las facturas de los proveedores, y las horas de taller y de instalación, que hay que contar. Gest-Time ya hace la segunda.',
    highlights: [
      'Horas registradas al cuarto de hora, por día y por obra, proyecto o tarea',
      'Validación semanal, alertas de anomalías y seguimiento de las ausencias',
      'Costes horarios y kilómetros, exportaciones a Excel y PDF',
    ],
    linkLabel: 'Ver el proyecto Gest-Time',
    imageAlt:
      'Gest-Time en el móvil: la vista del día con las tareas y las ausencias, y el teclado para registrar las horas al cuarto de hora',
    browserBarCaption: 'Gest-Time · registro de las horas del día',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Software de carpintería: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta un programa de carpintería en Francia?',
        answer: `Para presupuestos y facturas, cuenta con 25${NBSP}€ sin IVA al mes en Tolteck (19${NBSP}€ pagando el año), 49 a 129${NBSP}€ sin IVA en Obat (39 a 109${NBSP}€ pagando el año), 39 o 79${NBSP}€ sin IVA en Batappli y 36,08 a 122,25${NBSP}€ sin IVA en Sage Batigest Connect. Los especialistas de la carpintería muestran 75${NBSP}€ sin IVA al mes para ProDevis START y 19 a 49${NBSP}€ al mes en Anodos (14 a 36${NBSP}€ pagando el año, sin precisar si con o sin IVA). El CAD Aléker cuesta una licencia de 3590${NBSP}€ sin IVA más 79 a 169${NBSP}€ sin IVA al mes, y MaxCut es gratis en su versión Community (tarifas consultadas el 1 de noviembre de 2026). Un complemento a medida cuesta de 2500 a 7000${NBSP}€ una sola vez, una herramienta completa de 5000 a 25${NBSP}000${NBSP}€, y luego 100 a 300${NBSP}€ al mes de mantenimiento.`,
      },
      {
        question: '¿Qué programa de presupuestos para una carpintería?',
        answer: `Depende de dónde salen tus presupuestos. Si revendes ventanas, persianas y puertas, un programa que presupuesta con las tarifas de los fabricantes te evita copiar los catálogos: ProDevis START anuncia «más de 2000 tarifas de 650 fabricantes», HerculePro «+1800 catálogos», Sage Batigest Connect 700 fabricantes con su módulo e-tarif. Si presupuestas por mediciones con tus propias partidas, basta un programa de presupuestos de obra (Obat anuncia 30${NBSP}000 partidas, Tolteck una biblioteca de partidas, Batappli presupuestos asistidos por IA). Si partes de un plano 3D, un CAD que calcula el coste desglosado, como Aléker en su versión Pro, presupuesta desde el dibujo.`,
      },
      {
        question: '¿Existe un programa de carpintería gratuito?',
        answer:
          'Para el corte, sí: MaxCut tiene una versión Community gratuita, y CutList Optimizer una fórmula gratuita limitada en número de cálculos. Para los presupuestos, Costructor ofrece una fórmula Starter gratuita, y varios editores de pago se pueden probar gratis (30 días sin tarjeta en Anodos, un mes en Tolteck, 15 días en INFast). SketchUp no muestra ninguna versión gratuita en su página de precios. Para empezar, la plantilla gratuita de esta página (presupuesto con mediciones, hoja de despiece y plan de corte sencillo, en PDF y en Excel, en francés) saca de un apuro a un taller, sin planificación ni factura electrónica.',
      },
      {
        question: '¿Se puede optimizar el corte de tableros en Excel?',
        answer: `Para una estimación, sí: la hoja «Plan de coupe» de la plantilla Excel de esta página calcula, pieza por pieza, cuántas caben en un tablero teniendo en cuenta el grosor de corte de la sierra y la dirección de la veta, cuántos tableros comprar y qué retales son lo bastante grandes para reutilizarse. Para una optimización real que mezcle piezas en un mismo tablero, un optimizador lo hace mejor: CutList Optimizer (gratis con un límite de cálculos, luego 15 o 25${NBSP}€ al mes) o MaxCut (gratis, Business a 20${NBSP}USD sin impuestos al mes). La Menuiserie de l’Auxois adoptó así OptiCoupe para sus planes de corte de tableros y listones, con menos retales y menos manipulación según Prévention BTP. Boole & Partners no publica sus precios, y un revendedor británico vende OptiCut de 545 a 3445${NBSP}€ (sin precisar si con o sin IVA).`,
      },
      {
        question: '¿Qué programa de diseño para un carpintero de interiores?',
        answer: `Para dibujar los muebles y sacar los despieces, hay muchos programas de diseño y fabricación de carpintería: SketchUp (Go 10,75${NBSP}USD, Pro 33,25${NBSP}USD y Studio 71,58${NBSP}USD al mes, facturados al año, sin impuestos), Aléker (licencia de 3590${NBSP}€ sin IVA más 79 a 169${NBSP}€ sin IVA al mes, exportaciones Biesse y Homag en la versión Pro CN), PolyBoard de Boole & Partners (2445 a 4695${NBSP}€ en un revendedor británico, sin precisar si con o sin IVA, sin precio en el editor) o Cabinet Vision, bajo presupuesto, para interioristas, cocinas y fabricantes de armarios. Diseñan y despiezan; el presupuesto, la planificación de las instalaciones y la factura suelen hacerse en un segundo programa. Antes de elegir, comprueba que la lista de despiece se exporta, en Excel o en CSV, a tu programa de presupuestos.`,
      },
      {
        question: '¿Qué IVA en un presupuesto de carpintería en Francia, y sigue haciendo falta un certificado?',
        answer: `El certificado de IVA, simplificado o no, ya no existe. Para aplicar el 10${NBSP}% (artículo 279-0 bis del código tributario francés) o el 5,5${NBSP}% para obras de renovación energética (artículo 278-0 bis A), el cliente certifica las condiciones con una mención en el presupuesto o en la factura, de la que el BOFiP publica modelos (BOI-LETTRE-000280). Si no, se aplica el tipo general del 20${NBSP}%. Los criterios técnicos que abren el 5,5${NBSP}% a una ventana se comprueban con tu proveedor o tu asesor contable; la plantilla de presupuesto de esta página incluye la mención, lista para firmar.`,
      },
      {
        question: '¿Puede un cliente anular un pedido de ventanas a medida firmado en su casa?',
        answer:
          'Sí. Según la DGCCRF, un contrato firmado fuera del establecimiento para la venta e instalación de ventanas, persianas o puertas a medida no entra en la excepción de los bienes «confeccionados según las especificaciones del consumidor»: el cliente tiene 14 días para desistir. El plazo corre desde la recepción de los bienes, pero el cliente puede desistir desde la firma, y no puedes recibir ningún pago antes de 7 días. Tu presupuesto firmado en casa del cliente debe preverlo, y el anticipo esperar a que terminen esos 7 días.',
      },
      {
        question: '¿Qué garantías después de la instalación, y desde cuándo?',
        answer:
          'Tres garantías empiezan en la recepción de la obra: la garantía de perfecto acabado (1 año, para las reservas anotadas en el acta y los defectos aparecidos durante el año), la garantía bienal (2 años, para los equipos separables) y la garantía decenal (10 años, para lo que compromete la solidez de la obra o la hace inadecuada para su uso; Service-Public cita los marcos de puertas y ventanas entre los elementos inseparables). El acta de recepción, fechada y firmada, fija ese punto de partida: es la página 2 de la plantilla gratuita, con las reservas y su levantamiento.',
      },
      {
        question: '¿Siguen financiadas las ventanas por MaPrimeRénov’?',
        answer: `Ya no en el itinerario «par geste» (por gesto) en la Francia metropolitana: la sustitución de ventanas ya no figura en él. Sigue siendo una de las cuatro partidas de «envolvente» de MaPrimeRénov’ renovación integral, donde cada partida elegida debe abarcar al menos el 25${NBSP}% de las superficies de la vivienda. En los dos itinerarios, la ayuda exige un profesional con certificación RGE (Service-Public, página verificada el 1 de septiembre de 2026).`,
      },
      {
        question: 'Polvo de madera: ¿qué obligaciones para el taller?',
        answer: `El polvo de madera está clasificado como cancerígeno (grupo 1 del CIRC), sea cual sea la madera. El INRS (instituto francés de seguridad laboral) recuerda el valor límite de 1${NBSP}mg/m³ en 8 horas (artículo R4412-149 del Código del Trabajo francés), controlado cada año por un organismo acreditado, la captación en origen, la limpieza por aspiración, la vigilancia de la salud reforzada de los empleados expuestos y el control anual de la ventilación. Las máquinas se mantienen conformes a las normas de su fecha de primera puesta en servicio, y sus riesgos figuran en el documento único de evaluación de riesgos. Una herramienta de gestión puede recordarte estos controles a su vencimiento.`,
      },
      {
        question: '¿Cuánto cuesta ProDevis en 2026?',
        answer: `Elcia muestra ProDevis START a 75${NBSP}€ sin IVA al mes, cancelable en cualquier momento: presupuesta con las tarifas de los fabricantes y hace los pedidos, pero no emite facturas. El precio de la versión completa de ProDevis no se muestra. Circulan otros importes en internet, de 55 a 175${NBSP}€ según la web; solo cuenta el precio de la página del editor, consultado aquí el 1 de noviembre de 2026.`,
      },
      {
        question: '¿Se pueden recuperar los datos de mi programa actual?',
        answer:
          'Si tu programa exporta tus clientes, tus obras, tus partidas y tus presupuestos a Excel o CSV, los recupero en la nueva herramienta; está previsto en el presupuesto. Las listas de despiece de tu programa de CAD pueden seguir el mismo camino. Comprueba esta posibilidad de exportación antes de firmar con un editor.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para seguir leyendo',
    slugs: CARPENTRY_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: '¿Dudas sobre la herramienta adecuada para tu carpintería?',
    description:
      'Cuéntame tu taller, tus obras y tus herramientas actuales en unas líneas. Te respondo en 24 horas, y si un programa del mercado te basta, te lo digo.',
    button: 'Hablar de mi proyecto',
  },
}
