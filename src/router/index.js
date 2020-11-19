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
  },
  {
    path: '/programs',
    name: 'Program',
    component: () => import(/* webpackChunkName: "about" */ '../views/Program')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import(/* webpackChunkName: "about" */ '../views/Gallery')
  },
  {
    path: '/admin/programs',
    name: 'ProgramAdmin',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProgramAdmin')
  },
  {
    path: '/admin/programs/<:programId>/edit',
    name: 'ProgramAdminEdit',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProgramAdmin')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin')
  },
  {
    path: '/admin/opening-draw',
    name: 'OpeningDraw',
    component: () => import(/* webpackChunkName: "about" */ '../views/OpeningDraw')
  },
  {
    path: '/admin/gallery',
    name: 'GalleryAdmin',
    component: () => import(/* webpackChunkName: "about" */ '../views/GalleryAdmin')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
