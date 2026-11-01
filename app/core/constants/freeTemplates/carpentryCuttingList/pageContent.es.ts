import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { CARPENTRY_CUTTING_LIST_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/carpentryCuttingList/pageShared'
import { HOME_REPAIR_QUOTE_RULES_SOURCE } from '~/core/constants/tools/officialSources'
import {
  BUILDER_WARRANTIES_SOURCE,
  CARPENTRY_TEMPLATE_PDF_PATH,
  CARPENTRY_TEMPLATE_XLSX_PATH,
  CUSTOM_WINDOW_WITHDRAWAL_SOURCE,
  REDUCED_VAT_CUSTOMER_STATEMENT_SOURCE,
} from '~/core/constants/tools/carpentrySoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const CARPENTRY_CUTTING_LIST_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Lista de corte de carpintería: plantilla gratis en Excel',
    description:
      'Lista de corte de carpintería: plantilla francesa gratis en Excel, con presupuesto con mediciones, plan de corte y acta de recepción. Sin registro.',
    inLanguage: 'es',
    schemaAbout:
      'Plantilla francesa de lista de corte, presupuesto con mediciones, plan de corte y acta de recepción para carpinteros',
  },
  breadcrumbLabel: 'Lista de corte de carpintería',
  shareImage: {
    titleLines: ['Lista de corte de', 'carpintería en Excel'],
    highlight: 'Lista de corte',
    subtitle: 'Presupuesto con mediciones, lista y plan de corte, acta de recepción, coste del material calculado',
    badge: 'Gratis, sin registro',
    icon: 'hammer',
    alt: 'Lista de corte de carpintería en Excel gratis, plantilla francesa: presupuesto con mediciones, lista de corte, plan de corte y acta de recepción, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Lista de corte de carpintería',
    titleAfter: ': plantilla francesa gratis en Excel (+ presupuesto con mediciones)',
    reassurances: [
      'Presupuesto, corte, plan y acta',
      'Excel con coste del material calculado',
      'Sin registro ni e-mail',
    ],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Una lista de corte que pasa de las medidas acabadas a las medidas de corte y devuelve el coste del material al presupuesto, un presupuesto de carpintería con las mediciones de cada partida, un plan de corte sencillo de los tableros y un acta de recepción, escritos en francés para el mercado francés, para un carpintero solo, un interiorista o un equipo pequeño de instaladores. El PDF (presupuesto y acta) se imprime; el Excel calcula.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Leí las normas francesas del presupuesto, el IVA reducido, el desistimiento y las garantías para que las menciones estén al día.',
    updatedAt: CARPENTRY_CUTTING_LIST_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para carpinteros, interioristas, ebanistas e instaladores que trabajan en Francia. Dos archivos en francés, sin formulario: el PDF (presupuesto y acta de recepción) se imprime, el Excel (presupuesto, lista de corte, plan de corte) calcula.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: CARPENTRY_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, presupuesto y acta de recepción, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: CARPENTRY_TEMPLATE_XLSX_PATH,
        format: 'Excel, 3 hojas, totales y despiece calculados, en francés',
      },
    ],
    footnote:
      'Plantilla de uso libre, para adaptar a tu empresa. No sustituye ni a tu programa de CAD ni al consejo de tu asesor contable.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Un presupuesto con mediciones, una lista de corte, un plan de corte y un acta de recepción',
    intro:
      'El PDF recoge el presupuesto y el acta de recepción en dos páginas A4. El Excel recoge el presupuesto y le añade dos hojas de cálculo, la lista de corte y el plan de corte: el coste del material de cada referencia sube solo al presupuesto.',
    documents: [
      {
        title: 'Presupuesto con mediciones',
        format: 'Página 1 del PDF, hoja «Devis» del Excel',
        items: [
          'Cabecera de la empresa (nombre, dirección, teléfono, SIREN o SIRET, n.º de IVA) y seguro decenal (aseguradora, n.º de póliza, cobertura geográfica)',
          'N.º de presupuesto, fecha, validez, lugar de la firma (en nuestro local o fuera del establecimiento), cliente, dirección de la obra, medidas tomadas el día y por, vivienda terminada hace más de 2 años',
          'Partidas y mediciones: referencia, partida (descripción, acabado, herrajes), material (madera, PVC, aluminio…), medidas L × H × grosor en mm, cantidad, unidad (ud, m², ml, a tanto alzado), suministro sin IVA, horas de taller y de instalación, IVA, total sin IVA, más una línea de desmontaje y retirada de las carpinterías antiguas',
          'Variantes y opciones fuera del total (material, acristalamiento, acabado, motorización…); en el Excel, una columna «Base, variante ou option» las deja fuera de los totales',
          `Totales: total sin IVA, IVA al 5,5${NBSP}%, 10${NBSP}% y 20${NBSP}%, total con IVA, anticipo al pedido; en el Excel, tarifas horarias de taller y de instalación y porcentaje de anticipo en casillas amarillas, IVA al 10${NBSP}% por defecto en cada línea`,
          `Bloque de desistimiento del contrato firmado fuera del establecimiento (14 días, ningún pago antes de 7 días, fechas de la firma y de la solicitud del anticipo), mención del IVA del cliente según el modelo del BOFiP con sus dos casillas (10${NBSP}% o 5,5${NBSP}%), firma «Bon pour accord» y sello`,
        ],
      },
      {
        title: 'Lista de corte',
        format: 'Hoja «Fiche de débit» del Excel, sin página en el PDF',
        items: [
          `Parámetros en casillas amarillas: creces en longitud (100${NBSP}mm) y en anchura (10${NBSP}mm) para la madera maciza, coeficiente de merma (1,3 por defecto), copiado en cada línea y modificable línea a línea`,
          '25 líneas de piezas: referencia de la partida del presupuesto (F1, P2…), pieza (montante, balda…), especie o tablero (roble, melamina…), maciza o tablero, longitud y anchura acabadas, grosor, cantidad',
          'Calculado: longitud y anchura de corte (medidas acabadas + creces para la madera maciza), volumen bruto en m³ para la madera maciza o superficie en m² para el tablero, cantidad a comprar con el coeficiente de merma, unidad',
          'Precio de compra sin IVA por m³ o por m² a escribir; coste del material sin IVA de cada línea y totales (volumen, superficie, coste)',
          'El coste del material de cada referencia sube solo a la columna «Matière HT» del presupuesto, para la misma referencia',
        ],
      },
      {
        title: 'Plan de corte',
        format: 'Hoja «Plan de coupe» del Excel, sin página en el PDF',
        items: [
          'Tablero en casillas amarillas: longitud y anchura en mm, grosor de corte de la sierra, anchura a partir de la cual se guarda un retal, precio de un tablero sin IVA, material y grosor',
          '15 líneas de piezas: referencia, pieza, longitud, anchura, cantidad, veta impuesta (sí por defecto; «no» permite girar la pieza)',
          'Calculado por pieza: piezas por tablero con el grosor de corte, sentido de corte (en la veta o pieza girada), tableros si la pieza se corta aparte («Trop grande» si no cabe), superficie, retales en el extremo y en el canto, retal a guardar (sí o no)',
          'Resultado: superficie total de las piezas, superficie de un tablero, tableros como mínimo (solo por superficie) y tableros si cada pieza se corta aparte (la necesidad real está entre los dos), rendimiento del material, coste de los tableros sin IVA',
          'Tabla de retales a guardar (longitud, anchura, material, dónde está guardado, obra) para el stock del taller',
        ],
      },
      {
        title: 'Acta de recepción',
        format: 'Página 2 del PDF, sin hoja en el Excel',
        items: [
          'Cabecera de la empresa y seguro decenal, n.º de presupuesto o de obra, fin de los trabajos, fecha y lugar de la recepción',
          'Cliente (promotor), dirección de la obra, presupuesto aceptado el, partidas recibidas (referencias del presupuesto), presentes en la recepción',
          'Decisión del cliente: recepción sin reservas, o con las reservas listadas',
          '10 líneas de reservas: n.º, referencia, reserva constatada (defecto, acabado, ajuste, elemento que falta), foto n.º, levantamiento previsto el, levantamiento constatado el con el visto bueno del cliente, y luego «todas las reservas levantadas el» con los dos vistos buenos',
          'Tres garantías fechadas desde la recepción: perfecto acabado (1 año), bienal (2 años), decenal (10 años)',
          'Documentos entregados y observaciones (manuales, certificado del seguro decenal, ajustes explicados), firmas del cliente y de la empresa, recordatorio de los dos ejemplares',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar la plantilla en seis pasos',
    intro:
      'En el Excel, solo se escriben las casillas blancas y las casillas amarillas (parámetros). Las medidas de corte, el coste del material, los totales y el IVA por tipo se calculan solos.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Tus datos y tus tarifas, de una vez por todas',
        description:
          'Rellena la cabecera (nombre, dirección, SIREN o SIRET, n.º de IVA) y tu seguro decenal, luego tus tarifas horarias de taller y de instalación y tu porcentaje de anticipo en las casillas amarillas. Guarda el archivo como plantilla.',
      },
      {
        label: 'Paso 2',
        title: 'El cliente, la obra y las mediciones',
        description:
          'Nombre, direcciones, medidas tomadas el día y por, vivienda terminada hace más de 2 años. Luego una línea por partida con una referencia (F1, P2…), el material, las medidas L × H × grosor, la cantidad, la unidad y las horas de taller y de instalación.',
      },
      {
        label: 'Paso 3',
        title: 'La lista de corte, referencia a referencia',
        description:
          'Una línea por pieza con la referencia de su partida, maciza o tablero, las medidas acabadas, el grosor, la cantidad y el precio de compra por m³ o por m². Las medidas de corte y el coste del material se calculan y suben a la columna «Matière HT» del presupuesto.',
      },
      {
        label: 'Paso 4',
        title: 'El plan de corte de los tableros',
        description:
          'Indica las dimensiones del tablero, el grosor de corte de la sierra, la anchura de retal a guardar y el precio del tablero, luego tus piezas de tablero con la veta impuesta o no. Lee el número de tableros a comprar y los retales a guardar.',
      },
      {
        label: 'Paso 5',
        title: 'IVA, variantes, desistimiento, firma',
        description: `Elige el IVA de cada línea (10${NBSP}% por defecto, 5,5${NBSP}% o 20${NBSP}%) y haz que el cliente marque la mención del BOFiP. Señala las variantes y opciones. Si el presupuesto se firma en casa del cliente, fecha la firma y la solicitud del anticipo 7 días después, y haz firmar «Bon pour accord».`,
      },
      {
        label: 'Paso 6',
        title: 'El acta de recepción al final de la obra',
        description:
          'Imprime la página 2, marca la recepción sin reservas o con reservas, lístalas con su fecha de levantamiento prevista y fecha las tres garantías desde la recepción. Un ejemplar firmado para cada uno.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exige la norma francesa',
    title: 'Las menciones que la plantilla ya prevé',
    intro:
      'Cuatro normas francesas del carpintero pasan por el presupuesto y el acta de recepción. La plantilla les reserva una casilla o una mención.',
    facts: [
      {
        contextLabel: 'Orden del 24 de enero de 2017',
        title: 'Un presupuesto antes de cualquier reparación en casa de un particular',
        text: 'Reparación, arreglo o mantenimiento en carpintería, puertas de garaje y portones eléctricos incluidos: el presupuesto detallado se entrega antes de los trabajos, sea cual sea el importe, con los precios sin IVA y con IVA y su plazo de validez. Presupuestos y facturas indican también tu seguro profesional (nombre y dirección de la aseguradora, cobertura geográfica): la cabecera de la plantilla recoge sus referencias.',
        sourceName: HOME_REPAIR_QUOTE_RULES_SOURCE.name,
        sourceUrl: HOME_REPAIR_QUOTE_RULES_SOURCE.url,
      },
      {
        contextLabel: `IVA del 10${NBSP}% y del 5,5${NBSP}%`,
        title: 'Sin certificado: una mención del cliente en el presupuesto',
        text: `El certificado de IVA, simplificado o no, ha desaparecido: para obras en una vivienda terminada hace más de dos años, el cliente certifica las condiciones del tipo reducido con una mención en el presupuesto o en la factura, de la que la doctrina fiscal francesa (BOFiP) publica los modelos. El presupuesto recoge la mención BOI-LETTRE-000280, con una casilla para el 10${NBSP}% y otra para el 5,5${NBSP}%.`,
        sourceName: REDUCED_VAT_CUSTOMER_STATEMENT_SOURCE.name,
        sourceUrl: REDUCED_VAT_CUSTOMER_STATEMENT_SOURCE.url,
      },
      {
        contextLabel: 'Contrato firmado en casa del cliente',
        title: 'Ventanas a medida instaladas: 14 días de desistimiento',
        text: 'Para la venta e instalación de ventanas, persianas o puertas a medida firmadas fuera de tu establecimiento, la DGCCRF (autoridad francesa de consumo) descarta la excepción de los bienes hechos a medida: el cliente tiene 14 días para desistir, contados desde la recepción de los bienes (puede hacerlo desde la firma), y no puedes recibir ningún pago antes de 7 días. El presupuesto lleva este bloque, con la fecha de la firma y la de la solicitud del anticipo.',
        sourceName: CUSTOM_WINDOW_WITHDRAWAL_SOURCE.name,
        sourceUrl: CUSTOM_WINDOW_WITHDRAWAL_SOURCE.url,
      },
      {
        contextLabel: 'En la recepción de la obra',
        title: 'El acta de recepción pone en marcha las garantías',
        text: 'Perfecto acabado (1 año, reservas del acta incluidas), bienal (2 años, equipos separables) y decenal (10 años, solidez de la obra y de sus elementos inseparables, como los marcos de puertas y ventanas): las tres garantías empiezan en la recepción (réception). La página 2 de la plantilla fecha cada una de ellas y guarda el registro del levantamiento de las reservas.',
        sourceName: BUILDER_WARRANTIES_SOURCE.name,
        sourceUrl: BUILDER_WARRANTIES_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Plantilla de lista de corte de carpintería: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de lista de corte es realmente gratis?',
        answer:
          'Sí. Los dos archivos se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» a pie de página, que puedes quitar.',
      },
      {
        question: '¿Cómo calcula la lista de corte las medidas de corte y el coste del material?',
        answer: `Para una pieza de madera maciza, la longitud y la anchura de corte añaden las creces a las medidas acabadas (10${NBSP}cm en longitud y 10${NBSP}mm en anchura por defecto), el volumen bruto se calcula con el grosor del tablón comprado y la cantidad, y luego se multiplica por el coeficiente de merma (1,3 por defecto) y por tu precio de compra por m³. Para un tablero, es la superficie a medidas acabadas, multiplicada por el coeficiente y por el precio por m². Los tres valores por defecto se cambian en las casillas amarillas, y el coeficiente también se cambia línea a línea.`,
      },
      {
        question: '¿El plan de corte sustituye a un optimizador de corte?',
        answer: `No. La hoja «Plan de coupe» hace un cálculo sencillo: cada pieza se coloca en cuadrícula en sus propios tableros, con un grosor de corte entre dos piezas, y la necesidad real está entre el mínimo por superficie y el total si cada pieza se corta aparte. Un optimizador como CutList Optimizer (gratis con un límite de cálculos, luego 15 o 25${NBSP}€ al mes), MaxCut (gratis en su versión Community) u OptiCoupe mezcla las piezas en un mismo tablero y calcula el plan más ajustado.`,
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer: `Tres hojas. En «Devis» escribes las partidas, las horas de taller y de instalación y los demás suministros; el total sin IVA de cada línea, el total sin IVA, el IVA por tipo (5,5, 10 y 20${NBSP}%), el total con IVA, el anticipo y el importe de las variantes y opciones se calculan solos. En «Fiche de débit» se calculan las medidas de corte, el volumen o la superficie, la cantidad a comprar y el coste del material, que sube al presupuesto para la misma referencia. En «Plan de coupe» se calculan las piezas por tablero, el número de tableros y los retales. Unas listas desplegables guían el material, la unidad, el IVA, maciza o tablero y la veta impuesta. Cada hoja se imprime en una página A4.`,
      },
      {
        question: '¿Qué IVA en un presupuesto de carpintería en Francia, y sigue haciendo falta un certificado?',
        answer: `El certificado de IVA, simplificado o no, ya no existe. Para aplicar el 10${NBSP}% (artículo 279-0 bis del código tributario francés) o el 5,5${NBSP}% para obras de renovación energética (artículo 278-0 bis A), el cliente certifica las condiciones con una mención en el presupuesto o en la factura, de la que el BOFiP publica modelos (BOI-LETTRE-000280). Si no, se aplica el tipo general del 20${NBSP}%. La plantilla prevé los tres tipos por línea y la mención, lista para marcar y firmar.`,
      },
      {
        question: '¿Y cuando los presupuestos y las listas de corte se multiplican?',
        answer: `Una plantilla Excel basta para unas cuantas obras al mes. Más allá, los programas franceses de presupuestos de obra (Obat de 49 a 129${NBSP}€ sin IVA al mes, Batappli 39 o 79${NBSP}€ sin IVA) recogen tus partidas, los especialistas de la carpintería presupuestan con las tarifas de los fabricantes (ProDevis START 75${NBSP}€ sin IVA al mes, Anodos 19 o 49${NBSP}€ al mes) y un CAD como Aléker saca los despieces desde el plano 3D (licencia de 3590${NBSP}€ sin IVA, luego 79 a 169${NBSP}€ sin IVA al mes). Si tu organización sale de su marco (de las mediciones al margen, horas de taller y de instalación, reservas tras la instalación), el test de la página de la herramienta te dice qué elegir.`,
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description: `Cuando las mediciones, la lista de corte, las horas de taller y de instalación y la factura se copian de un archivo a otro, una herramienta que las encadena, de las mediciones al margen de la obra, te devuelve horas. Descríbeme tu taller: te respondo en 24${NBSP}h, y si un programa del mercado basta, te lo digo.`,
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas para carpinteros',
  },
}
