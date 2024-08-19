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
import ErrorStatus from '../Model/ErrorStatus';
import PayinMethodRequest from '../Model/PayinMethodRequest';
import TransactionListResponse from '../Model/TransactionListResponse';
import TransactionRequest from '../Model/TransactionRequest';
import TransactionResponse from '../Model/TransactionResponse';

/**
* Transactions service.
* @module Api/TransactionsApi
* @version 1.36.3
*/
export default class TransactionsApi {

    /**
    * Constructs a new TransactionsApi. 
    * @alias module:Api/TransactionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Calculates transaction amounts for a transaction payload
     * Calculates the input, output and fee amounts for the recipients in a transaction payload
     * @param {module:Model/TransactionRequest} transactionRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/TransactionResponse} and HTTP response
     */
    calculateTransactionsWithHttpInfo(transactionRequest) {
      let postBody = transactionRequest;
      // verify the required parameter 'transactionRequest' is set
      if (transactionRequest === undefined || transactionRequest === null) {
        throw new Error("Missing the required parameter 'transactionRequest' when calling calculateTransactions");
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
      let returnType = TransactionResponse;
      return this.apiClient.callApi(
        '/transactions/calculate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Calculates transaction amounts for a transaction payload
     * Calculates the input, output and fee amounts for the recipients in a transaction payload
     * @param {module:Model/TransactionRequest} transactionRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/TransactionResponse}
     */
    calculateTransactions(transactionRequest) {
      return this.calculateTransactionsWithHttpInfo(transactionRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a new transaction and funds it from account balance
     * This endpoint creates a transaction and funds it from an account balance. You must ensure that you have established an account with us in the pay-in currency of the transactions you wish to create, and that this account is sufficently funded, before calling this endpoint.  Note that the <pre>external_id</pre> field is required for requests to this endpoint.
     * @param {module:Model/TransactionRequest} transactionRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/TransactionResponse} and HTTP response
     */
    createAndFundTransactionWithHttpInfo(transactionRequest) {
      let postBody = transactionRequest;
      // verify the required parameter 'transactionRequest' is set
      if (transactionRequest === undefined || transactionRequest === null) {
        throw new Error("Missing the required parameter 'transactionRequest' when calling createAndFundTransaction");
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
      let returnType = TransactionResponse;
      return this.apiClient.callApi(
        '/transactions/create_and_fund', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a new transaction and funds it from account balance
     * This endpoint creates a transaction and funds it from an account balance. You must ensure that you have established an account with us in the pay-in currency of the transactions you wish to create, and that this account is sufficently funded, before calling this endpoint.  Note that the <pre>external_id</pre> field is required for requests to this endpoint.
     * @param {module:Model/TransactionRequest} transactionRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/TransactionResponse}
     */
    createAndFundTransaction(transactionRequest) {
      return this.createAndFundTransactionWithHttpInfo(transactionRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch a single transaction
     * Finds and returns a Transaction created by the requesting API key, using the provided Transaction ID.
     * @param {String} transactionID ID of the transaction.  Example: `/v1/transactions/bf9ff782-e182-45ac-abea-5bce83ad6670`
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/TransactionResponse} and HTTP response
     */
    getTransactionWithHttpInfo(transactionID) {
      let postBody = null;
      // verify the required parameter 'transactionID' is set
      if (transactionID === undefined || transactionID === null) {
        throw new Error("Missing the required parameter 'transactionID' when calling getTransaction");
      }

      let pathParams = {
        'Transaction ID': transactionID
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
      let returnType = TransactionResponse;
      return this.apiClient.callApi(
        '/transactions/{Transaction ID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fetch a single transaction
     * Finds and returns a Transaction created by the requesting API key, using the provided Transaction ID.
     * @param {String} transactionID ID of the transaction.  Example: `/v1/transactions/bf9ff782-e182-45ac-abea-5bce83ad6670`
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/TransactionResponse}
     */
    getTransaction(transactionID) {
      return this.getTransactionWithHttpInfo(transactionID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a list of transactions
     * Retrieves a paginated list of the Transactions created by your API key.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page number to request (defaults to 1)
     * @param {Number} opts.per The number of results to load per page (defaults to 10)
     * @param {String} opts.externalId Allows filtering results by `external_id`.  Example: `/v1/senders?external_id=26ec8517-2f0d-48c0-b74f-0bccb9ab3a87`
     * @param {String} opts.senderId Allows filtering results by `sender_id`.  Example: `/v1/transactions?sender_id=b41d3cb7-6c54-4245-85fc-8e30690eb0f7`
     * @param {module:Model/String} opts.transactionsType Allows filtering results by `transactions_type`.  Example: `/v1/transactions?transactions_type=automated`
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/TransactionListResponse} and HTTP response
     */
    getTransactionsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'per': opts['per'],
        'external_id': opts['externalId'],
        'sender_id': opts['senderId'],
        'transactions_type': opts['transactionsType']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AuthorizationKey', 'AuthorizationNonce', 'AuthorizationSecret', 'AuthorizationSignature'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TransactionListResponse;
      return this.apiClient.callApi(
        '/transactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a list of transactions
     * Retrieves a paginated list of the Transactions created by your API key.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page number to request (defaults to 1)
     * @param {Number} opts.per The number of results to load per page (defaults to 10)
     * @param {String} opts.externalId Allows filtering results by `external_id`.  Example: `/v1/senders?external_id=26ec8517-2f0d-48c0-b74f-0bccb9ab3a87`
     * @param {String} opts.senderId Allows filtering results by `sender_id`.  Example: `/v1/transactions?sender_id=b41d3cb7-6c54-4245-85fc-8e30690eb0f7`
     * @param {module:Model/String} opts.transactionsType Allows filtering results by `transactions_type`.  Example: `/v1/transactions?transactions_type=automated`
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/TransactionListResponse}
     */
    getTransactions(opts) {
      return this.getTransactionsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a fake payin for transaction
     * This method is available only in sandbox environment and is supposed to be used only for testing integration. It allows you to emulate a payin without paying actual money. 
     * @param {String} transactionID ID of the transaction to payin.  Example: `/v1/transactions/bf9ff782-e182-45ac-abea-5bce83ad6670/payin`
     * @param {module:Model/PayinMethodRequest} payinMethodRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/TransactionResponse} and HTTP response
     */
    payinTransactionWithHttpInfo(transactionID, payinMethodRequest) {
      let postBody = payinMethodRequest;
      // verify the required parameter 'transactionID' is set
      if (transactionID === undefined || transactionID === null) {
        throw new Error("Missing the required parameter 'transactionID' when calling payinTransaction");
      }
      // verify the required parameter 'payinMethodRequest' is set
      if (payinMethodRequest === undefined || payinMethodRequest === null) {
        throw new Error("Missing the required parameter 'payinMethodRequest' when calling payinTransaction");
      }

      let pathParams = {
        'Transaction ID': transactionID
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
      let returnType = TransactionResponse;
      return this.apiClient.callApi(
        '/transactions/{Transaction ID}/payin', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a fake payin for transaction
     * This method is available only in sandbox environment and is supposed to be used only for testing integration. It allows you to emulate a payin without paying actual money. 
     * @param {String} transactionID ID of the transaction to payin.  Example: `/v1/transactions/bf9ff782-e182-45ac-abea-5bce83ad6670/payin`
     * @param {module:Model/PayinMethodRequest} payinMethodRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/TransactionResponse}
     */
    payinTransaction(transactionID, payinMethodRequest) {
      return this.payinTransactionWithHttpInfo(transactionID, payinMethodRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a fake payout for transaction
     * This method is available only in sandbox environment and is supposed to be used only for testing. It allows you to emulate the payout of a transaction after payin. 
     * @param {String} transactionID ID of the transaction to payout.  Example: `/v1/transactions/bf9ff782-e182-45ac-abea-5bce83ad6670/payout`
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/TransactionResponse} and HTTP response
     */
    payoutTransactionWithHttpInfo(transactionID) {
      let postBody = null;
      // verify the required parameter 'transactionID' is set
      if (transactionID === undefined || transactionID === null) {
        throw new Error("Missing the required parameter 'transactionID' when calling payoutTransaction");
      }

      let pathParams = {
        'Transaction ID': transactionID
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
      let returnType = TransactionResponse;
      return this.apiClient.callApi(
        '/transactions/{Transaction ID}/payout', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a fake payout for transaction
     * This method is available only in sandbox environment and is supposed to be used only for testing. It allows you to emulate the payout of a transaction after payin. 
     * @param {String} transactionID ID of the transaction to payout.  Example: `/v1/transactions/bf9ff782-e182-45ac-abea-5bce83ad6670/payout`
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/TransactionResponse}
     */
    payoutTransaction(transactionID) {
      return this.payoutTransactionWithHttpInfo(transactionID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creates a new transaction
     * Transactions are the main objects in the TransferZero API, so it's important to understand how to create and manage them. Transactions facilitate money movement from one Sender in a specific currency to one or multiple Recipients in another currency.  The main flow of a successful transaction flow is the following - - Transaction is created linking the Sender to the Recipient(s) with the requested amounts. - Once the sender is KYC'd and approved the transaction can be funded. - Once the transaction is funded, we will initiate the payout to the recipient(s). - After the recipient (or all recipients) has received the money, the transaction is finished.
     * @param {module:Model/TransactionRequest} transactionRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/TransactionResponse} and HTTP response
     */
    postTransactionsWithHttpInfo(transactionRequest) {
      let postBody = transactionRequest;
      // verify the required parameter 'transactionRequest' is set
      if (transactionRequest === undefined || transactionRequest === null) {
        throw new Error("Missing the required parameter 'transactionRequest' when calling postTransactions");
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
      let returnType = TransactionResponse;
      return this.apiClient.callApi(
        '/transactions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Creates a new transaction
     * Transactions are the main objects in the TransferZero API, so it's important to understand how to create and manage them. Transactions facilitate money movement from one Sender in a specific currency to one or multiple Recipients in another currency.  The main flow of a successful transaction flow is the following - - Transaction is created linking the Sender to the Recipient(s) with the requested amounts. - Once the sender is KYC'd and approved the transaction can be funded. - Once the transaction is funded, we will initiate the payout to the recipient(s). - After the recipient (or all recipients) has received the money, the transaction is finished.
     * @param {module:Model/TransactionRequest} transactionRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/TransactionResponse}
     */
    postTransactions(transactionRequest) {
      return this.postTransactionsWithHttpInfo(transactionRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Validates a transaction payload
     * Validates fields in a transaction payload and displays invalid or missing fields
     * @param {module:Model/TransactionRequest} transactionRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/TransactionResponse} and HTTP response
     */
    validateTransactionsWithHttpInfo(transactionRequest) {
      let postBody = transactionRequest;
      // verify the required parameter 'transactionRequest' is set
      if (transactionRequest === undefined || transactionRequest === null) {
        throw new Error("Missing the required parameter 'transactionRequest' when calling validateTransactions");
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
      let returnType = TransactionResponse;
      return this.apiClient.callApi(
        '/transactions/validate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Validates a transaction payload
     * Validates fields in a transaction payload and displays invalid or missing fields
     * @param {module:Model/TransactionRequest} transactionRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/TransactionResponse}
     */
    validateTransactions(transactionRequest) {
      return this.validateTransactionsWithHttpInfo(transactionRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
