// router/index.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import StatisticsView from '@/views/StatisticsView.vue'
import LoginView from '@/views/LoginView.vue'
import ChangePassword from '@/views/ChangePassword.vue'
import ConfirmNewPassword from '@/views/ConfirmNewPassword.vue'
import ConfigView from '@/views/ConfigView.vue'
import BackUpView from '@/views/BackUpView.vue'
import SyncView from '@/views/SyncView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/statistics',
    name: 'StatisticsView',
    component: StatisticsView
  },
  {
    path: '/config',
    name: 'ConfigView',
    component: ConfigView
  },
  {
    path: '/backup',
    name: 'BackUpView',
    component: BackUpView
  },
  {
    path: '/sync',
    name: 'SyncView',
    component: SyncView
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: ChangePassword
  },
  {
    path: '/confirm-new-password',
    name: 'ConfirmNewPassword',
    component: ConfirmNewPassword
  
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
