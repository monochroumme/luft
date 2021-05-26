import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import { Swiper as SwiperClass, Mousewheel, Navigation } from 'swiper/js/swiper.esm'
import 'swiper/css/swiper.css'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/styles/app.scss'

Vue.config.productionTip = false

Vue.use(ElementUI, { locale })
SwiperClass.use([Mousewheel, Navigation])
Vue.use(getAwesomeSwiper(SwiperClass))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
