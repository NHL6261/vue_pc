<template>
  <div id="ContainerTenter">
    <div class="Login_Text">
      <!-- 头像区域 -->
      <div class="Img_Header">
        <img src="../../assets/Mrni.jpg" alt="" />
      </div>
      <!-- 登录表单区域 -->
      <el-form
        ref="resetInputRef"
        :rules="rules"
        :model="LoginForm"
        label-width="0px"
        class="Login_Form"
      >
        <!-- 用戶名 -->
        <el-form-item prop="username">
          <el-input
            v-model="LoginForm.username"
            prefix-icon="iconfont icon-mine-red"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <!-- 密碼 -->
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="LoginForm.password"
            prefix-icon="iconfont icon-lock-fill"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <!-- 按鈕 -->
        <el-form-item class="btns">
          <el-button type="primary" @click.passive="goLogin">登录</el-button>
          <el-button @click="resetLoginForm()" type="info">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    data(){
        return{
            LoginForm:{
                username:'admin', // 用户名
                password:'admin', // 密码
            },
            // 获取登录信息
            UserInfo:[], // 用户登录正确
            SavaToken:'',// 保存token
            // 表单的验证规则
            rules: {
                // 用户名验证
                username:[
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
                ],
                // 用户密码验证
                password:[
                    { required: true, message: '请输入有效密码', trigger: 'blur' },
                    { min: 3, max: 16, message: '长度在 1 到 16 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        resetLoginForm(){
            // 重置表单
            this.$refs.resetInputRef.resetFields()
            console.log(this)
        },
        // 表单预验证
        goLogin(){
            this.$refs.resetInputRef.validate( async valid => {
                if(valid !== false){
                    const result = await this.$http.getUserInfo()
                    this.SavaToken = result.data[0].token
                    if(result.data[0].status === 200){
                        this.$message.success('恭喜您,登录成功!')
                        window.sessionStorage.setItem("token",this.SavaToken)
                        this.$router.push('home')
                    }else{
                        alert('数据不合法')
                        this.$message.success('恭喜您,登录成功!')
                    }
                }else{
                    this.$message.error('请输入合法信息!')
                }
            })
        }
    },
    // watch: {

    // },
}
</script>

<style lang="less" scoped>
#ContainerTenter {
  width: 100%;
  height: 100%;
  background-color: #2b4b6b;
}
.Login_Text {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .Img_Header {
    width: 130px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.Login_Form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: space-between;
}
</style>
