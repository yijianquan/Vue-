<template>
	<div id="fillinform">
		<table>
			<tr>
				<td><p>姓（汉字）：</p></td>
				<td><el-input v-model="input" placeholder="请输入内容"></el-input></td>
			</tr>
			<tr>
				<td><p>名（汉字）：</p></td>
				<td><el-input v-model="input" placeholder="请输入内容"></el-input></td>
			</tr>
			<tr>
				<td><p>姓（拼音）：</p></td>
				<td><el-input v-model="input" placeholder="请输入内容"></el-input></td>
			</tr>
			<tr>
				<td><p>名（拼音）：</p></td>
				<td><el-input v-model="input" placeholder="请输入内容"></el-input></td>
			</tr>
			<tr>
				<td><p>性别：</p></td>
				<td><el-radio-group v-model="radio3">
		          <el-radio-button label="男"></el-radio-button>
		          <el-radio-button label="女"></el-radio-button>
		        </el-radio-group></td>
			</tr>
			<tr>
				<td><p>民族：</p></td>
				<td><el-select v-model="value1" placeholder="--请选择民族--">
		          <el-option
		            v-for="item in options1"
		            :key="item.value"
		            :label="item.label"
		            :value="item.value">
		          </el-option>
		        </el-select></td>
			<tr>
				<td><p>证件类型  ：</p></td>
				<td><el-select v-model="value2">
		          <el-option
		            v-for="item in options2"
		            :key="item.value"
		            :label="item.label"
		            :value="item.value">
		          </el-option>
		        </el-select></td>
			<tr>
				<td><p>证件号码  ：</p></td>
				<td><el-input v-model="input" placeholder="请输入内容"></el-input></td>
			</tr>
		</table>
	</div>
</template>

<script>
	
  export default {
    id:"essentialinform",
    data() {
      return{        
        radio3:'男',
        options1: [
          {
            value: '1',
            label: '汉族'
          },
        ],
        value1: '',
        options2: [
          {
            value: '1',
            label: '居民身份证（仅限大陆籍普通考生）'
          },
        ],
        value2: '',
      }
    },
    methods: {
    }
  }
</script>

<style>
@import "../css/fillinform.css";
</style>