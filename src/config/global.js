export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad:
      'Corrientes de pensamiento económico y evaluación del riesgo país',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Escuelas de pensamiento económico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Escuela clásica y neoclásica',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Escuela Marxista y Keynesiana',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Escuela Austriaca y Neoschumpeteriana',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Escuela institucionalista y conductista',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Calificación de riesgo país',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto de riesgo país',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Factores determinantes del riesgo país',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Impacto del riesgo país en la economía',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Acemoglu, D. Laibson, D. & List, J. A. (2017). Economía: ( ed.). Antoni Bosch editor.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/129484',
    },
    {
      referencia: 'Eggers, F. G. (2018). Economía: ( ed.). Editorial Maipue.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/145751',
    },
    {
      referencia:
        'Rodríguez Sánchez, A. M. (2015). Economía 2: ( ed.). Grupo Editorial Patria.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/40420',
    },
    {
      referencia:
        'Rodríguez Sánchez, A. M. (2015). Economía 1: ( ed.). Grupo Editorial Patria.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/40388',
    },
    {
      referencia:
        'Godelier, M. (2012). Antropología y economía: ( ed.). B - Editorial Anagrama.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/48230',
    },
    {
      referencia:
        'María O´Kean, J. (2015). Economía: ( ed.). McGraw-Hill España.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/50271',
    },
    {
      referencia:
        'Cue Mancera, A. (2015). Economía internacional: ( ed.). Grupo Editorial Patria.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/39382',
    },
  ],
  glosario: [
    {
      termino: 'Calificación de riesgo país',
      significado:
        'Indicador que mide la capacidad de un país para cumplir con sus obligaciones financieras y su estabilidad económica y política.',
    },
    {
      termino: 'Ciclo económico',
      significado:
        'Fluctuaciones en la actividad económica caracterizadas por periodos de expansión y recesión.',
    },
    {
      termino: 'Crecimiento económico',
      significado:
        'Aumento sostenido del Producto Interno Bruto (PIB) de un país, reflejando una mayor producción y consumo de bienes y servicios.',
    },
    {
      termino: 'Destrucción creativa',
      significado:
        'Concepto de Schumpeter que describe cómo la innovación reemplaza estructuras económicas obsoletas, impulsando el crecimiento.',
    },
    {
      termino: 'Deuda pública',
      significado:
        'Obligaciones financieras del gobierno que resultan de la emisión de bonos y otros instrumentos de financiamiento.',
    },
    {
      termino: 'División del trabajo',
      significado:
        'Proceso en el que la producción se especializa en diferentes tareas para aumentar la eficiencia y productividad.',
    },
    {
      termino: 'Economía conductual',
      significado:
        'Campo de la economía que estudia cómo factores psicológicos y emocionales afectan la toma de decisiones económicas.',
    },
    {
      termino: 'Economía institucionalista',
      significado:
        'Corriente que enfatiza el papel de las instituciones y normas sociales en la configuración del comportamiento económico.',
    },
    {
      termino: 'Economía neoschumpeteriana',
      significado:
        'Teoría que resalta la innovación y el emprendimiento como principales motores del desarrollo económico.',
    },
    {
      termino: 'Elasticidad del precio',
      significado:
        'Medida de la respuesta de la cantidad demandada u ofrecida ante cambios en el precio de un bien o servicio.',
    },
    {
      termino: 'Escuela Austriaca',
      significado:
        'Corriente de pensamiento económico que enfatiza la libertad de mercado, la información descentralizada y el individualismo.',
    },
    {
      termino: 'Escuela Clásica',
      significado:
        'Teoría económica que sostiene que los mercados se autorregulan y la intervención del Estado debe ser mínima.',
    },
    {
      termino: 'Escuela Keynesiana',
      significado:
        'Enfoque que propone la intervención del Estado en la economía para estabilizar la demanda y el empleo.',
    },
    {
      termino: 'Escuela Marxista',
      significado:
        'Corriente que analiza el capitalismo desde una perspectiva de lucha de clases y distribución de la riqueza.',
    },
    {
      termino: 'Inflación subyacente',
      significado:
        'Medida de la inflación que excluye los precios de bienes y servicios más volátiles para captar tendencias de largo plazo.',
    },
    {
      termino: 'Innovación disruptiva',
      significado:
        'Introducción de nuevas tecnologías o modelos de negocio que transforman industrias y desplazan productos tradicionales.',
    },
    {
      termino: 'Intervención estatal',
      significado:
        'Regulación y participación del gobierno en la economía para corregir fallos del mercado y promover el bienestar social.',
    },
    {
      termino: 'Mano invisible',
      significado:
        'Metáfora de Adam Smith que explica cómo el interés individual en los mercados libres puede generar bienestar social.',
    },
    {
      termino: 'Política monetaria expansiva',
      significado:
        'Estrategia del banco central que reduce tasas de interés y aumenta la oferta monetaria para estimular la economía.',
    },
    {
      termino: 'Ventaja comparativa',
      significado:
        'Teoría de David Ricardo que sostiene que los países deben especializarse en producir bienes en los que tienen menor costo relativo.',
    },
  ],
}
