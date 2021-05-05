module.exports = () => {
  return {
    type: 'react-app',
    npm: {
      esModules: true,
      umd: {
        global: 'nwb-template',
        externals: {
          react: 'React',
        },
      },
    },
    webpack: {
      config: (config) => {
        config.entry = './src/index';
        config.resolve.extensions = ['.ts', '.tsx', '.js', '.jsx'];
        config.module.rules.push({
          test: /\.tsx?$/,
          loader: 'ts-loader',
        });
        return config;
      },
    },
  };
};
