/**
 * TransferZero API
 * Reference documentation for the TransferZero API V1
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
    instance = new TransferzeroSdk.PaymentMethodOppositeAllOf();
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

  describe('PaymentMethodOppositeAllOf', function() {
    it('should create an instance of PaymentMethodOppositeAllOf', function() {
      // uncomment below and update the code to test PaymentMethodOppositeAllOf
      //var instane = new TransferzeroSdk.PaymentMethodOppositeAllOf();
      //expect(instance).to.be.a(TransferzeroSdk.PaymentMethodOppositeAllOf);
    });

    it('should have the property opposites (base name: "opposites")', function() {
      // uncomment below and update the code to test the property opposites
      //var instane = new TransferzeroSdk.PaymentMethodOppositeAllOf();
      //expect(instance).to.be();
    });

  });

}));