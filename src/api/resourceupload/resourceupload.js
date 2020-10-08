import request from '@/utils/request'


export function createvaluation(params) {
  return request({
    url: '/createvalu/',
    method: 'get',
    params:params
  })
}
