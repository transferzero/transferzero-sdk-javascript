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
import WebhookLog from './WebhookLog';

/**
 * The WebhookLogResponse model module.
 * @module Model/WebhookLogResponse
 * @version 1.2.0
 */
class WebhookLogResponse {
    /**
     * Constructs a new <code>WebhookLogResponse</code>.
     * @alias module:Model/WebhookLogResponse
     */
    constructor() { 
        
        WebhookLogResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookLogResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/WebhookLogResponse} obj Optional instance to populate.
     * @return {module:Model/WebhookLogResponse} The populated <code>WebhookLogResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookLogResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = WebhookLog.constructFromObject(data['object']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:Model/WebhookLog} object
 */
WebhookLogResponse.prototype['object'] = undefined;






export default WebhookLogResponse;

