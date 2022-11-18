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


import ApiClient from "../ApiClient";
import PayinMethod from '../Model/PayinMethod';
import PayinMethodResponse from '../Model/PayinMethodResponse';

/**
* PayinMethods service.
* @module Api/PayinMethodsApi
* @version 1.23.3
*/
export default class PayinMethodsApi {

    /**
    * Constructs a new PayinMethodsApi. 
    * @alias module:Api/PayinMethodsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Deleting a payin method
     * Initiates a cancellation request for the specified payin method
     * @param {String} payinMethodID ID of the payin method to delete.  Example: &#x60;/v1/payin_methods/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/PayinMethodResponse} and HTTP response
     */
    deletePayinMethodWithHttpInfo(payinMethodID) {
      let postBody = null;

      // verify the required parameter 'payinMethodID' is set
      if (payinMethodID === undefined || payinMethodID === null) {
        throw new Error("Missing the required parameter 'payinMethodID' when calling deletePayinMethod");
      }


      let pathParams = {
        'PayinMethod ID': payinMethodID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AuthorizationKey', 'AuthorizationNonce', 'AuthorizationSecret', 'AuthorizationSignature'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PayinMethodResponse;

      return this.apiClient.callApi(
        '/payin_methods/{PayinMethod ID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Deleting a payin method
     * Initiates a cancellation request for the specified payin method
     * @param {String} payinMethodID ID of the payin method to delete.  Example: &#x60;/v1/payin_methods/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/PayinMethodResponse}
     */
    deletePayinMethod(payinMethodID) {
      return this.deletePayinMethodWithHttpInfo(payinMethodID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetching a payin method
     * Show a payin method by id
     * @param {String} payinMethodID ID of the payin method to get.  Example: &#x60;/v1/payin_methods/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/PayinMethodResponse} and HTTP response
     */
    getPayinMethodWithHttpInfo(payinMethodID) {
      let postBody = null;

      // verify the required parameter 'payinMethodID' is set
      if (payinMethodID === undefined || payinMethodID === null) {
        throw new Error("Missing the required parameter 'payinMethodID' when calling getPayinMethod");
      }


      let pathParams = {
        'PayinMethod ID': payinMethodID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AuthorizationKey', 'AuthorizationNonce', 'AuthorizationSecret', 'AuthorizationSignature'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PayinMethodResponse;

      return this.apiClient.callApi(
        '/payin_methods/{PayinMethod ID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fetching a payin method
     * Show a payin method by id
     * @param {String} payinMethodID ID of the payin method to get.  Example: &#x60;/v1/payin_methods/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/PayinMethodResponse}
     */
    getPayinMethod(payinMethodID) {
      return this.getPayinMethodWithHttpInfo(payinMethodID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updating a payin method
     * Updates a single payin method by the Payin Method ID
     * @param {String} payinMethodID ID of the payin method to get.  Example: &#x60;/v1/payin_methods/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @param {module:Model/PayinMethod} payinMethod 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/PayinMethodResponse} and HTTP response
     */
    patchPayinMethodWithHttpInfo(payinMethodID, payinMethod) {
      let postBody = payinMethod;

      // verify the required parameter 'payinMethodID' is set
      if (payinMethodID === undefined || payinMethodID === null) {
        throw new Error("Missing the required parameter 'payinMethodID' when calling patchPayinMethod");
      }

      // verify the required parameter 'payinMethod' is set
      if (payinMethod === undefined || payinMethod === null) {
        throw new Error("Missing the required parameter 'payinMethod' when calling patchPayinMethod");
      }


      let pathParams = {
        'PayinMethod ID': payinMethodID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AuthorizationKey', 'AuthorizationNonce', 'AuthorizationSecret', 'AuthorizationSignature'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PayinMethodResponse;

      return this.apiClient.callApi(
        '/payin_methods/{PayinMethod ID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Updating a payin method
     * Updates a single payin method by the Payin Method ID
     * @param {String} payinMethodID ID of the payin method to get.  Example: &#x60;/v1/payin_methods/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @param {module:Model/PayinMethod} payinMethod 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/PayinMethodResponse}
     */
    patchPayinMethod(payinMethodID, payinMethod) {
      return this.patchPayinMethodWithHttpInfo(payinMethodID, payinMethod)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retries PayinMethod
     * Retries the collection process for the payin method.  Please note only payin methods in &#x60;error&#x60; state can be retried.
     * @param {String} payinMethodID ID of the payin method whose collection process should be retried  Example: &#x60;/v1/payin_methods/9d4d7b73-a94c-4979-ab57-09074fd55d33/retry&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/PayinMethodResponse} and HTTP response
     */
    retryPayinMethodWithHttpInfo(payinMethodID) {
      let postBody = null;

      // verify the required parameter 'payinMethodID' is set
      if (payinMethodID === undefined || payinMethodID === null) {
        throw new Error("Missing the required parameter 'payinMethodID' when calling retryPayinMethod");
      }


      let pathParams = {
        'PayinMethod ID': payinMethodID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AuthorizationKey', 'AuthorizationNonce', 'AuthorizationSecret', 'AuthorizationSignature'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PayinMethodResponse;

      return this.apiClient.callApi(
        '/payin_methods/{PayinMethod ID}/retry', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retries PayinMethod
     * Retries the collection process for the payin method.  Please note only payin methods in &#x60;error&#x60; state can be retried.
     * @param {String} payinMethodID ID of the payin method whose collection process should be retried  Example: &#x60;/v1/payin_methods/9d4d7b73-a94c-4979-ab57-09074fd55d33/retry&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/PayinMethodResponse}
     */
    retryPayinMethod(payinMethodID) {
      return this.retryPayinMethodWithHttpInfo(payinMethodID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
