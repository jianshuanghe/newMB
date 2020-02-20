<template>
	<div class="templatePro-content1">
		<rVideo></rVideo>
	</div>
</template>

<script>
	
	import rVideo from '@/components/common/RHX/rVideo/rVideo';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		name: '',
		components: {
			rVideo,
		},
		data() {
			return {
				
			};
		},
		onLoad (optionParams) {
			
		},
		computed: {
			
		},
		watch: {
			GET_PUBLISH: {
				handler(a, b) {
				},
				deep: true
			}
		},
		mounted() {
			
		},
		beforeDestroy () {
			// console.log('页面销毁之前缓存数据更新-----------setImgList、setCaiGouList');
			
		},
		methods: {
		}
	};
</script>

<style>
	.templatePro-content{
		position: relative;
		width: 100%;
	}
	.templatePro{
		position: relative;
		width: 100%;
	}
</style>
