import request from '@/utils/request'


export function get_checkrecord(params) {
  return request.request({
    url: '/checkrecord/indexechart/',
    method: 'get',
    params: params
  })
}
export function checkrecord(params) {
  return request.request({
    url: '/checkrecord/',
    method: 'get',
    params: params
  })
}
