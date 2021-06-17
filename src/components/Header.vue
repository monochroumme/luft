<template>
  <header class="header" :class="{dark, static: staticHeader}">
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
  name: 'Header',

  props: {
    dark: {
      type: Boolean,
      default: false
    },
    staticHeader: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/elements/header';
</style>
