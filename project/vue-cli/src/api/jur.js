import request from '@/utils/request'

export function addList(data) {
  return request({
    url: '/jurisdiction/add',
    method: 'post',
    data
  })
}
