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
import PaymentMethodListResponse from '../Model/PaymentMethodListResponse';

/**
* PaymentMethods service.
* @module Api/PaymentMethodsApi
* @version 1.33.1
*/
export default class PaymentMethodsApi {

    /**
    * Constructs a new PaymentMethodsApi. 
    * @alias module:Api/PaymentMethodsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * This method returns possible payin methods.
     * Fetching possible payin methods. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/PaymentMethodListResponse} and HTTP response
     */
    paymentMethodsInWithHttpInfo() {
      let postBody = null;


      let pathParams = {
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
      let returnType = PaymentMethodListResponse;

      return this.apiClient.callApi(
        '/info/payment_methods/in', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * This method returns possible payin methods.
     * Fetching possible payin methods. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/PaymentMethodListResponse}
     */
    paymentMethodsIn() {
      return this.paymentMethodsInWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * This method returns possible payout methods.
     * Fetching possible payout methods. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/PaymentMethodListResponse} and HTTP response
     */
    paymentMethodsOutWithHttpInfo() {
      let postBody = null;


      let pathParams = {
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
      let returnType = PaymentMethodListResponse;

      return this.apiClient.callApi(
        '/info/payment_methods/out', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * This method returns possible payout methods.
     * Fetching possible payout methods. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/PaymentMethodListResponse}
     */
    paymentMethodsOut() {
      return this.paymentMethodsOutWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
