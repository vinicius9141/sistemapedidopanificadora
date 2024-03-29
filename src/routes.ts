import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Addresses from "@pages/Addresses.vue";

import Clients from "@pages/Clients.vue";
import DriverAdd from "@pages/DriverAdd.vue";
import Drivers from "@pages/Drivers.vue";
import Home from "@pages/Home.vue";

import Login from "@pages/Login.vue";
import ProductAdd from "@pages/ProductAdd.vue";
import Products from "@pages/Products.vue";
import TicketOrderAdd from "@pages/TicketOrderAdd.vue";
import Vehicles from "@pages/Vehicles.vue";

import AdressesAdd from "@/pages/AdressesAdd.vue";
import ClientAdd from "@/pages/ClientAdd.vue";
import VehiclesAdd from "@/pages/VehiclesAdd.vue";

import DevRouter from "./dev/DevRouter";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/entrar", component: Login },
  { path: "/veiculos", component: Vehicles },
  { path: "/produtos", component: Products },
  { path: "/clientes", component: Clients },
  { path: "/rotas", component: Addresses },
  { path: "/motoristas", component: Drivers },
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

export const routerQuery = () => router.currentRoute.value.query;
export const navigate = (to: string) => router.push(to);

export default router;
