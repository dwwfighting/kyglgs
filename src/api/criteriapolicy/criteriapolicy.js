import request from '@/utils/request'

export function get_criteriapolicy(params) {
  return request({
    url: '/criteriapolicy/',
    method: 'get'
  })
}

export function criteriapolicydetai(params) {
  return request({
    url: '/criteriapolicydetai/',
    method: 'get',
    params: params
  })
}
