'use strict';

var path = require('path');

module.exports = {
  name: 'Ember CLI Ember Data',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function included(app) {
    this._super.included(app);

    var options = {
      exports: {
        'ember-data': [
          'default'
        ]
      }
    };

    if (this.app.env === 'production') {
      app.import(app.bowerDirectory +'/ember-data/ember-data.prod.js', options);
    } else {
      app.import(app.bowerDirectory + '/ember-data/ember-data.js', options);
    }
  }
};
