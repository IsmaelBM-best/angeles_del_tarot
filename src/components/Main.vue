<script>
export default {
  data() {
    return {
      nombre: '', // Almacena el nombre del input
      apellido: '', // Almacena el apellido del input
      servicio: '', // Almacena el servicio seleccionado
      droplist: false, // Controla la visualización del dropdown
      error: '', // Almacena el mensaje de error
      show_component: false
    };
  },
  methods: {
    // Alternar el dropdown del selector de servicios
    drop_options() {
      this.droplist = !this.droplist;
    },
    // Seleccionar un servicio y cerrar el dropdown
    selectService(servicio) {
      this.servicio = servicio;
      this.droplist = false;
    },
    // Función para generar el mensaje y abrir WhatsApp
    enviarMensaje() {
      if (!this.nombre) {
        this.error = 'Por favor ingrese su nombre.';
      } else if (!this.apellido) {
        this.error = 'Por favor ingrese su apellido.';
      } else if (!this.servicio) {
        this.error = 'Por favor seleccione un servicio.';
      } else {
        // Generar el mensaje con los datos del formulario
        const mensaje = `Hola, soy ${this.nombre} ${this.apellido} y quiero mas informacion sobre ${this.servicio}.`;
        const url = `https://wa.me/3015795111?text=${encodeURIComponent(mensaje)}`;

        // Redirigir a WhatsApp con el mensaje predefinido
        window.open(url, '_blank');

        // Limpiar el mensaje de error
        this.error = '';
      }
    },
    changeRoute(){
      this.show_component = !this.show_component
    }
  },
};
</script>

