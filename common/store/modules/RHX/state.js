/**
 * Created by 菅双鹤 on 2019/07/25.
 */
// RHX代表如何秀特有组件
const state = {
	selectTemplateRHX: { // 选择模版(1/4)
		tabItems: 1, // 顶部tab切换  
		total: { // 全部
			loadingText: '加载更多...',
			search: { // 搜索
				pageNum: 0, // 总页数
				searchCondition: { // 分页属性
					page: '1'
				}
			},
			listData: '' // 列表数据
		},
		product: { // 产品
			loadingText: '加载更多...',
			search: { // 搜索
				pageNum: 0, // 总页数
				searchCondition: { // 分页属性
					page: '1'
				}
			},
			listData: '' // 列表数据
		},
		made: { // 定制
			loadingText: '加载更多...',
			search: { // 搜索
				pageNum: 0, // 总页数
				searchCondition: { // 分页属性
					page: '1'
				}
			},
			listData: '' // 列表数据
		},
		infor: { // 资讯
			loadingText: '加载更多...',
			search: { // 搜索
				pageNum: 0, // 总页数
				searchCondition: { // 分页属性
					page: '1'
				}
			},
			listData: '' // 列表数据
		},
	}
};
export default state;
