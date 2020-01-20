陌拜

## 架构设计思想
	* 1、只关注数据变化、降级用户操作行为；
	* 2、优化模板、实现公用；
	* 3、组件逻辑纯粹、只关注当前组件操作行为；
## 样式层级
	* 快捷导航层级：1000009，搜索框层级100，
## 项目多语言切换
	* common
		* lang.js // 多语言数据集合
		* language // 此文件盛放多语言元素
			* en-US // 英语
			* zh-CN // 中文
			 * ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
			 * 以下以中文为例，其他语言复制文件对应文件翻译数据即可
				* aLittle:此文件夹代表陌拜模块
				* chat: 聊天模块
				* common：公共模块，里面目前有tabbar, navTitle,...所有公共的都会放在下面
				* createBusiness: 创建商机模块，里面会包含如何秀模块逻辑
				* find：发现模块
				* instructionPrice: 说明书、价格模块
				* myCommpany: 个人、公司模块
				* news: 消息模块
				* publishPurchase: 发布采购模块
				* putBusiness: 投放商机模块
				* zh-CN: 以上模块编辑集合
## 项目组件模块
	* common：公共组件，里面包含快捷导航模块，数据为空模块，输入框模块，图片上传模块等
	* mbbo: 陌拜商机模块，里面包含tabbar模块
	* rhx: 如何模块
## 项目分包
	* aLittle:此文件夹代表陌拜模块
	* chat: 聊天模块
	* createBusiness: 创建商机模块，里面会包含如何秀模块逻辑
	* find：发现模块
	* instructionPrice: 说明书、价格模块
	* myCommpany: 个人、公司模块
	* news: 消息模块
	* publishPurchase: 发布采购模块
	* putBusiness: 投放商机模块
## 项目主包
	* landRegistration： 登录模块
	* project: 项目功能模块
		* aLittle: 陌拜一下
			* 子项
		* find: 发现
			* 子项
		* publish: 发布
			* 子项
		* news:消息
			* 子项
		* my: 我的
			* 子项
		* home.vue: 主页
## 项目数据管理
	* modules: 数据模块
		* COMMON:存放公共状态数据
		* MBBO: 存放陌拜商机状态数据
		* RHX: 存放如何秀状态数据
	* index.js: 全局暴露的
## 接口描述
	* 暂时无接口
## 全局缓存参数说明
	* UUID：用户未登录状态id；
	* browserType：判断浏览器类型
	* landRegist：登录信息
	* UserData： 用户个人信息
	* uni-storage-keys
	* tabItems：主页切换
	* getSystemInfo： 系统信息
	* templateFinishSkip: 跳过
## 需求文档
  * [](https://next.modao.cc/app/c49f23cd6204fe29d86d2729d7c6c80cf8504336#screen=sk340ig0xsf4pqh)
  * 详见墨刀地址：https://org.modao.cc/app/959a77e8155cdb80c0a3079620385d559ba83f3b#screen=sbc5749aa2e6d3c10ae5268
## 商机模块有道文档
	* https://note.youdao.com/ynoteshare1/index.html?id=82fd6a731bbce3afed2ae50d6a274d9d&type=note

## 首页url 带参详情

## 项目进展
 
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



	uni-app学习心得：
	* 官网地址：[](https://uniapp.dcloud.io/)
	* 在学习之前也是评估了公司的项目和团队的研发能力，公司项目需求一日三变，既要开发小程序又要开发web端，多变的需求，就要多端同时改变，所以就开始尝试多端开发，首选的mp-vue,但是这个已经不在维护了，所以就开始考虑uni-app和taro
	uni-app是基于vue的，公司团队也在使用vue开发项目，我个人更是喜欢taro,优质的开发规范，庞大的开源市场，可是无奈，只能选择uni-app了

##先介绍下这个框架ios和安卓下的兼容性问题吧
	* 1、首先是滚动,在ios下页面超出屏幕长度，就会出现这个情况：用户可以左右拖动页面，安卓正常。-----------------解决办法： 在页面的relative定位的部位顶部配上scroll-view组件，高度设置100vh;fixed定位的放在这个组件外边，否则页面上划会被遮盖
	* 2、页面上拉加载：这个框架上拉加载需要配合scroll-view组件，组件属性中的@scrolltolower是侦听用户触底行为，此时可以触发加载更多接口
	* 3、采用v-html去渲染后台返回的html模板时，会出现图片溢出问题，这个解决的办法可以采用样式替换：使用正则匹配，给所有的img便签的样式替换成最大宽度100%；html.replace(/\<img/gi, '<img style="max-width:100%;height:auto" ');

##聊一下 这个项目出现的复杂问题吧
	* 1、附件上传，我们公司的附件上传采用的上传到服务器统一管理，需要要求：图片可多张上传，可删除，可预览，要求双向绑定。我们使用了一个组件[](https://ext.dcloud.net.cn/plugin?id=326)，不过这个组件需要对他进行修改，双向绑定时组件将onload生命周期
	改成monted，因为只有在页面路由组件才会存在onload生命周期，组件时不存在的；还有一个需要注意的，在双向绑定图片时，接口请求到数据，当时组件中拿不到，其实时组件先渲染了，然后接口才请求完数据，所以有两个解决办法，a、通过watch监听数据变化，组件渲染数据；
	* b、在组件便签上添加v-if=false,等接口返回成功在将false改成true;很明显，第二种更简单。
	* 2、附件双向绑定时，接口返回的附件只有一个路径，点击天机图片返回两个，一个是图片上传到服务器的路径，还有一个是附件名称，所以双向绑定渲染时，需要对渲染的路径做条件判断
	* 3、
