
const routes = [
  {
    path: '',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'page-todo', component: () => import('pages/PageTodo.vue') },
      { path: '/help', name: 'page-help', component: () => import('pages/PageHelp.vue') },
      { path: '/counter', name: 'page-counter', component: () => import('pages/PageCounter.vue') },
      { path: '/api', name: 'page-api', component: () => import('pages/PageApi.vue') },
      { path: '/meteo', name: 'page-meteo', component: () => import('pages/PageMeteo.vue') },
      { path: '/tableaux', name: 'page-array', component: () => import('pages/PageArray.vue') },
      { path: '/suivi', name: 'page-follow', component: () => import('pages/PageFollow.vue')} ,
      { path: '/suivi/creation', name: 'page-follow-create', component: () => import('pages/PageFollowCreate.vue')}
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
