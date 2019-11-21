const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss|\.sass$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  // Return the altered config
  return config;
};
