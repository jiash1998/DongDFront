module.exports = {
  devServer: {
    port: 8080,
    open: false,
    proxy: {
      "/": {
        target: "http://localhost:3000",
        ws: true,
        changeOrigin: true, //创建一个虚拟服务器，
        pathRewrite: {
          "^/api": "" //通配符
        }
      },
    },
  },
};