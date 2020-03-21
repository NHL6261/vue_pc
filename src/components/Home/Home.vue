<template>
  <div>
      <el-button @click="exitbtn" type="danger">退出</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      exitbtn(){
        window.sessionStorage.clear()
        this.$router.push('/login')
        this.$message.success('退出成功!!')
      }
    }
  }
</script>

<style lang="less" scoped>

 
</style>
