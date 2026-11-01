import type { DibodevFreeTemplatePageContent } from '~/core/types/DibodevFreeTemplatePage'
import { INVENTORY_SHEET_TEMPLATE_UPDATED_AT } from '~/core/constants/freeTemplates/inventorySheet/pageShared'
import {
  ANNUAL_INVENTORY_SOURCE,
  DOCUMENT_RETENTION_SOURCE,
  INVENTORY_MANAGEMENT_TEMPLATE_PDF_PATH,
  INVENTORY_MANAGEMENT_TEMPLATE_XLSX_PATH,
  STOCK_WITHDRAWAL_VAT_SOURCE,
  USE_BY_DATE_SOURCE,
} from '~/core/constants/tools/inventoryManagementSoftware/pageShared'
import { NBSP } from '~/core/constants/typography'

export const INVENTORY_SHEET_TEMPLATE_CONTENT_ES: DibodevFreeTemplatePageContent = {
  meta: {
    title: 'Hoja de inventario: plantilla francesa gratis (Excel + PDF)',
    description:
      'Hoja de inventario: plantilla francesa gratis en Excel y PDF, con parte de recepción de proveedor. Diferencias, exactitud y totales calculados. Sin registro.',
    inLanguage: 'es',
    schemaAbout:
      'Plantilla francesa de hoja de inventario rotativo y parte de recepción de proveedor para la gestión de stock',
  },
  breadcrumbLabel: 'Hoja de inventario',
  shareImage: {
    titleLines: ['Hoja de inventario', 'plantilla gratis'],
    highlight: 'Hoja de inventario',
    subtitle: 'Inventario rotativo y recepción de proveedor en Excel y PDF, diferencias y tasa de exactitud calculadas',
    badge: 'Gratis, sin registro',
    icon: 'clipboard',
    alt: 'Plantilla francesa de hoja de inventario gratis: hoja de inventario rotativo y parte de recepción de proveedor en Excel y PDF, descargada sin registro en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Hoja de inventario',
    titleAfter: ': plantilla francesa gratis en Excel (+ parte de recepción)',
    reassurances: [
      'Hoja de inventario + parte de recepción',
      'Excel con diferencias calculadas',
      'Sin registro ni e-mail',
    ],
    aboutTitle: 'Sobre la plantilla',
    description:
      'Una hoja de inventario rotativo y un parte de recepción de proveedor listos para rellenar, escritos en francés para las pequeñas empresas de Francia que tienen stock: taller, comercio al por mayor, almacén, tienda. La hoja cuenta una zona a la vez y anota la diferencia, su valor y su causa probable, referencia por referencia. El parte de recepción controla una entrega línea a línea y luego se concilia con la factura del proveedor.',
    authorIntro: 'Plantilla preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Creé desde cero StockPME, un programa de gestión de stock e inventario que siguen usando pymes, y releí las normas francesas del inventario, de los documentos que conservar y de las fechas de caducidad para que las referencias estén al día.',
    updatedAt: INVENTORY_SHEET_TEMPLATE_UPDATED_AT,
  },
  downloads: {
    eyebrow: 'Descarga gratuita',
    lead: 'Para las pequeñas empresas de Francia que tienen stock, y para las tiendas. Dos archivos en francés, sin formulario: el PDF se imprime, el Excel calcula las diferencias y los totales.',
    files: [
      {
        label: 'Descargar la plantilla PDF',
        href: INVENTORY_MANAGEMENT_TEMPLATE_PDF_PATH,
        format: 'PDF, 2 páginas, en francés',
      },
      {
        label: 'Descargar la versión Excel',
        href: INVENTORY_MANAGEMENT_TEMPLATE_XLSX_PATH,
        format: 'Excel, 2 hojas, diferencias y totales calculados, en francés',
      },
    ],
    footnote:
      'Plantilla de uso libre, para adaptar a tu empresa y a tus productos. No sustituye el consejo de tu contable.',
  },
  contents: {
    anchorId: 'contenido',
    eyebrow: 'Qué contiene la plantilla',
    title: 'Una hoja de inventario y un parte de recepción, en PDF y en Excel',
    intro:
      'El PDF recoge los dos documentos en dos páginas A4 apaisadas. El Excel los recoge en dos hojas, con las diferencias, la tasa de exactitud y los totales calculados en cuanto escribes las cantidades.',
    documents: [
      {
        title: 'Hoja de inventario rotativo',
        format: 'Página 1 del PDF, hoja «Inventaire tournant» del Excel',
        items: [
          'Cabecera de la empresa, almacén o zona contada, fecha del recuento, contado por, validado por',
          'Clase ABC y frecuencia, con la referencia de uso: artículos A cada mes, B cada trimestre, C cada semestre',
          'Líneas de recuento: referencia, descripción, ubicación, lote o n.º de serie, fecha de caducidad o de consumo preferente, unidad, stock teórico, cantidad contada, diferencia, valor unitario sin IVA, valor de la diferencia, causa probable, corrección registrada (12 líneas en el PDF, 20 en el Excel)',
          'Causas probables: rotura, robo, error de tecleo, devolución, transferencia o retirada no registrada, otra (lista desplegable en el Excel)',
          'Resultado del recuento: total de la zona, líneas contadas, líneas con diferencia, tasa de exactitud, suma de las diferencias en valor absoluto, próxima zona por contar',
          'Firmas de quien cuenta y de quien valida, fecha de registro de las correcciones, recordatorio del inventario anual (Código de Comercio francés, art. L123-12) y de la retirada personal que se anota como salida aparte',
        ],
      },
      {
        title: 'Parte de recepción de proveedor',
        format: 'Página 2 del PDF, hoja «Bon de réception» del Excel',
        items: [
          'N.º de recepción, fecha y hora, proveedor, n.º de pedido, n.º del albarán del proveedor, almacén de destino, recibido por',
          'Líneas recibidas: referencia, descripción, cantidades pedida, entregada y aceptada, diferencia, estado (conforme, dañado, faltante, de más), lote o n.º de serie, fecha de caducidad o de consumo preferente, ubicación de almacenaje, precio unitario sin IVA, foto, factura conciliada (11 líneas en el PDF, 18 en el Excel)',
          'Totales de la recepción, y en el Excel el importe aceptado sin IVA de cada línea y el número de líneas con reserva',
          'Reservas escritas (faltantes, roturas, errores) y seguimiento: artículo, cantidad, naturaleza del problema, foto tomada, proveedor avisado el',
          'Factura del proveedor: recibida el, n.º de factura, conciliada el, entradas registradas en el stock el',
          'Firmas de quien recibe y del transportista, referencias: conservación 10 años (art. L123-22), lote con la «L» y fecha límite de los alimentos, acta de inspección periódica (VGP) del material alquilado',
        ],
      },
    ],
  },
  howToFill: {
    anchorId: 'rellenar',
    eyebrow: 'Cómo rellenarla',
    title: 'Rellenar la hoja y el parte en cinco pasos',
    intro:
      'En el Excel, solo se escriben las casillas blancas. Las diferencias, su valor, la tasa de exactitud y los totales se calculan solos.',
    steps: [
      {
        label: 'Paso 1',
        title: 'Tus datos y la zona por contar',
        description:
          'Rellena la cabecera, luego el almacén o la zona contada, la fecha y el nombre de quien cuenta. Una hoja por zona: es el principio del inventario rotativo.',
      },
      {
        label: 'Paso 2',
        title: 'Cuenta a ciegas',
        description:
          'Rellena «Quantité comptée» antes de mirar el stock teórico, referencia por referencia, con la ubicación, el lote y la fecha límite si tus productos la tienen. Después copia el stock teórico de tu archivo o de tu programa.',
      },
      {
        label: 'Paso 3',
        title: 'Lee la diferencia y busca la causa',
        description:
          'El Excel calcula la diferencia (cantidad contada − stock teórico) y su valor al coste medio de compra sin IVA, y la pone en rojo. Elige la causa probable en la lista, y luego «Oui» una vez registrada la corrección en tu stock.',
      },
      {
        label: 'Paso 4',
        title: 'El resultado y la zona siguiente',
        description:
          'Líneas contadas, líneas con diferencia, tasa de exactitud y suma de las diferencias se calculan solas. Anota la próxima zona por contar, y haz firmar a quien cuenta y a quien valida.',
      },
      {
        label: 'Paso 5',
        title: 'En la entrega, el parte de recepción',
        description:
          'Copia el n.º de pedido y el n.º del albarán del proveedor, luego las cantidades pedida, entregada y aceptada de cada línea. El Excel calcula la diferencia y el estado; elige «Abîmé» a mano, escribe la reserva, y concilia la factura cuando llegue.',
      },
    ],
  },
  rules: {
    anchorId: 'normas',
    eyebrow: 'Lo que exige la norma francesa',
    title: 'Las referencias que la plantilla ya prevé',
    intro:
      'Cuatro normas francesas del stock pasan por la hoja de inventario y el parte de recepción. La plantilla les reserva una columna o un recordatorio a pie de página.',
    facts: [
      {
        contextLabel: 'Código de Comercio francés, art. L123-12',
        title: 'Un inventario al menos una vez cada doce meses',
        text: 'Toda empresa obligada a llevar contabilidad comprueba mediante inventario, al menos una vez cada doce meses, la existencia y el valor de sus existencias. El inventario rotativo reparte ese recuento a lo largo del año sin eximir de contar cada referencia: la hoja lo recuerda a pie de página.',
        sourceName: ANNUAL_INVENTORY_SOURCE.name,
        sourceUrl: ANNUAL_INVENTORY_SOURCE.url,
      },
      {
        contextLabel: '10 años',
        title: 'Pedidos, albaranes y facturas conservados 10 años',
        text: 'Los pedidos, los albaranes, las facturas de proveedores y el libro de inventario se conservan 10 años desde el cierre del ejercicio (Código de Comercio francés, art. L123-22). El parte de recepción lleva el n.º de pedido, el n.º de albarán y la factura conciliada para archivarse con ellos.',
        sourceName: DOCUMENT_RETENTION_SOURCE.name,
        sourceUrl: DOCUMENT_RETENTION_SOURCE.url,
      },
      {
        contextLabel: 'IVA, BOFiP',
        title: 'Una retirada personal o un regalo es una salida aparte',
        text: 'Un bien sacado del stock para algo distinto de las necesidades de la empresa (uso personal, regalo, uso interno) tributa IVA cuando este se dedujo en la compra. La hoja propone «prélèvement non saisi» entre las causas de diferencia y recuerda anotar esa salida aparte, con su valor.',
        sourceName: STOCK_WITHDRAWAL_VAT_SOURCE.name,
        sourceUrl: STOCK_WITHDRAWAL_VAT_SOURCE.url,
      },
      {
        contextLabel: 'Productos alimentarios',
        title: 'Prohibido vender un producto el día siguiente a su fecha de caducidad',
        text: `Poner a la venta un producto con la fecha de caducidad (DLC) superada está prohibido en Francia: 1500${NBSP}€ de multa por producto. Un producto con la fecha de consumo preferente (DDM) superada todavía se puede vender. Los dos documentos siguen el lote y la fecha límite línea a línea.`,
        sourceName: USE_BY_DATE_SOURCE.name,
        sourceUrl: USE_BY_DATE_SOURCE.url,
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Plantilla de hoja de inventario: tus preguntas',
    questions: [
      {
        question: '¿La plantilla de hoja de inventario es realmente gratis?',
        answer:
          'Sí. Los dos archivos se descargan sin registro ni dirección de e-mail, y puedes modificarlos, imprimirlos y reutilizarlos tanto como quieras. Única contrapartida: una línea «plantilla propuesta por Dibodev» a pie de página, que puedes quitar.',
      },
      {
        question: '¿El inventario anual es obligatorio en Francia, y hay que valorar el stock?',
        answer:
          'Sí para toda empresa obligada a llevar contabilidad: el Código de Comercio francés (art. L123-12) obliga a comprobar mediante inventario, al menos una vez cada doce meses, la existencia y el valor de las existencias. Al cierre, el stock se valora a precio de coste, o al precio de mercado si es más bajo (BOFiP, Código fiscal francés art. 38). La hoja prevé el valor unitario sin IVA al coste medio de compra para cifrar cada diferencia; el valor del stock al cierre se calcula con tu contable.',
      },
      {
        question: '¿El inventario rotativo sustituye al inventario anual?',
        answer:
          'No del todo. El inventario rotativo (una zona o una clase de artículos contada cada semana o cada mes) se admite cuando el inventario permanente es fiable, siempre que cada referencia se haya contado al menos una vez en el año. El método ABC (artículos A cada mes, B cada trimestre, C cada semestre) es una costumbre, no una norma. La hoja cuenta una zona a la vez y anota la próxima zona por contar.',
      },
      {
        question: '¿Cómo funciona la versión Excel?',
        answer:
          'En la hoja «Inventaire tournant», escribes el stock teórico, la cantidad contada y el valor unitario sin IVA. La diferencia y su valor se calculan y se ponen en rojo, la causa y la corrección se eligen en listas, y el resultado del recuento (líneas contadas, líneas con diferencia, tasa de exactitud, diferencias en valor absoluto) se muestra. En la hoja «Bon de réception», la diferencia, el estado, el importe aceptado sin IVA, los totales y el número de líneas con reserva se calculan igual. Cada hoja se imprime en una página A4 apaisada.',
      },
      {
        question: 'Falta un artículo o llega dañado: ¿qué anotar en el parte de recepción?',
        answer:
          'En la línea, la cantidad entregada y la cantidad aceptada, el estado (faltante, de más o dañado) y «Oui» en la columna de la foto. Abajo, la reserva escrita: artículo, cantidad, naturaleza del problema, foto tomada, proveedor avisado el. El transportista firma el parte, y la factura solo se concilia una vez resuelta la reserva.',
      },
      {
        question: '¿Y cuando las referencias se multiplican?',
        answer: `Una plantilla Excel basta para un stock pequeño y unas cuantas entregas por semana. Más allá, los programas de gestión de stock (Odoo Inventario, Zoho Inventory, Monstock, Erplain) llevan un inventario permanente, los lotes y los códigos de barras desde 14,90${NBSP}€ sin IVA al mes, o gratis con la sola aplicación Inventario de Odoo. Si tu organización sale de su marco (furgoneta, lotes y caducidades, números de serie), el test de la página de la herramienta te dice qué elegir.`,
      },
    ],
  },
  excelLimits: {
    title: '¿Cuándo Excel ya no basta?',
    description: `Cuando las hojas de inventario, los partes de recepción y el stock teórico se copian de un archivo a otro, una herramienta que encadena entradas, salidas e inventarios te devuelve horas. Descríbeme tus almacenes y lo que almacenas: te respondo en 24${NBSP}h, y si un programa del mercado basta, te lo digo.`,
    button: 'Hablar de mi proyecto',
    toolPageLinkLabel: 'Comparar los programas de gestión de stock',
  },
}
