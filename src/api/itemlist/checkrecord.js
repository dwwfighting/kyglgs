import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/security/',
    method: 'get',
    params
  })
}
