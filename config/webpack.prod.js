const { merge } = require("webpack-merge");
const paths = require("./paths");
const common = require("./webpack.common");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: false,
  output: {
    path: paths.build,
    filename: "js/[name].[contenthash].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jep?g|png|gif|webp)$/,
        exclude: /node_modules/,
        type: "asset",
        generator: {
          filename: "images/[name].[contenthash][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 50 * 1024,
          },
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/,
        exclude: /node_modules/,
        type: "asset",
        generator: {
          filename: "fonts/[name].[content][ext]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        extractComments: false,
      }),
      "...",
    ],
  },
});
