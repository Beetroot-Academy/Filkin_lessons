import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
library.add(faInstagram, faFacebook, faTwitter, faHeart);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// TypingText
import VueTypedJs from "vue-typed-js";
Vue.use(VueTypedJs);

// Router
import VueRouter from "vue-router";
import routes from "./router/routes";
Vue.use(VueRouter);

new Vue({
  vuetify,
  router: new VueRouter(routes),
  render: (h) => h(App),
}).$mount("#app");
