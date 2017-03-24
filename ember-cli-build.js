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
    }
  });

  return app.toTree();
};
