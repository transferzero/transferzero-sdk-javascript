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
    instance = new TransferzeroSdk.PayoutMethodDetailsXOFCash();
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

  describe('PayoutMethodDetailsXOFCash', function() {
    it('should create an instance of PayoutMethodDetailsXOFCash', function() {
      // uncomment below and update the code to test PayoutMethodDetailsXOFCash
      //var instane = new TransferzeroSdk.PayoutMethodDetailsXOFCash();
      //expect(instance).to.be.a(TransferzeroSdk.PayoutMethodDetailsXOFCash);
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new TransferzeroSdk.PayoutMethodDetailsXOFCash();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new TransferzeroSdk.PayoutMethodDetailsXOFCash();
      //expect(instance).to.be();
    });

    it('should have the property identityCardId (base name: "identity_card_id")', function() {
      // uncomment below and update the code to test the property identityCardId
      //var instane = new TransferzeroSdk.PayoutMethodDetailsXOFCash();
      //expect(instance).to.be();
    });

    it('should have the property identityCardType (base name: "identity_card_type")', function() {
      // uncomment below and update the code to test the property identityCardType
      //var instane = new TransferzeroSdk.PayoutMethodDetailsXOFCash();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phone_number")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instane = new TransferzeroSdk.PayoutMethodDetailsXOFCash();
      //expect(instance).to.be();
    });

    it('should have the property cashProvider (base name: "cash_provider")', function() {
      // uncomment below and update the code to test the property cashProvider
      //var instane = new TransferzeroSdk.PayoutMethodDetailsXOFCash();
      //expect(instance).to.be();
    });

  });

}));