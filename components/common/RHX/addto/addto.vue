<template>
	<div>
		<div class='addto' @tap="addto()">
			{{addtos}}
			<image :src="dels" class="addto-img" v-on:click.stop='img()'></image>
		</div>
		<div class='addto' @tap="addtoto()">
			{{addtos2}}
			<image :src="dels" class="addto-img" v-on:click.stop='imgs()'></image>
		</div>
		<div class="addMask" v-if="add === true" @tap="Mask()">
			<div class="addMask-A" v-on:click.stop='child()'>
				<div class="addMask-AA">
					<business @bottomPhone="bottomPhone"></business>
					<div class='addto' style="background: #D4FDF7;border-color:  #02C2A2;">
						{{addtos}}
					</div>
					<div class='addto' style="background: #D4FDF7;border-color:  #02C2A2;">
						{{addtos2}}
					</div>
				</div>
				<div class="addMask-AB">
					<div @tap="addMaskAc()" :class="{'addMaskAb':addMaskAb}">立即定制<image :src="Image2" v-if="num === '1'"></image><image :src="Image3" v-if="num === '2'"></image></div>
					<div @tap="addMasklian()" :class="{'addMasklians':addMasklians}">添加链接<image :src="Image2" v-if="nums === '1'"></image><image :src="Image3" v-if="nums === '2'"></image></div>
				</div>
				<!-- 立即定制 -->
				<div class="addMask-AC" v-if="ding===true">
					<div class="addMask-ding" v-for="(item,index) in list" :key="index" @tap="image(index)">
						<div>
							<image :src="wei" v-if="imges!==index"></image>
							<image :src="xuan" v-if="imges===index"></image>
						</div>
						<div><image :src="item.img" mode=""></image></div>
						<div>
							<div>{{item.name}}</div>
							<div>{{item.content}}</div>
						</div>
					</div>
					<div class="addMask-tian">
						+ 添加新的定制模版
					</div>
				</div>
				<!-- 添加链接 -->
				<div class="addMask-AD" v-if="lian===true">
					<div class="addMask-Ad">
						<p>按钮名称</p>
						<input type="text" placeholder="想让用户去哪,为它起个名字吧!" maxlength="5" v-model="addname"/>
					</div>
					<div class="addMask-Ad">
						<p>链接地址</p>
						<input type="text" placeholder="想让用户去哪,为它起个名字吧!" v-model="Website"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import dels from '@/static/mbcImg/my/dels.png';
	import business from '@/components/common/RHX/business/business';
	import Image2 from '@/static/mbcImg/my/Image2.png';
	import Image3 from '@/static/mbcImg/my/Image3.png';
	import wei from '@/static/mbcImg/my/15.png';
	import xuan from '@/static/mbcImg/my/16.png';
	import c from '@/static/mbcImg/my/c.png';
	export default {
		components: {
			business,
		},
		data() {
			return {
				dels:dels,
				add:false,//遮罩显示隐藏
				Image2:Image2,
				Image3:Image3,
				ding:false,//立即定制显示隐藏
				addMaskAb:false,//立即定制背景，字体颜色
				addMasklians:false,//添加链接背景，字体颜色
				lian:false,//链接显示隐藏
				imges:0,//复选框
				phone:'',//电话
				num:'1',
				nums:'1',
				wei:wei,
				xuan:xuan,
				c:c,
				addtos:'添加按钮',
				addtos2:'添加按钮',
				addname:'',//按钮名称
				Website:'',//链接地址
				list:[
					{
						img:c,
						name:'北欧布艺沙发定制',
						content:'上层天然异色羽绒，柔韧舒适，下层出口美国无公害压缩棉阿斯加德就喀什就看的安居客收到货奥科吉说的和爱神的箭客户萨',
					},
					
				]
			};
		},
		created() {},
		methods: {
			image(e){//复选框事件
				this.imges=e;
			},
			img(){
				if(this.addtos==this.addname){
					this.addname='';
					this.Website='';
					this.addtos='添加按钮';
				}else if(this.addtos!=='添加按钮'){
					this.addtos='添加按钮';
				}
			},
			imgs(){
				if(this.addtos2==this.addname){
					this.addname='';
					this.Website='';
					this.addtos2='添加按钮';
				}else if(this.addtos2!=='添加按钮'){
					this.addtos2='添加按钮';
				}
			},
			// 点第一个添加按钮
			addto(){
				this.add=true;
				console.log('点第一个添加按钮');
				this.$emit('tap-BottomNum',false);
				if(this.addtos === '立即定制'){
					this.addMaskAb=true;
					this.ding=true;
					this.num = '2';
				}else if(this.addtos !== '立即定制' && this.addtos !== '添加按钮'){
					this.lian=true;
					this.nums='2';
					this.addMasklians=true;
				}
			},
			// 点击第二个添加按钮
			addtoto(){
				this.add=true;
				console.log('点第二个添加按钮');
				this.$emit('tap-BottomNum',false);
				if(this.addtos2 === '立即定制'){
					this.addMaskAb=true;
					this.ding=true;
					this.num = '2';
				}else if(this.addtos2 !== '立即定制' && this.addtos2 !== '添加按钮'){
					this.lian=true;
					this.nums='2';
					this.addMasklians=true;
				}
			},
			// 点击上面的遮罩
			Mask(){
				// 立即定制
				console.log('点击遮罩层');
				this.$emit('tap-BottomNum',true);
				this.add=false;
				this.ding=false;
				this.num = '1';
				this.addMaskAb=false;
				// 添加链接
				this.lian=false;
				this.nums='1';
				this.addMasklians=false;
				if(this.Website===''|| this.addname===''){
					this.addtos2='添加按钮';
					this.Website='';
					this.addname='';
				}else{
					if(this.addname === ''){
						
					}else{
						if(this.addtos!=='添加按钮' && this.addtos!=='立即定制'){
							this.addtos=this.addname;
						}else if(this.addtos2 ==='添加按钮' || this.addtos2!=='立即定制'){
							this.addtos2=this.addname;
						}
					}
				}
				this.$emit('addtoTap',{'addtap':this.addname,'link':this.Website,'phone':this.phone})
			},
			child(){},
			addMaskAc(){
				if(this.num === '1'){
					this.ding=true;
					this.num = '2';
					this.addMaskAb=true;
					if(this.addtos==='添加按钮' || this.addtos==='立即定制'){
						this.addtos='立即定制';
					}else if(this.addtos2 ==='添加按钮'){
						this.addtos2='立即定制'
					}
					// 添加链接
					this.lian=false;
					this.nums='1';
					this.addMasklians=false;
				}else{
					this.ding=false;
					this.num = '1';
					this.addtos='添加按钮'
					this.addMaskAb=false;
				}
				
			},
			addMasklian(){//添加事件
				if(this.nums === '1'){
					this.lian=true;
					this.nums='2';
					this.addMasklians=true;
					// if(this.addtos==='添加按钮' || this.addtos==='添加链接'){
					// 	this.addtos='添加链接';
					// }else if(this.addtos2 ==='添加按钮') {
					// 	this.addtos2='添加链接'
					// }
					// 立即定制
					this.ding=false;
					this.num = '1';
					this.addMaskAb=false;
				}else{
					this.lian=false;
					this.nums='1';
					this.addMasklians=false;
					this.Website='';
					this.addname='';
					this.addtos2 ='添加按钮'
				}
				
			},
			bottomPhone:function(asd){
				console.log(asd)
				this.phone=asd;
			}
		}
	};
