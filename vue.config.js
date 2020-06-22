module.exports = {
  devServer: {
    //这是vue项目启动端口
    port: 8085,
    open: false,
    proxy: {
      "/apis": {
        //这里你把端口改成你后端端口就行，
        target: "http://localhost:8080",
        ws: true,
        changeOrigin: true, //创建一个虚拟服务器，
        pathRewrite: {
          "^/apis": "" //通配符
        }
      },
    },
  },
};