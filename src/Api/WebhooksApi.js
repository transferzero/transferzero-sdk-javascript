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
import WebhookDefinitionEventListResponse from '../Model/WebhookDefinitionEventListResponse';
import WebhookDefinitionListResponse from '../Model/WebhookDefinitionListResponse';
import WebhookDefinitionRequest from '../Model/WebhookDefinitionRequest';
import WebhookDefinitionResponse from '../Model/WebhookDefinitionResponse';

/**
* Webhooks service.
* @module Api/WebhooksApi
* @version 1.23.3
*/
export default class WebhooksApi {

    /**
    * Constructs a new WebhooksApi. 
    * @alias module:Api/WebhooksApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Unsubscribing from a webhook
     * Unsubscribes from a webhook specified
     * @param {String} webhookID The ID of webhook to cancel.  Example: &#x60;/v1/webhooks/9d4d7b73-a94c-4979-ab57-09074fd55d33&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/WebhookDefinitionResponse} and HTTP response
     */
    deleteWebhookWithHttpInfo(webhookID) {
      let postBody = null;

      // verify the required parameter 'webhookID' is set
      if (webhookID === undefined || webhookID === null) {
        throw new Error("Missing the required parameter 'webhookID' when calling deleteWebhook");
      }


      let pathParams = {
        'Webhook ID': webhookID
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
      let returnType = WebhookDefinitionResponse;

      return this.apiClient.callApi(
        '/webhooks/{Webhook ID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Unsubscribing from a webhook
     * Unsubscribes from a webhook specified
     * @param {String} webhookID The ID of webhook to cancel.  Example: &#x60;/v1/webhooks/9d4d7b73-a94c-4979-ab57-09074fd55d33&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/WebhookDefinitionResponse}
     */
    deleteWebhook(webhookID) {
      return this.deleteWebhookWithHttpInfo(webhookID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find a webhook&#39;s details
     * Look up a webhook&#39;s details with its ID
     * @param {String} webhookID The ID of the Webhook to look up  Example: &#x60;/v1/webhooks/9d4d7b73-a94c-4979-ab57-09074fd55d33&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/WebhookDefinitionResponse} and HTTP response
     */
    getWebhookWithHttpInfo(webhookID) {
      let postBody = null;

      // verify the required parameter 'webhookID' is set
      if (webhookID === undefined || webhookID === null) {
        throw new Error("Missing the required parameter 'webhookID' when calling getWebhook");
      }


      let pathParams = {
        'Webhook ID': webhookID
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
      let returnType = WebhookDefinitionResponse;

      return this.apiClient.callApi(
        '/webhooks/{Webhook ID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Find a webhook&#39;s details
     * Look up a webhook&#39;s details with its ID
     * @param {String} webhookID The ID of the Webhook to look up  Example: &#x60;/v1/webhooks/9d4d7b73-a94c-4979-ab57-09074fd55d33&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/WebhookDefinitionResponse}
     */
    getWebhook(webhookID) {
      return this.getWebhookWithHttpInfo(webhookID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find possible webhook events
     * Fetching possible webhook events
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/WebhookDefinitionEventListResponse} and HTTP response
     */
    getWebhookEventsWithHttpInfo() {
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
      let returnType = WebhookDefinitionEventListResponse;

      return this.apiClient.callApi(
        '/webhooks/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Find possible webhook events
     * Fetching possible webhook events
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/WebhookDefinitionEventListResponse}
     */
    getWebhookEvents() {
      return this.getWebhookEventsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Listing webhooks
     * Get a list of created webhooks
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page number to request (defaults to 1)
     * @param {Number} opts.per The number of results to load per page (defaults to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/WebhookDefinitionListResponse} and HTTP response
     */
    getWebhooksWithHttpInfo(opts) {
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
      let returnType = WebhookDefinitionListResponse;

      return this.apiClient.callApi(
        '/webhooks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Listing webhooks
     * Get a list of created webhooks
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page number to request (defaults to 1)
     * @param {Number} opts.per The number of results to load per page (defaults to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/WebhookDefinitionListResponse}
     */
    getWebhooks(opts) {
      return this.getWebhooksWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creating a webhook
     * Creates a new webhook, subscribing the provided endpoint to the specified event(s) 
     * @param {module:Model/WebhookDefinitionRequest} webhookDefinitionRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/WebhookDefinitionResponse} and HTTP response
     */
    postWebhooksWithHttpInfo(webhookDefinitionRequest) {
      let postBody = webhookDefinitionRequest;

      // verify the required parameter 'webhookDefinitionRequest' is set
      if (webhookDefinitionRequest === undefined || webhookDefinitionRequest === null) {
        throw new Error("Missing the required parameter 'webhookDefinitionRequest' when calling postWebhooks");
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
      let returnType = WebhookDefinitionResponse;

      return this.apiClient.callApi(
        '/webhooks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creating a webhook
     * Creates a new webhook, subscribing the provided endpoint to the specified event(s) 
     * @param {module:Model/WebhookDefinitionRequest} webhookDefinitionRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/WebhookDefinitionResponse}
     */
    postWebhooks(webhookDefinitionRequest) {
      return this.postWebhooksWithHttpInfo(webhookDefinitionRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
