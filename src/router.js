import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '@/pages/MainPage'
import WinPage from '@/pages/WinPage'

Vue.use(VueRouter)

const routes = [
    {
        name: 'main',
        component: MainPage,
        path: '/'
    },
    {
        name: 'prediction',
        component: WinPage,
        path: '/prediction'
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

export default router