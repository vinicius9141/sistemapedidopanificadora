import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import DriverAdd from "@pages/DriverAdd.vue";

import Home from "@pages/Home.vue";
import Login from "@pages/Login.vue";
import ProductAdd from "@pages/ProductAdd.vue";

import Products from "@pages/Products.vue";
import TicketOrderAdd from "@pages/TicketOrderAdd.vue";

import AdressesAdd from "@/pages/AdressesAdd.vue";
import ClientAdd from "@/pages/ClientAdd.vue";
import VehiclesAdd from "@/pages/VehiclesAdd.vue";

import DevRouter from "./dev/DevRouter";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/entrar", component: Login },
  { path: "/produtos", component: Products },
  { path: "/add-motorista", component: DriverAdd },
  { path: "/add-produto", component: ProductAdd },
  { path: "/add-pedido", component: TicketOrderAdd },
  { path: "/add-veiculo", component: VehiclesAdd },
  { path: "/add-rota", component: AdressesAdd },
  { path: "/add-cliente", component: ClientAdd },
  ...DevRouter,
];

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkExactActiveClass: "active",
});

export default router;
