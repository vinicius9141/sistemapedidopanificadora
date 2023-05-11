import {RouteRecordRaw, createRouter, createWebHistory} from 'vue-router'

import DriverAdd from '@pages/DriverAdd.vue'
import Home from '@pages/Home.vue'
import Login from '@pages/Login.vue'


const routes: RouteRecordRaw[] = [
  {path: '/', component: Home},
  {path: '/entrar', component: Login},
  {path: '/add-motorista', component: DriverAdd},

]

const router = createRouter({routes, history: createWebHistory()})

export default router