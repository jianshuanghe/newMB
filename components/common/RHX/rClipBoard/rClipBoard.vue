<template>
	<div class="rClipBoard-content">
		<div class="rClipBoard">
			<div class="title">{{clipBoardTitles}}</div>
			<div class="copyText">{{clipBoardLink | url}}</div>
			<div class="copyBtn">
				<div class="btn" @tap='clickClipBoard'>+ 复制链接</div>
			</div>
		</div>
		<div class="swiper-containerMask" v-if="cbState !== '1'">
			<div class="tips">当前链接已失效！</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				clipBoardTitles:this.clipBoardTitle,
				clipBoardLinks:this.clipBoardLink,
			};
		},
		props:[
			'clipBoardTitle',
			'clipBoardLink',
			'cbState'
		],
		mounted() {},
		filters: {
		  /* 格式化url */
		  url (val) {
		    return val.split('urlParams')[0] + '···';
		  },
		},
		watch: {
			clipBoardTitle: {
				handler(a, b) {
					console.log(a, b, '-----------clipBoardTitle----------');
					this.clipBoardTitles = a;
				},
				deep: true
			},
			clipBoardLink: {
				handler(a, b) {
					console.log(a, b, '-----------clipBoardLink----------');
					this.clipBoardLinks = a;
				},
				deep: true
			},
		},
		created() {
			
		},
		methods: {
			clickClipBoard () {
				console.log('复制');
				// #ifdef H5
					/**
					 * 复制内容到粘贴板
					 * content : 需要复制的内容
					 * message : 复制完后的提示，不传则默认提示"复制成功"
					 */
					var aux = document.createElement("input");
					aux.setAttribute("value", this.clipBoardLinks); 
					document.body.appendChild(aux); 
					aux.select();
					document.execCommand("copy"); 
					document.body.removeChild(aux);
					uni.showToast({
						"title":"复制成功！",
						duration:1000
					})
				// #endif
				// #ifdef MP-WEIXIN || MP-TOUTIAO || MP-BAIDU || MP-ALIPAY
					uni.setClipboardData({
						data: this.clipBoardLinks,
						success: function () {
						   uni.showToast({
							"title":"复制成功！",
							duration:1000
						   })
						}
					});
				// #endif
			},
		},
	};
</script>

<style>
	.rClipBoard-content{
		position: relative;
		width: 100%;
	}
	.rClipBoard{
		position: relative;
		width: 100%;
	}
	.title{
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 60upx;
	}
	.copyText{
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 60upx;
		overflow:hidden;
		text-overflow:ellipsis;
		display:-webkit-box;
		-webkit-box-orient:vertical;
		-webkit-line-clamp:2;
		white-space: normal;
		word-break: break-all;
		word-wrap: break-word;
	}
	.copyBtn{
		position: relative;
		width: 100%;
		height: 60upx;
	}
	.btn{
		position: relative;
		width: 40%;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #02C2A2;
		letter-spacing: 0;
		line-height: 60upx;
		float: right;
		text-align: right;
	}
	.swiper-containerMask{
		position: absolute;
		top: 0;
		background: rgba(66, 65, 65, 0.29);
		width: 100%;
		height: 100%;
	}
	.tips{
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 200px;
		z-index: 103;
	}
</style>
