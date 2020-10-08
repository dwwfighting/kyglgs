import service from '@/utils/request'
import qs from  'qs'
export function createvaria(data) {
  return service.request({
      url: '/createvaria/',
      method:'post',
      data
  })
}
export function getvaria(params) {
  return service.request({
      url: '/createvaria/',
      method:'get',
      params: params
  })
}
export function updatevaria(data) {
  return service.request({
      url: '/createvaria/'+data.id+'/',
      method:'put',
      data
  })
}
export function retrievevaria(params) {
  return service.request({
      url: '/createvaria/'+params.id+'/',
      method:'get',
  })
}
export function deletevaria(params) {
  return service.request({
      url: '/createvaria/'+params.id+'/',
      method:'delete',
  })
}
