<script>
export default {
  data() {
    return {
      show_options: false
    }
  },
  methods: {
    deployOptions() {
      this.show_options = !this.show_options
    },
    redirectToWhatsApp(service) {
      const message = `Hola, estoy interesado en el servicio de ${service}. ¿Podrían darme más información?`
      const url = `https://wa.me/3015795111?text=${encodeURIComponent(message)}`
      window.open(url, '_blank')
    }
  }
}
</script>

<template>
  <div class="header_container">
    <a href="#main">
      <img src="../image/logo_cafe.png" alt="">
    </a>
    <div class="options_header">
      <div class="option" @click="deployOptions">Agendamiento</div>
      <a class="option" href="#comunity">Comunidad</a>
      <a class="option" href="#contact_us">Contáctanos</a>
      <a class="option" href="#testimony">Testimonios</a>
    </div>
    <button class="options_button" @click="deployOptions">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>
    <div class="options_deploy" v-if="show_options">
      <div class="option" @click="redirectToWhatsApp('Amarres')">Amarres</div>
      <div class="option" @click="redirectToWhatsApp('Endulzamientos')">Endulzamientos</div>
      <div class="option" @click="redirectToWhatsApp('Artilugios de poder')">Artilugios de poder</div>
      <div class="option" @click="redirectToWhatsApp('Limpias')">Limpias</div>
      <div class="option" @click="redirectToWhatsApp('Lectura del tarot')">Lectura del tarot</div>
      <div class="option" @click="redirectToWhatsApp('Lectura de angelologia')">Lectura de angelología</div>
    </div>
  </div>
</template>

<style>
@import "../sass/header.scss";
</style>
