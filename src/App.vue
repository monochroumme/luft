<template>
  <div id="app">
    <transition name="fade">
      <Header v-if="isHeaderVisible" :dark="isFlippedColorsPage" :static-header="isStaticHeaderPage"/>
    </transition>
    <router-view @set-header-visible="isHeaderVisible = $event"/>
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('@/components/Header')
  },

  data () {
    return {
      isHeaderVisible: true,

      flippedColorsPages: [
        'search'
      ],

      staticHeaderPages: [
        'search'
      ]
    }
  },

  created () {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 600) {
        this.isHeaderVisible = true
      }
    })
  },

  computed: {
    isFlippedColorsPage () {
      return this.flippedColorsPages.findIndex(i => i === this.$route.name) !== -1
    },

    isStaticHeaderPage () {
      return this.staticHeaderPages.findIndex(i => i === this.$route.name) !== -1
    }
  }
}
</script>
