import type { DibodevTownHallWebsitesStudyPageContent } from '~/core/types/DibodevTownHallWebsitesStudyPage'
import { JOOMLA_VERSION_SOURCES } from '~/core/constants/joomlaVersionCheck/pageShared'
import { TOWN_HALL_WEBSITES_STUDY_SOURCES } from '~/core/constants/townHallWebsitesStudy/pageShared'

/** Every figure below comes from the stats.md of the 15-16 November 2026 survey: update them by hand after a new survey. */
export const TOWN_HALL_WEBSITES_STUDY_PAGE_CONTENT_ES: DibodevTownHallWebsitesStudyPageContent = {
  meta: {
    title: 'Webs de los ayuntamientos franceses: ¿al día? Estudio 2026',
    description:
      '19.854 webs de ayuntamientos franceses leídas el 15 y 16 de noviembre de 2026: WordPress, versiones de PHP y Joomla, https, por departamento y límites.',
    datasetName: 'Webs de los ayuntamientos franceses, recogida del 15 y 16 de noviembre de 2026',
    datasetDescription:
      'Cifras agregadas por departamento francés sobre las webs que los ayuntamientos declaran en el directorio oficial de la administración francesa: ayuntamientos, ayuntamientos sin web declarada, webs leídas, cuota de WordPress y de Joomla, webs que muestran su versión de PHP y, entre ellas, las que usan una versión que ya no recibe correcciones de seguridad. Ningún municipio ni dirección de web.',
  },
  breadcrumbLabel: 'Webs de los ayuntamientos franceses',
  numberLocale: 'es-ES',
  percentTemplate: '{value} %',
  hero: {
    titlePart1: '¿Están al día las webs de los ',
    titleHighlight: 'ayuntamientos franceses',
    titlePart2: '?',
    description:
      'El 15 y 16 de noviembre de 2026 leí una vez la página de inicio de cada web propia que los ayuntamientos de Francia declaran en el directorio oficial de la administración, como cualquier visitante. Respondieron 19.854 webs. Esto es lo que dejan ver de su software, con la base de cada cifra. Dos cosas antes de leer: la versión de PHP solo se ve en una web de cada cuatro, y no se cita ningún municipio.',
    cta: 'Ver la versión de PHP de una web',
    ctaSecondary: 'Ver las cifras por departamento',
    reassurances: [
      'Cifras agregadas, ningún municipio citado',
      'Recogida del 15 y 16 de noviembre de 2026',
      'Datos por departamento (CSV, CC BY)',
    ],
    stats: [
      { value: '19.854', label: 'webs de ayuntamientos leídas' },
      { value: '48,3 %', label: 'con WordPress' },
      { value: '35,6 %', label: 'sin correcciones de PHP, de 4887 webs' },
    ],
  },
  keyFigures: {
    eyebrow: 'Las cifras clave',
    title: 'Lo que dejan ver las webs de los ayuntamientos franceses',
    intro:
      'Cada cifra va con su base, es decir, el número de webs sobre el que se calcula. Una web, aquí, es una dirección distinta: un municipio nuevo o una mancomunidad puede llevar la web de varios ayuntamientos.',
    indicatorColumnLabel: 'Qué se cuenta',
    basisColumnLabel: 'Sobre qué base',
    resultColumnLabel: 'Resultado',
    items: [
      {
        name: 'Ayuntamientos en el directorio oficial',
        coverage:
          'Todas las fichas «ayuntamiento» del directorio de la administración francesa, en 101 departamentos, ultramar incluido (803 de ellas, ayuntamientos delegados o anexos).',
        price: '35.733',
        priceCondition:
          '13.363 sin web declarada, 728 que remiten a una página de Facebook o a una plataforma prefabricada, 21.642 que declaran una web propia',
      },
      {
        name: 'Webs leídas',
        coverage:
          'Las 20.865 webs distintas declaradas por esos 21.642 ayuntamientos, una lectura de la página de inicio cada una.',
        price: '19.854',
        priceCondition:
          'El 95,2 % de las 20.865; 1011 no respondieron bien (respuesta con error, dominio no encontrado, certificado no válido, tiempo agotado)',
      },
      {
        name: 'WordPress',
        coverage: 'Las 19.854 webs leídas.',
        price: '48,3 %',
        priceCondition:
          '9592 webs. Muy por detrás: Joomla 4,0 % (798), Drupal 3,4 % (670), TYPO3 3,3 % (648), SPIP 1,0 % (206); 16,6 % (3299) sin identificar',
      },
      {
        name: 'Versión de PHP visible',
        coverage: 'Las 19.854 webs leídas.',
        price: '24,6 %',
        priceCondition: '4887 webs, una de cada cuatro. Las cifras de PHP que siguen solo valen para ellas',
      },
      {
        name: 'PHP que ya no recibe correcciones de seguridad',
        coverage: 'Las 4887 webs que muestran su versión de PHP. Sin correcciones: PHP 8.1 y anteriores.',
        price: '35,6 %',
        priceCondition: '1739 webs: PHP 5.x 361, PHP 7.0 a 7.3 384, PHP 7.4 684, PHP 8.0 140, PHP 8.1 170',
      },
      {
        name: 'PHP 8.2',
        coverage: 'Las 4887 webs que muestran su versión de PHP.',
        price: '9,3 %',
        priceCondition:
          '454 webs, que pierden sus correcciones el 31 de diciembre de 2026. El 1 de enero de 2027, el 44,9 % (2193 de 4887) estarán sin correcciones si nada cambia',
      },
      {
        name: 'Joomla en una rama sin correcciones',
        coverage: 'Las 580 webs Joomla cuya versión se puede leer, de 798 (72,7 %).',
        price: '58,8 %',
        priceCondition: '341 webs en Joomla 1.x, 2.5, 3 o 4, de ellas 248 en Joomla 3',
      },
      {
        name: 'WordPress con dos versiones mayores de retraso o más',
        coverage:
          'Las 5155 webs WordPress cuya versión se puede leer, sin una plataforma compartida (mira el recuadro bajo la tabla).',
        price: '27,0 %',
        priceCondition: '1393 webs; el 68,9 % (3554) están en la última versión mayor, la 7.1',
      },
      {
        name: 'Sin https válido',
        coverage: 'Las 19.854 webs leídas.',
        price: '4,6 %',
        priceCondition:
          '913 webs, 682 de ellas por un certificado no válido (caducado, emitido para otro nombre…), las demás no responden en https',
      },
    ],
    calloutEmphasizedIntro: 'Lee esto antes de citar una cifra:',
    calloutText:
      'la versión de PHP solo se ve en una web de cada cuatro (4887 de 19.854), y el 35,6 % solo vale para esas webs. Una web detrás de un cortafuegos, una CDN o un alojamiento que oculta esa información no aparece, y son sobre todo los alojamientos antiguos los que muestran su versión: en el conjunto de las webs, la cuota sería probablemente más baja. No es una clasificación de municipios ni una lista de webs: no se cita ningún municipio, ni en esta página ni en el archivo.',
    calloutFootnote:
      'WordPress: 1059 webs son idénticas (misma versión 6.6.1, mismo servidor, una sola instalación compartida). Es muy probablemente una sola plataforma compartida, o sea una sola decisión técnica: la dejo aparte para hablar de webs gestionadas una a una. Contándola, la cuota con dos versiones mayores de retraso o más sería del 39,5 % (2452 de 6214).',
  },
  departments: {
    eyebrow: 'Por departamento',
    title: 'Los 15 departamentos franceses donde leí más webs',
    intro:
      'Para cada cuota, el número entre paréntesis. La cuota de PHP sin correcciones se calcula sobre las webs del departamento que muestran su versión, a menudo unas decenas: unos pocos puntos de diferencia entre dos departamentos no significan nada. Los 101 departamentos están en el archivo descargable.',
    departmentColumnLabel: 'Departamento',
    countsColumnLabel: 'Ayuntamientos y webs leídas',
    phpColumnLabel: 'PHP sin correcciones',
    nameTemplate: '{code} · {name}',
    countsTemplate:
      '{townHallCount} ayuntamientos en el directorio, {withoutDeclaredWebsiteCount} de ellos sin web declarada; {readWebsiteCount} webs leídas. WordPress: {wordpressShare} ({wordpressCount}), Joomla: {joomlaShare} ({joomlaCount}).',
    phpConditionTemplate: '{phpWithoutSecurityFixesCount} de {phpVisibleWebsiteCount} webs que muestran su PHP',
    noShareLabel: '–',
    csvEmphasizedIntro: 'Los 101 departamentos, para descargar:',
    csvText:
      'una fila por departamento, con los ayuntamientos del directorio, los que no tienen web declarada, las webs leídas, las cuotas de WordPress y de Joomla, las webs que muestran su PHP y, entre ellas, las que no tienen correcciones. Ningún municipio, ninguna dirección de web, ningún proveedor en el archivo. Licencia CC BY 4.0: cita «Dibodev, recogida del 15 y 16 de noviembre de 2026» con un enlace a esta página.',
    csvLinkLabel: 'Descargar las cifras por departamento (CSV)',
    openDataLinkLabel: 'Ver la ficha en data.gouv.fr',
    csvFootnote:
      'Números pequeños: París, Hauts-de-Seine, Seine-Saint-Denis y los departamentos de ultramar tienen menos de 40 webs leídas. Sus cuotas no se comentan solas.',
  },
  limits: {
    eyebrow: 'Límites',
    title: 'Lo que estas cifras no dicen',
    intro: 'Los pongo aquí y no al final de la página, porque cambian la forma de leer las cifras.',
    items: [
      {
        icon: 'EyeOff',
        title: 'Una web de cada cuatro muestra su PHP',
        description:
          'El 24,6 % de las webs leídas (4887 de 19.854). Las demás están detrás de un cortafuegos, una CDN como Cloudflare o un alojamiento que oculta la información. Los alojamientos antiguos la muestran más a menudo: extendida a todas las webs, la cuota «sin correcciones» estaría probablemente sobrestimada.',
      },
      {
        icon: 'Server',
        title: 'La versión que anuncia el servidor',
        description:
          'Es la que el servidor escribe en su respuesta. Un alojamiento puede servir otra sin actualizar esa línea.',
      },
      {
        icon: 'Copy',
        title: 'Grupos de webs idénticas',
        description:
          '772 webs de una misma plataforma para municipios (todas en PHP 8.4.27), 1059 webs WordPress 6.6.1 idénticas, 449 webs idénticas hechas con un mismo generador: una sola decisión técnica pesa sobre cientos de webs. Sin las plataformas para municipios, el 42,5 % de las webs que muestran su PHP están sin correcciones (1708 de 4016).',
      },
      {
        icon: 'Search',
        title: 'Webs sin identificar',
        description:
          'El 16,6 % de las webs leídas (3299) siguen sin identificar: web hecha a medida, o herramienta que no deja ninguna huella visible. 21 webs leídas al principio de la recogida no se pudieron reclasificar tras una corrección de la detección.',
      },
      {
        icon: 'RotateCcw',
        title: 'Algunos duplicados',
        description:
          '90 de las 19.854 webs leídas (0,45 %) llevan a la misma web que otra dirección (con y sin «www», o redirección a una web común) y se cuentan dos veces. Efecto en las cuotas: menos de medio punto, sin corregir.',
      },
      {
        icon: 'Flag',
        title: 'Los huecos del directorio',
        description:
          '13.363 ayuntamientos no declaran ninguna web en él, y algunos sí tienen una; un ayuntamiento también puede declarar una web caducada. La versión se ve en el 64,8 % de las webs WordPress y el 72,7 % de las webs Joomla.',
      },
    ],
  },
  actions: {
    eyebrow: 'Para qué le sirve a un ayuntamiento',
    title: 'Lo que puedes hacer por la web de tu municipio',
    intro:
      'Ver la versión de PHP, ver la de Joomla si la web lo usa, y luego planificar la actualización. Los dos primeros se hacen solo con la dirección de la web, sin acceso a su administración. El tercero se decide con el proveedor o el alojamiento.',
    items: {
      phpVersionCheck: {
        title: 'Ver la versión de PHP de la web',
        description:
          'Escribe la dirección de la web: la herramienta gratuita lee la versión de PHP cuando el servidor la muestra. PHP 8.1 y anteriores ya no reciben correcciones de seguridad, PHP 8.2 las pierde el 31 de diciembre de 2026.',
        linkLabel: 'Ver la versión de PHP',
      },
      joomlaVersionCheck: {
        title: 'Si la web usa Joomla, ver su versión',
        description:
          'Una segunda herramienta gratuita lee la versión de Joomla en el archivo público previsto para ello. Joomla 3 y Joomla 4 ya no reciben correcciones, Joomla 5 las recibe hasta el 12 de octubre de 2027.',
        linkLabel: 'Ver la versión de Joomla',
      },
      phpUpdate: {
        title: 'Planificar la actualización de PHP',
        description:
          'Antes del 31 de diciembre de 2026 si la web usa PHP 8.2 o anterior: actualizar la web y luego cambiar la versión de PHP, tras una copia de seguridad y una prueba en una copia.',
        linkLabel: 'Ver la página «actualización de PHP»',
      },
      joomlaUpdate: {
        title: 'Para una web Joomla, una versión cada vez',
        description:
          'El paso se hace rama a rama, hasta Joomla 6, que recibe correcciones de seguridad hasta el 16 de octubre de 2029. Se planifica junto con el de PHP.',
        linkLabel: 'Ver la página «actualización de Joomla»',
      },
    },
  },
  sources: {
    eyebrow: 'Las fechas',
    title: 'Los fines de soporte, leídos en la fuente',
    intro:
      'Una versión «sin correcciones», aquí, es una versión que su proyecto ya no corrige. Cada fecha enlaza con la página oficial del proyecto.',
    facts: [
      {
        contextLabel: '31 de diciembre de 2026',
        title: 'PHP 8.2 pierde sus correcciones de seguridad',
        text: 'PHP 8.3, 8.4 y 8.5 las reciben hasta el 31 de diciembre de 2027, 2028 y 2029.',
        sourceName: 'PHP, versiones con soporte',
        sourceUrl: JOOMLA_VERSION_SOURCES.phpSupportedVersions,
      },
      {
        contextLabel: '31 de diciembre de 2025',
        title: 'PHP 8.1 y anteriores: ninguna corrección',
        text: 'PHP 8.1 está al final de su vida desde el 31 de diciembre de 2025, PHP 8.0 desde el 26 de noviembre de 2023, PHP 7.4 desde el 28 de noviembre de 2022 y PHP 5.6 desde el 31 de diciembre de 2018.',
        sourceName: 'PHP, versiones sin soporte',
        sourceUrl: TOWN_HALL_WEBSITES_STUDY_SOURCES.phpEndOfLife,
      },
      {
        contextLabel: '12 de octubre de 2027',
        title: 'Joomla 5, luego Joomla 6',
        text: 'Joomla 5 recibe correcciones de seguridad hasta el 12 de octubre de 2027, Joomla 6 hasta el 16 de octubre de 2029. Últimas versiones en el momento de la recogida: 5.4.10 y 6.2.',
        sourceName: 'Joomla, calendario de versiones',
        sourceUrl: JOOMLA_VERSION_SOURCES.joomlaRoadmap,
      },
      {
        contextLabel: '14 de octubre de 2025',
        title: 'Joomla 4 ya no tiene soporte',
        text: 'Joomla 4 ya no recibe ninguna corrección desde el 14 de octubre de 2025.',
        sourceName: 'Joomla, versiones 5.3.4 y 4.4.14',
        sourceUrl: JOOMLA_VERSION_SOURCES.joomla4EndOfSupport,
      },
      {
        contextLabel: '17 de agosto de 2023',
        title: 'Joomla 3, sin soporte',
        text: 'El soporte oficial de Joomla 3 terminó el 17 de agosto de 2023. Las ramas 1.x y 2.5, más antiguas, también se cuentan sin correcciones.',
        sourceName: 'Joomla Magazine, julio de 2023',
        sourceUrl: JOOMLA_VERSION_SOURCES.joomla3ExtendedSupport,
      },
      {
        contextLabel: 'WordPress 7.1.4',
        title: 'La última versión de WordPress',
        text: 'Última versión publicada en el momento de la recogida, leída en la interfaz oficial de wordpress.org. La última versión mayor es, por tanto, la 7.1.',
        sourceName: 'WordPress.org, versiones',
        sourceUrl: TOWN_HALL_WEBSITES_STUDY_SOURCES.wordpressVersionApi,
      },
      {
        contextLabel: '15 de noviembre de 2026',
        title: 'La lista de ayuntamientos',
        text: 'Exportación completa del directorio de la administración francesa (conjunto «api-lannuaire-administration»), filtrada en las fichas «ayuntamiento».',
        sourceName: 'Directorio de la administración, service-public.fr',
        sourceUrl: TOWN_HALL_WEBSITES_STUDY_SOURCES.officialDirectory,
      },
    ],
    authorEmphasizedIntro: 'Quién hizo esta recogida:',
    authorText:
      'yo, Léo Guillaume, desarrollador freelance cerca de Rennes, en Francia. Actualizo webs con PHP, WordPress y Joomla para pequeñas empresas, autónomos y asociaciones, a distancia.',
    authorFootnote: '¿Una cifra te parece errónea? Escríbeme, la corrijo y fecho la corrección.',
  },
  method: {
    eyebrow: 'Método',
    title: 'Cómo se hizo esta recogida',
    intro:
      'Una sola lectura de la página de inicio de cada web, como cualquier visitante. Ningún intento de entrar en una web, ninguna página de acceso abierta.',
    steps: [
      {
        label: 'Lista',
        title: 'El directorio oficial, ayuntamiento por ayuntamiento',
        description:
          'Exportación completa del directorio de la administración francesa, filtrada en las fichas «ayuntamiento», leída el 15 de noviembre de 2026. Para cada ayuntamiento, la primera web declarada que no es ni una plataforma prefabricada ni una red social, y luego una sola fila por dirección de web.',
      },
      {
        label: 'Lectura',
        title: 'Una página de inicio, una vez',
        description:
          'Una sola petición de la página de inicio por web, en https y luego en http si hace falta, con 12 segundos de espera como máximo. No se guarda ninguna página, solo los pocos datos que se sacan de ella.',
      },
      {
        label: 'Herramienta',
        title: 'Lo que deja ver la página',
        description:
          'La herramienta de la web se reconoce por las huellas que deja en la página (carpetas de WordPress, Joomla, Drupal, TYPO3 o SPIP), por la etiqueta «generator» y luego por las plataformas para municipios. La versión de WordPress sale de esa etiqueta o de los archivos del núcleo.',
      },
      {
        label: 'Versiones',
        title: 'PHP y Joomla',
        description:
          'La versión de PHP sale de la información que el servidor envía con la página. Para Joomla, una segunda petición lee el archivo público de versión que Joomla instala en cada web. Nunca más de dos peticiones por web.',
      },
      {
        label: 'Control',
        title: 'Un recuento y una relectura a mano',
        description:
          'Recuento por dirección de web, cada cuota con su base. 30 webs sacadas al azar se volvieron a leer a mano el 16 de noviembre de 2026: ninguna diferencia en la herramienta, la versión ni PHP.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Webs de los ayuntamientos franceses: tus preguntas',
    questions: [
      {
        question: '¿Cómo sé qué versión de PHP usa la web de mi municipio?',
        answer:
          'Lo más sencillo: preguntárselo al proveedor o al alojamiento de la web, que la ve en su área de cliente. Sin acceso, la herramienta gratuita de esta web la lee cuando el servidor la muestra, lo que ocurre en una web de ayuntamiento de cada cuatro (4887 de 19.854 en esta recogida). Si no la muestra, eso no dice nada de la versión que usa.',
      },
      {
        question: '¿Qué pasa el 1 de enero de 2027?',
        answer:
          'PHP 8.2 deja de recibir correcciones de seguridad después del 31 de diciembre de 2026. La web sigue funcionando, pero un problema de seguridad descubierto después ya no se corregirá en esa versión. Entre las webs de ayuntamientos franceses que muestran su PHP, el 9,3 % usa PHP 8.2 (454 de 4887): si nada cambia, el 44,9 % (2193 de 4887) estará sin correcciones el 1 de enero de 2027, frente al 35,6 % de hoy.',
      },
      {
        question: '¿Por qué solo una web de cada cuatro?',
        answer:
          'Porque la mayoría de los servidores no dicen su versión de PHP: cortafuegos, CDN como Cloudflare o alojamiento que oculta la información. El 24,6 % de las webs leídas la muestran (4887 de 19.854). Los alojamientos antiguos la muestran más a menudo, así que la cuota del 35,6 % sería probablemente más baja en el conjunto de las webs. La doy por lo que es: una medida sobre una cuarta parte de las webs.',
      },
      {
        question: '¿Por qué dejar aparte 1059 webs WordPress?',
        answer:
          'Porque son idénticas: misma versión 6.6.1, mismo servidor, una sola instalación compartida. Es muy probablemente una sola plataforma compartida, o sea una sola decisión técnica, no 1059 webs gestionadas una a una. Sin ellas, el 27,0 % de las webs WordPress cuya versión se puede leer llevan dos versiones mayores de retraso o más (1393 de 5155); con ellas, el 39,5 % (2452 de 6214).',
      },
      {
        question: '¿Qué herramientas usan las webs de los ayuntamientos franceses?',
        answer:
          'WordPress, en primer lugar: el 48,3 % de las webs leídas (9592 de 19.854). Muy por detrás vienen Joomla 4,0 % (798), Drupal 3,4 % (670), TYPO3 3,3 % (648) y SPIP 1,0 % (206), junto a las plataformas para municipios y los creadores de webs. El 16,6 % (3299) siguen sin identificar.',
      },
      {
        question: '¿Cómo están las webs Joomla de los ayuntamientos?',
        answer:
          'La versión se puede leer en 580 de las 798 webs Joomla (72,7 %). El 58,8 % de ellas (341 de 580) están en una rama sin correcciones, y Joomla 3 suma él solo 248. El 20,3 % (118) ya usan Joomla 6. En cuanto a PHP, el 52,4 % de las webs Joomla que muestran su versión están sin correcciones (140 de 267).',
      },
      {
        question: '¿Está la web de mi municipio en una lista?',
        answer:
          'No se publica ninguna lista. La página y el archivo solo dan totales, para Francia y por departamento: ningún municipio, ninguna dirección de web, ningún proveedor. Para la web de tu municipio, las dos herramientas gratuitas de esta web responden a partir de su dirección.',
      },
      {
        question: '¿Se pueden reutilizar estas cifras?',
        answer:
          'Sí. Las cifras y el archivo por departamento están bajo licencia CC BY 4.0: cita «Dibodev, recogida del 15 y 16 de noviembre de 2026» con un enlace a esta página. Conserva la base de cada cifra, sobre todo para PHP: el 35,6 % de las 4887 webs que muestran su versión, no de las 19.854 webs leídas. ¿Un error? Escríbeme, lo corrijo y fecho la corrección.',
      },
    ],
  },
  relatedArticles: {
    title: 'Para ir más lejos',
    intro: 'Las guías para pasar a una versión de PHP con soporte y a Joomla 6.',
  },
  contactCta: {
    title: '¿Dudas sobre la web de tu municipio?',
    description:
      'Envíame su dirección. Te digo por escrito en 24 h qué versiones usa y qué hay que prever antes del 31 de diciembre de 2026, sin compromiso.',
    button: 'Enviar la dirección de la web',
  },
}
