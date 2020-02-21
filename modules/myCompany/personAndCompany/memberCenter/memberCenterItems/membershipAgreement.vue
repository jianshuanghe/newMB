<template>
	<div class="membershipAgreement">
		<div>
			<!-- 不是会员的状态 -->
			<div @click="selectImg" class="membership" v-if="userDatas.vipState == '0' && userDatas.applyNum == ''">
				<div class="select-img" >
					<img v-if="vipSelect" :src="select" alt="">
					<img v-if="vipSelected" :src="selected" alt="">
				</div>
				<span class="membership-content0">成为会员即表示同意<span class="membership-agreement">《陌拜会员协议》</span></span>
			</div>
			<!-- 是会员的状态 -->
			<div class="membershipVip" v-else>
				<span class="membership-content">点击查看<span class="membership-agreement">《陌拜会员协议》</span></span>
			</div>
			<div class="membership">
				
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'membershipAgreement',
	components: {},
	props: ['userDatas'],
	data() {
		return {
			selected: this.Static+'images/business/home/personCenter/勾选-选中.png',
			select: this.Static+'images/business/home/personCenter/勾选-未选择.png',
			vipSelect:true,//单选未选中  当vipSelect为false是说明用户选中，可以提交了
			vipSelected:false,//单选已经选中
		};
	},
	created() {},
	methods: {
		selectImg(){
			if(this.vipSelect == true){
				this.vipSelect = false,
				this.vipSelected = true
			}else{
				this.vipSelect = true,
				this.vipSelected = false
			}
			console.log(this.vipSelected);
			this.$emit('isvipSelected',this.vipSelected);
		}
	}
};
</script>

<style>
.membershipAgreement{
	font-family: PingFangSC-Regular;
	font-size: 24upx;
	color: #2E2E30;
	letter-spacing: 0;
	line-height: 24upx;

}
.membership{
	width: 100%;
	height: 84upx;
	padding-left: 30upx;
	padding-right: 30upx;
	display: flex;
	align-items: center;
}
.membership img{
	width: 100%;
	height: 100%;
}
.membership-agreement{
	color: #15D49F;
	text-align: center;
}
.membershipVip{
	width: 100%;
	height: 84upx;
	padding-left: 30upx;
	padding-right: 30upx;
	display: flex;
	align-items: center;
	justify-content: center;
}
.select-img{
	width: 24upx;
	height: 24upx;
	margin-right: 10upx;
}
</style>
