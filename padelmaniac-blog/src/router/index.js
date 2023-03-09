import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from '../firebase'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'about',
      requireAuth: false
    }
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('../views/LoginView.vue'),
    meta: {
      title: 'Login',
    }
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: () => import('../views/RegisterView.vue'),
    meta: {
      title: 'Register',
    }
  },
  {
    path: '/blog',
    name: 'BlogView',
    component: () => import('../views/BlogView.vue'),
    meta: {
      title: 'BlogView',
      requireAuth: false
    }
  },
  {
    path: '/create-post',
    name: 'CreatePost',
    component: () => import('../views/CreateBlogView.vue'),
    meta: {
      title: 'CreateBlogView',
      requireAuth: true
    }
  },
  {
    path: '/post-view',
    name: 'PostView',
    component: () => import('../views/PostView.vue'),
    meta: {
      title: 'PostView',
      requireAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }

  if (to.matched.some(record => record.meta.requireAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})

export default router
