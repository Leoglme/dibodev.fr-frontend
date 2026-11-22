import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  CASH_PAYMENT_CEILING_SOURCE,
  INVOICING_OBLIGATION_SOURCE,
  PAYMENT_PROOF_SOURCE,
  PAYMENT_RECEIPT_TEMPLATE_DOCX_PATH,
  PAYMENT_RECEIPT_TEMPLATE_PDF_PATH,
  PAYMENT_RECEIPT_TEMPLATE_UPDATED_AT,
  PAYMENT_RECEIPT_TEMPLATE_XLSX_PATH,
  SERVICE_NOTE_SOURCE,
} from '~/core/constants/freeTemplates/paymentReceipt/pageShared'
import { CONSUMER_DEPOSIT_SOURCE } from '~/core/constants/freeTemplates/purchaseOrder/pageShared'

export const PAYMENT_RECEIPT_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Recibo de pago: plantilla gratis (PDF, Word, Excel)',
    description:
      'Recibo de pago francés gratis en PDF, Word y Excel: talonario de 3 recibos con matriz, recibo de anticipo, saldo pendiente calculado, efectivo o señal.',
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de recibo de pago, talonario de recibos con matriz y recibo de anticipo',
  },
  breadcrumbLabel: 'Recibo de pago',
  shareImage: {
    titleLines: ['Recibo de pago', 'plantilla gratis'],
    highlight: 'Recibo de pago',
    subtitle: 'Talonario de recibos con matriz y recibo de anticipo en PDF, Word y Excel, saldo pendiente calculado',
    badge: 'Gratis, sin registro',
    icon: 'receipt',
    alt: 'Plantilla francesa de recibo de pago gratis: talonario de recibos con matriz y recibo de anticipo en PDF, Word y Excel, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Recibo de pago',
    titleAfter: ': plantilla francesa gratis, PDF, Word y Excel (+ recibo de anticipo)',
    reassurances: [
      'Talonario de 3 recibos con matriz',
      'Recibo de anticipo con el saldo pendiente',
      'Sin registro ni e-mail',
    ],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Escrita en francés para empresas y particulares en Francia. Un recibo (reçu) dice algo sencillo: tal importe se entregó, tal día, por tal persona, por tal motivo. La primera página es un talonario de tres recibos para recortar, cada uno con su matriz, que se queda contigo, para los pagos del día a día en efectivo, con cheque o por transferencia. La segunda es un recibo de anticipo detallado (reçu d’acompte), para cuando un cliente paga parte del precio antes de la obra o de la entrega: recoge el presupuesto, los pagos ya hechos y el saldo pendiente. El Excel numera, suma y revisa cada línea.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Leí el Código Civil francés sobre la prueba del pago, la orden de 1983 sobre la nota de servicios, el Código Monetario y Financiero sobre el efectivo y las fichas de Service-Public sobre el anticipo y la factura, para que el recibo diga lo que prueba, y nada más.',
    updatedAt: PAYMENT_RECEIPT_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para artesanos, comerciantes, autónomos, asociaciones y particulares en Francia que cobran un importe y quieren guardar constancia. Tres archivos en francés, sin formulario: el PDF se imprime y se recorta, el Excel lleva el registro y calcula el saldo pendiente, el Word se modifica libremente.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: PAYMENT_RECEIPT_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: PAYMENT_RECEIPT_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 hojas, totales calculados, en francés',
      },
      {
        label: 'Descargar la versión Word',
        href: PAYMENT_RECEIPT_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 páginas, editable, en francés',
      },
    ],
    footnote:
      'Plantilla de uso libre, para adaptar a tu actividad. No sustituye ni una factura ni el consejo de tu contable.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Un talonario de recibos, un recibo de anticipo y un registro que hace las cuentas',
    intro:
      'El PDF ocupa dos páginas A4: tres recibos para recortar con su matriz y luego un recibo de anticipo. El Excel los sustituye por un registro numerado, un recibo que se rellena solo a partir del registro y un resumen por mes.',
    documents: [
      {
        title: 'Talonario de tres recibos con matriz',
        format: 'Página 1 del PDF y del Word, hoja «Reçu à imprimer» del Excel',
        items: [
          'Arriba, el talonario: números del primer y del último recibo, persona que lo lleva',
          'Una matriz por recibo, a la izquierda, que se queda contigo: número, fecha, recibido de, importe, forma de pago, concepto, saldo pendiente',
          'El recibo, a la derecha, tras una línea de puntos: número, fecha, quién cobra (nombre, dirección, número SIRET), quién paga, el importe en cifras en un recuadro y en letras, el concepto con el número de presupuesto o de factura',
          'Forma de pago en cinco casillas: efectivo, cheque con su número, transferencia, tarjeta, otra',
          'Naturaleza del pago en cuatro casillas: pago completo, anticipo (acompte), señal (arrhes) o saldo, y el saldo pendiente',
          'Lugar, fecha y recuadro de firma de la persona que recibe el dinero',
        ],
      },
      {
        title: 'Recibo de anticipo',
        format: 'Página 2 del PDF y del Word, hojas «Registre des reçus» y «Reçu à imprimer» del Excel',
        items: [
          'Quién cobra (nombre, dirección, SIREN o SIRET, número de IVA) y quién paga, con tres casillas: particular, profesional o asociación',
          'El presupuesto o el pedido: número, fecha de aceptación, total sin IVA, IVA, total con IVA, concepto, fecha o plazo de ejecución previsto',
          'Tabla de los pagos ya hechos sobre ese presupuesto (fecha, número de recibo, naturaleza, forma de pago, importe), el importe recibido hoy, el total recibido y el saldo pendiente',
          'Dos casillas, anticipo o señal, cada una con lo que compromete, y el recordatorio de lo que vale un pago sin palabra escrita',
          'Forma de pago con el tope del efectivo, y un recuadro «Este recibo no es una factura» que dice cuándo sigue debiéndose una factura o una nota',
          'Dos firmas: el profesional que reconoce haber recibido el importe y el cliente',
        ],
      },
      {
        title: 'Registro y resumen',
        format: 'Hojas «Registre des reçus» y «Synthèse» del Excel, sin equivalente en el PDF',
        items: [
          '60 recibos numerados: fecha, pagador y su tipo, concepto, número de presupuesto o de factura, naturaleza y forma de pago elegidas en una lista, importe',
          'Para cada recibo, lo ya recibido sobre el mismo presupuesto y el saldo pendiente, calculados sumando las líneas anteriores',
          'Una columna de avisos: número repetido, efectivo por encima del tope, más recibido que el total debido, pago de un particular sin la palabra anticipo o señal, cliente profesional sin número de factura',
          'Resumen del año en una casilla amarilla: cobros de cada mes por forma de pago, totales por naturaleza y tres puntos que revisar',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar un recibo de pago en cuatro pasos',
    intro:
      'El PDF se rellena a mano, primero la matriz. En el Excel todo parte del registro: el recibo para imprimir y el resumen se actualizan solos. Las líneas «exemple» son para borrar.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Numera el talonario antes del primer recibo',
        description:
          'Escribe el primer y el último número del talonario, y luego un número en cada matriz y en cada recibo, seguidos. Un recibo mal hecho no se tira: táchalo y guárdalo con su matriz, para que no falte ningún número.',
      },
      {
        label: 'Paso 2',
        title: 'La matriz y luego el recibo',
        description:
          'Rellena la matriz antes de separar el recibo: es tu única constancia. En el recibo, escribe el importe en cifras y en letras, el concepto con el número del presupuesto o de la factura, y marca la forma de pago. Para un cheque, anota su número.',
      },
      {
        label: 'Paso 3',
        title: 'Un adelanto sobre un presupuesto: el recibo de anticipo',
        description:
          'Si el importe solo paga una parte del precio, usa la página 2. Copia el total del presupuesto y los pagos ya hechos, marca anticipo o señal como en el presupuesto firmado, y calcula el saldo pendiente. En el Excel, basta con el mismo número de presupuesto en cada línea para que el saldo se calcule.',
      },
      {
        label: 'Paso 4',
        title: 'Firma, entrega, archiva',
        description:
          'Firma el recibo y entrégalo a quien pagó. El recibo de anticipo se hace por duplicado, uno para cada parte. A fin de mes, el resumen del Excel te da los cobros por forma de pago, para cotejarlos con tu extracto bancario.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exigen las normas francesas',
    title: 'Lo que prueba un recibo en Francia, y los documentos que no sustituye',
    intro:
      'Ningún texto francés exige un recibo para cada pago. Pero cinco reglas dicen lo que vale, lo que se escribe en él y cuándo hace falta otra cosa; la plantilla no sustituye el consejo de tu contable.',
    facts: [
      {
        contextLabel: 'Código Civil francés, art. 1342-8',
        title: 'El pago se prueba por cualquier medio',
        text: 'Un extracto bancario, la matriz de un cheque, un mensaje: todo puede probar que se pagó un importe. El recibo firmado por quien recibe el dinero es la prueba más sencilla, sobre todo para el efectivo, que no deja otro rastro. De ahí el número, la fecha, el importe en letras y la firma.',
        sourceName: PAYMENT_PROOF_SOURCE.name,
        sourceUrl: PAYMENT_PROOF_SOURCE.url,
      },
      {
        contextLabel: 'Servicios, orden del 3 de octubre de 1983',
        title: 'Una nota desde 25 € con IVA, entregada antes del pago',
        text: 'Un servicio cuyo precio llega a 25 € con IVA da lugar a una nota (note), entregada en cuanto se presta el servicio y en todo caso antes del pago; por debajo, al cliente que la pida. Lleva la fecha, el nombre y la dirección del prestador, el nombre del cliente, la fecha y el lugar del servicio, el detalle en cantidades y precios, y el total sin IVA y con IVA. Se hace por duplicado, y el prestador guarda el suyo dos años.',
        sourceName: SERVICE_NOTE_SOURCE.name,
        sourceUrl: SERVICE_NOTE_SOURCE.url,
      },
      {
        contextLabel: 'Entre profesionales',
        title: 'El recibo no sustituye la factura',
        text: 'Entre profesionales en Francia, la factura es obligatoria para cada venta de bienes o prestación de servicios. Un recibo puede añadirse para un pago al contado, nunca sustituirla. Para una venta de bienes a un particular, la factura o la nota solo se debe si la pide, en una venta a distancia o en una entrega intracomunitaria exenta.',
        sourceName: INVOICING_OBLIGATION_SOURCE.name,
        sourceUrl: INVOICING_OBLIGATION_SOURCE.url,
      },
      {
        contextLabel: 'Código Monetario y Financiero francés, D112-3',
        title: 'Efectivo: 1000 € como máximo a un profesional',
        text: 'Un particular con domicilio fiscal en Francia puede pagar a un profesional en efectivo hasta 1000 €, igual que un profesional que paga a otro. El tope sube para un particular con domicilio fiscal en el extranjero. Si se supera, la multa llega al 5 % de las sumas, repartida a medias entre quien paga y quien acepta. Entre particulares no hay tope, pero por encima de 1500 € hace falta un escrito.',
        sourceName: CASH_PAYMENT_CEILING_SOURCE.name,
        sourceUrl: CASH_PAYMENT_CEILING_SOURCE.url,
      },
      {
        contextLabel: 'Anticipo o señal',
        title: 'La palabra escrita en el recibo decide lo que se devuelve',
        text: 'Tras un anticipo (acompte), las dos partes deben llegar hasta el final. Con una señal (arrhes), el cliente puede desistir perdiéndola, y el profesional devolviéndola por el doble. Si no se precisa nada, un importe pagado por adelantado vale como señal. El recibo repite la palabra del presupuesto firmado: si se contradicen, el litigio está servido.',
        sourceName: CONSUMER_DEPOSIT_SOURCE.name,
        sourceUrl: CONSUMER_DEPOSIT_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Recibo de pago: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de recibo de pago es gratis, y existe en Word?',
        answer:
          'Sí a las dos cosas. El PDF, el Excel y el Word se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos todo lo que quieras. Única contrapartida: una línea «modèle proposé par Dibodev» en el pie de página, que puedes quitar.',
      },
      {
        question: 'Recibo, nota o factura: ¿qué diferencia hay?',
        answer:
          'El recibo acredita que se entregó un importe; no detalla lo que se vendió. La factura y la nota detallan la venta o el servicio, las cantidades, los precios y los totales sin IVA y con IVA. Entre profesionales en Francia, la factura es obligatoria para cada venta o servicio; para un servicio a un particular, la nota lo es desde 25 € con IVA. El recibo se añade, no sustituye a ninguna de las dos.',
      },
      {
        question: '¿Un recibo de pago es obligatorio en Francia?',
        answer:
          'No encontré ningún texto que lo exija para cada pago. El Código Civil dice que el pago se prueba por cualquier medio: transferencias y cheques dejan rastro en el banco, el efectivo no deja ninguno. Ahí es donde el recibo más sirve, y para un adelanto pagado sobre un presupuesto. Quien paga tiene todo el interés en pedirlo.',
      },
      {
        question: '¿Qué datos poner en un recibo de pago?',
        answer:
          'Un número, la fecha, el nombre de quien cobra y de quien paga, el importe en cifras y en letras, el concepto, la forma de pago y la firma de quien cobra. El talonario añade la naturaleza (pago completo, anticipo, señal o saldo) y el saldo pendiente. Para una empresa, el nombre, la dirección y el número SIRET evitan cualquier duda sobre quién cobró.',
      },
      {
        question: '¿Cómo hacer un recibo de anticipo?',
        answer:
          'Usa la página 2: copia el número y el total con IVA del presupuesto, los pagos ya hechos y luego el importe recibido hoy. Marca anticipo o señal, la misma palabra que en el presupuesto, porque decide lo que cada uno pierde o devuelve si se anula el pedido. El saldo pendiente es el total menos todo lo recibido. Hazlo por duplicado y fírmalo.',
      },
      {
        question: '¿Se puede cobrar en efectivo sin límite en Francia?',
        answer:
          'No, en cuanto hay un profesional de por medio. Service-Public fija el límite en 1000 € para un particular con domicilio en Francia que paga a un profesional, y entre profesionales, con una multa de hasta el 5 % de las sumas repartida entre los dos. Entre particulares no hay tope, pero por encima de 1500 € se pide un escrito. El Excel avisa de cada recibo en efectivo por encima de 1000 €.',
      },
      {
        question: '¿Hay que numerar los recibos y guardarlos?',
        answer:
          'Para un recibo no encontré ninguna regla propia de numeración ni de conservación; la nota de servicios, en cambio, se guarda dos años. Numerar seguido, sin huecos, sigue siendo la mejor forma de mostrar que no ha desaparecido ningún cobro, y la matriz guarda constancia de cada recibo entregado. Para el plazo de conservación de tus justificantes de ingresos, sigue lo que te diga tu contable.',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer:
          'Tres hojas. «Registre des reçus»: una línea por recibo, naturaleza y forma de pago elegidas en una lista; lo ya recibido y el saldo pendiente se calculan por número de presupuesto, y una columna de avisos revisa cada línea. «Reçu à imprimer»: elige un número en la casilla amarilla y el recibo se rellena; solo queda escribir el importe en letras y firmar. «Synthèse»: tus cobros de cada mes por forma de pago, para el año elegido.',
      },
      {
        question: '¿La factura electrónica cambia algo?',
        answer:
          'La reforma de la factura electrónica trata de las facturas, y un recibo no lo es: sigue siendo una prueba de pago, en papel o en PDF. Lo que cambia de forma son tus facturas, si facturas a empresas. El test de la página de la herramienta te dice, en cinco preguntas, si te afecta y desde qué fecha.',
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description:
      'Cuando los recibos, los presupuestos y las facturas se copian de un archivo a otro y los anticipos se siguen a mano, una herramienta que une cada cobro con su presupuesto y su factura te devuelve horas. Cuéntame tu actividad: te respondo en 24 horas, y si basta con un software del mercado, te lo digo.',
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Hacer el test: ¿me afecta la factura electrónica?',
  },
}
