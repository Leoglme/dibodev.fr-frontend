import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  B2B_PAYMENT_TERMS_SOURCE,
  COMMERCIAL_DOCUMENTS_SOURCE,
  CONSUMER_DELIVERY_DATE_SOURCE,
  CONSUMER_DEPOSIT_SOURCE,
  PURCHASE_ORDER_TEMPLATE_DOCX_PATH,
  PURCHASE_ORDER_TEMPLATE_PDF_PATH,
  PURCHASE_ORDER_TEMPLATE_UPDATED_AT,
  PURCHASE_ORDER_TEMPLATE_XLSX_PATH,
  SALE_AGREEMENT_SOURCE,
  TERMS_OF_SALE_SOURCE,
} from '~/core/constants/freeTemplates/purchaseOrder/pageShared'
import { NBSP } from '~/core/constants/typography'

export const PURCHASE_ORDER_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Hoja de pedido: plantilla francesa gratis (PDF, Word, Excel)',
    description:
      'Hoja de pedido: plantilla francesa gratis en PDF, Word y Excel, a proveedor o de cliente, totales con IVA calculados, anticipo o señal y registro de pedidos.',
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de hoja de pedido (bon de commande) y de registro de pedidos',
  },
  breadcrumbLabel: 'Hoja de pedido',
  shareImage: {
    titleLines: ['Hoja de pedido', 'plantilla gratis'],
    highlight: 'Hoja de pedido',
    subtitle: 'Hoja de pedido y seguimiento de pedidos en PDF, Word y Excel, totales sin IVA, IVA y con IVA calculados',
    badge: 'Gratis, sin registro',
    icon: 'receipt',
    alt: 'Plantilla francesa de hoja de pedido gratis: hoja de pedido y seguimiento de pedidos en PDF, Word y Excel, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Hoja de pedido',
    titleAfter: ': plantilla francesa gratis, PDF, Word y Excel (+ seguimiento de pedidos)',
    reassurances: [
      'Proveedor o cliente, una sola hoja',
      'Excel con los totales e IVA calculados',
      'Sin registro ni e-mail',
    ],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Una hoja de pedido (bon de commande) lista para rellenar, escrita en francés para el mercado francés, que sirve en los dos sentidos: cuando pides a un proveedor y cuando un cliente te hace un pedido. Una casilla dice quién es el comprador. La hoja recoge los identificadores de las dos partes, las líneas con su precio unitario sin IVA, su descuento y su tipo de IVA, la suma pagada con el pedido indicando si es un anticipo firme (acompte) o una señal (arrhes), la fecha de entrega y el plazo de pago, y dos firmas. La página 2 sigue todos los pedidos del periodo: pedido, recibido, pendiente de entrega, pendiente de pago.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Creé StockPME, un programa de gestión de stock que siguen usando pymes, y leí los artículos de los códigos civil, de consumo y de comercio franceses que afectan al pedido, para que las menciones sean exactas.',
    updatedAt: PURCHASE_ORDER_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para profesionales, comercios y pequeñas empresas que trabajan en Francia y hacen o reciben pedidos. Tres archivos en francés, sin formulario: el PDF se imprime y se firma, el Excel calcula los totales y sigue los pedidos, el Word se modifica libremente.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: PURCHASE_ORDER_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: PURCHASE_ORDER_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 hojas, totales calculados, en francés',
      },
      {
        label: 'Descargar la versión Word',
        href: PURCHASE_ORDER_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 páginas, editable, en francés',
      },
    ],
    footnote:
      'Plantilla de uso libre, para adaptar a tu empresa. No sustituye el consejo de un jurista ni el de tu gestor contable.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Una hoja de pedido, un seguimiento de pedidos y una lista de proveedores y clientes',
    intro:
      'El PDF cabe en dos páginas A4: la hoja de pedido y, después, el seguimiento de los pedidos del periodo. El Excel añade una tercera hoja, la lista de tus proveedores y clientes, que rellena la hoja de pedido y calcula los vencimientos de pago.',
    documents: [
      {
        title: 'Hoja de pedido',
        format: 'Página 1 del PDF, hoja «Bon de commande» del Excel',
        items: [
          'Sentido del pedido en dos casillas: pido a un proveedor (soy el comprador) o mi cliente me pide (soy el vendedor)',
          'N.º del pedido, fecha, n.º del presupuesto u oferta aceptada, persona que sigue el pedido',
          'Comprador y vendedor: nombre o razón social, dirección, SIREN o SIRET, n.º de IVA intracomunitario, contacto, y una casilla «el comprador es un particular»',
          '12 líneas (15 en el Excel): referencia, descripción, cantidad, unidad, precio unitario sin IVA, descuento, tipo de IVA, total sin IVA',
          'Totales: total sin IVA, descuento global, gastos de envío, IVA por tipo, total con IVA, suma pagada con el pedido con la casilla anticipo o señal, pendiente de pago',
          'Entrega (dirección, fecha o plazo acordado, modo, gastos), pago (modo, vencimiento, penalizaciones por retraso, condiciones generales adjuntas), firma «Bon pour commande» del comprador y aceptación del vendedor',
        ],
      },
      {
        title: 'Seguimiento de pedidos',
        format: 'Página 2 del PDF, hoja «Registre des commandes» del Excel',
        items: [
          'Una línea por pedido: n.º, fecha, sentido (compra o venta), proveedor o cliente, objeto, importe con IVA, suma pagada por adelantado',
          'Entrega prevista el, cantidad pedida, cantidad recibida y pendiente de entrega',
          'En el Excel, estado de la entrega calculado a la fecha de hoy: en espera, parcial, con retraso, entregado, con los días de retraso',
          'N.º y fecha de la factura, vencimiento calculado con el plazo de pago del proveedor o del cliente, fecha del pago, pendiente de pago y estado (sin facturar, por pagar, con retraso, pagado)',
          'Arriba del Excel: pedidos por entregar, entregas con retraso, pendiente de pago en compras, pendiente de cobro en ventas',
          'En el PDF, la lista que revisar antes de firmar un pedido y qué hacer cuando llega la mercancía',
        ],
      },
      {
        title: 'Proveedores y clientes',
        format: 'Hoja «Fournisseurs et clients» del Excel',
        items: [
          'Nombre, papel (proveedor, cliente o ambos), SIREN o SIRET, n.º de IVA intracomunitario, dirección, contacto',
          'Plazo de pago acordado en días, en rojo si supera 60 días entre profesionales',
          'Casilla «particular» que, en la hoja de pedido, activa los recordatorios del Código de Consumo francés',
          'Eliges un nombre en la hoja de pedido o en el registro: dirección, SIRET, contacto y vencimiento se rellenan solos',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar la hoja de pedido en cuatro pasos',
    intro:
      'En el Excel, las casillas amarillas se eligen o se escriben, las blancas son texto libre. Los totales, el IVA por tipo, lo pendiente de pago, la fecha límite de entrega y los estados del registro se calculan solos. Las líneas de ejemplo son para borrar.',
    steps: [
      {
        label: 'Paso 1',
        title: 'El sentido del pedido y las dos partes',
        description:
          'Marca si pides a un proveedor o si tu cliente te hace el pedido: eso dice quién es el comprador. Rellena los dos bloques con el SIREN o SIRET y los números de IVA. Si el comprador es un particular, marca la casilla: se aplican otras normas.',
      },
      {
        label: 'Paso 2',
        title: 'Una línea por referencia',
        description:
          'Copia el número del presupuesto u oferta que el pedido acepta, y sus líneas con los mismos precios: referencia, descripción precisa (modelo, medidas, color), cantidad, unidad, precio unitario sin IVA, descuento y tipo de IVA. El Excel calcula cada total, el IVA por tipo y el total con IVA.',
      },
      {
        label: 'Paso 3',
        title: 'Entrega, pago y suma pagada',
        description:
          'Escribe una fecha o un plazo de entrega, el plazo de pago y el modo de pago. Si se paga una suma con el pedido, marca «acompte» (anticipo firme) o «arrhes» (señal): la palabra cambia lo que pasa si una de las partes se echa atrás.',
      },
      {
        label: 'Paso 4',
        title: 'Dos firmas y, después, el seguimiento',
        description:
          'El comprador firma «Bon pour commande», el vendedor fecha su aceptación, cada uno se queda un ejemplar. Pasa el pedido al registro. Cuando llegue la mercancía, revísala con un parte de recepción, anota la cantidad recibida y después la factura y su pago.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exige la norma francesa',
    title: 'Las normas que la hoja de pedido ya sigue',
    intro:
      'Seis normas de los códigos civil, de consumo y de comercio franceses pasan por una hoja de pedido. La plantilla les reserva una casilla, una línea o una mención; no sustituye el consejo de un jurista en caso de litigio.',
    facts: [
      {
        contextLabel: 'Código Civil francés, art. 1583',
        title: 'Con acuerdo sobre la cosa y el precio, la venta está hecha',
        text: 'La venta es perfecta entre las partes en cuanto están de acuerdo sobre la cosa y el precio, aunque todavía no se haya entregado ni pagado nada. Una hoja firmada por el comprador y aceptada por el vendedor guarda la prueba: de ahí las referencias, las cantidades, los precios unitarios y las dos firmas con fecha.',
        sourceName: SALE_AGREEMENT_SOURCE.name,
        sourceUrl: SALE_AGREEMENT_SOURCE.url,
      },
      {
        contextLabel: 'Comprador particular, art. L214-1',
        title: 'Sin la palabra «acompte», la suma pagada es una señal',
        text: 'Entre un profesional y un consumidor, salvo pacto en contrario, las sumas pagadas por adelantado son arrhes (señal): cada parte puede desistir, el cliente perdiéndolas y el profesional devolviéndolas dobladas. Un anticipo firme (acompte), en cambio, hace el pedido firme. La hoja lleva las dos casillas junto al importe pagado.',
        sourceName: CONSUMER_DEPOSIT_SOURCE.name,
        sourceUrl: CONSUMER_DEPOSIT_SOURCE.url,
      },
      {
        contextLabel: 'Comprador particular, art. L216-1',
        title: '30 días como máximo si no hay fecha escrita',
        text: 'El profesional entrega en la fecha o en el plazo indicado al consumidor. Si no, entrega sin retraso injustificado y como muy tarde treinta días después de celebrar el contrato. La hoja tiene una línea «fecha o plazo de entrega acordado», y el Excel calcula la fecha límite.',
        sourceName: CONSUMER_DELIVERY_DATE_SOURCE.name,
        sourceUrl: CONSUMER_DELIVERY_DATE_SOURCE.url,
      },
      {
        contextLabel: 'Entre profesionales, art. L441-10',
        title: '30 días por defecto, 60 días como máximo tras la factura',
        text: 'Sin acuerdo, el pago se hace como muy tarde 30 días después de recibir la mercancía. El plazo acordado no puede superar 60 días desde la fecha de la factura, o 45 días fin de mes si se escribe en el contrato. Las penalizaciones por retraso no pueden ser inferiores a tres veces el tipo de interés legal francés.',
        sourceName: B2B_PAYMENT_TERMS_SOURCE.name,
        sourceUrl: B2B_PAYMENT_TERMS_SOURCE.url,
      },
      {
        contextLabel: 'Condiciones generales de venta',
        title: 'Obligatorias con un particular, a enviar al profesional que las pida',
        text: `Entre profesionales, las condiciones generales de venta (CGV) no son obligatorias, pero las que existen se envían al cliente profesional que las pide; prevén la indemnización fija de 40${NBSP}€ por gastos de cobro en caso de retraso. Con un consumidor, se entregan antes del contrato. La hoja tiene una casilla «CGV entregadas y aceptadas».`,
        sourceName: TERMS_OF_SALE_SOURCE.name,
        sourceUrl: TERMS_OF_SALE_SOURCE.url,
      },
      {
        contextLabel: 'Ni presupuesto ni factura',
        title: 'La factura recoge el número de la hoja de pedido',
        text: 'El presupuesto es el documento entregado antes del contrato; la factura llega después y lleva el número del pedido cuando el comprador lo emitió primero. Una hoja de pedido se conserva 5 años, o 10 años si sirve de justificante contable. De ahí el n.º del presupuesto aceptado arriba de la hoja, y la factura anotada en el registro.',
        sourceName: COMMERCIAL_DOCUMENTS_SOURCE.name,
        sourceUrl: COMMERCIAL_DOCUMENTS_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Hoja de pedido: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de hoja de pedido es gratis? ¿Hay versión Word?',
        answer:
          'Sí, es gratis: los tres archivos se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos. También hay versión Word: el PDF se imprime y se rellena a mano, el Word se modifica libremente, el Excel se rellena en pantalla y calcula los totales. Única contrapartida: una línea «plantilla propuesta por Dibodev» a pie de página, que puedes quitar.',
      },
      {
        question: '¿Una hoja de pedido firmada obliga al comprador en Francia?',
        answer:
          'Sí, en cuanto comprador y vendedor están de acuerdo sobre los artículos y el precio: el Código Civil francés (art. 1583) considera entonces la venta hecha, incluso antes de la entrega y del pago. El contrato se forma con el encuentro de una oferta y una aceptación (art. 1113); la hoja firmada por las dos partes es la prueba más sencilla. Si el vendedor no la firma, guarda una prueba escrita de su conformidad.',
      },
      {
        question: '¿Qué diferencia hay entre hoja de pedido, presupuesto y factura?',
        answer:
          'El presupuesto es la oferta del vendedor, entregada antes del contrato. La hoja de pedido es el compromiso del comprador, a menudo con el número del presupuesto. La factura llega después de la entrega o del servicio y pide el pago; lleva el número del pedido cuando el comprador lo emitió primero. Los tres se archivan juntos.',
      },
      {
        question: 'Acompte o arrhes: ¿qué poner en la hoja?',
        answer:
          'Un acompte (anticipo) hace el pedido firme: ni el comprador ni el vendedor pueden echarse atrás. Las arrhes (señal) permiten a cada parte desistir, el comprador perdiéndolas, el vendedor devolviéndolas dobladas. Cuando el comprador es un particular, una suma pagada por adelantado sin precisión vale como arrhes (Código de Consumo francés, art. L214-1): marca siempre una de las dos casillas.',
      },
      {
        question: '¿Hay que escribir una fecha de entrega?',
        answer:
          'Con un cliente particular, sí: el vendedor debe indicarle una fecha o un plazo, y sin fecha el Código de Consumo francés fija 30 días como máximo tras el pedido (art. L216-1). Si la entrega se retrasa, Service-Public explica que el cliente puede pedir la entrega en un nuevo plazo razonable, y después anular el pedido y recuperar su dinero. Entre profesionales, la fecha se acuerda libremente, pero escribirla en la hoja evita discusiones.',
      },
      {
        question: '¿Qué plazos de pago hay entre profesionales en Francia?',
        answer: `Sin acuerdo, 30 días después de recibir la mercancía o de prestar el servicio. El plazo acordado no puede superar 60 días desde la fecha de la factura, o 45 días fin de mes si se escribe en el contrato (Código de Comercio francés, art. L441-10). En caso de retraso, las penalizaciones son de al menos tres veces el tipo de interés legal, más la indemnización fija de 40${NBSP}€ por gastos de cobro.`,
      },
      {
        question: '¿Cuánto tiempo hay que guardar las hojas de pedido?',
        answer:
          'Entreprendre.Service-Public indica 5 años para una hoja de pedido de uso comercial, y 10 años cuando sirve de justificante contable. Lo más sencillo es archivarla con la factura que lleva su número, y guardar el registro de pedidos junto a ellas.',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer:
          'Tres hojas. En «Bon de commande», eliges el sentido y el proveedor o cliente de la lista, y su dirección y su SIRET se rellenan; los totales sin IVA, el IVA por tipo, el total con IVA, la suma pagada y lo pendiente de pago se calculan, y unas alertas recuerdan las normas cuando el comprador es un particular. «Registre des commandes» calcula lo pendiente de entrega, los retrasos, el vencimiento y lo pendiente de pago. «Fournisseurs et clients» guarda la lista. Cada hoja se imprime en una página A4.',
      },
      {
        question: '¿Y para revisar la mercancía cuando llega?',
        answer:
          'La hoja de pedido dice lo que esperas; la entrega se revisa línea por línea en un parte de recepción (cantidades pedida, entregada y aceptada, reservas, fotos). La plantilla «hoja de inventario + parte de recepción» de dibodev.fr incluye uno, junto a esta hoja. Después pasa la cantidad recibida al registro: lo pendiente de entrega se actualiza solo.',
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description: `Cuando los pedidos se copian a mano en el stock, los pendientes se siguen de memoria y las facturas se cuadran una a una, una herramienta que enlaza pedido, recepción y stock te devuelve horas. Descríbeme tus compras y tus ventas: te respondo en 24${NBSP}h, y si un programa del mercado basta, te lo digo.`,
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas de gestión de stock',
  },
}
