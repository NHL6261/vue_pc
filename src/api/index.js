import ajax from './ajax'

// 获取用户信息 
export const getUserInfo = () => ajax({
    url:'/getListUserInfo'
})

// 获取左侧 商户信息

export const getMenus = () => ajax({
    url:'/menus'
})
// 获取用户信息
export const getUser = () => ajax({
    url:'/users'
})
// 获取欢迎页面轮播图照片
export const getImages = () => ajax({
    url:'/images'
})