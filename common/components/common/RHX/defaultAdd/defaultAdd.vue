<!-- 实例
 <defaultAdd
 	:imgDefaultSrc='defaultAddImg' // 默认显示的背景图片地址
 	widthStyle='750upx' // 宽度
 	heightStyle='304upx' // 高度
 	@add-ImageS="addImageS" // 添加图片
 ></defaultAdd>
 -->
<template>
	<div class="defaultAdd-box">
		<div class="defaultAdd" @tap='addImage'>
			<image class="bannerImg" :src="imgDefaultSrc" :style="{width: widthStyle, height: heightStyle}"></image>
		</div>
		<imgYaSuo  ref="imgYaSuo" :maxwh="800" :quality="0.6" > </imgYaSuo>
	</div>
</template>

<script>
	var _self;
	// #ifdef H5
		console.log('引入H5图片压缩组件');
		import lrz from 'lrz';
	// #endif
	// #ifdef MP-WEIXIN || MP-TOUTIAO || MP-BAIDU || MP-ALIPAY
		console.log('引入小程序图片压缩组件');
	// #endif
	import imgYaSuo from '@/components/common/yaSuoFile/imgYaSuo';
export default {
	name: 'change-img-tips',
	props: ['imgDefaultSrc', 'widthStyle', 'heightStyle'],
	data() {
		return {
			serverUploadSuccess: 'https://img01.iambuyer.com/imgup/upLoad/uploadSuccess',
			serverUrl: 'https://img01.iambuyer.com/imgup/upLoad/fileUpload',
			imageList: []
		};
	},
	created () {
	},
	methods: {
		clickShow() {
			this.$emit('show-img');
		},
		addImage: function(){
			_self = this
			uni.chooseImage({
				count: 1, // 最多可以选择的图片张数,这里设置了1张
				success: function(e){
					console.log(e, '上传图片');
					var imagePathArr = e.tempFilePaths
					
					//如果设置了limit限制，在web上count参数无效，这里做判断控制选择的数量是否合要求
					//在非微信小程序里，虽然可以选多张，但选择的结果会被截掉
					//在app里，会自动做选择数量的限制
					// #ifdef H5
						console.log('进入H5图片压缩');
						lrz(imagePathArr[0],{quality: 0.6})
						.then(function (rst) {
							// 处理成功会执行
							console.log(rst);
							imagePathArr[0] = rst.base64;
							//检查服务器地址是否设置，设置即表示图片要上传到服务器
							if(_self.serverUrl){
								uni.uploadFile({
									url:_self.serverUrl,
									fileType: 'image',
									formData:_self.formData,
									filePath: imagePathArr[0], 
									name: 'file',
									success: function(res){
										if(res.statusCode === 200){
											console.log(JSON.parse(res.data), '上传成功');
											uni.request({
												url: _self.serverUploadSuccess, //接口地址。
												data: {fileName: JSON.parse(res.data).name},
												method: 'POST',
												dataType: 'from-data',
												header: {
													'content-type': 'application/x-www-form-urlencoded'
												},
												success: function(res){
													if(res.statusCode === 200){
														console.log(JSON.parse(res.data), '上传成功');
														let imgUrl =  JSON.parse(res.data).httpUrl;
														_self.$emit('add-ImageS', imgUrl)
													}else{
													}
												},
												fail: function(res){
												}
											})
										}else{
										}
									},
									fail: function(res){
									}
								})
							}else{
							}
						})
					// #endif
					// #ifdef MP-WEIXIN || MP-TOUTIAO || MP-BAIDU || MP-ALIPAY
						console.log('进入小程序图片压缩');
						console.log(imagePathArr[0]);
						_self.$refs.imgYaSuo.yasuoImg(imagePathArr).then(e=>{
						    console.log([imagePathArr,e], '压缩后对比数据');
							imagePathArr[0] = e[0].tempFilePath;
							console.log('开始了');
							if (_self.serverUrl) {
								uni.uploadFile({
									url: _self.serverUrl,
									fileType: 'image',
									formData: _self.formData,
									filePath: imagePathArr[0],
									name: 'file',
									success: function(res) {
										if (res.statusCode === 200) {
											console.log(JSON.parse(res.data), '上传成功');
											uni.request({
												url: _self.serverUploadSuccess, //接口地址。
												data: { fileName: JSON.parse(res.data).name },
												method: 'POST',
												dataType: 'from-data',
												header: {
													'content-type': 'application/x-www-form-urlencoded'
												},
												success: function(res) {
													if (res.statusCode === 200) {
														console.log(JSON.parse(res.data), '上传成功');
														let imgUrl = JSON.parse(res.data).httpUrl;
														_self.$emit('change-Image', imgUrl);
													} else {
													}
												},
												fail: function(res) {}
											});
										} else {
										}
									},
									fail: function(res) {}
								});
							} else {
							}
						})
					// #endif
					
				}
			})
		}
	}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.defaultAdd-box {
	position relative;
	width 100%
}
.defaultAdd{
	position relative;
	width 100%
}
.bannerImg{
	position: relative;
	width: 100%;
}	
</style>
