import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'lobby', component: () => import('../views/LobbyView.vue') },
  { path: '/wallet', name: 'wallet', component: () => import('../views/WalletView.vue') },
  { path: '/wallet/history', name: 'wallet-history', component: () => import('../views/WalletHistoryView.vue') },
  {
    path: '/records',
    name: 'records',
    component: () => import('../views/RecordsView.vue'),
    children: [
      { path: ':id', name: 'record-details', component: () => import('../views/OrderDetailsOverlay.vue') },
    ],
  },
]

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
