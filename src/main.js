// main.js

import { createApp } from 'vue'
import App from './App.vue'

// Importar FontAwesome y las bibliotecas de íconos
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Importar todos los íconos de las bibliotecas
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Agregar todos los íconos a la biblioteca
library.add(fas, far, fab)

// Crear la aplicación Vue
const app = createApp(App)

// Registrar el componente FontAwesome globalmente
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
