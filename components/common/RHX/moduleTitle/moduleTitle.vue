<template>
	<div class="moduleTitle-content">
		<div class="moduleTitle" id='titleHeight'>
			<topBox
			padStyle='0vw 4vw'>
				<!-- 下拉框 -->
				<rSelect
				:disabled='disabled'
				:titleText='titleText'
				:manngeShow='manngeShow'
				:dataList="dataList.context.tempCon.modules" 
				:lineHeight='lineHeights'
				:isModuleListShow= '!isModuleListShow'
				:isModuleListShows= 'isModuleListShows'
				@tap-ModuleListShow='tapModuleListShow'
				@tap-ModuleItems='tapModuleItems'
				@tap-ManageModule='tapManageModule'
				></rSelect>
			</topBox>
		</div>
		<!-- 模块条组件 -->
		<div class="moduleModify" v-if='isModuleListShow'>
			<moduleModify
			:dataList='dataList.context.tempCon.modules'
			:moduleTempList='moduleTempLists'
			:dataListY='dataList'
			@tap-PreserveModuleModify='tapPreserveModuleModify'
			@tap-CancelModify='tapCancelModify'
			@tap-PreserveModify='tapPreserveModify'
			></moduleModify>
		</div>
		
	</div>
</template>

<script>
import topBox from '@/components/mbbo/topBox/topBox';
import rSelect from '@/components/common/RHX/rSelect/rSelect';
import moduleModify from '@/components/common/RHX/moduleModify/moduleModify';
export default {
	components: {
		topBox,
		rSelect,
		moduleModify
	},
	props: [
		'disabled', 
		'titleText', 
		'manngeShow', 
		'dataList',
		'moduleTempList',],
	data() {
		return {
			pickerCancel:true, // 记录用户取消按钮
			scrollHeight: 0, // 滚动区域高度
			addModuleTop: 0, // 添加模块按钮的top值
			isModuleListShow: false, // 是否展示模块list
			isModuleListShows: true, // 判断是否显示菜单项
			radioValue: {}, // 单选选中的值
			lineHeights: 0,
			content:null,
			selIconLists: this.selIconList,
			moduleTempLists: this.moduleTempList,
			dataLists: this.dataList,
		};
	},
	created() {
		this.isModuleListShows = true; // 判断是否显示菜单项
		console.log(this.dataList, '----------------------dataList-----------------------');
		// this.content = JSON.parse(JSON.stringify(this.dataList)) // 深拷贝数组
		this.content = this.dataList; // 不需要很拷贝数组
		console.log(this.content, '-------------------------this.content--------------------');
		this.moduleTempLists = this.moduleTempList.content;
		console.log(this.moduleTempList, 'moduleTempList||');
		this.scrollHeight = this.VwVhToPx(90, 'vh') - 20 + 'px'
		this.addModuleTop = this.VwVhToPx(90, 'vh') - 60 + 'px'
		console.log(this.titleText, 'llskks2')
	},
	mounted() {
		this.titleHeight();
		console.log(this.titleText, 'llskks3')
	},
	watch: {
		fixedScroll: {
			handler(a, b) {
				console.log(a, b, '--------------------------------------监听valueOne变化---------------------------------------');
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
		titleHeight() {
			console.log('判断当前很想模块所在位置');
			// 计算 x y 轴点击位置
			var query = uni.createSelectorQuery().in(this);
			query.select('#titleHeight').boundingClientRect();
			query.exec(res => {
				console.log(res, '-------------res-------------');
				let height = res[0].height;
				this.lineHeights = height + 'px';
				console.log(height, '---------------------height------------------');
				this.$emit('title-Height', height);
			});
		},
		// 点击横向列表子项
		tapModuleYitems(e) {
			console.log(e, '点击横向列表子项');
			this.tapIndex = e;
			this.$emit('tap-ModuleItemsDel', this.indexNum);
		},
		// 点击目录子项
		tapModuleItems (e) {
			this.isModuleListShows = false;
			console.log(e, '点击目录子项');
			this.$emit('tap-TitleScroll', e);
		},
		// 更新用户是否点击菜单头部，以及判断当前菜单是否需要展示
		tapModuleListShow(e) {
			console.log(e, '更新用户是否点击菜单头部，以及判断当前菜单是否需要展示');
			this.isModuleListShows = e;
		},
		// 触发管理模块按钮
		tapManageModule() {
			this.isModuleListShow = true;
			console.log(this.isModuleListShow)
		},
		
		// 点击模块List组件
		tabModuleList (e) {
			console.log(e, '++++++++++++++++++++++++++++点击模块List组件+++++++++++++++++++++++++++');
			this.content.context.tempCon.modules = e;
		},
		// 点击添加模块底部确定按钮
		tapPreserveBotttom (e) {
			console.log(e, '点击添加模块底部确定按钮');
			this.isModuleListShow = false; // 隐藏 模块管理picker
			if (e !== undefined && e !== 'undefined' && e !== '') {
				let data = this.content.context.tempCon.modules;
				data.push(e);
				console.log(data, '---------------tap-PreserveBotttom---------------');
				this.distributeId(data);
			}
		},
		// 给每个数组数组添加id
		distributeId (e) {
			let datalist = e;
			datalist.map((item, index)=>{
				item.id = 'mb' + this.newGuid(); // 每一项添加id 用来点击目录定位到当前项，因为uni-app这样定义的
			});
			let scrollInto = datalist[datalist.length - 1].id;
			this.$emit('tap-Title', [datalist, scrollInto]);
		},
		tapItemsModify(e){
			this.isModuleListShow = true;
		},
		// 取消修改模块
		tapCancelModify (e) {
			console.log(e, '取消修改模块');
			this.isModuleListShow = e[1];
		},
		// 确定修改模块
		tapPreserveModify (e) {
			console.log(e, '确定修改模块');
			this.isModuleListShow = e[1];
			this.$emit('tap-Title', [e[0], '']);
		},
		// tapPreserveModuleModify
		tapPreserveModuleModify (e) {
			this.isModuleListShow = e[2];
			this.$emit('tap-Title', [e[0], e[1]]);
		}
	}
};
</script>

<style>
.moduleTitle-content {
	position: relative;
	width: 100%;
}
.moduleTitle {
	position: relative;
	width: 100%;
}
</style>
