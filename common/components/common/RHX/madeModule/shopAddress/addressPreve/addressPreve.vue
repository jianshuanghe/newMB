<template>
	<div class="addressPreve-content2">
		<div class="addressPreve2" :style="{padding: '0 3.2vw'}">
			<div class="text2">{{addresstext}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
				addresstext: '',
				dataLists: this.dataList,
				itemsDatas: this.itemsData,
			};
		},
		props: [
			'disabled',
			'dataList',
			'itemsData',
			'indexNum',
		],
		watch: {
			itemsDatas: {
				handler(a, b) {
					this.itemsDatas = a;
					this.resetAddress();
				},
				deep: true
			}
		},
		created () {
			this.resetAddress();
		},
		mounted() {},
		beforeDestroy () {
			console.log('页面销毁之前缓存数据更新-----------setImgList、setCaiGouList');
		},
		methods: {
			resetAddress() {
				let address = this.itemsDatas.cityStr.split('-');
				this.addresstext = address[0] + address[1] + address[2] + this.itemsDatas.value;
			}
		}
	};
</script>

<style>
	.addressPreve-content2{
		position: relative;
		width: 100%;
		background: #F9F9F9;
		padding: 0 24upx;
	}
	.text2{
		position: relative;
		width: 100%;
		padding: 0 30upx;
		position: relative;
		font-family: PingFangSC-Regular;
		font-size: 28upx;
		color: #2E2E30;
		line-height: 11vw;
	}
