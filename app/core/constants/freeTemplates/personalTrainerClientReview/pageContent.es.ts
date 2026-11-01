import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { PERSONAL_TRAINER_CLIENT_REVIEW_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/personalTrainerClientReview/pageShared'
import {
  GYM_MEMBERSHIP_RULES_SOURCE,
  HEALTH_DATA_SOURCE,
  PERSONAL_TRAINER_TEMPLATE_PDF_PATH,
  PERSONAL_TRAINER_TEMPLATE_XLSX_PATH,
  SPORTS_EDUCATOR_DECLARATION_SOURCE,
} from '~/core/constants/tools/personalTrainerSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const PERSONAL_TRAINER_CLIENT_REVIEW_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Evaluación de cliente de entrenador: plantilla gratis',
    description:
      'Evaluación de cliente de entrenador personal: plantilla francesa gratis en PDF y Excel, con cuaderno de sesiones. Medidas, tests, tonelaje. Sin registro.',
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de evaluación de cliente y cuaderno de sesiones para entrenadores personales',
  },
  breadcrumbLabel: 'Evaluación de cliente de entrenador',
  shareImage: {
    titleLines: ['Evaluación de cliente', 'plantilla gratis'],
    highlight: 'Evaluación de cliente',
    subtitle: 'Evaluación inicial y cuaderno de sesiones en PDF y Excel, medidas, tests de partida, tonelaje calculado',
    badge: 'Gratis, sin registro',
    icon: 'dumbbell',
    alt: 'Plantilla francesa de evaluación de cliente para entrenador personal gratis: evaluación inicial y cuaderno de sesiones en PDF y Excel, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Evaluación de cliente de entrenador personal',
    titleAfter: ': plantilla francesa gratis (+ cuaderno de sesiones)',
    reassurances: [
      'Evaluación inicial + cuaderno de sesiones',
      'Excel con tonelaje calculado',
      'Sin registro ni e-mail',
    ],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Una evaluación inicial y un cuaderno de sesiones de musculación listos para rellenar, escritos en francés para el mercado francés, para un entrenador personal autónomo o un gimnasio pequeño. La evaluación recoge los objetivos, los antecedentes, las medidas y los tests de partida del cliente, y su consentimiento para los datos de salud. El cuaderno sigue cada sesión: series, repeticiones, cargas, RPE y tonelaje.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Leí las normas francesas del carné profesional de educador deportivo, del certificado médico y de los datos de salud para que las menciones estén al día.',
    updatedAt: PERSONAL_TRAINER_CLIENT_REVIEW_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para entrenadores personales autónomos, coaches y gimnasios pequeños que trabajan en Francia. Dos archivos en francés, sin formulario: el PDF se imprime, el Excel calcula.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: PERSONAL_TRAINER_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: PERSONAL_TRAINER_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 hojas, tonelaje calculado, en francés',
      },
    ],
    footnote: 'Plantilla de uso libre, para adaptar a tu práctica. No sustituye un consejo médico.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Una evaluación inicial y un cuaderno de sesiones, en PDF y en Excel',
    intro:
      'El PDF recoge los dos documentos en dos páginas A4, para rellenar a mano. El Excel los recoge en dos hojas: la primera calcula la diferencia entre la última medida y la de partida, la segunda el tonelaje de cada ejercicio y de cada sesión.',
    documents: [
      {
        title: 'Evaluación inicial',
        format: 'Página 1 del PDF, hoja «Bilan client» del Excel',
        items: [
          'Cabecera del entrenador o del gimnasio (nombre, teléfono, n.º de carné profesional de educador deportivo), diploma (BPJEPS, DEUST, STAPS…) y seguro de responsabilidad civil',
          'Cliente, fecha de la evaluación, fecha de nacimiento, teléfono o e-mail',
          'Objetivos y práctica actual: objetivo principal, plazo previsto, deporte practicado, sesiones posibles por semana, lugar y material, sueño y alimentación',
          'Antecedentes y dolores: lesiones y operaciones, dolores actuales y movimientos a evitar, seguimiento médico en curso, certificado médico (opcional) aportado el…',
          'Medidas de partida (peso, altura, perímetros de cintura, caderas, pecho, brazo, muslo) y tests de partida (sentadilla, flexiones, dominadas, plancha, flexibilidad, cardio, movilidad), repetidos a + 1 y + 3 meses (+ 2 meses y diferencia calculada en el Excel)',
          'Plan propuesto, dos casillas de consentimiento para los datos de salud, firmas del cliente y del entrenador',
        ],
      },
      {
        title: 'Cuaderno de sesiones',
        format: 'Página 2 del PDF, hoja «Carnet de séances» del Excel',
        items: [
          'Fecha, tipo de sesión (A, B, push, pull, piernas…), duración, peso del día',
          'En el PDF, antes de la sesión: energía y sueño de 1 a 5, dolor de 0 a 4, calentamiento; luego 12 líneas de ejercicios con 4 series (reps × kg), RPE y tonelaje, y el tonelaje de la sesión anterior del mismo tipo',
          'En el PDF, después de la sesión: sensación en 4 casillas (fácil, justa, dura, dolor aparecido), notas del entrenador, próxima sesión',
          'En el Excel, una línea por ejercicio (60 líneas): series, repeticiones, carga, RPE, tonelaje calculado, notas',
          `En el Excel, un resumen por sesión: fecha, tipo, peso del día, energía y sueño, notas del entrenador, tonelaje, series, evolución en${NBSP}% y diferencia en kg calculados`,
          'Recordatorio del RPE de 1 a 10 y de la definición del tonelaje, mención de que el cuaderno no sustituye un consejo médico',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar la evaluación en cinco pasos',
    intro:
      'En el Excel, solo se escriben las casillas blancas. Las diferencias, el tonelaje y la evolución de una sesión a otra se calculan solos.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Tus referencias, de una vez por todas',
        description:
          'Rellena la cabecera: nombre o gimnasio, teléfono, n.º de carné profesional de educador deportivo, diploma y seguro de responsabilidad civil, y guarda el archivo como plantilla. Cada nuevo cliente parte de esa copia.',
      },
      {
        label: 'Paso 2',
        title: 'La evaluación de la primera sesión',
        description:
          'Cliente, objetivo principal y plazo, práctica actual, sesiones posibles, lugar y material. Dedica tiempo a los antecedentes y los dolores: es lo que fija los movimientos a evitar y los puntos de atención del plan.',
      },
      {
        label: 'Paso 3',
        title: 'Medidas y tests de partida',
        description:
          'Rellena la columna «Départ» de las dos tablas: peso y perímetro de cintura, luego sentadilla, flexiones, plancha, cardio. En los controles siguientes, repites las mismas líneas a + 1 y + 3 meses, y el Excel, que añade + 2 meses, muestra la diferencia con la partida.',
      },
      {
        label: 'Paso 4',
        title: 'Consentimiento, firmas, copia del cliente',
        description:
          'Lee las dos casillas con el cliente: el acuerdo para anotar sus lesiones, dolores, medidas y fotos de seguimiento, y el recordatorio de que la evaluación no sustituye un consejo médico. Él marca, fecha y firma; tú firmas, y se va con una copia.',
      },
      {
        label: 'Paso 5',
        title: 'El cuaderno, sesión tras sesión',
        description:
          'En el PDF, una página por sesión: fecha, tipo, energía, sueño y dolor antes de empezar, luego reps × kg de cada serie, RPE y tonelaje. En el Excel, una línea por ejercicio: el tonelaje se calcula y el resumen compara la sesión con la anterior.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exige la norma francesa',
    title: 'Las menciones que la plantilla ya prevé',
    intro:
      'Tres normas francesas del entrenador personal pasan por la evaluación de cliente. La plantilla les reserva una casilla o una mención.',
    facts: [
      {
        contextLabel: 'Antes de la primera sesión pagada',
        title: 'El carné profesional de educador deportivo',
        text: 'Enseñar, animar o supervisar una actividad física a cambio de remuneración en Francia obliga a declararse ante la administración, que comprueba la cualificación y la ausencia de prohibición de ejercer, y luego expide el carné profesional. La cabecera de la evaluación recoge su número, tu diploma y tu seguro de responsabilidad civil.',
        sourceName: SPORTS_EDUCATOR_DECLARATION_SOURCE.name,
        sourceUrl: SPORTS_EDUCATOR_DECLARATION_SOURCE.url,
      },
      {
        contextLabel: 'Certificado médico',
        title: 'No es una obligación legal, a menudo se pide',
        text: 'Aportar un certificado médico no es una obligación legal para inscribirse; el gimnasio puede pedirlo, porque está ligado a su seguro. La evaluación lo anota como opcional, con la fecha en que el cliente lo aportó.',
        sourceName: GYM_MEMBERSHIP_RULES_SOURCE.name,
        sourceUrl: GYM_MEMBERSHIP_RULES_SOURCE.url,
      },
      {
        contextLabel: 'Datos sensibles',
        title: 'Lesiones, incapacidades y medidas cruzadas',
        text: 'La incapacidad para una actividad deportiva es un dato de salud, como el peso cruzado con otras medidas: se aplica un régimen particular (confidencialidad, seguridad, prohibición de comercialización). La evaluación recoge el consentimiento del cliente en dos casillas y le recuerda sus derechos de consulta, corrección y supresión.',
        sourceName: HEALTH_DATA_SOURCE.name,
        sourceUrl: HEALTH_DATA_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Plantilla de evaluación de cliente para entrenador: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de evaluación de cliente es realmente gratis?',
        answer:
          'Sí. Los dos archivos se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos con cada cliente. Única contrapartida: una línea «plantilla propuesta por Dibodev» a pie de página, que puedes quitar.',
      },
      {
        question: '¿Qué debe contener una evaluación de cliente de entrenamiento personal?',
        answer:
          'El objetivo y su plazo, la práctica actual y los horarios posibles, los antecedentes y los dolores, medidas y tests de partida que se repiten en fechas fijas, el plan propuesto y el consentimiento del cliente para sus datos de salud. La plantilla sigue ese orden en una página A4, con una copia para el cliente.',
      },
      {
        question: '¿Puedo anotar las lesiones y el peso de mis clientes?',
        answer:
          'Sí, con cuidado: la incapacidad para una actividad deportiva es un dato de salud según la CNIL, la autoridad francesa de protección de datos, y el peso cruzado con otras medidas puede convertirse en dato de salud. La evaluación recoge el consentimiento del cliente en dos casillas; a ti te toca limitar el acceso a esas fichas y evitar las mensajerías de consumo para intercambiarlas.',
      },
      {
        question: '¿Hace falta un certificado médico antes de la primera sesión?',
        answer:
          'No es una obligación legal para inscribirse en Francia, pero un gimnasio puede pedirlo, porque está ligado a su seguro. La plantilla prevé la casilla «certificat médical (facultatif) : fourni le» y recuerda al cliente que la evaluación no sustituye un consejo médico.',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer: `En la hoja «Bilan client», escribes las medidas y los tests de partida, y luego a 1, 2 y 3 meses; la columna «Écart» muestra la diferencia entre el último valor escrito y el de partida. En la hoja «Carnet de séances», una línea por ejercicio con series, repeticiones y carga: el tonelaje se calcula, y el resumen lo suma por fecha, y luego muestra la evolución en${NBSP}% y la diferencia en kg con la sesión anterior. Las dos hojas están preparadas para imprimir en A4.`,
      },
      {
        question: '¿Y cuando los clientes se multiplican?',
        answer: `Una plantilla basta mientras sigues a tus clientes uno a uno. Más allá, las apps de coaching del mercado francés ponen la evaluación, los programas y el seguimiento en el móvil del cliente, Harbiz desde 19${NBSP}€ al mes y Hexfit desde 19${NBSP}$. Si tu método, tus fórmulas o tu gimnasio salen de su marco, el test de la página de la herramienta te dice qué elegir.`,
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description: `Cuando las evaluaciones, los cuadernos y los programas se copian de un archivo a otro, una herramienta que los conecta a tu agenda y a tus abonos te devuelve horas. Descríbeme tu actividad: te respondo en 24${NBSP}h, y si un programa del mercado basta, te lo digo.`,
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas para entrenadores personales',
  },
}
