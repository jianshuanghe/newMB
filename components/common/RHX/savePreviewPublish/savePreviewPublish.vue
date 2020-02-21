<template>
	<div class="editBtn-box">
		<fixedBgBtn
		bbottom='0upx'
		bColor= ''
		paddingNum=''
		bgColor='#2E2E30'
		bShadow=''>
			<div class="editBtn">
				<div class="saveBtn left" @tap="Save">
					<savePreviewBtn
					textColor='#FFFFFF'
					lineHeight='13.333vw'
					lineY='1'
					lineYTop='4.8vw'
					name='保存'
					width='14vw'
					marginImg='4.2vw 1vw 0 0'
					:imgSrc='save'></savePreviewBtn>
				</div>
				<div class="previewBtn left" @tap='Preview'>
					<savePreviewBtn
					textColor='#FFFFFF'
					lineHeight='13.333vw'
					lineY='1'
					lineYTop='4.8vw'
					name='预览'
					width='14vw'
					marginImg='4.2vw 1vw 0 0'
					:imgSrc='preview'></savePreviewBtn>
				</div>
				<div class="publishBtn left" @tap="Publish">
					<savePreviewBtn
					textColor='#02C2A2'
					lineHeight='13.333vw'
					lineY='0'
					lineYTop='4.8vw'
					name='发布说明书'
					width='28vw'
					marginImg='4.2vw 1vw 0 0'
					:imgSrc='publish'></savePreviewBtn>
				</div>
				<div class="clear"></div>
			</div>
		</fixedBgBtn>
		
	</div>
</template>

<script>
	import fixedBgBtn from '@/components/common/button/fixedBgBtn.vue';
	import savePreviewBtn from '@/components/common/button/savePreviewBtn.vue';
	import { mapMutations, mapGetters } from 'vuex';
	export default {
		data() {
			return {
				save:  this.Static+'publish/purchase/save.png',
				preview:  this.Static+'publish/purchase/preview.png',
				publish:  this.Static+'publish/purchase/publish.png'
			};
		},
		components: {
			fixedBgBtn,
			savePreviewBtn
		},
		computed: {
			i18n() {
				return this.$t('navigation');
			},
			...mapGetters(['GET_PUBLISH'])
		},
		watch: {
			GET_PUBLISH: {
				handler(a, b) {
				},
				deep: true
			}
		},
		methods: {
			...mapMutations({
				setPreviceCaiGou: 'setPreviceCaiGou'
			}),
			Save () {
				console.log('触发保存按钮');
				this.$emit('tap-Save');
			},
			Preview () {
				console.log('触发预览按钮');
				this.$emit('tap-Preview');
			},
			Publish () {
				console.log('触发发布按钮');
				this.$emit('tap-Publish');
			},
		}
	};
</script>

<style>
	.editBtn-box{
		position: fixed;
		bottom: 0;
		z-index: 105;
		width: 100%;
		background: #2E2E30;
		height: 100upx;
		opacity: 0.9;
	}
	.editBtn{
		position: relative;
		width: 100%;
	}
	.saveBtn{
		position: relative;
		width: 33.333%;
	}
	.previewBtn{
		position: relative;
		width: 33.333%;
	}
	.publishBtn{
		position: relative;
		width: 33.333%;
	}
</style>
