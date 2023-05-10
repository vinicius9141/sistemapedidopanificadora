import {RouteRecordRaw, createRouter, createWebHistory} from 'vue-router'

import Login from '@pages/Login.vue'

import Home from './pages/Home.vue'


const routes: RouteRecordRaw[] = [
  {path: '/', component: Home},
  {path: '/entrar', component: Login},

]

const router = createRouter({routes, history: createWebHistory()})

export default router