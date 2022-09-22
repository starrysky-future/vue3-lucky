// 去除生产的console
const consolePlugin =
  process.env.NODE_ENV === "production" ? ["transform-remove-console"] : [];
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: "3.22",
        targets: {
          chrome: "58",
          ie: "11",
        },
      },
    ],
  ],
  plugins: [...consolePlugin],
};
