const { resolve } = require('path');

module.exports = {
  publicPath: '/',
  outputDir: 'dist/demo',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src/demo'),
        'my-vue-library': resolve(__dirname, 'dist/lib/library.esm.js'),
      },
    },
  }
};
