import Vue from 'vue'
import Vuex from 'vuex'
import tours from './tours'
import popularDestinations from './popularDestinations'
import search from './search'
import favorites from './favorites'
import apiRequest from '@/utils/apiRequest'
import moment from 'moment'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tours,
    popularDestinations,
    favorites,
    search
  },

  state: {
    userCity: null,

    classes: [
      {
        title: 'Economy',
        slug: 'eco',
        class: '$',
        query: 'Y'
      },
      {
        title: 'Premium Economy',
        slug: 'premium',
        class: '$+',
        query: 'W'
      },
      {
        title: 'Business',
        slug: 'business',
        class: '$$',
        query: 'B'
      },
      {
        title: 'First',
        slug: 'first',
        class: '$$$',
        query: 'F'
      }
    ]
  },

  mutations: {
    setUserCity (state, payload) {
      state.userCity = payload
    }
  },

  actions: {
    async makeATrip ({ state }, { locationTo, router }) {
      if (!state.userCity) {
        Vue.prototype.$toasted.error('Sorry, we couldn\'t learn your location, this feature is not available')
      } else {
        await apiRequest
          .get(`search/airport?search=${state.userCity}`)
          .then(async res => {
            const userLocations = res.data ?? []

            if (userLocations?.length) {
              await apiRequest
                .get(`search/airport?search=${locationTo}`)
                .then(res => {
                  const placeLocations = res.data ?? []

                  if (placeLocations?.length) {
                    const query = {
                      from: userLocations[0].Code,
                      to: placeLocations[0].Code,
                      date_from: moment().add(7, 'd').format('YYYY-MM-DD'),
                      date_to: moment().add(14, 'd').format('YYYY-MM-DD'),
                      adults: 1,
                      children: 0,
                      infants: 0,
                      class: 'eco'
                    }

                    router.push({
                      name: 'search',
                      query
                    })
                  } else {
                    Vue.prototype.$toasted.error('Sorry, we couldn\'t learn your location, this feature is not available')
                  }
                })
            } else {
              Vue.prototype.$toasted.error('Sorry, we couldn\'t learn your location, this feature is not available')
            }
          })
      }
    }
  }
})
