import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import ('../components/Login/Login.vue')
const Home = () => import ('../components/Home/Home.vue')
const Welcome = () => import ('../components/Welcome/Welcome.vue')
const User = () => import ('../components/Home/user/User.vue')
const Rols = () => import ('../components/Home/Rols/Rols.vue')
// 路由懒加载
const Rights = () => import ('../components/Home/Rights/Rights.vue')
const Shop = () => import ('../components/Home/Shop/Shop.vue')
const Classer = () => import ('../components/Home/Classer/Classer.vue')
const Shclass = () => import ('../components/Home/Shclass/Shclass.vue')
const ShopList = () => import ('../components/Home/ShopList/ShopList.vue') 
const Datas = () => import ('../components/Home/Datas/Datas.vue')
Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect:'/welcome',
    children:[
      {
        path:'/welcome',
        name:'Welcome',
        component:Welcome
      },
      {
        path:'/users',
        component:User
      },
      {
        path:'/rols',
        component:Rols
      },
      {
        path:'/rights',
        component:Rights
      },
      {
        path:'/shop',
        component:Shop
      },
      {
        path:'/classer',
        component:Classer
      },
      {
        path:'/shclass',
        component:Shclass
      },
      {
        path:'/list',
        component:ShopList
      },
      {
        path:'/data',
        component:Datas
      }
    ]
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
  // const locslStr = window.localStorage.getItem('userinfo')
  // if(locslStr){
  //   next('/home')
  // }else{
  //   next('/login')
  // }
  // 判断是否有token 如果没有直接跳转到 login页面
  if(!tokenStr) return next('/login')
  // 如果有就直接放行
  next()
})
export default router
