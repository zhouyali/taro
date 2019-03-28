
// var Uglify = require("uglify-js");

const DEVICE_RATIO = {
  '640': 2.34 /2 ,
  '750': 1 ,
  '828': 1.81 /2,
}

const config = {
  projectName: 'myApp',
  date: '2019-3-13',
  designWidth: 750,
  deviceRatio: DEVICE_RATIO,
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: {//通用插件的配置
    babel: {
      sourceMap: true,
      presets: [
        ['env', {
          modules: false
        }]
      ],
      plugins: [
        'transform-decorators-legacy',
        'transform-class-properties',
        'transform-object-rest-spread',
      ],
      // Uglify: {
      //   enable: true,
      //   config:{

      //   }
      // }
    }
  },
  //全局变量设置
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  //小程序专用配置
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: [
              'last 3 versions',
              'Android >= 4.1',
              'ios >= 8'
            ]
          }
        },
        pxtransform: {
          enable: true,
          config: {

          }
        },
        url: {
          enable: true,
          config: {
            limit: 10240 // 设定转换尺寸上限
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    esnextModules:['taro-ui'],
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: [
              'last 3 versions',
              'Android >= 4.1',
              'ios >= 8'
            ]
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    },
    router: {
      mode:'browser',//hash
      // basename: 'zylapp',
      customRoutes: {//注意健要以/开头
        '/pages/index/index':'/index',
        '/pages/home/home':'/home',
        '/pages/login/login':'/login',
        '/pages/counter/counter':'/counter'
      }
    },
    //自定义webpack配置
    webpackChain:{},
    devServer:{
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
