import request from '@/utils/request'


export function get_penalties(query) {
  return request({
    url: '/penalties/indexechart/',
    method: 'get',
    params: query
  })
}
export function get_thermodynamic_penalties(query) {
  return request({
    url: '/penalties/',
    method: 'get',
    params: query
  })
}
