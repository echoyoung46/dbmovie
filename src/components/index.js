import MyHeader from './common/Header.vue'

const components = {
  install: function (Vue) {
    Vue.component('my-header', MyHeader)
  }
}

export default components
