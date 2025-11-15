// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://202.114.212.194:8004',
      changeOrigin: true,
      // 后端已有 /api 前缀，无需重写
      // pathRewrite: { '^/api': '/api' } // 不需要
    })
  );
};
