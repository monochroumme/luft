<template>
  <div class="search-page">
    <section class="card-wrapper">
      <div class="card card__double w1024" v-if="locationFrom && locationTo">
        <div class="card__double-left">
          <div class="search-page__location">
            <span>{{ locationFrom }}</span>
            <img svg-inline src="@/assets/svg/arrow.svg" alt="to">
            <span>{{ locationTo }}</span>
          </div>
          <div class="search-page__dates" v-if="dateFrom">
            <span>{{ formattedDate(dateFrom) }}</span>
            <img svg-inline src="@/assets/svg/arrow.svg" alt="to" v-if="dateTo">
            <span v-if="dateTo">{{ formattedDate(dateTo) }}</span>
          </div>
        </div>
        <div class="card__double-right">
          <div class="search-page__people" v-if="adultNumber">
            <div class="search-page__people-item search-page__people-item--adults">
              <img svg-inline src="@/assets/svg/adult.svg" alt="adults">
              <span>{{ adultNumber }}</span>
            </div>
            <div class="search-page__people-item search-page__people-item--children">
              <img svg-inline src="@/assets/svg/child.svg" alt="children">
              <span>{{ childNumber }}</span>
            </div>
            <div class="search-page__people-item search-page__people-item--infants">
              <img svg-inline src="@/assets/svg/infant.svg" alt="infant">
              <span>{{ infantNumber }}</span>
            </div>
          </div>
          <span class="search-page__class" v-if="displayTripClass">{{ displayTripClass }}</span>
        </div>
      </div>
    </section>
    <section class="card-wrapper mt-24">
      <div class="card w1024 search-page__restricted">
        <img svg-inline src="@/assets/svg/restricted.svg" alt="restricted">
        <div class="info">
          <h2>Travel restricted</h2>
          <p>
            Some countries may require proof of COVID-19
            vaccination and a negative test, others might require
            several days of quarantine after arrival.
          </p>
        </div>
      </div>
    </section>
    <section class="card-wrapper mt-24">
      <div class="card w1024 search-page__items-wrapper" :class="{loading}">
        <loading :active.sync="loading"
                 :can-cancel="false"
                 :is-full-page="false"></loading>

        <div class="search-page__items">
          <div class="search-page__item" v-for="(item, i) in paginatedData" :key="i">
            <div class="search-page__item-col">
              <div class="search-page__item-content">
                <div class="search-page__item-primary">
                  {{ getTime(item) }}
                </div>
                <div class="search-page__item-additional">
                  {{ getCarriers(item) }}
                </div>
              </div>
            </div>
            <div class="search-page__item-col">
              <div class="search-page__item-content">
                <div class="search-page__item-secondary">
                  {{ getDuration(item) }}
                </div>
                <div class="search-page__item-additional">
                  {{ getAirports(item) }}
                </div>
              </div>
            </div>
            <div class="search-page__item-col">
              <div class="search-page__item-content">
                <div class="search-page__item-secondary">
                  {{ getNumberOfStops(item) }}
                </div>
                <div class="search-page__item-additional">
                  {{ getStops(item) }}
                </div>
              </div>
            </div>
            <div class="search-page__item-col">
              <div class="search-page__item-content">
                <div class="search-page__item-primary">
                  {{ getPrice(item) }}
                </div>
                <div class="search-page__item-additional">
                  {{ dateTo ? 'round trip' : 'one-way' }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="search-page__more"
        v-if="totalOptions && totalOptions > page * perPage"
        @click="page++"
      >
        Show more
      </button>
    </section>

    <div class="page-navigation-arrow" :class="{ back: !scrolledToTop }" @click="onArrowClick">
      <img svg-inline src="@/assets/svg/arrow.svg" alt="Navigation">
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import moment from 'moment'

export default {
  name: 'search',

  data () {
    return {
      locationFrom: '',
      locationTo: '',
      dateFrom: '',
      dateTo: '',
      adultNumber: 0,
      childNumber: 0,
      infantNumber: 0,
      tripClass: '',

      page: 1,
      perPage: 6,
      loading: true,
      scrolledToTop: true
    }
  },

  async mounted () {
    this.initListeners()

    this.locationFrom = this.$route.query.from
    this.locationTo = this.$route.query.to
    this.dateFrom = this.$route.query.date_from
    this.dateTo = this.$route.query.date_to
    this.adultNumber = parseInt(this.$route.query.adults ?? '0')
    this.childNumber = parseInt(this.$route.query.children ?? '0')
    this.infantNumber = parseInt(this.$route.query.infants ?? '0')
    this.tripClass = this.$route.query.class

    if (!this.locationFrom || !this.adultNumber || !this.dateFrom) await this.$router.push('/')

    await this.getFlights({
      adults: this.adultNumber,
      children: this.childNumber,
      infants: this.infantNumber,
      class: this.tripClassQuery,
      location_to: this.locationTo,
      location_from: this.locationFrom,
      date_from: this.dateFrom,
      date_to: this.dateTo
    })

    this.loading = false
  },

  computed: {
    ...mapState(['classes']),
    ...mapState('search', ['flightsData']),

    displayTripClass () {
      const currentClass = this.classes.find(c => c.slug === this.tripClass)
      return currentClass ? `${currentClass?.class} ${currentClass?.title}` : ''
    },

    tripClassQuery () {
      return this.classes.find(c => c.slug === this.tripClass)?.query ?? 'Y'
    },

    paginatedData () {
      return this.flightsData?._embedded?.Options?.slice(0, this.page * this.perPage) || []
    },

    totalOptions () {
      return this.flightsData?._embedded?.Options?.length || 0
    }
  },

  methods: {
    ...mapActions('search', ['getFlights']),

    formattedDate (date) {
      return moment(date)?.format('D MMM YYYY') ?? date
    },

    initListeners () {
      window.addEventListener('scroll', this.onScroll)
    },

    removeListeners () {
      window.removeEventListener('scroll', this.onScroll)
    },

    onScroll () {
      this.scrolledToTop = window.scrollY === 0
    },

    onArrowClick () {
      if (window.scrollY > 0) {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      } else {
        this.$router.push('/')
      }
    },

    getPrice (item) {
      const fare = item.Fares?.[0]
      if (fare) {
        return `${fare.CurrencyCode} ${fare.Total}`
      }
      return '–'
    },

    getTime (item) {
      const outboundOption = item.OutboundOptions?.[0]
      if (outboundOption) {
        return `${moment(outboundOption.DepartureDateTime).format('LT')} – ${moment(outboundOption.ArrivalDateTime).format('LT')}`
      }
      return '–'
    },

    getCarriers (item) {
      const outboundOption = item.OutboundOptions?.[0],
        inboundOption = item.InboundOptions?.[0]
      return `${outboundOption ? outboundOption?.Carrier?.DisplayName : ''}${inboundOption ? `, ${inboundOption?.Carrier?.DisplayName}` : ''}` || '-'
    },

    getAirports (item) {
      const outboundOption = item.OutboundOptions?.[0]
      if (outboundOption) {
        return `${outboundOption.DepartureAirport?.Code}–${outboundOption.ArrivalAirport?.Code}`
      }
      return '–'
    },

    getDuration (item) { // 18 hr 31 min
      const outboundOption = item.OutboundOptions?.[0]
      if (outboundOption) {
        const duration = moment(outboundOption.DepartureDateTime).subtract(outboundOption.ArrivalDateTime)
        return `${duration.format('HH')} hr ${duration.format('mm')} min`
      }
      return '–'
    },

    getNumberOfStops (item) {
      const outboundOption = item.OutboundOptions?.[0]
      if (outboundOption) {
        if (outboundOption.NrOfStops === 0) {
          return 'nonstop'
        } else if (outboundOption.NrOfStops === 1) {
          return '1 stop'
        } else if (outboundOption.NrOfStops > 1) {
          return `${outboundOption.NrOfStops} stops`
        }
      }
      return '–'
    },

    getStops (item) {
      const outboundOption = item.OutboundOptions?.[0]
      if (outboundOption && outboundOption.SegmentOptions?.length) {
        return outboundOption.SegmentOptions
          .slice(0, outboundOption.NrOfStops)
          .map(o => o.Arrival?.Code)
          .join(', ')
      }
      return '–'
    }
  },

  beforeRouteLeave (to, from, next) {
    this.removeListeners()
    next()
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/pages/search/index';
</style>
