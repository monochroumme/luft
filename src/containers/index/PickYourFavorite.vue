<template>
  <main class="index-pick-your-favorite container">
    <header class="section__header">
      <h2 class="section__title">Pick your your favorite</h2>
      <div class="section__navigation">
        <div class="swiper-button-prev">
          <img src="@/assets/svg/arrow-left.svg" svg-inline alt="">
        </div>
        <div class="swiper-button-next">
          <img src="@/assets/svg/arrow-left.svg" svg-inline alt="">
        </div>
      </div>
    </header>
    <div class="index-pick-your-favorite__slider" v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <a class="swiper-slide index-pick-your-favorite__slide" :key="i" v-for="(item, i) in (favorites || defaultFavorites)">
          <div class="image-wrapper">
            <img :src="item.image" :alt="item.city">
          </div>
          <h3>{{ item.city }}</h3>
        </a>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'PickYourFavorite',

  data () {
    return {
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 10,
        mousewheel: {
          forceToAxis: true
        },
        navigation: {
          nextEl: '.index-pick-your-favorite .swiper-button-next',
          prevEl: '.index-pick-your-favorite .swiper-button-prev'
        },
        breakpoints: {
          601: {
            slidesPerView: 5
          },
          501: {
            slidesPerView: 4
          },
          401: {
            slidesPerView: 3
          }
        }
      }
    }
  },

  async created () {
    await this.getFavorites()
  },

  mounted () {
    const clamp = function (val, min, max) {
      return Math.min(Math.max(val, min), max)
    }
    const slideOffsets = [
      -10,
      20,
      50,
      20,
      50
    ]
    const slides = Array.from(this.mySwiper.slides),
      slider = this.$el
    const maxOffset = .4,
      elOffsetTop = 120,
      minWindowOffset = () => slider.offsetTop + elOffsetTop + window.innerHeight,
      maxWindowOffset = () => slider.offsetTop + elOffsetTop + window.innerHeight * (1 + maxOffset),
      currentOffset = () => window.scrollY + window.innerHeight,
      calcPercentage = () => (clamp(currentOffset(), minWindowOffset(), maxWindowOffset()) - minWindowOffset()) /
        (maxWindowOffset() - minWindowOffset())
    let percentage

    window.addEventListener('scroll', () => {
      if (window.innerWidth > 600) {
        percentage = calcPercentage()
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.transform = `translateY(${slideOffsets[i] * percentage}px)`
        }
      } else {
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.transform = 'translateY(0px)'
        }
      }
    })
  },

  computed: {
    ...mapState('favorites', ['favorites', 'defaultFavorites'])
  },

  methods: {
    ...mapActions('favorites', ['getFavorites'])
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/pages/index/pick-your-favorite';
</style>
