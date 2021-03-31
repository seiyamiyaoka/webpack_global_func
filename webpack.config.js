module.exports = {
  /* 略 */
  mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'main.js',
      libraryTarget: 'var',
      library: 'HtmlFunc'
    },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',   //loader名
          options: {                //Babelの設定
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};