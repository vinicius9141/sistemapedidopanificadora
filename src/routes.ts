import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import DriverAdd from "@pages/DriverAdd.vue";

import Home from "@pages/Home.vue";
import Login from "@pages/Login.vue";
import ProductAdd from "@pages/ProductAdd.vue";
import TicketOrderAdd from "@pages/TicketOrderAdd.vue";

import Adresses from "@/pages/AdressesAdd.vue";
import Client from "@/pages/ClientAdd.vue";
import Vehicles from "@/pages/VehiclesAdd.vue";

import DevRouter from "./dev/DevRouter";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/entrar", component: Login },
  { path: "/add-motorista", component: DriverAdd },
  { path: "/add-produto", component: ProductAdd },
  { path: "/add-pedido", component: TicketOrderAdd },
  { path: "/add-veiculo", component: Vehicles },
  { path: "/add-rota", component: Adresses },
  { path: "/add-cliente", component: Client },
  ...DevRouter,
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkExactActiveClass: "active",
});

export default router;
