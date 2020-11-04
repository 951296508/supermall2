<template>
    <div class="wrap" v-if="show">
        <div>{{text}}</div>
        <!--<div>{{title}}</div>-->
    </div>
</template>

<script>
export default {
    data () {
        return {
//          title : "你好我是toast"
        }
    }
}
</script>

<style scoped>
    .wrap{
        color:#fff;
        background-color: rgba(0,0,0,0.8);
        padding: 10px;
        position: fixed;
        top:50%;left: 50%;
        border-radius: 10px;
        transform: translate(-50%,-50%);
        animation: myfirst 1s;
		-moz-animation: myfirst 1s;	/* Firefox */
		-webkit-animation: myfirst 1s;	/* Safari 和 Chrome */
		-o-animation: myfirst 1s;	/* Opera */
    }
    @keyframes myfirst
		{
		from {opacity: 0;}
		to {opacity: 1;}
	}
    @-moz-keyframes myfirst /* Firefox */
		{
		from {opacity: 0;}
		to {opacity: 1;}
	}
    @@-webkit-keyframes myfirst /* Safari 和 Chrome */
		{
		from {opacity: 0;}
		to {opacity: 1;}
	}
    @-o-keyframes myfirst /* Opera */
		{
		from {opacity: 0;}
		to {opacity: 1;}
	}

</style>