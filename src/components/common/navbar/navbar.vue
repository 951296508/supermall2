<template>
	<div class="navbar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default {
		name: "navbar"
	}
</script>
<style scoped>
.navbar{
	display: flex;
	height: 49px;
	text-align: center;
	line-height: 49px;
	
}
.left,.right{
	width: 20%;
}
.center{
	flex: 1;
}
</style>