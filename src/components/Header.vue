<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<template>
    <div class="header_container">
        <img src="../image/logo_cafe.png" alt="">
        <div class="options_header">
            <div class="option">Agendamiento</div>
            <div class="option">Testimonios</div>
            <div class="option">Contáctanos</div>
            <div class="option">Sobre nosotros</div>
        </div>
        <button class="options_button">
            <font-awesome-icon :icon="['fas', 'bars']" />
        </button>
    </div>
</template>

<style>
@import "../sass/header.scss";
</style>