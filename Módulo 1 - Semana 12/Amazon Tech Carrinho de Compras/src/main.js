import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/routes'

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/lib/util/colors'

// Vuex
import store from './store'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi'
    },
  })

  export default createVuetify({
    theme: {
      themes: {
        light: {
          dark: false,
          colors: {
            primary: colors.red.darken1, // #E53935
            secondary: colors.red.lighten4, // #FFCDD2
            
          }
        },
      },
    },
  })
  

const app = createApp(App)

app
.use(router)
.use(vuetify)
.use(store)
.mount('#app')

