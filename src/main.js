// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAnalytics from 'vue-analytics'

// リリース前にfalse外す。てか、devかどうか自動で判定したみ
if(true){
  Vue.use(VueAnalytics, {
    id: 'UA-66673433-1',
    router
  })
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
