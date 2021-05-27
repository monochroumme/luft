import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import { Swiper as SwiperClass, Mousewheel, Navigation, EffectFade, Controller } from 'swiper/js/swiper.esm'
import 'swiper/css/swiper.css'

import vClickOutside from 'v-click-outside'
import VCalendar from 'v-calendar'

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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
