import type { DibodevWorkHoursCalculatorPageContent } from '~/core/types/DibodevWorkHoursCalculatorPage'
import { TIME_CLOCK_SHEET_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/timeClockSheet/pageShared'
import { WEEKLY_SCHEDULE_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/weeklySchedule/pageShared'
import {
  DAILY_MAXIMUM_WORK_SOURCE,
  DAILY_REST_SOURCE,
  FULL_TIME_MAXIMUM_DURATIONS_SOURCE,
  OVERTIME_DEFAULT_RATES_SOURCE,
  OVERTIME_SERVICE_PUBLIC_SOURCE,
  OVERTIME_WEEKLY_COUNT_SOURCE,
} from '~/core/constants/workHoursCalculator/pageShared'

export const WORK_HOURS_CALCULATOR_PAGE_ES: DibodevWorkHoursCalculatorPageContent = {
  meta: {
    title: 'Calculadora de horas de trabajo: semana y horas extra',
    description:
      'Calculadora gratis de horas de trabajo: entrada, salida y pausa de cada día, total en horas y en decimal, horas extra al 25 % y al 50 % según la ley francesa.',
    inLanguage: 'es-ES',
    schemaAbout:
      'Cálculo de las horas de trabajo semanales, conversión a horas decimales y horas extra según la ley laboral francesa',
  },
  breadcrumbLabel: 'Calculadora de horas de trabajo',
  numberLocale: 'es-ES',
  shareImage: {
    titleLines: ['Calculadora de horas', 'de trabajo gratis'],
    highlight: 'Calculadora de horas',
    subtitle:
      'Total de la semana en horas y en decimal, pausa descontada, horas extra al 25 % y al 50 % según la ley francesa',
    badge: 'Gratis, sin registro',
    alt: 'Calculadora gratis de horas de trabajo: total de la semana en horas y en decimal, pausa descontada y horas extra según la ley francesa, en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Calculadora de horas de trabajo',
    titleAfter: ' online',
    reassurances: ['Total en horas y en decimal', 'Horas extra al 25 % y al 50 %', 'No se guarda nada'],
    aboutTitle: 'Sobre la calculadora',
    description:
      'Una calculadora de horas de trabajo para contar la semana de un empleado, o la tuya, a partir de los horarios de cada día: pausa descontada, turno de noche contado, total convertido a horas decimales para la nómina. Con la duración de referencia y una tarifa bruta por hora, separa las horas por encima de la referencia y te da su importe con los recargos que fija la ley francesa cuando ningún convenio fija otros.',
    authorIntro: 'Calculadora preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Creé desde cero, en la editorial de software Kodeva, un programa de seguimiento de horas por obra (Gest-Time), que siguen usando pymes. Para esta calculadora, leí los artículos del Código de Trabajo francés y las páginas de Service-Public sobre la jornada laboral y las horas extra.',
  },
  calculator: {
    dayLabels: {
      monday: 'Lunes',
      tuesday: 'Martes',
      wednesday: 'Miércoles',
      thursday: 'Jueves',
      friday: 'Viernes',
      saturday: 'Sábado',
      sunday: 'Domingo',
    },
    dayColumnLabel: 'Día',
    arrivalLabel: 'Entrada',
    departureLabel: 'Salida',
    breakLabel: 'Pausa (min)',
    dayTotalLabel: 'Total',
    nextDayTag: 'termina al día siguiente',
    breakTooLongTag: 'pausa demasiado larga',
    referenceLabel: 'Duración de referencia (horas por semana)',
    referenceHint: '35 h por defecto, la jornada legal en Francia. Los importes solo se muestran con 35 h.',
    hourlyRateLabel: 'Tarifa bruta por hora en euros (opcional)',
    hourlyRateHint: 'Para mostrar el importe de las horas. Se queda en tu navegador.',
    copyMondayButton: 'Copiar el lunes en los días laborables',
    clearButton: 'Borrar todo',
    copySummaryButton: 'Copiar el resumen',
    copiedStatus: 'Resumen copiado: pégalo en un correo o en una hoja de cálculo.',
    copyFailedStatus: 'La copia no ha funcionado en este navegador: apunta el resultado a mano.',
    durationTemplate: '{hours} h {minutes}',
    resultLabel: 'Total de la semana',
    emptyResultText: 'Escribe la entrada y la salida de al menos un día: el total se calcula mientras escribes.',
    decimalTemplate: 'es decir, {decimal} h en horas decimales',
    regularLabel: 'Horas hasta la referencia',
    beyondReferenceTemplate: 'Por encima de {reference}',
    firstTierLabel: '8 primeras horas por encima',
    nextTierLabel: 'Horas siguientes',
    payTitle: 'Importe bruto estimado',
    payRegularLabel: 'Horas normales',
    payFirstTierLabel: '8 primeras horas extra (+25 %)',
    payNextTierLabel: 'Horas extra siguientes (+50 %)',
    payTotalLabel: 'Total de la semana',
    payNote:
      'Recargos por defecto del artículo L3121-36 del Código de Trabajo francés, cuando ningún convenio fija otra cosa. Tu convenio colectivo o un acuerdo de empresa puede fijar otros, de al menos el 10 %.',
    payUnavailableNote:
      'Los importes solo se muestran con la referencia de 35 h, la jornada legal. Con otra referencia las reglas cambian (horas complementarias de un contrato a tiempo parcial, horas ya pagadas con recargo en un contrato de 39 h): revisa tu contrato y tu convenio.',
    alertsTitle: 'A revisar',
    dailyMaximumAlertTemplate: '{days}: más de 10 h de trabajo efectivo, el máximo diario salvo excepción.',
    shortBreakAlertTemplate: '{days}: 6 h de trabajo o más con una pausa de menos de 20 minutos.',
    weeklyMaximumAlert: 'Más de 48 h en la semana, el máximo salvo autorización excepcional.',
    listConjunction: 'y',
    privacyNote: 'Todo se calcula en tu navegador: no se envía ni se guarda ningún horario ni tarifa.',
    summary: {
      title: 'Resumen de las horas de la semana',
      dayLineTemplate: '{day}: de {arrival} a {departure}, pausa de {break} min, {duration} ({decimal} h)',
      restDayTemplate: '{day}: no trabajado',
      totalTemplate: 'Total: {duration} ({decimal} h)',
      beyondReferenceTemplate:
        'Por encima de {reference}: {duration} ({decimal} h), de las que {firstTier} para las 8 primeras horas y {nextTier} para las siguientes',
      regularPayTemplate: 'Horas normales: {amount}',
      firstTierPayTemplate: '8 primeras horas extra (+25 %): {amount}',
      nextTierPayTemplate: 'Horas extra siguientes (+50 %): {amount}',
      totalPayTemplate: 'Importe bruto estimado: {amount}',
      footer:
        'Calculado con la calculadora de horas de trabajo de dibodev.fr. Estimación a comprobar con tu convenio colectivo.',
    },
  },
  summary: {
    eyebrow: 'En resumen',
    text: 'Horas del día = salida − entrada − pausa. Suma los siete días, de lunes a domingo, y convierte los minutos en decimales dividiéndolos entre 60 (30 min = 0,50 h). En Francia, toda hora por encima de 35 h en la semana es una hora extra: sin convenio colectivo, las 8 primeras llevan un recargo del 25 % y las siguientes del 50 %.',
    dateLabel: 'Reglas releídas el 22 de noviembre de 2026 en Légifrance y Service-Public.',
  },
  howToCount: {
    eyebrow: 'Cómo contar',
    title: 'Contar tus horas sin equivocarte',
    intro:
      'Cuatro puntos marcan la diferencia entre un total correcto y uno erróneo: la pausa, la conversión a decimal, el turno de noche y la semana.',
    steps: [
      {
        label: 'La pausa',
        title: 'Quitar la pausa del tiempo de presencia',
        description:
          'Entrada a las 8:00, salida a las 17:30, una hora de pausa: 9 h 30 de presencia, 8 h 30 de trabajo. Si tu contrato o tu convenio paga la pausa, o si sigues a disposición de la empresa durante ese tiempo, deja 0 en la casilla.',
      },
      {
        label: 'El decimal',
        title: 'Convertir los minutos en decimales',
        description:
          'La nómina cuenta en horas decimales: divide los minutos entre 60. 15 min = 0,25 h, 30 min = 0,50 h, 45 min = 0,75 h, 20 min = 0,33 h. Así, 7 h 30 se escribe 7,50 y no 7,30. La calculadora muestra las dos.',
      },
      {
        label: 'Medianoche',
        title: 'Un turno de noche que pasa la medianoche',
        description:
          'Si la hora de salida es anterior a la de entrada, el turno termina al día siguiente: de 22:00 a 6:00 son 8 h de presencia. La calculadora cuenta todo el turno en el día de entrada. Para un turno que empieza el domingo por la noche, las horas después de medianoche pertenecen en rigor a la semana siguiente, que empieza el lunes a las 0:00.',
      },
      {
        label: 'La semana',
        title: 'Comparar la semana con 35 horas',
        description:
          'Las horas extra se cuentan semana a semana, nunca por mes: una semana de 40 h da 5 horas extra, aunque la siguiente solo tenga 30, salvo acuerdo que reparta la jornada en varias semanas. Ajusta la referencia a la duración de tu contrato para ver las horas que la superan.',
      },
    ],
  },
  rules: {
    anchorId: 'reglas',
    eyebrow: 'Lo que dice la ley francesa',
    title: 'Seis reglas sobre la jornada y las horas extra en Francia',
    intro:
      'Leídas el 22 de noviembre de 2026 en Légifrance y Service-Public, para un empleado a tiempo completo del sector privado en Francia. Un convenio colectivo puede cambiar varias: se aplican cuando no hay nada más previsto.',
    facts: [
      {
        contextLabel: 'Código de Trabajo, art. L3121-29',
        title: 'Las horas extra se cuentan semana a semana',
        text: 'El Código de Trabajo francés lo dice en una frase: las horas extra se cuentan por semana. Service-Public precisa que la semana va del lunes a las 0:00 al domingo a las 24:00 y que la jornada legal es de 35 horas. Es lo que hace la calculadora, de lunes a domingo.',
        sourceName: OVERTIME_WEEKLY_COUNT_SOURCE.name,
        sourceUrl: OVERTIME_WEEKLY_COUNT_SOURCE.url,
      },
      {
        contextLabel: 'Sin acuerdo, art. L3121-36',
        title: 'Por encima de 35 h, 25 % y luego 50 %',
        text: 'Sin acuerdo, cada una de las 8 primeras horas extra de la semana, de la 36.ª a la 43.ª, lleva un recargo del 25 %. Las siguientes, a partir de la 44.ª, del 50 %. Son los recargos que aplica la calculadora cuando le das una tarifa por hora.',
        sourceName: OVERTIME_DEFAULT_RATES_SOURCE.name,
        sourceUrl: OVERTIME_DEFAULT_RATES_SOURCE.url,
      },
      {
        contextLabel: 'Convenio o acuerdo',
        title: 'Otros recargos posibles, nunca por debajo del 10 %',
        text: 'Un convenio colectivo puede fijar otros recargos, cada uno de al menos el 10 %, según Service-Public. Sin convenio ni acuerdo, el contingente es de 220 horas extra por empleado y año. Antes de pagar o reclamar horas, lee tu convenio colectivo.',
        sourceName: OVERTIME_SERVICE_PUBLIC_SOURCE.name,
        sourceUrl: OVERTIME_SERVICE_PUBLIC_SOURCE.url,
      },
      {
        contextLabel: 'Código de Trabajo, art. L3121-18',
        title: '10 horas de trabajo efectivo al día como máximo',
        text: 'La jornada diaria de trabajo efectivo no puede superar las 10 horas, salvo excepción concedida por la inspección de trabajo, urgencia o casos previstos por la ley. La calculadora señala cada día que supera las 10 h.',
        sourceName: DAILY_MAXIMUM_WORK_SOURCE.name,
        sourceUrl: DAILY_MAXIMUM_WORK_SOURCE.url,
      },
      {
        contextLabel: 'Tiempo completo',
        title: '48 h en una semana, 44 h de media en 12 semanas',
        text: 'Para un empleado a tiempo completo de 18 años o más, Service-Public fija el máximo en 48 horas en una misma semana y en 44 horas de media en 12 semanas consecutivas. Se debe una pausa de al menos 20 minutos seguidos a partir de 6 horas de trabajo.',
        sourceName: FULL_TIME_MAXIMUM_DURATIONS_SOURCE.name,
        sourceUrl: FULL_TIME_MAXIMUM_DURATIONS_SOURCE.url,
      },
      {
        contextLabel: 'Descanso diario',
        title: '11 horas de descanso entre dos jornadas',
        text: 'Entre dos jornadas de trabajo, un empleado mayor de edad tiene derecho a al menos 11 horas de descanso seguidas. Las excepciones pueden reducirlas, nunca por debajo de 9 horas. Un turno que termina a las 23:00 permite volver como pronto a las 10:00 del día siguiente.',
        sourceName: DAILY_REST_SOURCE.name,
        sourceUrl: DAILY_REST_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'La calculadora no sustituye a tu convenio colectivo.',
    calloutText:
      'Aplica los recargos por defecto de la ley francesa. Un convenio, un acuerdo de empresa, un contrato por días, un tiempo parcial o una jornada repartida en varias semanas cambian el cálculo: revísalos antes de pagar o reclamar horas.',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Cálculo de horas: tus preguntas',
    questions: [
      {
        question: '¿Cómo calculo mis horas de trabajo?',
        answer:
          'Para cada día: hora de salida − hora de entrada − pausa. Entrada a las 8:30, salida a las 17:00, 45 minutos de pausa: 8 h 30 de presencia, 7 h 45 de trabajo, es decir, 7,75 horas. Luego suma los días de lunes a domingo para obtener la semana. La calculadora de esta página lo hace mientras escribes.',
      },
      {
        question: '¿Cómo convierto minutos en horas decimales?',
        answer:
          'Divide los minutos entre 60. 6 min = 0,10 h, 10 min = 0,17 h, 15 min = 0,25 h, 20 min = 0,33 h, 30 min = 0,50 h, 40 min = 0,67 h, 45 min = 0,75 h, 50 min = 0,83 h. Al revés, multiplica los decimales por 60: 0,40 h = 24 minutos.',
      },
      {
        question: '¿Cuánto es 7 h 30 en decimal?',
        answer:
          '7,50 horas: 30 minutos son media hora, o sea 0,50. El error habitual es escribir 7,30, que en realidad son 7 h 18. Del mismo modo, 7 h 45 = 7,75, 7 h 20 = 7,33 y 8 h 15 = 8,25.',
      },
      {
        question: '¿Cómo calculo mis horas extra?',
        answer:
          'Suma la semana, de lunes a domingo, y resta 35 horas. Lo que queda son las horas extra de la semana según la ley francesa. Una semana de 41 h 30 da 6 h 30 de horas extra, todas al primer recargo. Una semana de 45 h da 10 horas extra: 8 al primer recargo y 2 al segundo. Se cuentan semana a semana, nunca por mes.',
      },
      {
        question: '¿Qué recargo llevan las horas extra en Francia?',
        answer:
          'Sin acuerdo, la ley fija un 25 % para cada una de las 8 primeras horas extra de la semana (de la 36.ª a la 43.ª) y un 50 % a partir de la 44.ª (art. L3121-36 del Código de Trabajo). Un convenio colectivo puede fijar otros, de al menos el 10 %. A 12 € brutos la hora, una hora con un 25 % vale 15 €, con un 50 % 18 €.',
      },
      {
        question: '¿Cómo cuento un turno de noche que pasa la medianoche?',
        answer:
          'Cuenta la salida en el día siguiente: de 21:00 a 5:00 son 8 h de presencia, no un número negativo. En la calculadora, escribe la entrada y la salida en la misma línea: una salida anterior a la entrada se cuenta al día siguiente, y la línea lo indica.',
      },
      {
        question: '¿La pausa para comer cuenta como tiempo de trabajo?',
        answer:
          'Por lo general no: se quita del tiempo de presencia. Cuenta como trabajo efectivo cuando sigues a disposición de la empresa y no puedes dedicarte libremente a tus asuntos, por ejemplo si tienes que atender el teléfono. Tu contrato o tu convenio también puede pagarla. En esos casos, deja la pausa en 0.',
      },
      {
        question: '¿Y para un empleado a tiempo parcial?',
        answer:
          'En Francia, las horas por encima de la duración de un contrato a tiempo parcial no son horas extra sino horas complementarias, con sus propias reglas (art. L3123-8 del Código de Trabajo). Ajusta la referencia a la duración del contrato: la calculadora muestra las horas que la superan, pero ningún importe, porque los recargos del 25 % y del 50 % no se aplican.',
      },
      {
        question: '¿Cuántas horas extra se pueden hacer al año?',
        answer:
          'Sin convenio ni acuerdo, el contingente es de 220 horas extra por empleado y año, según Service-Public. Los máximos siguen valiendo cada semana: 48 horas en una semana, 44 horas de media en 12 semanas, 10 horas al día salvo excepción.',
      },
      {
        question: '¿La calculadora guarda mis horarios?',
        answer:
          'No. Todo se calcula en tu navegador: no se envía ni se guarda ningún horario ni tarifa, y todo se borra al cerrar la página. Para guardar una copia, copia el resumen o usa la hoja de fichaje gratuita.',
      },
    ],
  },
  templates: {
    eyebrow: 'Plantillas gratuitas',
    title: 'Guardar las horas de cada semana',
    intro:
      'La calculadora no guarda nada. Para conservar las horas, hacerlas firmar y preparar la semana siguiente, dos plantillas gratuitas en francés, en PDF, Word y Excel, sin registro.',
    links: [
      {
        routeName: TIME_CLOCK_SHEET_TEMPLATE_ROUTE_NAME,
        title: 'Hoja de fichaje',
        description:
          'Entrada, pausa y salida de cada día, total de la semana y horas por encima de 35 h, resumen del mes para la nómina.',
        linkLabel: 'Ver la hoja de fichaje',
      },
      {
        routeName: WEEKLY_SCHEDULE_TEMPLATE_ROUTE_NAME,
        title: 'Planning semanal',
        description:
          'Planning del equipo y agenda semanal para imprimir, con las horas del día, los descansos y los totales calculados.',
        linkLabel: 'Ver el planning semanal',
      },
    ],
  },
  contactCta: {
    title: '¿Las horas de todo un equipo que contar cada mes?',
    description:
      'Cuando las hojas de fichaje se vuelven a teclear una a una en la nómina y las horas extra se recalculan a mano cada fin de mes, una herramienta que une fichaje, planning y nómina te devuelve esas horas. Cuéntame cómo trabajas: te respondo en 24 h, y si un software del mercado basta, te lo digo.',
    button: 'Hablar de mi proyecto',
  },
}
