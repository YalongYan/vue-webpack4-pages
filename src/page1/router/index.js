import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/page1/views/Main'
import Test from '@/page1/views/Test'
// import store from '../store'

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      path: 'page1-main'
    }
  },
  {
      path:"/page1-main",
      name: 'page1-main',
      beforeEnter: (from, to, next) => {
        // store.commit('updateName')
        next()
      },
      component: Main
  },
  {
      path: "/page1-test",
      name: 'page1-test',
      component: Test
  }
]

var router =  new VueRouter({
  routes
})

export default router

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       redirect: {
//         path: 'page1-test'
//       }
//     },
//     {
//       path: 'page1-test',
//       name: 'page1-test',
//       component: Test
//     },
//     {
//       path: '/page1-main',
//       name: 'page1-main',
//       component: Main,
//       beforeEnter: (from, to, next) => {
//         // store.commit('updateName')
//         next()
//       }
//     }
//   ]
// })
