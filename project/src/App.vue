<template>
  <div id="app">
    <navigation @toUsercenter="toUsercenter" @toIndex="toIndex" @toRegistexam="toRegistexam" @toAlreadyregist="toAlreadyregist"></navigation>
    <index v-show="index_seen"></index>
    <usercenter v-show="usercenter_seen"></usercenter>
    <registexam v-show="registexam_seen"></registexam>
    <alreadyregist v-show="alreadyregist_seen"></alreadyregist>
    <foot/>
  </div>
</template>

<script>
  import navigation from './components/navigation'
  import index from './components/index/index'
  import foot from './components/foot'
  import usercenter from './components/usercenter/usercenter1'
  import registexam from './components/registexam/registexam'
  import alreadyregist from './components/alreadyregist/alreadyregist'

  export default {
    name: 'App',
    data() {
      return {
        index_seen:true,
        usercenter_seen:false,
        registexam_seen:false,
        alreadyregist_seen:false
      }
    },
    methods: {
      toIndex:function(){
        this.index_seen=true,
        this.usercenter_seen=false,
        this.registexam_seen=false,
        this.alreadyregist_seen=false,
        console.log('跳转到了主页')       
      },
      toUsercenter:function(){
        this.index_seen=false,
        this.usercenter_seen=true,
        this.registexam_seen=false,
        this.alreadyregist_seen=false,
        console.log('跳转到了个人中心')
      },
      toRegistexam:function(){
        this.index_seen=false,
        this.usercenter_seen=false,
        this.registexam_seen=true,
        this.alreadyregist_seen=false,
        console.log('跳转到了报考')
      },
      toAlreadyregist:function(){
        this.index_seen=false,
        this.usercenter_seen=false,
        this.registexam_seen=false,
        this.alreadyregist_seen=true,
        console.log('跳转到了已报考项目')        
      }
    },
    components: {
      navigation,
      index,
      foot,
      usercenter,
      registexam,
      alreadyregist
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