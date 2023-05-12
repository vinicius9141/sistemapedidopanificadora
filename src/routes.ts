import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import DriverAdd from '@pages/DriverAdd.vue'
import Home from '@pages/Home.vue'
import Login from '@pages/Login.vue'
import ProductAdd from '@pages/ProductAdd.vue'
import TicketOrderAdd from '@pages/TicketOrderAdd.vue'


const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/entrar', component: Login },
  { path: '/add-motorista', component: DriverAdd },
  { path: '/add-produto', component: ProductAdd },
  { path: '/add-pedido', component: TicketOrderAdd },
]

const router = createRouter({ routes, history: createWebHistory(), linkExactActiveClass: 'active' })

export default router