<template>
	<div class="preview-content">
		<div class="preview">
			<rFrom
			:dataList='data'
			></rFrom>
		</div>
	</div>
</template>

<script>
	import rFrom from '@/components/common/RHX/rFrom/rFrom';
	export default {
		components: {
			rFrom
		},
		props: [
			'disabled',
			'dataList',
			'index',
			'item'
		],
		data() {
			return {
				dataLists: this.dataList,
				data:{
					fromTopShow: false,
					columnnOne: {
						width: '30%',
					},
					columnnTwo: {
						width: '70%'
					},
					dataLists:[]
				} 
			};
		},
		mounted () {
			console.log(this.dataLists.dataList, '------------------------------+-----------------------')
			this.resetEdit(this.dataLists.dataList);
		},
		watch: {
			dataList: {
				handler(a, b) {
					console.log(a, b, '-----------dataList----------');
					this.dataLists = a;
					this.resetEdit(this.dataLists.dataList);
				},
				deep: true
			},
			disabled: {
				handler(a, b) {
					console.log(a, b, '-----------disabled----------');
					if (a === false) {
						this.resetEdit(this.dataLists.dataList);
					}
				},
				deep: true
			},
		},
		methods: {
			// 重置预览中的数据
			resetEdit(e) {
				this.data.dataLists = [];
				console.log(e, '--------------------e--------------------')
				for (let i in e) {
					let items={
						key: '',
						value: '',
					}
					if (Number(i) === 0) {
						items.key = e[i].key;
						items.value = e[i].value + e[i].unit;
					} else if (Number(i) === 1) {
						items.key = e[i].key + '(' + e[i].unit + ')';
						items.value = e[i].value;
					}
					console.log(items, '--------------+++++++++++--------------')
					this.data.dataLists.push(items);
				};
			},
		}
	};
</script>

<style>
</style>
