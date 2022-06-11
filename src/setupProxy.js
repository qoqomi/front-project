const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/restaurant", {
      target: "http://15.165.160.84", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
};
