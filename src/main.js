import Vue from 'vue'
import App from './App.vue'
import router from './router'


import store from './store'

import lax from 'lax.js'


// import  parallax  from 'jquery-parallax.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),


  created() {

    // setup lax
    lax.setup()

    document.addEventListener('scroll', function (x) {
      lax.update(window.scrollY)
    }, false)


    // window.console.log(this.$el)
  },

}).$mount('#app')