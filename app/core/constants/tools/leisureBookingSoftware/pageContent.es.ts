import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  CANOE_KAYAK_SAFETY_SOURCE,
  LEISURE_ACTIVITY_NO_WITHDRAWAL_SOURCE,
  LEISURE_ACTIVITY_VAT_RATES_SOURCE,
  LEISURE_BOOKING_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  LEISURE_BOOKING_PAGE_PROJECT_SLUG,
  LEISURE_BOOKING_PAGE_RELATED_ARTICLE_SLUGS,
  LEISURE_BOOKING_PAGE_SCREENSHOT_URL,
  LEISURE_BOOKING_PAGE_UPDATED_AT,
  LEISURE_BOOKING_TEMPLATE_PDF_PATH,
  LEISURE_BOOKING_TEMPLATE_XLSX_PATH,
  PAID_SPORTS_INSTRUCTOR_SOURCE,
  SPORTS_FACILITY_DISPLAY_SOURCE,
} from '~/core/constants/tools/leisureBookingSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'
import { BOOKING_SCHEDULE_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/bookingSchedule/pageShared'

export const LEISURE_BOOKING_PAGE_CONTENT_ES: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Software de reservas de ocio en Francia: precios 2026',
    description:
      'Programas de reservas de ocio en Francia: precios 2026 (Yoplanning, Activiteez, Regiondo, Bookeo…), comisiones, test gratuito en 6 preguntas y plantilla.',
    inLanguage: 'es',
    schemaAbout: 'Programa de reservas y de gestión para actividades de ocio en Francia',
  },
  breadcrumbLabel: 'Software de reservas para actividades de ocio',
  shareImage: {
    titleLines: ['¿Qué software para', 'actividades de ocio?'],
    highlight: 'actividades de ocio',
    subtitle:
      'Seis preguntas, los precios 2026 de los programas de reservas en Francia y una planificación de reservas gratuita',
    badge: 'Test gratuito, en 2 minutos',
    icon: 'tent',
    alt: '¿Qué software de reservas para tus actividades de ocio? Test gratuito en 6 preguntas, precios 2026 de los programas de reservas en Francia y plantilla de planificación de reservas, en dibodev.fr',
  },
  hero: {
    titleBefore: '¿Qué software de reservas para tus ',
    titleHighlight: 'actividades de ocio',
    titleAfter: '?',
    description:
      'Seis preguntas sobre tus monitores, tus sitios y tus actividades. Circuito en los árboles, escape room, base náutica, centro ecuestre o karting, a partir del mercado francés el test te dice qué tipo de programa elegir para tus reservas, tus monitores y tus días de mal tiempo, y cuánto prever, comisiones incluidas.',
    reassurances: ['2 minutos', 'Sin registro ni e-mail', 'Resultado inmediato'],
    authorIntro: 'Test diseñado por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. En formación dual en Izidoor, de 2023 a 2025, desarrollé la plataforma de reservas de una treintena de estructuras de deporte y ocio; hoy soy accionista de Izidoor.',
    updatedAt: LEISURE_BOOKING_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'programas',
    eyebrow: 'Precios públicos 2026',
    title: 'Comparativa de los programas de reservas para actividades de ocio en Francia y de sus precios',
    intro:
      'Las tarifas que muestran en su web los editores de programas de reservas para el ocio, del circuito en los árboles al escape room, de la base náutica al karting. Conviven dos modelos: una suscripción sin comisión, o una suscripción pequeña (a veces gratuita) con una parte de cada reserva online. Cuál te sale más barato depende de tu volumen: el cálculo está debajo de la tabla.',
    productColumnLabel: 'Programa',
    coverageColumnLabel: 'Qué gestiona',
    priceColumnLabel: 'Precio público',
    products: [
      {
        name: 'Yoplanning',
        coverage:
          'Planificación, base de clientes, venta de entradas, bonos regalo, stock de material en tiempo real, gestión de impuestos, API; a petición: facturación francesa, honorarios de los monitores',
        price: `0${NBSP}€ + 5${NBSP}%, o 19 a 59${NBSP}€ + 2,5${NBSP}%`,
        priceCondition: `Découverte gratuita con un 5${NBSP}% de gastos de reserva; Solo 19${NBSP}€, Micro 39${NBSP}€ (facturación inferior a 150${NBSP}000${NBSP}€), Entreprise 59${NBSP}€ al mes, más un 2,5${NBSP}% sobre las reservas online; sin precisar si lleva IVA; prueba de 14 días sin tarjeta`,
      },
      {
        name: 'Activiteez',
        coverage:
          'Planificación, área de cliente, monitores (20 en BUSINESS, 60 en SÉRÉNITÉ), notas de honorarios, códigos promocionales, exportación contable FEC',
        price: `Desde 19${NBSP}€ sin IVA al mes`,
        priceCondition: `LIGHT 19${NBSP}€ sin IVA con compromiso de 12 meses o 29${NBSP}€ sin él, hasta SÉRÉNITÉ 119 o 129${NBSP}€; más un 2${NBSP}% y las comisiones de Stripe sobre lo cobrado online; plan GO gratuito al 10${NBSP}% + 0,40${NBSP}€; caja NF525 y factura electrónica +20${NBSP}€ sin IVA al mes (incluidas en SÉRÉNITÉ); pausa fuera de temporada posible sin compromiso`,
      },
      {
        name: 'Regiondo',
        coverage:
          'Widget de reservas, pagos con Stripe y PayPal, venta en GetYourGuide y Viator, entradas y app de escaneo; en Pro: API, plano de asientos, datos alojados en Europa',
        price: `59 o 99${NBSP}€ al mes`,
        priceCondition: `Grow o Pro, contrato anual facturado mensualmente (−10${NBSP}% pagando el año); «pequeña comisión» por reserva online, tasa no publicada, ninguna fuera de línea; sin precisar si lleva IVA; web 1000${NBSP}€ una sola vez`,
      },
      {
        name: 'Tourbiz',
        coverage:
          'Channel manager (GetYourGuide, Viator, Funbooker…), bonos regalo, recursos; reservas fuera de línea sin gastos',
        price: `0 a 249${NBSP}€ al mes + 0,8 a 0,99${NBSP}%`,
        priceCondition: `Freemium 0${NBSP}€ + 0,99${NBSP}% (3 productos), Intermediate 29${NBSP}€ + 0,95${NBSP}%, Advanced 79${NBSP}€ + 0,90${NBSP}%, Entreprise 249${NBSP}€ + desde 0,8${NBSP}%, todos los precios sin IVA; prueba gratuita sin tarjeta`,
      },
      {
        name: 'Bookeo Tours et activités',
        coverage: 'Reservas online, guías y vehículos, exenciones de responsabilidad firmadas online',
        price: `29,95 a 89,95${NBSP}€ al mes`,
        priceCondition: `Sin comisión; Standard 29,95${NBSP}€ (20 guías, 1000 reservas al mes), Large 59,95${NBSP}€, X-large 89,95${NBSP}€; congelación fuera de temporada al 30${NBSP}% del precio; exenciones digitales desde 7${NBSP}€ al mes; sin precisar si lleva IVA; prueba de 30 días sin tarjeta`,
      },
      {
        name: 'Booky',
        coverage:
          'Reservas online; en PRO: caja antifraude del IVA, factura electrónica, contratos firmados, EPI; en BUSINESS: fianzas, bonos regalo, GPS',
        price: `49 a 149${NBSP}€ sin IVA al mes`,
        priceCondition: `START 49${NBSP}€, PRO 89${NBSP}€, BUSINESS 149${NBSP}€; mitad de precio los meses sin ventas; «ninguna comisión»; prueba de 14 días sin tarjeta, sin compromiso`,
      },
      {
        name: 'MyEscapeBoard (escape room)',
        coverage: 'Reservas, pago individual, planificación de los game masters, API, exportaciones contables',
        price: `30${NBSP}€ sin IVA por sala al mes`,
        priceCondition: `30${NBSP}€ para las salas 1 a 6, 25${NBSP}€ de la 7 a la 14, 20${NBSP}€ a partir de la 15; desde 3 salas (90${NBSP}€ sin IVA al mes); pagando el año, 2 meses gratis; sin compromiso`,
      },
      {
        name: 'Guidap, Qweekle, OuiRésa, FareHarbor',
        coverage:
          'Reservas y venta de entradas para el ocio: circuitos en los árboles, piragüismo y cuevas (Guidap), caja y control de acceso (Qweekle), centros náuticos (OuiRésa), según el editor',
        price: 'Bajo presupuesto',
        priceCondition: 'Tarifas no publicadas',
      },
    ],
    calloutEmphasizedIntro: `El coste real en un año, para 2000 reservas online a 30${NBSP}€ (60${NBSP}000${NBSP}€):`,
    calloutText: `Bookeo Standard 359${NBSP}€, comisiones de pago aparte; Booky START 588${NBSP}€ sin IVA y Tourbiz Advanced 1488${NBSP}€ sin IVA, comisiones de pago sin precisar; Yoplanning Micro 1968${NBSP}€, comisiones de pago sin precisar; Weezevent 1980${NBSP}€ con IVA, gastos bancarios incluidos (0,99${NBSP}€ como mínimo por entrada); Activiteez PRO con compromiso, unos 2948${NBSP}€ sin IVA, pago incluido; Addock 3740${NBSP}€ sin IVA, gastos bancarios incluidos; Bookingkit Starterkit, 5388${NBSP}€ como mínimo, gastos de transacción incluidos (una entrada por reserva). Para el mismo volumen, la diferencia supera los 5000${NBSP}€ al año: rehaz este cálculo con tus cifras antes de firmar.`,
    calloutFootnote:
      'Suscripción y comisiones durante un año, según las tarifas consultadas el 1 de noviembre de 2026 en las páginas de precios de los editores; Bookeo, Yoplanning y Bookingkit no precisan si sus precios llevan IVA. Lista no exhaustiva.',
  },
  rules: {
    anchorId: 'normativa',
    eyebrow: 'Francia en 2026',
    title: 'IVA, arras, monitores, meteorología: lo que tu programa debe seguir en Francia en 2026',
    intro: `En Francia, un tipo de IVA por actividad, un anticipo que vale como arras, carnés profesionales que renovar, salidas que anular cuando sube el río: las normas de una empresa de ocio pasan todas por sus reservas. El 16 de octubre de 2026, la autoridad francesa de consumo (DGCCRF) publicó su investigación sobre el ocio deportivo: 332 centros controlados en 2024, un 13${NBSP}% con incumplimientos, 13 suspensiones. Y la ley del 3 de agosto de 2026 recupera una declaración de actividad, cuyo decreto aún no se había publicado el 1 de noviembre de 2026.`,
    facts: [
      {
        contextLabel: 'BOFiP, BOI-TVA-LIQ-30-20-50',
        title: `10, 20 o 5,5${NBSP}%: un tipo de IVA por actividad`,
        text: `10${NBSP}% para las entradas (circuitos en los árboles, tirolinas, escape room, laser tag, paintball, parques de ocio), 20${NBSP}% para el karting, la escalada, los deportes náuticos, el alquiler de material y una clase vendida sola, 5,5${NBSP}% para algunas actividades ecuestres. Un paquete que mezcla varias actividades sigue un solo tipo, el de la actividad principal.`,
        sourceName: LEISURE_ACTIVITY_VAT_RATES_SOURCE.name,
        sourceUrl: LEISURE_ACTIVITY_VAT_RATES_SOURCE.url,
      },
      {
        contextLabel: 'Código de consumo, L221-28 y L214-1',
        title: 'Sin desistimiento, y un anticipo que vale como arras',
        text: 'Una actividad de ocio reservada para una fecha concreta no da derecho de desistimiento. Salvo cláusula en contrario, la cantidad pagada por adelantado vale como arras: el cliente que renuncia la pierde, el profesional que se echa atrás la devuelve doblada.',
        sourceName: LEISURE_ACTIVITY_NO_WITHDRAWAL_SOURCE.name,
        sourceUrl: LEISURE_ACTIVITY_NO_WITHDRAWAL_SOURCE.url,
      },
      {
        contextLabel: 'Código del deporte, L212-1 y L212-11',
        title: 'Monitores titulados, declarados y con el carné al día',
        text: 'Enseñar o acompañar a cambio de una remuneración exige un título y una declaración ante la administración, que expide el carné profesional, renovable cada 5 años. Una copia del carné y del título de cada monitor se expone en el establecimiento.',
        sourceName: PAID_SPORTS_INSTRUCTOR_SOURCE.name,
        sourceUrl: PAID_SPORTS_INSTRUCTOR_SOURCE.url,
      },
      {
        contextLabel: 'Código del deporte, A322-44 y A322-3-1',
        title: 'Piragüismo: anular cuando el agua o el tiempo lo exigen',
        text: 'El explotador adapta o anula la salida si el tiempo o el estado del agua ponen en peligro a los participantes. En piragüismo, kayak y vela, cada uno declara saber nadar 25 metros y sumergirse (para un menor, firma su representante legal); si no, pasa la prueba Pass-nautique.',
        sourceName: CANOE_KAYAK_SAFETY_SOURCE.name,
        sourceUrl: CANOE_KAYAK_SAFETY_SOURCE.url,
      },
      {
        contextLabel: 'Código del deporte, R322-4 y R322-5',
        title: 'Un cuadro de primeros auxilios y los avisos obligatorios',
        text: 'El establecimiento tiene un botiquín, un medio de alerta y un cuadro de organización de los primeros auxilios a la vista. También expone las copias de los títulos y carnés, los textos de seguridad, el certificado del seguro y, desde 2025, la información sobre los canales para denunciar la violencia. Todo accidente grave se comunica al prefecto.',
        sourceName: SPORTS_FACILITY_DISPLAY_SOURCE.name,
        sourceUrl: SPORTS_FACILITY_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: '1 de septiembre de 2027',
        title: 'Factura electrónica y e-reporting',
        text: 'Todas las empresas francesas deben poder recibir facturas electrónicas desde el 1 de septiembre de 2026; las pymes las emitirán a partir del 1 de septiembre de 2027. Desde esa misma fecha, para tus clientes particulares, la factura sigue por el canal habitual, pero los datos de cada venta y de su pago se envían a la plataforma autorizada (e-reporting).',
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'Lo que la herramienta a medida no sustituye:',
    calloutText:
      'tu caja registradora segura ni tu contabilidad: los pagos online pasan por Stripe, los cobros in situ por tu caja, y la herramienta se conecta a las dos. Tampoco decide tus condiciones de venta: cuando eres tú quien anula por el tiempo, arras devueltas dobladas o fuerza mayor, haz revisar tus condiciones por un abogado, y la herramienta aplicará lo que digan.',
  },
  freeTemplate: {
    anchorId: 'plantilla',
    eyebrow: 'Plantilla gratuita',
    title: 'Una planificación de reservas y una ficha de inscripción listas para usar',
    description:
      'Para la temporada: la planificación de las franjas, de las reservas y de los anticipos, el seguimiento de los monitores y de las revisiones del material en Excel, y una ficha de inscripción y de briefing para imprimir, con la declaración de saber nadar y la firma de un padre para un menor. En francés, una planificación de reservas gratuita, sin suscripción ni comisión.',
    items: [
      'Excel, 4 hojas: franjas (plazas libres y ocupación calculadas), reservas y anticipos (tipo de IVA, arras, saldo, comisión del canal), monitores (carné profesional y fecha de caducidad), revisiones del material (aviso de retraso)',
      `PDF: ficha de inscripción y de briefing (actividad, nivel, consignas leídas, declaración «saber nadar 25${NBSP}m y sumergirse», firma del representante legal), cuadro de organización de los primeros auxilios y lista de los avisos obligatorios`,
      `Referencias útiles: IVA del 10, 20 o 5,5${NBSP}% según la actividad (BOFiP), anticipo que vale como arras salvo cláusula en contrario, precios con IVA expuestos en la recepción`,
    ],
    downloads: [
      {
        label: 'Descargar la plantilla PDF',
        href: LEISURE_BOOKING_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: LEISURE_BOOKING_TEMPLATE_XLSX_PATH,
        format: 'Excel, 4 hojas, plazas, saldos y avisos calculados, en francés',
      },
    ],
    footnote: 'De uso libre, para adaptar con tu federación y tu aseguradora.',
    pageLinkLabel: 'Ver la página de la plantilla',
    pageLinkRouteName: BOOKING_SCHEDULE_TEMPLATE_ROUTE_NAME,
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
          { state: 'yes', text: `0 a 249${NBSP}€ al mes, a menudo más una comisión sobre cada reserva online` },
          { state: 'partial', text: `Tu suscripción, más 2500 a 7000${NBSP}€ una sola vez` },
          {
            state: 'partial',
            text: `5000 a 25${NBSP}000${NBSP}€ una sola vez, más 100 a 300${NBSP}€ al mes de mantenimiento`,
          },
        ],
      },
      {
        label: 'Comisión sobre tus reservas',
        cells: [
          { state: 'partial', text: `Del 0 a más del 10${NBSP}% por reserva online, según el editor y el plan` },
          { state: 'partial', text: 'La de tu programa actual' },
          { state: 'yes', text: 'Ninguna, solo las comisiones de pago de tu banco o de Stripe' },
        ],
      },
      {
        label: 'Reservas online, planificación, pagos',
        cells: [
          { state: 'yes', text: 'Incluidos, en un widget o una página del editor' },
          { state: 'yes', text: 'Se quedan en tu programa actual' },
          { state: 'yes', text: 'En tu web, con tus colores, en torno a tus franjas y tus monitores' },
        ],
      },
      {
        label: 'Tus reglas: tiempo, material, IVA por actividad',
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
    rowsShownOnSmallScreens: LEISURE_BOOKING_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: LEISURE_BOOKING_PAGE_PROJECT_SLUG,
    screenshotUrl: LEISURE_BOOKING_PAGE_SCREENSHOT_URL,
    showBrowserFrame: false,
    eyebrow: 'Ya realizado',
    title: 'Surf, kayak, esquí, bicicleta: una plataforma de reservas ya en producción',
    description:
      'En formación dual en Izidoor, de enero de 2023 a julio de 2025, desarrollé como ingeniero full-stack la plataforma de reservas de una treintena de estructuras de deporte y ocio (surf, centros náuticos, esquí, kayak, pesca, alquiler de bicicletas). Sus clientes reservan y pagan en un módulo integrado en la web de cada estructura; el equipo gestiona reservas, planificaciones, productos, pagos y caja en el back-office. Varios miles de reservas pasan por ella cada temporada, y hoy soy accionista de Izidoor.',
    highlights: [
      'Franjas calculadas por un motor de disponibilidad multicriterio',
      'Planificación por monitor y tarifas dinámicas',
      'Anticipos y reembolsos con Stripe, caja en el back-office',
    ],
    linkLabel: 'Ver el proyecto Izidoor',
    imageAlt: 'Planificación de Izidoor en ordenador y en móvil: franjas reservadas por monitor y por día',
    browserBarCaption: 'Izidoor · planificación de las reservas',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Software de reservas para actividades de ocio: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta un programa de reservas para actividades de ocio en Francia?',
        answer: `Bookeo cuesta 29,95 a 89,95${NBSP}€ al mes sin comisión, Booky 49 a 149${NBSP}€ sin IVA al mes, Activiteez desde 19${NBSP}€ sin IVA al mes más un 2${NBSP}% online, Yoplanning 19 a 59${NBSP}€ al mes más un 2,5${NBSP}% (o 0${NBSP}€ más un 5${NBSP}%), Regiondo 59 o 99${NBSP}€ al mes más una comisión que no publica, Tourbiz 0 a 249${NBSP}€ sin IVA al mes más un 0,8 a 0,99${NBSP}% y MyEscapeBoard 30${NBSP}€ sin IVA por sala; Guidap, Qweekle, OuiRésa y FareHarbor van bajo presupuesto (tarifas consultadas el 1 de noviembre de 2026). Un complemento a medida cuesta de 2500 a 7000${NBSP}€ una sola vez, una herramienta completa de 5000 a 25${NBSP}000${NBSP}€, y luego 100 a 300${NBSP}€ al mes de mantenimiento, sin comisión sobre tus ventas.`,
      },
      {
        question: 'Suscripción o comisión: ¿qué sale más barato?',
        answer: `Depende de tu volumen. Para 2000 reservas online al año a 30${NBSP}€ (60${NBSP}000${NBSP}€), el coste en un año va de 359${NBSP}€ con Bookeo Standard (comisiones de pago aparte) a 5388${NBSP}€ como mínimo con Bookingkit Starterkit (gastos de transacción incluidos). Entre los dos: Booky START 588${NBSP}€ sin IVA y Tourbiz Advanced 1488${NBSP}€ sin IVA (comisiones de pago sin precisar); Yoplanning Micro 1968${NBSP}€ (comisiones de pago sin precisar); Weezevent 1980${NBSP}€ con IVA (gastos bancarios incluidos); Activiteez PRO unos 2948${NBSP}€ sin IVA (pago incluido); Addock 3740${NBSP}€ sin IVA (gastos bancarios incluidos). Una comisión crece con tu volumen, una suscripción no: rehaz este cálculo con tus reservas y tu ticket medio antes de firmar.`,
      },
      {
        question: '¿Cuál es el mejor programa de reservas para una actividad de ocio?',
        answer: `El que encaja con tu forma de vender, no el más conocido. Antes de firmar, hazle pasar un día real: un grupo de 12 que reserva en tu web mientras un cliente se lleva por teléfono los dos últimos kayaks, una tormenta a las 14${NBSP}h que obliga a aplazar una franja y avisar a todos los inscritos, un bono regalo usado en la recepción, y luego el saldo cobrado in situ y la comisión de la plataforma encontrada en tus cuentas. Comprueba también que la página de reservas es accesible: en Francia, una web de reservas está obligada a serlo desde el 28 de junio de 2025, salvo las empresas de menos de 10 empleados cuya facturación o balance no supera los 2 millones de euros.`,
      },
      {
        question: '¿Qué programa de reservas para un circuito en los árboles o un parque de ocio?',
        answer: `Guidap (circuitos en los árboles, piragüismo, cuevas) y Qweekle (venta de entradas, caja, control de acceso) van bajo presupuesto, Logi-parc cuesta 216${NBSP}€ al año, licencia todo incluido (sin precisar si lleva IVA), Regiondo 59 o 99${NBSP}€ al mes y Booky 49 a 149${NBSP}€ sin IVA al mes, con los EPI desde el plan PRO. Un programa de gestión de un parque de ocio también debe llevar el registro de tus revisiones: en su investigación de octubre de 2026, la autoridad francesa de consumo encontró «revisiones periódicas obligatorias de los equipos no registradas» y EPI caducados. En Francia, la entrada a un circuito de aventura en altura lleva un IVA del 10${NBSP}%. Data ES, el censo de instalaciones del Ministerio de Deportes francés, cuenta 757 circuitos acrobáticos en altura o parques de aventura en los árboles.`,
      },
      {
        question: '¿Qué programa de reservas para un escape room?',
        answer: `MyEscapeBoard, pensado para el escape room, cuesta 30${NBSP}€ sin IVA por sala al mes para las salas 1 a 6, 25${NBSP}€ de la 7 a la 14 y 20${NBSP}€ a partir de ahí, desde 3 salas, con la planificación de los game masters, el pago individual y una API. Los demás programas de esta página venden franjas: comprueba en una demostración que una sala nunca se puede reservar dos veces en la misma franja, venga la reserva de la web, del teléfono o de una plataforma. En Francia, el escape room, el laser tag y el paintball llevan un IVA del 10${NBSP}% (entradas).`,
      },
      {
        question: `¿Qué IVA para una actividad de ocio en Francia: 10, 20 o 5,5${NBSP}%?`,
        answer: `Depende de la actividad (BOFiP, BOI-TVA-LIQ-30-20-50). 10${NBSP}% para las entradas: circuitos acrobáticos en altura, tirolinas, trineo de verano, escape room, laser tag, paintball, realidad virtual, parques de ocio. 20${NBSP}% para las instalaciones deportivas (el karting, incluso como ocio, la escalada, los bolos, los deportes náuticos), para el alquiler de material y para una clase o un guía vendidos solos; 5,5${NBSP}% para algunas actividades ecuestres. Un programa de gestión de karting o de centro ecuestre debe llevar, por tanto, un tipo por prestación, y un paquete que mezcla varias actividades sigue un solo tipo, el de la actividad principal.`,
      },
      {
        question: '¿Qué hacer cuando el tiempo obliga a anular?',
        answer:
          'En piragüismo, kayak y rafting no es una elección: en Francia, el explotador adapta o anula la salida si el tiempo o el estado del agua ponen en peligro a los participantes (Código del deporte, A322-44). Queda por saber qué debes cuando eres tú quien anula: ¿las arras dobladas, como un profesional que se echa atrás, o es un caso de fuerza mayor? La respuesta depende de tus condiciones de venta: haz que las revise un abogado. Los reembolsos por el tiempo, como escribía el 20 de octubre de 2026, son el punto que más daño hace cuando se gestiona mal: un buen programa aplaza o reembolsa toda una franja en pocos clics y avisa a cada inscrito.',
      },
      {
        question: 'Anticipo o arras: ¿qué poner en las condiciones de venta?',
        answer:
          'Salvo cláusula en contrario, en Francia una cantidad pagada por adelantado vale como arras: el cliente que renuncia la pierde, el profesional que se echa atrás la devuelve doblada (Código de consumo, L214-1). Una actividad de ocio reservada para una fecha concreta no da derecho de desistimiento (L221-28), y debes ofrecer un mediador de consumo gratuito (L612-1). En su investigación publicada el 16 de octubre de 2026, la autoridad francesa de consumo encontró condiciones generales de venta incompletas y falta de información sobre el derecho de desistimiento, seguidas de requerimientos. Anota en el programa la naturaleza de cada cantidad pagada, arras o anticipo, para devolver el importe correcto si se anula.',
      },
      {
        question: '¿Hay que declarar una actividad de ocio en Francia en 2026?',
        answer: `La declaración de apertura de un establecimiento de actividades físicas o deportivas se suprimió en 2014, pero la ley del 3 de agosto de 2026 crea el artículo L322-2-1 del Código del deporte, en vigor desde el 5 de agosto: un decreto del Consejo de Estado fijará la declaración de actividad, y aún no se había publicado el 1 de noviembre de 2026. Mientras tanto, cada monitor remunerado se declara y tiene un carné profesional, todo accidente grave se comunica al prefecto, y el seguro de responsabilidad civil es obligatorio (6 meses de prisión y 7500${NBSP}€ de multa sin él). A partir de 7 menores acogidos sin sus padres, se aplica el régimen francés de las acogidas colectivas de menores.`,
      },
      {
        question: '¿Existe un programa de reservas gratuito?',
        answer: `Sí, pero gratuito suele significar comisión: Yoplanning Découverte cuesta 0${NBSP}€ con un 5${NBSP}% de gastos de reserva, Activiteez GO cobra un 10${NBSP}% + 0,40${NBSP}€, Tourbiz Freemium un 0,99${NBSP}% sin IVA para 3 productos y Ubiliz Forever Free un 4${NBSP}% sin IVA sobre las reservas online. SimplyBook.me es gratuito hasta 50 reservas, sin gastos de transacción, y HelloAsso no cobra gastos ni comisión a las asociaciones (propone al pagador una contribución voluntaria). Si buscas una planificación de reservas online gratuita, estos son los planes; para empezar sin suscripción ni comisión, la plantilla gratuita de esta página (Excel y PDF, en francés) sigue tus franjas, tus anticipos, tus monitores y las revisiones de tu material.`,
      },
      {
        question: '¿Hace falta una caja registradora certificada para cobrar in situ?',
        answer: `Sí, si estás sujeto al IVA en Francia y cobras a particulares con un programa de caja: debe ser seguro, con el certificado del editor recuperado por la ley de presupuestos del 19 de febrero de 2026, so pena de una multa de 7500${NBSP}€ por caja. Las empresas en régimen de franquicia del IVA están exentas, igual que aquellas cuyos pagos pasan todos por un banco. Activiteez vende la caja NF525 como opción (+20${NBSP}€ sin IVA al mes) y Booky incluye una caja antifraude desde el plan PRO.`,
      },
      {
        question: '¿Se pueden recuperar los datos de mi programa actual?',
        answer:
          'Si tu programa exporta tus clientes, reservas, productos, bonos regalo y pagos a Excel o CSV, los recupero en la nueva herramienta; está previsto en el presupuesto. Dos límites que fija la CNIL, la autoridad francesa de protección de datos: el código de seguridad de una tarjeta nunca se guarda tras la primera transacción, y los datos de los clientes se conservan 3 años después del final de la relación, los de los contactos comerciales 3 años después del último contacto. Comprueba esta posibilidad de exportación antes de firmar con un editor.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para seguir leyendo',
    slugs: LEISURE_BOOKING_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: '¿Dudas sobre la herramienta adecuada para tus actividades de ocio?',
    description:
      'Cuéntame tus actividades, tus temporadas y tus canales de reserva en unas líneas. Te respondo en 24 horas, y si un programa del mercado te basta, te lo digo.',
    button: 'Hablar de mi proyecto',
  },
}
