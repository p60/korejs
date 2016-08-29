(function(angular, undefined) {
'use strict';
// Preload some angular stuff
  var defs = require('./defs');
  return angular.module('korejs', ["ng"]).constant('Kore', defs);

  // console.log(defs);
  // KoreJSModule.constant('Kore', defs);
});
