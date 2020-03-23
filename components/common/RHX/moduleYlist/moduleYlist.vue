<!-- 实例

 <moduleYlist
 id='moduleYlist'
 :titleH='titleH'
 :disabled='true'
 :scrollInto='scrollInto' // 滚动定位id
 :tabYItemsIndex='tabYItemsIndex' // 当前置顶的模块index,用来点亮横向列表对应子项和横向列表swiper滑动情况
 :dataList="content.context.tempCon.modules"
 :scrollX='true'// 是否横向滚动
 :column='5'// 一屏显示几列
 :scrollFixedShow='!scrollFixedShow' // 在页面有一个虚拟置顶模块，当这个置顶后，页面中的模块消失，
 :fixedScroll='fixedScroll' // 滚动置顶滚定定位对象，里面两个值比较，判断当前位置
 @tap-ScrollFixedShow='tapScrollFixedShow' // 是否需要展示置顶固定定位
 @top-Fixed='topFixed'// 置顶后返回的数据函数
 @tap-ModuleYList='tapModuleYList'>// 点击此模块的函数
 </moduleYlist>
 -->
<template>
	<div class="content">
		<!-- <div class="moduleYlist-content1" v-if='isFixedShow'></div> -->
		<div class='moduleYlist-content' :style="isFixedShow === true ? moduleYlistContentFED : ''" v-if='scrollFixedShows'>
			<!-- <div class="kong"></div> -->
			<div class="moduleYlist" id='yListModule'>
				<!-- 以下采用swiper实现横向滑动， 因为上面 scroll-view 无法动画和竖向联动-->
				<swiper class="swiper" 
				:indicator-dots="false" 
				:autoplay="false" 
				:current="tapIndex2"
				:next-margin='nextMargin'
				@transition='transitionSwiper'>
					<swiper-item v-for="(items, index) in dataLists" 
						:key="index"
						class='swiperItem'>
						<!-- 横向列表子项 -->
						<moduleYitems
						:items='items'
						:indexNum='index'
						:tapIndex='tapIndex'
						@tap-ModuleYitems='tapModuleYitems'
						v-if='true'></moduleYitems>
					</swiper-item>
					<swiper-item class='swiperItem' v-if='disabled'>
						<!-- 横向列表子项 -->
						<itemsAdd
						@tap-ItemsAdd='tapItemsAdd'
						v-if='true'
						></itemsAdd>
					</swiper-item>
					<swiper-item class='swiperItem' v-if='disabled'>
						<!-- 横向列表子项 -->
						<itemsDel
						@tap-ItemsDel='tapItemsDel'
						v-if='true'
						></itemsDel>
					</swiper-item>
					<swiper-item class='swiperItem' v-if='disabled'>
						<!-- 横向列表子项 -->
						<itemsModify
						@tap-ItemsModify='tapItemsModify'
						v-if='true'
						></itemsModify>
					</swiper-item>
				</swiper>
			</div>
		</div>
		<!-- 添加模块 -->
		<div class="moduleAdd">
			<!-- 添加模块区域列表 -->
			<moduleAddList
			leftText='取消'
			centerText='添加模块'
			tips='请勾选其中一项!'
			rightText='保存'
			:dataList='moduleTempLists'
			:translateY="this.VwVhToPx(4, 'vh')"
			scrollHeight='86vh'
			:marginBottomShow='true'
			:scrollY='true'
			rightColor='#02C2A2'
			type='1'
			:isAnimate='isAnimateModule'
			@tap-PreserveBotttomFixed='tapPreserveBotttomFixedAdd'
			@tap-Cancel='tapCancelAdd'
			@tap-Preserve='tapPreserveAdd'
			v-if='moduleAddListShow'>
			</moduleAddList>
		</div>
		<!-- 模块删除 -->
		<div class='moduleList' v-if='isModuleListShow'>
			<!-- rPicker -->
			<rPicker
			leftText='取消'
			centerText='删除模块'
			rightText='保存'
			dataList=''
			:translateY="this.VwVhToPx(4, 'vh')"
			scrollHeight='86vh'
			:marginBottomShow='false'
			:scrollY='true'
			:isAnimate='true'
			rightColor='#02C2A2'
			@tap-PickerCancel='tapPickerCancel'
			@tap-PickerPreserve='tapPickerPreserve'
			>
				<moduleList
				:disabled='true'
				:isEditInput='false'
				scrollHeight='86vh'
				:addModuleTop='addModuleTop'
				:dataList="dataListsM" 
				selIconList=''
				type='1'
				:isDrag='false'
				:pickerCancel='pickerCancel'
				@tap-PreserveBotttom='tapPreserveBotttom'
				@tab-ModuleList='tabModuleList'
				>
				</moduleList>
			</rPicker>
		</div>
		<!-- 修改模块 -->
		<div class="moduleModify" v-if='moduleModifyShow'>
			<moduleModify
			:dataList='dataLists'
			:moduleTempList='moduleTempLists'
			:dataListY='dataListY'
			@tap-PreserveModuleModify='tapPreserveModuleModify'
			@tap-CancelModify='tapCancelModify'
			@tap-PreserveModify='tapPreserveModify'
			></moduleModify>
		</div>
	</div>
