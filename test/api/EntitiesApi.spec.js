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
    instance = new TransferzeroSdk.EntitiesApi();
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

  describe('EntitiesApi', function() {
    describe('getEntities', function() {
      it('should call getEntities successfully', function(done) {
        //uncomment below and update the code to test getEntities
        //instance.getEntities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEntitiesByParams', function() {
      it('should call getEntitiesByParams successfully', function(done) {
        //uncomment below and update the code to test getEntitiesByParams
        //instance.getEntitiesByParams(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEntity', function() {
      it('should call getEntity successfully', function(done) {
        //uncomment below and update the code to test getEntity
        //instance.getEntity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchEntity', function() {
      it('should call patchEntity successfully', function(done) {
        //uncomment below and update the code to test patchEntity
        //instance.patchEntity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postEntity', function() {
      it('should call postEntity successfully', function(done) {
        //uncomment below and update the code to test postEntity
        //instance.postEntity(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
