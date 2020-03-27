<template>
  <el-container class="Home_Container">
    <!-- 头部区域 -->
    <el-header>
      <div>
        <img src="../../assets/logo.png" alt="">
        <span>电商后台管理系统</span>
      </div>
      <el-button @click="exitbtn" type="danger">退出</el-button>
    </el-header>
    <!-- 页面主题区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse? '64px':'200px'">
        <div class="classtoggle-button" @click="toggleCollpase">|||</div>
        <!-- 侧边栏菜单区域 -->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409EFF"
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
          :router="true"
          :default-active="activePath"
        >
          <!-- 一级菜单 -->
          <el-submenu 
          :index="item.id + ''" v-for="item in LeftInfo" :key="item.id">
            <!-- 一级菜单的模板区域 -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="IconObj[item.id]"></i>
              <!-- 文本 -->
              <span>{{item.name}}</span>
            </template>
            <!-- 二级菜单 index  跳转地址 手动拼接 /--> 
            <el-menu-item @click="SavaNavState('/'+itemList.path)" :index="'/'+itemList.path + '' " v-for="itemList in item.children" :key="itemList.id">
              <template slot="title">
                <!-- 图标 -->
                <i :class="RolesObj[itemList.id]"></i>
                <!-- 文本 -->
                <span>{{itemList.name}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧主体 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script type="text/ecmascript-6">
export default {
  data(){
    return{
      activePath:'', //激活的链接地址
      isCollapse:false, // 左侧是否折叠
      LeftInfo:[], // 左侧信息
      // 自定义icon 根据id
      IconObj:{
        '101':'iconfont icon-yonghu',
        '102':'iconfont icon-lifangtilitiduomiantifangkuai2',
        '103':'iconfont icon-shangpinguanli',
        '104':'iconfont icon-dingdanguanli',
        '105':'iconfont icon-baobiao',
      },
      // 二级菜单menber
      RolesObj:{
        '1':'iconfont icon-jiaose',
        '2':'iconfont icon-quanxian',
        '3':'iconfont icon-shangpinliebiao',
        '4':'iconfont icon-shangpin',
        '5':'iconfont icon-leimupinleifenleileibie2',
        '10':'iconfont icon-querylist',
        '12':'iconfont icon--shangpinfenlei-gai',
        '13':'iconfont icon-shuju'
      }
    }
  },
  created(){
    this.getMenusList()
    this.activePath = window.sessionStorage.getItem("activePath")
  },
  methods:{
    // 保存链接的激活状态
    SavaNavState(activePath){
      window.sessionStorage.setItem('activePath',activePath)
      this.activePath = activePath
    },
    // 点击按钮实现折叠和展开
    toggleCollpase(){
      this.isCollapse = ! this.isCollapse
    },
    // 退出登录方法
    exitbtn(){
      window.sessionStorage.clear()
      this.$router.push('/login')
      this.$message.success('退出成功!')
    },
    // 获取左侧 所有的菜单
  async getMenusList(){
      let res = await this.$http.getMenus()
      if(res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.LeftInfo = res.data
    }
  },
  computed:{
    
  }
}
</script>

<style lang="less" scoped>
.Home_Container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  color: #fff;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      border-radius: 47%;
    }
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  background-color: #333744;
  .el-menu{
    border: none;
  }
}
.el-main {
  background-color: #eaedf1;
}
.el-menu-item{
  background-color: #fff;
}
.iconfont{
  margin-right: 10px;
}
.classtoggle-button{
  background-color: #4A5064;
  color: #fff;
  text-align: center;
  font-size: 10px;
  line-height: 24px;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
