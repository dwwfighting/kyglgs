import request from '@/utils/request'
export function get_basechartsdata(params) {
  return request({
    url: '/indexchart/',
    method: 'get',
    params: params
  })
}
