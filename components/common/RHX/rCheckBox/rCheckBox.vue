<template>
	<div class="checkBox-box">
		<div class="checkBox"  v-if= "!dataType">
			<checkbox-group @change="checkboxChange">
				<label 
				v-for="(items, index) in dataLists" 
				:key="index"
				@click="labelBtn(items.value, index)" 
				class='items-box left'  v-if="items.type === dataType">
					<checkbox :value="items.value" :checked="items.checked" v-show="false" />
					<div class="rRadio-items2"
					 :class="(index + 1)%4===0 && index > 2? 'rRadio-itemsM' : 'rRadio-items2'"
					 :style="items.checked === true ? selectStyle2 : noSelectStyle2">
						{{items.value}}
					</div>
					<div class="clear"></div>
				</label>
			</checkbox-group>
		</div>
		<!-- 实例保障 和 支付多选部分  -->
		<div class="checkBox paddingBox" v-if= "dataType === '2'">
			<checkbox-group @change="checkboxChange">
				<label 
				v-for="(items, index) in dataLists" 
				:key="index"
				@click="labelBtn(items.value, index)" 
				class='items-box2 left'  
				v-if="items.type === dataType">
					<checkbox :value="items.value" :checked="items.checked" v-show="false" />
					<div class="rRadio-items"
					 :class="(index + 1)%5===0 && index > 12? 'rRadio-itemsM3' : 'rRadio-items3'"
					 :style="items.checked === true ? selectStyle2 : noSelectStyle2">
						{{items.value}}
					</div>
					<div class="clear"></div>
				</label>
			</checkbox-group>
		</div>
		<!-- 图片选择  -->
		<div class="checkBox " v-if= "dataType === '3'">
			<checkbox-group @change="checkboxChange">
				<label 
				v-for="(items, index) in dataLists" 
				:key="index"
				@click="labelBtn(items.value, index)" 
				class='items-box2 left'  >
					<checkbox :value="items.value" :checked="items.checked" v-show="false" />
					<div class="rRadio-items4" :class="(index + 1) % 4 === 0 && index > 2 ? 'rRadio-itemsM4' : 'rRadio-items4'">
						<div class="img-box"><image class="img" :src="items.imgUrl" mode='widthFix'></image></div>
						<div class="text-box">
							{{ items.title }} 
							<image 
							class="selectImg3" 
							:src="items.checked === true ? selectEd : select"
							></image>
						</div>
					</div>
					<div class="clear"></div>
				</label>
			</checkbox-group>
		</div>
		<!-- 样式选择  -->
		<div class="checkBox" v-if= "dataType === '4'" >
			<checkbox-group @change="checkboxChange">
				<label 
				v-for="(items, index) in dataLists" 
				:key="index"
				@click="labelBtn(items.value, index)" 
				class='items-box2'>
					<checkbox :value="items.value" :checked="items.checked" v-show="false" />
					<div class="rRadio-items5" :class="(index + 1) % 4 === 0 && index > 2 ? 'rRadio-itemsM5' : 'rRadio-items5'">
						<div class="styleClose-box">
							<div class="SC-left left">
								<div class="SC-image-box"><image class="SC-image" :src="items.imgUrl"></image></div>
							</div>
							<div class="SC-right left">
								<div class="SC-text-box">
									<div class="SC-text">
										{{ items.title }}
										<image class="selectImg" :src="items.checked === true ? selectEd : select"></image>
									</div>
									<div class="SC-ins">{{ items.content3 }}</div>
								</div>
							</div>
							<div class="clear"></div>
						</div>
					</div>
				</label>
			</checkbox-group>
		</div>
		<!-- 样式选择  -->
		<div class="checkBox6" v-if= "dataType === '5'" >
			<checkbox-group @change="checkboxChange" v-if="itemsData && itemsData.mType === 'moreModule'">
				<label 
				v-for="(items, index) in dataLists" 
				:key="index"
				@click="labelBtn(items.value, index)" 
				
				class='items-box2 left'>
					<checkbox :value="items.value" :checked="items.checked" v-show="false" />
					<div class="rRadioTitle">{{items.styleName}}</div>
					<div class="rRadio-items6 left" :style="current === index ? selectStyle : noSelectStyle">
						<image class="items-img" :src="items.itemData.moduleImg" mode='aspectFit'></image>
						<image
						class="selectImg6" 
						:src="items.checked === true ? selectEd : select"
						></image>
					</div>
					
				</label>
				
				<div class="clear"></div>
			</checkbox-group>
			<checkbox-group @change="checkboxChange" v-if="!itemsData || itemsData.mType !== 'moreModule'">
				<label 
				v-for="(items, index) in dataLists" 
				:key="index"
				@click="labelBtn(items.value, index)" 
				class='items-box2 left'>
					<checkbox :value="items.value" :checked="items.checked" v-show="false" />
					<div class="rRadioTitle">{{items.styleName}}</div>
					<div class="rRadio-items6 left" :style="current === index ? selectStyle : noSelectStyle">
						<image class="items-img" :src="items.itemData.moduleImg" mode='aspectFit'></image>
						<image
						class="selectImg6" 
						:src="items.checked === true ? selectEd : select"
						></image>
					</div>
					
				</label>
				
				<div class="clear"></div>
			</checkbox-group>
		</div>
	</div>
