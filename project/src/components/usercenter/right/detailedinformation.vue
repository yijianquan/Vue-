<template>
	<div id="detailedinformation">
		<table>
			<tr>
				<td><p>学历：</p></td>
				<td><el-select v-model="value1" placeholder="--请选择学历--">
		          <el-option v-for="item in options1"
		            :key="item.value"
		            :label="item.label"
		            :value="item.value">
		          </el-option>
		        </el-select></td>
			</tr>
			<tr>
				<td><p>政治面貌：</p></td>
				<td><el-select v-model="value2" placeholder="--请选择政治面貌--">
		          <el-option v-for="item in options2"
		            :key="item.value"
		            :label="item.label"
		            :value="item.value">
		          </el-option>
		        </el-select></td>
			</tr>
			<tr>
				<td><p>职业：</p></td>
				<td><el-select v-model="value3" placeholder="--请选择职业--">
		          <el-option v-for="item in options3"
		            :key="item.value"
		            :label="item.label"
		            :value="item.value">
		          </el-option>
		        </el-select></td>
			</tr>
			<tr>
				<td><p>行业：</p></td>
				<td><el-select v-model="value4" placeholder="--请选择行业--">
		          <el-option v-for="item in options4"
		            :key="item.value"
		            :label="item.label"
		            :value="item.value">
		          </el-option>
		        </el-select></td>
			</tr>
			<tr>
				<td><p>工作年限：</p></td>
				<td><el-select v-model="value5" placeholder="--请选择工作年限--">
		          <el-option v-for="item in options5"
		            :key="item.value"
		            :label="item.label"
		            :value="item.value">
		          </el-option>
		        </el-select></td>
			</tr>
			<tr>
				<td><p>工作单位：</p></td>
				<td><el-input v-model="input" placeholder="请输入工作单位"></el-input></td>
			</tr>
			<tr>
				<td><p>考试信息获取途径：</p></td>
				<td><el-select v-model="value6" placeholder="--请选择考试信息获取途径--">
		          <el-option v-for="item in options6"
		            :key="item.value"
		            :label="item.label"
		            :value="item.value">
		          </el-option>
		        </el-select></td>
			</tr>
			<tr>
				<td><p>近一年内参加过的英语考试：</p></td>
				<td><el-select v-model="value7" placeholder="--请选择近一年内参加过的英语考试--">
		          <el-option v-for="item in options7"
		            :key="item.value"
		            :label="item.label"
		            :value="item.value">
		          </el-option>
		        </el-select></td>
			</tr>
			<tr>
				<td><p>邮寄地区：</p></td>
				<td><el-input v-model="input" placeholder="请输入邮寄地区"></el-input></td>
			</tr>
			<tr>
				<td><p>邮寄详细地址：</p></td>
				<td><el-input v-model="input" placeholder="建议详细填写收货地址 例如：街道名称、门牌号"></el-input></td>
			</tr>
			<tr>
				<td><p>电子邮箱：</p></td>
				<td><el-input v-model="input" placeholder="请输入邮箱"></el-input></td>
			</tr>
			<tr>
				<td><p>手机号码：</p></td>
				<td><el-input v-model="input" placeholder="请输入手机号"></el-input></td>
			</tr>
			<tr>
				<td><p>邮编：</p></td>
				<td><el-input v-model="input" placeholder="请输入邮编"></el-input></td>
			</tr>
			<tr>
				<td><p>是否需要发票：</p></td>
				<td> <el-radio v-model="radio" label="1">是</el-radio>
  				<el-radio v-model="radio" label="2">否</el-radio></td>
			</tr>
		</table>
	</div>
</template>

<script>	
  export default {
    id:"detailedinformation",
    data() {
      return{
      	radio:'1',
      	options1:[
      	{
      		value:'1',
      		label:'本科'
      	}
      	],
      	value1:'',
      	options2:[
      	{
      		value:'1',
      		label:'少先队员'
      	}
      	],
      	value2:'',
      	options3:[
      	{
      		value:'1',
      		label:'程序员'
      	}
      	],
      	value3:'',
      	options4:[
      	{
      		value:'1',
      		label:'程序员'
      	}
      	],
      	value4:'',
      	options5:[
      	{
      		value:'1',
      		label:'4年'
      	}
      	],
      	value5:'',
      	options6:[
      	{
      		value:'1',
      		label:'学校组织'
      	}
      	],
      	value6:'',
      	options7:[
      	{
      		value:'1',
      		label:'英语四级'
      	}
      	],
      	value7:'',
      }
    },
    methods: {
    }
  }
</script>

<style>
@import "../css/detailedinform.css";
</style>