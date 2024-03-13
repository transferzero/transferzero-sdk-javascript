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
import WebhookLogMetadata from './WebhookLogMetadata';

/**
 * The WebhookLog model module.
 * @module Model/WebhookLog
 * @version 1.34.3
 */
class WebhookLog {
    /**
     * Constructs a new <code>WebhookLog</code>.
     * @alias module:Model/WebhookLog
     */
    constructor() { 
        
        WebhookLog.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebhookLog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:Model/WebhookLog} obj Optional instance to populate.
     * @return {module:Model/WebhookLog} The populated <code>WebhookLog</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebhookLog();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = WebhookLogMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('parent_id')) {
                obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'String');
            }
            if (data.hasOwnProperty('parent_type')) {
                obj['parent_type'] = ApiClient.convertToType(data['parent_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * ID of the webhook log
 * @member {String} id
 */
WebhookLog.prototype['id'] = undefined;

/**
 * Message detailing webhook event
 * @member {String} message
 */
WebhookLog.prototype['message'] = undefined;

/**
 * @member {module:Model/WebhookLogMetadata} metadata
 */
WebhookLog.prototype['metadata'] = undefined;

/**
 * Date and time of response
 * @member {String} created_at
 */
WebhookLog.prototype['created_at'] = undefined;

/**
 * @member {String} parent_id
 */
WebhookLog.prototype['parent_id'] = undefined;

/**
 * @member {String} parent_type
 */
WebhookLog.prototype['parent_type'] = undefined;






export default WebhookLog;

