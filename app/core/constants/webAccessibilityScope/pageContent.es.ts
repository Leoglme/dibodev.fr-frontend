import type { DibodevWebAccessibilityScopePageContent } from '~/core/types/DibodevWebAccessibilityScopePage'
import {
  WEB_ACCESSIBILITY_ARTICLE_47_1_SOURCE,
  WEB_ACCESSIBILITY_ARTICLE_47_SOURCE,
  WEB_ACCESSIBILITY_DECREE_2019_768_SOURCE,
  WEB_ACCESSIBILITY_DGCCRF_PROFESSIONALS_SOURCE,
  WEB_ACCESSIBILITY_RGAA_HOME_SOURCE,
} from '~/core/constants/webAccessibilityScope/pageShared'

export const WEB_ACCESSIBILITY_SCOPE_PAGE_ES: DibodevWebAccessibilityScopePageContent = {
  meta: {
    title: 'Accesibilidad web en Francia: ¿te afecta? Test gratis',
    description:
      'Test gratuito en 5 preguntas: RGAA, ley de 2005, ley europea del 28 de junio de 2025. ¿Tu web en Francia debe ser accesible, desde cuándo, qué hacer?',
    inLanguage: 'es-ES',
    schemaAbout:
      'Obligaciones de accesibilidad digital de las webs en Francia: RGAA, artículo 47 de la ley de 2005 y ley europea de accesibilidad',
  },
  breadcrumbLabel: 'Accesibilidad web: ¿me afecta?',
  shareImage: {
    titleLines: ['Accesibilidad web en Francia:', '¿mi web está', 'afectada?'],
    highlight: 'afectada',
    subtitle: 'RGAA, ley de 2005, ley europea del 28 de junio de 2025',
    badge: 'Gratis · 5 preguntas · 2 minutos',
    alt: 'Accesibilidad web en Francia: ¿mi web está afectada? Test gratuito en dibodev.fr',
  },
  hero: {
    titleBefore: 'Accesibilidad web en Francia: ¿tu web está ',
    titleHighlight: 'afectada',
    titleAfter: ', y desde cuándo?',
    reassurances: [
      'Gratis, 5 preguntas, 2 minutos',
      'Resultado sin e-mail',
      'Textos oficiales releídos el 8 de noviembre de 2026',
    ],
    description:
      'Desde el 28 de junio de 2025, la ley europea de accesibilidad se suma al RGAA francés: las webs de venta online a particulares también deben poder usarlas las personas con discapacidad. Pero una tienda de barrio, una asociación, un ayuntamiento de 500 habitantes, la web corporativa de un artesano: ¿a quién afecta de verdad? Este test cruza tu estructura, tu tamaño, lo que hace tu web y tus clientes, y te dice lo que la ley francesa te pide, y desde cuándo.',
    authorIntro: 'Test creado por',
    authorBio:
      'desarrollador freelance cerca de Rennes. Creo y rehago webs y herramientas de gestión para pequeñas y medianas empresas, teniendo en cuenta la accesibilidad desde el pliego de condiciones.',
  },
  mobileContactBar: {
    text: '¿Una primera opinión sobre tu web?',
    buttonLabel: 'Contactarme',
  },
  facts: {
    anchorId: 'textos',
    eyebrow: 'Lo que dicen los textos',
    title: 'Quién debe hacer su web accesible: ocho puntos verificados',
    intro:
      'Las reglas releídas el 8 de noviembre de 2026 en Légifrance, la web del RGAA (DINUM) y la DGCCRF. En Francia conviven dos textos: el artículo 47 de la ley de 2005 y la ley europea de accesibilidad.',
    facts: [
      {
        contextLabel: 'Ley de 2005, artículo 47',
        title: 'Los organismos públicos, sea cual sea su tamaño',
        text: 'Las webs, intranets, extranets y aplicaciones móviles de las personas jurídicas de derecho público deben ser accesibles a las personas con discapacidad, igual que las de las estructuras privadas con una misión de servicio público. No hay umbral de tamaño: un pequeño municipio está afectado igual que un ministerio.',
        sourceName: 'Ley n.º 2005-102 del 11 de febrero de 2005, artículo 47 (versión del 8 de septiembre de 2023)',
        sourceUrl: WEB_ACCESSIBILITY_ARTICLE_47_SOURCE.url,
      },
      {
        contextLabel: 'Más de 250 M€',
        title: 'Las grandes empresas, desde 2019',
        text: 'El artículo 47 también afecta a las empresas cuya facturación en Francia supera los 250 millones de euros, de media en los tres últimos ejercicios cerrados. Para ellas, las webs nuevas están afectadas desde el 1 de octubre de 2019, las más antiguas desde el 1 de octubre de 2020, las aplicaciones desde el 1 de julio de 2021.',
        sourceName: 'Decreto n.º 2019-768 del 24 de julio de 2019, artículos 2 y 10',
        sourceUrl: WEB_ACCESSIBILITY_DECREE_2019_768_SOURCE.url,
      },
      {
        contextLabel: 'Declaración y plan',
        title: 'Una declaración de accesibilidad y una mención en la página de inicio',
        text: 'Las estructuras afectadas publican una declaración de accesibilidad y un plan plurianual de tres años como máximo, dividido en planes de acción anuales. La página de inicio indica claramente si la web es conforme o no, y cada web permite señalar fácilmente un defecto de accesibilidad.',
        sourceName: 'Ley n.º 2005-102 del 11 de febrero de 2005, artículo 47, III y IV',
        sourceUrl: WEB_ACCESSIBILITY_ARTICLE_47_SOURCE.url,
      },
      {
        contextLabel: 'Arcom',
        title: 'Hasta 50 000 €, tras un requerimiento público',
        text: 'El Arcom controla, emite un requerimiento público y después puede sancionar: hasta 50 000 € para un organismo público cuya web no es accesible, y hasta 25 000 € por un incumplimiento de la declaración, el plan o la mención, único punto controlado en las grandes empresas. Es posible una nueva sanción si el incumplimiento sigue seis meses después.',
        sourceName: 'Ley n.º 2005-102 del 11 de febrero de 2005, artículo 47-1 (ordenanza n.º 2023-859)',
        sourceUrl: WEB_ACCESSIBILITY_ARTICLE_47_1_SOURCE.url,
      },
      {
        contextLabel: 'RGAA 4.1.2',
        title: '106 criterios, y una versión 5 anunciada para finales de 2026',
        text: 'El referencial general de mejora de la accesibilidad (RGAA), publicado por la DINUM, tiene 106 criterios en su versión 4.1.2, actualizada el 18 de abril de 2023. Una empresa también puede basarse en las reglas internacionales WCAG 2.1, niveles A y AA. El RGAA 5 está en redacción: la DINUM pide no suspender los trabajos mientras tanto.',
        sourceName: 'accessibilite.numerique.gouv.fr (DINUM), página de inicio y ámbito del RGAA',
        sourceUrl: WEB_ACCESSIBILITY_RGAA_HOME_SOURCE.url,
      },
      {
        contextLabel: '28 de junio de 2025',
        title: 'La ley europea afecta a la venta online a particulares',
        text: 'Desde el 28 de junio de 2025, algunos servicios deben cumplir requisitos de accesibilidad en Francia, sea cual sea el estatus de la empresa: comercio electrónico, telefonía, acceso a medios audiovisuales, transporte de viajeros (webs, aplicaciones, billetes, información), servicios bancarios para consumidores, libros electrónicos.',
        sourceName:
          'DGCCRF, «Professionnels : vos produits et services doivent être conformes à la directive Accessibilité», 13 de noviembre de 2025',
        sourceUrl: WEB_ACCESSIBILITY_DGCCRF_PROFESSIONALS_SOURCE.url,
      },
      {
        contextLabel: 'Microempresas',
        title: 'Exentas para los servicios, pero una web existente no tiene plazo',
        text: 'Una empresa con menos de 10 empleados y una facturación o un balance anual de 2 millones de euros como mucho no tiene ninguna obligación de accesibilidad para los servicios que presta. Para las demás, la DGCCRF precisa que una web o una aplicación no es un producto: una tienda online existente no tiene periodo transitorio. Solo los contratos firmados con particulares antes del 28 de junio de 2025 pueden seguir hasta el 28 de junio de 2030 como muy tarde.',
        sourceName: 'DGCCRF, ficha para profesionales, 13 de noviembre de 2025',
        sourceUrl: WEB_ACCESSIBILITY_DGCCRF_PROFESSIONALS_SOURCE.url,
      },
      {
        contextLabel: 'DGCCRF',
        title: 'Multas de 7500 €, acumulables',
        text: 'La DGCCRF controla desde el 28 de junio de 2025, sobre todo tras una denuncia, junto con el Arcom, el ARCEP, la Banque de France, la ACPR y la AMF. Puede ordenar la puesta en conformidad, con multa coercitiva y publicidad, y las infracciones son contravenciones de 5.ª clase: multas de 7500 €, acumulables según el número de infracciones constatadas.',
        sourceName: 'DGCCRF, ficha para profesionales, 13 de noviembre de 2025',
        sourceUrl: WEB_ACCESSIBILITY_DGCCRF_PROFESSIONALS_SOURCE.url,
      },
    ],
    calloutEmphasizedIntro: 'Lo que hago por ti:',
    calloutText:
      'miro tu web, te digo lo que de verdad bloquea, y corrijo o rehago lo necesario, apuntando al RGAA y a las WCAG 2.1 AA. A distancia, primer intercambio gratis.',
  },
  cases: {
    anchorId: 'casos',
    eyebrow: 'Caso por caso',
    title: 'Organismo público, e-commerce, asociación, artesano: a quién afecta',
    intro: 'Las seis situaciones que más se repiten, con el texto que se aplica en Francia.',
    items: [
      {
        title: 'Ayuntamiento, mancomunidad, colegio, organismo público',
        description:
          'Afectado sea cual sea su tamaño, desde 2019 o 2020 para las webs: RGAA, declaración de accesibilidad, plan plurianual y mención en la página de inicio. Control del Arcom.',
      },
      {
        title: 'Empresa de más de 250 M€ de facturación en Francia',
        description:
          'Afectada por el artículo 47 desde el 1 de octubre de 2019 o 2020: web accesible, declaración, plan y mención. Y por la ley europea si también vende online a particulares.',
      },
      {
        title: 'Venta online a particulares, salvo microempresas',
        description:
          'Afectada desde el 28 de junio de 2025 por la ley europea: tienda online, reserva de pago, suscripción. Información de accesibilidad a publicar, control de la DGCCRF.',
      },
      {
        title: 'Banca, transporte de viajeros, telecomunicaciones, vídeo, libros electrónicos',
        description:
          'Afectados desde el 28 de junio de 2025 para algunos elementos: webs, aplicaciones, billetes e información. La autoridad de control depende del sector: DGCCRF, Arcom, ARCEP, Banque de France.',
      },
      {
        title: 'Microempresa, artesano, autónomo',
        description:
          'Menos de 10 empleados y 2 M€ como mucho: sin obligación para los servicios, aunque vendas online. Una web corporativa no está afectada por ningún texto. Recomendable, y mejor para la lectura de todos.',
      },
      {
        title: 'Asociación',
        description:
          'Fuera del artículo 47, salvo misión de servicio público, financiación mayoritariamente pública o servicios esenciales al público. Afectada por la ley europea si vende online a particulares sin ser una microempresa.',
      },
    ],
  },
  timeline: {
    anchorId: 'fechas',
    eyebrow: 'Las fechas',
    title: 'Tres fechas para recordar',
    intro: 'Fijadas por el decreto del 24 de julio de 2019 y por la ley europea de accesibilidad.',
    items: [
      {
        title: '2019-2020: sector público y grandes empresas',
        description:
          'Webs accesibles desde el 23 de septiembre de 2019 o 2020 para el sector público, el 1 de octubre de 2019 o 2020 para las empresas de más de 250 M€; aplicaciones móviles en 2021.',
      },
      {
        title: '28 de junio de 2025: se aplica la ley europea',
        description:
          'Venta online a particulares, banca, transporte, telecomunicaciones, medios, libros electrónicos: los servicios nuevos y también las webs existentes, salvo microempresas.',
      },
      {
        title: '28 de junio de 2030: fin del periodo transitorio',
        description:
          'Fecha límite para los contratos de servicio celebrados con particulares antes del 28 de junio de 2025, y para los productos ya usados para prestar el servicio. Una web no se beneficia de ello.',
      },
    ],
  },
  method: {
    eyebrow: 'Por dónde empezar',
    title: '6 gestos para hacer esta misma semana',
    intro: 'Sin herramientas, en tu propia web. Cada uno corresponde a un criterio del RGAA.',
    steps: [
      {
        label: 'Imágenes',
        title: 'Un texto alternativo para las imágenes que informan',
        description:
          'Una foto de producto, un esquema, un logo clicable: cada uno tiene un texto que dice lo que muestra. Las imágenes decorativas se quedan mudas (criterio 1.1).',
      },
      {
        label: 'Idioma',
        title: 'El idioma y el título de cada página',
        description:
          'La página declara su idioma (lang="es") para que el lector de pantalla pronuncie bien, y cada pestaña tiene un título que dice dónde estás (criterios 8.3 y 8.5).',
      },
      {
        label: 'Títulos',
        title: 'Títulos en orden',
        description:
          'Un solo título principal, luego subtítulos que se siguen, sin saltar niveles por una cuestión de tamaño de letra: es el índice de quienes no ven la página (criterio 9.1).',
      },
      {
        label: 'Contraste',
        title: 'Un texto que se lee sobre su fondo',
        description:
          'Gris claro sobre blanco, blanco sobre amarillo: si entrecierras los ojos para leer, otros no lo conseguirán (criterio 3.2).',
      },
      {
        label: 'Teclado',
        title: 'Toda la web con la tecla Tab',
        description:
          'Desconecta el ratón: cada enlace y cada botón debe alcanzarse en un orden lógico, con un marco visible alrededor del elemento activo (criterios 7.3, 10.7 y 12.8).',
      },
      {
        label: 'Formularios',
        title: 'Una etiqueta en cada campo, subtítulos en los vídeos',
        description:
          '«Nombre», «E-mail» escritos junto al campo, no solo en gris dentro; y subtítulos para todo vídeo con voz (criterios 11.1 y 4.3).',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'La accesibilidad de tu web: las preguntas que me hacen',
    questions: [
      {
        question: '¿La web corporativa de mi negocio de artesanía debe ser accesible?',
        answer:
          'No según la ley francesa: una web corporativa sin venta online, publicada por una empresa privada con menos de 250 millones de euros de facturación, no está afectada ni por el artículo 47 ni por la ley europea. Aun así es recomendable: textos alternativos, títulos bien jerarquizados y enlaces explícitos también ayudan a Google a entender tus páginas. Ningún milagro para el SEO, pero ningún efecto negativo.',
      },
      {
        question: 'Vendo online: ¿me afecta?',
        answer:
          'Sí, si vendes a particulares en Francia y no eres una microempresa (menos de 10 empleados y como mucho 2 millones de euros de facturación o de balance). Desde el 28 de junio de 2025, tu tienda debe cumplir los requisitos de accesibilidad del Código de consumo francés, y publicas información sobre cómo los cumple. Una web existente no tiene ningún plazo.',
      },
      {
        question: '¿Qué es el RGAA?',
        answer:
          'El referencial general de mejora de la accesibilidad, publicado por la DINUM francesa. Su versión vigente, la 4.1.2, tiene 106 criterios concretos (imágenes, colores, títulos, formularios, navegación…) con pruebas para cada uno. Traduce en método francés la norma europea y las reglas WCAG. Hay una versión 5 anunciada para finales de 2026.',
      },
      {
        question: '¿Qué es una declaración de accesibilidad?',
        answer:
          'Una página que dice, tras una auditoría, si tu web es totalmente conforme (100 % de los criterios del RGAA), parcialmente conforme (al menos 50 %) o no conforme, enumera los contenidos no accesibles y da un medio para señalarte un problema, con el recurso al Défenseur des droits. Es obligatoria para los organismos públicos y las empresas de más de 250 millones de euros, y se actualiza en cada rediseño.',
      },
      {
        question: '¿Qué riesgo corro si no hago nada?',
        answer:
          'Para un organismo público, hasta 50 000 € de multa impuesta por el Arcom tras un requerimiento público, y 25 000 € por la falta de declaración, plan o mención (único tope aplicable a las grandes empresas). Para una tienda online afectada por la ley europea, multas de 7500 € por infracción constatada por la DGCCRF, acumulables, y una orden de puesta en conformidad.',
      },
      {
        question: '¿WordPress, Shopify o Wix hacen mi web accesible por defecto?',
        answer:
          'No. La herramienta puede facilitar las cosas, pero la accesibilidad depende del tema elegido, de los plugins y sobre todo del contenido que añades: textos alternativos de las imágenes, títulos, colores, etiquetas de los formularios, vídeos. Un tema anunciado como «accesible» sigue necesitando una revisión una vez lleno.',
      },
      {
        question: '¿Cuánto cuesta poner una web en conformidad?',
        answer:
          'Depende de la web: número de plantillas de página, formularios, proceso de compra, tema de partida. Se empieza por una auditoría de una muestra de páginas representativas, que da la lista de correcciones y su orden de importancia; el presupuesto viene después. En una web nueva, prever la accesibilidad desde el pliego de condiciones cuesta mucho menos que corregirla a posteriori.',
      },
      {
        question: '¿Nuestra asociación está afectada?',
        answer:
          'No por el artículo 47, salvo si tiene una misión de servicio público, está financiada o controlada mayoritariamente por organismos públicos, o presta servicios esenciales al público o destinados a personas con discapacidad. Por la ley europea, solo si vende online a particulares sin ser una microempresa.',
      },
      {
        question: '¿Un ayuntamiento de 500 habitantes está afectado?',
        answer:
          'Sí. El artículo 47 afecta a todas las personas jurídicas de derecho público, sin umbral de tamaño: la web del municipio debe ser accesible, con una declaración de accesibilidad, un plan plurianual y la mención en la página de inicio. Se puede invocar una carga desproporcionada para un contenido concreto, con una alternativa, pero nunca para toda la web.',
      },
      {
        question: '¿Mi aplicación móvil está afectada?',
        answer:
          'Según las mismas reglas que la web. Para un organismo público o una empresa de más de 250 millones de euros, las aplicaciones están afectadas desde 2021. Para la ley europea, una aplicación que vende a particulares o que da acceso a un servicio bancario, de transporte o de telecomunicaciones está afectada desde el 28 de junio de 2025, igual que la web.',
      },
      {
        question: '¿Debo subtitular mis vídeos?',
        answer:
          'Si tu web está sujeta al RGAA, sí: el criterio 4.3 exige subtítulos sincronizados para los vídeos pregrabados con sonido. Para un organismo público, los vídeos publicados antes del 23 de septiembre de 2020 y los directos están exentos. Para todos los demás, es una buena costumbre: muchos vídeos se ven sin sonido.',
      },
      {
        question: '¿Quién controla?',
        answer:
          'El Arcom para el artículo 47 (organismos públicos y empresas de más de 250 millones de euros), con controles que pueden ser automatizados. La DGCCRF para la ley europea, sobre todo tras una denuncia en SignalConso, junto con el Arcom (medios, libros electrónicos), el ARCEP, la Banque de France, la ACPR y la AMF según el sector.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para leer también',
    intro: 'Tres artículos sobre las webs y las herramientas de las pequeñas empresas.',
  },
  contactCta: {
    title: '¿Quieres una primera opinión sobre tu web?',
    description:
      'Envíame su dirección: te respondo en 24 horas con lo que de verdad bloquea y los pasos a seguir, y un presupuesto solo si hay correcciones que prever.',
    button: 'Pedir una primera opinión',
  },
}
