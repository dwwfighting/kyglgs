import { get_globalaccident } from '@/api/storeapi/globalaccident'

const state = {
  count: 0,
  // color: ['#325B69', '#698570', '#AE5548', '#6D9EA8', '#9CC2B0', '#C98769'],
  globalaccident_injure: '',
  globalaccident_num: '',
  globalaccident_trapped: '',
  globalaccident_cat: '',
  globalac_seriousness:'',
  globalac_seriousness_num:''
}

const mutations = {

  init_globalaccident_injure: (state, globalaccident_injure) => {
    state.globalaccident_injure = globalaccident_injure
  },
  init_globalaccident_num: (state, globalaccident_num) => {
    state.globalaccident_num = globalaccident_num
  },
  init_globalaccident_trapped: (state, globalaccident_trapped) => {
    state.globalaccident_trapped = globalaccident_trapped
  },
  init_globalaccident_cat: (state, globalaccident_cat) => {
    state.globalaccident_cat = globalaccident_cat
  },
  init_globalac_seriousness: (state, globalac_seriousness) => {
    state.globalac_seriousness = globalac_seriousness
  },
  init_globalac_seriousness_num: (state, globalac_seriousness_num) => {
    state.globalac_seriousness_num = globalac_seriousness_num
  },
}

const actions = {
  get_globalaccident: ({ commit },) => {
    return new Promise((resolve, reject) => {
      get_globalaccident().then(response => {
        commit('init_globalaccident_injure', response.data['globalaccident_injure'])
        commit('init_globalaccident_num', response.data['globalaccident_num'])
        commit('init_globalaccident_trapped', response.data['globalaccident_trapped'])
        commit('init_globalaccident_cat', response.data['globalaccident_cat'])
        commit('init_globalac_seriousness', response.data['globalac_seriousness'])
        commit('init_globalac_seriousness', response.data['globalac_seriousness'])
        commit('init_globalac_seriousness_num', response.data['globalac_seriousness_num'])
      }).catch(error => {
        reject(error)
      })
    })
  }

}
export default {
  namespaced: true,
  sticky: true,
  state,
  actions,
  mutations
}

