<template>
	<div>
		<div class="PutIn-sub" @tap='goToPutInList()'>
			<p class="btn">+ 投放商机</p>
		</div>
		
	</div>
	
</template>

<script>
	import { mapMutations } from 'vuex';
	export default {
	    data () {
	      return {
	      };
	    },
	    created () {
	    },
	    watch: {
	      msgData: {
	        handler (a, b) {
	        },
	        deep: true
	      }
	    },
	    mounted () {},
	    methods: {
	      ...mapMutations({
	        setInstName: 'setInstName'
	      }),
	      goToPutInList () {
	        console.log('触发投放商机按钮');
	        uni.navigateTo({
	        	url: '/modules/aLittle/putInBusiness/putInBusinessList/putInList/putInList'
	        });
	      }
	    }
	  };
</script>

<style>
	.PutIn-sub{
		position: fixed;
		bottom: 0;
		width: 100%;
		background: #fff;
		padding: 2vw 3vw;
	}
	.PutIn-sub>p{
		font-family: PingFangSC-Regular;
		font-size: 32upx;
		color: #FFFFFF;
		letter-spacing: 0;
		text-align: center;
		line-height: 90upx;
		background: #02C2A2;
	}
</style>
