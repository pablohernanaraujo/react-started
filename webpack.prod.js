const webpack = require('webpack')
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash:6].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
	entry: {
		app: resolve(__dirname, 'src/index.js'),
		vendor: ['react','react-dom']
	},
	output: {
		path: resolve(__dirname, 'dist'),
		filename: '[name].[chunkhash:6].js'
	},
	module: {
		rules: [{
			test: /\js$/,
			exclude: /node_module/,
			loader: 'babel-loader',
			query: {
        presets: ['es2015','stage-0','react']
      }
		}, {
			test: /\.sass$/,
			loader: extractSass.extract({
        use: [{
          loader: "css-loader"
        }, {
          loader: "sass-loader"
        }],
        fallback: "style-loader"
      })
    }]
	},
	performance: {
		hints: 'error'
	},
	plugins: [
    new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		extractSass
	]
}
