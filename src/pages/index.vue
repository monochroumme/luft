<template>
  <main class="index-page">
    <Hero />
    <Tours />
    <popular-destinations />
  </main>
</template>

<script>
export default {
  components: {
    Hero: () => import('@/containers/index/Hero'),
    Tours: () => import('@/containers/index/Tours'),
    PopularDestinations: () => import('@/containers/index/PopularDestinations')
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/pages/index/index';
</style>
