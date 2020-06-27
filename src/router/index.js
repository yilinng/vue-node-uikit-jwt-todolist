import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../components/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "about" */ '../components/Signup.vue'),
    meta:{
      //needLogin:true
      }
  },
  {
    path: '/todolist',
    name: 'Todolist',
    component: () => import(/* webpackChunkName: "about" */ '../components/Todolist.vue')
  },
  {
    path: '/todolist/:id',
    name: 'singleTodo',
    component: () => import(/* webpackChunkName: "about" */ '../components/singleTodo.vue')
  },
  {
    path: '/todolist/:id/edit',
    name: 'singleTodoEdit',
    component: () => import(/* webpackChunkName: "about" */ '../components/singleTodoEdit.vue')
  }



  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
