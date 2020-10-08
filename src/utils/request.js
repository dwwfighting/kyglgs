import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import qs from 'qs'
const BASEURL= process.env.NODE_ENV==='production' ? '/api' : '/devApi';
// create an axios instance

// vue.prototype.$http=axios
const service = axios.create({
  baseURL: BASEURL, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  // headers: {
  //   'Content-Type': 'application/x-www-form-urlencoded'
  // },
  // transformRequest: [function (data) {
  //    alert('a')
  //    alert(data)
  //    alert('b')
  //           // `transformRequest` 允许在向服务器发送前，修改请求数据
  //           // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  //     return qs.stringify(data)
  //           // 结合create_headers里的内容，在这里又新增一条信息sex=man
  //           // 因此network中查看的结果是：name=xiaoming&age=12&sex=man
  //         }],
  timeout: 5000 // request timeout
})
function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue
}
// request interceptor
service.interceptors.request.use(

  config => {
     // console.log(config.data)
     //

     // console.log('adsfads')
     if (config.method === 'post' || config.method === 'put') {
       // config.data = JSON.stringify(config.data)
      config.headers['Content-Type'] = 'multipart/form-data';
      // config.data=JSON.stringify(config.data)
      // console.log(getCookie('Admin-Token'))
    }
     if (config.method === 'patch' ) {
       // config.data = JSON.stringify(config.data)

      config.headers['Content-Type'] = 'application/json';
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
  response =>response,
  /**
  * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
  * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
  */
  //     const res = response.data
  //     if (res.code !== 20000) {
  //       Message({
  //         message: res.message,
  //         type: 'error',
  //         duration: 5 * 1000
  //       });
  //       // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //       if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //         MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
  //           confirmButtonText: '重新登录',
  //           cancelButtonText: '取消',
  //           type: 'warning'
  //         }).then(() => {
  //           store.dispatch('FedLogOut').then(() => {
  //             location.reload();// 为了重新实例化vue-router对象 避免bug
  //           });
  //         })
  //       }
  //       return Promise.reject('error');
  //     } else {
  //       return response.data;
  //     }
  error => {
    console.log('err' + error)// for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  })

export default service
