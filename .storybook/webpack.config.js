const webpack = require('webpack');

const config = require('../webpack.config');

// module.exports = (storybookBaseConfig) => {
// 	storybookBaseConfig.module.rules = config.module.rules;

// 	return storybookBaseConfig;
// };

module.exports = {
	module: config.module,
	resolve: config.resolve
};
