<template>
	<div class="rVideo-content">
		<div class="rVideo">
			<video 
				id="myVideo" 
				:poster= 'dataList.videoImgUrl'
				:src= 'dataList.videoUrl'
				@error="videoErrorCallback"
				controls
				v-if='videoShow'
			></video>
		</div>
		<!-- 替换、删除 -->
		<changeVideoTips
			tipsType="2"
			:tipsLeft='tipsLeft'
			@delete-Image="deleteImage(indexNum)"
			@change-Image="changeImage"
			@add-Image="addImage"
			@show-Image="showImage"
			v-if="deleteMoveShows && disabled"
		></changeVideoTips>
	</div>
</template>

<script>
	import changeVideoTips from '@/components/common/RHX/changeVideoTips/changeVideoTips';
	export default {
		data() {
			return {
				isPictureShow: true, // 是否展示当前组件
				showTips: null, // 展示
				hideTips: true, // 隐藏
				videoShow: false,
				dataLists: this.dataList
			};
		},
		components: {
			changeVideoTips,
		},
		props: [
			'disabled',
			'deleteMoveShow', 
			'dataList',
			'videoWidth',
			'videoHeight',
			'autoplay',
			'loop',
			'muted',
			'initial-time',
			'duration',
			'controls',
			'danmu-list',
			'objectFit',
			'poster',
			'show-mute-btn',
			'poster-for-crawler',
		],
		created() {
			console.log(this.dataList, '视频数据');
			this.videoShow = true;
		},
		watch: {
			dataList: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听视频变化---------------------------------------');
					this.dataLists = a;
				},
				deep: true
			},
			disabled: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听视频变化---------------------------------------');
					if (b === true && this.imgSrc === '') { // 如果在预览状态，且图片没有的状态，此模块不显示
						this.isPictureShow = false;
					} else {
						this.isPictureShow = true;
					}
				},
				deep: true
			},
		},
		computed:{
			deleteMoveShows () {
				if (this.deleteMoveShow === false) {
					return true
				} else {
					return false
				}
			}
		},
		mounted() {
		},
		methods: {
			
		}
	}
	
</script>

<style>
	.rVideo-content{
		position: relative;
		width: 100%;
	}
	.rVideo{
		position: relative;
		width: 100%;
	}
	uni-video{
		position: relative;
		width: 100% !important;
	}
</style>
