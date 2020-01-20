<template>
	<div class="addImage-content">
		<div class="addImage">
			<div class="insimage">照片最多可添加三张哦～</div>
			<div class=""  v-if='!disabled'>
				<addMorePicture
					class="imhae"
					v-model="listDatas.imageData"
					:server-url="listDatas.serverUrl" 
					:limit='3'
					@delete="deleteImagess" 
					@add="addImagess">
				</addMorePicture>
			</div>
			<div class="imgAdd" v-if='disabled'>
				<view  class="imageUpload1">
					+
					<p class="text">点击添加图片</p>
				</view>
			</div>
		</div>
	</div>
</template>

<script>
	import addMorePicture from './addMorePicture';
	export default {
		props: [
			'disabled',
			'itemsData',
			'indexNum',
			'dataList',
		],
		data() {
			return {
				dataLists: this.dataList,
				isImgShow: true,
				listDatas: {//行业所需资质
					imageData: [],
					serverUrl: 'https://img01.iambuyer.com/imgup/upLoad/fileUpload' // 图片上传地址
				},
			};
		},
		components: {
			addMorePicture,
		},
		computed: {},
		watch: {
			dataList: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------dataList---------------------------------------');
					this.dataLists = a;
				},
				deep: true
			},
		},
		created() {
		},
		mounted() {},
		methods: {
			//行业所需资质
			addImagess: function(e) {
				console.log(e, '添加图片');
				this.dataLists = e.allImages;
				this.$emit('tap-AddImage',this.dataLists);
				console.log('用户下单行为！！！！！！！！！！！！！！！！！！！！！！！！！！')
			},
			deleteImagess: function(e) {
				console.log(e, '删除图片');
				this.dataLists = e.allImages;
				this.$emit('tap-AddImage',this.dataLists);
				console.log('用户下单行为！！！！！！！！！！！！！！！！！！！！！！！！！！')
			},
		}
	};
</script>

<style>
	.addImage-content{
		position: relative;
		width: 100%;
	}
	.addImage{
		position: relative;
		width: 100%;
		padding: 6upx 6upx;
	}
	.insimage{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Regular;
		font-size: 26upx;
		color: #BDBDBD;
		letter-spacing: 0;
		line-height: 40upx;
		margin-bottom: 40upx;
	}
	.imageUpload1 {
		width: 220upx !important;
		height: 220upx !important;
		margin-left: 12upx;
		line-height: 180upx !important;
		text-align: center;
		font-size: 80upx !important;
		color: #D9D9D9;
		border: 0px !important;
		border-radius: 8upx;
		background: #F9F9F9;
	}
	.imageUpload1 .text{
		position: absolute;
		font-family: PingFangSC-Regular;
		font-size: 20upx;
		color: #BDBDBD;
		letter-spacing: 0;
		text-align: center;
		line-height: 20upx;
		top: 220upx;
		width: 220upx;
	}
</style>
