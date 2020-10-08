import request from '@/utils/request'
import qs from 'qs'


export function companyList(query) {
  return request({
    url: '/companylist/',
    method: 'get',
    params:{level:query}
  })
}

