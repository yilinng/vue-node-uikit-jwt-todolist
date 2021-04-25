import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../components/Login.vue'),
    meta:{
      title:'Login'
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "about" */ '../components/Signup.vue'),
    meta:{
      //needLogin:true,
      title: 'Signup'
      }
  },
  {
    path: '/todolist',
    name: 'Todolist',
    component: () => import(/* webpackChunkName: "about" */ '../components/todo/Todolist.vue'),
    meta:{
      title: 'todolist'
    }
  },
  {
    path: '/todolist/:id',
    name: 'singleTodo',
    component: () => import(/* webpackChunkName: "about" */ '../components/todo/singleTodo.vue'),
    meta:{
      title: 'todolist -- detail'
    }
  },
  {
    path: '/todolist/:id/edit',
    name: 'singleTodoEdit',
    component: () => import(/* webpackChunkName: "about" */ '../components/todo/singleTodoEdit.vue'),
    meta: {
      title: 'todolist -- edit'
    }
  },
  {
  path: '*',
  name: '*',
  component: () => import('../views/error/404.vue'),
  meta: {
    title: 'not found 404'
  }
  }
  

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Home';

  next();
})

export default router
