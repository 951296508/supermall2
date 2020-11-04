<template>
	<div class="detail">
		<detail-navbar class="detailNavbar" @topy="top"></detail-navbar>
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="item in topImages"><img :src="item" alt="" /></van-swipe-item>
		</van-swipe>
		<detail-base-info :goods="goods" ref="base"></detail-base-info>
		<detail-shop-info :shop="shop"></detail-shop-info>
		<detail-goods-info :detail-info="detailInfo" @detailImageload="imageload"></detail-goods-info>
		<detail-param-info :param-info="paramInfo" ref="params"></detail-param-info>
		<detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
		<detail-recommend-info :recommend-list="recommendList" ref="recommend"></detail-recommend-info>
		<detail-bottom-bar @addToCart="addcart"></detail-bottom-bar>
	</div>
</template>
<script>
	import { getDetail, Shop, Goods, GoodsParam, getRecommend } from "network/detail.js"
	import { debounce } from "@/common/utils.js"
	import DetailNavbar from "./childComps/detailNavbar.vue"
	import DetailBaseInfo from "./childComps/DetailBaseInfo"
	import DetailShopInfo from "./childComps/DetailShopInfo"
	import DetailGoodsInfo from "./childComps/DetailGoodsInfo"
	import DetailParamInfo from "./childComps/DetailParamInfo"
	import DetailCommentInfo from "./childComps/DetailCommentInfo"
	import DetailRecommendInfo from "./childComps/DetailRecommendInfo"
	import DetailBottomBar from "./childComps/DetailBottomBar"
	export default {
		name: "Detail",
		data() {
			return {
				iid: null,
				topImages: [],
				shop: {},
				goods: {},
				detailInfo: {},
				paramInfo: {},
				commentInfo: {},
				recommendList: [],
				height: [0, 400, 800, 1200],
				getThemeTopY: null,
				themeTopYs: []
			}
		},
		components: {
			DetailNavbar,
			DetailBaseInfo,
			DetailShopInfo,
			DetailGoodsInfo,
			DetailParamInfo,
			DetailCommentInfo,
			DetailRecommendInfo,
			DetailBottomBar
		},
		created() {
			this.iid = this.$route.query.iid
			getDetail(this.iid).then(res => {
				console.log(res)
				const data = res.data.result
				this.topImages = data.itemInfo.topImages
				this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
				this.shop = new Shop(data.shopInfo)
				// 2.5.获取商品信息
				this.detailInfo = data.detailInfo

				//			 2.6.保存参数信息
				this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule);
				// 2.7.保存评论信息
				if(data.rate.list) {
					this.commentInfo = data.rate.list[0];
				}
			})
			this._getRecommend()
			//				this.$nextTick(()=>{
			//					console.log("wode")
			//				})
			this.getThemeTopY = debounce(() => {
				this.themeTopYs = []
				this.themeTopYs.push(0)
				this.themeTopYs.push(this.$refs.params.$el.offsetTop)
				this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
				this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
//				console.log(this.themeTopYs)
			}, 100)
		},
		methods: {
			detailScorll() {
				const body = document.body || document.documentElement
				body.onscroll = function() {
					console.log("222")
				}
			},
			_getRecommend() {
				getRecommend().then((res, error) => {
					if(error) return
					this.recommendList = res.data.data.list
				})
			},
			imageload() {
				this.getThemeTopY()
			},
			top(index) {
				document.documentElement.scrollTop = this.themeTopYs[index]
			},
			addcart() {
				// 1.创建对象
				const obj = {}
				// 2.对象信息
				obj.iid = this.iid;
				obj.imgURL = this.topImages[0]
				obj.title = this.goods.title
				obj.desc = this.goods.desc;
				obj.newPrice = this.goods.nowPrice;
				// 3.添加到Store中
				this.$store.dispatch('addCartVuex', obj).then(res=>{
					console.log(res)
					this.$toast(res)
				})
			}
		}

	}
</script>
<style scoped>
	.detail {
		padding-bottom: 50px;
	}
	
	.detailNavbar {
		position: fixed;
		background: #FFFFFF;
		width: 100%;
		z-index: 10;
		top: 0;
	}
	
	.van-swipe-item {
		height: 400px;
		overflow: hidden;
	}
	
	.van-swipe-item img {
		display: block;
		width: 100%;
	}
</style>