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
import WebhookLogListResponse from '../Model/WebhookLogListResponse';
import WebhookLogResponse from '../Model/WebhookLogResponse';

/**
* Logs service.
* @module Api/LogsApi
* @version 1.36.4
*/
export default class LogsApi {

    /**
    * Constructs a new LogsApi. 
    * @alias module:Api/LogsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Fetch an individual webhook log
     * Returns a single webhook log based on the webhook log ID.
     * @param {String} webhookLogID ID of the webhook log to retrieve  Example: `/v1/logs/9d1ad631-f34a-4cff-9a7e-2c83e3a556df`
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/WebhookLogResponse} and HTTP response
     */
    getWebhookLogWithHttpInfo(webhookLogID) {
      let postBody = null;
      // verify the required parameter 'webhookLogID' is set
      if (webhookLogID === undefined || webhookLogID === null) {
        throw new Error("Missing the required parameter 'webhookLogID' when calling getWebhookLog");
      }

      let pathParams = {
        'Webhook Log ID': webhookLogID
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
      let returnType = WebhookLogResponse;
      return this.apiClient.callApi(
        '/logs/{Webhook Log ID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fetch an individual webhook log
     * Returns a single webhook log based on the webhook log ID.
     * @param {String} webhookLogID ID of the webhook log to retrieve  Example: `/v1/logs/9d1ad631-f34a-4cff-9a7e-2c83e3a556df`
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/WebhookLogResponse}
     */
    getWebhookLog(webhookLogID) {
      return this.getWebhookLogWithHttpInfo(webhookLogID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch a list of webhook logs
     * Returns a list of webhook logs. Response includes pagination.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page number to request (defaults to 1)
     * @param {Number} opts.per The number of results to load per page (defaults to 10)
     * @param {String} opts.createdAtFrom Start date to filter recipients by created_at range Allows filtering results by the specified `created_at` timeframe.  Example: `/v1/recipients?created_at_from=2018-06-06&created_at_to=2018-06-08`
     * @param {String} opts.createdAtTo End date to filter recipients by created_at range Allows filtering results by the specified `created_at` timeframe.  Example: `/v1/recipients?created_at_from=2018-06-06&created_at_to=2018-06-08`
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/WebhookLogListResponse} and HTTP response
     */
    getWebhookLogsWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'page': opts['page'],
        'per': opts['per'],
        'created_at_from': opts['createdAtFrom'],
        'created_at_to': opts['createdAtTo']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AuthorizationKey', 'AuthorizationNonce', 'AuthorizationSecret', 'AuthorizationSignature'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WebhookLogListResponse;
      return this.apiClient.callApi(
        '/logs/webhooks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fetch a list of webhook logs
     * Returns a list of webhook logs. Response includes pagination.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page number to request (defaults to 1)
     * @param {Number} opts.per The number of results to load per page (defaults to 10)
     * @param {String} opts.createdAtFrom Start date to filter recipients by created_at range Allows filtering results by the specified `created_at` timeframe.  Example: `/v1/recipients?created_at_from=2018-06-06&created_at_to=2018-06-08`
     * @param {String} opts.createdAtTo End date to filter recipients by created_at range Allows filtering results by the specified `created_at` timeframe.  Example: `/v1/recipients?created_at_from=2018-06-06&created_at_to=2018-06-08`
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/WebhookLogListResponse}
     */
    getWebhookLogs(opts) {
      return this.getWebhookLogsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
