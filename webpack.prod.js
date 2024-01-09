const { merge } = require("webpack-merge");
const commonWebpackConfig = require("webpack.common");
module.exports = merge(commonWebpackConfig, {
  mode: "production",
});
