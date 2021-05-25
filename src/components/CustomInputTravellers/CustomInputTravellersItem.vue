<template>
  <div class="custom-input-travellers-item">
    <div class="info">
      <span class="title">{{ title }}</span>
      <span class="description">{{ description }}</span>
    </div>
    <div class="adjuster">
      <button class="minus" @click="onReduce">‒</button>
      <span class="value">{{ value }}</span>
      <button class="plus" @click="onIncrease">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomInputTravellersItem',

  props: {
    value: {},
    title: String,
    description: String
  },

  methods: {
    onIncrease () {
      if (this.value < 300)
        this.$emit('input', this.value + 1)
    },

    onReduce () {
      if (this.value > 0)
        this.$emit('input', this.value - 1)
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/elements/custom-input-travellers/custom-input-travellers-item';
</style>
