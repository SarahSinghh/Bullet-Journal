
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/Calendar', component: () => import('pages/Calendar.vue')},
      { path: '/Budget', component: () => import('pages/Budget.vue')},
      { path: '/Health', component: () => import('pages/Health.vue')},
      { path: '/Books', component: () => import('pages/BookList.vue')},
      { path: '/BrainDump', component: () => import('pages/BrainDump.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
