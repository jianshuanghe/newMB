<template>
	<view class="newsList"></view>
</template>

<script>
	export default {
		data() {
			return {
				tabItems: 1
			}
		},
		components: {

		},
		computed: {
			i18n () {
			  return this.$t('Home_title')  
			},
	    },
		onLoad() {
			uni.setNavigationBarTitle({
				title: this.i18n.title5
			});  
		},
		created() {
			this.shareEachPage(); // 分享
		},
		methods: {
			
		}
		
	}
</script>

<style>
</style>
