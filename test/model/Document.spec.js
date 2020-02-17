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
    instance = new TransferzeroSdk.Document();
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

  describe('Document', function() {
    it('should create an instance of Document', function() {
      // uncomment below and update the code to test Document
      //var instane = new TransferzeroSdk.Document();
      //expect(instance).to.be.a(TransferzeroSdk.Document);
    });

    it('should have the property senderId (base name: "sender_id")', function() {
      // uncomment below and update the code to test the property senderId
      //var instane = new TransferzeroSdk.Document();
      //expect(instance).to.be();
    });

    it('should have the property upload (base name: "upload")', function() {
      // uncomment below and update the code to test the property upload
      //var instane = new TransferzeroSdk.Document();
      //expect(instance).to.be();
    });

    it('should have the property uploadFileName (base name: "upload_file_name")', function() {
      // uncomment below and update the code to test the property uploadFileName
      //var instane = new TransferzeroSdk.Document();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new TransferzeroSdk.Document();
      //expect(instance).to.be();
    });

    it('should have the property uploadContentType (base name: "upload_content_type")', function() {
      // uncomment below and update the code to test the property uploadContentType
      //var instane = new TransferzeroSdk.Document();
      //expect(instance).to.be();
    });

    it('should have the property uploadFileSize (base name: "upload_file_size")', function() {
      // uncomment below and update the code to test the property uploadFileSize
      //var instane = new TransferzeroSdk.Document();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new TransferzeroSdk.Document();
      //expect(instance).to.be();
    });

    it('should have the property side (base name: "side")', function() {
      // uncomment below and update the code to test the property side
      //var instane = new TransferzeroSdk.Document();
      //expect(instance).to.be();
    });

    it('should have the property documentType (base name: "document_type")', function() {
      // uncomment below and update the code to test the property documentType
      //var instane = new TransferzeroSdk.Document();
      //expect(instance).to.be();
    });

    it('should have the property issuingCountry (base name: "issuing_country")', function() {
      // uncomment below and update the code to test the property issuingCountry
      //var instane = new TransferzeroSdk.Document();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new TransferzeroSdk.Document();
      //expect(instance).to.be();
    });

    it('should have the property errors (base name: "errors")', function() {
      // uncomment below and update the code to test the property errors
      //var instane = new TransferzeroSdk.Document();
      //expect(instance).to.be();
    });

  });

}));
