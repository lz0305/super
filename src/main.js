import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueRouterConfig from './router/router.config'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

Vue.config.productionTip = false
//注入
Vue.use(VueRouter)
Vue.use(ViewUI)

//使用路由
let router = new VueRouter(VueRouterConfig)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
