import { RouteRecordRaw } from "vue-router";

import DriverDev from "./DriversDev.vue";

const routes: RouteRecordRaw[] = [
  { path: "/dev-drivers", component: DriverDev },
];

export default routes;
