import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/page1/views/Main'
import Test from '@/page1/views/Test'
// import store from '../store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        path: 'page1-test'
      }
    },
    {
      path: 'page1-test',
      name: 'test',
      component: Test
    },
    {
      path: '/page1-main',
      name: 'main',
      component: Main,
      beforeEnter: (from, to, next) => {
        // store.commit('updateName')
        next()
      }
    }
  ]
})
