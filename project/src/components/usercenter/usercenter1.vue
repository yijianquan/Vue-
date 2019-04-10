<template>
  <div id="usercenter">
    <div class="left">
        <div>
          <span class="content">个人中心</span>
        </div>
        <div :style="pitchon1?bgopen:bgoff">
          <a href="" @click.prevent="essentialinformation"><span :style="pitchon1?coloropen:coloroff">基本信息   ></span></a>
        </div>
        <div :style="pitchon2?bgopen:bgoff">
          <a href="" @click.prevent="detailedinformation" :style="pitchon2?coloropen:coloroff"><span>详细信息   ></span></a>
        </div>
        <div :style="pitchon3?bgopen:bgoff">
          <a href="" @click.prevent="accountbalance" :style="pitchon3?coloropen:coloroff"><span>账户余额   ></span></a>
        </div>
    </div>

    <essentialinform class="essentialinform" v-show="essentialinform">
    </essentialinform>

    <detailedinform class="detailedinform" v-show="detailedinform">
    </detailedinform>

    <div class="right1" v-show="accountnum">
      <p style="float:left;">这儿是账户余额</p>
    </div>
  </div>
</template>


<script>

  import essentialinform from './right/essentialinform'
  import detailedinform from './right/detailedinformation'

  export default {
    id:"usercenter",
    data() {
      return {
        tabPosition: 'left',
        bgopen:{'background-color':'blue','color':'white'},
        bgoff:{},
        coloropen:{'color':'#FFFFFF'},
        coloroff:{},
        essentialinform:true,
        detailedinform:false,
        accountnum:false,
        pitchon1:true,
        pitchon2:false,
        pitchon3:false,
      }
    },
    methods: {
      essentialinformation(){
        console.log(1);
        this.pitchon1=this.essentialinform=true;
        this.pitchon2=this.detailedinform=false;
        this.pitchon3=this.accountnum=false;
      },
      detailedinformation(){
        console.log(2);
        this.pitchon1=this.essentialinform=false;
        this.pitchon2=this.detailedinform=true;
        this.pitchon3=this.accountnum=false
      },
      accountbalance(){
        console.log(3);
        this.pitchon1=this.essentialinform=false;
        this.pitchon2=this.detailedinform=false;
        this.pitchon3=this.accountnum=true
      }
    },
    components: {
      essentialinform,
      detailedinform
    }
  }
</script>

<style>
@import "./css/usercenter.css";
</style>