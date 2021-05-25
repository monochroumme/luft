<template>
  <div class="custom-input custom-input-travellers">
    <el-popover
      placement="bottom"
      width="320"
      trigger="click">

      <div class="custom-input-travellers__popup">
        <custom-input-travellers-item
          title="Adults"
          description="12 years and older"
          :value="adultNumber"
          @input="$emit('set-adults', $event)"
        />
        <custom-input-travellers-item
          title="Children"
          description="2 until 11 years"
          :value="childNumber"
          @input="$emit('set-children', $event)"
        />
        <custom-input-travellers-item
          title="Infants"
          description="Younger than 2"
          :value="infantNumber"
          @input="$emit('set-infants', $event)"
        />
      </div>

      <el-button slot="reference">{{ buttonText }}</el-button>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'CustomInputTravellers',

  components: {
    CustomInputTravellersItem: () => import('./CustomInputTravellersItem')
  },

  props: {
    adultNumber: Number,
    childNumber: Number,
    infantNumber: Number
  },

  computed: {
    buttonText () {
      return ([
        `${this.adultNumber} adult` + (this.adultNumber === 1 ? '' : 's'),
        this.childNumber > 0 ? (this.childNumber === 1 ? '1 child' : `${this.childNumber} children`) : false,
        this.infantNumber > 0 ? (this.infantNumber === 1 ? '1 infant' : `${this.infantNumber} infants`) : false
      ]).filter(t => t !== false).join(', ')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/elements/custom-input-travellers/custom-input-travellers';
</style>
