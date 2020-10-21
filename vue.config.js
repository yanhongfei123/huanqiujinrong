const path = require('path');

module.exports = {
  baseUrl: './',    // 公共路径
  outputDir: process.env.NODE_ENV === 'development' ? 'devdist' : 'dist', // 不同的环境打不同包名
  css: {  // 一次配置，全局使用，这个scss 因为每个文件都要引入
    loaderOptions: {
      sass: {
        data: `@import "./src/assets/style/bg-image.scss";`
      }
    }
  },
  lintOnSave: false,  // 关闭eslint
  productionSourceMap: false,  // 生产环境是否生成 sourceMap 文件
  devServer: {   // 配置服务器
    port: 7000,
    open: true,
    https: false,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/api': {
        target: 'https://api.etfcool.com/', //对应自己的接口 http://47.91.214.249:8003/
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {  // 覆盖webpack默认配置的都在这里  http://www.etf.cool
    resolve: {   // 配置解析别名
      alias: {
        '@': path.resolve(__dirname, './src'),
        // '@h':path.resolve(__dirname, './src/assets/hotcss'),
        // '@s':path.resolve(__dirname, './src/assets/style'),
        // '@i':path.resolve(__dirname, './src/assets/images'),
      }
    }
  }
};
