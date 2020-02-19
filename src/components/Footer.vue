<template>
	<div class="footer">
		<router-link :to="footerList.href" v-for="footerList in footerList" :key="footerList.title">
			<img :src="footerList.src">
		</router-link>
	</div>
</template>

<script>
export default{
	data(){
		return{
			footerList:[
				{"src":require("../assets/image/back.png"),"href":"/Home"},
				{"src":require("../assets/image/news.png"),"href":"/"},
				{"src":require("../assets/image/line.png"),"href":"/a"},
				{"src":require("../assets/image/collect.png"),"href":"/"},
				{"src":require("../assets/image/uploading.png"),"href":"/"}
			]
		}
	}
}
</script>
<style>
	.footer{
		overflow: hidden;
		bottom:0;
		padding:10px 0;
		width:100%;
		background-color: #F6F6F6;
		position: fixed;
		/* z-index: 2; */
	}
	.footer a{
		width:20%;
		float:left;
		text-align: center;
	}
	.footer a img{width:26px;}
</style>