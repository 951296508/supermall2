<template>
	<div>
		<nav-bar>
			<div slot="center">购物街</div>
		</nav-bar>
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="item in banner">
				<a :href="item.link"><img :src="item.image" :alt="item.title" /></a>
			</van-swipe-item>
		</van-swipe>
		<recommend-view :recommends="recommend"></recommend-view>
		<div class="feature">
			<a href="http://act.mogujie.com/zzlx67">
				<img src="~assets/img/home/recommend_bg.jpg" alt="">
			</a>
		</div>
		<tab-control class="tabcontrol" :titles="['流行','新款','精选']" @tabclick="tabclick"></tab-control>
		<goods-list :goodslist="showGoodsList"></goods-list>
	</div>
</template>
<script type="text/javascript">
	import navBar from "common/navbar/navbar"
	import { getHomeMultidata, getHomeData } from "network/home.js"
	import recommendView from "./childComps/RecommendView.vue"
	import tabControl from "content/tabControl/Tabcontrol.vue"
	import GoodsList from './childComps/GoodsList.vue'
	export default {
		name: "home",
		data() {
			return {
				banner: [],
				recommend: [],
				goodsList: {
					"pop": {
						page: 1,
						list: []
					},
					"new": {
						page: 1,
						list: []
					},
					"sell": {
						page: 1,
						list: []
					}
				},
				currentType: "pop"
			}
		},
		components: {
			navBar,
			recommendView,
			tabControl,
			GoodsList
		},
		computed: {
			showGoodsList() {
				return this.goodsList[this.currentType].list
			}
		},
		created() {
			this.getHomeMultidata();
			this.getHomeProducts("pop");
			this.getHomeProducts("new");
			this.getHomeProducts("sell");
		},
		methods: {
			getHomeMultidata() {
				getHomeMultidata().then(res => {
					this.banner = res.data.data.banner.list;
					this.recommend = res.data.data.recommend.list;
				})
			},
			getHomeProducts(type) {
				getHomeData(type, this.goodsList[type].page).then(res => {
					const goodsList = res.data.list;
					this.goodsList[type].list.push(...goodsList)
					this.goodsList[type].page += 1
				})
			},
			tabclick(index) {
				switch(index) {
					case 0:
						this.currentType = "pop"
						break
					case 1:
						this.currentType = "new"
						break
					case 2:
						this.currentType = "sell"
						break
				}
			}
		}
	}
</script>
<style scoped="">
	.my-swipe .van-swipe-item {}
	
	.my-swipe .van-swipe-item img {
		width: 100%;
	}
	
	.feature img {
		display: block;
		width: 100%;
	}
	
	.tabcontrol {
		position: sticky;
		top: 0px;
		line-height: 44px;
	}
</style>