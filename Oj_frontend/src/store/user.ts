// initial state

import type { StoreOptions } from 'vuex'

export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: '未登录',
      role: 'notLogin',
    },
  }),
  actions: {
    getLoginUser({ commit, state }, payload) {
      commit('updateUser', {
        userName: '鱼皮',
        role: 'admin',
      })
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload
    },
  },
} as StoreOptions<any>
