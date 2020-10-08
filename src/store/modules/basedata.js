import { companyList } from '@/api/storeapi/basedata'

// function getcomponies() {
//   // return companyList('my').then(response => {
//   //           response.data
//   //
//   //           // console.log(this.minecompanies)
//   //         }, response => {
//   //           console.log('error')
//   //         })
//   return 555
// }

const getDefaultState = () => {
  return {
    minecompanies: {},
    data:  [ ['product', '2020-07-05', '2020-07-12', '2020-07-19', '2020-07-26',
               '2020-08-02', '2020-08-09', '2020-08-16', '2020-08-23','2020-08-30','2020-09-06','2020-09-13','2020-09-20','2020-09-27'],
            ['周频次',4, 5, 2, 5, 5 ,7 ,5, 5, 5, 5 ,7 ,5, 5]
          ]
    }
}

const state = getDefaultState()
// const state = {
//     minecompanies: [],
//     // asdfasdf:'asdfasdf',
//     // asdfasdf1:65,
//     // asdfasdf2:75,
//     data:  [['product', '2012', '2013', '2014', '2015','2016'],
//                   ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
//                   ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
//                   ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]]
// }
const sss=()=>{

}
const sssbbb=sss()
const mutations = {
  init_componies: (state, componies) => {
    state.minecompanies = componies
  },
}

const actions = {
  companyList({ commit }) {
    // const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      companyList('my').then(response => {
        // console.log(response)
        const { data } = response
        commit('init_componies', response.data)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
}
export default {
  namespaced: true,
  state,
  sssbbb,
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
