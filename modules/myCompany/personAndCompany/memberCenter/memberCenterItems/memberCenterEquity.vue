<template>
  <div class="MCY-content">
    <div class="MCY-Box">
      <div class="MCY-top">
        <div class="title-MCY">
          <p class="">会员权益</p>
        </div>
      </div>
      <div class="MCY-cont">
        <div class="MCY-items">
          <div class="MCY-left left">
            <img :src="vip1" alt="" class="">
          </div>
          <div class="MCY-right left">
            <p class="title-MCY-items">5+1小程序，多端一码</p>
            <p class="text-MCY-items">支持扫码查看</p>
          </div>
          <div class="clear"></div>
        </div>
        <div class="MCY-items">
          <div class="MCY-left left">
            <img :src="vip2" alt="" class="">
          </div>
          <div class="MCY-right left">
            <p class="title-MCY-items">专属行业说明书模版免费使用</p>
            <p class="text-MCY-items">玩转公域流量和私域流量</p>
          </div>
          <div class="clear"></div>
        </div>
        <div class="MCY-items">
          <div class="MCY-left left">
            <img :src="vip3" alt="" class="">
          </div>
          <div class="MCY-right left">
            <p class="title-MCY-items">各大流量平台推广，价格更优</p>
            <p class="text-MCY-items">多平台精准推广，以流量共享模式低成本获客</p>
          </div>
          <div class="clear"></div>
        </div>
		<div class="MCY-items">
		  <div class="MCY-left left">
		    <img :src="vip4" alt="" class="">
		  </div>
		  <div class="MCY-right left">
		    <p class="title-MCY-items">免费的B2B撮合交易工具</p>
		    <p class="text-MCY-items">如线上定制、询盘、采购、报价等</p>
		  </div>
		  <div class="clear"></div>
		</div>
		<div class="MCY-items">
		  <div class="MCY-left left">
		    <img :src="vip5" alt="" class="">
		  </div>
		  <div class="MCY-right left">
		    <p class="title-MCY-items">深化产品说明书场景</p>
		    <p class="text-MCY-items">链接企业上下游</p>
		  </div>
		  <div class="clear"></div>
		</div>
		<div class="MCY-items">
		  <div class="MCY-left left">
		    <img :src="vip6" alt="" class="">
		  </div>
		  <div class="MCY-right left">
		    <p class="title-MCY-items">实时监控后台数据</p>
		    <p class="text-MCY-items">后台实时监控客户访问、下单等数据</p>
		  </div>
		  <div class="clear"></div>
		</div>
      </div>
      <div class="toVipFH">
		  直接开通企业孵化器的会员，还可享受更多免费服务哦 >>
	  </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'memberCenterEquity',
        components: {
        },
        data () {
          return {
            vip1:  this.Static+'images/business/home/personCenter/5+1.png',
            vip2:  this.Static+'images/business/home/personCenter/Instructions.png',
            vip3:  this.Static+'images/business/home/personCenter/platform.png',
			vip4:  this.Static+'images/business/home/personCenter/MatchUp.png',
			vip5:  this.Static+'images/business/home/personCenter/scene.png',
			vip6:  this.Static+'images/business/home/personCenter/data.png',
          };
        },
        created () {},
        mounted () {},
        methods: {
        }
      };
</script>

<style scoped>
  .MCY-content{
    position: relative;
    width: 100%;
    background: #fff;
  }
  .MCY-Box{
    position: relative;
    width: 100%;
    padding: 4vw;
  }
  .MCY-top{
    position: relative;
    width: 100%;
  }
  .title-MCY{
    position: relative;
    width: 100%;
  }
  .title-MCY>p{
    font-family: PingFangSC-Semibold;
    font-size: 5.33vw;
    color: #2E2E30;
    text-align: left;
    line-height: 12vw;
  }
  .MCY-cont{
    position: relative;
    width: 100%;
    margin-bottom: 5vw;
  }
  .MCY-items{
    position: relative;
    width: 100%;
    padding: 4vw 0 2vw 0;
  }
  .MCY-left{
    position: relative;
    width: 12.66vw;
    height: 12.66vw;
    border-radius: 50%;
    background: #E2F8F5;
    margin-right: 3vw;
  }
  .MCY-left>img{
    position: absolute;
    top:50%;
    left:50%;
    width:100%;
    transform:translate(-50%,-50%);
    width: 11vw;
    height: 11vw;
  }
  .MCY-right{
    position: relative;
    width: 80%;
  }
  .title-MCY-items{
    font-family: PingFang-SC-Bold;
    font-size: 3.733vw;
    color: #2E2E30;
    letter-spacing: 0;
    line-height: 8vw;
  }
  .text-MCY-items{
    font-family: PingFang-SC-Regular;
    font-size: 3.2vw;
    color: #9B9B9B;
    line-height: 4vw;
  }
  .toVipFH{
	  font-family: PingFangSC-Medium;
	  font-size: 24upx;
	  color: #2E2E30;
	  line-height: 24upx;
	  background: #EFF0F5;
	  border-radius: 8upx;
	  width: 100%;
	  height: 64upx;
	  display: flex;
	  align-items: center;
	  padding-left: 20upx;
  }
</style>
