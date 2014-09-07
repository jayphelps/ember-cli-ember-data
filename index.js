'use strict';

var hasWarned = false;

module.exports = {
  name: 'ember-cli-ember-data',
  init: function() {
    if (!hasWarned) {
      var deprecate = this.project.require('ember-cli/lib/utilities/deprecate');
      deprecate(this.name + ' is deprecated. ember-data itself can now be used as an add-on. Please update your package.json accordingly.', true);
      hasWarned = true;
    }
  }
};
