<template>
  <div class="custom-input custom-input-list">
    <el-select
      filterable
      :value="value"
      :placeholder="placeholder"
      remote
      :remote-method="onInput"
      :loading="loading"
      @input="$emit('input', $event)"
    >
      <el-option
        class="custom-input-option"
        v-for="item in options"
        :key="item.value"
        :label="item.title"
        :value="item.value">
        <span class="left">{{ item.title }}</span>
        <span class="right">{{ item.value }}</span>
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',

  props: {
    title: String,
    placeholder: String,
    value: {},
    type: String,
    options: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    onInput (input) {
      this.$emit('search', { input, type: this.type })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/elements/custom-input';
</style>
