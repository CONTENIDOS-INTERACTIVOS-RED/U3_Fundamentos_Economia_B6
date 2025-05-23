<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Escuelas de pensamiento económico'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8

        p(data-aos="fade-left").mb-4 Las diferentes corrientes económicas han surgido en respuesta a los desafíos económicos y sociales de cada época, influyendo en la manera en que los gobiernos, las empresas y los individuos toman decisiones. A lo largo de la historia, las teorías económicas han evolucionado a medida que las sociedades enfrentan cambios estructurales, desde la Revolución Industrial hasta la globalización moderna. Cada escuela de pensamiento económico ofrece una perspectiva distinta sobre el funcionamiento de los mercados, la distribución de la riqueza, el crecimiento económico y el papel del Estado en la economía. Estas ideas han dado forma a las políticas económicas que han guiado a los países en distintos momentos, determinando el rumbo de su desarrollo (Acemoglu, Laibson & List, 2017).
    
        .bg-color-1.p-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El estudio de estas corrientes permite comprender cómo se han ido desarrollando los principios económicos fundamentales y cómo han influido en la formulación de modelos económicos a lo largo del tiempo. Desde las ideas de los economistas clásicos hasta las modernas teorías keynesianas y monetaristas, cada escuela ha aportado conceptos clave que continúan influyendo en el análisis económico actual.


    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Escuela clásica y neoclásica


    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 La escuela clásica de economía, surgió en el siglo XVIII y es considerada la base del pensamiento económico moderno. Su desarrollo estuvo influenciado por el auge del comercio internacional, la Revolución Industrial y los cambios en la organización económica de las sociedades occidentales.
    
    
        .bg-color-6.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Sus principales exponentes, Adam Smith, David Ricardo y John Stuart Mill, sentaron las bases del liberalismo económico al sostener que los mercados, si se dejan operar libremente, tienden al equilibrio y generan el máximo bienestar social. Esta escuela de pensamiento defendía la mínima intervención del Estado en los asuntos económicos, argumentando que los individuos, en la búsqueda de su propio beneficio, terminan favoreciendo a la sociedad en su conjunto.
    
        p(data-aos="fade-left").mb-4 Conozcamos un poco más sobre sus exponentes:
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
    
    

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-1.png")
            .col-lg-7
              h5 Adam Smith
              p En su obra La riqueza de las naciones (1776), introdujo el concepto de la “mano invisible”, una metáfora que explica cómo los individuos, al actuar en función de su propio interés, generan resultados positivos para toda la economía, sin necesidad de una intervención estatal directa. Según esta teoría, los mercados pueden autorregularse a través de la interacción de la oferta y la demanda, permitiendo que los precios se ajusten de manera natural. Smith también defendió la división del trabajo como un factor clave para aumentar la eficiencia productiva, dado que permitía la especialización de los trabajadores, la mejora en los procesos productivos y la reducción de costos. (Eggers, 2018).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-2.png")
            .col-lg-7
              h5 David Ricardo
              p Profundizó en la distribución de la riqueza y el comercio internacional, con su teoría de la ventaja comparativa. Argumentó que los países deberían especializarse en la producción de aquellos bienes en los que tienen menores costos de producción en relación con otros países, lo que maximizaría la eficiencia global del comercio y beneficiaría a todas las naciones involucradas. La ventaja comparativa sigue siendo un principio fundamental en la economía moderna y justifica la liberalización del comercio internacional.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-3.png")
            .col-lg-7
              h5 John Stuart Mill
              p Amplió estas ideas al incorporar reflexiones sobre la justicia social y el papel del Estado en la economía. Aunque seguía la tradición clásica de defensa de los mercados libres, reconoció que, en algunos casos, la intervención estatal era necesaria para corregir desigualdades económicas y garantizar condiciones equitativas para todos los participantes en la economía. Mill enfatizó la importancia de las instituciones democráticas y la educación como herramientas para mejorar la equidad y el desarrollo económico a largo plazo.
    
    

    .row.align-items-center.mb-5
      .col-lg
        p.mb-0 A finales del siglo XIX, la escuela neoclásica evolucionó a partir del pensamiento clásico, introduciendo un análisis más detallado del comportamiento individual y los mecanismos de toma de decisiones económicas. Mientras que los economistas clásicos se centraban en la producción y la distribución, los neoclásicos pusieron énfasis en el estudio del consumo y la formación de precios en los mercados. Esta nueva perspectiva llevó a la formulación de modelos matemáticos más precisos para explicar la interacción entre consumidores y productores.
      .col-lg-auto
        img(src="@/assets/curso/tema1/5.svg").mx-auto


    .bg-full-width.bg-fondo-1.mb-4
      .p-4.p-md-5
        .row.align-items-center
          .col-lg-5
            figure
              img(src="@/assets/curso/tema1/6.svg", alt="", data-aos="zoom-in").mb-4.mb-lg-0
        

          .col-lg-7.mb-5
        
            LineaTiempoD.color-primario.large(data-aos="fade-right")
              p(numero="1" titulo="Paso 1") Economistas como William Stanley Jevons, Carl Menger y Léon Walras, fueron pioneros en la introducción del concepto de utilidad marginal, el cual explica cómo los consumidores asignan sus recursos en función de la satisfacción adicional que obtienen al consumir una unidad extra de un bien o servicio. Esta teoría permitió una mejor comprensión de la formación de los precios y la manera en que los consumidores toman decisiones económicas.
              p(numero="2" titulo="Paso 2") Alfred Marshall, en su obra Principios de Economía (1890), desarrolló el análisis de la oferta y la demanda, estableciendo que el precio de un bien se determina en la intersección de estas dos fuerzas. Su trabajo introdujo herramientas analíticas fundamentales para el desarrollo de la microeconomía, centrándose en el comportamiento de los consumidores y las empresas como agentes individuales dentro del mercado. Marshall también hizo aportes al concepto de elasticidad, que mide la sensibilidad de la demanda y la oferta ante cambios en los precios (Eggers, 2018).
              p(numero="3" titulo="Paso 3") Los economistas neoclásicos enfatizaron la importancia de la competencia como mecanismo para lograr una asignación eficiente de los recursos. En un mercado competitivo, los productores buscan maximizar sus beneficios al ofrecer bienes y servicios de mejor calidad y a precios competitivos, lo que impulsa la innovación y el crecimiento económico. Desde esta perspectiva, la intervención estatal en la economía, debe ser mínima, pues cualquier regulación excesiva puede distorsionar los incentivos y generar ineficiencias en los mercados.



        .bg-color-5.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") A pesar de sus diferencias, tanto la escuela clásica como la neoclásica, compartían la creencia en la eficiencia de los mercados y en la capacidad del sistema de precios para regular la economía de manera óptima. Sin embargo, los neoclásicos avanzaron en el análisis matemático y en la formulación de modelos formales para describir el comportamiento económico, sentando las bases del pensamiento económico moderno y facilitando el desarrollo de herramientas como el equilibrio general y la teoría del consumidor.
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/7.png', alt='')
    

        .row.align-items-center.mb-5
          .col-lg-auto
            img(src="@/assets/curso/tema1/8.svg").mx-auto
          .col-lg
            p.mb-0 El impacto de estas corrientes económicas ha sido significativo en la formulación de políticas económicas a lo largo del tiempo. La creencia en la autorregulación de los mercados, ha influido en las decisiones de muchos gobiernos para implementar políticas de libre mercado, reducción de regulaciones y privatización de empresas estatales. Sin embargo, la historia ha demostrado que la falta de regulación en ciertos sectores puede generar crisis financieras, desigualdades sociales y fallos de mercado, lo que ha llevado a cuestionamientos sobre la viabilidad de un mercado totalmente libre.
      

        .row.justify-content-center.align-items-center 
          .col-lg-10

            .bg-color-4.p-4
              p.text-center.mb-0 #[strong El legado de la escuela clásica y neoclásica, sigue vigente en la economía contemporánea.]

            .bg-color-7.px-4
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema1/9.svg").mx-auto
                .col-lg
                  .py-4
                    p.mb-0 Sus principios fundamentan muchas de las políticas económicas adoptadas por países alrededor del mundo y continúan siendo objeto de estudio y debate en la academia. No obstante, las crisis económicas y los desafíos globales, como la desigualdad social y el cambio climático, han dado lugar a nuevas corrientes de pensamiento que cuestionan la idea de que los mercados pueden autorregularse sin intervención estatal.
            .bg-color-11.px-4
              .row.align-items-center
                .col-lg
                  .py-4
                    p.mb-0 Esto ha impulsado el desarrollo de enfoques más intervencionistas, como el keynesianismo y la economía del bienestar, que buscan combinar los principios del libre mercado con mecanismos de regulación y redistribución que favorezcan el equilibrio económico y la estabilidad social.
                .col-lg-auto
                  img(src="@/assets/curso/tema1/10.svg").mx-auto

    .bg-full-width.bg-color-8.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white A lo largo de los siglos, las ideas de la escuela clásica y neoclásica han servido como base para el desarrollo de la teoría económica moderna, proporcionando herramientas analíticas esenciales para entender el funcionamiento de los mercados y la toma de decisiones económicas. Aunque el debate sobre el papel del Estado en la economía sigue abierto, el estudio de estas escuelas permite comprender los fundamentos del sistema económico actual y evaluar cómo las políticas económicas pueden adaptarse a los desafíos del futuro.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Escuela Marxista y Keynesiana

    p(data-aos="fade-left").mb-4 A lo largo de la historia, distintas corrientes de pensamiento han intentado explicar el funcionamiento del capitalismo y el papel del Estado en la economía.

    .bg-full-width.bg-color-info.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/12.png', alt='')
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Escuela Marxista y Keynesiana 
            p.mb-4(data-aos="fade-right") En el PDF #[strong Escuela Marxista y Keynesiana], se analizan dos enfoques fundamentales que han marcado la teoría económica: el marxismo, que critica la estructura del capitalismo y propone su transformación, y el keynesianismo, que defiende la intervención estatal para corregir sus fallas y evitar crisis económicas. A través de este estudio, se explorarán sus principios, impacto y relevancia en la formulación de políticas económicas contemporáneas.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Escuela Marxista y Keynesiana.

    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Escuela Austriaca y Neoschumpeteriana


    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 La escuela austriaca de economía surgió a finales del siglo XIX y principios del siglo XX como una reacción a las teorías económicas predominantes en la época. Su enfoque se basa en el análisis del comportamiento individual y en la importancia del conocimiento descentralizado dentro de los mercados.
    
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Sus principales exponentes, Ludwig von Mises y Friedrich Hayek, argumentaron que la economía debe ser entendida como un proceso dinámico impulsado por las decisiones individuales y la interacción de los agentes económicos.
    
        p(data-aos="fade-left").mb-4 Desde esta perspectiva, los mercados funcionan de manera eficiente cuando los individuos tienen libertad para intercambiar bienes y servicios sin intervención estatal. La escuela austriaca rechaza la idea de que los gobiernos pueden planificar y regular la economía de manera efectiva, ya que sostiene que la información necesaria para tomar decisiones económicas se encuentra dispersa entre millones de personas y no puede ser centralizada por una autoridad única. En este sentido, los economistas austriacos consideran que la intervención estatal, ya sea mediante regulaciones, impuestos o políticas monetarias expansivas, tiende a distorsionar los incentivos del mercado y a generar ineficiencias.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/14.svg", data-aos="zoom-in")
    
    
    .row.align-items-center.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/15.svg", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8

    
        LineaTiempoD.color-primario.large.verde(data-aos="fade-left")
          p(numero="1" titulo="Ludwig von Mises") En su obra La acción humana (1949), defendió el concepto de praxeología, que sostiene que la economía debe ser estudiada desde el punto de vista de la acción humana individual, en lugar de a través de modelos matemáticos abstractos. Mises criticó el socialismo y la planificación centralizada, argumentando que, sin un sistema de precios libre, los planificadores económicos no podrían asignar recursos de manera eficiente, lo que llevaría al desperdicio y a la falta de innovación.
          p(numero="2" titulo="Friedrich Hayek") En Camino de servidumbre (1944), advirtió sobre los peligros del intervencionismo estatal y la planificación económica. Para Hayek, cualquier intento de controlar el mercado inevitablemente conduce a la pérdida de libertades individuales y a la formación de sistemas autoritarios. Defendió el libre mercado como el mecanismo más eficiente para coordinar los recursos y fomentar el crecimiento económico. Además, introdujo la noción de “orden espontáneo”, según la cual las instituciones económicas y sociales emergen de manera natural a través de la interacción de los individuos sin necesidad de una regulación gubernamental (Godelier, 2012).
          p(numero="3" titulo="Teoría del ciclo económico") Uno de los aportes más relevantes de la escuela austriaca es su teoría del ciclo económico, que explica cómo las expansiones artificiales del crédito, promovidas por los bancos centrales a través de tasas de interés bajas, generan burbujas económicas insostenibles que eventualmente colapsan, provocando crisis financieras. Según esta teoría, los períodos de auge económico impulsados por políticas monetarias expansivas conducen a una mala asignación de recursos y a un sobreendeudamiento, lo que inevitablemente desemboca en recesiones profundas cuando el mercado intenta corregir los desequilibrios generados.
    

    .bg-full-width.bg-color-info.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/16.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Mientras que la escuela austriaca enfatiza la importancia de la libre competencia y la mínima intervención del Estado en la economía, la escuela neoschumpeteriana, inspirada en las ideas de Joseph Schumpeter, se enfoca en el papel de la innovación y el emprendimiento como motores del crecimiento económico.
    

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-1-2.png")
            .col-lg-7.order-lg-1
              h5 Joseph Schumpeter
              p Economista de origen austríaco, propuso una visión dinámica del capitalismo en la que el cambio y la transformación son elementos esenciales para el desarrollo de los mercados. En su obra Capitalismo, socialismo y democracia (1942), Schumpeter introdujo el concepto de “destrucción creativa”, que describe el proceso mediante el cual las innovaciones tecnológicas y organizativas reemplazan estructuras económicas obsoletas, generando crecimiento y eficiencia (Godelier, 2012).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-2-2.png")
            .col-lg-7.order-lg-1
              h5 Escuela neoschumpeteriana
              p Expande esta idea al considerar que la innovación no solo se limita al ámbito tecnológico, sino que también incluye cambios en los modelos de negocio, en las estructuras de mercado y en la gestión empresarial. Desde esta perspectiva, el progreso económico no ocurre de manera uniforme, sino a través de ciclos de disrupción y adaptación. Los avances en industrias como la informática, la biotecnología y la energía renovable han demostrado que la destrucción creativa sigue siendo un fenómeno clave en la evolución de la economía moderna.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-3-2.png")
            .col-lg-7.order-lg-1
              h5 Papel del emprendedor
              p Para Schumpeter, el papel del emprendedor es fundamental en este proceso, porque es el agente que introduce innovaciones y desafía el statu quo. A diferencia de las teorías económicas tradicionales, que consideran a las empresas como entidades que buscan maximizar beneficios dentro de un entorno estable, la visión neoschumpeteriana sostiene que las empresas más exitosas son aquellas que logran reinventarse constantemente y adaptarse a los cambios del mercado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-4-2.png")
            .col-lg-7.order-lg-1
              h5 nversión en investigación y desarrollo (I+D)
              p Los neoschumpeterianos también destacan la importancia de la inversión en investigación y desarrollo (I+D) como factor determinante del crecimiento a largo plazo. En un mundo donde la tecnología avanza rápidamente, las economías que promueven la innovación y el desarrollo científico tienden a generar mayor riqueza y bienestar. Esto ha llevado a que muchos países implementen políticas de estímulo a la innovación, como incentivos fiscales para la inversión en tecnología y la creación de ecosistemas de emprendimiento.
    

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/17.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A pesar que la escuela austriaca y la neoschumpeteriana parten de enfoques distintos, ambas comparten la idea de que la economía es un sistema dinámico en constante evolución. Mientras que la escuela austriaca enfatiza la importancia de los mercados libres y la mínima intervención estatal, la escuela neoschumpeteriana resalta el papel del cambio tecnológico y la innovación como factores claves del desarrollo.
    
        p(data-aos="fade-left").mb-4 En la economía actual, ambas perspectivas han influido en el diseño de políticas económicas y en la formulación de estrategias empresariales. Por un lado, la visión austriaca ha sido utilizada como base para justificar la liberalización de mercados y la reducción del papel del Estado en la economía, especialmente en países que han implementado reformas orientadas al libre comercio y la desregulación. Por otro lado, la visión neoschumpeteriana ha impulsado el desarrollo de políticas de fomento a la innovación y la creación de incentivos para el emprendimiento, reconociendo que la competitividad de las naciones depende cada vez más de su capacidad de adaptarse a los cambios tecnológicos.
    

    .bg-full-width.image-out-bg
      .px-4.px-md-5
        .row.align-items-center
          .col-lg
            .pt-4.pt-lg-5
              p.mb-0 En conclusión, la escuela austriaca y la neoschumpeteriana, representan dos enfoques distintos pero complementarios sobre el funcionamiento de la economía. Mientras que los austriacos defienden la idea de que los mercados deben operar con la menor intervención posible para garantizar una asignación eficiente de los recursos, los neoschumpeterianos argumentan que la innovación es el principal motor del crecimiento y que los gobiernos pueden desempeñar un papel estratégico en la promoción del desarrollo tecnológico.
          .col-lg-auto
            img(src="@/assets/curso/tema1/18.svg", style="max-width: 400px").mx-auto
    .bg-full-width.bg-color-7.p-4
      p.mb-0 Ambas corrientes han dejado un legado significativo en el pensamiento económico y continúan siendo referencia para el análisis de las dinámicas del mercado y la formulación de políticas económicas en el siglo XXI.


    #t_1_4.titulo-segundo(data-aos="flip-up").mt-5
      h2 #[span 1.4] Escuela institucionalista y conductista

    p A lo largo del tiempo, la economía ha evolucionado incorporando enfoques que van más allá de los modelos tradicionales basados en la racionalidad absoluta de los agentes económicos.

    .bg-full-width.bg-color-info
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/19.png', alt='')
    
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Escuela institucionalista y conductista 
            p.mb-4(data-aos="fade-right") En el PDF #[strong Escuela institucionalista y conductista], se analizan dos corrientes que han transformado la comprensión de los mercados: el institucionalismo, que resalta el papel de las reglas, normas y estructuras en el desarrollo económico, y la economía conductual, que estudia cómo los sesgos cognitivos y las emociones influyen en la toma de decisiones. A través de este análisis, se explorará cómo estas perspectivas han impactado el diseño de políticas públicas y estrategias empresariales en la actualidad.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Escuela institucionalista y conductista
    

    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/51673" target="_blank" rel="noopener noreferrer") Oñoro Martínez, R. C. (2012). Estado y economía política: ( ed.). B - EUMED. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/49120" target="_blank" rel="noopener noreferrer") Torres López, J. A. (2016). Economía política: (5 ed.). Difusora Larousse - Ediciones Pirámide.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/59660" target="_blank" rel="noopener noreferrer") Perdices de Blas, L. (2006). Economía y literatura: ( ed.). Ecobook - Editorial del Economista. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=DpSOmDuyc6w" target="_blank" rel="noopener noreferrer") videoconferencias. (2013, 28 de mayo). UTPL PRECURSORES DE LA ESCUELA CLÁSICA (ECONOMÍA)( HISTORIA DEL PENSAMIENTO ECONÓMICO)]. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.image-out-bg
  position: relative
  &::after
    content: ''
    position: absolute
    bottom: 0%
    left: 0
    width: 100%
    height: 85%
    transform: translateY(-0%)
    background-color: #E4F2F4
    z-index: 0
  .col-lg-auto, .col-lg, .row
    z-index: 1


  @media screen and (max-width: bp-max-md)
    padding: 1rem

    &::after
      height: 100%
</style>
