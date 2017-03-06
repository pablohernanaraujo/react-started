const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: resolve(__dirname, 'src/index.js'),
	output: {
		filename: 'bundle.js'
	},
	devServer: {
    contentBase: "./public",
  },
	module: {
		rules: [{
			enforce: 'pre',
			test: /\.js$/,
			exclude: /node_module/,
			loader: 'standard-loader'
		}, {
			test: /\js$/,
			exclude: /node_module/,
			loader: 'babel-loader',
			query: {
        presets: ['es2015','stage-0','react']
      }
		}, {
			test: /\.sass$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }]
    }]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	]
}
