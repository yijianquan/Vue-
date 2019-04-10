<template>
  <div id="navigation">
    <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
      <el-menu-item index="1" id="homepage" @click="toIndex">主页</el-menu-item>
      <el-menu-item index="2" @click="toUsercenter">个人中心 </el-menu-item>
      <el-menu-item index="3">我要报考</el-menu-item>
      <el-menu-item index="4">已报考项目</el-menu-item>
      <el-menu-item index="5">报考须知</el-menu-item>
      <el-menu-item index="6">帮助</el-menu-item>

      <el-menu-item index="7" id="exit"><a href="#">退出</a></el-menu-item>
      <el-menu-item index="8" id="user"><img v-if="seen" src="../assets/icon.jpg">&nbsp;<a href="#">{{ email }}</a></el-menu-item>
    </el-menu>

    <a href=""><img src="../assets/enroll.jpg" id="enroll"></a>
  </div>
</template>


<script>
  export default {
    id:"navigation",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        email:'905421748@qq.com',
        seen:true
      }
    },
    methods: {
      toUsercenter(){
        this.$emit('toUsercenter')
      },
      toIndex(){
        this.$emit('toIndex')
      }
    }
  }
</script>

<style>
@import "../css/navigation.css";
</style>