import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

//Importando o Roteamento
import router from './routes/routes.js'

createApp(App)
  .use(router)
  .mount('#app')

/* Importar o router e adicionar .use(router) no createApp. 
   Por fim, adicionar a tag <router-view> </router-view> no App.vue */
