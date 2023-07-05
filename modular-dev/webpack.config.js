const path = require("path");
module.exports = {
  entry: "./src/esm/index.js",
  //   entry: "./src/cjs/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "esm.bundle.js",
    // filename: "cjs.bundle.js",
  },
};