</template>
<script>
	
	export default {
		name: 'businessPutIn',
		props: [
			'disabled',
			'itemsData',
			'dataList',
			'dataListselectList',
			'type',
			'dataType'
		],
		data() {
			return {
				dataLists: [], // 城防多选的转型后数组
				selcetDataList: [], // 盛放选中的商机
				check: this.Static+ 'home/extendManageList/dataReport/check.png', // type 选择按钮的未选中状态 img
				checked: this.Static+ 'home/extendManageList/dataReport/checked.png', // type 选择按钮的选中状态 img
				checkedItems: this.Static+ 'home/extendManageList/dataReport/checkedItems.png', // 子项选中对勾 img
				selectEd: this.Static+ 'home/extendManageList/dataReport/checkedItems.png', // 勾选圆框 黑色
				select: this.Static+ 'home/extendManageList/dataReport/select.png', // 未勾选圆框 白色
				clickItemsIndex: '', // 记录子项点击的index
				selectStyle2: { // 选择之后样式边框变化
					background: '#02C2A2',
					color: '#FFFF',
				},
				noSelectStyle2:  { // 选择之前样式边框变化
					color: '#2E2E30',
				},
			};
		},
		components: {},
		computed: {},
		watch: {},
		created() {
			this.resetData(this.dataList);
			console.log(this.itemsData, '模块原有数据')
		},
		watch: {
			dataList: {
				handler(a, b) {
					console.log(a, b, '----------------------------------1111----dataList---------------------------------------');
					this.resetData(a);
				},
				deep: true
			}
		},
		mounted() {},
		methods: {
			// 重置数组数据，符合多选格式
			resetData(e) {
				console.log(e, '重置数据')
				this.dataLists = [];
				let checkData = []; // 组件返回值
				e.map((items, index)=>{
					if (this.dataType === '2') {
						let item = {
							selectType: items.selectType,
							type: items.type,
							typeName: items.typeName,
							key: items.key,
							value: items.value,
							checked: items.checked ? items.checked : false
						};
						// 实例保障和支付方式的双向保定
						if (this.dataListselectList) {
							this.dataListselectList.map((iteme, inde)=>{
								if (iteme.key === items.key && this.dataType === items.type) {
									item.checked = true;
									checkData.push(item);
									console.log(checkData, '---------------checkData------------')
									this.$emit('tap-CheckBox', checkData); // 将用户选择下来的子项返给前台
								}
							});
						}
						this.dataLists.push(item);
					} else if (this.dataType === '3') {
						console.log('图片选择');
						let item = {
							imgUrl: items.imgUrl,
							title: items.title,
							select: items.select,
							value: items.title,
							checked: items.select
						};
						this.dataLists.push(item);
					} else if (this.dataType === '4') {
						console.log('样式选择！');
						let item = {
							imgUrl: items.imgUrl,
							title: items.title,
							content3: items.content3,
							select: items.select,
							value: items.title,
							checked: items.select
						};
						this.dataLists.push(item);
					} else if (this.dataType === '5') {
						console.log('样式选择！');
						let item = {
							itemData: items,
							value: items.type,
							checked: false
						};
						this.dataLists.push(item);
					} else {
						let item = {
							value: items.value ? items.value : items,
							checked: false
						};
						this.dataLists.push(item);
						console.log('++++++++++++++');
					}
					console.log(this.dataLists, 'this.dataLists')
				})
			},
			// 勾选商机
			labelBtn(name, index) {
				console.log(name, index, '-----------xuanzhong-----------');
				console.log(this.selcetDataList, '=============xiugaishuju-----------');
				console.log(this.selcetDataList.join(',').indexOf(name), '"kkkkkkkkkkkkkkkkkkkkkkk"')
				if (this.selcetDataList.join(',').indexOf(name) > -1) {
					this.selcetDataList.map((items, key) => {
						console.log(this.dataLists, '-------------0--------------')
						console.log(items, '---------items-----------')
						this.dataLists[index].checked = true;
					});
				} else {
					console.log(this.dataLists, '-------------1--------------')
					this.dataLists[index].checked = false;
				}
			},
			checkboxChange: function(e) {
				this.selcetDataList = e.detail.value; // 获取选中的值
				console.log(this.selcetDataList, '--------------------selcetDataList21321321-----------------------');
				let checkData = []; // 组件返回值
				
				if (this.dataType === '3' || this.dataType === '4') {
					console.log('图片选择');
					let data=[];
					console.log(JSON.stringify(this.dataLists))
					console.log(this.dataLists, '--------------this.dataLists----------------')
					this.dataLists.map((items, index)=>{
						let dataItems={
							imgUrl: items.imgUrl,
							select: false,
							title: items.title
						};
						if (this.dataType === '4') {
							dataItems.content3 = items.content3
						};
						this.selcetDataList.map((item,key)=>{
							console.log(items.title, item, '----------------items.title-------------')
							if (items.title === item){
								dataItems.select = true;
							}
						})
						data.push(dataItems);
					});
					this.$emit('tap-CheckBox', data); // 将用户选择下来的子项返给前台
				} else if (this.dataType === '5') {
					console.log('添加新样式');
					let data={
							"iconTitle": "新增模块",
							"mType": "moreModule",
							"moduleImg" : "http://style.iambuyer.com/img/temp-xiaomi-imgs/temp-xiaomi-public-module/temp-xiaomi-public-module-06.jpg",
							"icon": {
								"notSelected" : "https://style.iambuyer.com/img/icon/fenzu_0.png",
								"selected" : "https://style.iambuyer.com/img/icon/fenzu_1.png",
								"catalog_white":"https://style.iambuyer.com/img/icon/fenzu_2.png"
							},
							"dataList": [
								
							]
						};;
					// console.log(JSON.stringify(this.dataLists))
					// console.log(this.dataLists, '--------------this.dataLists----------------')
					this.dataLists.map((items, index)=>{
						console.log( items.itemData.moduleAggregation, '形式1')
						if (String(items.itemData.moduleAggregation) === '0') { // 不可聚合
							data.mType = 'singleModule';
							console.log('出现不可聚合元素')
						}
						console.log(this.selcetDataList, '000000000000')
						this.selcetDataList.map((item,key)=>{
							console.log(items.itemData, item, '----------------items.title-------------')
							if (items.itemData.type === item){
								data.dataList.push(items.itemData);
							}
						})
					});
					this.$emit('tap-CheckBox', data); // 将用户选择下来的子项返给前台
				} else {
					this.dataLists.map((items, index)=>{
						this.selcetDataList.map((item,key)=>{
							if (items.value === item){
								checkData.push(items);
							}
						})
					});
					console.log(checkData, '----------------checkData-----------');
					this.$emit('tap-CheckBox', checkData); // 将用户选择下来的子项返给前台
				}
			}
		}
	};
