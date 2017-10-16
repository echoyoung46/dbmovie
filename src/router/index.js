import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Coming from '@/components/Coming'
import Header from '@/components/common/Header'

const components = {
  install: function(Vue) {
    Vue.component('Header', Header)
  }
}

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/coming',
      name: 'Coming',
      component: Coming
    }
  ],
  components
})