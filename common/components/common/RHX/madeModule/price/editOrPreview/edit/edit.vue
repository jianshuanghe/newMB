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
					:isPassword='false'
					placeholder="请输入商品单位"
					:disabled='!disabled'
					:adjustPosition="true"
					:maxlength="5"
					inputColor='#2E2E30'
					inputFontSize='4.266vw'
					inputLineHeight='10.466vw'
					inputLine=''
					inputWidth=''
					inputHeight='10.466vw'
					inputTAlign='left'
					inputPadding='1.333vw'
					inputBG="rgba(212, 253, 247, 0.21)"
					inputBorder="1px solid #02C2A2"
					inputBStyle="dashed"
					@tap-Input='tapInputUnit'
					></inputBox>
				</div>
				<div class="clear"></div>
			</div>
			<!-- 编辑起批量和商品价格 -->
			<div class="dataList">
				<div class="items" v-for="(items, index) in dataLists.dataList" :key="index">
					<editItems
					:item='items'
					:index='index'
					:dataList='dataLists'
					@tap-UpDataEditItems='tapUpDataEditItems'
					@tap-EditItems='tapEditItems'
					></editItems>
					<!-- 删除、上移、下移 -->
					<deleteMoveTips
					:dataList='dataLists.dataList'
					:itemsData='dataLists.dataList[0]'
					:isMoveShow='false'
					:indexNum='index'
					dMWidth='100%'
					dMHeight='100%'
					@tap-DeleteMoveTips='tapDeleteMoveTips'
					v-if='deleteMoveShow && disabled'></deleteMoveTips>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import inputBox from '@/components/common/RHX/madeCustModule/basicInformation/inputBox';
	import deleteMoveTips from '@/components/common/RHX/deleteMoveTips/deleteMoveTips';
	import editItems from './editItems';
	export default {
		components: {
			inputBox,
			editItems,
			deleteMoveTips
		},
		props: [
			'disabled',
			'dataList',
			'deleteMoveShow'
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
			// 点击删除、上移、下移
			tapDeleteMoveTips (e) {
				console.log(e[0], e[1], '删除、上移、下移操作后返回的数据，e[0]:返回的dataList， e[1]:返回的布尔值：当触发删除最后数组没有数据时，返回false');
				this.dataLists.dataList = e[0];
				this.deleteMoveTipsShow = e[1];
				e[1] === false ? this.manageType = 1 : this.manageType = 0;
				console.log(this.manageType, '------------------this.manageType-------------------');
				let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists); // 合并数据
				this.$emit('tap-IMGCONTENTA', data);
			},
			// 商品单位
			tapInputUnit(e) {
				console.log(e, '商品单位');
				this.dataLists.unit = e; // 商品单位
				this.$emit('tap-UpDataEdit',this.dataLists);
			},
			// 编辑价格明细
			tapEditItems (e) {
				console.log(e, '编辑价格明细');
				this.dataLists = e;
				this.$emit('tap-UpDataEdit',this.dataLists);
			},
			// 更新价格明细部分数据
			tapUpDataEditItems (e) {
				console.log(e, '更新价格明细部分数据');
				this.dataLists.dataList = e;
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
		margin-bottom: 2vw;
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
