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
      <div class="card w1024 search-page__items-wrapper">
        <div class="search-page__items">
          <div class="search-page__item" v-for="(item, i) in paginatedData" :key="i">
          <div class="search-page__item-col">
            <div class="search-page__item-content">
              <div class="search-page__item-primary">
                7:30 PM – 9:40 PM
              </div>
              <div class="search-page__item-additional">
                Lufthansa, United
              </div>
            </div>
          </div>
          <div class="search-page__item-col">
            <div class="search-page__item-content">
              <div class="search-page__item-secondary">
                18 hr 31 min
              </div>
              <div class="search-page__item-additional">
                GYD–LGA
              </div>
            </div>
          </div>
          <div class="search-page__item-col">
            <div class="search-page__item-content">
              <div class="search-page__item-secondary">
                2 stops
              </div>
              <div class="search-page__item-additional">
                YUL, FRA
              </div>
            </div>
          </div>
          <div class="search-page__item-col">
            <div class="search-page__item-content">
              <div class="search-page__item-primary">
                AZN 1,986
              </div>
              <div class="search-page__item-additional">
                round trip
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import moment from 'moment'
// import apiRequest from '@/utils/apiRequest'

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
      perPage: 6
    }
  },

  async mounted () {
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

    // const res = await apiRequest.get('https://faresearchdirectapi.prd.travix.com/GroupedResults?Language=EN&Cid=441fac3c-a8d5-40a1-8b73-7f3a79cf7ca4&Affiliate=CheapticketsNL&adt=1&inf=0&chd=0&cls=Y&out0_dep=BAK&out0_arr=NYC&out0_date=20210814', true)
    // console.log(res.data)
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
    }
  },

  methods: {
    ...mapActions('search', ['getFlights']),

    formattedDate (date) {
      return moment(date)?.format('D MMM YYYY') ?? date
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/pages/search/index';
</style>
