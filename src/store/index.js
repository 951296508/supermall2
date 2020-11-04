import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		cartList: []
	},
	mutations: {

	},
	getters: {
		length(state) {
			return state.cartList.length
		},
		cartList(state) {
			return state.cartList
		}
	},
	actions: {
		addCartVuex(context, payload) {
						console.log(context.state.cartList);
			return new Promise((resolve, reject) => {
				// 1.查看是否添加过
				let oldInfo = context.state.cartList.find(item => item.iid === payload.iid)
				// 2.+1或者新添加
				if(oldInfo) {
					oldInfo.count += 1
					resolve("当前数量加1")
				} else {
					payload.count = 1
					payload.checked = true
					context.state.cartList.push(payload)
					resolve("添加新商品")
				}
			})
		}
	}
})
export default store