<!-- 实例
 <rRadio
 :dataList='dataList' // 传入的数据
 :marginBottomShow='marginBottomShow'
 @tap-Radio='tapRadio' // 触发单选的操作
 v-if='true'></rRadio>
 -->
<template>
	<div :class="type === '1' ? 'rRadio-content1' : 'rRadio-content'">
		<!-- 添加模块单选框 -->
		<div class="rRadio" v-if="type === '1'">
			<radio-group @change="radioChange">
				<label
					class="items-box"
					:class="index % 2 === 1 && index !== 0 ? 'right' : 'left'"
					v-for="(items, index) in dataLists"
					:key="index"
					:style="{ marginBotttom: marginBottomShow === true ? '20vh' : '10vh', margin: dataLists.length - 1 === index ? '0 0 15vw 0' : '' }"
				>
					<radio :value="items.valued" :checked="index === current" v-show="false" />
					<div class="rRadio-items" :style="current === index ? selectStyle : noSelectStyle">
						<image class="items-img" :src="items.moduleImg" mode='aspectFit'></image>
						<image class="itemsChecked" :src="checkedItems" v-if="current === index"></image>
					</div>
					<div class="clear"></div>
				</label>
			</radio-group>
		</div>
		<!-- 实力保障单选框 -->
		<div class="rRadio" v-if="type === '2'">
			<radio-group @change="radioChange">
				<label class="items-box left" v-for="(items, index) in dataLists" :key="index" v-if="items.type === dataType">
					<radio :value="items.valued" :checked="index === current" v-show="false" />
					<div
						class="rRadio-items2"
						:class="(index + 1) % 4 === 0 && index > 2 ? 'rRadio-itemsM' : 'rRadio-items2'"
						:style="current === index ? selectStyle2 : noSelectStyle2"
					>
						{{ items.value }}
					</div>
					<div class="clear"></div>
				</label>
			</radio-group>
		</div>
		<!-- 图片选择 -->
		<div class="rRadio" v-if="type === '3'">
			<radio-group @change="radioChange">
				<label class="items-box left" v-for="(items, index) in dataLists" :key="index">
					<radio :value="items.valued" :checked="index === current" v-show="false" />
					<div class="rRadio-items3" :class="(index + 1) % 4 === 0 && index > 2 ? 'rRadio-itemsM3' : 'rRadio-items3'">
						<div class="img-box"><image class="img" :src="items.imgUrl"></image></div>
						<div class="text-box">
							{{ items.title }}
							<image class="selectImg" :src="current === index ? selectEd : select"></image>
						</div>
					</div>
					<div class="clear"></div>
				</label>
			</radio-group>
		</div>
		<!-- 样式选择 -->
		<div class="rRadio" v-if="type === '5'">
			<radio-group @change="radioChange">
				<label class="items-box" v-for="(items, index) in dataLists" :key="index">
					<radio :value="items.valued" :checked="index === current" v-show="false" />
					<div class="rRadio-items5" :class="(index + 1) % 4 === 0 && index > 2 ? 'rRadio-itemsM5' : 'rRadio-items5'">
						<div class="styleClose-box">
							<div class="SC-left left">
								<div class="SC-image-box"><image class="SC-image" :src="items.imgUrl"></image></div>
							</div>
							<div class="SC-right left">
								<div class="SC-text-box">
									<div class="SC-text">
										{{ items.title }}
										<image class="selectImg" :src="current === index ? selectEd : select"></image>
									</div>
									<div class="SC-ins">{{ items.content }}</div>
								</div>
							</div>
							<div class="clear"></div>
						</div>
					</div>
					<div class="clear"></div>
				</label>
			</radio-group>
		</div>
		<!-- 添加立即定制按钮 -->
		<div class="rRadio" v-if="type === '4'">
			<radio-group @change="radioChange">
				<label class="items-box" v-for="(items, index) in dataLists" :key="index">
					<radio :value="items.valued" :checked="index === current" v-show="false" />

					<div class="rRadio-items4" :class="(index + 1) % 4 === 0 && index > 2 ? 'rRadio-itemsM4' : 'rRadio-items4'">
						<div class="selectImg-box4 left"><image class="selectImg" :src="current === index ? selectEd : select"></image></div>
						<div class="img-box4 left"><image class="img" :src="items.bannerImg"></image></div>
						<div class="text-box4 left">
							<div class="title-text4">{{ items.instrucTitle }}</div>
							<div class="content-text4">{{ items.instrucIntro }}</div>
						</div>
						<div class="clear"></div>
					</div>
				</label>
			</radio-group>
		</div>
	</div>
