<template>
  <div class="custom-input custom-input-calendar">
    <v-date-picker
      v-model="dateValue"
      :is-range="tripType === 'round'"
      :min-date="new Date()"
      :columns="$screens({ default: 1, sm: 2 })"
      :masks="masks"
      @input="onDateChange"
    >
      <template v-slot="{ inputValue, inputEvents }">
        <div v-if="tripType === 'round'" class="range">
          <input
            :value="inputValue.start"
            v-on="inputEvents.start"
            placeholder="Departure date"
          />
          <input
            v-if="tripType === 'round'"
            :value="inputValue.end"
            v-on="inputEvents.end"
            placeholder="Return date"
          />
        </div>
        <div v-else class="single">
          <input
            :value="inputValue"
            v-on="inputEvents"
            placeholder="Departure date"
          />
        </div>
      </template>
    </v-date-picker>
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
      masks: {
        input: 'D MMMM YYYY'
      },
      dateValue: this.tripType === 'round'
        ? {
          start: this.dateFrom,
          end: this.dateTo
        }
        : this.dateFrom
    }
  },

  methods: {
    onDateChange (date) {
      if (!date.start) {
        this.$emit('set-date-from', date)
      } else {
        this.$emit('set-date-from', date.start)
        this.$emit('set-date-to', date.end)
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/elements/custom-input';
@import '@/assets/styles/elements/custom-input-calendar';
</style>
