import request from '@/utils/request'

export function addList(data) {
  return request({
    url: '/store/add',
    method: 'post',
    data
  })
}
export function getList(params) {
  return request({
    url: '/store/look',
    method: 'get',
    params
  })
}

