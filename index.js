(function(angular, undefined) {
'use strict';
// Preload some angular stuff
  var KoreJSModule = angular.module('korejs', []);
  var defs = require('./defs');
  KoreJSModule.constant('Kore', defs);
});
