import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import {
  STAFF_DATA_PRINCIPLES_SOURCE,
  STAFF_REGISTER_DIGITAL_SOURCE,
  STAFF_REGISTER_ENTRIES_SOURCE,
  STAFF_REGISTER_KEEPING_SOURCE,
  STAFF_REGISTER_PENALTY_SOURCE,
  STAFF_REGISTER_RETENTION_SOURCE,
  STAFF_REGISTER_TEMPLATE_DOCX_PATH,
  STAFF_REGISTER_TEMPLATE_PDF_PATH,
  STAFF_REGISTER_TEMPLATE_UPDATED_AT,
  STAFF_REGISTER_TEMPLATE_XLSX_PATH,
} from '~/core/constants/freeTemplates/staffRegister/pageShared'

export const STAFF_REGISTER_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Registro de personal: plantilla gratis (PDF, Word, Excel)',
    description:
      'Registro único de personal francés gratis en PDF, Word y Excel: las menciones del Código de Trabajo, becarios, servicio cívico, plantilla calculada.',
    inLanguage: 'es',
    schemaAbout:
      'Plantilla francesa de registro único de personal con la parte de becarios y voluntarios del servicio cívico',
  },
  breadcrumbLabel: 'Registro de personal',
  shareImage: {
    titleLines: ['Registro de personal', 'plantilla gratis'],
    highlight: 'Registro de personal',
    subtitle:
      'Empleados, becarios y voluntarios del servicio cívico, en PDF, Word y Excel, menciones del Código de Trabajo',
    badge: 'Gratis, sin registro',
    icon: 'fileText',
    alt: 'Plantilla francesa de registro único de personal gratis: empleados, becarios y voluntarios del servicio cívico en PDF, Word y Excel, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Registro de personal',
    titleAfter: ': plantilla francesa gratis, PDF, Word y Excel (+ becarios y servicio cívico)',
    reassurances: [
      'Todas las menciones del Código de Trabajo',
      'Becarios y servicio cívico aparte',
      'Sin registro ni e-mail',
    ],
    aboutTitle: 'Sobre la plantilla',
    description:
      'El registro único de personal (registre unique du personnel) es la lista, llevada por orden de contratación, de todas las personas que trabajan en un establecimiento en Francia, con las menciones que fija el Código de Trabajo francés. No es una hoja de asistencia ni una hoja de fichaje: no dice quién estaba ni cuántas horas, dice quién forma parte de la plantilla, desde cuándo y con qué contrato. Cada columna de la plantilla corresponde a una mención exigida, y nada más. Los archivos están en francés.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Leí uno a uno los artículos del Código de Trabajo francés sobre el registro, la ficha de Service-Public sobre los registros obligatorios y la guía de plazos de conservación de la CNIL, la autoridad francesa de protección de datos, para que cada columna remita a un texto.',
    updatedAt: STAFF_REGISTER_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para artesanos, comerciantes, asociaciones y pequeñas empresas en Francia que contratan a su primer empleado, y para quienes ponen al día un registro atrasado. Tres archivos en francés, sin formulario: el PDF se imprime y se rellena con tinta, el Excel controla las líneas y cuenta la plantilla, el Word se modifica libremente.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: STAFF_REGISTER_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: STAFF_REGISTER_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 hojas, plantilla calculada, en francés',
      },
      {
        label: 'Descargar la versión Word',
        href: STAFF_REGISTER_TEMPLATE_DOCX_PATH,
        format: 'Word, 2 páginas, modificable, en francés',
      },
    ],
    footnote:
      'Plantilla de uso libre, hecha a partir de los textos franceses vigentes el día de su actualización. No es un asesoramiento jurídico: para un caso concreto, pregunta a tu gestor de nóminas o a un abogado.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'El registro de empleados, la parte de becarios y voluntarios, y un resumen',
    intro:
      'El PDF ocupa dos páginas A4 en horizontal, para que quepan todas las columnas: los empleados en la primera, los becarios, los voluntarios del servicio cívico y una nota en la segunda. El Excel recoge las dos con más líneas, controla cada inscripción y añade un resumen del año.',
    documents: [
      {
        title: 'Registro de empleados',
        format: 'Página 1 del PDF, hoja «Registre du personnel» del Excel',
        items: [
          'Cabecera del establecimiento (razón social, dirección, número SIRET), fecha de apertura del registro y número de hoja, para seguir las páginas en papel',
          '10 líneas de empleados (60 en el Excel), numeradas por orden de contratación: apellidos y nombres, nacionalidad, fecha de nacimiento, sexo, empleo, cualificación, fechas de entrada y de salida',
          'Una columna para las menciones del contrato, con las palabras exactas en francés: contrato de duración determinada, empleado a tiempo parcial, aprendiz, contrato de profesionalización, trabajador temporal, cedido por una agrupación de empleadores; listas desplegables en el Excel',
          'Para un trabajador extranjero, el tipo y el número de orden del permiso que le autoriza a trabajar, y la fecha de la autorización de contratación o de despido cuando se exige, o en su defecto la de la solicitud',
          'Un recuadro para los trabajadores temporales y cedidos, frente a su número de orden: nombre y dirección de la empresa de trabajo temporal o de la agrupación',
          'En el Excel, presente o no en la fecha elegida, fin del plazo de conservación y una columna «Contrôle»: fecha de entrada que falta, salida antes de la entrada, contratación inscrita fuera de orden, empresa de trabajo temporal sin nombre, permiso de trabajo por comprobar',
        ],
      },
      {
        title: 'Becarios, voluntarios del servicio cívico y nota',
        format: 'Página 2 del PDF, hoja «Stagiaires et volontaires» del Excel',
        items: [
          '8 líneas de becarios (30 en el Excel), por orden de llegada: apellidos y nombres, fechas de inicio y fin de las prácticas o del periodo de formación en empresa, nombre del tutor, lugar donde está el becario',
          '5 líneas de voluntarios del servicio cívico (20 en el Excel): apellidos y nombres, la única mención exigida, y una fecha de llegada que muestra el orden',
          'En el Excel, prácticas en curso o terminadas en la fecha elegida y fin del plazo de conservación de cada línea',
          'Una nota en un recuadro: quién lleva el registro, el orden de las inscripciones, las menciones que se añaden durante el contrato, la copia de los permisos de trabajo, el registro digital, la conservación y la sanción, con el artículo de cada norma',
          'Un recuadro de información a los empleados: para qué sirven los datos, quién los lleva, cuánto tiempo, a quién dirigirse',
        ],
      },
      {
        title: 'Resumen del año',
        format: 'Hoja «Synthèse» del Excel, sin equivalente en el PDF',
        items: [
          'Año en casilla amarilla, personas inscritas y presentes el 1 de enero y el 31 de diciembre, entradas y salidas del año',
          'Una tabla mes a mes: entradas, salidas y presentes a fin de mes',
          'Presentes en la fecha elegida, por mención de contrato (duración determinada, tiempo parcial, aprendices, contratos de profesionalización, temporales, agrupación)',
          'Becarios y voluntarios llegados en el año, y número de líneas cuyos cinco años de conservación han pasado',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Llevar el registro de personal en cuatro pasos',
    intro:
      'El PDF se rellena con tinta, línea tras línea. En el Excel, solo se escriben las casillas blancas y amarillas: números, presencia, conservación, controles y resumen se calculan solos.',
    steps: [
      {
        label: 'Paso 1',
        title: 'En la primera contratación, la cabecera',
        description:
          'Anota la razón social, la dirección y el número SIRET del establecimiento, y la fecha de apertura del registro. Una empresa con varios establecimientos lleva un registro en cada uno: un archivo o un cuaderno por dirección.',
      },
      {
        label: 'Paso 2',
        title: 'En cada contratación, una línea a continuación',
        description:
          'El día de la contratación, inscribe al empleado después del último, con todas sus menciones. No dejes líneas vacías y no vuelvas a numerar nunca: el número de orden sigue el orden de contratación. Para un trabajador extranjero, adjunta al registro la copia de su permiso de trabajo.',
      },
      {
        label: 'Paso 3',
        title: 'Cuando ocurre algo, la mención ese mismo día',
        description:
          'Lo que pasa después de la contratación se escribe cuando pasa: la fecha de salida el día de la marcha, una autorización recibida, un nuevo permiso de trabajo. La línea del empleado se queda en el registro después de su salida; solo la fecha de salida la cierra.',
      },
      {
        label: 'Paso 4',
        title: 'Para un becario o un voluntario, la página 2',
        description:
          'Un becario o un voluntario del servicio cívico no va en la lista de empleados, sino en la parte reservada, por orden de llegada. Para un becario, anota también las fechas de las prácticas, el tutor y el lugar donde está; para un voluntario, bastan los apellidos y los nombres.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exigen las normas francesas',
    title: 'Seis normas del Código de Trabajo francés y de la CNIL',
    intro:
      'En Francia, el registro único de personal es una obligación del Código de Trabajo, no una costumbre. Seis normas dicen quién lo lleva, qué se escribe, cómo y durante cuánto tiempo; resumen los textos leídos el día de la actualización y no sustituyen el consejo de un abogado.',
    facts: [
      {
        contextLabel: 'Código de Trabajo, L1221-13',
        title: 'Un registro por establecimiento, por orden de contratación',
        text: 'Se lleva un registro único de personal en todo establecimiento donde trabajan empleados. Los apellidos y nombres de todos los empleados se inscriben por orden de contratación, en el momento de la contratación y de forma indeleble. Los becarios y los voluntarios del servicio cívico van en una parte aparte, por orden de llegada.',
        sourceName: STAFF_REGISTER_KEEPING_SOURCE.name,
        sourceUrl: STAFF_REGISTER_KEEPING_SOURCE.url,
      },
      {
        contextLabel: 'Código de Trabajo, D1221-23',
        title: 'Las menciones de cada empleado',
        text: 'Nacionalidad, fecha de nacimiento, sexo, empleo, cualificación, fechas de entrada y de salida; la fecha de la autorización de contratación o de despido cuando se exige; para un trabajador extranjero, el tipo y el número de orden de su permiso de trabajo. Después, según el caso, «contrat à durée déterminée» (duración determinada), «salarié à temps partiel» (tiempo parcial), «apprenti» o «contrat de professionnalisation», «salarié temporaire» con el nombre y la dirección de la empresa de trabajo temporal, o la cesión por una agrupación de empleadores con su nombre y su dirección.',
        sourceName: STAFF_REGISTER_ENTRIES_SOURCE.name,
        sourceUrl: STAFF_REGISTER_ENTRIES_SOURCE.url,
      },
      {
        contextLabel: 'Código de Trabajo, R1221-26',
        title: 'Cinco años después de la salida',
        text: 'Las menciones del registro se conservan durante cinco años a partir del día en que el empleado o el becario dejó el establecimiento. La guía de la CNIL sobre los datos de recursos humanos recoge este plazo como una obligación. Una línea no se borra, pues, con la salida: el Excel calcula para cada una la fecha de fin de conservación.',
        sourceName: STAFF_REGISTER_RETENTION_SOURCE.name,
        sourceUrl: STAFF_REGISTER_RETENTION_SOURCE.url,
      },
      {
        contextLabel: 'Código de Trabajo, D1221-27, D8113-2 y L2315-5',
        title: 'En ordenador, con tres condiciones',
        text: 'El registro puede llevarse en un soporte sustitutivo, informático por ejemplo. Ese soporte debe recoger todas las menciones, sin dificultad de uso ni riesgo de alteración, presentarse como el registro en papel y conservarse el mismo tiempo. El comité social y económico (CSE), si existe, se consulta antes, y su dictamen se envía a la inspección de trabajo.',
        sourceName: STAFF_REGISTER_DIGITAL_SOURCE.name,
        sourceUrl: STAFF_REGISTER_DIGITAL_SOURCE.url,
      },
      {
        contextLabel: 'Código de Trabajo, R1227-7',
        title: 'Una multa por empleado afectado',
        text: 'No llevar el registro, o llevarlo sin las menciones previstas, se castiga con la multa de las contravenciones de cuarta clase, es decir 750 euros como máximo (Código Penal francés, artículo 131-13). Se aplica tantas veces como empleados afectados haya. El registro está a disposición del CSE y de los agentes de control (artículo L1221-15).',
        sourceName: STAFF_REGISTER_PENALTY_SOURCE.name,
        sourceUrl: STAFF_REGISTER_PENALTY_SOURCE.url,
      },
      {
        contextLabel: 'Datos personales',
        title: 'Las menciones previstas, y nada más',
        text: 'Para la CNIL, solo se recogen los datos estrictamente necesarios para el fin del fichero, y solo las personas autorizadas tienen acceso. La lista del artículo D1221-23 no incluye ni dirección personal, ni número de la seguridad social, ni salario: esos datos van en el expediente del empleado o en la nómina, no en el registro. La plantilla no tiene columna para ellos.',
        sourceName: STAFF_DATA_PRINCIPLES_SOURCE.name,
        sourceUrl: STAFF_DATA_PRINCIPLES_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Registro de personal: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de registro de personal es realmente gratuita?',
        answer:
          'Sí. El PDF, el Excel y el Word se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. Única contrapartida: una línea «modèle proposé par Dibodev» al pie de página, que puedes quitar.',
      },
      {
        question: '¿Quién debe llevar un registro único de personal en Francia?',
        answer:
          'Todo empleador, desde la contratación del primer empleado, sea cual sea el tamaño de la empresa: Service-Public lo incluye entre los registros obligatorios. El Código de Trabajo lo exige en cada establecimiento donde trabajan empleados, o sea un registro por establecimiento. Una empresa sin empleados no lo lleva; si acoge a un becario, sus menciones se siguen entonces en otro documento (artículo D1221-23-1).',
      },
      {
        question: '¿Cuáles son las menciones obligatorias?',
        answer:
          'Para cada empleado: apellidos y nombres, nacionalidad, fecha de nacimiento, sexo, empleo, cualificación, fechas de entrada y de salida, y según el caso la mención del contrato (duración determinada, tiempo parcial, aprendiz, contrato de profesionalización, trabajador temporal, agrupación de empleadores), el permiso de trabajo de un trabajador extranjero y la fecha de una autorización de contratación o de despido. Cada una tiene su columna en la plantilla. Para un becario y un voluntario, las menciones son más cortas: es la página 2.',
      },
      {
        question: '¿Hay que inscribir a los temporales, los becarios y los voluntarios?',
        answer:
          'Sí, cada uno en su sitio. Un trabajador temporal se inscribe en la lista de empleados de la empresa donde trabaja, con la mención «salarié temporaire» y el nombre y la dirección de la empresa de trabajo temporal; igual un empleado cedido por una agrupación de empleadores, con el nombre y la dirección de la agrupación. Los becarios y los voluntarios del servicio cívico van en la parte aparte, por orden de llegada.',
      },
      {
        question: '¿Se puede llevar el registro en Excel?',
        answer:
          'El registro puede llevarse en un soporte informático, siempre que recoja todas las menciones sin riesgo de alteración, se presente como el registro en papel y se conserve el mismo tiempo; el CSE, si existe, se consulta antes y su dictamen se envía a la inspección de trabajo. Un archivo Excel que se puede reescribir sin dejar rastro cumple mal la condición de alteración. Lo más sencillo con esta plantilla: preparar y controlar en el Excel, y luego imprimir las hojas y guardarlas.',
      },
      {
        question: '¿Cuánto tiempo hay que guardar el registro?',
        answer:
          'Las menciones se conservan cinco años a partir de la salida del empleado o del becario (artículo R1221-26 del Código de Trabajo). La línea de un empleado que se fue se queda, pues, en el registro durante ese tiempo, con su fecha de salida. El Excel calcula para cada línea la fecha de fin de conservación, y el resumen cuenta las que la han superado.',
      },
      {
        question: '¿Quién puede consultar el registro de personal?',
        answer:
          'El registro está a disposición del CSE y de los agentes encargados de controlar la aplicación del Código de Trabajo y del Código de la Seguridad Social, como la inspección de trabajo. La copia de los permisos de trabajo de los empleados extranjeros, adjunta al registro, les es accesible de la misma forma. Fuera de ellos, solo las personas que lo necesitan para su trabajo deberían tener acceso.',
      },
      {
        question: '¿Qué se arriesga sin un registro al día?',
        answer:
          'No tener registro, o tener un registro sin las menciones previstas, se castiga con la multa de las contravenciones de cuarta clase, 750 euros como máximo, aplicada tantas veces como empleados afectados haya (artículos R1227-7 del Código de Trabajo y 131-13 del Código Penal francés). Service-Public da el mismo importe. Un registro rellenado el día de cada contratación evita este riesgo por unos minutos por empleado.',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer:
          'Tres hojas. «Registre du personnel»: una línea por empleado, menciones del contrato en listas desplegables, y para cada línea la presencia en la fecha elegida en la casilla amarilla, el fin de conservación y los controles. «Stagiaires et volontaires» hace lo mismo para la parte aparte. «Synthèse» cuenta, para el año elegido, las entradas, las salidas y los presentes mes a mes. Las líneas «Exemple» muestran el cálculo: bórralas.',
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description:
      'Cuando el equipo crece, los técnicos cambian de contrato o de obra y el registro, los planings y los partes de intervención viven en archivos separados, una herramienta que guarda el historial de cada persona te evita copiarlo todo de nuevo. Descríbeme tu organización: te respondo en 24 horas, y si un programa del mercado basta, te lo digo.',
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas de gestión de intervenciones',
  },
}
