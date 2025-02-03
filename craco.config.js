module.exports = {
  babel: {
    presets: ['@babel/preset-env', '@babel/preset-react'],
  },
  webpack: {
    configure: (webpackConfig) => {
      // Custom Webpack configuration
      return webpackConfig;
    },
  },
};
