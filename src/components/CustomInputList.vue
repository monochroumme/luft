<template>
  <div class="custom-input custom-input-list" v-click-outside="closeDropdown">
    <div class="custom-input__input-wrapper">
      <input
          class="custom-input__input"
          type="text"
          :placeholder="!value ? placeholder : ''"
          @input="onInput"
          @focus="isFocused = true"
          @blur="isFocused = false"
          v-model="inputValue"
      >
      <span v-if="!inputValue && value">{{ shownValue }}</span>
    </div>
    <div class="custom-input__dropdown" :class="{active: isDropdownActive}">
      <div class="custom-input__dropdown-content">
        <transition name="fade" mode="out-in">
          <span class="text-center w100 d-block" v-if="loading">Loading</span>
          <span class="text-center w100 d-block" v-else-if="!options.length">No data</span>
          <ul v-else-if="options.length">
            <li
                v-for="(item, i) in options"
                :key="i"
                :class="{active: value === item.value}"
                @click="onSelect(item.value)"
            >
              <span class="left">{{ item.title }}</span>
              <span class="right">{{ item.value }}</span>
            </li>
          </ul>
        </transition>
      </div>
    </div>
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

  data () {
    return {
      isFocused: false,
      isDropdownActive: false,
      inputValue: ''
    }
  },

  watch: {
    isFocused () {
      this.checkDropdownActiveCondition()
    },

    loading () {
      this.checkDropdownActiveCondition()
    },

    options () {
      this.checkDropdownActiveCondition()
    },

    inputValue () {
      this.checkDropdownActiveCondition()
    }
  },

  computed: {
    shownValue () {
      const item = this.options?.find(i => i.value === this.value)
      return item?.title
    }
  },

  methods: {
    onInput (e) {
      this.$emit('search', {
        input: e.target.value,
        type: this.type
      })
    },

    onSelect (val) {
      this.$emit('input', val)
      this.isDropdownActive = false
      this.inputValue = ''
    },

    openDropdown () {
      this.isDropdownActive = true
    },

    checkDropdownActiveCondition () {
      if (this.isFocused && this.inputValue !== '' && (this.loading || this.options?.length)) {
        this.openDropdown()
      }
    },

    closeDropdown () {
      this.isDropdownActive = false
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/elements/custom-input';
</style>
