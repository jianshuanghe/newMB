<template>
	<div class="selectTemplate-content" >
		<bottom
			bottomloca='13.333vw'
			@bottomTap='bottomTap'
			@botPhone='botPhone'
		></bottom>
		<div class="nijap" @tap="asd()"></div>
	</div>
</template>

<script>
	import bottom from '@/components/common/RHX/bottom/bottom';
	import { mapMutations , mapGetters } from 'vuex';
	
	export default {
		data() {
			return {
				
			};
		},
		components: {
			
			bottom,
		},
		computed: {
			i18n() {
				return this.$t('navigation');
			},
			...mapGetters(['GET_PUBLISH'])
		},
		created() {
			
		},
		watch: {
			GET_PUBLISH: {
				handler(a, b) {},
				deep: true
			}
		},
		mounted() {},
		beforeDestroy() {},
		methods: {
			asd(){
				console.log('to我的采购-详情')
				uni.navigateTo({
					url: '/pages/project/MBBO/home',
				});
			},
			...mapMutations({
				setMoreSet: 'setMoreSet'
			}),
			bottomTap:function(value){
				console.log(value)
			},
			botPhone:function(val){
				console.log(val)
			}
		}
	};
</script>

<style>
	.selectTemplate-content{
		width: 100%;
		height: 100%;
	}
	.nijap{
		width: 500upx;
		height: 100upx;
		background: red;
	}
</style>
