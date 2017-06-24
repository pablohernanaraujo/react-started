const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

var plugins = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor'
  }),
  new HtmlWebpackPlugin({
    template: 'public/index.html'
  }),
  new ExtractTextPlugin("[name].css"),
  new webpack.optimize.UglifyJsPlugin({
    compress: {warnings: false},
    output: {comments: false},
    sourceMap: true
  })
]

module.exports = {
	devtool: 'source-map',
  entry: {
    vendor: './src/vendors.js',
    main: './src/index.js'
  },
	output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map'
  },
	devServer: {
    contentBase: "./public",
  },
	module: {
		loaders: [{
			enforce: 'pre',
			test: /\.js$/,
			exclude: /node_module/,
			loader: 'standard-loader'
		},
		{
			test: /\.sss$/,
			loader: ExtractTextPlugin.extract({
				use: [{
					loader: 'css-loader',
          options: {
            url: false
          }
				}, {
					loader: 'postcss-loader',
          options: {
            plugins: function(){
              return [
                require('postcss-smart-import'),
                require('postcss-cssnext')
              ]
            },
            parser: 'sugarss'
          }
				}],
				fallback: 'style-loader'
			})
		},
		{
			test: /\js$/,
			exclude: /node_module/,
			loader: 'babel-loader',
			query: {
        presets: ['es2015','stage-0','react']
      }
		}]
	},
	plugins: plugins,
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}
