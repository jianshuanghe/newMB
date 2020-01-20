<template>
	<div class="putInList-content">
		<div class="putInList">
			<!-- title -->
			<topBox><p class="title-putIn">投放商机</p></topBox>
			<!-- 进度 -->
			<div class="line"></div>
			<div class="fen"></div>
			<div class="jindu">
				选择投放内容
				<text class="text right">
					{{content}}<text class="numText">/3</text>
				</text>
			</div>
			<!-- 内容 -->
			<div class="cont">
				<!-- 步骤一 -->
				<putInOne v-if="this.putInstate==1" :bookid="this.bookid" v-on:putInstates="putInstates" v-on:putIn="putIn"></putInOne>
				<!-- 步骤二 -->
				<putInTwo v-if="this.putInstate==2" v-on:putInstates="putInstates" v-on:putIn="putIn"></putInTwo>
			</div>
		</div>
		<navigation v-if="QUICKNAVCO.show"></navigation>
	</div>
</template>

<script>
import topBox from '@/components/mbbo/topBox/topBox';
import putInOne from './putInOne/putInOne';
import putInTwo from './putInTwo/putInTwo';
import { mapMutations, mapGetters } from 'vuex';
import navigation from "@/components/mbbo/navigation/navigation.vue";
export default {
	name: 'putInBusiness',
	components: {
		// empty,
		topBox,
		putInOne,
		putInTwo,
		navigation
	},
	data() {
		return {
			putInstate:1,
			content:1,
			bookid:'',
		};
	},
	computed: {
		...mapGetters(['GET_ALITTLE','QUICKNAVCO'])
	},
	created() {
		this.shareEachPage(); // 分享
	},
	watch: {
		GET_ALITTLE: {
			handler(a, b) {
				
			},
			deep: true
		}
	},
	mounted() {},
	onLoad:function(val){		
		this.bookid=val.id
	},
	methods: {
		
		putInstates(val){
			this.putInstate=val;
		},
		putIn(val){
			this.content=val;
		},
		
	}
};
</script>

<style>
.putInList-content {
	position: relative;
	width: 100vw;
	min-height: 100vh;
}
.fen{
	width: 100%;
	height: 88upx;
}
.jindu {
	position: fixed;
	top: 80upx;
	width: 100%;
	background: #fff;
	padding: 3vw;
	font-family: PingFangSC-Medium;
	font-size: 36upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 60upx;
	font-weight: bold;
}
.text {
	position: relative;
	ont-family: PingFangSC-Medium;
	font-size: 28upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 60upx;
}
.numText {
	position: relative;
	ont-family: PingFangSC-Medium;
	font-size: 28upx;
	color: #9b9b9b;
	letter-spacing: 0;
	line-height: 60upx;
}
</style>
