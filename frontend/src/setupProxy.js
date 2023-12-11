const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "",
    createProxyMiddleware({
      target: "https://muafs-backend.onrender.com",
      changeOrigin: true,
    })
  );
};
