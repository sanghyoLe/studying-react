const path = require('path');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실서비스 : production
  devtool : 'eval', 
  resolve: {
        extensions: ['.js','.jsx']
  },
  entry: {
    app: ['./client'],
  }, // input

  module: {
    rules: [{
        test: /\.jsx?/, //js, jsx file에 적용하겠다는 뜻 (정규 표현식)
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env','@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
        },
    }],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  }, // output

};