<template>
	<div>
		<div class="topTab"></div>
		<div class="ptop">
			<div @click="goback"><img src="../assets/image/back.png" /></div>
			<div class="ptitle">{{all}}条评论</div>
		</div>
		<!-- 长评 -->
		<div class="pbox">
			<div class="short">条长评</div>
			<div class="shortBox" v-for="item in longs" :key="item.id">
				<div class="shrleft">
					<img :src="item.avatar" class="tou" />
				</div>
				<div class="shrright">
					<div class="shrname">{{item.author}}<img src="../assets/image/more.png" class="more"/></div>
					<div class="slcenter">
						{{item.content}}
					</div>
					<div class="nase">
						<span class="days">{{item.time}}</span>
						<span class="naseright">
							<img src="../assets/image/line.png" class="line"/>
							<img src="../assets/image/news.png" class="line"/>
						</span>
					</div>
				</div>
			</div>
		</div>
		<!-- 短评 -->
		<div class="pbox">
			<div class="short">条短评</div>
			<div class="shortBox" v-for="item in short" :key="item.id">
				<div class="shrleft">
					<img :src="item.avatar" class="tou" />
				</div>
				<div class="shrright">
					<div class="shrname">{{item.author}}<img src="../assets/image/more.png" class="more"/></div>
					<div class="slcenter">
						{{item.content}}
					</div>
					<div class="nase">
						<span class="days">{{item.time}}</span>
						<span class="naseright">
							<img src="../assets/image/line.png" class="line"/>
							<img src="../assets/image/news.png" class="line"/>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		components:{},
		data(){
			return{
				longs:[],
				short:[]
			}
		},
		methods:{
			goback() {
				this.$router.replace('/About')
			}
		},
		mounted:function(){
			this.axios.get("story/4232852/long-comments").then(res=>{
				this.longs=res.data.comments;
			});
			this.axios.get("story/4232852/short-comments").then(res=>{
				this.short=res.data.comments;
			});
		
		}
	}
</script>

<style>
	.topTab{
		height:20px;
		width: 100%;
	}
	.ptop{
		display: flex;
		width: 100%;
		border-bottom: 1px solid #F6F6F6;
	}
	.ptop img{
		width: 25px;
		margin: 0 10px;
		
		text-align: center;
	}
	.ptitle{
		font-size: 18px;
		font-weight: bold;
		width: 80%;
		text-align: center;
	}
	.short{
		width: 100%;
		font-size: 16px;
		font-weight: bold;
		text-align: left;
		line-height: 30px;
		margin-bottom: 10px;
		/* padding: 5px 10px; */
	}
	.pbox{
		padding: 10px 15px;
	}
	.tou{
		width: 35px;
		height: 35px;
		border-radius: 50px;
		background-color: #CCCCCC;
	}
	.more{
		width: 25px;
		position: absolute;
		right: 15px;
		top: 95px
	}
	.shortBox{
		display: flex;
		border-bottom: 1px solid #F6F6F6;
		padding-top: 10px ;
	}
	.shrname{
		font-weight: bold;
		
		font-size: 15px;
		
		
	}
	.shrmore{
		position: relative;
		right:-225px
	}
	
	
	.shrleft{
		width: 12%;
		/* height: 70px; */
		/* background-color: #448833; */
	}
	.shrright{
		width: 88%;
		/* height: 80px; */
		/* background-color: #fab; */
		text-align: left;
	}
	.days{
		color: #999;
		font-weight: normal;
		font-size: 14px;
		
	}
	.slcenter{
		font-size: 16px;
		width:100%;
		overflow: hidden;
		word-wrap: break-word; 
		line-height: 25px;
	}
	.nase{
		margin: 15px 0;
	}
	.line{
		width: 20px;
		margin: 0 10px;
	}
	img{
		vertical-align: middle;
	}
	.naseright{
		float: right;
	}
</style>
