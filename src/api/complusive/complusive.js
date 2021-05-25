import request from '@/utils/request'

export function get_complusives_detail(params) {
  return request({
    url: '/complusives/',
    method: 'get',
    params: params
  })
}

export function get_complusives(params) {
  return request({
    url: '/complusives/indexechart/',
    method: 'get',
    params: params
  })
}
export function get_complusiveimg(params) {
  return request({
    url: '/get_complusiveimg/',
    method: 'get',
    params: params
  })
}
