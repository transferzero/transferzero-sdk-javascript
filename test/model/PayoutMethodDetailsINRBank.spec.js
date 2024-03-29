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
    instance = new TransferzeroSdk.PayoutMethodDetailsINRBank();
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

  describe('PayoutMethodDetailsINRBank', function() {
    it('should create an instance of PayoutMethodDetailsINRBank', function() {
      // uncomment below and update the code to test PayoutMethodDetailsINRBank
      //var instane = new TransferzeroSdk.PayoutMethodDetailsINRBank();
      //expect(instance).to.be.a(TransferzeroSdk.PayoutMethodDetailsINRBank);
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new TransferzeroSdk.PayoutMethodDetailsINRBank();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new TransferzeroSdk.PayoutMethodDetailsINRBank();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instane = new TransferzeroSdk.PayoutMethodDetailsINRBank();
      //expect(instance).to.be();
    });

    it('should have the property street (base name: "street")', function() {
      // uncomment below and update the code to test the property street
      //var instane = new TransferzeroSdk.PayoutMethodDetailsINRBank();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postal_code")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instane = new TransferzeroSdk.PayoutMethodDetailsINRBank();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phone_number")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instane = new TransferzeroSdk.PayoutMethodDetailsINRBank();
      //expect(instance).to.be();
    });

    it('should have the property bankName (base name: "bank_name")', function() {
      // uncomment below and update the code to test the property bankName
      //var instane = new TransferzeroSdk.PayoutMethodDetailsINRBank();
      //expect(instance).to.be();
    });

    it('should have the property bankAccount (base name: "bank_account")', function() {
      // uncomment below and update the code to test the property bankAccount
      //var instane = new TransferzeroSdk.PayoutMethodDetailsINRBank();
      //expect(instance).to.be();
    });

    it('should have the property ifscCode (base name: "ifsc_code")', function() {
      // uncomment below and update the code to test the property ifscCode
      //var instane = new TransferzeroSdk.PayoutMethodDetailsINRBank();
      //expect(instance).to.be();
    });

  });

}));
