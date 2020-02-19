<template>
	<div>
		<div class="top">
			<div class="month">
				<div class="days">{{time|nowDay}}</div>
				<div> {{time|nowMonth}}</div>
			</div>
			<div class="xian"></div>
			<h2 class="title" v-if="wowo=(hi<9?'早上好':
			                    hi<12?'上午好':
			                    hi<15?'知乎日报':
			                    hi<19?'下午好':
			                    '晚上好'
			                    )">{{wowo}}</h2>
			<div class="images" @click="gos"></div>
		</div>
		
		 <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :head-height="80">
		        <div class="banner">
		        	<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
						<router-link :to="{name:'home', params: {id}}">
							<van-swipe-item v-for="item in swiperList" :key="item.id" >
								<a :href="item.url">
									<img :src="item.image">
									<p>
										{{item.title}}
										<span>{{item.hint}}</span>
									</p>
								</a>
							</van-swipe-item>
						</router-link>
		        	</van-swipe><!-- 轮播 -->
		        </div>
				<router-link :to="{name:'home', params: {id}}">
					<div class="listCont" @click="back">
						<div a:href="item.url" v-for="item in conList" :key="item.id" class="ullist">
							<div class="leftTitle">
								<div class="bigTitle">{{item.title}}</div>
								<div class="samallTtitile">{{item.hint}}</div>
							</div>
							<div class="rImages">
								<img :src="item.images" width="100%" height="100%"/>
							</div>
						</div>
					</div>
				</router-link>
		    </van-pull-refresh><!--下拉刷新-->
			<div>--历史--</div>
			<router-link :to="{name:'home', params: {id}}">
				<div class="listCont">
					<div a:href="item.url" v-for="item in history" :key="item.id" class="ullist">
						<div class="leftTitle">
							<div class="bigTitle">{{item.title}}</div>
							<div class="samallTtitile">{{item.hint}}</div>
						</div>
						<div class="rImages">
							<img :src="item.images" width="100%" height="100%"/>
						</div>
					</div>
				</div>
			</router-link>
		</div>
</template>

<script>
	import hi from '../assets/js/hi.js'
import { Toast } from 'vant';
export default {
    data() {
        return {
			time:Date.parse(new Date()),
			wowo:'hi',
			hi:new Date().getHours(),
             // 刷新
            count: 0,
            isLoading: false,
            // 接口
            swiperList:[],
            conList:[],
			history:[]
			
        }
    },
	filters:{
	     nowDay: function (value) {
	   let date = new Date(value);
	   let d = date.getDate();
	   d = d < 10 ? ('0' + d) : d;
	   return d
	   },
	   nowMonth: function (value){
	   let date = new Date(value);
	   let MM = date.getMonth()+1;
	   MM = MM < 10 ? (MM) : MM;
	   return MM+'月'
	   }
	 },
    methods: {
        back(){
            this.$router.replace('/About')
        },
        gos(){
            this.$router.replace('/Mine')
        },
        onRefresh() {
        setTimeout(() => {
            this.isLoading = false;
        }, 1000);
        }
    },
    mounted:function(){
        this.axios.get("news/latest").then(res => {
            this.swiperList=res.data.top_stories;
            this.conList=res.data.stories
        });
		this.axios.get("news/before/20131119").then(res=>{
			this.history=res.data.stories;
			});
		
    }
}
</script>
<style>
	*{
	margin: 0;
		padding: 0;
	}
	.top{
		background-color: #483;
		width: 100%;
		height: 50px;
		display: flex;
	}
	.month{
		font-size: 14px;
		padding: 3px 0 0 10px;
	}
	.days{
		font-size: 20px;
		font-weight: 600;
		
	}
	.xian{
		border-right: 1.5px solid #ccc;
		margin: 0 15px;
	}
	.title{
		margin-top: 5px;
	}
	.images{
		width: 40px;
		height: 40px;
		/* background-color: #42B983; */
		border-radius: 50px;
		position: absolute;
		right: 20px;
		top:5px
	}
	
	.banner{
		background-color: #fab;
		width: 100%;
		height: 400px;
	}
	.listCont{
		/* background-color: bisque; */
		width: 100%;
		padding: 10px;
		/* height: 500px; */
	}
	.leftTitle{
		width: 80%;
		text-align: left;
	}
	.bigTitle{
		font-size: 16px;
		font-weight: bold;
		
	}
	.samallTtitile{
		font-size: 12px;
		color: #ccc;
		line-height: 30px;
	}
	.rightImg{
		width: 20%;
		/* background-color: #448833; */
		text-align: center;
	}
	.rImages{
		width: 70px;
		height: 70px;
		/* background-color: #FFAABB; */
		margin: 0 auto;
		/* position: relative;
		right: 20px;
		top:-20px */
	}
	.ullist{
		padding: 10px 10px;
		margin: 10px 0;
		/* background-color: #666; */
		display: flex;
	}
	.my-swipe{
		width: 100%;
		height:100%;
	}
</style>