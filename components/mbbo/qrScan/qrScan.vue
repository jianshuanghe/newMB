<template>
  <div class="qrScan-content">
    <div class="qrScan" @click="scanLand">
      <img :src="qrScan" alt="" class="img">
    </div>
  </div>
</template>

<script>
	import qrScan from '@/static/mbcImg/youhua/qrScan.jpg';
    export default {
        components: {
        },
        data () {
          return {
				qrScan:  qrScan,
          };
        },
        methods: {
          scanLand () {
          	console.log('触发扫码');
          	let _this = this;
          	uni.scanCode({
          		onlyFromCamera: true,
          		success: function (res) {
          			console.log('条码类型：' + res.scanType);
          			console.log('条码内容：' + res.result);
          			_this.token = res.result; // 条码内容
          		}
          	});
          }
        }
    };
</script>

<style scoped>
	.qrScan-content{
		position: fixed;
		top: 13px;
		right: 10px;
		width: 22px;
	}
	.qrScan{
		position: relative;
		width: 20px;
	}
	.qrScan>img{
		position: relative;
		width: 22px;
		height: 20px;
	}
</style>
