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
import CurrencyExchangeListResponse from '../Model/CurrencyExchangeListResponse';
import CurrencyListResponse from '../Model/CurrencyListResponse';

/**
* CurrencyInfo service.
* @module Api/CurrencyInfoApi
* @version 1.3.1
*/
export default class CurrencyInfoApi {

    /**
    * Constructs a new CurrencyInfoApi. 
    * @alias module:Api/CurrencyInfoApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Getting a list of possible requested currencies
     * Fetches a list of currencies available to use in other API requests. Usually the 3-character alpha ISO 4217 currency code (eg. USD) is used as the identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/CurrencyListResponse} and HTTP response
     */
    infoCurrenciesWithHttpInfo() {
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
      let returnType = CurrencyListResponse;

      return this.apiClient.callApi(
        '/info/currencies', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Getting a list of possible requested currencies
     * Fetches a list of currencies available to use in other API requests. Usually the 3-character alpha ISO 4217 currency code (eg. USD) is used as the identifier.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/CurrencyListResponse}
     */
    infoCurrencies() {
      return this.infoCurrenciesWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Getting a list of possible input currencies
     * Fetches a list of currencies available to use as the input currency in other API requests. Usually the 3-character alpha ISO 4217 currency code (eg. USD) is used as the identifier. Use this endpoint to determine the current exchange rate from a specific input currency to any output currency that&#39;s available. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.senderId Allows the scoping of the results by &#x60;sender_id&#x60; (optional).  Example: &#x60;/v1/info/currencies/in?sender_id&#x3D;26ec8517-2f0d-48c0-b74f-0bccb9ab3a87&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/CurrencyExchangeListResponse} and HTTP response
     */
    infoCurrenciesInWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'sender_id': opts['senderId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AuthorizationKey', 'AuthorizationNonce', 'AuthorizationSecret', 'AuthorizationSignature'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CurrencyExchangeListResponse;

      return this.apiClient.callApi(
        '/info/currencies/in', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Getting a list of possible input currencies
     * Fetches a list of currencies available to use as the input currency in other API requests. Usually the 3-character alpha ISO 4217 currency code (eg. USD) is used as the identifier. Use this endpoint to determine the current exchange rate from a specific input currency to any output currency that&#39;s available. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.senderId Allows the scoping of the results by &#x60;sender_id&#x60; (optional).  Example: &#x60;/v1/info/currencies/in?sender_id&#x3D;26ec8517-2f0d-48c0-b74f-0bccb9ab3a87&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/CurrencyExchangeListResponse}
     */
    infoCurrenciesIn(opts) {
      return this.infoCurrenciesInWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Getting a list of possible output currencies
     * Fetches a list of currencies available to use as the output currency and their exchange rates against the available input currencies. Usually the 3-character alpha ISO 4217 currency code (eg. USD) is used as the identifier. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.senderId Allows the scoping of the results by &#x60;sender_id&#x60; (optional).  Example: &#x60;/v1/info/currencies/out?sender_id&#x3D;26ec8517-2f0d-48c0-b74f-0bccb9ab3a87&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/CurrencyExchangeListResponse} and HTTP response
     */
    infoCurrenciesOutWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'sender_id': opts['senderId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AuthorizationKey', 'AuthorizationNonce', 'AuthorizationSecret', 'AuthorizationSignature'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CurrencyExchangeListResponse;

      return this.apiClient.callApi(
        '/info/currencies/out', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Getting a list of possible output currencies
     * Fetches a list of currencies available to use as the output currency and their exchange rates against the available input currencies. Usually the 3-character alpha ISO 4217 currency code (eg. USD) is used as the identifier. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.senderId Allows the scoping of the results by &#x60;sender_id&#x60; (optional).  Example: &#x60;/v1/info/currencies/out?sender_id&#x3D;26ec8517-2f0d-48c0-b74f-0bccb9ab3a87&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/CurrencyExchangeListResponse}
     */
    infoCurrenciesOut(opts) {
      return this.infoCurrenciesOutWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
