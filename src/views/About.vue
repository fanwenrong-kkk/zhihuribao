
<template>
	<div class="details">
		<div class="detailsHeader">
			<img :src="pic" />
			<h3>{{name}}</h3>
			<p>{{imageText}}</p>
		</div>
		<div class="detailsCon" v-html="con"></div>
		<Footer />
	</div>
</template> 
 
<script>
import Footer from '../components/Footer.vue'
export default{
	components:{
		Footer,
	},
	data(){
		return{
			
		}
	},
	mounted:function(){
	  this.axios.get("news/3892357").then(res=>{
	    this.pic=res.data.image;
			this.name=res.data.title;
			this.imageText=res.data.image_source;
			this.con=res.data.body;
	  })
	},
}
</script>

<style scoped="scoped">
</style>
