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
	entry: './src/index.tsx',
	output: {
		filename: '[name].js',
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
				test: /\.(sa|sc|c)ss$/,
				use: [
				  	devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(ts|tsx)$/,
				use: [
					'babel-loader',
					'awesome-typescript-loader'
				],
			}
		]
	},
	resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx'],
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