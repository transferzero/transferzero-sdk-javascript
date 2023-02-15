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
    instance = new TransferzeroSdk.BankAccountDetails();
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

  describe('BankAccountDetails', function() {
    it('should create an instance of BankAccountDetails', function() {
      // uncomment below and update the code to test BankAccountDetails
      //var instane = new TransferzeroSdk.BankAccountDetails();
      //expect(instance).to.be.a(TransferzeroSdk.BankAccountDetails);
    });

    it('should have the property payinCcy (base name: "payin_ccy")', function() {
      // uncomment below and update the code to test the property payinCcy
      //var instane = new TransferzeroSdk.BankAccountDetails();
      //expect(instance).to.be();
    });

    it('should have the property accountName (base name: "account_name")', function() {
      // uncomment below and update the code to test the property accountName
      //var instane = new TransferzeroSdk.BankAccountDetails();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instane = new TransferzeroSdk.BankAccountDetails();
      //expect(instance).to.be();
    });

    it('should have the property bankName (base name: "bank_name")', function() {
      // uncomment below and update the code to test the property bankName
      //var instane = new TransferzeroSdk.BankAccountDetails();
      //expect(instance).to.be();
    });

    it('should have the property bankAddress (base name: "bank_address")', function() {
      // uncomment below and update the code to test the property bankAddress
      //var instane = new TransferzeroSdk.BankAccountDetails();
      //expect(instance).to.be();
    });

    it('should have the property iban (base name: "iban")', function() {
      // uncomment below and update the code to test the property iban
      //var instane = new TransferzeroSdk.BankAccountDetails();
      //expect(instance).to.be();
    });

    it('should have the property bicOrSwift (base name: "bic_or_swift")', function() {
      // uncomment below and update the code to test the property bicOrSwift
      //var instane = new TransferzeroSdk.BankAccountDetails();
      //expect(instance).to.be();
    });

    it('should have the property sortCode (base name: "sort_code")', function() {
      // uncomment below and update the code to test the property sortCode
      //var instane = new TransferzeroSdk.BankAccountDetails();
      //expect(instance).to.be();
    });

    it('should have the property accountNumber (base name: "account_number")', function() {
      // uncomment below and update the code to test the property accountNumber
      //var instane = new TransferzeroSdk.BankAccountDetails();
      //expect(instance).to.be();
    });

    it('should have the property branchName (base name: "branch_name")', function() {
      // uncomment below and update the code to test the property branchName
      //var instane = new TransferzeroSdk.BankAccountDetails();
      //expect(instance).to.be();
    });

    it('should have the property branchCode (base name: "branch_code")', function() {
      // uncomment below and update the code to test the property branchCode
      //var instane = new TransferzeroSdk.BankAccountDetails();
      //expect(instance).to.be();
    });

    it('should have the property reference (base name: "reference")', function() {
      // uncomment below and update the code to test the property reference
      //var instane = new TransferzeroSdk.BankAccountDetails();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new TransferzeroSdk.BankAccountDetails();
      //expect(instance).to.be();
    });

    it('should have the property unavailableMessage (base name: "unavailable_message")', function() {
      // uncomment below and update the code to test the property unavailableMessage
      //var instane = new TransferzeroSdk.BankAccountDetails();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TransferzeroSdk.BankAccountDetails();
      //expect(instance).to.be();
    });

  });

}));