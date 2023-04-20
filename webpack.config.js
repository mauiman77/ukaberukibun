const path = require('path');

module.exports = {
  entry: './src/ukaberukibun.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};