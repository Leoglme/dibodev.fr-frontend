import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  DRIVING_SCHOOL_CONTRACT_LAW_SOURCE,
  DRIVING_SCHOOL_CONTRACT_TEMPLATE_UPDATED_AT,
  DRIVING_SCHOOL_TRAINING_HOURS_SOURCE,
  DRIVING_SCHOOL_TRAINING_RECORD_SOURCE,
} from '~/core/constants/freeTemplates/drivingSchoolContract/pageShared'
import {
  DRIVING_SCHOOL_RULE_SOURCES,
  DRIVING_SCHOOL_TEMPLATE_PDF_PATH,
  DRIVING_SCHOOL_TEMPLATE_XLSX_PATH,
} from '~/core/constants/tools/drivingSchoolSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const DRIVING_SCHOOL_CONTRACT_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Contrato de autoescuela: plantilla francesa gratis',
    description:
      'Contrato de autoescuela: plantilla francesa gratis en PDF y Excel, según el contrato tipo vigente desde 2025. Evaluación inicial, precios, ficha de seguimiento.',
    inLanguage: 'es',
    schemaAbout: 'Plantilla francesa de contrato de formación y ficha de seguimiento del alumno para autoescuelas',
  },
  breadcrumbLabel: 'Contrato de autoescuela',
  shareImage: {
    titleLines: ['Contrato de autoescuela', 'plantilla gratis'],
    highlight: 'Contrato de autoescuela',
    subtitle:
      'Contrato de formación y ficha de seguimiento en PDF y Excel, evaluación inicial, precios, plazos de pago, horas',
    badge: 'Gratis, sin registro',
    icon: 'fileText',
    alt: 'Plantilla francesa de contrato de autoescuela gratis: contrato de formación y ficha de seguimiento del alumno en PDF y Excel, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Contrato de autoescuela',
    titleAfter: ': plantilla francesa gratis, PDF y Excel (+ ficha de seguimiento)',
    reassurances: ['Contrato + ficha de seguimiento', 'Excel con horas y plazos calculados', 'Sin registro ni e-mail'],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Un contrato de formación para la conducción y una ficha de seguimiento del alumno listos para rellenar, escritos en francés para las autoescuelas de Francia, para una autoescuela de barrio o un profesor que abre la suya. El contrato sigue los apartados del contrato tipo francés del permiso B: evaluación inicial, horas previstas, precios con IVA, pago, anulación y rescisión. La ficha de seguimiento guarda el registro de las clases, las horas, las competencias trabajadas y los exámenes.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Ya desarrollé un programa de gestión para autoescuelas, y leí el código de circulación francés y el contrato tipo para que las menciones estén al día.',
    updatedAt: DRIVING_SCHOOL_CONTRACT_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para autoescuelas y profesores de conducción que trabajan en Francia. Dos archivos en francés, sin formulario: el PDF se imprime, el Excel calcula.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: DRIVING_SCHOOL_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: DRIVING_SCHOOL_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 hojas, horas y plazos calculados, en francés',
      },
    ],
    footnote:
      'Plantilla de uso libre, para adaptar a tu autoescuela. No sustituye ni el contrato tipo publicado en el Diario Oficial francés ni el libro de aprendizaje digital.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Un contrato de formación y una ficha de seguimiento, en PDF y en Excel',
    intro:
      'El PDF cabe en dos páginas A4: el contrato que se firma por duplicado y la ficha de seguimiento que se rellena clase tras clase. El Excel los recoge en tres hojas: el importe del contrato, los plazos de pago, las horas hechas y pendientes y los exámenes se calculan a medida que escribes.',
    documents: [
      {
        title: 'Contrato de formación (permiso B)',
        format: 'Página 1 del PDF, hoja «Contrat et échéancier» del Excel',
        items: [
          'Autoescuela: razón social, dirección, n.º de registro mercantil o de artesanos, n.º de IVA, n.º de autorización y prefectura; n.º de contrato, fecha de firma, duración en meses y fecha de fin (calculada en el Excel)',
          'Alumno, representante legal si es menor, reglamento interno adjunto o no, y la formación elegida: cambio manual o automático, aprendizaje anticipado, conducción supervisada, vehículo adaptado',
          'Evaluación inicial: fecha, profesor y n.º de su autorización para enseñar, medio utilizado, número previsto de horas de conducción, formación teórica, ficha de evaluación adjunta',
          `Tabla de precios con IVA, fijos durante todo el contrato: evaluación, gastos de expediente y de mandato ANTS, libro, tasa del examen teórico de 30${NBSP}€, clases, bono, balance de competencias, acompañamiento al examen, gastos de rescisión`,
          `Pago (arras, al contado, por clase, a plazos sin intereses, dispositivo «permis à 1${NBSP}€ par jour»), clases anuladas con menos de 48 horas hábiles, rescisión por el alumno o por la autoescuela, expediente devuelto gratis`,
          'Seguro, garantía financiera, sello de calidad, mediador de consumo, firmas del alumno, del representante legal y de la autoescuela; el Excel añade el calendario de pagos, lo que queda por pagar y el control del tope del acompañamiento',
        ],
      },
      {
        title: 'Ficha de seguimiento del alumno',
        format: 'Página 2 del PDF, hojas «Suivi des leçons» y «Examens» del Excel',
        items: [
          'N.º de expediente o NEPH, fecha de inscripción, horas previstas en el contrato, caja de cambios, profesor de referencia, fórmula (clásica, anticipada, supervisada)',
          'Clases de conducción: fecha, horario, duración, tipo (carretera, simulador, pista, colectiva), profesor, competencias trabajadas, observaciones, visto bueno del alumno (20 líneas en el PDF, 30 en el Excel)',
          'Totales: horas hechas, previstas y pendientes, de ellas en carretera y en simulador, con la referencia del mínimo de 20 horas (13 con cambio automático) calculada en el Excel',
          'Las cuatro competencias del libro de aprendizaje, con las clases en las que se trabajó cada una y lo que queda por repasar (horas por competencia en el Excel)',
          'Exámenes y balances: examen teórico (código), balances de competencias, certificado de fin de formación, examen práctico, acompañamiento facturado',
          'Horas complementarias aceptadas por escrito, recordatorio de la conservación de la ficha durante tres años y del libro de aprendizaje digital',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar el contrato y la ficha de seguimiento en cuatro pasos',
    intro:
      'En el Excel, solo se escriben las casillas blancas. El importe del contrato, los plazos de pago, las horas pendientes y el total por competencia se calculan solos.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Tu autoescuela, de una vez por todas',
        description:
          'Rellena la cabecera (razón social, dirección, n.º de registro, n.º de autorización), tu seguro, tu mediador y tus precios con IVA, y guarda el archivo como plantilla. Cada nuevo alumno parte de esa copia.',
      },
      {
        label: 'Paso 2',
        title: 'La evaluación inicial, antes de firmar',
        description:
          'Haz la evaluación inicial y anota su fecha, el profesor y el n.º de su autorización para enseñar, el medio utilizado y el número de horas de conducción previsto. Adjunta la ficha de evaluación: el contrato se firma después.',
      },
      {
        label: 'Paso 3',
        title: 'Los precios, el pago y la firma',
        description:
          'Indica el número de clases o de horas de cada línea: el Excel calcula el importe del contrato. Para un pago a plazos, escribe las arras, el número de plazos y la fecha del primero: el calendario se rellena solo. Dos ejemplares firmados, uno para el alumno.',
      },
      {
        label: 'Paso 4',
        title: 'La ficha de seguimiento, clase tras clase',
        description:
          'Después de cada clase, anota el horario, el tipo de clase, el profesor y la competencia trabajada: las horas hechas, las pendientes y el total por competencia se actualizan. En la hoja «Examens», anota las fechas, los resultados y el acompañamiento facturado.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exige la norma francesa',
    title: 'Las menciones que la plantilla ya prevé',
    intro:
      'Seis normas francesas de la enseñanza de la conducción pasan por el contrato y la ficha de seguimiento. La plantilla les reserva una casilla, una línea o una cláusula.',
    facts: [
      {
        contextLabel: 'Código de circulación francés, art. L213-2',
        title: 'Un contrato escrito, tras una evaluación inicial',
        text: 'La enseñanza de pago de la conducción exige un contrato escrito, firmado en la autoescuela o a distancia, y solo después de una evaluación inicial del alumno. Presentar al alumno al examen no se puede cobrar, y devolver o transferir el expediente es gratis. La plantilla prevé el recuadro de la evaluación y la cláusula del expediente.',
        sourceName: DRIVING_SCHOOL_CONTRACT_LAW_SOURCE.name,
        sourceUrl: DRIVING_SCHOOL_CONTRACT_LAW_SOURCE.url,
      },
      {
        contextLabel: 'Desde el 1 de enero de 2025',
        title: 'El contrato tipo, en su versión de 2024',
        text: 'Los nuevos contratos siguen el modelo fijado por la orden del 11 de octubre de 2024: duración en meses, horas fijadas por la evaluación, precios con IVA fijos durante el contrato, pago, seguro y mediador; el acompañamiento al examen no supera el precio de una hora de clase. La página 1 sigue estos apartados; el texto oficial prevalece.',
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.standardContract.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.standardContract.url,
      },
      {
        contextLabel: `20${NBSP}horas como mínimo`,
        title: 'El volumen de formación práctica',
        text: 'Para un primer permiso B, la formación práctica dura al menos 20 horas, de ellas al menos 15 en carretera (10 con simulador); 13 horas con cambio automático. El contrato indica las horas previstas por la evaluación, y el Excel compara las horas hechas con este mínimo.',
        sourceName: DRIVING_SCHOOL_TRAINING_HOURS_SOURCE.name,
        sourceUrl: DRIVING_SCHOOL_TRAINING_HOURS_SOURCE.url,
      },
      {
        contextLabel: `48${NBSP}horas hábiles`,
        title: 'Las clases anuladas demasiado tarde',
        text: 'Una clase que el alumno no anula con al menos 48 horas hábiles de antelación no se reembolsa, salvo fuerza mayor o motivo legítimo; la autoescuela tampoco puede anular en ese plazo (mismas excepciones) y aplaza o reembolsa la clase pagada. La cláusula figura por escrito en el contrato de la plantilla.',
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.standardContract.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.standardContract.url,
      },
      {
        contextLabel: `Efecto a los 15${NBSP}días`,
        title: 'La rescisión por el alumno',
        text: 'El alumno puede rescindir en cualquier momento (tras 14 días si el contrato se firmó a distancia), por carta certificada o correo electrónico: surte efecto 15 días después, al instante si hay un motivo legítimo. Paga los servicios prestados y recupera su expediente gratis; solo puede haber gastos de rescisión sin motivo legítimo, antes de la formación práctica.',
        sourceName: DRIVING_SCHOOL_RULE_SOURCES.standardContract.name,
        sourceUrl: DRIVING_SCHOOL_RULE_SOURCES.standardContract.url,
      },
      {
        contextLabel: 'Se conserva tres años',
        title: 'La ficha de seguimiento de la formación',
        text: 'Antes de la formación, la autoescuela abre una ficha de seguimiento a nombre del alumno y la conserva tres años; una copia sigue al alumno si cambia de autoescuela. El texto no fija su contenido: la página 2 de la plantilla propone uno, junto al libro de aprendizaje digital.',
        sourceName: DRIVING_SCHOOL_TRAINING_RECORD_SOURCE.name,
        sourceUrl: DRIVING_SCHOOL_TRAINING_RECORD_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Contrato de autoescuela: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de contrato de autoescuela es realmente gratis?',
        answer:
          'Sí. Los dos archivos se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» a pie de página, que puedes quitar.',
      },
      {
        question: '¿Esta plantilla sustituye el contrato tipo oficial?',
        answer:
          'No. Desde el 1 de junio de 2020, el contrato de una autoescuela en Francia debe ajustarse al contrato tipo del permiso B, y su versión de la orden del 11 de octubre de 2024 se aplica a los contratos propuestos desde el 1 de enero de 2025. La plantilla recoge sus apartados y cláusulas clave en una página, con el calendario de pagos y la ficha de seguimiento. Léela junto al texto publicado en el Diario Oficial francés, que prevalece: esta plantilla no es asesoramiento jurídico.',
      },
      {
        question: '¿La evaluación inicial es obligatoria en Francia?',
        answer:
          'Sí. El contrato solo puede firmarse después de una evaluación inicial del alumno (artículo L213-2 del código de circulación francés). El contrato anota su fecha, el profesor responsable y el n.º de su autorización para enseñar, el medio utilizado (vehículo, simulador…) y el número previsto de horas de conducción; la ficha de evaluación se adjunta. Aparece la primera en la tabla de precios: la autoescuela fija su tarifa.',
      },
      {
        question: '¿Cuántas horas de conducción hay que prever en el contrato?',
        answer:
          'Las que indica la evaluación inicial. El mínimo legal sigue siendo de 20 horas de formación práctica para un primer permiso B, de ellas al menos 15 en carretera (10 con simulador), y de 13 horas con cambio automático. Si las horas previstas no bastan, la autoescuela puede proponer horas complementarias: su número y su precio se acuerdan por escrito, y la ficha de seguimiento lo registra.',
      },
      {
        question: '¿Qué pasa si el alumno anula una clase en el último momento?',
        answer:
          'Una clase que el alumno no anula con al menos 48 horas hábiles de antelación no se reembolsa, o se debe si no estaba pagada, salvo fuerza mayor o motivo legítimo. En el otro sentido, la autoescuela no puede anular con menos de 48 horas hábiles de antelación, con las mismas excepciones, y debe aplazar o reembolsar la clase pagada. El contrato de la plantilla lo dice por escrito.',
      },
      {
        question: '¿Cómo rescinde un alumno su contrato de autoescuela?',
        answer:
          'Por carta certificada o por correo electrónico a la autoescuela, en cualquier momento si el contrato se firmó en la autoescuela, o tras 14 días si se firmó a distancia. La rescisión surte efecto 15 días después, o al instante si tiene un motivo legítimo. Paga los servicios ya prestados, a prorrata en un bono, y se le devuelve el expediente gratis. Solo puede haber gastos de rescisión sin motivo legítimo y antes de empezar la formación práctica.',
      },
      {
        question: '¿La ficha de seguimiento sustituye el libro de aprendizaje?',
        answer:
          'No. El libro de aprendizaje digital es obligatorio en Francia desde el 1 de enero de 2024: fija los objetivos de la formación y registra las horas de conducción y la formación impartida. La ficha de seguimiento es tu documento interno: la orden del 22 de diciembre de 2009 te pide abrir una a nombre de cada alumno y conservarla tres años. La plantilla retoma las cuatro competencias del libro para anotar lo que se trabajó en cada clase.',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer:
          'En la hoja «Contrat et échéancier», escribes el precio y la cantidad de cada servicio: el importe del contrato se calcula, y luego el calendario de pagos a partir de las arras, el número de plazos y la fecha del primero. En «Suivi des leçons», la hora de inicio y de fin da la duración de cada clase, las horas hechas y pendientes, el total por competencia y la referencia de las 20 horas. «Examens» guarda fechas y resultados, y avisa si el acompañamiento facturado supera una hora de clase.',
      },
      {
        question: '¿Y cuando los alumnos se multiplican?',
        answer: `Una plantilla Excel basta para unos cuantos alumnos a la vez. Más allá, los programas franceses para autoescuelas llevan el planning, las horas y los pagos de cada alumno, y varios gestionan también el libro digital: Drivea es gratuito, Ma Gestion Zen cuesta 39${NBSP}€ sin IVA al mes (precios consultados a finales de septiembre de 2026). Si tu organización sale de su marco (varias sedes, reservas y pagos en tu web), el test de la página de la herramienta te dice qué elegir.`,
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description: `Cuando los contratos, las horas de cada alumno y los pagos se copian de un archivo a otro, y el planning de los profesores vive en una pizarra, una herramienta que los conecta te devuelve horas. Descríbeme tu autoescuela: te respondo en 24${NBSP}h, y si un programa del mercado basta, te lo digo.`,
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas para autoescuelas',
  },
}
