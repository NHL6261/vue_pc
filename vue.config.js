module.exports = {
    devServer: {
     open: true, // 自动打开浏览器
     proxy: {
        '/api': {
          target: 'http://localhost:4000',
          changeOrigin: true,
          pathRewrite: {
            "^/api": ''
          }
        }
    }
  }
}