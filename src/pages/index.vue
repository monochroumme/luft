<template>
  <main class="index-page">
    <Hero />
  </main>
</template>

<script>
export default {
  components: {
    Hero: () => import('@/containers/index/Hero')
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/pages/index/index';
</style>
