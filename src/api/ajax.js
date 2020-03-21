import axios from 'axios'
// 将json类型转换成 stringfy类型
import qs from 'querystring'
// 创建axios实例
const instance = axios.create({
    baseURL:'/api'
})


// 创建请求拦截器
instance.interceptors.request.use(config => {
    // 将请求到的json类型转换成stringify类型
    config.data = qs.stringify(config.data)
    return config
})

// 创建相应拦截器
instance.interceptors.response.use(
    response => response.data,
    error => {
        console.log(error)
        alert("请求出错")
        return new Promise (() => {})
    }
)
export default instance