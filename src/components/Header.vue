<template>
  <header class="header">
    <div class="header__container container">
      <div class="left">
        <router-link to="/" class="logo">
          <span>Luft</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
@import '@/assets/styles/elements/header';
</style>
