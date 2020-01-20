<template>
    <div class="companyInfor-content">
      <!--编辑状态-->
      <editorT :listid="id"></editorT>
    </div>
</template>

<script>
    import editorT from './companyInforItems/previewAndEditor/editor';
    export default {
        name: 'companyInforEdit',
		data(){
			return {
				id:'',
			}
		},
        components: {
          editorT
        },
		created() {
			this.shareEachPage(); // 分享
		},
		onLoad:function(val){
			console.log(val)
			this.id=val.id;
			uni.setNavigationBarTitle({//标题 已收藏
				title: '公司信息'
			});
		},
    };
</script>

<style scoped>
.companyInfor-content{
  position: relative;
  width: 100%;
}
</style>
