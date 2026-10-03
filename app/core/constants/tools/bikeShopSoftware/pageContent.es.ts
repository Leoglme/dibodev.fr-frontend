import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  BIKE_MARKING_SOURCE,
  BIKE_REPAIR_BONUS_REFUND_SOURCE,
  BIKE_REPAIR_BONUS_SOURCE,
  BIKE_SHOP_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  BIKE_SHOP_PAGE_PROJECT_SLUG,
  BIKE_SHOP_PAGE_RELATED_ARTICLE_SLUGS,
  BIKE_SHOP_PAGE_SCREENSHOT_URL,
  BIKE_SHOP_PAGE_UPDATED_AT,
  BIKE_SHOP_TILL_SOURCE,
} from '~/core/constants/tools/bikeShopSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'

// The page describes the French market (publishers, bike marking, repair bonus): the Spanish text says so instead of adapting it.

export const BIKE_SHOP_PAGE_CONTENT_ES: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Software para talleres de bicicletas en Francia: precios 2026 y test',
    description:
      'Programas para talleres de bicicletas en Francia: precios 2026 (Epsylon, CycleSoftware, Shifter…) y test gratis de 6 preguntas para elegir el tuyo.',
    inLanguage: 'es',
    schemaAbout: 'Software de gestión para talleres y tiendas de bicicletas en Francia',
  },
  breadcrumbLabel: 'Software para talleres de bicicletas',
  shareImage: {
    titleLines: ['¿Qué software para', 'tu taller de bicis?'],
    highlight: 'taller de bicis',
    subtitle: 'Seis preguntas, los precios 2026 de los programas para talleres vendidos en Francia y cuánto prever',
    badge: 'Test gratis, en 2 minutos',
    icon: 'bike',
    alt: '¿Qué software para tu taller de bicicletas? Test gratis de 6 preguntas y precios 2026 de los programas en Francia, en dibodev.fr',
  },
  hero: {
    titleBefore: '¿Qué software para tu ',
    titleHighlight: 'taller de bicicletas',
    titleAfter: '?',
    description:
      'Responde a seis preguntas sobre tu equipo, tus tiendas y tu actividad. Según el mercado francés, el test te dice qué tipo de programa elegir para tus citas, tus fichas de taller y tu caja, y cuánto prever.',
    reassurances: ['2 minutos', 'Sin registro ni correo', 'Resultado inmediato'],
    authorIntro: 'Test creado por',
    authorBio:
      'desarrollador de software de gestión cerca de Rennes (Francia). Desarrollé la plataforma de reservas en línea de una treintena de centros deportivos y de ocio.',
    updatedAt: BIKE_SHOP_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'programas',
    eyebrow: 'Precios públicos 2026',
    title: 'Los programas para talleres de bicicletas vendidos en Francia y sus precios',
    intro:
      'Las tarifas que muestran los editores en su web. El precio depende sobre todo de los módulos elegidos y del número de tiendas.',
    productColumnLabel: 'Programa',
    coverageColumnLabel: 'Qué gestiona',
    priceColumnLabel: 'Precio público',
    products: [
      {
        name: 'Epsylon',
        coverage: 'Fichas de reparación, stock de piezas, caja y facturas, app de taller, varias tiendas (plan Tienda)',
        price: `9 a 89${NBSP}€ al mes`,
        priceCondition: `Sin IVA aplicado; 1 tienda por 9${NBSP}€, hasta 3 por 45${NBSP}€`,
      },
      {
        name: 'Atelier Vélo+',
        coverage:
          'Clientes, bicicletas, reparaciones, presupuestos y facturas, pago en línea, programa Windows sin conexión',
        price: `199 o 359${NBSP}€ al año`,
        priceCondition: 'El plan Pro añade las citas en línea y los recordatorios de mantenimiento',
      },
      {
        name: 'CycleSoftware',
        coverage: 'Caja, stock, taller, catálogos de proveedores, puestos ilimitados',
        price: `70${NBSP}€ al mes sin IVA`,
        priceCondition: `Compromiso de un año; módulos adicionales, como varias tiendas (70${NBSP}€) y citas en línea (15${NBSP}€)`,
      },
      {
        name: 'Shifter',
        coverage: 'Caja, taller, stock, pedidos a proveedores, factura electrónica incluida',
        price: `69 a 148${NBSP}€ al mes sin IVA`,
        priceCondition: `Varias tiendas y un almacén en el plan de 148${NBSP}€`,
      },
      {
        name: 'MCA Bike',
        coverage: 'Caja, stock multisede, taller, citas, alquiler, códigos QR',
        price: 'Con presupuesto',
        priceCondition: 'Tarifas no publicadas',
      },
    ],
    calloutEmphasizedIntro: 'Antes de firmar:',
    calloutText:
      'pide una demostración con un sábado real de primavera. Diez bicis dejadas en el taller, dos piezas que pedir, un cliente al que avisar por SMS y una bici nueva vendida que marcar.',
    calloutFootnote:
      'Tarifas consultadas el 29 de septiembre de 2026 en las webs de los editores. Lista no exhaustiva.',
  },
  rules: {
    anchorId: 'normativa',
    eyebrow: 'Francia en 2026',
    title: 'Lo que tu programa debe seguir en Francia en 2026',
    intro:
      'En Francia, el marcado de las bicicletas, el bono de reparación, una caja segura y pronto la factura electrónica: tu programa lo registra todo, bici por bici.',
    facts: [
      {
        contextLabel: 'Desde el 1 de enero de 2021',
        title: 'El marcado de las bicicletas nuevas vendidas',
        text: 'Cada bicicleta nueva vendida lleva un identificador único, registrado con los datos de su propietario en el fichero nacional (FNUCI), gestionado por la asociación APIC.',
        sourceName: BIKE_MARKING_SOURCE.name,
        sourceUrl: BIKE_MARKING_SOURCE.url,
      },
      {
        contextLabel: 'Desde el 1 de julio de 2021',
        title: 'Y de las de segunda mano vendidas en tienda',
        text: 'Las bicicletas de segunda mano vendidas por un profesional también deben marcarse, con uno de los siete operadores autorizados (Paravol, Recobike…).',
        sourceName: BIKE_MARKING_SOURCE.name,
        sourceUrl: BIKE_MARKING_SOURCE.url,
      },
      {
        contextLabel: `15 o 30${NBSP}€ por reparación`,
        title: 'El bono de reparación de bicicletas',
        text: `Para una bici clásica, 15${NBSP}€ de descuento desde 65${NBSP}€ de reparación con IVA, 30${NBSP}€ desde 120${NBSP}€. Solo un taller con el sello puede aplicarlo.`,
        sourceName: BIKE_REPAIR_BONUS_SOURCE.name,
        sourceUrl: BIKE_REPAIR_BONUS_SOURCE.url,
      },
      {
        contextLabel: 'En 15 días',
        title: 'El bono reembolsado al taller',
        text: `Ecologic reembolsa al taller, en principio en 15 días tras un expediente completo, y paga una prima de 5${NBSP}€ por expediente validado.`,
        sourceName: BIKE_REPAIR_BONUS_REFUND_SOURCE.name,
        sourceUrl: BIKE_REPAIR_BONUS_REFUND_SOURCE.url,
      },
      {
        contextLabel: 'Desde el 21 de febrero de 2026',
        title: 'Una caja segura, con prueba',
        text: 'Si cobras a particulares con un programa de caja, debe garantizar que las ventas no se alteran y se archivan. La prueba: un certificado o, de nuevo, una declaración del editor.',
        sourceName: BIKE_SHOP_TILL_SOURCE.name,
        sourceUrl: BIKE_SHOP_TILL_SOURCE.url,
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
      'tu caja segura y el marcado. La caja se queda con un editor que entrega el certificado o la declaración, el marcado con un operador autorizado; la herramienta a medida se conecta a ambos.',
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
          { state: 'yes', text: `9 a 150${NBSP}€ al mes, según los módulos y las tiendas` },
          { state: 'partial', text: `Tu suscripción, más 2500 a 7000${NBSP}€ una sola vez` },
          {
            state: 'partial',
            text: `5000 a 25${NBSP}000${NBSP}€ una sola vez, más 100 a 300${NBSP}€ al mes de mantenimiento`,
          },
        ],
      },
      {
        label: 'Caja segura',
        cells: [
          { state: 'yes', text: 'La da el editor, con su certificado o su declaración' },
          { state: 'yes', text: 'Se queda en tu programa actual' },
          { state: 'partial', text: 'Se queda con un editor de caja, conectado a la herramienta' },
        ],
      },
      {
        label: 'Tus reglas: tarifas, plazos, tiendas',
        cells: [
          { state: 'partial', text: 'Dentro de los ajustes previstos por el editor' },
          { state: 'yes', text: 'En los puntos que añade el complemento' },
          { state: 'yes', text: 'Diseñada en torno a tu organización' },
        ],
      },
      {
        label: 'Citas de taller en tu web',
        cells: [
          { state: 'partial', text: 'A menudo un módulo de pago, en una página del editor' },
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
    rowsShownOnSmallScreens: BIKE_SHOP_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: BIKE_SHOP_PAGE_PROJECT_SLUG,
    screenshotUrl: BIKE_SHOP_PAGE_SCREENSHOT_URL,
    showBrowserFrame: false,
    eyebrow: 'Ya realizado',
    title: 'Una plataforma de reservas, ya en producción',
    description:
      'En Izidoor desarrollé la plataforma de reservas de una treintena de centros deportivos y de ocio. Sus clientes reservan y pagan en la web de cada centro, y el equipo lo sigue todo en una agenda. Varios miles de reservas pasan por ella cada temporada.',
    highlights: [
      'Reserva en línea en la web de cada centro',
      'Pago con Stripe, anticipos y reembolsos',
      'Agenda, disponibilidad y caja para cobrar en el lugar',
    ],
    linkLabel: 'Ver el proyecto Izidoor',
    imageAlt: 'Agenda de Izidoor en un portátil y en un móvil: franjas reservadas por monitor y por día',
    browserBarCaption: 'Izidoor · agenda de reservas',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Software para talleres de bicicletas: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta un software para talleres de bicicletas en Francia?',
        answer: `Epsylon cuesta 9${NBSP}€ al mes para una tienda (45 y 89${NBSP}€ para varias), Atelier Vélo+ 199 o 359${NBSP}€ al año, CycleSoftware 70${NBSP}€ sin IVA al mes más sus módulos, y Shifter de 69 a 148${NBSP}€ sin IVA al mes. MCA Bike funciona con presupuesto (tarifas consultadas el 29 de septiembre de 2026). Un complemento a medida cuesta de 2500 a 7000${NBSP}€ una sola vez, una herramienta completa de 5000 a 25${NBSP}000${NBSP}€, y luego de 100 a 300${NBSP}€ al mes de mantenimiento.`,
      },
      {
        question: '¿Existe un software gratuito para talleres de bicicletas?',
        answer: `No entre los que aparecen aquí, pero las pruebas gratuitas son habituales: 30 días con Epsylon y CycleSoftware, 14 días con Atelier Vélo+. El más barato, Epsylon, cuesta 9${NBSP}€ al mes para una tienda.`,
      },
      {
        question: '¿El marcado de las bicicletas es obligatorio en Francia?',
        answer:
          'Sí, para las bicicletas nuevas vendidas desde el 1 de enero de 2021 y para las de segunda mano vendidas por un profesional desde el 1 de julio de 2021. El marcado pasa por uno de los siete operadores autorizados, y el número se registra en el fichero nacional (FNUCI); tu programa puede guardarlo con la ficha de la bici.',
      },
      {
        question: '¿Cómo se aplica el bono de reparación de bicicletas?',
        answer: `Hay que ser un taller con el sello. Descuentas el bono de la factura del cliente (15${NBSP}€ desde 65${NBSP}€ de reparación con IVA, 30${NBSP}€ desde 120${NBSP}€ para una bici clásica), y luego Ecologic te lo reembolsa, en principio en 15 días, con una prima de 5${NBSP}€ por expediente validado.`,
      },
      {
        question: '¿Mi caja debe estar certificada?',
        answer:
          'Si cobras a particulares con un programa de caja, debe garantizar que las ventas no se alteran y se archivan. Desde el 21 de febrero de 2026, la prueba puede ser un certificado de un organismo acreditado o una declaración individual del editor: pídela antes de firmar.',
      },
      {
        question: '¿Mis clientes pueden pedir cita en línea?',
        answer: `Sí: la mayoría de los programas lo ofrecen como opción (15${NBSP}€ al mes con CycleSoftware, plan Pro con Atelier Vélo+). Una herramienta a medida lo pone en tu propia web, con la disponibilidad real de tus mecánicos.`,
      },
      {
        question: '¿Un programa puede gestionar varias tiendas?',
        answer: `Sí: Epsylon hasta 3 tiendas por 45${NBSP}€ al mes, Shifter en su plan de 148${NBSP}€ sin IVA, CycleSoftware con un módulo de 70${NBSP}€ al mes. Comprueba que el stock y los traslados entre tiendas quedan registrados.`,
      },
      {
        question: '¿Se pueden recuperar los datos de mi programa actual?',
        answer:
          'Si tu programa exporta tus clientes, bicicletas y ventas a Excel o CSV, los paso a la nueva herramienta; está previsto en el presupuesto. Comprueba esta opción de exportación antes de firmar con un editor.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para leer también',
    slugs: BIKE_SHOP_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: '¿Dudas sobre la herramienta adecuada para tu taller?',
    description:
      'Descríbeme tu taller en unas líneas. Te respondo en 24 horas y, si te basta con un programa del mercado, te lo digo.',
    button: 'Hablar de mi proyecto',
  },
}
