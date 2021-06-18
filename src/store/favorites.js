import apiRequest from '@/utils/apiRequest'

export default {
  namespaced: true,

  state: {
    favorites: null
  },

  mutations: {
    setFavorites (state, payload) {
      state.favorites = payload
    }
  },

  actions: {
    async getFavorites ({ commit }) {
      const res = await apiRequest.get('favorites')
      commit('setFavorites', res.data?.items)
    }
  }
}