<template>
    <div class="main_container" v-if="!show_component">
        <div class="main" id="main">
            <img src="../image/angeles_1.jpeg" alt="Meditación">
            <div class="text_container">
              <div class="title">Maestros especialistas en el amor</div>
              <div class="text">Te brindamos la ayuda que tanto estabas buscando. en este espacio, encontraras guías y apoyo espiritual para solucionar los desafíos y recibir las bendiciones del amor, a través de nuestro conocimiento podrás restaurar tu relación.</div>
              <a href="https://wa.me/3015795111" class="button_appointment" target="_blank">
                <font-awesome-icon :icon="['fab', 'whatsapp']" />
                Amarre de amor
              </a>
              <div class="text">Atrévete a recuperar tu felicidad y estabilidad emocional.</div>
            </div>
        </div>

        <div class="angels_information">
            <img src="../image/angeles_2.jpeg" alt="">
            <div class="angels_text">
                <div class="question">Rituales de magia blanca para enamorar <br>¿quieres saber como puedo ayudarte a recuperar el amor?<br>¿que técnicas podemos utilizar para atraer a tu ser amado?</div>
                <div class="text">Nuestro ritual de amor es una ceremonia sagrada diseñada para atraer a tu alama gemela, fortalecer la conexion emocional con tu pareja, eliminar los obstáculos y patrones negativos que impíden que tu ser amado este contigo. confía en la ayuda de los ángeles para encontrar la felicidad que mereces.</div>
                <a href="https://wa.me/3015795111" class="button_appointment" target="_blank">
                  <font-awesome-icon :icon="['fab', 'whatsapp']" />
                  Reconquistar a mi ex
                </a>
                <div class="text">No dejes pasar esta oportunidad para recibir la ayuda profesional a través de los ángeles.</div>
            </div>
        </div>

        <!-- Testimonios -->
         <div class="testimonies_container">
          <img src="/src/image/angeles_3.jpeg" alt="">
          <div class="members_number">
            <div class="title">Lectura del tarot</div>
            <div class="text">
              estas buscando respuestas sobre tu vida, amor, carreara o futuro? necesitas orientación para tomar decisiones importantes? por medio de nuestra lectura del tarot te ofrecemos la claridad y orientación es momentos de incertidumbre. obtén respuestas concretas y precisas sobre tu vida, amor, trabajo y futuro
            </div>
              <a href="https://wa.me/3015795111" target="_blank" class="button_appointment">
                <font-awesome-icon :icon="['fab', 'whatsapp']" />
                Contactar al maestro
              </a>
              <div class="text">Descubre tu destino en el amor con nuestra lectura del tarot.</div>
          </div>
        </div>

        <div class="angels_information">
            <img src="../image/angeles_4.jpeg" alt="">
            <div class="angels_text">
                <div class="question">Limpiezas espirituales</div>
                <div class="text">
                  ¿Te sientes estancado, cansado o sin dirección?
                  ¿necesitas liberarte de energías negativas?
                  nuestras limpiezas espirituales te ayudan a eliminar energías negativas y estancadas, también somos especialistas en limpieza de aura y chacras, limpieza de hogar y espacios, limpieza de objetos y pertenencias.
                </div>
                <a href="https://wa.me/3015795111" class="button_appointment" target="_blank">
                  <font-awesome-icon :icon="['fab', 'whatsapp']" />
                  Agendar limpieza
                </a>
                <div class="text">No pierdas esta oportunidad de restaurar tu equilibrio y armonía.</div>
            </div>
        </div>

        <div class="main section" id="main">
            <img src="../image/angeles_5.jpeg" alt="Meditación">
            <div class="text_container">
              <div class="title">Abre caminos para la abundancia y prosperidad</div>
              <div class="text">
                quieres vivir una vida llena de abundancia y prosperidad?
                necesitas atraer la riqueza y el éxito a tu vida?
                por medio de nuestro ritual de abre caminos te ayudamos a desbloquear patrones limitanes de pensamiento, además atraer energías de abundancia y prosperidad, 
                incrementar tus oportunidades financieras  y mejorar tu relación con el dinero.
              </div>
              <a href="https://wa.me/3015795111" class="button_appointment" target="_blank">
                <font-awesome-icon :icon="['fab', 'whatsapp']" />
                Volverme rico
              </a>
              <div class="text">
                No pierdas esta oportunidad de solucionar tus conflictos financieros, actúa ahora y obtén la riqueza.
              </div>
            </div>
        </div>

        <div class="angels_information">
            <div class="angels_text">
                <div class="question">Artilugios de poder</div>
                <div class="text">
                  ¿Buscas atraer amor verdadero a tu vida?
                  ¿necesitas aumentar tu riqueza y prosperidad?
                  ¿quieres protegerte de energías negativas?
                  nuestros artilugios de poder están diseñados para ayudarte a lograr tues objetivos, cada objeto es cuidadosamente seleccionado y cargado con energías positivas para asegurar resultados efectivos.
                </div>
                <a href="https://wa.me/3015795111" class="button_appointment" target="_blank">
                  <font-awesome-icon :icon="['fab', 'whatsapp']" />
                  Comprar amuleto
                </a>
                <div class="text">
                  Obtén ya amuletos de amor para atraer tu alma gemela, talismanes de prosperidad, cristales de protección y velas mágicas para manifestar tus deseos.
                  envió rápido y discreto, garantía de satisfacción y atención personalizada
                </div>
            </div>
            <img src="../image/angeles_6.jpeg" alt="">
          </div>

          <div class="testimonies_container" id="comunity">
          <img src="/src/image/angeles_7.jpeg" alt="">
          <div class="members_number">
            <div class="title">Mas de 3700 familias restauradas</div>
            <div class="text">
              somos un grupo de ángeologos con 25 años de experiencia que a través del don y el poder de comunicarnos con Dios y sus arcángeles te ayudamos a solucionar
              cualquier tipo de problema o situación en el área del amor, salud o prosperidad, TODOS NUESTROS TRABAJOS Y PROCSESOS SON TOTALMENTE GARANTIZADOS
            </div>
          </div>
        </div>

        <!-- Formulario mensaje personalizado a whatsapp -->
        <footer class="contact_footer" id="contact_us">
            <div class="form_information">
                <h1 class="title_contact">Mereces ser feliz y atraer lo que deseas, no esperes mas contáctanos.</h1>
                <div class="form_angels">
                <div class="form">
                    <input
                    type="text"
                    v-model="nombre"
                    id="nombre"
                    class="form__input"
                    autocomplete="off"
                    placeholder=" "
                    />
                    <label for="nombre" class="form__label">Nombre</label>
                </div>
                <div class="form">
                    <input
                    type="text"
                    v-model="apellido"
                    id="apellido"
                    class="form__input"
                    autocomplete="off"
                    placeholder=" "
                    />
                    <label for="apellido" class="form__label">Apellido</label>
                </div>

                <div class="services_selector">
                    <div class="select_services" @click="drop_options">
                        <div class="label">{{ servicio || 'Selecciona un servicio' }}</div>
                        <font-awesome-icon :icon="['fas', 'caret-down']" />
                    </div>
                    <div class="options" v-if="droplist">
                        <div class="option" @click="selectService('Amarres')">Amarres</div>
                        <div class="option" @click="selectService('Endulzamientos')">Endulzamientos</div>
                        <div class="option" @click="selectService('Artilugios de poder')">Artilugios de poder</div>
                        <div class="option" @click="selectService('Limpias')">Limpias</div>
                        <div class="option" @click="selectService('Lectura del tarot')">Lectura del tarot</div>
                        <div class="option" @click="selectService('Lectura de angelologia')">Lectura de angelologia</div>
                    </div>
                </div>

                <p v-if="error" class="error_message">{{ error }}</p>

                <button class="button_appointment" @click="enviarMensaje">Enviar mensaje</button>
                </div>
            </div>
            <img src="../image/tarot.jpeg" alt="" />
        </footer>

        <div class="testimonios" id="testimony">
          <img src="../image/wpp_1.jpeg" alt="">
          <img src="../image/wpp_2.jpeg" alt="">
          <img src="../image/wpp_3.jpeg" alt="">
          <img src="../image/wpp_4.jpeg" alt="">
        </div>

        <!-- Contacto directo a whatsapp -->
        <div>
            <a
                href="https://wa.me/3015795111?text=Hola%20estoy%20interesado%20en%20agendar%20una%20lectura."
                target="_blank"
                class="whatsapp_contact"
            >
                <font-awesome-icon :icon="['fab', 'whatsapp']" />
            </a>
        </div>
      </div>

      <!-- red social (tik tok) -->
       <div class="tik_tok">
        <div class="text_and_icon">
          ¡Encuentranos en nuestra red social estrella!
          <a class="tik_tok_container"href="https://www.tiktok.com/@angelesdeltarot?_t=8prD3jnTDGf&_r=1" target="_blank">
            <font-awesome-icon :icon="['fab', 'tiktok']" />
          </a>
        </div>
        <div class="footer">
          Todos los derechos reservados Angeles del tarot.
        </div>
       </div>
</template>

<style>
@import  "../sass/main.scss";

.error_message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
  font-weight: bold;
}
</style>