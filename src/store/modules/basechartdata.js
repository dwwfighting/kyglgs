const state = {
  accident_data: '',
  lastyear_res: '',
  complusives_data: '',
  checkrecord_data: '',
  penalties_data: '',
  yearonyear: ''
}
const mutations = {
  init_accident_data: (state, accident_data) => {
    state.accident_data = accident_data.accidents
    state.lastyear_res = accident_data.lastyear_res
  },
  init_complusives_data: (state, complusives_data) => {
    state.complusives_data = complusives_data
  },
  init_checkrecord_data: (state, checkrecord_data) => {
    state.checkrecord_data = checkrecord_data
  },
  init_penalties_data: (state, penalties_data) => {
    state.penalties_data = penalties_data
  }
}
const actions = {
  // init_accident_data: ({ commit }, param) => {
  //   commit('init_accident_data', param)
  // }
}

export default {
  namespaced: true,
  sticky: true,
  state,
  mutations,
  actions
}
