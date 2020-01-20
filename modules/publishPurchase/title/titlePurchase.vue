<template>
	<topBox>
		<p class="title-putIn">发布采购</p>
		<p class="right-title-select" @click="clickSelect(0)">
			{{selectList[0].select}}
			<img :src="rightBotTriangle" alt="" class="rightBotTriangle" />
		</p>
		<div class="select-title" v-if='isSelectShow'>
			<p class="select-items" @click='clickSelect(1)'>{{selectList[1].select}}</p>
		</div>
	</topBox>
</template>

<script>
import topBox from '@/components/mbbo/topBox/topBox';
import rightBotTriangle from '@/static/mbcImg/publish/purchase/rightBotTriangle.png';
import { mapMutations, mapGetters } from 'vuex';
export default {
	name: 'dataReport',
	components: {
		topBox
	},
	data() {
		return {
			rightBotTriangle: rightBotTriangle,
			isSelectShow: false,
			selectList:[
				{
					id: 0,
					select: '简单发布'
				},
				{
					id: 1,
					select: '普通发布'
				}
			]
		};
	},
	computed: {
		...mapGetters(['GET_PUBLISH'])
	},
	watch: {
		GET_PUBLISH: {
			handler(a, b) {},
			deep: true
		}
	},
	created () {
	},
	methods: {
		...mapMutations({
			setTempletType: 'setTempletType'
		}),
		clickSelect(e) {
			if (Number(e) === 0) {
				this.isSelectShow = !this.isSelectShow;
				this.setType();
			} else if (Number(e) === 1) {
				this.isSelectShow = false;
				this.selectList=[this.selectList[1],this.selectList[1]=this.selectList[0]];
				this.setType();
			}
			console.log('触发商机投放组件按钮');
		},
		setType () {
			if (this.selectList[0].id === 0) {
				this.$store.commit('setTempletType', 0);
			} else if (this.selectList[0].id === 1) {
				this.$store.commit('setTempletType', 1);
			}
		}
	}
};
</script>

<style>
	.right-title-select{
		  position: absolute;
		  right: 16upx;
		  font-family: PingFangSC-Regular;
		  font-size: 3.5vw;
		  color: #02C2A2;
		  letter-spacing: 0;
		  text-align: center;
		  line-height: 7vw;
		  top: 16upx;
	}
	.select-title{
		  position: absolute;
		  top: 72upx;
		  right: 0upx;
		  width:16vw;
		  background: #02C2A2;
	}
	.select-title>p{
		  right: 0;
		  font-family: PingFangSC-Regular;
		  font-size: 3.5vw;
		  color: #fff;
		  letter-spacing: 0;
		  text-align: center;
		  line-height: 7vw;
		  top: 0;
	}
	.rightBotTriangle{
		  position: absolute;
		  width: 12upx;
		  height: 12upx;
		  right: -16upx;
		  bottom: 14upx;
	}
</style>
