const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	}, // 이름정하기, 아웃풋이 놓일 path지정해주기
	module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		},{
			test: /\.s?css$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		}]
	}, // 우리는 rules속성만 사용하면 됨
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'public')
	} // 베이스가 되는 서브할 폴더 정해주면 됨
};