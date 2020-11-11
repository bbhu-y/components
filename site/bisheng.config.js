const path = require('path');
const antd =  require('antd');
/**
 * bisheng start读取
 * 
 * program.config ||  bisheng.config.js
 */
module.exports = {
  theme: './site/theme',
  port: 8881,
  hash: true,
  source: {
    components: './components',
    docs: './docs',
    changelog: ['CHANGELOG.md']
  },
  htmlTemplate: './site/theme/static/template.html',  // 设置 htmlTemplate配置
  themeConfig: {
    categoryOrder: {},
    typeOrder: {},
    docVersions: {
      '0.0.1': '',
    },
  },
  filePathMapper(filePath) {
    if (filePath === '/index.html') {
      return ['/index.html', '/index-cn.html'];
    }
    if (filePath.endsWith('/index.html')) {
      return [filePath, filePath.replace(/\/index\.html$/, '-cn/index.html')];
    }
    if (filePath !== '/404.html' && filePath !== '/index-cn.html') {
      return [filePath, filePath.replace(/\.html$/, '-cn.html')];
    }
    return filePath;
  },
  doraConfig: { 
    verbose: true,
  },
  lessConfig: {
    javascriptEnabled: true,
  },
  webpackConfig(config) {
    // eslint-disable-next-line
    config.resolve.alias = {
      site: path.join(process.cwd(), 'site'),
      'components':path.join(process.cwd(), 'components')
    };

    // eslint-disable-next-line
    config.externals = {
      'react-router-dom': 'ReactRouterDOM',
      'Antd' : antd,
    };
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });
    return config;
  },

  devServerConfig: {
    public: process.env.DEV_HOST || 'localhost',
    disableHostCheck: !!process.env.DEV_HOST,
  },
};
