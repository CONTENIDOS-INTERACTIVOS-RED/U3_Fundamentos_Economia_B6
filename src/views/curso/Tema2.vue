<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Calificación de riesgo país'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .bg-color-5.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") El riesgo país es un indicador fundamental en la economía global, que mide la capacidad de un país para cumplir con sus obligaciones financieras y honrar su deuda externa. Este concepto es crucial para inversionistas, organismos financieros internacionales y gobiernos, porque permite evaluar el nivel de estabilidad económica y política de una nación y determinar las condiciones en las que puede acceder a financiamiento externo (María O'Kean, 2015).
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema2/1.png', alt='')


      p El riesgo país influye directamente en la confianza de los mercados internacionales. Si un país tiene:

      .bg-full-width.bg-color-info
        .p-4.p-md-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema2/info.png', alt='', style="max-width: 1076px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="2%" y="35%" numero="+")
                  h5 Calificación de riesgo baja

                  p Significa que su estabilidad económica y política es favorable, lo que atrae inversiones extranjeras y permite obtener créditos con tasas de interés más bajas. 
      
                .bg-color-white.box-shadow.p-3(x="82%" y="46%" numero="+")
                  h5 Alto nivel de riesgo 
                  p Puede enfrentar dificultades para conseguir financiamiento y deberá pagar tasas de interés elevadas para compensar la percepción de inestabilidad.
      
      
      .bg-full-width.bg-color-1.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las agencias internacionales de calificación de riesgo, como Standard & Poor's (S&P), Moody's y Fitch Ratings, son las encargadas de evaluar el nivel de riesgo de cada país y asignar calificaciones que reflejan su capacidad de pago y la probabilidad de incumplimiento de una deuda. Estas calificaciones van desde las más altas, como AAA, que indican un bajo riesgo de impago y una economía estable, hasta las más bajas, como CCC o D, que representan una alta probabilidad de crisis financiera y posible incumplimiento de pagos.

      
      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
        .col-lg-7

          p(data-aos="fade-left").mb-4 Una calificación de AAA significa que un país tiene una economía sólida y estable, con instituciones confiables y una baja probabilidad de caer en morosidad. Por el contrario, una calificación como BB o B sugiere que el país enfrenta riesgos moderados o altos, lo que indica posibles dificultades para cumplir con sus compromisos financieros. En el extremo inferior, una calificación C o D refleja una situación de alto riesgo o un incumplimiento de pagos inminente.
      
          .bg-color-2.p-4(data-aos="fade-left")
            p.mb-0 Las calificaciones de riesgo país impactan directamente en la economía nacional. Cuando una nación recibe una baja calificación, los inversionistas perciben un mayor riesgo y exigen tasas de interés más altas para otorgar financiamiento. Esto encarece la deuda pública y empresarial, limita la inversión en infraestructura y dificulta el acceso a créditos internacionales. Por el contrario, un país con una alta calificación puede acceder a financiamiento en condiciones favorables, lo que impulsa el crecimiento económico y fortalece su estabilidad financiera.
      

      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Concepto de riesgo país

      
      .bg-full-width.bg-color-8.mb-5
        .px-4.px-md-5
          .row.justify-content-center.align-items-center
            .col-lg-6
              .py-4
                p(data-aos="fade-left").mb-4.text-white Para estudiar esta temática, lo invitamos a escuchar el siguiente podcast.
                
                TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                  texto="Concepto de riesgo país"
                  tiempo
                  :audio="require('../../assets/curso/podcast/podcast1.mp3')"
                )
            .col-lg-4
              figure
                img(src="@/assets/curso/tema2/4.svg", data-aos="zoom-in")


      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Factores determinantes del riesgo país


      .row.align-items-center.mb-5
        .col-lg
          p.mb-0 El riesgo país es un indicador compuesto que refleja la estabilidad económica, política y social de una nación y su capacidad para cumplir con sus obligaciones financieras en los mercados internacionales. Su evaluación involucra múltiples variables que afectan la percepción de los inversionistas y organismos financieros, sobre la solvencia de un país y su capacidad de atraer capital extranjero. A diferencia de otros indicadores macroeconómicos que analizan aspectos aislados, el riesgo país sintetiza diversos factores interrelacionados que determinan la confianza en una economía y su grado de vulnerabilidad ante crisis financieras o fluctuaciones externas (Cue Mancera, 2015).

          p Conozcamos algunos factores claves:
        .col-lg-auto
          img(src="@/assets/curso/tema2/5.svg").mx-auto    


      .row.align-items-center.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/6.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
        .col-lg-8

      
          LineaTiempoD.color-primario.large.verde(data-aos="fade-left")
            p(numero="1" titulo="Estabilidad política e institucional") Los gobiernos con instituciones sólidas, reglas claras y bajos niveles de corrupción, tienden a generar mayor confianza en los mercados financieros, dado que ofrecen previsibilidad y seguridad jurídica para las inversiones. En contraste, los países con conflictos internos, inestabilidad política o sistemas de gobierno con baja credibilidad, suelen enfrentar mayores niveles de riesgo, pues la incertidumbre sobre el futuro de sus políticas económicas desincentiva la inversión y puede generar fuga de capitales. Situaciones como golpes de Estado, cambios abruptos en la legislación económica, crisis de gobernabilidad o violaciones al Estado de derecho, incrementan la percepción de riesgo y afectan directamente la calificación del país en los mercados internacionales.
            p(numero="2" titulo="Crecimiento económico") Es otro factor clave que influye en la percepción del riesgo país. Un país con tasas sostenidas de crecimiento del Producto Interno Bruto (PIB), muestra una economía dinámica, con mayor capacidad para generar ingresos fiscales, reducir el desempleo y cumplir con sus obligaciones financieras. Cuando un país mantiene un crecimiento estable, los inversionistas perciben que hay oportunidades de negocio y que el Estado tendrá recursos suficientes para pagar su deuda externa. Sin embargo, cuando la economía entra en recesión o el crecimiento es insuficiente para cubrir las necesidades de financiamiento del gobierno, la confianza en la capacidad de pago del país, disminuye. En estos casos, los mercados internacionales pueden exigir tasas de interés más elevadas para compensar el riesgo, encareciendo el costo del financiamiento, tanto para el sector público como para el privado.
            p(numero="3" titulo="La inflación y la estabilidad") La inflación y la estabilidad del tipo de cambio también juegan un papel determinante en la evaluación del riesgo país. La inflación elevada deteriora el poder adquisitivo de la población y genera desconfianza en la moneda local, lo que puede llevar a la dolarización parcial de la economía o a la fuga de capitales. Una inflación descontrolada refleja problemas estructurales en la política económica y puede hacer que los inversionistas se alejen de un país debido a la incertidumbre sobre la estabilidad de precios. Asimismo, la volatilidad del tipo de cambio afecta la confianza de los mercados, especialmente cuando un país tiene una alta proporción de su deuda denominada en moneda extranjera. Una devaluación abrupta de la moneda nacional, puede encarecer los pagos de deuda externa y dificultar la obtención de financiamiento en los mercados internacionales.


      .row.align-items-center.mb-5
        .col-lg-8.order-2.order-lg-1

      
          LineaTiempoD.color-primario.large.verde(data-aos="fade-right")
            p(numero="4" titulo="Nivel de endeudamiento externo") Un país con altos niveles de deuda en relación con su PIB, es percibido como más riesgoso, puesto que su margen de maniobra fiscal es reducido y su capacidad de pago depende, en gran medida, de la obtención de nuevos créditos. Cuando un país acumula demasiada deuda sin un plan claro de sostenibilidad fiscal, puede entrar en un círculo vicioso de financiamiento caro y creciente presión sobre su presupuesto. Si la deuda se vuelve insostenible, el país podría enfrentar un default soberano, lo que afectaría su calificación crediticia y su acceso a financiamiento futuro. Además, la dependencia excesiva de la deuda externa expone al país a riesgos adicionales, como el impacto de cambios en las tasas de interés internacionales o la reducción del acceso a capital en tiempos de crisis global.
            p(numero="5" titulo="La gestión gubernamental y la política fiscal") También desempeñan un papel fundamental en la determinación del riesgo país. Un gobierno que administra eficientemente sus recursos, mantiene un presupuesto equilibrado y aplica políticas económicas coherentes puede reducir la percepción de riesgo y mejorar su calificación crediticia. En cambio, una mala administración de los recursos públicos, déficits fiscales persistentes o políticas económicas inconsistentes pueden aumentar la incertidumbre sobre la capacidad del país para manejar sus finanzas. Los gobiernos que implementan medidas de ajuste fiscal sin una estrategia clara o que dependen excesivamente de la emisión de deuda para cubrir su gasto público, pueden perder la confianza de los inversionistas y enfrentar dificultades para acceder a financiamiento en términos favorables.
            p(numero="6" titulo="Los factores externos") También influyen significativamente en el riesgo país. La globalización financiera ha hecho que las economías sean más interdependientes, por lo que un país puede verse afectado por factores que escapan a su control, como cambios en las tasas de interés internacionales, crisis financieras globales o variaciones en los precios de los commodities. Las economías emergentes, en particular, son más vulnerables a estos efectos, porque muchas dependen de la exportación de materias primas y de la inversión extranjera para sostener su crecimiento. Una caída en los precios del petróleo, los metales o los productos agrícolas, puede reducir drásticamente los ingresos fiscales de un país y afectar su capacidad de pago, lo que incrementa su percepción de riesgo en los mercados internacionales.
            p(numero="7" titulo="Calidad del sistema financiero y bancario") Un sistema financiero sólido, con bancos bien capitalizados y regulaciones prudentes, contribuye a la estabilidad económica y reduce la probabilidad de crisis bancarias. En cambio, un sistema financiero débil, con instituciones vulnerables a shocks externos o problemas de liquidez, puede incrementar el riesgo de crisis económicas y generar incertidumbre sobre la capacidad del país para sostener su crecimiento. La salud del sector bancario también influye en la disponibilidad de crédito para las empresas y los consumidores, lo que a su vez afecta la inversión y el dinamismo económico.
        .col-lg-4.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema2/7.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      
      

      .bg-full-width.bg-color-1.mb-5
        .px-4.px-md-5.pt-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/8.svg").mx-auto
            .col-lg
              p.mb-0 En conclusión, el riesgo país es el resultado de una combinación de factores económicos, políticos y financieros que afectan la estabilidad y credibilidad de una nación en los mercados internacionales. Su evaluación no depende únicamente de indicadores macroeconómicos aislados, sino de un análisis integral que considera la estabilidad institucional, la capacidad de pago de la deuda, la inflación, el crecimiento económico y la exposición a factores externos. Los países que logran mantener un bajo nivel de riesgo país pueden acceder a financiamiento en mejores condiciones, atraer inversión extranjera y garantizar un crecimiento sostenido. Por el contrario, aquellos con un alto nivel de riesgo enfrentan mayores dificultades para financiar su desarrollo y pueden verse expuestos a crisis económicas y restricciones financieras. Por ello, la gestión adecuada de estos factores es crucial para la estabilidad de cualquier economía y para garantizar su sostenibilidad en el tiempo.


      #t_2_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.3] Impacto del riesgo país en la economía

      p El riesgo país es un indicador clave que refleja la percepción de estabilidad económica y financiera de una nación, con efectos directos sobre la inversión, el acceso al crédito y el crecimiento económico.

      .bg-full-width.bg-color-info
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Impacto del riesgo país en la economía 
              p.mb-4(data-aos="fade-right") En el PDF #[strong Impacto del riesgo país en la economía], se analizan las principales consecuencias de una calificación de riesgo elevada, incluyendo el encarecimiento del financiamiento, la reducción de la inversión extranjera y la volatilidad del tipo de cambio. Además, se examinan las estrategias que los gobiernos pueden implementar para mitigar estos efectos y fortalecer la confianza en sus economías, promoviendo un desarrollo sostenible y estable.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Impacto del riesgo país en la economía.
      
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/9.png', alt='')
      
      
      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>
      

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/41176" target="_blank" rel="noopener noreferrer") Olivera Novelo, J. (2015). Fundamentos de economía: ( ed.). Editorial Digital UNID. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/50065" target="_blank" rel="noopener noreferrer") Tugores Ques, J. (2005). Economía internacional: ( ed.). McGraw-Hill España. 

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/61634" target="_blank" rel="noopener noreferrer") Barea, M. (2013). Globalización y nueva economía: ( ed.). Ediciones Encuentro, S.A. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=DpSOmDuyc6w" target="_blank" rel="noopener noreferrer") videoconferencias. (2013, 28 de mayo). UTPL PRECURSORES DE LA ESCUELA CLÁSICA (ECONOMÍA)( HISTORIA DEL PENSAMIENTO ECONÓMICO)]. 
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>
<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema:
          'Corrientes de pensamiento económico y evaluación del riesgo país',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es una de las principales ideas de la escuela clásica de pensamiento económico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'La intervención del Estado es esencial para la estabilidad económica.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Los mercados tienden al equilibrio sin necesidad de regulación estatal.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'El consumo y la inversión dependen exclusivamente del gobierno.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'El crecimiento económico solo es posible mediante el control estatal de la producción.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La escuela clásica, con representantes como Adam Smith y David Ricardo, sostiene que los mercados pueden autorregularse gracias a la competencia y la interacción entre oferta y demanda.',
            mensaje_incorrecto:
              'Lo sentimos, su respuesta no es correcta. La escuela clásica enfatiza la autorregulación de los mercados.',
          },
          {
            id: 2,
            texto:
              'Según la teoría keynesiana, ¿qué medida debe tomar el gobierno en épocas de recesión?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aumentar el gasto público para estimular la demanda.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Reducir la inversión en infraestructura.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Disminuir la oferta de dinero en circulación.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Permitir que el mercado se recupere sin intervención.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! John Maynard Keynes argumentó que en tiempos de crisis económica, el Estado debe intervenir aumentando el gasto público para estimular la demanda y reducir el desempleo.',
            mensaje_incorrecto:
              'Lo sentimos, su respuesta no es correcta. La teoría keynesiana propone la intervención estatal activa durante las recesiones.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de los siguientes factores es determinante en la calificación de riesgo país?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La moda y las tendencias de consumo.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'La estabilidad política y la seguridad jurídica.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'El número de empresas tecnológicas en el país.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La cantidad de exportaciones agrícolas.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La calificación de riesgo país está influenciada por factores como la estabilidad política, la capacidad del gobierno para cumplir sus obligaciones financieras y la confianza en sus instituciones.',
            mensaje_incorrecto:
              'Lo sentimos, su respuesta no es correcta. La estabilidad política y jurídica son factores clave en la calificación de riesgo país.',
          },
          {
            id: 4,
            texto:
              '¿Cuál es una característica de la escuela neoschumpeteriana?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Sostiene que los monopolios impulsan el crecimiento económico.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Destaca la importancia de la innovación y la destrucción creativa.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Plantea que el Estado debe eliminar toda regulación económica.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Propone que el comercio internacional debe ser limitado.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La escuela neoschumpeteriana, basada en las ideas de Joseph Schumpeter, enfatiza cómo la innovación tecnológica y empresarial impulsa el desarrollo económico mediante la "destrucción creativa".',
            mensaje_incorrecto:
              'Lo sentimos, su respuesta no es correcta. La escuela neoschumpeteriana se centra en la innovación y la destrucción creativa.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es una posible consecuencia de una alta calificación de riesgo país?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Menores tasas de interés para acceder a financiamiento externo.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Aumento en la inversión extranjera directa.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Reducción de la confianza en la economía y encarecimiento del crédito.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Mayor estabilidad en los mercados financieros nacionales.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Una alta calificación de riesgo país indica incertidumbre económica y política, lo que provoca una menor confianza en la economía, dificultando el acceso a financiamiento externo y aumentando los costos del crédito.',
            mensaje_incorrecto:
              'Lo sentimos, su respuesta no es correcta. Una alta calificación de riesgo país tiene efectos negativos en la confianza económica y el acceso al crédito.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicitaciones! Has demostrado un buen entendimiento de las escuelas de pensamiento económico y el riesgo país.',
        mensaje_final_reprobado:
          'Te recomendamos repasar los conceptos sobre las escuelas económicas y el riesgo país antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
