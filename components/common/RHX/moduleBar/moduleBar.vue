<!-- 实例
 <moduleBar
 :disabled='disabled' // 是否可用
 :dataList='dataList' // 传入的数组
 :indexNum='indexNum' // index
 :isShowOne='true' // 是否显示
 :valueOne="valueOne" // 双向便规定的值
 typeOne="text"  // 输入框类型
 placeholderOne='请输入' // 提示
 tTAlignOne='left' // 略
 tWidthOne="100%" // 略
 tHeightOne="7.466vw" // 略
 tPaddingOne="1.333vw" // // 略 
 tBGOne="rgba(212, 253, 247, 0.21)" // 边框背景
 tBorderOne="1px solid #02C2A2" // 边框颜色
 tBStyleOne="dashed" // input输入框边框虚线设置
 :iconSrc='iconSrc' // 默认展示的图片
 iconWidth='4.266vw' // icon宽度
 iconHeight='4.266vw' // icon高度
 iconPadding='1.5vw 0 0 0vw' // icon填充
 @tap-ModuleBar='tapModuleBar'></moduleBar>
 -->
<template>
	<div class="moduleBar-content">
		<div class="moduleBar">
			<div class="icon left">
				<replaceIcon
				:iconSrc='iconSrc'
				:iconWidth='iconWidth'
				:iconHeight='iconHeight'
				:iconPadding='iconPadding'
				:isSelect='isSelect'
				@tap-ReplaceIcon='tapReplaceIcon'
				></replaceIcon>
			</div>
			<div class="text left">
				<inputBox
					:value="valueOneText"
					:type="typeOne"
					:isPassword='false'
					:placeholder="placeholderOne"
					:placeholderStyle="placeholderStyleOne"
					:placeholderClass="placeholderClassOne"
					:disabled='disabled'
					cursorSpacing=""
					:focus="focusOne"
					confirmType=""
					confirmHold=""
					:cursor="cursorOne"
					:adjustPosition="true"
					:maxlength="5"
					:inputTAlign='tTAlignOne'
					:inputWidth="tWidthOne"
					:inputHeight="tHeightOne"
					:inputPadding="tPaddingOne"
					:inputBG="tBGOne"
					:inputBorder="tBorderOne"
					:inputBStyle="tBStyleOne"
					@tap-Input='tapInput'
				></inputBox>
			</div>
			<div class="del left">
				<div class="del-box" @tap='tapDel()'>
					<image class="delImg" :src='del'></image>
				</div>
			</div>
			<div class="clear"></div>
		</div>
	</div>
</template>

<script>
	import del from '@/static/mbcImg/publish/createBusiness/del.png';
	import replaceIcon from '@/components/common/RHX/replaceIcon/replaceIcon';
	import inputBox from '@/components/common/RHX/inputBox/inputBox';
	export default {
		components: {
			replaceIcon,
			inputBox
		},
		props: [
			'dataList',
			'itemsData',
			'indexNum',
			'isSelect',
			'disabled',
			'iconSrc',
			'iconWidth',
			'iconHeight',
			'iconTAlign',
			'iconPadding',
			'isShowOne',
			'valueOne',
			'keyNameOne',
			'typeOne',
			'placeholderOne',
			'placeholderStyleOne',
			'placeholderClassOne',
			'focusOne',
			'cursorOne',
			'adjustPositionOne',
			'maxlengthOne',
			'tTAlignOne',
			'tWidthOne',
			'tHeightOne',
			'tPaddingOne',
			'tBGOne',
			'tBorderOne',
			'tBStyleOne'],
		data() {
			return {
				del: del,
				valueOneText: this.valueOne,
				dataLists: this.dataList
			};
		},
		created() {
		},
		watch: {
			valueOne: {
				handler(a, b) {
					// console.log(a, b, '--------------------------------------监听valueOne变化---------------------------------------');
					this.valueOneText = a;
				},
				deep: true
			},
			dataList: {
				handler(a, b) {
					// console.log(a, b, '--------------------------------------dataList---------------------------------------');
					this.dataLists = a;
				},
				deep: true
			}
		},
		methods: {
			tapReplaceIcon() {
				console.log('触发更换icon');
				this.$emit('tap-ModuleBarIcon');
			},
			tapInput(e) {
				console.log(e, '一级标题操作返回数据');
				this.valueOneText = e; // 赋值一级标题内容
				this.$emit('tap-ModuleBar',[this.valueOneText, this.valueTwoText]);
				
			},
			tapDel (e) {
				console.log('删除组件');
				this.$emit('tap-ModuleBarDel');
			}
		}
	};
</script>

<style>
	.moduleBar-content{
		position: relative;
		width: 100%;
	}
	.moduleBar{
		position: relative;
		width: 100%;
	}
	.icon{
		position: relative;
		width: 7%;
	}
	.text{
		position: relative;
		width: 86%;
	}
	.del{
		position: relative;
		width: 7%;
	}
	.del-box{
		position: relative;
		width: 32upx;
		height: 32upx;
		float: right;
	}
	.delImg{
		position: relative;
		width: 32upx;
		height: 32upx;
	}
</style>
