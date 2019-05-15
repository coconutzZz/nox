export const state = () => ({
  activeSlide: null,
  activeAnchor: ''
})

export const mutations = {
  setActiveSlide(state, payload) {
    state.activeSlide = payload.index
    if (payload.index !== -1) {
      state.activeAnchor = payload.anchor
    }
  }
}

export const actions = {
  setActiveSlide({ commit }, slide) {
    commit('setActiveSlide', slide)
  }
}