</template>

<script>
	import moduleYitems from '@/components/common/RHX/moduleYitems/moduleYitems';
	import itemsAdd from '@/components/common/RHX/moduleYitemsSet/itemsAdd';
	import itemsDel from '@/components/common/RHX/moduleYitemsSet/itemsDel';
	import itemsModify from '@/components/common/RHX/moduleYitemsSet/itemsModify';
	import moduleAddList from '@/components/common/RHX/moduleAddList/moduleAddList';
	import rPicker from '@/components/common/RHX/rPicker/rPicker';
	import moduleList from '@/components/common/RHX/moduleListDel/moduleList';
	import moduleModify from '@/components/common/RHX/moduleModify/moduleModify';
	export default {
		components: {
			moduleYitems,
			itemsAdd,
			itemsDel,
			itemsModify,
			moduleAddList,
			rPicker,
			moduleList,
			moduleModify
		},
		props: [
			'dataList',
			'dataListY',
			'moduleTempList',
			'disabled',
			'scrollW',
			'column',
			'fixedScroll',
			'titleH',
			'scrollInto',
			'tabYItemsIndex',
			'scrollFixedShow'
		],
		data() {
			return {
				isFixedShow: false, // 是否固定定位
				scrollFixedShows: true,
				nextMargin: "290px",
				scrollWidth: '100vw', // 横向滚动宽度
				dataLists: this.dataList,
				dataListsM: JSON.parse(JSON.stringify(this.dataList)),
				tapIndex: 0, // 记录用户点击的子项
				scrollIntos: this.scrollInto,
				moduleYlistContentFED: { // 固定定位数据
					position: 'fixed',
					top: this.titleH + 'px',
					zIndex: '105',
					width: '100%',
				},
				moduleAddListShow: false, // 是否展示添加模块列表
				pickerCancel:true, // 记录用户取消按钮
				scrollHeight: 0, // 滚动区域高度
				addModuleTop: 0, // 添加模块按钮的top值
				isModuleListShow: false, // 是否展示模块list
				isModuleListShows: true, // 判断是否显示菜单项
				radioValue: {}, // 单选选中的值
				lineHeights: 0,
				moduleModifyShow: false
			};
		},
		created() {
			let num = Math.ceil(this.dataLists.length + 1);
			let itemsWidth = 100 / this.column; // 每列宽度， 单位是vw
			let scWidth = num * itemsWidth; // 计算出的宽度；
			if (scWidth > 100) { // 如果计算出的宽度大于100vw,则需要重新赋值
				this.scrollWidth = scWidth + 'vw'; 
			} else {
				this.scrollWidth = 100 + 'vw'; 
			};
			console.log(this.titleH, '-----------------------this.titleH-----------------------');
			this.getNextMargin(); // 获取轮播子项向后偏移量
			console.log(this.moduleTempList, 'moduleTempList||');
			this.moduleTempLists = this.moduleTempList.content;
			this.scrollHeight = this.VwVhToPx(90, 'vh') - 20 + 'px';
			this.addModuleTop = this.VwVhToPx(90, 'vh') - 60 + 'px';
		},
		mounted() {
			this.yListModule()
		},
		watch: {
			titleH: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听titleH变化---------------------------------------');
					this.moduleYlistContentFED.top = a + 'px'
				},
				deep: true
			},
			dataList: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听dataList变化---------------------------------------');
					this.dataLists= a;
					this.dataListsM = JSON.parse(JSON.stringify(this.dataList))
				},
				deep: true
			},
			fixedScroll: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听fixedScroll变化---------------------------------------');
					console.log(a.scrollTop + this.titleH, 'a.scrollTop + this.titleH');
					if (a.scrollTop + this.titleH >= a.topFixedNum && a.scrollTop !== 0 ) {
						console.log('1更改哦');
						this.isFixedShow = true;
						this.$emit('tap-ScrollFixedShow', true);
					} else {
						console.log('2更改哦');
						this.isFixedShow = false;
						this.$emit('tap-ScrollFixedShow', false);
					}
				},
				deep: true
			},
			scrollInto: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听scrollInto变化---------------------------------------');
					this.scrollIntos = a;
				},
				deep: true
			},
			tabYItemsIndex: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听tabYItemsIndex变化---------------------------------------');
					this.tapIndex = a;
					let num = Math.ceil(this.dataLists.length);
					console.log(num, this.tapIndex,'------------+++++++++------------');
					if (this.disabled === false) {
						if (num - this.tapIndex >= 4) {
							this.tapIndex2 = a;
						} else {
							this.tapIndex2 = num - 4;
						}
					} else {
						this.tapIndex2 = a;
					}
				},
				deep: true
			},
			scrollFixedShow: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听scrollFixedShow变化---------------------------------------');
					this.scrollFixedShows = a;
				},
				deep: true
			},
			moduleTempList: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听moduleTempList变化---------------------------------------');
					this.moduleTempLists = a.content;
				},
				deep: true
			}
		},
		methods: {
			getNextMargin(){
				console.log('横向列表动画');
				let screenWidth = uni.getStorageSync('getSystemInfo').screenWidth; // 当前设备的屏幕宽度
				console.log(screenWidth);
				this.nextMargin = screenWidth/this.column* (this.column - 1) + 'px'
			},
			yListModule () {
				console.log('判断当前很想模块所在位置');
				// 计算 x y 轴点击位置
				var query = uni.createSelectorQuery().in(this);
				query.select('#yListModule').boundingClientRect();
				query.exec(res => {
					console.log(res, '-------------res-------------')
					let topY = res[0].top;
					console.log(topY, '---------------------topY------------------');
					this.$emit('top-Fixed', topY);
				});
			},
			// 点击横向列表子项
			tapModuleYitems(e){
				console.log(e, '点击横向列表子项');
				this.tapIndex = e[1];
				this.$emit('tap-ModuleYList', e);
			},
			// -------------------------------------------------------添加模块---------------------------------------------------------------
			// 点击添加模块按钮
			tapItemsAdd (e) {
				console.log(e, '点击添加模块按钮');
				this.moduleAddListShow = true; // 展示添加模块列表
				this.isAnimateModule = false; // 取消模块管理动画
				this.$emit('set-FixedShow', false);
				console.log(this.isAnimateModule, '----------------------isAnimateModule---------------------')
			},
			// 点击picker取消
			tapCancelAdd (e) {
				console.log('点击picker取消');
				this.$emit('set-FixedShow', true);
				this.moduleAddListShow = false; // 取消展示添加模块列表
			},
			// 点击picker确定
			tapPreserveAdd (e) {
				console.log(e, '点击picker确定');
				console.log(this.dataLists)
				// this.$emit('tap-PreserveBotttom', e); // 将选中的值返回给父组件
				this.moduleAddListShow = false; // 取消展示添加模块列表
				// let data = this.content.context.tempCon.modules;
				this.dataLists.push(e);
				console.log(this.dataLists, '---------------tap-PreserveBotttom---------------');
				this.distributeId(this.dataLists);
				this.$emit('set-FixedShow', true);
			},
			// 点击添加模块底部确定-----fixed----按钮
			tapPreserveBotttomFixedAdd () {
				this.$emit('tap-PreserveBotttom');
			},
			// 给每个数组数组添加id
			distributeId (e) {
				let datalist = e;
				datalist.map((item, index)=>{
					item.id = 'mb' + this.newGuid(); // 每一项添加id 用来点击目录定位到当前项，因为uni-app这样定义的
				});
				console.log(datalist, '增加id----------数据')
				this.scrollIntos = datalist[datalist.length - 1].id;
				this.$emit('tap-Title', [datalist, this.scrollIntos]);
			},
			// -------------------------------------------------------删除模块---------------------------------------------------------------
			// 触发管理模块按钮
			tapItemsDel() {
				console.log(this.dataList, '往删除模块里传的数据！');
				this.dataLists = this.dataList;
				this.isModuleListShow = true;
				this.$emit('set-FixedShow', false);
				console.log(this.isModuleListShow)
			},
			// 点击picker取消按钮
			tapPickerCancel () {
				console.log('点击picker取消按钮');
				this.pickerCancel = false; // 记录用户触发picker取消按钮
				console.log(this.pickerCancel, '----------------this.pickerCancel--------------')
				this.dataListsM = JSON.parse(JSON.stringify(this.dataList));
				this.$emit('set-FixedShow', true);
				this.isModuleListShow = false; // 关闭picker
			},
			// 点击picker确定按钮
			tapPickerPreserve (e) {
				console.log(e, '点击picker确定按钮');
				this.isModuleListShow = false; // 关闭picker
				if (uni.getStorageSync('currentList')) {
					let currentList = uni.getStorageSync('currentList'); // 读取缓存中用户修改的数据
					let newDate=[];
					currentList.map((item, index)=>{
						if(item.isShow === 1) {
							delete item.SortNumber;
							delete item.index;
							delete item.isShow;
							delete item.animation;
							delete item.y;
							delete item.x;
							newDate.push(item);
						}
					});
					console.log(newDate, '----------处理后的数据-----------')
					this.dataLists = newDate;
					this.$emit('set-FixedShow', true);
					this.$emit('tap-Title', [newDate, '']);
				};
			},
			// 点击模块List组件
			tabModuleList (e) {
				console.log(e, '++++++++++++++++++++++++++++点击模块List组件+++++++++++++++++++++++++++');
				this.content.context.tempCon.modules = e;
			},
			// -------------------------------------------------------修改模块---------------------------------------------------------------
			tapItemsModify(e){
				this.moduleModifyShow = true;
				this.$emit('set-FixedShow', false);
			},
			// 取消修改模块
			tapCancelModify (e) {
				console.log(e, '取消修改模块');
				this.moduleModifyShow = e[1];
				this.$emit('set-FixedShow', true);
			},
			// 确定修改模块
			tapPreserveModify (e) {
				console.log(e, '确定修改模块');
				this.moduleModifyShow = e[1];
				this.$emit('tap-Title', [e[0], '']);
				this.$emit('set-FixedShow', true);
			},
			// tapPreserveModuleModify
			tapPreserveModuleModify (e) {
				this.moduleModifyShow = e[2];
				this.$emit('tap-Title', [e[0], e[1]]);
			}
		}
	};
</script>

<style>
	.uni-swiper-slide-frame{
		width: 20vw !important;
	}
	.moduleYlist-content1{
		position: relative;
		width: 100%;
		height: 192upx;
	}
	.moduleYlist-content{
		position: relative;
		width: 100%;
	}
	.moduleYlist{
		position: relative;
		width: 100%;
		overflow: auto;
		background: #fff;
		padding: 4vw 0 0;
	}
	.scroll-W{
		white-space: nowrap;
		max-height: 100%;
	}
	.cont{
		position:relative;
		height:3vw;
	}
	.kong{
		position: relative;
		width: 100%;
		height: 4vw;
		background: #fff;
	}
	.swiperItem{
		position: relative;
		height: 160upx !important;
	}
	.swiper{
		height: 160upx !important;
	}
	uni-swiper{
		position: relative;
		height: 160upx !important;
	}
</style>
