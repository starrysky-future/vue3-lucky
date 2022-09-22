const paths = require("./paths");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: [paths.src + "/main.js"],
  output: {
    path: paths.build,
    filename: "[name].bundle.js",
  },
  resolve: {
    modules: [paths.src, "node_modules"],
    alias: {
      "@": paths.src,
      assets: paths.build,
    },
    extensions: [".js", ".json", ".vue", ".scss", ".sass", ".css"],
  },
  module: {
    noParse: "/jquery|lodash/",
    rules: [
      {
        test: /\.js$/,
        include: paths.src,
        use: "babel-loader",
      },
      {
        test: /\.vue$/,
        include: paths.src,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      favicon: paths.src + "/images/favicon.png",
      template: paths.src + "/template.html",
      filename: "index.html",
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: paths.public,
    //       to: "asset",
    //       globOptions: { ignore: ["*.DS_Store"] },
    //       noErrorOnMissing: true,
    //     },
    //   ],
    // }),
    new VueLoaderPlugin(),
  ],
  performance: {
    hints: false,
  },
};
