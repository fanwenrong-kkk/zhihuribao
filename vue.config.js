module.exports = {
  devServer:{
	  proxy:{
		  '/api':{
			  target:'http://news-at.zhihu.com/api/4/',
			  ws:true,
			  changeOrigin:true,
			  pathRewrite:{
				  '^/api':''
			  }
		  }
	  }
  }
}
