const path = require('path');

module.exports = {
    entry: './index.tsx',
    mode: 'production',
    performance: { hints: false } ,
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js',
    },
    target: 'web',
    devServer: {
        port: '5000',
        static: {
            directory: path.join(__dirname, 'public')
        },
        open: true,
        hot: true,
        liveReload: true,
    },
      resolve: {
    extensions: ['.tsx', '.ts', '.js' , '.json'],
  },
    module: {
        rules: [
          {
            test: /\.(js|mjs|cjs|tsx|ts|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ["@babel/preset-env", "@babel/preset-react", '@babel/preset-typescript']
              }
            }
          }
        ]
      }
};
