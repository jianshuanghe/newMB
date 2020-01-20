

<template>
	<div class="content"  >
		<div class="moduleYitems-content" @tap='tapModuleDel()'>
			<div class='moduleYitems' >
				<image class="moduleYitems" :src='delModule'/></image>
			</div>
			<div class="items-text">
				删减模块
			</div>
		</div>
	</div>
</template>

<script>
	import delModule from '@/static/mbcImg/publish/createBusiness/delModule.png';
	export default {
		components: {
		},
		props: [],
		data() {
			return {
				delModule: delModule,
			};
		},
		created() {
		},
		watch: {
			valueOne: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听valueOne变化---------------------------------------');
				},
				deep: true
			},
		},
		methods: {
			// 点击删除模块按钮
			tapModuleDel (e) {
				this.$emit('tap-ItemsDel')
				console.log(e, '点击删除模块按钮');
			},
		}
	};
</script>

<style>
	.content{
		position: relative;
		width: 20vw;
	}
	.moduleYitems-content{
		position: relative;
		width: 150upx;
	}
	.moduleYitems{
		position: relative;
		width: 80upx;
		height: 80upx;
		margin: auto;
		border-radius: 50%;
		/* background: #BDBDBD; */
	}
	.items-img{
		pposition: relative;
		width: 40upx;
		height: 40upx;
		margin: auto;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.items-text{
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #5D5D5D;
		text-align: center;
		margin-top: 16upx;
		overflow:hidden;
		text-overflow:ellipsis;
		-o-text-overflow:ellipsis;
		-webkit-text-overflow:ellipsis;
		-moz-text-overflow:ellipsis;
		white-space:nowrap;
	}
	.moduleYitemsAC{
		position: relative;
		width: 80upx;
		height: 80upx;
		margin: auto;
		border-radius: 50%;
		background-image: linear-gradient(134deg, #15D49F 0%, #57D6CF 100%);
		overflow:hidden;
		text-overflow:ellipsis;
		-o-text-overflow:ellipsis;
		-webkit-text-overflow:ellipsis;
		-moz-text-overflow:ellipsis;
		white-space:nowrap;
	}
	.items-textAC{
		font-family: PingFangSC-Regular;
		font-size: 24upx;
		color: #02C2A2;
		text-align: center;
		margin-top: 16upx;
	}
</style>
