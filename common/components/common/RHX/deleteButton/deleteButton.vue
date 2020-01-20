<template>
	<div class="deleteButton-content">
		<div class="deleteButton">
			<div class="dataList">
				<div class="items left" v-for="(items, index) in dataList" :key="index">
					<div class="text">{{items.value}}</div>
					<div class="delete" v-if='disabled' @tap='clickDelBtn(index)'>
						<image class="delIcon" :src='dels'></image>
					</div>
				</div>
				<div class="clear"> </div>
			</div>
		</div>
	</div> 
</template>

<script>
	export default {
		data() {
			return {
				dels: this.Static+'my/dels.png', // 删除图片
				dataLists: this.dataList,
			};
		},
		props: [
			'disabled',
			'dataList',
		],
		components: {},
		computed: {
			i18n() {
				return this.$t('navigation');
			},
		},
		created () {
			console.log(this.dataList, "||||||||||||||||||||||||||||||||||||||||||")
		},
		watch: {
			dataList: {
				handler(a, b) {
					console.log(a, '----------------dataList--------------')
					this.dataLists = a;
				},
				deep: true
			},
		},
		methods: {
			clickDelBtn(e){
				console.log('点击删除按钮');
				this.$emit('tap-DeleteButton', e);
			}
		}
	};
</script>

<style>
	.deleteButton-content{
		position: relative;
		width: 100%;
	}
	.deleteButton{
		position: relative;
		width: 100%;
	}
	.dataList{
		position: relative;
		width: 100%;
	}
	.items{
		position: relative;
		width: 150upx;
		height: 80upx;
		margin-right: 20upx;
		background: #FFFFFF;
		border: 1px solid #D2D2D2;
		border-radius: 2px;
		border-radius: 2px;
		margin-bottom: 20upx;
	}
	.text{
		font-family: PingFangSC-Regular;
		font-size: 26upx;
		color: #2E2E30;
		letter-spacing: 0;
		text-align: center;
		line-height: 80upx;
	}
	.delete{
		position: absolute;
		width: 44upx;
		height: 44upx;
		top: -22upx;
		right: -18upx;
	}
	.delIcon{
		position: relative;
		width: 44upx;
		height: 44upx;
	}
</style>
