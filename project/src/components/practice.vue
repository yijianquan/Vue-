<template>
	<div class="hello">
		<pre>{{content}}</pre>
	</div>

</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				content:""
			}
		},
		mounted() {
			this.axios.post("http://api.komavideo.com/news/list").then(body => {this.content = body.data;
			});
		}
	}
</script>