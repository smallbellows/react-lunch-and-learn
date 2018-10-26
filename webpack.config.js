var path = require('path');

module.exports = {
    mode: "development",
    entry: ['./app.js'],
    output: {
        path: path.resolve(__dirname),
        filename: 'app.bundle.js'
    },
    watch: true,
    watchOptions: {
        ignored: /(node_modules|bower_components)/,
        aggregateTimeout: 500
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                      '@babel/preset-env',
                      '@babel/preset-react'
                    ]
                }
              }
            }
          ]
    }
};