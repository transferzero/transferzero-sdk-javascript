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
import AccountListResponse from '../Model/AccountListResponse';
import AccountResponse from '../Model/AccountResponse';

/**
* Accounts service.
* @module Api/AccountsApi
* @version 1.23.3
*/
export default class AccountsApi {

    /**
    * Constructs a new AccountsApi. 
    * @alias module:Api/AccountsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Fetches account balance for specified currrency
     * Fetches account balance for specified currrency, and returns current balance and associated currency code
     * @param {String} currency Currency code of account balance to fetch  Example: &#x60;/v1/accounts/USD&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/AccountResponse} and HTTP response
     */
    getAccountWithHttpInfo(currency) {
      let postBody = null;

      // verify the required parameter 'currency' is set
      if (currency === undefined || currency === null) {
        throw new Error("Missing the required parameter 'currency' when calling getAccount");
      }


      let pathParams = {
        'Currency': currency
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
      let returnType = AccountResponse;

      return this.apiClient.callApi(
        '/accounts/{Currency}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fetches account balance for specified currrency
     * Fetches account balance for specified currrency, and returns current balance and associated currency code
     * @param {String} currency Currency code of account balance to fetch  Example: &#x60;/v1/accounts/USD&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/AccountResponse}
     */
    getAccount(currency) {
      return this.getAccountWithHttpInfo(currency)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetches account balances for all currencies
     * Fetches account balances for all currencies, and returns an array of the current balances and associated currency codes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/AccountListResponse} and HTTP response
     */
    getAccountsWithHttpInfo() {
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
      let returnType = AccountListResponse;

      return this.apiClient.callApi(
        '/accounts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fetches account balances for all currencies
     * Fetches account balances for all currencies, and returns an array of the current balances and associated currency codes.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/AccountListResponse}
     */
    getAccounts() {
      return this.getAccountsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
