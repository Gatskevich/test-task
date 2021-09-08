import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = function(app:any) {
  app.use(
    ['/api'],
    createProxyMiddleware({
      target: 'http://localhost:3080',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api', // rewrite path
      },
    })
  );
};