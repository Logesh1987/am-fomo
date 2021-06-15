function enableShadowCss(config) {
  const configs = [
    config.module.rule("vue").use("vue-loader"),
    config.module.rule("less").oneOf("vue-modules").use("vue-style-loader"),
    config.module.rule("less").oneOf("vue").use("vue-style-loader"),
    config.module.rule("less").oneOf("normal-modules").use("vue-style-loader"),
    config.module.rule("less").oneOf("normal").use("vue-style-loader"),
  ];
  configs.forEach((c) =>
    c.tap((options) => {
      options.shadowMode = true;
      return options;
    })
  );
}

module.exports = {
  chainWebpack: (config) => {
    enableShadowCss(config);
  },
  publicPath: 'https://logesh1987.github.io/am-fomo/dist/'
};
