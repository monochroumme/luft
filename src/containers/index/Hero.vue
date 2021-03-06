<template>
  <section class="index-hero">
    <div class="index-hero__content">
      <div class="index-hero__card">
        <h1>Plan your next trip</h1>
        <div class="index-hero__inputs">
          <custom-input-list
            placeholder="Where from?"
            type="from"
            v-model="locationFrom"
            :options="fromLocations"
            :loading="fromLocationsLoading"
            @search="onLocationSearch"
          />
          <transition name="fade">
            <custom-input-list
              v-if="locationFrom"
              placeholder="Where to?"
              type="to"
              v-model="locationTo"
              :options="toLocations"
              :loading="toLocationsLoading"
              @search="onLocationSearch"
            />
          </transition>
          <transition name="fade" mode="out-in">
            <bi-toggle
              v-if="locationTo"
              key="bi-toggle"
              left-title="Round trip"
              right-title="One way"
              left-value="round"
              right-value="one-way"
              v-model="tripType"
            />
          </transition>
          <transition name="fade" mode="out-in">
            <custom-input-calendar
              v-if="locationTo"
              :key="tripType"
              placeholder="Departure date"
              :date-from="dateFrom"
              :date-to="dateTo"
              :trip-type="tripType"
              @set-date-from="dateFrom = $event"
              @set-date-to="dateTo = $event"
              @set-header-visible="$emit('set-header-visible', $event)"
            />
          </transition>
          <transition name="fade">
            <div
              v-if="locationTo && dateFrom"
              class="index-hero__travellers-class"
            >
              <custom-input-travellers
                @set-adults="adultNumber = $event > 0 ? $event : 1"
                @set-children="childNumber = $event"
                @set-infants="infantNumber = $event"
                :adult-number="adultNumber"
                :child-number="childNumber"
                :infant-number="infantNumber"
              />
              <custom-input-class
                v-model="tripClass"
              />
            </div>
          </transition>
        </div>
        <transition name="fade">
          <button
            v-if="locationFrom && locationTo && (tripType === 'round' ? dateFrom && dateTo : dateFrom)"
            class="index-hero__search-btn"
            @click="searchFlights"
          >
            <span>Search</span>
          </button>
        </transition>
      </div>
      <div class="index-hero__location">
        <img svg-inline src="@/assets/svg/pin.svg" alt="pin">
        <span>Singapore, Republic of Singapore</span>
      </div>
    </div>
  </section>
</template>

<script>
import apiRequest from '@/utils/apiRequest'
import moment from 'moment'
import { debounce } from '@/utils/debounce'

export default {
  components: {
    CustomInputList: () => import('@/components/CustomInputList'),
    CustomInputCalendar: () => import('@/components/CustomInputCalendar'),
    CustomInputTravellers: () => import('@/components/CustomInputTravellers/CustomInputTravellers'),
    CustomInputClass: () => import('@/components/CustomInputClass'),
    BiToggle: () => import('@/components/BiToggle')
  },

  data () {
    return {
      locationFrom: '',
      locationTo: '',
      tripType: 'round', // one-way
      tripClass: 'eco', // eco / premium / business / first
      dateFrom: '',
      dateTo: '',
      adultNumber: 1,
      childNumber: 0,
      infantNumber: 0,

      fromLocations: [],
      toLocations: [],

      fromLocationsLoading: false,
      toLocationsLoading: false
    }
  },

  watch: {
    tripType () {
      if (this.tripType === 'one-way') {
        this.dateTo = ''
      }
    }
  },

  methods: {
    onLocationSearch ({
      input,
      type
    }) {
      if (input.length > 2) {
        this.searchLocations(input, type)
      } else {
        this[`${type}Locations`] = []
      }
    },

    searchLocations: debounce(async function (input, type) {
      this[`${type}LocationsLoading`] = true
      await apiRequest
        .get(`search/airport?search=${input}`)
        .then(res => {
          this[`${type}Locations`] = res.data?.map ? res.data.map(d => ({
            title: `${d.CityName} (${d.Code}), ${d.CountryName}`,
            value: d.Code
          })) : []
        })
        .catch(e => console.error(e))
      this[`${type}LocationsLoading`] = false
    }, 300),

    searchFlights () {
      const query = {
        from: this.locationFrom,
        to: this.locationTo,
        date_from: moment(this.dateFrom).format('YYYY-MM-DD'),
        adults: this.adultNumber,
        children: this.childNumber,
        infants: this.infantNumber,
        class: this.tripClass
      }

      if (this.dateTo) {
        query.date_to = moment(this.dateTo).format('YYYY-MM-DD')
      }

      this.$router.push({
        name: 'search',
        query
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/pages/index/hero';
</style>
