// webpack.config.js
const path = require('path');
module.exports = {
  entry: path.join(__dirname, '/src/index.js'), // 入口文件
  output: {
    path: path.join(__dirname, '/dist'), //打包后的文件存放的地方
    filename: "bundle.js" //打包后输出文件的文件名
  },
  devServer: {
    contentBase: './dist', // 本地服务器所加载文件的目录
    port: '8888', // 设置端口号为8088
    inline: true, // 文件修改后实时刷新
    historyApiFallback: true, //不跳转
  },
  devtool: 'source-map', // 会生成对于调试的完整的.map文件，但同时也会减慢打包速度
  module: {
    rules: [{
        test: /\.css$/, // 正则匹配以.css结尾的文件
        use: ['style-loader', 'css-loader'] // 需要用的loader，一定是这个顺序，因为调用loader是从右往左编译的
      },
      {
        test: /\.(scss|sass)$/, // 正则匹配以.scss和.sass结尾的文件
        use: ['style-loader', 'css-loader', 'sass-loader'] // 需要用的loader，一定是这个顺序，因为调用loader是从右往左编译的
      },
      { // jsx配置
        test: /(\.jsx|\.js)$/,
        use: { // 注意use选择如果有多项配置，可写成这种对象形式
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: /node_modules/
      }
    ]
  }
};