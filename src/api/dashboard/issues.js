import request from '@/utils/request'

export function monthcompre(params) {
  return request({
    url: '/monthcompre/',
    method: 'get',
    params:params
  })
}
