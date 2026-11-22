import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  COLLECTIVE_SCHEDULE_POSTING_SOURCE,
  DAILY_REST_SOURCE,
  MAXIMUM_WORKING_HOURS_SOURCE,
  PART_TIME_CHANGE_NOTICE_SOURCE,
  PART_TIME_WORK_SOURCE,
  WEEKLY_SCHEDULE_TEMPLATE_DOCX_PATH,
  WEEKLY_SCHEDULE_TEMPLATE_PDF_PATH,
  WEEKLY_SCHEDULE_TEMPLATE_UPDATED_AT,
  WEEKLY_SCHEDULE_TEMPLATE_XLSX_PATH,
} from '~/core/constants/freeTemplates/weeklySchedule/pageShared'

export const WEEKLY_SCHEDULE_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Planning semanal: plantilla gratis (PDF, Word, Excel)',
    description:
      'Planning semanal de equipo y agenda semanal para imprimir: plantilla francesa gratis en PDF, Word y Excel, horas, descansos y totales calculados.',
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de planning semanal de equipo y de agenda semanal individual para imprimir',
  },
  breadcrumbLabel: 'Planning semanal',
  shareImage: {
    titleLines: ['Planning semanal', 'plantilla gratis'],
    highlight: 'Planning semanal',
    subtitle:
      'Planning del equipo para la semana y agenda semanal de una persona, en PDF, Word y Excel, horas calculadas',
    badge: 'Gratis, sin registro',
    icon: 'fileText',
    alt: 'Plantilla francesa de planning semanal gratis: planning de equipo de lunes a domingo y agenda semanal para imprimir en PDF, Word y Excel, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Planning semanal',
    titleAfter: ': plantilla francesa gratis, Excel, Word y PDF (+ agenda semanal para imprimir)',
    reassurances: [
      'Planning de equipo + agenda semanal',
      'Excel que controla descansos y jornadas',
      'Sin registro ni e-mail',
    ],
    aboutTitle: 'Sobre la plantilla',
    description:
      'El planning semanal (planning hebdomadaire), escrito en francés para los empleadores en Francia, se hace antes de la semana: quién trabaja qué día, de qué hora a qué hora, y cuántas horas suma frente al contrato de cada uno. La página 1 lo da para todo el equipo, de lunes a domingo, listo para colgar. La página 2 es una agenda semanal (semainier): la semana de una sola persona hora por hora, para imprimirla y entregarla al empleado u organizar tus propios días. El Excel calcula las horas y avisa de una jornada demasiado larga o de un descanso demasiado corto antes de que salga el planning.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. En la editorial de software Kodeva creé desde cero Gest-Time, un programa de seguimiento de horas por obra que siguen usando pymes. Para esta plantilla, leí en Légifrance y Service-Public las normas francesas sobre la publicación de horarios, el descanso y el tiempo parcial.',
    updatedAt: WEEKLY_SCHEDULE_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para comercios, restaurantes, empresas de limpieza, consultas, asociaciones y cualquier equipo en Francia con varios turnos, y para quien solo busca un planning semanal para imprimir. Tres archivos en francés, sin formulario: el PDF se imprime, el Excel calcula y controla, el Word se modifica libremente.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: WEEKLY_SCHEDULE_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: WEEKLY_SCHEDULE_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 hojas, horas y controles calculados, en francés',
      },
      {
        label: 'Descargar la versión Word',
        href: WEEKLY_SCHEDULE_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 páginas, editable, en francés',
      },
    ],
    footnote:
      'Plantilla de uso libre, para adaptar a tu empresa y a tu convenio colectivo. No sustituye el consejo de un jurista.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Un planning de equipo, una agenda semanal y un resumen de la semana',
    intro:
      'El PDF ocupa dos páginas A4: el planning del equipo en horizontal, para que quepan los siete días, y luego la agenda semanal en vertical. El Excel recoge las dos, enlaza la agenda con el planning y añade un resumen que revisa la semana antes de que la difundas.',
    documents: [
      {
        title: 'Planning semanal del equipo',
        format: 'Página 1 del PDF en horizontal, hoja «Planning de l’équipe» del Excel',
        items: [
          'Empresa, equipo o lugar de trabajo, semana de lunes a domingo, número de semana, fecha de elaboración y número de versión',
          '9 personas en filas (15 en el Excel): nombre, puesto, horas fijadas en el contrato y luego los siete días, con dos líneas por día para una jornada partida',
          'En el Excel, para cada día: inicio, fin y pausa en minutos, y las horas del día calculadas, turno de noche incluido',
          'Al final de la fila, el total previsto de la semana y la diferencia con el contrato, y en el Excel los días trabajados, la jornada más larga y el descanso más corto entre dos días',
          'Una columna «Contrôle» (control) en el Excel: jornada de más de 10 h, semana de más de 48 h, descanso de menos de 11 h, total por encima o por debajo del contrato',
          'Abajo, las personas y las horas previstas cada día, la tabla de cambios tras la difusión (aviso dado el, nuevo horario, avisado por) y el recuadro fechado, firmado y colgado',
        ],
      },
      {
        title: 'Agenda semanal de una persona',
        format: 'Página 2 del PDF, hoja «Semainier» del Excel',
        items: [
          'Nombre, puesto o función, semana de lunes a domingo, número de semana',
          'Una cuadrícula de 7 h a 21 h, una fila por hora partida en dos medias horas en el PDF, una fila por media hora en el Excel, siete columnas de lunes a domingo',
          'Debajo de la cuadrícula, el horario y las horas previstas de cada día, y el total de la semana',
          'En el Excel eliges a la persona en una lista: su inicio, su fin y sus horas vienen del planning, y sus medias horas de trabajo se colorean',
          'Prioridades de la semana para marcar, citas, plazos, lo que hay que preparar para la semana siguiente, notas',
        ],
      },
      {
        title: 'Resumen de la semana',
        format: 'Hoja «Synthèse» del Excel, sin equivalente en el PDF',
        items: [
          'Por persona: contrato, total previsto, diferencia, días trabajados, jornada más larga, descanso más corto y control',
          'Por día, las personas y las horas previstas, para ver de un vistazo un sábado demasiado flojo o un martes demasiado cargado',
          'Para el equipo, el número de personas, las horas de la semana y el número de filas que corregir',
          'Las cuatro referencias que usan los controles, cada una con el artículo del Código de Trabajo francés del que sale',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'como-rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar el planning semanal en cuatro pasos',
    intro:
      'En el Excel solo se escriben las casillas blancas y amarillas. Las horas, los totales, los controles y la agenda semanal se actualizan solos.',
    steps: [
      {
        label: 'Paso 1',
        title: 'El equipo y la semana',
        description:
          'Escribe el nombre de cada persona, su puesto y las horas fijadas en su contrato. En el Excel, pon la fecha del lunes en la casilla amarilla: las fechas de los siete días y el número de semana se completan. Borra la línea «Exemple» cuando hayas visto el cálculo.',
      },
      {
        label: 'Paso 2',
        title: 'Los horarios de cada día',
        description:
          'Para cada persona, el inicio y el fin de cada día trabajado, en formato 08:30, y la pausa en minutos. Una jornada partida (9:00 → 12:00 y luego 15:00 → 19:00) se escribe como un solo periodo con 180 minutos de pausa. En papel, escribe R para un descanso, CP para vacaciones.',
      },
      {
        label: 'Paso 3',
        title: 'Revisar y luego difundir',
        description:
          'Antes de difundirlo, mira la columna «Contrôle» y el resumen: jornada demasiado larga, descanso demasiado corto, total que se aleja del contrato. Fecha, firma y cuelga el planning, e imprime la agenda semanal de cada persona que deba recibir sus horarios por escrito.',
      },
      {
        label: 'Paso 4',
        title: 'Un cambio durante la semana',
        description:
          'Anótalo en la tabla de cambios: fecha del aviso, persona, día, horario anterior y nuevo, medio utilizado. Pasa la versión a 2, vuelve a colgar el planning corregido antes de que se aplique y respeta el plazo de preaviso de un empleado a tiempo parcial.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exigen las normas francesas',
    title: 'Lo que el Código de Trabajo francés pide a un planning antes de la semana',
    intro:
      'Seis normas francesas afectan a un planning de equipo, desde su publicación hasta sus cambios. La plantilla da a cada una una casilla, un control o un recordatorio; no sustituye el consejo de un jurista ni la lectura de tu convenio colectivo.',
    facts: [
      {
        contextLabel: 'Código de Trabajo francés, D3171-1 a D3171-4',
        title: 'Un horario colectivo fechado, firmado y colgado',
        text: 'Cuando todo un equipo trabaja con el mismo horario, este indica el inicio y el fin de cada periodo de trabajo. El empleador lo fecha y lo firma, y luego lo cuelga de forma legible en cada lugar de trabajo afectado. Un cambio se cuelga antes de aplicarse, y una copia del horario y de sus rectificaciones se envía de antemano a la inspección de trabajo. Para eso sirve el recuadro al pie de la página 1.',
        sourceName: COLLECTIVE_SCHEDULE_POSTING_SOURCE.name,
        sourceUrl: COLLECTIVE_SCHEDULE_POSTING_SOURCE.url,
      },
      {
        contextLabel: 'Código de Trabajo francés, D3171-7',
        title: 'Turnos sucesivos: el nombre de cada uno',
        text: 'En el trabajo por relevos, rotación o turnos sucesivos, la composición nominal de cada turno, trabajadores temporales incluidos, figura en un cuadro colgado o en un registro al día, que pueden consultar la inspección de trabajo y los representantes del personal. Un planning semanal con una fila por persona y por turno responde a esa pregunta.',
        sourceName: COLLECTIVE_SCHEDULE_POSTING_SOURCE.name,
        sourceUrl: COLLECTIVE_SCHEDULE_POSTING_SOURCE.url,
      },
      {
        contextLabel: 'Duraciones máximas',
        title: 'No más de 10 horas al día ni 48 horas en la semana',
        text: 'El trabajo efectivo no pasa de 10 horas al día, salvo excepción, y un convenio colectivo puede subir ese máximo a 12 horas. La semana se queda por debajo de 48 horas, y de 44 horas de media en 12 semanas consecutivas. Mejor verlo al planificar que descubrirlo en las horas hechas: el Excel avisa en cuanto escribes.',
        sourceName: MAXIMUM_WORKING_HOURS_SOURCE.name,
        sourceUrl: MAXIMUM_WORKING_HOURS_SOURCE.url,
      },
      {
        contextLabel: 'Descanso diario',
        title: '11 horas de descanso seguidas entre dos jornadas',
        text: 'Un empleado mayor de edad tiene derecho a al menos 11 horas de descanso seguidas entre dos jornadas de trabajo. Algunas actividades o un pico de actividad permiten una excepción por acuerdo o con autorización de la inspección de trabajo, nunca por debajo de 9 horas. Es la trampa clásica de cerrar por la noche y abrir a la mañana siguiente: el Excel calcula el descanso más corto de cada persona en la semana.',
        sourceName: DAILY_REST_SOURCE.name,
        sourceUrl: DAILY_REST_SOURCE.url,
      },
      {
        contextLabel: 'Tiempo parcial, L3123-31 y L3123-24',
        title: 'Un cambio de horario avisado 7 días hábiles antes',
        text: 'Para un empleado a tiempo parcial, cualquier cambio en el reparto de sus horas entre los días de la semana o las semanas del mes se le notifica al menos 7 días hábiles antes. Un acuerdo de empresa o de sector puede fijar un plazo más corto, nunca inferior a 3 días hábiles, con contrapartidas para el empleado. La tabla de cambios guarda la fecha de cada aviso.',
        sourceName: PART_TIME_CHANGE_NOTICE_SOURCE.name,
        sourceUrl: PART_TIME_CHANGE_NOTICE_SOURCE.url,
      },
      {
        contextLabel: 'Contrato a tiempo parcial',
        title: 'Los horarios de cada jornada, comunicados por escrito',
        text: 'El contrato a tiempo parcial prevé cómo se comunican por escrito al empleado los horarios de cada jornada trabajada, y los casos en que su reparto puede cambiar. Si el cambio no está previsto en el contrato, la negativa del empleado no es una falta ni un motivo de despido. La agenda semanal, impresa o enviada cada semana, es un soporte sencillo para ese escrito.',
        sourceName: PART_TIME_WORK_SOURCE.name,
        sourceUrl: PART_TIME_WORK_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Planning semanal: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de planning semanal es de verdad gratis?',
        answer:
          'Sí. Los tres archivos se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos cuanto quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» en el pie de página, que puedes quitar.',
      },
      {
        question: 'Planning semanal o agenda semanal: ¿qué diferencia hay?',
        answer:
          'El planning semanal muestra todo un equipo en una página: una fila por persona, una columna por día. La agenda semanal (semainier) muestra a una sola persona, hora por hora, con sitio para sus citas y tareas. El primero sirve para organizar y colgar, la segunda para entregar a cada uno sus horarios o llevar tu propia agenda de la semana.',
      },
      {
        question: 'Planning o hoja de fichaje: ¿cuál necesito?',
        answer:
          'A menudo los dos, porque no dicen lo mismo. El planning dice lo previsto, antes de la semana. La hoja de fichaje (fiche de pointage) anota lo hecho, día a día, y es la que cuenta las horas extra: si las horas reales se alejan del planning, manda la hoja de fichaje. La plantilla de hoja de fichaje está en las plantillas gratuitas.',
      },
      {
        question: '¿Hay que colgar el planning del equipo en Francia?',
        answer:
          'Cuando todo el equipo sigue el mismo horario colectivo, sí: fechado, firmado por el empleador, colgado de forma legible en el lugar de trabajo, y cada cambio colgado antes de aplicarse (Código de Trabajo francés, D3171-1 a D3171-3). Cuando los horarios varían de una persona a otra, la jornada de cada uno se registra cada día y se suma cada semana (D3171-8): el planning sigue sirviendo para avisar, pero no sustituye ese registro.',
      },
      {
        question: '¿Con cuánta antelación hay que avisar de un cambio de planning?',
        answer:
          'Para un empleado a tiempo parcial, al menos 7 días hábiles, salvo un acuerdo colectivo que fije otro plazo, nunca inferior a 3 días hábiles (L3123-31 y L3123-24). Si tu empresa reparte la jornada en varias semanas por acuerdo, los cambios del programa siguen el plazo de siete días o el del acuerdo (D3171-5). Tu convenio colectivo puede añadir sus propias normas: léelo.',
      },
      {
        question: '¿Cuántas horas puedo prever como máximo al día y a la semana?',
        answer:
          '10 horas de trabajo efectivo al día, salvo excepción, y 12 como máximo si tu convenio lo prevé; 48 horas en una misma semana y 44 horas de media en 12 semanas; y al menos 11 horas de descanso seguidas entre dos jornadas. El Excel controla la jornada, la semana y el descanso de cada persona en cuanto escribes sus horarios.',
      },
      {
        question: '¿Cómo imprimo un planning de la semana?',
        answer:
          'Usa la página 2 del PDF, la agenda semanal: una página A4 en vertical, de 7 h a 21 h, siete columnas de lunes a domingo, para imprimir tantas veces como semanas. Sirve tanto de planning semanal para imprimir para un empleado como de agenda personal. En el Excel, la hoja «Semainier» cabe en una página A4 y se rellena sola desde el planning del equipo.',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer:
          'Tres hojas. «Planning de l’équipe»: pones el lunes en la casilla amarilla y luego el inicio, el fin y la pausa de cada día para cada persona; las horas, los totales, la diferencia con el contrato y la columna «Contrôle» se calculan, turno de noche incluido. «Semainier»: eliges a una persona en la lista y aparecen sus horarios y su tiempo de trabajo coloreado. «Synthèse» revisa la semana por persona y por día.',
      },
      {
        question: '¿Y cuando el planning se rehace cada semana?',
        answer:
          'Un Excel funciona muy bien para un equipo y una semana tipo. Cuando las ausencias, las sustituciones y los cambios de última hora obligan a rehacerlo todo y avisar a cada uno, un programa que enlaza el planning, los mensajes al personal y el fichaje ahorra ese tiempo. Si diriges una empresa de limpieza, el test de la página de herramientas te dice cuál elegir para el planning de tus agentes.',
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description:
      'Cuando el planning se copia cada lunes, cada cambio sale por SMS uno a uno y nadie sabe ya qué versión es la buena, una herramienta que lleva el planning, avisa al equipo y guarda el historial te devuelve horas. Cuéntame tu organización: te respondo en 24 horas, y si basta con un programa del mercado, te lo digo.',
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas para empresas de limpieza',
  },
}
