<template>
  <div>
    <div class="TextContainer">
      <!-- <h1>施 主 请 坚 持 住 !!!</h1> -->
      <!-- <img class="imgs2" src="../../assets/11.gif" alt=""> -->
    </div>
    <!--  轮播图 -->
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in images" :key="item.id">
        <img class="imgs1" :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data(){
    return{
      images:[] // 图片
    }
  },
  created(){
    this.getImages()
  },
  methods:{
   async getImages(){
      let result = await this.$http.getImages()
      this.images = result.imges[0]
    }
  }
}
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.imgs1 {
  width: 100%;
  height: 100%;
}

</style>
