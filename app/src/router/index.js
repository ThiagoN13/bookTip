import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue'
import FullPage from '../layouts/FullPage'
import HomePage from '../layouts/HomePage'
import NotFound from '../pages/erro/404'

Vue.use(IonicVueRouter)

export default new IonicVueRouter({
  routes: [
    {
      path: '/',
      component: HomePage,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import(/* webpackChunkName: "home" */ '@/pages/home/Home')
        },
        {
          path: 'switch',
          name: 'switch',
          component: () => import(/* webpackChunkName: "home" */ '@/pages/books/Switch')
        }
      ]
    },
    {
      path: '/full',
      component: FullPage,
      children: [
        {
          path: 'chat',
          name: 'Chat',
          component: () => import(/* webpackChunkName: "full" */ '@/pages/chat/Chat')
        },
        {
          path: 'chat-list',
          name: 'ChatList',
          component: () => import(/* webpackChunkName: "full" */ '@/pages/chat/List')
        }
      ]
    },
    { path: '/404', component: NotFound },
    { path: '*', redirect: '/404' }
  ]
})
