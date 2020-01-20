<template>
	<view class="main-list oBorder">
		<!-- 文本框 -->
		<!-- 没有border -->
		<div class="input-items" :style="{width: inputWidth}" v-if='!typeInput'>
			<input 
				class="main-input" 
				:value="value" 
				:type="_type" 
				:maxlength="maxlength" 
				:placeholder="placeholder" 
				:password="type==='password'&&!showPassword" 
				adjust-position=true
				@blur='onBlur'
				@confirm='onConfirm'
				@input="onInput"
			/>
		</div>
		<!-- 带有border -->
		<div class="input-items1" v-if='Number(typeInput) === 1'>
			<input 
				class="main-input1" 
				:value="value" 
				:type="_type" 
				:maxlength="maxlength" 
				:placeholder="placeholder" 
				:password="type==='password'&&!showPassword" 
				adjust-position=true
				@blur='onBlur'
				@confirm='onConfirm'
				@input="onInput"
			/>
		</div>
		<!-- 带有border -->
		<div class="input-items2" v-if='Number(typeInput) === 2'>
			<input 
				class="main-input2" 
				:value="value" 
				:type="_type" 
				:maxlength="maxlength" 
				:placeholder="placeholder" 
				placeholder-style='color: #2E2E30'
				:password="type==='password'&&!showPassword" 
				adjust-position=true
				@blur='onBlur'
				@confirm='onConfirm'
				@input="onInput"
			/>
		</div>
		<!-- 是否可见密码 -->
		<image 
			v-if="_isShowPass&&type==='password'&&!_isShowCode"
			class="img cuIcon" 
			:class="showPassword?'cuIcon-attention':'cuIcon-attentionforbid'" 
			@tap="showPass"
		></image>
		<!-- 倒计时 -->
		<view 
			v-if="_isShowCode&&!_isShowPass"
			:class="['vercode',{'vercode-run': second>0}]" 
			@click="setCode"
		>{{ getVerCodeSecond }}</view>
		
	</view>
</template>

<script>
	var _this, countDown;
	export default{
		data(){
			return{
				showPassword: false, //是否显示明文
				second: 0, //倒计时
				isRunCode: false, //是否开始倒计时
			}
		},
		props:{
			placeholderStyle:{},
			inputWidth: String,
			type: String, //类型
			value: String, //值
			placeholder: String, //框内提示
			maxlength: {
				//最大长度
				type: [Number,String],
				default: 20,
			},
			isShowPass:{
				//是否显示密码图标（二选一）
				type: [Boolean,String],
				default: false,
			},
			isShowCode:{
				//是否显示获取验证码（二选一）
				type: [Boolean,String],
				default: false,
			},
			codeText:{
				type: String,
				default: "获取验证码",
			},
			setTime:{
				//倒计时时间设置
				type: [Number,String],
				default: 60,
			},
			typeInput: String
		},
		model: {
			prop: 'value',
			event: 'input'
		},
		mounted() {
			_this=this
			//准备触发
			this.$on('runCode',(val)=>{
                this.runCode(val);
            });
			clearInterval(countDown);//先清理一次循环，避免缓存
		},
		methods:{
			showPass(){
				//是否显示密码
				this.showPassword = !this.showPassword
			},
			onInput(e) {
				//传出值
				this.$emit('input', e.target.value)
			},
			onBlur () {
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 0
				});
			},
			onConfirm(){
				uni.pageScrollTo({
					scrollTop: 0,
					duration: 0
				});
			},
			setCode(){
				//设置获取验证码的事件
				if(this.isRunCode){
					//判断是否开始倒计时，避免重复点击
					return false;
				}
				this.$emit('setCode')
			},
			runCode(val){
				//开始倒计时
				if(String(val)=="0"){
					
					//判断是否需要终止循环
					this.second = 0; //初始倒计时
					clearInterval(countDown);//清理循环
					this.isRunCode= false; //关闭循环状态
					return false;
				}
				if(this.isRunCode){
					//判断是否开始倒计时，避免重复点击
					return false;
				}
				this.isRunCode= true
				this.second = this._setTime //倒数秒数
				countDown = setInterval(function(){
					_this.second--
					if(_this.second==0){
						_this.isRunCode= false
						clearInterval(countDown)
					}
				},1000)
			}
			
			
		},
		computed:{
			_type(){
				//处理值
				const type = this.type
				return type == 'password' ? 'text' : type
			},
			_isShowPass() {
				//处理值
				return String(this.isShowPass) !== 'false'
			},
			_isShowCode() {
				//处理值
				return String(this.isShowCode) !== 'false'
			},
			_setTime() {
				//处理值
				const setTime = Number(this.setTime)
				return setTime>0 ? setTime : 60
			},
			getVerCodeSecond(){
				//验证码倒计时计算
				if(this.second<=0){
					return this.codeText;
				}else{
					if(this.second<10){
						return '0'+this.second;
					}else{
						return this.second;
					}
				}
				
			}
		}
	}
</script>

<style>
	@import url("./css/icon.css");
	/* --------------------------默认输入框样式 --------------------------------*/
	.main-list{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 36upx;   /* Input 高度 */
		color: #333333;
		padding: 0upx;
		margin-top:24upx;
		margin-bottom: 24upx;
	}
	.img{
		width: 32upx;
		height: 32upx;
		font-size: 32upx;
	}
	.main-input{
		flex: 1;
		text-align: left;
		font-size: 28upx;
		/* line-height: 100upx; */
		padding-right: 10upx;
		margin-left: 0upx;
	}
	.vercode {
		color: rgba(0,0,0,0.7);
		font-size: 24upx;
		line-height: 100upx;
	}
	.vercode-run {
		color: rgba(0,0,0,0.4) !important;
	}
	.oBorder{
	    border: none;
	}
	.input-items1{
		position: relative;
		width: 100%;
	}
	.main-input1{
		height: 20upx !important;   /* Input 高度 */
	}
	/* ----------------------------------采购添加明细输入框 -----------------------------*/
	.input-items2{
		position: relative;
		width: 100%;
	}
	.main-input2{
		height: 48upx !important;   /* Input 高度 */
		padding: 0 1vw;
		background: rgba(212, 253, 247, 0.21);
		border: 1px solid #02C2A2;
		border-style: dashed;
	}
</style>
