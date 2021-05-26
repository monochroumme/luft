export default {
  namespaced: true,

  state: {
    favorites: null,
    defaultFavorites: [
      {
        city: 'Paris',
        image: '/images/index/favorites/paris.jpeg'
      },
      {
        city: 'Milan',
        image: '/images/index/favorites/milan.jpeg'
      },
      {
        city: 'New York',
        image: '/images/index/favorites/new-york.jpeg'
      },
      {
        city: 'Tokyo',
        image: '/images/index/favorites/tokyo.jpeg'
      },
      {
        city: 'Sydney',
        image: '/images/index/favorites/sydney.jpeg'
      }
    ]
  },

  mutations: {
    setFavorites (state, payload) {
      state.favorites = payload
    }
  },

  actions: {
    getFavorites () {
    }
  }
}
