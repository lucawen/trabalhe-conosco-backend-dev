import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import App from './App.vue'

Vue.use(Buefy, {
    defaultIconPack: 'fa'
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
