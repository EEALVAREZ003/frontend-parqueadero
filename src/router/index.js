import { createRouter, createWebHistory } from 'vue-router'
import ejemplo from '../views/ejemplo.vue'
import paises from '../views/paises.vue'
import LayoutMain from '../components/LayoutMain.vue'
import Login from '../components/Login.vue'



const routes = [
    {
        path: '/',
        name: 'home',
        component: LayoutMain,
    },

    {
        path: '/login',
        name: 'Login',
        component: Login,
    },

    {
        path: '/ejemplo',
        name: 'ejemplo',
        component: ejemplo,
    },
    {
        path: '/paises',
        name: 'Paises',
        component: paises,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;