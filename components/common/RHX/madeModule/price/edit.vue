<template>
	<div class="edit-content">
		<div class="edit">
			<!-- 编辑商品单位 -->
			<div class="top">
				<div class="textTop left">商 品 单 位：</div>
				<div class="inputTop left">
					<inputBox
						:value="dataLists.unit"
						type="text"
						placeholder="请输入商品单位"
						placeholderStyle="color: #BDBDBD"
						:disabled='false'
						:adjustPosition="true"
						:maxlength="5"
						inputTAlign='left'
						inputWidth="100%"
						inputHeight="10.66vw"
						inputPadding="0 1vw 0 1vw"
						inputBorder="1px solid #02C2A2"
						:inputType='2'
						@tap-Input='tapInputUnit'
					></inputBox>
				</div>
				<div class="clear"></div>
			</div>
			<!-- 编辑起批量和商品价格 -->
			<div class="dataList">
				<div class="items" v-for="(items, index) in dataLists.dataList" :key="index">
					<editItems
					:item = 'items'
					:index='index'
					:dataList='dataLists'
					@tap-UpDataEditItems='tapUpDataEditItems'
					@tap-EditItems='tapEditItems'
					></editItems>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import inputBox from '@/components/common/RHX/inputBox/inputBox';
	import editItems from './editItems';
	export default {
		components: {
			inputBox,
			editItems
		},
		props: [
			'disabled',
			'dataList'
		],
		data() {
			return {
				dataLists: this.dataList
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
		},
		methods: {
			// 商品单位
			tapInputUnit(e) {
				console.log(e, '商品单位');
				this.dataLists.unit = e; // 商品单位
				this.$emit('tap-UpDataPrice',this.dataLists);
			},
			// 编辑价格明细
			tapEditItems (e) {
				console.log(e, '编辑价格明细');
				this.dataLists = e;
				this.$emit('tap-UpDataPrice',this.dataLists);
			},
			// 更新价格明细部分数据
			tapUpDataEditItems (e) {
				console.log(e, '更新价格明细部分数据');
				this.dataLists.dataList = e;
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
		padding: 2vw 15px;
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
		background: #F9F9F9;
		width: 100%;
		padding: 2vw 15px;
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
