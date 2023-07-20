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
import SenderListResponse from '../Model/SenderListResponse';
import SenderRequest from '../Model/SenderRequest';
import SenderResponse from '../Model/SenderResponse';

/**
* Senders service.
* @module Api/SendersApi
* @version 1.28.2
*/
export default class SendersApi {

    /**
    * Constructs a new SendersApi. 
    * @alias module:Api/SendersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Deleting a sender
     * Deletes a single sender by the Sender ID
     * @param {String} senderID ID of the sender to delete.  Example: &#x60;/v1/senders/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/SenderResponse} and HTTP response
     */
    deleteSenderWithHttpInfo(senderID) {
      let postBody = null;

      // verify the required parameter 'senderID' is set
      if (senderID === undefined || senderID === null) {
        throw new Error("Missing the required parameter 'senderID' when calling deleteSender");
      }


      let pathParams = {
        'Sender ID': senderID
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
      let returnType = SenderResponse;

      return this.apiClient.callApi(
        '/senders/{Sender ID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Deleting a sender
     * Deletes a single sender by the Sender ID
     * @param {String} senderID ID of the sender to delete.  Example: &#x60;/v1/senders/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/SenderResponse}
     */
    deleteSender(senderID) {
      return this.deleteSenderWithHttpInfo(senderID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetching a sender
     * Returns a single sender by the Sender ID
     * @param {String} senderID ID of the sender to get.  Example: &#x60;/v1/senders/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/SenderResponse} and HTTP response
     */
    getSenderWithHttpInfo(senderID) {
      let postBody = null;

      // verify the required parameter 'senderID' is set
      if (senderID === undefined || senderID === null) {
        throw new Error("Missing the required parameter 'senderID' when calling getSender");
      }


      let pathParams = {
        'Sender ID': senderID
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
      let returnType = SenderResponse;

      return this.apiClient.callApi(
        '/senders/{Sender ID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fetching a sender
     * Returns a single sender by the Sender ID
     * @param {String} senderID ID of the sender to get.  Example: &#x60;/v1/senders/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/SenderResponse}
     */
    getSender(senderID) {
      return this.getSenderWithHttpInfo(senderID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Listing senders
     * Get a list of available senders
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page number to request (defaults to 1)
     * @param {Number} opts.per The number of results to load per page (defaults to 10)
     * @param {String} opts.createdAtFrom Start date to filter recipients by created_at range Allows filtering results by the specified &#x60;created_at&#x60; timeframe.  Example: &#x60;/v1/recipients?created_at_from&#x3D;2018-06-06&amp;created_at_to&#x3D;2018-06-08&#x60;
     * @param {String} opts.createdAtTo End date to filter recipients by created_at range Allows filtering results by the specified &#x60;created_at&#x60; timeframe.  Example: &#x60;/v1/recipients?created_at_from&#x3D;2018-06-06&amp;created_at_to&#x3D;2018-06-08&#x60;
     * @param {String} opts.externalId Allows filtering results by &#x60;external_id&#x60;.  Example: &#x60;/v1/senders?external_id&#x3D;26ec8517-2f0d-48c0-b74f-0bccb9ab3a87&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/SenderListResponse} and HTTP response
     */
    getSendersWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'per': opts['per'],
        'created_at_from': opts['createdAtFrom'],
        'created_at_to': opts['createdAtTo'],
        'external_id': opts['externalId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AuthorizationKey', 'AuthorizationNonce', 'AuthorizationSecret', 'AuthorizationSignature'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SenderListResponse;

      return this.apiClient.callApi(
        '/senders', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Listing senders
     * Get a list of available senders
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page number to request (defaults to 1)
     * @param {Number} opts.per The number of results to load per page (defaults to 10)
     * @param {String} opts.createdAtFrom Start date to filter recipients by created_at range Allows filtering results by the specified &#x60;created_at&#x60; timeframe.  Example: &#x60;/v1/recipients?created_at_from&#x3D;2018-06-06&amp;created_at_to&#x3D;2018-06-08&#x60;
     * @param {String} opts.createdAtTo End date to filter recipients by created_at range Allows filtering results by the specified &#x60;created_at&#x60; timeframe.  Example: &#x60;/v1/recipients?created_at_from&#x3D;2018-06-06&amp;created_at_to&#x3D;2018-06-08&#x60;
     * @param {String} opts.externalId Allows filtering results by &#x60;external_id&#x60;.  Example: &#x60;/v1/senders?external_id&#x3D;26ec8517-2f0d-48c0-b74f-0bccb9ab3a87&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/SenderListResponse}
     */
    getSenders(opts) {
      return this.getSendersWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updating a sender
     * Updates a single sender by the Sender ID
     * @param {String} senderID ID of the sender to get.  Example: &#x60;/v1/senders/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @param {module:Model/SenderRequest} senderRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/SenderResponse} and HTTP response
     */
    patchSenderWithHttpInfo(senderID, senderRequest) {
      let postBody = senderRequest;

      // verify the required parameter 'senderID' is set
      if (senderID === undefined || senderID === null) {
        throw new Error("Missing the required parameter 'senderID' when calling patchSender");
      }

      // verify the required parameter 'senderRequest' is set
      if (senderRequest === undefined || senderRequest === null) {
        throw new Error("Missing the required parameter 'senderRequest' when calling patchSender");
      }


      let pathParams = {
        'Sender ID': senderID
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
      let returnType = SenderResponse;

      return this.apiClient.callApi(
        '/senders/{Sender ID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Updating a sender
     * Updates a single sender by the Sender ID
     * @param {String} senderID ID of the sender to get.  Example: &#x60;/v1/senders/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @param {module:Model/SenderRequest} senderRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/SenderResponse}
     */
    patchSender(senderID, senderRequest) {
      return this.patchSenderWithHttpInfo(senderID, senderRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creating a sender
     * Creates a new sender in our system. 
     * @param {module:Model/SenderRequest} senderRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/SenderResponse} and HTTP response
     */
    postSendersWithHttpInfo(senderRequest) {
      let postBody = senderRequest;

      // verify the required parameter 'senderRequest' is set
      if (senderRequest === undefined || senderRequest === null) {
        throw new Error("Missing the required parameter 'senderRequest' when calling postSenders");
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
      let returnType = SenderResponse;

      return this.apiClient.callApi(
        '/senders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creating a sender
     * Creates a new sender in our system. 
     * @param {module:Model/SenderRequest} senderRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/SenderResponse}
     */
    postSenders(senderRequest) {
      return this.postSendersWithHttpInfo(senderRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
