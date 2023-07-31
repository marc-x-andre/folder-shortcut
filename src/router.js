import * as VueRouter from "vue-router";

import Folder from "views/Folder/index.vue";

const routes = [{ path: "/:pathMatch(.*)*", component: Folder }];

export default VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
