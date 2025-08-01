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

import ApiClient from '../ApiClient';

/**
 * The WebhookLogMetadataRequest model module.
 * @module Model/WebhookLogMetadataRequest
 * @version 1.37.1
 */
class WebhookLogMetadataRequest {
    /**
     * Constructs a new <code>WebhookLogMetadataRequest</code>.
     * Metadata related to the initial request that triggered the webhook
     * @alias module:Model/WebhookLogMetadataRequest
     */
    constructor() { 
        
        WebhookLogMetadataRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookLogMetadataRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/WebhookLogMetadataRequest} obj Optional instance to populate.
     * @return {module:Model/WebhookLogMetadataRequest} The populated <code>WebhookLogMetadataRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookLogMetadataRequest();

            if (data.hasOwnProperty('headers')) {
                obj['headers'] = ApiClient.convertToType(data['headers'], {'String': 'String'});
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, String>} headers
 */
WebhookLogMetadataRequest.prototype['headers'] = undefined;

/**
 * The body that was sent in the webhook
 * @member {String} body
 */
WebhookLogMetadataRequest.prototype['body'] = undefined;

/**
 * Webhook URL
 * @member {String} url
 */
WebhookLogMetadataRequest.prototype['url'] = undefined;






export default WebhookLogMetadataRequest;

