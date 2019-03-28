var path = require('path');

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  //用来配置一些全局变量供代码中进行使用
  defineConstants: {
  },
  weapp: {},
  h5: {
    devServer:{
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port:9000,
    }
  }
}
