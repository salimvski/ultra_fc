const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    // Add SVG loader rule
    config.module
      .rule('svg')
      .test(/\.svg$/)
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  }
})
