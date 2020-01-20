<template>
	<div class="bottomBtnAddInfor-content">
		<!-- 可添加的项 -->
		<div class="inforListItem">
			<addListItem
			:activeAdd='activeAdd'
			:addBtnList='addBtnList'
			@tap-UpDataAddLsitItem='tapUpDataAddLsitItem'
			@tap-AddListItem='tapAddListItem'>
			</addListItem>
		</div>
		<!-- 对应可添加项展示的具体内容 -->
		<div class="itme-content"> 
			<!-- 添加链接 -->
			<addLink
			:addBtnList='addBtnList'
			@tap-AddLink='tapAddLink'
			v-if='addType === 0'></addLink>
			<!-- 立即定制 -->
			<addMade
			:addBtnList='addBtnList'
			@tap-AddMade='tapAddMade'
			v-if='addType === 1'></addMade>
		</div>
	</div>
</template>

<script>
	import addListItem from './addListItem/addListItem';
	import addLink from './addLink/addLink';
	import addMade from './addMade/addMade';
	export default {
		components: {
			addListItem,
			addLink,
			addMade
		},
		props: [
			'activeAdd',
			'addBtnList', 
		],
		data() {
			return {
				addType: -1, // 用户添加的类型  0 URL  1、立即定制 2、立即购买 3、立即咨询 4、立即询价
			};
		},
		created() {},
		watch: {
			addBtnList: {
				handler(a, b) {
					console.log(a, b, '-------------------addBtnList-----------------')
				},
				deep: true
			},
		},
		computed: {
		},
		methods: {
			// 用户先添加的类型
			tapAddListItem(e) {
				console.log(e, '用户先添加的类型');
				this.addType = e.value;
				this.$emit('tap-AddType', e.value);
			},
			// 用户添加的链接
			tapAddLink(e) {
				console.log(e, '用户添加的链接');
				this.$emit('tap-BottomBtnAddInfor', e);
			},
			// 用户选择的定制按钮
			tapAddMade(e) {
				console.log(e, '用户选择的定制按钮');
				this.$emit('tap-BottomBtnAddInfor', e);
			},
			// 用户在已添加的按钮上再次操作跟换按钮类型
			tapUpDataAddLsitItem(e) {
				console.log(e, '用户在已添加的按钮上再次操作跟换按钮类型');
				this.$emit('tap-EditAginBtnData', e);
			}
		}
	};
</script>

<style>
</style>
