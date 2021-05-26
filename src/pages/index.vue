<template>
  <main class="index-page">
    <Hero />
    <Tours />
  </main>
</template>

<script>
export default {
  components: {
    Hero: () => import('@/containers/index/Hero'),
    Tours: () => import('@/containers/index/Tours')
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/pages/index/index';
</style>
