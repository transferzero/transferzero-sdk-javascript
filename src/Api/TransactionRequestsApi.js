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


import ApiClient from "../ApiClient";
import DocumentResponse from '../Model/DocumentResponse';
import TransactionReqLimitsResponse from '../Model/TransactionReqLimitsResponse';
import TransactionReqListResponse from '../Model/TransactionReqListResponse';
import TransactionReqRequest from '../Model/TransactionReqRequest';
import TransactionReqResponse from '../Model/TransactionReqResponse';

/**
* TransactionRequests service.
* @module Api/TransactionRequestsApi
* @version 1.24.0
*/
export default class TransactionRequestsApi {

    /**
    * Constructs a new TransactionRequestsApi. 
    * @alias module:Api/TransactionRequestsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Adding a document to a transaction request (deprecated)
     * Adds a new document to a transaction request 
     * @param {String} transactionRequestID ID of the transaction request to add the document.  Example: &#x60;/v1/info/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670/add_document?document_id&#x3D;26ec8517-2f0d-48c0-b74f-0bccb9ab3a87&#x60;
     * @param {String} documentId The ID of the document to be added to the transaction request.  Example: &#x60;/v1/info/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670/add_document?document_id&#x3D;26ec8517-2f0d-48c0-b74f-0bccb9ab3a87&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/DocumentResponse} and HTTP response
     */
    addDocumentTransactionRequestWithHttpInfo(transactionRequestID, documentId) {
      let postBody = null;

      // verify the required parameter 'transactionRequestID' is set
      if (transactionRequestID === undefined || transactionRequestID === null) {
        throw new Error("Missing the required parameter 'transactionRequestID' when calling addDocumentTransactionRequest");
      }

      // verify the required parameter 'documentId' is set
      if (documentId === undefined || documentId === null) {
        throw new Error("Missing the required parameter 'documentId' when calling addDocumentTransactionRequest");
      }


      let pathParams = {
        'Transaction Request ID': transactionRequestID
      };
      let queryParams = {
        'document_id': documentId
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AuthorizationKey', 'AuthorizationNonce', 'AuthorizationSecret', 'AuthorizationSignature'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DocumentResponse;

      return this.apiClient.callApi(
        '/transaction_requests/{Transaction Request ID}/add_document', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Adding a document to a transaction request (deprecated)
     * Adds a new document to a transaction request 
     * @param {String} transactionRequestID ID of the transaction request to add the document.  Example: &#x60;/v1/info/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670/add_document?document_id&#x3D;26ec8517-2f0d-48c0-b74f-0bccb9ab3a87&#x60;
     * @param {String} documentId The ID of the document to be added to the transaction request.  Example: &#x60;/v1/info/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670/add_document?document_id&#x3D;26ec8517-2f0d-48c0-b74f-0bccb9ab3a87&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/DocumentResponse}
     */
    addDocumentTransactionRequest(transactionRequestID, documentId) {
      return this.addDocumentTransactionRequestWithHttpInfo(transactionRequestID, documentId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Cancelling a transaction request
     * Cancels a transaction request 
     * @param {String} transactionRequestID ID of the transaction request to cancel.  Example: &#x60;/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670/cancel&#x60;
     * @param {String} reasonCancellation Reason for the transaction request to cancel.  Example: &#x60;Not enough funds&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/TransactionReqResponse} and HTTP response
     */
    cancelTransactionRequestWithHttpInfo(transactionRequestID, reasonCancellation) {
      let postBody = null;

      // verify the required parameter 'transactionRequestID' is set
      if (transactionRequestID === undefined || transactionRequestID === null) {
        throw new Error("Missing the required parameter 'transactionRequestID' when calling cancelTransactionRequest");
      }

      // verify the required parameter 'reasonCancellation' is set
      if (reasonCancellation === undefined || reasonCancellation === null) {
        throw new Error("Missing the required parameter 'reasonCancellation' when calling cancelTransactionRequest");
      }


      let pathParams = {
        'Transaction Request ID': transactionRequestID
      };
      let queryParams = {
        'reason_cancellation': reasonCancellation
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AuthorizationKey', 'AuthorizationNonce', 'AuthorizationSecret', 'AuthorizationSignature'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TransactionReqResponse;

      return this.apiClient.callApi(
        '/transaction_requests/{Transaction Request ID}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Cancelling a transaction request
     * Cancels a transaction request 
     * @param {String} transactionRequestID ID of the transaction request to cancel.  Example: &#x60;/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670/cancel&#x60;
     * @param {String} reasonCancellation Reason for the transaction request to cancel.  Example: &#x60;Not enough funds&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/TransactionReqResponse}
     */
    cancelTransactionRequest(transactionRequestID, reasonCancellation) {
      return this.cancelTransactionRequestWithHttpInfo(transactionRequestID, reasonCancellation)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Confirming a transaction request
     * Confirms a new transaction request 
     * @param {String} transactionRequestID ID of the transaction request to confirm.  Example: &#x60;/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670/confirm&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/TransactionReqResponse} and HTTP response
     */
    confirmTransactionRequestWithHttpInfo(transactionRequestID) {
      let postBody = null;

      // verify the required parameter 'transactionRequestID' is set
      if (transactionRequestID === undefined || transactionRequestID === null) {
        throw new Error("Missing the required parameter 'transactionRequestID' when calling confirmTransactionRequest");
      }


      let pathParams = {
        'Transaction Request ID': transactionRequestID
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
      let returnType = TransactionReqResponse;

      return this.apiClient.callApi(
        '/transaction_requests/{Transaction Request ID}/confirm', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Confirming a transaction request
     * Confirms a new transaction request 
     * @param {String} transactionRequestID ID of the transaction request to confirm.  Example: &#x60;/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670/confirm&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/TransactionReqResponse}
     */
    confirmTransactionRequest(transactionRequestID) {
      return this.confirmTransactionRequestWithHttpInfo(transactionRequestID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetching a transaction request
     * Returns a single transaction request by the Transaction Request ID
     * @param {String} transactionRequestID ID of the transaction request to get.  Example: &#x60;/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.versioned If false is passed, returns a Transaction request containing a not cached Transaction object  Example: &#x60;/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670?versioned&#x3D;false&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/TransactionReqResponse} and HTTP response
     */
    getTransactionRequestWithHttpInfo(transactionRequestID, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'transactionRequestID' is set
      if (transactionRequestID === undefined || transactionRequestID === null) {
        throw new Error("Missing the required parameter 'transactionRequestID' when calling getTransactionRequest");
      }


      let pathParams = {
        'Transaction Request ID': transactionRequestID
      };
      let queryParams = {
        'versioned': opts['versioned']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AuthorizationKey', 'AuthorizationNonce', 'AuthorizationSecret', 'AuthorizationSignature'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TransactionReqResponse;

      return this.apiClient.callApi(
        '/transaction_requests/{Transaction Request ID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fetching a transaction request
     * Returns a single transaction request by the Transaction Request ID
     * @param {String} transactionRequestID ID of the transaction request to get.  Example: &#x60;/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.versioned If false is passed, returns a Transaction request containing a not cached Transaction object  Example: &#x60;/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670?versioned&#x3D;false&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/TransactionReqResponse}
     */
    getTransactionRequest(transactionRequestID, opts) {
      return this.getTransactionRequestWithHttpInfo(transactionRequestID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Listing transaction requests
     * Get a list of transaction requests
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page number to request (defaults to 1)
     * @param {Number} opts.per The number of results to load per page (defaults to 10)
     * @param {Array.<String>} opts.state Returns transaction requests with specified states.  Example: &#x60;/v1/transaction_requests?state[]&#x3D;pending&amp;state[]&#x3D;modified&#x60;
     * @param {Array.<String>} opts.currency Returns transaction requests with specified input_currency.  Example: &#x60;/v1/transaction_requests?currency[]&#x3D;USD&#x60;
     * @param {String} opts.createdAtFrom Returns transaction requests with specified created_at lower limit.  Example: &#x60;/v1/transaction_requests?created_at_from&#x3D;2018-06-09&#x60;
     * @param {String} opts.createdAtTo Returns transaction requests with specified created_at upper limit.  Example: &#x60;/v1/transaction_requests?created_at_to&#x3D;2018-06-08&#x60;
     * @param {String} opts.amountFrom Returns transaction requests with specified amount lower limit.  Example: &#x60;/v1/transaction_requests?currency&#x3D;NGN&amp;amount_from&#x3D;2.4319983&#x60;
     * @param {String} opts.amountTo Returns transaction requests with specified amount upper limit.  Example: &#x60;/v1/transaction_requests?currency&#x3D;NGN&amp;amount_to&#x3D;2.4319985&#x60;
     * @param {String} opts.senderId Returns transaction requests for the specified sender.  Example: &#x60;/v1/transaction_requests?sender_id&#x3D;b41d3cb7-6c54-4245-85fc-8e30690eb0f7&#x60;
     * @param {Boolean} opts.versioned If false is passed, returns Transaction requests containing not cached Transaction objects  Example: &#x60;/v1/transaction_requests?versioned&#x3D;false&#x60;
     * @param {Array.<String>} opts.tag Returns transaction requests with the specified tag(s). Tags are optional labels assigned to transaction requests for organizational purposes  Example: &#x60;/v1/transaction_requests?tag[]&#x3D;square&#x60;
     * @param {Array.<String>} opts.ids Returns transaction requests with the specified id(s). This allows the fetching of multiple transaction requests by ids for efficiency  Example: &#x60;/v1/transaction_requests?ids[]&#x3D;b41d3cb7-6c54-4245-85fc-8e30690eb0f7&#x60;
     * @param {Array.<String>} opts.included Returns transaction requests with the specified payout currencies.  Example: &#x60;/v1/transaction_requests?included[]&#x3D;KES&#x60;
     * @param {Array.<String>} opts.excluded Returns transaction requests without the specified payout currencies.  Example: &#x60;/v1/transaction_requests?excluded[]&#x3D;KES&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/TransactionReqListResponse} and HTTP response
     */
    getTransactionRequestsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'per': opts['per'],
        'state': this.apiClient.buildCollectionParam(opts['state'], 'multi'),
        'currency': this.apiClient.buildCollectionParam(opts['currency'], 'multi'),
        'created_at_from': opts['createdAtFrom'],
        'created_at_to': opts['createdAtTo'],
        'amount_from': opts['amountFrom'],
        'amount_to': opts['amountTo'],
        'sender_id': opts['senderId'],
        'versioned': opts['versioned'],
        'tag': this.apiClient.buildCollectionParam(opts['tag'], 'multi'),
        'ids': this.apiClient.buildCollectionParam(opts['ids'], 'multi'),
        'included': this.apiClient.buildCollectionParam(opts['included'], 'multi'),
        'excluded': this.apiClient.buildCollectionParam(opts['excluded'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AuthorizationKey', 'AuthorizationNonce', 'AuthorizationSecret', 'AuthorizationSignature'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TransactionReqListResponse;

      return this.apiClient.callApi(
        '/transaction_requests', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Listing transaction requests
     * Get a list of transaction requests
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page number to request (defaults to 1)
     * @param {Number} opts.per The number of results to load per page (defaults to 10)
     * @param {Array.<String>} opts.state Returns transaction requests with specified states.  Example: &#x60;/v1/transaction_requests?state[]&#x3D;pending&amp;state[]&#x3D;modified&#x60;
     * @param {Array.<String>} opts.currency Returns transaction requests with specified input_currency.  Example: &#x60;/v1/transaction_requests?currency[]&#x3D;USD&#x60;
     * @param {String} opts.createdAtFrom Returns transaction requests with specified created_at lower limit.  Example: &#x60;/v1/transaction_requests?created_at_from&#x3D;2018-06-09&#x60;
     * @param {String} opts.createdAtTo Returns transaction requests with specified created_at upper limit.  Example: &#x60;/v1/transaction_requests?created_at_to&#x3D;2018-06-08&#x60;
     * @param {String} opts.amountFrom Returns transaction requests with specified amount lower limit.  Example: &#x60;/v1/transaction_requests?currency&#x3D;NGN&amp;amount_from&#x3D;2.4319983&#x60;
     * @param {String} opts.amountTo Returns transaction requests with specified amount upper limit.  Example: &#x60;/v1/transaction_requests?currency&#x3D;NGN&amp;amount_to&#x3D;2.4319985&#x60;
     * @param {String} opts.senderId Returns transaction requests for the specified sender.  Example: &#x60;/v1/transaction_requests?sender_id&#x3D;b41d3cb7-6c54-4245-85fc-8e30690eb0f7&#x60;
     * @param {Boolean} opts.versioned If false is passed, returns Transaction requests containing not cached Transaction objects  Example: &#x60;/v1/transaction_requests?versioned&#x3D;false&#x60;
     * @param {Array.<String>} opts.tag Returns transaction requests with the specified tag(s). Tags are optional labels assigned to transaction requests for organizational purposes  Example: &#x60;/v1/transaction_requests?tag[]&#x3D;square&#x60;
     * @param {Array.<String>} opts.ids Returns transaction requests with the specified id(s). This allows the fetching of multiple transaction requests by ids for efficiency  Example: &#x60;/v1/transaction_requests?ids[]&#x3D;b41d3cb7-6c54-4245-85fc-8e30690eb0f7&#x60;
     * @param {Array.<String>} opts.included Returns transaction requests with the specified payout currencies.  Example: &#x60;/v1/transaction_requests?included[]&#x3D;KES&#x60;
     * @param {Array.<String>} opts.excluded Returns transaction requests without the specified payout currencies.  Example: &#x60;/v1/transaction_requests?excluded[]&#x3D;KES&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/TransactionReqListResponse}
     */
    getTransactionRequests(opts) {
      return this.getTransactionRequestsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creating a transaction request
     * Creates a new transaction request 
     * @param {module:Model/TransactionReqRequest} transactionReqRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/TransactionReqResponse} and HTTP response
     */
    postTransactionRequestWithHttpInfo(transactionReqRequest) {
      let postBody = transactionReqRequest;

      // verify the required parameter 'transactionReqRequest' is set
      if (transactionReqRequest === undefined || transactionReqRequest === null) {
        throw new Error("Missing the required parameter 'transactionReqRequest' when calling postTransactionRequest");
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
      let returnType = TransactionReqResponse;

      return this.apiClient.callApi(
        '/transaction_requests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creating a transaction request
     * Creates a new transaction request 
     * @param {module:Model/TransactionReqRequest} transactionReqRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/TransactionReqResponse}
     */
    postTransactionRequest(transactionReqRequest) {
      return this.postTransactionRequestWithHttpInfo(transactionReqRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Adding a document to a transaction request
     * Adds a new document to a transaction request 
     * @param {String} transactionRequestID ID of the transaction request to add the document.  Example: &#x60;/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670/documents/26ec8517-2f0d-48c0-b74f-0bccb9ab3a87/add&#x60;
     * @param {String} documentID The ID of the document to be added to the transaction request.  Example: &#x60;/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670/documents/26ec8517-2f0d-48c0-b74f-0bccb9ab3a87/add&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/DocumentResponse} and HTTP response
     */
    restfulAddDocumentTransactionRequestWithHttpInfo(transactionRequestID, documentID) {
      let postBody = null;

      // verify the required parameter 'transactionRequestID' is set
      if (transactionRequestID === undefined || transactionRequestID === null) {
        throw new Error("Missing the required parameter 'transactionRequestID' when calling restfulAddDocumentTransactionRequest");
      }

      // verify the required parameter 'documentID' is set
      if (documentID === undefined || documentID === null) {
        throw new Error("Missing the required parameter 'documentID' when calling restfulAddDocumentTransactionRequest");
      }


      let pathParams = {
        'Transaction Request ID': transactionRequestID,
        'Document ID': documentID
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
      let returnType = DocumentResponse;

      return this.apiClient.callApi(
        '/transaction_requests/{Transaction Request ID}/documents/{Document ID}/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Adding a document to a transaction request
     * Adds a new document to a transaction request 
     * @param {String} transactionRequestID ID of the transaction request to add the document.  Example: &#x60;/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670/documents/26ec8517-2f0d-48c0-b74f-0bccb9ab3a87/add&#x60;
     * @param {String} documentID The ID of the document to be added to the transaction request.  Example: &#x60;/v1/transaction_requests/bf9ff782-e182-45ac-abea-5bce83ad6670/documents/26ec8517-2f0d-48c0-b74f-0bccb9ab3a87/add&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/DocumentResponse}
     */
    restfulAddDocumentTransactionRequest(transactionRequestID, documentID) {
      return this.restfulAddDocumentTransactionRequestWithHttpInfo(transactionRequestID, documentID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Specifies the limits for transaction requests
     * Specifies the minimum and maximum limits for transaction requests
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/TransactionReqLimitsResponse} and HTTP response
     */
    transactionRequestLimitsWithHttpInfo() {
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
      let returnType = TransactionReqLimitsResponse;

      return this.apiClient.callApi(
        '/transaction_requests/limits', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Specifies the limits for transaction requests
     * Specifies the minimum and maximum limits for transaction requests
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/TransactionReqLimitsResponse}
     */
    transactionRequestLimits() {
      return this.transactionRequestLimitsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Validates a transaction request payload
     * Validates fields in a transaction request payload and displays invalid or missing fields
     * @param {module:Model/TransactionReqRequest} transactionReqRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/TransactionReqResponse} and HTTP response
     */
    validateTransactionRequestsWithHttpInfo(transactionReqRequest) {
      let postBody = transactionReqRequest;

      // verify the required parameter 'transactionReqRequest' is set
      if (transactionReqRequest === undefined || transactionReqRequest === null) {
        throw new Error("Missing the required parameter 'transactionReqRequest' when calling validateTransactionRequests");
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
      let returnType = TransactionReqResponse;

      return this.apiClient.callApi(
        '/transaction_requests/validate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Validates a transaction request payload
     * Validates fields in a transaction request payload and displays invalid or missing fields
     * @param {module:Model/TransactionReqRequest} transactionReqRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/TransactionReqResponse}
     */
    validateTransactionRequests(transactionReqRequest) {
      return this.validateTransactionRequestsWithHttpInfo(transactionReqRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
