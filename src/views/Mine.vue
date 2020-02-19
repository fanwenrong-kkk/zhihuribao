<template>
	<div>
		<div class="topTab"></div>
		<div class="goback">
			<img src="../assets/image/back.png" />
		</div>
		<div class="cent">
			<div class="mimages"></div>
			<div class="mname">小范</div>
		</div>
		<div class="mcollect">
			<div class="mycoll">我的收藏</div>
			<div class="mright"><img src="../assets/image/right.png" /></div>
		</div>
		<div class="mcollect">
			<div class="mycoll">消息中心</div>
			<div class="mright"><img src="../assets/image/right.png" /></div>
		</div>
		<div class="myTab">
			<div>
				<div><a href="#"><img src="../assets/image/black.png" /></a></div>
				<div>夜间模式</div>
			</div>
			<div>
				<div><a herf="#"><img src="../assets/image/shezhia.png" /></a></div>
				<div>设置</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.topTab{
		height:20px;
		width: 100%;
	}
	.goback{
		padding:0 15px ;
		width: 100%;
		height: 30px;
		text-align: left;
	}
	.goback img{
		width: 25px;
	}
	.mimages{
		width: 80px;
		height: 80px;
		border-radius: 50px;
		background-color: #42B983;
		margin: 0 auto;
		/* display: none; */
	}
	.cent{
		width: 100%;
		/* background-color: #FFAABB; */
		margin-bottom: 20px;
	}
	.mname{
		width: 100%;
		margin: 0 auto;
		font-weight: bold;
		line-height: 40px;
		font-size: 20px
	}
	.mcollect{
		border-top: 1px solid #F6F6F6;
		display: flex;
		padding: 15px 10px;
		
	}
	.mycoll{
		font-size: 18px;
		
	}
	.mright img{
		width: 25px;
		position: absolute;
		right: 20px;
	}
	.myTab{
		display: flex;
		justify-content:space-around;
		position: absolute;
		bottom: 40px;
		width: 100%;
	}
	.myTab img{
		width: 25px;
	}
</style>
