<template>
	<div class="custTitleAdd-content">
		<div class="custTitleAdd">
			<div class="add-btn" @tap='addCustModule'>
				<div class="addtext">管理模块</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {
		},
		props: [],
		data() {
			return {
			};
		},
		created() {
		},
		mounted() {},
		watch: {
			scrollFixedShow: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听scrollFixedShow变化---------------------------------------');
				},
				deep: true
			}
		},
		methods: {
			addCustModule(){
				console.log('触发添加管理模块');
				this.$emit('tap-CustTitleAdd');
			}
		}
	};
</script>

<style>
	.custTitleAdd-content{
		position: relative;
		width: 100%;
	}
	.custTitleAdd{
		position: relative;
		width: 160upx;
		height: 48upx;
		background: #FFFFFF;
		box-shadow: -1px 0 0 0 #F5F5F5;
	}
	.add-btn{
		position: relative;
		background: #FFFFFF;
		border: 1px solid #2E2E30;
		border-radius: 39px;
		border-radius: 39px;
		width: 136upx;
		height: 44upx;
		margin: auto;
		margin-top: 14upx;
	}
	.addtext{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #2E2E30;
		line-height: 40upx;
		text-align: center;
	}
</style>
