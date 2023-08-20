//Importar as funções necessárias do vue-router
import { createRouter, createWebHistory } from "vue-router";

//Importar as telas da aplicação
import About from '../views/About/AboutBancoTalentos.vue'
import Home from '../views/Home/HomeBancoTalentos.vue'
import Register from '../views/Register/New/NewRegisterBancoTalentos.vue'

//Configurar o roteamento
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/', 
            name: 'Home',
            component: Home,
        },
        {
            path: '/sobre', 
            name: 'About',
            component: About,
        },
        {
            path: '/cadastro/novo', 
            name: 'Register',
            component: Register,
        },
    ]
})

// Exportar o arquivo e importar na main.js
export default router