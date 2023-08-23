import service from '.'

// 头像列表
export function getAvatars(skip, limit) {
  return service({
    method: 'GET',
    url: '/mii/avatars?skip=' + skip + '&limit=' + limit
  })
}
