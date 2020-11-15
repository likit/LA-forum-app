import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register')
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import(/* webpackChunkName: "about" */ '../views/Account')
  },
  {
    path: '/info/registration',
    name: 'RegistrationInfo',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistrationInfo')
  },
  {
    path: '/registration/qrcode',
    name: 'QRCode',
    component: () => import(/* webpackChunkName: "about" */ '../views/QRCode')
  },
  {
    path: '/opening',
    name: 'Opening',
    component: () => import(/* webpackChunkName: "about" */ '../views/Opening')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
