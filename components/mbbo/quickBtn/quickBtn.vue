<template>
  <div class="content-quickBtn">
    <div class="quickBtn" @click="clickQuickBtn">
      <img :src="daohang" alt="" class="img">
    </div>
  </div>
</template>

<script>
	import { mapMutations } from 'vuex';
    export default {
        name: 'quickBtn',
        components: {
        },
        data () {
          return {
				daohang:  this.Static+'my/daohang.png',
				quickNav:{
					show: false
				}
          };
        },
        methods: {
          ...mapMutations({
            setQuickNavCO: 'setQuickNavCO'
          }),
          clickQuickBtn () {
            this.quickNav.show = true;
            this.$store.commit('setQuickNavCO', this.quickNav); // 更新setAuthShow
          }
        }
    };
</script>

<style scoped>
  .content-quickBtn{
    position: fixed;
    /* width: 100%; */
    /* margin-top: 1.5vw; */
	top: 25upx;
	z-index: 99999999;
	margin-right: 2vw;
  }
  .quickBtn{
    position: relative;
    width: 7vw;
    height: 5vw;

  }
  .quickBtn>img{
    position: relative;
    width: 40upx;
    height: 40upx;
  }
</style>
