module.exports = {
  configureWebpack: {
    externals: [
      'single-spa',
      'single-spa-vue',
      'vue',
      '@niagahoster/components',
      /^@niagahoster\/memberarea-mf-.+/,
    ]
  }
};
