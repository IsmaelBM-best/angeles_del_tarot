<script>
export default {
  data() {
    return {
      nombre: '', // Almacena el nombre del input
      apellido: '', // Almacena el apellido del input
      servicio: '', // Almacena el servicio seleccionado
      droplist: false, // Controla la visualización del dropdown
      error: '', // Almacena el mensaje de error
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
  },
};
</script>



<template>
    <div class="main_container">
        <div class="main">
            <img src="../image/woman_lifestyle.jpg" alt="Meditación">
            <div class="text_container">
                <strong class="diferent_color">Descubre</strong> la guía angelical que te <strong class="diferent_color">acompaña.</strong> <br>
                <button class="button_appointment">Ver guía</button>
            </div>
        </div>
        <div class="info_appointment">
            <div class="text_container">Para hacerte la vida <strong>más fácil</strong>, aprovecha la posibilidad de <strong>reservar de forma online</strong>.</div>
            <div class="button_n_animated">
                <div class="text_animated">
                    Descubre tus
                    <div class="dropping-texts">
                        <div class="changing">habilidades</div>
                        <div class="changing">talentos ocultos</div>
                        <div class="changing">ángeles</div>
                    </div>
                </div>
                <button class="button_appointment">Reserva online</button>
            </div>
        </div>
        <div class="angels_information">
            <img src="../image/tarot.jpeg" alt="">
            <div class="angels_text">
                <div class="question">¿Qué es la lectura del tarot por medio de la angelología?</div>
                <div class="text">La lectura del tarot por medio de la angelología es una forma de lectura del tarot que se enfoca en la conexión con los ángeles y la guía angelical. Se utiliza el tarot como herramienta para recibir mensajes y orientación de los ángeles, y para conectarse con la energía de los ángeles.</div>
                <button class="button_appointment">Más información</button>
            </div>
        </div>

        <!-- Formulario mensaje personalizado a whatsapp -->
        <footer class="contact_footer">
            <div class="form_information">
                <h1 class="title_contact">¡Contáctanos en whatsapp!</h1>
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
            <img src="../image/form_image.jpg" alt="" />
        </footer>

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