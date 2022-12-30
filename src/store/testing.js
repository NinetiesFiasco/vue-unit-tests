export default {
  namespaced: true,
  state: () => ({
    value: false
  }),
  mutations: {
    toggle: (state) => {
      state.value = !state.value
    }
  },
  actions: { },
  getters: {
    value: (state) => state.value
  }
}