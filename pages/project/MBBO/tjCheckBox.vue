<template>
	<div class="checkBox-box">
		<div class="checkBox">
			<checkbox-group @change="checkboxChange">
				<label 
				v-for="(items, index) in dataLists" 
				:key="index"
				@click="labelBtn(items.value, index)" 
				class='items-box left'>
					<checkbox :value="items.value" :checked="items.checked" v-show="false" />
					<div class="rRadio-items2"
					 :class="(index + 1)%4===0 && index > 2? 'rRadio-itemsM' : 'rRadio-items2'"
					 :style="items.checked === true ? selectStyle2 : noSelectStyle2">
						<span>{{items.value}}</span>
					</div>
					<div class="clear"></div>
				</label>
			</checkbox-group>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'businessPutIn',
		data() {
			return {
				dataLists: [], // 城防多选的转型后数组
				dataList: [], // 城防多选的转型后数组
				
				selcetDataList: [], // 盛放选中的商机
				check:  this.Static+'extendManageList/dataReport/check.png', // type 选择按钮的未选中状态 img
				checked:  this.Static+'home/extendManageList/dataReport/checked.png', // type 选择按钮的选中状态 img
				checkedItems:  this.Static+'home/extendManageList/dataReport/checkedItems.png', // 子项选中对勾 img
				clickItemsIndex: '', // 记录子项点击的index
				selectStyle2: { // 选择之后样式边框变化
					// background: '#02C2A2',
					color: '#02C2A2',
					border:'1px solid #02C2A2'
				},
				noSelectStyle2:  { // 选择之前样式边框变化
					color: '#2E2E30',
				},
			};
		},
		components: {},
		computed: {},
		watch: {},
		created(){
			this.userKeys();
		},
		mounted() {},
		methods: {
			// 勾选商机
			labelBtn(name, index) {
				if (this.selcetDataList.join(',').indexOf(name) > -1) {
					this.selcetDataList.map((items, key) => {
						this.dataLists[index].checked = true;
					});
				} else {
					this.dataLists[index].checked = false;
				}
			},
			checkboxChange: function(e) {
				this.selcetDataList = e.detail.value; // 获取选中的值
				this.$emit("event1",this.selcetDataList)
				console.log(this.selcetDataList, '--------------------selcetDataList-----------------------');
			},
			userKeys(){
				if (uni.getStorageSync('landRegist')) {
					let landRegistLG = JSON.parse(uni.getStorageSync('landRegist')); // 读取缓存的用户信息
					console.log(landRegistLG.user.id);
					// let params = {}; // 请求总数居时 参数为空
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/userKeys', //接口地址。
						// data: params,
						method: 'GET',
						header: {
							Authorization: 'Bearer ' + landRegistLG.token //将token放到请求头中
						},
						success: response => {
							uni.hideLoading();
							console.log(response.data);
							// this.dataLists=response.data.content;
							response.data.content.map((items, index)=>{
								let item = {
									value: items,
									code: index,
									checked: false
								};
								this.dataLists.push(item)
							});
							console.log(this.selcetDataList)
							this.$emit("event1",this.selcetDataList)
						},
						fail: error => {
							uni.hideLoading(); // 隐藏 loading
							uni.showToast({
								title: '网络繁忙，请稍后',
								icon: 'none',
								duration: 1000
							});
							console.log(error, '网络繁忙，请稍后');
						}
					});
				}else if(uni.getStorageSync('UUID')){
					let UUID = uni.getStorageSync('UUID'); // 读取缓存的用户信息
					console.log(UUID);
					uni.showLoading({
						// 展示loading
						title: '加载中'
					});
					uni.request({
						url: this.api2 + '/rest-rp/userKeys', //接口地址。
						// data: params,
						method: 'GET',
						success: response => {
							uni.hideLoading();
							console.log(response.data);
							// this.dataLists=response.data.content;
							response.data.content.map((items, index)=>{
								let item = {
									value: items,
									code: index,
									checked: false
								};
								this.dataLists.push(item)
							});
							console.log(this.selcetDataList)
							this.$emit("event1",this.selcetDataList)
						},
						fail: error => {
							uni.hideLoading(); // 隐藏 loading
							uni.showToast({
								title: '网络繁忙，请稍后',
								icon: 'none',
								duration: 1000
							});
							console.log(error, '网络繁忙，请稍后');
						}
					});
				}
			},
		}
	};
</script>

<style>
	.checkBox-box{
		position: relative;
		width: 100%;
	}
	.checkBox{
		position: relative;
		width: 100%;
	}
	/* .MIL-item {
		position: relative;
		width: 50%;
	}
	.BSP-items {
		position: relative;
		width: 100%;
		padding: 4vw 1vw 0 5vw;
		overflow: scroll;
		max-height: 85vh;
		-webkit-overflow-scrolling: touch;
	}
	.items-bsp-check {
		position: relative;
		width: 100%;
		margin-bottom: 2vw;
	} */
	/* .bsp-items {
		position: relative;
		width: 90%;
		border-radius: 2px;
	} */
	/* .items-box{
		margin: 20upx 0;
		margin-left: 48upx;
	} */
	/* .rRadio-items{
		position: relative;
		width: 324upx;
		height: 324upx;
		margin: 20upx 0;
	} */
	/* .items-img{
		width: 320upx;
		height: 320upx;
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	} */
	/* .itemsChecked{
		position: absolute;
		bottom: 0;
		right: 0;
		width: 100upx;
		height: 100upx;
	} */
	/* .marginBottom{
		position: relative;
		margin-bottom: 20vh;
	} */
	.rRadio-items2{
		position: relative;
		width: 204upx;
		height: 70upx;
		margin: 30upx 24upx 0 0;
		font-family: PingFangSC-Regular;
		font-size: 26upx;
		color: #2E2E30;
		letter-spacing: 0;
		/* line-height: 80upx; */
		border: 1px solid #D2D2D2;
		border-radius: 17.5px;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.rRadio-itemsM{
		position: relative;
		width: 204upx;
		height: 70upx;
		margin: 30upx 24upx 0 0;
		font-family: PingFangSC-Regular;
		font-size: 26upx;
		color: #2E2E30;
		letter-spacing: 0;
		/* line-height: 80upx; */
		border: 1px solid #D2D2D2;
		border-radius: 17.5px;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>