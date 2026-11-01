import type { DibodevSoftwareToolPageContent } from '~/core/types/DibodevSoftwareToolPage'
import {
  ANNUAL_INVENTORY_SOURCE,
  DOCUMENT_RETENTION_SOURCE,
  INVENTORY_MANAGEMENT_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  INVENTORY_MANAGEMENT_PAGE_PROJECT_SLUG,
  INVENTORY_MANAGEMENT_PAGE_RELATED_ARTICLE_SLUGS,
  INVENTORY_MANAGEMENT_PAGE_SCREENSHOT_URL,
  INVENTORY_MANAGEMENT_PAGE_UPDATED_AT,
  INVENTORY_MANAGEMENT_TEMPLATE_PDF_PATH,
  INVENTORY_MANAGEMENT_TEMPLATE_XLSX_PATH,
  STOCK_VALUATION_SOURCE,
  STOCK_WITHDRAWAL_VAT_SOURCE,
  USE_BY_DATE_SOURCE,
} from '~/core/constants/tools/inventoryManagementSoftware/pageShared'
import { E_INVOICING_SOURCE } from '~/core/constants/tools/officialSources'
import { NBSP } from '~/core/constants/typography'
import { INVENTORY_SHEET_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/inventorySheet/pageShared'

export const INVENTORY_MANAGEMENT_PAGE_CONTENT_ES: DibodevSoftwareToolPageContent = {
  meta: {
    title: 'Software de gestión de stock en Francia: precios 2026',
    description:
      'Programas de gestión de stock en Francia: precios 2026 (Odoo, Zoho, Monstock, Erplain…), test gratuito en 6 preguntas y hoja de inventario para descargar.',
    inLanguage: 'es',
    schemaAbout: 'Programa de gestión de stock e inventario para pequeñas empresas en Francia',
  },
  breadcrumbLabel: 'Software de gestión de stock',
  shareImage: {
    titleLines: ['¿Qué software', 'para tu stock?'],
    highlight: 'stock',
    subtitle:
      'Seis preguntas, los precios 2026 de los programas de gestión de stock en Francia y una hoja de inventario gratuita',
    badge: 'Test gratuito, en 2 minutos',
    icon: 'clipboard',
    alt: '¿Qué software para gestionar tu stock? Test gratuito en 6 preguntas, precios 2026 de los programas de gestión de stock en Francia y hoja de inventario rotativo para descargar, en dibodev.fr',
  },
  hero: {
    titleBefore: '¿Qué software para ',
    titleHighlight: 'gestionar tu stock',
    titleAfter: '?',
    description:
      'Seis preguntas sobre tu equipo, tus almacenes y lo que almacenas. Tienda, taller, material alquilado o productos con fecha de caducidad, a partir del mercado francés el test te dice qué tipo de programa elegir para tus entradas, tus salidas y tus inventarios, y cuánto prever al mes para tu equipo.',
    reassurances: ['2 minutos', 'Sin registro ni e-mail', 'Resultado inmediato'],
    authorIntro: 'Test diseñado por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. En Kodeva creé desde cero StockPME, un programa de gestión de stock e inventario con etiquetas QR que varias pymes siguen usando.',
    updatedAt: INVENTORY_MANAGEMENT_PAGE_UPDATED_AT,
  },
  marketSoftware: {
    anchorId: 'programas',
    eyebrow: 'Precios públicos 2026',
    title: 'Comparativa de los programas de gestión de stock en Francia y de sus precios',
    intro:
      'Las tarifas que muestran en su web los editores, desde los gratuitos hasta las suscripciones. El precio depende sobre todo del número de usuarios, luego del número de almacenes y de pedidos al mes, y de opciones como los lotes o los códigos de barras.',
    productColumnLabel: 'Programa',
    coverageColumnLabel: 'Qué gestiona',
    priceColumnLabel: 'Precio público',
    products: [
      {
        name: 'Odoo Inventario',
        coverage:
          'Multialmacén, códigos de barras y QR, números de serie y lotes, inventarios rotativos, valoración FIFO o coste medio, reposición mín-máx con pedidos de compra, funcionamiento sin conexión',
        price: `0${NBSP}€, luego 19,90 a 24,90${NBSP}€ por usuario al mes`,
        priceCondition: `Gratis con la sola aplicación Inventario, usuarios ilimitados, alojamiento incluido; plan Standard a partir de la segunda aplicación (descuento de 12 meses, precios tachados 24,90 a 31,10${NBSP}€), Custom 35,90 a 44,90${NBSP}€; implantación y mantenimiento del código no incluidos`,
      },
      {
        name: 'Zoho Inventory',
        coverage:
          'Artículos compuestos, portales de cliente y de proveedor, números de serie y lotes desde Professional, generación de códigos de barras y recuento de stock desde Premium',
        price: `0 a 249${NBSP}€ por organización al mes`,
        priceCondition: `Gratis: 1 usuario, 2 almacenes, 50 pedidos al mes; Standard 29${NBSP}€ (2 usuarios, 2 almacenes, 500 pedidos), Professional 79${NBSP}€ (4 almacenes), Premium 129${NBSP}€ (6 almacenes), Enterprise 249${NBSP}€ (7 usuarios, 10 almacenes), con facturación anual; usuario adicional 7,50${NBSP}€ al mes; prueba de 14 días sin tarjeta`,
      },
      {
        name: 'Dolibarr y DoliCloud',
        coverage:
          'ERP libre con un módulo de Stocks multialmacén, lotes y números de serie con fechas de caducidad y de consumo preferente de serie, módulo de Inventario (recuento y validación de las correcciones), lector de códigos mediante módulo externo o app Android',
        price: `0${NBSP}€ (software libre), alojado desde 14${NBSP}€ sin IVA por usuario al mes`,
        priceCondition: `Para instalar uno mismo, o DoliCloud Basic 14${NBSP}€ por usuario (4${NBSP}GB, todos los módulos oficiales, soporte por ticket) y Premium 30${NBSP}€ al mes más 15${NBSP}€ por usuario; certificado fiscal francés 5${NBSP}€ por usuario en Basic, incluido en Premium; prueba de 30 días, sin compromiso`,
      },
      {
        name: 'Monstock',
        coverage: 'Gestión de stock y de flujos, en ordenador y en móvil',
        price: `14,90 a 51,90${NBSP}€ sin IVA al mes para el primer usuario`,
        priceCondition: `Prepago anual: Essential 14,90${NBSP}€ más 9,90${NBSP}€ por usuario adicional (10 usuarios como máximo), Professional 24,90 más 19,90${NBSP}€, Enterprise 39,90 más 29,90${NBSP}€; al mes 19,90 más 12,90${NBSP}€, 32,90 más 25,90${NBSP}€, 51,90 más 38,90${NBSP}€; prueba de 14 días sin tarjeta, sin compromiso; importación de datos 450${NBSP}€ sin IVA, formación 950${NBSP}€ sin IVA al día`,
      },
      {
        name: 'Stockpit (by Erplain)',
        coverage:
          'Niveles, ajustes y valoración a coste medio, FIFO o LIFO en Power; ventas sincronizadas, compras, varios lugares de almacenamiento y albaranes en Smart; kits, embalajes y números de lote en Boost; se conecta a Pennylane, Sellsy o QuickBooks para facturar',
        price: `19 a 59${NBSP}€ sin IVA por usuario al mes`,
        priceCondition: `Con Pennylane: Power 19${NBSP}€, Smart 39${NBSP}€, Boost 59${NBSP}€ (190, 390 y 590${NBSP}€ al año); con Sellsy, solo Smart y Boost; con QuickBooks, precios en dólares y un plan Lugares de almacenamiento a 9${NBSP}$; 1000 pedidos al mes en Smart y Boost, y luego 0,03${NBSP}€ por pedido; API opcional a 30${NBSP}€ sin IVA al mes; prueba de 14 días`,
      },
      {
        name: 'Erplain',
        coverage:
          'Niveles de stock, inventarios, variantes, alertas, códigos de barras, valoración; presupuestos, pedidos, albaranes, factura electrónica francesa',
        price: `59 a 308,40${NBSP}€ sin IVA al mes`,
        priceCondition: `Con facturación anual y 12 meses de compromiso: 59${NBSP}€ para 1 usuario y 1000 pedidos al mes, 14${NBSP}€ por usuario adicional, 0,03${NBSP}€ por pedido de más; tramos de 138 y 257${NBSP}€; al mes sin compromiso: 70,80, 165,60 y 308,40${NBSP}€, 16,80${NBSP}€ por usuario adicional; prueba de 14 días sin tarjeta`,
      },
      {
        name: 'Axonaut',
        coverage:
          'Gestión comercial con stock incluido: coste medio ponderado y valor del stock en tiempo real, alerta de stock bajo, descuento automático, recepción de mercancías, trazabilidad por lote, número de serie, fecha de caducidad y de consumo preferente',
        price: `Desde 58,20${NBSP}€ al mes`,
        priceCondition: `Plan pequeña empresa: 97${NBSP}€ al mes con 1 usuario, y luego 30${NBSP}€ por usuario adicional; pagando 1 año 77,60${NBSP}€ más 24${NBSP}€ por usuario, 2 años 67,90 más 21${NBSP}€, 3 años 58,20 más 18${NBSP}€; sin compromiso; prueba de 15 días`,
      },
      {
        name: 'Sortly',
        coverage:
          'App de inventario por fotos, carpetas y campos personalizados, etiquetas QR desde Advanced, QR y códigos de barras desde Ultra',
        price: `0 a 149${NBSP}$ al mes, en dólares`,
        priceCondition: `Gratis: 100 artículos, 1 usuario; Advanced 24${NBSP}$ (500 artículos, 2 usuarios), Ultra 74${NBSP}$ (2000 artículos, 5 usuarios), Premium 149${NBSP}$ (5000 artículos, 8 usuarios), precios del primer año facturados al año; prueba de 14 días con tarjeta, la suscripción arranca salvo cancelación`,
      },
      {
        name: 'Sage 100 Gestion Commerciale, Hector, Timly',
        coverage:
          'Gestión comercial con stock (Sage); seguimiento de equipos y de stock por código QR, préstamos y devoluciones (Hector, Timly)',
        price: 'Bajo presupuesto o no publicado',
        priceCondition: `Sage: vendido por distribuidores, precio de entrada anunciado desde 64${NBSP}€ sin IVA al mes; Hector: planes mostrados sin importe legible, prueba de 15 días sin tarjeta; Timly: desde 195${NBSP}€ al mes, la gestión de stock llega desde 495${NBSP}€`,
      },
    ],
    calloutEmphasizedIntro: 'Antes de firmar:',
    calloutText:
      'haz pasar una semana real por el programa. Una entrega de 40 líneas recibida contra el albarán del proveedor con dos artículos que faltan, una caja transferida del almacén a la furgoneta, un artículo localizado por su etiqueta QR en un sótano sin cobertura, el inventario de una estantería el viernes por la tarde con sus diferencias corregidas, y luego el stock valorado enviado al contable, sin volver a teclear nada.',
    calloutFootnote:
      'Tarifas consultadas el 1 de noviembre de 2026 en las páginas de precios de los editores. Lista no exhaustiva.',
  },
  rules: {
    anchorId: 'normativa',
    eyebrow: 'Francia en 2026',
    title: 'Inventario anual, valoración, caducidad: lo que tu programa de stock debe seguir en Francia en 2026',
    intro:
      'En Francia, un stock es más que una lista de cantidades. El Código de Comercio exige un inventario cada año, Hacienda un valor al cierre, el IVA un registro de las retiradas, la factura electrónica de 2027 una fecha y una dirección de entrega, y los alimentos un lote y una fecha límite. Estas normas pasan todas por los movimientos y los documentos de tu herramienta.',
    facts: [
      {
        contextLabel: 'Código de Comercio francés, art. L123-12',
        title: 'Un inventario al menos una vez cada doce meses',
        text: 'Toda empresa obligada a llevar contabilidad comprueba mediante inventario, al menos una vez cada doce meses, la existencia y el valor de sus existencias. El inventario rotativo reparte ese recuento a lo largo del año; no exime de contar cada referencia.',
        sourceName: ANNUAL_INVENTORY_SOURCE.name,
        sourceUrl: ANNUAL_INVENTORY_SOURCE.url,
      },
      {
        contextLabel: '10 años',
        title: 'Pedidos, albaranes y facturas conservados 10 años',
        text: 'Los pedidos, los albaranes, las facturas de clientes y de proveedores y el libro de inventario se conservan 10 años desde el cierre del ejercicio (Código de Comercio francés, art. L123-22). Un parte de recepción archivado en la herramienta con su factura cumple esta obligación.',
        sourceName: DOCUMENT_RETENTION_SOURCE.name,
        sourceUrl: DOCUMENT_RETENTION_SOURCE.url,
      },
      {
        contextLabel: 'BOFiP, Código fiscal francés art. 38',
        title: 'Un stock valorado a precio de coste, no solo contado',
        text: 'Al cierre, las existencias se valoran a precio de coste, o al precio de mercado si es más bajo. Ninguna empresa está exenta, ni siquiera con miles de artículos: la herramienta debe dar un valor (coste medio ponderado o FIFO), no solo cantidades.',
        sourceName: STOCK_VALUATION_SOURCE.name,
        sourceUrl: STOCK_VALUATION_SOURCE.url,
      },
      {
        contextLabel: 'IVA, BOFiP',
        title: 'Una retirada personal o un regalo es una salida aparte',
        text: 'Un bien sacado del stock para algo distinto de las necesidades de la empresa (uso personal, regalo, uso interno) tributa IVA cuando este se dedujo en la compra. Cada salida de este tipo se registra con su motivo y su valor, aparte de las ventas y las roturas.',
        sourceName: STOCK_WITHDRAWAL_VAT_SOURCE.name,
        sourceUrl: STOCK_WITHDRAWAL_VAT_SOURCE.url,
      },
      {
        contextLabel: 'Productos alimentarios',
        title: 'Prohibido vender un producto el día siguiente a su fecha de caducidad',
        text: `Poner a la venta un producto con la fecha de caducidad (DLC) superada está prohibido en Francia: 1500${NBSP}€ de multa por producto. Un producto con la fecha de consumo preferente (DDM) superada todavía se puede vender. Para los alimentos, el lote (mención «${NBSP}L${NBSP}») y la fecha se siguen línea a línea.`,
        sourceName: USE_BY_DATE_SOURCE.name,
        sourceUrl: USE_BY_DATE_SOURCE.url,
      },
      {
        contextLabel: '1 de septiembre de 2027',
        title: 'La factura electrónica, con la fecha y la dirección de entrega',
        text: 'Todas las empresas francesas deben poder recibir facturas electrónicas desde el 1 de septiembre de 2026; las pymes y las microempresas deberán emitirlas a partir del 1 de septiembre de 2027. La factura lleva la fecha de entrega, y la dirección de entrega si es distinta: el albarán de la herramienta debe aportarlas.',
        sourceName: E_INVOICING_SOURCE.name,
        sourceUrl: E_INVOICING_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'Lo que la herramienta a medida no sustituye:',
    calloutText:
      'tu programa de facturación ni tu contabilidad. Las salidas alimentan tus presupuestos, tus facturas o tu tienda online, el stock valorado pasa a tu contable al cierre, y la herramienta se conecta a tus herramientas actuales (Pennylane, Sellsy, TPV, tienda online).',
  },
  freeTemplate: {
    anchorId: 'plantilla',
    eyebrow: 'Plantilla gratuita',
    title: 'Una hoja de inventario rotativo y un parte de recepción de proveedor listos para rellenar',
    description:
      'La hoja de inventario de una zona o de un almacén: stock teórico, cantidad contada, diferencia, valor de la diferencia y causa probable, línea a línea; el parte de recepción de una entrega: cantidades pedidas, entregadas y aceptadas, estado, lote o número de serie, fecha de caducidad, reservas y conciliación con la factura. En francés, en PDF para imprimir o en Excel con las diferencias, la tasa de exactitud y los totales calculados.',
    items: [
      'Hoja de inventario rotativo: almacén o zona, clase ABC y frecuencia, referencia, ubicación, lote, stock teórico, cantidad contada, diferencia en cantidad y en valor, causa, contado por, validado por',
      'Parte de recepción de proveedor: número de pedido y de albarán, cantidades pedidas, entregadas y aceptadas, estado, lote o número de serie, fecha de caducidad, ubicación de almacenaje, reservas, factura conciliada',
      'Referencias útiles: cada referencia contada al menos una vez cada 12 meses (Código de Comercio francés, art. L123-12); albaranes y facturas conservados 10 años; una retirada personal anotada como salida aparte',
    ],
    downloads: [
      {
        label: 'Descargar la plantilla PDF',
        href: INVENTORY_MANAGEMENT_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: INVENTORY_MANAGEMENT_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 hojas, diferencias y totales calculados, en francés',
      },
    ],
    footnote: 'De uso libre, para adaptar a tu empresa y a tus productos.',
    pageLinkLabel: 'Ver la página de la plantilla',
    pageLinkRouteName: INVENTORY_SHEET_TEMPLATE_ROUTE_NAME,
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
          { state: 'yes', text: `0 a 257${NBSP}€ al mes con pago anual, casi siempre por usuario` },
          { state: 'partial', text: `Tu suscripción, más 2500 a 7000${NBSP}€ una sola vez` },
          {
            state: 'partial',
            text: `5000 a 25${NBSP}000${NBSP}€ una sola vez, más 100 a 300${NBSP}€ al mes de mantenimiento`,
          },
        ],
      },
      {
        label: 'Fichas de producto, entradas, salidas, alertas de stock mínimo',
        cells: [
          { state: 'yes', text: 'Incluidos en todos, gratuitos incluidos (con un límite de usuarios o de pedidos)' },
          { state: 'yes', text: 'Se quedan en tu programa actual' },
          { state: 'yes', text: 'Diseñados en torno a tus artículos y tus flujos' },
        ],
      },
      {
        label: 'Tus reglas: almacenes y furgoneta, lotes y caducidad, devoluciones, números de serie',
        cells: [
          { state: 'partial', text: 'A menudo en un plan superior, dentro de los ajustes previstos por el editor' },
          { state: 'yes', text: 'En los puntos que añade el complemento' },
          { state: 'yes', text: 'Diseñada en torno a tu organización' },
        ],
      },
      {
        label: 'Etiquetas QR y escaneo con el móvil',
        cells: [
          { state: 'partial', text: 'Según el plan, a veces como módulo de pago' },
          { state: 'yes', text: 'Generadas por el complemento, leídas con el móvil' },
          { state: 'yes', text: `Generadas por la herramienta, 0${NBSP}€ por etiqueta` },
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
    rowsShownOnSmallScreens: INVENTORY_MANAGEMENT_PAGE_COMPARISON_ROWS_ON_SMALL_SCREENS,
  },
  project: {
    slug: INVENTORY_MANAGEMENT_PAGE_PROJECT_SLUG,
    screenshotUrl: INVENTORY_MANAGEMENT_PAGE_SCREENSHOT_URL,
    showBrowserFrame: true,
    eyebrow: 'Ya realizado',
    title: 'Un programa de gestión de stock con etiquetas QR, ya en producción',
    description:
      'StockPME es el programa de gestión de stock e inventario que creé desde cero en Kodeva, durante mis años de formación dual; Breizhtic lo distribuía con el material. Fichas de producto, niveles de stock, entradas, salidas, correcciones e inventarios, transferencias entre ubicaciones y almacenes, etiquetas QR generadas en la herramienta: sigue en producción en pymes de 20 a 200 empleados.',
    highlights: [
      'Cada movimiento registrado: entradas, salidas, correcciones, inventarios',
      'Transferencias entre ubicaciones y almacenes, estadísticas de evolución',
      'Etiquetas QR generadas en la herramienta, seguimiento del servicio posventa',
    ],
    linkLabel: 'Ver el proyecto StockPME',
    imageAlt:
      'Ficha de producto de StockPME: historial de movimientos con número de serie, fecha, almacén, cantidad y usuario',
    browserBarCaption: 'StockPME · ficha de producto, historial de movimientos',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Software de gestión de stock: tus preguntas',
    questions: [
      {
        question: '¿Cuánto cuesta un programa de gestión de stock para un equipo pequeño en Francia?',
        answer: `El precio se juega en el número de personas que tocan el stock. Para 5 personas: Monstock Essential 14,90 más 4 × 9,90, es decir 54,50${NBSP}€ sin IVA al mes en prepago; Stockpit Smart 5 × 39, es decir 195${NBSP}€ sin IVA al mes; Zoho Inventory Standard 29${NBSP}€ al mes más 3 usuarios adicionales a 7,50${NBSP}€; DoliCloud Basic 5 × 14, es decir 70${NBSP}€ sin IVA; Erplain 59${NBSP}€ más 4 × 14, es decir 115${NBSP}€ sin IVA; Odoo con la sola aplicación Inventario, 0${NBSP}€ (tarifas consultadas el 1 de noviembre de 2026). Un complemento a medida cuesta de 2500 a 7000${NBSP}€ una sola vez, una herramienta completa de 5000 a 15${NBSP}000${NBSP}€ en la mayoría de los casos, hasta 25${NBSP}000${NBSP}€ con varios almacenes y flujos particulares, y luego 100 a 300${NBSP}€ al mes de mantenimiento.`,
      },
      {
        question: '¿Existe un programa de gestión de stock gratuito?',
        answer:
          'Sí, con límites precisos. Odoo Inventario es gratuito con usuarios ilimitados mientras uses una sola aplicación de Odoo. Zoho Inventory tiene un plan gratuito limitado a 1 usuario, 2 almacenes y 50 pedidos al mes. Sortly ofrece 100 artículos para 1 usuario. Dolibarr es software libre, gratuito si lo instalas y lo alojas tú mismo. Para empezar sin programa, la hoja de inventario rotativo y el parte de recepción de esta página (PDF y Excel) mantienen al día un stock pequeño.',
      },
      {
        question: '¿Necesito un código de barras GS1 para mis etiquetas?',
        answer: `No para un seguimiento interno. Un código GS1 (GTIN) solo sirve para vender en la gran distribución o en los marketplaces, y GS1 France cobra una afiliación: para una facturación de hasta 50${NBSP}000${NBSP}€, una cuota anual de 104${NBSP}€ sin IVA más una cuota de entrada (tarifas 2026). Para localizar, dar salida o contar tus artículos, unas etiquetas QR generadas por la herramienta y leídas con el móvil cuestan 0${NBSP}€ por etiqueta, como en StockPME. Ojo con los planes: Sortly cobra las etiquetas QR desde 24${NBSP}$ al mes, Zoho solo genera códigos de barras en Premium (129${NBSP}€), Dolibarr necesita un módulo externo para el lector.`,
      },
      {
        question: '¿El inventario rotativo sustituye al inventario anual?',
        answer:
          'No del todo. El Código de Comercio francés (art. L123-12) obliga a comprobar mediante inventario, al menos una vez cada doce meses, la existencia y el valor de las existencias. El inventario rotativo (una zona o una clase de artículos contada cada semana o cada mes) se admite cuando el programa lleva un inventario permanente fiable, siempre que cada referencia se haya contado al menos una vez en el año. El método ABC (artículos A cada mes, B cada trimestre, C cada semestre) es una costumbre, no una norma. Las diferencias detectadas sirven primero para corregir el stock y buscar la causa: rotura, robo, salida o transferencia no registrada.',
      },
      {
        question: '¿Un microempresario francés tiene que hacer inventario?',
        answer:
          'Un microempresario puede no elaborar cuentas anuales (Código de Comercio francés, art. L123-28), así que no se le exige un inventario contable. Si su actividad principal es la venta de mercancías, suministros o alimentos, debe llevar en cambio un registro recapitulativo anual de sus compras, conservado con sus justificantes durante 10 años. Contar el stock sigue siendo la única forma de saber lo que se tiene y lo que se ha perdido; una herramienta que registra cada compra produce ese registro sin volver a teclear nada.',
      },
      {
        question: '¿Cómo seguir el stock de la furgoneta?',
        answer:
          'Tratando la furgoneta como un almacén más: se le transfieren los artículos desde la reserva por la mañana, se escanea lo que sale en la obra o en casa del cliente, y se recuenta al volver. El programa muestra entonces lo que queda en cada vehículo y prepara la reposición. Comprueba el plan antes de firmar: Zoho Inventory limita a 2 almacenes hasta el plan Standard, Stockpit solo gestiona varios lugares de almacenamiento a partir de Smart con Pennylane o Sellsy (con QuickBooks existe un plan Lugares de almacenamiento a 9 dólares), Odoo y Dolibarr gestionan varios almacenes desde el principio. En StockPME, cada transferencia entre ubicaciones o almacenes queda registrada.',
      },
      {
        question: '¿Qué hacer con los productos con la fecha de caducidad superada?',
        answer: `Retirarlos de la venta la víspera: poner a la venta un producto el día siguiente a su fecha de caducidad está prohibido en Francia, con una multa de 1500${NBSP}€ por producto. Un producto con la fecha de consumo preferente (DDM) superada todavía se puede vender. Para los alimentos, la mención de lote (precedida de «${NBSP}L${NBSP}») y la fecha se siguen línea a línea, y en caso de retirada del mercado la empresa declara el producto en la web oficial dedicada y lleva un estado cuantificado de los productos retirados (Código de Consumo francés, art. L423-3). Un programa adecuado da salida primero a los lotes más antiguos, bloquea la venta al llegar la fecha límite y registra la salida como «${NBSP}caducado${NBSP}», con su valor.`,
      },
      {
        question: '¿Qué debe llevar el albarán para la factura electrónica francesa de 2027?',
        answer: `La factura indica la fecha de la venta, es decir el día efectivo de la entrega, la dirección de entrega si es distinta de la de facturación, la naturaleza de la operación (entrega de bienes, prestación o ambas) y, para los profesionales, el número SIREN del cliente. Todas las empresas francesas reciben facturas electrónicas desde el 1 de septiembre de 2026, las pymes y las microempresas deberán emitirlas a partir del 1 de septiembre de 2027, con una multa de 50${NBSP}€ por factura no electrónica. El albarán de tu herramienta debe llevar por tanto la fecha y la dirección reales, y conciliarse con la factura, que se queda en tu programa de facturación.`,
      },
      {
        question: 'Alquiler de material: ¿dónde anotar las inspecciones periódicas (VGP)?',
        answer:
          'Los equipos de trabajo enumerados por orden ministerial (aparatos de elevación, máquinas, andamios…) pasan inspecciones generales periódicas cuyos resultados se anotan en el registro de seguridad (Código del Trabajo francés, art. R4323-23 y R4323-25); para los aparatos de elevación, la periodicidad es de 12 meses. El instituto INRS recuerda que en la práctica estas inspecciones las hace la empresa de alquiler, y el usuario comprueba que se le entregan las actas. Una ficha por equipo con la fecha de la última inspección, el próximo vencimiento y el acta adjunta, y un bloqueo de la salida cuando la fecha ha pasado, evitan alquilar un material sin inspeccionar.',
      },
      {
        question: 'Vendo artículos de segunda mano: ¿qué registro debo llevar?',
        answer: `En Francia, toda empresa que vende bienes muebles de segunda mano (depósito-venta, reacondicionado) lleva un registro de objetos muebles, llamado «${NBSP}livre de police${NBSP}», uno por establecimiento: en papel, foliado y rubricado, o en formato electrónico conforme a la norma ISO 14641-1 con los datos conservados 10 años. Describe cada objeto y a su vendedor, día a día. No llevarlo se castiga con 6 meses de prisión y 30${NBSP}000${NBSP}€ de multa. Un programa de stock que registra el origen de cada entrada puede producir ese registro, siempre que respete el formato legal.`,
      },
      {
        question: '¿Se puede recuperar mi archivo Excel o mi programa actual?',
        answer:
          'Sí. Si tu archivo o tu programa exporta tus artículos, tus cantidades por almacén, tus proveedores y tu historial a Excel o CSV, los recupero en la nueva herramienta; está previsto en el presupuesto, y el primer inventario sirve de punto de partida fiable. Comprueba esta posibilidad de exportación antes de firmar con un editor.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para seguir leyendo',
    slugs: INVENTORY_MANAGEMENT_PAGE_RELATED_ARTICLE_SLUGS,
  },
  contactCta: {
    title: '¿Dudas sobre la herramienta adecuada para tu stock?',
    description:
      'Cuéntame tus almacenes, tu equipo y lo que almacenas en unas líneas. Te respondo en 24 horas, y si un programa del mercado te basta, te lo digo.',
    button: 'Hablar de mi proyecto',
  },
}
