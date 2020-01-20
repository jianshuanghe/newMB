<template>
	<!-- 城市选择 -->
	<div class="provinceCity-box">
		<!-- 单列 省份 -->
		<div class="provinceCity" v-if='Number(column) === 1' >
			<picker  mode=""  @cancel='cancelPC' @change='clickPC' :value="listData.multiIndex" :range="listData.multiArray" range-key='name'>
				<view class="uni-input BI-picker" 
				:class="listData.cityText ? 'BI-pickered' : ''"
				:style="{textAlign: textAlignArea, background: pickerBg}">{{listData.cityText ? listData.cityText : '请选择'}}</view>
				<image :src="rightArrow" class="BI-rightArrow"></image>
			</picker>
		</div>
		<!-- 多列， 省市区 -->
		<div class="provinceCity" v-if='Number(column) > 1'>
			<picker  mode="multiSelector" @columnchange="columnChange" @change='clickPC' :value="listData.multiIndex" :range="listData.multiArray" range-key='name'>
				<view 
				class="uni-input BI-picker" 
				:class="listData.cityText ? 'BI-pickered' : ''"
				:style="{textAlign: textAlignArea, background: pickerBg, margin: marginArea}"
				>{{listData.cityText ? listData.cityText : '请选择'}}</view>
				<image :src="rightArrow" class="BI-rightArrow"></image>
			</picker>
		</div>
		<!-- 两列 省市 -->
		<div class="provinceCity" v-if='Number(column) == -2'>
			<picker  mode="multiSelector" @columnchange="columnChange" @change='clickPC' :range="listData.multiArray" :value="listData.multiIndex" range-key='name'>
				<view 
				class="uni-input BI-pickeraa" 
				:class="listData.cityText ? 'BI-pickered' : ''"
				:style="{textAlign: textAlignArea, background: pickerBg, margin: marginArea}"
				>{{listData.cityText ? listData.cityText : '请选择'}}</view>
			</picker>
		</div>
		<!-- 多列， 省市区 地址-->
		<div class="provinceCity" v-if='Number(column) === -1'>
			<picker  mode="multiSelector" @columnchange="columnChange" @change='clickPC' :value="listData.multiIndex" :range="listData.multiArray" range-key='name'>
				<view 
				class="uni-input BI-pickers" 
				:class="listData.cityText ? 'BI-pickered' : ''"
				:style="{textAlign: textAlignArea, background: pickerBg}"
				>{{listData.cityText ? listData.cityText : '请选择'}}</view>
				<image :src="rightArrow" class="BI-rightArrow"></image>
			</picker>
		</div>
	</div>
</template>

