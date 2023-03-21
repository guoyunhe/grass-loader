# @guoyunhe/grass-loader

Faster Sass loader for Webpack.

Based on [@connorskees/grass](https://github.com/connorskees/grass), a Sass compiler written in Rust
and distributed as WASM.

## Install

```bash
npm i -D @guoyunhe/grass-loader @connorskees/grass webpack
```

## Usage

```js
// webpack.config.js
module.exports = {
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
          { loader: '@guoyunhe/grass-loader' },
        ],
      },
    ],
  },
};
```
