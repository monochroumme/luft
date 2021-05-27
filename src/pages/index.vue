<template>
  <main class="index-page">
    <Hero @set-header-visible="$emit('set-header-visible', $event)" />
    <div class="index-page__rest">
      <Tours />
      <popular-destinations />
      <pick-your-favorite />
    </div>
  </main>
</template>

<script>
export default {
  components: {
    Hero: () => import('@/containers/index/Hero'),
    Tours: () => import('@/containers/index/Tours'),
    PopularDestinations: () => import('@/containers/index/PopularDestinations'),
    PickYourFavorite: () => import('@/containers/index/PickYourFavorite')
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/pages/index/index';
</style>
