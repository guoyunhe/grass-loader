// eslint-disable-next-line no-undef
module.exports = {
  entry: 'src/index.js',
  output: {
    path: 'dist/dart-sass/',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          { loader: 'sass-loader', options: { implementation: 'sass' } },
        ],
      },
    ],
  },
};
