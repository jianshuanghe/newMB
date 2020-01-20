<template>
	<div class="address-content">
		<div class="address">
			<div class="address-box">
				<div class="title left">选择地区</div>
				<div class="text left">
					<provinceCity
					column="3" 
					textAlignArea='left'
					bgColor='#F9F9F9'
					marginArea='0 0 0 -7px'
					:value="itemsDatas.cityStr" 
					pickerBg='#F9F9F9'
					@clickCity="getCity"
					></provinceCity>
				</div>
				<div class="clear"></div>
			</div>
			<div class="line"></div>
			<div class="address-box">
				<div class="title left">详细地址</div>
				<div class="text left">
					<inputBox
						:value="itemsDatas.value"
						type="text"
						:isPassword='false'
						placeholder="如街道、楼层等详细地址"
						:adjustPosition="true"
						:maxlength="100"
						inputTAlign='left'
						inputColor='#2E2E30'
						inputFontSize='3.8vw'
						inputHeight='10.466vw'
						inputLineHeight='10.466vw'
						inputPadding='1.333vw'
						inputBorder="1px solid #F9F9F9"
						@tap-Input='tapAddress'
					></inputBox>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import provinceCity from '@/components/common/provinceCity/provinceCity.vue';
	import inputBox from '@/components/common/RHX/inputBox/inputBox';
	export default {
		components: {
			inputBox,
			provinceCity
		},
		data() {
			return {
				dataLists: this.dataList,
				itemsDatas: this.itemsData,
			};
		},
		props: [
			'disabled',
			'dataList',
			'itemsData',
			'indexNum',
		],
		watch: {
			dataList: {
				handler(a, b) {
					this.dataLists = a;
				},
				deep: true
			},
			itemsData: {
				handler(a, b) {
					this.itemsDatas = a;
				},
				deep: true
			},
		},
		created () {
		},
		mounted() {},
		beforeDestroy () {
			console.log('页面销毁之前缓存数据更新-----------setImgList、setCaiGouList');
		},
		methods: {
			getCity(e) {
				console.log(e, '选择城市返回的code、text');
				this.itemsDatas.cityStr = e.cityText; // 用户选择的省市区文字
				this.dataLists[this.indexNum] = this.itemsDatas;
				this.$emit('tap-AddressEdit', this.dataLists);
			},
			tapAddress (e) {
				console.log(e, '详细地址');
				this.itemsDatas.value = e;
				console.log(this.indexNum, '------------this.indexNum-------------');
				// this.dataLists[this.indexNum] = this.itemsDatas;
				this.dataLists.map((items, index)=>{
					if(this.indexNum === index) {
						items = this.itemsDatas
					}
				});
				// let data = this.mergeBasicData(this.basicDatas, this.dataLists.type, this.dataLists); // 合并数据
				this.$emit('tap-AddressEdit', this.dataLists);
			}
		}
	};
</script>

<style>
	.address-content{
		position: relative;
		width: 100%;
		background: #F9F9F9;
		margin-bottom: 12upx;
	}
	.address{
		position: relative;
		width: 100%;
		padding: 0 30upx;
	}
	.address-box{
		position: relative;
		width: 100%;
	}
	.title{
		position: relative;
		width: 20%;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		line-height: 11vw;
	}
	.text{
		position: relative;
		width: 80%;
	}
</style>
