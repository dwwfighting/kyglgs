import request from '@/utils/request'
import qs from 'qs'

export function getcheckrecordlist(params) {
  return request.request({
    url: '/checkrecord/',
    method: 'get',
    params: params
  })
}

export function retrievecheckrecord(params) {
  return request.request({
    url: '/checkrecord/' + params + '/',
    method: 'get'
  })
}

export function batchupdate(data) {
  return request.request({
    url: '/checkrecord/',
    method: 'put',
    data
  })
}
