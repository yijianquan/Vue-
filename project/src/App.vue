<template>
  <div id="app">
    <navigation @toUsercenter="toUsercenter" @toIndex="toIndex"></navigation>
    <index v-show="index_seen"></index>
    <usercenter v-show="usercenter_seen"></usercenter>
    <foot/>
  </div>
</template>

<script>
  import navigation from './components/navigation'
  import index from './components/index/index'
  import foot from './components/foot'
  import usercenter from './components/usercenter/usercenter1'

  export default {
    name: 'App',
    data() {
      return {
        index_seen:true,
        usercenter_seen:false,
      }
    },
    methods: {
      toIndex:function(){
        this.index_seen=true,
        this.usercenter_seen=false,
        console.log('跳转到了主页')       
      },
      toUsercenter:function(){
        this.index_seen=false,
        this.usercenter_seen=true,
        console.log('跳转到了个人中心')
      }
    },
    components: {
      navigation,
      index,
      foot,
      usercenter
    }
  }
</script>

<style>
a{
  text-decoration:none
}
body{
  margin:0px;
}
</style>