</template>

<script>
import checkedItems from '@/static/mbcImg/publish/createBusiness/checkedItems.png';
import selectEd from '@/static/mbcImg/publish/createBusiness/selectEd.png';
import select from '@/static/mbcImg/publish/createBusiness/select.png';
import rhx from '@/static/mbcImg/publish/createBusiness/rhx.png';

export default {
	props: ['disabled', 'dataList', 'dataListselectList', 'marginBottomShow', 'type', 'dataType', 'isTypeCust'],
	data() {
		return {
			dataLists: [],
			current: -1, // 用户选择的项
			checkedItems: checkedItems, // 选择后的图片对勾标注
			selectEd: selectEd, // 勾选圆框 黑色
			select: select, // 未勾选圆框 白色
			rhx: rhx, // 测试用途
			selectStyle: {
				// 选择之后样式边框变化
				background: '#FFFFFF',
				border: '1px solid #02C2A2',
				boxShadow: '0 1px 3px 0 rgba(2,194,162,0.30)'
			},
			noSelectStyle: {
				// 选择之前样式边框变化
				background: '#FFFFFF',
				border: '1px solid #E2E2E2'
			},
			selectStyle2: {
				// 选择之后样式边框变化
				background: '#02C2A2',
				color: '#FFFF'
			},
			noSelectStyle2: {
				// 选择之前样式边框变化
				color: '#2E2E30'
			}
		};
	},
	components: {},
	computed: {},
	watch: {
		dataList: {
			handler(a, b) {
				// console.log(a, b, '--------------------------------------dataList---------------------------------------');
				this.dataLists = a;
				this.dataLists.map((items, index) => {
					if (!items.valued) {
						items.valued = String(index);
					}
				});
			},
			deep: true
		}
	},
	created() {
		this.dataLists = this.dataList;
		console.log(this.dataLists, '----------------this.dataLists----------------');
		this.dataLists.map((items, index) => {
			items.valued = String(index);
			// 实例保障和支付方式的双向保定
			if (this.dataListselectList) {
				this.dataListselectList.map((item, inde) => {
					if (item.key === items.key && this.dataType === items.type) {
						this.current = index;
						this.$emit('tap-Radio', items); // 将用户选择下来的子项返给前台
					}
				});
			}
			// 图片选择和样式选择双向绑定
			if (this.isTypeCust) {
				this.dataLists.map((items, index) => {
					if (items.select === true) {
						this.current = index;
					}
				});
			}
		});

		console.log(this.dataLists, '--------------------marginBottomShow---------------------');
	},
	mounted() {},
	methods: {
		radioChange: function(evt) {
			console.log(evt, '---------------------evt-----------------------');
			this.dataLists.map((items, index) => {
				if (String(items.valued) === String(evt.target.value)) {
					this.current = index;
					items.select = true;
					// 图片选择和样式选择双向绑定
					if (this.isTypeCust) {
						this.$emit('tap-Radio', [items, this.current]); // 将用户选择下来的子项返给前台
					} else {
						this.$emit('tap-Radio', items); // 将用户选择下来的子项返给前台
					}
				}
			});
		}
	}
};
</script>

