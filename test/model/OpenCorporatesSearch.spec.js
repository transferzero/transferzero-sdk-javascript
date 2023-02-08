/**
 * BitPesa Private API
 * API specification used for internal BitPesa endpoints
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TransferzeroSdk);
  }
}(this, function(expect, TransferzeroSdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TransferzeroSdk.OpenCorporatesSearch();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('OpenCorporatesSearch', function() {
    it('should create an instance of OpenCorporatesSearch', function() {
      // uncomment below and update the code to test OpenCorporatesSearch
      //var instane = new TransferzeroSdk.OpenCorporatesSearch();
      //expect(instance).to.be.a(TransferzeroSdk.OpenCorporatesSearch);
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new TransferzeroSdk.OpenCorporatesSearch();
      //expect(instance).to.be();
    });

    it('should have the property registrationNumber (base name: "registration_number")', function() {
      // uncomment below and update the code to test the property registrationNumber
      //var instane = new TransferzeroSdk.OpenCorporatesSearch();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new TransferzeroSdk.OpenCorporatesSearch();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new TransferzeroSdk.OpenCorporatesSearch();
      //expect(instance).to.be();
    });

    it('should have the property errors (base name: "errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instane = new TransferzeroSdk.OpenCorporatesSearch();
      //expect(instance).to.be();
    });

  });

}));
