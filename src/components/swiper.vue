
<template>
	<div>
	    <swiper :options="swiperOption">
	            <swiper-slide v-for="(item,index) in stories" :key="index">
					<a href="#" target="_blank">
						<img :src="item.images" /><span class="title">{{item.title}}</span>
					</a>
	               <!-- <image :src="'https://pic4.zhimg.com//v2-aaa3b9b9e7e5ae4766f1c2f4b36b391b.jpg' + item.logo" class="slide-image"/> -->
	            </swiper-slide>
				<div class="swiper-pajination swiper-pajination-bullets" slot="pagination"></div>
	    </swiper>
	</div>
</template>

<script>
	// import "swiper/dist/css/swiper.css";
	// import { swiper,swiperSlide } from 'vue-awesome-swiper'
	 export default {
	        data() {
	            return {
	                stories:{}
	            }
	        },
			components:{
				swiper,
				swiperSlide
			},
	        mounted:function() {
	            this.load()
	        },
	        methods: {
				 load(){
                        axios({//格式a
                            method:'get',
                            url:'http://news-at.zhihu.com/api/4/news/latest'
                        }).then(function(resp){
                            console.log(resp.data);
                        }).catch(resp => {
                            console.log('请求失败：'+resp.status+','+resp.statusText);
                        });
	            // load(){
	            //     let t = this
	            //         wx.request({
	            //         url: 'http://news-at.zhihu.com/api/4/news/latest', //仅为示例，并非真实的接口地址
	            //         data: {
	            //         },
	            //         header: {
	            //             'content-type': 'application/json' // 默认值
	            //         },
	            //         success (res) {
	            //             console.log(res.data)
	            //             t.stories = res.data
	            //         }
	            //         })
	            }
	        }
	    }
	
</script>

<style>
	.swiper{
		width: 100%;
		height: 200px;
	}
</style>
