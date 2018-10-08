const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const devMode = process.argv.indexOf('-d') >= 0 || process.env.NODE_ENV === 'development';

module.exports = {
	mode: devMode ? 'development' : 'production',
	devtool: devMode ? 'cheap-module-eval-source-map' : 'source-map',
	// entry: './src/index.tsx',
	entry: {
		vendor: [
			// common packages
			'react',
			'react-dom',
		],
		app: [
			`./src/index.tsx`,
		]
	},
	output: {
		libraryTarget: 'umd',
		filename: '[name].bundle.js',
		chunkFilename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		compress: true,
		port: 3000,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				// test: /\.(sa|sc|c)ss$/,
				test: /\.css$/,
				use: [
				  	devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
							modules: true,
                       		importLoaders: 1,
							// modules: true,
						}
					},
					// {
					// 	loader: "sass-loader",
					// 	options: {
					// 		sourceMap: true
					// 	}
					// }
				],
			},
			{
				test: /\.(ts|tsx)$/,
				use: [
					// 'babel-loader',
					'awesome-typescript-loader'
				],
			},
			{
				test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 100 * 1024,
					},
				}],
			}
		]
	},
	resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx', '.css'],
    },
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: devMode ? '[name].css' : '[name].[hash].css',
      		chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
		}),
		new CheckerPlugin(),
		new CleanWebpackPlugin(['dist']),
		... devMode ? [
			new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
		] : []
	]
};