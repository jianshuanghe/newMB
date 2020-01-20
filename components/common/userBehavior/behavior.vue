<template>
	<div class="content-690">
		<div class="icon-list">
			<div class="left lists">
				<div class="list-item">
					<div class="icon-img left"><img :src="find" alt="" class="" /></div>
					<div class="icon-text left">
						<p class="">{{ list.infoCount }}</p>
					</div>
					<div class="clear"></div>
				</div>
			</div>
			<div class="left lists">
				<a class="" :href="'tel:' + list.contactTelphone">
					<div class="list-item">
						<div class="icon-img left"><img :src="tel" alt="" class="" /></div>
						<div class="icon-text left">
							<p class="">{{ list.telCount }}</p>
						</div>
						<div class="clear"></div>
					</div>
				</a>
			</div>
			<div class="left lists">
				<div class="list-item">
					<div class="icon-img left"><img :src="doc" alt="" class="" /></div>
					<div class="icon-text left">
						<p class="">{{ list.msgCount }}</p>
					</div>
					<div class="clear"></div>
				</div>
			</div>
			<div class="left lists">
				<div class="list-item">
					<div class="icon-img left"><img :src="liked" alt="" class="" /></div>
					<div class="icon-text left">
						<p class="">{{ list.likeCount }}</p>
					</div>
					<div class="clear"></div>
				</div>
			</div>
			<div class="left lists">
				<div class="list-item">
					<div class="icon-img left"><img :src="love" alt="" class="" /></div>
					<div class="icon-text left">
						<p class="">{{list.likeCount}}</p>
					</div>
					<div class="clear"></div>
				</div>
			</div>
			<div class="left lists">
				<div class="list-item">
					<div class="icon-img left"><img :src="share" alt="" class="" /></div>
					<div class="icon-text left">
						<p class="">{{ list.shareCount }}</p>
					</div>
					<div class="clear"></div>
				</div>
			</div>
			<div class="interested left lists">
				<div class="list-item interested">
					<div class="icon-img right"><img :src="shared" alt="" class="" /></div>
					<div class="clear"></div>
				</div>
			</div>
			<div class="clear"></div>
		</div>
	</div>
</template>

<script>
import address from '@/static/mbcImg/common/userBehavior/address.png';
import doc from '@/static/mbcImg/common/userBehavior/doc.png';
import doced from '@/static/mbcImg/common/userBehavior/doced.png';
import find from '@/static/mbcImg/common/userBehavior/find.png';
import finded from '@/static/mbcImg/common/userBehavior/finded.png';
import like from '@/static/mbcImg/common/userBehavior/like.png';
import liked from '@/static/mbcImg/common/userBehavior/liked.png';
import love from '@/static/mbcImg/common/userBehavior/love.png';
import loved from '@/static/mbcImg/common/userBehavior/loved.png';
import share from '@/static/mbcImg/common/userBehavior/share.png';
import shared from '@/static/mbcImg/common/userBehavior/shared.png';
import tel from '@/static/mbcImg/common/userBehavior/tel.png';
import teled from '@/static/mbcImg/common/userBehavior/teled.png';
export default {
	name: 'behavior',
	props:{
		// 列表菜单
		list:{
			type: Object,
			default: function(e) {
				return {
					aCode: null,
					address: "河南焦作市沁阳市",
					adveLists: null,
					banner01: "http://img03.iambuyer.com/imgup/upload/images/2019/08/22/Z4frghcjjc2BByuJS0dBVCTaWD1ttPQYXIOC2w61Gh3xcG8Zhcjjc2B9iWQFZvR9yiM49t97EzF6.jpeg",
					banner02: "http://img04.iambuyer.com/imgup/upload/images/2019/08/22/X3K7ivknlVIqwm0aZIXLOLSSx7ll0hcjjc2ByZhmI2j4EtMBjgYQKHhcjjc2Bt1ZzI4VxjPmKVvw.jpeg",
					banner03: "http://img08.iambuyer.com/imgup/upload/images/2019/08/22/VIArGxiT0MMwsdrOCKVcKZXrGnNZX5ZDFat2E8l3nBcf7uIOOpWvWdYI8l9hShcjjc2Ftu.jpeg",
					cCode: null,
					contactTelphone: "13838324646",
					content: "",
					custType: "0",
					infoCount: 44,
					instId: 1203,
					likeCount: 1,
					maxMoeny: null,
					minMoeny: null,
					msgCount: 2,
					num: "2",
					pCode: null,
					shareCount: 0,
					telCount: 2,
					title: "多款式电动钢筋剪手提式液压钢筋剪切断器",
					type: "1",
					typeNames: null,
					userId: null
				}
			}
		}

	},
	data() {
		return {
			address: address,
			doc: doc,
			doced: doced,
			find: find,
			finded: finded,
			like: like,
			liked: liked,
			love: love,
			loved: loved,
			share: share,
			shared: shared,
			tel: tel,
			teled: teled,
			activeIndex:"0"
		};
	},
	methods:{
		getActive(index){
			this.activeIndex=index;
			this.$emit("changes",this.activeIndex);
		}
	}
};
</script>

<style>
	
	.icon-list{
		position: relative;
		width: 100%;
		margin-top: 4vw;
	}
	.lists{
		position: relative;
		width: 16%;
	}
	.list-item{
		position: relative;
		width: 100%;
	}
	.icon-img{
		position: relative;
		width: 30%;
	}
	.icon-img>img{
		position: relative;
		width: 4.8vw;
		height: 4.8vw;
	}
	.icon-text{
		position: relative;
		width: 40%;
	}
	.icon-text>p{
		position: relative;
		width: 100%;
		margin-left: 2vw;
		font-size: 3.2vw;
		line-height: 5vw;
		color: #9B9B9B;
	}
	.interested{
		position: absolute;
		right: 0;
	}
</style>
