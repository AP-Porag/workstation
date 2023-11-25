import { createRouter, createWebHistory } from 'vue-router'
import PublicView from "@/views/PublicView.vue";
import PrivateView from "@/views/PrivateView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: PublicView,
      children:[
        {
          path: '',
          name: 'welcome',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../pages/public/HomePage.vue')
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../pages/public/AboutPage.vue')
        },
        {
          path: '/login',
          name: 'login',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../pages/public/LoginPage.vue')
        },
      ]
    },
      //admin
    {
      path: '/admin',
      name: 'private',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:PrivateView,
      children:[
        {
          path: '',
          name: 'home',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../pages/private/HomePage.vue')
        },
      ]
    },

  ]
})

export default router
