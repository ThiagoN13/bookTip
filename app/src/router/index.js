import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue'

Vue.use(IonicVueRouter)

export default new IonicVueRouter({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import(/* webpackChunkName: "home" */ '@/pages/HomePage')
    }
  ]
})
