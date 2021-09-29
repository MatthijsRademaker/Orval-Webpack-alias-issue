const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@test": path.resolve(__dirname, "./src/test"),
      },
      extensions: [".ts"],
    },
  },
};
