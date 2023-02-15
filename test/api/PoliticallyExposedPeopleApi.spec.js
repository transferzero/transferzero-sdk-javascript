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
    instance = new TransferzeroSdk.PoliticallyExposedPeopleApi();
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

  describe('PoliticallyExposedPeopleApi', function() {
    describe('deletePoliticallyExposedPerson', function() {
      it('should call deletePoliticallyExposedPerson successfully', function(done) {
        //uncomment below and update the code to test deletePoliticallyExposedPerson
        //instance.deletePoliticallyExposedPerson(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPoliticallyExposedPeople', function() {
      it('should call getPoliticallyExposedPeople successfully', function(done) {
        //uncomment below and update the code to test getPoliticallyExposedPeople
        //instance.getPoliticallyExposedPeople(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPoliticallyExposedPerson', function() {
      it('should call getPoliticallyExposedPerson successfully', function(done) {
        //uncomment below and update the code to test getPoliticallyExposedPerson
        //instance.getPoliticallyExposedPerson(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchPoliticallyExposedPerson', function() {
      it('should call patchPoliticallyExposedPerson successfully', function(done) {
        //uncomment below and update the code to test patchPoliticallyExposedPerson
        //instance.patchPoliticallyExposedPerson(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postPoliticallyExposedPeople', function() {
      it('should call postPoliticallyExposedPeople successfully', function(done) {
        //uncomment below and update the code to test postPoliticallyExposedPeople
        //instance.postPoliticallyExposedPeople(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));