<template>
  <div class="top-box-title">
    <div class="quickBtn-search" :style="{padding: padStyle}">
      <div class="quickBtn-Fd left">
        <quickBtn></quickBtn>
      </div>
      <div class="search-Fd right">
        <slot></slot>
      </div>
      <div class="clear"></div>
    </div>
  </div>

</template>

<script>
    import quickBtn from '@/components/mbbo/quickBtn/quickBtn.vue';
    export default {
		components: {
			quickBtn
		},
		props: [
			'padStyle',],
    };
</script>

<style scoped>
  .top-box-title{
    position: relative;
    height: 12vw;
  }
  .quickBtn-search{
    position: fixed;
    width: 100vw;
    padding: 2vw 4vw;
    background: #fff;
    z-index: 997;
    height: 12vw;
    background: #FFFFFF;
    box-shadow: 0 1px 0 0 #F5F5F5;
  }
  .quickBtn-Fd{
    position: relative;
    width: 6%;
  }
  .search-Fd{
    position: relative;
    width: 94%;
	text-align: center;
  }
  .title-putIn{
    position: relative;
    width: 100%;
    text-align: center;
    line-height: 7vw;
    font-size: 3.733vw;
  }
  .right-title{
    position: absolute;
    right: 0;
    font-family: PingFangSC-Regular;
    font-size: 3.5vw;
    color: #02C2A2;
    letter-spacing: 0;
    text-align: center;
    line-height: 7vw;
    top: 0;
  }
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
