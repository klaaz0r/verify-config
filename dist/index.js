'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = verifyConfig;

function verifyConfig(properties, obj) {
  // verify input
  if (typeof properties !== 'object') {
    throw Error('properties configuration does not apear to be an object');
  }

  if (typeof obj !== 'object') {
    throw Error('input configuration must be an object');
  }

  function verifyObject(properties, obj) {
    var config = {}; // initalize new object

    // go over all the properties
    Object.keys(properties).forEach(function verifyProperties(prop) {
      var propReq = properties[prop];

      // required p
      if (propReq.required && !obj[prop]) {
        throw Error(prop + ' is required but not present');

        // required and not present, use the default settings
      } else if (!propReq.required && !obj[prop]) {
          return config[prop] = propReq['default'];
        }

      // check if the types are correct
      if (typeof propReq.type() !== typeof obj[prop]) {
        throw Error(prop + ' needs to be a ' + typeof propReq.type() + ' input is ' + typeof obj[prop]);
      }

      // no errors, bind the property to the new config
      return config[prop] = obj[prop];
    });

    // return the new config
    return config;
  }

  return verifyObject(properties, obj);
}

module.exports = exports['default'];
