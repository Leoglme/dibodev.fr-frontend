import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  EQUIPMENT_RENTAL_AGREEMENT_CONDITION_REPORT_SOURCE,
  EQUIPMENT_RENTAL_AGREEMENT_DEPOSIT_VAT_SOURCE,
  EQUIPMENT_RENTAL_AGREEMENT_LESSOR_DUTIES_SOURCE,
  EQUIPMENT_RENTAL_AGREEMENT_RENTER_DUTIES_SOURCE,
  EQUIPMENT_RENTAL_AGREEMENT_RENTER_LIABILITY_SOURCE,
  EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_UPDATED_AT,
} from '~/core/constants/freeTemplates/equipmentRentalAgreement/pageShared'
import {
  EVENT_RENTAL_TEMPLATE_PDF_PATH,
  EVENT_RENTAL_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/eventRentalSoftware/pageShared'
import { INVOICE_MENTIONS_SOURCE } from '~/core/constants/tools/fieldServiceSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Contrato de alquiler de material: plantilla francesa gratis',
    description:
      'Contrato de alquiler de material: plantilla francesa gratis en PDF y Excel, con acta de entrega y devolución. Fianza, roturas, retrasos. Sin registro.',
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de contrato de alquiler de material y de acta de entrega y devolución',
  },
  breadcrumbLabel: 'Contrato de alquiler de material',
  shareImage: {
    titleLines: ['Contrato de alquiler', 'de material gratis'],
    highlight: 'Contrato de alquiler',
    subtitle: 'Contrato y acta de entrega y devolución en PDF y Excel, fianza, totales calculados',
    badge: 'Gratis, sin registro',
    icon: 'fileText',
    alt: 'Plantilla francesa de contrato de alquiler de material gratis: contrato y acta de entrega y devolución en PDF y Excel, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Contrato de alquiler de material',
    titleAfter: ': plantilla francesa gratis, PDF y Excel (+ acta de entrega)',
    reassurances: ['Contrato + acta de entrega y devolución', 'Excel con totales calculados', 'Sin registro ni e-mail'],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Un contrato de alquiler de material y un acta de entrega y devolución listos para rellenar, escritos en francés para el mercado francés, para una empresa que alquila material para eventos, mobiliario, sonido e iluminación o herramientas. El contrato fija el material alquilado y su valor de reposición, las fechas y horas de salida y devolución, el precio sin IVA y con IVA, la fianza y lo que pasa en caso de rotura, pérdida, robo, retraso o anulación. El acta se rellena artículo por artículo, a la salida y luego a la devolución, delante del cliente.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Leí las normas del Código civil francés sobre el arrendamiento de cosas, las menciones de la factura y el trato de la fianza en el IVA para que las cláusulas y las menciones estén al día.',
    updatedAt: EQUIPMENT_RENTAL_AGREEMENT_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para empresas que alquilan material para eventos, mobiliario, sonido e iluminación o herramientas en Francia. Dos archivos en francés, sin formulario: el PDF se imprime, el Excel calcula.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: EVENT_RENTAL_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: EVENT_RENTAL_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 hojas, totales y diferencias calculados, en francés',
      },
    ],
    footnote:
      'Plantilla de uso libre, para adaptar a tu actividad y a tus condiciones de alquiler. No sustituye el consejo de tu contable.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Un contrato de alquiler y un acta de entrega y devolución, en PDF y en Excel',
    intro:
      'El PDF recoge los dos documentos en dos páginas A4. El Excel los recoge en dos hojas, con los totales sin IVA y con IVA, el anticipo, el valor de lo que falta, los días de retraso y la fianza que hay que devolver calculados, y añade una tercera hoja: el seguimiento de todos tus alquileres.',
    documents: [
      {
        title: 'Contrato de alquiler de material',
        format: 'Página 1 del PDF, hoja «Matériel et montants» del Excel',
        items: [
          'Cabecera de la empresa de alquiler (nombre, dirección, teléfono, SIRET, n.º de IVA), n.º de contrato, fecha, n.º de presupuesto o de pedido, evento',
          'Arrendatario: nombre o razón social, particular o profesional (SIREN), dirección, teléfono, e-mail, representante, contacto en el lugar el día del evento',
          'Fechas, lugar y uso: salida y devolución (fecha y hora), recogida en el almacén o entrega, devolución en el almacén o recogida en el lugar, dirección de uso, uso previsto, acceso, días facturados',
          'Material alquilado: referencia, descripción (modelo, n.º de serie, accesorios), cantidad, precio unitario sin IVA, días, total sin IVA, valor de reposición, más las líneas de entrega y recogida, montaje y desmontaje (el Excel pasa de 8 a 15 artículos y añade una línea de limpieza)',
          'Totales y fianza: total sin IVA, IVA, total con IVA, anticipo, resto por pagar; la fianza aparte, sin IVA mientras se devuelve, con su plazo de devolución (el Excel la compara con el valor de reposición total)',
          'Condiciones: transporte y montaje, uso y subarriendo, seguro, rotura, pérdida y robo, retraso, limpieza, anulación, penalizaciones para un cliente profesional, firmas «Lu et approuvé» y sello',
        ],
      },
      {
        title: 'Acta de entrega y devolución',
        format: 'Página 2 del PDF, hoja «État des lieux» del Excel',
        items: [
          'N.º de contrato, arrendatario, fecha, hora y nombre de quien revisa, a la salida y luego a la devolución',
          'Códigos de estado: nuevo, bueno, desgaste normal, dañado, fuera de servicio (listas desplegables en el Excel)',
          'Una línea por artículo: a la salida, cantidad, estado y accesorios entregados; a la devolución, cantidad, estado, accesorios completos, limpieza, n.º de las fotos, observaciones',
          'Diferencias a la devolución: faltantes, roturas, limpieza, retraso, sin IVA y luego con IVA (el Excel calcula la diferencia de cada línea, el valor de lo que falta y los días de retraso)',
          'Fianza: importe entregado, importe retenido con justificante, importe devuelto y fecha, resto por facturar',
          'Reservas del arrendatario y cuatro firmas, el arrendatario y la empresa de alquiler, a la salida y luego a la devolución',
        ],
      },
      {
        title: 'Seguimiento de los alquileres',
        format: 'Hoja «Suivi des locations» del Excel solamente, sin página en el PDF',
        items: [
          'Una línea por contrato: n.º de contrato, arrendatario, evento, fecha de salida, devolución prevista y devolución real',
          'Días de retraso contados hasta hoy mientras el material no ha vuelto',
          'Importe con IVA, importe cobrado, resto pendiente, fianza recibida, fianza devuelta e importe retenido de la fianza',
          'Estado calculado: reservado, en salida, con retraso, devuelto con una fianza por resolver o un saldo por cobrar, cerrado',
          'De un vistazo: alquileres en curso, con retraso, fianzas por resolver, resto pendiente, fianzas en tu poder, facturación con IVA',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar el contrato y el acta en cuatro pasos',
    intro:
      'En el Excel, solo se escriben las casillas blancas. Los totales, el anticipo, las diferencias a la devolución y la fianza que hay que devolver se calculan solos.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Tus datos y tus condiciones, de una vez por todas',
        description:
          'Rellena la cabecera de tu empresa (nombre, dirección, SIRET, n.º de IVA) y tus condiciones habituales: precio de un día de retraso, tarifa de limpieza, plazo de devolución de la fianza, anulación, penalizaciones para los clientes profesionales. Guarda el archivo como plantilla: cada nuevo alquiler parte de esa copia.',
      },
      {
        label: 'Paso 2',
        title: 'El contrato, en la reserva',
        description:
          'El arrendatario, el evento, las fechas y horas de salida y devolución, y luego una línea por artículo con su cantidad, su precio unitario sin IVA y su valor de reposición. El Excel calcula los días, los totales sin IVA y con IVA, el anticipo y el valor de reposición total, al lado de la fianza que pides. El cliente firma «Lu et approuvé».',
      },
      {
        label: 'Paso 3',
        title: 'El acta, a la salida',
        description:
          'Delante del cliente, revisa cada artículo: cantidad, estado, accesorios entregados. Fotografía los defectos que ya existen, anota el número de cada foto y firmad los dos la parte «À la sortie». En el Excel, las líneas repiten el material del contrato.',
      },
      {
        label: 'Paso 4',
        title: 'La devolución, las diferencias y la fianza',
        description:
          'A la devolución, la misma revisión: cantidad devuelta, estado, accesorios, limpieza. El Excel valora lo que falta a su valor de reposición, cuenta los días de retraso, suma las roturas que escribes y la limpieza, y te da la fianza que hay que devolver o el resto por facturar. El cliente anota sus reservas si las tiene, firmáis los dos, y la línea del seguimiento pasa a «Clôturé» cuando la fianza está devuelta y el saldo cobrado.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exige la norma francesa',
    title: 'Lo que el Código civil francés y el IVA ya prevén',
    intro:
      'El Código civil francés regula el alquiler de toda clase de bienes, muebles incluidos (art. 1713), y la fianza tiene su propio trato en el IVA. La plantilla recoge cada una de estas normas en una cláusula o una casilla. Son referencias, no un consejo jurídico.',
    facts: [
      {
        contextLabel: 'Código civil, art. 1719 y 1720',
        title: 'Un material entregado en buen estado',
        text: 'La empresa de alquiler entrega el material en buen estado, lo mantiene en condiciones de servir para el uso previsto y garantiza su uso pacífico durante el alquiler. El acta de salida guarda la prueba, artículo por artículo, con los accesorios entregados.',
        sourceName: EQUIPMENT_RENTAL_AGREEMENT_LESSOR_DUTIES_SOURCE.name,
        sourceUrl: EQUIPMENT_RENTAL_AGREEMENT_LESSOR_DUTIES_SOURCE.url,
      },
      {
        contextLabel: 'Código civil, art. 1728',
        title: 'Un uso razonable, el previsto en el contrato',
        text: 'El arrendatario usa el material de forma razonable, según el uso previsto en el contrato, y paga el precio en las fechas acordadas. Por eso el contrato indica el uso y el lugar de uso; también prohíbe el subarriendo sin tu acuerdo escrito, algo que el Código civil permite (art. 1717).',
        sourceName: EQUIPMENT_RENTAL_AGREEMENT_RENTER_DUTIES_SOURCE.name,
        sourceUrl: EQUIPMENT_RENTAL_AGREEMENT_RENTER_DUTIES_SOURCE.url,
      },
      {
        contextLabel: 'Código civil, art. 1730 y 1731',
        title: 'Devuelto tal como se recibió',
        text: 'Si se hizo un acta del estado, el arrendatario devuelve el material tal como lo recibió según esa acta, salvo lo que se ha perdido o deteriorado por antigüedad o fuerza mayor. Sin acta, se presume que lo recibió en buen estado, salvo prueba en contrario. La página 2 de la plantilla se rellena a la salida y a la devolución, con las dos partes presentes.',
        sourceName: EQUIPMENT_RENTAL_AGREEMENT_CONDITION_REPORT_SOURCE.name,
        sourceUrl: EQUIPMENT_RENTAL_AGREEMENT_CONDITION_REPORT_SOURCE.url,
      },
      {
        contextLabel: 'Código civil, art. 1732',
        title: 'Roturas y pérdidas durante el alquiler',
        text: 'El arrendatario responde de los daños y pérdidas que ocurren durante el alquiler, salvo que demuestre que se produjeron sin culpa suya. El contrato indica el valor de reposición de cada artículo, lo que se factura (reparación según presupuesto o reposición) y lo que hace el arrendatario en caso de robo.',
        sourceName: EQUIPMENT_RENTAL_AGREEMENT_RENTER_LIABILITY_SOURCE.name,
        sourceUrl: EQUIPMENT_RENTAL_AGREEMENT_RENTER_LIABILITY_SOURCE.url,
      },
      {
        contextLabel: 'Sin IVA mientras se devuelve',
        title: 'La fianza, aparte del precio',
        text: 'La fianza solo pasa a la empresa de alquiler si el arrendatario incumple las obligaciones de las que el contrato hace depender su devolución: solo entonces está sujeta al IVA, por la parte retenida. Una fianza excesiva respecto al riesgo real puede tributar desde el cobro, por el exceso. La plantilla la deja fuera del total con IVA y la compara con el valor de reposición del material.',
        sourceName: EQUIPMENT_RENTAL_AGREEMENT_DEPOSIT_VAT_SOURCE.name,
        sourceUrl: EQUIPMENT_RENTAL_AGREEMENT_DEPOSIT_VAT_SOURCE.url,
      },
      {
        contextLabel: 'En cada factura',
        title: 'La factura del alquiler y sus menciones',
        text: `Lleva en particular un número único, la fecha, la identidad de la empresa con su SIREN, el nombre y la dirección del cliente, la descripción y la cantidad, el precio unitario sin IVA, el tipo de IVA, los totales sin IVA y con IVA y la fecha de vencimiento; para un cliente profesional, el tipo de las penalizaciones por retraso y la indemnización fija de 40${NBSP}€ por gastos de cobro. A partir del 1 de septiembre de 2027, las pymes y las microempresas añaden el SIREN del cliente, la dirección de entrega si es distinta y la naturaleza de la operación. El contrato ya reúne la mayor parte de esta información.`,
        sourceName: INVOICE_MENTIONS_SOURCE.name,
        sourceUrl: INVOICE_MENTIONS_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Plantilla de contrato de alquiler de material: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de contrato de alquiler de material es realmente gratis?',
        answer:
          'Sí. Los dos archivos se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» a pie de página, que puedes quitar.',
      },
      {
        question: '¿El acta de entrega y devolución es obligatoria en Francia?',
        answer:
          'El Código civil francés no la impone, pero saca sus consecuencias. Con acta, el arrendatario devuelve el material tal como lo recibió, salvo lo que se ha deteriorado por antigüedad o fuerza mayor; sin acta, se presume que lo recibió en buen estado, salvo prueba en contrario (art. 1730 y 1731). El acta de salida protege también a tu cliente: un arañazo anotado a la salida no se le puede reprochar a la devolución.',
      },
      {
        question: '¿Cómo fijar el importe de la fianza?',
        answer:
          'A partir de lo que arriesgas perder: el Excel suma el valor de reposición sin IVA de cada artículo alquilado y muestra la fianza en porcentaje de ese total. Para la administración fiscal francesa, una fianza excesiva respecto a los riesgos reales puede estar sujeta al IVA desde el cobro, por la parte de más. El contrato indica también cuándo se devuelve y qué se puede retener.',
      },
      {
        question: '¿La fianza está sujeta al IVA?',
        answer: `No mientras se devuelve. Solo tributa por la parte que te quedas porque el arrendatario no cumplió sus obligaciones, por ejemplo por un impago o una reparación del material. Por eso la plantilla la deja aparte del total con IVA y calcula los importes retenidos sin IVA y luego con el IVA a tu tipo (0${NBSP}% si tu empresa está en el régimen francés de franquicia del IVA).`,
      },
      {
        question: '¿Quién paga si el material se rompe, se pierde o lo roban?',
        answer:
          'El arrendatario responde de los daños y pérdidas durante el alquiler, salvo que demuestre que se produjeron sin culpa suya (Código civil francés, art. 1732). El contrato fija lo que sigue: reparación facturada según presupuesto hasta el valor de reposición, artículo perdido, robado o inservible facturado a su valor de reposición, y justificante de la denuncia que hay que entregar en caso de robo. Una casilla indica si el arrendatario aseguró el material.',
      },
      {
        question: '¿Mi cliente puede subarrendar o prestar el material?',
        answer:
          'El Código civil francés se lo permite, salvo si el contrato lo prohíbe (art. 1717). La plantilla lo prohíbe sin tu acuerdo escrito: sabes quién tiene el material en las manos, y en qué dirección.',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer:
          'En la hoja «Matériel et montants», escribes las fechas y luego la cantidad, el precio unitario sin IVA y el valor de reposición de cada artículo: los días, los totales sin IVA y con IVA, el anticipo y el valor de reposición total se calculan solos. La hoja «État des lieux» repite el material del contrato; a la devolución, basta con la cantidad devuelta para obtener la diferencia, el valor de lo que falta, los días de retraso y la fianza que hay que devolver. La hoja «Suivi des locations» da el estado de cada contrato y las fianzas en tu poder.',
      },
      {
        question: '¿Y cuando los alquileres se multiplican?',
        answer: `Una plantilla Excel basta para unos cuantos alquileres por semana. Más allá, los programas de alquiler vendidos en Francia (Unipresta, LoKisi, Rentman, Booqable) siguen tu stock y tu disponibilidad: Unipresta tiene una versión gratuita, LoKisi empieza en 29${NBSP}€ al mes. Si tu organización sale de su marco (kits, varios almacenes, reservas en tu web), el test de la página de la herramienta te dice qué elegir.`,
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description: `Cuando los contratos, las actas y las fianzas se copian de un archivo a otro, y un mismo artículo tiene que salir para dos eventos el mismo fin de semana, una herramienta que sigue tu disponibilidad te devuelve horas. Descríbeme tu actividad: te respondo en 24${NBSP}h, y si un programa del mercado basta, te lo digo.`,
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas de alquiler de material',
  },
}
