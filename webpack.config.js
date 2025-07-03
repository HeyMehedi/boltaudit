const path = require("path");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");

const devHost = "wpmvc.test";

module.exports = {
  ...defaultConfig,
  entry: {
    "js/app": "./resources/js/app.js",
    "css/app": "./resources/sass/app.scss",
  },
  output: {
    path: path.resolve(__dirname, "./assets/build/"),
    filename: "[name].js",
    clean: false,
  },
  resolve: {
    alias: {
      "@root/style": path.resolve(__dirname, "resources/js/style.js"),
      "@components": path.resolve(__dirname, "resources/js/components"),
      "@modules": path.resolve(__dirname, "resources/js/modules"),
      "@layout": path.resolve(__dirname, "resources/js/layout"),
      "@data": path.resolve(__dirname, "resources/js/data"),
      "@store": path.resolve(__dirname, "resources/js/store"),
      "@hooks": path.resolve(__dirname, "resources/js/hooks"),
      "@helper": path.resolve(__dirname, "resources/js/helper"),
      "@icon": path.resolve(__dirname, "resources/svg/icon"),
      "@images": path.resolve(__dirname, "resources/svg"),
      "@assets": path.resolve(__dirname, "assets"),
    },
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    allowedHosts: "auto",
    port: 8887,
    host: devHost,
    proxy: {
      "/assets/build": {
        pathRewrite: {
          "^/assets/build": "",
        },
      },
    },
    headers: { "Access-Control-Allow-Origin": "*" },
  },
};
