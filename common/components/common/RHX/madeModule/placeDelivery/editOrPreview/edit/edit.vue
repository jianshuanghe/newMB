<template>
	<div class="edit-content">
		<div class="edit">
			<!-- 编辑出货周期 -->
			<div class="dataList">
				<div class="items" v-for="(items, index) in dataLists.dataList" :key="index">
					<editItems
					:item='items'
					:indexNum='index'
					:dataList='dataLists'
					@tap-UpDataEditItems='tapUpDataEditItems'
					></editItems>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import editItems from './editItems';
	export default {
		components: {
			editItems,
		},
		props: [
			'disabled',
			'dataList',
			'deleteMoveShow',
			'basicData'
		],
		data() {
			return {
				dataLists: this.dataList,
				basicDatas: this.basicData
			};
		},
		created() {

		},
		watch: {
			dataList: {
				handler(a, b) {
					console.log(a, b, '-----------dataList----------');
					this.dataLists = a;
				},
				deep: true
			},
			basicData: {
				handler(a, b) {
					console.log(a, b, '-----------basicData----------');
					this.basicDatas = a;
					let data = this.basicDatas;
					data.map((items, index)=>{
						if(items.type === 'MONEY_A') {
							if (this.dataLists.dataList[0].unit === '') {
								this.dataLists.dataList[0].unit = items.unit
							}
						}
					});
				},
				deep: true
			},
		},
		methods: {
			// 更新价格明细部分数据
			tapUpDataEditItems (e) {
				console.log(e, '更新价格明细部分数据');
				this.dataLists = e;
				this.$emit('tap-UpDataEdit',this.dataLists);
			}
		}
	};
</script>

<style>
	.edit-content{
		position: relative;
		width: 100%;
	}
	.edit{
		position: relative;
		width: 100%;
	}
	.top{
		position: relative;
		width: 100%;
		background: #FFFFFF;
	}
	.textTop{
		position: relative;
		width: 24%;
		text-align: justify;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		line-height: 80upx;
	}
	.inputTop{
		position: relative;
		width: 74%;
	}
	.dataList{
		position: relative;
		background: #;
		width: 100%;
		padding: 2vw 6upx;
	}
	.items{
		position: relative;
		width: 100%;
	}
	.item-top{
		position: relative;
		width: 100%;
		padding: 0vw 0 2vw 0;
	}
	.text1{
		position: relative;
		width: 22%;
		text-align: justify;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		line-height: 80upx;
	}
	.input-box{
		position: relative;
		width: 55%;
	}
	.num-box{
		position: relative;
		width: 100%;
	}
	.input2{
		position: relative;
		width: 41%;
	}
	.symbol{
		position: relative;
		width: 18%;
		text-align: center;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		line-height: 80upx;
	}
	.unit{
		position: relative;
		width: 23%;
		text-align: left;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		line-height: 80upx;
		padding: 0 0 0 2vw;
	}
	.item-bottom{
		position: relative;
		width: 100%;
		padding: 0vw 0 2vw 0;
	}
	.input3{
		position: relative;
		width: 100%;
	}
</style>
