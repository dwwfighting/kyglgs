import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user/',
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/',
    method: 'post'
  })
}
