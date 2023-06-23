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
import PaginationMeta from './PaginationMeta';
import WebhookLog from './WebhookLog';

/**
 * The WebhookLogListResponse model module.
 * @module Model/WebhookLogListResponse
 * @version 1.27.9
 */
class WebhookLogListResponse {
    /**
     * Constructs a new <code>WebhookLogListResponse</code>.
     * @alias module:Model/WebhookLogListResponse
     */
    constructor() { 
        
        WebhookLogListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookLogListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/WebhookLogListResponse} obj Optional instance to populate.
     * @return {module:Model/WebhookLogListResponse} The populated <code>WebhookLogListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookLogListResponse();

            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], [WebhookLog]);
            }
            if (data.hasOwnProperty('meta')) {
                obj['meta'] = PaginationMeta.constructFromObject(data['meta']);
            }
        }
        return obj;
    }


}

/**
 * Array of webhook log objects
 * @member {Array.<module:Model/WebhookLog>} object
 */
WebhookLogListResponse.prototype['object'] = undefined;

/**
 * @member {module:Model/PaginationMeta} meta
 */
WebhookLogListResponse.prototype['meta'] = undefined;






export default WebhookLogListResponse;

