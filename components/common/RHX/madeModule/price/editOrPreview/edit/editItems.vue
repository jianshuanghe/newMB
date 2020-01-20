<template>
	<div class="editItems-content">
		<div class="editItems">
			<!-- 编辑起批量 -->
			<div class="item-top">
				<div class="text1 left">起 批 量 ：</div>
				<div class="input-box left">
					<div class="num-box">
						<div class="input2 left">
							<inputBox
								:value="items.minCount !== 0 ? items.minCount : ''"
								type="number"
								placeholder="请输入"
								placeholderStyle="color: #BDBDBD"
								:disabled='index === 0 ? false : true'
								:adjustPosition="true"
								:maxlength="8"
								inputTAlign='center'
								inputWidth="100%"
								inputHeight="10.66vw"
								inputPadding="0 1vw 0 1vw"
								inputBorder="1px solid #02C2A2"
								:inputType='1'
								:indexNum='index'
								:dataList='dataList'
								@tap-UpData='tapUpData'
								@tap-MinCountStr='tapMinCountStr'
							></inputBox>
						</div>
						<div class="symbol left">～</div>
						<div class="input2 left">
							<inputBox
								value=""
								type="number"
								:placeholder="items.maxCount !== 0 ? String(items.maxCount) : '--'"
								placeholderStyle="color: #BDBDBD"
								:disabled='true'
								:adjustPosition="true"
								:maxlength="5"
								inputTAlign='center'
								inputWidth="100%"
								inputHeight="10.66vw"
								inputPadding="0 1vw 0 1vw"
								inputBorder="1px solid #E2E2E2"
								:inputType='2'
								:indexNum='index'
							></inputBox>
						</div>
						<div class="clear"></div>
					</div>
				</div>
				<div class="unit left">{{dataLists.unit !== '' ? dataLists.unit : '请填写单位'}}</div>
				<div class="clear"></div>
				<!-- 错误提示 -->
				<div class="errorBox" v-if='index === 0'>
					<div class="typeError" v-if="(items.minCount === 0) && items.errorStr === true">此项最小起批量须大于1！</div>
				</div>
				<div class="errorBox" v-if='index > 0'>
					<div class="typeError" v-if="items.minCount === 0 && items.errorStr === true">此项不符合规则！</div>
					<div class="typeError" v-if="(items.minCount !== 0 && items.minCount !== '') && items.errorStr === true">输入的数字至少应大于【上一级的最小起批量 + 1】</div>
				</div>
			</div>
			<!-- 编辑商品价格 -->
			<div class="item-bottom">
				<div class="text1 left">商品单价：</div>
				<div class="input-box left">
					<div class="num-box">
						<div class="input3">
							<inputBox2
								:value="items.money !== 0 ? items.money : ''"
								type="number"
								:placeholder="'请输入商品单价(如：'  + (index + 1) * 10 + ')'"
								placeholderStyle="color: #BDBDBD"
								:disabled='false'
								:adjustPosition="true"
								:maxlength="8"
								inputTAlign='left'
								inputWidth="100%"
								inputHeight="10.66vw"
								inputPadding="0 1vw 0 1vw"
								inputBorder="1px solid #02C2A2"
								:inputType='3'
								:indexNum='index'
								@tap-Input='tapMoney'
							></inputBox2>
						</div>
					</div>
				</div>
				<div class="unit left">元</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import inputBox from './inputBox';
	import inputBox2 from '@/components/common/RHX/inputBox/inputBox2';
	export default {
		components: {
			inputBox,
			inputBox2
		},
		props: [
			'disabled',
			'dataList',
			'index',
			'item'
		],
		data() {
			return {
				activeIndex: -1, // 记录当前操作的数组中的子项的index
				dataLists: JSON.parse(JSON.stringify(this.dataList)),
				items: this.item
			};
		},
		created() {
		},
		watch: {
			item: {
				handler(a, b) {
					console.log(a, b, '-----------监听但图片变化----------');
					this.items = a;
				},
				deep: true
			},
		},
		methods: {
			// 跟新数据
			tapUpData(e) {
				console.log(e, '跟新数据');
				this.$emit('tap-UpDataEditItems',e);
			},
			// 最小起批量
			tapMinCountStr(e) {
				console.log(e);
				this.dataLists.dataList = e;
				this.$emit('tap-UpDataEditItems',e);
			},
			// 商品价格
			tapMoney(e) {
				console.log(e, '商品价格');
				this.activeIndex = e[1];
				this.dataLists.dataList.map((item, index)=>{
					if(this.activeIndex === index) {
						item.money = e[0];
					}
				});
				console.log(this.dataLists, '商品价格');
				this.$emit('tap-EditItems',this.dataLists);
			},
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
	.errorBox{
		position: relative;
		width: 100%;
	}
	.typeError{
		position: relative;
		width: 100%;
		padding: 1vw 4upx;
		font-family: PingFangSC-Regular;
		font-size: 10upx;
		color: red;
		line-height: 20upx;
	}
</style>
