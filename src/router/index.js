import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signup',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      //hacerlo accesible solo al iniciar sesion
      meta: {
        login: true
      }
    }
  ]
})

export default router

//guardian router
router.beforeEach((to, from, next) => {
  const authRequired = to.meta.login
  if (authRequired) {
    if (to.path !== '/home') {
      next('/signup')
    } else {
      next()
    }
  } else {
    next()
  }
})
