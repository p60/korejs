(function(exports, angular){
  'use strict';
  var defs = require('./defs');
  exports.Kore = defs;
  angular.module('korejs', ["ng"]).constant('Kore', defs);
})(module.exports, window.angular);