<script>
	import { mapMutations, mapGetters } from 'vuex';
	// column：1，代表单列， 2，代表多列省市，3代表多列省市区县
	export default{
		data(){
			return{
				rightArrow: this.Static + 'mbcImg/publish/rightArrow.png',
				listData: {
					// 组件用到的数据
					multiIndex: [0, 0, 0],
					multiArray: {
						province: [],
						city: [],
						county: []
					},
					cityText: '', // 页面展示省市区文字
					// 判断用到的数据
					province: { // 用户选择的省份
						index: 0, // 记录用户选择省份index
						text: '', // 页面显示字段
						pcode: '' // 传给后台参数
					},
					city: { // 用户选择的城市
						index: 0, //记录用户选择城市index
						text: '', // 页面显示字段
						ccode: '' // 传给后台参数
					},
					county: { // 用户选择的区县
						index: 0, //记录用户选择区县index
						text: '', // 页面显示字段
						tcode: '' // 传给后台参数
					},
					showPCT:{
						ptext: '', // 页面显示字段
						ctext: '', // 页面显示字段
						ttext: '', // 页面显示字段
					},
					paramsPCT: { // 用于接口数据省和市
						cityText: '', // 省市区文字
						pcode: '' ,// 传给后台参数
						ccode: '' ,// 传给后台参数
						tcode: '' ,// 传给后台参数
					}
				}
			}
		},
		props: [
			'bgColor',
			'marginArea',
			'textAlignArea',
			'value', 
			'column', 
			'iShowLength',
			'pickerBg'
		],
		created:function(){
			this.column = Number(this.column);
			console.log(this.column, '------------------this.column前台传过来要显示几列-------------------')
			this.listData.multiArray.province = this.province;
			if (this.column > 1||this.column === -1||this.column == -2) {
				this.listData.multiArray.city = this.city[0]
			}
			if (this.column === 3||this.column === -1||this.column == -2) {
				this.listData.multiArray.county = this.county[0][0]
			}
			console.log(this.province, this.city, this.county);
			this.listData.cityText = this.value;
		},
		computed:{
			...mapGetters(['PERSONCENTER', 'IMGDATA','GET_MY'])
		},
		methods:{
			columnChange (e) {
				console.log(e, '------------------------e---------------------')
				console.log('修改的列为：' + e.detail.column + '，值为：' + JSON.stringify(e.detail));
				this.listData.multiIndex[e.detail.column] = e.detail.value
				let column = e.detail.column; // 第几列 0, 1，2
				let indexPC = e.detail.value; // 第一列滚动到的位置,1---31
				console.log(column, indexPC, '--------------------------------------------')
				if (column === 0) { // 用户在操作第一列
					console.log('用户修改省份');
					this.province.map((item, index) => {
						if (String(index) === String(indexPC)) {
							console.log(item, '------------------items,省份----------------------')
							this.listData.province.index = indexPC; // 记录用户选择是省份index
						};
					});
					if (this.column > 1||this.column==-1||this.column == -2) { // 多列时展示城市列表
						this.city.map((items, index) => {
							if (String(index) === String(indexPC)) {
								console.log(items, '与当前省份联动的城市');
								this.listData.multiArray.city = items; // 赋值新数组
							}
						});
					};
					if (this.column > 2||this.column==-1||this.column == -2) { // 三列时展示 区县
						this.county.map((items1, index) => {
							if (String(index) === String(indexPC)) {
								console.log(items1, '与当前城市联动的区县');
								this.listData.multiArray.county = items1[0]; // 根据当前身份变化，修改第三列区县
							}
						});
					}
				} else if (column === 1) {
					console.log(this.county, '---------------对应的区县--------------')
					this.city.map((item, index) => {
						if (String(index) === String(this.listData.province.index)) { // 根据记录下的省份index,去查找对应的城市数组
							console.log(item, '------------第二列滑动，获取所在省份中所有的城市------------')
							item.map((item2, index2) => {
								if (String(index2) === String(indexPC)) {
									console.log(item2, '---------------第二列滑动，获取滑动所在的位置 哪个城市------------')
									this.listData.city.index = indexPC; // 记录用户选择是城市index
								}
							});
						}
					});
					if (this.column > 2||this.column===-1||this.column == -2) { // 三列时展示 区县
						this.county.map((items1, index) => {
							if (String(index) === String(this.listData.province.index)) { // 先根据省份判断当前区县在this.county数据中的index
								console.log(items1, '与当前城市联动的区县数组');
								this.listData.multiArray.county = items1[indexPC]; // 根据当前身份变化，修改第三列区县
							}
						});
					}
				} else if (column === 2) {
					console.log('用户修改区县');
				}
			},
			clickPC (e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				let provinceNum = e.target.value[0];
				let cityNum = e.target.value[1] || 0;
				let countyNum = e.target.value[2] || 0;
				// -------------province--------------
				this.listData.showPCT.ptext = this.province[provinceNum].name; // 记录用户选择是省份
				this.listData.paramsPCT.pcode = this.province[provinceNum].value; // 省份 ----- 用户原则的省份
				// ----------city-----------
				this.listData.showPCT.ctext = this.city[provinceNum][cityNum].name; // 记录用户选择城市
				this.listData.paramsPCT.ccode = this.city[provinceNum][cityNum].value; // 城市 ----- 用户原则的城市
				// -------------------county--------------
				this.listData.showPCT.ttext = this.county[provinceNum][cityNum][countyNum].name; // 记录用户选择是区县
				this.listData.paramsPCT.tcode = this.county[provinceNum][cityNum][countyNum].value; // 县区 ----- 用户原则的区县
				console.log(this.listData.showPCT.ptext+ '-' + this.listData.showPCT.ctext + '-' + this.listData.showPCT.ttext);
				console.log(this.listData.paramsPCT.pcode+ '-' + this.listData.paramsPCT.ccode + '-' + this.listData.paramsPCT.pcode);
				if (this.column === 1) {
					console.log(1);
					this.listData.cityText = this.listData.showPCT.ptext;
				} else if (this.column === 2) {
					console.log(2);
					this.listData.cityText = this.listData.showPCT.ptext+ '-' + this.listData.showPCT.ctext
				}  else if (this.column === -1) {
					console.log(-1);
					this.listData.cityText = this.listData.showPCT.ptext+ '-' + this.listData.showPCT.ctext + '-' + this.listData.showPCT.ttext;
				}else if (this.column == -2) {
					console.log(-2);
					this.listData.cityText = this.listData.showPCT.ptext+ '-' + this.listData.showPCT.ctext ;
				} else {
					console.log(3);
					this.listData.cityText = this.listData.showPCT.ptext+ '-' + this.listData.showPCT.ctext + '-' + this.listData.showPCT.ttext;
				}
				this.listData.paramsPCT.cityText = this.listData.cityText;
				this.$emit('clickCity', this.listData.paramsPCT) // 返回用户选择省市区code
			},
		}
	}
</script>

<style>
	.BI-text-right{
		position: relative;
		width: 100%;
		margin-top: 44upx;
		margin-bottom: 44upx
	}
	.BI-picker{
		position: relative;
		font-family: PingFang-SC-Medium;
		font-size: 28upx;
		color: #D2D2D2;
		line-height: 80upx;
		margin-left: 24upx;
		text-align: right;
		padding-right: 24upx;
		padding-top: 0;
	}
	.BI-pickeraa{
		position: relative;
		font-family: PingFang-SC-Medium;
		font-size: 28upx;
		color: #D2D2D2;
		line-height: 80upx;
		margin-left: -10upx;
		padding-right: 24upx;
		padding-top: 0;
	}
	.BI-pickers{
		position: relative;
		font-family: PingFang-SC-Medium;
		font-size: 28upx;
		color: #D2D2D2;
		line-height: 80upx;
		margin-left: 24upx;
		text-align: left;
		padding-right: 24upx;
		padding-top: 0;
	}
	.BI-pickered{
		color: #2E2E30 !important;
	}
	.BI-rightArrow{
		position: absolute;
		width: 24upx;
		height: 24upx;
		right: 0;
		top: 28upx;
	}
</style>
