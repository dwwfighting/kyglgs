import request from '@/utils/request'
import Qs from 'qs'

export function createvaluation(params) {
  return request({
    url: '/createvalu/',
    params:params
  })
}
