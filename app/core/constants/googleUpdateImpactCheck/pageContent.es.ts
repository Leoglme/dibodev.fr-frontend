import type { DibodevGoogleUpdateImpactPageContent } from '~/core/types/DibodevGoogleUpdateImpactPage'
import { GOOGLE_SEARCH_STATUS_DASHBOARD_URL } from '~/core/constants/googleSearchUpdates'
import {
  GOOGLE_CORE_UPDATES_SOURCE,
  GOOGLE_TRAFFIC_DROPS_SOURCE,
} from '~/core/constants/googleUpdateImpactCheck/pageShared'

export const GOOGLE_UPDATE_IMPACT_PAGE_ES: DibodevGoogleUpdateImpactPageContent = {
  meta: {
    title: 'Actualización de Google: ¿mi web está afectada? Test',
    description:
      'Google despliega una actualización de su clasificación desde el 10 de noviembre de 2026. Exportación de Search Console o 5 preguntas: ¿tu web está afectada?',
    inLanguage: 'es-ES',
    schemaAbout:
      'Actualización principal de Google de noviembre de 2026 (November 2026 core update) y su efecto en la visibilidad de una web',
  },
  breadcrumbLabel: 'Actualización de Google: ¿mi web está afectada?',
  shareImage: {
    titleLines: ['Actualización de Google:', '¿mi web está', 'afectada?'],
    highlight: 'afectada',
    subtitle: 'Exportación de Search Console o test de 5 preguntas',
    badge: 'Gratis · sin registro',
    alt: 'Actualización de Google: ¿mi web está afectada? Herramienta gratuita en dibodev.fr',
  },
  hero: {
    titleBefore: 'Actualización de Google: ¿mi web está ',
    titleHighlight: 'afectada',
    titleAfter: '?',
    reassurances: [
      'Gratis, sin registro',
      'Archivo leído en tu navegador',
      'Fechas revisadas en Google el 16 de noviembre de 2026',
    ],
    briefTitle: 'En resumen, a 16 de noviembre de 2026',
    brief:
      'El 10 de noviembre de 2026, Google lanzó una actualización general de su clasificación, la «November 2026 core update», cuyo despliegue puede tardar hasta dos semanas. No es una sanción: Google no apunta a ninguna web ni a ninguna página en concreto. Antes de tocar tu web, espera al final del despliegue, luego una semana, y compara con una semana anterior al inicio.',
    authorIntro: 'Herramienta creada por',
    authorBio:
      'desarrollador freelance cerca de Rennes, Francia. Creo y retomo webs y herramientas de gestión para pequeñas empresas.',
  },
  checker: {
    tabsLabel: 'Elegir cómo comprobar',
    exportTabLabel: 'Tengo Search Console',
    exportTabHint: 'Dejo mi exportación, veredicto con cifras',
    quizTabLabel: 'No tengo Search Console',
    quizTabHint: '5 preguntas, 1 minuto',
    updateSelectLabel: 'Actualización comparada',
    updateOptionTemplate: '{name} ({kind}, desde el {startDate})',
    updateKindLabels: { core: 'actualización general', spam: 'actualización antispam' },
    dropZoneTitle: 'Deja tu exportación de Search Console',
    dropZoneText:
      'El archivo .zip descargado desde el informe Rendimiento, o sus archivos .csv. Puedes dejar varios a la vez.',
    dropZoneButton: 'Elegir un archivo',
    dropZoneFormats: '.zip o .csv',
    privacyNote: 'Tu archivo se lee en tu navegador. No se envía nada a mi servidor, no se guarda nada.',
    readingLabel: 'Leyendo el archivo…',
    exampleButton: 'Probar con un ejemplo',
    exampleBadge: 'Ejemplo: datos ficticios',
    resetButton: 'Borrar',
    errors: {
      zipUnsupported:
        'Tu navegador no sabe abrir este .zip. Ábrelo en tu ordenador y deja aquí los archivos .csv que contiene (Dates.csv y Pages.csv), o prueba con un navegador actualizado.',
      zipUnreadable:
        'Este .zip parece dañado. Vuelve a exportarlo desde Search Console, o deja directamente sus archivos .csv.',
      noRecognizedFile:
        'Ningún archivo de Search Console reconocido. Deja el .zip del informe Rendimiento, o sus archivos Dates.csv y Pages.csv.',
    },
    exportStepsTitle: 'Cómo exportar desde Search Console',
    exportSteps: [
      'Abre Search Console, y luego el informe «Rendimiento» (menú de la izquierda, «Resultados de búsqueda»).',
      'Elige el periodo «Últimos 3 meses», o la pestaña «Comparar» para enfrentar dos periodos: así aparecen las páginas que se han movido.',
      'Haz clic en «Exportar», arriba a la derecha del informe.',
      'Elige «Descargar CSV», y deja aquí el .zip obtenido, sin abrirlo.',
    ],
    resultLabel: 'Resultado',
    idleTitle: 'Tu veredicto aparecerá aquí',
    idleText: 'Deja tu exportación, o prueba con un ejemplo para ver cómo es el resultado.',
    verdictTitles: {
      affected: 'Afectada, probablemente',
      stable: 'No afectada, según tus cifras',
      winner: 'Más bien ganadora',
      startedBefore: 'La bajada empezó antes de la actualización',
      tooEarly: 'Demasiado pronto para concluir',
      unreadable: 'Comparación imposible con este archivo',
    },
    verdictTexts: {
      affected:
        'Desde el {startDate}, tus {metric} están claramente por debajo de los mismos días de la semana de antes, cuando las semanas anteriores aguantaban. La actualización es la causa más probable. No es una sanción: no reescribas nada con prisas, comprueba primero que la web funciona, y luego mira qué páginas han bajado.',
      stable:
        'Desde el {startDate}, tus {metric} se quedan a menos del 20 % de los mismos días de la semana de antes. Nada que hacer por la actualización: sigue como antes.',
      winner:
        'Desde el {startDate}, tus {metric} están claramente por encima de los mismos días de la semana de antes. Conserva lo que funciona, y no lo cambies todo ahora.',
      startedBefore:
        'Tus {metric} ya habían bajado un 20 % o más en las semanas anteriores al {startDate}. La actualización no lo explica todo: busca primero otra causa (caída, cambio en la web, enlaces de páginas cambiados, temporada).',
      tooEarly:
        'Durante un despliegue, las cifras cambian de un día para otro. Google aconseja esperar al menos una semana después del final del despliegue antes de comparar. Vuelve entonces con una nueva exportación.',
      unreadable: 'Falta algo para comparar los días posteriores al inicio con los de antes.',
    },
    rolloutOngoingNote: 'El despliegue que empezó el {startDate} no se ha anunciado como terminado.',
    rolloutWaitNote:
      'El despliegue terminó el {endDate}: una exportación que llegue al menos al {waitUntil} dará un veredicto.',
    provisionalTemplate: 'Tendencia provisional en {days} días: {trend}.',
    trendLabels: {
      affected: 'claramente a la baja',
      stable: 'estable',
      winner: 'claramente al alza',
      startedBefore: 'a la baja, pero la bajada había empezado antes',
    },
    unreadableTexts: {
      noDates: 'No se ha encontrado el archivo «Dates». Está en el .zip exportado desde el informe Rendimiento.',
      noDaysBefore:
        'Tus datos empiezan demasiado tarde: hacen falta varias semanas antes del {startDate}. Exporta el periodo «Últimos 3 meses».',
      noTrafficBefore: 'Ningún clic ni ninguna impresión antes del {startDate} en este archivo: nada que comparar.',
      endsBeforeUpdate:
        'Tus datos se detienen antes del {startDate}, inicio de la actualización. Exporta un periodo más reciente.',
    },
    figuresTitle: 'Tus cifras',
    metricLabels: { clicks: 'clics', impressions: 'impresiones' },
    currentFigureTemplate: '{metric} desde el {startDate} ({days} días)',
    baselineFigureLabel: 'Mismos días de la semana, justo antes',
    changeFigureLabel: 'Diferencia',
    changeBeforeFigureLabel: 'Diferencia de las semanas anteriores',
    changeBeforeUnknown: 'no medible',
    pagesTitle: 'Tus páginas',
    droppedToZeroTitle: 'Caídas a cero impresiones',
    biggestDropsTitle: 'Mayores bajadas',
    biggestGainsTitle: 'Mayores subidas',
    pageImpressionsLabel: 'impresiones, antes y después',
    pagesEmptyList: 'Ninguna.',
    pagesNeedComparison:
      'Para ver las páginas que se han movido, exporta también el informe en modo «Comparar», por ejemplo los últimos 28 días frente a los 28 días anteriores.',
    pagesMissing:
      'Añade el archivo «Pages» de una exportación en modo «Comparar» para ver las páginas que se han movido.',
    disclaimer: 'Lectura automática de tus cifras, no una auditoría. Umbrales y límites en la sección «Método».',
    ctaIntro:
      '¿Una primera opinión gratis sobre tus cifras? Las miro, y te digo por dónde empezar o si es mejor esperar.',
    idleCtaIntro: '¿Sin tiempo para exportar? Descríbeme lo que ves, te doy una primera opinión gratis.',
    ctaLabels: {
      affected: 'Tener una primera opinión sobre esta bajada',
      stable: 'Hacer una pregunta',
      winner: 'Hacer una pregunta',
      startedBefore: 'Buscar la causa conmigo',
      tooEarly: 'Tener una primera opinión gratis',
      unreadable: 'Describir lo que veo',
    },
    idleCtaLabel: 'Tener una primera opinión gratis',
  },
  mobileContactBar: {
    text: '¿Una primera opinión sobre tu bajada?',
    buttonLabel: 'Contactarme',
  },
  definition: {
    anchorId: 'mise-a-jour',
    eyebrow: 'Lo que dice Google',
    title: 'Qué es una actualización de Google',
    intro: 'Seis puntos revisados el 16 de noviembre de 2026 en la documentación de Google y en su panel oficial.',
    facts: [
      {
        contextLabel: 'Varias veces al año',
        title: 'Una actualización general de la clasificación',
        text: 'Una «core update», o actualización principal, es un cambio amplio de los sistemas que clasifican los resultados de Google. Google hace varias al año, y las anuncia en su panel oficial.',
        sourceName: 'Google Search Central, actualizaciones principales de la Búsqueda de Google',
        sourceUrl: GOOGLE_CORE_UPDATES_SOURCE.url,
      },
      {
        contextLabel: 'No es una sanción',
        title: 'No apunta a ninguna web ni a ninguna página',
        text: 'Google precisa que estas actualizaciones no se dirigen a webs ni a páginas concretas. Una página que baja no tiene por qué tener un problema de contenido.',
        sourceName: 'Google Search Central, actualizaciones principales de la Búsqueda de Google',
        sourceUrl: GOOGLE_CORE_UPDATES_SOURCE.url,
      },
      {
        contextLabel: 'Hasta 2 semanas',
        title: 'Un despliegue de varios días',
        text: 'La actualización de noviembre de 2026 empezó el 10 de noviembre; Google anuncia un despliegue que puede tardar hasta dos semanas. Las de marzo y mayo de 2026 duraron 12 días cada una.',
        sourceName: 'Panel de estado de la Búsqueda de Google (Search Status Dashboard)',
        sourceUrl: GOOGLE_SEARCH_STATUS_DASHBOARD_URL,
      },
      {
        contextLabel: 'Una semana después',
        title: 'Esperar, y luego comparar',
        text: 'Google aconseja esperar al menos una semana completa después del final del despliegue, y luego comparar esa semana con una semana anterior al inicio. Desaconseja los arreglos rápidos hechos en caliente.',
        sourceName: 'Google Search Central, actualizaciones principales de la Búsqueda de Google',
        sourceUrl: GOOGLE_CORE_UPDATES_SOURCE.url,
      },
      {
        contextLabel: 'Otras causas',
        title: 'Una bajada no siempre es la actualización',
        text: 'Problema técnico (servidor, archivo robots.txt, etiqueta noindex), hackeo, acción manual por spam, enlaces de páginas cambiados en un rediseño, temporada o menor demanda: Google también enumera estas causas en su guía sobre las bajadas de tráfico.',
        sourceName: 'Google Search Central, depurar bajadas del tráfico de la Búsqueda de Google',
        sourceUrl: GOOGLE_TRAFFIC_DROPS_SOURCE.url,
      },
      {
        contextLabel: 'Recuperarse',
        title: 'Una recuperación posible, sin fecha garantizada',
        text: 'Según Google, una página puede recuperar posiciones entre dos actualizaciones, en unos días o en varios meses. Nadie puede prometer una fecha.',
        sourceName: 'Google Search Central, actualizaciones principales de la Búsqueda de Google',
        sourceUrl: GOOGLE_CORE_UPDATES_SOURCE.url,
      },
    ],
  },
  calendar: {
    anchorId: 'calendrier',
    eyebrow: 'Calendario',
    title: 'Las actualizaciones de Google en 2026',
    intro:
      'Las actualizaciones principales y antispam leídas en el panel oficial de estado de la Búsqueda de Google el 16 de noviembre de 2026. Fechas en hora del Pacífico.',
    nameColumnLabel: 'Actualización',
    detailColumnLabel: 'Fechas',
    linkColumnLabel: 'Fuente',
    linkLabel: 'Panel de Google',
    finishedTemplate: '{kind}, del {startDate} al {endDate}.',
    ongoingTemplate: '{kind}, desde el {startDate}. En curso a {readAt}.',
    kindLabels: { core: 'Actualización general', spam: 'Actualización antispam' },
  },
  reading: {
    anchorId: 'lire-le-resultat',
    eyebrow: 'Cómo leer el resultado',
    title: 'Seis veredictos, y lo que significan',
    intro:
      'Con tu exportación, la herramienta da uno de estos seis veredictos. El test de 5 preguntas dice «actualización probable», «otra causa probable» o «demasiado pronto para saberlo».',
    items: [
      {
        title: 'Afectada, probablemente',
        description:
          'Bajada del 20 % o más desde el inicio, cuando las semanas anteriores aguantaban. No reescribas con prisas: comprueba la web, y luego mira las páginas que han bajado.',
      },
      {
        title: 'No afectada',
        description: 'Menos del 20 % de diferencia, en un sentido u otro. La actualización no cambia nada para ti.',
      },
      {
        title: 'Más bien ganadora',
        description: 'Subida del 20 % o más desde el inicio. Conserva lo que funciona.',
      },
      {
        title: 'La bajada empezó antes',
        description:
          'Las semanas anteriores al inicio ya habían perdido un 20 % o más. Busca primero otra causa: caída, rediseño, enlaces cambiados, temporada.',
      },
      {
        title: 'Demasiado pronto para concluir',
        description:
          'Menos de 7 días de datos, despliegue sin terminar, o menos de una semana después del final. Se muestra la tendencia provisional, con esta reserva.',
      },
      {
        title: 'Comparación imposible',
        description:
          'Sin archivo de fechas, sin suficientes semanas antes del inicio, o sin visitas antes. El mensaje dice qué exportar.',
      },
    ],
  },
  doAndDont: {
    anchorId: 'que-faire',
    eyebrow: 'Qué hacer, qué no hacer',
    title: 'Seis reflejos durante una actualización de Google',
    intro: 'En orden. Lo más útil suele ser no cambiar nada demasiado rápido.',
    pitfallLabel: 'El error frecuente',
    items: [
      {
        title: 'Comprobar primero que la web funciona',
        text: 'Abre tu web en el móvil y en el ordenador, prueba el formulario de contacto, mira los informes «Páginas» y «Problemas de seguridad» de Search Console. Una caída o un hackeo se parecen a una actualización.',
        pitfall: 'Culpar a Google cuando la web estaba caída.',
      },
      {
        title: 'No reescribir nada por pánico',
        text: 'Google desaconseja los arreglos rápidos. Si lo cambias todo durante el despliegue, ya no sabrás qué ha influido.',
        pitfall: 'Borrar páginas o reescribir todos los títulos durante el despliegue.',
      },
      {
        title: 'Apuntar las fechas',
        text: 'Apunta el día en que empezó la bajada, y lo que cambió en la web en las semanas anteriores (rediseño, hosting, extensión, enlaces de las páginas).',
        pitfall: 'Fiarte de tu memoria un mes después.',
      },
      {
        title: 'Esperar al final, y luego una semana',
        text: 'El panel de Google indica cuándo ha terminado el despliegue. Una semana después, vuelve a exportar y compara con una semana anterior al inicio.',
        pitfall: 'Concluir al tercer día, cuando las cifras todavía se mueven.',
      },
      {
        title: 'Mirar página por página',
        text: 'Una bajada general y una bajada en dos o tres páginas no se tratan igual. El modo «Comparar» de Search Console muestra cuáles se han movido.',
        pitfall: 'Rehacerlo todo cuando solo han bajado tres páginas.',
      },
      {
        title: 'Mejorar para tus clientes, no para Google',
        text: 'Si una página ha bajado, pregúntate si responde bien a la pregunta de tus clientes: información al día, precios, zona, plazos, forma de contactarte.',
        pitfall: 'Añadir palabras clave por todas partes.',
      },
    ],
  },
  ownSite: {
    anchorId: 'mon-site',
    eyebrow: 'Experiencia propia',
    title: 'Lo que he medido en mi propia web',
    emphasizedIntro: 'Entre el 27 de octubre y el 12 de noviembre de 2026,',
    text: '23 páginas de dibodev.fr, en francés, inglés y español, perdieron todas sus impresiones de un día para otro, aunque seguían indexadas. Más de la mitad cayeron antes del 10 de noviembre: la actualización es el contexto probable, no una causa demostrada. Decidí no retocar ninguna de esas páginas antes del final del despliegue, y comparar una semana después.',
    footnote: '',
  },
  method: {
    eyebrow: 'Método',
    title: 'Método y límites',
    intro: 'Umbrales sencillos, escritos aquí para que puedas rehacer el cálculo a mano.',
    steps: [
      {
        label: 'Días comparados',
        title: 'Un lunes frente a un lunes',
        description:
          'Los días desde el inicio de la actualización, cinco semanas como mucho, se comparan con los mismos días de la semana justo antes: se retrocede un número entero de semanas. El último día del archivo se deja fuera: Google aún no ha terminado de contarlo.',
      },
      {
        label: 'Medida',
        title: 'Clics, o impresiones',
        description:
          'Los clics cuando hay al menos 100 en el periodo anterior; si no, las impresiones, más numerosas y menos sensibles al azar.',
      },
      {
        label: 'Umbrales',
        title: '20 %, en un sentido u otro',
        description:
          'Bajada del 20 % o más: afectada. Subida del 20 % o más: ganadora. Entre ambas: estable. Si las semanas anteriores ya habían perdido un 20 % o más frente a las semanas de antes, el veredicto pasa a «la bajada empezó antes».',
      },
      {
        label: 'Prudencia',
        title: 'Demasiado pronto, mientras se mueva',
        description:
          'Menos de 7 días de datos, despliegue sin terminar, o menos de una semana después del final: «demasiado pronto», con la tendencia provisional desde 3 días.',
      },
      {
        label: 'Páginas',
        title: 'Solo en modo comparación',
        description:
          'Una página «caída a cero» tenía al menos 10 impresiones en el periodo anterior y ninguna después. Diez páginas como mucho por lista, ordenadas por impresiones perdidas o ganadas.',
      },
      {
        label: 'Límites',
        title: 'Una lectura, no un diagnóstico',
        description:
          'La herramienta no conoce ni tu sector, ni la temporada, ni los festivos, ni tus caídas. El test de 5 preguntas da una tendencia, nunca una certeza.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Actualización de Google: las preguntas que me hacen',
    questions: [
      {
        question: '¿Cómo saber si mi web se ha visto afectada por la actualización de Google?',
        answer:
          'Compara tus clics e impresiones desde el inicio de la actualización con los mismos días de la semana de antes, en el informe Rendimiento de Search Console. La herramienta de esta página lo hace por ti a partir de la exportación. Una bajada del 20 % o más, que no había empezado antes, hace probable la actualización. Para concluir, espera una semana después del final del despliegue.',
      },
      {
        question: '¿Cuánto dura una actualización de Google?',
        answer:
          'Google suele anunciar un despliegue que puede tardar hasta dos semanas. En 2026, las actualizaciones principales de marzo y mayo duraron 12 días cada una, y la actualización antispam de septiembre 14 días. La de noviembre empezó el 10 de noviembre de 2026: su fecha de fin aparece en el panel de Google.',
      },
      {
        question: '¿Qué es una core update?',
        answer:
          'Es el nombre en inglés de una actualización principal: un cambio amplio de los sistemas que clasifican los resultados de Google, hecho varias veces al año. No apunta a ninguna web en concreto. Unas páginas suben, otras bajan, sin que las segundas tengan por qué tener un fallo.',
      },
      {
        question: 'Mi web ha desaparecido de Google, ¿es una sanción?',
        answer:
          'Una actualización principal no es una sanción. Si tu web ya no aparece ni siquiera al escribir el nombre de tu empresa, busca más bien un problema técnico (página bloqueada, web caída), un hackeo o una acción manual: los informes «Acciones manuales» y «Problemas de seguridad» de Search Console te lo dicen.',
      },
      {
        question: '¿Hay que modificar las páginas durante una actualización?',
        answer:
          'No. Google desaconseja los arreglos rápidos, y un cambio durante el despliegue enturbia la comparación. Corrige solo lo que está roto (formulario, página con error, enlace muerto), y deja el resto para después.',
      },
      {
        question: '¿Cuándo va a recuperarse mi web?',
        answer:
          'Nadie puede prometerlo. Según Google, una página puede recuperar posiciones entre dos actualizaciones, en unos días o en varios meses, si se vuelve más útil para quien la lee. La recuperación no está garantizada.',
      },
      {
        question: '¿Qué diferencia hay entre una actualización general y una actualización antispam?',
        answer:
          'La actualización general (core update) revisa la clasificación de todo tipo de páginas. La actualización antispam apunta a las webs que no respetan las políticas de Google contra el spam. El panel de Google las enumera por separado, con sus fechas.',
      },
      {
        question: '¿Cómo exporto mis datos de Search Console?',
        answer:
          'En el informe «Rendimiento», elige el periodo «Últimos 3 meses» (o la pestaña «Comparar»), haz clic en «Exportar» arriba a la derecha, y luego en «Descargar CSV». Obtienes un .zip que puedes dejar tal cual en la herramienta.',
      },
      {
        question: '¿Se envía mi archivo a algún sitio?',
        answer:
          'No. El .zip lo abre y lo lee tu navegador, en tu ordenador. No se envía nada a mi servidor y no se guarda nada: cierras la página y todo desaparece.',
      },
      {
        question: 'No tengo Search Console, ¿cómo puedo saberlo?',
        answer:
          'Responde al test de 5 preguntas de la pestaña «No tengo Search Console»: da una tendencia (actualización probable, otra causa probable, o demasiado pronto para saberlo). Para un veredicto con cifras, Search Console es gratuito: basta con añadir tu web.',
      },
      {
        question: 'Mis visitas bajan, pero no mis posiciones en Google: ¿de dónde viene?',
        answer:
          'A menudo de otro sitio que no es Google: temporada, menor demanda, caída, formulario de contacto roto, o tráfico de otra fuente (redes sociales, directorio, publicidad). Compara con el mismo periodo del año pasado y revisa la web.',
      },
    ],
  },
  relatedArticles: {
    title: 'Lee también',
    intro: 'Artículos sobre la visibilidad y la seguridad de las webs de pequeñas empresas.',
  },
  contactCta: {
    title: '¿Han caído tus visitas desde Google?',
    description:
      'Mándame el enlace de tu web y lo que ves: te respondo en 24 horas con una primera opinión gratis, y te digo si es mejor esperar.',
    button: 'Pedir una primera opinión',
  },
}
