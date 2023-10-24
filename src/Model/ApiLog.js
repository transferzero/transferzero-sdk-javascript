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

import ApiClient from '../ApiClient';

/**
 * The ApiLog model module.
 * @module Model/ApiLog
 * @version 1.31.0
 */
class ApiLog {
    /**
     * Constructs a new <code>ApiLog</code>.
     * The response object returned with requests to access individual API logs 
     * @alias module:Model/ApiLog
     */
    constructor() { 
        
        ApiLog.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ApiLog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/ApiLog} obj Optional instance to populate.
     * @return {module:Model/ApiLog} The populated <code>ApiLog</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApiLog();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('request_method')) {
                obj['request_method'] = ApiClient.convertToType(data['request_method'], 'String');
            }
            if (data.hasOwnProperty('request_url')) {
                obj['request_url'] = ApiClient.convertToType(data['request_url'], 'String');
            }
            if (data.hasOwnProperty('request_body')) {
                obj['request_body'] = ApiClient.convertToType(data['request_body'], 'String');
            }
            if (data.hasOwnProperty('request_headers')) {
                obj['request_headers'] = ApiClient.convertToType(data['request_headers'], {'String': 'String'});
            }
            if (data.hasOwnProperty('response_status')) {
                obj['response_status'] = ApiClient.convertToType(data['response_status'], 'String');
            }
            if (data.hasOwnProperty('response_body')) {
                obj['response_body'] = ApiClient.convertToType(data['response_body'], 'String');
            }
            if (data.hasOwnProperty('response_headers')) {
                obj['response_headers'] = ApiClient.convertToType(data['response_headers'], {'String': 'String'});
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
        }
        return obj;
    }


}

/**
 * ID of the API log
 * @member {String} id
 */
ApiLog.prototype['id'] = undefined;

/**
 * Initial HTTP request method
 * @member {String} request_method
 */
ApiLog.prototype['request_method'] = undefined;

/**
 * URL to which initial request was sent
 * @member {String} request_url
 */
ApiLog.prototype['request_url'] = undefined;

/**
 * Body sent with initial request returned as a string
 * @member {String} request_body
 */
ApiLog.prototype['request_body'] = undefined;

/**
 * Authorization and access information sent with initial request
 * @member {Object.<String, String>} request_headers
 */
ApiLog.prototype['request_headers'] = undefined;

/**
 * Status of response
 * @member {String} response_status
 */
ApiLog.prototype['response_status'] = undefined;

/**
 * Full response body returned as a string
 * @member {String} response_body
 */
ApiLog.prototype['response_body'] = undefined;

/**
 * Headers returned with response
 * @member {Object.<String, String>} response_headers
 */
ApiLog.prototype['response_headers'] = undefined;

/**
 * Date and time of response
 * @member {String} created_at
 */
ApiLog.prototype['created_at'] = undefined;






export default ApiLog;

