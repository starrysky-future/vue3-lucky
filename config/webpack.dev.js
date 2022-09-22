const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const paths = require("./paths");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    static: paths.public, // 直接读取静态文件
    compress: true, // 压缩 gzip
    port: 8080,
    hot: true, // 热更新
    // open: true, // 自动打开浏览器
    proxy: {
      "/api": {
        target: "http://localhost:8888", // 请求代理
        pathRewrite: { "^/api": "" }, // 不传/api
        secure: true, // 支持https
        changeOrigin: true, // 是否跨域
      },
    },
  },
});
