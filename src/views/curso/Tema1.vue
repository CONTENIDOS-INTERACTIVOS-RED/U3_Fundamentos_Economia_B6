<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Escuelas de pensamiento económico'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-7

        p(data-aos="fade-left").mb-4 Contenido del primer párrafo
    
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
        p(data-aos="fade-left").mb-4 Contenido del primer párrafo
    
    
        .bg-color-6.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Contenido del bloque con icono
    
        p(data-aos="fade-left").mb-4 Contenido del segundo párrafo
    
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
              h5 Título del slide 1
              p Contenido del slide 1
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-2.png")
            .col-lg-7
              h5 Título del slide 2
              p Contenido del slide 2
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slide-3.png")
            .col-lg-7
              h5 Título del slide 3
              p Contenido del slide 3
    
    

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
        

          .col-lg-7
        
            LineaTiempoD.color-primario.large(data-aos="fade-right")
              p(numero="1" titulo="Título paso 1") Contenido paso 1
              p(numero="2" titulo="Título paso 2") Contenido paso 2
              p(numero="3" titulo="Título paso 3") Contenido paso 3



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
                    p.mb-0 Estas pruebas pueden ser adquiridas a proveedores o desarrolladas internamente. Es fundamental que aporten valor al proceso y sean acordes con los requerimientos del perfil.
            .bg-color-11.px-4
              .row.align-items-center
                .col-lg
                  .py-4
                    p.mb-0 Estas pruebas pueden ser adquiridas a proveedores o desarrolladas internamente. Es fundamental que aporten valor al proceso y sean acordes con los requerimientos del perfil.
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
            p.mb-4(data-aos="fade-right") En el PDF Escuela Marxista y Keynesiana, se analizan dos enfoques fundamentales que han marcado la teoría económica: el marxismo, que critica la estructura del capitalismo y propone su transformación, y el keynesianismo, que defiende la intervención estatal para corregir sus fallas y evitar crisis económicas. A través de este estudio, se explorarán sus principios, impacto y relevancia en la formulación de políticas económicas contemporáneas.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Título del anexo

    
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
          p(numero="1" titulo="Título paso 1") Contenido paso 1
          p(numero="2" titulo="Título paso 2") Contenido paso 2
          p(numero="3" titulo="Título paso 3") Contenido paso 3
    

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
              h5 Título del slide 1
              p Contenido del slide 1
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-2-2.png")
            .col-lg-7.order-lg-1
              h5 Título del slide 2
              p Contenido del slide 2
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-3-2.png")
            .col-lg-7.order-lg-1
              h5 Título del slide 3
              p Contenido del slide 3
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-4-2.png")
            .col-lg-7.order-lg-1
              h5 Título del slide 4
              p Contenido del slide 4
    

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
            p.mb-4(data-aos="fade-right") En el PDF Escuela institucionalista y conductista, se analizan dos corrientes que han transformado la comprensión de los mercados: el institucionalismo, que resalta el papel de las reglas, normas y estructuras en el desarrollo económico, y la economía conductual, que estudia cómo los sesgos cognitivos y las emociones influyen en la toma de decisiones. A través de este análisis, se explorará cómo estas perspectivas han impactado el diseño de políticas públicas y estrategias empresariales en la actualidad.
    
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
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.

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
