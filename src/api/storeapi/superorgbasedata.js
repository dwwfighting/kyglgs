import request from '@/utils/request'
export function companyList(query) {
  return request({
    url: '/companylist/',
    method: 'get',
    params:{level:query}
  })
}
export function getsuperiororg(params) {
  return request({
    url: '/superiororg/',
    params:params
  })
}
