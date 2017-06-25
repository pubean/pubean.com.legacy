import merge from 'webpack-merge';
import common from './config/webpack.common';
import development from './config/webpack.development';
import test from './config/webpack.test';
import production from './config/webpack.production';


export default (env) => {
  if (env === 'development') {
    return merge(common, development); // 开发环境
  }
  if (env === 'test') {
    return merge(common, test); // 测试环境
  }
  return merge(common, production); // 生产环境
};
