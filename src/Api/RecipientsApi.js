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
import ProofOfPaymentListResponse from '../Model/ProofOfPaymentListResponse';
import RecipientListResponse from '../Model/RecipientListResponse';
import RecipientRequest from '../Model/RecipientRequest';
import RecipientResponse from '../Model/RecipientResponse';

/**
* Recipients service.
* @module Api/RecipientsApi
* @version 1.34.2
*/
export default class RecipientsApi {

    /**
    * Constructs a new RecipientsApi. 
    * @alias module:Api/RecipientsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Cancelling a recipient
     * Cancels the payment to the recipient specified in the URL path.  Please note recipients where the &#x60;may_cancel&#x60; attribute is true will be cancelled immediately. If the &#x60;may_cancel&#x60; attribute is false you can still try to cancel the recipient, however it will only gets cancelled if we will receive a confirmation from our partner that the payment has failed
     * @param {String} recipientID ID of recipient to cancel.  Example: &#x60;/v1/recipients/9d4d7b73-a94c-4979-ab57-09074fd55d33&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/RecipientResponse} and HTTP response
     */
    deleteRecipientWithHttpInfo(recipientID) {
      let postBody = null;

      // verify the required parameter 'recipientID' is set
      if (recipientID === undefined || recipientID === null) {
        throw new Error("Missing the required parameter 'recipientID' when calling deleteRecipient");
      }


      let pathParams = {
        'Recipient ID': recipientID
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
      let returnType = RecipientResponse;

      return this.apiClient.callApi(
        '/recipients/{Recipient ID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Cancelling a recipient
     * Cancels the payment to the recipient specified in the URL path.  Please note recipients where the &#x60;may_cancel&#x60; attribute is true will be cancelled immediately. If the &#x60;may_cancel&#x60; attribute is false you can still try to cancel the recipient, however it will only gets cancelled if we will receive a confirmation from our partner that the payment has failed
     * @param {String} recipientID ID of recipient to cancel.  Example: &#x60;/v1/recipients/9d4d7b73-a94c-4979-ab57-09074fd55d33&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/RecipientResponse}
     */
    deleteRecipient(recipientID) {
      return this.deleteRecipientWithHttpInfo(recipientID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Getting a list of recipients with filtering
     * Fetches details of all recipients.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page number to request (defaults to 1)
     * @param {Number} opts.per The number of results to load per page (defaults to 10)
     * @param {String} opts.createdAtFrom Start date to filter recipients by created_at range Allows filtering results by the specified &#x60;created_at&#x60; timeframe.  Example: &#x60;/v1/recipients?created_at_from&#x3D;2018-06-06&amp;created_at_to&#x3D;2018-06-08&#x60;
     * @param {String} opts.createdAtTo End date to filter recipients by created_at range Allows filtering results by the specified &#x60;created_at&#x60; timeframe.  Example: &#x60;/v1/recipients?created_at_from&#x3D;2018-06-06&amp;created_at_to&#x3D;2018-06-08&#x60;
     * @param {String} opts.amountFrom Minimum amount to filter recipients by amount range.  Allows filtering results by the specified &#x60;amount&#x60; range. When using this filter, the &#x60;currency&#x60; should also be specified.  Example: &#x60;/v1/recipients?currency&#x3D;NGN&amp;amount_from&#x3D;83.76672339&amp;amount_to&#x3D;83.76672339&#x60;
     * @param {String} opts.amountTo Max amount to filter recipients by amount range.  Allows filtering results by the specified &#x60;amount&#x60; range. When using this filter, the &#x60;currency&#x60; should also be specified.  Example: &#x60;/v1/recipients?currency&#x3D;NGN&amp;amount_from&#x3D;83.76672339&amp;amount_to&#x3D;83.76672339&#x60;
     * @param {Array.<String>} opts.state Allows filtering results by &#x60;state&#x60; of recipient. See [API Documentation - Recipient state](https://docs.transferzero.com/docs/transaction-flow/#state) for possible states.  Example: &#x60;/v1/recipients?state[]&#x3D;error&amp;state[]&#x3D;initial&#x60;
     * @param {Array.<String>} opts.currency Allows filtering results by &#x60;input_currency&#x60;.  Additionally required when filtering by an amount range Example: &#x60;/v1/recipients?currency[]&#x3D;KES&amp;currency[]&#x3D;NGN&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/RecipientListResponse} and HTTP response
     */
    getRecipientsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'per': opts['per'],
        'created_at_from': opts['createdAtFrom'],
        'created_at_to': opts['createdAtTo'],
        'amount_from': opts['amountFrom'],
        'amount_to': opts['amountTo'],
        'state': this.apiClient.buildCollectionParam(opts['state'], 'multi'),
        'currency': this.apiClient.buildCollectionParam(opts['currency'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AuthorizationKey', 'AuthorizationNonce', 'AuthorizationSecret', 'AuthorizationSignature'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RecipientListResponse;

      return this.apiClient.callApi(
        '/recipients', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Getting a list of recipients with filtering
     * Fetches details of all recipients.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page number to request (defaults to 1)
     * @param {Number} opts.per The number of results to load per page (defaults to 10)
     * @param {String} opts.createdAtFrom Start date to filter recipients by created_at range Allows filtering results by the specified &#x60;created_at&#x60; timeframe.  Example: &#x60;/v1/recipients?created_at_from&#x3D;2018-06-06&amp;created_at_to&#x3D;2018-06-08&#x60;
     * @param {String} opts.createdAtTo End date to filter recipients by created_at range Allows filtering results by the specified &#x60;created_at&#x60; timeframe.  Example: &#x60;/v1/recipients?created_at_from&#x3D;2018-06-06&amp;created_at_to&#x3D;2018-06-08&#x60;
     * @param {String} opts.amountFrom Minimum amount to filter recipients by amount range.  Allows filtering results by the specified &#x60;amount&#x60; range. When using this filter, the &#x60;currency&#x60; should also be specified.  Example: &#x60;/v1/recipients?currency&#x3D;NGN&amp;amount_from&#x3D;83.76672339&amp;amount_to&#x3D;83.76672339&#x60;
     * @param {String} opts.amountTo Max amount to filter recipients by amount range.  Allows filtering results by the specified &#x60;amount&#x60; range. When using this filter, the &#x60;currency&#x60; should also be specified.  Example: &#x60;/v1/recipients?currency&#x3D;NGN&amp;amount_from&#x3D;83.76672339&amp;amount_to&#x3D;83.76672339&#x60;
     * @param {Array.<String>} opts.state Allows filtering results by &#x60;state&#x60; of recipient. See [API Documentation - Recipient state](https://docs.transferzero.com/docs/transaction-flow/#state) for possible states.  Example: &#x60;/v1/recipients?state[]&#x3D;error&amp;state[]&#x3D;initial&#x60;
     * @param {Array.<String>} opts.currency Allows filtering results by &#x60;input_currency&#x60;.  Additionally required when filtering by an amount range Example: &#x60;/v1/recipients?currency[]&#x3D;KES&amp;currency[]&#x3D;NGN&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/RecipientListResponse}
     */
    getRecipients(opts) {
      return this.getRecipientsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updating a recipient
     * Updates the recipient specified in the URL path.  Please note that only recipients where the &#x60;editable&#x60; field is true can be modified. Once the recipient is modified any subsequent payout tries will be sent to the updated details.
     * @param {String} recipientID ID of recipient to update.  Example: &#x60;/v1/recipients/9d4d7b73-a94c-4979-ab57-09074fd55d33&#x60;
     * @param {module:Model/RecipientRequest} recipientRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/RecipientResponse} and HTTP response
     */
    patchRecipientWithHttpInfo(recipientID, recipientRequest) {
      let postBody = recipientRequest;

      // verify the required parameter 'recipientID' is set
      if (recipientID === undefined || recipientID === null) {
        throw new Error("Missing the required parameter 'recipientID' when calling patchRecipient");
      }

      // verify the required parameter 'recipientRequest' is set
      if (recipientRequest === undefined || recipientRequest === null) {
        throw new Error("Missing the required parameter 'recipientRequest' when calling patchRecipient");
      }


      let pathParams = {
        'Recipient ID': recipientID
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
      let returnType = RecipientResponse;

      return this.apiClient.callApi(
        '/recipients/{Recipient ID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Updating a recipient
     * Updates the recipient specified in the URL path.  Please note that only recipients where the &#x60;editable&#x60; field is true can be modified. Once the recipient is modified any subsequent payout tries will be sent to the updated details.
     * @param {String} recipientID ID of recipient to update.  Example: &#x60;/v1/recipients/9d4d7b73-a94c-4979-ab57-09074fd55d33&#x60;
     * @param {module:Model/RecipientRequest} recipientRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/RecipientResponse}
     */
    patchRecipient(recipientID, recipientRequest) {
      return this.patchRecipientWithHttpInfo(recipientID, recipientRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns list of proof of payments
     * Returns a list of uploaded proof of payment files for a transaction recipient
     * @param {String} recipientID ID of the recipient for whom the proof of payments will be returned.  Example: &#x60;/v1/recipients/9d4d7b73-a94c-4979-ab57-09074fd55d33/proof_of_payments&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/ProofOfPaymentListResponse} and HTTP response
     */
    proofOfPaymentsWithHttpInfo(recipientID) {
      let postBody = null;

      // verify the required parameter 'recipientID' is set
      if (recipientID === undefined || recipientID === null) {
        throw new Error("Missing the required parameter 'recipientID' when calling proofOfPayments");
      }


      let pathParams = {
        'Recipient ID': recipientID
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
      let returnType = ProofOfPaymentListResponse;

      return this.apiClient.callApi(
        '/recipients/{Recipient ID}/proof_of_payments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Returns list of proof of payments
     * Returns a list of uploaded proof of payment files for a transaction recipient
     * @param {String} recipientID ID of the recipient for whom the proof of payments will be returned.  Example: &#x60;/v1/recipients/9d4d7b73-a94c-4979-ab57-09074fd55d33/proof_of_payments&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/ProofOfPaymentListResponse}
     */
    proofOfPayments(recipientID) {
      return this.proofOfPaymentsWithHttpInfo(recipientID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
