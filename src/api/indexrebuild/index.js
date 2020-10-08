import request from "@/utils/request";

export function getmaindata(query) {
  return request({
    url: '/getmaindata/',
    method: 'get',
  })
}
