<template>
	<div class="newsTitle-box">
		<div class="newsTitle">
			<div class="center-news">
				<div class="news-TBox left" @click="clickNewsType(1)">
					<div :class="clickItemsIndex === 1 ? 'Tbox-items Tb-checked' : 'Tbox-items'">
						<p class="">基本信息</p>
						<div class="hengLine" v-if="clickItemsIndex === 1"></div>
					</div>
				</div>
				<div class="news-TBox left" @click="clickNewsType(2)">
					<div :class="clickItemsIndex === 2 ? 'Tbox-items Tb-checked' : 'Tbox-items'">
						<p class="">资质认证</p>
						<div class="hengLine" v-if="clickItemsIndex === 2"></div>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
	name: 'companyInforTitle',
	components: {},
	data() {
		return {
			confirmShow: false,
			clickItemsIndex: 1 // 用户切换类型
		};
	},
	computed: {
		...mapGetters(['GET_MY'])
	},
	watch: {
		GET_MY: {
			handler(a, b) {
				this.clickItemsIndex = a.PersonTitle; // 侦听切换类基本信息和资质认证
			},
			deep: true
		}
	},
	created() {
		// if (this.$route.query.personTitle) {
		// 	// 定位当前处于状态
		// 	let personTitle = Number(this.$route.query.personTitle);
		// 	this.clickNewsType(personTitle);
		// }
	},
	onLoad:function(){
		uni.setNavigationBarTitle({//标题 已收藏
			title: '公司信息'
		});
	},
	methods: {
		...mapMutations({
			setPersonTitle: 'setPersonTitle'
		}),
		clickAllRead() {
			this.confirmShow = true;
		},
		clickNewsType(e) {
			console.log(e, '切换基本信息和资质认证类型');
			this.$store.commit('setPersonTitle', e);
			this.$emit('PersonTitle',e)
		}
	}
};
</script>

<style scoped>
.newsTitle-box {
	position: relative;
	width: 100%;
}
.newsTitle {
	position: relative;
	width: 100%;
}
.center-news {
	position: relative;
	width: 55%;
	margin-left: 20%;
}
.news-TBox {
	position: relative;
	width: 50%;
}
.Tbox-items {
	position: relative;
	width: 100%;
}
.Tbox-items > p {
	font-family: PingFangSC-Regular;
	font-size: 3.733vw;
	color: #2e2e30;
	letter-spacing: 0;
	text-align: center;
	line-height: 7vw;
}
.hengLine {
	position: relative;
	width: 5vw;
	height: 1px;
	background: #15d49f;
	margin: 0 auto;
}
.Tb-checked > p {
	color: #02c2a2 !important;
}
.allRead-box {
	position: absolute;
	top: 0;
	right: 0;
}
.allRead-box > p {
	position: relative;
	font-family: PingFangSC-Regular;
	font-size: 3.5vw;
	color: #5d5d5d;
	text-align: right;
	line-height: 7vw;
}
</style>
