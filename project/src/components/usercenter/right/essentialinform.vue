<template>
  <div id="essentialinform">
    <p class="warm" style="float:left;">注意事项:</p>
      <p>1:姓（汉字）、名（汉字）、姓（拼音）、名（拼音）、性别、民族、证件号和出生日期在注册成功后系统不允许修改。若需修改，请致电021-6261124，告知客服需要修改的具体内容，并将报考时填写的有效证件复印件/照片及手写说明（包括错误、正确信息及签名）提供给客服，考试主办方会在准考证开放打印前同意修改。<br>
      2：姓（汉字）、名（汉字）、姓（拼音）、名（拼音）、性别、民族、证件号将用于准考证及考试证书，请考生务必确保信息准确。如因考生个人填写错误导致准考证及考试证书信息有误，责任由考生自负。</p>

      <fillinform></fillinform>

  </div>
</template>


<script>
  import fillinform from './fillinform'
  export default {
    id:"essentialinform",
    data() {
      return{
      }
    },
    methods: {
    },
    components: {
      fillinform
    }
  }
</script>

<style>
@import "../css/essentialinform.css";
</style>