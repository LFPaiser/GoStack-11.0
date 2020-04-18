const path = require('path')


module.exports = {
  entry: path.resolve(__dirname, 'src', 'App.js'), //equivalente a './src/index.js mas o path.resolve contorna problemas com "\" no windows
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        test: /.*\.(gif|png|svg|jpe?g)$/i,
        exclude: /node_modules/,
        use: { loader: 'file-loader' },
      },
    ]
  }
}
