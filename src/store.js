import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:  '',
    userInfo:  ''
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      // setToken(token)
    },
    setUser (state, info) {
      state.userInfo = info
      // setUser(info)
    },
  },
  actions: {

  }
})
