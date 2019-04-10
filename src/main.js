import Vue from "vue";
import "./plugins/vuetify";

import App from "./App.vue";
import Vuetify from "vuetify";
import VueYouTubeEmbed from "vue-youtube-embed";
import VueGtm from "vue-gtm";
import VueRouter from "vue-router";
import * as firebase from "firebase";
import VueFirebase from "vue-firebase";

// Config firebase project
const FBCONFIG = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
};

const router = new VueRouter({ routes, mode, linkActiveClass });

Vue.use(VueGtm, {
  id: "GTM-MV64F7V",
  enabled: true,
  debug: true,
  vueRouter: router,
  ignoredViews: []
});
Vue.use(VueFirebase, { firebase: firebase, config: FBCONFIG });
Vue.use(Vuetify);
Vue.use(VueYouTubeEmbed);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
