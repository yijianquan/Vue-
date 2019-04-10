<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="5">
        <a href="">
          <el-card shadow="always" id="formalEnroll">
           <p class="title">正式报名</p>
           <p class="time">2019年05月/09月/11月</p>
           <hr/>
           <p class="message">
             正式报名阶段需要采集考生信息。报考流程：填写个人信息，选择报考区域，选择科目，缴费后完成报考服务
           </p>
          </el-card>
        </a>
      </el-col>
      <el-col :span="5">
        <a href="">
          <el-card shadow="always" id="alreadyEnroll">
            <p class="title">已报名科目</p>
            <p class="time">2019年05月/09月</p>
           <hr/>
           <P class="message">
             用以核对考生报考科目和缴费状态
           </P>
          </el-card>
        </a>
      </el-col>
      <el-col :span="5">
        <a href="">
          <el-card shadow="always" id="printCard">
            <p class="title">准考证打印</p>
            <p class="time">2019年05月/09月</p>
            <hr/>
            <p class="message">
              为确保顺利参加考试，请提前打印准考证并携带至考场，打印于5月6日10:00开始。
            </p>
          </el-card>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  
</script>

<style>
hr{
  width:100%;
  border-top:none;
}
.el-row{
  margin-top: 3%;
}
.el-col{
  margin-left: 9.5%;
}
.el-card{
  height: 300px;
}
#formalEnroll{
  background-color: #FF9933;
  color: #FFF;
}
#alreadyEnroll{
  background-color: #33CC00; 
  color: #FFF; 
}
#printCard{
  background-color: #66CCCC;
  color: #FFF;
}
.title{
  font-size: 1.6em;
  font-weight: bold;
  display: inline-block;
  margin: 0;
  margin-top: 15%;
  width: 100%;
  text-align: center;
}
.time{
  font-size: 0.9em;
  margin-top: 12px;
  text-align: center;
}
.message{
  margin-left: 1%;
  width: 98%;
  font-size: 1.03em;
  font-weight: lighter;
}
</style>