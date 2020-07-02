import Vue from 'vue'
import App from './App.vue'
import router from './router'
//import store from './store'
import vuetify from './plugins/vuetify';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import store from './store/index';

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(vuetify);

UIkit.use(Icons);



Vue.config.productionTip = false


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

