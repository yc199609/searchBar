import Vue from 'vue'
import App from './App.vue'
import YcSearch from './assets/yc-search.js'

YcSearch.install(Vue)

new Vue({
  el: '#app',
  render: h => h(App)
})
