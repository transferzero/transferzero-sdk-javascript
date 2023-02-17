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
import PoliticallyExposedPerson from '../Model/PoliticallyExposedPerson';
import PoliticallyExposedPersonListResponse from '../Model/PoliticallyExposedPersonListResponse';
import PoliticallyExposedPersonResponse from '../Model/PoliticallyExposedPersonResponse';

/**
* PoliticallyExposedPeople service.
* @module Api/PoliticallyExposedPeopleApi
* @version 1.24.0
*/
export default class PoliticallyExposedPeopleApi {

    /**
    * Constructs a new PoliticallyExposedPeopleApi. 
    * @alias module:Api/PoliticallyExposedPeopleApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Deleting a politically exposed person
     * Deletes a single politically exposed person given the PEP ID.
     * @param {Number} politicallyExposedPersonID The ID of the Politically Exposed Person you want to delete.  Example: &#x60;/v1/politically_exposed_people/1&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deletePoliticallyExposedPersonWithHttpInfo(politicallyExposedPersonID) {
      let postBody = null;

      // verify the required parameter 'politicallyExposedPersonID' is set
      if (politicallyExposedPersonID === undefined || politicallyExposedPersonID === null) {
        throw new Error("Missing the required parameter 'politicallyExposedPersonID' when calling deletePoliticallyExposedPerson");
      }


      let pathParams = {
        'PoliticallyExposedPerson ID': politicallyExposedPersonID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AuthorizationKey', 'AuthorizationNonce', 'AuthorizationSecret', 'AuthorizationSignature'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/politically_exposed_people/{PoliticallyExposedPerson ID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Deleting a politically exposed person
     * Deletes a single politically exposed person given the PEP ID.
     * @param {Number} politicallyExposedPersonID The ID of the Politically Exposed Person you want to delete.  Example: &#x60;/v1/politically_exposed_people/1&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deletePoliticallyExposedPerson(politicallyExposedPersonID) {
      return this.deletePoliticallyExposedPersonWithHttpInfo(politicallyExposedPersonID)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Listing Politically Exposed People
     * Get a list of politically exposed people
     * @param {Object} opts Optional parameters
     * @param {String} opts.senderId The ID of the Sender to whom the politically exposed people are attached to.  Example: &#x60;/v1/politically_exposed_people?sender_id&#x3D;344fb668-196d-43db-9d94-b34b7e6c7e0b&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/PoliticallyExposedPersonListResponse} and HTTP response
     */
    getPoliticallyExposedPeopleWithHttpInfo(opts) {
      opts = opts || {};
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
        'sender_id': opts['senderId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AuthorizationKey', 'AuthorizationNonce', 'AuthorizationSecret', 'AuthorizationSignature'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PoliticallyExposedPersonListResponse;

      return this.apiClient.callApi(
        '/politically_exposed_people', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Listing Politically Exposed People
     * Get a list of politically exposed people
     * @param {Object} opts Optional parameters
     * @param {String} opts.senderId The ID of the Sender to whom the politically exposed people are attached to.  Example: &#x60;/v1/politically_exposed_people?sender_id&#x3D;344fb668-196d-43db-9d94-b34b7e6c7e0b&#x60;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/PoliticallyExposedPersonListResponse}
     */
    getPoliticallyExposedPeople(opts) {
      return this.getPoliticallyExposedPeopleWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Fetching a politically exposed person
     * Returns a single politically exposed person given the PEP ID. Can optionally be filtered using the sender_id query parameter.
     * @param {Number} politicallyExposedPersonID The ID of the Politically Exposed Person you want to retrieve.  Example: &#x60;/v1/politically_exposed_people/1?sender_id&#x3D;344fb668-196d-43db-9d94-b34b7e6c7e0b&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.senderId The ID of the Sender to whom the politically exposed person is attached to.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/PoliticallyExposedPersonResponse} and HTTP response
     */
    getPoliticallyExposedPersonWithHttpInfo(politicallyExposedPersonID, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'politicallyExposedPersonID' is set
      if (politicallyExposedPersonID === undefined || politicallyExposedPersonID === null) {
        throw new Error("Missing the required parameter 'politicallyExposedPersonID' when calling getPoliticallyExposedPerson");
      }


      let pathParams = {
        'PoliticallyExposedPerson ID': politicallyExposedPersonID
      };
      let queryParams = {
        'sender_id': opts['senderId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['AuthorizationKey', 'AuthorizationNonce', 'AuthorizationSecret', 'AuthorizationSignature'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PoliticallyExposedPersonResponse;

      return this.apiClient.callApi(
        '/politically_exposed_people/{PoliticallyExposedPerson ID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Fetching a politically exposed person
     * Returns a single politically exposed person given the PEP ID. Can optionally be filtered using the sender_id query parameter.
     * @param {Number} politicallyExposedPersonID The ID of the Politically Exposed Person you want to retrieve.  Example: &#x60;/v1/politically_exposed_people/1?sender_id&#x3D;344fb668-196d-43db-9d94-b34b7e6c7e0b&#x60;
     * @param {Object} opts Optional parameters
     * @param {String} opts.senderId The ID of the Sender to whom the politically exposed person is attached to.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/PoliticallyExposedPersonResponse}
     */
    getPoliticallyExposedPerson(politicallyExposedPersonID, opts) {
      return this.getPoliticallyExposedPersonWithHttpInfo(politicallyExposedPersonID, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updating a politically exposed person
     * Updates a single politically exposed person given the PEP ID.
     * @param {Number} politicallyExposedPersonID The ID of the Politically Exposed Person you want to update.  Example: &#x60;/v1/politically_exposed_people/1&#x60;
     * @param {module:Model/PoliticallyExposedPerson} politicallyExposedPerson 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/PoliticallyExposedPersonResponse} and HTTP response
     */
    patchPoliticallyExposedPersonWithHttpInfo(politicallyExposedPersonID, politicallyExposedPerson) {
      let postBody = politicallyExposedPerson;

      // verify the required parameter 'politicallyExposedPersonID' is set
      if (politicallyExposedPersonID === undefined || politicallyExposedPersonID === null) {
        throw new Error("Missing the required parameter 'politicallyExposedPersonID' when calling patchPoliticallyExposedPerson");
      }

      // verify the required parameter 'politicallyExposedPerson' is set
      if (politicallyExposedPerson === undefined || politicallyExposedPerson === null) {
        throw new Error("Missing the required parameter 'politicallyExposedPerson' when calling patchPoliticallyExposedPerson");
      }


      let pathParams = {
        'PoliticallyExposedPerson ID': politicallyExposedPersonID
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
      let returnType = PoliticallyExposedPersonResponse;

      return this.apiClient.callApi(
        '/politically_exposed_people/{PoliticallyExposedPerson ID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Updating a politically exposed person
     * Updates a single politically exposed person given the PEP ID.
     * @param {Number} politicallyExposedPersonID The ID of the Politically Exposed Person you want to update.  Example: &#x60;/v1/politically_exposed_people/1&#x60;
     * @param {module:Model/PoliticallyExposedPerson} politicallyExposedPerson 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/PoliticallyExposedPersonResponse}
     */
    patchPoliticallyExposedPerson(politicallyExposedPersonID, politicallyExposedPerson) {
      return this.patchPoliticallyExposedPersonWithHttpInfo(politicallyExposedPersonID, politicallyExposedPerson)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Creating a politically exposed person
     * Creates a new politically exposed person in our system. 
     * @param {module:Model/PoliticallyExposedPerson} politicallyExposedPerson 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:Model/PoliticallyExposedPersonResponse} and HTTP response
     */
    postPoliticallyExposedPeopleWithHttpInfo(politicallyExposedPerson) {
      let postBody = politicallyExposedPerson;

      // verify the required parameter 'politicallyExposedPerson' is set
      if (politicallyExposedPerson === undefined || politicallyExposedPerson === null) {
        throw new Error("Missing the required parameter 'politicallyExposedPerson' when calling postPoliticallyExposedPeople");
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
      let returnType = PoliticallyExposedPersonResponse;

      return this.apiClient.callApi(
        '/politically_exposed_people', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Creating a politically exposed person
     * Creates a new politically exposed person in our system. 
     * @param {module:Model/PoliticallyExposedPerson} politicallyExposedPerson 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:Model/PoliticallyExposedPersonResponse}
     */
    postPoliticallyExposedPeople(politicallyExposedPerson) {
      return this.postPoliticallyExposedPeopleWithHttpInfo(politicallyExposedPerson)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
