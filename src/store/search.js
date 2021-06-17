import apiRequest from '@/utils/apiRequest'

export default {
  namespaced: true,

  state: {
    flightsData: null
  },

  mutations: {
    setFlightsData (state, payload) {
      state.flightsData = payload
    }
  },

  actions: {
    async getFlights ({ commit }, payload) {
      const res = await apiRequest.get(
        `search?adults=${payload.adults}&infants=${payload.infants}&chd=${payload.children}&cls=${payload.class}&location_to=${payload.location_to}&location_from=${payload.location_from}&date_from=${payload.date_from}${payload.date_to ? `&date_to=${payload.date_to}` : ''}`
      )
      commit('setFlightsData', res.data)
    }
  }
}
