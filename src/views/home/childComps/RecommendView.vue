<template>
	<div class="recommend">
		<div v-for="item in recommends">
			<a :href="item.link">
				<img :src="item.image" alt="" />
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "RecommendView",
		props: {
			recommends: {
				type: Array,
				default() {
					return []
				}
			}
		}
	}
</script>
<style scoped>
	.recommend {
		display: flex;
		justify-content: space-around;
		overflow: hidden;
		text-align: center;
		padding-bottom: 15px;
		border-bottom: 2px solid #CCCCCC;
	}
	
	.recommend>div {
		width: 20%;
	}
	.recommend>div:last-child{
		margin-right: 0px;
	}
	.recommend>div img {
		width: 100%;
		margin: 10px 0px;
	}
</style>