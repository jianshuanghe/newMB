<template>
	<div class="reportFrom-content">
		<div class="reportFrom-box">
			<div class="reportFrom">
				<div class="RF-top" v-if='data.fromTopShow'>
					<div class="RF-item left" v-for="(items, index) in data.fromTop" :key='index'>
						<p 
						:class="index !== data.fromTop.length - 1 ? 'borderRight' : ''"
						>{{items.name}}</p>
					</div>
					<div class="clear"></div>
				</div>
				<div class="RF-cont" v-for="(items, index) in data.dataLists" :key='index'>
					<div class="RF-lists">
						<div class="RF-item left" :style='data.columnnOne'>
							<p class="borderRight" :style="data.columnnOne ? {color: data.columnnOne.color} : null">{{ items.key}}</p>
						</div>
						<div class="RF-item left" :style='data.columnnTwo'>
							<p class="">{{ items.value}}</p>
						</div>
						<div class="clear"></div>
					</div>
				</div>
			</div>
			<div class="lineBoxTop"></div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			data: this.dataList
		};
	},
	props: [
		'dataList',
	],
	created() {
	},
	watch: {
		dataList: {
			handler(a, b) {
				console.log(a, b, '-----------dataList----------');
				this.data = a;
			},
			deep: true
		},
	},
	mounted() {
	},
	methods: {
		
	}
};
</script>

<style scoped>
.reportFrom-content {
	position: relative;
	width: 100%;
}
.reportFrom-box {
	position: relative;
	width: 100%;
	background: #fff;
}
.RF-title {
	position: relative;
	width: 100%;
	padding: 1vw 4vw 1vw 4vw;
	margin-bottom: 2vw;
}
.RF-title > p {
	font-family: PingFang-SC-Bold;
	font-size: 4.266vw;
	color: #2e2e30;
	line-height: 5vw;
}
.reportFrom {
	position: relative;
	width: 100%;
	border-left: 1px solid #d2d2d2;
	border-right: 1px solid #d2d2d2;
}
.RF-top {
	position: relative;
	width: 100%;
}
.RF-bg {
	position: relative;
	background: #fafafa;
}
.RF-item {
	position: relative;
	width: 50%;
	border-top: 1px solid #d2d2d2;
}
.RF-item > p {
	position: relative;
	width: 99%;
	font-family: PingFang-SC-Regular;
	font-size: 3.5vw;
	color: #2e2e30;
	line-height: 10.4vw;
	padding: 0 1vw 0 3vw;
}
.borderRight {
	border-right: 1px solid #d2d2d2;
}
.findMore-RF {
	position: relative;
	width: 100%;
}
.findMore-RF > p {
	position: relative;
	width: 100%;
	text-align: center;
	font-family: PingFang-SC-Medium;
	font-size: 3.5vw;
	color: #9b9b9b;
	line-height: 10.4vw;
}
.lineBoxTop {
	border-top: 1px solid #d2d2d2;
}
</style>
