import request from '@/utils/request'
export function get_organization(query) {
  return request({
    url: '/organization/',
    method: 'get'
  })
}

