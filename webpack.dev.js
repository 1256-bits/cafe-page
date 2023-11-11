const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devServer: {
    open: true,
    host: "localhost",
    static: "./src",
  },
});