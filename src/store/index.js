import Vue from 'vue'
import Vuex from 'vuex'
import tours from './tours'
// import apiRequest from '@/utils/apiRequest'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tours
  },

  state: {
    res: null
  },

  mutations: {
    setRes (state, payload) {
      state.res = payload
    }
  },

  actions: {
    async testApis ({ commit }) {
      // https://flightglossaryapi.travix.com/EN/airports/NYC
      // https://faresearchdirectapi.prd.travix.com/searchoptions?Language=EN&Cid=4f54fe45-0223-4717-b4ae-b8585f809129&Affiliate=CheapticketsNL
      // https://api.cheaptickets.nl/l-EN/cid-4f54fe45-0223-4717-b4ae-b8585f809129?adt=1&chd=0&cls=Y&inf=0&out0_arr=NYC&out0_arr_all=false&out0_date=2021-06-01&out0_dep=BAK&out0_dep_all=false&in0_date=2021-06-07
      // airport search https://flightglossaryapi.travix.com/EN/airports?search=bak&extendedsearch=false
      // airport search https://www.kayak.com/mv/marvel?f=j&s=13&where=gyd&lc_cc=US&lc=en&sv=5&cv=undefined&c=undefined&searchId=undefined&v=undefined
      // const res = await apiRequest.get('', true)
      // commit('setRes', res.data)
    }
  }
})
