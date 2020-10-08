import request from '@/utils/request'
import Qs from 'qs'

export function getsuperiororg(params) {
  return request({
    url: '/superiororg/',
    params:params
  })
}
export function getdepartment(params) {
  return request({
    url: '/companylist/',
    params:{level:params}
  })
}
