const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/test.tsx",
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/manifest.json"),
          to: path.resolve("dist"),
        },
      ],
    }),
    new HtmlWebPlugin({
      title: "React Extension",
      filename: "popup.html",
      chunks: ["popup"],
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
};
