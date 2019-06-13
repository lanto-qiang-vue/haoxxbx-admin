import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, getUser} from '@/util'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:  getToken() || '',
    userInfo:  getUser()||''
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
