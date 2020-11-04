import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import Vant from "vant"
import 'vant/lib/index.css';
Vue.use(Vant);
import toastRegistry from 'components/common/toast/index.js'
Vue.use(toastRegistry)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')

//git clone
//
//复制粘贴
//git status
//添加文件
//git add .
//git commit -m "初始化项目"
//这是已经提交到本地了
//现在准备提交到git
//git push

//直接添加 无需clone
//git remote add origin +地址
//git push -u origin master