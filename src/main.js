import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import { Swiper as SwiperClass, Mousewheel, Navigation, EffectFade, Controller } from 'swiper/js/swiper.esm'
import 'swiper/css/swiper.css'

import vClickOutside from 'v-click-outside'
import VCalendar from 'v-calendar'

import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import Toasted from 'vue-toasted'

import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/styles/app.scss'

Vue.config.productionTip = false

Vue.use(ElementUI, { locale })
SwiperClass.use([Mousewheel, Navigation, EffectFade, Controller])
Vue.use(getAwesomeSwiper(SwiperClass))
Vue.use(vClickOutside)
Vue.use(VCalendar)
Vue.use(VueLoading)
Vue.component('loading', VueLoading)
Vue.use(Toasted, {
  duration: 7500
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
