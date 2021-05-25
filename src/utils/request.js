import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import { getToken } from '@/utils/auth'

import store from '@/store'
export const BASEURL = process.env.NODE_ENV === 'production' ? '/api' : '/devApi'
// create an axios instance

// vue.prototype.$http=axios
const service = axios.create({
  baseURL: BASEURL, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 8000 // request timeout
})

service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
    }
    // console.log('adsfads')
    // if (config.method === 'post' || config.method === 'put') {
    //   // config.data = JSON.stringify(config.data)
    //   config.headers['Content-Type'] = 'application/json'
    //
    //   // config.data = qs.stringify(config.data)
    //   // console.log(config.data)
    //   // console.log(typeof (config.data))
    //
    //   // console.log(getCookie('Admin-Token'))
    // }
    if (config.method === 'patch') {
      // config.data = JSON.stringify(config.data)
      config.headers['Content-Type'] = 'application/json'
      // "Access-Control-Allow-Origin": "*"
      // config.data=JSON.stringify(config.data)
      // console.log(getCookie('Admin-Token'))
    }

    // do something before request is sent
    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['X-Token'] = getToken()
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      if (res.code === 20001) {
        console.log('asdfasdf')
        Message({
          message: res.message || 'Error',
          type: 'error',
          duration: 5 * 1000
        })
      }
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    // console.log(response)
    console.log('err' + error)// for debug
    Message({
      message: '网络异常',
      type: 'error',
      duration: 2 * 1000
    })
    return Promise.reject(error)
  })

export default service

