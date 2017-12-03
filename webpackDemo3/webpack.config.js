/**
 * Created by Administrator on 2017/10/26.
 */
module.exports={
	entry:"./main.js",
	output:{
		filename:"bundle.js"
	},
	module:{
		loaders:[
			{test:/\.css$/,loader:'style-loader!css-loader'}
			]
	}
}