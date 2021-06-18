<template>
  <section class="index-tours">
    <div class="container">
      <header class="section__header">
        <h2 class="section__title">Discover places you will never forget</h2>
        <div class="section__navigation">
          <div class="swiper-button-prev">
            <img src="@/assets/svg/arrow-left.svg" svg-inline alt="">
          </div>
          <div class="swiper-button-next">
            <img src="@/assets/svg/arrow-left.svg" svg-inline alt="">
          </div>
        </div>
      </header>
      <div class="index-tours__slider" v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <article class="swiper-slide index-tours__slide" :key="i" v-for="(item, i) in (tours || [])">
            <div class="image-wrapper">
              <h3>{{ item.title }}</h3>
              <img :src="item.images ? uploadUrl + item.images[0] : ''" :alt="item.title">
            </div>
            <div class="bottom">
              {{ item.city }} from ${{ item.priceUsd }}
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Tours',

  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 40,
        mousewheel: {
          forceToAxis: true
        },
        navigation: {
          nextEl: '.index-tours .swiper-button-next',
          prevEl: '.index-tours .swiper-button-prev'
        }
      }
    }
  },

  async created () {
    await this.getTours()
  },

  computed: {
    ...mapState('tours', ['tours']),

    uploadUrl () {
      return process.env.VUE_APP_UPLOAD_URL
    }
  },

  methods: {
    ...mapActions('tours', ['getTours'])
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/pages/index/tours.scss';
</style>
