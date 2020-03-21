import ajax from './ajax'

// 获取用户信息 
export const getUserInfo = () => ajax({
    url:'/getListUserInfo'
})