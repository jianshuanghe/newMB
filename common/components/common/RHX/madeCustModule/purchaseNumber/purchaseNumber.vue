<template>
	<div class="purchaseNumber-content">
		<div class="purchaseNumber">
			<!-- 编辑模式 -->
			<div class="NumberBox" v-if='disabled === true'>
				<div class="inputBox left">
					<div class="input"></div>
				</div>
				<div class="step left">
					<numberStep
					:disabled='disabled'
					:dataList='dataList'
					></numberStep>
				</div>
				<div class="clear"></div>
			</div>
			<!-- 预览模式 -->
			<div class="NumberBox" v-if='disabled === false'>
				<div class="numbox-list" v-for='(item,index) in dataLists.dataList' :key='index'>
					<div class="numbox-items">
						<div class="inputBox left">
							<!-- 存在图片选择和样式选择 -->
							<div class="input" v-if='selectExist'>{{item.key}}</div>
							<!-- 不存在图片选择和样式选择 -->
							<div class="value" v-if='!selectExist'>
								<editPusrchase
								:dataList='dataLists.dataList'
								:value="item.key === null ? '' : item.key"
								:indexNum='index'
								:disabled='disabled'
								:maxlength="5"
								@tap-EditPusrchase='tapEditPusrchase'
								></editPusrchase>
							</div>
						</div>
						<div class="step left">
							<numberStep
							:disabled='disabled'
							:dataList='item'
							:indexNum='index'
							@tap-NumberStep='tapNumberStep'
							></numberStep>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import numberStep from './numberStep';
	import editPusrchase from './editPusrchase';
	export default {
		components: {
			numberStep,
			editPusrchase
		},
		props: [
			'disabled',
			'itemsData',
			'indexNum',
			'selectExist',
			'dataList',
			'deleteMoveShow'
		],
		data() {
			return {
				dataLists: this.dataList,
			};
		},
		watch: {
			dataList: {
				handler(a, b) {
					console.log('----------------dataList--------------')
					this.dataLists = a;
				},
				deep: true
			},
		},
		created() {},
		methods: {
			tapEditPusrchase (e) {
				console.log(e, '用户行为');
				this.dataLists.dataList = e;
				this.$emit('tap-PurchaseNumber', this.dataLists);
			},
			tapNumberStep (e) {
				console.log(e);
				this.dataLists.dataList.map((items, index)=>{
					if (index === [1]) {
						items = e[0];
					}
				});
				this.$emit('tap-PurchaseNumber', this.dataLists);
			}
		}
	};
</script>

<style>
	.purchaseNumber-content{
		position: relative;
		width: 100%;
	}
	.purchaseNumber{
		position: relative;
		width: 100%;
		min-height: 10vw;
	}
	.NumberBox{
		position: relative;
		width: 100%;
	}
	.numbox-list{
		position: relative;
		width: 100%;
		min-height: 10vw;
		margin-bottom: 32upx;
	}
	.inputBox{
		position: relative;
		width: 60%;
	}
	.input{
		background: #FFFFFF;
		border: 1px solid #D2D2D2;
		border-radius: 2px;
		border-radius: 2px;
		width: 90%;
		height: 76upx;
		text-align: left;
		padding: 0 1vw;
		line-height: 76upx;
		font-family: PingFangSC-Light;
		font-size: 26upx;
		color: #2E2E30;
		letter-spacing: 0;
	}
	.step{
		position: relative;
		width: 40%;
	}
	.value{
		position: relative;
		width: 90%;
	}
</style>
