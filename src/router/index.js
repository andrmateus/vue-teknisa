import Vue from 'vue'
import Router from 'vue-router'
import FirstTest from '@/components/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: FirstTest
    }
  ]
})
