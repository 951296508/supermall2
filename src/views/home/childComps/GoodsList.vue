<template>
	<div class="goodlist">
    <goods-list-item v-for="(item, index) in goodslist" :key="index" :goods="item"></goods-list-item>
	</div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  export default {
    name: "GoodsList",
    components: {
 			GoodsListItem
    },
    props: {
      goodslist: {
        type: Array,
        default: ()=>[]
      }
    },
  }
</script>

<style scoped>

</style>