</script>

<style>
	.addto{
		width: 26.666vw;
		height: 8.8vw;
		border-style:dashed;
		border-width:2upx;
		border-color:  rgba(46,46,48,0.30);
		float: left;
		margin-top: 18upx;
		margin-left: 15upx;
		text-align: center;
		line-height: 8.8vw;
		position: relative;
	}
	.addto-img{
		width: 32upx;
		height: 32upx;
		position: absolute;
		right: -10upx;
		top: -10upx;
	}
	.addMask{
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
		position: fixed;
		top: 0;
	}
	.addMask-A{
		width: 100%;
		min-height: 260upx;
		max-height:868upx;
		background: #FFFFFF;
		position: fixed;
		bottom: 0;
		
	}
	.addMask-AA{
		width: 100%;
		height: 100upx;
		background: #F9F9F9;
	}
	.addMask-AB{
		width: 100%;
		height: 140upx;
		padding: 1upx;
	}
	.addMask-AB>div{
		width: 26.666vw;
		min-height: 8.8vw;
		border-style:dashed;
		border-width:2upx;
		border-color:  #02C2A2;
		font-size: 32upx;
		color: #02C2A2;
		text-align: center;
		line-height: 8.8vw;
		margin-top: 40upx;
		margin-left: 40upx;
		position: relative;
		float: left;
	}
	.addMask-AB>div>image{
		width: 16upx;
		height: 10upx;
		margin-left: 10upx;
		margin-top: 3.5vw;
		position: absolute;
	}
	.addMaskAb{
		background:#02C2A2!important;
		color:#FFFFFF!important;
	}
	.addMasklians{
		background:#02C2A2!important;
		color:#FFFFFF!important;
	}
	.addMask-AC{
		width: 100%;
		min-height: 300upx;
		max-height: 628upx;
		padding: 1upx;
		background: #F9F9F9;
		padding-bottom: 40upx;
		overflow: auto;
	}
	.addMask-ding{
		width: 90%;
		height: 120upx;
		margin: 40upx auto auto auto;
	}
	.addMask-ding>div:nth-of-type(1){
		width: 32upx;
		height: 100%;
		line-height: 140upx;
		float: left;
	}
	.addMask-ding>div:nth-of-type(1)>image{
		width: 100%;
		height: 32upx;
	}
	.addMask-ding>div:nth-of-type(2){
		width: 120upx;
		height: 100%;
		float: left;
		margin-left: 24upx;
	}
	.addMask-ding>div:nth-of-type(2)>image{
		width: 100%;
		height: 100%;
	}
	.addMask-ding>div:nth-of-type(3){
		width: 70%;
		height: 120upx;
		float: left;
		margin-left: 20upx;
	}
	.addMask-ding>div:nth-of-type(3)>div:nth-of-type(1){
		font-size: 26upx;
		color: #2E2E30;
		display: -webkit-box;
		-webkit-line-clamp:1;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
	}
	.addMask-ding>div:nth-of-type(3)>div:nth-of-type(2){
		font-size: 26upx;
		color: #9B9B9B;
		line-height: 40upx;
		display: -webkit-box;
		-webkit-line-clamp:2;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-box-orient: vertical;
	}
	.addMask-tian{
		width: 294upx;
		height: 66upx;
		margin: 40upx auto auto auto;
		background: #2E2E30;
		text-align: center;
		line-height: 66upx;
		font-size: 13px;
		color: #FFFFFF;
	}
	.addMask-AD{
		width: 100%;
		height: 340upx;
		padding: 1upx;
		background: #F9F9F9;
	}
	.addMask-Ad{
		width: 90%;
		height: 140upx;
		border-bottom: 2upx solid #E2E2E2;
		margin: 0 auto;
	}
	.addMask-Ad>p{
		font-size: 28upx;
		color: #2E2E30;
		padding-top: 16upx;
	}
	.addMask-Ad>input{
		width: 100%;
		height: 30upx;
		margin-top: 20upx;
	}
	
</style>
