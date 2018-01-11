import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import 'buefy/lib/buefy.css';

Vue.use(Buefy, {
    defaultIconPack: 'fa'
})

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
