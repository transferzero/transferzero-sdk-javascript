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
import ApiLogListResponse from '../Model/ApiLogListResponse';
import ApiLogResponse from '../Model/ApiLogResponse';

/**
* APILogs service.
* @module Api/APILogsApi
* @version 1.37.1
*/
export default class APILogsApi {

    /**
    * Constructs a new APILogsApi. 
    * @alias module:Api/APILogsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Fetch an individual API log
     * Returns a single API log based on the API log ID.
     * @param {String} aPILogID ID of the API log to retrieve  Example: `/v1/api_logs/00485ce9-532b-45e7-8518-7e5582242407`
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/ApiLogResponse} and HTTP response
     */
    getApiLogWithHttpInfo(aPILogID) {
      let postBody = null;
      // verify the required parameter 'aPILogID' is set
      if (aPILogID === undefined || aPILogID === null) {
        throw new Error("Missing the required parameter 'aPILogID' when calling getApiLog");
      }

      let pathParams = {
        'API Log ID': aPILogID
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
      let returnType = ApiLogResponse;
      return this.apiClient.callApi(
        '/api_logs/{API Log ID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fetch an individual API log
     * Returns a single API log based on the API log ID.
     * @param {String} aPILogID ID of the API log to retrieve  Example: `/v1/api_logs/00485ce9-532b-45e7-8518-7e5582242407`
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/ApiLogResponse}
     */
    getApiLog(aPILogID) {
      return this.getApiLogWithHttpInfo(aPILogID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetch a list of API logs
     * Returns a list of API logs. Also includes information relating to the original request.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page number to request (defaults to 1)
     * @param {Number} opts.per The number of results to load per page (defaults to 10)
     * @param {String} opts.createdAtFrom Start date to filter recipients by created_at range Allows filtering results by the specified `created_at` timeframe.  Example: `/v1/recipients?created_at_from=2018-06-06&created_at_to=2018-06-08`
     * @param {String} opts.createdAtTo End date to filter recipients by created_at range Allows filtering results by the specified `created_at` timeframe.  Example: `/v1/recipients?created_at_from=2018-06-06&created_at_to=2018-06-08`
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/ApiLogListResponse} and HTTP response
     */
    getApiLogsWithHttpInfo(opts) {
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
      let returnType = ApiLogListResponse;
      return this.apiClient.callApi(
        '/api_logs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Fetch a list of API logs
     * Returns a list of API logs. Also includes information relating to the original request.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page number to request (defaults to 1)
     * @param {Number} opts.per The number of results to load per page (defaults to 10)
     * @param {String} opts.createdAtFrom Start date to filter recipients by created_at range Allows filtering results by the specified `created_at` timeframe.  Example: `/v1/recipients?created_at_from=2018-06-06&created_at_to=2018-06-08`
     * @param {String} opts.createdAtTo End date to filter recipients by created_at range Allows filtering results by the specified `created_at` timeframe.  Example: `/v1/recipients?created_at_from=2018-06-06&created_at_to=2018-06-08`
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/ApiLogListResponse}
     */
    getApiLogs(opts) {
      return this.getApiLogsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
