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
import PayoutMethod from '../Model/PayoutMethod';
import PayoutMethodListResponse from '../Model/PayoutMethodListResponse';
import PayoutMethodRequest from '../Model/PayoutMethodRequest';
import PayoutMethodResponse from '../Model/PayoutMethodResponse';

/**
* PayoutMethods service.
* @module Api/PayoutMethodsApi
* @version 1.26.1
*/
export default class PayoutMethodsApi {

    /**
    * Constructs a new PayoutMethodsApi. 
    * @alias module:Api/PayoutMethodsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Deleting a payout method
     * Deletes a single payout method by the Payout Method ID
     * @param {String} payoutMethodID ID of the payout method to delete.  Example: &#x60;/v1/payout_methods/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/PayoutMethodResponse} and HTTP response
     */
    deletePayoutMethodWithHttpInfo(payoutMethodID) {
      let postBody = null;

      // verify the required parameter 'payoutMethodID' is set
      if (payoutMethodID === undefined || payoutMethodID === null) {
        throw new Error("Missing the required parameter 'payoutMethodID' when calling deletePayoutMethod");
      }


      let pathParams = {
        'Payout Method ID': payoutMethodID
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
      let returnType = PayoutMethodResponse;

      return this.apiClient.callApi(
        '/payout_methods/{Payout Method ID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Deleting a payout method
     * Deletes a single payout method by the Payout Method ID
     * @param {String} payoutMethodID ID of the payout method to delete.  Example: &#x60;/v1/payout_methods/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/PayoutMethodResponse}
     */
    deletePayoutMethod(payoutMethodID) {
      return this.deletePayoutMethodWithHttpInfo(payoutMethodID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetching a payout method
     * Show a payout method by id
     * @param {String} payoutMethodID ID of the payout method to get.  Example: &#x60;/v1/payout_methods/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/PayoutMethodResponse} and HTTP response
     */
    getPayoutMethodWithHttpInfo(payoutMethodID) {
      let postBody = null;

      // verify the required parameter 'payoutMethodID' is set
      if (payoutMethodID === undefined || payoutMethodID === null) {
        throw new Error("Missing the required parameter 'payoutMethodID' when calling getPayoutMethod");
      }


      let pathParams = {
        'Payout Method ID': payoutMethodID
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
      let returnType = PayoutMethodResponse;

      return this.apiClient.callApi(
        '/payout_methods/{Payout Method ID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fetching a payout method
     * Show a payout method by id
     * @param {String} payoutMethodID ID of the payout method to get.  Example: &#x60;/v1/payout_methods/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/PayoutMethodResponse}
     */
    getPayoutMethod(payoutMethodID) {
      return this.getPayoutMethodWithHttpInfo(payoutMethodID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Listing payout methods
     * List available payout methods
     * @param {Object} opts Optional parameters
     * @param {Array.<module:Model/String>} opts.state Allows filtering results by &#x60;state&#x60; of the payout method.  Example: &#x60;/v1/payout_methods?state[]&#x3D;enabled&#x60;
     * @param {Array.<String>} opts.type Allows filtering results by the specified type.  Example: &#x60;/v1/payout_methods?type[]&#x3D;NGN::Bank&#x60;
     * @param {String} opts.senderId Allows filtering results by the specified sender id.  Example: &#x60;/v1/payout_methods?sender_id&#x3D;bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @param {Number} opts.page The page number to request (defaults to 1)
     * @param {Number} opts.per The number of results to load per page (defaults to 10)
     * @param {String} opts.createdAtFrom Start date to filter recipients by created_at range Allows filtering results by the specified &#x60;created_at&#x60; timeframe.  Example: &#x60;/v1/recipients?created_at_from&#x3D;2018-06-06&amp;created_at_to&#x3D;2018-06-08&#x60;
     * @param {String} opts.createdAtTo End date to filter recipients by created_at range Allows filtering results by the specified &#x60;created_at&#x60; timeframe.  Example: &#x60;/v1/recipients?created_at_from&#x3D;2018-06-06&amp;created_at_to&#x3D;2018-06-08&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/PayoutMethodListResponse} and HTTP response
     */
    getPayoutMethodsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'state': this.apiClient.buildCollectionParam(opts['state'], 'multi'),
        'type': this.apiClient.buildCollectionParam(opts['type'], 'multi'),
        'sender_id': opts['senderId'],
        'page': opts['page'],
        'per': opts['per'],
        'created_at_from': opts['createdAtFrom'],
        'created_at_to': opts['createdAtTo']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AuthorizationKey', 'AuthorizationNonce', 'AuthorizationSecret', 'AuthorizationSignature'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PayoutMethodListResponse;

      return this.apiClient.callApi(
        '/payout_methods', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Listing payout methods
     * List available payout methods
     * @param {Object} opts Optional parameters
     * @param {Array.<module:Model/String>} opts.state Allows filtering results by &#x60;state&#x60; of the payout method.  Example: &#x60;/v1/payout_methods?state[]&#x3D;enabled&#x60;
     * @param {Array.<String>} opts.type Allows filtering results by the specified type.  Example: &#x60;/v1/payout_methods?type[]&#x3D;NGN::Bank&#x60;
     * @param {String} opts.senderId Allows filtering results by the specified sender id.  Example: &#x60;/v1/payout_methods?sender_id&#x3D;bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @param {Number} opts.page The page number to request (defaults to 1)
     * @param {Number} opts.per The number of results to load per page (defaults to 10)
     * @param {String} opts.createdAtFrom Start date to filter recipients by created_at range Allows filtering results by the specified &#x60;created_at&#x60; timeframe.  Example: &#x60;/v1/recipients?created_at_from&#x3D;2018-06-06&amp;created_at_to&#x3D;2018-06-08&#x60;
     * @param {String} opts.createdAtTo End date to filter recipients by created_at range Allows filtering results by the specified &#x60;created_at&#x60; timeframe.  Example: &#x60;/v1/recipients?created_at_from&#x3D;2018-06-06&amp;created_at_to&#x3D;2018-06-08&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/PayoutMethodListResponse}
     */
    getPayoutMethods(opts) {
      return this.getPayoutMethodsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updating a payout method
     * Updates a single payout method by the Payout Method ID
     * @param {String} payoutMethodID ID of the payout method to get.  Example: &#x60;/v1/payout_methods/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @param {module:Model/PayoutMethod} payoutMethod 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/PayoutMethodResponse} and HTTP response
     */
    patchPayoutMethodWithHttpInfo(payoutMethodID, payoutMethod) {
      let postBody = payoutMethod;

      // verify the required parameter 'payoutMethodID' is set
      if (payoutMethodID === undefined || payoutMethodID === null) {
        throw new Error("Missing the required parameter 'payoutMethodID' when calling patchPayoutMethod");
      }

      // verify the required parameter 'payoutMethod' is set
      if (payoutMethod === undefined || payoutMethod === null) {
        throw new Error("Missing the required parameter 'payoutMethod' when calling patchPayoutMethod");
      }


      let pathParams = {
        'Payout Method ID': payoutMethodID
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
      let returnType = PayoutMethodResponse;

      return this.apiClient.callApi(
        '/payout_methods/{Payout Method ID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Updating a payout method
     * Updates a single payout method by the Payout Method ID
     * @param {String} payoutMethodID ID of the payout method to get.  Example: &#x60;/v1/payout_methods/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @param {module:Model/PayoutMethod} payoutMethod 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/PayoutMethodResponse}
     */
    patchPayoutMethod(payoutMethodID, payoutMethod) {
      return this.patchPayoutMethodWithHttpInfo(payoutMethodID, payoutMethod)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creating a payout method
     * Creates a new payout method in our system. 
     * @param {module:Model/PayoutMethodRequest} payoutMethodRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/PayoutMethodResponse} and HTTP response
     */
    postPayoutMethodsWithHttpInfo(payoutMethodRequest) {
      let postBody = payoutMethodRequest;

      // verify the required parameter 'payoutMethodRequest' is set
      if (payoutMethodRequest === undefined || payoutMethodRequest === null) {
        throw new Error("Missing the required parameter 'payoutMethodRequest' when calling postPayoutMethods");
      }


      let pathParams = {
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
      let returnType = PayoutMethodResponse;

      return this.apiClient.callApi(
        '/payout_methods', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creating a payout method
     * Creates a new payout method in our system. 
     * @param {module:Model/PayoutMethodRequest} payoutMethodRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/PayoutMethodResponse}
     */
    postPayoutMethods(payoutMethodRequest) {
      return this.postPayoutMethodsWithHttpInfo(payoutMethodRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
