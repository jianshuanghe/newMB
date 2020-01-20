<template>
	<div class="pickerButtonInfor-content">
		<div class="pickerButtonInfor" v-if='typeBtn === 0'>
			<!-- 换货服务 -->
			<div class="buttonItems">
				<!-- 名称 -->
				<div class="title">换货服务</div>
				<!-- 单选框 -->
				<rRadio
				:dataList='selectLists'
				:dataListselectList='dataLists'
				type='2'
				dataType='0'
				@tap-Radio='tapRadioOne'
				v-if='true'></rRadio>
			</div>
			<!-- 发货保障 -->
			<div class="buttonItems">
				<!-- 名称 -->
				<div class="title">发货保障</div>
				<!-- 单选框 -->
				<rRadio
				:dataList='selectLists'
				:dataListselectList='dataLists'
				type='2'
				dataType='1'
				@tap-Radio='tapRadioTwo'
				v-if='true'></rRadio>
			</div>
			<!-- 其他保障 -->
			<div class="buttonItems marginBox">
				<!-- 名称 -->
				<div class="title">其他保障(可多选)</div>
				<!-- 单选框 -->
				<rCheckBox
				:dataList='selectLists'
				:dataListselectList='dataLists'
				type='2'
				dataType='2'
				@tap-CheckBox='tapCheckBoxThr'
				v-if='true'></rCheckBox>
			</div>
		</div>
		<div class="pickerButtonInfor" v-if='typeBtn === 1'>
			<!-- 其他保障 -->
			<div class="buttonItems marginBox">
				<!-- 名称 -->
				<div class="title">请选择支付方式(可多选)</div>
				<!-- 多选框 -->
				<rCheckBox
				:dataList='selectLists'
				:dataListselectList='dataLists'
				type='2'
				dataType='2'
				@tap-CheckBox='tapCheckBoxThr'
				v-if='true'></rCheckBox>
			</div>
		</div>
	</div>
</template>

<script>
	import rRadio from '@/components/common/RHX/rRadio/rRadio';
	import rCheckBox from '@/components/common/RHX/rCheckBox/rCheckBox';
	import rPicker from '@/components/common/RHX/rPicker/rPicker';
	import fixedBgBtn from '@/components/common/button/fixedBgBtn.vue';
	export default {
		components: {
			rRadio,
			rCheckBox,
			rPicker,
			fixedBgBtn
		},
		props: [
			'leftText',
			'centerText',
			'rightText',
			'tips',
			'pickerTop',
			'translateY',
			'rightColor',
			'type',
			'scrollHeight',
			'scrollY',
			'selectList',
			'dataList',
			'marginBottomShow',
			'isAnimate',
			'typeBtn'
		],
		data() {
			return {
				selectLists: this.selectList,
				dataLists: this.dataList,
			};
		},
		watch: {
			dataList: {
				handler(a, b) {
					console.log('----------------dataList--------------')
					this.dataLists = a;
				},
				deep: true
			},
			selectList: {
				handler(a, b) {
					console.log('----------------dataList--------------')
					this.selectLists = a;
				},
				deep: true
			},
		},
		created() {},
		methods: {
			// 触发换货服务
			tapRadioOne(e) {
				console.log(e, '触发换货服务');
				this.$emit('tap-PickerButtonInforOne', e);
			},
			// 触发发货保障
			tapRadioTwo(e) {
				console.log(e, '触发发货保障');
				this.$emit('tap-PickerButtonInforTwo', e);
			},
			// 触发其他保障(可多选)
			tapCheckBoxThr(e) {
				console.log(e, '触发其他保障(可多选)');
				this.$emit('tap-PickerButtonInforThr', e);
			},
		}
	};
</script>

<style>
	.pickerButtonInfor-content{
		position: relative;
		width: 100%;
		padding-bottom: 20vh;
	}
	.pickerButtonInfor{
		posithion: relative;
		widt: 100%;
	}
	.buttonItems{
		position: relative;
		width: 100%;
		min-height: 180upx;
	}
	.title{
		position: relative;
		width: 100%;
		ont-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #9B9B9B;
		letter-spacing: 0;
		line-height: 60upx;
		padding: 2vw 30upx 0 30upx;
	}
	.marginBox{
		padding:0 0 5vh;
	}
</style>
