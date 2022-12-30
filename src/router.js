import {createRouter, createWebHistory} from 'vue-router'
import {Start, SimpleList, JustText, TruncateFunction, PageNumbers, VuexTest} from './components'

const routes = [
  { path: '/just-text', component: JustText},
  { path: '/simple-list', component: SimpleList},
  { path: '/truncate-function', component: TruncateFunction},
  { path: '/page-numbers/:page', component: PageNumbers},
  { path: '/vuex-test', component: VuexTest},
  { path: '/:catchAll(.*)', component: Start}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export {routes}

export default router