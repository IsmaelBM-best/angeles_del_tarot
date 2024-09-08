<script>
export default {
    data(){
        return {
          show_options: false
        }
    },
    methods: {
      deployOptions(){
        this.show_options = !this.show_options
      }
    }
}
</script>

<template>
    <div class="header_container">
        <img src="../image/logo_cafe.png" alt="">
        <div class="options_header">
            <div class="option" @click="deployOptions">Agendamiento</div>
            <div class="option">Testimonios</div>
            <div class="option">Contáctanos</div>
            <div class="option">Sobre nosotros</div>
        </div>
        <button class="options_button">
            <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
        <div class="options_deploy" v-if="show_options">
          <div class="option">Amarres</div>
          <div class="option">Endulzamientos</div>
          <div class="option">Artilugios de poder</div>
          <div class="option">Limpias</div>
          <div class="option">Lectura del tarot</div>
          <div class="option">Lectura de angelologia</div>
        </div>
    </div>
</template>

<style>
@import "../sass/header.scss";
</style>