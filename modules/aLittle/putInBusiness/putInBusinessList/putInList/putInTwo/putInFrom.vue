<template>
	<div class="reportFrom-content">
		<!-- 表格 -->
		<div class="reportFrom-box">
			<div class="reportFrom">
				<div class="RF-top">
					<div class="RF-item width1 RF-bg left"><p class="borderRight borderLeft">说明书名称</p></div>
					<div class="RF-item width2 RF-bg left"><p class="borderRight">所用模板</p></div>
					<div class="RF-item width3 RF-bg left"><p class="borderRight">创建时间</p></div>
					<div class="clear"></div>
				</div>
				<div class="RF-cont" v-for="(item, index) in arr" :key="index">
					<div class="RF-lists">
						<div class="RF-item width1 left">
							<p class="borderRight borderLeft">{{ item.instrucTitle | ellipsiss}}</p>
						</div>
						<div class="RF-item width2 left">
							<p class="borderRight">{{ item.tempName | ellipsiss}}</p>
						</div>
						<div class="RF-item width3 left">
							<p class="borderRight">{{ item.updateTime | formatDate }}</p>
						</div>
						<div class="clear"></div>
					</div>
				</div>
			</div>
			<div class="lineBoxTop"></div>
			<div class="findMore-RF"><p class="">查看更多</p></div>
		</div>
		<!-- 投放位置、流量来源 -->
		<div class="putInAreaOrSource">
			<!-- 投放位置 -->
			<div class="putInArea">
				<div class="items-title">投放位置</div>
				<div class="cont-radio">
					<radio-group @change="putInAreaChange">
						<label class="left" v-for="(items, index) in itemsPutInArea" :key="index">
							<view><radio :value="items.value" :checked="index === current" v-show="false" /></view>
							<view>
								<div class="PA">
									<img :src="index === current ? radioed : check" alt="" class="img-radio" />
									<text class="text-radio">{{ items.name }}</text>
								</div>
							</view>
						</label>
					</radio-group>
				</div>
			</div>
			<!-- 流量来源 -->
			<div class="putInArea">
				<div class="items-title">流量来源</div>
				<div class="cont-radio">
					<checkbox-group @change="SourceChange">
						<label class="left" v-for="(items, index) in itemsSource" :key="index" @tap="labelBtn(items.value, index)">
							<view><checkbox :value="items.value" :checked="items.checked" v-show="false" /></view>
							<view>
								<div class="PA">
									<img :src="items.checked ? checked : check" alt="" class="img-radio" />
									<text class="text-radio">{{ items.name }}</text>
								</div>
							</view>
						</label>
					</checkbox-group>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import check from '@/static/mbcImg/home/extendManageList/check.png';
import checked from '@/static/mbcImg/home/extendManageList/checked.png';
import radioed from '@/static/mbcImg/home/extendManageList/radioed.png';
import { mapMutations, mapGetters } from 'vuex';
export default {
	name: 'reportFrom',
	data() {
		return {
			check: check,
			checked: checked,
			radioed: radioed,
			arr: [],
			itemsPutInArea: [
				{
					value: '1',
					name: 'banner显示',
					checked: true
				},
				{
					value: '2',
					name: '不限位置',
					checked: true
				}
			],
			current: '', // 单选选中的值
			itemsSource: [
				{
					value: '1',
					name: '今日头条',
					checked: false
				},
				{
					value: '2',
					name: '百度',
					checked: false
				},
				{
					value: '3',
					name: '谷歌',
					checked: false
				}
			],
			sourceList: [] ,// 流量来源选中
			iidd:[],
		};
	},
	created() {
		// if (this.EVN === 'production') {
		//   axios.defaults.baseURL = this.apiProd2;
		// }
		// this.getTotalData();
		console.log(this.GET_ALITTLE.putInstate);
		this.arr = this.GET_ALITTLE.putInstate;
		this.GET_ALITTLE.putInstate.map((item,index)=>{
			this.iidd.push(String(item.instrucId))
		})
	},

	watch: {
		GET_ALITTLE: {
			handler(a, b) {
				console.log(a.putInstate);
			},
			deep: true
		}
	},
	computed: {
		...mapGetters(['GET_ALITTLE'])
	},
	filters: {
		time: function(value) {
			return value.split(' ')[0];
		},
		formatDate: function(value) {
			let date = new Date(value);
			let y = date.getFullYear();
			let MM = date.getMonth() + 1;
			MM = MM < 10 ? '0' + MM : MM;
			let d = date.getDate();
			d = d < 10 ? '0' + d : d;
			let h = date.getHours();
			h = h < 10 ? '0' + h : h;
			let m = date.getMinutes();
			m = m < 10 ? '0' + m : m;
			let s = date.getSeconds();
			s = s < 10 ? '0' + s : s;
			return y + '.' + MM + '.' + d + ' ' + h + ' : ' + m;
		},
		ellipsiss: function(value) {
			if (!value) return '';
			if (value.length > 6) {
				return value.slice(0, 6) + '...';
			}
			return value;
		}
	},
	mounted() {},
	methods: {
		...mapMutations({
			setLoadingShow: 'setLoadingShow',
			setLoadingText: 'setLoadingText',
			setputInstate: 'setputInstate'
		}),
		putInAreaChange: function(evt) {
			console.log(evt, '单选投放位置');
			for (let i = 0; i < this.itemsPutInArea.length; i++) {
				if (this.itemsPutInArea[i].value === evt.target.value) {
					this.current = i;
					break;
				}
			}
			this.$emit('AreaChange',[this.current,this.iidd])
		},
		// 流量来源
		SourceChange: function(e) {
			this.sourceList = e.detail.value; // 获取选中的值
			console.log(this.sourceList, 'sourceList');
		},
		labelBtn(name, index) {
			console.log(name, index, 'nameindex');
			this.$emit('eChange',this.sourceList)
			if (this.sourceList.join(',').indexOf(name) > -1) {
				this.sourceList.map((items, key) => {
					this.itemsSource[index].checked = true;
				});
			} else {
				this.itemsSource[index].checked = false;
			}
			
		}
	}
};
</script>

<style scoped>
.putInAreaOrSource {
	position: relative;
	width: 100%;
	margin-top: 2vw;
}
.putInArea {
	position: relative;
	width: 100%;
	padding: 0 3vw;
	background: #fff;
}
.items-title {
	position: relative;
	width: 100%;
	font-family: PingFang-SC-Bold;
	font-size: 28upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 70upx;
	margin-bottom: 10upx;
	margin-top: 10upx;
}
.cont-radio {
	position: relative;
	width: 100%;
	height: 10vw;
}
.PA {
	position: relative;
	width: 100%;
}
.img-radio {
	position: relative;
	width: 30upx;
	height: 30upx;
	top: 1vw;
}
.text-radio {
	margin-left: 2vw;
	margin-right: 4vw;
	font-family: PingFang-SC-Medium;
	font-size: 26upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 26upx;
}
.reportFrom-content {
	position: relative;
	width: 100%;
}
.reportFrom-box {
	position: relative;
	width: 100%;
	padding: 0 3vw;
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
	border-top: 1px solid #d2d2d2;
}
.width1 {
	width: 39%;
}
.width2 {
	width: 26%;
}
.width3 {
	width: 35%;
}
.RF-item > p {
	position: relative;
	width: 100%;
	font-family: PingFang-SC-Regular;
	font-size: 3vw;
	color: #2e2e30;
	line-height: 10.4vw;
	padding: 0 1vw 0 3vw;
}
.borderRight {
	border-right: 1px solid #d2d2d2;
}
.borderLeft {
	border-left: 1px solid #d2d2d2;
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
