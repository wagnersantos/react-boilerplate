const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    'module-resolver',
    {
      root: ['src'],
      alias: {
        test: './test'
      }
    }
  ])
);
