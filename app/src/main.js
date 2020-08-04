// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Ionic from '@ionic/vue'
import '@ionic/core/css/core.css'
import '@ionic/core/css/ionic.bundle.css'
import './assets/css/style.css'

Vue.config.productionTip = false
Vue.use(Ionic)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