</script>

<style>
	.rRadioTitle{
		position: relative;
		width: 100%;
		font-family: PingFang-SC-Medium;
		color: #2E2E30;
		letter-spacing: 0;
		font-size: 24upx;
		line-height: 40upx;
	}
	.noSelect5{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}
	.checkBox-box{
		position: relative;
		width: 100%;
	}
	.checkBox{
		position: relative;
		width: 100%;
	}
	.checkBox6{
		position: relative;
		width: 100%;
		padding: 20upx 0 0 36upx;
	}
	.paddingBox{
		padding: 0 0 40upx 40upx;
	}
	.MIL-item {
		position: relative;
		width: 50%;
	}
	.BSP-items {
		position: relative;
		width: 100%;
		padding: 4vw 1vw 0 5vw;
		overflow: scroll;
		max-height: 85vh;
		-webkit-overflow-scrolling: touch;
	}
	.items-bsp-check {
		position: relative;
		width: 100%;
		margin-bottom: 2vw;
	}
	.bsp-items {
		position: relative;
		width: 90%;
		border-radius: 2px;
	}
	.items-box{
		/* margin: 20upx 0; */
	}
	.rRadio-items{
		position: relative;
		width: 324upx;
		height: 324upx;
		margin: 20upx 0;
	}
	.items-img{
		width: 320upx;
		height: 320upx;
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.itemsChecked{
		position: absolute;
		bottom: 0;
		right: 0;
		width: 100upx;
		height: 100upx;
	}
	.marginBottom{
		position: relative;
		margin-bottom: 20vh;
	}
	.rRadio-items2{
		position: relative;
		width: 156upx;
		height: 80upx;
		margin: 10upx 14upx 10upx 0;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 80upx;
		border: 1px solid #D2D2D2;
		border-radius: 2px;
		text-align: center;
	}
	.rRadio-itemsM{
		position: relative;
		width: 156upx;
		height: 80upx;
		margin: 10upx 0;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 80upx;
		border: 1px solid #D2D2D2;
		border-radius: 2px;
		text-align: center;
	}
	.rRadio-items3{
		position: relative;
		width: 156upx;
		height: 80upx;
		margin: 10upx 14upx 10upx 0;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 80upx;
		border: 1px solid #D2D2D2;
		border-radius: 2px;
		text-align: center;
	}
	.rRadio-itemsM3{
		position: relative;
		width: 156upx;
		height: 80upx;
		margin: 10upx 0;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		letter-spacing: 0;
		line-height: 80upx;
		border: 1px solid #D2D2D2;
		border-radius: 2px;
		text-align: center;
	}
	.rRadio-items4 {
		position: relative;
		margin: 10upx 8upx 10upx 0;
		width: 160upx;
		text-align: center;
	}
	.rRadio-itemsM4 {
		position: relative;
		width: 160upx;
		margin: 10upx 0;
		text-align: center;
	}
	.img-box {
		position: relative;
		width: 100%;
	}
	.img-box .img {
		position: relative;
		width: 160upx;
	}
	.text-box {
		position: relative;
		width: 100%;
		text-align: center;
	}
	.selectImg {
		position: relative;
		width: 26upx;
		height: 26upx;
		top: 4upx;
	}
	.selectImg3 {
		position: relative;
		margin-left: 1.5vw;
		width: 26upx;
		height: 26upx;
		top: 4upx;
	}
	.rRadio-items5 {
		position: relative;
		margin: 10upx 14upx 10upx 0;
		width: 100%;
	}
	.rRadio-items5 {
		position: relative;
		margin: 10upx 14upx 10upx 0;
		width: 100%;
	}
	.rRadio-itemsM5 {
		position: relative;
		width: 100%;
		margin: 10upx 0;
	}
	.styleClose-box {
		position: relative;
		width: 100%;
		margin-bottom: 6vw;
	}
	.SC-left{
		position: relative;
		width: 29.333vw;
	}
	.SC-image-box{
		position: relative;
		width: 26.6666vw;
		height: 21.333vw;
	}
	.SC-image{
		position: relative;
		width: 200upx;
		height: 160upx;
	}
	.SC-right{
		position: relative;
		width: 62.4vw;
		padding: 2vw;
	}
	.SC-text-box{
		position: relative;
		width: 100%;
	}
	.SC-text{
		position: relative;
		font-family: PingFangSC-Regular;
		font-size: 26upx;
		color: #2E2E30;
		line-height: 44upx;
		margin-bottom: 12upx;
	}
	.SC-ins{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Regular;
		font-size: 26upx;
		color: #9B9B9B;
		text-align: justify;
		line-height: 40upx;
	}
	.rRadio-items6 {
		position: relative;
		width: 320upx;
		height: 320upx;
		margin: 20upx 0;
		margin: 10upx 36upx 10upx 0;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2e2e30;
		letter-spacing: 0;
		line-height: 80upx;
		border: 1px solid #d2d2d2;
		border-radius: 2px;
		text-align: center;
	}
	.items-img {
		width: 300upx;
		height: 300upx;
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.itemsChecked {
		position: absolute;
		bottom: -4upx;
		right:-4upx;
		width: 100upx;
		height: 100upx;
	}
	.selectImg6{
		position: absolute;
		right: 20upx;
		width: 36upx;
		height: 36upx;
		top: 20upx;
	}
</style>
