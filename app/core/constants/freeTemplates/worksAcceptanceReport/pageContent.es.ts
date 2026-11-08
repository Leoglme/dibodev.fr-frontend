import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  GOOD_WORKING_WARRANTY_SOURCE,
  RETENTION_MONEY_SOURCE,
  TEN_YEAR_LIABILITY_SOURCE,
  WORKS_ACCEPTANCE_REPORT_TEMPLATE_PDF_PATH,
  WORKS_ACCEPTANCE_REPORT_TEMPLATE_UPDATED_AT,
  WORKS_ACCEPTANCE_REPORT_TEMPLATE_XLSX_PATH,
  WORKS_ACCEPTANCE_SOURCE,
} from '~/core/constants/freeTemplates/worksAcceptanceReport/pageShared'
import { BUILDER_WARRANTIES_SOURCE } from '~/core/constants/tools/carpentrySoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const WORKS_ACCEPTANCE_REPORT_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Acta de recepción de obra: plantilla francesa gratis',
    description:
      'Acta de recepción de obra: plantilla francesa gratis en PDF y Excel, con o sin reservas, acta de levantamiento de reservas y fechas de garantía. Sin registro.',
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de acta de recepción de obra y de acta de levantamiento de reservas',
  },
  breadcrumbLabel: 'Acta de recepción de obra',
  shareImage: {
    titleLines: ['Acta de recepción', 'de obra gratis'],
    highlight: 'Acta de recepción',
    subtitle: 'Acta de recepción con o sin reservas y acta de levantamiento, en PDF y Excel, garantías con fecha',
    badge: 'Gratis, sin registro',
    icon: 'clipboard',
    alt: 'Plantilla francesa de acta de recepción de obra gratis: acta de recepción y acta de levantamiento de reservas en PDF y Excel, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Acta de recepción de obra',
    titleAfter: ': plantilla francesa gratis, PDF y Excel (+ levantamiento de reservas)',
    reassurances: ['Acta de recepción + levantamiento', 'Excel con las garantías fechadas', 'Sin registro ni e-mail'],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Un acta de recepción de obra (procès-verbal de réception) y un acta de levantamiento de reservas listas para rellenar, escritas en francés para el mercado francés, para todos los oficios de la construcción: albañil, fontanero, electricista, carpintero, pintor, techador… El acta de recepción se firma al final de la obra, tras una visita hecha con el cliente, con o sin reservas. El acta de levantamiento deja constancia después, de común acuerdo, de que cada defecto anotado se ha corregido. La fecha de recepción hace correr las garantías francesas del constructor: el Excel calcula sus fechas de fin.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Leí los artículos del Código Civil francés sobre la recepción y las garantías, y la ley francesa sobre la retención de garantía, para que las menciones sean exactas.',
    updatedAt: WORKS_ACCEPTANCE_REPORT_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para los profesionales y las empresas de la construcción que trabajan en Francia, y para los particulares que reciben sus obras. Dos archivos en francés, sin formulario: el PDF se imprime, el Excel sigue las reservas y calcula las fechas.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: WORKS_ACCEPTANCE_REPORT_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: WORKS_ACCEPTANCE_REPORT_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 hojas, fechas calculadas, en francés',
      },
    ],
    footnote:
      'Plantilla de uso libre, para adaptar a tu obra. No sustituye el consejo de un jurista ni el de tu aseguradora.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Un acta de recepción, un acta de levantamiento de reservas y un calendario de garantías',
    intro:
      'El PDF recoge las dos actas en dos páginas A4, para rellenar a mano durante la visita. El Excel las recoge en tres hojas: el acta y sus reservas, el seguimiento del levantamiento con la fecha y el estado de cada reserva, y el calendario de garantías calculado desde la fecha de recepción.',
    documents: [
      {
        title: 'Acta de recepción de obra',
        format: 'Página 1 del PDF, hoja «PV et réserves» del Excel',
        items: [
          'Cabecera de la empresa (nombre, dirección, SIREN o SIRET) y seguro decenal (aseguradora, n.º de póliza), n.º del acta, fecha de la visita contradictoria, fecha de recepción, presupuesto o contrato de referencia',
          'Las partes: el cliente (maître d’ouvrage) y su representante, la empresa, el director de obra o arquitecto si lo hay, las personas presentes en la visita',
          'La obra y el contrato: dirección, lote u oficio, naturaleza de los trabajos, fecha de aceptación e importe con IVA del presupuesto, modificaciones, inicio y fin de los trabajos',
          'Decisión del cliente en 3 casillas: recepción sin reservas, con las reservas anotadas, o aplazada con la fecha de una nueva visita; en el Excel, una alerta avisa de una decisión que no cuadra con la lista',
          '10 líneas de reservas (12 en el Excel): n.º, ubicación, reserva constatada, n.º de foto, empresa encargada de corregirla, levantamiento acordado el; el Excel calcula la fecha a partir de un plazo en días',
          `Retención de garantía si el contrato la prevé (5${NBSP}% como máximo, importe, fecha de liberación), las tres garantías con fecha, documentos entregados, firmas del cliente, de la empresa y del director de obra, menciones del Código Civil francés`,
        ],
      },
      {
        title: 'Acta de levantamiento de reservas',
        format: 'Página 2 del PDF, hoja «Levée des réserves» del Excel',
        items: [
          'Recordatorio del acta de recepción (n.º, fecha de recepción), fecha de la visita de levantamiento, cliente, empresa, dirección de la obra, presentes',
          'Una línea por reserva, con su número del acta de recepción: reserva, trabajos realizados, levantamiento acordado el, levantamiento constatado el, conformidad del cliente; el Excel recoge solo las reservas de la primera hoja',
          'Estado calculado en el Excel (levantada, pendiente, con retraso) y días de retraso, a la fecha de la visita de levantamiento o, si no, a la fecha de hoy',
          'Conclusión: todas las reservas levantadas en tal fecha, o reservas pendientes con un nuevo plazo acordado; el Excel cuenta las reservas levantadas, pendientes y con retraso',
          'Defectos señalados después de la recepción, durante el año de garantía de perfecto acabado: fecha de la carta certificada, defecto, corrección prevista y constatada; el Excel comprueba que el aviso cae dentro del año',
          'Firmas del cliente y de la empresa, recordatorio del artículo 1792-6 del Código Civil francés sobre la corrección constatada de común acuerdo',
        ],
      },
      {
        title: 'Calendario de garantías',
        format: 'Hoja «Calendrier des garanties» del Excel, fechas para copiar en la página 1 del PDF',
        items: [
          'Fecha de recepción tomada del acta, duración de la garantía de buen funcionamiento en casilla amarilla (2 años como mínimo, más si el contrato lo prevé)',
          'Para cada garantía, lo que cubre, su duración, su inicio y su fecha de fin: perfecto acabado (1 año), buen funcionamiento (2 años o más), decenal (10 años)',
          'Fecha de liberación de la retención de garantía, un año después de la recepción, cuando el contrato la prevé',
          'Días restantes y estado de cada garantía (en curso o terminada) a la fecha de hoy',
          'Aparece un defecto: escribes su fecha, y el Excel te dice qué garantías seguían en curso ese día',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar el acta de recepción en cuatro pasos',
    intro:
      'En el Excel, solo se escriben las casillas blancas y las amarillas. Las fechas de levantamiento, el estado de cada reserva y las fechas de fin de las garantías se calculan solos.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Antes de la visita, la obra y el contrato',
        description:
          'Rellena la cabecera de la empresa, las partes, la dirección de la obra, el lote y el presupuesto aceptado, con su fecha y su importe. Fija la visita con el cliente, y con el director de obra si lo hay: la recepción se hace juntos.',
      },
      {
        label: 'Paso 2',
        title: 'Durante la visita, una reserva por línea',
        description:
          'Recorre la obra estancia por estancia, fachada incluida. Cada defecto visible tiene su línea: dónde está, qué falla, el número de la foto, la empresa que lo corrige y el plazo acordado. Lo que no se anote ese día se considerará aceptado.',
      },
      {
        label: 'Paso 3',
        title: 'La decisión, la fecha, las firmas',
        description:
          'El cliente marca sin reservas, con reservas o recepción aplazada. Escribe la fecha de recepción en la casilla amarilla del Excel: las fechas de levantamiento, de fin de las garantías y de liberación de la retención se calculan. Cada parte firma los dos ejemplares y se queda uno.',
      },
      {
        label: 'Paso 4',
        title: 'El levantamiento de las reservas, una a una',
        description:
          'Tras cada corrección, anota en la hoja «Levée des réserves» los trabajos realizados, la fecha y la conformidad del cliente: el estado pasa a «Levée» (levantada). Cuando todo esté corregido, imprime la página 2, marca «todas las reservas están levantadas» y hazla firmar.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exige la norma francesa',
    title: 'Las normas que la plantilla ya sigue',
    intro:
      'Seis normas del Código Civil y de la ley francesa pasan por la recepción y el levantamiento de reservas. La plantilla les reserva una casilla, una fecha o una mención; no sustituye el consejo de un jurista en caso de litigio.',
    facts: [
      {
        contextLabel: 'Código Civil francés, art. 1792-6',
        title: 'La recepción se hace juntos, con o sin reservas',
        text: 'Es el acto por el que el cliente acepta los trabajos, con o sin reservas. Se hace de forma amistosa o, si no, ante el juez, y siempre de forma contradictoria, con la empresa y el cliente. El acta fecha la visita, nombra a los presentes y recoge la decisión del cliente.',
        sourceName: WORKS_ACCEPTANCE_SOURCE.name,
        sourceUrl: WORKS_ACCEPTANCE_SOURCE.url,
      },
      {
        contextLabel: 'El día de la visita',
        title: 'Un defecto visible que no se anota se da por aceptado',
        text: 'Si el defecto no se señala en el acta de recepción, se considera aceptado: el cliente ya no podrá pedir su reparación en virtud de las garantías. Un defecto que no era visible ese día puede entrar en una garantía según su naturaleza. De ahí las diez líneas de reservas de la plantilla, con la foto y la empresa encargada de corregirlo.',
        sourceName: BUILDER_WARRANTIES_SOURCE.name,
        sourceUrl: BUILDER_WARRANTIES_SOURCE.url,
      },
      {
        contextLabel: '1 año desde la recepción',
        title: 'Las reservas se levantan en un plazo acordado entre los dos',
        text: 'La garantía de perfecto acabado obliga a la empresa a corregir las reservas del acta y los defectos señalados por escrito durante el año, salvo el desgaste normal o el uso. El plazo de corrección se fija de común acuerdo, y la corrección se constata igual, o si no ante el juez. Sin acuerdo o sin corrección a tiempo, el cliente puede, tras un requerimiento que quede sin efecto, encargar los trabajos a costa y riesgo de la empresa.',
        sourceName: WORKS_ACCEPTANCE_SOURCE.name,
        sourceUrl: WORKS_ACCEPTANCE_SOURCE.url,
      },
      {
        contextLabel: '2 años como mínimo',
        title: 'La garantía de buen funcionamiento, llamada bienal',
        text: 'Los elementos de equipamiento de la obra que se pueden quitar sin dañar la construcción tienen una garantía de buen funcionamiento de al menos dos años desde la recepción. El calendario del Excel cuenta 2 años por defecto, y la duración más larga que prevea tu contrato si la escribes.',
        sourceName: GOOD_WORKING_WARRANTY_SOURCE.name,
        sourceUrl: GOOD_WORKING_WARRANTY_SOURCE.url,
      },
      {
        contextLabel: '10 años desde la recepción',
        title: 'La responsabilidad decenal también corre desde la recepción',
        text: 'Los daños que comprometen la solidez de la obra, o que la hacen impropia para su destino, hacen responsable a la empresa durante diez años desde la recepción de los trabajos. El acta fija esa fecha por escrito, y el Excel calcula el final de los diez años.',
        sourceName: TEN_YEAR_LIABILITY_SOURCE.name,
        sourceUrl: TEN_YEAR_LIABILITY_SOURCE.url,
      },
      {
        contextLabel: 'Si el contrato la prevé',
        title: `Retención de garantía: 5${NBSP}% como máximo, liberada al cabo de un año`,
        text: `El cliente puede retener hasta el 5${NBSP}% de los pagos para garantizar la corrección de las reservas. La suma se deposita en manos de un tercero aceptado por las dos partes, salvo si la empresa aporta el aval de una entidad financiera. Un año después de la recepción, con o sin reservas, vuelve a la empresa, salvo oposición motivada notificada por carta certificada. La plantilla calcula el importe y la fecha de liberación.`,
        sourceName: RETENTION_MONEY_SOURCE.name,
        sourceUrl: RETENTION_MONEY_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Acta de recepción de obra: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de acta de recepción es realmente gratis?',
        answer:
          'Sí. Los dos archivos se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» a pie de página, que puedes quitar.',
      },
      {
        question: '¿El acta de recepción es obligatoria en Francia?',
        answer:
          'El Código Civil francés no impone ningún formulario, pero hace de la recepción el punto de partida de las garantías y exige que se pronuncie de forma contradictoria, amistosa o, si no, ante el juez. Un acta fechada y firmada por el cliente y la empresa, por duplicado, guarda la prueba: la fecha, los presentes, la decisión y las reservas. Su fecha hace correr el año de perfecto acabado y las demás garantías.',
      },
      {
        question: '¿Qué pasa si un defecto no se anota en el acta?',
        answer:
          'Si era visible el día de la recepción, se considera aceptado: el cliente ya no podrá pedir su reparación en virtud de las garantías. Un defecto que no era visible puede entrar en una garantía según su naturaleza: perfecto acabado durante el año, buen funcionamiento o decenal. De ahí el interés de hacer la visita juntos, estancia por estancia, y de fotografiar cada reserva.',
      },
      {
        question: '¿Qué plazo hay para levantar las reservas?',
        answer:
          'La ley francesa no fija ninguna duración: el plazo se acuerda entre el cliente y la empresa, y la plantilla prevé una fecha para cada reserva. Sin acuerdo, o si la corrección no se hace a tiempo, el cliente puede, tras un requerimiento que quede sin efecto, encargar los trabajos a costa y riesgo de la empresa. Si hay que ir a juicio, Service-Public recuerda que es dentro del año de la garantía de perfecto acabado.',
      },
      {
        question: '¿Para qué sirve el acta de levantamiento de reservas?',
        answer:
          'Deja constancia, de común acuerdo, de que las reservas se han corregido: es lo que prevé el artículo 1792-6 del Código Civil francés para los trabajos de la garantía de perfecto acabado. Recoge los números del acta de recepción, la fecha de levantamiento y la conformidad del cliente, y dice si todo está levantado o qué queda, con un nuevo plazo. Para la empresa, es la prueba de que las correcciones están hechas; para el cliente, la lista escrita de lo que queda por corregir.',
      },
      {
        question: `¿Qué es la retención de garantía del 5${NBSP}%?`,
        answer: `Una suma que el cliente puede retener de los pagos, si el contrato lo prevé, para garantizar la corrección de las reservas hechas en la recepción: el 5${NBSP}% como máximo (ley francesa del 16 de julio de 1971). Se deposita en manos de un tercero aceptado por las dos partes, salvo si la empresa aporta en su lugar el aval de una entidad financiera. Un año después de la recepción, con o sin reservas, vuelve a la empresa, salvo oposición motivada notificada por carta certificada.`,
      },
      {
        question: 'Perfecto acabado, bienal, decenal: ¿qué diferencia hay?',
        answer:
          'Las tres empiezan en la fecha de recepción. La de perfecto acabado (1 año) cubre las reservas del acta y los defectos señalados por escrito durante el año. La garantía de buen funcionamiento, llamada bienal (2 años como mínimo), cubre los equipos que se pueden quitar sin dañar la construcción, como un termo de agua caliente. La decenal (10 años) cubre lo que compromete la solidez de la obra o la hace impropia para su destino; Service-Public cita los cimientos, las canalizaciones, las carpinterías de puertas y ventanas o la instalación eléctrica empotrada.',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer:
          'Tres hojas. En «PV et réserves», escribes la fecha de recepción en la casilla amarilla, la decisión del cliente y las reservas con su plazo en días: la fecha de levantamiento se calcula, y una alerta avisa de una decisión que no cuadra con la lista. «Levée des réserves» recoge cada reserva; anotas la fecha de levantamiento y la conformidad del cliente, y el estado (levantada, pendiente, con retraso) y los días de retraso se calculan. «Calendrier des garanties» da la fecha de fin y los días restantes de cada garantía, la liberación de la retención, y te dice qué garantías seguían en curso en la fecha de un defecto. Cada hoja se imprime en una página A4.',
      },
      {
        question: '¿Y cuando las obras y las reservas se multiplican?',
        answer:
          'Una plantilla Excel basta para unas cuantas recepciones al mes. Más allá, hay que encontrar la foto buena, avisar al subcontratista correcto y reclamar en la fecha justa, obra tras obra: ahí es donde un programa que guarda cada reserva con su foto, su empresa y su plazo ahorra tiempo. Si tienes una carpintería, el test de la página de la herramienta te dice qué programa elegir, reservas después de la instalación incluidas.',
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description: `Cuando las reservas se apuntan en una libreta, se mandan en foto por SMS y se reclaman de memoria, obra tras obra, una herramienta que las guarda con su foto, su empresa y su plazo te devuelve horas. Descríbeme tus obras: te respondo en 24${NBSP}h, y si un programa del mercado basta, te lo digo.`,
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas para carpinterías',
  },
}
