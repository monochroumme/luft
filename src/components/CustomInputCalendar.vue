<template>
  <div class="custom-input custom-input-calendar">
    <el-date-picker
      v-model="dateValue"
      :type="tripType === 'round' ? 'daterange' : 'date'"
      range-separator=""
      :picker-options="datePickerOptions"
      format="d MMMM yyyy"
      start-placeholder="Departure date"
      placeholder="Departure date"
      end-placeholder="Return date"
      @change="onDateChange"
    />
  </div>
</template>

<script>
export default {
  name: 'CustomInputCalendar',

  props: {
    dateFrom: {},
    dateTo: {},
    tripType: String
  },

  data () {
    return {
      dateValue: this.tripType === 'round'
        ? [this.dateFrom, this.dateTo]
        : this.dateFrom,

      datePickerOptions: {
        disabledDate (date) {
          const today = new Date()
          const yesterday = new Date()
          yesterday.setDate(today.getDate() - 1)
          return date < yesterday
        }
      }
    }
  },

  methods: {
    onDateChange (date) {
      if (typeof date === 'string')
        this.$emit('set-date-from', date)
      else {
        this.$emit('set-date-from', date[0])
        this.$emit('set-date-to', date[1])
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/elements/custom-input';
@import '@/assets/styles/elements/custom-input-calendar';
</style>
