import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo from '@/page2/views/Demo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      path: 'index'
    }
  },
  {
      path: "/index",
      component: Demo
  }
]

var router =  new VueRouter({
  routes
})

export default router
