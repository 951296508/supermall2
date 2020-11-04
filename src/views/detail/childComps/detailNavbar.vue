<template>
		<nav-bar>
			<div slot="left" class="icon" @click="clickRoute"><img src="@/assets/img/common/back.svg"/></div>
			<div slot="center" class="titleWrap">
				<div v-for="(item,index) in navTitles" :class="{active:currentIndex==index}" @click="clickIndex(index)">{{item}}</div>
			</div>
		</nav-bar>

</template>

<script>
	import NavBar from "common/navbar/navbar.vue"
	export default {
		name: "DetailNavbar",
		components: {
			NavBar
		},
		data() {
			return {
				navTitles: ["商品", "参数", "评论", "推荐"],
				currentIndex:0
			}
		},
		methods:{
			clickIndex(index){
				this.currentIndex=index
				this.$emit("topy",index)
			},
			clickRoute(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>
	.titleWrap{
		display: flex;
	}
	.titleWrap>div{
		flex: 1;
	}
	.active{
		color: pink;
	}
	.icon{
		margin-top: 6px;
	}
</style>