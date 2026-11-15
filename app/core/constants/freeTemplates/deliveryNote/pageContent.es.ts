import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  CARRIER_PROTEST_SOURCE,
  CONSUMER_CARRIER_PROTEST_SOURCE,
  CONSUMER_DELIVERY_RESERVATIONS_SOURCE,
  CONSUMER_RISK_TRANSFER_SOURCE,
  DELIVERY_NOTE_TEMPLATE_DOCX_PATH,
  DELIVERY_NOTE_TEMPLATE_PDF_PATH,
  DELIVERY_NOTE_TEMPLATE_UPDATED_AT,
  DELIVERY_NOTE_TEMPLATE_XLSX_PATH,
  DELIVERY_OBLIGATION_SOURCE,
  INVOICE_TIMING_SOURCE,
} from '~/core/constants/freeTemplates/deliveryNote/pageShared'
import { NBSP } from '~/core/constants/typography'

export const DELIVERY_NOTE_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Albarán de entrega: plantilla gratis (PDF, Word, Excel)',
    description:
      'Albarán de entrega: plantilla gratis en PDF, Word y Excel, cantidad pendiente calculada, recibido conforme o con reservas, hoja de reservas al transportista.',
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de albarán de entrega y de hoja de reservas en la entrega',
  },
  breadcrumbLabel: 'Albarán de entrega',
  shareImage: {
    titleLines: ['Albarán de entrega', 'plantilla gratis'],
    highlight: 'Albarán de entrega',
    subtitle: 'Albarán con cantidad pendiente y hoja de reservas en la entrega, en PDF, Word y Excel',
    badge: 'Gratis, sin registro',
    icon: 'truck',
    alt: 'Plantilla francesa de albarán de entrega gratis: albarán y hoja de reservas en la entrega en PDF, Word y Excel, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Albarán de entrega',
    titleAfter: ': plantilla francesa gratis, PDF, Word y Excel (+ hoja de reservas)',
    reassurances: ['Albarán + hoja de reservas', 'Excel con la cantidad pendiente calculada', 'Sin registro ni e-mail'],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Un albarán de entrega (bon de livraison) y una hoja de reservas listos para rellenar, escritos en francés para las empresas que entregan en Francia: comercio mayorista, suministros, mobiliario, materiales, alquiler de material, venta a particulares. El albarán dice lo que sale, lo que queda por entregar y en cuántos bultos; después el cliente marca «recibido conforme» o «recibido con reservas» y firma delante del repartidor. Cuando un bulto llega dañado, falta o no es el pedido, la hoja de reservas guarda la descripción, las fotos y la fecha de la carta al transportista.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Leí los artículos del Código Civil francés sobre la entrega, los del Código de Consumo francés sobre la entrega a particulares y el artículo del Código de Comercio francés sobre las reservas al transportista, para que las menciones y los plazos sean exactos.',
    updatedAt: DELIVERY_NOTE_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para las empresas que entregan a sus clientes en Francia, con su propia furgoneta o con un transportista. Tres archivos en francés, sin formulario: el PDF se imprime por duplicado, el Excel calcula la cantidad pendiente y lleva el registro, el Word se modifica libremente. ¿Recibes mercancía de un proveedor? Usa mejor nuestra plantilla de ficha de inventario y albarán de recepción.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: DELIVERY_NOTE_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: DELIVERY_NOTE_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 hojas, cantidades calculadas, en francés',
      },
      {
        label: 'Descargar la versión Word',
        href: DELIVERY_NOTE_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 páginas, editable, en francés',
      },
    ],
    footnote:
      'Plantilla de uso libre, para adaptar a tus productos y a tus entregas. No sustituye el consejo de un jurista.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Un albarán de entrega, una hoja de reservas y un registro de entregas',
    intro:
      'El PDF cabe en dos páginas A4: el albarán en el anverso, la hoja de reservas en el reverso. El Excel los amplía en tres hojas: el albarán con su cantidad pendiente, el registro de todas tus entregas y el seguimiento de las entregas parciales, pedido por pedido.',
    documents: [
      {
        title: 'Albarán de entrega',
        format: 'Página 1 del PDF, hoja «Bon de livraison» del Excel',
        items: [
          'Cabecera del remitente (nombre, dirección, SIREN o SIRET), n.º de albarán, fecha de entrega, n.º de pedido del cliente, entrega «2 de 3» cuando se hace en varias veces',
          'Destinatario y dirección de facturación, dirección de entrega si es distinta, contacto en el lugar, franja horaria y código de acceso',
          '12 líneas (14 en el Excel): referencia, descripción, unidad, cantidad pedida, ya entregada, entregada hoy, pendiente, n.º de bulto; el Excel calcula lo pendiente y el estado de cada línea (completa, parcial, de más)',
          'Número de bultos, palés, peso, casilla «completa el pedido» o «parcial» con la fecha de la siguiente entrega',
          'Transporte (medios propios, transportista y n.º de seguimiento, recogida por el cliente) y documentos entregados con la mercancía (manual, garantía, envases retornables)',
          'Recepción: recibido conforme, recibido con reservas o rechazado, reservas escritas, nombre, fecha, hora y firma del destinatario, firma del repartidor',
        ],
      },
      {
        title: 'Hoja de reservas en la entrega',
        format: 'Página 2 del PDF, columnas «Réception» y «Réserves» del registro Excel',
        items: [
          'Recordatorio del albarán, del pedido, de la fecha y hora de entrega, del transportista y del n.º de seguimiento',
          'Nueve casillas: bulto aplastado o mojado, embalaje abierto, palé inclinado, bulto que falta (recibidos sobre anunciados), cantidad menor, producto roto, referencia equivocada, falta el manual, dirección equivocada',
          '7 líneas de reservas: bulto o referencia, descripción precisa, cantidad afectada, n.º de fotos, solución pedida (sustitución, complemento, devolución, abono)',
          'Lista de fotos que hacer antes de tirar el embalaje, y el texto de las reservas escritas en el documento del transportista, copiado palabra por palabra',
          `Los plazos para escribir al transportista (3${NBSP}días, 10${NBSP}días para un particular que no pudo comprobar) y el seguimiento de la carta: fecha, n.º de certificado, vendedor avisado, solución`,
        ],
      },
      {
        title: 'Registro y entregas parciales',
        format: 'Hojas «Registre des livraisons» y «Livraisons partielles» del Excel',
        items: [
          'Registro, una línea por albarán: fecha, n.º de albarán, cliente, pedido, entregado por, bultos, entrega completa o parcial, cliente particular o no, recepción, reservas',
          'Para cada entrega con reservas, el Excel muestra el plazo para protestar y lo que queda por hacer: protesta que enviar, reclamación que seguir',
          'Arriba del registro, el número de entregas, de entregas parciales, de recepciones con reservas y de casos pendientes',
          'Seguimiento por pedido: para cada artículo, la cantidad pedida y hasta tres albaranes con su cantidad; total entregado, pendiente, estado y último albarán se calculan',
          'Escribes un n.º de pedido en la casilla amarilla: el Excel te dice cuántas líneas están completas y qué queda por entregar',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar el albarán de entrega en cuatro pasos',
    intro:
      'En el Excel, solo se escriben las casillas blancas y las amarillas. La cantidad pendiente, el estado de las líneas y lo que queda por hacer se calculan solos. Las líneas de ejemplo están para sustituirlas.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Antes de salir, el pedido y los bultos',
        description:
          'Copia el n.º de pedido del cliente, y luego una línea por artículo con la cantidad pedida, lo ya entregado y lo que sale hoy: lo pendiente se calcula. Numera los bultos y anota cuántos son. Imprime dos ejemplares.',
      },
      {
        label: 'Paso 2',
        title: 'En la entrega, el cliente comprueba delante del repartidor',
        description:
          'Cuenta los bultos, mira su estado y, si puede, abre los dañados. Después marca «recibido conforme», «recibido con reservas» o «rechazado», y escribe lo que ve: qué bulto, qué daño, cuántas piezas faltan.',
      },
      {
        label: 'Paso 3',
        title: 'Una reserva, una línea de la hoja y fotos',
        description: `En el reverso, una línea por problema, con la cantidad y los números de las fotos. Fotografía el bulto cerrado con su etiqueta, y luego el contenido. Si entregó un transportista, la protesta sale por carta certificada en 3${NBSP}días: anota la fecha y el n.º del certificado.`,
      },
      {
        label: 'Paso 4',
        title: 'Después, el registro y la factura',
        description:
          'Pasa el albarán al registro, y cada cantidad entregada al seguimiento de entregas parciales. La factura va aparte: en la entrega, o una sola a final de mes para todas las entregas del mes al mismo cliente.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exige la norma francesa',
    title: 'Las normas que la plantilla ya sigue',
    intro:
      'El Código Civil, el Código de Consumo y el Código de Comercio franceses, y las normas francesas de facturación, regulan la entrega, el riesgo y las reservas. La plantilla les reserva una casilla, una fecha o una mención; no sustituye el consejo de un jurista en caso de litigio.',
    facts: [
      {
        contextLabel: 'Código Civil francés, art. 1604',
        title: 'El albarán firmado prueba la entrega',
        text: 'El vendedor debe entregar la cosa vendida, es decir, ponerla «en poder y posesión del comprador», en la cantidad prevista en el contrato (art. 1616). El albarán con fecha, con las cantidades entregadas y la firma del destinatario, guarda la prueba escrita, entrega tras entrega.',
        sourceName: DELIVERY_OBLIGATION_SOURCE.name,
        sourceUrl: DELIVERY_OBLIGATION_SOURCE.url,
      },
      {
        contextLabel: 'Cliente particular, art. L216-5',
        title: 'Un escrito en la entrega que recuerda el derecho a hacer reservas',
        text: 'Cuando el cliente es un consumidor, el vendedor le entrega, al tomar posesión, un documento escrito que menciona su derecho a formular reservas, por ejemplo si el bien llega dañado o sin su manual. Y no hacer reservas no libera al vendedor de la garantía de conformidad. De ahí la casilla «recibido con reservas» y las líneas para escribirlas.',
        sourceName: CONSUMER_DELIVERY_RESERVATIONS_SOURCE.name,
        sourceUrl: CONSUMER_DELIVERY_RESERVATIONS_SOURCE.url,
      },
      {
        contextLabel: 'Cliente particular, art. L216-2',
        title: 'El riesgo pasa al cliente cuando toma el bien en sus manos',
        text: 'Con un consumidor, el riesgo de pérdida o daño pasa a él en el momento en que él, o una persona que haya designado, toma posesión física del bien. Si eligió él mismo un transportista distinto del propuesto por el vendedor, el riesgo pasa en cuanto el bien se entrega a ese transportista (art. L216-3). La fecha y la hora de recepción del albarán marcan ese momento.',
        sourceName: CONSUMER_RISK_TRANSFER_SOURCE.name,
        sourceUrl: CONSUMER_RISK_TRANSFER_SOURCE.url,
      },
      {
        contextLabel: `3${NBSP}días, Código de Comercio francés, art. L133-3`,
        title: 'Las reservas al transportista se confirman por escrito',
        text: 'Cuando un transportista lleva la mercancía, la recepción extingue toda acción contra él por avería o pérdida parcial, salvo si el destinatario le notifica una protesta motivada en los tres días siguientes, sin contar los festivos, por carta certificada o acto extrajudicial. La hoja de reservas anota la fecha de esa carta y el n.º del certificado.',
        sourceName: CARRIER_PROTEST_SOURCE.name,
        sourceUrl: CARRIER_PROTEST_SOURCE.url,
      },
      {
        contextLabel: `10${NBSP}días, Código de Consumo francés, art. L224-65`,
        title: 'Un plazo más largo para el particular que no pudo comprobar',
        text: 'Cuando un consumidor recibe él mismo el bulto y el transportista no demuestra haberle dejado comprobar de verdad su buen estado, el plazo de tres días pasa a diez días. La casilla «el repartidor no me dejó comprobar el contenido» de la hoja sirve para anotarlo el mismo día.',
        sourceName: CONSUMER_CARRIER_PROTEST_SOURCE.name,
        sourceUrl: CONSUMER_CARRIER_PROTEST_SOURCE.url,
      },
      {
        contextLabel: 'Factura en la entrega o a final de mes',
        title: 'El albarán no sustituye a la factura',
        text: 'La factura de una venta se emite en principio en el momento de la entrega. Cuando salen varias entregas distintas al mismo cliente en un mes, se puede emitir una factura recapitulativa como muy tarde a final de mes. Por eso el albarán no lleva precios, y la factura puede citar los números de los albaranes que agrupa.',
        sourceName: INVOICE_TIMING_SOURCE.name,
        sourceUrl: INVOICE_TIMING_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Albarán de entrega: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de albarán de entrega es realmente gratis?',
        answer:
          'Sí. Los tres archivos se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» a pie de página, que puedes quitar.',
      },
      {
        question: '¿El albarán de entrega es obligatorio en Francia?',
        answer:
          'Entre empresas, los textos que leí no imponen ni su forma ni sus menciones, pero es la prueba escrita de que entregaste lo que dice el pedido, en la cantidad prevista (Código Civil francés, art. 1604 y 1616). Con un particular, el vendedor debe darle en la entrega un documento escrito que menciona su derecho a formular reservas (Código de Consumo francés, art. L216-5): el albarán de esta plantilla tiene la casilla prevista.',
      },
      {
        question: 'Bon de livraison o bordereau de livraison: ¿qué diferencia hay?',
        answer:
          'En el uso francés, las dos expresiones suelen designar el mismo papel: la lista de lo entregado, firmada por el cliente. Cuando entrega un transportista, este tiene además su propio documento, en papel o en su terminal, que hace firmar. Escribe tus reservas en los dos, y copia las del transportista palabra por palabra en la hoja de reservas.',
      },
      {
        question: '¿Qué diferencia hay entre el albarán y la factura?',
        answer:
          'El albarán dice lo que se ha entregado, sin precios; la factura dice lo que el cliente tiene que pagar. La factura se emite en principio en la entrega, o una sola como muy tarde a final de mes para varias entregas al mismo cliente. Con la factura electrónica, la dirección de entrega pasa a ser una mención de la factura cuando difiere de la del cliente: Entreprendre.Service-Public.fr lo anuncia para las pymes y las microempresas a partir del 1 de septiembre de 2027.',
      },
      {
        question: '¿Qué hago si un bulto llega dañado o falta uno?',
        answer: `Delante del repartidor, marca «recibido con reservas» y escribe exactamente lo que ves: qué bulto, qué daño, cuántos faltan. Fotografía el bulto cerrado con su etiqueta, y luego el contenido, y guarda el embalaje. Si entregó un transportista, envíale una protesta motivada por carta certificada en 3${NBSP}días, sin contar los festivos, y avisa al vendedor.`,
      },
      {
        question: '¿Cuánto tiempo hay para reclamar al transportista?',
        answer:
          'Tres días después de la recepción, sin contar los festivos, por carta certificada o acto extrajudicial (Código de Comercio francés, art. L133-3); sin eso, ya no hay acción contra él por avería o pérdida parcial. Para un particular que recibió el bulto él mismo sin que el transportista le dejara comprobar su estado, el plazo pasa a diez días (Código de Consumo francés, art. L224-65). Un particular que no anotó nada conserva la garantía de conformidad del vendedor.',
      },
      {
        question: '¿Cómo se hace una entrega parcial?',
        answer:
          'Un albarán por envío, con el mismo n.º de pedido y «entrega 2 de 3» arriba. Cada línea recoge la cantidad pedida, lo que ya salió y lo que sale hoy: lo pendiente se calcula. La hoja «Livraisons partielles» del Excel sigue cada artículo en tres albaranes y te dice cuándo el pedido está completo.',
      },
      {
        question: '¿Cuánto tiempo hay que guardar los albaranes?',
        answer:
          'Diez años desde el cierre del ejercicio: Entreprendre.Service-Public.fr incluye los pedidos, albaranes de entrega y de recepción entre los justificantes de la contabilidad. Guarda con cada albarán firmado su hoja de reservas, las fotos y la copia de la carta certificada enviada al transportista.',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer:
          'Tres hojas, con líneas de ejemplo que sustituir. «Bon de livraison»: escribes las cantidades pedida, ya entregada y entregada hoy; lo pendiente y el estado de cada línea se calculan, y una alerta pide las reservas si la recepción no es conforme. «Registre des livraisons» da, para cada entrega con reservas, el plazo para protestar y lo que queda por hacer. «Livraisons partielles» suma hasta tres albaranes por artículo y te dice cómo va un pedido. Cada hoja se imprime en una página A4.',
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description: `Cuando los albaranes se copian del pedido, lo pendiente se sigue de memoria y las reservas duermen en un archivador, una herramienta que une pedido, albaranes y factura te devuelve horas. Si alquilas material, las salidas y devoluciones tienen su propia plantilla: el contrato de alquiler con acta de estado. Descríbeme tus entregas: te respondo en 24${NBSP}h, y si un programa del mercado basta, te lo digo.`,
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas de alquiler de material',
  },
}
