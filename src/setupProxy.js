// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = function (app) {
//   app.use(
//     // createProxyMiddleware("/restaurant", {
//     createProxyMiddleware("/api/user/login", {
//       target: "http://15.165.160.84", //접속하려는 서버의 루트 URL
//       changeOrigin: true,
//     })
//   );
//   app.use(
//     // createProxyMiddleware("/restaurant", {
//     createProxyMiddleware("/api/notice/write", {
//       target: "http://15.165.160.84", //접속하려는 서버의 루트 URL
//       changeOrigin: true,
//     })
//   );
// };







const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    // createProxyMiddleware("/restaurant", {
    createProxyMiddleware("/api/user/login", {
      target: "http://15.165.160.84", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
  app.use(
    // createProxyMiddleware("/restaurant", {
    createProxyMiddleware("/api/notice/write", {
      target: "http://15.165.160.84", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
  app.use(
    // createProxyMiddleware("/restaurant", {
    createProxyMiddleware("/api/notice", {
      target: "http://15.165.160.84", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
  app.use(
    // createProxyMiddleware("/restaurant", {
    createProxyMiddleware("/api/notice/change/", {
      target: "http://15.165.160.84", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
  app.use(
    // createProxyMiddleware("/restaurant", {
    createProxyMiddleware("/api/notice/del/", {
      target: "http://15.165.160.84", //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
};
