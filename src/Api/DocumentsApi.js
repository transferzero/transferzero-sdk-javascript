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
import DocumentListResponse from '../Model/DocumentListResponse';
import DocumentRequest from '../Model/DocumentRequest';
import DocumentResponse from '../Model/DocumentResponse';

/**
* Documents service.
* @module Api/DocumentsApi
* @version 1.18.0
*/
export default class DocumentsApi {

    /**
    * Constructs a new DocumentsApi. 
    * @alias module:Api/DocumentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Fetching a document
     * Returns a single document by the Documents ID
     * @param {String} documentID ID of the document to get.  Example: &#x60;/v1/documents/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/DocumentResponse} and HTTP response
     */
    getDocumentWithHttpInfo(documentID) {
      let postBody = null;

      // verify the required parameter 'documentID' is set
      if (documentID === undefined || documentID === null) {
        throw new Error("Missing the required parameter 'documentID' when calling getDocument");
      }


      let pathParams = {
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
        '/documents/{Document ID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fetching a document
     * Returns a single document by the Documents ID
     * @param {String} documentID ID of the document to get.  Example: &#x60;/v1/documents/bf9ff782-e182-45ac-abea-5bce83ad6670&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/DocumentResponse}
     */
    getDocument(documentID) {
      return this.getDocumentWithHttpInfo(documentID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Getting a list of documents
     * Fetches a list of documents.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page number to request (defaults to 1)
     * @param {Number} opts.per The number of results to load per page (defaults to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/DocumentListResponse} and HTTP response
     */
    getDocumentsWithHttpInfo(opts) {
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
      let returnType = DocumentListResponse;

      return this.apiClient.callApi(
        '/documents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Getting a list of documents
     * Fetches a list of documents.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page The page number to request (defaults to 1)
     * @param {Number} opts.per The number of results to load per page (defaults to 10)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/DocumentListResponse}
     */
    getDocuments(opts) {
      return this.getDocumentsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creating a document
     * Creates a new document
     * @param {module:Model/DocumentRequest} documentRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/DocumentResponse} and HTTP response
     */
    postDocumentsWithHttpInfo(documentRequest) {
      let postBody = documentRequest;

      // verify the required parameter 'documentRequest' is set
      if (documentRequest === undefined || documentRequest === null) {
        throw new Error("Missing the required parameter 'documentRequest' when calling postDocuments");
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
      let returnType = DocumentResponse;

      return this.apiClient.callApi(
        '/documents', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creating a document
     * Creates a new document
     * @param {module:Model/DocumentRequest} documentRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/DocumentResponse}
     */
    postDocuments(documentRequest) {
      return this.postDocumentsWithHttpInfo(documentRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
