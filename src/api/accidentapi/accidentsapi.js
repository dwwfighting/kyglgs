import request from '@/utils/request'

export function get_accidents(query) {
  return request({
    url: '/accidents/indexechart/',
    method: 'get',
    params: query
  })
}

export function accidents(query) {
  return request({
    url: '/accidents/',
    method: 'get',
    params: query
  })
}


