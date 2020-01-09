import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/page3/views/Main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      path: 'page3-main'
    }
  },
  {
      path:"/page3-main",
      name: 'page3-main',
      component: Main
  }
]

var router =  new VueRouter({
  routes
})

export default router
