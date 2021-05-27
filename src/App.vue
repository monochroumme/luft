<template>
  <div id="app">
    <transition name="fade">
      <Header v-if="isHeaderVisible"/>
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
      isHeaderVisible: true
    }
  },

  created () {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 600) {
        this.isHeaderVisible = true
      }
    })
  }
}
</script>
