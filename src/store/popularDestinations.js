import apiRequest from '@/utils/apiRequest'

export default {
  namespaced: true,

  state: {
    popularDestinations: null
  },

  mutations: {
    setPopularDestinations (state, payload) {
      state.popularDestinations = payload
    }
  },

  actions: {
    async getPopularDestinations ({ commit }) {
      const res = await apiRequest.get('destinations')
      commit('setPopularDestinations', res.data?.items)
    }
  }
}
