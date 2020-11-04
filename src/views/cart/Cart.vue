<template>
	<div>
		<nav-bar class="nav">
			<div slot="center" class="cart">
				购物车({{cartLength}})
			</div>
		</nav-bar>
		<cart-list :cartList="$store.state.cartList">
			
		</cart-list>
		<bottom-bar>
			
		</bottom-bar>
	</div>
</template>
<script>
	import NavBar from "common/navbar/navbar"
	import CartList from "./childComps/CartList"
  import BottomBar from "./childComps/BottomBar"
	
	export default {
		name: "Cart",
		data() {
			return {}
		},
		components: {
			NavBar,
			CartList,
			BottomBar
		},
		computed:{
			cartLength(){
				return this.$store.getters.length
			}
		}
	}
</script>
<style scoped>
	.nav{
		background: pink;
	}
</style>