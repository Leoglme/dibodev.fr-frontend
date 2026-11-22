import type { DibodevVatCalculatorPageContent } from '~/core/types/DibodevVatCalculatorPage'
import { PAYMENT_RECEIPT_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/paymentReceipt/pageShared'
import { PLUMBER_QUOTE_TEMPLATE_ROUTE_NAME } from '~/core/constants/freeTemplates/plumberQuote/pageShared'
import {
  INVOICE_MENTIONS_SOURCE,
  PRICE_EXCLUDING_TAX_FORMULA_SOURCE,
  RENOVATION_WORKS_CLIENT_MENTION_SOURCE,
  RENOVATION_WORKS_VAT_SOURCE,
  VAT_FRANCHISE_SOURCE,
  VAT_RATES_SOURCE,
} from '~/core/constants/vatCalculator/pageShared'

export const VAT_CALCULATOR_PAGE_ES: DibodevVatCalculatorPageContent = {
  meta: {
    title: 'Calculadora de IVA de Francia (TVA): de HT a TTC',
    description:
      'Calculadora gratis del IVA francés (TVA): pasa de un precio sin IVA (HT) a con IVA (TTC) o al revés al 20, 10, 5,5 o 2,1 %, o suma un presupuesto.',
    inLanguage: 'es-ES',
    schemaAbout:
      'Cálculo del IVA francés (TVA), conversión entre un precio sin IVA (HT) y con IVA (TTC), total de un presupuesto con varios tipos',
  },
  breadcrumbLabel: 'Calculadora de IVA de Francia',
  numberLocale: 'es-ES',
  shareImage: {
    titleLines: ['Calculadora de IVA', 'de Francia, gratis'],
    highlight: 'Calculadora de IVA',
    subtitle: 'Añade o quita el IVA francés al 20, 10, 5,5 o 2,1 %, y suma un presupuesto con varios tipos',
    badge: 'Gratis, sin registro',
    alt: 'Calculadora gratis del IVA francés: precio sin IVA, IVA y precio con IVA, fórmula a la vista y total de un presupuesto con varios tipos, en dibodev.fr',
  },
  hero: {
    titleBefore: '',
    titleHighlight: 'Calculadora de IVA de Francia',
    titleAfter: ', de HT a TTC y al revés',
    reassurances: ['Precio, IVA y total con la fórmula', 'Presupuestos con varios tipos', 'No se guarda nada'],
    aboutTitle: 'Sobre la calculadora',
    description:
      'Una calculadora del IVA francés (TVA) para preparar un presupuesto o una factura: escribes un importe, dices si es sin IVA (HT, hors taxes) o con IVA (TTC, toutes taxes comprises), eliges el tipo y lees el precio sin IVA, el IVA y el precio con IVA, con la fórmula aplicada. El modo «Varias líneas» suma las líneas de un presupuesto, cada una con su tipo, y reparte el IVA por tipo.',
    authorIntro: 'Calculadora preparada por',
    authorBio:
      'desarrollador de aplicaciones de gestión cerca de Rennes, Francia. Hago mis propios presupuestos y facturas, acogido a la franquicia de IVA francesa para pequeñas empresas (franchise en base). Para esta calculadora, leí las páginas de Service-Public y de impots.gouv.fr sobre los tipos de IVA, las obras en viviendas y la franquicia.',
  },
  calculator: {
    modeGroupLabel: 'Tipo de cálculo',
    modeLabels: {
      single: 'Un importe',
      lines: 'Varias líneas',
    },
    directionLabel: '¿Qué importe tienes?',
    directionLabels: {
      fromExcludingTax: 'Sin IVA (HT)',
      fromIncludingTax: 'Con IVA (TTC)',
    },
    amountLabels: {
      fromExcludingTax: 'Importe sin IVA, en euros',
      fromIncludingTax: 'Importe con IVA, en euros',
    },
    amountPlaceholder: '0,00',
    amountHint: 'Coma o punto, como prefieras. El resultado se calcula mientras escribes.',
    rateLabel: 'Tipo de IVA francés',
    rateTemplate: '{rate} %',
    customRateButton: 'Otro tipo',
    customRateLabel: 'Tipo libre en %',
    customRateHint: 'Para un tipo de Córcega o de los departamentos de ultramar, por ejemplo.',
    lineNameLabel: 'Concepto (opcional)',
    lineNamePlaceholder: 'Mano de obra, material, desplazamiento…',
    quantityLabel: 'Cantidad',
    unitPriceLabel: 'Precio unitario sin IVA',
    lineRateLabel: 'IVA',
    lineTotalLabel: 'Total de la línea sin IVA',
    lineNumberTemplate: 'Línea {number}',
    removeLineTemplate: 'Eliminar la línea {number}',
    addLineButton: 'Añadir una línea',
    clearButton: 'Borrar todo',
    roundingNote:
      'Cada línea se redondea al céntimo. El IVA se calcula tipo por tipo, sobre el total sin IVA de las líneas de ese tipo, y luego se redondea al céntimo.',
    singleResultLabels: {
      fromExcludingTax: 'Precio con IVA',
      fromIncludingTax: 'Precio sin IVA',
    },
    quoteResultLabel: 'Total con IVA',
    emptyResultTexts: {
      single: 'Escribe un importe: el precio sin IVA, el IVA y el precio con IVA se calculan mientras escribes.',
      lines:
        'Escribe una cantidad y un precio unitario sin IVA en al menos una línea: los totales se calculan mientras escribes.',
    },
    singleVatLineTemplate: 'de los cuales IVA al {rate}: {amount}',
    quoteVatLineTemplate: 'de los cuales IVA: {amount}',
    amountExcludingTaxLabel: 'Precio sin IVA (HT)',
    vatAmountTemplate: 'IVA al {rate}',
    amountIncludingTaxLabel: 'Precio con IVA (TTC)',
    totalExcludingTaxLabel: 'Total sin IVA (HT)',
    vatOnBaseTemplate: 'IVA al {rate} sobre {base}',
    totalVatLabel: 'Total de IVA',
    totalIncludingTaxLabel: 'Total con IVA (TTC)',
    formulaLabel: 'Fórmula aplicada',
    formulaTemplates: {
      fromExcludingTax: '{amountExcludingTax} × {coefficient} = {amountIncludingTax} € con IVA',
      fromIncludingTax: '{amountIncludingTax} ÷ {coefficient} = {amountExcludingTax} € sin IVA',
    },
    copySummaryButton: 'Copiar el resumen',
    copiedStatus: 'Resumen copiado: pégalo en un correo o en un presupuesto.',
    copyFailedStatus: 'La copia no ha funcionado en este navegador: apunta el resultado a mano.',
    privacyNote: 'Todo se calcula en tu navegador: ningún importe se envía ni se guarda.',
    summary: {
      singleTitle: 'Cálculo del IVA francés',
      quoteTitle: 'Resumen del presupuesto',
      quoteLineTemplate: '{label}: {quantity} × {unitPrice} = {amount} sin IVA (IVA {rate})',
      unnamedLineTemplate: 'Línea {number}',
      resultRowTemplate: '{label}: {amount}',
      formulaTemplate: 'Fórmula: {formula}',
      footer:
        'Calculado con la calculadora de IVA de Francia de dibodev.fr. Comprueba qué tipo se aplica a tu actividad.',
    },
  },
  summary: {
    eyebrow: 'En resumen',
    text: 'Precio con IVA (TTC) = precio sin IVA (HT) × (1 + tipo). Precio sin IVA = precio con IVA ÷ (1 + tipo). Al 20 %, se multiplica o se divide por 1,20: 1000 € sin IVA son 1200 € con IVA, y 1200 € con IVA son 1000 € sin IVA. Nunca le quites un 20 % al precio con IVA: te saldrían 960 €. En la Francia metropolitana, los tipos son del 20, 10, 5,5 y 2,1 %. Una empresa acogida a la franquicia (franchise en base) no cobra IVA.',
    dateLabel: 'Reglas leídas el 22 de noviembre de 2026 en Service-Public e impots.gouv.fr.',
  },
  method: {
    eyebrow: 'Cómo calcular',
    title: 'Calcular el IVA francés sin equivocarse',
    intro:
      'Cuatro puntos marcan la diferencia entre un presupuesto correcto y uno erróneo: el sentido del cálculo, el error de quitar un 20 % al total, los tipos mezclados y los redondeos.',
    steps: [
      {
        label: 'Añadir el IVA',
        title: 'Multiplicar el precio sin IVA por 1 + el tipo',
        description:
          'Para pasar de HT a TTC, multiplica por 1,20 al 20 %, por 1,10 al 10 %, por 1,055 al 5,5 % y por 1,021 al 2,1 %. 1000 € sin IVA al 20 %: 1000 × 1,20 = 1200 € con IVA. El IVA solo vale 1000 × 0,20 = 200 €.',
      },
      {
        label: 'Quitar el IVA',
        title: 'Dividir el total, no quitarle un 20 %',
        description:
          'Para volver al precio sin IVA, divide el precio con IVA por el mismo número: 1200 ÷ 1,20 = 1000 €. El error clásico es quitarle un 20 % al total: 1200 − 20 % = 960 €, es decir, 40 € menos que el verdadero precio sin IVA. El IVA se calcula sobre el precio sin IVA, no sobre el total: en un precio con un 20 % de IVA, solo representa el 16,67 % del total.',
      },
      {
        label: 'Varios tipos',
        title: 'Un presupuesto con dos tipos',
        description:
          'Cuando un presupuesto mezcla tipos, calcula el IVA tipo por tipo, nunca con un tipo medio. 800 € sin IVA al 10 % y 300 € al 20 %: total sin IVA 1100 €, IVA 80 + 60 = 140 €, total con IVA 1240 €. Es lo que hace el modo «Varias líneas», con el IVA repartido por tipo.',
      },
      {
        label: 'Los redondeos',
        title: 'Redondear al céntimo, una vez por tipo',
        description:
          'Un importe se redondea al céntimo: hacia arriba cuando el tercer decimal es 5 o más, hacia abajo si no. La calculadora redondea cada línea y luego calcula el IVA sobre el total sin IVA de cada tipo. Tres líneas de 33,33 € al 20 % dan 99,99 € sin IVA y 20,00 € de IVA. Redondeado línea por línea, el IVA sería de 20,01 €: puede haber un céntimo de diferencia con un programa que cuente de otra forma.',
      },
    ],
  },
  rules: {
    anchorId: 'regles',
    eyebrow: 'Lo que dicen las páginas oficiales',
    title: 'Seis reglas francesas sobre los tipos, las obras y la franquicia de IVA',
    intro:
      'Leídas el 22 de noviembre de 2026 en Service-Public e impots.gouv.fr, para la Francia metropolitana. Los tipos y lo que cubren cambian con frecuencia: comprueba el tipo de cada operación antes de escribirlo en un presupuesto.',
    facts: [
      {
        contextLabel: 'Francia metropolitana',
        title: 'Cuatro tipos: 20, 10, 5,5 y 2,1 %',
        text: 'Según impots.gouv.fr, el tipo normal del 20 % se aplica a la mayoría de los bienes y servicios. El tipo del 10 % cubre, entre otros, la restauración, el transporte de viajeros, las obras de mejora de la vivienda y el alojamiento hotelero. El tipo del 5,5 % cubre, entre otros, los alimentos de primera necesidad, los libros y las obras de renovación energética. El tipo del 2,1 % cubre, entre otros, las publicaciones de prensa y los medicamentos reembolsables.',
        sourceName: VAT_RATES_SOURCE.name,
        sourceUrl: VAT_RATES_SOURCE.url,
      },
      {
        contextLabel: 'Obras en una vivienda',
        title: '10 % o 5,5 % en una vivienda de más de 2 años',
        text: 'En una vivienda terminada hace más de 2 años, las obras de mejora, transformación, acondicionamiento o mantenimiento van al 10 %, y las obras de renovación energética, como el aislamiento térmico, al 5,5 %. El tipo del 20 % sigue aplicándose a las obras excluidas, por ejemplo en locales que no sirven de vivienda o para el mantenimiento de zonas verdes, y a los equipos que el particular compra por su cuenta.',
        sourceName: RENOVATION_WORKS_VAT_SOURCE.name,
        sourceUrl: RENOVATION_WORKS_VAT_SOURCE.url,
      },
      {
        contextLabel: 'Desde el 1 de marzo de 2025',
        title: 'El cliente certifica el tipo reducido en el presupuesto o la factura',
        text: 'Para aplicar el 10 % o el 5,5 %, el cliente debe certificar, con una mención en el presupuesto o en la factura, que las obras cumplen las condiciones. Según impots.gouv.fr, desde el 1 de marzo de 2025 ya no se exige un certificado aparte. Los tipos reducidos valen para una vivienda habitual o una segunda residencia, sea el cliente propietario, inquilino u ocupante a título gratuito.',
        sourceName: RENOVATION_WORKS_CLIENT_MENTION_SOURCE.name,
        sourceUrl: RENOVATION_WORKS_CLIENT_MENTION_SOURCE.url,
      },
      {
        contextLabel: 'Franquicia de IVA, umbrales de 2026',
        title: 'Por debajo de 37.500 € o 85.000 €, no se cobra IVA',
        text: 'Una empresa acogida a la «franchise en base» no cobra IVA y no lo deduce de sus compras. Para 2026, Service-Public indica que los umbrales no cambian: 85.000 € de facturación para la venta de mercancías y el alojamiento, 37.500 € para los servicios y las profesiones liberales, salvo los abogados. Cada factura lleva la mención «TVA non applicable, article 293 B du CGI».',
        sourceName: VAT_FRANCHISE_SOURCE.name,
        sourceUrl: VAT_FRANCHISE_SOURCE.url,
      },
      {
        contextLabel: 'Quitar el IVA',
        title: 'Precio sin IVA = precio con IVA ÷ (1 + tipo de IVA)',
        text: 'Es la fórmula que da Service-Public, con un ejemplo: 50 € con IVA son 41,67 € sin IVA al 20 %, 45,45 € al 10 % y 47,39 € al 5,5 %. El precio sin IVA se redondea al céntimo superior cuando el tercer decimal es 5 o más, y al inferior si no: 41,669 € pasa a 41,67 €.',
        sourceName: PRICE_EXCLUDING_TAX_FORMULA_SOURCE.name,
        sourceUrl: PRICE_EXCLUDING_TAX_FORMULA_SOURCE.url,
      },
      {
        contextLabel: 'En una factura',
        title: 'Precio unitario sin IVA y tipo en cada línea',
        text: 'Para cada producto o servicio, una factura francesa indica la cantidad, la denominación precisa, el precio unitario sin IVA y el tipo de IVA aplicable. Después da el total sin IVA y el total con IVA que hay que pagar. El modo «Varias líneas» de la calculadora sigue el mismo orden.',
        sourceName: INVOICE_MENTIONS_SOURCE.name,
        sourceUrl: INVOICE_MENTIONS_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'La calculadora no elige el tipo por ti.',
    calloutText:
      'Aplica el tipo que le das. Los cuatro botones son los tipos de la Francia metropolitana: Córcega y los departamentos de ultramar tienen otros tipos para algunas operaciones, que puedes escribir en «Otro tipo». Si dudas sobre un tipo, pregunta a tu asesor contable o a tu oficina de impuestos francesa.',
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Cálculo del IVA francés: tus preguntas',
    questions: [
      {
        question: '¿Cómo se calcula el IVA francés (TVA)?',
        answer:
          'Multiplica el precio sin IVA por el tipo: 1000 € al 20 % dan 1000 × 0,20 = 200 € de IVA. Súmalo al precio sin IVA para obtener el precio con IVA: 1200 €. Si partes del precio con IVA, calcula primero el precio sin IVA (total ÷ 1,20) y luego haz la resta: 1200 − 1000 = 200 € de IVA.',
      },
      {
        question: '¿Cómo pasar de TTC a HT (quitar el IVA francés)?',
        answer:
          'Divide el precio con IVA por 1 + el tipo de IVA: por 1,20 al 20 %, 1,10 al 10 %, 1,055 al 5,5 % y 1,021 al 2,1 %. 500 € con IVA al 10 % son 500 ÷ 1,10 = 454,55 € sin IVA, es decir, 45,45 € de IVA. En la calculadora, elige «Con IVA (TTC)».',
      },
      {
        question: '¿Cómo pasar de HT a TTC (añadir el IVA francés)?',
        answer:
          'Multiplica el precio sin IVA por 1 + el tipo de IVA. 100 € sin IVA son 120 € con IVA al 20 %, 110 € al 10 %, 105,50 € al 5,5 % y 102,10 € al 2,1 %. En la calculadora, elige «Sin IVA (HT)».',
      },
      {
        question: '¿Por qué no hay que quitarle un 20 % al precio con IVA?',
        answer:
          'Porque el 20 % de IVA se calcula sobre el precio sin IVA, no sobre el precio con IVA. Sobre 1200 € con IVA, quitar un 20 % da 960 €, cuando el verdadero precio sin IVA es de 1000 €. El IVA contenido en un precio con un 20 % de IVA solo vale el 16,67 % de ese precio. Hay que dividir por 1,20.',
      },
      {
        question: '¿Qué tipo de IVA francés se aplica a las obras?',
        answer:
          'En una vivienda terminada hace más de 2 años: 10 % para las obras de mejora, transformación, acondicionamiento o mantenimiento, y 5,5 % para las obras de renovación energética, como el aislamiento térmico. El tipo del 20 % se aplica al resto: locales que no sirven de vivienda, mantenimiento de zonas verdes, equipos que el cliente compra por su cuenta. El cliente debe certificar en el presupuesto o en la factura que se cumplen las condiciones.',
      },
      {
        question: '¿Un autónomo francés (auto-entrepreneur) cobra IVA?',
        answer:
          'No mientras siga acogido a la franquicia (franchise en base). Para 2026, los umbrales son de 37.500 € de facturación para los servicios y de 85.000 € para la venta de mercancías y el alojamiento. Factura entonces sin IVA, con la mención «TVA non applicable, article 293 B du CGI», y no recupera el IVA de sus compras. Por encima del umbral superior (41.250 € para los servicios, 93.500 € para la venta), el IVA se aplica desde el primer día en que se supera. Entre los dos umbrales, se aplica a partir del 1 de enero del año siguiente.',
      },
      {
        question: '¿Cuáles son los tipos de IVA en Francia?',
        answer:
          'En la Francia metropolitana, cuatro tipos: 20 % para la mayoría de los bienes y servicios, 10 % en particular para la restauración, el transporte de viajeros y las obras de mejora de la vivienda, 5,5 % en particular para los alimentos de primera necesidad, los libros y la renovación energética, 2,1 % en particular para la prensa y los medicamentos reembolsables. Córcega y los departamentos de ultramar tienen otros tipos para algunas operaciones.',
      },
      {
        question: '¿Cómo calcular el IVA de un presupuesto con varios tipos?',
        answer:
          'Suma primero los importes sin IVA de las líneas que tienen el mismo tipo y luego calcula el IVA de cada grupo. 800 € al 10 % dan 80 € de IVA, 300 € al 20 % dan 60 €: el presupuesto suma 1100 € sin IVA, 140 € de IVA y 1240 € con IVA. El modo «Varias líneas» hace este cálculo y muestra el IVA de cada tipo.',
      },
      {
        question: '¿Cómo se redondea el IVA?',
        answer:
          'Al céntimo: hacia arriba cuando el tercer decimal es 5 o más, hacia abajo si no. 41,669 € pasa a 41,67 €. La calculadora redondea cada línea y luego el IVA de cada tipo sobre el total sin IVA de ese tipo. Un programa que redondea el IVA línea por línea puede dar un céntimo de diferencia.',
      },
      {
        question: '¿La calculadora guarda mis importes?',
        answer:
          'No. Todo se calcula en tu navegador: ningún importe se envía ni se guarda, y todo se borra al cerrar la página. Para conservarlo, copia el resumen y pégalo en un correo o en tu presupuesto.',
      },
    ],
  },
  templates: {
    eyebrow: 'Plantillas gratis',
    title: 'Poner estos importes en un presupuesto o un recibo',
    intro:
      'La calculadora no guarda nada. Para entregar un documento limpio a tu cliente, dos plantillas gratis para descargar, sin registro.',
    links: [
      {
        routeName: PLUMBER_QUOTE_TEMPLATE_ROUTE_NAME,
        title: 'Presupuesto de fontanería y calefacción',
        description:
          'Presupuesto y parte de intervención en Excel y PDF, con un tipo de IVA francés del 5,5, 10 o 20 % en cada línea.',
        linkLabel: 'Ver la plantilla de presupuesto',
      },
      {
        routeName: PAYMENT_RECEIPT_TEMPLATE_ROUTE_NAME,
        title: 'Recibo de pago y de anticipo',
        description:
          'Talonario de recibos con matriz y recibo de anticipo en PDF, Word y Excel, con el resto pendiente calculado.',
        linkLabel: 'Ver el recibo de pago',
      },
    ],
  },
  contactCta: {
    title: '¿Sigues haciendo tus presupuestos y facturas a mano?',
    description:
      'Cuando cada presupuesto se vuelve a teclear en una hoja de cálculo, los tipos se eligen línea por línea y la factura se introduce otra vez después, una herramienta que une presupuestos, facturas y seguimiento de cobros te devuelve tiempo. Cuéntame cómo trabajas: te respondo en 24 h, y si un programa del mercado basta, te lo digo.',
    button: 'Hablar de mi proyecto',
  },
}
