<template>
	<div class="tab-control">
		<div class="tab-control-item" v-for="(item,index) in titles" :class="{active:index===currentIndex}" @click="changeIndex(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>
<script>
	export default{
		name:"tabControl",
		props:{
			titles:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				currentIndex:0
			}
		},
		methods:{
			changeIndex(index){
				this.currentIndex=index
				this.$emit("tabclick",index)
			}
		}
	}
</script>

<style scoped>
	.tab-control{
		background: #fff;
		z-index: 100;
		margin-top: 8px;
		display: flex;
		justify-content: space-around;
	}
	.tab-control span{
		padding-bottom: 4px;
	}
	.active{
		color: red;
	}
	.active span{
		color: red;
		border-bottom:2px solid red;
	}
</style>