<style>
.rRadio-content {
	position: relative;
	width: 100%;
	padding: 20upx 30upx;
}
.rRadio-content1 {
	position: relative;
	width: 100%;
	padding: 20upx 40upx;
}
.rRadio {
	position: relative;
	width: 100%;
}
.items-box {
	/* margin: 20upx 0; */
}
.rRadio-items {
	position: relative;
	width: 320upx;
	height: 320upx;
	margin: 20upx 0;
}
.items-img {
	width: 300upx;
	height: 300upx;
	text-align: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
.itemsChecked {
	position: absolute;
	bottom: -4upx;
	right:-4upx;
	width: 100upx;
	height: 100upx;
}
.marginBottom {
	position: relative;
	margin-bottom: 20vh;
}
.rRadio-items2 {
	position: relative;
	width: 156upx;
	height: 80upx;
	margin: 10upx 14upx 10upx 0;
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 80upx;
	border: 1px solid #d2d2d2;
	border-radius: 2px;
	text-align: center;
}
.rRadio-itemsM {
	position: relative;
	width: 156upx;
	height: 80upx;
	margin: 10upx 0;
	font-family: PingFangSC-Regular;
	font-size: 28upx;
	color: #2e2e30;
	letter-spacing: 0;
	line-height: 80upx;
	border: 1px solid #d2d2d2;
	border-radius: 2px;
	text-align: center;
}
.rRadio-items3 {
	position: relative;
	margin: 10upx 8upx 10upx 0;
	width: 160upx;
	text-align: center;
}
.rRadio-itemsM3 {
	position: relative;
	width: 160upx;
	margin: 10upx 0;
	text-align: center;
}
.img-box {
	position: relative;
	width: 100%;
}
.img-box .img {
	position: relative;
	width: 120upx;
	height: 160upx;
}
.text-box {
	position: relative;
	width: 100%;
	text-align: center;
}
.selectImg {
	position: relative;
	width: 26upx;
	height: 26upx;
	top: 4upx;
}
.rRadio-items4 {
	position: relative;
	margin: 10upx 14upx 10upx 0;
	width: 156upx;
}
.rRadio-items4 {
	position: relative;
	margin: 10upx 14upx 10upx 0;
	width: 100%;
}
.rRadio-itemsM4 {
	position: relative;
	width: 100%;
	margin: 10upx 0;
}
.selectImg-box4 {
	position: relative;
	width: 10%;
}
.img-box4 {
	position: relative;
	width: 25%;
}
.img-box4 .img {
	position: relative;
	width: 120upx;
	height: 120upx;
}
.text-box4 {
	position: relative;
	width: 65%;
}
.title-text4 {
	font-family: PingFangSC-Regular;
	font-size: 26upx;
	color: #2e2e30;
	line-height: 40upx;
	overflow: hidden;
	text-overflow: ellipsis;
	-o-text-overflow: ellipsis;
	-webkit-text-overflow: ellipsis;
	-moz-text-overflow: ellipsis;
	white-space: nowrap;
}
.content-text4 {
	font-family: PingFangSC-Regular;
	font-size: 26upx;
	color: #9b9b9b;
	text-align: justify;
	line-height: 40upx;
	word-break: break-all;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
.rRadio-items5 {
	position: relative;
	margin: 10upx 14upx 10upx 0;
	width: 100%;
}
.rRadio-items5 {
	position: relative;
	margin: 10upx 14upx 10upx 0;
	width: 100%;
}
.rRadio-itemsM5 {
	position: relative;
	width: 100%;
	margin: 10upx 0;
}
.styleClose-box {
	position: relative;
	width: 100%;
	margin-bottom: 4vw;
}
.SC-left{
	position: relative;
	width: 29.333vw;
}
.SC-image-box{
	position: relative;
	width: 26.6666vw;
	height: 21.333vw;
}
.SC-image{
	position: relative;
	width: 200upx;
	height: 160upx;
}
.SC-right{
	position: relative;
	width: 62.4vw;
	padding: 2vw;
}
.SC-text-box{
	position: relative;
	width: 100%;
}
.SC-text{
	position: relative;
	font-family: PingFangSC-Regular;
	font-size: 26upx;
	color: #2E2E30;
	line-height: 40upx;
}
.SC-ins{
	position: relative;
	width: 100%;
	font-family: PingFangSC-Regular;
	font-size: 26upx;
	color: #9B9B9B;
	text-align: justify;
	line-height: 40upx;
}
</style>
