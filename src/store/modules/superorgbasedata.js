import { companyList ,getsuperiororg} from '@/api/storeapi/superorgbasedata'

const getDefaultState = () => {
  return {
    minecompanies: {},
    deparmentbase:{},
    superiororg:{},
    }
    }


const state = getDefaultState()
// const state = {
//     minecompanies: [],
//     // asdfasdf:'asdfasdf',
//     // asdfasdf1:65,
//     // asdfasdf2:75,
//     data:  [      ['product', '2012', '2013', '2014', '2015','2016'],
//                   ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
//                   ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
//                   ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]]
// }


const mutations = {
  init_componies: (state, componies) => {
    state.minecompanies = componies
  },
  init_departments: (state, departements) => {
    state.deparmentbase = departements
  },
  init_superiororg :(state, superiororg) => {
    state.superiororg = superiororg
  },
}

const actions = {
  get_allsuper:({ commit },param)=> {
    companyList('depart').then(
      response=>{
        commit('init_departments', response.data)
      }
    )
    getsuperiororg().then(
      response=>{
         commit('init_superiororg', response.data)
      }
    )

    return new Promise((resolve, reject) => {
      companyList('my').then(response => {
        const { data } = response
        commit('init_componies', response.data)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // companyList({ commit }) {
  //   // const { username, password } = userInfo
  //   return new Promise((resolve, reject) => {
  //     companyList('my').then(response => {
  //       console.log(response)
  //       const { data } = response
  //       commit('init_componies', response.data)
  //       resolve()
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },


}
export default {
  namespaced: true,
  sticky:true,
  state,
  actions,
  mutations
}



// export default {
//   namespaced: true,
//   state:{
//     minecompanies: [],
//     // asdfasdf:'asdfasdf',
//     // asdfasdf1:65,
//     // asdfasdf2:75,
//     data:  [['product', '2012', '2013', '2014', '2015','2016'],
//                   ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
//                   ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
//                   ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]]
//   },
//   mutations:{
//       addminecompanies(state,newdata){
//
//         state.minecompanies.push(newdata)
//         // console.log(state)
//         // console.log(newdata)
//       }
//   },
  //没有彻底高清楚，不明白
  // actions:{
  //   getcompanies(context){
  //     alert('aa')
  //     companyList('my').then(response => {
  //       // response.data.json()
  //       // context.commit('setmessage',response.data)
  //     }, response => {
  //       console.log('error')
  //     })
  //   }
  //
  // }
// }
