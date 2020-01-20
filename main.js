import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
import store from './store'
import messages from './common/lang.js'
import BaiduMap from 'vue-baidu-map'

import {api1, api2, api3} from './static/mbcJs/api';
import {endParams} from './static/mbcJs/endParams';
import {isWeiXin} from './static/mbcJs/browserType';
import {pageNums} from './static/mbcJs/pageNums';
import {dateTime} from './static/mbcJs/dateTime';
import {Static, dImg, origin} from './static/mbcJs/static';
import {landRegistra} from './static/mbcJs/landRegistra';
import {getDate} from './static/mbcJs/getDate';
import {returnDateNum} from './static/mbcJs/returnDateNum';
import {generateUUID} from './static/mbcJs/uuid';
import {province, city, county} from './static/mbcJs/areaCity';
import {keyText} from './static/mbcJs/dataJson/keyText';
import {getSystemInfo} from './static/mbcJs/getSystemInfo';
import {VwVhToPx} from './static/mbcJs/VwVhToPx';
import {newGuid} from './static/mbcJs/newGuid';
import {scrollTitleChange} from './static/mbcJs/scrollTitleChange';
import {mergeBasicData} from './static/mbcJs/mergeBasicData';
import {urlCrypto} from './static/mbcJs/urlCrypto';
import {madeParams} from './static/mbcJs/madeParams';
import {platformAccount} from './static/mbcJs/platformAccount';
import {focusStore} from './static/mbcJs/focusStore';
import {shareEachPage} from './static/mbcJs/shareEachPage/shareEachPage';
import {resetURL} from './static/mbcJs/resetURL';






Vue.use(VueI18n)

Vue.config.productionTip = false

Vue.prototype.$store = store

Vue.prototype.api1 = api1
Vue.prototype.api2 = api2
Vue.prototype.api3 = api3

Vue.prototype.endParams = endParams

Vue.prototype.isWeiXin = isWeiXin

Vue.prototype.pageNums = pageNums

Vue.prototype.dateTime = dateTime

Vue.prototype.Static = Static

Vue.prototype.dImg = dImg

Vue.prototype.origin = origin

Vue.prototype.landRegistra = landRegistra

Vue.prototype.getDate = getDate

Vue.prototype.returnDateNum = returnDateNum

Vue.prototype.generateUUID = generateUUID

Vue.prototype.province = province

Vue.prototype.city = city

Vue.prototype.county = county

Vue.prototype.keyText = keyText

Vue.prototype.getSystemInfo = getSystemInfo

Vue.prototype.VwVhToPx = VwVhToPx

Vue.prototype.newGuid = newGuid

Vue.prototype.scrollTitleChange = scrollTitleChange

Vue.prototype.mergeBasicData = mergeBasicData

Vue.prototype.urlCrypto = urlCrypto

Vue.prototype.madeParams = madeParams

Vue.prototype.platformAccount = platformAccount

Vue.prototype.focusStore = focusStore

Vue.prototype.shareEachPage = shareEachPage

Vue.prototype.resetURL = resetURL






Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}

App.mpType = 'app'

const i18n = new VueI18n({  
	locale: 'zh_CN', // 英文：en_US，中文： zh_CN
    messages
})

Vue.prototype._i18n = i18n 

const app = new Vue({
	i18n,
	store,
	...App
})
app.$mount()

Vue.use(BaiduMap, {
  ak: 'ANAoNIpE6QzNsYeVVrZ7qHxta8fAFpqL'
})