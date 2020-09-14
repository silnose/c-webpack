const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    home: path.resolve(__dirname, "src/js/index.js"),
    prices: path.resolve(__dirname, "src/js/prices.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
  },
};
