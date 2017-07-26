import Vue from 'vue'
import VuePopup from './components/vue-popup.vue'


Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {VuePopup},
  data () {
    return {}
  },
  methods: {
    _click1(){
      console.log('button');
    }
  },
  render: function (createElement) {
    return createElement('div', [
      createElement(VuePopup),
    ])
  }
});
