
<template>
	<div class="content" >
		<div class="madeCustTitleXModule" id='yListModule'>
			<div class="madeCusttitle">定制信息</div>
			<div class="line"></div>
			<div class="custModuleList" v-if='disabled'>
				<custTitleXList
				:disabled='disabled'
				:dataList='dataLists.content.context.tempCon.custModules'
				:column='column'
				:custIndex='tapIndex'
				@tap-AddModule='tapAddModule'
				@tap-CustTitleXList='tapCustTitleXList'
				></custTitleXList>
				<!-- 模块条组件 -->
				<div class='moduleList' v-if='isModuleListShow'>
					<!-- rPicker -->
					<rPicker
					leftText='取消'
					centerText='管理模块'
					rightText='保存'
					:dataList='moduleTempList'
					:translateY="this.VwVhToPx(10, 'vh')"
					scrollHeight='88vh'
					:marginBottomShow='false'
					:scrollY='true'
					:isAnimate='true'
					rightColor='#02C2A2'
					@tap-PickerCancel='tapPickerCancel'
					@tap-PickerPreserve='tapPickerPreserve'
					>
						<moduleList
						:disabled='false'
						:scrollHeight='scrollHeight'
						:addModuleTop='addModuleTop'
						:dataList="dataListsM.content.context.tempCon.custModules" 
						:selIconList='dataListsM.content.context.tempCon.selIconList'
						:moduleTempList='moduleCustTempLists.content'
						type='1'
						:isDrag='false'
						:pickerCancel='pickerCancel'
						@tap-PreserveBotttom='tapPreserveBotttom'
						@tab-ModuleList='tabModuleList'
						>
						</moduleList>
					</rPicker>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import custTitleXList from './custTitleXList/custTitleXList';
	import rPicker from '@/components/common/RHX/rPicker/rPicker';
	import moduleList from '@/components/common/RHX/moduleList/moduleList';
	export default {
		components: {
			custTitleXList,
			rPicker,
			moduleList
		},
		props: [
			'disabled',
			'dataList',
			'column',
			'custIndexShow',
			'moduleCustTempList',
			],
		data() {
			return {
				dataLists: this.dataList,
				dataListsM: JSON.parse(JSON.stringify(this.dataList)),
				tapIndex: 0, // 记录用户点击的子项
				pickerCancel:true, // 记录用户取消按钮
				scrollHeight: 0, // 滚动区域高度
				addModuleTop: 0, // 添加模块按钮的top值
				isModuleListShow: false, // 是否展示模块list
				isModuleListShows: true, // 判断是否显示菜单项
				radioValue: {}, // 单选选中的值
				lineHeights: 0,
				content:null,
				selIconLists: this.selIconList,
				moduleCustTempLists: this.moduleCustTempList,
			};
		},
		created() {
			this.isModuleListShows = true; // 判断是否显示菜单项
			console.log(this.dataList, '----------------------dataList-----------------------');
			this.scrollHeight = this.VwVhToPx(80, 'vh') - 18 + 'px'
			this.addModuleTop = this.VwVhToPx(90, 'vh') - 60 + 'px'
		},
		mounted() {
		},
		watch: {
			moduleCustTempList: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听moduleCustTempList变化---------------------------------------');
					this.moduleCustTempLists = a;
				},
				deep: true
			},
			dataList: {
				handler(a, b) {
					console.log(a, b, '--------------------------------------监听content变化---------------------------------------');
					this.dataLists = a;
				},
				deep: true
			},
			custIndexShow: {
				handler(a, b) {
					console.log(a, b, '------------------------------------------scrollIntoCust-----------------------------------');
					this.tapIndex = a;
				},
				deep: true
			},
		},
		methods: {
			tapCustTitleXList(e) {
				console.log(e, '定制模板里的横向管理模块');
				this.$emit('tap-CustModuleYList', e);
			},
			// 点击横向列表子项
			tapModuleYitems(e) {
				console.log(e, '点击横向列表子项');
				this.tapIndex = e;
			},
			// 触发管理模块按钮
			tapAddModule() {
				this.isModuleListShow = true;
				this.$emit('set-FixedShow', false);
				console.log(this.isModuleListShow, '展示管理模块内容');
			},
			// 点击picker取消按钮
			tapPickerCancel () {
				console.log('点击picker取消按钮');
				this.pickerCancel = false; // 记录用户触发picker取消按钮
				console.log(this.pickerCancel, '----------------this.pickerCancel--------------')
				this.isModuleListShow = false; // 关闭picker
				this.$emit('set-FixedShow', true);
				this.dataListsM = JSON.parse(JSON.stringify(this.dataList));
			},
			// 点击picker确定按钮
			tapPickerPreserve (e) {
				console.log(e, '点击picker确定按钮');
				this.isModuleListShow = false; // 关闭picker
				let data = this.dataListsM.content.context.tempCon.custModules;
				this.dataLists = JSON.parse(JSON.stringify(this.dataListsM));
				this.$emit('set-FixedShow', true);
				this.$emit('tap-CustTitle', [data, '']);
			},
			// 点击模块List组件
			tabModuleList (e) {
				console.log(e, '++++++++++++++++++++++++++++点击模块List组件+++++++++++++++++++++++++++');
				this.dataListsM.content.context.tempCon.custModules = e;
			},
			// 点击添加模块底部确定按钮
			tapPreserveBotttom (e) {
				console.log(e, '点击添加模块底部确定按钮');
				this.isModuleListShow = false; // 隐藏 模块管理picker
				if (e !== undefined && e !== 'undefined' && e !== '') {
					let data = this.dataListsM.content.context.tempCon.custModules;
					data.push(e);
					console.log(data, '---------------tap-PreserveBotttom---------------');
					this.resetData(data);
				}
				
				this.$emit('set-FixedShow', true);
			},
			resetData (e) {
				let datalist = e;
				let index = Number(datalist.length - 1);
				this.tapIndex = index;
				this.dataLists = datalist
				console.log(this.tapIndex, '-------------------this.tapIndex-------------------')
				this.$emit('tap-CustTitle', [datalist, index]);
			},
		}
	};
</script>

<style>
	.madeCustTitleXModule{
		position: relative;
		width: 100%;
		background: #FFFFFF;
		margin-top: 40upx 0 0 0;
	}
	.madeCusttitle{
		position: relative;
		width: 100%;
		font-family: PingFangSC-Medium;
		font-size: 36upx;
		color: #2E2E30;
		line-height: 88upx;
		text-align: center;
		margin:0upx 0 15upx 0;
	}
</style>
