<template>
  <div class="custom-input custom-input-class">
    <el-popover
      placement="bottom"
      width="200"
      trigger="click"
      popper-class="custom-input-class__popup"
      ref="popover"
    >

      <ul class="custom-input-class__list">
        <li
          class="custom-input-class-item"
          :class="{active: value === item.slug}"
          v-for="item in classes"
          :key="item.slug"
          @click="handleClick(item.slug)"
        >
          <div class="left">{{ item.title }}</div>
          <div class="right">{{ item.class }}</div>
        </li>
      </ul>

      <el-button slot="reference">{{ buttonText }}</el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'CustomInputClass',

  props: {
    value: String
  },

  data () {
    return {
      classes: [
        {
          title: 'Economy',
          slug: 'eco',
          class: '$'
        },
        {
          title: 'Premium Economy',
          slug: 'premium',
          class: '$+'
        },
        {
          title: 'Business',
          slug: 'business',
          class: '$$'
        },
        {
          title: 'First',
          slug: 'first',
          class: '$$$'
        }
      ]
    }
  },

  computed: {
    buttonText () {
      return this.classes.find(c => c.slug === this.value)?.class
    }
  },

  methods: {
    handleClick (slug) {
      this.$emit('input', slug)
      // eslint-disable-next-line no-unused-expressions
      this.$refs.popover?.doClose()
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/elements/custom-input-class';
</style>
