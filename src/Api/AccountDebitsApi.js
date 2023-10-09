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
import DebitListResponse from '../Model/DebitListResponse';
import DebitRequestWrapper from '../Model/DebitRequestWrapper';
import DebitResponse from '../Model/DebitResponse';

/**
* AccountDebits service.
* @module Api/AccountDebitsApi
* @version 1.30.1
*/
export default class AccountDebitsApi {

    /**
    * Constructs a new AccountDebitsApi. 
    * @alias module:Api/AccountDebitsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Fetching an account debit
     * Returns a single account debit by the account debit ID
     * @param {String} accountDebitID ID of the account debit to get.  Example: &#x60;/v1/accounts/debits/9170c890-1a45-46bd-9b79-3deeb8b4ff3d&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/DebitResponse} and HTTP response
     */
    getAccountsDebitWithHttpInfo(accountDebitID) {
      let postBody = null;

      // verify the required parameter 'accountDebitID' is set
      if (accountDebitID === undefined || accountDebitID === null) {
        throw new Error("Missing the required parameter 'accountDebitID' when calling getAccountsDebit");
      }


      let pathParams = {
        'Account Debit ID': accountDebitID
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
      let returnType = DebitResponse;

      return this.apiClient.callApi(
        '/accounts/debits/{Account Debit ID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fetching an account debit
     * Returns a single account debit by the account debit ID
     * @param {String} accountDebitID ID of the account debit to get.  Example: &#x60;/v1/accounts/debits/9170c890-1a45-46bd-9b79-3deeb8b4ff3d&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/DebitResponse}
     */
    getAccountsDebit(accountDebitID) {
      return this.getAccountsDebitWithHttpInfo(accountDebitID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Listing Accounts debits
     * Get a list of accounts debits
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page number to request (defaults to 1)
     * @param {Number} opts.per The number of results to load per page (defaults to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/DebitListResponse} and HTTP response
     */
    getAccountsDebitsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'per': opts['per']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AuthorizationKey', 'AuthorizationNonce', 'AuthorizationSecret', 'AuthorizationSignature'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DebitListResponse;

      return this.apiClient.callApi(
        '/accounts/debits', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Listing Accounts debits
     * Get a list of accounts debits
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page number to request (defaults to 1)
     * @param {Number} opts.per The number of results to load per page (defaults to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/DebitListResponse}
     */
    getAccountsDebits(opts) {
      return this.getAccountsDebitsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creating an account debit
     * Creates a new account debit finding transaction through the internal balance  To successfully fund a transaction - - The currency needs to be the same as the input_currency on the transaction - The amount has to be the same as the input_amount on the transaction - The to_id is the id of the transaction - You need to have enough balance of the appropriate currency inside your wallet  Once the transaction is funded, we will immediately start trying to pay out the recipient(s).  It is also possible to create multiple account debits by supplying an array of debit objects 
     * @param {module:Model/DebitRequestWrapper} debitRequestWrapper 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/DebitListResponse} and HTTP response
     */
    postAccountsDebitsWithHttpInfo(debitRequestWrapper) {
      let postBody = debitRequestWrapper;

      // verify the required parameter 'debitRequestWrapper' is set
      if (debitRequestWrapper === undefined || debitRequestWrapper === null) {
        throw new Error("Missing the required parameter 'debitRequestWrapper' when calling postAccountsDebits");
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
      let returnType = DebitListResponse;

      return this.apiClient.callApi(
        '/accounts/debits', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creating an account debit
     * Creates a new account debit finding transaction through the internal balance  To successfully fund a transaction - - The currency needs to be the same as the input_currency on the transaction - The amount has to be the same as the input_amount on the transaction - The to_id is the id of the transaction - You need to have enough balance of the appropriate currency inside your wallet  Once the transaction is funded, we will immediately start trying to pay out the recipient(s).  It is also possible to create multiple account debits by supplying an array of debit objects 
     * @param {module:Model/DebitRequestWrapper} debitRequestWrapper 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/DebitListResponse}
     */
    postAccountsDebits(debitRequestWrapper) {
      return this.postAccountsDebitsWithHttpInfo(debitRequestWrapper)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
