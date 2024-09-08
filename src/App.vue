<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Loader from './components/Loader.vue';

export default {
  data() {
    return {
      isLoading: true, // Estado para controlar si el loader está visible
    };
  },
  mounted() {
    // Simular el tiempo de carga, reemplázalo por la lógica de carga real si es necesario
    setTimeout(() => {
      this.isLoading = false; // Ocultar el loader cuando todo esté listo
    }, 3000); // Puedes ajustar este tiempo o reemplazarlo por lógica real
  },
  components: {
    Header,
    Main,
    Loader,
  },
};
</script>

<template>
  <div>
    <!-- Mostrar loader mientras isLoading sea true -->
    <Loader v-if="isLoading" />
    
    <!-- Mostrar el contenido de la página cuando isLoading sea false -->
    <div v-else class="landing_container">
      <Header />
      <Main />
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
