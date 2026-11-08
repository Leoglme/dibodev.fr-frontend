import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  BIKE_IDENTIFICATION_RULES_SOURCE,
  BIKE_REPAIR_TICKET_TEMPLATE_UPDATED_AT,
  SERVICE_PRICE_DISPLAY_SOURCE,
  SERVICE_QUOTE_SOURCE,
} from '~/core/constants/freeTemplates/bikeRepairTicket/pageShared'
import {
  BIKE_SHOP_TEMPLATE_PDF_PATH,
  BIKE_SHOP_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/bikeShopSoftware/pageShared'
import { INVOICE_MENTIONS_SOURCE } from '~/core/constants/tools/fieldServiceSoftware/pageShared'
import { HAIR_SALON_BILL_SOURCE } from '~/core/constants/tradeWebsites/hairSalon/pageShared'
import { NBSP } from '~/core/constants/typography'

export const BIKE_REPAIR_TICKET_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Ficha de reparación de bicicleta gratis: PDF y Excel',
    description:
      'Ficha de reparación de bicicleta y resguardo de depósito: plantilla francesa gratis en PDF y Excel, con presupuesto, piezas y seguimiento. Sin registro.',
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de ficha de depósito y reparación para talleres de bicicletas',
  },
  breadcrumbLabel: 'Ficha de reparación de bicicleta',
  shareImage: {
    titleLines: ['Ficha de reparación', 'de bicicleta gratis'],
    highlight: 'Ficha de reparación',
    subtitle:
      'Resguardo de depósito, presupuesto, piezas y mano de obra en PDF y Excel, seguimiento de las bicis del taller',
    badge: 'Gratis, sin registro',
    icon: 'fileText',
    alt: 'Plantilla francesa de ficha de reparación de bicicleta gratis: resguardo de depósito, presupuesto y seguimiento del taller en PDF y Excel, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Ficha de reparación de bicicleta',
    titleAfter: ': plantilla francesa gratis, PDF y Excel (+ resguardo y presupuesto)',
    reassurances: [
      'Resguardo de depósito + presupuesto + seguimiento',
      'Excel con totales y plazos calculados',
      'Sin registro ni e-mail',
    ],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Una ficha de depósito y reparación lista para rellenar, escrita en francés para el mercado francés, para un taller de bicicletas, una tienda de bicis o un mecánico autónomo. Se rellena en el mostrador, delante del cliente: la bici y su número de marcado, lo que se queda con ella (batería, cargador, candado), su estado a la llegada, y luego el diagnóstico, el presupuesto aceptado o no, las piezas y la mano de obra, y las firmas en el depósito y en la recogida. Una segunda página sigue todas las bicis del taller.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Leí los textos franceses sobre el marcado de las bicicletas, el presupuesto, la exposición de los precios y la factura para que las menciones estén al día.',
    updatedAt: BIKE_REPAIR_TICKET_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para talleres de bicicletas, tiendas de bicis y mecánicos autónomos que trabajan en Francia. Dos archivos en francés, sin formulario: el PDF se imprime, el Excel calcula.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: BIKE_SHOP_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: BIKE_SHOP_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 hojas, totales y plazos calculados, en francés',
      },
    ],
    footnote: 'Plantilla de uso libre, para adaptar a tu taller. No sustituye el consejo de tu contable.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Una ficha de depósito y reparación, y el seguimiento del taller',
    intro:
      'El PDF cabe en dos páginas A4: la ficha que acompaña a la bici del depósito a la recogida, y luego el registro de las bicis y de las piezas pedidas. El Excel las recoge en tres hojas, con los totales del presupuesto, la diferencia con el importe aceptado, los días en el taller y las piezas pendientes calculados.',
    documents: [
      {
        title: 'Ficha de depósito y reparación',
        format: 'Página 1 del PDF, hoja «Fiche et chiffrage» del Excel',
        items: [
          'Cabecera del taller (nombre, dirección, teléfono, SIREN, n.º de IVA o «TVA non applicable»), n.º de ficha, fecha y hora del depósito, recogida prevista, recibido por, y luego tu tarifa horaria y el precio del diagnóstico, gratis o de pago',
          'Cliente (nombre, teléfono, e-mail, empresa y SIREN si es un profesional) y cómo avisarle: SMS, llamada o e-mail',
          'Bici: tipo (ciudad, BTT, carretera, gravel, infantil, cargo, plegable, bicicleta eléctrica), marca, modelo, color, talla, n.º de cuadro, n.º de marcado; para una eléctrica, el motor, el n.º de batería y los kilómetros del contador',
          'Lo que se queda con la bici, en casillas (batería, cargador, llave de la batería, candado y su llave, cuentakilómetros, luces, alforjas, silla infantil), y el estado a la llegada: arañazos, golpes, piezas rotas, fotos tomadas',
          'Petición del cliente, diagnóstico del taller y el presupuesto línea a línea: pieza nueva o de reutilización, cantidad u horas, precio unitario sin IVA, IVA, total sin IVA; totales sin IVA, IVA y con IVA, bono de reparación descontado, anticipo, resto a pagar, n.º de nota o de factura',
          'Acuerdo del cliente (presupuesto aceptado o rechazado, y cómo, importe que no superar sin llamarle, piezas de la economía circular, piezas sustituidas que devolver, gastos de custodia), firmas del taller y del cliente en el depósito y en la recogida, menciones legales',
        ],
      },
      {
        title: 'Seguimiento de las bicis del taller',
        format: 'Página 2 del PDF, hoja «Suivi atelier» del Excel (una línea por bici)',
        items: [
          'N.º de ficha, fecha de depósito, cliente y teléfono, bici (tipo, marca, color), n.º de marcado en el Excel, trabajos solicitados',
          'Presupuesto con IVA y fecha del acuerdo, piezas recibidas el, recogida prevista, cliente avisado el, recogida y pagada el',
          'Estado en siete pasos, de «à diagnostiquer» (por diagnosticar) a «retiré» (recogida), o «refusé» (rechazada) cuando la bici se va sin reparar',
          'En el Excel: días en el taller calculados, retrasos sobre la fecha prometida y bicis listas sin recoger señalados, cuadro de mando de las bicis en el taller, pendientes de acuerdo o de piezas, listas, y de lo cobrado',
        ],
      },
      {
        title: 'Piezas pedidas',
        format: 'Parte baja de la página 2 del PDF, hoja «Pièces» del Excel',
        items: [
          'Una línea por pieza: n.º de ficha (el Excel muestra el cliente solo), pieza y referencia, proveedor, nueva o de reutilización, cantidad',
          'Precio de compra sin IVA y precio de venta con IVA, margen sin IVA calculado',
          'Pedida el, entrega anunciada, recibida el, cliente avisado el; días de espera y estado calculados (por pedir, pedida, con retraso, recibida)',
          'Las piezas aún no recibidas aparecen en el seguimiento del taller, bici por bici',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar la ficha de reparación en cuatro pasos',
    intro:
      'En el Excel, solo se escriben las casillas blancas. Los totales del presupuesto, la diferencia con el importe aceptado, los días en el taller y el estado de las piezas se calculan solos.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Tus datos y tus precios, de una vez por todas',
        description:
          'Rellena la cabecera del taller (nombre, dirección, SIREN, n.º de IVA), tu tarifa horaria y el precio del diagnóstico, como en la lista expuesta en el mostrador, y guarda el archivo como plantilla. Cada nueva ficha parte de esa copia.',
      },
      {
        label: 'Paso 2',
        title: 'En el mostrador, la bici y lo que deja',
        description:
          'Delante del cliente, anota la bici (marca, color, n.º de cuadro y de marcado) y marca lo que se queda con ella: la batería y el cargador de una eléctrica, la llave del candado. Describe el estado a la llegada y haz una foto. El cliente firma en el depósito y se va con su ejemplar.',
      },
      {
        label: 'Paso 3',
        title: 'El diagnóstico y el presupuesto',
        description:
          'Una línea por pieza, por tiempo de mano de obra o por tarifa cerrada. Para las piezas afectadas, ofrece la reutilización y anota la elección del cliente, y luego el importe a partir del cual le llamas. Un acuerdo por teléfono se anota con su fecha; el Excel señala cualquier exceso.',
      },
      {
        label: 'Paso 4',
        title: 'El seguimiento hasta la recogida',
        description:
          'Pasa cada bici al seguimiento: presupuesto, piezas pedidas, cliente avisado. En la recogida, el cliente revisa su bici y firma, y tú le entregas la nota o la factura. El Excel cuenta los días y señala las bicis listas que nadie viene a buscar.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exige la norma francesa',
    title: 'Las menciones que la plantilla ya prevé',
    intro:
      'Cinco normas francesas pasan por la ficha de depósito y reparación. La plantilla les reserva una casilla, una línea o una mención. Este resumen, revisado el 8 de noviembre de 2026, no es un consejo jurídico.',
    facts: [
      {
        contextLabel: 'Desde el 1 de enero de 2021',
        title: 'El número de marcado de las bicis vendidas',
        text: `En Francia, toda bicicleta, eléctrica o no, vendida por un comerciante lleva un identificador: desde el 1 de enero de 2021 para una bici nueva, desde el 1 de julio de 2021 para una de segunda mano. Las bicis infantiles con ruedas de 16${NBSP}pulgadas o menos están exentas. La ficha tiene su casilla «n.º de marcado», junto al n.º de cuadro.`,
        sourceName: BIKE_IDENTIFICATION_RULES_SOURCE.name,
        sourceUrl: BIKE_IDENTIFICATION_RULES_SOURCE.url,
      },
      {
        contextLabel: 'En la recepción del taller',
        title: 'Tu lista de precios, expuesta',
        text: 'La lista de tus servicios y el precio de cada uno se exponen en euros con IVA en un documento único, legible desde donde recibes a los clientes. Un diagnóstico o un presupuesto de pago también figura en ella. La ficha recoge tu tarifa horaria y el precio del diagnóstico.',
        sourceName: SERVICE_PRICE_DISPLAY_SOURCE.name,
        sourceUrl: SERVICE_PRICE_DISPLAY_SOURCE.url,
      },
      {
        contextLabel: 'Si el cliente lo pide',
        title: 'Un presupuesto detallado, gratis salvo aviso',
        text: 'Cuando el precio no puede fijarse de antemano, entregas un presupuesto suficientemente detallado al cliente que lo pide. En principio es gratis; si es de pago, su precio se anuncia antes y puede descontarse de la reparación. Te compromete sobre los trabajos, el precio y el plazo; el cliente solo queda comprometido cuando da su acuerdo.',
        sourceName: SERVICE_QUOTE_SOURCE.name,
        sourceUrl: SERVICE_QUOTE_SOURCE.url,
      },
      {
        contextLabel: `Desde 25${NBSP}€ con IVA`,
        title: 'Una nota detallada antes del pago',
        text: `Para todo servicio de 25${NBSP}€ con IVA o más, entregas una nota antes del pago: fecha, nombre y dirección del taller, nombre del cliente salvo que se oponga, fecha y lugar de la reparación, desglose de piezas y mano de obra, totales sin IVA y con IVA. Guardas el duplicado 2${NBSP}años.`,
        sourceName: HAIR_SALON_BILL_SOURCE.name,
        sourceUrl: HAIR_SALON_BILL_SOURCE.url,
      },
      {
        contextLabel: 'En cada factura',
        title: 'Las menciones de la factura',
        text: 'Número único y correlativo, fecha, nombre, dirección y SIREN del taller, con «EI» si eres empresario individual, descripción de cada pieza y de la mano de obra con cantidad, precio unitario sin IVA y tipo de IVA, totales sin IVA y con IVA. En franquicia de IVA, la mención «TVA non applicable, art. 293 B du code général des impôts».',
        sourceName: INVOICE_MENTIONS_SOURCE.name,
        sourceUrl: INVOICE_MENTIONS_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Plantilla de ficha de reparación de bicicleta: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de ficha de reparación de bicicleta es realmente gratis?',
        answer:
          'Sí. Los dos archivos se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» a pie de página, que puedes quitar.',
      },
      {
        question: '¿Un taller de bicicletas en Francia tiene que hacer presupuesto?',
        answer:
          'No para todo. Exponer tus precios basta en la mayoría de los casos, para un pinchazo o un ajuste de frenos al precio expuesto, por ejemplo. Pero cuando el precio no puede fijarse de antemano, una asistencia eléctrica que se corta o una rueda que rehacer, entregas un presupuesto suficientemente detallado al cliente que lo pide. Te compromete sobre los trabajos, el precio y el plazo; el cliente solo queda comprometido cuando da su acuerdo.',
      },
      {
        question: '¿Se puede cobrar el diagnóstico o el presupuesto?',
        answer:
          'Sí, si anuncias su precio al cliente antes de hacerlo y figura en la lista de precios expuesta en el taller. El presupuesto es en principio gratis, pero nada impide cobrarlo, sobre todo cuando exige un estudio a fondo. Puedes proponer descontar su importe si el cliente acepta la reparación: la ficha tiene la casilla «diagnóstico de pago» y el importe descontado.',
      },
      {
        question: '¿Hay que anotar el número de marcado de la bici?',
        answer:
          'No es una obligación del taller que repara: en Francia, el marcado se exige en la venta. Pero es la forma más segura de no confundir dos bicis negras de la misma marca. Toda bici vendida por un comerciante lleva un identificador desde 2021, nueva (1 de enero) o de segunda mano (1 de julio); una bici más antigua o comprada a un particular puede no tenerlo. Anota entonces «non marqué» (sin marcar) y el número de cuadro.',
      },
      {
        question: '¿Qué más anotar para una bicicleta eléctrica?',
        answer:
          'Lo que se separa de la bici: la batería, el cargador y la llave de la batería. La ficha los tiene en casillas, con el n.º de batería, la marca del motor y los kilómetros del contador, útiles para una garantía o el historial de mantenimiento. En la recogida, el cliente comprueba que se va con todo lo que dejó.',
      },
      {
        question: '¿Hay que dar una factura al cliente?',
        answer: `Desde 25${NBSP}€ con IVA, sí: una nota detallada, entregada antes del pago, de la que guardas el duplicado 2${NBSP}años; por debajo, si el cliente la pide. El desglose de piezas y mano de obra puede omitirse si un presupuesto detallado, aceptado por el cliente, corresponde a los trabajos hechos. Para un cliente profesional, la factura es obligatoria sea cual sea el importe.`,
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer: `En la hoja «Fiche et chiffrage», escribes tu tarifa horaria sin IVA y una línea por pieza, tiempo de mano de obra o tarifa cerrada: para la mano de obra bastan las horas, la tarifa se aplica. Los totales sin IVA, el IVA (20${NBSP}% por defecto, modificable línea a línea) y con IVA, el resto a pagar y la diferencia con el presupuesto aceptado se calculan, y aparece un aviso por encima del importe autorizado por el cliente. La hoja «Suivi atelier» cuenta los días en el taller y señala los retrasos y las bicis listas sin recoger; la hoja «Pièces» calcula los plazos y el margen.`,
      },
      {
        question: '¿Y cuando las bicis se acumulan en el taller?',
        answer: `Una plantilla Excel basta mientras las fichas quepan en el banco de trabajo. Más allá, los programas franceses para talleres de bicicletas (Epsylon, Atelier Vélo+, CycleSoftware, Shifter) encadenan ficha de reparación, presupuesto, stock de piezas y caja, desde 9${NBSP}€ al mes en Epsylon (precios consultados el 29 de septiembre de 2026). Si tu organización sale de su marco, el test de la página de la herramienta te dice qué elegir.`,
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description: `Cuando las fichas, los presupuestos y el seguimiento de las bicis se copian de un archivo a otro, y hay que llamar a cada cliente para decirle que su bici está lista, una herramienta que los encadena te devuelve horas. Descríbeme tu taller: te respondo en 24${NBSP}h, y si un programa del mercado basta, te lo digo.`,
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas para talleres de bicicletas',
  },
}
