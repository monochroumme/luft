<template>
  <div class="custom-toggler bi-toggle">
    <span class="custom-toggler__placeholder" :class="{active: value === leftValue}" v-if="leftTitle">{{ leftTitle }}</span>
    <button class="custom-toggler__toggle" :class="{ active: value === rightValue }" @click="$emit('input', value === leftValue ? rightValue : leftValue)"></button>
    <span class="custom-toggler__placeholder" :class="{active: value === rightValue}" v-if="rightTitle">{{ rightTitle }}</span>
  </div>
</template>

<script>
export default {
  name: 'BiToggle',

  props: {
    leftTitle: {
      default: '',
      type: String
    },
    rightTitle: {
      default: '',
      type: String
    },
    leftValue: {
      default: '',
      type: String
    },
    rightValue: {
      default: '',
      type: String
    },
    value: {
      default: '',
      type: String
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/elements/custom-toggler';
@import '@/assets/styles/elements/bi-toggle';
</style>
