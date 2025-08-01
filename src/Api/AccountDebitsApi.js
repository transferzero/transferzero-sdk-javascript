/**
 * TransferZero API
 * Reference documentation for the TransferZero API V1
 *
 * The version of the OpenAPI document: 1.0
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

/**
* AccountDebits service.
* @module Api/AccountDebitsApi
* @version 1.37.1
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
        authNames, contentTypes, accepts, returnType, null
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
