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
    instance = new TransferzeroSdk.PayoutMethodDetailsBRLBank();
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

  describe('PayoutMethodDetailsBRLBank', function() {
    it('should create an instance of PayoutMethodDetailsBRLBank', function() {
      // uncomment below and update the code to test PayoutMethodDetailsBRLBank
      //var instane = new TransferzeroSdk.PayoutMethodDetailsBRLBank();
      //expect(instance).to.be.a(TransferzeroSdk.PayoutMethodDetailsBRLBank);
    });

    it('should have the property firstName (base name: "first_name")', function() {
      // uncomment below and update the code to test the property firstName
      //var instane = new TransferzeroSdk.PayoutMethodDetailsBRLBank();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "last_name")', function() {
      // uncomment below and update the code to test the property lastName
      //var instane = new TransferzeroSdk.PayoutMethodDetailsBRLBank();
      //expect(instance).to.be();
    });

    it('should have the property bankCode (base name: "bank_code")', function() {
      // uncomment below and update the code to test the property bankCode
      //var instane = new TransferzeroSdk.PayoutMethodDetailsBRLBank();
      //expect(instance).to.be();
    });

    it('should have the property branchCode (base name: "branch_code")', function() {
      // uncomment below and update the code to test the property branchCode
      //var instane = new TransferzeroSdk.PayoutMethodDetailsBRLBank();
      //expect(instance).to.be();
    });

    it('should have the property bankAccount (base name: "bank_account")', function() {
      // uncomment below and update the code to test the property bankAccount
      //var instane = new TransferzeroSdk.PayoutMethodDetailsBRLBank();
      //expect(instance).to.be();
    });

    it('should have the property bankAccountType (base name: "bank_account_type")', function() {
      // uncomment below and update the code to test the property bankAccountType
      //var instane = new TransferzeroSdk.PayoutMethodDetailsBRLBank();
      //expect(instance).to.be();
    });

    it('should have the property identityCardType (base name: "identity_card_type")', function() {
      // uncomment below and update the code to test the property identityCardType
      //var instane = new TransferzeroSdk.PayoutMethodDetailsBRLBank();
      //expect(instance).to.be();
    });

    it('should have the property identityCardId (base name: "identity_card_id")', function() {
      // uncomment below and update the code to test the property identityCardId
      //var instane = new TransferzeroSdk.PayoutMethodDetailsBRLBank();
      //expect(instance).to.be();
    });

    it('should have the property transferReason (base name: "transfer_reason")', function() {
      // uncomment below and update the code to test the property transferReason
      //var instane = new TransferzeroSdk.PayoutMethodDetailsBRLBank();
      //expect(instance).to.be();
    });

  });

}));
