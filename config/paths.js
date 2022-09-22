const path = require("path");

module.exports = {
  src: path.join(__dirname, "../src"), // 资源目录
  build: path.join(__dirname, "../dist"), // 打包目录
  public: path.join(__dirname, "../public"), // 静态资源目录
};
