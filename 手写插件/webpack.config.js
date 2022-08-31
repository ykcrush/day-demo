const path = require("path");
const Yk = require("./plugins/yk-plugin");
module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  plugins: [
    new Yk({
      name: "webpack.config.js",
    }),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
