import request from '@/utils/request'
import qs from 'qs'


export function tablist(params) {
  return request({
    url: '/tablist/',
    method: 'get',
    params:{com:params}
  })
}

export function fetchList(query) {
  return request({
    url: '/tabdetail/',
    method: 'get',
    params: query
  })
}

export function createEvaluation(query) {
  return request({
    url: '/tabdetail/',
    method: 'post',
    params: query
  })
}
export function issuescateList() {
  return request({
    url: '/issuescate/',
    method: 'get',
  })
}

export function issuesclass() {
  return request({
    url: '/issuesclass/',
    method: 'get',
  })
}
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

export function updataissue(id,params) {
  return request({
    url: '/dangerrecord/'+id+'/',
    method: 'put',
    params:{score:params},
    // headers: {'X-BULK-OPERATION': true},
    // heads : {
    //     'content-type' : 'application/x-www-form-urlencoded'
    // }
  })
}


export function statciList(params) {
  return request.request({
    url: '/statisdetail/',
    method: 'get',
    params: params
  })
}



