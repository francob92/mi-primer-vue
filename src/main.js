import Vue from "vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.min.css";

// Make BootstrapVue available throughout your project

// Optionally install the BootstrapVue icon components plugin

import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

