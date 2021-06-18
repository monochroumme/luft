<template>
  <section class="index-popular-destinations">
    <div class="container">
      <div class="index-popular-destinations__bg">
        <transition name="quick-fade" mode="out-in">
          <img
            v-if="popularDestinations"
            :key="activeIndex"
            :src="uploadUrl + (popularDestinations)[activeIndex].images"
            :alt="(popularDestinations)[activeIndex].city"
          >
        </transition>
      </div>
      <h2 class="index-popular-destinations__title">Popular Destinations</h2>
      <div class="index-popular-destinations__slider" v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <article class="swiper-slide index-popular-destinations__slide" :key="i"
                   v-for="(item, i) in (popularDestinations || [])">
            <div class="left">
              <h3>{{ item.city }}</h3>
              <h4>{{ item.country }}</h4>
              <p>{{ item.description }}</p>
            </div>
            <div class="right">
              <button title="Plan your trip" @click="onCompassClick" :class="{loading}">
                <img
                  src="@/assets/svg/compass.svg"
                  svg-inline
                  alt="Plan your trip"
                  title="Plan your trip"
                >
              </button>
            </div>
          </article>
        </div>
      </div>
      <div class="index-popular-destinations__pagination">
        <div class="index-popular-destinations__pagination-container container">
          <div class="index-popular-destinations__pagination-slider"
               v-swiper:mySwiperPagination="swiperOptionPagination">
            <div class="swiper-wrapper">
              <button
                class="swiper-slide item"
                :key="i"
                v-for="(item, i) in (popularDestinations || [])"
              >
                <span>{{ item.city }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PopularDestinations',

  data () {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'fade',
        allowTouchMove: false,
        simulateTouch: false,
        fadeEffect: {
          crossFade: true
        }
      },

      swiperOptionPagination: {
        slidesPerView: 'auto',
        centeredSlides: true,
        slideToClickedSlide: true,
        mousewheel: {
          forceToAxis: true
        },
        init: false
      },

      activeIndex: 0,
      loading: false
    }
  },

  async created () {
    await this.getPopularDestinations()
  },

  mounted () {
    this.mySwiperPagination.controller.control = this.mySwiper

    this.mySwiperPagination.on('slideChange', () => {
      this.activeIndex = this.mySwiper.activeIndex
    })

    this.mySwiperPagination.init(this.swiperOption)
  },

  computed: {
    ...mapState('popularDestinations', ['popularDestinations']),
    ...mapState(['userCity']),

    uploadUrl () {
      return process.env.VUE_APP_UPLOAD_URL
    }
  },

  methods: {
    ...mapActions('popularDestinations', ['getPopularDestinations']),
    ...mapActions(['makeATrip']),

    async onCompassClick () {
      this.loading = true
      await this.makeATrip({
        locationTo: this.popularDestinations[this.activeIndex].city,
        router: this.$router
      })
      this.loading = false
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/pages/index/popular-destinations';
</style>
