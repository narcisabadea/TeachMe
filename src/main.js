import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
// import HelloWorld from './components/HelloWorld.vue'
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import Ionic from "@ionic/vue"
import "@ionic/core/css/core.css"
import "@ionic/core/css/ionic.bundle.css"
import { IonicVueRouter } from "@ionic/vue";

Vue.config.productionTip = false;
Vue.use(Ionic);
Vue.use(IonicVueRouter);

const router = new IonicVueRouter({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/tabs",
      component: () => import("@/components/TabRoot.vue"),
      children: [
        {
          path: "tab1",
          name: "tab1",
          components: {
            tab1Route: () => import("@/components/Tab1.vue"),
          },
        },
        {
          path: "tab1/details",
          name: "tab1-details",
          components: {
            tab1Route: () => import("@/components/Tab1Details.vue"),
          },
        }
      ],
    },
    { path: "/", redirect: "tabs/tab1" },
  ],
});
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");