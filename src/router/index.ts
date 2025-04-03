import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/tabs/home/HomeView.vue'
import OrderView from '../views/tabs/order/OrderView.vue'
import MeView from '../views/tabs/me/MeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/tabs',
      name: 'tabs',
      children: [
        {
          path: '/home',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/order',
          name: 'order',
          component: OrderView,
        },
        {
          path: '/me',
          name: 'me',
          component: MeView,
        },
      ],
    },
  ],
})

export default router
