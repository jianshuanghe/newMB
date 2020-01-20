<template>
	<div class="moduleTitle-content">
		<!-- 模块条组件 -->
		<div class='moduleList' v-if='isModuleListShow'>
			<!-- rPicker -->
			<rPicker
			leftText='取消'
			centerText='管理模块'
			rightText='保存'
			:dataList='moduleTempList'
			:translateY="this.VwVhToPx(2, 'vh')"
			scrollHeight='100vh'
			:marginBottomShow='false'
			:scrollY='true'
			:isAnimate='true'
			rightColor='#02C2A2'
			@tap-PickerCancel='tapPickerCancel'
			@tap-PickerPreserve='tapPickerPreserve'
			>
				<moduleList
				:disabled='true'
				scrollHeight='90vh'
				:addModuleTop='addModuleTop'
				:dataList="dataList" 
				:selIconList='content.context.tempCon.selIconList'
				:moduleTempList='moduleTempList'
				type='1'
				:isDrag='true'
				:pickerCancel='pickerCancel'
				@tap-Preserve='tapPreserve'
				@tap-PreserveBotttom='tapPreserveBotttom'
				@tab-ModuleList='tabModuleList'
				>
				</moduleList>
			</rPicker>
		</div>
	</div>
</template>

<script>
import topBox from '@/components/mbbo/topBox/topBox';
import rSelect from '@/components/common/RHX/rSelect/rSelect';
import rPicker from '@/components/common/RHX/rPicker/rPicker';
import moduleList from './moduleList';

export default {
	components: {
		topBox,
		rSelect,
		rPicker,
		moduleList
	},
	props: [
		'disabled', 
		'titleText', 
		'manngeShow', 
		'dataList',
		'dataListY',
		'selIconList',
		'moduleTempList',],
	data() {
		return {
			pickerCancel:true, // 记录用户取消按钮
			scrollHeight: 0, // 滚动区域高度
			addModuleTop: 0, // 添加模块按钮的top值
			isModuleListShow: true, // 是否展示模块list
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
		this.content = this.dataListY; // 不需要很拷贝数组
		console.log(this.content, '-------------------------this.content--------------------');
		this.scrollHeight = this.VwVhToPx(90, 'vh') - 20 + 'px'
		this.addModuleTop = this.VwVhToPx(90, 'vh') - 60 + 'px'
	},
	mounted() {
		// this.titleHeight();
	},
	watch: {
		fixedScroll: {
			handler(a, b) {
				console.log(a, b, '--------------------------------------监听valueOne变化---------------------------------------');
			},
			deep: true
		}
	},
	methods: {
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
		// 点击picker取消按钮
		tapPickerCancel () {
			console.log('点击picker取消按钮');
			this.pickerCancel = false; // 记录用户触发picker取消按钮
			console.log(this.pickerCancel, '----------------this.pickerCancel--------------')
			// this.isModuleListShow = false; // 关闭picker
			this.$emit('tap-CancelModify', [null, false]);
		},
		// 点击picker确定按钮
		tapPickerPreserve (e) {
			console.log(e, '点击picker确定按钮');
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
				this.$emit('tap-PreserveModify', [newDate, false]);
			};
			
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
			this.$emit('tap-PreserveModuleModify', [datalist, scrollInto, false]);
		},
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
