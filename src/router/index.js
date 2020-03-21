import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login/Login.vue'
import Home from '../components/Home/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path:'/',
    redirect:'/login'
  }
]
// 路由守卫


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  // to 将要访问的路径,from从哪个路径跳转而来,next 是一个函数表示放行 可以强制绑定跳转地址
  if(to.path === '/login') return next();
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  // 判断是否有token 如果没有直接跳转到 login页面
  if(!tokenStr) return next('/login')
  // 如果有就直接放行
  next()
})
export default router
