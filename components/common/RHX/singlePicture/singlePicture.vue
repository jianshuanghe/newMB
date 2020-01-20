<!-- 实例
	<singlePicture
		:dataList='dataList' // 传进入的数组
		:itemsData='dataList[0]' // 用来深拷贝的数组第一项
		:indexNum='index' // index
		:defaultImg='defaultAddImg' // 删除图片之后的默认图片
		:imgSrc='img' // 双向绑定的图片
		mode='scaleToFill' // 图片裁剪、缩放的模式 显示13 种模式，其中 4 种是缩放模式，9 种是裁剪模式 uni-app地址：https://uniapp.dcloud.io/component/image
		lazyLoad=true // 图片懒加载。只针对page与scroll-view下的image有效
		pictureWidth='750upx' // 图片显示宽度
		pictureHeight='590upx' // 图片显示高度
		@tap-Picture='tabPicture' // 点击图片触发相关操作后会返回相应数据数据
		></singlePicture>
 -->
		
<template>
	<div class="singlePicture-content" v-if='isPictureShow'>
		<div class="singlePicture" @tap='clickSinglePicture' v-if="imgSrc !== '' || imgSrc === null || imgSrc === 'null'">
			<image 
			class="picture"
			:src='imgSrc'
			:mode='mode'
			:lazy-load='lazyLoad'
			:style="{width: pictureWidth, height: pictureHeight}"
			@delete-Image="deleteImage"
			@change-Image="changeImage"
			@error='imageError'
			></image>
		</div>
		<div class="singlePicture" v-else>
			<div class="addimg" v-if='disabled'>
				<defaultAdd 
				:imgDefaultSrc="defaultImg" 
				:widthStyle="pictureWidth" 
				:heightStyle="pictureHeight" 
				@add-ImageS="addImageS"
				></defaultAdd>
			</div>
		</div>
		<!-- 替换、删除 -->
		<changeImgTips
			tipsType="2"
			:tipsLeft='tipsLeft'
			@delete-Image="deleteImage(indexNum)"
			@change-Image="changeImage"
			@add-Image="addImage"
			@show-Image="showImage"
			v-if="!hideTips && deleteMoveShows && disabled"
		></changeImgTips>
	</div>
</template>

<script>
	import changeImgTips from '@/components/common/RHX/changeImgTips/changeImgTips';
	import defaultAdd from '@/components/common/RHX/defaultAdd/defaultAdd';
	export default {
		components: {
			changeImgTips,
			defaultAdd
		},
		props: [
			'disabled',
			'deleteMoveShow', 
			'dataList', 
			'itemsData', 
			'indexNum',
			'defaultImg', 
			'imgSrc', 
			'mode', 
			'lazyLoad', 
			'pictureWidth', 
			'pictureHeight',
			'tipsLeft'],
		data() {
			return {
				isPictureShow: true, // 是否展示当前组件
				showTips: null, // 展示
				hideTips: true, // 隐藏
				dataLists: this.dataList
			};
		},
		created() {
			console.log(this.imgSrc, '----------------------imgSrc------------------');
		},
		watch: {
			dataList: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听但图片变化---------------------------------------');
					this.dataLists = a;
				},
				deep: true
			},
			disabled: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听但图片变化---------------------------------------');
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
		methods: {
			imageError: function(e) {
				console.error('image发生error事件，携带值为' + e.detail.errMsg)
			},
			// 点击空白处隐藏changeImgTips
			showImage() {
				console.log('点击空白处隐藏changeImgTips');
				this.hideTips = true;
			},
			// 点击替换图片按钮
			changeImage(e) {
				console.log(e, '替换图片');
				this.changeData(this.indexNum, 1, e);
			},
			// 点击删除图片
			deleteImage(e) {
				console.log(e,'删除图片');
				this.changeData(this.indexNum, 0, '');
			},
			// 添加图片
			addImage(e) {
				console.log(e, '添加图片');
				this.changeData(this.indexNum, 2, e);
			},
			// 点击默认图片时添加
			addImageS(e) {
				console.log(e, '添加图片');
				this.changeData(this.indexNum, 2, e);
			},
			changeData(e, ev, evn){
				console.log(e,'用户操作数据统一返回值------index');
				console.log(ev,'用户操作数据统一返回值------类型，2：添加, 1:替换； 0：删除');
				console.log(evn,'用户操作数据统一返回值------imgUrl');
				if (!this.dataLists) {
					if (ev === 1) { // 替换
						this.$emit('tap-Picture',evn);
						this.hideTips = true;
						uni.showToast({
							title: '成功！',
							icon: 'none',
							duration: 500
						});
					} else if (ev === 0) { // 删除
						this.$emit('tap-Picture','');
						this.hideTips = true;
						uni.showToast({
							title: '成功！',
							icon: 'none',
							duration: 500
						});
					} else if (ev === 2) { // 添加
						// let items = {};
						// for (let i in this.itemsData) {
						// 	console.log(i);
						// 	if (i === 'imgUrl') {
						// 		items[i] = evn
						// 	} else {
						// 		items[i] = ''
						// 	}
						// };
						// console.log(items, '----------------添加items-------------------')
						// this.dataLists.push(items);
						// this.$emit('tap-Picture',this.dataLists);
						// this.hideTips = true;
						// uni.showToast({
						// 	title: '成功！',
						// 	icon: 'none',
						// 	duration: 500
						// });
						this.$emit('tap-Picture',evn);
						this.hideTips = true;
						uni.showToast({
							title: '成功！',
							icon: 'none',
							duration: 500
						});
					}
				};
				if (this.dataLists) {
					for(let i in this.dataLists) {
						if (String(i) === String(e)) {
							if (ev === 1) { // 替换
								this.dataLists[i].imgUrl = evn;
								this.$emit('tap-index',this.indexNum);
								this.$emit('tap-Picture',this.dataLists);
								this.hideTips = true;
								uni.showToast({
									title: '成功！',
									icon: 'none',
									duration: 500
								});
							} else if (ev === 0) { // 删除
								this.dataLists[i].imgUrl = ''; // 删除选中的子项
								this.$emit('tap-index',this.indexNum);
								this.$emit('tap-Picture', this.dataLists);
								this.hideTips = true;
								uni.showToast({
									title: '成功！',
									icon: 'none',
									duration: 500
								});
							} else if (ev === 2) { // 添加
								// let items = {};
								// for (let i in this.itemsData) {
								// 	console.log(i);
								// 	if (i === 'imgUrl') {
								// 		items[i] = evn
								// 	} else {
								// 		items[i] = ''
								// 	}
								// };
								// console.log(items, '----------------添加items-------------------')
								// this.dataLists.push(items);
								// this.$emit('tap-Picture',this.dataLists);
								// this.hideTips = true;
								// uni.showToast({
								// 	title: '成功！',
								// 	icon: 'none',
								// 	duration: 500
								// });
								this.dataLists[i].imgUrl = evn;
								this.$emit('tap-index',this.indexNum);
								this.$emit('tap-Picture',this.dataLists);
								this.hideTips = true;
								uni.showToast({
									title: '成功！',
									icon: 'none',
									duration: 500
								});
							}
						}
					}
				}
			},
			clickSinglePicture() {
				this.hideTips = false; // 不隐藏
			}
		}
	};
</script>

<style>
	.singlePicture-content {
		position: relative;
		width: 100%;
	}
	.singlePicture{
		position: relative;
		width: 100%;
	}
	.picture{
		position: relative;
		width: 100%;
	}
</style>
