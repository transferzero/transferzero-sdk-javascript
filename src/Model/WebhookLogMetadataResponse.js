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
 * The WebhookLogMetadataResponse model module.
 * @module Model/WebhookLogMetadataResponse
 * @version 1.2.0
 */
class WebhookLogMetadataResponse {
    /**
     * Constructs a new <code>WebhookLogMetadataResponse</code>.
     * Metadata related to the webhook response
     * @alias module:Model/WebhookLogMetadataResponse
     */
    constructor() { 
        
        WebhookLogMetadataResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookLogMetadataResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/WebhookLogMetadataResponse} obj Optional instance to populate.
     * @return {module:Model/WebhookLogMetadataResponse} The populated <code>WebhookLogMetadataResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookLogMetadataResponse();

            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], {'String': 'String'});
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Full body of response
 * @member {String} body
 */
WebhookLogMetadataResponse.prototype['body'] = undefined;

/**
 * Headers delivered with webhook response
 * @member {Object.<String, String>} headers
 */
WebhookLogMetadataResponse.prototype['headers'] = undefined;

/**
 * Status of response
 * @member {String} status
 */
WebhookLogMetadataResponse.prototype['status'] = undefined;






export default WebhookLogMetadataResponse;
