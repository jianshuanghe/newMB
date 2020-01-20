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
					fromTopShow: true,
					fromTop:[
						{
							name: '价格(元)'
						},
						{
							name: '起批量(件)'
						}
					],
					columnnOne: {
						width: '50%',
						color: '#02C2A2'
					},
					columnnTwo: {
						width: '50%'
					},
					dataLists:[]
				} 
			};
		},
		mounted () {
			console.log(this.dataList, '++++++++++++++++++++++++++++++++++++++++++');
			this.data.fromTop[1].name = '起批量(' + this.dataList.unit + ')';
			this.resetEditPrice(this.dataLists.dataList, this.dataLists.unit);
		},
		watch: {
			dataList: {
				handler(a, b) {
					console.log(a, b, '-----------dataList----------');
					this.dataLists = a;
					this.data.fromTop[1].name = '起批量(' + this.dataLists.unit + ')';
					this.resetEditPrice(this.dataLists.dataList, this.dataLists.unit);
				},
				deep: true
			},
			disabled: {
				handler(a, b) {
					console.log(a, b, '-----------disabled----------');
					if (a === false) {
						this.resetEditPrice(this.dataLists.dataList, this.dataLists.unit);
					}
				},
				deep: true
			},
		},
		methods: {
			// 跟新数据
			tapUpData(e) {
				console.log(e, '跟新数据');
				this.$emit('tap-UpDataEditItems',e);
			},
			// 最小起批量
			tapMinCountStr(e) {
				console.log(e);
				this.dataLists.dataList = e;
				this.resetEditPrice(e, this.dataLists.unit);
				this.$emit('tap-UpDataEditItems',e);
			},
			// 重置价格明细数据赋值给预览中的数据
			resetEditPrice(e, unit) {
				this.data.dataLists = [];
				for (let i in e) {
					let items={
						key: '',
						value: '',
					}
					if (e.length > 1) {
						if (e[i].errorStr === false) {
							(e[i].money === '' || e[i].money === 0) ? items.key='面议' : items.key=e[i].money + '元';
							items.value = e[i].minCount + '-' + e[i].maxCount + unit;
							if (Number(i) === Number(e.length -1)) {
								items.value = "≥" + e[i].minCount + unit;
							};
							this.data.dataLists.push(items);
						} else {
							console.log('执行特殊情况');
							this.data.dataLists[i - 1].value = "≥" + e[i - 1].minCount + unit;
							this.data.dataLists.push(items);
							break
						}
					} else if (e.length === 1) {
						if (e[i].errorStr === false) {
							(e[i].money === '' || e[i].money === 0) ? items.key='面议' : items.key=e[i].money + '元';
							items.value = "≥" + e[i].minCount + unit;
							this.data.dataLists.push(items);
						} else {
							break
						}
					}
					
				};
				console.log(this.data.dataLists, '-------------this.data.dataLists--------------');
			},
			// 商品价格
			tapMoney(e) {
				console.log(e, '商品价格');
				this.activeIndex = e[1];
				this.dataLists.dataList.map((item, index)=>{
					if(this.activeIndex === index) {
						item.money = e[0];
					}
				});
				this.resetEditPrice(this.dataLists.dataList);
				this.$emit('tap-EditItems',this.dataLists);
			},
		}
	};
</script>

<style>
</style>
