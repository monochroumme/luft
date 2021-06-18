import apiRequest from '@/utils/apiRequest'

export default {
  namespaced: true,

  state: {
    tours: null
  },

  mutations: {
    setTours (state, payload) {
      state.tours = payload
    }
  },

  actions: {
    async getTours ({ commit }) {
      const res = await apiRequest.get('tours')
      commit('setTours', res.data?.items)
    }
  }
}
