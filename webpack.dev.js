const { merge } = require("webpack-merge");
const commonWebpackConfig = require("./webpack.common.js");
module.exports = merge(commonWebpackConfig, {
  mode: "development",
  devtool: "cheap-module-source-map",
});
