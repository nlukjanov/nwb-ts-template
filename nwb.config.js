const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = () => {
  return {
    type: 'react-app',
    npm: {
      esModules: true,
      umd: {
        global: 'eod-front',
        externals: {
          react: 'React',
        },
      },
    },
    webpack: {
      config: (config) => {
        if (config.mode === 'development') {
          config.entry = './demo/src/index';
        } else {
          config.entry = './src/index';
        }
        return config;
      },
      extra: {
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },
        plugins: [new ESLintPlugin()],
        // module: {
        //   rules: [
        //     {test: /\.tsx$/, loader: 'ts-loader'},
        //     {
        //       test: /\.(ts|tsx)$/,
        //       enforce: 'pre',
        //       loader: 'eslint-loader',
        //       exclude: /node_modules/,
        //     },
        //   ],
        // },
      },
    },
  };
};
