<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Calificación de riesgo país'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .bg-color-5.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") El riesgo país es un indicador fundamental en la economía global, que mide la capacidad de un país para cumplir con sus obligaciones financieras y honrar su deuda externa. Este concepto es crucial para inversionistas, organismos financieros internacionales y gobiernos, porque permite evaluar el nivel de estabilidad económica y política de una nación y determinar las condiciones en las que puede acceder a financiamiento externo (María O’Kean, 2015).
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
              p.mb-0 Las agencias internacionales de calificación de riesgo, como Standard & Poor’s (S&P), Moody’s y Fitch Ratings, son las encargadas de evaluar el nivel de riesgo de cada país y asignar calificaciones que reflejan su capacidad de pago y la probabilidad de incumplimiento de una deuda. Estas calificaciones van desde las más altas, como AAA, que indican un bajo riesgo de impago y una economía estable, hasta las más bajas, como CCC o D, que representan una alta probabilidad de crisis financiera y posible incumplimiento de pagos.

      
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
            p(numero="2" titulo="Título paso 2") Contenido paso 2
            p(numero="3" titulo="Título paso 3") Contenido paso 3


      .row.align-items-center.mb-5
        .col-lg-8.order-2.order-lg-1

      
          LineaTiempoD.color-primario.large.verde(data-aos="fade-right")
            p(numero="1" titulo="Nivel de endeudamiento externo") Un país con altos niveles de deuda en relación con su PIB, es percibido como más riesgoso, puesto que su margen de maniobra fiscal es reducido y su capacidad de pago depende, en gran medida, de la obtención de nuevos créditos. Cuando un país acumula demasiada deuda sin un plan claro de sostenibilidad fiscal, puede entrar en un círculo vicioso de financiamiento caro y creciente presión sobre su presupuesto. Si la deuda se vuelve insostenible, el país podría enfrentar un default soberano, lo que afectaría su calificación crediticia y su acceso a financiamiento futuro. Además, la dependencia excesiva de la deuda externa expone al país a riesgos adicionales, como el impacto de cambios en las tasas de interés internacionales o la reducción del acceso a capital en tiempos de crisis global.
            p(numero="2" titulo="Título paso 2") Contenido paso 2
            p(numero="3" titulo="Título paso 3") Contenido paso 3
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
              p.mb-4(data-aos="fade-right") En el PDF Impacto del riesgo país en la economía, se analizan las principales consecuencias de una calificación de riesgo elevada, incluyendo el encarecimiento del financiamiento, la reducción de la inversión extranjera y la volatilidad del tipo de cambio. Además, se examinan las estrategias que los gobiernos pueden implementar para mitigar estos efectos y fortalecer la confianza en sus economías, promoviendo un desarrollo sostenible y estable.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
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
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
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
