import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/main.vue'
import usercenter from '../components/usercenter.vue'
 
Vue.use(Router)

export default new Router({
	routes:[
		{
			path:'/',
			name:main,
			component:main
		},
		{
		  path:'/usercenter',
		  name:'usercenter',
		  component:usercenter
		}
	]
})