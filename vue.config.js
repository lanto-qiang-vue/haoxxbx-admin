const path = require('path')
const webpack = require('webpack')
const resolve = dir => {
	return path.join(__dirname, dir)
}
// console.log(process.env.NODE_ENV)
module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				$:"jquery",
				jQuery:"jquery",
				"windows.jQuery":"jquery"
			})
		]
	},
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('~', resolve('/'))
	},
	productionSourceMap: false,
	css:{
		loaderOptions: {
			less:{
				javascriptEnabled: true
			}
		}
	},
	devServer: {
		port: 9999,
		proxy: {
			'/proxy/': {
				target: 'http://192.168.169.231:8888/',
                pathRewrite: {'^/proxy/': ''},
                secure: false
			},
		}
	},
}
