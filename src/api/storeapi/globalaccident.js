import request from '@/utils/request'

export function get_globalaccident(query) {
  return request({
    url: '/globalaccident/',
    method: 'get'
  })
}
