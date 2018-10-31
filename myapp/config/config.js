// https://umijs.org/config/
import os from 'os';
import pageRoutes from './router.config';
import webpackplugin from './plugin.config';
import themeplugin from './theme.config';
export default {
  // add for transfer to umi
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: {
          hmr: true,
        },
        locale: {
          enable: true, // default false
          default: 'zh-CN', // default zh-CN
          baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
        },
        dynamicImport: {
          loadingComponent: './components/PageLoading/index',
        },
       
        polyfills: ['ie11'],
        ...(!process.env.TEST && os.platform() === 'darwin'
          ? {
              dll: {
                include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
                exclude: ['@babel/runtime'],
              },
              hardSource: true,
            }
          : {}),
      },
    ],
  ],
  history: 'hash',
  define: {
    APP_TYPE: process.env.APP_TYPE || '',
    NODE_ENV:process.env.APP_ENV||''
  },
  // 路由配置
  routes: pageRoutes,
 
  proxy: {
  "/api": {
    "target": "http://localhost:58949/api",
    "changeOrigin": true,
    "pathRewrite": { "^/api" : "" }
  }
  },
  // Theme for antd
  // https://ant.design/docs/react/customize-theme-cn
  theme:themeplugin,
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (context, localIdentName, localName) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }
      const match = context.resourcePath.match(/src(.*)/);
      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = antdProPath
          .split('/')
          .map(a => a.replace(/([A-Z])/g, '-$1'))
          .map(a => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }
      return localName;
    },
  },

  chainWebpack: webpackplugin,
  cssnano: {
    mergeRules: false,
  },
};
