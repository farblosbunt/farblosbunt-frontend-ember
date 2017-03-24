/* eslint-env node */

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let includePaths = [
    require("bourbon").includePaths,
    require("bourbon-neat").includePaths
  ];
  let app = new EmberApp(defaults, {
    sassOptions:{
      includePaths: [].concat.apply([], includePaths)
    },
    autoprefixer: {
      browsers: require('./config/targets').browsers,
      cascade: false
    }
  });

  return app.toTree();
};
