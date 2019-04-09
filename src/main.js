import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueYouTubeEmbed from 'vue-youtube-embed'

Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
