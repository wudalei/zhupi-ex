
const path = require('path');
const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
  adjustWorkbox,
  fixBabelImports,
  addLessLoader
} = require("customize-cra");

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = override(
  // 使用装饰器
  addDecoratorsLegacy(),

  // disable eslint in webpack
  disableEsLint(),

  // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
  process.env.BUNDLE_VISUALIZE == 1 && addBundleVisualizer(),

  // add an alias for "ag-grid-react" imports
  addWebpackAlias({
    '@': resolve(__dirname, 'src'),
    '@style': resolve(__dirname, 'src/style'),
    '@utils': resolve(__dirname, 'src/utils')
  }),

  // // antd按需加载，不需要每个页面都引入"antd/dist/antd.css"了
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true  //这里一定要写true，css和less都不行
  }),

  // 使用less-loader对源码重的less的变量进行重新制定，设置antd自定义主题
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  })
);