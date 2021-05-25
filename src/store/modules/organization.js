import { get_organization } from '@/api/storeapi/organization'

const getDefaultState = () => {
  return {
    companies: '',
    departments: '',
    provinces: '',
    cities: '',
    counties: ''
  }
}

const state = getDefaultState()

const mutations = {
  init_companies: (state, companies) => {
    state.companies = companies
  },
  init_departments: (state, departments) => {
    state.departments = departments
  },
  init_provinces: (state, provinces) => {
    state.provinces = provinces
  },
  init_cities: (state, cities) => {
    state.cities = cities
  },
  init_counties: (state, counties) => {
    state.counties = counties
  }
}

const actions = {
  get_organization: ({ commit },) => {
    return new Promise((resolve, reject) => {
      get_organization().then(response => {
        const res = response.result
        res.forEach(function(value, index, array) {
          if (value['label'] === '义棠矿业管理公司') {
            commit('init_departments', array[index])
          }
          if (value['label'] === '山西凯嘉能源集团') {
            commit('init_companies', array[index])
          }
          if (value['label'] === '介休市') {
            commit('init_counties', array[index])
          }
          if (value['label'] === '晋中市') {
            commit('init_cities', array[index])
          }
          if (value['label'] === '山西省') {
            commit('init_provinces', array[index])
          }
        })
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

