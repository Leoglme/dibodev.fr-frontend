import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  DAILY_MAXIMUM_WORK_SOURCE,
  OVERTIME_RATE_SOURCE,
  TIME_CLOCK_PRIVACY_SOURCE,
  TIME_CLOCK_SHEET_TEMPLATE_DOCX_PATH,
  TIME_CLOCK_SHEET_TEMPLATE_PDF_PATH,
  TIME_CLOCK_SHEET_TEMPLATE_UPDATED_AT,
  TIME_CLOCK_SHEET_TEMPLATE_XLSX_PATH,
  WORKING_HOURS_DISPUTE_SOURCE,
  WORKING_TIME_DAILY_RECORD_SOURCE,
  WORKING_TIME_RECORDS_RETENTION_SOURCE,
} from '~/core/constants/freeTemplates/timeClockSheet/pageShared'
import { NBSP } from '~/core/constants/typography'

export const TIME_CLOCK_SHEET_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Hoja de fichaje: plantilla gratis (PDF, Word, Excel)',
    description:
      'Hoja de fichaje: plantilla francesa gratis en PDF, Word y Excel. Entrada, pausa, salida, horas del día y de la semana calculadas, horas extra y resumen del mes.',
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de hoja de fichaje semanal de las horas de trabajo y de resumen mensual',
  },
  breadcrumbLabel: 'Hoja de fichaje',
  shareImage: {
    titleLines: ['Hoja de fichaje', 'plantilla francesa gratis'],
    highlight: 'Hoja de fichaje',
    subtitle: 'Fichaje de la semana y resumen del mes, en PDF, Word y Excel, horas y horas extra calculadas',
    badge: 'Gratis, sin registro',
    icon: 'clipboard',
    alt: 'Plantilla francesa de hoja de fichaje gratis: fichaje semanal de las horas de trabajo y resumen mensual en PDF, Word y Excel, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Hoja de fichaje',
    titleAfter: ': plantilla francesa gratis, Excel, Word y PDF (semana + resumen del mes)',
    reassurances: ['Fichaje semanal + resumen del mes', 'Excel que calcula las horas extra', 'Sin registro ni e-mail'],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Una hoja de fichaje (fiche de pointage) escrita en francés para los empleadores en Francia, para anotar día a día la hora de entrada, la pausa y la hora de salida de un trabajador, y luego contar sus horas de la semana y las que pasan de 35 horas. El resumen del mes reúne las semanas para la nómina. Una hoja de asistencia dice quién estaba; la hoja de fichaje dice cuántas horas ha trabajado cada uno, y es la que sirve para contar las horas extra.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Creé desde cero, en la editorial de software Kodeva, un programa de seguimiento de horas por obra (Gest-Time), que siguen usando pymes. Para esta plantilla, leí los artículos del Código de Trabajo francés sobre el cómputo de las horas.',
    updatedAt: TIME_CLOCK_SHEET_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para las pequeñas empresas en Francia que aún cuentan las horas en papel o en una hoja de cálculo: comercio, restauración, limpieza, construcción, asociaciones. Tres archivos en francés, sin formulario: el PDF se imprime y se rellena a mano, el Excel calcula las horas, el Word se modifica libremente.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: TIME_CLOCK_SHEET_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: TIME_CLOCK_SHEET_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 hojas, horas calculadas, en francés',
      },
      {
        label: 'Descargar la versión Word',
        href: TIME_CLOCK_SHEET_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 páginas, editable, en francés',
      },
    ],
    footnote:
      'Plantilla de uso libre, para adaptar a tu empresa y a tu convenio colectivo. No sustituye el consejo de un jurista ni el de tu gestor de nóminas.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Una hoja de fichaje por semana, un resumen por mes',
    intro:
      'El PDF cabe en dos páginas A4: la hoja de la semana, que se rellena cada día, y el resumen del mes, que se rellena a partir de las hojas. El Excel recoge las dos y añade una hoja de ajustes para la jornada prevista en el contrato y los porcentajes de recargo.',
    documents: [
      {
        title: 'Hoja de fichaje de la semana',
        format: 'Página 1 del PDF, hoja «Fiche de la semaine» del Excel',
        items: [
          'Cabecera de la empresa (nombre, dirección, SIRET), nombre del trabajador, puesto o departamento, semana de lunes a domingo, jornada prevista en el contrato',
          'Siete líneas, de lunes a domingo: fecha, entrada, inicio de la pausa, fin de la pausa, salida, duración de la pausa, horas del día, observaciones (ausencia, retraso, desplazamiento)',
          'En el Excel, una columna «Contrôle» (control) por día: hora que falta, pausa fuera del horario, más de 10 horas en el día, pausa de menos de 20 minutos a partir de 6 horas de trabajo, turno que pasa de medianoche',
          'Total de la semana, horas por encima de la jornada prevista, horas por encima de 35 repartidas entre las 8 primeras y las siguientes, alerta por encima de 48 horas',
          'Ausencias de la semana en horas: vacaciones pagadas, enfermedad o accidente de trabajo, descanso compensatorio o día RTT, festivo no trabajado, otra',
          'Firma del trabajador («certifico que las horas anotadas son exactas») y del responsable, recordatorio de los artículos del Código de Trabajo francés sobre el cómputo y las duraciones máximas',
        ],
      },
      {
        title: 'Resumen del mes',
        format: 'Página 2 del PDF, hoja «Récapitulatif du mois» del Excel',
        items: [
          'Nombre del trabajador, mes y año, jornada prevista, tiempo completo o tiempo parcial',
          'Seis líneas de semana (un mes toca hasta seis): horas trabajadas, horas normales, horas extra al primer y al segundo porcentaje, horas por encima de la jornada prevista, ausencias con su código',
          'Total del mes y, en el Excel, un resumen para la nómina: horas normales, horas extra por porcentaje, ausencias, media por semana',
          'Comprobaciones del mes para marcar en el PDF: ningún día por encima de 10 horas, ninguna semana por encima de 48 horas, 44 horas como máximo de media en 12 semanas, pausas, hojas firmadas, horas enviadas a la nómina',
          'Códigos de ausencia: CP, M, AT, RC, RTT, F, CSS, FO, A, elegidos en una lista en el Excel',
          'Firmas del trabajador y del responsable, fecha en que se cierra el resumen',
        ],
      },
      {
        title: 'Ajustes',
        format: 'Hoja «Réglages» del Excel',
        items: [
          'Jornada semanal prevista en el contrato en casilla amarilla: 35 horas por defecto, la jornada del contrato para un tiempo parcial',
          `Porcentajes de recargo en casillas amarillas: 25${NBSP}% y 50${NBSP}% por defecto, para cambiar si un convenio colectivo prevé otros`,
          'Duración mínima de la pausa (20 minutos por defecto) y referencias fijas del Código de Trabajo francés: 35 horas, 8 horas al primer porcentaje, 10 horas al día, 48 horas a la semana',
          'Para cada valor, el artículo del Código de Trabajo francés del que sale',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar la hoja de fichaje en cuatro pasos',
    intro:
      'En el Excel, solo se escriben las casillas blancas y las amarillas. La duración de la pausa, las horas de cada día, el total de la semana y las horas extra se calculan solos.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Los ajustes, una vez por trabajador',
        description:
          'En la hoja «Réglages», escribe la jornada del contrato (35 horas para un tiempo completo) y, si se aplica un convenio colectivo, sus porcentajes de recargo. Luego guarda el archivo con el nombre del trabajador: cada semana parte de esa copia.',
      },
      {
        label: 'Paso 2',
        title: 'Cada día, cuatro horas',
        description:
          'La entrada, el inicio y el fin de la pausa, la salida, con el formato 08:30. Anótalas el mismo día, no por adelantado. La columna «Contrôle» avisa de una hora olvidada, una pausa demasiado corta o un día de más de 10 horas.',
      },
      {
        label: 'Paso 3',
        title: 'Al final de la semana, el total y las firmas',
        description:
          'El total de la semana y las horas por encima de 35 se leen bajo la tabla. Anota las ausencias en horas, imprime la hoja, hazla firmar por el trabajador y luego por el responsable, y guárdala.',
      },
      {
        label: 'Paso 4',
        title: 'Al final del mes, el resumen',
        description:
          'Copia el total de cada hoja en su línea del «Récapitulatif du mois»: las horas normales y las horas extra por porcentaje se calculan semana a semana. Añade las ausencias con su código y envía el resumen a la nómina.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exige la norma francesa',
    title: 'Las normas que la plantilla ya sigue',
    intro:
      'Seis normas del Código de Trabajo francés y de la CNIL, la autoridad francesa de protección de datos, pasan por el fichaje de las horas. La plantilla les reserva una columna, un cálculo o una mención; no sustituye el consejo de un jurista en caso de litigio.',
    facts: [
      {
        contextLabel: 'Código de Trabajo francés, art. D3171-8',
        title: 'Un cómputo cada día, un resumen cada semana',
        text: 'Cuando los trabajadores de un taller, un departamento o un equipo no siguen todos el mismo horario colectivo publicado, la jornada de cada uno se computa cada día, anotando la hora de inicio y de fin de cada periodo o el número de horas hechas, y se resume cada semana. Es justo la página 1 de la plantilla: una línea por día, un total por semana.',
        sourceName: WORKING_TIME_DAILY_RECORD_SOURCE.name,
        sourceUrl: WORKING_TIME_DAILY_RECORD_SOURCE.url,
      },
      {
        contextLabel: 'Durante un año',
        title: 'Las hojas quedan a disposición de la inspección de trabajo',
        text: 'El empleador tiene a disposición de la inspección de trabajo, durante un año, los documentos que permiten contar las horas hechas por cada trabajador, horarios individualizados incluidos. Las hojas semanales y los resúmenes mensuales firmados, ordenados por mes y por trabajador, forman parte de ellos.',
        sourceName: WORKING_TIME_RECORDS_RETENTION_SOURCE.name,
        sourceUrl: WORKING_TIME_RECORDS_RETENTION_SOURCE.url,
      },
      {
        contextLabel: 'A falta de acuerdo',
        title: `Por encima de 35 horas, 25${NBSP}% y luego 50${NBSP}%`,
        text: `Toda hora hecha por encima de 35 horas en la semana es una hora extra, y se cuenta semana a semana. Sin convenio colectivo, las 8 primeras (de la hora 36 a la 43) llevan un recargo del 25${NBSP}%, las siguientes del 50${NBSP}%. Un acuerdo de empresa o de sector puede fijar otros porcentajes, nunca por debajo del 10${NBSP}% (art. L3121-33): la plantilla los toma de sus ajustes.`,
        sourceName: OVERTIME_RATE_SOURCE.name,
        sourceUrl: OVERTIME_RATE_SOURCE.url,
      },
      {
        contextLabel: 'Código de Trabajo francés, art. L3121-16 y L3121-18',
        title: 'Una pausa de 20 minutos desde 6 horas, 10 horas al día como máximo',
        text: 'En cuanto el trabajo del día llega a 6 horas, el trabajador tiene derecho a una pausa de al menos 20 minutos seguidos. La jornada de trabajo efectivo no pasa de 10 horas, salvo excepción o urgencia, ni la semana de 48 horas (art. L3121-20). El Excel controla la pausa y el día, y avisa por encima de 48 horas.',
        sourceName: DAILY_MAXIMUM_WORK_SOURCE.name,
        sourceUrl: DAILY_MAXIMUM_WORK_SOURCE.url,
      },
      {
        contextLabel: 'En caso de litigio',
        title: 'El empleador debe poder mostrar las horas realmente hechas',
        text: 'Si un trabajador discute sus horas, el empleador aporta al juez los elementos que justifican los horarios realmente hechos, y el trabajador aporta los suyos; el juez decide a la vista de ambos. Un sistema de registro automático debe ser fiable e infalsificable. Una hoja rellenada el mismo día y firmada cada semana por los dos vale más que una tabla rehecha de memoria a final de mes.',
        sourceName: WORKING_HOURS_DISPUTE_SOURCE.name,
        sourceUrl: WORKING_HOURS_DISPUTE_SOURCE.url,
      },
      {
        contextLabel: 'CNIL',
        title: 'Un reloj de fichaje, sí; la biometría, no',
        text: 'Un sistema de control de horarios está permitido si sigue siendo proporcionado. Para la CNIL, un reloj de fichaje biométrico (huella, reconocimiento facial) o que fotografía al trabajador en cada fichaje es excesivo. Cada trabajador recibe la información antes, y los representantes del personal son informados o consultados; los datos que sirven para seguir el tiempo de trabajo se guardan 5 años como máximo en archivo.',
        sourceName: TIME_CLOCK_PRIVACY_SOURCE.name,
        sourceUrl: TIME_CLOCK_PRIVACY_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Hoja de fichaje: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de hoja de fichaje es realmente gratis?',
        answer:
          'Sí. Los tres archivos se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» a pie de página, que puedes quitar.',
      },
      {
        question: '¿La hoja de fichaje es obligatoria en Francia?',
        answer:
          'El Código de Trabajo francés no impone ningún formulario, pero sí un cómputo: en cuanto tus trabajadores no siguen todos el mismo horario colectivo publicado, la jornada de cada uno se anota cada día y se resume cada semana (art. D3171-8). Incluso con un horario común, guardar las horas realmente hechas te protege: en caso de litigio, es el empleador quien aporta los elementos que las justifican (art. L3171-4). Papel, Excel o reloj de fichaje, la forma es libre.',
      },
      {
        question: 'Hoja de fichaje u hoja de asistencia: ¿qué diferencia hay?',
        answer:
          'La hoja de asistencia dice quién estaba, un día o en una reunión. La hoja de fichaje anota a qué hora llegó cada uno, hizo su pausa y se fue, para contar sus horas de trabajo. Es la única de las dos que permite calcular las horas extra y responder a la inspección de trabajo sobre la jornada.',
      },
      {
        question: '¿Cómo se calculan las horas de trabajo de un día?',
        answer:
          'Horas del día = hora de salida − hora de entrada − duración de la pausa. Entrada a las 8:00, pausa de 12:00 a 13:00, salida a las 17:30: 9 h 30 de presencia menos 1 hora de pausa, o sea 8 h 30, es decir 8,5 horas en decimal. Para la nómina, convierte los minutos: 15 min = 0,25 h, 30 min = 0,5 h, 45 min = 0,75 h. El Excel hace este cálculo para cada día.',
      },
      {
        question: '¿Cómo se calculan las horas extra a partir de la hoja?',
        answer: `Semana a semana, nunca sobre el mes: todo lo que pasa de 35 horas en la semana es hora extra. Sin convenio colectivo, las horas 36 a 43 llevan un recargo del 25${NBSP}%, las siguientes del 50${NBSP}%: una semana de 40,5 horas da 5,5 horas al 25${NBSP}%. Para un trabajador a tiempo parcial, las horas por encima de su contrato son «heures complémentaires», con sus propias reglas (art. L3123-8): la plantilla las muestra en «por encima de la jornada prevista».`,
      },
      {
        question: '¿Cuánto tiempo hay que guardar las hojas de fichaje?',
        answer:
          'Un año como mínimo: es el tiempo durante el que el empleador tiene a disposición de la inspección de trabajo los documentos que cuentan las horas de cada trabajador (art. D3171-16). Para los datos de un reloj de fichaje, la CNIL admite guardarlos en archivo hasta 5 años. Ordena las hojas y los resúmenes firmados por trabajador y por mes.',
      },
      {
        question: '¿Puedo instalar un reloj de fichaje?',
        answer:
          'Sí, si el sistema sigue siendo proporcionado. La CNIL considera excesivo un reloj de fichaje biométrico (huella, reconocimiento facial) o que hace una foto en cada fichaje, y pide limitar los datos a lo necesario. Avisa a cada trabajador antes de ponerlo en marcha (finalidad, destinatarios, plazo de conservación) e informa o consulta a los representantes del personal.',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer:
          'Tres hojas. «Fiche de la semaine»: escribes el lunes, luego la entrada, la pausa y la salida de cada día con el formato 08:30; la pausa, las horas del día, el total y las horas extra por porcentaje se calculan, y la columna «Contrôle» avisa de olvidos y excesos. «Récapitulatif du mois» recoge el total de cada semana. «Réglages» guarda la jornada prevista y los porcentajes. Un turno que pasa de medianoche (22:00 → 06:00) no se calcula: el Excel lo avisa, cuéntalo a mano.',
      },
      {
        question: '¿Y cuando el fichaje de todo un equipo se vuelve una pesadez?',
        answer:
          'Una hoja por trabajador y por semana es llevadera para unas pocas personas. Más allá, volver a escribir cada hoja en la nómina, reclamar las firmas y detectar las pausas olvidadas lleva horas cada mes: un programa de fichaje conectado a la planificación y a la nómina ahorra ese tiempo. Si diriges una empresa de limpieza, el test de la página de la herramienta te dice cuál elegir para la planificación y el fichaje de tus trabajadores.',
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description: `Cuando las hojas de fichaje vuelven tarde, se pasan una a una a la nómina y las horas extra se recalculan a mano cada final de mes, una herramienta que conecta el fichaje, la planificación y la nómina te devuelve horas. Descríbeme tu organización: te respondo en 24${NBSP}h, y si un programa del mercado basta, te lo digo.`,
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas para empresas de limpieza',
  },
}
