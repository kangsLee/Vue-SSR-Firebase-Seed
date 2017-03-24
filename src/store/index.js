import Vue from 'vue'
import Vuex from 'vuex'
import { fetchItems } from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    items: []
  },

  actions: {
    FETCH_ITEMS: ({ commit, dispatch, state }, { items }) => {
      return fetchItems()
        .then(items => commit('SET_ITEMS', { items }))
    }
  },

  mutations: {
    SET_ITEMS: (state, { items }) => {
      Vue.set(state, `items`, items)
    }
  },

  getters: {
  }
})

export default store
