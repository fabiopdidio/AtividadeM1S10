import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/about/About.vue'
import Home from '../views/home/Home.vue'
import Cadastro from '../views/cadastro/Cadastro.vue'

const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/cadastro',
            name: 'Cadastro',
            component: Cadastro
        }
    ]
    
})


export default router